import MasterFox from './index';

MasterFox.login('https://concierge.food.ee/')
  .then(client =>
    client
      .restaurants
      .index({
        include: 'owner'
      })
      .then((restos) => {
        console.log(restos.length);
        console.log(restos.total);
        console.log(restos.hasMore);

        restos.forEach(resto => console.log(resto.owner))
      })
      .catch(console.error)
  )
