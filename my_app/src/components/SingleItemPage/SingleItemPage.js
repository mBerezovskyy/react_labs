// import React, { useState, Fragment } from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, Container } from 'react-bootstrap';

// import axios from 'axios';

// export default function SingleItemPage(props) {
//   const { id } = useParams();

//   const [appState, setAppState] = useState({});

//   axios.get(`/axe/${id}`).then(data => {
//     setAppState(data.data);
//     console.log(appState);
//   });

//   return (
//     <Fragment>
//       <Container>
//         <div style={{ marginTop: 80 + 'px' }} />

//         <Card>
//           <Card.Img variant="top" src={appState.img_url} />
//           <Card.Body>
//             <Card.Title className="text-center">{appState.brand}</Card.Title>
//             <Card.Text className="text-center">{appState.description}</Card.Text>
//             <div style={{ marginTop: 20 + 'px', marginBottom: 20 + 'px', height: 1 + 'px', backgroundColor: 'grey' }} />
//             <div className="text-center">
//               <h1 className="price">Price: {appState.price} $</h1>
//             </div>
//           </Card.Body>
//         </Card>
//       </Container>
//       <div style={{ marginTop: 80 + 'px' }} />
//     </Fragment>
//   );
// }

import React, { Component, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

import axios from 'axios';

class SingleItemPage extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img_url} alt={item.brand} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.brand}</span>
              <p>{item.description}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        {/* <Recipe /> */}
      </div>
    );
  }
}

export default SingleItemPage;
