var config={};

//rtr : database called restaurant to room
config.mongoUri = 'mongodb://localhost:27017/rtr';
//30 days
config.cookieMaxAge = 30 * 24 * 3600 * 1000;
config.ordrxKey = 'J3hHrYriiJQ7akUgsmJZGO591e8Gvl-MSwsFwdtpDnA';
config.address = {
  addr: '288 Coleridge St.',
  city: 'San Francisco',
  zip: '94110',
  state: 'CA'
};
config.phone = '415-555-1234';
module.exports = config;