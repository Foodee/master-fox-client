import MasterFox from './index';

// const client = new MasterFox('https://concierge.food.ee/', 'H7jPOjCbT1deq+uSCmcSjwzp5kDambeXPnLieHYMZgkFCYBCG0tYpQ==');
// client
//   .restaurants
//   .get(1, {
//     include: 'owner'
//   })
//   .then((resto) => {
//     console.log(resto.name)
//     console.log(resto.owner.firstName)
//   });
// client.restaurants
//   .index({})
//   .then((restos) => {
//     restos.forEach(_ => console.log(_.name));
//   });
// client.restaurants.create(new Restaurant());
// client.restaurants.create(new Restaurant());
// client
//   .restaurants
//   .from(1)
//   .get
//   .owner({})
//   .then((owner) => {
//     console.log(owner.firstName);
//     console.log(owner.lastName);
//     console.log(owner.email);
//   });
// client
//   .restaurants
//   .from(1)
//   .index
//   .serviceTimes({})
//   .then((serviceTimes) => {
//     console.log(serviceTimes);
//   });

  const client = MasterFox
    .login('https://concierge.food.ee/', 'joe.gaudet@food.ee', '$Yjn2JFWMTBi7)')
    .then((client) =>
      client
        .restaurants
        .get(1, {
          include: 'owner'
        })
        .then((resto) => {
          console.log(resto.name)
          console.log(resto.owner.firstName)
        })
    )

