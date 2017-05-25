import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from "./Login";
import App from "./app";
import Supplier from "./Supplier";
import Client from "./Client";


render((<BrowserRouter>
      <div>
        <Switch>
        <Route exact path="/" component={Login}/>
          <Route path="/store/:storeId" component={App}/>
          <Route path="/store/:storeId/apple" component={Supplier}></Route>
          <Route path="/store/:storeId/banana" component={Client}></Route>
        {/* </Route> */}
        </Switch>
      </div>
    </BrowserRouter>), document.getElementById('main'));
