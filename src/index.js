import {
    AccountingConsolidationConfigurationDao,
    AccountingConsolidationRunDao,
    AccountingLedgerItemDao,
    AccountingLineItemDao,
    AppConfigurationDao,
    AreaDao,
    AreaClosureDao,
    ClientDao,
    ClientDiscountDao,
    ClientOrderInvoiceDao,
    ClientSignupDao,
    CommunicationPreferenceDao,
    CompanyDao,
    ContactDao,
    CourierDao,
    CurrenciesCurrencyDao,
    CurrenciesTransactionDao,
    CurrenciesWalletDao,
    DeliveryCaseDao,
    DeliveryLocationDao,
    DeskCaseDao,
    DietaryTagDao,
    DiscountCodeDao,
    DriverDayDao,
    DriverPaymentDao,
    DriverPayrollRunDao,
    DriverPingDao,
    DriverResourceDao,
    DriverWeekDao,
    EmailMessageDao,
    EventDao,
    FeatureFlagDescriptionDao,
    FoodTypeDao,
    GiftbitCardDao,
    GiftbitErrorDao,
    GiftbitGiftDao,
    GroupOrderMemberDao,
    HistorianVersionDao,
    InvoiceDao,
    InvoicingLedgerItemDao,
    InvoicingTaxRateDao,
    LocationDao,
    LogisticsArrivalEstimateDao,
    LogisticsDeliveryDao,
    MealPlanDao,
    MealPlanningEventDao,
    MealPlanningInstanceDao,
    MealPlanningLogRecordDao,
    MealPlanningPreferenceProfileDao,
    MealPlanningRequirementDao,
    MealPlanningRequirementConstraintDao,
    MealPlanningRequirementGroupDao,
    MealPlanningReservationDao,
    MealPlanningRestaurantConstraintDao,
    MealPlanningScheduleDao,
    MealPlanningTemplateDao,
    MealTypeDao,
    MenuDao,
    MenuGroupDao,
    MenuItemDao,
    MenuOptionGroupDao,
    MenuOptionItemDao,
    NotificationLogDao,
    OrderDao,
    OrderItemDao,
    PaymentAccountDao,
    PaymentCardDao,
    PayrollRunDao,
    PickupLocationDao,
    PromoCodeDao,
    QualifyingQuestionDao,
    ReleaseNoteDao,
    RestaurantDao,
    RestaurantCapacityTrancheDao,
    RestaurantClosureDao,
    RestaurantDiscountDao,
    RestaurantOrderInvoiceDao,
    RestaurantRankingDao,
    RestaurantVoteDao,
    RoleDao,
    SalesforceCaseDao,
    SalesforceSyncErrorDao,
    ServiceTimeDao,
    SubscriptionPlanDao,
    TagDao,
    TeamDao,
    UserDao,
    UserFeedbackDao,
    UserInviteDao,
} from './data-access/daos';
import { JRClient, ResourceDao } from './client-base';
import fetch from 'cross-fetch';

/** @module master-fox **/
/** @class MFClient **/
class MFClient extends JRClient {

