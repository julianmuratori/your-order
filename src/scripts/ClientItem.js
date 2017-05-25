import React from "react";

class ClientItem extends React.Component {

  addToOrder(e) {
    e.preventDefault();
    const quantity = this.quantity.value;
    if (isNaN(quantity) || quantity > this.props.details.quantity || quantity === "") {
      console.log("nope")
    } else {
      const item = {
        quantity: quantity,
        name: this.props.details.name,
        price: this.props.details.price,
        priceStyle: this.props.details.priceStyle,
        notes: this.props.details.notes,
        key: this.props.itemKey
      }
      this.props.addToOrder(item);
      this.inputForm(reset);
    }

  }

  render() {
    return (
      <div>
        <div className="itemContainer">
          <div className="threeAcross">
            <h4>{this.props.details.name}</h4>
          </div>
            <div className="item-price threeAcross"><p>Cost : ${this.props.details.price}/{this.props.details.priceStyle}</p></div>
            <div className="item-availability threeAcross"><p>Available: { this.props.details.quantity}</p></div>
          <div className="item-notes">
            <p>Product Notes: {this.props.details.notes}</p>
          </div>
          <form className="item-ordering" ref={(input) => this.inputForm = input} onSubmit={(e) => this.addToOrder(e)}>
            <div className="item-ordering-quantity">
              <input type="text" placeholder="How Many?" ref={(input) => this.quantity = input}/>
            </div>
            <div className="item-ordering-submit">
              <button type="submit" className="button">Add to Order</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ClientItem;
