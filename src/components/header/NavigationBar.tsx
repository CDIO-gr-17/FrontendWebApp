import { useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { useEffect, useState } from "react";
import { Steps } from "../../steps";

export default function NavigationBar() {
  const location = useLocation();
  const [step, setStep] = useState<Steps>();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setStep(Steps.Basket);
        break;
      case "/delivery":
        setStep(Steps.Delivery);
        break;
      case "/confirmation":
        setStep(Steps.Confirmation);
        break;

      default:
        setStep(Steps.Basket);
    }
  }, [location.pathname]);

  const decideClass = (thisStep: Steps) => {
    if (step === thisStep) {
      return "active";
    } else if (step && step > thisStep) {
      return "past";
    } else if (step && step === thisStep - 1) {
      return "previous";
    } else {
      return "future";
    }
  };

  return (
    <nav>
      <ul>
        <li className={decideClass(Steps.Basket)}>
          <p className="bubble">Basket</p>
        </li>
        <div className={decideClass(Steps.Basket) + "divider"}></div>
        <li className={decideClass(Steps.Delivery)}>
          <p className="bubble">Delivery</p>
        </li>
        <div className={decideClass(Steps.Delivery) + "divider"}></div>
        <li className={decideClass(Steps.Confirmation)}>
          <p className="bubble">Confirmation</p>
        </li>
      </ul>
    </nav>
  );
}
