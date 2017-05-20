import React from 'react';
import AddItem from './AddItem';
import Inventory from './Inventory';
import ClientItem from './ClientItem';

class Client extends React.Component {

  render() {
    return(
      <div className="clientContainer">
        <div className="client50 productList">
          <h3>Items Available</h3>
          <div>
            {
              Object
              .keys(this.props.inventoryItems)
              .map(key => <ClientItem itemKey={key}
                          key={key}
                          inventoryItems={this.props.inventoryItems}
                          addToOrder={this.props.addToOrder}
                           details={this.props.inventoryItems[key]} />)
            }
          </div>
        </div>
        <div className="client50 orderList">
          <h3>Order Summary</h3>
        </div>
      </div>
    )
  }
}

export default Client;
