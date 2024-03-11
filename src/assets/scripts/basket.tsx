import { useState } from "react";
import productArray from "./product";
import { ProductLine } from "./productLine";
import { UpsellItem } from "./upsellItem";

function Basket() {
  const [basketItems, setBasketItems] = useState(productArray);
  const totalPrice: number = 0; //Here we still use state. I think we need this or we will need to make changes to the components in general.
  //One could probably make another list with productsLine Objects instead of products.
  const prices = [0]; //weird
  const handleRemoveItem = (id: number) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const getBasketAmount = () => {
    let total = 0;
    basketItems.forEach((product) => {
      total += product.price 
    });
    if (total>300){
      return total*0.9;
    }
    else return total;
};

  const updateTotalPrice = (price: number) => {
    prices.push(price);
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
              <th style={{ fontSize: '1.5em' }}> {getBasketAmount().toFixed(2)}</th>
            </tr>
            {basketItems.map((product) => {
              return (
                <ProductLine
                  key={product.id}
                  quantity={1} // replace with actual quantity
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
      
      <p />
      
    </>
  );
}

export default Basket;
