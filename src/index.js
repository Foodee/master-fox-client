import {
    AppConfigurationDao,
    AreaDao,
    AreaClosureDao,
    ClientDao,
    ClientDiscountDao,
    ClientOrderInvoiceDao,
    ClientSignupDao,
    CompanyDao,
    ContactDao,
    CourierDao,
    DeliveryCaseDao,
    DeliveryLocationDao,
    DeskCaseDao,
    DietaryTagDao,
    DiscountCodeDao,
    DriverDayDao,
    DriverPingDao,
    DriverWeekDao,
    EmailMessageDao,
    GiftbitCardDao,
    GiftbitErrorDao,
    GiftbitGiftDao,
    GroupOrderMemberDao,
    InvoiceDao,
    InvoicingTaxRateDao,
    LocationDao,
    MealPlanDao,
    MenuDao,
    MenuGroupDao,
    MenuItemDao,
    MenuOptionGroupDao,
    MenuOptionItemDao,
    OrderDao,
    OrderItemDao,
    PaymentCardDao,
    PickupLocationDao,
    PromoCodeDao,
    QualifyingQuestionDao,
    RestaurantDao,
    RestaurantClosureDao,
    RestaurantDiscountDao,
    RestaurantOrderInvoiceDao,
    RoleDao,
    SalesforceSyncErrorDao,
    ServiceTimeDao,
    TagDao,
    UserDao,
    UserFeedbackDao,
    UserInviteDao,
    VersionDao,
} from './data-access/daos';
import {JRClient} from './client-base';

/** @module master-fox **/
/** @class MFClient **/
class MFClient extends JRClient {

