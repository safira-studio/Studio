import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  scrollSensitivity?: number;
  children: ReactNode;
  onAllCardsRemoved?: () => void;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  scrollSensitivity = 150,
  children,
  onAllCardsRemoved,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 1.5,
          durMove: 1.5,
          durReturn: 1.5,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.6,
          durMove: 0.6,
          durReturn: 0.6,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const [activeCards, setActiveCards] = useState<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i)
  );
  const [removedCards, setRemovedCards] = useState<Set<number>>(new Set());
  const [isInCardSection, setIsInCardSection] = useState(false);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);
  const isAnimating = useRef(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      // Set section height to ensure enough scrollable space
      // Each card removal requires some scroll distance
      const minHeight =
        window.innerHeight + activeCards.length * scrollSensitivity;
      sectionRef.current.style.minHeight = `${minHeight}px`;
    }
  }, [activeCards.length, scrollSensitivity]);

  useEffect(() => {
    const total = activeCards.length;
    activeCards.forEach((cardIndex, stackPosition) => {
      const ref = refs[cardIndex];
      if (ref.current && !removedCards.has(cardIndex)) {
        const slot = makeSlot(
          stackPosition,
          cardDistance,
          verticalDistance,
          total
        );
        // Apply subtle parallax effect based on scroll offset
        const parallaxScale = 1 - stackPosition * 0.02; // Scale down slightly for depth
        const parallaxY = slot.y + scrollOffset * 0.1 * (stackPosition + 1); // Subtle Y movement
        gsap.set(ref.current, {
          ...slot,
          xPercent: -50,
          yPercent: -50,
          skewY: skewAmount,
          transformOrigin: "center center",
          zIndex: slot.zIndex,
          scale: parallaxScale,
          y: parallaxY,
          force3D: true,
        });
      }
    });

    const removeCard = () => {
      if (activeCards.length === 1 || isAnimating.current) return;

      isAnimating.current = true;
      const frontCardIndex = activeCards[0];
      const elFront = refs[frontCardIndex].current!;
      const remainingCards = activeCards.slice(1);

      const tl = gsap.timeline();
      tlRef.current = tl;

      // Animate front card disappearing (fade out and scale down)
      tl.to(elFront, {
        opacity: 0,
        scale: 0.8,
        y: "+=200",
        rotation: 15,
        duration: config.durDrop,
        ease: config.ease,
      });

      // Promote remaining cards
      if (remainingCards.length > 0) {
        tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
        remainingCards.forEach((cardIndex, i) => {
          const el = refs[cardIndex].current!;
          const slot = makeSlot(
            i,
            cardDistance,
            verticalDistance,
            remainingCards.length
          );
          tl.set(el, { zIndex: slot.zIndex }, "promote");
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease,
            },
            `promote+=${i * 0.1}`
          );
        });
      }

      tl.call(() => {
        // Remove the card from active cards and add to removed set
        setActiveCards(remainingCards);
        setRemovedCards((prev) => new Set([...prev, frontCardIndex]));

        // Hide the removed card completely
        gsap.set(elFront, { display: "none" });

        // Check if all cards are removed
        if (remainingCards.length === 0) {
          onAllCardsRemoved?.();
        }

        isAnimating.current = false;
      });
    };

    const restoreCard = () => {
      if (removedCards.size === 0 || isAnimating.current) return;

      isAnimating.current = true;

      // Get the most recently removed card
      const removedArray = Array.from(removedCards);
      const lastRemovedIndex = removedArray[removedArray.length - 1];
      const elRestore = refs[lastRemovedIndex].current!;

      const tl = gsap.timeline();
      tlRef.current = tl;

      // Move existing cards back
      if (activeCards.length > 0) {
        tl.addLabel("demote");
        activeCards.forEach((cardIndex, i) => {
          const el = refs[cardIndex].current!;
          const slot = makeSlot(
            i + 1,
            cardDistance,
            verticalDistance,
            activeCards.length + 1
          );
          tl.set(el, { zIndex: slot.zIndex }, "demote");
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease,
            },
            `demote+=${i * 0.1}`
          );
        });
      }

      // Restore the card to front position
      const frontSlot = makeSlot(
        0,
        cardDistance,
        verticalDistance,
        activeCards.length + 1
      );
      tl.addLabel(
        "restore",
        activeCards.length > 0
          ? `demote+=${config.durMove * config.returnDelay}`
          : "0"
      );

      tl.call(
        () => {
          gsap.set(elRestore, {
            display: "block",
            opacity: 0,
            scale: 0.8,
            y: frontSlot.y + 200,
            rotation: 15,
            zIndex: frontSlot.zIndex,
          });
        },
        undefined,
        "restore"
      );

      tl.set(elRestore, { x: frontSlot.x, z: frontSlot.z }, "restore");
      tl.to(
        elRestore,
        {
          opacity: 1,
          scale: 1,
          y: frontSlot.y,
          rotation: 0,
          duration: config.durReturn,
          ease: config.ease,
        },
        "restore"
      );

      tl.call(() => {
        // Add card back to active cards and remove from removed set
        setActiveCards([lastRemovedIndex, ...activeCards]);
        setRemovedCards((prev) => {
          const newSet = new Set(prev);
          newSet.delete(lastRemovedIndex);
          return newSet;
        });

        isAnimating.current = false;
      });
    };

    const handleScroll = (e: Event) => {
      if (!isInCardSection) return;

      e.preventDefault();

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      setScrollOffset((prev) =>
        Math.max(-100, Math.min(100, prev + scrollDelta * 0.1))
      );
      scrollAccumulator.current += Math.abs(scrollDelta);

      if (scrollAccumulator.current >= scrollSensitivity) {
        if (scrollDelta > 0) {
          // Scrolling down - remove front card
          removeCard();
        } else {
          // Scrolling up - restore last removed card
          restoreCard();
        }
        scrollAccumulator.current = 0;
      }

      lastScrollY.current = currentScrollY;
      if (activeCards.length > 1 && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionBottom = rect.bottom;
        const windowHeight = window.innerHeight;

        if (sectionBottom <= windowHeight && scrollDelta > 0) {
          // Keep section in view by resetting scroll position
          window.scrollTo(0, currentScrollY - (windowHeight - sectionBottom));
        }
      }
    };

    const checkSectionVisibility = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsInCardSection(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    window.addEventListener("scroll", checkSectionVisibility, {
      passive: true,
    });
    checkSectionVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", checkSectionVisibility);
      tlRef.current?.kill();
    };
  }, [
    cardDistance,
    verticalDistance,
    skewAmount,
    easing,
    scrollSensitivity,
    activeCards,
    removedCards,
    isInCardSection,
  ]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: {
            width,
            height,
            display: removedCards.has(i) ? "none" : "block",
            ...(child.props.style ?? {}),
          },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={sectionRef}
      className="sticky top-0 min-h-screen flex items-center justify-center"
    >
      <div
        ref={container}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 perspective-[900px] overflow-visible max-[768px]:scale-[0.75] max-[480px]:scale-[0.55] z-10"
        style={{ width, height }}
      >
        {rendered}
      </div>

      {/* Progress indicator - only show when in card section */}
      {isInCardSection && (
        <div className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-full p-4 z-50">
          <div className="text-white text-center">
            <div className="text-xs opacity-70 mb-1">Cards</div>
            <div className="text-lg font-bold">
              {activeCards.length}/{childArr.length}
            </div>
            <div className="text-xs opacity-70 mt-1">
              <div className="text-xs opacity-70 mt-1">
                {activeCards.length > 1
                  ? "Scroll ↓ to remove"
                  : activeCards.length === 1
                    ? "Last card! Scroll to continue"
                    : "All removed!"}
              </div>
            </div>
            {removedCards.size > 0 && activeCards.length > 0 && (
              <div className="text-xs opacity-50 mt-1">Scroll ↑ to restore</div>
            )}
          </div>
        </div>
      )}

      {/* Completion message - only show when in card section */}
      {activeCards.length === 0 && isInCardSection && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-500/20 backdrop-blur-sm border border-green-400 rounded-lg p-4 z-50">
          <div className="text-white text-center">
            <div className="text-sm font-semibold">🎉 All cards removed!</div>
            <div className="text-xs opacity-80 mt-1">
              Scroll up to restore cards or continue down
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardSwap;
