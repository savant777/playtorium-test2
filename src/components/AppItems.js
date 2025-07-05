import './AppItems.css';

function Items(props) {
    const { item } = props;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-2 item-image">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-10">
                    <div className="card-body items">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="item-details">
                            <p className="card-text"><small class="text-body-secondary">฿{item.price} x {item.quantity}</small></p>
                            <p className="card-text fw-bold">฿{item.price * item.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;