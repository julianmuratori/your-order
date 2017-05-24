import React from 'react';

class OrderCard extends React.Component {

  removeItem(e) {
    const item = this.props.itemKey;
    this.props.deleteFromOrder(item);
  }

  render() {
    const itemCost = (this.props.details.quantity * this.props.details.price).toFixed(2);

    return (
      <div className="orderCard">
        <div className="threeAcross">
          <p>{this.props.details.name}</p>
        </div>
        <div className="threeAcross">
          <p>{this.props.details.quantity}<span>{this.props.details.priceStyle}</span></p>
        </div>
        <div className="threeAcross">
          <p>${itemCost}</p>
        </div>
        <div className="orderCard-Notes">
          <div>
            <p className="orderCard-Notes-Heading">Notes</p>
            <p>{this.props.details.notes}</p>
          </div>
          <div>
            <button className="button" onClick={(e) => this.removeItem(e)}>Remove?</button>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderCard;
