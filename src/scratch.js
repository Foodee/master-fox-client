import MasterFox from './index';

MasterFox.login('https://concierge.food.ee/', 'joe.gaudet@food.ee', '$Yjn2JFWMTBi7)')
  .then(client =>
    client
      .orders
      .get('119575', {
        include: 'order-items.menu-item'
      })
      .then((order) => {
        console.log(order);
      })
      .catch(console.error)
  );
