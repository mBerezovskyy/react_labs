import { React } from 'react';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import SingleItemPage from './components/SingleItemPage/SingleItemPage';
import SingleBlogPage from './components/SingleBlogPage/SingleBlogPage';

import Main from './Pages/Main/Main';
import Blog from './Pages/Blog/Blog';
import Contacts from './Pages/Contacts/Contacts';
import Catalog from './Pages/Catalog/Catalog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/" component={Main} exact />
      <Route path="/blog" component={Blog} exact />
      <Route path="/catalog" component={Catalog} exact />
      <Route path="/contacts" component={Contacts} exact />
      <Route path="/axe/:id" component={SingleItemPage} exact />
      <Route path="/blog/:id" component={SingleBlogPage} exact />
      <Footer />
    </Router>
  );
}

export default App;
