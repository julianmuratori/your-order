import React from 'react';


class OrderTotal extends React.Component {

  render() {
  	const order = this.props.orderItems;
  	const total = () => {
  		let cost = 0;
  		// Object.keys(order)
  		// 		.map(key => console.log("hi"))
  		console.log("hi")
  	}
    return (
      <div>
        <h5>{this.total()}</h5>
      </div>
    )
  }
}

export default OrderTotal
