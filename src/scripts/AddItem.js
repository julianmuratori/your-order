import React from 'react';

class AddItem extends React.Component {
  createItem(e) {
    e.preventDefault();
    const price = this.price.value;
    const quantity = this.quantity.value;
    if (isNaN(price) || price === "") {
      console.log("enter a valid value")
    } else if (isNaN(quantity) || quantity === "") {
      console.log("enter a valid quantity")
    } else {
      const item = {
        name: this.name.value,
        price: price,
        priceStyle: this.priceStyle.value,
        quantity: quantity,
        desc: this.desc.value
      }
      this.props.addItem(item);
      this.inputForm.reset();
    }
  }



  render() {
    return(
      <div>
        <form action="" ref={(input) => this.inputForm = input} onSubmit={(e) => this.createItem(e)}>
          <input className="new-item-inputs" ref={(input) => this.name = input} type="text" placeholder="New Item"/>
          <input className="new-item-inputs" ref={(input) => this.price = input} type="text" placeholder="Item Price"/>
          <select className="new-item-inputs" ref={(input) => this.priceStyle = input}>
            <option value="pc">Per Piece</option>
            <option value=" kg">Per kg</option>
          </select>
          <input className="new-item-inputs" ref={(input) => this.quantity = input} type="text" placeholder="Quantity"/>
          <textarea className="new-item-inputs" ref={(input) => this.desc = input} placeholder="Product Notes"/>
          <button className="new-item-inputs" type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}

export default AddItem;
