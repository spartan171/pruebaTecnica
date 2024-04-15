require('dotenv').config();

const config = {
  apiPort: process.env.API_PORT || 3002
}

module.exports = {config};
