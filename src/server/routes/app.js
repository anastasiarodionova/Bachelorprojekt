import router from './router';
import {getHomeData, getProducts} from './get-data';

getHomeData();
getProducts();

app.use(router);

// Catch 404 and forward to error handler.
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


export default app;