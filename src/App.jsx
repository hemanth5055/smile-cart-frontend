import React from "react";

import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product/Index";
import ProductList from "components/ProductList/Index";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/products/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
