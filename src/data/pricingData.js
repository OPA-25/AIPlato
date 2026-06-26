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

export const regionalTariffs = {
  INR: { symbol: "₹", multiplier: 83 },
  USD: { symbol: "$", multiplier: 1 },
  EUR: { symbol: "€", multiplier: 0.92 }
};

/**
 * 🔥 CORE PRICING ENGINE (HACKATHON CRITICAL)
 */
export const calculatePrice = (base, currency, billingCycle) => {
  const { multiplier, symbol } = regionalTariffs[currency];

  let value = base * multiplier;

  // Annual discount logic (correct SaaS model)
  if (billingCycle === "annual") {
    value = value * 12 * 0.8;
  }

  return {
    value: Math.round(value),
    symbol
  };
};