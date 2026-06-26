// import { useState } from "react";
// import "./Pricing.css";
// import pricingData from "../../data/pricingData";

// function Pricing() {

//     const [currency, setCurrency] = useState("INR");

//     const plans = pricingData.monthly[currency];

//     return (

//         <section className="pricing" id="pricing">

//             <div className="pricing-header">

//                 <span>PRICING</span>

//                 <h2>Choose Your Plan</h2>

//                 <p>Flexible pricing for every business.</p>

//             </div>

//             <div className="currency-switch">

//                 <button
//                     onClick={() => setCurrency("INR")}
//                     className={currency === "INR" ? "active" : ""}
//                 >
//                     ₹
//                 </button>

//                 <button
//                     onClick={() => setCurrency("USD")}
//                     className={currency === "USD" ? "active" : ""}
//                 >
//                     $
//                 </button>

//                 <button
//                     onClick={() => setCurrency("EUR")}
//                     className={currency === "EUR" ? "active" : ""}
//                 >
//                     €
//                 </button>

//             </div>

//             <div className="pricing-cards">

//                 {plans.map((plan, index) => (

//                     <div
//                         className={`pricing-card ${plan.popular ? "popular" : ""}`}
//                         key={index}
//                     >

//                         {plan.popular && (
//                             <div className="badge">
//                                 Most Popular
//                             </div>
//                         )}

//                         <h3>{plan.title}</h3>

//                         <h1>{plan.price}</h1>

//                         <ul>

//                             {plan.features.map((item, i) => (

//                                 <li key={i}>
//                                     ✔ {item}
//                                 </li>

//                             ))}

//                         </ul>

//                         <button>
//                             Get Started
//                         </button>

//                     </div>

//                 ))}

//             </div>

//         </section>

//     );

// }

// export default Pricing;






import { useState, memo } from "react";
import "./Pricing.css";
import { basePricing, regionalTariffs } from "../../data/pricingData";

/**
 * Isolated Sub-Component for Price Text Rendering
 * Prevents global parent reflows or list re-renders when plan parameters change.
 */
const PriceDisplay = memo(({ baseMonthlyUSD, isCustom, currency, billingCycle }) => {
  if (isCustom) {
    return <h1>Custom</h1>;
  }

  const tariff = regionalTariffs[currency] || regionalTariffs["USD"];
  
  // Calculate raw price based on regional exchange scaling
  let calculatedPrice = baseMonthlyUSD * tariff.multiplier;

  // Apply continuous calculation rules (Annual billing receives 20% discount applied over 12 months)
  if (billingCycle === "annual") {
    calculatedPrice = calculatedPrice * 12 * 0.8;
  }

  return (
    <h1>
      {tariff.symbol}
      {Math.round(calculatedPrice).toLocaleString()}
      <span style={{ fontSize: "16px", color: "#D9E8E2", fontWeight: "normal" }}>
        {billingCycle === "annual" ? "/yr" : "/mo"}
      </span>
    </h1>
  );
});

PriceDisplay.displayName = "PriceDisplay";

function Pricing() {
  const [currency, setCurrency] = useState("INR");
  const [billingCycle, setBillingCycle] = useState("monthly"); // Added target state structure

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header">
        <span>PRICING</span>
        <h2>Choose Your Plan</h2>
        <p>Flexible pricing for every business.</p>
      </div>

      {/* Monthly / Annual Toggle Interface Block */}
      <div className="pricing-toggle">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={billingCycle === "monthly" ? "active" : ""}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("annual")}
          className={billingCycle === "annual" ? "active" : ""}
        >
          Annual (20% Off)
        </button>
      </div>

      {/* Currency Switch Selection Row */}
      <div className="currency-switch">
        <button
          onClick={() => setCurrency("INR")}
          className={currency === "INR" ? "active" : ""}
        >
          ₹
        </button>
        <button
          onClick={() => setCurrency("USD")}
          className={currency === "USD" ? "active" : ""}
        >
          $
        </button>
        <button
          onClick={() => setCurrency("EUR")}
          className={currency === "EUR" ? "active" : ""}
        >
          €
        </button>
      </div>

      {/* Grid Layout Cards mapping from the Dynamic Matrix */}
      <div className="pricing-cards">
        {basePricing.map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
            key={plan.id}
          >
            {plan.popular && (
              <div className="badge">
                Most Popular
              </div>
            )}

            <h3>{plan.title}</h3>

            {/* Target Optimization Node: Matrix values computed inside the isolated view */}
            <PriceDisplay
              baseMonthlyUSD={plan.baseMonthlyUSD}
              isCustom={plan.isCustom}
              currency={currency}
              billingCycle={billingCycle}
            />

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>
                  ✔ {item}
                </li>
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