import cart from './routes/cart';
import index from './index';
import payment from './routes/payment';
import product from './routes/product';
import {Router} from 'express';
const router = new Router();


router.get('/cart', cart);
router.get('/payment', payment.get);
router.get('/confirmation', payment.confirm);
router.get('/index.html)/', index);
router.get('/products/:id', product.get);

router.post('/:id/cart', product.addToCart);
router.post('/products/:id', product.index);
router.post('/payment', payment.pay);


export default router;