import HelloWorld from './hello';
import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem';

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

ReactDOM.render(
    <HelloWorld phrase="ES6"/>,
    <CartItem title={order.title}
      image={order.image}
      initialQty={order.initialQty}
      price={order.price}/>,
    document.querySelector('.root')
);
