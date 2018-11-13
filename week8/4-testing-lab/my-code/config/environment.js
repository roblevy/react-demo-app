const port = process.env.port || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbUri = process.env.MONGODB_URI || `mongodb://localhost/desserts-${env}`; // this gives us a different db depending on if we're testing or not
const secret = process.env.SECRET || 'moth';

module.exports = {
  port, dbUri, secret, env
};
