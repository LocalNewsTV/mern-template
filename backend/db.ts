/**
 * @summary setup for mongoose connection to MongoDB. Determines if running in live deployment
 *          to determine correct connection. Communicates in console whether connection is
 *          successful.
 * @author LocalNewsTV
 */
/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', true);

// eslint-disable-next-line no-extra-boolean-cast
const MONGO_HOSTNAME = !!process.env.CONTAINERIZED ? process.env.MONGO_SERVICE : 'localhost';
const CONNECTION_STRING = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${MONGO_HOSTNAME}:${process.env.MONGO_PORT}`;

const reconnect = () => {
  console.log('Attempting to reconnect to MongoDB...');
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(CONNECTION_STRING.concat(`/${process.env.MONGO_DATABASE}`));
  }
};

mongoose.connect(CONNECTION_STRING.concat(`/${process.env.MONGO_DATABASE}`));

mongoose.connection.on('connected', () => {
  console.info('Successfully connected to Mongoose');
});

mongoose.connection.on('error', (err) => {
  console.warn(`Mongoose connection error: ${err}`);
  reconnect();
});

mongoose.connection.on('close', () => {
  console.warn('Mongoose connection closed');
});

mongoose.connection.on('reconnected', () => {
  console.info('Successfully reconnected to Mongoose');
});
