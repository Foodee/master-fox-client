# MasterFox JSONAPI Client

MasterFox is a a JSONAPI compliant api details can be found here: http://jsonapi.org/

## TOC

| ResourceName | | | |
| --- | --- | --- | --- |
 AppConfiguration | [Data Access Object](#resource-dao-AppConfiguration)  | [Schema](#resource-AppConfiguration) | [Filter Definition](#resource-filter-AppConfiguration) |
 Area | [Data Access Object](#resource-dao-Area)  | [Schema](#resource-Area) | [Filter Definition](#resource-filter-Area) |
 AreaClosure | [Data Access Object](#resource-dao-AreaClosure)  | [Schema](#resource-AreaClosure) | [Filter Definition](#resource-filter-AreaClosure) |
 Client | [Data Access Object](#resource-dao-Client)  | [Schema](#resource-Client) | [Filter Definition](#resource-filter-Client) |
 ClientDiscount | [Data Access Object](#resource-dao-ClientDiscount)  | [Schema](#resource-ClientDiscount) | [Filter Definition](#resource-filter-ClientDiscount) |
 ClientOrderInvoice | [Data Access Object](#resource-dao-ClientOrderInvoice)  | [Schema](#resource-ClientOrderInvoice) | [Filter Definition](#resource-filter-ClientOrderInvoice) |
 ClientSignup | [Data Access Object](#resource-dao-ClientSignup)  | [Schema](#resource-ClientSignup) | [Filter Definition](#resource-filter-ClientSignup) |
 CommunicationPreference | [Data Access Object](#resource-dao-CommunicationPreference)  | [Schema](#resource-CommunicationPreference) | [Filter Definition](#resource-filter-CommunicationPreference) |
 Company | [Data Access Object](#resource-dao-Company)  | [Schema](#resource-Company) | [Filter Definition](#resource-filter-Company) |
 Contact | [Data Access Object](#resource-dao-Contact)  | [Schema](#resource-Contact) | [Filter Definition](#resource-filter-Contact) |
 Courier | [Data Access Object](#resource-dao-Courier)  | [Schema](#resource-Courier) | [Filter Definition](#resource-filter-Courier) |
 DeliveryCase | [Data Access Object](#resource-dao-DeliveryCase)  | [Schema](#resource-DeliveryCase) | [Filter Definition](#resource-filter-DeliveryCase) |
 DeliveryLocation | [Data Access Object](#resource-dao-DeliveryLocation)  | [Schema](#resource-DeliveryLocation) | [Filter Definition](#resource-filter-DeliveryLocation) |
 DeskCase | [Data Access Object](#resource-dao-DeskCase)  | [Schema](#resource-DeskCase) | [Filter Definition](#resource-filter-DeskCase) |
 DietaryTag | [Data Access Object](#resource-dao-DietaryTag)  | [Schema](#resource-DietaryTag) | [Filter Definition](#resource-filter-DietaryTag) |
 DiscountCode | [Data Access Object](#resource-dao-DiscountCode)  | [Schema](#resource-DiscountCode) | [Filter Definition](#resource-filter-DiscountCode) |
 DriverDay | [Data Access Object](#resource-dao-DriverDay)  | [Schema](#resource-DriverDay) | [Filter Definition](#resource-filter-DriverDay) |
 DriverPayment | [Data Access Object](#resource-dao-DriverPayment)  | [Schema](#resource-DriverPayment) | [Filter Definition](#resource-filter-DriverPayment) |
 DriverPayrollRun | [Data Access Object](#resource-dao-DriverPayrollRun)  | [Schema](#resource-DriverPayrollRun) | [Filter Definition](#resource-filter-DriverPayrollRun) |
 DriverPing | [Data Access Object](#resource-dao-DriverPing)  | [Schema](#resource-DriverPing) | [Filter Definition](#resource-filter-DriverPing) |
 DriverResource | [Data Access Object](#resource-dao-DriverResource)  | [Schema](#resource-DriverResource) | [Filter Definition](#resource-filter-DriverResource) |
 DriverWeek | [Data Access Object](#resource-dao-DriverWeek)  | [Schema](#resource-DriverWeek) | [Filter Definition](#resource-filter-DriverWeek) |
 EmailMessage | [Data Access Object](#resource-dao-EmailMessage)  | [Schema](#resource-EmailMessage) | [Filter Definition](#resource-filter-EmailMessage) |
 Event | [Data Access Object](#resource-dao-Event)  | [Schema](#resource-Event) | [Filter Definition](#resource-filter-Event) |
 GiftbitCard | [Data Access Object](#resource-dao-GiftbitCard)  | [Schema](#resource-GiftbitCard) | [Filter Definition](#resource-filter-GiftbitCard) |
 GiftbitError | [Data Access Object](#resource-dao-GiftbitError)  | [Schema](#resource-GiftbitError) | [Filter Definition](#resource-filter-GiftbitError) |
 GiftbitGift | [Data Access Object](#resource-dao-GiftbitGift)  | [Schema](#resource-GiftbitGift) | [Filter Definition](#resource-filter-GiftbitGift) |
 GroupOrderMember | [Data Access Object](#resource-dao-GroupOrderMember)  | [Schema](#resource-GroupOrderMember) | [Filter Definition](#resource-filter-GroupOrderMember) |
 Invoice | [Data Access Object](#resource-dao-Invoice)  | [Schema](#resource-Invoice) | [Filter Definition](#resource-filter-Invoice) |
 InvoicingTaxRate | [Data Access Object](#resource-dao-InvoicingTaxRate)  | [Schema](#resource-InvoicingTaxRate) | [Filter Definition](#resource-filter-InvoicingTaxRate) |
 Location | [Data Access Object](#resource-dao-Location)  | [Schema](#resource-Location) | [Filter Definition](#resource-filter-Location) |
 MealPlan | [Data Access Object](#resource-dao-MealPlan)  | [Schema](#resource-MealPlan) | [Filter Definition](#resource-filter-MealPlan) |
 Menu | [Data Access Object](#resource-dao-Menu)  | [Schema](#resource-Menu) | [Filter Definition](#resource-filter-Menu) |
 MenuGroup | [Data Access Object](#resource-dao-MenuGroup)  | [Schema](#resource-MenuGroup) | [Filter Definition](#resource-filter-MenuGroup) |
 MenuItem | [Data Access Object](#resource-dao-MenuItem)  | [Schema](#resource-MenuItem) | [Filter Definition](#resource-filter-MenuItem) |
 MenuOptionGroup | [Data Access Object](#resource-dao-MenuOptionGroup)  | [Schema](#resource-MenuOptionGroup) | [Filter Definition](#resource-filter-MenuOptionGroup) |
 MenuOptionItem | [Data Access Object](#resource-dao-MenuOptionItem)  | [Schema](#resource-MenuOptionItem) | [Filter Definition](#resource-filter-MenuOptionItem) |
 Order | [Data Access Object](#resource-dao-Order)  | [Schema](#resource-Order) | [Filter Definition](#resource-filter-Order) |
 OrderItem | [Data Access Object](#resource-dao-OrderItem)  | [Schema](#resource-OrderItem) | [Filter Definition](#resource-filter-OrderItem) |
 PaymentAccount | [Data Access Object](#resource-dao-PaymentAccount)  | [Schema](#resource-PaymentAccount) | [Filter Definition](#resource-filter-PaymentAccount) |
 PaymentCard | [Data Access Object](#resource-dao-PaymentCard)  | [Schema](#resource-PaymentCard) | [Filter Definition](#resource-filter-PaymentCard) |
 PayrollRun | [Data Access Object](#resource-dao-PayrollRun)  | [Schema](#resource-PayrollRun) | [Filter Definition](#resource-filter-PayrollRun) |
 PickupLocation | [Data Access Object](#resource-dao-PickupLocation)  | [Schema](#resource-PickupLocation) | [Filter Definition](#resource-filter-PickupLocation) |
 PromoCode | [Data Access Object](#resource-dao-PromoCode)  | [Schema](#resource-PromoCode) | [Filter Definition](#resource-filter-PromoCode) |
 QualifyingQuestion | [Data Access Object](#resource-dao-QualifyingQuestion)  | [Schema](#resource-QualifyingQuestion) | [Filter Definition](#resource-filter-QualifyingQuestion) |
 Restaurant | [Data Access Object](#resource-dao-Restaurant)  | [Schema](#resource-Restaurant) | [Filter Definition](#resource-filter-Restaurant) |
 RestaurantClosure | [Data Access Object](#resource-dao-RestaurantClosure)  | [Schema](#resource-RestaurantClosure) | [Filter Definition](#resource-filter-RestaurantClosure) |
 RestaurantDiscount | [Data Access Object](#resource-dao-RestaurantDiscount)  | [Schema](#resource-RestaurantDiscount) | [Filter Definition](#resource-filter-RestaurantDiscount) |
 RestaurantOrderInvoice | [Data Access Object](#resource-dao-RestaurantOrderInvoice)  | [Schema](#resource-RestaurantOrderInvoice) | [Filter Definition](#resource-filter-RestaurantOrderInvoice) |
 Role | [Data Access Object](#resource-dao-Role)  | [Schema](#resource-Role) | [Filter Definition](#resource-filter-Role) |
 SalesforceSyncError | [Data Access Object](#resource-dao-SalesforceSyncError)  | [Schema](#resource-SalesforceSyncError) | [Filter Definition](#resource-filter-SalesforceSyncError) |
 ServiceTime | [Data Access Object](#resource-dao-ServiceTime)  | [Schema](#resource-ServiceTime) | [Filter Definition](#resource-filter-ServiceTime) |
 Tag | [Data Access Object](#resource-dao-Tag)  | [Schema](#resource-Tag) | [Filter Definition](#resource-filter-Tag) |
 User | [Data Access Object](#resource-dao-User)  | [Schema](#resource-User) | [Filter Definition](#resource-filter-User) |
 UserFeedback | [Data Access Object](#resource-dao-UserFeedback)  | [Schema](#resource-UserFeedback) | [Filter Definition](#resource-filter-UserFeedback) |
 UserInvite | [Data Access Object](#resource-dao-UserInvite)  | [Schema](#resource-UserInvite) | [Filter Definition](#resource-filter-UserInvite) |
 Version | [Data Access Object](#resource-dao-Version)  | [Schema](#resource-Version) | [Filter Definition](#resource-filter-Version) |
 

## Data Access
Data access objects are connected to the base of the MasterFox client. You can initialize a new MasterFox client using the
following code:

```JavaScript
import MasterFox from 'master-fox-client';
const client = new MasterFox('https://food.ee/', '<your-api-key>');
```

You can also connect using an email and password as follows:

```JavaScript
import MasterFox from 'master-fox-client';
const client = await MasterFox.login('https://food.ee/', '<email>', '<password>');

// will be your current API token, you can save this in order to prevent subsequent logins
// NOTE: never store a user's password but rather use this to power login experiences and store
// the resulting tokens
client.apiKey;

```




Once connected, any of the resource, and their related resources may be accessed using the patterns outlined in this section below


#### IndexResult

Note that any of the index endpoints will return an IndexResult which contains an array of results with additional meta information
about the contained results with regards to pagination. It supports standard higher order functions (map, filter, reduce) and also
supports the following:


```javascript
const result = await = client.restaurants.index();

result.hasMore; // true / false if there are more results on the server
result.total; // total number of records on the server
result.length; // total number of records in this request
```



### <a name='resource-dao-AppConfiguration'></a>AppConfiguration
See [AppConfigurationFilter](#resource-filter-AppConfiguration) for valid filters.
See [AppConfiguration](#resource-AppConfiguration) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleAppConfiguration= await client.appConfigurations.get(1,  options);
const pagedIndexOfAppConfigurations = await client.appConfigurations.index(options);

// Related Resources
// To Many
// Index AppConfiguration#1's versions
const pagedIndexOfVersions = await client.appConfigurations.from(1).index.versions(options);
```
### <a name='resource-dao-Area'></a>Area
See [AreaFilter](#resource-filter-Area) for valid filters.
See [Area](#resource-Area) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleArea= await client.areas.get(1,  options);
const pagedIndexOfAreas = await client.areas.index(options);

// Related Resources
// To One
// Get Area#1's deliveryFeeTaxRate
const singleInvoicingTaxRate = await client.areas.from(1).get.deliveryFeeTaxRate(1,  options);
// To Many
// Index Area#1's couriers
const pagedIndexOfCouriers = await client.areas.from(1).index.couriers(options);
// Index Area#1's clients
const pagedIndexOfClients = await client.areas.from(1).index.clients(options);
// Index Area#1's restaurants
const pagedIndexOfRestaurants = await client.areas.from(1).index.restaurants(options);
// Index Area#1's invoicingTaxRates
const pagedIndexOfInvoicingTaxRates = await client.areas.from(1).index.invoicingTaxRates(options);
// Index Area#1's globalInvoicingTaxRates
const pagedIndexOfInvoicingTaxRates = await client.areas.from(1).index.globalInvoicingTaxRates(options);
// Index Area#1's areaClosures
const pagedIndexOfAreaClosures = await client.areas.from(1).index.areaClosures(options);
// Index Area#1's currentAreaClosures
const pagedIndexOfAreaClosures = await client.areas.from(1).index.currentAreaClosures(options);
// Index Area#1's promoCodes
const pagedIndexOfPromoCodes = await client.areas.from(1).index.promoCodes(options);
// Index Area#1's versions
const pagedIndexOfVersions = await client.areas.from(1).index.versions(options);
```
### <a name='resource-dao-AreaClosure'></a>AreaClosure
See [AreaClosureFilter](#resource-filter-AreaClosure) for valid filters.
See [AreaClosure](#resource-AreaClosure) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleAreaClosure= await client.areaClosures.get(1,  options);
const pagedIndexOfAreaClosures = await client.areaClosures.index(options);

// Related Resources
// To One
// Get AreaClosure#1's area
const singleArea = await client.areaClosures.from(1).get.area(1,  options);
```
### <a name='resource-dao-Client'></a>Client
See [ClientFilter](#resource-filter-Client) for valid filters.
See [Client](#resource-Client) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleClient= await client.clients.get(1,  options);
const pagedIndexOfClients = await client.clients.index(options);

// Related Resources
// To One
// Get Client#1's defaultArea
const singleArea = await client.clients.from(1).get.defaultArea(1,  options);
// Get Client#1's billingLocation
const singleLocation = await client.clients.from(1).get.billingLocation(1,  options);
// Get Client#1's billingContact
const singleContact = await client.clients.from(1).get.billingContact(1,  options);
// Get Client#1's accountManager
const singleUser = await client.clients.from(1).get.accountManager(1,  options);
// Get Client#1's owner
const singleUser = await client.clients.from(1).get.owner(1,  options);
// Get Client#1's company
const singleCompany = await client.clients.from(1).get.company(1,  options);
// Get Client#1's mealPlan
const singleMealPlan = await client.clients.from(1).get.mealPlan(1,  options);
// Get Client#1's taxRate
const singleInvoicingTaxRate = await client.clients.from(1).get.taxRate(1,  options);
// Get Client#1's giftbitCard
const singleGiftbitCard = await client.clients.from(1).get.giftbitCard(1,  options);
// To Many
// Index Client#1's areas
const pagedIndexOfAreas = await client.clients.from(1).index.areas(options);
// Index Client#1's deliveryLocations
const pagedIndexOfDeliveryLocations = await client.clients.from(1).index.deliveryLocations(options);
// Index Client#1's adminContacts
const pagedIndexOfContacts = await client.clients.from(1).index.adminContacts(options);
// Index Client#1's admins
const pagedIndexOfUsers = await client.clients.from(1).index.admins(options);
// Index Client#1's orderContacts
const pagedIndexOfContacts = await client.clients.from(1).index.orderContacts(options);
// Index Client#1's orders
const pagedIndexOfOrders = await client.clients.from(1).index.orders(options);
// Index Client#1's paymentCards
const pagedIndexOfPaymentCards = await client.clients.from(1).index.paymentCards(options);
// Index Client#1's versions
const pagedIndexOfVersions = await client.clients.from(1).index.versions(options);
// Index Client#1's giftbitGifts
const pagedIndexOfGiftbitGifts = await client.clients.from(1).index.giftbitGifts(options);
// Index Client#1's giftbitErrors
const pagedIndexOfGiftbitErrors = await client.clients.from(1).index.giftbitErrors(options);
```
### <a name='resource-dao-ClientDiscount'></a>ClientDiscount
See [ClientDiscountFilter](#resource-filter-ClientDiscount) for valid filters.
See [ClientDiscount](#resource-ClientDiscount) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleClientDiscount= await client.clientDiscounts.get(1,  options);
const pagedIndexOfClientDiscounts = await client.clientDiscounts.index(options);

// Related Resources
// To One
// Get ClientDiscount#1's order
const singleOrder = await client.clientDiscounts.from(1).get.order(1,  options);
```
### <a name='resource-dao-ClientOrderInvoice'></a>ClientOrderInvoice
See [ClientOrderInvoiceFilter](#resource-filter-ClientOrderInvoice) for valid filters.
See [ClientOrderInvoice](#resource-ClientOrderInvoice) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleClientOrderInvoice= await client.clientOrderInvoices.get(1,  options);
const pagedIndexOfClientOrderInvoices = await client.clientOrderInvoices.index(options);
```
### <a name='resource-dao-ClientSignup'></a>ClientSignup
See [ClientSignupFilter](#resource-filter-ClientSignup) for valid filters.
See [ClientSignup](#resource-ClientSignup) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleClientSignup= await client.clientSignups.get(1,  options);
const pagedIndexOfClientSignups = await client.clientSignups.index(options);

// Related Resources
// To One
// Get ClientSignup#1's user
const singleUser = await client.clientSignups.from(1).get.user(1,  options);
// Get ClientSignup#1's qualifyingQuestion
const singleQualifyingQuestion = await client.clientSignups.from(1).get.qualifyingQuestion(1,  options);
// Get ClientSignup#1's billingLocation
const singleLocation = await client.clientSignups.from(1).get.billingLocation(1,  options);
// Get ClientSignup#1's deliveryLocation
const singleLocation = await client.clientSignups.from(1).get.deliveryLocation(1,  options);
// Get ClientSignup#1's billingContact
const singleContact = await client.clientSignups.from(1).get.billingContact(1,  options);
// Get ClientSignup#1's contact
const singleContact = await client.clientSignups.from(1).get.contact(1,  options);
// To Many
// Index ClientSignup#1's clients
const pagedIndexOfClients = await client.clientSignups.from(1).index.clients(options);
// Index ClientSignup#1's areas
const pagedIndexOfAreas = await client.clientSignups.from(1).index.areas(options);
```
### <a name='resource-dao-CommunicationPreference'></a>CommunicationPreference
See [CommunicationPreferenceFilter](#resource-filter-CommunicationPreference) for valid filters.
See [CommunicationPreference](#resource-CommunicationPreference) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleCommunicationPreference= await client.communicationPreferences.get(1,  options);
const pagedIndexOfCommunicationPreferences = await client.communicationPreferences.index(options);

// Related Resources
// To One
// Get CommunicationPreference#1's user
const singleUser = await client.communicationPreferences.from(1).get.user(1,  options);
```
### <a name='resource-dao-Company'></a>Company
See [CompanyFilter](#resource-filter-Company) for valid filters.
See [Company](#resource-Company) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleCompany= await client.companies.get(1,  options);
const pagedIndexOfCompanies = await client.companies.index(options);

// Related Resources
// To Many
// Index Company#1's clients
const pagedIndexOfClients = await client.companies.from(1).index.clients(options);
```
### <a name='resource-dao-Contact'></a>Contact
See [ContactFilter](#resource-filter-Contact) for valid filters.
See [Contact](#resource-Contact) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleContact= await client.contacts.get(1,  options);
const pagedIndexOfContacts = await client.contacts.index(options);
```
### <a name='resource-dao-Courier'></a>Courier
See [CourierFilter](#resource-filter-Courier) for valid filters.
See [Courier](#resource-Courier) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleCourier= await client.couriers.get(1,  options);
const pagedIndexOfCouriers = await client.couriers.index(options);

// Related Resources
// To One
// Get Courier#1's owner
const singleUser = await client.couriers.from(1).get.owner(1,  options);
// To Many
// Index Courier#1's drivers
const pagedIndexOfUsers = await client.couriers.from(1).index.drivers(options);
// Index Courier#1's areas
const pagedIndexOfAreas = await client.couriers.from(1).index.areas(options);
// Index Courier#1's versions
const pagedIndexOfVersions = await client.couriers.from(1).index.versions(options);
```
### <a name='resource-dao-DeliveryCase'></a>DeliveryCase
See [DeliveryCaseFilter](#resource-filter-DeliveryCase) for valid filters.
See [DeliveryCase](#resource-DeliveryCase) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDeliveryCase= await client.deliveryCases.get(1,  options);
const pagedIndexOfDeliveryCases = await client.deliveryCases.index(options);

// Related Resources
// To One
// Get DeliveryCase#1's user
const singleUser = await client.deliveryCases.from(1).get.user(1,  options);
// Get DeliveryCase#1's order
const singleOrder = await client.deliveryCases.from(1).get.order(1,  options);
```
### <a name='resource-dao-DeliveryLocation'></a>DeliveryLocation
See [DeliveryLocationFilter](#resource-filter-DeliveryLocation) for valid filters.
See [DeliveryLocation](#resource-DeliveryLocation) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDeliveryLocation= await client.deliveryLocations.get(1,  options);
const pagedIndexOfDeliveryLocations = await client.deliveryLocations.index(options);

// Related Resources
// To One
// Get DeliveryLocation#1's client
const singleClient = await client.deliveryLocations.from(1).get.client(1,  options);
// Get DeliveryLocation#1's location
const singleLocation = await client.deliveryLocations.from(1).get.location(1,  options);
```
### <a name='resource-dao-DeskCase'></a>DeskCase
See [DeskCaseFilter](#resource-filter-DeskCase) for valid filters.
See [DeskCase](#resource-DeskCase) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDeskCase= await client.deskCases.get(1,  options);
const pagedIndexOfDeskCases = await client.deskCases.index(options);

// Related Resources
// To One
// Get DeskCase#1's user
const singleUser = await client.deskCases.from(1).get.user(1,  options);
// Get DeskCase#1's order
const singleOrder = await client.deskCases.from(1).get.order(1,  options);
```
### <a name='resource-dao-DietaryTag'></a>DietaryTag
See [DietaryTagFilter](#resource-filter-DietaryTag) for valid filters.
See [DietaryTag](#resource-DietaryTag) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDietaryTag= await client.dietaryTags.get(1,  options);
const pagedIndexOfDietaryTags = await client.dietaryTags.index(options);

// Related Resources
// To Many
// Index DietaryTag#1's menuOptionItems
const pagedIndexOfMenuOptionItems = await client.dietaryTags.from(1).index.menuOptionItems(options);
```
### <a name='resource-dao-DiscountCode'></a>DiscountCode
See [DiscountCodeFilter](#resource-filter-DiscountCode) for valid filters.
See [DiscountCode](#resource-DiscountCode) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDiscountCode= await client.discountCodes.get(1,  options);
const pagedIndexOfDiscountCodes = await client.discountCodes.index(options);
```
### <a name='resource-dao-DriverDay'></a>DriverDay
See [DriverDayFilter](#resource-filter-DriverDay) for valid filters.
See [DriverDay](#resource-DriverDay) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDriverDay= await client.driverDays.get(1,  options);
const pagedIndexOfDriverDays = await client.driverDays.index(options);

// Related Resources
// To One
// Get DriverDay#1's driver
const singleUser = await client.driverDays.from(1).get.driver(1,  options);
```
### <a name='resource-dao-DriverPayment'></a>DriverPayment
See [DriverPaymentFilter](#resource-filter-DriverPayment) for valid filters.
See [DriverPayment](#resource-DriverPayment) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDriverPayment= await client.driverPayments.get(1,  options);
const pagedIndexOfDriverPayments = await client.driverPayments.index(options);

// Related Resources
// To One
// Get DriverPayment#1's driverPayrollRun
const singleDriverPayrollRun = await client.driverPayments.from(1).get.driverPayrollRun(1,  options);
```
### <a name='resource-dao-DriverPayrollRun'></a>DriverPayrollRun
See [DriverPayrollRunFilter](#resource-filter-DriverPayrollRun) for valid filters.
See [DriverPayrollRun](#resource-DriverPayrollRun) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDriverPayrollRun= await client.driverPayrollRuns.get(1,  options);
const pagedIndexOfDriverPayrollRuns = await client.driverPayrollRuns.index(options);

// Related Resources
// To One
// Get DriverPayrollRun#1's driver
const singleDriver = await client.driverPayrollRuns.from(1).get.driver(1,  options);
// Get DriverPayrollRun#1's payrollRun
const singlePayrollRun = await client.driverPayrollRuns.from(1).get.payrollRun(1,  options);
```
### <a name='resource-dao-DriverPing'></a>DriverPing
See [DriverPingFilter](#resource-filter-DriverPing) for valid filters.
See [DriverPing](#resource-DriverPing) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDriverPing= await client.driverPings.get(1,  options);
const pagedIndexOfDriverPings = await client.driverPings.index(options);

// Related Resources
// To One
// Get DriverPing#1's user
const singleUser = await client.driverPings.from(1).get.user(1,  options);
```
### <a name='resource-dao-DriverResource'></a>DriverResource
See [DriverResourceFilter](#resource-filter-DriverResource) for valid filters.
See [DriverResource](#resource-DriverResource) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDriverResource= await client.driverResources.get(1,  options);
const pagedIndexOfDriverResources = await client.driverResources.index(options);
```
### <a name='resource-dao-DriverWeek'></a>DriverWeek
See [DriverWeekFilter](#resource-filter-DriverWeek) for valid filters.
See [DriverWeek](#resource-DriverWeek) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleDriverWeek= await client.driverWeeks.get(1,  options);
const pagedIndexOfDriverWeeks = await client.driverWeeks.index(options);

// Related Resources
// To One
// Get DriverWeek#1's driver
const singleUser = await client.driverWeeks.from(1).get.driver(1,  options);
```
### <a name='resource-dao-EmailMessage'></a>EmailMessage
See [EmailMessageFilter](#resource-filter-EmailMessage) for valid filters.
See [EmailMessage](#resource-EmailMessage) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleEmailMessage= await client.emailMessages.get(1,  options);
const pagedIndexOfEmailMessages = await client.emailMessages.index(options);

// Related Resources
// To One
// Get EmailMessage#1's order
const singleOrder = await client.emailMessages.from(1).get.order(1,  options);
```
### <a name='resource-dao-Event'></a>Event
See [EventFilter](#resource-filter-Event) for valid filters.
See [Event](#resource-Event) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleEvent= await client.events.get(1,  options);
const pagedIndexOfEvents = await client.events.index(options);
```
### <a name='resource-dao-GiftbitCard'></a>GiftbitCard
See [GiftbitCardFilter](#resource-filter-GiftbitCard) for valid filters.
See [GiftbitCard](#resource-GiftbitCard) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleGiftbitCard= await client.giftbitCards.get(1,  options);
const pagedIndexOfGiftbitCards = await client.giftbitCards.index(options);
```
### <a name='resource-dao-GiftbitError'></a>GiftbitError
See [GiftbitErrorFilter](#resource-filter-GiftbitError) for valid filters.
See [GiftbitError](#resource-GiftbitError) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleGiftbitError= await client.giftbitErrors.get(1,  options);
const pagedIndexOfGiftbitErrors = await client.giftbitErrors.index(options);

// Related Resources
// To One
// Get GiftbitError#1's order
const singleOrder = await client.giftbitErrors.from(1).get.order(1,  options);
```
### <a name='resource-dao-GiftbitGift'></a>GiftbitGift
See [GiftbitGiftFilter](#resource-filter-GiftbitGift) for valid filters.
See [GiftbitGift](#resource-GiftbitGift) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleGiftbitGift= await client.giftbitGifts.get(1,  options);
const pagedIndexOfGiftbitGifts = await client.giftbitGifts.index(options);
```
### <a name='resource-dao-GroupOrderMember'></a>GroupOrderMember
See [GroupOrderMemberFilter](#resource-filter-GroupOrderMember) for valid filters.
See [GroupOrderMember](#resource-GroupOrderMember) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleGroupOrderMember= await client.groupOrderMembers.get(1,  options);
const pagedIndexOfGroupOrderMembers = await client.groupOrderMembers.index(options);

// Related Resources
// To One
// Get GroupOrderMember#1's user
const singleUser = await client.groupOrderMembers.from(1).get.user(1,  options);
// Get GroupOrderMember#1's order
const singleOrder = await client.groupOrderMembers.from(1).get.order(1,  options);
// To Many
// Index GroupOrderMember#1's orderItems
const pagedIndexOfOrderItems = await client.groupOrderMembers.from(1).index.orderItems(options);
```
### <a name='resource-dao-Invoice'></a>Invoice
See [InvoiceFilter](#resource-filter-Invoice) for valid filters.
See [Invoice](#resource-Invoice) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleInvoice= await client.invoices.get(1,  options);
const pagedIndexOfInvoices = await client.invoices.index(options);
```
### <a name='resource-dao-InvoicingTaxRate'></a>InvoicingTaxRate
See [InvoicingTaxRateFilter](#resource-filter-InvoicingTaxRate) for valid filters.
See [InvoicingTaxRate](#resource-InvoicingTaxRate) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleInvoicingTaxRate= await client.invoicingTaxRates.get(1,  options);
const pagedIndexOfInvoicingTaxRates = await client.invoicingTaxRates.index(options);

// Related Resources
// To One
// Get InvoicingTaxRate#1's area
const singleArea = await client.invoicingTaxRates.from(1).get.area(1,  options);
```
### <a name='resource-dao-Location'></a>Location
See [LocationFilter](#resource-filter-Location) for valid filters.
See [Location](#resource-Location) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleLocation= await client.locations.get(1,  options);
const pagedIndexOfLocations = await client.locations.index(options);

// Related Resources
// To One
// Get Location#1's area
const singleArea = await client.locations.from(1).get.area(1,  options);
```
### <a name='resource-dao-MealPlan'></a>MealPlan
See [MealPlanFilter](#resource-filter-MealPlan) for valid filters.
See [MealPlan](#resource-MealPlan) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleMealPlan= await client.mealPlans.get(1,  options);
const pagedIndexOfMealPlans = await client.mealPlans.index(options);

// Related Resources
// To One
// Get MealPlan#1's mealPlanUser
const singleUser = await client.mealPlans.from(1).get.mealPlanUser(1,  options);
// Get MealPlan#1's client
const singleClient = await client.mealPlans.from(1).get.client(1,  options);
// To Many
// Index MealPlan#1's orders
const pagedIndexOfOrders = await client.mealPlans.from(1).index.orders(options);
```
### <a name='resource-dao-Menu'></a>Menu
See [MenuFilter](#resource-filter-Menu) for valid filters.
See [Menu](#resource-Menu) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleMenu= await client.menus.get(1,  options);
const pagedIndexOfMenus = await client.menus.index(options);

// Related Resources
// To One
// Get Menu#1's area
const singleArea = await client.menus.from(1).get.area(1,  options);
// Get Menu#1's restaurant
const singleRestaurant = await client.menus.from(1).get.restaurant(1,  options);
// To Many
// Index Menu#1's menuGroups
const pagedIndexOfMenuGroups = await client.menus.from(1).index.menuGroups(options);
// Index Menu#1's menuItems
const pagedIndexOfMenuItems = await client.menus.from(1).index.menuItems(options);
// Index Menu#1's dietaryTags
const pagedIndexOfDietaryTags = await client.menus.from(1).index.dietaryTags(options);
// Index Menu#1's orders
const pagedIndexOfOrders = await client.menus.from(1).index.orders(options);
```
### <a name='resource-dao-MenuGroup'></a>MenuGroup
See [MenuGroupFilter](#resource-filter-MenuGroup) for valid filters.
See [MenuGroup](#resource-MenuGroup) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleMenuGroup= await client.menuGroups.get(1,  options);
const pagedIndexOfMenuGroups = await client.menuGroups.index(options);

// Related Resources
// To One
// Get MenuGroup#1's menu
const singleMenu = await client.menuGroups.from(1).get.menu(1,  options);
// To Many
// Index MenuGroup#1's menuItems
const pagedIndexOfMenuItems = await client.menuGroups.from(1).index.menuItems(options);
```
### <a name='resource-dao-MenuItem'></a>MenuItem
See [MenuItemFilter](#resource-filter-MenuItem) for valid filters.
See [MenuItem](#resource-MenuItem) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleMenuItem= await client.menuItems.get(1,  options);
const pagedIndexOfMenuItems = await client.menuItems.index(options);

// Related Resources
// To One
// Get MenuItem#1's taxRate
const singleInvoicingTaxRate = await client.menuItems.from(1).get.taxRate(1,  options);
// Get MenuItem#1's menuGroup
const singleMenuGroup = await client.menuItems.from(1).get.menuGroup(1,  options);
// To Many
// Index MenuItem#1's dietaryTags
const pagedIndexOfDietaryTags = await client.menuItems.from(1).index.dietaryTags(options);
// Index MenuItem#1's menuOptionGroups
const pagedIndexOfMenuOptionGroups = await client.menuItems.from(1).index.menuOptionGroups(options);
```
### <a name='resource-dao-MenuOptionGroup'></a>MenuOptionGroup
See [MenuOptionGroupFilter](#resource-filter-MenuOptionGroup) for valid filters.
See [MenuOptionGroup](#resource-MenuOptionGroup) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleMenuOptionGroup= await client.menuOptionGroups.get(1,  options);
const pagedIndexOfMenuOptionGroups = await client.menuOptionGroups.index(options);

// Related Resources
// To One
// Get MenuOptionGroup#1's menuItem
const singleMenuItem = await client.menuOptionGroups.from(1).get.menuItem(1,  options);
// To Many
// Index MenuOptionGroup#1's menuOptionItems
const pagedIndexOfMenuOptionItems = await client.menuOptionGroups.from(1).index.menuOptionItems(options);
```
### <a name='resource-dao-MenuOptionItem'></a>MenuOptionItem
See [MenuOptionItemFilter](#resource-filter-MenuOptionItem) for valid filters.
See [MenuOptionItem](#resource-MenuOptionItem) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleMenuOptionItem= await client.menuOptionItems.get(1,  options);
const pagedIndexOfMenuOptionItems = await client.menuOptionItems.index(options);

// Related Resources
// To One
// Get MenuOptionItem#1's menuOptionGroup
const singleMenuOptionGroup = await client.menuOptionItems.from(1).get.menuOptionGroup(1,  options);
// To Many
// Index MenuOptionItem#1's dietaryTags
const pagedIndexOfDietaryTags = await client.menuOptionItems.from(1).index.dietaryTags(options);
// Index MenuOptionItem#1's orderItems
const pagedIndexOfOrderItems = await client.menuOptionItems.from(1).index.orderItems(options);
```
### <a name='resource-dao-Order'></a>Order
See [OrderFilter](#resource-filter-Order) for valid filters.
See [Order](#resource-Order) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleOrder= await client.orders.get(1,  options);
const pagedIndexOfOrders = await client.orders.index(options);

// Related Resources
// To One
// Get Order#1's area
const singleArea = await client.orders.from(1).get.area(1,  options);
// Get Order#1's owner
const singleUser = await client.orders.from(1).get.owner(1,  options);
// Get Order#1's creator
const singleUser = await client.orders.from(1).get.creator(1,  options);
// Get Order#1's paymentCard
const singlePaymentCard = await client.orders.from(1).get.paymentCard(1,  options);
// Get Order#1's contact
const singleContact = await client.orders.from(1).get.contact(1,  options);
// Get Order#1's client
const singleClient = await client.orders.from(1).get.client(1,  options);
// Get Order#1's restaurant
const singleRestaurant = await client.orders.from(1).get.restaurant(1,  options);
// Get Order#1's courier
const singleCourier = await client.orders.from(1).get.courier(1,  options);
// Get Order#1's promoCode
const singlePromoCode = await client.orders.from(1).get.promoCode(1,  options);
// Get Order#1's driver
const singleUser = await client.orders.from(1).get.driver(1,  options);
// Get Order#1's restaurantLocation
const singleLocation = await client.orders.from(1).get.restaurantLocation(1,  options);
// Get Order#1's clientLocation
const singleLocation = await client.orders.from(1).get.clientLocation(1,  options);
// Get Order#1's clientDiscount
const singleClientDiscount = await client.orders.from(1).get.clientDiscount(1,  options);
// Get Order#1's restaurantDiscount
const singleRestaurantDiscount = await client.orders.from(1).get.restaurantDiscount(1,  options);
// Get Order#1's menu
const singleMenu = await client.orders.from(1).get.menu(1,  options);
// Get Order#1's customLocation
const singleLocation = await client.orders.from(1).get.customLocation(1,  options);
// Get Order#1's giftbitError
const singleGiftbitError = await client.orders.from(1).get.giftbitError(1,  options);
// Get Order#1's clientOrderInvoice
const singleClientOrderInvoice = await client.orders.from(1).get.clientOrderInvoice(1,  options);
// Get Order#1's restaurantOrderInvoice
const singleRestaurantOrderInvoice = await client.orders.from(1).get.restaurantOrderInvoice(1,  options);
// To Many
// Index Order#1's emailMessages
const pagedIndexOfEmailMessages = await client.orders.from(1).index.emailMessages(options);
// Index Order#1's deliveryCases
const pagedIndexOfDeliveryCases = await client.orders.from(1).index.deliveryCases(options);
// Index Order#1's deskCases
const pagedIndexOfDeskCases = await client.orders.from(1).index.deskCases(options);
// Index Order#1's versions
const pagedIndexOfVersions = await client.orders.from(1).index.versions(options);
// Index Order#1's groupOrderMembers
const pagedIndexOfGroupOrderMembers = await client.orders.from(1).index.groupOrderMembers(options);
// Index Order#1's orderItems
const pagedIndexOfOrderItems = await client.orders.from(1).index.orderItems(options);
```
### <a name='resource-dao-OrderItem'></a>OrderItem
See [OrderItemFilter](#resource-filter-OrderItem) for valid filters.
See [OrderItem](#resource-OrderItem) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleOrderItem= await client.orderItems.get(1,  options);
const pagedIndexOfOrderItems = await client.orderItems.index(options);

// Related Resources
// To One
// Get OrderItem#1's order
const singleOrder = await client.orderItems.from(1).get.order(1,  options);
// Get OrderItem#1's menuItem
const singleMenuItem = await client.orderItems.from(1).get.menuItem(1,  options);
// Get OrderItem#1's groupOrderMember
const singleGroupOrderMember = await client.orderItems.from(1).get.groupOrderMember(1,  options);
// To Many
// Index OrderItem#1's menuOptionItems
const pagedIndexOfMenuOptionItems = await client.orderItems.from(1).index.menuOptionItems(options);
```
### <a name='resource-dao-PaymentAccount'></a>PaymentAccount
See [PaymentAccountFilter](#resource-filter-PaymentAccount) for valid filters.
See [PaymentAccount](#resource-PaymentAccount) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singlePaymentAccount= await client.paymentAccounts.get(1,  options);
const pagedIndexOfPaymentAccounts = await client.paymentAccounts.index(options);
```
### <a name='resource-dao-PaymentCard'></a>PaymentCard
See [PaymentCardFilter](#resource-filter-PaymentCard) for valid filters.
See [PaymentCard](#resource-PaymentCard) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singlePaymentCard= await client.paymentCards.get(1,  options);
const pagedIndexOfPaymentCards = await client.paymentCards.index(options);

// Related Resources
// To One
// Get PaymentCard#1's client
const singleClient = await client.paymentCards.from(1).get.client(1,  options);
// Get PaymentCard#1's user
const singleUser = await client.paymentCards.from(1).get.user(1,  options);
```
### <a name='resource-dao-PayrollRun'></a>PayrollRun
See [PayrollRunFilter](#resource-filter-PayrollRun) for valid filters.
See [PayrollRun](#resource-PayrollRun) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singlePayrollRun= await client.payrollRuns.get(1,  options);
const pagedIndexOfPayrollRuns = await client.payrollRuns.index(options);

// Related Resources
// To Many
// Index PayrollRun#1's driverPayrollRuns
const pagedIndexOfDriverPayrollRuns = await client.payrollRuns.from(1).index.driverPayrollRuns(options);
```
### <a name='resource-dao-PickupLocation'></a>PickupLocation
See [PickupLocationFilter](#resource-filter-PickupLocation) for valid filters.
See [PickupLocation](#resource-PickupLocation) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singlePickupLocation= await client.pickupLocations.get(1,  options);
const pagedIndexOfPickupLocations = await client.pickupLocations.index(options);

// Related Resources
// To One
// Get PickupLocation#1's restaurant
const singleRestaurant = await client.pickupLocations.from(1).get.restaurant(1,  options);
// Get PickupLocation#1's location
const singleLocation = await client.pickupLocations.from(1).get.location(1,  options);
```
### <a name='resource-dao-PromoCode'></a>PromoCode
See [PromoCodeFilter](#resource-filter-PromoCode) for valid filters.
See [PromoCode](#resource-PromoCode) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singlePromoCode= await client.promoCodes.get(1,  options);
const pagedIndexOfPromoCodes = await client.promoCodes.index(options);

// Related Resources
// To One
// Get PromoCode#1's area
const singleArea = await client.promoCodes.from(1).get.area(1,  options);
// Get PromoCode#1's restaurant
const singleRestaurant = await client.promoCodes.from(1).get.restaurant(1,  options);
// To Many
// Index PromoCode#1's orders
const pagedIndexOfOrders = await client.promoCodes.from(1).index.orders(options);
// Index PromoCode#1's versions
const pagedIndexOfVersions = await client.promoCodes.from(1).index.versions(options);
```
### <a name='resource-dao-QualifyingQuestion'></a>QualifyingQuestion
See [QualifyingQuestionFilter](#resource-filter-QualifyingQuestion) for valid filters.
See [QualifyingQuestion](#resource-QualifyingQuestion) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleQualifyingQuestion= await client.qualifyingQuestions.get(1,  options);
const pagedIndexOfQualifyingQuestions = await client.qualifyingQuestions.index(options);
```
### <a name='resource-dao-Restaurant'></a>Restaurant
See [RestaurantFilter](#resource-filter-Restaurant) for valid filters.
See [Restaurant](#resource-Restaurant) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleRestaurant= await client.restaurants.get(1,  options);
const pagedIndexOfRestaurants = await client.restaurants.index(options);

// Related Resources
// To One
// Get Restaurant#1's billingLocation
const singleLocation = await client.restaurants.from(1).get.billingLocation(1,  options);
// Get Restaurant#1's billingContact
const singleContact = await client.restaurants.from(1).get.billingContact(1,  options);
// Get Restaurant#1's owner
const singleUser = await client.restaurants.from(1).get.owner(1,  options);
// To Many
// Index Restaurant#1's orders
const pagedIndexOfOrders = await client.restaurants.from(1).index.orders(options);
// Index Restaurant#1's serviceTimes
const pagedIndexOfServiceTimes = await client.restaurants.from(1).index.serviceTimes(options);
// Index Restaurant#1's pickupLocations
const pagedIndexOfPickupLocations = await client.restaurants.from(1).index.pickupLocations(options);
// Index Restaurant#1's dietaryTags
const pagedIndexOfDietaryTags = await client.restaurants.from(1).index.dietaryTags(options);
// Index Restaurant#1's tags
const pagedIndexOfTags = await client.restaurants.from(1).index.tags(options);
// Index Restaurant#1's areas
const pagedIndexOfAreas = await client.restaurants.from(1).index.areas(options);
// Index Restaurant#1's menus
const pagedIndexOfMenus = await client.restaurants.from(1).index.menus(options);
// Index Restaurant#1's closures
const pagedIndexOfRestaurantClosures = await client.restaurants.from(1).index.closures(options);
// Index Restaurant#1's versions
const pagedIndexOfVersions = await client.restaurants.from(1).index.versions(options);
// Index Restaurant#1's promoCodes
const pagedIndexOfPromoCodes = await client.restaurants.from(1).index.promoCodes(options);
```
### <a name='resource-dao-RestaurantClosure'></a>RestaurantClosure
See [RestaurantClosureFilter](#resource-filter-RestaurantClosure) for valid filters.
See [RestaurantClosure](#resource-RestaurantClosure) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleRestaurantClosure= await client.restaurantClosures.get(1,  options);
const pagedIndexOfRestaurantClosures = await client.restaurantClosures.index(options);

// Related Resources
// To One
// Get RestaurantClosure#1's restaurant
const singleRestaurant = await client.restaurantClosures.from(1).get.restaurant(1,  options);
```
### <a name='resource-dao-RestaurantDiscount'></a>RestaurantDiscount
See [RestaurantDiscountFilter](#resource-filter-RestaurantDiscount) for valid filters.
See [RestaurantDiscount](#resource-RestaurantDiscount) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleRestaurantDiscount= await client.restaurantDiscounts.get(1,  options);
const pagedIndexOfRestaurantDiscounts = await client.restaurantDiscounts.index(options);

// Related Resources
// To One
// Get RestaurantDiscount#1's order
const singleOrder = await client.restaurantDiscounts.from(1).get.order(1,  options);
```
### <a name='resource-dao-RestaurantOrderInvoice'></a>RestaurantOrderInvoice
See [RestaurantOrderInvoiceFilter](#resource-filter-RestaurantOrderInvoice) for valid filters.
See [RestaurantOrderInvoice](#resource-RestaurantOrderInvoice) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleRestaurantOrderInvoice= await client.restaurantOrderInvoices.get(1,  options);
const pagedIndexOfRestaurantOrderInvoices = await client.restaurantOrderInvoices.index(options);
```
### <a name='resource-dao-Role'></a>Role
See [RoleFilter](#resource-filter-Role) for valid filters.
See [Role](#resource-Role) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleRole= await client.roles.get(1,  options);
const pagedIndexOfRoles = await client.roles.index(options);

// Related Resources
// To One
// Get Role#1's user
const singleUser = await client.roles.from(1).get.user(1,  options);
```
### <a name='resource-dao-SalesforceSyncError'></a>SalesforceSyncError
See [SalesforceSyncErrorFilter](#resource-filter-SalesforceSyncError) for valid filters.
See [SalesforceSyncError](#resource-SalesforceSyncError) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleSalesforceSyncError= await client.salesforceSyncErrors.get(1,  options);
const pagedIndexOfSalesforceSyncErrors = await client.salesforceSyncErrors.index(options);
```
### <a name='resource-dao-ServiceTime'></a>ServiceTime
See [ServiceTimeFilter](#resource-filter-ServiceTime) for valid filters.
See [ServiceTime](#resource-ServiceTime) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleServiceTime= await client.serviceTimes.get(1,  options);
const pagedIndexOfServiceTimes = await client.serviceTimes.index(options);

// Related Resources
// To One
// Get ServiceTime#1's restaurant
const singleRestaurant = await client.serviceTimes.from(1).get.restaurant(1,  options);
```
### <a name='resource-dao-Tag'></a>Tag
See [TagFilter](#resource-filter-Tag) for valid filters.
See [Tag](#resource-Tag) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleTag= await client.tags.get(1,  options);
const pagedIndexOfTags = await client.tags.index(options);
```
### <a name='resource-dao-User'></a>User
See [UserFilter](#resource-filter-User) for valid filters.
See [User](#resource-User) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleUser= await client.users.get(1,  options);
const pagedIndexOfUsers = await client.users.index(options);

// Related Resources
// To One
// Get User#1's communicationPreference
const singleCommunicationPreference = await client.users.from(1).get.communicationPreference(1,  options);
// To Many
// Index User#1's driverPings
const pagedIndexOfDriverPings = await client.users.from(1).index.driverPings(options);
// Index User#1's driverWeeks
const pagedIndexOfDriverWeeks = await client.users.from(1).index.driverWeeks(options);
// Index User#1's driverDays
const pagedIndexOfDriverDays = await client.users.from(1).index.driverDays(options);
// Index User#1's deliveredOrders
const pagedIndexOfOrders = await client.users.from(1).index.deliveredOrders(options);
// Index User#1's couriers
const pagedIndexOfCouriers = await client.users.from(1).index.couriers(options);
// Index User#1's roles
const pagedIndexOfRoles = await client.users.from(1).index.roles(options);
// Index User#1's paymentCards
const pagedIndexOfPaymentCards = await client.users.from(1).index.paymentCards(options);
// Index User#1's versions
const pagedIndexOfVersions = await client.users.from(1).index.versions(options);
```
### <a name='resource-dao-UserFeedback'></a>UserFeedback
See [UserFeedbackFilter](#resource-filter-UserFeedback) for valid filters.
See [UserFeedback](#resource-UserFeedback) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleUserFeedback= await client.userFeedbacks.get(1,  options);
const pagedIndexOfUserFeedbacks = await client.userFeedbacks.index(options);
```
### <a name='resource-dao-UserInvite'></a>UserInvite
See [UserInviteFilter](#resource-filter-UserInvite) for valid filters.
See [UserInvite](#resource-UserInvite) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleUserInvite= await client.userInvites.get(1,  options);
const pagedIndexOfUserInvites = await client.userInvites.index(options);

// Related Resources
// To One
// Get UserInvite#1's client
const singleClient = await client.userInvites.from(1).get.client(1,  options);
// Get UserInvite#1's user
const singleUser = await client.userInvites.from(1).get.user(1,  options);
```
### <a name='resource-dao-Version'></a>Version
See [VersionFilter](#resource-filter-Version) for valid filters.
See [Version](#resource-Version) for the resource schema.
```JavaScript
const options = {
  // this is used to include related resources on gets or indexes
  // if provided it will include them on the returned resources
  // see http://jsonapi.org/format/#fetching-includes for more details
  include: '',

  // only valid for index fields
  fitlers: {},
  sort: '',
  page: {
    offet: 0,
    limit: 20
  }
};
const singleVersion= await client.versions.get(1,  options);
const pagedIndexOfVersions = await client.versions.index(options);
```


## Resources
Resources are the base data transfer objects, they are made up of attributes and relationships.

The relationship resources will not be included on the resource when fetched from the api unless they are specifically included
using the include parameter (see: http://jsonapi.org/format/#fetching-includes)

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
| deliveryZone |  boolean |
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
| veryLateScore |  string |
| salesSupportClient |  string |
| salesSupportAgent |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| defaultArea |  Area |
| billingLocation |  Location |
| billingContact |  Contact |
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
| accountingCode |  string |
| amount |  string |
| amountType |  string |
| caseId |  string |
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
| smsNumber |  any |
| consentToNewTerms |  any |
| receiveNewsletters |  any |
| smsEnabled |  any |


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



### <a name='resource-CommunicationPreference'></a>CommunicationPreference

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| sms |  boolean |
| emailFeedback |  boolean |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |



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



### <a name='resource-DriverPayment'></a>DriverPayment

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| amount |  float |
| deliveryDate |  date |
| driverId |  integer |
| manuallyAdded |  boolean |
| notes |  string |
| orderId |  integer |
| driverPayrollRunId |  integer |
| ruleName |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driverPayrollRun |  DriverPayrollRun |



### <a name='resource-DriverPayrollRun'></a>DriverPayrollRun

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| amounts |  json |
| approvals |  json |
| driverId |  integer |
| payrollRunId |  integer |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driver |  Driver |
| payrollRun |  PayrollRun |



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



### <a name='resource-DriverResource'></a>DriverResource

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| driverId |  integer |
| firstName |  string |
| lastName |  string |




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



### <a name='resource-Event'></a>Event

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| event |  any |
| timestamp |  any |
| createdAt |  any |
| eventTimestamp |  any |




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
| createdAt |  number |
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
| name |  number |
| clientNotes |  number |
| courierNotes |  number |
| monitoringNotes |  number |
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
| restaurantTotalAmount |  number |
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



### <a name='resource-PaymentAccount'></a>PaymentAccount

#### Attributes
| Name | Type |
| ------------- |:-------------:|




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



### <a name='resource-PayrollRun'></a>PayrollRun

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| country |  boolean |
| payrollPeriod |  string |
| paid |  boolean |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driverPayrollRun |  DriverPayrollRun[] |



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
| accountingCode |  string |
| amount |  string |
| amountType |  string |
| caseId |  string |
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
| smsNumber |  boolean |
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
| communicationPreference |  CommunicationPreference |
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
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| key |  string |



### <a name='resource-filter-Area'></a>Area
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| active |  boolean |
| nearestTo |  any |
| nearestToAddress |  any |
| containing |  any |
| containingAddress |  any |



### <a name='resource-filter-AreaClosure'></a>AreaClosure
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| area |  any |
| startsAfter |  any |



### <a name='resource-filter-Client'></a>Client
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  String |
| area |  any |
| search |  any |



### <a name='resource-filter-ClientDiscount'></a>ClientDiscount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-ClientOrderInvoice'></a>ClientOrderInvoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-ClientSignup'></a>ClientSignup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-CommunicationPreference'></a>CommunicationPreference
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-Company'></a>Company
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  string |



### <a name='resource-filter-Contact'></a>Contact
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  any |



### <a name='resource-filter-Courier'></a>Courier
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  string |
| area |  any |



### <a name='resource-filter-DeliveryCase'></a>DeliveryCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-DeliveryLocation'></a>DeliveryLocation
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| client |  any |
| search |  any |



### <a name='resource-filter-DeskCase'></a>DeskCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-DietaryTag'></a>DietaryTag
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  string |



### <a name='resource-filter-DiscountCode'></a>DiscountCode
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-DriverDay'></a>DriverDay
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| day |  date |



### <a name='resource-filter-DriverPayment'></a>DriverPayment
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| deliveryDate |  string |
| driverPayrollRunId |  number |



### <a name='resource-filter-DriverPayrollRun'></a>DriverPayrollRun
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| areaId |  integer |
| payrollRunPeriod |  string |
| masterFoxDriverId |  integer |



### <a name='resource-filter-DriverPing'></a>DriverPing
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-DriverResource'></a>DriverResource

None


### <a name='resource-filter-DriverWeek'></a>DriverWeek
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  any |
| monday |  date |
| area |  any |
| driverId |  integer |



### <a name='resource-filter-EmailMessage'></a>EmailMessage
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| messageType |  string |
| recipients |  string |



### <a name='resource-filter-Event'></a>Event
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-GiftbitCard'></a>GiftbitCard
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-GiftbitError'></a>GiftbitError
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-GiftbitGift'></a>GiftbitGift
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| currencyisocode |  any |



### <a name='resource-filter-GroupOrderMember'></a>GroupOrderMember
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| email |  string |
| search |  any |



### <a name='resource-filter-Invoice'></a>Invoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-InvoicingTaxRate'></a>InvoicingTaxRate
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| global |  any |



### <a name='resource-filter-Location'></a>Location
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| broken |  any |



### <a name='resource-filter-MealPlan'></a>MealPlan
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| vanityUrl |  string |



### <a name='resource-filter-Menu'></a>Menu
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| active |  boolean |



### <a name='resource-filter-MenuGroup'></a>MenuGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| active |  boolean |
| internal |  boolean |



### <a name='resource-filter-MenuItem'></a>MenuItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| active |  boolean |



### <a name='resource-filter-MenuOptionGroup'></a>MenuOptionGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-MenuOptionItem'></a>MenuOptionItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-Order'></a>Order
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| isBookmark |  boolean |
| rejectState |  any |
| search |  string |
| isDraft |  any |
| rejectOnlineDraft |  any |
| uuid |  uuid |
| urlSafeId |  string |
| deliverOn |  date |
| deliverAt |  datetime |
| deliveredAtAfter |  any |
| areas |  string |
| date |  any |
| upcoming |  any |
| isGroupOrder |  boolean |
| driverId |  integer |
| restaurantIds |  any |
| state |  string |
| mealOrders |  any |
| orderWeek |  any |



### <a name='resource-filter-OrderItem'></a>OrderItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-PaymentAccount'></a>PaymentAccount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-PaymentCard'></a>PaymentCard
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-PayrollRun'></a>PayrollRun
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| payrollRunPeriod |  string |



### <a name='resource-filter-PickupLocation'></a>PickupLocation
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-PromoCode'></a>PromoCode
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  uuid |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| code |  string |
| removed |  boolean |
| expired |  any |



### <a name='resource-filter-QualifyingQuestion'></a>QualifyingQuestion
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-Restaurant'></a>Restaurant
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| slug |  string |
| canGroupOrder |  boolean |
| name |  string |
| search |  any |
| features |  any |
| cuisines |  any |
| dietaryTagOrdering |  any |
| area |  any |
| updatedAfter |  any |
| availableAt |  any |



### <a name='resource-filter-RestaurantClosure'></a>RestaurantClosure
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| month |  any |



### <a name='resource-filter-RestaurantDiscount'></a>RestaurantDiscount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-RestaurantOrderInvoice'></a>RestaurantOrderInvoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-Role'></a>Role
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| resource |  any |



### <a name='resource-filter-SalesforceSyncError'></a>SalesforceSyncError
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| recordType |  string |
| recordId |  integer |



### <a name='resource-filter-ServiceTime'></a>ServiceTime
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-Tag'></a>Tag
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  string |



### <a name='resource-filter-User'></a>User
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| name |  any |
| search |  any |
| email |  string |
| driverMissingMonday |  any |
| courierArea |  any |
| isDriver |  any |



### <a name='resource-filter-UserFeedback'></a>UserFeedback
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |
| createdAfter |  any |



### <a name='resource-filter-UserInvite'></a>UserInvite
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |



### <a name='resource-filter-Version'></a>Version
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  date |
| createdAtAfter |  date |
| updatedAtBefore |  date |
| updatedAtAfter |  date |




