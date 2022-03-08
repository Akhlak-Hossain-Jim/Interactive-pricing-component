import { useState } from "react";
import { Container } from "./Style";

function App() {
  const [option, setOption] = useState(3);
  const [billingType, setBillingType] = useState(0);

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
      <header></header>
      <main>
        <input
          type="range"
          min="1"
          max="5"
          value="3"
          step="1"
          onChange={(e) => setOption(e.target.value)}
        />
      </main>
    </Container>
  );
}

export default App;
