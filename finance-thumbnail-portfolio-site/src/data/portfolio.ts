export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  gradient: string;
  icon: string;
  stats: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "How I Made $10K Day Trading",
    category: "Day Trading",
    description: "Bold typography with green profit arrows and candlestick chart overlay.",
    gradient: "from-emerald-500 to-green-700",
    icon: "📈",
    stats: "2.4M views",
  },
  {
    id: 2,
    title: "Bitcoin to $100K?",
    category: "Crypto",
    description: "Dramatic orange-to-black gradient with Bitcoin symbol and price chart.",
    gradient: "from-amber-500 to-orange-700",
    icon: "₿",
    stats: "1.8M views",
  },
  {
    id: 3,
    title: "5 Stocks That Will 10x",
    category: "Investing",
    description: "Clean split layout with stock tickers and upward trend visualization.",
    gradient: "from-blue-500 to-indigo-700",
    icon: "🚀",
    stats: "3.1M views",
  },
  {
    id: 4,
    title: "Forex Trading Secrets",
    category: "Forex",
    description: "Currency pair charts with dramatic lighting and bold red/green accents.",
    gradient: "from-violet-500 to-purple-800",
    icon: "💱",
    stats: "950K views",
  },
  {
    id: 5,
    title: "Real Estate Empire",
    category: "Real Estate",
    description: "Property imagery with money stacks and modern typography overlay.",
    gradient: "from-teal-500 to-cyan-700",
    icon: "🏠",
    stats: "1.2M views",
  },
  {
    id: 6,
    title: "Options Trading Crash Course",
    category: "Options",
    description: "Educational style with options chain overlay and call/put indicators.",
    gradient: "from-rose-500 to-red-700",
    icon: "📊",
    stats: "2.7M views",
  },
  {
    id: 7,
    title: "The ETF Strategy No One Talks About",
    category: "Investing",
    description: "Minimalist design with pie chart breakdown and sleek typography.",
    gradient: "from-sky-400 to-blue-600",
    icon: "🎯",
    stats: "890K views",
  },
  {
    id: 8,
    title: "I Lost Everything in Crypto",
    category: "Crypto",
    description: "Dark, emotional design with red downward chart and shocked expression placeholder.",
    gradient: "from-red-600 to-gray-900",
    icon: "😱",
    stats: "4.5M views",
  },
  {
    id: 9,
    title: "Warren Buffett's Top 3 Rules",
    category: "Investing",
    description: "Professional portrait-style layout with elegant gold accents and quotes.",
    gradient: "from-yellow-500 to-amber-700",
    icon: "👴",
    stats: "5.2M views",
  },
];

export const categories = ["All", "Day Trading", "Crypto", "Investing", "Forex", "Real Estate", "Options"];

export const testimonials = [
  {
    id: 1,
    name: "Jake Morrison",
    channel: "TradingWithJake",
    subscribers: "1.2M subscribers",
    text: "ClickCraft completely transformed my channel's click-through rate. My thumbnails went from 3% to 11% CTR overnight. Absolutely game-changing.",
    avatar: "JM",
  },
  {
    id: 2,
    name: "Sarah Chen",
    channel: "CryptoSarah",
    subscribers: "850K subscribers",
    text: "The best investment I've made for my channel. Every thumbnail is scroll-stopping. My views doubled within the first month of working together.",
    avatar: "SC",
  },
  {
    id: 3,
    name: "Marcus Williams",
    channel: "WealthBuilders",
    subscribers: "2.1M subscribers",
    text: "Professional, fast, and they understand the finance niche like no other designer I've worked with. They know what makes people click.",
    avatar: "MW",
  },
];
