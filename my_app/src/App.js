import Menu from './components/Menu/menu';
import Slider from './components/Slider/slider';
import ItemsList from './components/ItemsList/itemsList';
import ItemsTypes from './components/ItemsTypes/itemsTypes';
import BlogArticlesList from './components/BlogArticlesList/blogArticlesList';
import Footer from './components/Footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <Slider />
      <ItemsTypes />
      <div style={{ marginTop: 80 + 'px' }}></div>
      <h1 className="text-center section-name">Best sellers</h1>
      <div className="section-line"></div>
      <ItemsList />
      <div style={{ marginTop: 80 + 'px' }}></div>
      <h1 className="text-center section-name">Our blog</h1>
      <div className="section-line"></div>
      <BlogArticlesList />
      <div style={{ marginTop: 80 + 'px' }}></div>
      <Footer />
    </div>
  );
}

export default App;
