import {
  BrainCircuit,
  Globe,
  Link,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import WebsiteContent from "./website";

export const ServicesDATA = [
  {
    title: "Website Development",
    subtitle: "Tailored websites for any purpose",
    description:
      "we design stunning, goal-oriented websites for businesses, startups, e-commerce, portfolios, or blogs, ensuring they reflect your brand and stand out with elegant or bold designs.",
    tag: "Customizable",
    url: "/services/website-development",
    color: "from-blue-500 via-purple-500 to-green-400",
    icon: <Globe strokeWidth={1.5} size={16} />,
    content: <WebsiteContent />,
    features: [
      "Responsive design for all devices",
      "Brand-aligned visuals and layouts",
      "Intuitive navigation and clear CTAs",
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "Boost your online presence",
    description:
      "Maximize reach and engagement through targeted digital advertising and social media strategies, including Google Ads, Facebook/Instagram campaigns, and consistent brand presence across platforms.",
    tag: "Strategic",
    url: "/services/digital-marketing",
    color: "from-red-500 via-orange-500 to-yellow-400",
    icon: <TrendingUp strokeWidth={1.5} size={16} />,
    features: [
      "Professional PPC campaign setups",
      "Engaging social media content and visuals",
      "Strategic posting for maximum impact",
    ],
  },
  {
    title: "AI-Powered Solutions",
    subtitle: "Smart automation for efficiency",
    description:
      "Custom AI chatbots and business process automation tools designed to streamline operations, enhance customer interactions, and integrate seamlessly with your existing systems.",
    tag: "Innovative",
    url: "/services/ai-solutions",
    color: "from-purple-500 via-indigo-500 to-blue-400",
    icon: <BrainCircuit strokeWidth={1.5} size={16} />,
    features: [
      "Intelligent chatbots for various use cases",
      "End-to-end business process automation",
      "Seamless integrations with websites and CRMs",
    ],
  },
  {
    title: "Security",
    subtitle: "Robust protection for your digital assets",
    description:
      "Comprehensive security solutions including SSL configuration, DDoS protection, and vulnerability assessments, supported by a dedicated SOC Analyst and Certified Penetration Tester.",
    tag: "Secure",
    url: "/services/security-services",
    color: "from-gray-500 via-blue-600 to-teal-400",
    icon: <ShieldCheck strokeWidth={1.5} size={16} />,
    features: [
      "Advanced threat protection and audits",
      "Firewall and login security enhancements",
      "Ongoing monitoring and vulnerability testing",
    ],
  },
  {
    title: "Blockchain Development",
    subtitle: "Next-gen decentralized solutions",
    description:
      "Build decentralized apps (dApps) and websites powered by Ethereum and Cardano, ideal for NFTs, smart contracts, and secure digital payment platforms in the Web3 ecosystem.",
    tag: "Futuristic",
    url: "/services/blockchain-development",
    color: "from-green-500 via-cyan-500 to-blue-400",
    icon: <Link strokeWidth={1.5} size={16} />,
    features: [
      "Ethereum and Cardano-based dApps",
      "Secure platforms for NFTs and payments",
      "Tailored solutions for Web3 startups",
    ],
  },
];
