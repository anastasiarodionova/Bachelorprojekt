import {Router} from 'express';
const router = new Router();

router.get(/\/(index.html)?$/, index);
router.get('/products/:id', product.get);

router.post('/:id/cart', product.addToCart);
router.post('/products/:id', product.index);
router.post('/payment', payment.pay);

export default router;