  constructor(baseUrl, token, userId = null, email = null) {
    super(baseUrl, token);

    /** @type {number} **/
    this.userId = userId;

    /** @type {string} **/
    this.email = email;
  
    /** @type {AccountingConsolidationConfigurationDao} **/
    this.accountingConsolidationConfigurations = new AccountingConsolidationConfigurationDao(this);
  
    /** @type {AccountingConsolidationRunDao} **/
    this.accountingConsolidationRuns = new AccountingConsolidationRunDao(this);
  
    /** @type {AccountingLedgerItemDao} **/
    this.accountingLedgerItems = new AccountingLedgerItemDao(this);
  
    /** @type {AccountingLineItemDao} **/
    this.accountingLineItems = new AccountingLineItemDao(this);
  
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
  
    /** @type {CommunicationPreferenceDao} **/
    this.communicationPreferences = new CommunicationPreferenceDao(this);
  
    /** @type {CompanyDao} **/
    this.companies = new CompanyDao(this);
  
    /** @type {ContactDao} **/
    this.contacts = new ContactDao(this);
  
    /** @type {CourierDao} **/
    this.couriers = new CourierDao(this);
  
    /** @type {CurrenciesCurrencyDao} **/
    this.currenciesCurrencies = new CurrenciesCurrencyDao(this);
  
    /** @type {CurrenciesTransactionDao} **/
    this.currenciesTransactions = new CurrenciesTransactionDao(this);
  
    /** @type {CurrenciesWalletDao} **/
    this.currenciesWallets = new CurrenciesWalletDao(this);
  
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
  
    /** @type {DriverPaymentDao} **/
    this.driverPayments = new DriverPaymentDao(this);
  
    /** @type {DriverPayrollRunDao} **/
    this.driverPayrollRuns = new DriverPayrollRunDao(this);
  
    /** @type {DriverPingDao} **/
    this.driverPings = new DriverPingDao(this);
  
    /** @type {DriverResourceDao} **/
    this.driverResources = new DriverResourceDao(this);
  
    /** @type {DriverWeekDao} **/
    this.driverWeeks = new DriverWeekDao(this);
  
    /** @type {EmailMessageDao} **/
    this.emailMessages = new EmailMessageDao(this);
  
    /** @type {EventDao} **/
    this.events = new EventDao(this);
  
    /** @type {FeatureFlagDescriptionDao} **/
    this.featureFlagDescriptions = new FeatureFlagDescriptionDao(this);
  
    /** @type {FoodTypeDao} **/
    this.foodTypes = new FoodTypeDao(this);
  
    /** @type {GiftbitCardDao} **/
    this.giftbitCards = new GiftbitCardDao(this);
  
    /** @type {GiftbitErrorDao} **/
    this.giftbitErrors = new GiftbitErrorDao(this);
  
    /** @type {GiftbitGiftDao} **/
    this.giftbitGifts = new GiftbitGiftDao(this);
  
    /** @type {GroupOrderMemberDao} **/
    this.groupOrderMembers = new GroupOrderMemberDao(this);
  
    /** @type {HistorianVersionDao} **/
    this.historianVersions = new HistorianVersionDao(this);
  
    /** @type {InvoiceDao} **/
    this.invoices = new InvoiceDao(this);
  
    /** @type {InvoicingLedgerItemDao} **/
    this.invoicingLedgerItems = new InvoicingLedgerItemDao(this);
  
    /** @type {InvoicingTaxRateDao} **/
    this.invoicingTaxRates = new InvoicingTaxRateDao(this);
  
    /** @type {LocationDao} **/
    this.locations = new LocationDao(this);
  
    /** @type {LogisticsArrivalEstimateDao} **/
    this.logisticsArrivalEstimates = new LogisticsArrivalEstimateDao(this);
  
    /** @type {LogisticsDeliveryDao} **/
    this.logisticsDeliveries = new LogisticsDeliveryDao(this);
  
    /** @type {MealPlanDao} **/
    this.mealPlans = new MealPlanDao(this);
  
    /** @type {MealPlanningEventDao} **/
    this.mealPlanningEvents = new MealPlanningEventDao(this);
  
    /** @type {MealPlanningInstanceDao} **/
    this.mealPlanningInstances = new MealPlanningInstanceDao(this);
  
    /** @type {MealPlanningLogRecordDao} **/
    this.mealPlanningLogRecords = new MealPlanningLogRecordDao(this);
  
    /** @type {MealPlanningPreferenceProfileDao} **/
    this.mealPlanningPreferenceProfiles = new MealPlanningPreferenceProfileDao(this);
  
    /** @type {MealPlanningRequirementDao} **/
    this.mealPlanningRequirements = new MealPlanningRequirementDao(this);
  
    /** @type {MealPlanningRequirementConstraintDao} **/
    this.mealPlanningRequirementConstraints = new MealPlanningRequirementConstraintDao(this);
  
    /** @type {MealPlanningRequirementGroupDao} **/
    this.mealPlanningRequirementGroups = new MealPlanningRequirementGroupDao(this);
  
    /** @type {MealPlanningReservationDao} **/
    this.mealPlanningReservations = new MealPlanningReservationDao(this);
  
    /** @type {MealPlanningRestaurantConstraintDao} **/
    this.mealPlanningRestaurantConstraints = new MealPlanningRestaurantConstraintDao(this);
  
    /** @type {MealPlanningScheduleDao} **/
    this.mealPlanningSchedules = new MealPlanningScheduleDao(this);
  
    /** @type {MealPlanningTemplateDao} **/
    this.mealPlanningTemplates = new MealPlanningTemplateDao(this);
  
    /** @type {MealTypeDao} **/
    this.mealTypes = new MealTypeDao(this);
  
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
  
    /** @type {NotificationLogDao} **/
    this.notificationLogs = new NotificationLogDao(this);
  
    /** @type {OrderDao} **/
    this.orders = new OrderDao(this);
  
    /** @type {OrderItemDao} **/
    this.orderItems = new OrderItemDao(this);
  
    /** @type {PaymentAccountDao} **/
    this.paymentAccounts = new PaymentAccountDao(this);
  
    /** @type {PaymentCardDao} **/
    this.paymentCards = new PaymentCardDao(this);
  
    /** @type {PayrollRunDao} **/
    this.payrollRuns = new PayrollRunDao(this);
  
    /** @type {PickupLocationDao} **/
    this.pickupLocations = new PickupLocationDao(this);
  
    /** @type {PromoCodeDao} **/
    this.promoCodes = new PromoCodeDao(this);
  
    /** @type {QualifyingQuestionDao} **/
    this.qualifyingQuestions = new QualifyingQuestionDao(this);
  
    /** @type {ReleaseNoteDao} **/
    this.releaseNotes = new ReleaseNoteDao(this);
  
    /** @type {RestaurantDao} **/
    this.restaurants = new RestaurantDao(this);
  
    /** @type {RestaurantCapacityTrancheDao} **/
    this.restaurantCapacityTranches = new RestaurantCapacityTrancheDao(this);
  
    /** @type {RestaurantClosureDao} **/
    this.restaurantClosures = new RestaurantClosureDao(this);
  
    /** @type {RestaurantDiscountDao} **/
    this.restaurantDiscounts = new RestaurantDiscountDao(this);
  
    /** @type {RestaurantOrderInvoiceDao} **/
    this.restaurantOrderInvoices = new RestaurantOrderInvoiceDao(this);
  
    /** @type {RestaurantRankingDao} **/
    this.restaurantRankings = new RestaurantRankingDao(this);
  
    /** @type {RestaurantVoteDao} **/
    this.restaurantVotes = new RestaurantVoteDao(this);
  
    /** @type {RoleDao} **/
    this.roles = new RoleDao(this);
  
    /** @type {SalesforceCaseDao} **/
    this.salesforceCases = new SalesforceCaseDao(this);
  
    /** @type {SalesforceSyncErrorDao} **/
    this.salesforceSyncErrors = new SalesforceSyncErrorDao(this);
  
    /** @type {ServiceTimeDao} **/
    this.serviceTimes = new ServiceTimeDao(this);
  
    /** @type {SubscriptionPlanDao} **/
    this.subscriptionPlans = new SubscriptionPlanDao(this);
  
    /** @type {TagDao} **/
    this.tags = new TagDao(this);
  
    /** @type {TeamDao} **/
    this.teams = new TeamDao(this);
  
    /** @type {UserDao} **/
    this.users = new UserDao(this);
  
    /** @type {UserFeedbackDao} **/
    this.userFeedbacks = new UserFeedbackDao(this);
  
    /** @type {UserInviteDao} **/
    this.userInvites = new UserInviteDao(this);
  
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
    return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: {email, password}})
      })
      .then((response) => response.json())
      .then((value) => {
        if (value.token) {
          return new MFClient(rootUrl, value.token, value.user_id, value.email)
        } else {
          throw 'Could not login';
        }
      });
  }

  static fromJSONAPI(request) {
    return ResourceDao.fromJSONAPI(request);
  }


}

export default MFClient;
