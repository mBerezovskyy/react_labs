import { React } from 'react';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import SingleItemPage from './components/SingleItemPage/SingleItemPage';

import Main from './Pages/Main/Main';
import Blog from './Pages/Blog/Blog';
import Contacts from './Pages/Contacts/Contacts';
import Catalog from './Pages/Catalog/Catalog';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/" component={Main} exact />
      <Route path="/blog" component={Blog} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/axe/:id" component={SingleItemPage} />
      <Footer />
    </Router>
  );
}

export default App;
