import {
  Bot,
  CheckCircle,
  Edit,
  Link,
  RefreshCw,
  Share2,
  Shield,
  ShoppingCart,
  Target,
} from "lucide-react";

export const ServicesDATA = [
  {
    title: "Custom Website Development",
    subtitle: "Tailored websites for any purpose",
    description:
      "I design stunning, goal-oriented websites for businesses, startups, e-commerce, portfolios, or blogs, ensuring they reflect your brand and stand out with elegant or bold designs.",
    tag: "Customizable",
    url: "/services/website-development",
    color: "from-blue-500 via-purple-500 to-green-400",
    icon: <CheckCircle strokeWidth={1.5} size={16} />,
    features: [
      "Responsive design for all devices",
      "Brand-aligned visuals and layouts",
      "Intuitive navigation and clear CTAs",
    ],
  },
  {
    title: "Shopify E-Commerce Stores",
    subtitle: "Scalable online stores that convert",
    description:
      "I create beautifully designed Shopify stores with product listings, cart setup, shipping rules, and integrated payment gateways like credit cards and PayPal to turn visitors into customers.",
    tag: "Scalable",
    url: "/services/shopify-ecommerce",
    color: "from-green-400 via-blue-500 to-purple-500",
    icon: <ShoppingCart strokeWidth={1.5} size={16} />,
    features: [
      "Custom product listings",
      "Secure payment integrations",
      "Optimized for conversions",
    ],
  },
  {
    title: "WordPress Websites",
    subtitle: "Fast, SEO-friendly WordPress solutions",
    description:
      "As a WordPress expert, I build and customize blogs, business sites, and portfolios that are fast, SEO-optimized, and easy to manage, whether starting fresh or revamping an existing site.",
    tag: "Flexible",
    url: "/services/wordpress-websites",
    color: "from-purple-500 via-green-400 to-blue-500",
    icon: <Edit strokeWidth={1.5} size={16} />,
    features: [
      "SEO-optimized designs",
      "Easy-to-manage dashboards",
      "Custom themes and plugins",
    ],
  },
  {
    title: "Website Revamping",
    subtitle: "Modernize your outdated website",
    description:
      "I transform outdated websites with modern designs, improved speed, mobile optimization, enhanced SEO, and robust security, regardless of the platform (Shopify, WordPress, etc.).",
    tag: "Modern",
    url: "/services/website-revamping",
    color: "from-blue-500 via-purple-500 to-green-400",
    icon: <RefreshCw strokeWidth={1.5} size={16} />,
    features: [
      "Updated, modern designs",
      "Improved performance and SEO",
      "Enhanced security measures",
    ],
  },
  {
    title: "Blockchain & Web3 Development",
    subtitle: "Futuristic decentralized solutions",
    description:
      "I build decentralized apps (dApps) and websites powered by Ethereum and Cardano, ideal for NFTs, smart contracts, and secure digital payment platforms in the Web3 ecosystem.",
    tag: "Innovative",
    url: "/services/blockchain-web3",
    color: "from-green-400 via-blue-500 to-purple-500",
    icon: <Link strokeWidth={1.5} size={16} />,
    features: [
      "Ethereum and Cardano integration",
      "NFT and smart contract development",
      "Secure Web3 platforms",
    ],
  },
  {
    title: "Digital Advertising (PPC)",
    subtitle: "Maximize reach with targeted ads",
    description:
      "I set up professional ad campaigns on Google Ads (Search, Display, YouTube) and Facebook/Instagram Ads, with targeted creatives and retargeting to drive traffic and conversions.",
    tag: "Targeted",
    url: "/services/digital-advertising",
    color: "from-purple-500 via-green-400 to-blue-500",
    icon: <Target strokeWidth={1.5} size={16} />,
    features: [
      "Google Ads campaign setup",
      "Facebook & Instagram ad creatives",
      "Retargeting for higher conversions",
    ],
  },
  {
    title: "Social Media Management",
    subtitle: "Build a consistent brand presence",
    description:
      "I create engaging content, visuals, and strategic posting schedules for platforms like Instagram, Facebook, Twitter, and LinkedIn to boost engagement and brand consistency.",
    tag: "Engaging",
    url: "/services/social-media",
    color: "from-blue-500 via-purple-500 to-green-400",
    icon: <Share2 strokeWidth={1.5} size={16} />,
    features: [
      "Engaging content and visuals",
      "Strategic posting schedules",
      "Hashtag research and brand tone",
    ],
  },
  {
    title: "AI-Powered Solutions",
    subtitle: "Smart automation and chatbots",
    description:
      "I develop custom AI chatbots and agents for FAQs, lead qualification, or booking, plus end-to-end business process automation using AI and low-code tools to streamline operations.",
    tag: "Intelligent",
    url: "/services/ai-solutions",
    color: "from-green-400 via-blue-500 to-purple-500",
    icon: <Bot strokeWidth={1.5} size={16} />,
    features: [
      "Custom AI chatbots",
      "Business process automation",
      "Seamless CRM integrations",
    ],
  },
  {
    title: "Security Services",
    subtitle: "Robust protection for your digital assets",
    description:
      "I provide comprehensive security services, including SSL/HTTPS, DDoS protection, vulnerability assessments, and ongoing monitoring by a SOC Analyst and Certified Penetration Tester.",
    tag: "Secure",
    url: "/services/security",
    color: "from-purple-500 via-green-400 to-blue-500",
    icon: <Shield strokeWidth={1.5} size={16} />,
    features: [
      "SSL/HTTPS and DDoS protection",
      "Vulnerability assessments",
      "Ongoing security monitoring",
    ],
  },
];
