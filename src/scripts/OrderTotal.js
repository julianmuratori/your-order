import React from 'react';


class OrderTotal extends React.Component {

  render() {

  	const total = () => {
  		// let cost = 0;
      const order = () => {
        const orderItem = this.props.orderItems;
        let cost = 0;
        Object.keys(orderItem)
          .map(key => {
            parseInt(orderItem[key].quantity);
            let multiplier = (orderItem[key].price * orderItem[key].quantity);
            return cost = multiplier + cost;
          })
        return cost;
        }
        // order();
        return order().toFixed(2);
  	}
    return (
      <div>
        <h5>${total()}</h5>
      </div>
    )
  }
}

export default OrderTotal
