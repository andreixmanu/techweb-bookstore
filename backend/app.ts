import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';
import auctionRoutes from './routes/auctionRoutes';
import indexRoutes from './routes/indexRoutes';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// mongodb setup
mongoose.connect('mongodb://mongodb:27017/uni-bookstore')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);

app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/auction', auctionRoutes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;

