import React from 'react';
import AddItem from './AddItem';
import Inventory from './Inventory';

class Supplier extends React.Component {

  render() {
    return(
      <div>
        <div className="new-item">
          <AddItem addItem={this.props.addItem}/>
        </div>
        <div className="inventoryList">
          <div className="List-Headings">
            <div className="List-Headings-Container"><h3>Item Name</h3></div>
            <div className="List-Headings-Container"><h3>Price</h3></div>
            <div className="List-Headings-Container"><h3>Quantity Available</h3></div>
            <div className="List-Headings-Container"><h3>Notes</h3></div>
            <div className="List-Headings-Container"><h3>Delete Entry?</h3></div>
          </div>
          <ul className="liststyle">
            {
              Object
              .keys(this.props.inventoryItems)
              .map(key => <Inventory itemKey={key} key={key} addOne = {this.props.addOne} removeOne = {this.props.removeOne} removeItem={this.props.removeItem} inventoryItems={this.props.inventoryItems} details={this.props.inventoryItems[key]}/>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Supplier;
