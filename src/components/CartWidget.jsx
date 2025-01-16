import React from 'react';
import './CartWidget.css';


const CartWidget = () => {
return (
    <div>
      <i className="fas fa-shopping-cart"></i> {/* FontAwesome ícono (puedes usar Bootstrap o cualquier otra librería de íconos) */}
    <span className="cart-count">0</span>
    </div>
);
};

export default CartWidget;
