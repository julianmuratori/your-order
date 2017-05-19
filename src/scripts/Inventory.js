import React from 'react';

class Inventory extends React.Component {

    removeItem(e) {
      e.preventDefault();
      const item = this.props.itemKey;
      this.props.removeItem(item);
    }

    addOne(e) {
      const item = this.props.itemKey;
      this.props.addOne(item);
    }

    removeOne(e) {
      const item = this.props.itemKey;
      this.props.removeOne(item)
    }

    render() {
      return(

          <li>
            <div className="List-Entries">
              <div>
                <input type="text" name="name" value={this.props.details.name}/>
              </div>
              <div>
                <input type="text" name="price" value={this.props.details.price}/>
              </div>
              <div className="quantity">
                <div className="quantity-container">
                  <div>
                    <p>{this.props.details.quantity}{this.props.details.priceStyle}</p>
                  </div>
                  <div>
                    <button onClick={ (e) => this.addOne(e)}>+</button>
                    <button onClick={ (e) => this.removeOne(e)}>-</button>
                  </div>
                </div>
              </div>
              <div>
                <textarea className="notes" type="text" name="notes" value={this.props.details.desc}/>
              </div>
              <div className="deleteInventoryItem">
                <a href="" className="closeButton" onClick={ (e) => this.removeItem(e)}><i className="fa fa-times"></i></a>
              </div>
            </div>
          </li>
      )
    }
}

export default Inventory;
