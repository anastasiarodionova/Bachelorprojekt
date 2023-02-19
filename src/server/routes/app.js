import router from './router';
import express from 'express';
import {getHomeData, getProducts} from './get-data';
import categories from '../data/categories';

const app = express();
const rootDir = path.join(__dirname, '..');
const staticDir = path.join(rootDir, 'static');

getHomeData();
getProducts();

app.use(router);

// Catch 404 and forward to error handler.
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler.
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error('Error in app.js:', err);
  // Render the error page.
  res.status(err.status || 500);
  res.render('error', {
    categories: categories,
  });
});

export default app;