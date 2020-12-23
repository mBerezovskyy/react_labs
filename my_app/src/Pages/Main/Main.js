import Slider from '../../components/Slider/slider';
import ItemsTypes from '../../components/ItemsTypes/itemsTypes';
import FeaturedBlogs from '../../components/FeaturedBlogs/FeaturedBlogs';
import Bestsellers from '../../components/Bestsellers/Bestsellers';

import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <div>
      <Slider />
      <ItemsTypes />
      <div style={{ marginTop: 80 + 'px' }}></div>
      <h1 className="text-center section-name">Best sellers</h1>
      <div className="section-line"></div>
      <Bestsellers />

      <h1 className="text-center section-name">Our blog</h1>
      <div className="section-line"></div>
      <FeaturedBlogs />
      <div style={{ marginTop: 80 + 'px' }}></div>
    </div>
    // <h1>main</h1>
  );
}

export default Main;
