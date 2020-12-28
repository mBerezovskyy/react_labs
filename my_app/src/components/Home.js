import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './store/actions/cartActions';

import { Link } from 'react-router-dom';

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img_url} alt={item.brand} />
            <span className="card-title">{item.brand}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.description}</p>
            <p>
              <b>Price: {item.price}$</b>
              <br />
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our Axes</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
