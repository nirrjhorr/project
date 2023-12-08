import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CartScreen() {
  // Get user info and dispatch function from the global state
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;

  // UseNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Check if the user is an admin
  if (userInfo && userInfo.isAdmin) {
    return (
      <div>
        {/* Display a message or redirect for admin access denial */}
        <Helmet>
          <title>Admin Access Denied</title>
        </Helmet>
        <MessageBox>
          Admins are not allowed to access the shopping cart.
        </MessageBox>
      </div>
    );
  }

  // Function to update the cart item quantity
  const updateCartHandler = async (item, quantity) => {
    // ... (existing logic)
  };

  // Function to remove an item from the cart
  const removeItemHandler = (item) => {
    // ... (existing logic)
  };

  // Function to handle the checkout process
  const checkoutHandler = () => {
    // Redirect to the signin page with a redirect query parameter
    navigate('/signin?redirect=/shipping');
  };

  // Render the cart screen for non-admin users
  return (
    <div>
      {/* Set the HTML document title */}
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>

      {/* Display the heading */}
      <h1>Shopping Cart</h1>

      {/* Display cart items and checkout summary */}
      <Row>
        {/* Cart Items */}
        <Col md={8}>
          {/* Check if the cart is empty */}
          {cartItems.length === 0 ? (
            // Display a message and a link to go shopping if the cart is empty
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            // Display the list of cart items
            <ListGroup>
              {cartItems.map((item) => (
                // Render each cart item as a list group item
                <ListGroup.Item key={item._id}>
                  {/* Display item details and provide actions */}
                  <Row className="align-items-center">
                    {/* ... (existing code) */}
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        {/* Checkout Summary */}
        <Col md={4}>
          {/* Display a card with the checkout summary */}
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                {/* Display the subtotal and total items */}
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : BDT{' '}
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>

                {/* Display the checkout button */}
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
