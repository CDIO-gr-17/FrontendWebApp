import { Product } from "./product";

interface QuantityInputProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  product: Product;
}

export function QuantityInput({
  quantity,
  setQuantity,
  product,
}: QuantityInputProps) {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantityInput">
      <button className="quantityButton" onClick={decrementQuantity}>
        <b>-</b>
      </button>
      <input
        className="quantityBox"
        type="number"
        min="1"
        id={`Quantity-${product.id.toString()}`}
        value={quantity}
        readOnly={true} //Dont know if we want this
      /*onChange={(e) => {
        setQuantity(parseInt(e.target.value));
      }}*/
      />
      <button className="quantityButton" onClick={incrementQuantity}>
        <b>+</b>
      </button>
    </div>
  );
}
