import React from 'react';


class OrderTotal extends React.Component {

  render() {

  	const total = () => {
  		// let cost = 0;
      const order = () => {
        const orderItem = this.props.orderItems;
        Object.keys(orderItem)
          .map(key => {
            let cost = 0;
            parseInt(orderItem[key].quantity);
            let multiplier = (orderItem[key].price * orderItem[key].quantity);
            // cost = (this.props.orderItems[key].price + cost);
            // console.log(multiplier);
          })
        }
        order();
  	}
    return (
      <div>
        <h5>{total()}</h5>
      </div>
    )
  }
}

export default OrderTotal
