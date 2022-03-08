import { useState } from "react";
import { Container } from "./Style";

function App() {
  const [option, setOption] = useState(3);
  const [billingType, setBillingType] = useState(false); // false = monthly, true = yearly

  const VALUES = [
    {
      views: "10K",
      price: 3,
    },
    {
      views: "50K",
      price: 12,
    },
    {
      views: "100K",
      price: 16,
    },
    {
      views: "500K",
      price: 24,
    },
    {
      views: "1M",
      price: 36,
    },
  ];
  console.log(VALUES, option, billingType);
  return (
    <Container>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </header>
      <main className="card">
        <div className="card_top">
          <div className="card_top__line_1">
            <p className="card_top__line_1__views">{`${
              VALUES[option - 1].views
            } PAGEVIEWS`}</p>
            <div className="card_top__line_1__price">
              <h2>${VALUES[option - 1].price}.00</h2>
              <p>/ month</p>
            </div>
          </div>
          <div className="card_top__line_2">
            <input
              type="range"
              min="1"
              max="5"
              value={option}
              step="1"
              onChange={(e) => setOption(e.target.value)}
            />
          </div>
          <div className="card_top__line_extra__price">
            <h2>${VALUES[option - 1].price}.00</h2>
            <p>/ month</p>
          </div>
          <div className="card_top__line_3">
            <div className="card_top__line_3__element">Monthly Billing</div>
            <div
              className={`card_top__line_3__element ${
                billingType ? "active" : undefined
              }`}
              onClick={() => setBillingType(!billingType)}
              role="button"
              tabIndex="0"
            >
              <div className="card_top__line_3__element_button"></div>
            </div>
            <div className="card_top__line_3__element">Yearly Billing</div>
            {billingType ? (
              <div className="card_top__line_3__element">25%</div>
            ) : undefined}
          </div>
        </div>
        <div className="card_bottom">
          <div className="card_bottom__element">
            <div className="card_bottom__element_benefits">
              <img src="/icon-check.svg" alt="check icon" />
              <p>Unlimited websites</p>
            </div>
            <div className="card_bottom__element_benefits">
              <img src="/icon-check.svg" alt="check icon" />
              <p>100% data ownership</p>
            </div>
            <div className="card_bottom__element_benefits">
              <img src="/icon-check.svg" alt="check icon" />
              <p>Email reports</p>
            </div>
          </div>
          <div className="card_bottom__element">
            <div className="card_bottom__element_button">Start my trial</div>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;
