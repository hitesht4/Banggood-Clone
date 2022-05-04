import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/ContextProvider";
// import Navabar from '../Components/Navabar';
import styles from '../Components/Cartstyles.css';
import Navabar from "../Components/Navabar";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
    <Navabar></Navabar>
    <div className="home">
      
      <div className="productContainer" >
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span><h6>{prod.name}</h6></span>
                </Col>
                <Col style={{color:"#ff6e26",fontWeight:"bold"}}md={2}>$ {prod.price}</Col>
                <Col md={2}>
                </Col>
                <Col md={2}>
                <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                      <option key={1}>1</option>
                      <option key={2}>2</option>
                      <option key={3}>3</option>
                      <option key={4}>4</option> 
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>{total}</span>
        <Button 
        type="button" 
        disabled={cart.length === 0} 
        variant="danger" 
        className="py-3">
          Proceed to Checkout
        </Button>
      </div>
    </div>
    </>
  );
};
// Total: ₹ (`Math.round${total}`

export default Cart;



