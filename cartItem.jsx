import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: props.initialQty,
            total: 0
        };
    }
    componentWillMount() {
        this.recalculateTotal();
    }
    increaseQty() {
        this.setState({qty: this.state.qty + 1}, this.recalculateTotal);
    }
    decreaseQty() {
        let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
        this.setState({qty: newQty}, this.recalculateTotal);
    }
    recalculateTotal() {
        this.setState({total: this.state.qty * this.props.price});
    }
}

export default CartItem
