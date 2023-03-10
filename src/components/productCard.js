import { Card, Button, Form, Row, Col }  from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function Productcard(props) { // props.product is the product we're selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
      <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        { productQuantity > 0 ?
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
               <Col sm="6">
                 <Button sm="6" onClick={() => cart.addOneToCart(product.id)} classname="mx-2">+</Button>
                 <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} classname="mx-2">-</Button>
               </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>
          </>
          :
           <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>ADD TO CART</Button>
        }
      </Card.Body>
    </Card>
    )
}


export default Productcard;
