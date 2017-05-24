import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Supplier from './Supplier';
import Login from './Login';
import Client from './Client';
import base from '../base';


class App extends React.Component {
  constructor() {
		super();

    // this.Supplies = this.Supplies.bind(this);
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.removeOne = this.removeOne.bind(this);
		this.addOne = this.addOne.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteFromOrder = this.deleteFromOrder.bind(this);

		// get initial state
		this.state = {
			inventoryItems: {
				item1: {
					name: "apple",
					price: 11,
					priceStyle: "pc",
					quantity: 477,
					notes: "Tastes great"
				},
        item2: {
          name: "banana",
          price: 13,
					priceStyle: "pc",
					quantity: 477,
					notes: "Tastes bad"
        }
			},
			order: {}
		};
	}



  // function to add items to inventory
	  addItem(item) {
	    // makes a copy of state
	   const newItems = this.state.inventoryItems;
	    // add new item
	    const timestamp = Date.now();
	    newItems[`item-${timestamp}`] = item;
	    // // set state
	    this.setState({
				inventoryItems: newItems
			})
	  }
    // removes item from an order
  		removeItem(item) {
  			const newItems = this.state.inventoryItems;
  			delete newItems[item];
  			this.setState({
  				inventoryItems: newItems
  			})
  		}

    // Removes a single quantity number from a count
    removeOne(item) {
      const newItems = this.state.inventoryItems;
      // let price = newItems[item].price;
      if (newItems[item].quantity === 0) {
        console.log("can't go negative")
      } else {
        newItems[item].quantity = newItems[item].quantity - 1;
      }
      this.setState({
        inventoryItems: newItems
      })
    }

    // adds a single quantity number to a count
    addOne(item) {
      const newItems = this.state.inventoryItems;
      newItems[item].quantity = parseInt(newItems[item].quantity);
      newItems[item].quantity = (newItems[item].quantity + 1);
      this.setState({
        inventoryItems: newItems
      })
    }

    // Adds a selected item to checkout basket
    addToOrder(item) {
      const newItems = this.state.inventoryItems;
      const newOrder = this.state.order;
      newItems[item.key].quantity = (newItems[item.key].quantity) - (item.quantity);


      // Maps over state and checks to see if item already exists
      // If it does, it adds previous order quantity to new order quantity
      Object.keys(newOrder)
      .map(key => {
        if (key === item.key) {
          item.quantity = ((newOrder[key].quantity*1) + (item.quantity*1));
        }
      })
      newOrder[item.key] = item;

      this.setState({
        inventoryItems: newItems,
        order: newOrder
      })
    }

    deleteFromOrder(item) {
      const newOrder = this.state.order;
      const newItems = this.state.inventoryItems;

      // Takes the deleted item's quantity on the order summary and adds it back to inventory
      newItems[item].quantity = ((newItems[item].quantity * 1) + (newOrder[item].quantity * 1));

      // Deletes the item from the order summary
      delete newOrder[item];

      this.setState({
        inventoryItems: newItems,
        order: newOrder
      })

    }



  render() {
    const Supplies = (props) => {
      return (
        <Supplier inventoryItems={this.state.inventoryItems}
          addItem={this.addItem}
          removeItem={this.removeItem}
          addOne = {this.addOne}
          removeOne = {this.removeOne}
           {...props}
        />
      );
    }

    const ClientSide = (props) => {
      return (
        <Client inventoryItems={this.state.inventoryItems}
          orderItems={this.state.order}
          addItem={this.addItem}
          removeItem={this.removeItem}
          addOne = {this.addOne}
          removeOne = {this.removeOne}
          addToOrder = {this.addToOrder}
          deleteFromOrder = {this.deleteFromOrder}
           {...props}
        />
      );
    }

    return (
      <Router>
      <div>
        <div className="nav">
          <ul>
            <div className="navLinks"><li><h2><Link to="/apple">Supplier</Link></h2></li></div>
            <div className="navLinks"><li><h2><Link to="/banana">Client</Link></h2></li></div>
          </ul>
          {/* <hr/> */}
          <Route exact path="/banana" render={ClientSide}/>
          <Route exact path="/apple" render={Supplies}/>
          <ClientSide />
        </div>
      </div>
      </Router>
    )
  }
}
export default App;
