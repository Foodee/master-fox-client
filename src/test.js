import MasterFox from './index';

const client = new MasterFox('https://concierge.food.ee/', 'H7jPOjCbT1deq+uSCmcSjwzp5kDambeXPnLieHYMZgkFCYBCG0tYpQ==');

client
  .restaurants
  .index({
    page: {
      limit: 100,
      offset: 900
    }
  })
  .then((restos) => {
    console.log(restos.length);
    console.log(restos.total);
    console.log(restos.hasMore);
  })
  .catch(console.error);

