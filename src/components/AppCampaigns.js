import './AppCampaigns.css';
import { useState, useEffect } from 'react';

function Campaigns(props) {
    const { campaign, selectedCampaignId, setSelectedCampaignId, subtotal } = props;
    const isSelected = selectedCampaignId === campaign.id;

    const maxPointDiscount = Math.floor(subtotal * 0.2);
    const [pointInput, setPointInput] = useState('');

    useEffect(() => {
        if (!isSelected) {
            setPointInput('');
        }
    }, [isSelected]);

    const handlePointChange = (e) => {
        let value = parseInt(e.target.value, 10);

        if (isNaN(value) || value < 0) value = 0;
        if (value > maxPointDiscount) value = maxPointDiscount;

        setPointInput(value);
        campaign.point = value;  
    };

    return (
        <div className="card mb-3">
            <div className="row g-0 campaigns">
                <div className="campaign-icon p-2">
                    <i class="fa-solid fa-ticket-simple"></i>
                </div>
                <div className="col p-2">
                    <b>{campaign.name}</b><br />
                    <small>{campaign.description}</small>
                </div>
                <div className="campaign-btn p-1 me-1">
                    <button type="button"
                        className={`w-100 btn ${isSelected ? 'btn-secondary' : 'btn-outline-secondary'}`}
                        onClick={() => isSelected ? setSelectedCampaignId(null) : setSelectedCampaignId(campaign.id)}>
                            {isSelected ? 'Picked' : 'Use'}
                    </button>
                </div>
            </div>
            {isSelected && campaign.type === 'ontop_points' && (
                <div className="row g-0 campaigns usepoint">
                    <div className="campaign-icon p-2"></div>
                    <div className="col px-2 pb-2">
                        <input
                            type="number"
                            className="form-control"
                            placeholder={`ใช้ได้สูงสุด ${maxPointDiscount} แต้ม`}
                            value={pointInput}
                            onChange={handlePointChange}
                            min="0"
                            max={maxPointDiscount}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Campaigns;