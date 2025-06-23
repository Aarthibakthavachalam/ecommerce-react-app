// import React from "react";
// import "./Cart.css"; 

// function CartPage() {
//   return (
//     <div className="latest-product">
//       <h1>CART</h1>
//       <br />
//       <hr />
//       <br />
//       <br />

//       <div className="cart-page">
//         {/* Cart Items Section */}
//         <div className="cart-items">
//           <div className="table-title">
//             <h2>List of Items</h2>
//           </div>
//           <hr />

//           <table>
//             <thead>
//               <tr>
//                 {/* You can enable these columns if needed */}
//                 {/* <th>Image</th>
//                 <th>Product</th>
//                 <th>Quantity / Price</th> */}
//               </tr>
//             </thead>
//             <tbody id="cart-body">
//               {/* Render your cart items here using map */}
//             </tbody>
//           </table>
//         </div>

//         {/* Order Summary Section */}
//         <div className="ordersummery">
//           <div className="table-title">
//             <h2>Order Summary</h2>
//           </div>
//           <hr />
//           <p>
//             Total Items: <span id="summary-items">0</span>
//           </p>
//           <p>
//             Total Price: ₹<span id="summary-price">0.00</span>
//           </p>
//           <p>
//             Shipping: ₹<span id="shipping-cost">30.00</span>
//           </p>
//           <hr />
//           <p>
//             <strong>
//               Grand Total: ₹<span id="grand-total">0.00</span>
//             </strong>
//           </p>

//           <button className="checkout-btn">Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

import React from "react";
import { useCart } from "../context/Cartcontext";
import "./Cart.css";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 30;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="latest-product">
      <h1>CART</h1>
      <br />
      <hr />
      <br />
      <br />

      <div className="cart-page">
        {/* Cart Items Section */}
        <div className="cart-items">
          <div className="table-title">
            <h2>List of Items</h2>
          </div>
          <hr />

          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgUrl} alt={item.productName} width="50" />
                    </td>
                    <td>{item.productName}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)}>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Order Summary */}
        <div className="ordersummery">
          <div className="table-title">
            <h2>Order Summary</h2>
          </div>
          <hr />
          <p>Total Items: <span>{cartItems.length}</span></p>
          <p>Total Price: $<span>{totalPrice.toFixed(2)}</span></p>
          <p>Shipping: $<span>{shipping}</span></p>
          <hr />
          <p><strong>Grand Total: $<span>{grandTotal.toFixed(2)}</span></strong></p>

          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

