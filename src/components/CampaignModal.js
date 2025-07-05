import { useState } from "react";
import Campaigns from "./AppCampaigns";
import campaigns from '../data/campaign';

function CampaignsModal(props) {
    const { onApplyCampaigns, subtotal } = props;

    const handleApply = () => {
        const selectedCampaigns = {
            coupon: campaigns.find(c => c.id === selectedCouponId) || null,
            ontop: campaigns.find(c => c.id === selectedOntopId) || null,
            seasonal: campaigns.find(c => c.id === selectedSeasonalId) || null
        };
        onApplyCampaigns(selectedCampaigns);
    };

    const [selectedCouponId, setSelectedCouponId] = useState(null);
    const [selectedOntopId, setSelectedOntopId] = useState(null);
    const [selectedSeasonalId, setSelectedSeasonalId] = useState(null);

    const couponElements = campaigns.filter(c => c.type.startsWith('coupon'))
    .map((campaign, index) => (
        <Campaigns key={`coupon-${index}`} campaign={campaign} selectedCampaignId={selectedCouponId} setSelectedCampaignId={setSelectedCouponId} />
    ));

    const ontopElements = campaigns.filter(c => c.type.startsWith('ontop'))
    .map((campaign, index) => (
        <Campaigns key={`ontop-${index}`} campaign={campaign} selectedCampaignId={selectedOntopId} setSelectedCampaignId={setSelectedOntopId} subtotal={subtotal} />
    ));

    const seasonalElements = campaigns.filter(c => c.type.startsWith('seasonal'))
    .map((campaign, index) => (
        <Campaigns key={`seasonal-${index}`} campaign={campaign} selectedCampaignId={selectedSeasonalId} setSelectedCampaignId={setSelectedSeasonalId} />
    ));
    
    return (
        <div className="mb-3">
            <button type="button" className="w-100 btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Select Campaign
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Select Campaign</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6><b>Coupon</b></h6>
                            <small>สามารถเลือกใช้ได้สูงสุด 1 แคมเปญ</small>
                            <hr />
                            {couponElements.length ? couponElements : <p className="text-muted">ไม่มีส่วนลดประเภทนี้</p>}
                            <br />
                            <h6><b>On Top</b></h6>
                            <small>สามารถเลือกใช้ได้สูงสุด 1 แคมเปญ</small>
                            <hr />
                            {ontopElements.length ? ontopElements : <p className="text-muted">ไม่มีส่วนลดประเภทนี้</p>}
                            <br />
                            <h6><b>Seasonal</b></h6>
                            <small>สามารถเลือกใช้ได้สูงสุด 1 แคมเปญ</small>
                            <hr />
                            {seasonalElements.length ? seasonalElements : <p className="text-muted">ไม่มีส่วนลดประเภทนี้</p>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleApply}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignsModal;