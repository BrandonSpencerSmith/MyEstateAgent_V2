import { TrendingUp, Target, Award, Camera, Zap, Users, Shield, Clock, CheckCircle, Star } from 'lucide-react';

export const sellStats = [
  { icon: TrendingUp, color: 'green', label: 'Average Sale Time', value: '42 Days' },
  { icon: Target, color: 'blue', label: 'Achieve Asking Price', value: '97%' },
  { icon: Award, color: 'purple', label: 'Client Satisfaction', value: '98%' }
];

export const sellServices = [
  {
    icon: Camera,
    color: 'blue',
    title: 'Professional Photography',
    desc: 'Our professional photographers use advanced techniques and equipment to capture your property\'s best features, creating stunning visuals that attract serious buyers.',
    stat: 'Our professional photography increases viewing requests by 40%'
  },
  {
    icon: Zap,
    color: 'green',
    title: 'Multi-Platform Marketing',
    desc: 'We showcase your property across 15+ premium portals including Rightmove, Zoopla, and OnTheMarket, plus our targeted social media campaigns reach thousands of potential buyers.',
    stat: 'Our marketing reaches over 2 million potential buyers monthly'
  },
  {
    icon: Target,
    color: 'purple',
    title: 'Expert Negotiation',
    desc: 'Our NAEA-qualified negotiators have over 15 years of experience securing optimal prices and favorable terms for our clients.',
    stat: 'Our negotiation expertise achieves an average of £12,000 more for sellers'
  },
  {
    icon: TrendingUp,
    color: 'orange',
    title: 'Detailed Market Analysis',
    desc: 'Our proprietary valuation system analyzes over 50 data points including recent sales, property features, and local demand to ensure optimal pricing.',
    stat: 'Our valuations are accurate within 1.5% of final sale price'
  },
  {
    icon: Users,
    color: 'red',
    title: 'Dedicated Support Team',
    desc: 'Each client is assigned a dedicated property consultant who provides weekly updates and is available 6 days a week to answer your questions.',
    stat: 'We guarantee response to all queries within 1 hour during business hours'
  },
  {
    icon: Shield,
    color: 'indigo',
    title: 'Legal & Compliance',
    desc: 'We maintain full RICS regulation, £2M professional indemnity insurance, and membership of The Property Ombudsman for complete client protection.',
    stat: 'Fully regulated and insured for your complete peace of mind'
  }
];

export const sellingProcess = [
  { title: 'Free Property Valuation', desc: 'Our RICS-qualified valuers conduct a comprehensive assessment of your property, considering unique features and local expertise to provide an accurate valuation.', time: '1-2 days' },
  { title: 'Marketing Strategy', desc: 'Our award-winning marketing team creates a bespoke strategy featuring professional photography, detailed floor plans, and premium placement across all major property portals.', time: '3-5 days' },
  { title: 'Launch & Viewings', desc: 'Your property launches across our network of 15+ portals and is immediately presented to our qualified buyer database. We handle all viewing coordination and conduct them professionally.', time: 'Ongoing' },
  { title: 'Offers & Negotiation', desc: 'Our skilled negotiators present all offers transparently and work tirelessly to secure the best possible price and terms for your sale.', time: '2-6 weeks' },
  { title: 'Sale Progression', desc: 'Our dedicated progression team manages every detail from offer acceptance to completion, coordinating with all parties to ensure a smooth transaction.', time: '8-12 weeks' },
  { title: 'Completion', desc: 'We ensure a seamless completion day with all documentation prepared and funds transferred efficiently. Our after-sales support continues beyond completion.', time: 'Completion day' }
];

export const testimonials = [
  { rating: 5, text: "MyEstateAgent's professional approach and expert marketing sold our house in just 3 weeks for the full asking price. Their team made the whole process completely stress-free!", name: 'Sarah Johnson', location: 'Sold in Stoney Stanton', initials: 'SJ', color: 'blue' },
  { rating: 5, text: "The team's negotiation skills were outstanding - they achieved £15,000 more than our initial valuation and kept us informed with weekly updates. Exceptional service!", name: 'Michael Thompson', location: 'Sold in Desford', initials: 'MT', color: 'green' },
  { rating: 5, text: "After months with another agent, MyEstateAgent's superior marketing and buyer network sold our property in just 6 weeks. Their expertise made all the difference.", name: 'Lisa Davis', location: 'Sold in Thurlaston', initials: 'LD', color: 'purple' }
];

export const guarantees = [
  { icon: CheckCircle, title: 'Expert Pricing Strategy', desc: 'Our detailed market analysis ensures optimal pricing to attract buyers while maximizing your return' },
  { icon: CheckCircle, title: 'Dedicated Sales Progression', desc: 'Our experienced team manages every aspect of your sale from offer to completion' },
  { icon: CheckCircle, title: 'Transparent Communication', desc: 'Regular updates and clear communication throughout the entire selling process' }
];
