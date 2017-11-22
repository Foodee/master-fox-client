'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _index2.default('https://concierge.food.ee/', 'H7jPOjCbT1deq+uSCmcSjwzp5kDambeXPnLieHYMZgkFCYBCG0tYpQ==');

client.restaurants.index({
  page: {
    limit: 100,
    offset: 900
  },
  include: 'owner'
}).then(function (restos) {
  console.log(restos.length);
  console.log(restos.total);
  console.log(restos.hasMore);

  restos.forEach(function (resto) {
    return console.log(resto.owner);
  });
}).catch(console.error);