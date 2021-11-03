const Cart = ({ item }) => {
    return (
        <div>
            <p>{item.quantity}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <hr />
        </div>
    );
};

export default Cart;