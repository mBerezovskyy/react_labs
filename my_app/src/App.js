import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import SingleItemPage from './components/SingleItemPage/SingleItemPage';
import SingleBlogPage from './components/SingleBlogPage/SingleBlogPage';

import Blog from './Pages/Blog/Blog';
import Contacts from './Pages/Contacts/Contacts';
import Catalog from './Pages/Catalog/Catalog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />

            <Route path="/blog" component={Blog} exact />
            <Route path="/catalog" component={Catalog} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/axe/:id" component={SingleItemPage} exact />
            <Route path="/blog/:id" component={SingleBlogPage} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/checkout" component={Checkout} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
