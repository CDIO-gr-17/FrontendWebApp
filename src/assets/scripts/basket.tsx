import { useState } from "react";
import productArray from "./product";
import { ProductLine } from "./productLine";

function Basket() {
  const [basketItems, setBasketItems] = useState(productArray);
  const [prices, setPrices] = useState(new Map<number, number>());
  const handleRemoveItem = (id: number) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice variable

  const updateTotalPrice = (productID: number, price: number) => {
    setPrices(prices.set(productID, price));
    var tempTotalPrice = 0;
    Array.from(prices.values()).forEach((price) => {
      tempTotalPrice += price;
    });
    if (tempTotalPrice > 300) {
      /*Here discount if the total price is over 300*/
      setTotalPrice(tempTotalPrice * 0.9);
    } else {
      setTotalPrice(tempTotalPrice);
    }
  };

  return (
    <>
      {basketItems.length > 0 && (
        <table className="shoppingCart">
          <tbody>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th>Total </th>
              <th></th>
              <th></th>
            </tr>
            {basketItems.map((product) => {
              return (
                <ProductLine
                  key={product.id}
                  product={product}
                  handleRemoveItem={handleRemoveItem}
                  updateTotalPrice={updateTotalPrice}
                />
              );
            })}
          </tbody>
        </table>
      )}

      {basketItems.length === 0 && (
        <p>
          No items in basket. Reload the page <a href=".">here</a> to restore
        </p>
      )}
      <div>
        <h3>Total price: {totalPrice}</h3> {/*Should be moved*/} This price is
        discounted
      </div>
    </>
  );
}

export default Basket;
