const Checkout = () => {
    return (
        <div>
            <style jsx>
                {`
                  div {
                      display: flex;
                      justify-content: center;
                      align-item: center;
                      flex-direction: column;
                  }
                  h4, p {
                      text-align: center;
                  }
                `}
            </style>
            <h4>Order Successful</h4>
            <p>Thank for placing order</p>
        </div>
    );
};

export default Checkout;