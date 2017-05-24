import React from 'react';
import {render} from 'react-dom';
// import { browserHistory, Router, Link } from 'react-router';
// import { BrowserRouter, Match, Miss } from 'react-router'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from "./Login";
import App from "./app";
import Supplier from "./Supplier";
import Client from "./Client";


render((<BrowserRouter>
      <div>
        <Switch>
        <Route exact path="/" component={Login}/>
          <Route path="/store/:storeId" component={App}>
          <Route path="/apple" component={Supplier}></Route>
          <Route path="/banana" component={Client}></Route>
        </Route>
        </Switch>
      </div>
    </BrowserRouter>), document.getElementById('main'));
