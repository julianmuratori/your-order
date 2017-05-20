import React from 'react';

class OrderCard extends React.Component {

  render() {
    const itemCost = (this.props.details.quantity * this.props.details.price).toFixed(2);

    return (
      <div>
        <div>
          <h6>{this.props.details.name}</h6>
        </div>
        <div>
          <div><h5>{this.props.details.quantity}<span>{this.props.details.priceStyle}</span></h5></div>
          <div><h5>${itemCost}</h5></div>
        </div>
        <div><p>Notes: {this.props.details.notes}</p></div>
      </div>
    )
  }
}

export default OrderCard;
