'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.login('https://concierge.food.ee/').then(function (client) {
  return client.restaurants.index({
    include: 'owner'
  }).then(function (restos) {
    console.log(restos.length);
    console.log(restos.total);
    console.log(restos.hasMore);

    restos.forEach(function (resto) {
      return console.log(resto.owner);
    });
  }).catch(console.error);
});