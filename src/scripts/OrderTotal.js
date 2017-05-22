import React from 'react';


class OrderTotal extends React.Component {

  render() {

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

    return (
      <div>
        <h5>${order().toFixed(2)}</h5>
      </div>
    )
  }
}

export default OrderTotal
