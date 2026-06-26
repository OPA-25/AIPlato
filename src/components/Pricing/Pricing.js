import { useState, useCallback, memo } from "react";
import "./Pricing.css";
import { basePricing, regionalTariffs, calculatePrice } from "../../data/pricingData";

/**
 * Isolated Price Renderer
 * Only re-renders when props change (currency, billing, plan)
 */
const PriceDisplay = memo(({ plan, currency, billingCycle }) => {
  if (plan.isCustom) {
    return <h1>Custom</h1>;
  }

  const price = calculatePrice(plan.baseMonthlyUSD, currency, billingCycle);

  return (
    <h1>
      {price.symbol}
      {price.value.toLocaleString()}
      <span style={{ fontSize: "16px", color: "#D9E8E2", fontWeight: "normal" }}>
        {billingCycle === "annual" ? "/yr" : "/mo"}
      </span>
    </h1>
  );
});

PriceDisplay.displayName = "PriceDisplay";

function Pricing() {
  const [currency, setCurrency] = useState("INR");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleCurrencyChange = useCallback((curr) => {
    setCurrency(curr);
  }, []);

  const handleBillingChange = useCallback((cycle) => {
    setBillingCycle(cycle);
  }, []);

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <span>PRICING</span>
        <h2>Choose Your Plan</h2>
        <p>Flexible pricing for every business.</p>
      </div>

      {/* Billing Toggle */}
      <div className="pricing-toggle">
        <button
          onClick={() => handleBillingChange("monthly")}
          className={billingCycle === "monthly" ? "active" : ""}
        >
          Monthly
        </button>
        <button
          onClick={() => handleBillingChange("annual")}
          className={billingCycle === "annual" ? "active" : ""}
        >
          Annual (20% Off)
        </button>
      </div>

      {/* Currency Switch */}
      <div className="currency-switch">
        {Object.keys(regionalTariffs).map((curr) => (
          <button
            key={curr}
            onClick={() => handleCurrencyChange(curr)}
            className={currency === curr ? "active" : ""}
          >
            {regionalTariffs[curr].symbol}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="pricing-cards">
        {basePricing.map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.id}
          >
            {plan.popular && <div className="badge">Most Popular</div>}

            <h3>{plan.title}</h3>

            <PriceDisplay
              plan={plan}
              currency={currency}
              billingCycle={billingCycle}
            />

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <button>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;