import React from "react";

class ClientItem extends React.Component {

  addToOrder(e) {
    e.preventDefault();
    console.log(this.quantity.value);
  }

  render() {
    return (
      <div>
        <div className="itemContainer">
          <div>
            <h1>{this.props.details.name}</h1>
          </div>
          <div className="item-price-availability">
            <div className="item-price"><p>${this.props.details.price}/{this.props.details.priceStyle}</p></div>
            <div className="item-availability"><p>{this.props.details.quantity}</p></div>
          </div>
          <div className="item-notes">
            <p>Product Notes: {this.props.details.notes}</p>
          </div>
          <form className="item-ordering" onSubmit={(e) => this.addToOrder(e)}>
            <div className="item-ordering-quantity">
              <input type="text" placeholder="How Many?" ref={(input) => this.quantity = input}/>
            </div>
            <div className="item-ordering-submit">
              <button type="submit">Add to Order</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ClientItem;
