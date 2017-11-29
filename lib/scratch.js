'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.login('https://concierge.food.ee/', 'joe.gaudet@food.ee', '$Yjn2JFWMTBi7)').then(function (client) {
  return client.orders.get('119575', {
    include: 'order-items.menu-item'
  }).then(function (order) {
    console.log(order);
  }).catch(console.error);
});