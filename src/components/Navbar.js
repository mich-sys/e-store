import {Button, Navbar, Modal} from 'react-bootstrap'
import {useState, useContext} from 'react';
import { CartContext } from "../CartContext"
import CartProduct from './CartProduct';


function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


   return(
    <>
      <Navbar expand="sm">
          <Navbar.Brand href="/"> Ecommerce Store </Navbar.Brand>
            <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
         <Button onClick={handleShow}> Cart({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {productsCount > 0 ?
            <>
              <p>Items In Your Cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
              ))}

                 <h1>Total: {cart.getTotalCost()}</h1>

                 <Button variant="success">
                  Purchase Items!
                 </Button>
            </>
          :
            <h1>There Are No Items In Your Cart</h1>
        }
        </Modal.Body>
      </Modal>

    </>
   );

}

export default NavbarComponent;
