// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { ComponentPropsWithoutRef, ReactNode } from "react";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
//   children: ReactNode;
//   className?: string;
// }

// interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
//   name: string;
//   className: string;
//   Icon: React.ElementType;
//   description: React.ReactNode;
//   href: string;
//   cta: string;
// }

// const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
//   return (
//     <div
//       className={cn(
//         "grid w-full grid-cols-3 grid-rows-2 gap-4 py-1",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// };

// const BentoCard = ({
//   name,
//   className,
//   Icon,
//   description,
//   href,
//   cta,
//   ...props
// }: BentoCardProps) => (
//   <div
//     key={name}
//     className={cn(
//       "group relative flex flex-col justify-between overflow-hidden rounded-xl",
//       "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//       "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
//       className
//     )}
//     {...props}
//   >
//     <div className="pointer-events-none z-10 flex transform-gpu flex-col items-center text-center gap-2 p-6 py-8 transition-all duration-300 group-hover:-translate-y-6">
//       <Icon className="h-10 w-10 text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-90" />
//       <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
//         {name}
//       </h3>
//       <p className="text-sm text-neutral-400">{description}</p>
//     </div>

//     <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//       <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
//         <a href={href}>
//           {cta}
//           <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
//         </a>
//       </Button>
//     </div>

//     <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
//   </div>
// );

// export { BentoCard, BentoGrid };

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  Icon: React.ElementType;
  description: React.ReactNode;
  href: string;
  cta: string;
  order?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full gap-4 py-1",
        "grid-cols-1 auto-rows-[minmax(16rem,auto)]", // mobile: 1 col
        "lg:grid-cols-3 lg:grid-rows-2", // desktop: 3 cols, 2 rows
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
  order,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background shadow-sm dark:bg-background dark:border dark:border-white/10",
      order, // mobile order override
      className
    )}
    {...props}
  >
    <div className="pointer-events-none z-10 flex transform-gpu flex-col items-center text-center gap-2 p-6 py-8 transition-all duration-300 group-hover:-translate-y-6">
      <Icon className="h-10 w-10 text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-90" />
      <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>

    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
