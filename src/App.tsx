import "./App.css";
import Basket from "./assets/scripts/basket";
import UpsellItem from "./assets/scripts/upsellItem";
import Header from "./assets/scripts/header";
import { useState } from "react";
import { Steps } from "./Steps";
import Orderform from "./assets/scripts/orderform";

function App() {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.Basket);
  if (currentStep === Steps.Basket) {
    return (
      <div>
        <Header />
        <div className="frontPage">
          <Basket />
          <div className="rightCollumn">
            <UpsellItem />
            <button onClick={() => {alert("are you sure you want to checkout?");
            setCurrentStep(Steps.Checkout);
            }}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (currentStep === Steps.Checkout) {
    return (
      <div>
        <Orderform />
        <button onClick={() => setCurrentStep(Steps.Basket)}>Checkout</button>
      </div>
    );
  }
}

export default App;
