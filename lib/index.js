'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _daos = require('./data-access/daos');

var _clientBase = require('./client-base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @module master-fox **/
/** @class MFClient **/
var MFClient = function (_JRClient) {
  _inherits(MFClient, _JRClient);

  function MFClient(baseUrl, token) {
    _classCallCheck(this, MFClient);

    /** @type {AppConfigurationDao} **/
    var _this = _possibleConstructorReturn(this, (MFClient.__proto__ || Object.getPrototypeOf(MFClient)).call(this, baseUrl, token));

    _this.appConfigurations = new _daos.AppConfigurationDao(_this);

    /** @type {AreaDao} **/
    _this.areas = new _daos.AreaDao(_this);

    /** @type {AreaClosureDao} **/
    _this.areaClosures = new _daos.AreaClosureDao(_this);

    /** @type {ClientDao} **/
    _this.clients = new _daos.ClientDao(_this);

    /** @type {ClientDiscountDao} **/
    _this.clientDiscounts = new _daos.ClientDiscountDao(_this);

    /** @type {ClientOrderInvoiceDao} **/
    _this.clientOrderInvoices = new _daos.ClientOrderInvoiceDao(_this);

    /** @type {ClientSignupDao} **/
    _this.clientSignups = new _daos.ClientSignupDao(_this);

    /** @type {CommunicationPreferenceDao} **/
    _this.communicationPreferences = new _daos.CommunicationPreferenceDao(_this);

    /** @type {CompanyDao} **/
    _this.companies = new _daos.CompanyDao(_this);

    /** @type {ContactDao} **/
    _this.contacts = new _daos.ContactDao(_this);

    /** @type {CourierDao} **/
    _this.couriers = new _daos.CourierDao(_this);

    /** @type {DeliveryCaseDao} **/
    _this.deliveryCases = new _daos.DeliveryCaseDao(_this);

    /** @type {DeliveryLocationDao} **/
    _this.deliveryLocations = new _daos.DeliveryLocationDao(_this);

    /** @type {DeskCaseDao} **/
    _this.deskCases = new _daos.DeskCaseDao(_this);

    /** @type {DietaryTagDao} **/
    _this.dietaryTags = new _daos.DietaryTagDao(_this);

    /** @type {DiscountCodeDao} **/
    _this.discountCodes = new _daos.DiscountCodeDao(_this);

    /** @type {DriverDayDao} **/
    _this.driverDays = new _daos.DriverDayDao(_this);

    /** @type {DriverPaymentDao} **/
    _this.driverPayments = new _daos.DriverPaymentDao(_this);

    /** @type {DriverPayrollRunDao} **/
    _this.driverPayrollRuns = new _daos.DriverPayrollRunDao(_this);

    /** @type {DriverPingDao} **/
    _this.driverPings = new _daos.DriverPingDao(_this);

    /** @type {DriverResourceDao} **/
    _this.driverResources = new _daos.DriverResourceDao(_this);

    /** @type {DriverWeekDao} **/
    _this.driverWeeks = new _daos.DriverWeekDao(_this);

    /** @type {EmailMessageDao} **/
    _this.emailMessages = new _daos.EmailMessageDao(_this);

    /** @type {EventDao} **/
    _this.events = new _daos.EventDao(_this);

    /** @type {GiftbitCardDao} **/
    _this.giftbitCards = new _daos.GiftbitCardDao(_this);

    /** @type {GiftbitErrorDao} **/
    _this.giftbitErrors = new _daos.GiftbitErrorDao(_this);

    /** @type {GiftbitGiftDao} **/
    _this.giftbitGifts = new _daos.GiftbitGiftDao(_this);

    /** @type {GroupOrderMemberDao} **/
    _this.groupOrderMembers = new _daos.GroupOrderMemberDao(_this);

    /** @type {InvoiceDao} **/
    _this.invoices = new _daos.InvoiceDao(_this);

    /** @type {InvoicingTaxRateDao} **/
    _this.invoicingTaxRates = new _daos.InvoicingTaxRateDao(_this);

    /** @type {LocationDao} **/
    _this.locations = new _daos.LocationDao(_this);

    /** @type {MealPlanDao} **/
    _this.mealPlans = new _daos.MealPlanDao(_this);

    /** @type {MenuDao} **/
    _this.menus = new _daos.MenuDao(_this);

    /** @type {MenuGroupDao} **/
    _this.menuGroups = new _daos.MenuGroupDao(_this);

    /** @type {MenuItemDao} **/
    _this.menuItems = new _daos.MenuItemDao(_this);

    /** @type {MenuOptionGroupDao} **/
    _this.menuOptionGroups = new _daos.MenuOptionGroupDao(_this);

    /** @type {MenuOptionItemDao} **/
    _this.menuOptionItems = new _daos.MenuOptionItemDao(_this);

    /** @type {OrderDao} **/
    _this.orders = new _daos.OrderDao(_this);

    /** @type {OrderItemDao} **/
    _this.orderItems = new _daos.OrderItemDao(_this);

    /** @type {PaymentAccountDao} **/
    _this.paymentAccounts = new _daos.PaymentAccountDao(_this);

    /** @type {PaymentCardDao} **/
    _this.paymentCards = new _daos.PaymentCardDao(_this);

    /** @type {PayrollRunDao} **/
    _this.payrollRuns = new _daos.PayrollRunDao(_this);

    /** @type {PickupLocationDao} **/
    _this.pickupLocations = new _daos.PickupLocationDao(_this);

    /** @type {PromoCodeDao} **/
    _this.promoCodes = new _daos.PromoCodeDao(_this);

    /** @type {QualifyingQuestionDao} **/
    _this.qualifyingQuestions = new _daos.QualifyingQuestionDao(_this);

    /** @type {RestaurantDao} **/
    _this.restaurants = new _daos.RestaurantDao(_this);

    /** @type {RestaurantClosureDao} **/
    _this.restaurantClosures = new _daos.RestaurantClosureDao(_this);

    /** @type {RestaurantDiscountDao} **/
    _this.restaurantDiscounts = new _daos.RestaurantDiscountDao(_this);

    /** @type {RestaurantOrderInvoiceDao} **/
    _this.restaurantOrderInvoices = new _daos.RestaurantOrderInvoiceDao(_this);

    /** @type {RoleDao} **/
    _this.roles = new _daos.RoleDao(_this);

    /** @type {SalesforceSyncErrorDao} **/
    _this.salesforceSyncErrors = new _daos.SalesforceSyncErrorDao(_this);

    /** @type {ServiceTimeDao} **/
    _this.serviceTimes = new _daos.ServiceTimeDao(_this);

    /** @type {TagDao} **/
    _this.tags = new _daos.TagDao(_this);

    /** @type {UserDao} **/
    _this.users = new _daos.UserDao(_this);

    /** @type {UserFeedbackDao} **/
    _this.userFeedbacks = new _daos.UserFeedbackDao(_this);

    /** @type {UserInviteDao} **/
    _this.userInvites = new _daos.UserInviteDao(_this);

    /** @type {VersionDao} **/
    _this.versions = new _daos.VersionDao(_this);

    return _this;
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


  _createClass(MFClient, null, [{
    key: 'login',
    value: function login(rootUrl, email, password) {
      var url = rootUrl + 'api/v3/users/sign_in';
      console.log('Logging in to ' + url);
      return this.fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: { email: email, password: password } })
      }).then(function (response) {
        return response.json();
      }).then(function (value) {
        return new MFClient(rootUrl, value.token);
      });
    }
  }]);

  return MFClient;
}(_clientBase.JRClient);

exports.default = MFClient;