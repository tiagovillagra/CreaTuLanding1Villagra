import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
return (
    <div className="item-list-container">
    <h2>{mensaje}</h2>
    </div>
);
};

export default ItemListContainer;
