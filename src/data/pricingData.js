// const pricingData = {

//     monthly: {

//         INR: [

//             {
//                 title: "Starter",
//                 price: "₹999",
//                 features: [
//                     "AI Automation",
//                     "Analytics Dashboard",
//                     "10 Projects",
//                     "Email Support"
//                 ]
//             },

//             {
//                 title: "Professional",
//                 price: "₹2,999",
//                 popular: true,
//                 features: [
//                     "Unlimited Projects",
//                     "Predictive AI",
//                     "Team Collaboration",
//                     "Priority Support"
//                 ]
//             },

//             {
//                 title: "Enterprise",
//                 price: "Custom",
//                 features: [
//                     "Unlimited Everything",
//                     "Dedicated Manager",
//                     "API Access",
//                     "24×7 Support"
//                 ]
//             }

//         ],

//         USD: [

//             {
//                 title: "Starter",
//                 price: "$12",
//                 features: [
//                     "AI Automation",
//                     "Analytics Dashboard",
//                     "10 Projects",
//                     "Email Support"
//                 ]
//             },

//             {
//                 title: "Professional",
//                 price: "$35",
//                 popular: true,
//                 features: [
//                     "Unlimited Projects",
//                     "Predictive AI",
//                     "Team Collaboration",
//                     "Priority Support"
//                 ]
//             },

//             {
//                 title: "Enterprise",
//                 price: "Custom",
//                 features: [
//                     "Unlimited Everything",
//                     "Dedicated Manager",
//                     "API Access",
//                     "24×7 Support"
//                 ]
//             }

//         ],

//         EUR: [

//             {
//                 title: "Starter",
//                 price: "€10",
//                 features: [
//                     "AI Automation",
//                     "Analytics Dashboard",
//                     "10 Projects",
//                     "Email Support"
//                 ]
//             },

//             {
//                 title: "Professional",
//                 price: "€30",
//                 popular: true,
//                 features: [
//                     "Unlimited Projects",
//                     "Predictive AI",
//                     "Team Collaboration",
//                     "Priority Support"
//                 ]
//             },

//             {
//                 title: "Enterprise",
//                 price: "Custom",
//                 features: [
//                     "Unlimited Everything",
//                     "Dedicated Manager",
//                     "API Access",
//                     "24×7 Support"
//                 ]
//             }

//         ]

//     }

// };

// export default pricingData;



// Base configuration data mapping the plans and features
export const basePricing = [
  {
    id: "starter",
    title: "Starter",
    baseMonthlyUSD: 12,
    isCustom: false,
    features: [
      "AI Automation",
      "Analytics Dashboard",
      "10 Projects",
      "Email Support"
    ]
  },
  {
    id: "professional",
    title: "Professional",
    baseMonthlyUSD: 35,
    popular: true,
    isCustom: false,
    features: [
      "Unlimited Projects",
      "Predictive AI",
      "Team Collaboration",
      "Priority Support"
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise",
    baseMonthlyUSD: null,
    isCustom: true,
    features: [
      "Unlimited Everything",
      "Dedicated Manager",
      "API Access",
      "24×7 Support"
    ]
  }
];

// Multi-dimensional lookup matrix for regional pricing multipliers
export const regionalTariffs = {
  INR: { symbol: "₹", multiplier: 83 },
  USD: { symbol: "$", multiplier: 1 },
  EUR: { symbol: "€", multiplier: 0.92 }
};