import {Row, Col} from  'react-bootstrap';
import {productsArray} from '../productStore';
import Productcard from '../components/productCard';

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">Welcome To The Store.</h1>
      <Row xs={1} md={3} className="g-4">
         {productsArray.map((product, idx) => (
            <Col align="center" key={idx}>
               <Productcard product={product} />
            </Col>
         ))}
       

        
      </Row>
    </>
  )
}

export default Store;