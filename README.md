# MasterFox JsonAPI Client

## TOC

- Resources
    - [AppConfiguration](#resource-AppConfiguration)
    - [Area](#resource-Area)
    - [AreaClosure](#resource-AreaClosure)
    - [Client](#resource-Client)
    - [ClientDiscount](#resource-ClientDiscount)
    - [ClientOrderInvoice](#resource-ClientOrderInvoice)
    - [ClientSignup](#resource-ClientSignup)
    - [Company](#resource-Company)
    - [Contact](#resource-Contact)
    - [Courier](#resource-Courier)
    - [DeliveryCase](#resource-DeliveryCase)
    - [DeliveryLocation](#resource-DeliveryLocation)
    - [DeskCase](#resource-DeskCase)
    - [DietaryTag](#resource-DietaryTag)
    - [DiscountCode](#resource-DiscountCode)
    - [DriverDay](#resource-DriverDay)
    - [DriverPing](#resource-DriverPing)
    - [DriverWeek](#resource-DriverWeek)
    - [EmailMessage](#resource-EmailMessage)
    - [GiftbitCard](#resource-GiftbitCard)
    - [GiftbitError](#resource-GiftbitError)
    - [GiftbitGift](#resource-GiftbitGift)
    - [GroupOrderMember](#resource-GroupOrderMember)
    - [Invoice](#resource-Invoice)
    - [InvoicingTaxRate](#resource-InvoicingTaxRate)
    - [Location](#resource-Location)
    - [MealPlan](#resource-MealPlan)
    - [Menu](#resource-Menu)
    - [MenuGroup](#resource-MenuGroup)
    - [MenuItem](#resource-MenuItem)
    - [MenuOptionGroup](#resource-MenuOptionGroup)
    - [MenuOptionItem](#resource-MenuOptionItem)
    - [Order](#resource-Order)
    - [OrderItem](#resource-OrderItem)
    - [PaymentCard](#resource-PaymentCard)
    - [PickupLocation](#resource-PickupLocation)
    - [PromoCode](#resource-PromoCode)
    - [QualifyingQuestion](#resource-QualifyingQuestion)
    - [Restaurant](#resource-Restaurant)
    - [RestaurantClosure](#resource-RestaurantClosure)
    - [RestaurantDiscount](#resource-RestaurantDiscount)
    - [RestaurantOrderInvoice](#resource-RestaurantOrderInvoice)
    - [Role](#resource-Role)
    - [SalesforceSyncError](#resource-SalesforceSyncError)
    - [ServiceTime](#resource-ServiceTime)
    - [Tag](#resource-Tag)
    - [User](#resource-User)
    - [UserFeedback](#resource-UserFeedback)
    - [UserInvite](#resource-UserInvite)
    - [Version](#resource-Version)
  
- ResourceFilters
    - [AppConfiguration](#resource-filter-AppConfiguration)
    - [Area](#resource-filter-Area)
    - [AreaClosure](#resource-filter-AreaClosure)
    - [Client](#resource-filter-Client)
    - [ClientDiscount](#resource-filter-ClientDiscount)
    - [ClientOrderInvoice](#resource-filter-ClientOrderInvoice)
    - [ClientSignup](#resource-filter-ClientSignup)
    - [Company](#resource-filter-Company)
    - [Contact](#resource-filter-Contact)
    - [Courier](#resource-filter-Courier)
    - [DeliveryCase](#resource-filter-DeliveryCase)
    - [DeliveryLocation](#resource-filter-DeliveryLocation)
    - [DeskCase](#resource-filter-DeskCase)
    - [DietaryTag](#resource-filter-DietaryTag)
    - [DiscountCode](#resource-filter-DiscountCode)
    - [DriverDay](#resource-filter-DriverDay)
    - [DriverPing](#resource-filter-DriverPing)
    - [DriverWeek](#resource-filter-DriverWeek)
    - [EmailMessage](#resource-filter-EmailMessage)
    - [GiftbitCard](#resource-filter-GiftbitCard)
    - [GiftbitError](#resource-filter-GiftbitError)
    - [GiftbitGift](#resource-filter-GiftbitGift)
    - [GroupOrderMember](#resource-filter-GroupOrderMember)
    - [Invoice](#resource-filter-Invoice)
    - [InvoicingTaxRate](#resource-filter-InvoicingTaxRate)
    - [Location](#resource-filter-Location)
    - [MealPlan](#resource-filter-MealPlan)
    - [Menu](#resource-filter-Menu)
    - [MenuGroup](#resource-filter-MenuGroup)
    - [MenuItem](#resource-filter-MenuItem)
    - [MenuOptionGroup](#resource-filter-MenuOptionGroup)
    - [MenuOptionItem](#resource-filter-MenuOptionItem)
    - [Order](#resource-filter-Order)
    - [OrderItem](#resource-filter-OrderItem)
    - [PaymentCard](#resource-filter-PaymentCard)
    - [PickupLocation](#resource-filter-PickupLocation)
    - [PromoCode](#resource-filter-PromoCode)
    - [QualifyingQuestion](#resource-filter-QualifyingQuestion)
    - [Restaurant](#resource-filter-Restaurant)
    - [RestaurantClosure](#resource-filter-RestaurantClosure)
    - [RestaurantDiscount](#resource-filter-RestaurantDiscount)
    - [RestaurantOrderInvoice](#resource-filter-RestaurantOrderInvoice)
    - [Role](#resource-filter-Role)
    - [SalesforceSyncError](#resource-filter-SalesforceSyncError)
    - [ServiceTime](#resource-filter-ServiceTime)
    - [Tag](#resource-filter-Tag)
    - [User](#resource-filter-User)
    - [UserFeedback](#resource-filter-UserFeedback)
    - [UserInvite](#resource-filter-UserInvite)
    - [Version](#resource-filter-Version)
  

## Data Access
Fetching resources works as follows

```JavaScript
import MasterFox from 'master-fox';
const client = new MasterFox('https://food.ee/api/v3/', '<your-api-key>');
```

### <a name='resource-dao-AppConfiguration'></a>AppConfiguration
See [AppConfiguration](#resource-filter-AppConfiguration) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.appConfigurations.get(1,  options);
const pagedIndexOfResources = await client.appConfigurations.index(1, options);
// Related Resources
// To Many
// Index AppConfiguration#1's versions
const singleResource = await client.appConfigurations.from(1).versions.index(options);
```
### <a name='resource-dao-Area'></a>Area
See [Area](#resource-filter-Area) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.areas.get(1,  options);
const pagedIndexOfResources = await client.areas.index(1, options);
// Related Resources
// To One
// Get Area#1's deliveryFeeTaxRate
const singleResource = await client.areas.from(1).deliveryFeeTaxRate.get(1,  options);
// To Many
// Index Area#1's couriers
const singleResource = await client.areas.from(1).couriers.index(options);
// Index Area#1's clients
const singleResource = await client.areas.from(1).clients.index(options);
// Index Area#1's restaurants
const singleResource = await client.areas.from(1).restaurants.index(options);
// Index Area#1's invoicingTaxRates
const singleResource = await client.areas.from(1).invoicingTaxRates.index(options);
// Index Area#1's globalInvoicingTaxRates
const singleResource = await client.areas.from(1).globalInvoicingTaxRates.index(options);
// Index Area#1's areaClosures
const singleResource = await client.areas.from(1).areaClosures.index(options);
// Index Area#1's currentAreaClosures
const singleResource = await client.areas.from(1).currentAreaClosures.index(options);
// Index Area#1's promoCodes
const singleResource = await client.areas.from(1).promoCodes.index(options);
// Index Area#1's versions
const singleResource = await client.areas.from(1).versions.index(options);
```
### <a name='resource-dao-AreaClosure'></a>AreaClosure
See [AreaClosure](#resource-filter-AreaClosure) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.areaClosures.get(1,  options);
const pagedIndexOfResources = await client.areaClosures.index(1, options);
// Related Resources
// To One
// Get AreaClosure#1's area
const singleResource = await client.areaClosures.from(1).area.get(1,  options);
```
### <a name='resource-dao-Client'></a>Client
See [Client](#resource-filter-Client) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.clients.get(1,  options);
const pagedIndexOfResources = await client.clients.index(1, options);
// Related Resources
// To One
// Get Client#1's defaultArea
const singleResource = await client.clients.from(1).defaultArea.get(1,  options);
// Get Client#1's billingLocation
const singleResource = await client.clients.from(1).billingLocation.get(1,  options);
// Get Client#1's accountManager
const singleResource = await client.clients.from(1).accountManager.get(1,  options);
// Get Client#1's owner
const singleResource = await client.clients.from(1).owner.get(1,  options);
// Get Client#1's company
const singleResource = await client.clients.from(1).company.get(1,  options);
// Get Client#1's mealPlan
const singleResource = await client.clients.from(1).mealPlan.get(1,  options);
// Get Client#1's taxRate
const singleResource = await client.clients.from(1).taxRate.get(1,  options);
// Get Client#1's giftbitCard
const singleResource = await client.clients.from(1).giftbitCard.get(1,  options);
// To Many
// Index Client#1's areas
const singleResource = await client.clients.from(1).areas.index(options);
// Index Client#1's deliveryLocations
const singleResource = await client.clients.from(1).deliveryLocations.index(options);
// Index Client#1's adminContacts
const singleResource = await client.clients.from(1).adminContacts.index(options);
// Index Client#1's admins
const singleResource = await client.clients.from(1).admins.index(options);
// Index Client#1's orderContacts
const singleResource = await client.clients.from(1).orderContacts.index(options);
// Index Client#1's orders
const singleResource = await client.clients.from(1).orders.index(options);
// Index Client#1's paymentCards
const singleResource = await client.clients.from(1).paymentCards.index(options);
// Index Client#1's versions
const singleResource = await client.clients.from(1).versions.index(options);
// Index Client#1's giftbitGifts
const singleResource = await client.clients.from(1).giftbitGifts.index(options);
// Index Client#1's giftbitErrors
const singleResource = await client.clients.from(1).giftbitErrors.index(options);
```
### <a name='resource-dao-ClientDiscount'></a>ClientDiscount
See [ClientDiscount](#resource-filter-ClientDiscount) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.clientDiscounts.get(1,  options);
const pagedIndexOfResources = await client.clientDiscounts.index(1, options);
// Related Resources
// To One
// Get ClientDiscount#1's order
const singleResource = await client.clientDiscounts.from(1).order.get(1,  options);
```
### <a name='resource-dao-ClientOrderInvoice'></a>ClientOrderInvoice
See [ClientOrderInvoice](#resource-filter-ClientOrderInvoice) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.clientOrderInvoices.get(1,  options);
const pagedIndexOfResources = await client.clientOrderInvoices.index(1, options);
```
### <a name='resource-dao-ClientSignup'></a>ClientSignup
See [ClientSignup](#resource-filter-ClientSignup) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.clientSignups.get(1,  options);
const pagedIndexOfResources = await client.clientSignups.index(1, options);
// Related Resources
// To One
// Get ClientSignup#1's user
const singleResource = await client.clientSignups.from(1).user.get(1,  options);
// Get ClientSignup#1's qualifyingQuestion
const singleResource = await client.clientSignups.from(1).qualifyingQuestion.get(1,  options);
// Get ClientSignup#1's billingLocation
const singleResource = await client.clientSignups.from(1).billingLocation.get(1,  options);
// Get ClientSignup#1's deliveryLocation
const singleResource = await client.clientSignups.from(1).deliveryLocation.get(1,  options);
// Get ClientSignup#1's billingContact
const singleResource = await client.clientSignups.from(1).billingContact.get(1,  options);
// Get ClientSignup#1's contact
const singleResource = await client.clientSignups.from(1).contact.get(1,  options);
// To Many
// Index ClientSignup#1's clients
const singleResource = await client.clientSignups.from(1).clients.index(options);
// Index ClientSignup#1's areas
const singleResource = await client.clientSignups.from(1).areas.index(options);
```
### <a name='resource-dao-Company'></a>Company
See [Company](#resource-filter-Company) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.companies.get(1,  options);
const pagedIndexOfResources = await client.companies.index(1, options);
// Related Resources
// To Many
// Index Company#1's clients
const singleResource = await client.companies.from(1).clients.index(options);
```
### <a name='resource-dao-Contact'></a>Contact
See [Contact](#resource-filter-Contact) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.contacts.get(1,  options);
const pagedIndexOfResources = await client.contacts.index(1, options);
```
### <a name='resource-dao-Courier'></a>Courier
See [Courier](#resource-filter-Courier) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.couriers.get(1,  options);
const pagedIndexOfResources = await client.couriers.index(1, options);
// Related Resources
// To One
// Get Courier#1's owner
const singleResource = await client.couriers.from(1).owner.get(1,  options);
// To Many
// Index Courier#1's drivers
const singleResource = await client.couriers.from(1).drivers.index(options);
// Index Courier#1's areas
const singleResource = await client.couriers.from(1).areas.index(options);
// Index Courier#1's versions
const singleResource = await client.couriers.from(1).versions.index(options);
```
### <a name='resource-dao-DeliveryCase'></a>DeliveryCase
See [DeliveryCase](#resource-filter-DeliveryCase) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.deliveryCases.get(1,  options);
const pagedIndexOfResources = await client.deliveryCases.index(1, options);
// Related Resources
// To One
// Get DeliveryCase#1's user
const singleResource = await client.deliveryCases.from(1).user.get(1,  options);
// Get DeliveryCase#1's order
const singleResource = await client.deliveryCases.from(1).order.get(1,  options);
```
### <a name='resource-dao-DeliveryLocation'></a>DeliveryLocation
See [DeliveryLocation](#resource-filter-DeliveryLocation) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.deliveryLocations.get(1,  options);
const pagedIndexOfResources = await client.deliveryLocations.index(1, options);
// Related Resources
// To One
// Get DeliveryLocation#1's client
const singleResource = await client.deliveryLocations.from(1).client.get(1,  options);
// Get DeliveryLocation#1's location
const singleResource = await client.deliveryLocations.from(1).location.get(1,  options);
```
### <a name='resource-dao-DeskCase'></a>DeskCase
See [DeskCase](#resource-filter-DeskCase) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.deskCases.get(1,  options);
const pagedIndexOfResources = await client.deskCases.index(1, options);
// Related Resources
// To One
// Get DeskCase#1's user
const singleResource = await client.deskCases.from(1).user.get(1,  options);
// Get DeskCase#1's order
const singleResource = await client.deskCases.from(1).order.get(1,  options);
```
### <a name='resource-dao-DietaryTag'></a>DietaryTag
See [DietaryTag](#resource-filter-DietaryTag) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.dietaryTags.get(1,  options);
const pagedIndexOfResources = await client.dietaryTags.index(1, options);
// Related Resources
// To Many
// Index DietaryTag#1's menuOptionItems
const singleResource = await client.dietaryTags.from(1).menuOptionItems.index(options);
```
### <a name='resource-dao-DiscountCode'></a>DiscountCode
See [DiscountCode](#resource-filter-DiscountCode) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.discountCodes.get(1,  options);
const pagedIndexOfResources = await client.discountCodes.index(1, options);
```
### <a name='resource-dao-DriverDay'></a>DriverDay
See [DriverDay](#resource-filter-DriverDay) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.driverDays.get(1,  options);
const pagedIndexOfResources = await client.driverDays.index(1, options);
// Related Resources
// To One
// Get DriverDay#1's driver
const singleResource = await client.driverDays.from(1).driver.get(1,  options);
```
### <a name='resource-dao-DriverPing'></a>DriverPing
See [DriverPing](#resource-filter-DriverPing) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.driverPings.get(1,  options);
const pagedIndexOfResources = await client.driverPings.index(1, options);
// Related Resources
// To One
// Get DriverPing#1's user
const singleResource = await client.driverPings.from(1).user.get(1,  options);
```
### <a name='resource-dao-DriverWeek'></a>DriverWeek
See [DriverWeek](#resource-filter-DriverWeek) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.driverWeeks.get(1,  options);
const pagedIndexOfResources = await client.driverWeeks.index(1, options);
// Related Resources
// To One
// Get DriverWeek#1's driver
const singleResource = await client.driverWeeks.from(1).driver.get(1,  options);
```
### <a name='resource-dao-EmailMessage'></a>EmailMessage
See [EmailMessage](#resource-filter-EmailMessage) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.emailMessages.get(1,  options);
const pagedIndexOfResources = await client.emailMessages.index(1, options);
// Related Resources
// To One
// Get EmailMessage#1's order
const singleResource = await client.emailMessages.from(1).order.get(1,  options);
```
### <a name='resource-dao-GiftbitCard'></a>GiftbitCard
See [GiftbitCard](#resource-filter-GiftbitCard) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.giftbitCards.get(1,  options);
const pagedIndexOfResources = await client.giftbitCards.index(1, options);
```
### <a name='resource-dao-GiftbitError'></a>GiftbitError
See [GiftbitError](#resource-filter-GiftbitError) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.giftbitErrors.get(1,  options);
const pagedIndexOfResources = await client.giftbitErrors.index(1, options);
// Related Resources
// To One
// Get GiftbitError#1's order
const singleResource = await client.giftbitErrors.from(1).order.get(1,  options);
```
### <a name='resource-dao-GiftbitGift'></a>GiftbitGift
See [GiftbitGift](#resource-filter-GiftbitGift) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.giftbitGifts.get(1,  options);
const pagedIndexOfResources = await client.giftbitGifts.index(1, options);
```
### <a name='resource-dao-GroupOrderMember'></a>GroupOrderMember
See [GroupOrderMember](#resource-filter-GroupOrderMember) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.groupOrderMembers.get(1,  options);
const pagedIndexOfResources = await client.groupOrderMembers.index(1, options);
// Related Resources
// To One
// Get GroupOrderMember#1's user
const singleResource = await client.groupOrderMembers.from(1).user.get(1,  options);
// Get GroupOrderMember#1's order
const singleResource = await client.groupOrderMembers.from(1).order.get(1,  options);
// To Many
// Index GroupOrderMember#1's orderItems
const singleResource = await client.groupOrderMembers.from(1).orderItems.index(options);
```
### <a name='resource-dao-Invoice'></a>Invoice
See [Invoice](#resource-filter-Invoice) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.invoices.get(1,  options);
const pagedIndexOfResources = await client.invoices.index(1, options);
```
### <a name='resource-dao-InvoicingTaxRate'></a>InvoicingTaxRate
See [InvoicingTaxRate](#resource-filter-InvoicingTaxRate) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.invoicingTaxRates.get(1,  options);
const pagedIndexOfResources = await client.invoicingTaxRates.index(1, options);
// Related Resources
// To One
// Get InvoicingTaxRate#1's area
const singleResource = await client.invoicingTaxRates.from(1).area.get(1,  options);
```
### <a name='resource-dao-Location'></a>Location
See [Location](#resource-filter-Location) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.locations.get(1,  options);
const pagedIndexOfResources = await client.locations.index(1, options);
// Related Resources
// To One
// Get Location#1's area
const singleResource = await client.locations.from(1).area.get(1,  options);
```
### <a name='resource-dao-MealPlan'></a>MealPlan
See [MealPlan](#resource-filter-MealPlan) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.mealPlans.get(1,  options);
const pagedIndexOfResources = await client.mealPlans.index(1, options);
// Related Resources
// To One
// Get MealPlan#1's mealPlanUser
const singleResource = await client.mealPlans.from(1).mealPlanUser.get(1,  options);
// Get MealPlan#1's client
const singleResource = await client.mealPlans.from(1).client.get(1,  options);
// To Many
// Index MealPlan#1's orders
const singleResource = await client.mealPlans.from(1).orders.index(options);
```
### <a name='resource-dao-Menu'></a>Menu
See [Menu](#resource-filter-Menu) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.menus.get(1,  options);
const pagedIndexOfResources = await client.menus.index(1, options);
// Related Resources
// To One
// Get Menu#1's area
const singleResource = await client.menus.from(1).area.get(1,  options);
// Get Menu#1's restaurant
const singleResource = await client.menus.from(1).restaurant.get(1,  options);
// To Many
// Index Menu#1's menuGroups
const singleResource = await client.menus.from(1).menuGroups.index(options);
// Index Menu#1's menuItems
const singleResource = await client.menus.from(1).menuItems.index(options);
// Index Menu#1's dietaryTags
const singleResource = await client.menus.from(1).dietaryTags.index(options);
// Index Menu#1's orders
const singleResource = await client.menus.from(1).orders.index(options);
```
### <a name='resource-dao-MenuGroup'></a>MenuGroup
See [MenuGroup](#resource-filter-MenuGroup) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.menuGroups.get(1,  options);
const pagedIndexOfResources = await client.menuGroups.index(1, options);
// Related Resources
// To One
// Get MenuGroup#1's menu
const singleResource = await client.menuGroups.from(1).menu.get(1,  options);
// To Many
// Index MenuGroup#1's menuItems
const singleResource = await client.menuGroups.from(1).menuItems.index(options);
```
### <a name='resource-dao-MenuItem'></a>MenuItem
See [MenuItem](#resource-filter-MenuItem) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.menuItems.get(1,  options);
const pagedIndexOfResources = await client.menuItems.index(1, options);
// Related Resources
// To One
// Get MenuItem#1's taxRate
const singleResource = await client.menuItems.from(1).taxRate.get(1,  options);
// Get MenuItem#1's menuGroup
const singleResource = await client.menuItems.from(1).menuGroup.get(1,  options);
// To Many
// Index MenuItem#1's dietaryTags
const singleResource = await client.menuItems.from(1).dietaryTags.index(options);
// Index MenuItem#1's menuOptionGroups
const singleResource = await client.menuItems.from(1).menuOptionGroups.index(options);
```
### <a name='resource-dao-MenuOptionGroup'></a>MenuOptionGroup
See [MenuOptionGroup](#resource-filter-MenuOptionGroup) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.menuOptionGroups.get(1,  options);
const pagedIndexOfResources = await client.menuOptionGroups.index(1, options);
// Related Resources
// To One
// Get MenuOptionGroup#1's menuItem
const singleResource = await client.menuOptionGroups.from(1).menuItem.get(1,  options);
// To Many
// Index MenuOptionGroup#1's menuOptionItems
const singleResource = await client.menuOptionGroups.from(1).menuOptionItems.index(options);
```
### <a name='resource-dao-MenuOptionItem'></a>MenuOptionItem
See [MenuOptionItem](#resource-filter-MenuOptionItem) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.menuOptionItems.get(1,  options);
const pagedIndexOfResources = await client.menuOptionItems.index(1, options);
// Related Resources
// To One
// Get MenuOptionItem#1's menuOptionGroup
const singleResource = await client.menuOptionItems.from(1).menuOptionGroup.get(1,  options);
// To Many
// Index MenuOptionItem#1's dietaryTags
const singleResource = await client.menuOptionItems.from(1).dietaryTags.index(options);
// Index MenuOptionItem#1's orderItems
const singleResource = await client.menuOptionItems.from(1).orderItems.index(options);
```
### <a name='resource-dao-Order'></a>Order
See [Order](#resource-filter-Order) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.orders.get(1,  options);
const pagedIndexOfResources = await client.orders.index(1, options);
// Related Resources
// To One
// Get Order#1's area
const singleResource = await client.orders.from(1).area.get(1,  options);
// Get Order#1's owner
const singleResource = await client.orders.from(1).owner.get(1,  options);
// Get Order#1's creator
const singleResource = await client.orders.from(1).creator.get(1,  options);
// Get Order#1's paymentCard
const singleResource = await client.orders.from(1).paymentCard.get(1,  options);
// Get Order#1's contact
const singleResource = await client.orders.from(1).contact.get(1,  options);
// Get Order#1's client
const singleResource = await client.orders.from(1).client.get(1,  options);
// Get Order#1's restaurant
const singleResource = await client.orders.from(1).restaurant.get(1,  options);
// Get Order#1's courier
const singleResource = await client.orders.from(1).courier.get(1,  options);
// Get Order#1's promoCode
const singleResource = await client.orders.from(1).promoCode.get(1,  options);
// Get Order#1's driver
const singleResource = await client.orders.from(1).driver.get(1,  options);
// Get Order#1's restaurantLocation
const singleResource = await client.orders.from(1).restaurantLocation.get(1,  options);
// Get Order#1's clientLocation
const singleResource = await client.orders.from(1).clientLocation.get(1,  options);
// Get Order#1's clientDiscount
const singleResource = await client.orders.from(1).clientDiscount.get(1,  options);
// Get Order#1's restaurantDiscount
const singleResource = await client.orders.from(1).restaurantDiscount.get(1,  options);
// Get Order#1's menu
const singleResource = await client.orders.from(1).menu.get(1,  options);
// Get Order#1's customLocation
const singleResource = await client.orders.from(1).customLocation.get(1,  options);
// Get Order#1's giftbitError
const singleResource = await client.orders.from(1).giftbitError.get(1,  options);
// Get Order#1's clientOrderInvoice
const singleResource = await client.orders.from(1).clientOrderInvoice.get(1,  options);
// Get Order#1's restaurantOrderInvoice
const singleResource = await client.orders.from(1).restaurantOrderInvoice.get(1,  options);
// To Many
// Index Order#1's emailMessages
const singleResource = await client.orders.from(1).emailMessages.index(options);
// Index Order#1's deliveryCases
const singleResource = await client.orders.from(1).deliveryCases.index(options);
// Index Order#1's deskCases
const singleResource = await client.orders.from(1).deskCases.index(options);
// Index Order#1's versions
const singleResource = await client.orders.from(1).versions.index(options);
// Index Order#1's groupOrderMembers
const singleResource = await client.orders.from(1).groupOrderMembers.index(options);
// Index Order#1's orderItems
const singleResource = await client.orders.from(1).orderItems.index(options);
```
### <a name='resource-dao-OrderItem'></a>OrderItem
See [OrderItem](#resource-filter-OrderItem) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.orderItems.get(1,  options);
const pagedIndexOfResources = await client.orderItems.index(1, options);
// Related Resources
// To One
// Get OrderItem#1's order
const singleResource = await client.orderItems.from(1).order.get(1,  options);
// Get OrderItem#1's menuItem
const singleResource = await client.orderItems.from(1).menuItem.get(1,  options);
// Get OrderItem#1's groupOrderMember
const singleResource = await client.orderItems.from(1).groupOrderMember.get(1,  options);
// To Many
// Index OrderItem#1's menuOptionItems
const singleResource = await client.orderItems.from(1).menuOptionItems.index(options);
```
### <a name='resource-dao-PaymentCard'></a>PaymentCard
See [PaymentCard](#resource-filter-PaymentCard) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.paymentCards.get(1,  options);
const pagedIndexOfResources = await client.paymentCards.index(1, options);
// Related Resources
// To One
// Get PaymentCard#1's client
const singleResource = await client.paymentCards.from(1).client.get(1,  options);
// Get PaymentCard#1's user
const singleResource = await client.paymentCards.from(1).user.get(1,  options);
```
### <a name='resource-dao-PickupLocation'></a>PickupLocation
See [PickupLocation](#resource-filter-PickupLocation) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.pickupLocations.get(1,  options);
const pagedIndexOfResources = await client.pickupLocations.index(1, options);
// Related Resources
// To One
// Get PickupLocation#1's restaurant
const singleResource = await client.pickupLocations.from(1).restaurant.get(1,  options);
// Get PickupLocation#1's location
const singleResource = await client.pickupLocations.from(1).location.get(1,  options);
```
### <a name='resource-dao-PromoCode'></a>PromoCode
See [PromoCode](#resource-filter-PromoCode) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.promoCodes.get(1,  options);
const pagedIndexOfResources = await client.promoCodes.index(1, options);
// Related Resources
// To One
// Get PromoCode#1's area
const singleResource = await client.promoCodes.from(1).area.get(1,  options);
// Get PromoCode#1's restaurant
const singleResource = await client.promoCodes.from(1).restaurant.get(1,  options);
// To Many
// Index PromoCode#1's orders
const singleResource = await client.promoCodes.from(1).orders.index(options);
// Index PromoCode#1's versions
const singleResource = await client.promoCodes.from(1).versions.index(options);
```
### <a name='resource-dao-QualifyingQuestion'></a>QualifyingQuestion
See [QualifyingQuestion](#resource-filter-QualifyingQuestion) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.qualifyingQuestions.get(1,  options);
const pagedIndexOfResources = await client.qualifyingQuestions.index(1, options);
```
### <a name='resource-dao-Restaurant'></a>Restaurant
See [Restaurant](#resource-filter-Restaurant) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.restaurants.get(1,  options);
const pagedIndexOfResources = await client.restaurants.index(1, options);
// Related Resources
// To One
// Get Restaurant#1's billingLocation
const singleResource = await client.restaurants.from(1).billingLocation.get(1,  options);
// Get Restaurant#1's billingContact
const singleResource = await client.restaurants.from(1).billingContact.get(1,  options);
// Get Restaurant#1's owner
const singleResource = await client.restaurants.from(1).owner.get(1,  options);
// To Many
// Index Restaurant#1's orders
const singleResource = await client.restaurants.from(1).orders.index(options);
// Index Restaurant#1's serviceTimes
const singleResource = await client.restaurants.from(1).serviceTimes.index(options);
// Index Restaurant#1's pickupLocations
const singleResource = await client.restaurants.from(1).pickupLocations.index(options);
// Index Restaurant#1's dietaryTags
const singleResource = await client.restaurants.from(1).dietaryTags.index(options);
// Index Restaurant#1's tags
const singleResource = await client.restaurants.from(1).tags.index(options);
// Index Restaurant#1's areas
const singleResource = await client.restaurants.from(1).areas.index(options);
// Index Restaurant#1's menus
const singleResource = await client.restaurants.from(1).menus.index(options);
// Index Restaurant#1's closures
const singleResource = await client.restaurants.from(1).closures.index(options);
// Index Restaurant#1's versions
const singleResource = await client.restaurants.from(1).versions.index(options);
// Index Restaurant#1's promoCodes
const singleResource = await client.restaurants.from(1).promoCodes.index(options);
```
### <a name='resource-dao-RestaurantClosure'></a>RestaurantClosure
See [RestaurantClosure](#resource-filter-RestaurantClosure) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.restaurantClosures.get(1,  options);
const pagedIndexOfResources = await client.restaurantClosures.index(1, options);
// Related Resources
// To One
// Get RestaurantClosure#1's restaurant
const singleResource = await client.restaurantClosures.from(1).restaurant.get(1,  options);
```
### <a name='resource-dao-RestaurantDiscount'></a>RestaurantDiscount
See [RestaurantDiscount](#resource-filter-RestaurantDiscount) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.restaurantDiscounts.get(1,  options);
const pagedIndexOfResources = await client.restaurantDiscounts.index(1, options);
// Related Resources
// To One
// Get RestaurantDiscount#1's order
const singleResource = await client.restaurantDiscounts.from(1).order.get(1,  options);
```
### <a name='resource-dao-RestaurantOrderInvoice'></a>RestaurantOrderInvoice
See [RestaurantOrderInvoice](#resource-filter-RestaurantOrderInvoice) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.restaurantOrderInvoices.get(1,  options);
const pagedIndexOfResources = await client.restaurantOrderInvoices.index(1, options);
```
### <a name='resource-dao-Role'></a>Role
See [Role](#resource-filter-Role) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.roles.get(1,  options);
const pagedIndexOfResources = await client.roles.index(1, options);
// Related Resources
// To One
// Get Role#1's user
const singleResource = await client.roles.from(1).user.get(1,  options);
```
### <a name='resource-dao-SalesforceSyncError'></a>SalesforceSyncError
See [SalesforceSyncError](#resource-filter-SalesforceSyncError) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.salesforceSyncErrors.get(1,  options);
const pagedIndexOfResources = await client.salesforceSyncErrors.index(1, options);
```
### <a name='resource-dao-ServiceTime'></a>ServiceTime
See [ServiceTime](#resource-filter-ServiceTime) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.serviceTimes.get(1,  options);
const pagedIndexOfResources = await client.serviceTimes.index(1, options);
// Related Resources
// To One
// Get ServiceTime#1's restaurant
const singleResource = await client.serviceTimes.from(1).restaurant.get(1,  options);
```
### <a name='resource-dao-Tag'></a>Tag
See [Tag](#resource-filter-Tag) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.tags.get(1,  options);
const pagedIndexOfResources = await client.tags.index(1, options);
```
### <a name='resource-dao-User'></a>User
See [User](#resource-filter-User) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.users.get(1,  options);
const pagedIndexOfResources = await client.users.index(1, options);
// Related Resources
// To Many
// Index User#1's driverPings
const singleResource = await client.users.from(1).driverPings.index(options);
// Index User#1's driverWeeks
const singleResource = await client.users.from(1).driverWeeks.index(options);
// Index User#1's driverDays
const singleResource = await client.users.from(1).driverDays.index(options);
// Index User#1's deliveredOrders
const singleResource = await client.users.from(1).deliveredOrders.index(options);
// Index User#1's couriers
const singleResource = await client.users.from(1).couriers.index(options);
// Index User#1's roles
const singleResource = await client.users.from(1).roles.index(options);
// Index User#1's paymentCards
const singleResource = await client.users.from(1).paymentCards.index(options);
// Index User#1's versions
const singleResource = await client.users.from(1).versions.index(options);
```
### <a name='resource-dao-UserFeedback'></a>UserFeedback
See [UserFeedback](#resource-filter-UserFeedback) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.userFeedbacks.get(1,  options);
const pagedIndexOfResources = await client.userFeedbacks.index(1, options);
```
### <a name='resource-dao-UserInvite'></a>UserInvite
See [UserInvite](#resource-filter-UserInvite) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.userInvites.get(1,  options);
const pagedIndexOfResources = await client.userInvites.index(1, options);
// Related Resources
// To One
// Get UserInvite#1's client
const singleResource = await client.userInvites.from(1).client.get(1,  options);
// Get UserInvite#1's user
const singleResource = await client.userInvites.from(1).user.get(1,  options);
```
### <a name='resource-dao-Version'></a>Version
See [Version](#resource-filter-Version) for valid filters.
```JavaScript
const options = {
  inlcude: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleResource = await client.versions.get(1,  options);
const pagedIndexOfResources = await client.versions.index(1, options);
```


## Resources
Resources are the base data transfer objects, they are made up of attributes and relationships



### <a name='resource-AppConfiguration'></a>AppConfiguration

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| key |  string |
| preferences |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| versions |  Version[] |



### <a name='resource-Area'></a>Area

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| active |  boolean |
| title |  boolean |
| country |  boolean |
| province |  boolean |
| city |  boolean |
| district |  boolean |
| slug |  boolean |
| isoTimeZone |  boolean |
| deliveryLeadTime |  boolean |
| currency |  boolean |
| deliveryFee |  boolean |
| geoJSON |  boolean |
| createdAt |  boolean |
| prefix |  boolean |
| coverImageUrl |  boolean |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| deliveryFeeTaxRate |  InvoicingTaxRate |
| couriers |  Courier[] |
| clients |  Client[] |
| restaurants |  Restaurant[] |
| invoicingTaxRates |  InvoicingTaxRate[] |
| globalInvoicingTaxRates |  InvoicingTaxRate[] |
| areaClosures |  AreaClosure[] |
| currentAreaClosures |  AreaClosure[] |
| promoCodes |  PromoCode[] |
| versions |  Version[] |



### <a name='resource-AreaClosure'></a>AreaClosure

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| startBlock |  Date |
| endBlock |  Date |
| createdAt |  Date |
| updatedAt |  Date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |



### <a name='resource-Client'></a>Client

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| legalName |  string |
| accountName |  string |
| deliveryNotes |  string |
| notes |  string |
| plan |  string |
| features |  string |
| terms |  string |
| termDays |  string |
| apiToken |  string |
| salesSupportClient |  string |
| salesSupportAgent |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| defaultArea |  Area |
| billingLocation |  Location |
| accountManager |  User |
| owner |  User |
| company |  Company |
| mealPlan |  MealPlan |
| taxRate |  InvoicingTaxRate |
| giftbitCard |  GiftbitCard |
| areas |  Area[] |
| deliveryLocations |  DeliveryLocation[] |
| adminContacts |  Contact[] |
| admins |  User[] |
| orderContacts |  Contact[] |
| orders |  Order[] |
| paymentCards |  PaymentCard[] |
| versions |  Version[] |
| giftbitGifts |  GiftbitGift[] |
| giftbitErrors |  GiftbitError[] |



### <a name='resource-ClientDiscount'></a>ClientDiscount

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| amountType |  string |
| accountingCode |  string |
| amount |  string |
| description |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |



### <a name='resource-ClientOrderInvoice'></a>ClientOrderInvoice

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| summary |  any |




### <a name='resource-ClientSignup'></a>ClientSignup

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| companyName |  any |
| password |  any |
| passwordConfirmation |  any |
| rawAddress |  any |
| unitNumber |  any |
| floor |  any |
| buzzer |  any |
| contactPerson |  any |
| orderFrequency |  any |
| orderSize |  any |
| orderBudget |  any |
| firstName |  any |
| lastName |  any |
| email |  any |
| phoneNumber |  any |
| extension |  any |
| consentToNewTerms |  any |
| receiveNewsletters |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |
| qualifyingQuestion |  QualifyingQuestion |
| billingLocation |  Location |
| deliveryLocation |  Location |
| billingContact |  Contact |
| contact |  Contact |
| clients |  Client[] |
| areas |  Area[] |



### <a name='resource-Company'></a>Company

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| clientCount |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| clients |  Client[] |



### <a name='resource-Contact'></a>Contact

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| firstName |  string |
| lastName |  string |
| email |  string |
| extension |  string |
| phoneNumber |  string |
| smsNumber |  string |
| updatedAt |  string |




### <a name='resource-Courier'></a>Courier

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| legalName |  string |
| driverCount |  string |
| ownerEmail |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| owner |  User |
| drivers |  User[] |
| areas |  Area[] |
| versions |  Version[] |



### <a name='resource-DeliveryCase'></a>DeliveryCase

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| caseType |  string |
| value |  string |
| createdAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |
| order |  Order |



### <a name='resource-DeliveryLocation'></a>DeliveryLocation

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  any |
| addressCode |  any |
| building |  any |
| buzzer |  any |
| city |  any |
| country |  any |
| floor |  any |
| latitude |  any |
| locationId |  any |
| longitude |  any |
| province |  any |
| street |  any |
| unitNumber |  any |
| isDefault |  any |
| updatedAt |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| location |  Location |



### <a name='resource-DeskCase'></a>DeskCase

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| caseRequest |  string |
| caseId |  string |
| caseMessage |  string |
| caseStatus |  string |
| caseValue |  string |
| createdAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |
| order |  Order |



### <a name='resource-DietaryTag'></a>DietaryTag

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| slug |  string |
| abbreviation |  string |
| color |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| menuOptionItems |  MenuOptionItem[] |



### <a name='resource-DiscountCode'></a>DiscountCode

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| code |  any |
| description |  any |
| discountType |  any |




### <a name='resource-DriverDay'></a>DriverDay

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| pings |  jsonb |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driver |  User |



### <a name='resource-DriverPing'></a>DriverPing

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| longitude |  float |
| latitude |  float |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |



### <a name='resource-DriverWeek'></a>DriverWeek

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| createdAt |  Date |
| updatedAt |  Date |
| monday |  Date |
| notes |  Date |
| availableMondayBreakfast |  Date |
| availableMondayLunch |  Date |
| availableMondayDinner |  Date |
| availableTuesdayBreakfast |  Date |
| availableTuesdayLunch |  Date |
| availableTuesdayDinner |  Date |
| availableWednesdayBreakfast |  Date |
| availableWednesdayLunch |  Date |
| availableWednesdayDinner |  Date |
| availableThursdayBreakfast |  Date |
| availableThursdayLunch |  Date |
| availableThursdayDinner |  Date |
| availableFridayBreakfast |  Date |
| availableFridayLunch |  Date |
| availableFridayDinner |  Date |
| availableSaturdayBreakfast |  Date |
| availableSaturdayLunch |  Date |
| availableSaturdayDinner |  Date |
| availableSundayBreakfast |  Date |
| availableSundayLunch |  Date |
| availableSundayDinner |  Date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driver |  User |



### <a name='resource-EmailMessage'></a>EmailMessage

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| messageId |  string |
| recipients |  string |
| message |  string |
| subject |  string |
| event |  string |
| mailableId |  string |
| timestamp |  string |
| messageType |  string |
| createdAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |



### <a name='resource-GiftbitCard'></a>GiftbitCard

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| balance |  any |
| transactions |  any |




### <a name='resource-GiftbitError'></a>GiftbitError

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| log |  string |
| isResolved |  string |
| createdAt |  string |
| updatedAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |



### <a name='resource-GiftbitGift'></a>GiftbitGift

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| isActive |  any |
| name |  any |
| description |  any |
| imageUrl |  any |
| tax |  any |
| currencyisocode |  any |
| maxPriceInCents |  any |
| minPriceInCents |  any |
| maxFoodeePriceInCents |  any |
| minFoodeePriceInCents |  any |
| dollarsToPoints |  any |




### <a name='resource-GroupOrderMember'></a>GroupOrderMember

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| email |  string |
| phoneNumber |  string |
| department |  string |
| termsAcceptedAt |  string |
| stripeChargeToken |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |
| order |  Order |
| orderItems |  OrderItem[] |



### <a name='resource-Invoice'></a>Invoice

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| clientInvoice |  any |
| updatedAt |  any |




### <a name='resource-InvoicingTaxRate'></a>InvoicingTaxRate

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| rate |  string |
| description |  string |
| isValid |  string |
| isDefault |  string |
| taxCode |  string |
| validFrom |  string |
| validUntil |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |



### <a name='resource-Location'></a>Location

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| latitude |  * |
| longitude |  * |
| buzzer |  * |
| unitNumber |  * |
| floor |  * |
| building |  * |
| city |  * |
| country |  * |
| province |  * |
| street |  * |
| addressCode |  * |
| isDefault |  * |
| addressLine1 |  * |
| rawAddress |  * |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |



### <a name='resource-MealPlan'></a>MealPlan

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| brandColor |  string |
| displayName |  string |
| logoUrl |  string |
| vanityUrl |  string |
| emailDomain |  string |
| createdAt |  string |
| updatedAt |  string |
| isDepartmentRequired |  string |
| password |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| mealPlanUser |  User |
| client |  Client |
| orders |  Order[] |



### <a name='resource-Menu'></a>Menu

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| active |  string |
| areaId |  string |
| restaurantId |  string |
| createdAt |  string |
| dietaryTagsCounts |  string |
| setMenus |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |
| restaurant |  Restaurant |
| menuGroups |  MenuGroup[] |
| menuItems |  MenuItem[] |
| dietaryTags |  DietaryTag[] |
| orders |  Order[] |



### <a name='resource-MenuGroup'></a>MenuGroup

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| active |  string |
| internal |  string |
| isCutlery |  string |
| description |  string |
| position |  string |
| minimumQuantity |  string |
| maximumQuantity |  string |
| clientPriceCents |  string |
| createdAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| menu |  Menu |
| menuItems |  MenuItem[] |



### <a name='resource-MenuItem'></a>MenuItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| active |  string |
| description |  string |
| position |  string |
| minimumQuantity |  string |
| maximumQuantity |  string |
| clientPriceCents |  string |
| restaurantPriceCents |  string |
| retailPriceCents |  string |
| taxRateId |  string |
| taxable |  string |
| createdAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| taxRate |  InvoicingTaxRate |
| menuGroup |  MenuGroup |
| dietaryTags |  DietaryTag[] |
| menuOptionGroups |  MenuOptionGroup[] |



### <a name='resource-MenuOptionGroup'></a>MenuOptionGroup

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| verb |  string |
| isRequired |  string |
| isSingleOpt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| menuItem |  MenuItem |
| menuOptionItems |  MenuOptionItem[] |



### <a name='resource-MenuOptionItem'></a>MenuOptionItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| clientPriceCents |  string |
| restaurantPriceCents |  string |
| retailPriceCents |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| menuOptionGroup |  MenuOptionGroup |
| dietaryTags |  DietaryTag[] |
| orderItems |  OrderItem[] |



### <a name='resource-Order'></a>Order

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| areaId |  number |
| alertStatus |  number |
| allowsPayOutOfPocket |  number |
| bowtieServiceFee |  number |
| clientInvoicePdf |  number |
| deadlineAt |  number |
| deliverAt |  number |
| deliverOn |  number |
| deliveredAt |  number |
| expiresAt |  number |
| flag |  number |
| identifier |  number |
| isAtMaxCapacity |  number |
| isFoodhall |  number |
| isGroupOrder |  number |
| isMealPlanOrder |  number |
| isSameDay |  number |
| lastMinute |  number |
| maxNumberOfPeople |  number |
| monitoringNotes |  number |
| name |  number |
| notes |  number |
| numberOfPeople |  number |
| orderSoldOut |  number |
| payOutOfPocketFee |  number |
| perPersonBudget |  number |
| pickedUpAt |  number |
| pickupAt |  number |
| setMenu |  number |
| skipDeliveryFee |  number |
| stateEvent |  number |
| state |  number |
| tranche |  number |
| totalAmount |  number |
| updatedAt |  number |
| clientLocationId |  number |
| clientConfirmationId |  number |
| restaurantConfirmationId |  number |
| isBookmark |  number |
| bookmarkExpiresAt |  number |
| bookmarkName |  number |
| urlSafeId |  number |
| uuid |  number |
| online |  number |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |
| owner |  User |
| creator |  User |
| paymentCard |  PaymentCard |
| contact |  Contact |
| client |  Client |
| restaurant |  Restaurant |
| courier |  Courier |
| promoCode |  PromoCode |
| driver |  User |
| restaurantLocation |  Location |
| clientLocation |  Location |
| clientDiscount |  ClientDiscount |
| restaurantDiscount |  RestaurantDiscount |
| menu |  Menu |
| customLocation |  Location |
| giftbitError |  GiftbitError |
| clientOrderInvoice |  ClientOrderInvoice |
| restaurantOrderInvoice |  RestaurantOrderInvoice |
| emailMessages |  EmailMessage[] |
| deliveryCases |  DeliveryCase[] |
| deskCases |  DeskCase[] |
| versions |  Version[] |
| groupOrderMembers |  GroupOrderMember[] |
| orderItems |  OrderItem[] |



### <a name='resource-OrderItem'></a>OrderItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| quantity |  number |
| notes |  number |
| clientPriceCents |  number |
| restaurantPriceCents |  number |
| custom |  number |
| taxable |  number |
| overridePrices |  number |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |
| menuItem |  MenuItem |
| groupOrderMember |  GroupOrderMember |
| menuOptionItems |  MenuOptionItem[] |



### <a name='resource-PaymentCard'></a>PaymentCard

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| position |  number |
| lastFourDigits |  number |
| expiryMonth |  number |
| expiryYear |  number |
| cardType |  number |
| isDefault |  number |
| cardToken |  number |
| nameOnCard |  number |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| user |  User |



### <a name='resource-PickupLocation'></a>PickupLocation

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  any |
| locationId |  number |
| latitude |  number |
| longitude |  number |
| buzzer |  number |
| unitNumber |  number |
| floor |  number |
| building |  number |
| street |  number |
| city |  number |
| province |  number |
| country |  number |
| addressCode |  number |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| restaurant |  Restaurant |
| location |  Location |



### <a name='resource-PromoCode'></a>PromoCode

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| code |  string |
| description |  string |
| amount |  string |
| amountType |  string |
| clientAccountingCode |  string |
| restaurantAccountingCode |  string |
| startsAt |  string |
| expiresAt |  string |
| internal |  string |
| removed |  string |
| allowMultipleClientUses |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |
| restaurant |  Restaurant |
| order |  Order[] |
| versions |  Version[] |



### <a name='resource-QualifyingQuestion'></a>QualifyingQuestion

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| contactPerson |  string |
| orderFrequency |  string |
| orderSize |  string |
| orderBudget |  string |




### <a name='resource-Restaurant'></a>Restaurant

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| createdAt |  Date |
| updatedAt |  Date |
| active |  Date |
| name |  Date |
| slug |  Date |
| subtitle |  Date |
| legalName |  Date |
| pickupNotes |  Date |
| completionProgress |  Date |
| dietaryTagsCounts |  Date |
| comingSoon |  Date |
| hoursInAdvance |  Date |
| internal |  Date |
| isNew |  Date |
| coverImageUrl |  Date |
| thumbnailImageUrl |  Date |
| isPayingAdminFee |  Date |
| canGroupOrder |  Date |
| receivesDailyOrderSummary |  Date |
| receivesSMS |  Date |
| marketingTitle |  Date |
| marketingDescription |  Date |
| features |  Date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| billingLocation |  Location |
| billingContact |  Contact |
| owner |  User |
| orders |  Order[] |
| serviceTimes |  ServiceTime[] |
| pickupLocations |  PickupLocation[] |
| dietaryTags |  DietaryTag[] |
| tags |  Tag[] |
| areas |  Area[] |
| menus |  Menu[] |
| closures |  RestaurantClosure[] |
| versions |  Version[] |
| promoCodes |  PromoCode[] |



### <a name='resource-RestaurantClosure'></a>RestaurantClosure

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| date |  date |
| createdAt |  date |
| updatedAt |  date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| restaurant |  Restaurant |



### <a name='resource-RestaurantDiscount'></a>RestaurantDiscount

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| amountType |  string |
| accountingCode |  string |
| amount |  string |
| description |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |



### <a name='resource-RestaurantOrderInvoice'></a>RestaurantOrderInvoice

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| summary |  any |




### <a name='resource-Role'></a>Role

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |



### <a name='resource-SalesforceSyncError'></a>SalesforceSyncError

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| log |  string |
| recordId |  string |
| recordType |  string |
| isResolved |  string |
| createdAt |  string |
| updatedAt |  string |




### <a name='resource-ServiceTime'></a>ServiceTime

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| weekday |  number |
| weekdayLetter |  number |
| weekdayName |  number |
| deliveryStartTime |  * |
| deliveryEndTime |  * |
| pickupStartTime |  * |
| pickupEndTime |  * |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| restaurant |  Restaurant |



### <a name='resource-Tag'></a>Tag

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| emoji |  string |
| name |  string |
| tagType |  string |




### <a name='resource-User'></a>User

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| active |  boolean |
| email |  boolean |
| firstName |  boolean |
| lastName |  boolean |
| password |  boolean |
| passwordConfirmation |  boolean |
| resetPasswordToken |  boolean |
| hasPassword |  boolean |
| phoneNumber |  boolean |
| extension |  boolean |
| phoneCanSMS |  boolean |
| phoneType |  boolean |
| profilePicture |  boolean |
| features |  boolean |
| slackChannelInfo |  boolean |
| lastSignInAt |  boolean |
| invitationSentAt |  boolean |
| invitationToken |  boolean |
| driverDeviceInfo |  boolean |
| driverFileNumber |  boolean |
| driverSpeedRating |  boolean |
| driverVehicleType |  boolean |
| lastDriverNotificationSentAt |  boolean |
| isActiveDriver |  boolean |
| clientAlwaysCall |  boolean |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driverPings |  DriverPing[] |
| driverWeeks |  DriverWeek[] |
| driverDays |  DriverDay[] |
| deliveredOrders |  Order[] |
| couriers |  Courier[] |
| roles |  Role[] |
| paymentCards |  PaymentCard[] |
| versions |  Version[] |



### <a name='resource-UserFeedback'></a>UserFeedback

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| orderId |  any |
| meal |  any |
| website |  any |
| delivery |  any |
| ordering |  any |
| recommend |  any |
| suggestion |  any |
| createdAt |  any |
| updatedAt |  any |




### <a name='resource-UserInvite'></a>UserInvite

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| email |  any |
| firstName |  any |
| lastName |  any |
| phoneNumber |  any |
| extension |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| user |  User |



### <a name='resource-Version'></a>Version

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| createdAt |  Date |
| itemType |  Date |
| itemId |  Date |
| event |  Date |
| object |  Date |
| objectChanges |  Date |
| whodunnit |  Date |





### Resource Filters
Filters can be applied to any index endpoint for a resource, or a related resource.


### <a name='resource-filter-AppConfiguration'></a>AppConfiguration
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| key |  string |



### <a name='resource-filter-Area'></a>Area
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-AreaClosure'></a>AreaClosure
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| area |  any |
| starts_after |  any |



### <a name='resource-filter-Client'></a>Client
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  String |
| area |  any |
| search |  any |



### <a name='resource-filter-ClientDiscount'></a>ClientDiscount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-ClientOrderInvoice'></a>ClientOrderInvoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-ClientSignup'></a>ClientSignup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-Company'></a>Company
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  string |



### <a name='resource-filter-Contact'></a>Contact
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  any |



### <a name='resource-filter-Courier'></a>Courier
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  string |
| area |  any |



### <a name='resource-filter-DeliveryCase'></a>DeliveryCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-DeliveryLocation'></a>DeliveryLocation
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| client |  any |
| search |  any |



### <a name='resource-filter-DeskCase'></a>DeskCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-DietaryTag'></a>DietaryTag
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  string |



### <a name='resource-filter-DiscountCode'></a>DiscountCode
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-DriverDay'></a>DriverDay
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| day |  date |



### <a name='resource-filter-DriverPing'></a>DriverPing
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-DriverWeek'></a>DriverWeek
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  any |
| monday |  date |
| area |  any |
| driver_id |  integer |



### <a name='resource-filter-EmailMessage'></a>EmailMessage
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| message_type |  string |
| recipients |  string |



### <a name='resource-filter-GiftbitCard'></a>GiftbitCard
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-GiftbitError'></a>GiftbitError
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-GiftbitGift'></a>GiftbitGift
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| currencyisocode |  any |



### <a name='resource-filter-GroupOrderMember'></a>GroupOrderMember
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| email |  string |
| search |  any |



### <a name='resource-filter-Invoice'></a>Invoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-InvoicingTaxRate'></a>InvoicingTaxRate
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| global |  any |



### <a name='resource-filter-Location'></a>Location
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| broken |  any |



### <a name='resource-filter-MealPlan'></a>MealPlan
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| vanity_url |  string |



### <a name='resource-filter-Menu'></a>Menu
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| active |  boolean |



### <a name='resource-filter-MenuGroup'></a>MenuGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| active |  boolean |
| internal |  boolean |



### <a name='resource-filter-MenuItem'></a>MenuItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| active |  boolean |



### <a name='resource-filter-MenuOptionGroup'></a>MenuOptionGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-MenuOptionItem'></a>MenuOptionItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-Order'></a>Order
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| is_bookmark |  boolean |
| reject_state |  any |
| search |  any |
| reject_online_draft |  any |
| uuid |  uuid |
| url_safe_id |  string |
| deliver_on |  date |
| deliver_at |  datetime |
| delivered_at_after |  any |
| areas |  any |
| date |  any |
| upcoming |  any |
| is_group_order |  any |
| driver_id |  integer |
| restaurant_ids |  any |
| state |  string |
| meal_orders |  any |
| order_week |  any |



### <a name='resource-filter-OrderItem'></a>OrderItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-PaymentCard'></a>PaymentCard
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-PickupLocation'></a>PickupLocation
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-PromoCode'></a>PromoCode
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  uuid |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| code |  string |
| removed |  boolean |
| expired |  any |



### <a name='resource-filter-QualifyingQuestion'></a>QualifyingQuestion
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-Restaurant'></a>Restaurant
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| slug |  string |
| can_group_order |  boolean |
| name |  string |
| search |  any |
| features |  any |
| cuisines |  any |
| dietary_tag_ordering |  any |
| area |  any |
| updated_after |  any |
| available_at |  any |



### <a name='resource-filter-RestaurantClosure'></a>RestaurantClosure
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| month |  any |



### <a name='resource-filter-RestaurantDiscount'></a>RestaurantDiscount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-RestaurantOrderInvoice'></a>RestaurantOrderInvoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-Role'></a>Role
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| resource |  any |



### <a name='resource-filter-SalesforceSyncError'></a>SalesforceSyncError
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| record_type |  string |
| record_id |  integer |



### <a name='resource-filter-ServiceTime'></a>ServiceTime
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-Tag'></a>Tag
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  string |



### <a name='resource-filter-User'></a>User
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| name |  any |
| email |  string |
| driver_missing_monday |  any |
| courier_area |  any |



### <a name='resource-filter-UserFeedback'></a>UserFeedback
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |
| created_after |  any |



### <a name='resource-filter-UserInvite'></a>UserInvite
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |



### <a name='resource-filter-Version'></a>Version
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| created_at_before |  any |
| created_at_after |  any |
| updated_at_before |  any |
| updated_at_after |  any |




