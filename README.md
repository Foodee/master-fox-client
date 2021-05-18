# MasterFox JSONAPI Client

MasterFox is a a JSONAPI compliant api details can be found here: http://jsonapi.org/

## TOC

| ResourceName | | | |
| --- | --- | --- | --- |
 AccountingConsolidationConfiguration | [Data Access Object](#resource-dao-AccountingConsolidationConfiguration)  | [Schema](#resource-AccountingConsolidationConfiguration) | [Filter Definition](#resource-filter-AccountingConsolidationConfiguration) |
 AccountingConsolidationRun | [Data Access Object](#resource-dao-AccountingConsolidationRun)  | [Schema](#resource-AccountingConsolidationRun) | [Filter Definition](#resource-filter-AccountingConsolidationRun) |
 AccountingLedgerItem | [Data Access Object](#resource-dao-AccountingLedgerItem)  | [Schema](#resource-AccountingLedgerItem) | [Filter Definition](#resource-filter-AccountingLedgerItem) |
 AccountingLineItem | [Data Access Object](#resource-dao-AccountingLineItem)  | [Schema](#resource-AccountingLineItem) | [Filter Definition](#resource-filter-AccountingLineItem) |
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
 CurrenciesCurrency | [Data Access Object](#resource-dao-CurrenciesCurrency)  | [Schema](#resource-CurrenciesCurrency) | [Filter Definition](#resource-filter-CurrenciesCurrency) |
 CurrenciesTransaction | [Data Access Object](#resource-dao-CurrenciesTransaction)  | [Schema](#resource-CurrenciesTransaction) | [Filter Definition](#resource-filter-CurrenciesTransaction) |
 CurrenciesWallet | [Data Access Object](#resource-dao-CurrenciesWallet)  | [Schema](#resource-CurrenciesWallet) | [Filter Definition](#resource-filter-CurrenciesWallet) |
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
 FeatureFlagDescription | [Data Access Object](#resource-dao-FeatureFlagDescription)  | [Schema](#resource-FeatureFlagDescription) | [Filter Definition](#resource-filter-FeatureFlagDescription) |
 FoodType | [Data Access Object](#resource-dao-FoodType)  | [Schema](#resource-FoodType) | [Filter Definition](#resource-filter-FoodType) |
 GiftbitCard | [Data Access Object](#resource-dao-GiftbitCard)  | [Schema](#resource-GiftbitCard) | [Filter Definition](#resource-filter-GiftbitCard) |
 GiftbitError | [Data Access Object](#resource-dao-GiftbitError)  | [Schema](#resource-GiftbitError) | [Filter Definition](#resource-filter-GiftbitError) |
 GiftbitGift | [Data Access Object](#resource-dao-GiftbitGift)  | [Schema](#resource-GiftbitGift) | [Filter Definition](#resource-filter-GiftbitGift) |
 GroupOrderMember | [Data Access Object](#resource-dao-GroupOrderMember)  | [Schema](#resource-GroupOrderMember) | [Filter Definition](#resource-filter-GroupOrderMember) |
 HistorianVersion | [Data Access Object](#resource-dao-HistorianVersion)  | [Schema](#resource-HistorianVersion) | [Filter Definition](#resource-filter-HistorianVersion) |
 Invoice | [Data Access Object](#resource-dao-Invoice)  | [Schema](#resource-Invoice) | [Filter Definition](#resource-filter-Invoice) |
 InvoicingLedgerItem | [Data Access Object](#resource-dao-InvoicingLedgerItem)  | [Schema](#resource-InvoicingLedgerItem) | [Filter Definition](#resource-filter-InvoicingLedgerItem) |
 InvoicingTaxRate | [Data Access Object](#resource-dao-InvoicingTaxRate)  | [Schema](#resource-InvoicingTaxRate) | [Filter Definition](#resource-filter-InvoicingTaxRate) |
 Location | [Data Access Object](#resource-dao-Location)  | [Schema](#resource-Location) | [Filter Definition](#resource-filter-Location) |
 LogisticsArrivalEstimate | [Data Access Object](#resource-dao-LogisticsArrivalEstimate)  | [Schema](#resource-LogisticsArrivalEstimate) | [Filter Definition](#resource-filter-LogisticsArrivalEstimate) |
 LogisticsDelivery | [Data Access Object](#resource-dao-LogisticsDelivery)  | [Schema](#resource-LogisticsDelivery) | [Filter Definition](#resource-filter-LogisticsDelivery) |
 MealPlan | [Data Access Object](#resource-dao-MealPlan)  | [Schema](#resource-MealPlan) | [Filter Definition](#resource-filter-MealPlan) |
 MealPlanningEvent | [Data Access Object](#resource-dao-MealPlanningEvent)  | [Schema](#resource-MealPlanningEvent) | [Filter Definition](#resource-filter-MealPlanningEvent) |
 MealPlanningInstance | [Data Access Object](#resource-dao-MealPlanningInstance)  | [Schema](#resource-MealPlanningInstance) | [Filter Definition](#resource-filter-MealPlanningInstance) |
 MealPlanningLogRecord | [Data Access Object](#resource-dao-MealPlanningLogRecord)  | [Schema](#resource-MealPlanningLogRecord) | [Filter Definition](#resource-filter-MealPlanningLogRecord) |
 MealPlanningPreferenceProfile | [Data Access Object](#resource-dao-MealPlanningPreferenceProfile)  | [Schema](#resource-MealPlanningPreferenceProfile) | [Filter Definition](#resource-filter-MealPlanningPreferenceProfile) |
 MealPlanningRequirement | [Data Access Object](#resource-dao-MealPlanningRequirement)  | [Schema](#resource-MealPlanningRequirement) | [Filter Definition](#resource-filter-MealPlanningRequirement) |
 MealPlanningRequirementConstraint | [Data Access Object](#resource-dao-MealPlanningRequirementConstraint)  | [Schema](#resource-MealPlanningRequirementConstraint) | [Filter Definition](#resource-filter-MealPlanningRequirementConstraint) |
 MealPlanningRequirementGroup | [Data Access Object](#resource-dao-MealPlanningRequirementGroup)  | [Schema](#resource-MealPlanningRequirementGroup) | [Filter Definition](#resource-filter-MealPlanningRequirementGroup) |
 MealPlanningReservation | [Data Access Object](#resource-dao-MealPlanningReservation)  | [Schema](#resource-MealPlanningReservation) | [Filter Definition](#resource-filter-MealPlanningReservation) |
 MealPlanningRestaurantConstraint | [Data Access Object](#resource-dao-MealPlanningRestaurantConstraint)  | [Schema](#resource-MealPlanningRestaurantConstraint) | [Filter Definition](#resource-filter-MealPlanningRestaurantConstraint) |
 MealPlanningSchedule | [Data Access Object](#resource-dao-MealPlanningSchedule)  | [Schema](#resource-MealPlanningSchedule) | [Filter Definition](#resource-filter-MealPlanningSchedule) |
 MealPlanningTemplate | [Data Access Object](#resource-dao-MealPlanningTemplate)  | [Schema](#resource-MealPlanningTemplate) | [Filter Definition](#resource-filter-MealPlanningTemplate) |
 MealType | [Data Access Object](#resource-dao-MealType)  | [Schema](#resource-MealType) | [Filter Definition](#resource-filter-MealType) |
 Menu | [Data Access Object](#resource-dao-Menu)  | [Schema](#resource-Menu) | [Filter Definition](#resource-filter-Menu) |
 MenuGroup | [Data Access Object](#resource-dao-MenuGroup)  | [Schema](#resource-MenuGroup) | [Filter Definition](#resource-filter-MenuGroup) |
 MenuItem | [Data Access Object](#resource-dao-MenuItem)  | [Schema](#resource-MenuItem) | [Filter Definition](#resource-filter-MenuItem) |
 MenuOptionGroup | [Data Access Object](#resource-dao-MenuOptionGroup)  | [Schema](#resource-MenuOptionGroup) | [Filter Definition](#resource-filter-MenuOptionGroup) |
 MenuOptionItem | [Data Access Object](#resource-dao-MenuOptionItem)  | [Schema](#resource-MenuOptionItem) | [Filter Definition](#resource-filter-MenuOptionItem) |
 NotificationLog | [Data Access Object](#resource-dao-NotificationLog)  | [Schema](#resource-NotificationLog) | [Filter Definition](#resource-filter-NotificationLog) |
 Order | [Data Access Object](#resource-dao-Order)  | [Schema](#resource-Order) | [Filter Definition](#resource-filter-Order) |
 OrderItem | [Data Access Object](#resource-dao-OrderItem)  | [Schema](#resource-OrderItem) | [Filter Definition](#resource-filter-OrderItem) |
 PaymentAccount | [Data Access Object](#resource-dao-PaymentAccount)  | [Schema](#resource-PaymentAccount) | [Filter Definition](#resource-filter-PaymentAccount) |
 PaymentCard | [Data Access Object](#resource-dao-PaymentCard)  | [Schema](#resource-PaymentCard) | [Filter Definition](#resource-filter-PaymentCard) |
 PayrollRun | [Data Access Object](#resource-dao-PayrollRun)  | [Schema](#resource-PayrollRun) | [Filter Definition](#resource-filter-PayrollRun) |
 PickupLocation | [Data Access Object](#resource-dao-PickupLocation)  | [Schema](#resource-PickupLocation) | [Filter Definition](#resource-filter-PickupLocation) |
 PromoCode | [Data Access Object](#resource-dao-PromoCode)  | [Schema](#resource-PromoCode) | [Filter Definition](#resource-filter-PromoCode) |
 QualifyingQuestion | [Data Access Object](#resource-dao-QualifyingQuestion)  | [Schema](#resource-QualifyingQuestion) | [Filter Definition](#resource-filter-QualifyingQuestion) |
 ReleaseNote | [Data Access Object](#resource-dao-ReleaseNote)  | [Schema](#resource-ReleaseNote) | [Filter Definition](#resource-filter-ReleaseNote) |
 Restaurant | [Data Access Object](#resource-dao-Restaurant)  | [Schema](#resource-Restaurant) | [Filter Definition](#resource-filter-Restaurant) |
 RestaurantCapacityTranche | [Data Access Object](#resource-dao-RestaurantCapacityTranche)  | [Schema](#resource-RestaurantCapacityTranche) | [Filter Definition](#resource-filter-RestaurantCapacityTranche) |
 RestaurantClosure | [Data Access Object](#resource-dao-RestaurantClosure)  | [Schema](#resource-RestaurantClosure) | [Filter Definition](#resource-filter-RestaurantClosure) |
 RestaurantDiscount | [Data Access Object](#resource-dao-RestaurantDiscount)  | [Schema](#resource-RestaurantDiscount) | [Filter Definition](#resource-filter-RestaurantDiscount) |
 RestaurantOrderInvoice | [Data Access Object](#resource-dao-RestaurantOrderInvoice)  | [Schema](#resource-RestaurantOrderInvoice) | [Filter Definition](#resource-filter-RestaurantOrderInvoice) |
 RestaurantRanking | [Data Access Object](#resource-dao-RestaurantRanking)  | [Schema](#resource-RestaurantRanking) | [Filter Definition](#resource-filter-RestaurantRanking) |
 RestaurantVote | [Data Access Object](#resource-dao-RestaurantVote)  | [Schema](#resource-RestaurantVote) | [Filter Definition](#resource-filter-RestaurantVote) |
 Role | [Data Access Object](#resource-dao-Role)  | [Schema](#resource-Role) | [Filter Definition](#resource-filter-Role) |
 SalesforceCase | [Data Access Object](#resource-dao-SalesforceCase)  | [Schema](#resource-SalesforceCase) | [Filter Definition](#resource-filter-SalesforceCase) |
 SalesforceSyncError | [Data Access Object](#resource-dao-SalesforceSyncError)  | [Schema](#resource-SalesforceSyncError) | [Filter Definition](#resource-filter-SalesforceSyncError) |
 ServiceTime | [Data Access Object](#resource-dao-ServiceTime)  | [Schema](#resource-ServiceTime) | [Filter Definition](#resource-filter-ServiceTime) |
 SubscriptionPlan | [Data Access Object](#resource-dao-SubscriptionPlan)  | [Schema](#resource-SubscriptionPlan) | [Filter Definition](#resource-filter-SubscriptionPlan) |
 Tag | [Data Access Object](#resource-dao-Tag)  | [Schema](#resource-Tag) | [Filter Definition](#resource-filter-Tag) |
 Team | [Data Access Object](#resource-dao-Team)  | [Schema](#resource-Team) | [Filter Definition](#resource-filter-Team) |
 User | [Data Access Object](#resource-dao-User)  | [Schema](#resource-User) | [Filter Definition](#resource-filter-User) |
 UserFeedback | [Data Access Object](#resource-dao-UserFeedback)  | [Schema](#resource-UserFeedback) | [Filter Definition](#resource-filter-UserFeedback) |
 UserInvite | [Data Access Object](#resource-dao-UserInvite)  | [Schema](#resource-UserInvite) | [Filter Definition](#resource-filter-UserInvite) |
 

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



### <a name='resource-dao-AccountingConsolidationConfiguration'></a>AccountingConsolidationConfiguration
See [AccountingConsolidationConfigurationFilter](#resource-filter-AccountingConsolidationConfiguration) for valid filters.
See [AccountingConsolidationConfiguration](#resource-AccountingConsolidationConfiguration) for the resource schema.
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
const singleAccountingConsolidationConfiguration= await client.accountingConsolidationConfigurations.get(1,  options);
const pagedIndexOfAccountingConsolidationConfigurations = await client.accountingConsolidationConfigurations.index(options);

// Related Resources
// To One
// Get AccountingConsolidationConfiguration#1's paymentCard
const singlePaymentCard = await client.accountingConsolidationConfigurations.from(1).get.paymentCard(1,  options);
// Get AccountingConsolidationConfiguration#1's client
const singleClient = await client.accountingConsolidationConfigurations.from(1).get.client(1,  options);
// To Many
// Index AccountingConsolidationConfiguration#1's runs
const pagedIndexOfAccountingConsolidationRuns = await client.accountingConsolidationConfigurations.from(1).index.runs(options);
```
### <a name='resource-dao-AccountingConsolidationRun'></a>AccountingConsolidationRun
See [AccountingConsolidationRunFilter](#resource-filter-AccountingConsolidationRun) for valid filters.
See [AccountingConsolidationRun](#resource-AccountingConsolidationRun) for the resource schema.
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
const singleAccountingConsolidationRun= await client.accountingConsolidationRuns.get(1,  options);
const pagedIndexOfAccountingConsolidationRuns = await client.accountingConsolidationRuns.index(options);

// Related Resources
// To One
// Get AccountingConsolidationRun#1's configuration
const singleAccountingConsolidationConfiguration = await client.accountingConsolidationRuns.from(1).get.configuration(1,  options);
// Get AccountingConsolidationRun#1's invoice
const singleAccountingLedgerItem = await client.accountingConsolidationRuns.from(1).get.invoice(1,  options);
// Get AccountingConsolidationRun#1's client
const singleClient = await client.accountingConsolidationRuns.from(1).get.client(1,  options);
```
### <a name='resource-dao-AccountingLedgerItem'></a>AccountingLedgerItem
See [AccountingLedgerItemFilter](#resource-filter-AccountingLedgerItem) for valid filters.
See [AccountingLedgerItem](#resource-AccountingLedgerItem) for the resource schema.
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
const singleAccountingLedgerItem= await client.accountingLedgerItems.get(1,  options);
const pagedIndexOfAccountingLedgerItems = await client.accountingLedgerItems.index(options);

// Related Resources
// To One
// Get AccountingLedgerItem#1's parent
const singleAccountingLedgerItem = await client.accountingLedgerItems.from(1).get.parent(1,  options);
// To Many
// Index AccountingLedgerItem#1's lineItems
const pagedIndexOfAccountingLineItems = await client.accountingLedgerItems.from(1).index.lineItems(options);
// Index AccountingLedgerItem#1's children
const pagedIndexOfAccountingLedgerItems = await client.accountingLedgerItems.from(1).index.children(options);
```
### <a name='resource-dao-AccountingLineItem'></a>AccountingLineItem
See [AccountingLineItemFilter](#resource-filter-AccountingLineItem) for valid filters.
See [AccountingLineItem](#resource-AccountingLineItem) for the resource schema.
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
const singleAccountingLineItem= await client.accountingLineItems.get(1,  options);
const pagedIndexOfAccountingLineItems = await client.accountingLineItems.index(options);

// Related Resources
// To One
// Get AccountingLineItem#1's ledgerItem
const singleAccountingLedgerItem = await client.accountingLineItems.from(1).get.ledgerItem(1,  options);
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
const pagedIndexOfHistorianVersions = await client.appConfigurations.from(1).index.versions(options);
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
// Index Area#1's currentWeekAreaClosures
const pagedIndexOfAreaClosures = await client.areas.from(1).index.currentWeekAreaClosures(options);
// Index Area#1's promoCodes
const pagedIndexOfPromoCodes = await client.areas.from(1).index.promoCodes(options);
// Index Area#1's orders
const pagedIndexOfOrders = await client.areas.from(1).index.orders(options);
// Index Area#1's versions
const pagedIndexOfHistorianVersions = await client.areas.from(1).index.versions(options);
// Index Area#1's allAreaVersions
const pagedIndexOfHistorianVersions = await client.areas.from(1).index.allAreaVersions(options);
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
// Get Client#1's subscriptionPlan
const singleSubscriptionPlan = await client.clients.from(1).get.subscriptionPlan(1,  options);
// Get Client#1's accountManager
const singleUser = await client.clients.from(1).get.accountManager(1,  options);
// Get Client#1's owner
const singleUser = await client.clients.from(1).get.owner(1,  options);
// Get Client#1's salesSupport
const singleUser = await client.clients.from(1).get.salesSupport(1,  options);
// Get Client#1's company
const singleCompany = await client.clients.from(1).get.company(1,  options);
// Get Client#1's mealPlan
const singleMealPlan = await client.clients.from(1).get.mealPlan(1,  options);
// Get Client#1's preferenceProfile
const singleMealPlanningPreferenceProfile = await client.clients.from(1).get.preferenceProfile(1,  options);
// Get Client#1's taxRate
const singleInvoicingTaxRate = await client.clients.from(1).get.taxRate(1,  options);
// Get Client#1's giftbitCard
const singleGiftbitCard = await client.clients.from(1).get.giftbitCard(1,  options);
// Get Client#1's wallet
const singleCurrenciesWallet = await client.clients.from(1).get.wallet(1,  options);
// To Many
// Index Client#1's areas
const pagedIndexOfAreas = await client.clients.from(1).index.areas(options);
// Index Client#1's deliveryLocations
const pagedIndexOfDeliveryLocations = await client.clients.from(1).index.deliveryLocations(options);
// Index Client#1's paymentCards
const pagedIndexOfPaymentCards = await client.clients.from(1).index.paymentCards(options);
// Index Client#1's adminContacts
const pagedIndexOfContacts = await client.clients.from(1).index.adminContacts(options);
// Index Client#1's admins
const pagedIndexOfUsers = await client.clients.from(1).index.admins(options);
// Index Client#1's orderContacts
const pagedIndexOfContacts = await client.clients.from(1).index.orderContacts(options);
// Index Client#1's orders
const pagedIndexOfOrders = await client.clients.from(1).index.orders(options);
// Index Client#1's contacts
const pagedIndexOfContacts = await client.clients.from(1).index.contacts(options);
// Index Client#1's teams
const pagedIndexOfTeams = await client.clients.from(1).index.teams(options);
// Index Client#1's allClientVersions
const pagedIndexOfHistorianVersions = await client.clients.from(1).index.allClientVersions(options);
// Index Client#1's versions
const pagedIndexOfHistorianVersions = await client.clients.from(1).index.versions(options);
// Index Client#1's mealPlanningTemplates
const pagedIndexOfMealPlanningTemplates = await client.clients.from(1).index.mealPlanningTemplates(options);
// Index Client#1's mealPlanningInstances
const pagedIndexOfMealPlanningInstances = await client.clients.from(1).index.mealPlanningInstances(options);
// Index Client#1's mealPlanningReservations
const pagedIndexOfMealPlanningReservations = await client.clients.from(1).index.mealPlanningReservations(options);
// Index Client#1's clientDiscounts
const pagedIndexOfClientDiscounts = await client.clients.from(1).index.clientDiscounts(options);
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
// Get ClientDiscount#1's owner
const singleOwner = await client.clientDiscounts.from(1).get.owner(1,  options);
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
const pagedIndexOfHistorianVersions = await client.couriers.from(1).index.versions(options);
```
### <a name='resource-dao-CurrenciesCurrency'></a>CurrenciesCurrency
See [CurrenciesCurrencyFilter](#resource-filter-CurrenciesCurrency) for valid filters.
See [CurrenciesCurrency](#resource-CurrenciesCurrency) for the resource schema.
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
const singleCurrenciesCurrency= await client.currenciesCurrencies.get(1,  options);
const pagedIndexOfCurrenciesCurrencies = await client.currenciesCurrencies.index(options);
```
### <a name='resource-dao-CurrenciesTransaction'></a>CurrenciesTransaction
See [CurrenciesTransactionFilter](#resource-filter-CurrenciesTransaction) for valid filters.
See [CurrenciesTransaction](#resource-CurrenciesTransaction) for the resource schema.
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
const singleCurrenciesTransaction= await client.currenciesTransactions.get(1,  options);
const pagedIndexOfCurrenciesTransactions = await client.currenciesTransactions.index(options);

// Related Resources
// To One
// Get CurrenciesTransaction#1's agent
const singleAgent = await client.currenciesTransactions.from(1).get.agent(1,  options);
// Get CurrenciesTransaction#1's subject
const singleSubject = await client.currenciesTransactions.from(1).get.subject(1,  options);
```
### <a name='resource-dao-CurrenciesWallet'></a>CurrenciesWallet
See [CurrenciesWalletFilter](#resource-filter-CurrenciesWallet) for valid filters.
See [CurrenciesWallet](#resource-CurrenciesWallet) for the resource schema.
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
const singleCurrenciesWallet= await client.currenciesWallets.get(1,  options);
const pagedIndexOfCurrenciesWallets = await client.currenciesWallets.index(options);

// Related Resources
// To One
// Get CurrenciesWallet#1's owner
const singleOwner = await client.currenciesWallets.from(1).get.owner(1,  options);
// To Many
// Index CurrenciesWallet#1's transactions
const pagedIndexOfCurrencies::Transactions = await client.currenciesWallets.from(1).index.transactions(options);
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
### <a name='resource-dao-FeatureFlagDescription'></a>FeatureFlagDescription
See [FeatureFlagDescriptionFilter](#resource-filter-FeatureFlagDescription) for valid filters.
See [FeatureFlagDescription](#resource-FeatureFlagDescription) for the resource schema.
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
const singleFeatureFlagDescription= await client.featureFlagDescriptions.get(1,  options);
const pagedIndexOfFeatureFlagDescriptions = await client.featureFlagDescriptions.index(options);

// Related Resources
// To Many
// Index FeatureFlagDescription#1's subscriptionPlans
const pagedIndexOfSubscriptionPlans = await client.featureFlagDescriptions.from(1).index.subscriptionPlans(options);
```
### <a name='resource-dao-FoodType'></a>FoodType
See [FoodTypeFilter](#resource-filter-FoodType) for valid filters.
See [FoodType](#resource-FoodType) for the resource schema.
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
const singleFoodType= await client.foodTypes.get(1,  options);
const pagedIndexOfFoodTypes = await client.foodTypes.index(options);
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
// Get GroupOrderMember#1's invoice
const singleAccountingLedgerItem = await client.groupOrderMembers.from(1).get.invoice(1,  options);
// To Many
// Index GroupOrderMember#1's orderItems
const pagedIndexOfOrderItems = await client.groupOrderMembers.from(1).index.orderItems(options);
```
### <a name='resource-dao-HistorianVersion'></a>HistorianVersion
See [HistorianVersionFilter](#resource-filter-HistorianVersion) for valid filters.
See [HistorianVersion](#resource-HistorianVersion) for the resource schema.
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
const singleHistorianVersion= await client.historianVersions.get(1,  options);
const pagedIndexOfHistorianVersions = await client.historianVersions.index(options);
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
### <a name='resource-dao-InvoicingLedgerItem'></a>InvoicingLedgerItem
See [InvoicingLedgerItemFilter](#resource-filter-InvoicingLedgerItem) for valid filters.
See [InvoicingLedgerItem](#resource-InvoicingLedgerItem) for the resource schema.
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
const singleInvoicingLedgerItem= await client.invoicingLedgerItems.get(1,  options);
const pagedIndexOfInvoicingLedgerItems = await client.invoicingLedgerItems.index(options);
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
// To Many
// Index InvoicingTaxRate#1's areas
const pagedIndexOfAreas = await client.invoicingTaxRates.from(1).index.areas(options);
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
### <a name='resource-dao-LogisticsArrivalEstimate'></a>LogisticsArrivalEstimate
See [LogisticsArrivalEstimateFilter](#resource-filter-LogisticsArrivalEstimate) for valid filters.
See [LogisticsArrivalEstimate](#resource-LogisticsArrivalEstimate) for the resource schema.
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
const singleLogisticsArrivalEstimate= await client.logisticsArrivalEstimates.get(1,  options);
const pagedIndexOfLogisticsArrivalEstimates = await client.logisticsArrivalEstimates.index(options);
```
### <a name='resource-dao-LogisticsDelivery'></a>LogisticsDelivery
See [LogisticsDeliveryFilter](#resource-filter-LogisticsDelivery) for valid filters.
See [LogisticsDelivery](#resource-LogisticsDelivery) for the resource schema.
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
const singleLogisticsDelivery= await client.logisticsDeliveries.get(1,  options);
const pagedIndexOfLogisticsDeliveries = await client.logisticsDeliveries.index(options);

// Related Resources
// To One
// Get LogisticsDelivery#1's driver
const singleUser = await client.logisticsDeliveries.from(1).get.driver(1,  options);
// Get LogisticsDelivery#1's courier
const singleCourier = await client.logisticsDeliveries.from(1).get.courier(1,  options);
// Get LogisticsDelivery#1's area
const singleArea = await client.logisticsDeliveries.from(1).get.area(1,  options);
// Get LogisticsDelivery#1's order
const singleOrder = await client.logisticsDeliveries.from(1).get.order(1,  options);
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
### <a name='resource-dao-MealPlanningEvent'></a>MealPlanningEvent
See [MealPlanningEventFilter](#resource-filter-MealPlanningEvent) for valid filters.
See [MealPlanningEvent](#resource-MealPlanningEvent) for the resource schema.
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
const singleMealPlanningEvent= await client.mealPlanningEvents.get(1,  options);
const pagedIndexOfMealPlanningEvents = await client.mealPlanningEvents.index(options);

// Related Resources
// To One
// Get MealPlanningEvent#1's instance
const singleMealPlanningInstance = await client.mealPlanningEvents.from(1).get.instance(1,  options);
// To Many
// Index MealPlanningEvent#1's orders
const pagedIndexOfOrders = await client.mealPlanningEvents.from(1).index.orders(options);
// Index MealPlanningEvent#1's restaurants
const pagedIndexOfRestaurants = await client.mealPlanningEvents.from(1).index.restaurants(options);
// Index MealPlanningEvent#1's reservations
const pagedIndexOfMealPlanningReservations = await client.mealPlanningEvents.from(1).index.reservations(options);
// Index MealPlanningEvent#1's restaurantConstraints
const pagedIndexOfMealPlanningRestaurantConstraints = await client.mealPlanningEvents.from(1).index.restaurantConstraints(options);
// Index MealPlanningEvent#1's users
const pagedIndexOfUsers = await client.mealPlanningEvents.from(1).index.users(options);
```
### <a name='resource-dao-MealPlanningInstance'></a>MealPlanningInstance
See [MealPlanningInstanceFilter](#resource-filter-MealPlanningInstance) for valid filters.
See [MealPlanningInstance](#resource-MealPlanningInstance) for the resource schema.
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
const singleMealPlanningInstance= await client.mealPlanningInstances.get(1,  options);
const pagedIndexOfMealPlanningInstances = await client.mealPlanningInstances.index(options);

// Related Resources
// To One
// Get MealPlanningInstance#1's client
const singleClient = await client.mealPlanningInstances.from(1).get.client(1,  options);
// Get MealPlanningInstance#1's area
const singleArea = await client.mealPlanningInstances.from(1).get.area(1,  options);
// Get MealPlanningInstance#1's mealPlanningTemplate
const singleMealPlanningTemplate = await client.mealPlanningInstances.from(1).get.mealPlanningTemplate(1,  options);
// Get MealPlanningInstance#1's preferenceProfile
const singleMealPlanningPreferenceProfile = await client.mealPlanningInstances.from(1).get.preferenceProfile(1,  options);
// Get MealPlanningInstance#1's orderTemplate
const singleOrder = await client.mealPlanningInstances.from(1).get.orderTemplate(1,  options);
// Get MealPlanningInstance#1's defaultOrderOwner
const singleUser = await client.mealPlanningInstances.from(1).get.defaultOrderOwner(1,  options);
// To Many
// Index MealPlanningInstance#1's mealPlanningReservations
const pagedIndexOfMealPlanningReservations = await client.mealPlanningInstances.from(1).index.mealPlanningReservations(options);
// Index MealPlanningInstance#1's events
const pagedIndexOfMealPlanningEvents = await client.mealPlanningInstances.from(1).index.events(options);
// Index MealPlanningInstance#1's restaurantConstraints
const pagedIndexOfMealPlanningRestaurantConstraints = await client.mealPlanningInstances.from(1).index.restaurantConstraints(options);
// Index MealPlanningInstance#1's teamMembers
const pagedIndexOfUsers = await client.mealPlanningInstances.from(1).index.teamMembers(options);
// Index MealPlanningInstance#1's orders
const pagedIndexOfOrders = await client.mealPlanningInstances.from(1).index.orders(options);
// Index MealPlanningInstance#1's logRecords
const pagedIndexOfMealPlanningLogRecords = await client.mealPlanningInstances.from(1).index.logRecords(options);
```
### <a name='resource-dao-MealPlanningLogRecord'></a>MealPlanningLogRecord
See [MealPlanningLogRecordFilter](#resource-filter-MealPlanningLogRecord) for valid filters.
See [MealPlanningLogRecord](#resource-MealPlanningLogRecord) for the resource schema.
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
const singleMealPlanningLogRecord= await client.mealPlanningLogRecords.get(1,  options);
const pagedIndexOfMealPlanningLogRecords = await client.mealPlanningLogRecords.index(options);

// Related Resources
// To One
// Get MealPlanningLogRecord#1's planable
const singlePlanable = await client.mealPlanningLogRecords.from(1).get.planable(1,  options);
```
### <a name='resource-dao-MealPlanningPreferenceProfile'></a>MealPlanningPreferenceProfile
See [MealPlanningPreferenceProfileFilter](#resource-filter-MealPlanningPreferenceProfile) for valid filters.
See [MealPlanningPreferenceProfile](#resource-MealPlanningPreferenceProfile) for the resource schema.
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
const singleMealPlanningPreferenceProfile= await client.mealPlanningPreferenceProfiles.get(1,  options);
const pagedIndexOfMealPlanningPreferenceProfiles = await client.mealPlanningPreferenceProfiles.index(options);

// Related Resources
// To One
// Get MealPlanningPreferenceProfile#1's preferee
const singlePreferee = await client.mealPlanningPreferenceProfiles.from(1).get.preferee(1,  options);
// To Many
// Index MealPlanningPreferenceProfile#1's requirements
const pagedIndexOfMealPlanningRequirements = await client.mealPlanningPreferenceProfiles.from(1).index.requirements(options);
// Index MealPlanningPreferenceProfile#1's requirementGroups
const pagedIndexOfMealPlanningRequirementGroups = await client.mealPlanningPreferenceProfiles.from(1).index.requirementGroups(options);
// Index MealPlanningPreferenceProfile#1's lovedRestaurants
const pagedIndexOfRestaurants = await client.mealPlanningPreferenceProfiles.from(1).index.lovedRestaurants(options);
// Index MealPlanningPreferenceProfile#1's hatedRestaurants
const pagedIndexOfRestaurants = await client.mealPlanningPreferenceProfiles.from(1).index.hatedRestaurants(options);
// Index MealPlanningPreferenceProfile#1's lovedCuisineTypes
const pagedIndexOfTags = await client.mealPlanningPreferenceProfiles.from(1).index.lovedCuisineTypes(options);
// Index MealPlanningPreferenceProfile#1's hatedCuisineTypes
const pagedIndexOfTags = await client.mealPlanningPreferenceProfiles.from(1).index.hatedCuisineTypes(options);
```
### <a name='resource-dao-MealPlanningRequirement'></a>MealPlanningRequirement
See [MealPlanningRequirementFilter](#resource-filter-MealPlanningRequirement) for valid filters.
See [MealPlanningRequirement](#resource-MealPlanningRequirement) for the resource schema.
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
const singleMealPlanningRequirement= await client.mealPlanningRequirements.get(1,  options);
const pagedIndexOfMealPlanningRequirements = await client.mealPlanningRequirements.index(options);

// Related Resources
// To One
// Get MealPlanningRequirement#1's preferenceProfile
const singleMealPlanningPreferenceProfile = await client.mealPlanningRequirements.from(1).get.preferenceProfile(1,  options);
// Get MealPlanningRequirement#1's requirementGroup
const singleMealPlanningRequirementGroup = await client.mealPlanningRequirements.from(1).get.requirementGroup(1,  options);
// Get MealPlanningRequirement#1's restaurantConstraint
const singleMealPlanningRestaurantConstraint = await client.mealPlanningRequirements.from(1).get.restaurantConstraint(1,  options);
// Get MealPlanningRequirement#1's order
const singleOrder = await client.mealPlanningRequirements.from(1).get.order(1,  options);
// To Many
// Index MealPlanningRequirement#1's requirementConstraints
const pagedIndexOfMealPlanningRequirementConstraints = await client.mealPlanningRequirements.from(1).index.requirementConstraints(options);
// Index MealPlanningRequirement#1's tags
const pagedIndexOfTags = await client.mealPlanningRequirements.from(1).index.tags(options);
// Index MealPlanningRequirement#1's dietaryTags
const pagedIndexOfDietaryTags = await client.mealPlanningRequirements.from(1).index.dietaryTags(options);
// Index MealPlanningRequirement#1's allergyTags
const pagedIndexOfDietaryTags = await client.mealPlanningRequirements.from(1).index.allergyTags(options);
// Index MealPlanningRequirement#1's packagingTags
const pagedIndexOfDietaryTags = await client.mealPlanningRequirements.from(1).index.packagingTags(options);
// Index MealPlanningRequirement#1's foodTypes
const pagedIndexOfFoodTypes = await client.mealPlanningRequirements.from(1).index.foodTypes(options);
// Index MealPlanningRequirement#1's mealTypes
const pagedIndexOfMealTypes = await client.mealPlanningRequirements.from(1).index.mealTypes(options);
```
### <a name='resource-dao-MealPlanningRequirementConstraint'></a>MealPlanningRequirementConstraint
See [MealPlanningRequirementConstraintFilter](#resource-filter-MealPlanningRequirementConstraint) for valid filters.
See [MealPlanningRequirementConstraint](#resource-MealPlanningRequirementConstraint) for the resource schema.
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
const singleMealPlanningRequirementConstraint= await client.mealPlanningRequirementConstraints.get(1,  options);
const pagedIndexOfMealPlanningRequirementConstraints = await client.mealPlanningRequirementConstraints.index(options);

// Related Resources
// To One
// Get MealPlanningRequirementConstraint#1's requirement
const singleMealPlanningRequirement = await client.mealPlanningRequirementConstraints.from(1).get.requirement(1,  options);
// To Many
// Index MealPlanningRequirementConstraint#1's mealTypes
const pagedIndexOfMealTypes = await client.mealPlanningRequirementConstraints.from(1).index.mealTypes(options);
// Index MealPlanningRequirementConstraint#1's foodTypes
const pagedIndexOfFoodTypes = await client.mealPlanningRequirementConstraints.from(1).index.foodTypes(options);
// Index MealPlanningRequirementConstraint#1's dietaryTags
const pagedIndexOfDietaryTags = await client.mealPlanningRequirementConstraints.from(1).index.dietaryTags(options);
// Index MealPlanningRequirementConstraint#1's allergyTags
const pagedIndexOfDietaryTags = await client.mealPlanningRequirementConstraints.from(1).index.allergyTags(options);
// Index MealPlanningRequirementConstraint#1's packagingTags
const pagedIndexOfDietaryTags = await client.mealPlanningRequirementConstraints.from(1).index.packagingTags(options);
```
### <a name='resource-dao-MealPlanningRequirementGroup'></a>MealPlanningRequirementGroup
See [MealPlanningRequirementGroupFilter](#resource-filter-MealPlanningRequirementGroup) for valid filters.
See [MealPlanningRequirementGroup](#resource-MealPlanningRequirementGroup) for the resource schema.
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
const singleMealPlanningRequirementGroup= await client.mealPlanningRequirementGroups.get(1,  options);
const pagedIndexOfMealPlanningRequirementGroups = await client.mealPlanningRequirementGroups.index(options);

// Related Resources
// To One
// Get MealPlanningRequirementGroup#1's preferenceProfile
const singleMealPlanningPreferenceProfile = await client.mealPlanningRequirementGroups.from(1).get.preferenceProfile(1,  options);
// To Many
// Index MealPlanningRequirementGroup#1's requirements
const pagedIndexOfMealPlanningRequirements = await client.mealPlanningRequirementGroups.from(1).index.requirements(options);
```
### <a name='resource-dao-MealPlanningReservation'></a>MealPlanningReservation
See [MealPlanningReservationFilter](#resource-filter-MealPlanningReservation) for valid filters.
See [MealPlanningReservation](#resource-MealPlanningReservation) for the resource schema.
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
const singleMealPlanningReservation= await client.mealPlanningReservations.get(1,  options);
const pagedIndexOfMealPlanningReservations = await client.mealPlanningReservations.index(options);

// Related Resources
// To One
// Get MealPlanningReservation#1's area
const singleArea = await client.mealPlanningReservations.from(1).get.area(1,  options);
// Get MealPlanningReservation#1's client
const singleClient = await client.mealPlanningReservations.from(1).get.client(1,  options);
// Get MealPlanningReservation#1's restaurant
const singleRestaurant = await client.mealPlanningReservations.from(1).get.restaurant(1,  options);
// Get MealPlanningReservation#1's mealPlanningInstance
const singleMealPlanningInstance = await client.mealPlanningReservations.from(1).get.mealPlanningInstance(1,  options);
// Get MealPlanningReservation#1's event
const singleMealPlanningEvent = await client.mealPlanningReservations.from(1).get.event(1,  options);
// Get MealPlanningReservation#1's order
const singleOrder = await client.mealPlanningReservations.from(1).get.order(1,  options);
```
### <a name='resource-dao-MealPlanningRestaurantConstraint'></a>MealPlanningRestaurantConstraint
See [MealPlanningRestaurantConstraintFilter](#resource-filter-MealPlanningRestaurantConstraint) for valid filters.
See [MealPlanningRestaurantConstraint](#resource-MealPlanningRestaurantConstraint) for the resource schema.
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
const singleMealPlanningRestaurantConstraint= await client.mealPlanningRestaurantConstraints.get(1,  options);
const pagedIndexOfMealPlanningRestaurantConstraints = await client.mealPlanningRestaurantConstraints.index(options);

// Related Resources
// To One
// Get MealPlanningRestaurantConstraint#1's template
const singleMealPlanningTemplate = await client.mealPlanningRestaurantConstraints.from(1).get.template(1,  options);
// Get MealPlanningRestaurantConstraint#1's instance
const singleMealPlanningInstance = await client.mealPlanningRestaurantConstraints.from(1).get.instance(1,  options);
// Get MealPlanningRestaurantConstraint#1's event
const singleMealPlanningEvent = await client.mealPlanningRestaurantConstraints.from(1).get.event(1,  options);
// Get MealPlanningRestaurantConstraint#1's requirement
const singleMealPlanningRequirement = await client.mealPlanningRestaurantConstraints.from(1).get.requirement(1,  options);
// To Many
// Index MealPlanningRestaurantConstraint#1's restaurants
const pagedIndexOfRestaurants = await client.mealPlanningRestaurantConstraints.from(1).index.restaurants(options);
```
### <a name='resource-dao-MealPlanningSchedule'></a>MealPlanningSchedule
See [MealPlanningScheduleFilter](#resource-filter-MealPlanningSchedule) for valid filters.
See [MealPlanningSchedule](#resource-MealPlanningSchedule) for the resource schema.
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
const singleMealPlanningSchedule= await client.mealPlanningSchedules.get(1,  options);
const pagedIndexOfMealPlanningSchedules = await client.mealPlanningSchedules.index(options);

// Related Resources
// To One
// Get MealPlanningSchedule#1's template
const singleMealPlanningTemplate = await client.mealPlanningSchedules.from(1).get.template(1,  options);
// To Many
// Index MealPlanningSchedule#1's skipPeriods
const pagedIndexOfMealPlanningSkipPeriods = await client.mealPlanningSchedules.from(1).index.skipPeriods(options);
```
### <a name='resource-dao-MealPlanningTemplate'></a>MealPlanningTemplate
See [MealPlanningTemplateFilter](#resource-filter-MealPlanningTemplate) for valid filters.
See [MealPlanningTemplate](#resource-MealPlanningTemplate) for the resource schema.
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
const singleMealPlanningTemplate= await client.mealPlanningTemplates.get(1,  options);
const pagedIndexOfMealPlanningTemplates = await client.mealPlanningTemplates.index(options);

// Related Resources
// To One
// Get MealPlanningTemplate#1's client
const singleClient = await client.mealPlanningTemplates.from(1).get.client(1,  options);
// Get MealPlanningTemplate#1's orderTemplate
const singleOrder = await client.mealPlanningTemplates.from(1).get.orderTemplate(1,  options);
// Get MealPlanningTemplate#1's area
const singleArea = await client.mealPlanningTemplates.from(1).get.area(1,  options);
// Get MealPlanningTemplate#1's preferenceProfile
const singleMealPlanningPreferenceProfile = await client.mealPlanningTemplates.from(1).get.preferenceProfile(1,  options);
// Get MealPlanningTemplate#1's schedule
const singleMealPlanningSchedule = await client.mealPlanningTemplates.from(1).get.schedule(1,  options);
// Get MealPlanningTemplate#1's defaultOrderOwner
const singleUser = await client.mealPlanningTemplates.from(1).get.defaultOrderOwner(1,  options);
// To Many
// Index MealPlanningTemplate#1's mealPlanningInstances
const pagedIndexOfMealPlanningInstances = await client.mealPlanningTemplates.from(1).index.mealPlanningInstances(options);
// Index MealPlanningTemplate#1's restaurantConstraints
const pagedIndexOfMealPlanningRestaurantConstraints = await client.mealPlanningTemplates.from(1).index.restaurantConstraints(options);
```
### <a name='resource-dao-MealType'></a>MealType
See [MealTypeFilter](#resource-filter-MealType) for valid filters.
See [MealType](#resource-MealType) for the resource schema.
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
const singleMealType= await client.mealTypes.get(1,  options);
const pagedIndexOfMealTypes = await client.mealTypes.index(options);
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
// Index MenuGroup#1's mealTypes
const pagedIndexOfMealTypes = await client.menuGroups.from(1).index.mealTypes(options);
// Index MenuGroup#1's foodTypes
const pagedIndexOfFoodTypes = await client.menuGroups.from(1).index.foodTypes(options);
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
// Index MenuItem#1's mealTypes
const pagedIndexOfMealTypes = await client.menuItems.from(1).index.mealTypes(options);
// Index MenuItem#1's foodTypes
const pagedIndexOfFoodTypes = await client.menuItems.from(1).index.foodTypes(options);
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
### <a name='resource-dao-NotificationLog'></a>NotificationLog
See [NotificationLogFilter](#resource-filter-NotificationLog) for valid filters.
See [NotificationLog](#resource-NotificationLog) for the resource schema.
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
const singleNotificationLog= await client.notificationLogs.get(1,  options);
const pagedIndexOfNotificationLogs = await client.notificationLogs.index(options);

// Related Resources
// To One
// Get NotificationLog#1's order
const singleOrder = await client.notificationLogs.from(1).get.order(1,  options);
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
// Get Order#1's salesSupport
const singleUser = await client.orders.from(1).get.salesSupport(1,  options);
// Get Order#1's restaurantLocation
const singleLocation = await client.orders.from(1).get.restaurantLocation(1,  options);
// Get Order#1's clientLocation
const singleLocation = await client.orders.from(1).get.clientLocation(1,  options);
// Get Order#1's menu
const singleMenu = await client.orders.from(1).get.menu(1,  options);
// Get Order#1's menuFilter
const singleMealPlanningRequirement = await client.orders.from(1).get.menuFilter(1,  options);
// Get Order#1's customLocation
const singleLocation = await client.orders.from(1).get.customLocation(1,  options);
// Get Order#1's giftbitError
const singleGiftbitError = await client.orders.from(1).get.giftbitError(1,  options);
// Get Order#1's restaurantInvoice
const singleInvoicingLedgerItem = await client.orders.from(1).get.restaurantInvoice(1,  options);
// Get Order#1's clientInvoice
const singleInvoicingLedgerItem = await client.orders.from(1).get.clientInvoice(1,  options);
// Get Order#1's invoice
const singleAccountingLedgerItem = await client.orders.from(1).get.invoice(1,  options);
// Get Order#1's restaurantBill
const singleAccountingLedgerItem = await client.orders.from(1).get.restaurantBill(1,  options);
// Get Order#1's clientOrderInvoice
const singleClientOrderInvoice = await client.orders.from(1).get.clientOrderInvoice(1,  options);
// Get Order#1's restaurantOrderInvoice
const singleRestaurantOrderInvoice = await client.orders.from(1).get.restaurantOrderInvoice(1,  options);
// Get Order#1's arrivalEstimate
const singleLogisticsArrivalEstimate = await client.orders.from(1).get.arrivalEstimate(1,  options);
// To Many
// Index Order#1's clientDiscounts
const pagedIndexOfClientDiscounts = await client.orders.from(1).index.clientDiscounts(options);
// Index Order#1's restaurantDiscounts
const pagedIndexOfRestaurantDiscounts = await client.orders.from(1).index.restaurantDiscounts(options);
// Index Order#1's emailMessages
const pagedIndexOfEmailMessages = await client.orders.from(1).index.emailMessages(options);
// Index Order#1's deliveryCases
const pagedIndexOfDeliveryCases = await client.orders.from(1).index.deliveryCases(options);
// Index Order#1's deskCases
const pagedIndexOfDeskCases = await client.orders.from(1).index.deskCases(options);
// Index Order#1's allOrderVersions
const pagedIndexOfHistorianVersions = await client.orders.from(1).index.allOrderVersions(options);
// Index Order#1's versions
const pagedIndexOfHistorianVersions = await client.orders.from(1).index.versions(options);
// Index Order#1's pollableRestaurants
const pagedIndexOfRestaurants = await client.orders.from(1).index.pollableRestaurants(options);
// Index Order#1's restaurantVotes
const pagedIndexOfRestaurantVotes = await client.orders.from(1).index.restaurantVotes(options);
// Index Order#1's teams
const pagedIndexOfTeams = await client.orders.from(1).index.teams(options);
// Index Order#1's allUsers
const pagedIndexOfUsers = await client.orders.from(1).index.allUsers(options);
// Index Order#1's orderedUsers
const pagedIndexOfUsers = await client.orders.from(1).index.orderedUsers(options);
// Index Order#1's orderedGroupOrderMembers
const pagedIndexOfGroupOrderMembers = await client.orders.from(1).index.orderedGroupOrderMembers(options);
// Index Order#1's joinedUsers
const pagedIndexOfUsers = await client.orders.from(1).index.joinedUsers(options);
// Index Order#1's teamMembers
const pagedIndexOfUsers = await client.orders.from(1).index.teamMembers(options);
// Index Order#1's groupOrderMembers
const pagedIndexOfGroupOrderMembers = await client.orders.from(1).index.groupOrderMembers(options);
// Index Order#1's orderItems
const pagedIndexOfOrderItems = await client.orders.from(1).index.orderItems(options);
// Index Order#1's ledgerItems
const pagedIndexOfAccountingLedgerItems = await client.orders.from(1).index.ledgerItems(options);
// Index Order#1's salesforceCases
const pagedIndexOfSalesforceCases = await client.orders.from(1).index.salesforceCases(options);
// Index Order#1's notificationLogs
const pagedIndexOfNotificationLogs = await client.orders.from(1).index.notificationLogs(options);
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
const pagedIndexOfHistorianVersions = await client.promoCodes.from(1).index.versions(options);
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
### <a name='resource-dao-ReleaseNote'></a>ReleaseNote
See [ReleaseNoteFilter](#resource-filter-ReleaseNote) for valid filters.
See [ReleaseNote](#resource-ReleaseNote) for the resource schema.
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
const singleReleaseNote= await client.releaseNotes.get(1,  options);
const pagedIndexOfReleaseNotes = await client.releaseNotes.index(options);
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
// Get Restaurant#1's activeMenu
const singleMenu = await client.restaurants.from(1).get.activeMenu(1,  options);
// To Many
// Index Restaurant#1's admins
const pagedIndexOfUsers = await client.restaurants.from(1).index.admins(options);
// Index Restaurant#1's adminContacts
const pagedIndexOfContacts = await client.restaurants.from(1).index.adminContacts(options);
// Index Restaurant#1's allRestaurantVersions
const pagedIndexOfHistorianVersions = await client.restaurants.from(1).index.allRestaurantVersions(options);
// Index Restaurant#1's versions
const pagedIndexOfHistorianVersions = await client.restaurants.from(1).index.versions(options);
// Index Restaurant#1's promoCodes
const pagedIndexOfPromoCodes = await client.restaurants.from(1).index.promoCodes(options);
// Index Restaurant#1's restaurantConstraints
const pagedIndexOfMealPlanningRestaurantConstraints = await client.restaurants.from(1).index.restaurantConstraints(options);
// Index Restaurant#1's rankings
const pagedIndexOfRestaurantRankings = await client.restaurants.from(1).index.rankings(options);
// Index Restaurant#1's orders
const pagedIndexOfOrders = await client.restaurants.from(1).index.orders(options);
// Index Restaurant#1's restaurantCapacityTranches
const pagedIndexOfRestaurantCapacityTranches = await client.restaurants.from(1).index.restaurantCapacityTranches(options);
// Index Restaurant#1's serviceTimes
const pagedIndexOfServiceTimes = await client.restaurants.from(1).index.serviceTimes(options);
// Index Restaurant#1's pickupLocations
const pagedIndexOfPickupLocations = await client.restaurants.from(1).index.pickupLocations(options);
// Index Restaurant#1's dietaryTags
const pagedIndexOfDietaryTags = await client.restaurants.from(1).index.dietaryTags(options);
// Index Restaurant#1's foodTypes
const pagedIndexOfFoodTypes = await client.restaurants.from(1).index.foodTypes(options);
// Index Restaurant#1's mealTypes
const pagedIndexOfMealTypes = await client.restaurants.from(1).index.mealTypes(options);
// Index Restaurant#1's tags
const pagedIndexOfTags = await client.restaurants.from(1).index.tags(options);
// Index Restaurant#1's areas
const pagedIndexOfAreas = await client.restaurants.from(1).index.areas(options);
// Index Restaurant#1's menus
const pagedIndexOfMenus = await client.restaurants.from(1).index.menus(options);
// Index Restaurant#1's restaurantVotes
const pagedIndexOfRestaurantVotes = await client.restaurants.from(1).index.restaurantVotes(options);
// Index Restaurant#1's closures
const pagedIndexOfRestaurantClosures = await client.restaurants.from(1).index.closures(options);
```
### <a name='resource-dao-RestaurantCapacityTranche'></a>RestaurantCapacityTranche
See [RestaurantCapacityTrancheFilter](#resource-filter-RestaurantCapacityTranche) for valid filters.
See [RestaurantCapacityTranche](#resource-RestaurantCapacityTranche) for the resource schema.
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
const singleRestaurantCapacityTranche= await client.restaurantCapacityTranches.get(1,  options);
const pagedIndexOfRestaurantCapacityTranches = await client.restaurantCapacityTranches.index(options);

// Related Resources
// To One
// Get RestaurantCapacityTranche#1's restaurant
const singleRestaurant = await client.restaurantCapacityTranches.from(1).get.restaurant(1,  options);
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
### <a name='resource-dao-RestaurantRanking'></a>RestaurantRanking
See [RestaurantRankingFilter](#resource-filter-RestaurantRanking) for valid filters.
See [RestaurantRanking](#resource-RestaurantRanking) for the resource schema.
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
const singleRestaurantRanking= await client.restaurantRankings.get(1,  options);
const pagedIndexOfRestaurantRankings = await client.restaurantRankings.index(options);

// Related Resources
// To One
// Get RestaurantRanking#1's restaurant
const singleRestaurant = await client.restaurantRankings.from(1).get.restaurant(1,  options);
```
### <a name='resource-dao-RestaurantVote'></a>RestaurantVote
See [RestaurantVoteFilter](#resource-filter-RestaurantVote) for valid filters.
See [RestaurantVote](#resource-RestaurantVote) for the resource schema.
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
const singleRestaurantVote= await client.restaurantVotes.get(1,  options);
const pagedIndexOfRestaurantVotes = await client.restaurantVotes.index(options);

// Related Resources
// To One
// Get RestaurantVote#1's order
const singleOrder = await client.restaurantVotes.from(1).get.order(1,  options);
// Get RestaurantVote#1's restaurant
const singleRestaurant = await client.restaurantVotes.from(1).get.restaurant(1,  options);
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
### <a name='resource-dao-SalesforceCase'></a>SalesforceCase
See [SalesforceCaseFilter](#resource-filter-SalesforceCase) for valid filters.
See [SalesforceCase](#resource-SalesforceCase) for the resource schema.
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
const singleSalesforceCase= await client.salesforceCases.get(1,  options);
const pagedIndexOfSalesforceCases = await client.salesforceCases.index(options);

// Related Resources
// To One
// Get SalesforceCase#1's order
const singleOrder = await client.salesforceCases.from(1).get.order(1,  options);
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
### <a name='resource-dao-SubscriptionPlan'></a>SubscriptionPlan
See [SubscriptionPlanFilter](#resource-filter-SubscriptionPlan) for valid filters.
See [SubscriptionPlan](#resource-SubscriptionPlan) for the resource schema.
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
const singleSubscriptionPlan= await client.subscriptionPlans.get(1,  options);
const pagedIndexOfSubscriptionPlans = await client.subscriptionPlans.index(options);

// Related Resources
// To Many
// Index SubscriptionPlan#1's clients
const pagedIndexOfClients = await client.subscriptionPlans.from(1).index.clients(options);
// Index SubscriptionPlan#1's featureFlagDescriptions
const pagedIndexOfFeatureFlagDescriptions = await client.subscriptionPlans.from(1).index.featureFlagDescriptions(options);
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
### <a name='resource-dao-Team'></a>Team
See [TeamFilter](#resource-filter-Team) for valid filters.
See [Team](#resource-Team) for the resource schema.
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
const singleTeam= await client.teams.get(1,  options);
const pagedIndexOfTeams = await client.teams.index(options);

// Related Resources
// To One
// Get Team#1's client
const singleClient = await client.teams.from(1).get.client(1,  options);
// To Many
// Index Team#1's members
const pagedIndexOfUsers = await client.teams.from(1).index.members(options);
// Index Team#1's orders
const pagedIndexOfOrders = await client.teams.from(1).index.orders(options);
// Index Team#1's memberProfiles
const pagedIndexOfMealPlanningPreferenceProfiles = await client.teams.from(1).index.memberProfiles(options);
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
// Get User#1's client
const singleClient = await client.users.from(1).get.client(1,  options);
// Get User#1's communicationPreference
const singleCommunicationPreference = await client.users.from(1).get.communicationPreference(1,  options);
// Get User#1's preferenceProfile
const singleMealPlanningPreferenceProfile = await client.users.from(1).get.preferenceProfile(1,  options);
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
// Index User#1's clients
const pagedIndexOfClients = await client.users.from(1).index.clients(options);
// Index User#1's areas
const pagedIndexOfAreas = await client.users.from(1).index.areas(options);
// Index User#1's roles
const pagedIndexOfRoles = await client.users.from(1).index.roles(options);
// Index User#1's paymentCards
const pagedIndexOfPaymentCards = await client.users.from(1).index.paymentCards(options);
// Index User#1's teams
const pagedIndexOfTeams = await client.users.from(1).index.teams(options);
// Index User#1's allUserVersions
const pagedIndexOfHistorianVersions = await client.users.from(1).index.allUserVersions(options);
// Index User#1's versions
const pagedIndexOfHistorianVersions = await client.users.from(1).index.versions(options);
// Index User#1's clientOrders
const pagedIndexOfOrders = await client.users.from(1).index.clientOrders(options);
// Index User#1's events
const pagedIndexOfMealPlanningEvents = await client.users.from(1).index.events(options);
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
// Get UserInvite#1's restaurant
const singleRestaurant = await client.userInvites.from(1).get.restaurant(1,  options);
// Get UserInvite#1's team
const singleTeam = await client.userInvites.from(1).get.team(1,  options);
// Get UserInvite#1's courier
const singleCourier = await client.userInvites.from(1).get.courier(1,  options);
// Get UserInvite#1's user
const singleUser = await client.userInvites.from(1).get.user(1,  options);
```


## Resources
Resources are the base data transfer objects, they are made up of attributes and relationships.

The relationship resources will not be included on the resource when fetched from the api unless they are specifically included
using the include parameter (see: http://jsonapi.org/format/#fetching-includes)

### <a name='resource-AccountingConsolidationConfiguration'></a>AccountingConsolidationConfiguration

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| period |  string |
| queryType |  string |
| queryData |  string |
| firstRunOn |  string |
| lastRanOn |  string |
| nextRunOn |  string |
| currency |  string |
| termDays |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| paymentCard |  PaymentCard |
| client |  Client |
| runs |  AccountingConsolidationRun[] |



### <a name='resource-AccountingConsolidationRun'></a>AccountingConsolidationRun

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| ranOn |  date |
| identifier |  date |
| period |  date |
| queryType |  date |
| queryData |  date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| configuration |  AccountingConsolidationConfiguration |
| invoice |  AccountingLedgerItem |
| client |  Client |



### <a name='resource-AccountingLedgerItem'></a>AccountingLedgerItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| ledgerType |  any |
| identifier |  any |
| status |  any |
| issueDate |  any |
| currency |  any |
| netAmount |  any |
| totalAmount |  any |
| taxAmount |  any |
| description |  any |
| dueDate |  any |
| xeroId |  any |
| refundableAmount |  any |
| taxTotals |  any |
| aggregatedLedger |  any |
| createdAt |  Date |
| updatedAt |  Date |
| canRefund |  Date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| parent |  AccountingLedgerItem |
| lineItems |  AccountingLineItem[] |
| children |  AccountingLedgerItem[] |



### <a name='resource-AccountingLineItem'></a>AccountingLineItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| quantity |  number |
| netAmount |  number |
| totalAmount |  number |
| taxAmount |  number |
| taxRate |  number |
| unitAmount |  number |
| name |  number |
| description |  number |
| notes |  number |
| metaData |  number |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| ledgerItem |  AccountingLedgerItem |



### <a name='resource-AppConfiguration'></a>AppConfiguration

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| key |  string |
| preferences |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| versions |  HistorianVersion[] |



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
| parkAndLoadTime |  boolean |
| currency |  boolean |
| adminFee |  boolean |
| deliveryFee |  boolean |
| deliveryZone |  boolean |
| createdAt |  boolean |
| prefix |  boolean |
| coverImageUrl |  boolean |
| features |  boolean |
| isInternal |  boolean |
| center |  boolean |


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
| currentWeekAreaClosures |  AreaClosure[] |
| promoCodes |  PromoCode[] |
| orders |  Order[] |
| versions |  HistorianVersion[] |
| allAreaVersions |  HistorianVersion[] |



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
| notes |  string |
| veryLateScore |  string |
| actualSegment |  string |
| salesSupportClient |  string |
| updatedAt |  string |
| xeroContactId |  string |
| xeroSynchronizedAt |  string |
| waiveDeliveryFee |  string |
| waiveServiceFee |  string |
| waiveDeliveryFeeAccountingCode |  string |
| waiveServiceFeeAccountingCode |  string |
| waiveDeliveryFeeDescription |  string |
| waiveServiceFeeDescription |  string |
| uuid |  string |
| name |  string |
| legalName |  string |
| accountName |  string |
| deliveryNotes |  string |
| features |  string |
| plan |  string |
| terms |  string |
| termDays |  string |
| apiToken |  string |
| isPayingServiceFee |  string |
| cutleryPreference |  string |
| manageTeams |  string |
| limitShareNotifications |  string |
| companyName |  string |
| planIcalUrl |  string |
| storage |  string |
| state |  string |
| recentSignup |  string |
| ordersCount |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| defaultArea |  Area |
| billingLocation |  Location |
| billingContact |  Contact |
| subscriptionPlan |  SubscriptionPlan |
| accountManager |  User |
| owner |  User |
| salesSupport |  User |
| company |  Company |
| mealPlan |  MealPlan |
| preferenceProfile |  MealPlanningPreferenceProfile |
| taxRate |  InvoicingTaxRate |
| giftbitCard |  GiftbitCard |
| wallet |  CurrenciesWallet |
| areas |  Area[] |
| deliveryLocations |  DeliveryLocation[] |
| paymentCards |  PaymentCard[] |
| adminContacts |  Contact[] |
| admins |  User[] |
| orderContacts |  Contact[] |
| orders |  Order[] |
| contacts |  Contact[] |
| teams |  Team[] |
| allClientVersions |  HistorianVersion[] |
| versions |  HistorianVersion[] |
| mealPlanningTemplates |  MealPlanningTemplate[] |
| mealPlanningInstances |  MealPlanningInstance[] |
| mealPlanningReservations |  MealPlanningReservation[] |
| clientDiscounts |  ClientDiscount[] |
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
| owner |  Owner |



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
| country |  any |
| building |  any |
| street |  any |
| region |  any |
| city |  any |
| addressCode |  any |
| unitNumber |  any |
| floor |  any |
| buzzer |  any |
| deliveryNotes |  any |
| contactPerson |  any |
| orderFrequency |  any |
| orderSize |  any |
| orderBudget |  any |
| howDidYouHearAboutUs |  any |
| howDidYouHearAboutUsOther |  any |
| ordersRegularly |  any |
| ordersForEvents |  any |
| ordersForThemselves |  any |
| howManyPeopleDoYouFeed |  any |
| firstName |  any |
| lastName |  any |
| email |  any |
| phoneNumber |  any |
| extension |  any |
| smsNumber |  any |
| consentToNewTerms |  any |
| receiveNewsletters |  any |
| referrer |  any |
| smsEnabled |  any |
| newFlow |  any |


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
| apiType |  string |
| alwaysSync |  string |
| thirdPartyLogisticsConfiguration |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| owner |  User |
| drivers |  User[] |
| areas |  Area[] |
| versions |  HistorianVersion[] |



### <a name='resource-CurrenciesCurrency'></a>CurrenciesCurrency

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| symbol |  string |




### <a name='resource-CurrenciesTransaction'></a>CurrenciesTransaction

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| value |  any |
| agentName |  any |
| agentEmail |  any |
| subjectName |  any |
| createdAt |  any |
| reason |  any |
| event |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| agent |  Agent |
| subject |  Subject |



### <a name='resource-CurrenciesWallet'></a>CurrenciesWallet

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| balances |  jsonb |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| owner |  Owner |
| transactions |  Currencies::Transaction[] |



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
| addressLine1 |  any |
| addressLine2 |  any |
| area |  any |
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
| rawAddress |  any |
| notes |  any |


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
| foodLabelName |  string |
| slug |  string |
| abbreviation |  string |
| color |  string |
| tagType |  string |


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
| orderIdentifier |  string |
| orderDeliverAt |  date |
| orderPickupAt |  date |
| orderDeliveredAt |  date |


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
| name |  any |
| numberOfPeople |  any |
| leadTime |  any |
| timestamp |  any |
| createdAt |  any |
| eventTimestamp |  any |
| usageReport |  any |




### <a name='resource-FeatureFlagDescription'></a>FeatureFlagDescription

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| flagId |  string |
| description |  string |
| isPlanFeature |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| subscriptionPlans |  SubscriptionPlan[] |



### <a name='resource-FoodType'></a>FoodType

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| emoji |  string |
| name |  string |




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
| dollarsToPoints |  any |
| maxFoodeePriceInCents |  any |
| minFoodeePriceInCents |  any |




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
| numberOfPeople |  string |
| notifyByEmailOnDelivery |  string |
| notifyBySMSOnDelivery |  string |
| notificationPreferences |  string |
| customFields |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |
| order |  Order |
| invoice |  AccountingLedgerItem |
| orderItems |  OrderItem[] |



### <a name='resource-HistorianVersion'></a>HistorianVersion

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| createdAt |  Date |
| itemType |  Date |
| itemId |  Date |
| event |  Date |
| verb |  Date |
| object |  Date |
| objectChanges |  Date |
| misc |  Date |
| whodunnit |  Date |
| email |  Date |




### <a name='resource-Invoice'></a>Invoice

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| clientInvoice |  any |
| updatedAt |  any |




### <a name='resource-InvoicingLedgerItem'></a>InvoicingLedgerItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| issueDate |  Date |
| identifier |  Date |
| currency |  Date |
| totalAmount |  Date |
| netAmount |  Date |
| taxAmount |  Date |
| description |  Date |
| dueDate |  Date |
| status |  Date |
| customFields |  Date |
| senderDetails |  Date |
| pdf |  Date |
| xeroId |  Date |
| ledgerType |  Date |




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
| areas |  Area[] |



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
| addressLine2 |  * |
| rawAddress |  * |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |



### <a name='resource-LogisticsArrivalEstimate'></a>LogisticsArrivalEstimate

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| pickupEstimate |  any |
| deliveryEstimate |  any |
| orderId |  any |




### <a name='resource-LogisticsDelivery'></a>LogisticsDelivery

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| alertStatus |  string |
| allowsPayOutOfPocket |  string |
| deskCases |  string |
| deliveryCases |  string |
| deliverAt |  string |
| deliveredAt |  string |
| deliverOn |  string |
| deliveryEstimate |  string |
| flag |  string |
| identifier |  string |
| isFoodhall |  string |
| isMealPlanOrder |  string |
| isSameDay |  string |
| lastMinute |  string |
| logisticsType |  string |
| monitoringNotes |  string |
| notes |  string |
| numberOfPeople |  string |
| orderImages |  string |
| orderItems |  jsonb |
| orderType |  string |
| pickupAt |  string |
| pickedUpAt |  string |
| state |  string |
| syncedWithThirdPartyLogisticsAt |  string |
| thirdPartyLogisticsException |  string |
| thirdPartyLogisticsId |  string |
| thirdPartyLogisticsTrackingUrl |  string |
| totalAmount |  string |
| contact |  jsonb |
| owner |  jsonb |
| client |  jsonb |
| restaurant |  jsonb |
| clientLocation |  jsonb |
| restaurantLocation |  jsonb |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| driver |  User |
| courier |  Courier |
| area |  Area |
| order |  Order |



### <a name='resource-MealPlan'></a>MealPlan

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| brandColor |  string |
| customCss |  string |
| displayName |  string |
| nameLabel |  string |
| nameLabelPlaceholder |  string |
| logoUrl |  string |
| vanityUrl |  string |
| emailDomain |  string |
| createdAt |  string |
| updatedAt |  string |
| defaultOpensAtLeadTime |  string |
| alwaysRequestDepartment |  string |
| departmentLabel |  string |
| departmentOptions |  string |
| isDepartmentRequired |  string |
| ssoType |  string |
| samlSettings |  string |
| samlIdpMetadataXml |  string |
| oauthSettings |  string |
| password |  string |
| customFields |  jsonb |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| mealPlanUser |  User |
| client |  Client |
| orders |  Order[] |



### <a name='resource-MealPlanningEvent'></a>MealPlanningEvent

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| leadTime |  string |
| numberOfPeople |  string |
| deliverAt |  string |
| pickupAt |  string |
| identifier |  string |
| mealId |  string |
| userOrderMap |  string |
| createdFromTemplate |  string |
| usageReport |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| instance |  MealPlanningInstance |
| orders |  Order[] |
| restaurants |  Restaurant[] |
| reservations |  MealPlanningReservation[] |
| restaurantConstraints |  MealPlanningRestaurantConstraint[] |
| users |  User[] |



### <a name='resource-MealPlanningInstance'></a>MealPlanningInstance

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| plan |  jsonb |
| name |  string |
| startOfWeek |  string |
| buildGroupOrders |  string |
| newWeight |  string |
| favWeight |  string |
| popularityWeight |  string |
| lastWeekWeight |  string |
| lastWeekOffset |  string |
| maxUsesPerWeek |  string |
| maxUsesPerDay |  string |
| maxUsesPerMeal |  string |
| smallestLeadTime |  string |
| teamMembersCount |  string |
| identifier |  string |
| allowRepeats |  string |
| useTeamProfiles |  string |
| ignoreEmptyConstraints |  string |
| ignoredConstraints |  string |
| disabledPreferences |  string |
| excludedPreferenceIds |  string |
| isRecurring |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| area |  Area |
| mealPlanningTemplate |  MealPlanningTemplate |
| preferenceProfile |  MealPlanningPreferenceProfile |
| orderTemplate |  Order |
| defaultOrderOwner |  User |
| mealPlanningReservations |  MealPlanningReservation[] |
| events |  MealPlanningEvent[] |
| restaurantConstraints |  MealPlanningRestaurantConstraint[] |
| teamMembers |  User[] |
| orders |  Order[] |
| logRecords |  MealPlanningLogRecord[] |



### <a name='resource-MealPlanningLogRecord'></a>MealPlanningLogRecord

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| createdAt |  Date |
| text |  Date |
| solverLog |  Date |
| foodeeEmployee |  Date |
| logType |  Date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| planable |  Planable |



### <a name='resource-MealPlanningPreferenceProfile'></a>MealPlanningPreferenceProfile

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| searchBudget |  any |
| searchBudgetEnabled |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| preferee |  Preferee |
| requirements |  MealPlanningRequirement[] |
| requirementGroups |  MealPlanningRequirementGroup[] |
| lovedRestaurants |  Restaurant[] |
| hatedRestaurants |  Restaurant[] |
| lovedCuisineTypes |  Tag[] |
| hatedCuisineTypes |  Tag[] |



### <a name='resource-MealPlanningRequirement'></a>MealPlanningRequirement

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| numberOfOptions |  string |
| numberOfPeople |  string |
| maxPrice |  string |
| minPrice |  string |
| active |  string |
| composition |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| preferenceProfile |  MealPlanningPreferenceProfile |
| requirementGroup |  MealPlanningRequirementGroup |
| restaurantConstraint |  MealPlanningRestaurantConstraint |
| order |  Order |
| requirementConstraints |  MealPlanningRequirementConstraint[] |
| tags |  Tag[] |
| dietaryTags |  DietaryTag[] |
| allergyTags |  DietaryTag[] |
| packagingTags |  DietaryTag[] |
| foodTypes |  FoodType[] |
| mealTypes |  MealType[] |



### <a name='resource-MealPlanningRequirementConstraint'></a>MealPlanningRequirementConstraint

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| tagType |  string |
| constraintType |  string |
| isReadonly |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| requirement |  MealPlanningRequirement |
| mealTypes |  MealType[] |
| foodTypes |  FoodType[] |
| dietaryTags |  DietaryTag[] |
| allergyTags |  DietaryTag[] |
| packagingTags |  DietaryTag[] |



### <a name='resource-MealPlanningRequirementGroup'></a>MealPlanningRequirementGroup

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| budget |  string |
| numberOfPeople |  string |
| portionSize |  string |
| isSharingStyleGroup |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| preferenceProfile |  MealPlanningPreferenceProfile |
| requirements |  MealPlanningRequirement[] |



### <a name='resource-MealPlanningReservation'></a>MealPlanningReservation

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| state |  string |
| deliverAt |  string |
| pickupAt |  string |
| numberOfPeople |  string |
| ignoresCapacityLimit |  string |
| createdAt |  string |
| updatedAt |  string |
| requestedCapacity |  string |
| favourite |  string |
| favouriteCount |  string |
| favouriteCuisine |  string |
| favouriteCuisineCount |  string |
| lastWeek |  string |
| first |  string |
| percentRank |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |
| client |  Client |
| restaurant |  Restaurant |
| mealPlanningInstance |  MealPlanningInstance |
| event |  MealPlanningEvent |
| order |  Order |



### <a name='resource-MealPlanningRestaurantConstraint'></a>MealPlanningRestaurantConstraint

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| value |  string |
| constraintType |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| template |  MealPlanningTemplate |
| instance |  MealPlanningInstance |
| event |  MealPlanningEvent |
| requirement |  MealPlanningRequirement |
| restaurants |  Restaurant[] |



### <a name='resource-MealPlanningSchedule'></a>MealPlanningSchedule

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| frequency |  string |
| frequencyValue |  string |
| periodsInAdvance |  string |
| periodsPerSchedule |  string |
| startsOn |  string |
| endsOn |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| template |  MealPlanningTemplate |
| skipPeriods |  MealPlanningSkipPeriod[] |



### <a name='resource-MealPlanningTemplate'></a>MealPlanningTemplate

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| plan |  jsonb |
| contact |  jsonb |
| location |  jsonb |
| name |  string |
| defaultNumberOfPeople |  string |
| buildGroupOrders |  string |
| newWeight |  string |
| popularityWeight |  string |
| favWeight |  string |
| lastWeekWeight |  string |
| lastWeekOffset |  string |
| maxUsesPerWeek |  string |
| maxUsesPerDay |  string |
| maxUsesPerMeal |  string |
| orderTemplateNumberOfPeople |  string |
| allowRepeats |  string |
| useTeamProfiles |  string |
| ignoreEmptyConstraints |  string |
| isRecurring |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| orderTemplate |  Order |
| area |  Area |
| preferenceProfile |  MealPlanningPreferenceProfile |
| schedule |  MealPlanningSchedule |
| defaultOrderOwner |  User |
| mealPlanningInstances |  MealPlanningInstance[] |
| restaurantConstraints |  MealPlanningRestaurantConstraint[] |



### <a name='resource-MealType'></a>MealType

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| emoji |  string |
| name |  string |
| isExclusive |  string |




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
| draft |  boolean |
| ancestry |  boolean |


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
| minimumServing |  string |
| maximumServing |  string |
| createdAt |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| menu |  Menu |
| menuItems |  MenuItem[] |
| mealTypes |  MealType[] |
| foodTypes |  FoodType[] |



### <a name='resource-MenuItem'></a>MenuItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| createdAt |  string |
| active |  string |
| description |  string |
| minimumQuantity |  string |
| maximumQuantity |  string |
| minimumServing |  string |
| maximumServing |  string |
| actualMinimumQuantity |  string |
| actualMaximumQuantity |  string |
| actualMinimumServing |  string |
| actualMaximumServing |  string |
| actualAverageServing |  string |
| clientPriceCents |  string |
| budgetPrice |  string |
| balancedPrice |  string |
| bountifulPrice |  string |
| position |  string |
| restaurantPriceCents |  number |
| retailPriceCents |  number |
| internalDescription |  number |
| taxRateId |  number |
| taxable |  number |
| capacityUnits |  number |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| taxRate |  InvoicingTaxRate |
| menuGroup |  MenuGroup |
| dietaryTags |  DietaryTag[] |
| mealTypes |  MealType[] |
| foodTypes |  FoodType[] |
| menuOptionGroups |  MenuOptionGroup[] |



### <a name='resource-MenuOptionGroup'></a>MenuOptionGroup

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| verb |  string |
| isRequired |  string |
| isSingleOpt |  string |
| isPackagedSeparately |  string |
| position |  number |


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
| deletedAt |  string |
| restaurantPriceCents |  * |
| retailPriceCents |  * |
| position |  * |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| menuOptionGroup |  MenuOptionGroup |
| dietaryTags |  DietaryTag[] |
| orderItems |  OrderItem[] |



### <a name='resource-NotificationLog'></a>NotificationLog

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| receiver |  any |
| uniquenessContext |  any |
| medium |  any |
| reason |  any |
| url |  any |
| metaInfo |  any |
| createdAt |  any |
| receiverType |  any |
| receiverId |  any |
| sentTos |  any |
| events |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |



### <a name='resource-Order'></a>Order

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| alertStatus |  string |
| allowsGuests |  string |
| allowsPayOutOfPocket |  string |
| bowtieServiceFee |  string |
| clientInvoicePdf |  string |
| restaurantSummaryPdfUrl |  string |
| createdAt |  string |
| deadlineAt |  string |
| deliverAt |  string |
| deliverOn |  string |
| deliveredAt |  string |
| expiresAt |  string |
| opensAt |  string |
| flag |  string |
| guestList |  string |
| budgetType |  string |
| identifier |  string |
| duplicatedFromId |  string |
| ignoresCapacityLimit |  string |
| isAtMaxCapacity |  string |
| isFoodhall |  string |
| isGroupOrder |  string |
| isSameDay |  string |
| lastMinute |  string |
| maxNumberOfPeople |  string |
| validMembersCount |  string |
| name |  string |
| orderType |  string |
| clientNotes |  string |
| courierNotes |  string |
| monitoringNotes |  string |
| notes |  string |
| orderImages |  string |
| numberOfPeople |  string |
| orderSoldOut |  string |
| payOutOfPocketFee |  string |
| perPersonBudget |  string |
| pickedUpAt |  string |
| pickupAt |  string |
| setMenu |  string |
| skipDeliveryFee |  string |
| stateEvent |  string |
| state |  string |
| totalAmount |  string |
| restaurantTotalAmount |  string |
| updatedAt |  string |
| clientLocationId |  string |
| restaurantPollDeadlineAt |  string |
| isAutosave |  string |
| largeOrder |  string |
| outsideHours |  string |
| outOfZone |  string |
| isMealPlanOrder |  string |
| ordersInTranche |  string |
| tranche |  string |
| clientConfirmationId |  string |
| restaurantConfirmationId |  string |
| thirdPartyLogisticsException |  string |
| isBookmark |  string |
| bookmarkExpiresAt |  string |
| bookmarkName |  string |
| urlSafeId |  string |
| uuid |  string |
| online |  string |
| cutleryPreference |  string |
| waiveDeliveryFee |  string |
| waiveServiceFee |  string |
| orderedCount |  string |
| memberCount |  string |
| isTemplate |  string |
| deliveryEstimate |  jsonb |
| overridePickupAtAdjustment |  jsonb |
| logisticsType |  jsonb |
| thirdPartyLogisticsId |  jsonb |
| thirdPartyLogisticsTrackingUrl |  jsonb |
| syncedWithThirdPartyLogisticsAt |  jsonb |
| requestedCapacity |  jsonb |
| waiveDeliveryFeeAccountingCode |  jsonb |
| waiveServiceFeeAccountingCode |  jsonb |
| waiveDeliveryFeeDescription |  jsonb |
| waiveServiceFeeDescription |  jsonb |


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
| salesSupport |  User |
| restaurantLocation |  Location |
| clientLocation |  Location |
| menu |  Menu |
| menuFilter |  MealPlanningRequirement |
| customLocation |  Location |
| giftbitError |  GiftbitError |
| restaurantInvoice |  InvoicingLedgerItem |
| clientInvoice |  InvoicingLedgerItem |
| invoice |  AccountingLedgerItem |
| restaurantBill |  AccountingLedgerItem |
| clientOrderInvoice |  ClientOrderInvoice |
| restaurantOrderInvoice |  RestaurantOrderInvoice |
| arrivalEstimate |  LogisticsArrivalEstimate |
| clientDiscounts |  ClientDiscount[] |
| restaurantDiscounts |  RestaurantDiscount[] |
| emailMessages |  EmailMessage[] |
| deliveryCases |  DeliveryCase[] |
| deskCases |  DeskCase[] |
| allOrderVersions |  HistorianVersion[] |
| versions |  HistorianVersion[] |
| pollableRestaurants |  Restaurant[] |
| restaurantVotes |  RestaurantVote[] |
| teams |  Team[] |
| allUsers |  User[] |
| orderedUsers |  User[] |
| orderedGroupOrderMembers |  GroupOrderMember[] |
| joinedUsers |  User[] |
| teamMembers |  User[] |
| groupOrderMembers |  GroupOrderMember[] |
| orderItems |  OrderItem[] |
| ledgerItems |  AccountingLedgerItem[] |
| salesforceCases |  SalesforceCase[] |
| notificationLogs |  NotificationLog[] |



### <a name='resource-OrderItem'></a>OrderItem

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| quantity |  number |
| maximumServing |  number |
| minimumServing |  number |
| notes |  number |
| clientPriceCents |  number |
| custom |  number |
| taxable |  number |
| overridePrices |  number |
| capacityUnits |  number |
| restaurantPriceCents |  number |


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
| nameOnCard |  number |
| nickname |  number |
| removed |  boolean |
| cardToken |  boolean |


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
| notes |  number |


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
| amount |  string |
| amountType |  string |
| expiresAt |  string |
| internal |  string |
| allowMultipleClientUses |  string |
| description |  string |
| removed |  string |
| startsAt |  string |
| clientAccountingCode |  string |
| restaurantAccountingCode |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| area |  Area |
| restaurant |  Restaurant |
| order |  Order[] |
| versions |  HistorianVersion[] |



### <a name='resource-QualifyingQuestion'></a>QualifyingQuestion

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| contactPerson |  string |
| orderFrequency |  string |
| orderSize |  string |
| orderBudget |  string |




### <a name='resource-ReleaseNote'></a>ReleaseNote

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| subject |  string |
| body |  string |
| createdAt |  string |
| updatedAt |  string |
| author |  string |
| authorProfilePictureUrl |  string |
| active |  string |




### <a name='resource-Restaurant'></a>Restaurant

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| pickupNotes |  string |
| enterpriseRequest |  string |
| completionProgress |  string |
| isPayingAdminFee |  string |
| receivesDailyOrderSummary |  string |
| receivesSMS |  string |
| uuid |  string |
| xeroContactId |  string |
| xeroSynchronizedAt |  string |
| createdAt |  Date |
| updatedAt |  Date |
| active |  Date |
| internal |  Date |
| isExclusive |  Date |
| isNewRestaurant |  Date |
| canGroupOrder |  Date |
| canSameDayOrder |  Date |
| canSameDayTeamOrder |  Date |
| canEnterpriseOrder |  Date |
| canSameDayEnterpriseOrder |  Date |
| sameDayHoursInAdvance |  Date |
| hoursInAdvance |  Date |
| enterpriseHoursInAdvance |  Date |
| minimumOrder |  Date |
| name |  Date |
| legalName |  Date |
| dietaryTagsCounts |  Date |
| slug |  Date |
| subtitle |  Date |
| thumbnailImageUrl |  Date |
| coverImageUrl |  Date |
| features |  Date |
| marketingTitle |  Date |
| marketingDescription |  Date |
| comingSoon |  Date |
| counts |  Date |
| ordersIcalUrl |  Date |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| billingLocation |  Location |
| billingContact |  Contact |
| owner |  User |
| activeMenu |  Menu |
| admins |  User[] |
| adminContacts |  Contact[] |
| allRestaurantVersions |  HistorianVersion[] |
| versions |  HistorianVersion[] |
| promoCodes |  PromoCode[] |
| restaurantConstraints |  MealPlanningRestaurantConstraint[] |
| rankings |  RestaurantRanking[] |
| orders |  Order[] |
| restaurantCapacityTranches |  RestaurantCapacityTranche[] |
| serviceTimes |  ServiceTime[] |
| pickupLocations |  PickupLocation[] |
| dietaryTags |  DietaryTag[] |
| foodTypes |  FoodType[] |
| mealTypes |  MealType[] |
| tags |  Tag[] |
| areas |  Area[] |
| menus |  Menu[] |
| restaurantVotes |  RestaurantVote[] |
| closures |  RestaurantClosure[] |



### <a name='resource-RestaurantCapacityTranche'></a>RestaurantCapacityTranche

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| startTime |  * |
| endTime |  * |
| capacity |  float |
| orderMax |  float |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| restaurant |  Restaurant |



### <a name='resource-RestaurantClosure'></a>RestaurantClosure

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| createdAt |  Date |
| updatedAt |  Date |
| date |  date |


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




### <a name='resource-RestaurantRanking'></a>RestaurantRanking

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| month |  string |
| orders |  string |
| orderPlatformRank |  string |
| orderAreaRank |  string |
| orderAreaPercentRank |  string |
| areaRestaurantCount |  string |
| platformRestaurantCount |  string |
| orderTotal |  string |
| orderPercentage |  string |
| onlineOrders |  string |
| onlineTotal |  string |
| onlinePlatformRank |  string |
| onlineAreaRank |  string |
| onlineAreaPercentRank |  string |
| onlinePercentage |  string |
| foodeeOrders |  string |
| foodeeTotal |  string |
| foodeePlatformRank |  string |
| foodeeAreaRank |  string |
| foodeeAreaPercentRank |  string |
| foodeePercentage |  string |
| onlineTeamOrders |  string |
| onlineTeamOrderTotal |  string |
| onlineTeamOrderPlatformRank |  string |
| onlineTeamOrderAreaRank |  string |
| onlineTeamOrderAreaPercentRank |  string |
| onlineTeamOrderPercentage |  string |
| foodeeTeamOrders |  string |
| foodeeTeamOrderTotal |  string |
| foodeeTeamOrderPlatformRank |  string |
| foodeeTeamOrderAreaRank |  string |
| foodeeTeamOrderAreaPercentRank |  string |
| foodeeTeamOrderPercentage |  string |
| onlineEnterpriseOrders |  string |
| onlineEnterpriseOrderTotal |  string |
| onlineEnterpriseOrderPlatformRank |  string |
| onlineEnterpriseOrderAreaRank |  string |
| onlineEnterpriseOrderAreaPercentRank |  string |
| onlineEnterpriseOrderPercentage |  string |
| foodeeEnterpriseOrders |  string |
| foodeeEnterpriseOrderTotal |  string |
| foodeeEnterpriseOrderPlatformRank |  string |
| foodeeEnterpriseOrderAreaRank |  string |
| foodeeEnterpriseOrderAreaPercentRank |  string |
| foodeeEnterpriseOrderPercentage |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| restaurant |  Restaurant |



### <a name='resource-RestaurantVote'></a>RestaurantVote

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| email |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |
| restaurant |  Restaurant |



### <a name='resource-Role'></a>Role

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| user |  User |



### <a name='resource-SalesforceCase'></a>SalesforceCase

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| caseReason |  any |
| status |  string |
| origin |  string |
| description |  string |
| subject |  string |
| caseType |  any |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| order |  Order |



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
| weekdayLetter |  any |
| weekdayName |  any |
| weekday |  any |
| deliveryStartTime |  * |
| deliveryEndTime |  * |
| pickupStartTime |  * |
| pickupEndTime |  * |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| restaurant |  Restaurant |



### <a name='resource-SubscriptionPlan'></a>SubscriptionPlan

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| plan |  string |
| price |  string |
| deliveryPrice |  string |
| planType |  string |
| description |  string |
| isCustom |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| clients |  Client[] |
| featureFlagDescriptions |  FeatureFlagDescription[] |



### <a name='resource-Tag'></a>Tag

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| emoji |  string |
| name |  string |
| tagType |  string |




### <a name='resource-Team'></a>Team

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| name |  string |
| accountingCode |  string |
| isActive |  string |
| isDefault |  string |
| managedInternally |  string |
| numberOfMembers |  string |
| perPersonBudget |  string |
| dietaryComposition |  string |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| members |  User[] |
| orders |  Order[] |
| memberProfiles |  MealPlanningPreferenceProfile[] |



### <a name='resource-User'></a>User

#### Attributes
| Name | Type |
| ------------- |:-------------:|
| acceptedTermsAt |  Date |
| lastSignInAt |  Date |
| slackChannelInfo |  Date |
| onPayroll |  Date |
| clientAlwaysCall |  Date |
| active |  boolean |
| managedInternally |  boolean |
| department |  boolean |
| email |  boolean |
| salesforceEmail |  boolean |
| firstName |  boolean |
| lastName |  boolean |
| profilePictureUrl |  boolean |
| isPending |  boolean |
| password |  boolean |
| passwordConfirmation |  boolean |
| resetPasswordToken |  boolean |
| phoneNumber |  boolean |
| extension |  boolean |
| isClientAdmin |  boolean |
| isFoodeeEmployee |  boolean |
| isRestaurantUser |  boolean |
| isExclusivelySwiftFoxUser |  boolean |
| smsNumber |  boolean |
| phoneCanSMS |  boolean |
| phoneType |  boolean |
| overridePhoneNumber |  boolean |
| notifyByEmailOnDelivery |  boolean |
| notifyBySMSOnDelivery |  boolean |
| notificationPreferences |  boolean |
| invitationSentAt |  boolean |
| invitationStatus |  boolean |
| invitationToken |  boolean |
| invitationAcceptedAt |  boolean |
| completedQuestionaire |  boolean |
| features |  boolean |
| driverDeviceInfo |  boolean |
| driverFileNumber |  boolean |
| driverSpeedRating |  boolean |
| driverVehicleType |  boolean |
| lastDriverNotificationSentAt |  boolean |
| isActiveDriver |  boolean |
| createdAt |  boolean |
| shouldShowWelcome |  boolean |
| customFields |  boolean |
| storage |  boolean |
| planIcalUrl |  boolean |
| state |  boolean |
| newExperience |  boolean |


#### Relationships
| Name | Type |
| ------------- |:-------------:|
| client |  Client |
| communicationPreference |  CommunicationPreference |
| preferenceProfile |  MealPlanningPreferenceProfile |
| driverPings |  DriverPing[] |
| driverWeeks |  DriverWeek[] |
| driverDays |  DriverDay[] |
| deliveredOrders |  Order[] |
| couriers |  Courier[] |
| clients |  Client[] |
| areas |  Area[] |
| roles |  Role[] |
| paymentCards |  PaymentCard[] |
| teams |  Team[] |
| allUserVersions |  HistorianVersion[] |
| versions |  HistorianVersion[] |
| clientOrders |  Order[] |
| events |  MealPlanningEvent[] |



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
| restaurant |  Restaurant |
| team |  Team |
| courier |  Courier |
| user |  User |




### Resource Filters
Filters can be applied to any index endpoint for a resource, or a related resource.


### <a name='resource-filter-AccountingConsolidationConfiguration'></a>AccountingConsolidationConfiguration
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| clientId |  integer |



### <a name='resource-filter-AccountingConsolidationRun'></a>AccountingConsolidationRun
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| search |  any |



### <a name='resource-filter-AccountingLedgerItem'></a>AccountingLedgerItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| parentId |  integer |
| ledgerType |  any |
| notLedgerType |  any |
| search |  any |
| withoutParent |  any |
| sameRecipientAs |  any |



### <a name='resource-filter-AccountingLineItem'></a>AccountingLineItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| search |  any |



### <a name='resource-filter-AppConfiguration'></a>AppConfiguration
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| key |  string |



### <a name='resource-filter-Area'></a>Area
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| active |  boolean |
| search |  any |
| nearestTo |  any |
| nearestToAddress |  any |
| containing |  any |
| containingAddress |  any |



### <a name='resource-filter-AreaClosure'></a>AreaClosure
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| area |  any |
| startsAfter |  any |
| overlapsWeek |  any |



### <a name='resource-filter-Client'></a>Client
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| uuid |  uuid |
| managedByMe |  any |
| name |  string |
| area |  any |
| areaIds |  any |
| search |  any |
| xeroErrors |  any |
| unplannedForMondayInArea |  any |
| hasTemplates |  any |



### <a name='resource-filter-ClientDiscount'></a>ClientDiscount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-ClientOrderInvoice'></a>ClientOrderInvoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-ClientSignup'></a>ClientSignup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-CommunicationPreference'></a>CommunicationPreference
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-Company'></a>Company
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| name |  string |



### <a name='resource-filter-Contact'></a>Contact
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| name |  any |



### <a name='resource-filter-Courier'></a>Courier
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| name |  string |
| area |  any |



### <a name='resource-filter-CurrenciesCurrency'></a>CurrenciesCurrency
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| rewards |  any |



### <a name='resource-filter-CurrenciesTransaction'></a>CurrenciesTransaction
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| client |  any |



### <a name='resource-filter-CurrenciesWallet'></a>CurrenciesWallet
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-DeliveryCase'></a>DeliveryCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-DeliveryLocation'></a>DeliveryLocation
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| client |  any |
| search |  any |



### <a name='resource-filter-DeskCase'></a>DeskCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-DietaryTag'></a>DietaryTag
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| tagType |  string |
| name |  string |



### <a name='resource-filter-DiscountCode'></a>DiscountCode
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-DriverDay'></a>DriverDay
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
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
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-DriverResource'></a>DriverResource

None


### <a name='resource-filter-DriverWeek'></a>DriverWeek
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| name |  any |
| monday |  date |
| area |  any |
| driverId |  integer |



### <a name='resource-filter-EmailMessage'></a>EmailMessage
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| messageType |  string |
| recipients |  string |



### <a name='resource-filter-Event'></a>Event
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-FeatureFlagDescription'></a>FeatureFlagDescription
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| flagId |  string |
| isPlanFeature |  boolean |



### <a name='resource-filter-FoodType'></a>FoodType
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| name |  string |



### <a name='resource-filter-GiftbitCard'></a>GiftbitCard
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-GiftbitError'></a>GiftbitError
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| orderId |  integer |



### <a name='resource-filter-GiftbitGift'></a>GiftbitGift
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| currencyisocode |  any |



### <a name='resource-filter-GroupOrderMember'></a>GroupOrderMember
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| email |  string |
| search |  any |



### <a name='resource-filter-HistorianVersion'></a>HistorianVersion
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| itemType |  string |
| whodunnit |  string |
| search |  any |
| stateChanges |  any |
| propertyChanged |  any |
| noFoxee |  any |



### <a name='resource-filter-Invoice'></a>Invoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-InvoicingLedgerItem'></a>InvoicingLedgerItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| parentId |  integer |
| search |  any |
| ledgerType |  any |
| notLedgerType |  any |
| withoutParent |  any |
| sameRecipientAs |  any |



### <a name='resource-filter-InvoicingTaxRate'></a>InvoicingTaxRate
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| global |  any |



### <a name='resource-filter-Location'></a>Location
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| broken |  any |



### <a name='resource-filter-LogisticsArrivalEstimate'></a>LogisticsArrivalEstimate
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-LogisticsDelivery'></a>LogisticsDelivery
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| rejectState |  any |
| deliverOn |  date |
| areas |  any |



### <a name='resource-filter-MealPlan'></a>MealPlan
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| vanityUrl |  string |
| email |  any |



### <a name='resource-filter-MealPlanningEvent'></a>MealPlanningEvent
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| converted |  any |
| upcoming |  any |
| forCurrentUser |  any |



### <a name='resource-filter-MealPlanningInstance'></a>MealPlanningInstance
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| clientId |  integer |
| isRecurring |  boolean |
| afterDate |  any |
| beforeDate |  any |
| areaIds |  any |
| monday |  any |



### <a name='resource-filter-MealPlanningLogRecord'></a>MealPlanningLogRecord
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningPreferenceProfile'></a>MealPlanningPreferenceProfile
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningRequirement'></a>MealPlanningRequirement
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningRequirementConstraint'></a>MealPlanningRequirementConstraint
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningRequirementGroup'></a>MealPlanningRequirementGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningReservation'></a>MealPlanningReservation
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| rejectState |  any |
| areaId |  integer |
| monday |  any |



### <a name='resource-filter-MealPlanningRestaurantConstraint'></a>MealPlanningRestaurantConstraint
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningSchedule'></a>MealPlanningSchedule
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealPlanningTemplate'></a>MealPlanningTemplate
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MealType'></a>MealType
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| name |  string |



### <a name='resource-filter-Menu'></a>Menu
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| active |  boolean |
| draft |  boolean |
| restaurantId |  integer |



### <a name='resource-filter-MenuGroup'></a>MenuGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| active |  boolean |
| internal |  boolean |



### <a name='resource-filter-MenuItem'></a>MenuItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| active |  boolean |



### <a name='resource-filter-MenuOptionGroup'></a>MenuOptionGroup
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-MenuOptionItem'></a>MenuOptionItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-NotificationLog'></a>NotificationLog
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| uniquenessContext |  string |
| receiver |  any |
| orderLogsFor |  any |



### <a name='resource-filter-Order'></a>Order
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| isBookmark |  boolean |
| clientId |  integer |
| restaurantId |  integer |
| state |  string |
| flag |  boolean |
| areaId |  integer |
| isTemplate |  boolean |
| isMealPlanOrder |  boolean |
| rejectState |  any |
| search |  any |
| fromMealPlan |  any |
| managedById |  any |
| managedByMe |  any |
| isDraft |  any |
| rejectOnlineDraft |  any |
| isBeforeSubmitted |  any |
| uuid |  uuid |
| urlSafeId |  string |
| identifier |  any |
| userId |  any |
| deliverOn |  date |
| deliverOnRange |  any |
| deliverAt |  datetime |
| deliverAtAfter |  any |
| deliverAtBefore |  any |
| deliveredAtAfter |  any |
| withDriverOnPayroll |  any |
| areas |  any |
| date |  any |
| upcoming |  any |
| isGroupOrder |  any |
| driverId |  integer |
| restaurantIds |  any |
| mealOrders |  any |
| published |  any |
| orderWeek |  any |
| currentUserHasOrdered |  any |
| affectedOrders |  any |
| ordersWithMenu |  any |
| sameDayAs |  any |
| clientMealPlan |  any |
| clientActualSegment |  any |
| totalGreaterThan |  any |
| hasXeroIssues |  any |



### <a name='resource-filter-OrderItem'></a>OrderItem
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-PaymentAccount'></a>PaymentAccount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-PaymentCard'></a>PaymentCard
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



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
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-PromoCode'></a>PromoCode
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  uuid |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| code |  string |
| removed |  boolean |
| search |  any |
| expired |  any |



### <a name='resource-filter-QualifyingQuestion'></a>QualifyingQuestion
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-ReleaseNote'></a>ReleaseNote
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| active |  boolean |



### <a name='resource-filter-Restaurant'></a>Restaurant
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| slug |  string |
| canGroupOrder |  boolean |
| active |  boolean |
| comingSoon |  boolean |
| internal |  boolean |
| isNewRestaurant |  any |
| canSameDayOrder |  boolean |
| uuid |  uuid |
| area |  any |
| areas |  any |
| areaIds |  any |
| availableAt |  any |
| cuisines |  any |
| dietaryTagOrdering |  any |
| features |  any |
| groupSize |  any |
| name |  string |
| search |  any |
| updatedAfter |  any |
| xeroErrors |  any |
| withReservationsInWeek |  any |



### <a name='resource-filter-RestaurantCapacityTranche'></a>RestaurantCapacityTranche
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| dateRangeWithRestaurant |  any |
| restaurantId |  integer |



### <a name='resource-filter-RestaurantClosure'></a>RestaurantClosure
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| month |  any |



### <a name='resource-filter-RestaurantDiscount'></a>RestaurantDiscount
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-RestaurantOrderInvoice'></a>RestaurantOrderInvoice
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-RestaurantRanking'></a>RestaurantRanking
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-RestaurantVote'></a>RestaurantVote
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| order |  any |
| email |  string |



### <a name='resource-filter-Role'></a>Role
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| resource |  any |



### <a name='resource-filter-SalesforceCase'></a>SalesforceCase
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| orderId |  any |
| origin |  string |



### <a name='resource-filter-SalesforceSyncError'></a>SalesforceSyncError
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| recordType |  string |
| recordId |  integer |



### <a name='resource-filter-ServiceTime'></a>ServiceTime
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |



### <a name='resource-filter-SubscriptionPlan'></a>SubscriptionPlan
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| isCustom |  boolean |
| search |  any |



### <a name='resource-filter-Tag'></a>Tag
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| tagType |  string |
| name |  string |



### <a name='resource-filter-Team'></a>Team
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| search |  any |
| name |  string |



### <a name='resource-filter-User'></a>User
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| active |  boolean |
| name |  any |
| search |  any |
| email |  string |
| driverMissingMonday |  any |
| courierArea |  any |
| fromCouriers |  any |
| isDriver |  any |
| teamId |  any |
| excludeTeamId |  any |
| resetPasswordToken |  string |
| invitationToken |  string |
| hasRole |  any |



### <a name='resource-filter-UserFeedback'></a>UserFeedback
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  integer |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |
| createdAfter |  any |



### <a name='resource-filter-UserInvite'></a>UserInvite
#### Available Filters
| Name | Type |
| ------------- |:-------------:|
| id |  any |
| createdAtBefore |  any |
| createdAtAfter |  any |
| updatedAtBefore |  any |
| updatedAtAfter |  any |




