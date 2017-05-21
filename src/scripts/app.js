import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Supplier from './Supplier';
import Login from './Login';
import Client from './Client';



class App extends React.Component {
  constructor() {
		super();

    // this.Supplies = this.Supplies.bind(this);
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.removeOne = this.removeOne.bind(this);
		this.addOne = this.addOne.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

		// get initial state
		this.state = {
			inventoryItems: {
				item1: {
					name: "apple",
					price: 1,
					priceStyle: "pc",
					quantity: 4,
					notes: "Tastes great"
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
      // newItems[item] = Number.parseInt(newItems[item])
      newItems[item].quantity = parseInt(newItems[item].quantity);
      newItems[item].quantity = (newItems[item].quantity + 1);
      // console.log(newItems[item])
      this.setState({
        inventoryItems: newItems
      })
    }

    addToOrder(item) {
      const newItems = this.state.inventoryItems;
      const newOrder = this.state.order;
      newItems[item.key].quantity = (newItems[item.key].quantity) - (item.quantity);

      Object.keys(newOrder)
      .map(key => {
        if (key === item.key) {
          console.log(newOrder[key].quantity);
          console.log(item.quantity);
          item.quantity = ((newOrder[key].quantity*1) + (item.quantity*1));
          console.log(item.quantity);
        }
      })
      // console.log(newOrder[item.key]);
      newOrder[item.key] = item;
      // console.log(newOrder[item.key]);

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
           {...props}
        />
      );
    }

    return (
      <Router>
      <div className="mainSplash">
        <div className="splashOptions">
          <ul>
            <li><Link to="/apple">Supplier</Link></li>
            <li><Link to="/banana">Client</Link></li>
          </ul>
          <hr/>
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
