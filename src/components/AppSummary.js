import './AppSummary.css';

function Summary(props) {
    const { items, appliedCampaigns, subtotal } = props;

    //#region Discount Calculate
    const { coupon, ontop, seasonal } = appliedCampaigns;

    let discount = 0;
    let couponDiscount = 0;
    let ontopDiscount = 0;
    let seasonalDiscount = 0;
    
    // Coupon
    if (coupon) {
        if (coupon.type === 'coupon_fixed') {
            couponDiscount = coupon.value;
            discount += couponDiscount;
        } else if (coupon.type === 'coupon_percent') {
            couponDiscount = (subtotal * coupon.value) / 100;
            discount += couponDiscount;
        }
    }

    // On Top
    if (ontop) {
        if (ontop.type === 'ontop_percent_by_category') {
            const categoryTotal = items
            .filter(item => item.category === ontop.category)
            .reduce((sum, item) => sum + item.price * item.quantity, 0);
            ontopDiscount = (categoryTotal * ontop.value) / 100;
            discount += ontopDiscount;
        } else if (ontop.type === 'ontop_points') {
            const maxPointDiscount = subtotal * 0.2;
            ontopDiscount = Math.min(ontop.point, maxPointDiscount);
            discount += ontopDiscount;
        }
    }
    
    // Seasonal
    if (seasonal) {
        if (seasonal.type === 'seasonal_tiered') {
            const times = Math.floor(subtotal / seasonal.tierPrice);
            seasonalDiscount = times * seasonal.value;
            discount += seasonalDiscount;
        }
    }

    const total = Math.max(subtotal - discount, 0);
    //#endregion

    return (
        <div className="card mb-3">
            <h5 className="card-header">Summary</h5>
            <div className="card-body summary">
                <div className="summary-details">
                    <b>Subtotal</b>
                    <p>฿{subtotal.toLocaleString()}</p>
                </div>
                <div className="summary-details">
                    <b>Discount</b>
                    <p>฿{discount.toLocaleString()}</p>
                </div>
                
                {coupon && (
                    <small className="summary-details text-secondary">
                        <p>{coupon.name}</p>
                        <p>฿{couponDiscount.toLocaleString()}</p>
                    </small>
                )}
                
                {ontop && (
                    <small className="summary-details text-secondary">
                        <p>{ontop.name}</p>
                        <p>฿{ontopDiscount.toLocaleString()}</p>
                    </small>
                )}
                
                {seasonal && (
                    <small className="summary-details text-secondary">
                        <p>{seasonal.name}</p>
                        <p>฿{seasonalDiscount.toLocaleString()}</p>
                    </small>
                )}

                <hr />
                <div className="summary-details">
                    <b>Total</b>
                    <p>฿{total.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;