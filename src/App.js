import { useState } from 'react';
import './App.css';
import Items from './components/AppItems';
import CampaignsModal from './components/CampaignModal';
import items from './data/items';
import Summary from './components/AppSummary';

function App() {
    const itemElements = items.map((item, index) => {
        return <Items key={index} item={item} />;
    });

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [appliedCampaigns, setAppliedCampaigns] = useState({});
    
    return (
        <div className="container">
            <div className="header py-4">
                <i className="fa-solid fa-store"></i>
                <h1 className="mt-3 mb-0">Checkout</h1>
            </div>
            <div className="row g-3">
                <div className="col-sm-8">
                    <div className="card">
                        <h5 className="card-header">Cart</h5>
                        <div className="card-body">
                            {itemElements}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <CampaignsModal onApplyCampaigns={setAppliedCampaigns} subtotal={subtotal} />
                    <Summary items={items} appliedCampaigns={appliedCampaigns} subtotal={subtotal} />
                </div>
            </div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-body-secondary">Playtorium Test</p>
                <p class="col-md-4 mb-0 text-body-secondary text-end">Metawee Charoentungsirikul</p>
            </footer>
        </div>
    );
}

export default App;
