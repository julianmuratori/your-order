import React from 'react';
import AddItem from './AddItem';
import Inventory from './Inventory';
import ClientItem from './ClientItem';
import OrderCard from './OrderCard';
import OrderTotal from './OrderTotal';

class Client extends React.Component {

  render() {
    return(
      <div className="clientContainer">
        <div className="client50 productList">
          <h3>Items Available</h3>
          <div className="productList-Cards">
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
        <div className="client50">
          <h3>Order Summary</h3>
          <div className="orderList orderCard-Container">
            {
              Object
              .keys(this.props.orderItems)
              .map(key => <OrderCard itemKey={key}
                            key={key}
                            deleteFromOrder={this.props.deleteFromOrder}
                            orderItems={this.props.orderItems}
                            details={this.props.orderItems[key]}
                            />)
            }
            <div className="">
              <h4>Your Total</h4>
              <OrderTotal orderItems={this.props.orderItems}/>
            </div>
          </div>
       </div>
      </div>
    )
  }
}

export default Client;
