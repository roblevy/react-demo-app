const port = process.env.port || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/fish';

module.exports = {
  port, dbUri
};
