import React from "react";

import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product/Index";
import ProductList from "components/ProductList/Index";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

const App = () => {
  const { show, index } = routes.products;

  return (
    <Switch>
      <Route exact component={ProductList} path={index} />
      <Route exact component={Product} path={show} />
      <Redirect exact from="/" to="/products" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  );
};

export default App;
