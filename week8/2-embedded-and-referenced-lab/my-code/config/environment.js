const port = process.env.port || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/fish';
const secret = process.env.SECRET || 'moth';

module.exports = {
  port, dbUri, secret
};