  constructor(baseUrl, token) {
    super(baseUrl, token);
  
    /** @type {AppConfigurationDao} **/
    this.appConfigurations = new AppConfigurationDao(this);
  
    /** @type {AreaDao} **/
    this.areas = new AreaDao(this);
  
    /** @type {AreaClosureDao} **/
    this.areaClosures = new AreaClosureDao(this);
  
    /** @type {ClientDao} **/
    this.clients = new ClientDao(this);
  
    /** @type {ClientDiscountDao} **/
    this.clientDiscounts = new ClientDiscountDao(this);
  
    /** @type {ClientOrderInvoiceDao} **/
    this.clientOrderInvoices = new ClientOrderInvoiceDao(this);
  
    /** @type {ClientSignupDao} **/
    this.clientSignups = new ClientSignupDao(this);
  
    /** @type {CompanyDao} **/
    this.companies = new CompanyDao(this);
  
    /** @type {ContactDao} **/
    this.contacts = new ContactDao(this);
  
    /** @type {CourierDao} **/
    this.couriers = new CourierDao(this);
  
    /** @type {DeliveryCaseDao} **/
    this.deliveryCases = new DeliveryCaseDao(this);
  
    /** @type {DeliveryLocationDao} **/
    this.deliveryLocations = new DeliveryLocationDao(this);
  
    /** @type {DeskCaseDao} **/
    this.deskCases = new DeskCaseDao(this);
  
    /** @type {DietaryTagDao} **/
    this.dietaryTags = new DietaryTagDao(this);
  
    /** @type {DiscountCodeDao} **/
    this.discountCodes = new DiscountCodeDao(this);
  
    /** @type {DriverDayDao} **/
    this.driverDays = new DriverDayDao(this);
  
    /** @type {DriverPingDao} **/
    this.driverPings = new DriverPingDao(this);
  
    /** @type {DriverWeekDao} **/
    this.driverWeeks = new DriverWeekDao(this);
  
    /** @type {EmailMessageDao} **/
    this.emailMessages = new EmailMessageDao(this);
  
    /** @type {GiftbitCardDao} **/
    this.giftbitCards = new GiftbitCardDao(this);
  
    /** @type {GiftbitErrorDao} **/
    this.giftbitErrors = new GiftbitErrorDao(this);
  
    /** @type {GiftbitGiftDao} **/
    this.giftbitGifts = new GiftbitGiftDao(this);
  
    /** @type {GroupOrderMemberDao} **/
    this.groupOrderMembers = new GroupOrderMemberDao(this);
  
    /** @type {InvoiceDao} **/
    this.invoices = new InvoiceDao(this);
  
    /** @type {InvoicingTaxRateDao} **/
    this.invoicingTaxRates = new InvoicingTaxRateDao(this);
  
    /** @type {LocationDao} **/
    this.locations = new LocationDao(this);
  
    /** @type {MealPlanDao} **/
    this.mealPlans = new MealPlanDao(this);
  
    /** @type {MenuDao} **/
    this.menus = new MenuDao(this);
  
    /** @type {MenuGroupDao} **/
    this.menuGroups = new MenuGroupDao(this);
  
    /** @type {MenuItemDao} **/
    this.menuItems = new MenuItemDao(this);
  
    /** @type {MenuOptionGroupDao} **/
    this.menuOptionGroups = new MenuOptionGroupDao(this);
  
    /** @type {MenuOptionItemDao} **/
    this.menuOptionItems = new MenuOptionItemDao(this);
  
    /** @type {OrderDao} **/
    this.orders = new OrderDao(this);
  
    /** @type {OrderItemDao} **/
    this.orderItems = new OrderItemDao(this);
  
    /** @type {PaymentCardDao} **/
    this.paymentCards = new PaymentCardDao(this);
  
    /** @type {PickupLocationDao} **/
    this.pickupLocations = new PickupLocationDao(this);
  
    /** @type {PromoCodeDao} **/
    this.promoCodes = new PromoCodeDao(this);
  
    /** @type {QualifyingQuestionDao} **/
    this.qualifyingQuestions = new QualifyingQuestionDao(this);
  
    /** @type {RestaurantDao} **/
    this.restaurants = new RestaurantDao(this);
  
    /** @type {RestaurantClosureDao} **/
    this.restaurantClosures = new RestaurantClosureDao(this);
  
    /** @type {RestaurantDiscountDao} **/
    this.restaurantDiscounts = new RestaurantDiscountDao(this);
  
    /** @type {RestaurantOrderInvoiceDao} **/
    this.restaurantOrderInvoices = new RestaurantOrderInvoiceDao(this);
  
    /** @type {RoleDao} **/
    this.roles = new RoleDao(this);
  
    /** @type {SalesforceSyncErrorDao} **/
    this.salesforceSyncErrors = new SalesforceSyncErrorDao(this);
  
    /** @type {ServiceTimeDao} **/
    this.serviceTimes = new ServiceTimeDao(this);
  
    /** @type {TagDao} **/
    this.tags = new TagDao(this);
  
    /** @type {UserDao} **/
    this.users = new UserDao(this);
  
    /** @type {UserFeedbackDao} **/
    this.userFeedbacks = new UserFeedbackDao(this);
  
    /** @type {UserInviteDao} **/
    this.userInvites = new UserInviteDao(this);
  
    /** @type {VersionDao} **/
    this.versions = new VersionDao(this);
  
  }

  /**
   * Returns a client logged in with the provided credientials.
   *
   * NOTE: You should **never** store the client's credentials, this is useful for environments
   * where we might need to login - Think Chrome Extension or FleetFox
   *
   * @param {String} rootUrl
   * @param {String} email
   * @param {String} password
   * @returns {Promise.<MFClient>}
   */
  static login(rootUrl, email, password) {
    let url = `${rootUrl}api/v3/users/sign_in`;
    console.log(`Logging in to ${url}`);
    return this.fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: {email, password}})
      })
      .then((response) => response.json())
  .then((value) => new MFClient(rootUrl, value.token))
  .catch(reason => console.err(reason))
  }
}

export default MFClient;
