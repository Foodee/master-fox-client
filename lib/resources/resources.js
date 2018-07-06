'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.UserInvite = exports.UserFeedback = exports.User = exports.Team = exports.Tag = exports.ServiceTime = exports.SalesforceSyncError = exports.Role = exports.RestaurantVote = exports.RestaurantOrderInvoice = exports.RestaurantDiscount = exports.RestaurantClosure = exports.RestaurantCapacityTranche = exports.Restaurant = exports.QualifyingQuestion = exports.PromoCode = exports.PickupLocation = exports.PayrollRun = exports.PaymentCard = exports.PaymentAccount = exports.OrderItem = exports.Order = exports.MenuOptionItem = exports.MenuOptionGroup = exports.MenuItem = exports.MenuGroup = exports.Menu = exports.MealPlan = exports.Location = exports.InvoicingTaxRate = exports.Invoice = exports.GroupOrderMember = exports.GiftbitGift = exports.GiftbitError = exports.GiftbitCard = exports.Event = exports.EmailMessage = exports.DriverWeek = exports.DriverResource = exports.DriverPing = exports.DriverPayrollRun = exports.DriverPayment = exports.DriverDay = exports.DiscountCode = exports.DietaryTag = exports.DeskCase = exports.DeliveryLocation = exports.DeliveryCase = exports.Courier = exports.Contact = exports.Company = exports.CommunicationPreference = exports.ClientSignup = exports.ClientOrderInvoice = exports.ClientDiscount = exports.Client = exports.AreaClosure = exports.Area = exports.AppConfiguration = undefined;

var _ResourceClasses;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @class AppConfiguration
  * @extends {Resource}
  **/
var AppConfiguration = exports.AppConfiguration = function (_Resource) {
  _inherits(AppConfiguration, _Resource);

  function AppConfiguration() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AppConfiguration);

    return _possibleConstructorReturn(this, (AppConfiguration.__proto__ || Object.getPrototypeOf(AppConfiguration)).call(this, id, 'app-configurations', attributes, one, many));
  }

  // attributes

  /** @param {string} key **/


  _createClass(AppConfiguration, [{
    key: 'key',
    set: function set(key) {
      this._attributes['key'] = key;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['key'];
    }
  }, {
    key: 'preferences',


    /** @param {string} preferences **/
    set: function set(preferences) {
      this._attributes['preferences'] = preferences;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['preferences'];
    }
  }, {
    key: 'versions',


    // relationships


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return AppConfiguration;
}(_resource2.default);

/** @class Area
  * @extends {Resource}
  **/


var Area = exports.Area = function (_Resource2) {
  _inherits(Area, _Resource2);

  function Area() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, id, 'areas', attributes, one, many));
  }

  // attributes

  /** @param {boolean} active **/


  _createClass(Area, [{
    key: 'active',
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'title',


    /** @param {boolean} title **/
    set: function set(title) {
      this._attributes['title'] = title;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['title'];
    }
  }, {
    key: 'country',


    /** @param {boolean} country **/
    set: function set(country) {
      this._attributes['country'] = country;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['country'];
    }
  }, {
    key: 'province',


    /** @param {boolean} province **/
    set: function set(province) {
      this._attributes['province'] = province;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['province'];
    }
  }, {
    key: 'city',


    /** @param {boolean} city **/
    set: function set(city) {
      this._attributes['city'] = city;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['city'];
    }
  }, {
    key: 'district',


    /** @param {boolean} district **/
    set: function set(district) {
      this._attributes['district'] = district;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['district'];
    }
  }, {
    key: 'slug',


    /** @param {boolean} slug **/
    set: function set(slug) {
      this._attributes['slug'] = slug;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['slug'];
    }
  }, {
    key: 'isoTimeZone',


    /** @param {boolean} isoTimeZone **/
    set: function set(isoTimeZone) {
      this._attributes['iso-time-zone'] = isoTimeZone;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['iso-time-zone'];
    }
  }, {
    key: 'deliveryLeadTime',


    /** @param {boolean} deliveryLeadTime **/
    set: function set(deliveryLeadTime) {
      this._attributes['delivery-lead-time'] = deliveryLeadTime;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['delivery-lead-time'];
    }
  }, {
    key: 'currency',


    /** @param {boolean} currency **/
    set: function set(currency) {
      this._attributes['currency'] = currency;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['currency'];
    }
  }, {
    key: 'deliveryFee',


    /** @param {boolean} deliveryFee **/
    set: function set(deliveryFee) {
      this._attributes['delivery-fee'] = deliveryFee;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['delivery-fee'];
    }
  }, {
    key: 'deliveryZone',


    /** @param {boolean} deliveryZone **/
    set: function set(deliveryZone) {
      this._attributes['delivery-zone'] = deliveryZone;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['delivery-zone'];
    }
  }, {
    key: 'createdAt',


    /** @param {boolean} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'prefix',


    /** @param {boolean} prefix **/
    set: function set(prefix) {
      this._attributes['prefix'] = prefix;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['prefix'];
    }
  }, {
    key: 'coverImageUrl',


    /** @param {boolean} coverImageUrl **/
    set: function set(coverImageUrl) {
      this._attributes['cover-image-url'] = coverImageUrl;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['cover-image-url'];
    }
  }, {
    key: 'deliveryFeeTaxRate',


    // relationships


    /** @param {InvoicingTaxRate} deliveryFeeTaxRate **/
    set: function set(deliveryFeeTaxRate) {
      this._one['delivery-fee-tax-rate'] = deliveryFeeTaxRate;
    },

    /** @type {InvoicingTaxRate} */
    get: function get() {
      return this._one['delivery-fee-tax-rate'];
    }
  }, {
    key: 'couriers',


    /** @param {Courier[]} couriers **/
    set: function set(couriers) {
      this._many['couriers'] = couriers;
    },

    /** @type {Courier[]} */
    get: function get() {
      return this._many['couriers'];
    }
  }, {
    key: 'clients',


    /** @param {Client[]} clients **/
    set: function set(clients) {
      this._many['clients'] = clients;
    },

    /** @type {Client[]} */
    get: function get() {
      return this._many['clients'];
    }
  }, {
    key: 'restaurants',


    /** @param {Restaurant[]} restaurants **/
    set: function set(restaurants) {
      this._many['restaurants'] = restaurants;
    },

    /** @type {Restaurant[]} */
    get: function get() {
      return this._many['restaurants'];
    }
  }, {
    key: 'invoicingTaxRates',


    /** @param {InvoicingTaxRate[]} invoicingTaxRates **/
    set: function set(invoicingTaxRates) {
      this._many['invoicing-tax-rates'] = invoicingTaxRates;
    },

    /** @type {InvoicingTaxRate[]} */
    get: function get() {
      return this._many['invoicing-tax-rates'];
    }
  }, {
    key: 'globalInvoicingTaxRates',


    /** @param {InvoicingTaxRate[]} globalInvoicingTaxRates **/
    set: function set(globalInvoicingTaxRates) {
      this._many['global-invoicing-tax-rates'] = globalInvoicingTaxRates;
    },

    /** @type {InvoicingTaxRate[]} */
    get: function get() {
      return this._many['global-invoicing-tax-rates'];
    }
  }, {
    key: 'areaClosures',


    /** @param {AreaClosure[]} areaClosures **/
    set: function set(areaClosures) {
      this._many['area-closures'] = areaClosures;
    },

    /** @type {AreaClosure[]} */
    get: function get() {
      return this._many['area-closures'];
    }
  }, {
    key: 'currentAreaClosures',


    /** @param {AreaClosure[]} currentAreaClosures **/
    set: function set(currentAreaClosures) {
      this._many['current-area-closures'] = currentAreaClosures;
    },

    /** @type {AreaClosure[]} */
    get: function get() {
      return this._many['current-area-closures'];
    }
  }, {
    key: 'promoCodes',


    /** @param {PromoCode[]} promoCodes **/
    set: function set(promoCodes) {
      this._many['promo-codes'] = promoCodes;
    },

    /** @type {PromoCode[]} */
    get: function get() {
      return this._many['promo-codes'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return Area;
}(_resource2.default);

/** @class AreaClosure
  * @extends {Resource}
  **/


var AreaClosure = exports.AreaClosure = function (_Resource3) {
  _inherits(AreaClosure, _Resource3);

  function AreaClosure() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AreaClosure);

    return _possibleConstructorReturn(this, (AreaClosure.__proto__ || Object.getPrototypeOf(AreaClosure)).call(this, id, 'area-closures', attributes, one, many));
  }

  // attributes

  /** @param {Date} startBlock **/


  _createClass(AreaClosure, [{
    key: 'startBlock',
    set: function set(startBlock) {
      this._attributes['start-block'] = startBlock;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['start-block'];
    }
  }, {
    key: 'endBlock',


    /** @param {Date} endBlock **/
    set: function set(endBlock) {
      this._attributes['end-block'] = endBlock;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['end-block'];
    }
  }, {
    key: 'createdAt',


    /** @param {Date} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {Date} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'area',


    // relationships


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }]);

  return AreaClosure;
}(_resource2.default);

/** @class Client
  * @extends {Resource}
  **/


var Client = exports.Client = function (_Resource4) {
  _inherits(Client, _Resource4);

  function Client() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Client);

    return _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, id, 'clients', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(Client, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'legalName',


    /** @param {string} legalName **/
    set: function set(legalName) {
      this._attributes['legal-name'] = legalName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['legal-name'];
    }
  }, {
    key: 'accountName',


    /** @param {string} accountName **/
    set: function set(accountName) {
      this._attributes['account-name'] = accountName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['account-name'];
    }
  }, {
    key: 'deliveryNotes',


    /** @param {string} deliveryNotes **/
    set: function set(deliveryNotes) {
      this._attributes['delivery-notes'] = deliveryNotes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['delivery-notes'];
    }
  }, {
    key: 'notes',


    /** @param {string} notes **/
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notes'];
    }
  }, {
    key: 'plan',


    /** @param {string} plan **/
    set: function set(plan) {
      this._attributes['plan'] = plan;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['plan'];
    }
  }, {
    key: 'features',


    /** @param {string} features **/
    set: function set(features) {
      this._attributes['features'] = features;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['features'];
    }
  }, {
    key: 'terms',


    /** @param {string} terms **/
    set: function set(terms) {
      this._attributes['terms'] = terms;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['terms'];
    }
  }, {
    key: 'termDays',


    /** @param {string} termDays **/
    set: function set(termDays) {
      this._attributes['term-days'] = termDays;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['term-days'];
    }
  }, {
    key: 'apiToken',


    /** @param {string} apiToken **/
    set: function set(apiToken) {
      this._attributes['api-token'] = apiToken;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['api-token'];
    }
  }, {
    key: 'veryLateScore',


    /** @param {string} veryLateScore **/
    set: function set(veryLateScore) {
      this._attributes['very-late-score'] = veryLateScore;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['very-late-score'];
    }
  }, {
    key: 'actualSegment',


    /** @param {string} actualSegment **/
    set: function set(actualSegment) {
      this._attributes['actual-segment'] = actualSegment;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['actual-segment'];
    }
  }, {
    key: 'salesSupportClient',


    /** @param {string} salesSupportClient **/
    set: function set(salesSupportClient) {
      this._attributes['sales-support-client'] = salesSupportClient;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['sales-support-client'];
    }
  }, {
    key: 'defaultArea',


    // relationships


    /** @param {Area} defaultArea **/
    set: function set(defaultArea) {
      this._one['default-area'] = defaultArea;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['default-area'];
    }
  }, {
    key: 'billingLocation',


    /** @param {Location} billingLocation **/
    set: function set(billingLocation) {
      this._one['billing-location'] = billingLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['billing-location'];
    }
  }, {
    key: 'billingContact',


    /** @param {Contact} billingContact **/
    set: function set(billingContact) {
      this._one['billing-contact'] = billingContact;
    },

    /** @type {Contact} */
    get: function get() {
      return this._one['billing-contact'];
    }
  }, {
    key: 'accountManager',


    /** @param {User} accountManager **/
    set: function set(accountManager) {
      this._one['account-manager'] = accountManager;
    },

    /** @type {User} */
    get: function get() {
      return this._one['account-manager'];
    }
  }, {
    key: 'owner',


    /** @param {User} owner **/
    set: function set(owner) {
      this._one['owner'] = owner;
    },

    /** @type {User} */
    get: function get() {
      return this._one['owner'];
    }
  }, {
    key: 'salesSupport',


    /** @param {User} salesSupport **/
    set: function set(salesSupport) {
      this._one['sales-support'] = salesSupport;
    },

    /** @type {User} */
    get: function get() {
      return this._one['sales-support'];
    }
  }, {
    key: 'company',


    /** @param {Company} company **/
    set: function set(company) {
      this._one['company'] = company;
    },

    /** @type {Company} */
    get: function get() {
      return this._one['company'];
    }
  }, {
    key: 'mealPlan',


    /** @param {MealPlan} mealPlan **/
    set: function set(mealPlan) {
      this._one['meal-plan'] = mealPlan;
    },

    /** @type {MealPlan} */
    get: function get() {
      return this._one['meal-plan'];
    }
  }, {
    key: 'taxRate',


    /** @param {InvoicingTaxRate} taxRate **/
    set: function set(taxRate) {
      this._one['tax-rate'] = taxRate;
    },

    /** @type {InvoicingTaxRate} */
    get: function get() {
      return this._one['tax-rate'];
    }
  }, {
    key: 'giftbitCard',


    /** @param {GiftbitCard} giftbitCard **/
    set: function set(giftbitCard) {
      this._one['giftbit-card'] = giftbitCard;
    },

    /** @type {GiftbitCard} */
    get: function get() {
      return this._one['giftbit-card'];
    }
  }, {
    key: 'areas',


    /** @param {Area[]} areas **/
    set: function set(areas) {
      this._many['areas'] = areas;
    },

    /** @type {Area[]} */
    get: function get() {
      return this._many['areas'];
    }
  }, {
    key: 'deliveryLocations',


    /** @param {DeliveryLocation[]} deliveryLocations **/
    set: function set(deliveryLocations) {
      this._many['delivery-locations'] = deliveryLocations;
    },

    /** @type {DeliveryLocation[]} */
    get: function get() {
      return this._many['delivery-locations'];
    }
  }, {
    key: 'paymentCards',


    /** @param {PaymentCard[]} paymentCards **/
    set: function set(paymentCards) {
      this._many['payment-cards'] = paymentCards;
    },

    /** @type {PaymentCard[]} */
    get: function get() {
      return this._many['payment-cards'];
    }
  }, {
    key: 'adminContacts',


    /** @param {Contact[]} adminContacts **/
    set: function set(adminContacts) {
      this._many['admin-contacts'] = adminContacts;
    },

    /** @type {Contact[]} */
    get: function get() {
      return this._many['admin-contacts'];
    }
  }, {
    key: 'admins',


    /** @param {User[]} admins **/
    set: function set(admins) {
      this._many['admins'] = admins;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['admins'];
    }
  }, {
    key: 'orderContacts',


    /** @param {Contact[]} orderContacts **/
    set: function set(orderContacts) {
      this._many['order-contacts'] = orderContacts;
    },

    /** @type {Contact[]} */
    get: function get() {
      return this._many['order-contacts'];
    }
  }, {
    key: 'orders',


    /** @param {Order[]} orders **/
    set: function set(orders) {
      this._many['orders'] = orders;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['orders'];
    }
  }, {
    key: 'teams',


    /** @param {Team[]} teams **/
    set: function set(teams) {
      this._many['teams'] = teams;
    },

    /** @type {Team[]} */
    get: function get() {
      return this._many['teams'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }, {
    key: 'giftbitGifts',


    /** @param {GiftbitGift[]} giftbitGifts **/
    set: function set(giftbitGifts) {
      this._many['giftbit-gifts'] = giftbitGifts;
    },

    /** @type {GiftbitGift[]} */
    get: function get() {
      return this._many['giftbit-gifts'];
    }
  }, {
    key: 'giftbitErrors',


    /** @param {GiftbitError[]} giftbitErrors **/
    set: function set(giftbitErrors) {
      this._many['giftbit-errors'] = giftbitErrors;
    },

    /** @type {GiftbitError[]} */
    get: function get() {
      return this._many['giftbit-errors'];
    }
  }]);

  return Client;
}(_resource2.default);

/** @class ClientDiscount
  * @extends {Resource}
  **/


var ClientDiscount = exports.ClientDiscount = function (_Resource5) {
  _inherits(ClientDiscount, _Resource5);

  function ClientDiscount() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ClientDiscount);

    return _possibleConstructorReturn(this, (ClientDiscount.__proto__ || Object.getPrototypeOf(ClientDiscount)).call(this, id, 'client-discounts', attributes, one, many));
  }

  // attributes

  /** @param {string} accountingCode **/


  _createClass(ClientDiscount, [{
    key: 'accountingCode',
    set: function set(accountingCode) {
      this._attributes['accounting-code'] = accountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['accounting-code'];
    }
  }, {
    key: 'amount',


    /** @param {string} amount **/
    set: function set(amount) {
      this._attributes['amount'] = amount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['amount'];
    }
  }, {
    key: 'amountType',


    /** @param {string} amountType **/
    set: function set(amountType) {
      this._attributes['amount-type'] = amountType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['amount-type'];
    }
  }, {
    key: 'caseId',


    /** @param {string} caseId **/
    set: function set(caseId) {
      this._attributes['case-id'] = caseId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-id'];
    }
  }, {
    key: 'description',


    /** @param {string} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'order',


    // relationships


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }]);

  return ClientDiscount;
}(_resource2.default);

/** @class ClientOrderInvoice
  * @extends {Resource}
  **/


var ClientOrderInvoice = exports.ClientOrderInvoice = function (_Resource6) {
  _inherits(ClientOrderInvoice, _Resource6);

  function ClientOrderInvoice() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ClientOrderInvoice);

    return _possibleConstructorReturn(this, (ClientOrderInvoice.__proto__ || Object.getPrototypeOf(ClientOrderInvoice)).call(this, id, 'client-order-invoices', attributes, one, many));
  }

  // attributes

  /** @param {any} summary **/


  _createClass(ClientOrderInvoice, [{
    key: 'summary',
    set: function set(summary) {
      this._attributes['summary'] = summary;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['summary'];
    }
  }]);

  return ClientOrderInvoice;
}(_resource2.default);

/** @class ClientSignup
  * @extends {Resource}
  **/
var ClientSignup = exports.ClientSignup = function (_Resource7) {
  _inherits(ClientSignup, _Resource7);

  function ClientSignup() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ClientSignup);

    return _possibleConstructorReturn(this, (ClientSignup.__proto__ || Object.getPrototypeOf(ClientSignup)).call(this, id, 'client-signups', attributes, one, many));
  }

  // attributes

  /** @param {any} companyName **/


  _createClass(ClientSignup, [{
    key: 'companyName',
    set: function set(companyName) {
      this._attributes['company-name'] = companyName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['company-name'];
    }
  }, {
    key: 'password',


    /** @param {any} password **/
    set: function set(password) {
      this._attributes['password'] = password;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['password'];
    }
  }, {
    key: 'passwordConfirmation',


    /** @param {any} passwordConfirmation **/
    set: function set(passwordConfirmation) {
      this._attributes['password-confirmation'] = passwordConfirmation;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['password-confirmation'];
    }
  }, {
    key: 'rawAddress',


    /** @param {any} rawAddress **/
    set: function set(rawAddress) {
      this._attributes['raw-address'] = rawAddress;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['raw-address'];
    }
  }, {
    key: 'unitNumber',


    /** @param {any} unitNumber **/
    set: function set(unitNumber) {
      this._attributes['unit-number'] = unitNumber;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['unit-number'];
    }
  }, {
    key: 'floor',


    /** @param {any} floor **/
    set: function set(floor) {
      this._attributes['floor'] = floor;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['floor'];
    }
  }, {
    key: 'buzzer',


    /** @param {any} buzzer **/
    set: function set(buzzer) {
      this._attributes['buzzer'] = buzzer;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['buzzer'];
    }
  }, {
    key: 'contactPerson',


    /** @param {any} contactPerson **/
    set: function set(contactPerson) {
      this._attributes['contact-person'] = contactPerson;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['contact-person'];
    }
  }, {
    key: 'orderFrequency',


    /** @param {any} orderFrequency **/
    set: function set(orderFrequency) {
      this._attributes['order-frequency'] = orderFrequency;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['order-frequency'];
    }
  }, {
    key: 'orderSize',


    /** @param {any} orderSize **/
    set: function set(orderSize) {
      this._attributes['order-size'] = orderSize;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['order-size'];
    }
  }, {
    key: 'orderBudget',


    /** @param {any} orderBudget **/
    set: function set(orderBudget) {
      this._attributes['order-budget'] = orderBudget;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['order-budget'];
    }
  }, {
    key: 'firstName',


    /** @param {any} firstName **/
    set: function set(firstName) {
      this._attributes['first-name'] = firstName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['first-name'];
    }
  }, {
    key: 'lastName',


    /** @param {any} lastName **/
    set: function set(lastName) {
      this._attributes['last-name'] = lastName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['last-name'];
    }
  }, {
    key: 'email',


    /** @param {any} email **/
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['email'];
    }
  }, {
    key: 'phoneNumber',


    /** @param {any} phoneNumber **/
    set: function set(phoneNumber) {
      this._attributes['phone-number'] = phoneNumber;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['phone-number'];
    }
  }, {
    key: 'extension',


    /** @param {any} extension **/
    set: function set(extension) {
      this._attributes['extension'] = extension;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['extension'];
    }
  }, {
    key: 'smsNumber',


    /** @param {any} smsNumber **/
    set: function set(smsNumber) {
      this._attributes['sms-number'] = smsNumber;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['sms-number'];
    }
  }, {
    key: 'consentToNewTerms',


    /** @param {any} consentToNewTerms **/
    set: function set(consentToNewTerms) {
      this._attributes['consent-to-new-terms'] = consentToNewTerms;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['consent-to-new-terms'];
    }
  }, {
    key: 'receiveNewsletters',


    /** @param {any} receiveNewsletters **/
    set: function set(receiveNewsletters) {
      this._attributes['receive-newsletters'] = receiveNewsletters;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['receive-newsletters'];
    }
  }, {
    key: 'smsEnabled',


    /** @param {any} smsEnabled **/
    set: function set(smsEnabled) {
      this._attributes['sms-enabled'] = smsEnabled;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['sms-enabled'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }, {
    key: 'qualifyingQuestion',


    /** @param {QualifyingQuestion} qualifyingQuestion **/
    set: function set(qualifyingQuestion) {
      this._one['qualifying-question'] = qualifyingQuestion;
    },

    /** @type {QualifyingQuestion} */
    get: function get() {
      return this._one['qualifying-question'];
    }
  }, {
    key: 'billingLocation',


    /** @param {Location} billingLocation **/
    set: function set(billingLocation) {
      this._one['billing-location'] = billingLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['billing-location'];
    }
  }, {
    key: 'deliveryLocation',


    /** @param {Location} deliveryLocation **/
    set: function set(deliveryLocation) {
      this._one['delivery-location'] = deliveryLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['delivery-location'];
    }
  }, {
    key: 'billingContact',


    /** @param {Contact} billingContact **/
    set: function set(billingContact) {
      this._one['billing-contact'] = billingContact;
    },

    /** @type {Contact} */
    get: function get() {
      return this._one['billing-contact'];
    }
  }, {
    key: 'contact',


    /** @param {Contact} contact **/
    set: function set(contact) {
      this._one['contact'] = contact;
    },

    /** @type {Contact} */
    get: function get() {
      return this._one['contact'];
    }
  }, {
    key: 'clients',


    /** @param {Client[]} clients **/
    set: function set(clients) {
      this._many['clients'] = clients;
    },

    /** @type {Client[]} */
    get: function get() {
      return this._many['clients'];
    }
  }, {
    key: 'areas',


    /** @param {Area[]} areas **/
    set: function set(areas) {
      this._many['areas'] = areas;
    },

    /** @type {Area[]} */
    get: function get() {
      return this._many['areas'];
    }
  }]);

  return ClientSignup;
}(_resource2.default);

/** @class CommunicationPreference
  * @extends {Resource}
  **/


var CommunicationPreference = exports.CommunicationPreference = function (_Resource8) {
  _inherits(CommunicationPreference, _Resource8);

  function CommunicationPreference() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, CommunicationPreference);

    return _possibleConstructorReturn(this, (CommunicationPreference.__proto__ || Object.getPrototypeOf(CommunicationPreference)).call(this, id, 'communication-preferences', attributes, one, many));
  }

  // attributes

  /** @param {boolean} sms **/


  _createClass(CommunicationPreference, [{
    key: 'sms',
    set: function set(sms) {
      this._attributes['sms'] = sms;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['sms'];
    }
  }, {
    key: 'emailFeedback',


    /** @param {boolean} emailFeedback **/
    set: function set(emailFeedback) {
      this._attributes['email-feedback'] = emailFeedback;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['email-feedback'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }]);

  return CommunicationPreference;
}(_resource2.default);

/** @class Company
  * @extends {Resource}
  **/


var Company = exports.Company = function (_Resource9) {
  _inherits(Company, _Resource9);

  function Company() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Company);

    return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, id, 'companies', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(Company, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'clientCount',


    /** @param {string} clientCount **/
    set: function set(clientCount) {
      this._attributes['client-count'] = clientCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-count'];
    }
  }, {
    key: 'clients',


    // relationships


    /** @param {Client[]} clients **/
    set: function set(clients) {
      this._many['clients'] = clients;
    },

    /** @type {Client[]} */
    get: function get() {
      return this._many['clients'];
    }
  }]);

  return Company;
}(_resource2.default);

/** @class Contact
  * @extends {Resource}
  **/


var Contact = exports.Contact = function (_Resource10) {
  _inherits(Contact, _Resource10);

  function Contact() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, id, 'contacts', attributes, one, many));
  }

  // attributes

  /** @param {string} firstName **/


  _createClass(Contact, [{
    key: 'firstName',
    set: function set(firstName) {
      this._attributes['first-name'] = firstName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['first-name'];
    }
  }, {
    key: 'lastName',


    /** @param {string} lastName **/
    set: function set(lastName) {
      this._attributes['last-name'] = lastName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-name'];
    }
  }, {
    key: 'email',


    /** @param {string} email **/
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['email'];
    }
  }, {
    key: 'extension',


    /** @param {string} extension **/
    set: function set(extension) {
      this._attributes['extension'] = extension;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['extension'];
    }
  }, {
    key: 'phoneNumber',


    /** @param {string} phoneNumber **/
    set: function set(phoneNumber) {
      this._attributes['phone-number'] = phoneNumber;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['phone-number'];
    }
  }, {
    key: 'smsNumber',


    /** @param {string} smsNumber **/
    set: function set(smsNumber) {
      this._attributes['sms-number'] = smsNumber;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['sms-number'];
    }
  }, {
    key: 'updatedAt',


    /** @param {string} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }]);

  return Contact;
}(_resource2.default);

/** @class Courier
  * @extends {Resource}
  **/
var Courier = exports.Courier = function (_Resource11) {
  _inherits(Courier, _Resource11);

  function Courier() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Courier);

    return _possibleConstructorReturn(this, (Courier.__proto__ || Object.getPrototypeOf(Courier)).call(this, id, 'couriers', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(Courier, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'legalName',


    /** @param {string} legalName **/
    set: function set(legalName) {
      this._attributes['legal-name'] = legalName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['legal-name'];
    }
  }, {
    key: 'driverCount',


    /** @param {string} driverCount **/
    set: function set(driverCount) {
      this._attributes['driver-count'] = driverCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['driver-count'];
    }
  }, {
    key: 'ownerEmail',


    /** @param {string} ownerEmail **/
    set: function set(ownerEmail) {
      this._attributes['owner-email'] = ownerEmail;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['owner-email'];
    }
  }, {
    key: 'owner',


    // relationships


    /** @param {User} owner **/
    set: function set(owner) {
      this._one['owner'] = owner;
    },

    /** @type {User} */
    get: function get() {
      return this._one['owner'];
    }
  }, {
    key: 'drivers',


    /** @param {User[]} drivers **/
    set: function set(drivers) {
      this._many['drivers'] = drivers;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['drivers'];
    }
  }, {
    key: 'areas',


    /** @param {Area[]} areas **/
    set: function set(areas) {
      this._many['areas'] = areas;
    },

    /** @type {Area[]} */
    get: function get() {
      return this._many['areas'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return Courier;
}(_resource2.default);

/** @class DeliveryCase
  * @extends {Resource}
  **/


var DeliveryCase = exports.DeliveryCase = function (_Resource12) {
  _inherits(DeliveryCase, _Resource12);

  function DeliveryCase() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DeliveryCase);

    return _possibleConstructorReturn(this, (DeliveryCase.__proto__ || Object.getPrototypeOf(DeliveryCase)).call(this, id, 'delivery-cases', attributes, one, many));
  }

  // attributes

  /** @param {string} caseType **/


  _createClass(DeliveryCase, [{
    key: 'caseType',
    set: function set(caseType) {
      this._attributes['case-type'] = caseType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-type'];
    }
  }, {
    key: 'value',


    /** @param {string} value **/
    set: function set(value) {
      this._attributes['value'] = value;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['value'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }, {
    key: 'order',


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }]);

  return DeliveryCase;
}(_resource2.default);

/** @class DeliveryLocation
  * @extends {Resource}
  **/


var DeliveryLocation = exports.DeliveryLocation = function (_Resource13) {
  _inherits(DeliveryLocation, _Resource13);

  function DeliveryLocation() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DeliveryLocation);

    return _possibleConstructorReturn(this, (DeliveryLocation.__proto__ || Object.getPrototypeOf(DeliveryLocation)).call(this, id, 'delivery-locations', attributes, one, many));
  }

  // attributes

  /** @param {any} name **/


  _createClass(DeliveryLocation, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'addressCode',


    /** @param {any} addressCode **/
    set: function set(addressCode) {
      this._attributes['address-code'] = addressCode;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['address-code'];
    }
  }, {
    key: 'building',


    /** @param {any} building **/
    set: function set(building) {
      this._attributes['building'] = building;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['building'];
    }
  }, {
    key: 'buzzer',


    /** @param {any} buzzer **/
    set: function set(buzzer) {
      this._attributes['buzzer'] = buzzer;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['buzzer'];
    }
  }, {
    key: 'city',


    /** @param {any} city **/
    set: function set(city) {
      this._attributes['city'] = city;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['city'];
    }
  }, {
    key: 'country',


    /** @param {any} country **/
    set: function set(country) {
      this._attributes['country'] = country;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['country'];
    }
  }, {
    key: 'floor',


    /** @param {any} floor **/
    set: function set(floor) {
      this._attributes['floor'] = floor;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['floor'];
    }
  }, {
    key: 'latitude',


    /** @param {any} latitude **/
    set: function set(latitude) {
      this._attributes['latitude'] = latitude;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['latitude'];
    }
  }, {
    key: 'locationId',


    /** @param {any} locationId **/
    set: function set(locationId) {
      this._attributes['location-id'] = locationId;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['location-id'];
    }
  }, {
    key: 'longitude',


    /** @param {any} longitude **/
    set: function set(longitude) {
      this._attributes['longitude'] = longitude;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['longitude'];
    }
  }, {
    key: 'province',


    /** @param {any} province **/
    set: function set(province) {
      this._attributes['province'] = province;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['province'];
    }
  }, {
    key: 'street',


    /** @param {any} street **/
    set: function set(street) {
      this._attributes['street'] = street;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['street'];
    }
  }, {
    key: 'unitNumber',


    /** @param {any} unitNumber **/
    set: function set(unitNumber) {
      this._attributes['unit-number'] = unitNumber;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['unit-number'];
    }
  }, {
    key: 'isDefault',


    /** @param {any} isDefault **/
    set: function set(isDefault) {
      this._attributes['default'] = isDefault;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['default'];
    }
  }, {
    key: 'updatedAt',


    /** @param {any} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'client',


    // relationships


    /** @param {Client} client **/
    set: function set(client) {
      this._one['client'] = client;
    },

    /** @type {Client} */
    get: function get() {
      return this._one['client'];
    }
  }, {
    key: 'location',


    /** @param {Location} location **/
    set: function set(location) {
      this._one['location'] = location;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['location'];
    }
  }]);

  return DeliveryLocation;
}(_resource2.default);

/** @class DeskCase
  * @extends {Resource}
  **/


var DeskCase = exports.DeskCase = function (_Resource14) {
  _inherits(DeskCase, _Resource14);

  function DeskCase() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DeskCase);

    return _possibleConstructorReturn(this, (DeskCase.__proto__ || Object.getPrototypeOf(DeskCase)).call(this, id, 'desk-cases', attributes, one, many));
  }

  // attributes

  /** @param {string} caseRequest **/


  _createClass(DeskCase, [{
    key: 'caseRequest',
    set: function set(caseRequest) {
      this._attributes['case-request'] = caseRequest;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-request'];
    }
  }, {
    key: 'caseId',


    /** @param {string} caseId **/
    set: function set(caseId) {
      this._attributes['case-id'] = caseId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-id'];
    }
  }, {
    key: 'caseMessage',


    /** @param {string} caseMessage **/
    set: function set(caseMessage) {
      this._attributes['case-message'] = caseMessage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-message'];
    }
  }, {
    key: 'caseStatus',


    /** @param {string} caseStatus **/
    set: function set(caseStatus) {
      this._attributes['case-status'] = caseStatus;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-status'];
    }
  }, {
    key: 'caseValue',


    /** @param {string} caseValue **/
    set: function set(caseValue) {
      this._attributes['case-value'] = caseValue;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-value'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }, {
    key: 'order',


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }]);

  return DeskCase;
}(_resource2.default);

/** @class DietaryTag
  * @extends {Resource}
  **/


var DietaryTag = exports.DietaryTag = function (_Resource15) {
  _inherits(DietaryTag, _Resource15);

  function DietaryTag() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DietaryTag);

    return _possibleConstructorReturn(this, (DietaryTag.__proto__ || Object.getPrototypeOf(DietaryTag)).call(this, id, 'dietary-tags', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(DietaryTag, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'slug',


    /** @param {string} slug **/
    set: function set(slug) {
      this._attributes['slug'] = slug;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['slug'];
    }
  }, {
    key: 'abbreviation',


    /** @param {string} abbreviation **/
    set: function set(abbreviation) {
      this._attributes['abbreviation'] = abbreviation;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['abbreviation'];
    }
  }, {
    key: 'color',


    /** @param {string} color **/
    set: function set(color) {
      this._attributes['color'] = color;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['color'];
    }
  }, {
    key: 'menuOptionItems',


    // relationships


    /** @param {MenuOptionItem[]} menuOptionItems **/
    set: function set(menuOptionItems) {
      this._many['menu-option-items'] = menuOptionItems;
    },

    /** @type {MenuOptionItem[]} */
    get: function get() {
      return this._many['menu-option-items'];
    }
  }]);

  return DietaryTag;
}(_resource2.default);

/** @class DiscountCode
  * @extends {Resource}
  **/


var DiscountCode = exports.DiscountCode = function (_Resource16) {
  _inherits(DiscountCode, _Resource16);

  function DiscountCode() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DiscountCode);

    return _possibleConstructorReturn(this, (DiscountCode.__proto__ || Object.getPrototypeOf(DiscountCode)).call(this, id, 'discount-codes', attributes, one, many));
  }

  // attributes

  /** @param {any} code **/


  _createClass(DiscountCode, [{
    key: 'code',
    set: function set(code) {
      this._attributes['code'] = code;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['code'];
    }
  }, {
    key: 'description',


    /** @param {any} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'discountType',


    /** @param {any} discountType **/
    set: function set(discountType) {
      this._attributes['discount-type'] = discountType;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['discount-type'];
    }
  }]);

  return DiscountCode;
}(_resource2.default);

/** @class DriverDay
  * @extends {Resource}
  **/
var DriverDay = exports.DriverDay = function (_Resource17) {
  _inherits(DriverDay, _Resource17);

  function DriverDay() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DriverDay);

    return _possibleConstructorReturn(this, (DriverDay.__proto__ || Object.getPrototypeOf(DriverDay)).call(this, id, 'driver-days', attributes, one, many));
  }

  // attributes

  /** @param {jsonb} pings **/


  _createClass(DriverDay, [{
    key: 'pings',
    set: function set(pings) {
      this._attributes['pings'] = pings;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['pings'];
    }
  }, {
    key: 'driver',


    // relationships


    /** @param {User} driver **/
    set: function set(driver) {
      this._one['driver'] = driver;
    },

    /** @type {User} */
    get: function get() {
      return this._one['driver'];
    }
  }]);

  return DriverDay;
}(_resource2.default);

/** @class DriverPayment
  * @extends {Resource}
  **/


var DriverPayment = exports.DriverPayment = function (_Resource18) {
  _inherits(DriverPayment, _Resource18);

  function DriverPayment() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DriverPayment);

    return _possibleConstructorReturn(this, (DriverPayment.__proto__ || Object.getPrototypeOf(DriverPayment)).call(this, id, 'driver-payments', attributes, one, many));
  }

  // attributes

  /** @param {float} amount **/


  _createClass(DriverPayment, [{
    key: 'amount',
    set: function set(amount) {
      this._attributes['amount'] = amount;
    },

    /** @type {float} */
    get: function get() {
      return this._attributes['amount'];
    }
  }, {
    key: 'deliveryDate',


    /** @param {date} deliveryDate **/
    set: function set(deliveryDate) {
      this._attributes['delivery-date'] = deliveryDate;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['delivery-date'];
    }
  }, {
    key: 'driverId',


    /** @param {integer} driverId **/
    set: function set(driverId) {
      this._attributes['driver-id'] = driverId;
    },

    /** @type {integer} */
    get: function get() {
      return this._attributes['driver-id'];
    }
  }, {
    key: 'manuallyAdded',


    /** @param {boolean} manuallyAdded **/
    set: function set(manuallyAdded) {
      this._attributes['manually-added'] = manuallyAdded;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['manually-added'];
    }
  }, {
    key: 'notes',


    /** @param {string} notes **/
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notes'];
    }
  }, {
    key: 'orderId',


    /** @param {integer} orderId **/
    set: function set(orderId) {
      this._attributes['order-id'] = orderId;
    },

    /** @type {integer} */
    get: function get() {
      return this._attributes['order-id'];
    }
  }, {
    key: 'driverPayrollRunId',


    /** @param {integer} driverPayrollRunId **/
    set: function set(driverPayrollRunId) {
      this._attributes['driver-payroll-run-id'] = driverPayrollRunId;
    },

    /** @type {integer} */
    get: function get() {
      return this._attributes['driver-payroll-run-id'];
    }
  }, {
    key: 'ruleName',


    /** @param {string} ruleName **/
    set: function set(ruleName) {
      this._attributes['rule-name'] = ruleName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['rule-name'];
    }
  }, {
    key: 'orderIdentifier',


    /** @param {string} orderIdentifier **/
    set: function set(orderIdentifier) {
      this._attributes['order-identifier'] = orderIdentifier;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-identifier'];
    }
  }, {
    key: 'orderDeliverAt',


    /** @param {date} orderDeliverAt **/
    set: function set(orderDeliverAt) {
      this._attributes['order-deliver-at'] = orderDeliverAt;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['order-deliver-at'];
    }
  }, {
    key: 'orderPickupAt',


    /** @param {date} orderPickupAt **/
    set: function set(orderPickupAt) {
      this._attributes['order-pickup-at'] = orderPickupAt;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['order-pickup-at'];
    }
  }, {
    key: 'orderDeliveredAt',


    /** @param {date} orderDeliveredAt **/
    set: function set(orderDeliveredAt) {
      this._attributes['order-delivered-at'] = orderDeliveredAt;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['order-delivered-at'];
    }
  }, {
    key: 'driverPayrollRun',


    // relationships


    /** @param {DriverPayrollRun} driverPayrollRun **/
    set: function set(driverPayrollRun) {
      this._one['driver-payroll-run'] = driverPayrollRun;
    },

    /** @type {DriverPayrollRun} */
    get: function get() {
      return this._one['driver-payroll-run'];
    }
  }]);

  return DriverPayment;
}(_resource2.default);

/** @class DriverPayrollRun
  * @extends {Resource}
  **/


var DriverPayrollRun = exports.DriverPayrollRun = function (_Resource19) {
  _inherits(DriverPayrollRun, _Resource19);

  function DriverPayrollRun() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DriverPayrollRun);

    return _possibleConstructorReturn(this, (DriverPayrollRun.__proto__ || Object.getPrototypeOf(DriverPayrollRun)).call(this, id, 'driver-payroll-runs', attributes, one, many));
  }

  // attributes

  /** @param {json} amounts **/


  _createClass(DriverPayrollRun, [{
    key: 'amounts',
    set: function set(amounts) {
      this._attributes['amounts'] = amounts;
    },

    /** @type {json} */
    get: function get() {
      return this._attributes['amounts'];
    }
  }, {
    key: 'approvals',


    /** @param {json} approvals **/
    set: function set(approvals) {
      this._attributes['approvals'] = approvals;
    },

    /** @type {json} */
    get: function get() {
      return this._attributes['approvals'];
    }
  }, {
    key: 'driverId',


    /** @param {integer} driverId **/
    set: function set(driverId) {
      this._attributes['driver-id'] = driverId;
    },

    /** @type {integer} */
    get: function get() {
      return this._attributes['driver-id'];
    }
  }, {
    key: 'payrollRunId',


    /** @param {integer} payrollRunId **/
    set: function set(payrollRunId) {
      this._attributes['payroll-run-id'] = payrollRunId;
    },

    /** @type {integer} */
    get: function get() {
      return this._attributes['payroll-run-id'];
    }
  }, {
    key: 'driver',


    // relationships


    /** @param {Driver} driver **/
    set: function set(driver) {
      this._one['driver'] = driver;
    },

    /** @type {Driver} */
    get: function get() {
      return this._one['driver'];
    }
  }, {
    key: 'payrollRun',


    /** @param {PayrollRun} payrollRun **/
    set: function set(payrollRun) {
      this._one['payroll-run'] = payrollRun;
    },

    /** @type {PayrollRun} */
    get: function get() {
      return this._one['payroll-run'];
    }
  }]);

  return DriverPayrollRun;
}(_resource2.default);

/** @class DriverPing
  * @extends {Resource}
  **/


var DriverPing = exports.DriverPing = function (_Resource20) {
  _inherits(DriverPing, _Resource20);

  function DriverPing() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DriverPing);

    return _possibleConstructorReturn(this, (DriverPing.__proto__ || Object.getPrototypeOf(DriverPing)).call(this, id, 'driver-pings', attributes, one, many));
  }

  // attributes

  /** @param {float} longitude **/


  _createClass(DriverPing, [{
    key: 'longitude',
    set: function set(longitude) {
      this._attributes['longitude'] = longitude;
    },

    /** @type {float} */
    get: function get() {
      return this._attributes['longitude'];
    }
  }, {
    key: 'latitude',


    /** @param {float} latitude **/
    set: function set(latitude) {
      this._attributes['latitude'] = latitude;
    },

    /** @type {float} */
    get: function get() {
      return this._attributes['latitude'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }]);

  return DriverPing;
}(_resource2.default);

/** @class DriverResource
  * @extends {Resource}
  **/


var DriverResource = exports.DriverResource = function (_Resource21) {
  _inherits(DriverResource, _Resource21);

  function DriverResource() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DriverResource);

    return _possibleConstructorReturn(this, (DriverResource.__proto__ || Object.getPrototypeOf(DriverResource)).call(this, id, 'driver-resources', attributes, one, many));
  }

  // attributes

  /** @param {integer} driverId **/


  _createClass(DriverResource, [{
    key: 'driverId',
    set: function set(driverId) {
      this._attributes['driver-id'] = driverId;
    },

    /** @type {integer} */
    get: function get() {
      return this._attributes['driver-id'];
    }
  }, {
    key: 'firstName',


    /** @param {string} firstName **/
    set: function set(firstName) {
      this._attributes['first-name'] = firstName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['first-name'];
    }
  }, {
    key: 'lastName',


    /** @param {string} lastName **/
    set: function set(lastName) {
      this._attributes['last-name'] = lastName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-name'];
    }
  }]);

  return DriverResource;
}(_resource2.default);

/** @class DriverWeek
  * @extends {Resource}
  **/
var DriverWeek = exports.DriverWeek = function (_Resource22) {
  _inherits(DriverWeek, _Resource22);

  function DriverWeek() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, DriverWeek);

    return _possibleConstructorReturn(this, (DriverWeek.__proto__ || Object.getPrototypeOf(DriverWeek)).call(this, id, 'driver-weeks', attributes, one, many));
  }

  // attributes

  /** @param {Date} createdAt **/


  _createClass(DriverWeek, [{
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {Date} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'monday',


    /** @param {Date} monday **/
    set: function set(monday) {
      this._attributes['monday'] = monday;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['monday'];
    }
  }, {
    key: 'notes',


    /** @param {Date} notes **/
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['notes'];
    }
  }, {
    key: 'availableMondayBreakfast',


    /** @param {Date} availableMondayBreakfast **/
    set: function set(availableMondayBreakfast) {
      this._attributes['available-monday-breakfast'] = availableMondayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-monday-breakfast'];
    }
  }, {
    key: 'availableMondayLunch',


    /** @param {Date} availableMondayLunch **/
    set: function set(availableMondayLunch) {
      this._attributes['available-monday-lunch'] = availableMondayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-monday-lunch'];
    }
  }, {
    key: 'availableMondayDinner',


    /** @param {Date} availableMondayDinner **/
    set: function set(availableMondayDinner) {
      this._attributes['available-monday-dinner'] = availableMondayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-monday-dinner'];
    }
  }, {
    key: 'availableTuesdayBreakfast',


    /** @param {Date} availableTuesdayBreakfast **/
    set: function set(availableTuesdayBreakfast) {
      this._attributes['available-tuesday-breakfast'] = availableTuesdayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-tuesday-breakfast'];
    }
  }, {
    key: 'availableTuesdayLunch',


    /** @param {Date} availableTuesdayLunch **/
    set: function set(availableTuesdayLunch) {
      this._attributes['available-tuesday-lunch'] = availableTuesdayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-tuesday-lunch'];
    }
  }, {
    key: 'availableTuesdayDinner',


    /** @param {Date} availableTuesdayDinner **/
    set: function set(availableTuesdayDinner) {
      this._attributes['available-tuesday-dinner'] = availableTuesdayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-tuesday-dinner'];
    }
  }, {
    key: 'availableWednesdayBreakfast',


    /** @param {Date} availableWednesdayBreakfast **/
    set: function set(availableWednesdayBreakfast) {
      this._attributes['available-wednesday-breakfast'] = availableWednesdayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-wednesday-breakfast'];
    }
  }, {
    key: 'availableWednesdayLunch',


    /** @param {Date} availableWednesdayLunch **/
    set: function set(availableWednesdayLunch) {
      this._attributes['available-wednesday-lunch'] = availableWednesdayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-wednesday-lunch'];
    }
  }, {
    key: 'availableWednesdayDinner',


    /** @param {Date} availableWednesdayDinner **/
    set: function set(availableWednesdayDinner) {
      this._attributes['available-wednesday-dinner'] = availableWednesdayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-wednesday-dinner'];
    }
  }, {
    key: 'availableThursdayBreakfast',


    /** @param {Date} availableThursdayBreakfast **/
    set: function set(availableThursdayBreakfast) {
      this._attributes['available-thursday-breakfast'] = availableThursdayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-thursday-breakfast'];
    }
  }, {
    key: 'availableThursdayLunch',


    /** @param {Date} availableThursdayLunch **/
    set: function set(availableThursdayLunch) {
      this._attributes['available-thursday-lunch'] = availableThursdayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-thursday-lunch'];
    }
  }, {
    key: 'availableThursdayDinner',


    /** @param {Date} availableThursdayDinner **/
    set: function set(availableThursdayDinner) {
      this._attributes['available-thursday-dinner'] = availableThursdayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-thursday-dinner'];
    }
  }, {
    key: 'availableFridayBreakfast',


    /** @param {Date} availableFridayBreakfast **/
    set: function set(availableFridayBreakfast) {
      this._attributes['available-friday-breakfast'] = availableFridayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-friday-breakfast'];
    }
  }, {
    key: 'availableFridayLunch',


    /** @param {Date} availableFridayLunch **/
    set: function set(availableFridayLunch) {
      this._attributes['available-friday-lunch'] = availableFridayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-friday-lunch'];
    }
  }, {
    key: 'availableFridayDinner',


    /** @param {Date} availableFridayDinner **/
    set: function set(availableFridayDinner) {
      this._attributes['available-friday-dinner'] = availableFridayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-friday-dinner'];
    }
  }, {
    key: 'availableSaturdayBreakfast',


    /** @param {Date} availableSaturdayBreakfast **/
    set: function set(availableSaturdayBreakfast) {
      this._attributes['available-saturday-breakfast'] = availableSaturdayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-saturday-breakfast'];
    }
  }, {
    key: 'availableSaturdayLunch',


    /** @param {Date} availableSaturdayLunch **/
    set: function set(availableSaturdayLunch) {
      this._attributes['available-saturday-lunch'] = availableSaturdayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-saturday-lunch'];
    }
  }, {
    key: 'availableSaturdayDinner',


    /** @param {Date} availableSaturdayDinner **/
    set: function set(availableSaturdayDinner) {
      this._attributes['available-saturday-dinner'] = availableSaturdayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-saturday-dinner'];
    }
  }, {
    key: 'availableSundayBreakfast',


    /** @param {Date} availableSundayBreakfast **/
    set: function set(availableSundayBreakfast) {
      this._attributes['available-sunday-breakfast'] = availableSundayBreakfast;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-sunday-breakfast'];
    }
  }, {
    key: 'availableSundayLunch',


    /** @param {Date} availableSundayLunch **/
    set: function set(availableSundayLunch) {
      this._attributes['available-sunday-lunch'] = availableSundayLunch;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-sunday-lunch'];
    }
  }, {
    key: 'availableSundayDinner',


    /** @param {Date} availableSundayDinner **/
    set: function set(availableSundayDinner) {
      this._attributes['available-sunday-dinner'] = availableSundayDinner;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['available-sunday-dinner'];
    }
  }, {
    key: 'driver',


    // relationships


    /** @param {User} driver **/
    set: function set(driver) {
      this._one['driver'] = driver;
    },

    /** @type {User} */
    get: function get() {
      return this._one['driver'];
    }
  }]);

  return DriverWeek;
}(_resource2.default);

/** @class EmailMessage
  * @extends {Resource}
  **/


var EmailMessage = exports.EmailMessage = function (_Resource23) {
  _inherits(EmailMessage, _Resource23);

  function EmailMessage() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, EmailMessage);

    return _possibleConstructorReturn(this, (EmailMessage.__proto__ || Object.getPrototypeOf(EmailMessage)).call(this, id, 'email-messages', attributes, one, many));
  }

  // attributes

  /** @param {string} messageId **/


  _createClass(EmailMessage, [{
    key: 'messageId',
    set: function set(messageId) {
      this._attributes['message-id'] = messageId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['message-id'];
    }
  }, {
    key: 'recipients',


    /** @param {string} recipients **/
    set: function set(recipients) {
      this._attributes['recipients'] = recipients;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['recipients'];
    }
  }, {
    key: 'message',


    /** @param {string} message **/
    set: function set(message) {
      this._attributes['message'] = message;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['message'];
    }
  }, {
    key: 'subject',


    /** @param {string} subject **/
    set: function set(subject) {
      this._attributes['subject'] = subject;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['subject'];
    }
  }, {
    key: 'event',


    /** @param {string} event **/
    set: function set(event) {
      this._attributes['event'] = event;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['event'];
    }
  }, {
    key: 'mailableId',


    /** @param {string} mailableId **/
    set: function set(mailableId) {
      this._attributes['mailable-id'] = mailableId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['mailable-id'];
    }
  }, {
    key: 'timestamp',


    /** @param {string} timestamp **/
    set: function set(timestamp) {
      this._attributes['timestamp'] = timestamp;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['timestamp'];
    }
  }, {
    key: 'messageType',


    /** @param {string} messageType **/
    set: function set(messageType) {
      this._attributes['message-type'] = messageType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['message-type'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'order',


    // relationships


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }]);

  return EmailMessage;
}(_resource2.default);

/** @class Event
  * @extends {Resource}
  **/


var Event = exports.Event = function (_Resource24) {
  _inherits(Event, _Resource24);

  function Event() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Event);

    return _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, id, 'events', attributes, one, many));
  }

  // attributes

  /** @param {any} event **/


  _createClass(Event, [{
    key: 'event',
    set: function set(event) {
      this._attributes['event'] = event;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['event'];
    }
  }, {
    key: 'timestamp',


    /** @param {any} timestamp **/
    set: function set(timestamp) {
      this._attributes['timestamp'] = timestamp;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['timestamp'];
    }
  }, {
    key: 'createdAt',


    /** @param {any} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'eventTimestamp',


    /** @param {any} eventTimestamp **/
    set: function set(eventTimestamp) {
      this._attributes['event-timestamp'] = eventTimestamp;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['event-timestamp'];
    }
  }]);

  return Event;
}(_resource2.default);

/** @class GiftbitCard
  * @extends {Resource}
  **/
var GiftbitCard = exports.GiftbitCard = function (_Resource25) {
  _inherits(GiftbitCard, _Resource25);

  function GiftbitCard() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, GiftbitCard);

    return _possibleConstructorReturn(this, (GiftbitCard.__proto__ || Object.getPrototypeOf(GiftbitCard)).call(this, id, 'giftbit-cards', attributes, one, many));
  }

  // attributes

  /** @param {any} balance **/


  _createClass(GiftbitCard, [{
    key: 'balance',
    set: function set(balance) {
      this._attributes['balance'] = balance;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['balance'];
    }
  }, {
    key: 'transactions',


    /** @param {any} transactions **/
    set: function set(transactions) {
      this._attributes['transactions'] = transactions;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['transactions'];
    }
  }]);

  return GiftbitCard;
}(_resource2.default);

/** @class GiftbitError
  * @extends {Resource}
  **/
var GiftbitError = exports.GiftbitError = function (_Resource26) {
  _inherits(GiftbitError, _Resource26);

  function GiftbitError() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, GiftbitError);

    return _possibleConstructorReturn(this, (GiftbitError.__proto__ || Object.getPrototypeOf(GiftbitError)).call(this, id, 'giftbit-errors', attributes, one, many));
  }

  // attributes

  /** @param {string} log **/


  _createClass(GiftbitError, [{
    key: 'log',
    set: function set(log) {
      this._attributes['log'] = log;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['log'];
    }
  }, {
    key: 'isResolved',


    /** @param {string} isResolved **/
    set: function set(isResolved) {
      this._attributes['is-resolved'] = isResolved;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-resolved'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {string} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'order',


    // relationships


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }]);

  return GiftbitError;
}(_resource2.default);

/** @class GiftbitGift
  * @extends {Resource}
  **/


var GiftbitGift = exports.GiftbitGift = function (_Resource27) {
  _inherits(GiftbitGift, _Resource27);

  function GiftbitGift() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, GiftbitGift);

    return _possibleConstructorReturn(this, (GiftbitGift.__proto__ || Object.getPrototypeOf(GiftbitGift)).call(this, id, 'giftbit-gifts', attributes, one, many));
  }

  // attributes

  /** @param {any} isActive **/


  _createClass(GiftbitGift, [{
    key: 'isActive',
    set: function set(isActive) {
      this._attributes['is-active'] = isActive;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['is-active'];
    }
  }, {
    key: 'name',


    /** @param {any} name **/
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'description',


    /** @param {any} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'imageUrl',


    /** @param {any} imageUrl **/
    set: function set(imageUrl) {
      this._attributes['image-url'] = imageUrl;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['image-url'];
    }
  }, {
    key: 'tax',


    /** @param {any} tax **/
    set: function set(tax) {
      this._attributes['tax'] = tax;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['tax'];
    }
  }, {
    key: 'currencyisocode',


    /** @param {any} currencyisocode **/
    set: function set(currencyisocode) {
      this._attributes['currencyisocode'] = currencyisocode;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['currencyisocode'];
    }
  }, {
    key: 'maxPriceInCents',


    /** @param {any} maxPriceInCents **/
    set: function set(maxPriceInCents) {
      this._attributes['max-price-in-cents'] = maxPriceInCents;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['max-price-in-cents'];
    }
  }, {
    key: 'minPriceInCents',


    /** @param {any} minPriceInCents **/
    set: function set(minPriceInCents) {
      this._attributes['min-price-in-cents'] = minPriceInCents;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['min-price-in-cents'];
    }
  }, {
    key: 'maxFoodeePriceInCents',


    /** @param {any} maxFoodeePriceInCents **/
    set: function set(maxFoodeePriceInCents) {
      this._attributes['max-foodee-price-in-cents'] = maxFoodeePriceInCents;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['max-foodee-price-in-cents'];
    }
  }, {
    key: 'minFoodeePriceInCents',


    /** @param {any} minFoodeePriceInCents **/
    set: function set(minFoodeePriceInCents) {
      this._attributes['min-foodee-price-in-cents'] = minFoodeePriceInCents;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['min-foodee-price-in-cents'];
    }
  }, {
    key: 'dollarsToPoints',


    /** @param {any} dollarsToPoints **/
    set: function set(dollarsToPoints) {
      this._attributes['dollars-to-points'] = dollarsToPoints;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['dollars-to-points'];
    }
  }]);

  return GiftbitGift;
}(_resource2.default);

/** @class GroupOrderMember
  * @extends {Resource}
  **/
var GroupOrderMember = exports.GroupOrderMember = function (_Resource28) {
  _inherits(GroupOrderMember, _Resource28);

  function GroupOrderMember() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, GroupOrderMember);

    return _possibleConstructorReturn(this, (GroupOrderMember.__proto__ || Object.getPrototypeOf(GroupOrderMember)).call(this, id, 'group-order-members', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(GroupOrderMember, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'email',


    /** @param {string} email **/
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['email'];
    }
  }, {
    key: 'phoneNumber',


    /** @param {string} phoneNumber **/
    set: function set(phoneNumber) {
      this._attributes['phone-number'] = phoneNumber;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['phone-number'];
    }
  }, {
    key: 'department',


    /** @param {string} department **/
    set: function set(department) {
      this._attributes['department'] = department;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['department'];
    }
  }, {
    key: 'termsAcceptedAt',


    /** @param {string} termsAcceptedAt **/
    set: function set(termsAcceptedAt) {
      this._attributes['terms-accepted-at'] = termsAcceptedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['terms-accepted-at'];
    }
  }, {
    key: 'stripeChargeToken',


    /** @param {string} stripeChargeToken **/
    set: function set(stripeChargeToken) {
      this._attributes['stripe-charge-token'] = stripeChargeToken;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['stripe-charge-token'];
    }
  }, {
    key: 'notifyByEmailOnDelivery',


    /** @param {string} notifyByEmailOnDelivery **/
    set: function set(notifyByEmailOnDelivery) {
      this._attributes['notify-by-email-on-delivery'] = notifyByEmailOnDelivery;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notify-by-email-on-delivery'];
    }
  }, {
    key: 'notifyBySMSOnDelivery',


    /** @param {string} notifyBySMSOnDelivery **/
    set: function set(notifyBySMSOnDelivery) {
      this._attributes['notify-by-sms-on-delivery'] = notifyBySMSOnDelivery;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notify-by-sms-on-delivery'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }, {
    key: 'order',


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }, {
    key: 'orderItems',


    /** @param {OrderItem[]} orderItems **/
    set: function set(orderItems) {
      this._many['order-items'] = orderItems;
    },

    /** @type {OrderItem[]} */
    get: function get() {
      return this._many['order-items'];
    }
  }]);

  return GroupOrderMember;
}(_resource2.default);

/** @class Invoice
  * @extends {Resource}
  **/


var Invoice = exports.Invoice = function (_Resource29) {
  _inherits(Invoice, _Resource29);

  function Invoice() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Invoice);

    return _possibleConstructorReturn(this, (Invoice.__proto__ || Object.getPrototypeOf(Invoice)).call(this, id, 'invoices', attributes, one, many));
  }

  // attributes

  /** @param {any} clientInvoice **/


  _createClass(Invoice, [{
    key: 'clientInvoice',
    set: function set(clientInvoice) {
      this._attributes['client-invoice'] = clientInvoice;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['client-invoice'];
    }
  }, {
    key: 'updatedAt',


    /** @param {any} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }]);

  return Invoice;
}(_resource2.default);

/** @class InvoicingTaxRate
  * @extends {Resource}
  **/
var InvoicingTaxRate = exports.InvoicingTaxRate = function (_Resource30) {
  _inherits(InvoicingTaxRate, _Resource30);

  function InvoicingTaxRate() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, InvoicingTaxRate);

    return _possibleConstructorReturn(this, (InvoicingTaxRate.__proto__ || Object.getPrototypeOf(InvoicingTaxRate)).call(this, id, 'invoicing-tax-rates', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(InvoicingTaxRate, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'rate',


    /** @param {string} rate **/
    set: function set(rate) {
      this._attributes['rate'] = rate;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['rate'];
    }
  }, {
    key: 'description',


    /** @param {string} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'isValid',


    /** @param {string} isValid **/
    set: function set(isValid) {
      this._attributes['is-valid'] = isValid;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-valid'];
    }
  }, {
    key: 'isDefault',


    /** @param {string} isDefault **/
    set: function set(isDefault) {
      this._attributes['is-default'] = isDefault;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-default'];
    }
  }, {
    key: 'taxCode',


    /** @param {string} taxCode **/
    set: function set(taxCode) {
      this._attributes['tax-code'] = taxCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['tax-code'];
    }
  }, {
    key: 'validFrom',


    /** @param {string} validFrom **/
    set: function set(validFrom) {
      this._attributes['valid-from'] = validFrom;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['valid-from'];
    }
  }, {
    key: 'validUntil',


    /** @param {string} validUntil **/
    set: function set(validUntil) {
      this._attributes['valid-until'] = validUntil;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['valid-until'];
    }
  }, {
    key: 'area',


    // relationships


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }]);

  return InvoicingTaxRate;
}(_resource2.default);

/** @class Location
  * @extends {Resource}
  **/


var Location = exports.Location = function (_Resource31) {
  _inherits(Location, _Resource31);

  function Location() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Location);

    return _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).call(this, id, 'locations', attributes, one, many));
  }

  // attributes

  /** @param {*} latitude **/


  _createClass(Location, [{
    key: 'latitude',
    set: function set(latitude) {
      this._attributes['latitude'] = latitude;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['latitude'];
    }
  }, {
    key: 'longitude',


    /** @param {*} longitude **/
    set: function set(longitude) {
      this._attributes['longitude'] = longitude;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['longitude'];
    }
  }, {
    key: 'buzzer',


    /** @param {*} buzzer **/
    set: function set(buzzer) {
      this._attributes['buzzer'] = buzzer;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['buzzer'];
    }
  }, {
    key: 'unitNumber',


    /** @param {*} unitNumber **/
    set: function set(unitNumber) {
      this._attributes['unit-number'] = unitNumber;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['unit-number'];
    }
  }, {
    key: 'floor',


    /** @param {*} floor **/
    set: function set(floor) {
      this._attributes['floor'] = floor;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['floor'];
    }
  }, {
    key: 'building',


    /** @param {*} building **/
    set: function set(building) {
      this._attributes['building'] = building;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['building'];
    }
  }, {
    key: 'city',


    /** @param {*} city **/
    set: function set(city) {
      this._attributes['city'] = city;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['city'];
    }
  }, {
    key: 'country',


    /** @param {*} country **/
    set: function set(country) {
      this._attributes['country'] = country;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['country'];
    }
  }, {
    key: 'province',


    /** @param {*} province **/
    set: function set(province) {
      this._attributes['province'] = province;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['province'];
    }
  }, {
    key: 'street',


    /** @param {*} street **/
    set: function set(street) {
      this._attributes['street'] = street;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['street'];
    }
  }, {
    key: 'addressCode',


    /** @param {*} addressCode **/
    set: function set(addressCode) {
      this._attributes['address-code'] = addressCode;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['address-code'];
    }
  }, {
    key: 'isDefault',


    /** @param {*} isDefault **/
    set: function set(isDefault) {
      this._attributes['default'] = isDefault;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['default'];
    }
  }, {
    key: 'addressLine1',


    /** @param {*} addressLine1 **/
    set: function set(addressLine1) {
      this._attributes['address-line-1'] = addressLine1;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['address-line-1'];
    }
  }, {
    key: 'rawAddress',


    /** @param {*} rawAddress **/
    set: function set(rawAddress) {
      this._attributes['raw-address'] = rawAddress;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['raw-address'];
    }
  }, {
    key: 'area',


    // relationships


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }]);

  return Location;
}(_resource2.default);

/** @class MealPlan
  * @extends {Resource}
  **/


var MealPlan = exports.MealPlan = function (_Resource32) {
  _inherits(MealPlan, _Resource32);

  function MealPlan() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlan);

    return _possibleConstructorReturn(this, (MealPlan.__proto__ || Object.getPrototypeOf(MealPlan)).call(this, id, 'meal-plans', attributes, one, many));
  }

  // attributes

  /** @param {string} brandColor **/


  _createClass(MealPlan, [{
    key: 'brandColor',
    set: function set(brandColor) {
      this._attributes['brand-color'] = brandColor;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['brand-color'];
    }
  }, {
    key: 'displayName',


    /** @param {string} displayName **/
    set: function set(displayName) {
      this._attributes['display-name'] = displayName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['display-name'];
    }
  }, {
    key: 'logoUrl',


    /** @param {string} logoUrl **/
    set: function set(logoUrl) {
      this._attributes['logo-url'] = logoUrl;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['logo-url'];
    }
  }, {
    key: 'vanityUrl',


    /** @param {string} vanityUrl **/
    set: function set(vanityUrl) {
      this._attributes['vanity-url'] = vanityUrl;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['vanity-url'];
    }
  }, {
    key: 'emailDomain',


    /** @param {string} emailDomain **/
    set: function set(emailDomain) {
      this._attributes['email-domain'] = emailDomain;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['email-domain'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {string} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'isDepartmentRequired',


    /** @param {string} isDepartmentRequired **/
    set: function set(isDepartmentRequired) {
      this._attributes['is-department-required'] = isDepartmentRequired;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-department-required'];
    }
  }, {
    key: 'password',


    /** @param {string} password **/
    set: function set(password) {
      this._attributes['password'] = password;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['password'];
    }
  }, {
    key: 'mealPlanUser',


    // relationships


    /** @param {User} mealPlanUser **/
    set: function set(mealPlanUser) {
      this._one['meal-plan-user'] = mealPlanUser;
    },

    /** @type {User} */
    get: function get() {
      return this._one['meal-plan-user'];
    }
  }, {
    key: 'client',


    /** @param {Client} client **/
    set: function set(client) {
      this._one['client'] = client;
    },

    /** @type {Client} */
    get: function get() {
      return this._one['client'];
    }
  }, {
    key: 'orders',


    /** @param {Order[]} orders **/
    set: function set(orders) {
      this._many['orders'] = orders;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['orders'];
    }
  }]);

  return MealPlan;
}(_resource2.default);

/** @class Menu
  * @extends {Resource}
  **/


var Menu = exports.Menu = function (_Resource33) {
  _inherits(Menu, _Resource33);

  function Menu() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, id, 'menus', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(Menu, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'active',


    /** @param {string} active **/
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'areaId',


    /** @param {string} areaId **/
    set: function set(areaId) {
      this._attributes['area-id'] = areaId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['area-id'];
    }
  }, {
    key: 'restaurantId',


    /** @param {string} restaurantId **/
    set: function set(restaurantId) {
      this._attributes['restaurant-id'] = restaurantId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-id'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'dietaryTagsCounts',


    /** @param {string} dietaryTagsCounts **/
    set: function set(dietaryTagsCounts) {
      this._attributes['dietary-tags-counts'] = dietaryTagsCounts;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['dietary-tags-counts'];
    }
  }, {
    key: 'setMenus',


    /** @param {string} setMenus **/
    set: function set(setMenus) {
      this._attributes['set-menus'] = setMenus;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['set-menus'];
    }
  }, {
    key: 'area',


    // relationships


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }, {
    key: 'restaurant',


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }, {
    key: 'menuGroups',


    /** @param {MenuGroup[]} menuGroups **/
    set: function set(menuGroups) {
      this._many['menu-groups'] = menuGroups;
    },

    /** @type {MenuGroup[]} */
    get: function get() {
      return this._many['menu-groups'];
    }
  }, {
    key: 'menuItems',


    /** @param {MenuItem[]} menuItems **/
    set: function set(menuItems) {
      this._many['menu-items'] = menuItems;
    },

    /** @type {MenuItem[]} */
    get: function get() {
      return this._many['menu-items'];
    }
  }, {
    key: 'dietaryTags',


    /** @param {DietaryTag[]} dietaryTags **/
    set: function set(dietaryTags) {
      this._many['dietary-tags'] = dietaryTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['dietary-tags'];
    }
  }, {
    key: 'orders',


    /** @param {Order[]} orders **/
    set: function set(orders) {
      this._many['orders'] = orders;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['orders'];
    }
  }]);

  return Menu;
}(_resource2.default);

/** @class MenuGroup
  * @extends {Resource}
  **/


var MenuGroup = exports.MenuGroup = function (_Resource34) {
  _inherits(MenuGroup, _Resource34);

  function MenuGroup() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MenuGroup);

    return _possibleConstructorReturn(this, (MenuGroup.__proto__ || Object.getPrototypeOf(MenuGroup)).call(this, id, 'menu-groups', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MenuGroup, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'active',


    /** @param {string} active **/
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'internal',


    /** @param {string} internal **/
    set: function set(internal) {
      this._attributes['internal'] = internal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['internal'];
    }
  }, {
    key: 'isCutlery',


    /** @param {string} isCutlery **/
    set: function set(isCutlery) {
      this._attributes['is-cutlery'] = isCutlery;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-cutlery'];
    }
  }, {
    key: 'description',


    /** @param {string} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'position',


    /** @param {string} position **/
    set: function set(position) {
      this._attributes['position'] = position;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['position'];
    }
  }, {
    key: 'minimumQuantity',


    /** @param {string} minimumQuantity **/
    set: function set(minimumQuantity) {
      this._attributes['minimum-quantity'] = minimumQuantity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['minimum-quantity'];
    }
  }, {
    key: 'maximumQuantity',


    /** @param {string} maximumQuantity **/
    set: function set(maximumQuantity) {
      this._attributes['maximum-quantity'] = maximumQuantity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['maximum-quantity'];
    }
  }, {
    key: 'clientPriceCents',


    /** @param {string} clientPriceCents **/
    set: function set(clientPriceCents) {
      this._attributes['client-price-cents'] = clientPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-price-cents'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'menu',


    // relationships


    /** @param {Menu} menu **/
    set: function set(menu) {
      this._one['menu'] = menu;
    },

    /** @type {Menu} */
    get: function get() {
      return this._one['menu'];
    }
  }, {
    key: 'menuItems',


    /** @param {MenuItem[]} menuItems **/
    set: function set(menuItems) {
      this._many['menu-items'] = menuItems;
    },

    /** @type {MenuItem[]} */
    get: function get() {
      return this._many['menu-items'];
    }
  }]);

  return MenuGroup;
}(_resource2.default);

/** @class MenuItem
  * @extends {Resource}
  **/


var MenuItem = exports.MenuItem = function (_Resource35) {
  _inherits(MenuItem, _Resource35);

  function MenuItem() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, id, 'menu-items', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MenuItem, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'active',


    /** @param {string} active **/
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'description',


    /** @param {string} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'internalDescription',


    /** @param {string} internalDescription **/
    set: function set(internalDescription) {
      this._attributes['internal-description'] = internalDescription;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['internal-description'];
    }
  }, {
    key: 'position',


    /** @param {string} position **/
    set: function set(position) {
      this._attributes['position'] = position;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['position'];
    }
  }, {
    key: 'minimumQuantity',


    /** @param {string} minimumQuantity **/
    set: function set(minimumQuantity) {
      this._attributes['minimum-quantity'] = minimumQuantity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['minimum-quantity'];
    }
  }, {
    key: 'maximumQuantity',


    /** @param {string} maximumQuantity **/
    set: function set(maximumQuantity) {
      this._attributes['maximum-quantity'] = maximumQuantity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['maximum-quantity'];
    }
  }, {
    key: 'clientPriceCents',


    /** @param {string} clientPriceCents **/
    set: function set(clientPriceCents) {
      this._attributes['client-price-cents'] = clientPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-price-cents'];
    }
  }, {
    key: 'restaurantPriceCents',


    /** @param {string} restaurantPriceCents **/
    set: function set(restaurantPriceCents) {
      this._attributes['restaurant-price-cents'] = restaurantPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-price-cents'];
    }
  }, {
    key: 'retailPriceCents',


    /** @param {string} retailPriceCents **/
    set: function set(retailPriceCents) {
      this._attributes['retail-price-cents'] = retailPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['retail-price-cents'];
    }
  }, {
    key: 'taxRateId',


    /** @param {string} taxRateId **/
    set: function set(taxRateId) {
      this._attributes['tax-rate-id'] = taxRateId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['tax-rate-id'];
    }
  }, {
    key: 'taxable',


    /** @param {string} taxable **/
    set: function set(taxable) {
      this._attributes['taxable'] = taxable;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['taxable'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'capacityUnits',


    /** @param {string} capacityUnits **/
    set: function set(capacityUnits) {
      this._attributes['capacity-units'] = capacityUnits;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['capacity-units'];
    }
  }, {
    key: 'taxRate',


    // relationships


    /** @param {InvoicingTaxRate} taxRate **/
    set: function set(taxRate) {
      this._one['tax-rate'] = taxRate;
    },

    /** @type {InvoicingTaxRate} */
    get: function get() {
      return this._one['tax-rate'];
    }
  }, {
    key: 'menuGroup',


    /** @param {MenuGroup} menuGroup **/
    set: function set(menuGroup) {
      this._one['menu-group'] = menuGroup;
    },

    /** @type {MenuGroup} */
    get: function get() {
      return this._one['menu-group'];
    }
  }, {
    key: 'dietaryTags',


    /** @param {DietaryTag[]} dietaryTags **/
    set: function set(dietaryTags) {
      this._many['dietary-tags'] = dietaryTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['dietary-tags'];
    }
  }, {
    key: 'menuOptionGroups',


    /** @param {MenuOptionGroup[]} menuOptionGroups **/
    set: function set(menuOptionGroups) {
      this._many['menu-option-groups'] = menuOptionGroups;
    },

    /** @type {MenuOptionGroup[]} */
    get: function get() {
      return this._many['menu-option-groups'];
    }
  }]);

  return MenuItem;
}(_resource2.default);

/** @class MenuOptionGroup
  * @extends {Resource}
  **/


var MenuOptionGroup = exports.MenuOptionGroup = function (_Resource36) {
  _inherits(MenuOptionGroup, _Resource36);

  function MenuOptionGroup() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MenuOptionGroup);

    return _possibleConstructorReturn(this, (MenuOptionGroup.__proto__ || Object.getPrototypeOf(MenuOptionGroup)).call(this, id, 'menu-option-groups', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MenuOptionGroup, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'verb',


    /** @param {string} verb **/
    set: function set(verb) {
      this._attributes['verb'] = verb;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['verb'];
    }
  }, {
    key: 'isRequired',


    /** @param {string} isRequired **/
    set: function set(isRequired) {
      this._attributes['is-required'] = isRequired;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-required'];
    }
  }, {
    key: 'isSingleOpt',


    /** @param {string} isSingleOpt **/
    set: function set(isSingleOpt) {
      this._attributes['is-single-opt'] = isSingleOpt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-single-opt'];
    }
  }, {
    key: 'menuItem',


    // relationships


    /** @param {MenuItem} menuItem **/
    set: function set(menuItem) {
      this._one['menu-item'] = menuItem;
    },

    /** @type {MenuItem} */
    get: function get() {
      return this._one['menu-item'];
    }
  }, {
    key: 'menuOptionItems',


    /** @param {MenuOptionItem[]} menuOptionItems **/
    set: function set(menuOptionItems) {
      this._many['menu-option-items'] = menuOptionItems;
    },

    /** @type {MenuOptionItem[]} */
    get: function get() {
      return this._many['menu-option-items'];
    }
  }]);

  return MenuOptionGroup;
}(_resource2.default);

/** @class MenuOptionItem
  * @extends {Resource}
  **/


var MenuOptionItem = exports.MenuOptionItem = function (_Resource37) {
  _inherits(MenuOptionItem, _Resource37);

  function MenuOptionItem() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MenuOptionItem);

    return _possibleConstructorReturn(this, (MenuOptionItem.__proto__ || Object.getPrototypeOf(MenuOptionItem)).call(this, id, 'menu-option-items', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MenuOptionItem, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'clientPriceCents',


    /** @param {string} clientPriceCents **/
    set: function set(clientPriceCents) {
      this._attributes['client-price-cents'] = clientPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-price-cents'];
    }
  }, {
    key: 'restaurantPriceCents',


    /** @param {string} restaurantPriceCents **/
    set: function set(restaurantPriceCents) {
      this._attributes['restaurant-price-cents'] = restaurantPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-price-cents'];
    }
  }, {
    key: 'retailPriceCents',


    /** @param {string} retailPriceCents **/
    set: function set(retailPriceCents) {
      this._attributes['retail-price-cents'] = retailPriceCents;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['retail-price-cents'];
    }
  }, {
    key: 'deletedAt',


    /** @param {string} deletedAt **/
    set: function set(deletedAt) {
      this._attributes['deleted-at'] = deletedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['deleted-at'];
    }
  }, {
    key: 'menuOptionGroup',


    // relationships


    /** @param {MenuOptionGroup} menuOptionGroup **/
    set: function set(menuOptionGroup) {
      this._one['menu-option-group'] = menuOptionGroup;
    },

    /** @type {MenuOptionGroup} */
    get: function get() {
      return this._one['menu-option-group'];
    }
  }, {
    key: 'dietaryTags',


    /** @param {DietaryTag[]} dietaryTags **/
    set: function set(dietaryTags) {
      this._many['dietary-tags'] = dietaryTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['dietary-tags'];
    }
  }, {
    key: 'orderItems',


    /** @param {OrderItem[]} orderItems **/
    set: function set(orderItems) {
      this._many['order-items'] = orderItems;
    },

    /** @type {OrderItem[]} */
    get: function get() {
      return this._many['order-items'];
    }
  }]);

  return MenuOptionItem;
}(_resource2.default);

/** @class Order
  * @extends {Resource}
  **/


var Order = exports.Order = function (_Resource38) {
  _inherits(Order, _Resource38);

  function Order() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Order);

    return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, id, 'orders', attributes, one, many));
  }

  // attributes

  /** @param {string} alertStatus **/


  _createClass(Order, [{
    key: 'alertStatus',
    set: function set(alertStatus) {
      this._attributes['alert-status'] = alertStatus;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['alert-status'];
    }
  }, {
    key: 'allowsPayOutOfPocket',


    /** @param {string} allowsPayOutOfPocket **/
    set: function set(allowsPayOutOfPocket) {
      this._attributes['allows-pay-out-of-pocket'] = allowsPayOutOfPocket;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['allows-pay-out-of-pocket'];
    }
  }, {
    key: 'bowtieServiceFee',


    /** @param {string} bowtieServiceFee **/
    set: function set(bowtieServiceFee) {
      this._attributes['bowtie-service-fee'] = bowtieServiceFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['bowtie-service-fee'];
    }
  }, {
    key: 'clientInvoicePdf',


    /** @param {string} clientInvoicePdf **/
    set: function set(clientInvoicePdf) {
      this._attributes['client-invoice-pdf'] = clientInvoicePdf;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-invoice-pdf'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'deadlineAt',


    /** @param {string} deadlineAt **/
    set: function set(deadlineAt) {
      this._attributes['deadline-at'] = deadlineAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['deadline-at'];
    }
  }, {
    key: 'deliverAt',


    /** @param {string} deliverAt **/
    set: function set(deliverAt) {
      this._attributes['deliver-at'] = deliverAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['deliver-at'];
    }
  }, {
    key: 'deliverOn',


    /** @param {string} deliverOn **/
    set: function set(deliverOn) {
      this._attributes['deliver-on'] = deliverOn;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['deliver-on'];
    }
  }, {
    key: 'deliveredAt',


    /** @param {string} deliveredAt **/
    set: function set(deliveredAt) {
      this._attributes['delivered-at'] = deliveredAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['delivered-at'];
    }
  }, {
    key: 'expiresAt',


    /** @param {string} expiresAt **/
    set: function set(expiresAt) {
      this._attributes['expires-at'] = expiresAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['expires-at'];
    }
  }, {
    key: 'flag',


    /** @param {string} flag **/
    set: function set(flag) {
      this._attributes['flag'] = flag;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['flag'];
    }
  }, {
    key: 'identifier',


    /** @param {string} identifier **/
    set: function set(identifier) {
      this._attributes['identifier'] = identifier;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['identifier'];
    }
  }, {
    key: 'ignoresCapacityLimit',


    /** @param {string} ignoresCapacityLimit **/
    set: function set(ignoresCapacityLimit) {
      this._attributes['ignores-capacity-limit'] = ignoresCapacityLimit;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['ignores-capacity-limit'];
    }
  }, {
    key: 'isAtMaxCapacity',


    /** @param {string} isAtMaxCapacity **/
    set: function set(isAtMaxCapacity) {
      this._attributes['is-at-max-capacity'] = isAtMaxCapacity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-at-max-capacity'];
    }
  }, {
    key: 'isFoodhall',


    /** @param {string} isFoodhall **/
    set: function set(isFoodhall) {
      this._attributes['is-foodhall'] = isFoodhall;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-foodhall'];
    }
  }, {
    key: 'isGroupOrder',


    /** @param {string} isGroupOrder **/
    set: function set(isGroupOrder) {
      this._attributes['is-group-order'] = isGroupOrder;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-group-order'];
    }
  }, {
    key: 'isSameDay',


    /** @param {string} isSameDay **/
    set: function set(isSameDay) {
      this._attributes['is-same-day'] = isSameDay;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-same-day'];
    }
  }, {
    key: 'lastMinute',


    /** @param {string} lastMinute **/
    set: function set(lastMinute) {
      this._attributes['last-minute'] = lastMinute;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-minute'];
    }
  }, {
    key: 'maxNumberOfPeople',


    /** @param {string} maxNumberOfPeople **/
    set: function set(maxNumberOfPeople) {
      this._attributes['max-number-of-people'] = maxNumberOfPeople;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-number-of-people'];
    }
  }, {
    key: 'name',


    /** @param {string} name **/
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'clientNotes',


    /** @param {string} clientNotes **/
    set: function set(clientNotes) {
      this._attributes['client-notes'] = clientNotes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-notes'];
    }
  }, {
    key: 'courierNotes',


    /** @param {string} courierNotes **/
    set: function set(courierNotes) {
      this._attributes['courier-notes'] = courierNotes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['courier-notes'];
    }
  }, {
    key: 'monitoringNotes',


    /** @param {string} monitoringNotes **/
    set: function set(monitoringNotes) {
      this._attributes['monitoring-notes'] = monitoringNotes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['monitoring-notes'];
    }
  }, {
    key: 'notes',


    /** @param {string} notes **/
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notes'];
    }
  }, {
    key: 'numberOfPeople',


    /** @param {string} numberOfPeople **/
    set: function set(numberOfPeople) {
      this._attributes['number-of-people'] = numberOfPeople;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['number-of-people'];
    }
  }, {
    key: 'orderSoldOut',


    /** @param {string} orderSoldOut **/
    set: function set(orderSoldOut) {
      this._attributes['order-sold-out'] = orderSoldOut;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-sold-out'];
    }
  }, {
    key: 'payOutOfPocketFee',


    /** @param {string} payOutOfPocketFee **/
    set: function set(payOutOfPocketFee) {
      this._attributes['pay-out-of-pocket-fee'] = payOutOfPocketFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['pay-out-of-pocket-fee'];
    }
  }, {
    key: 'perPersonBudget',


    /** @param {string} perPersonBudget **/
    set: function set(perPersonBudget) {
      this._attributes['per-person-budget'] = perPersonBudget;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['per-person-budget'];
    }
  }, {
    key: 'pickedUpAt',


    /** @param {string} pickedUpAt **/
    set: function set(pickedUpAt) {
      this._attributes['picked-up-at'] = pickedUpAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['picked-up-at'];
    }
  }, {
    key: 'pickupAt',


    /** @param {string} pickupAt **/
    set: function set(pickupAt) {
      this._attributes['pickup-at'] = pickupAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['pickup-at'];
    }
  }, {
    key: 'setMenu',


    /** @param {string} setMenu **/
    set: function set(setMenu) {
      this._attributes['set-menu'] = setMenu;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['set-menu'];
    }
  }, {
    key: 'skipDeliveryFee',


    /** @param {string} skipDeliveryFee **/
    set: function set(skipDeliveryFee) {
      this._attributes['skip-delivery-fee'] = skipDeliveryFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['skip-delivery-fee'];
    }
  }, {
    key: 'stateEvent',


    /** @param {string} stateEvent **/
    set: function set(stateEvent) {
      this._attributes['state-event'] = stateEvent;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['state-event'];
    }
  }, {
    key: 'state',


    /** @param {string} state **/
    set: function set(state) {
      this._attributes['state'] = state;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['state'];
    }
  }, {
    key: 'totalAmount',


    /** @param {string} totalAmount **/
    set: function set(totalAmount) {
      this._attributes['total-amount'] = totalAmount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['total-amount'];
    }
  }, {
    key: 'restaurantTotalAmount',


    /** @param {string} restaurantTotalAmount **/
    set: function set(restaurantTotalAmount) {
      this._attributes['restaurant-total-amount'] = restaurantTotalAmount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-total-amount'];
    }
  }, {
    key: 'updatedAt',


    /** @param {string} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'clientLocationId',


    /** @param {string} clientLocationId **/
    set: function set(clientLocationId) {
      this._attributes['client-location-id'] = clientLocationId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-location-id'];
    }
  }, {
    key: 'restaurantPollDeadlineAt',


    /** @param {string} restaurantPollDeadlineAt **/
    set: function set(restaurantPollDeadlineAt) {
      this._attributes['restaurant-poll-deadline-at'] = restaurantPollDeadlineAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-poll-deadline-at'];
    }
  }, {
    key: 'hasActivePoll',


    /** @param {string} hasActivePoll **/
    set: function set(hasActivePoll) {
      this._attributes['has-active-poll'] = hasActivePoll;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['has-active-poll'];
    }
  }, {
    key: 'isAutosave',


    /** @param {string} isAutosave **/
    set: function set(isAutosave) {
      this._attributes['is-autosave'] = isAutosave;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-autosave'];
    }
  }, {
    key: 'largeOrder',


    /** @param {string} largeOrder **/
    set: function set(largeOrder) {
      this._attributes['large-order'] = largeOrder;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['large-order'];
    }
  }, {
    key: 'outsideHours',


    /** @param {string} outsideHours **/
    set: function set(outsideHours) {
      this._attributes['outside-hours'] = outsideHours;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['outside-hours'];
    }
  }, {
    key: 'outOfZone',


    /** @param {string} outOfZone **/
    set: function set(outOfZone) {
      this._attributes['out-of-zone'] = outOfZone;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['out-of-zone'];
    }
  }, {
    key: 'isMealPlanOrder',


    /** @param {string} isMealPlanOrder **/
    set: function set(isMealPlanOrder) {
      this._attributes['is-meal-plan-order'] = isMealPlanOrder;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-meal-plan-order'];
    }
  }, {
    key: 'ordersInTranche',


    /** @param {string} ordersInTranche **/
    set: function set(ordersInTranche) {
      this._attributes['orders-in-tranche'] = ordersInTranche;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['orders-in-tranche'];
    }
  }, {
    key: 'tranche',


    /** @param {string} tranche **/
    set: function set(tranche) {
      this._attributes['tranche'] = tranche;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['tranche'];
    }
  }, {
    key: 'clientConfirmationId',


    /** @param {string} clientConfirmationId **/
    set: function set(clientConfirmationId) {
      this._attributes['client-confirmation-id'] = clientConfirmationId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-confirmation-id'];
    }
  }, {
    key: 'restaurantConfirmationId',


    /** @param {string} restaurantConfirmationId **/
    set: function set(restaurantConfirmationId) {
      this._attributes['restaurant-confirmation-id'] = restaurantConfirmationId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-confirmation-id'];
    }
  }, {
    key: 'isBookmark',


    /** @param {string} isBookmark **/
    set: function set(isBookmark) {
      this._attributes['is-bookmark'] = isBookmark;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-bookmark'];
    }
  }, {
    key: 'bookmarkExpiresAt',


    /** @param {string} bookmarkExpiresAt **/
    set: function set(bookmarkExpiresAt) {
      this._attributes['bookmark-expires-at'] = bookmarkExpiresAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['bookmark-expires-at'];
    }
  }, {
    key: 'bookmarkName',


    /** @param {string} bookmarkName **/
    set: function set(bookmarkName) {
      this._attributes['bookmark-name'] = bookmarkName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['bookmark-name'];
    }
  }, {
    key: 'urlSafeId',


    /** @param {string} urlSafeId **/
    set: function set(urlSafeId) {
      this._attributes['url-safe-id'] = urlSafeId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['url-safe-id'];
    }
  }, {
    key: 'uuid',


    /** @param {string} uuid **/
    set: function set(uuid) {
      this._attributes['uuid'] = uuid;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['uuid'];
    }
  }, {
    key: 'online',


    /** @param {string} online **/
    set: function set(online) {
      this._attributes['online'] = online;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online'];
    }
  }, {
    key: 'area',


    // relationships


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }, {
    key: 'owner',


    /** @param {User} owner **/
    set: function set(owner) {
      this._one['owner'] = owner;
    },

    /** @type {User} */
    get: function get() {
      return this._one['owner'];
    }
  }, {
    key: 'creator',


    /** @param {User} creator **/
    set: function set(creator) {
      this._one['creator'] = creator;
    },

    /** @type {User} */
    get: function get() {
      return this._one['creator'];
    }
  }, {
    key: 'paymentCard',


    /** @param {PaymentCard} paymentCard **/
    set: function set(paymentCard) {
      this._one['payment-card'] = paymentCard;
    },

    /** @type {PaymentCard} */
    get: function get() {
      return this._one['payment-card'];
    }
  }, {
    key: 'contact',


    /** @param {Contact} contact **/
    set: function set(contact) {
      this._one['contact'] = contact;
    },

    /** @type {Contact} */
    get: function get() {
      return this._one['contact'];
    }
  }, {
    key: 'client',


    /** @param {Client} client **/
    set: function set(client) {
      this._one['client'] = client;
    },

    /** @type {Client} */
    get: function get() {
      return this._one['client'];
    }
  }, {
    key: 'restaurant',


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }, {
    key: 'courier',


    /** @param {Courier} courier **/
    set: function set(courier) {
      this._one['courier'] = courier;
    },

    /** @type {Courier} */
    get: function get() {
      return this._one['courier'];
    }
  }, {
    key: 'promoCode',


    /** @param {PromoCode} promoCode **/
    set: function set(promoCode) {
      this._one['promo-code'] = promoCode;
    },

    /** @type {PromoCode} */
    get: function get() {
      return this._one['promo-code'];
    }
  }, {
    key: 'driver',


    /** @param {User} driver **/
    set: function set(driver) {
      this._one['driver'] = driver;
    },

    /** @type {User} */
    get: function get() {
      return this._one['driver'];
    }
  }, {
    key: 'salesSupport',


    /** @param {User} salesSupport **/
    set: function set(salesSupport) {
      this._one['sales-support'] = salesSupport;
    },

    /** @type {User} */
    get: function get() {
      return this._one['sales-support'];
    }
  }, {
    key: 'restaurantLocation',


    /** @param {Location} restaurantLocation **/
    set: function set(restaurantLocation) {
      this._one['restaurant-location'] = restaurantLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['restaurant-location'];
    }
  }, {
    key: 'clientLocation',


    /** @param {Location} clientLocation **/
    set: function set(clientLocation) {
      this._one['client-location'] = clientLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['client-location'];
    }
  }, {
    key: 'clientDiscount',


    /** @param {ClientDiscount} clientDiscount **/
    set: function set(clientDiscount) {
      this._one['client-discount'] = clientDiscount;
    },

    /** @type {ClientDiscount} */
    get: function get() {
      return this._one['client-discount'];
    }
  }, {
    key: 'restaurantDiscount',


    /** @param {RestaurantDiscount} restaurantDiscount **/
    set: function set(restaurantDiscount) {
      this._one['restaurant-discount'] = restaurantDiscount;
    },

    /** @type {RestaurantDiscount} */
    get: function get() {
      return this._one['restaurant-discount'];
    }
  }, {
    key: 'menu',


    /** @param {Menu} menu **/
    set: function set(menu) {
      this._one['menu'] = menu;
    },

    /** @type {Menu} */
    get: function get() {
      return this._one['menu'];
    }
  }, {
    key: 'customLocation',


    /** @param {Location} customLocation **/
    set: function set(customLocation) {
      this._one['custom-location'] = customLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['custom-location'];
    }
  }, {
    key: 'giftbitError',


    /** @param {GiftbitError} giftbitError **/
    set: function set(giftbitError) {
      this._one['giftbit-error'] = giftbitError;
    },

    /** @type {GiftbitError} */
    get: function get() {
      return this._one['giftbit-error'];
    }
  }, {
    key: 'clientOrderInvoice',


    /** @param {ClientOrderInvoice} clientOrderInvoice **/
    set: function set(clientOrderInvoice) {
      this._one['client-order-invoice'] = clientOrderInvoice;
    },

    /** @type {ClientOrderInvoice} */
    get: function get() {
      return this._one['client-order-invoice'];
    }
  }, {
    key: 'restaurantOrderInvoice',


    /** @param {RestaurantOrderInvoice} restaurantOrderInvoice **/
    set: function set(restaurantOrderInvoice) {
      this._one['restaurant-order-invoice'] = restaurantOrderInvoice;
    },

    /** @type {RestaurantOrderInvoice} */
    get: function get() {
      return this._one['restaurant-order-invoice'];
    }
  }, {
    key: 'emailMessages',


    /** @param {EmailMessage[]} emailMessages **/
    set: function set(emailMessages) {
      this._many['email-messages'] = emailMessages;
    },

    /** @type {EmailMessage[]} */
    get: function get() {
      return this._many['email-messages'];
    }
  }, {
    key: 'deliveryCases',


    /** @param {DeliveryCase[]} deliveryCases **/
    set: function set(deliveryCases) {
      this._many['delivery-cases'] = deliveryCases;
    },

    /** @type {DeliveryCase[]} */
    get: function get() {
      return this._many['delivery-cases'];
    }
  }, {
    key: 'deskCases',


    /** @param {DeskCase[]} deskCases **/
    set: function set(deskCases) {
      this._many['desk-cases'] = deskCases;
    },

    /** @type {DeskCase[]} */
    get: function get() {
      return this._many['desk-cases'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }, {
    key: 'pollableRestaurants',


    /** @param {Restaurant[]} pollableRestaurants **/
    set: function set(pollableRestaurants) {
      this._many['pollable-restaurants'] = pollableRestaurants;
    },

    /** @type {Restaurant[]} */
    get: function get() {
      return this._many['pollable-restaurants'];
    }
  }, {
    key: 'restaurantVotes',


    /** @param {RestaurantVote[]} restaurantVotes **/
    set: function set(restaurantVotes) {
      this._many['restaurant-votes'] = restaurantVotes;
    },

    /** @type {RestaurantVote[]} */
    get: function get() {
      return this._many['restaurant-votes'];
    }
  }, {
    key: 'groupOrderMembers',


    /** @param {GroupOrderMember[]} groupOrderMembers **/
    set: function set(groupOrderMembers) {
      this._many['group-order-members'] = groupOrderMembers;
    },

    /** @type {GroupOrderMember[]} */
    get: function get() {
      return this._many['group-order-members'];
    }
  }, {
    key: 'orderItems',


    /** @param {OrderItem[]} orderItems **/
    set: function set(orderItems) {
      this._many['order-items'] = orderItems;
    },

    /** @type {OrderItem[]} */
    get: function get() {
      return this._many['order-items'];
    }
  }]);

  return Order;
}(_resource2.default);

/** @class OrderItem
  * @extends {Resource}
  **/


var OrderItem = exports.OrderItem = function (_Resource39) {
  _inherits(OrderItem, _Resource39);

  function OrderItem() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, OrderItem);

    return _possibleConstructorReturn(this, (OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call(this, id, 'order-items', attributes, one, many));
  }

  // attributes

  /** @param {number} quantity **/


  _createClass(OrderItem, [{
    key: 'quantity',
    set: function set(quantity) {
      this._attributes['quantity'] = quantity;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['quantity'];
    }
  }, {
    key: 'notes',


    /** @param {number} notes **/
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['notes'];
    }
  }, {
    key: 'clientPriceCents',


    /** @param {number} clientPriceCents **/
    set: function set(clientPriceCents) {
      this._attributes['client-price-cents'] = clientPriceCents;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['client-price-cents'];
    }
  }, {
    key: 'restaurantPriceCents',


    /** @param {number} restaurantPriceCents **/
    set: function set(restaurantPriceCents) {
      this._attributes['restaurant-price-cents'] = restaurantPriceCents;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['restaurant-price-cents'];
    }
  }, {
    key: 'custom',


    /** @param {number} custom **/
    set: function set(custom) {
      this._attributes['custom'] = custom;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['custom'];
    }
  }, {
    key: 'taxable',


    /** @param {number} taxable **/
    set: function set(taxable) {
      this._attributes['taxable'] = taxable;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['taxable'];
    }
  }, {
    key: 'overridePrices',


    /** @param {number} overridePrices **/
    set: function set(overridePrices) {
      this._attributes['override-prices'] = overridePrices;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['override-prices'];
    }
  }, {
    key: 'capacityUnits',


    /** @param {number} capacityUnits **/
    set: function set(capacityUnits) {
      this._attributes['capacity-units'] = capacityUnits;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['capacity-units'];
    }
  }, {
    key: 'order',


    // relationships


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }, {
    key: 'menuItem',


    /** @param {MenuItem} menuItem **/
    set: function set(menuItem) {
      this._one['menu-item'] = menuItem;
    },

    /** @type {MenuItem} */
    get: function get() {
      return this._one['menu-item'];
    }
  }, {
    key: 'groupOrderMember',


    /** @param {GroupOrderMember} groupOrderMember **/
    set: function set(groupOrderMember) {
      this._one['group-order-member'] = groupOrderMember;
    },

    /** @type {GroupOrderMember} */
    get: function get() {
      return this._one['group-order-member'];
    }
  }, {
    key: 'menuOptionItems',


    /** @param {MenuOptionItem[]} menuOptionItems **/
    set: function set(menuOptionItems) {
      this._many['menu-option-items'] = menuOptionItems;
    },

    /** @type {MenuOptionItem[]} */
    get: function get() {
      return this._many['menu-option-items'];
    }
  }]);

  return OrderItem;
}(_resource2.default);

/** @class PaymentAccount
  * @extends {Resource}
  **/


var PaymentAccount = exports.PaymentAccount = function (_Resource40) {
  _inherits(PaymentAccount, _Resource40);

  function PaymentAccount() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PaymentAccount);

    return _possibleConstructorReturn(this, (PaymentAccount.__proto__ || Object.getPrototypeOf(PaymentAccount)).call(this, id, 'payment-accounts', attributes, one, many));
  }

  // attributes


  // relationships


  return PaymentAccount;
}(_resource2.default);

/** @class PaymentCard
  * @extends {Resource}
  **/


var PaymentCard = exports.PaymentCard = function (_Resource41) {
  _inherits(PaymentCard, _Resource41);

  function PaymentCard() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PaymentCard);

    return _possibleConstructorReturn(this, (PaymentCard.__proto__ || Object.getPrototypeOf(PaymentCard)).call(this, id, 'payment-cards', attributes, one, many));
  }

  // attributes

  /** @param {number} position **/


  _createClass(PaymentCard, [{
    key: 'position',
    set: function set(position) {
      this._attributes['position'] = position;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['position'];
    }
  }, {
    key: 'lastFourDigits',


    /** @param {number} lastFourDigits **/
    set: function set(lastFourDigits) {
      this._attributes['last-four-digits'] = lastFourDigits;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['last-four-digits'];
    }
  }, {
    key: 'expiryMonth',


    /** @param {number} expiryMonth **/
    set: function set(expiryMonth) {
      this._attributes['expiry-month'] = expiryMonth;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['expiry-month'];
    }
  }, {
    key: 'expiryYear',


    /** @param {number} expiryYear **/
    set: function set(expiryYear) {
      this._attributes['expiry-year'] = expiryYear;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['expiry-year'];
    }
  }, {
    key: 'cardType',


    /** @param {number} cardType **/
    set: function set(cardType) {
      this._attributes['card-type'] = cardType;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['card-type'];
    }
  }, {
    key: 'isDefault',


    /** @param {number} isDefault **/
    set: function set(isDefault) {
      this._attributes['default'] = isDefault;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['default'];
    }
  }, {
    key: 'removed',


    /** @param {number} removed **/
    set: function set(removed) {
      this._attributes['removed'] = removed;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['removed'];
    }
  }, {
    key: 'cardToken',


    /** @param {number} cardToken **/
    set: function set(cardToken) {
      this._attributes['card-token'] = cardToken;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['card-token'];
    }
  }, {
    key: 'nameOnCard',


    /** @param {number} nameOnCard **/
    set: function set(nameOnCard) {
      this._attributes['name-on-card'] = nameOnCard;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['name-on-card'];
    }
  }, {
    key: 'client',


    // relationships


    /** @param {Client} client **/
    set: function set(client) {
      this._one['client'] = client;
    },

    /** @type {Client} */
    get: function get() {
      return this._one['client'];
    }
  }, {
    key: 'user',


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }]);

  return PaymentCard;
}(_resource2.default);

/** @class PayrollRun
  * @extends {Resource}
  **/


var PayrollRun = exports.PayrollRun = function (_Resource42) {
  _inherits(PayrollRun, _Resource42);

  function PayrollRun() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PayrollRun);

    return _possibleConstructorReturn(this, (PayrollRun.__proto__ || Object.getPrototypeOf(PayrollRun)).call(this, id, 'payroll-runs', attributes, one, many));
  }

  // attributes

  /** @param {boolean} country **/


  _createClass(PayrollRun, [{
    key: 'country',
    set: function set(country) {
      this._attributes['country'] = country;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['country'];
    }
  }, {
    key: 'payrollPeriod',


    /** @param {string} payrollPeriod **/
    set: function set(payrollPeriod) {
      this._attributes['payroll-period'] = payrollPeriod;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['payroll-period'];
    }
  }, {
    key: 'paid',


    /** @param {boolean} paid **/
    set: function set(paid) {
      this._attributes['paid'] = paid;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['paid'];
    }
  }, {
    key: 'driverPayrollRun',


    // relationships


    /** @param {DriverPayrollRun[]} driverPayrollRun **/
    set: function set(driverPayrollRun) {
      this._many['driver-payroll-run'] = driverPayrollRun;
    },

    /** @type {DriverPayrollRun[]} */
    get: function get() {
      return this._many['driver-payroll-run'];
    }
  }]);

  return PayrollRun;
}(_resource2.default);

/** @class PickupLocation
  * @extends {Resource}
  **/


var PickupLocation = exports.PickupLocation = function (_Resource43) {
  _inherits(PickupLocation, _Resource43);

  function PickupLocation() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PickupLocation);

    return _possibleConstructorReturn(this, (PickupLocation.__proto__ || Object.getPrototypeOf(PickupLocation)).call(this, id, 'pickup-locations', attributes, one, many));
  }

  // attributes

  /** @param {any} name **/


  _createClass(PickupLocation, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'locationId',


    /** @param {number} locationId **/
    set: function set(locationId) {
      this._attributes['location-id'] = locationId;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['location-id'];
    }
  }, {
    key: 'latitude',


    /** @param {number} latitude **/
    set: function set(latitude) {
      this._attributes['latitude'] = latitude;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['latitude'];
    }
  }, {
    key: 'longitude',


    /** @param {number} longitude **/
    set: function set(longitude) {
      this._attributes['longitude'] = longitude;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['longitude'];
    }
  }, {
    key: 'buzzer',


    /** @param {number} buzzer **/
    set: function set(buzzer) {
      this._attributes['buzzer'] = buzzer;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['buzzer'];
    }
  }, {
    key: 'unitNumber',


    /** @param {number} unitNumber **/
    set: function set(unitNumber) {
      this._attributes['unit-number'] = unitNumber;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['unit-number'];
    }
  }, {
    key: 'floor',


    /** @param {number} floor **/
    set: function set(floor) {
      this._attributes['floor'] = floor;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['floor'];
    }
  }, {
    key: 'building',


    /** @param {number} building **/
    set: function set(building) {
      this._attributes['building'] = building;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['building'];
    }
  }, {
    key: 'street',


    /** @param {number} street **/
    set: function set(street) {
      this._attributes['street'] = street;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['street'];
    }
  }, {
    key: 'city',


    /** @param {number} city **/
    set: function set(city) {
      this._attributes['city'] = city;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['city'];
    }
  }, {
    key: 'province',


    /** @param {number} province **/
    set: function set(province) {
      this._attributes['province'] = province;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['province'];
    }
  }, {
    key: 'country',


    /** @param {number} country **/
    set: function set(country) {
      this._attributes['country'] = country;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['country'];
    }
  }, {
    key: 'addressCode',


    /** @param {number} addressCode **/
    set: function set(addressCode) {
      this._attributes['address-code'] = addressCode;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['address-code'];
    }
  }, {
    key: 'restaurant',


    // relationships


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }, {
    key: 'location',


    /** @param {Location} location **/
    set: function set(location) {
      this._one['location'] = location;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['location'];
    }
  }]);

  return PickupLocation;
}(_resource2.default);

/** @class PromoCode
  * @extends {Resource}
  **/


var PromoCode = exports.PromoCode = function (_Resource44) {
  _inherits(PromoCode, _Resource44);

  function PromoCode() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, PromoCode);

    return _possibleConstructorReturn(this, (PromoCode.__proto__ || Object.getPrototypeOf(PromoCode)).call(this, id, 'promo-codes', attributes, one, many));
  }

  // attributes

  /** @param {string} code **/


  _createClass(PromoCode, [{
    key: 'code',
    set: function set(code) {
      this._attributes['code'] = code;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['code'];
    }
  }, {
    key: 'description',


    /** @param {string} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'amount',


    /** @param {string} amount **/
    set: function set(amount) {
      this._attributes['amount'] = amount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['amount'];
    }
  }, {
    key: 'amountType',


    /** @param {string} amountType **/
    set: function set(amountType) {
      this._attributes['amount-type'] = amountType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['amount-type'];
    }
  }, {
    key: 'clientAccountingCode',


    /** @param {string} clientAccountingCode **/
    set: function set(clientAccountingCode) {
      this._attributes['client-accounting-code'] = clientAccountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['client-accounting-code'];
    }
  }, {
    key: 'restaurantAccountingCode',


    /** @param {string} restaurantAccountingCode **/
    set: function set(restaurantAccountingCode) {
      this._attributes['restaurant-accounting-code'] = restaurantAccountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-accounting-code'];
    }
  }, {
    key: 'startsAt',


    /** @param {string} startsAt **/
    set: function set(startsAt) {
      this._attributes['starts-at'] = startsAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['starts-at'];
    }
  }, {
    key: 'expiresAt',


    /** @param {string} expiresAt **/
    set: function set(expiresAt) {
      this._attributes['expires-at'] = expiresAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['expires-at'];
    }
  }, {
    key: 'internal',


    /** @param {string} internal **/
    set: function set(internal) {
      this._attributes['internal'] = internal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['internal'];
    }
  }, {
    key: 'removed',


    /** @param {string} removed **/
    set: function set(removed) {
      this._attributes['removed'] = removed;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['removed'];
    }
  }, {
    key: 'allowMultipleClientUses',


    /** @param {string} allowMultipleClientUses **/
    set: function set(allowMultipleClientUses) {
      this._attributes['allow-multiple-client-uses'] = allowMultipleClientUses;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['allow-multiple-client-uses'];
    }
  }, {
    key: 'area',


    // relationships


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }, {
    key: 'restaurant',


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }, {
    key: 'order',


    /** @param {Order[]} order **/
    set: function set(order) {
      this._many['order'] = order;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['order'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return PromoCode;
}(_resource2.default);

/** @class QualifyingQuestion
  * @extends {Resource}
  **/


var QualifyingQuestion = exports.QualifyingQuestion = function (_Resource45) {
  _inherits(QualifyingQuestion, _Resource45);

  function QualifyingQuestion() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, QualifyingQuestion);

    return _possibleConstructorReturn(this, (QualifyingQuestion.__proto__ || Object.getPrototypeOf(QualifyingQuestion)).call(this, id, 'qualifying-questions', attributes, one, many));
  }

  // attributes

  /** @param {string} contactPerson **/


  _createClass(QualifyingQuestion, [{
    key: 'contactPerson',
    set: function set(contactPerson) {
      this._attributes['contact-person'] = contactPerson;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['contact-person'];
    }
  }, {
    key: 'orderFrequency',


    /** @param {string} orderFrequency **/
    set: function set(orderFrequency) {
      this._attributes['order-frequency'] = orderFrequency;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-frequency'];
    }
  }, {
    key: 'orderSize',


    /** @param {string} orderSize **/
    set: function set(orderSize) {
      this._attributes['order-size'] = orderSize;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-size'];
    }
  }, {
    key: 'orderBudget',


    /** @param {string} orderBudget **/
    set: function set(orderBudget) {
      this._attributes['order-budget'] = orderBudget;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-budget'];
    }
  }]);

  return QualifyingQuestion;
}(_resource2.default);

/** @class Restaurant
  * @extends {Resource}
  **/
var Restaurant = exports.Restaurant = function (_Resource46) {
  _inherits(Restaurant, _Resource46);

  function Restaurant() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Restaurant);

    return _possibleConstructorReturn(this, (Restaurant.__proto__ || Object.getPrototypeOf(Restaurant)).call(this, id, 'restaurants', attributes, one, many));
  }

  // attributes

  /** @param {Date} createdAt **/


  _createClass(Restaurant, [{
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {Date} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'active',


    /** @param {Date} active **/
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'name',


    /** @param {Date} name **/
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'slug',


    /** @param {Date} slug **/
    set: function set(slug) {
      this._attributes['slug'] = slug;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['slug'];
    }
  }, {
    key: 'subtitle',


    /** @param {Date} subtitle **/
    set: function set(subtitle) {
      this._attributes['subtitle'] = subtitle;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['subtitle'];
    }
  }, {
    key: 'legalName',


    /** @param {Date} legalName **/
    set: function set(legalName) {
      this._attributes['legal-name'] = legalName;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['legal-name'];
    }
  }, {
    key: 'pickupNotes',


    /** @param {Date} pickupNotes **/
    set: function set(pickupNotes) {
      this._attributes['pickup-notes'] = pickupNotes;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['pickup-notes'];
    }
  }, {
    key: 'completionProgress',


    /** @param {Date} completionProgress **/
    set: function set(completionProgress) {
      this._attributes['completion-progress'] = completionProgress;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['completion-progress'];
    }
  }, {
    key: 'dietaryTagsCounts',


    /** @param {Date} dietaryTagsCounts **/
    set: function set(dietaryTagsCounts) {
      this._attributes['dietary-tags-counts'] = dietaryTagsCounts;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['dietary-tags-counts'];
    }
  }, {
    key: 'comingSoon',


    /** @param {Date} comingSoon **/
    set: function set(comingSoon) {
      this._attributes['coming-soon'] = comingSoon;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['coming-soon'];
    }
  }, {
    key: 'hoursInAdvance',


    /** @param {Date} hoursInAdvance **/
    set: function set(hoursInAdvance) {
      this._attributes['hours-in-advance'] = hoursInAdvance;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['hours-in-advance'];
    }
  }, {
    key: 'internal',


    /** @param {Date} internal **/
    set: function set(internal) {
      this._attributes['internal'] = internal;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['internal'];
    }
  }, {
    key: 'isNew',


    /** @param {Date} isNew **/
    set: function set(isNew) {
      this._attributes['is-new'] = isNew;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['is-new'];
    }
  }, {
    key: 'coverImageUrl',


    /** @param {Date} coverImageUrl **/
    set: function set(coverImageUrl) {
      this._attributes['cover-image-url'] = coverImageUrl;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['cover-image-url'];
    }
  }, {
    key: 'thumbnailImageUrl',


    /** @param {Date} thumbnailImageUrl **/
    set: function set(thumbnailImageUrl) {
      this._attributes['thumbnail-image-url'] = thumbnailImageUrl;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['thumbnail-image-url'];
    }
  }, {
    key: 'isPayingAdminFee',


    /** @param {Date} isPayingAdminFee **/
    set: function set(isPayingAdminFee) {
      this._attributes['is-paying-admin-fee'] = isPayingAdminFee;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['is-paying-admin-fee'];
    }
  }, {
    key: 'canGroupOrder',


    /** @param {Date} canGroupOrder **/
    set: function set(canGroupOrder) {
      this._attributes['can-group-order'] = canGroupOrder;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['can-group-order'];
    }
  }, {
    key: 'canSameDayOrder',


    /** @param {Date} canSameDayOrder **/
    set: function set(canSameDayOrder) {
      this._attributes['can-same-day-order'] = canSameDayOrder;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['can-same-day-order'];
    }
  }, {
    key: 'receivesDailyOrderSummary',


    /** @param {Date} receivesDailyOrderSummary **/
    set: function set(receivesDailyOrderSummary) {
      this._attributes['receives-daily-order-summary'] = receivesDailyOrderSummary;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['receives-daily-order-summary'];
    }
  }, {
    key: 'receivesSMS',


    /** @param {Date} receivesSMS **/
    set: function set(receivesSMS) {
      this._attributes['receives-sms'] = receivesSMS;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['receives-sms'];
    }
  }, {
    key: 'marketingTitle',


    /** @param {Date} marketingTitle **/
    set: function set(marketingTitle) {
      this._attributes['marketing-title'] = marketingTitle;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['marketing-title'];
    }
  }, {
    key: 'marketingDescription',


    /** @param {Date} marketingDescription **/
    set: function set(marketingDescription) {
      this._attributes['marketing-description'] = marketingDescription;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['marketing-description'];
    }
  }, {
    key: 'features',


    /** @param {Date} features **/
    set: function set(features) {
      this._attributes['features'] = features;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['features'];
    }
  }, {
    key: 'billingLocation',


    // relationships


    /** @param {Location} billingLocation **/
    set: function set(billingLocation) {
      this._one['billing-location'] = billingLocation;
    },

    /** @type {Location} */
    get: function get() {
      return this._one['billing-location'];
    }
  }, {
    key: 'billingContact',


    /** @param {Contact} billingContact **/
    set: function set(billingContact) {
      this._one['billing-contact'] = billingContact;
    },

    /** @type {Contact} */
    get: function get() {
      return this._one['billing-contact'];
    }
  }, {
    key: 'owner',


    /** @param {User} owner **/
    set: function set(owner) {
      this._one['owner'] = owner;
    },

    /** @type {User} */
    get: function get() {
      return this._one['owner'];
    }
  }, {
    key: 'orders',


    /** @param {Order[]} orders **/
    set: function set(orders) {
      this._many['orders'] = orders;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['orders'];
    }
  }, {
    key: 'restaurantCapacityTranches',


    /** @param {RestaurantCapacityTranche[]} restaurantCapacityTranches **/
    set: function set(restaurantCapacityTranches) {
      this._many['restaurant-capacity-tranches'] = restaurantCapacityTranches;
    },

    /** @type {RestaurantCapacityTranche[]} */
    get: function get() {
      return this._many['restaurant-capacity-tranches'];
    }
  }, {
    key: 'serviceTimes',


    /** @param {ServiceTime[]} serviceTimes **/
    set: function set(serviceTimes) {
      this._many['service-times'] = serviceTimes;
    },

    /** @type {ServiceTime[]} */
    get: function get() {
      return this._many['service-times'];
    }
  }, {
    key: 'pickupLocations',


    /** @param {PickupLocation[]} pickupLocations **/
    set: function set(pickupLocations) {
      this._many['pickup-locations'] = pickupLocations;
    },

    /** @type {PickupLocation[]} */
    get: function get() {
      return this._many['pickup-locations'];
    }
  }, {
    key: 'admins',


    /** @param {User[]} admins **/
    set: function set(admins) {
      this._many['admins'] = admins;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['admins'];
    }
  }, {
    key: 'adminContacts',


    /** @param {Contact[]} adminContacts **/
    set: function set(adminContacts) {
      this._many['admin-contacts'] = adminContacts;
    },

    /** @type {Contact[]} */
    get: function get() {
      return this._many['admin-contacts'];
    }
  }, {
    key: 'dietaryTags',


    /** @param {DietaryTag[]} dietaryTags **/
    set: function set(dietaryTags) {
      this._many['dietary-tags'] = dietaryTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['dietary-tags'];
    }
  }, {
    key: 'tags',


    /** @param {Tag[]} tags **/
    set: function set(tags) {
      this._many['tags'] = tags;
    },

    /** @type {Tag[]} */
    get: function get() {
      return this._many['tags'];
    }
  }, {
    key: 'areas',


    /** @param {Area[]} areas **/
    set: function set(areas) {
      this._many['areas'] = areas;
    },

    /** @type {Area[]} */
    get: function get() {
      return this._many['areas'];
    }
  }, {
    key: 'menus',


    /** @param {Menu[]} menus **/
    set: function set(menus) {
      this._many['menus'] = menus;
    },

    /** @type {Menu[]} */
    get: function get() {
      return this._many['menus'];
    }
  }, {
    key: 'restaurantVotes',


    /** @param {RestaurantVote[]} restaurantVotes **/
    set: function set(restaurantVotes) {
      this._many['restaurant-votes'] = restaurantVotes;
    },

    /** @type {RestaurantVote[]} */
    get: function get() {
      return this._many['restaurant-votes'];
    }
  }, {
    key: 'closures',


    /** @param {RestaurantClosure[]} closures **/
    set: function set(closures) {
      this._many['closures'] = closures;
    },

    /** @type {RestaurantClosure[]} */
    get: function get() {
      return this._many['closures'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }, {
    key: 'promoCodes',


    /** @param {PromoCode[]} promoCodes **/
    set: function set(promoCodes) {
      this._many['promo-codes'] = promoCodes;
    },

    /** @type {PromoCode[]} */
    get: function get() {
      return this._many['promo-codes'];
    }
  }]);

  return Restaurant;
}(_resource2.default);

/** @class RestaurantCapacityTranche
  * @extends {Resource}
  **/


var RestaurantCapacityTranche = exports.RestaurantCapacityTranche = function (_Resource47) {
  _inherits(RestaurantCapacityTranche, _Resource47);

  function RestaurantCapacityTranche() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantCapacityTranche);

    return _possibleConstructorReturn(this, (RestaurantCapacityTranche.__proto__ || Object.getPrototypeOf(RestaurantCapacityTranche)).call(this, id, 'restaurant-capacity-tranches', attributes, one, many));
  }

  // attributes

  /** @param {*} startTime **/


  _createClass(RestaurantCapacityTranche, [{
    key: 'startTime',
    set: function set(startTime) {
      this._attributes['start-time'] = startTime;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['start-time'];
    }
  }, {
    key: 'endTime',


    /** @param {*} endTime **/
    set: function set(endTime) {
      this._attributes['end-time'] = endTime;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['end-time'];
    }
  }, {
    key: 'capacity',


    /** @param {*} capacity **/
    set: function set(capacity) {
      this._attributes['capacity'] = capacity;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['capacity'];
    }
  }, {
    key: 'restaurant',


    // relationships


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }]);

  return RestaurantCapacityTranche;
}(_resource2.default);

/** @class RestaurantClosure
  * @extends {Resource}
  **/


var RestaurantClosure = exports.RestaurantClosure = function (_Resource48) {
  _inherits(RestaurantClosure, _Resource48);

  function RestaurantClosure() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantClosure);

    return _possibleConstructorReturn(this, (RestaurantClosure.__proto__ || Object.getPrototypeOf(RestaurantClosure)).call(this, id, 'restaurant-closures', attributes, one, many));
  }

  // attributes

  /** @param {date} date **/


  _createClass(RestaurantClosure, [{
    key: 'date',
    set: function set(date) {
      this._attributes['date'] = date;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['date'];
    }
  }, {
    key: 'createdAt',


    /** @param {date} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {date} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }, {
    key: 'restaurant',


    // relationships


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }]);

  return RestaurantClosure;
}(_resource2.default);

/** @class RestaurantDiscount
  * @extends {Resource}
  **/


var RestaurantDiscount = exports.RestaurantDiscount = function (_Resource49) {
  _inherits(RestaurantDiscount, _Resource49);

  function RestaurantDiscount() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantDiscount);

    return _possibleConstructorReturn(this, (RestaurantDiscount.__proto__ || Object.getPrototypeOf(RestaurantDiscount)).call(this, id, 'restaurant-discounts', attributes, one, many));
  }

  // attributes

  /** @param {string} accountingCode **/


  _createClass(RestaurantDiscount, [{
    key: 'accountingCode',
    set: function set(accountingCode) {
      this._attributes['accounting-code'] = accountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['accounting-code'];
    }
  }, {
    key: 'amount',


    /** @param {string} amount **/
    set: function set(amount) {
      this._attributes['amount'] = amount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['amount'];
    }
  }, {
    key: 'amountType',


    /** @param {string} amountType **/
    set: function set(amountType) {
      this._attributes['amount-type'] = amountType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['amount-type'];
    }
  }, {
    key: 'caseId',


    /** @param {string} caseId **/
    set: function set(caseId) {
      this._attributes['case-id'] = caseId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['case-id'];
    }
  }, {
    key: 'description',


    /** @param {string} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'order',


    // relationships


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }]);

  return RestaurantDiscount;
}(_resource2.default);

/** @class RestaurantOrderInvoice
  * @extends {Resource}
  **/


var RestaurantOrderInvoice = exports.RestaurantOrderInvoice = function (_Resource50) {
  _inherits(RestaurantOrderInvoice, _Resource50);

  function RestaurantOrderInvoice() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantOrderInvoice);

    return _possibleConstructorReturn(this, (RestaurantOrderInvoice.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoice)).call(this, id, 'restaurant-order-invoices', attributes, one, many));
  }

  // attributes

  /** @param {any} summary **/


  _createClass(RestaurantOrderInvoice, [{
    key: 'summary',
    set: function set(summary) {
      this._attributes['summary'] = summary;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['summary'];
    }
  }]);

  return RestaurantOrderInvoice;
}(_resource2.default);

/** @class RestaurantVote
  * @extends {Resource}
  **/
var RestaurantVote = exports.RestaurantVote = function (_Resource51) {
  _inherits(RestaurantVote, _Resource51);

  function RestaurantVote() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantVote);

    return _possibleConstructorReturn(this, (RestaurantVote.__proto__ || Object.getPrototypeOf(RestaurantVote)).call(this, id, 'restaurant-votes', attributes, one, many));
  }

  // attributes

  /** @param {string} email **/


  _createClass(RestaurantVote, [{
    key: 'email',
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['email'];
    }
  }, {
    key: 'order',


    // relationships


    /** @param {Order} order **/
    set: function set(order) {
      this._one['order'] = order;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order'];
    }
  }, {
    key: 'restaurant',


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }]);

  return RestaurantVote;
}(_resource2.default);

/** @class Role
  * @extends {Resource}
  **/


var Role = exports.Role = function (_Resource52) {
  _inherits(Role, _Resource52);

  function Role() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Role);

    return _possibleConstructorReturn(this, (Role.__proto__ || Object.getPrototypeOf(Role)).call(this, id, 'roles', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(Role, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'user',


    // relationships


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }]);

  return Role;
}(_resource2.default);

/** @class SalesforceSyncError
  * @extends {Resource}
  **/


var SalesforceSyncError = exports.SalesforceSyncError = function (_Resource53) {
  _inherits(SalesforceSyncError, _Resource53);

  function SalesforceSyncError() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, SalesforceSyncError);

    return _possibleConstructorReturn(this, (SalesforceSyncError.__proto__ || Object.getPrototypeOf(SalesforceSyncError)).call(this, id, 'salesforce-sync-errors', attributes, one, many));
  }

  // attributes

  /** @param {string} log **/


  _createClass(SalesforceSyncError, [{
    key: 'log',
    set: function set(log) {
      this._attributes['log'] = log;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['log'];
    }
  }, {
    key: 'recordId',


    /** @param {string} recordId **/
    set: function set(recordId) {
      this._attributes['record-id'] = recordId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['record-id'];
    }
  }, {
    key: 'recordType',


    /** @param {string} recordType **/
    set: function set(recordType) {
      this._attributes['record-type'] = recordType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['record-type'];
    }
  }, {
    key: 'isResolved',


    /** @param {string} isResolved **/
    set: function set(isResolved) {
      this._attributes['is-resolved'] = isResolved;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-resolved'];
    }
  }, {
    key: 'createdAt',


    /** @param {string} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {string} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }]);

  return SalesforceSyncError;
}(_resource2.default);

/** @class ServiceTime
  * @extends {Resource}
  **/
var ServiceTime = exports.ServiceTime = function (_Resource54) {
  _inherits(ServiceTime, _Resource54);

  function ServiceTime() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ServiceTime);

    return _possibleConstructorReturn(this, (ServiceTime.__proto__ || Object.getPrototypeOf(ServiceTime)).call(this, id, 'service-times', attributes, one, many));
  }

  // attributes

  /** @param {number} weekday **/


  _createClass(ServiceTime, [{
    key: 'weekday',
    set: function set(weekday) {
      this._attributes['weekday'] = weekday;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['weekday'];
    }
  }, {
    key: 'weekdayLetter',


    /** @param {number} weekdayLetter **/
    set: function set(weekdayLetter) {
      this._attributes['weekday-letter'] = weekdayLetter;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['weekday-letter'];
    }
  }, {
    key: 'weekdayName',


    /** @param {number} weekdayName **/
    set: function set(weekdayName) {
      this._attributes['weekday-name'] = weekdayName;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['weekday-name'];
    }
  }, {
    key: 'deliveryStartTime',


    /** @param {*} deliveryStartTime **/
    set: function set(deliveryStartTime) {
      this._attributes['delivery-start-time'] = deliveryStartTime;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['delivery-start-time'];
    }
  }, {
    key: 'deliveryEndTime',


    /** @param {*} deliveryEndTime **/
    set: function set(deliveryEndTime) {
      this._attributes['delivery-end-time'] = deliveryEndTime;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['delivery-end-time'];
    }
  }, {
    key: 'pickupStartTime',


    /** @param {*} pickupStartTime **/
    set: function set(pickupStartTime) {
      this._attributes['pickup-start-time'] = pickupStartTime;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['pickup-start-time'];
    }
  }, {
    key: 'pickupEndTime',


    /** @param {*} pickupEndTime **/
    set: function set(pickupEndTime) {
      this._attributes['pickup-end-time'] = pickupEndTime;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['pickup-end-time'];
    }
  }, {
    key: 'restaurant',


    // relationships


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }]);

  return ServiceTime;
}(_resource2.default);

/** @class Tag
  * @extends {Resource}
  **/


var Tag = exports.Tag = function (_Resource55) {
  _inherits(Tag, _Resource55);

  function Tag() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, id, 'tags', attributes, one, many));
  }

  // attributes

  /** @param {string} emoji **/


  _createClass(Tag, [{
    key: 'emoji',
    set: function set(emoji) {
      this._attributes['emoji'] = emoji;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['emoji'];
    }
  }, {
    key: 'name',


    /** @param {string} name **/
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'tagType',


    /** @param {string} tagType **/
    set: function set(tagType) {
      this._attributes['tag-type'] = tagType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['tag-type'];
    }
  }]);

  return Tag;
}(_resource2.default);

/** @class Team
  * @extends {Resource}
  **/
var Team = exports.Team = function (_Resource56) {
  _inherits(Team, _Resource56);

  function Team() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Team);

    return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, id, 'teams', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(Team, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'accountingCode',


    /** @param {string} accountingCode **/
    set: function set(accountingCode) {
      this._attributes['accounting-code'] = accountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['accounting-code'];
    }
  }, {
    key: 'isActive',


    /** @param {string} isActive **/
    set: function set(isActive) {
      this._attributes['is-active'] = isActive;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-active'];
    }
  }, {
    key: 'isDefault',


    /** @param {string} isDefault **/
    set: function set(isDefault) {
      this._attributes['is-default'] = isDefault;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-default'];
    }
  }, {
    key: 'numberOfMembers',


    /** @param {string} numberOfMembers **/
    set: function set(numberOfMembers) {
      this._attributes['number-of-members'] = numberOfMembers;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['number-of-members'];
    }
  }, {
    key: 'perPersonBudget',


    /** @param {string} perPersonBudget **/
    set: function set(perPersonBudget) {
      this._attributes['per-person-budget'] = perPersonBudget;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['per-person-budget'];
    }
  }, {
    key: 'client',


    // relationships


    /** @param {Client} client **/
    set: function set(client) {
      this._one['client'] = client;
    },

    /** @type {Client} */
    get: function get() {
      return this._one['client'];
    }
  }, {
    key: 'users',


    /** @param {User[]} users **/
    set: function set(users) {
      this._many['users'] = users;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['users'];
    }
  }]);

  return Team;
}(_resource2.default);

/** @class User
  * @extends {Resource}
  **/


var User = exports.User = function (_Resource57) {
  _inherits(User, _Resource57);

  function User() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, id, 'users', attributes, one, many));
  }

  // attributes

  /** @param {boolean} active **/


  _createClass(User, [{
    key: 'active',
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'email',


    /** @param {boolean} email **/
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['email'];
    }
  }, {
    key: 'firstName',


    /** @param {boolean} firstName **/
    set: function set(firstName) {
      this._attributes['first-name'] = firstName;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['first-name'];
    }
  }, {
    key: 'lastName',


    /** @param {boolean} lastName **/
    set: function set(lastName) {
      this._attributes['last-name'] = lastName;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['last-name'];
    }
  }, {
    key: 'isPending',


    /** @param {boolean} isPending **/
    set: function set(isPending) {
      this._attributes['is-pending'] = isPending;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-pending'];
    }
  }, {
    key: 'password',


    /** @param {boolean} password **/
    set: function set(password) {
      this._attributes['password'] = password;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['password'];
    }
  }, {
    key: 'passwordConfirmation',


    /** @param {boolean} passwordConfirmation **/
    set: function set(passwordConfirmation) {
      this._attributes['password-confirmation'] = passwordConfirmation;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['password-confirmation'];
    }
  }, {
    key: 'resetPasswordToken',


    /** @param {boolean} resetPasswordToken **/
    set: function set(resetPasswordToken) {
      this._attributes['reset-password-token'] = resetPasswordToken;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['reset-password-token'];
    }
  }, {
    key: 'phoneNumber',


    /** @param {boolean} phoneNumber **/
    set: function set(phoneNumber) {
      this._attributes['phone-number'] = phoneNumber;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['phone-number'];
    }
  }, {
    key: 'extension',


    /** @param {boolean} extension **/
    set: function set(extension) {
      this._attributes['extension'] = extension;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['extension'];
    }
  }, {
    key: 'isClientAdmin',


    /** @param {boolean} isClientAdmin **/
    set: function set(isClientAdmin) {
      this._attributes['is-client-admin'] = isClientAdmin;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-client-admin'];
    }
  }, {
    key: 'smsNumber',


    /** @param {boolean} smsNumber **/
    set: function set(smsNumber) {
      this._attributes['sms-number'] = smsNumber;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['sms-number'];
    }
  }, {
    key: 'phoneCanSMS',


    /** @param {boolean} phoneCanSMS **/
    set: function set(phoneCanSMS) {
      this._attributes['phone-can-sms'] = phoneCanSMS;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['phone-can-sms'];
    }
  }, {
    key: 'phoneType',


    /** @param {boolean} phoneType **/
    set: function set(phoneType) {
      this._attributes['phone-type'] = phoneType;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['phone-type'];
    }
  }, {
    key: 'profilePicture',


    /** @param {boolean} profilePicture **/
    set: function set(profilePicture) {
      this._attributes['profile-picture'] = profilePicture;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['profile-picture'];
    }
  }, {
    key: 'features',


    /** @param {boolean} features **/
    set: function set(features) {
      this._attributes['features'] = features;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['features'];
    }
  }, {
    key: 'slackChannelInfo',


    /** @param {boolean} slackChannelInfo **/
    set: function set(slackChannelInfo) {
      this._attributes['slack-channel-info'] = slackChannelInfo;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['slack-channel-info'];
    }
  }, {
    key: 'acceptedTermsAt',


    /** @param {boolean} acceptedTermsAt **/
    set: function set(acceptedTermsAt) {
      this._attributes['accepted-terms-at'] = acceptedTermsAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['accepted-terms-at'];
    }
  }, {
    key: 'lastSignInAt',


    /** @param {boolean} lastSignInAt **/
    set: function set(lastSignInAt) {
      this._attributes['last-sign-in-at'] = lastSignInAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['last-sign-in-at'];
    }
  }, {
    key: 'invitationSentAt',


    /** @param {boolean} invitationSentAt **/
    set: function set(invitationSentAt) {
      this._attributes['invitation-sent-at'] = invitationSentAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['invitation-sent-at'];
    }
  }, {
    key: 'invitationStatus',


    /** @param {boolean} invitationStatus **/
    set: function set(invitationStatus) {
      this._attributes['invitation-status'] = invitationStatus;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['invitation-status'];
    }
  }, {
    key: 'invitationToken',


    /** @param {boolean} invitationToken **/
    set: function set(invitationToken) {
      this._attributes['invitation-token'] = invitationToken;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['invitation-token'];
    }
  }, {
    key: 'invitationAcceptedAt',


    /** @param {boolean} invitationAcceptedAt **/
    set: function set(invitationAcceptedAt) {
      this._attributes['invitation-accepted-at'] = invitationAcceptedAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['invitation-accepted-at'];
    }
  }, {
    key: 'completedQuestionaire',


    /** @param {boolean} completedQuestionaire **/
    set: function set(completedQuestionaire) {
      this._attributes['completed-questionaire'] = completedQuestionaire;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['completed-questionaire'];
    }
  }, {
    key: 'driverDeviceInfo',


    /** @param {boolean} driverDeviceInfo **/
    set: function set(driverDeviceInfo) {
      this._attributes['driver-device-info'] = driverDeviceInfo;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['driver-device-info'];
    }
  }, {
    key: 'driverFileNumber',


    /** @param {boolean} driverFileNumber **/
    set: function set(driverFileNumber) {
      this._attributes['driver-file-number'] = driverFileNumber;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['driver-file-number'];
    }
  }, {
    key: 'driverSpeedRating',


    /** @param {boolean} driverSpeedRating **/
    set: function set(driverSpeedRating) {
      this._attributes['driver-speed-rating'] = driverSpeedRating;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['driver-speed-rating'];
    }
  }, {
    key: 'driverVehicleType',


    /** @param {boolean} driverVehicleType **/
    set: function set(driverVehicleType) {
      this._attributes['driver-vehicle-type'] = driverVehicleType;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['driver-vehicle-type'];
    }
  }, {
    key: 'lastDriverNotificationSentAt',


    /** @param {boolean} lastDriverNotificationSentAt **/
    set: function set(lastDriverNotificationSentAt) {
      this._attributes['last-driver-notification-sent-at'] = lastDriverNotificationSentAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['last-driver-notification-sent-at'];
    }
  }, {
    key: 'isActiveDriver',


    /** @param {boolean} isActiveDriver **/
    set: function set(isActiveDriver) {
      this._attributes['is-active-driver'] = isActiveDriver;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-active-driver'];
    }
  }, {
    key: 'createdAt',


    /** @param {boolean} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'clientAlwaysCall',


    /** @param {boolean} clientAlwaysCall **/
    set: function set(clientAlwaysCall) {
      this._attributes['client-always-call'] = clientAlwaysCall;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['client-always-call'];
    }
  }, {
    key: 'communicationPreference',


    // relationships


    /** @param {CommunicationPreference} communicationPreference **/
    set: function set(communicationPreference) {
      this._one['communication-preference'] = communicationPreference;
    },

    /** @type {CommunicationPreference} */
    get: function get() {
      return this._one['communication-preference'];
    }
  }, {
    key: 'driverPings',


    /** @param {DriverPing[]} driverPings **/
    set: function set(driverPings) {
      this._many['driver-pings'] = driverPings;
    },

    /** @type {DriverPing[]} */
    get: function get() {
      return this._many['driver-pings'];
    }
  }, {
    key: 'driverWeeks',


    /** @param {DriverWeek[]} driverWeeks **/
    set: function set(driverWeeks) {
      this._many['driver-weeks'] = driverWeeks;
    },

    /** @type {DriverWeek[]} */
    get: function get() {
      return this._many['driver-weeks'];
    }
  }, {
    key: 'driverDays',


    /** @param {DriverDay[]} driverDays **/
    set: function set(driverDays) {
      this._many['driver-days'] = driverDays;
    },

    /** @type {DriverDay[]} */
    get: function get() {
      return this._many['driver-days'];
    }
  }, {
    key: 'deliveredOrders',


    /** @param {Order[]} deliveredOrders **/
    set: function set(deliveredOrders) {
      this._many['delivered-orders'] = deliveredOrders;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['delivered-orders'];
    }
  }, {
    key: 'couriers',


    /** @param {Courier[]} couriers **/
    set: function set(couriers) {
      this._many['couriers'] = couriers;
    },

    /** @type {Courier[]} */
    get: function get() {
      return this._many['couriers'];
    }
  }, {
    key: 'clients',


    /** @param {Client[]} clients **/
    set: function set(clients) {
      this._many['clients'] = clients;
    },

    /** @type {Client[]} */
    get: function get() {
      return this._many['clients'];
    }
  }, {
    key: 'roles',


    /** @param {Role[]} roles **/
    set: function set(roles) {
      this._many['roles'] = roles;
    },

    /** @type {Role[]} */
    get: function get() {
      return this._many['roles'];
    }
  }, {
    key: 'paymentCards',


    /** @param {PaymentCard[]} paymentCards **/
    set: function set(paymentCards) {
      this._many['payment-cards'] = paymentCards;
    },

    /** @type {PaymentCard[]} */
    get: function get() {
      return this._many['payment-cards'];
    }
  }, {
    key: 'teams',


    /** @param {Team[]} teams **/
    set: function set(teams) {
      this._many['teams'] = teams;
    },

    /** @type {Team[]} */
    get: function get() {
      return this._many['teams'];
    }
  }, {
    key: 'versions',


    /** @param {Version[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {Version[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return User;
}(_resource2.default);

/** @class UserFeedback
  * @extends {Resource}
  **/


var UserFeedback = exports.UserFeedback = function (_Resource58) {
  _inherits(UserFeedback, _Resource58);

  function UserFeedback() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, UserFeedback);

    return _possibleConstructorReturn(this, (UserFeedback.__proto__ || Object.getPrototypeOf(UserFeedback)).call(this, id, 'user-feedbacks', attributes, one, many));
  }

  // attributes

  /** @param {any} orderId **/


  _createClass(UserFeedback, [{
    key: 'orderId',
    set: function set(orderId) {
      this._attributes['order-id'] = orderId;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['order-id'];
    }
  }, {
    key: 'meal',


    /** @param {any} meal **/
    set: function set(meal) {
      this._attributes['meal'] = meal;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['meal'];
    }
  }, {
    key: 'website',


    /** @param {any} website **/
    set: function set(website) {
      this._attributes['website'] = website;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['website'];
    }
  }, {
    key: 'delivery',


    /** @param {any} delivery **/
    set: function set(delivery) {
      this._attributes['delivery'] = delivery;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['delivery'];
    }
  }, {
    key: 'ordering',


    /** @param {any} ordering **/
    set: function set(ordering) {
      this._attributes['ordering'] = ordering;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['ordering'];
    }
  }, {
    key: 'recommend',


    /** @param {any} recommend **/
    set: function set(recommend) {
      this._attributes['recommend'] = recommend;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['recommend'];
    }
  }, {
    key: 'suggestion',


    /** @param {any} suggestion **/
    set: function set(suggestion) {
      this._attributes['suggestion'] = suggestion;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['suggestion'];
    }
  }, {
    key: 'createdAt',


    /** @param {any} createdAt **/
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'updatedAt',


    /** @param {any} updatedAt **/
    set: function set(updatedAt) {
      this._attributes['updated-at'] = updatedAt;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['updated-at'];
    }
  }]);

  return UserFeedback;
}(_resource2.default);

/** @class UserInvite
  * @extends {Resource}
  **/
var UserInvite = exports.UserInvite = function (_Resource59) {
  _inherits(UserInvite, _Resource59);

  function UserInvite() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, UserInvite);

    return _possibleConstructorReturn(this, (UserInvite.__proto__ || Object.getPrototypeOf(UserInvite)).call(this, id, 'user-invites', attributes, one, many));
  }

  // attributes

  /** @param {any} email **/


  _createClass(UserInvite, [{
    key: 'email',
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['email'];
    }
  }, {
    key: 'firstName',


    /** @param {any} firstName **/
    set: function set(firstName) {
      this._attributes['first-name'] = firstName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['first-name'];
    }
  }, {
    key: 'lastName',


    /** @param {any} lastName **/
    set: function set(lastName) {
      this._attributes['last-name'] = lastName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['last-name'];
    }
  }, {
    key: 'phoneNumber',


    /** @param {any} phoneNumber **/
    set: function set(phoneNumber) {
      this._attributes['phone-number'] = phoneNumber;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['phone-number'];
    }
  }, {
    key: 'extension',


    /** @param {any} extension **/
    set: function set(extension) {
      this._attributes['extension'] = extension;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['extension'];
    }
  }, {
    key: 'client',


    // relationships


    /** @param {Client} client **/
    set: function set(client) {
      this._one['client'] = client;
    },

    /** @type {Client} */
    get: function get() {
      return this._one['client'];
    }
  }, {
    key: 'restaurant',


    /** @param {Restaurant} restaurant **/
    set: function set(restaurant) {
      this._one['restaurant'] = restaurant;
    },

    /** @type {Restaurant} */
    get: function get() {
      return this._one['restaurant'];
    }
  }, {
    key: 'team',


    /** @param {Team} team **/
    set: function set(team) {
      this._one['team'] = team;
    },

    /** @type {Team} */
    get: function get() {
      return this._one['team'];
    }
  }, {
    key: 'courier',


    /** @param {Courier} courier **/
    set: function set(courier) {
      this._one['courier'] = courier;
    },

    /** @type {Courier} */
    get: function get() {
      return this._one['courier'];
    }
  }, {
    key: 'user',


    /** @param {User} user **/
    set: function set(user) {
      this._one['user'] = user;
    },

    /** @type {User} */
    get: function get() {
      return this._one['user'];
    }
  }]);

  return UserInvite;
}(_resource2.default);

/** @class Version
  * @extends {Resource}
  **/


var Version = exports.Version = function (_Resource60) {
  _inherits(Version, _Resource60);

  function Version() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Version);

    return _possibleConstructorReturn(this, (Version.__proto__ || Object.getPrototypeOf(Version)).call(this, id, 'versions', attributes, one, many));
  }

  // attributes

  /** @param {Date} createdAt **/


  _createClass(Version, [{
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'itemType',


    /** @param {Date} itemType **/
    set: function set(itemType) {
      this._attributes['item-type'] = itemType;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['item-type'];
    }
  }, {
    key: 'itemId',


    /** @param {Date} itemId **/
    set: function set(itemId) {
      this._attributes['item-id'] = itemId;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['item-id'];
    }
  }, {
    key: 'event',


    /** @param {Date} event **/
    set: function set(event) {
      this._attributes['event'] = event;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['event'];
    }
  }, {
    key: 'object',


    /** @param {Date} object **/
    set: function set(object) {
      this._attributes['object'] = object;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['object'];
    }
  }, {
    key: 'objectChanges',


    /** @param {Date} objectChanges **/
    set: function set(objectChanges) {
      this._attributes['object-changes'] = objectChanges;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['object-changes'];
    }
  }, {
    key: 'whodunnit',


    /** @param {Date} whodunnit **/
    set: function set(whodunnit) {
      this._attributes['whodunnit'] = whodunnit;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['whodunnit'];
    }
  }]);

  return Version;
}(_resource2.default);

var ResourceClasses = (_ResourceClasses = {}, _defineProperty(_ResourceClasses, 'app-configurations', AppConfiguration), _defineProperty(_ResourceClasses, 'areas', Area), _defineProperty(_ResourceClasses, 'area-closures', AreaClosure), _defineProperty(_ResourceClasses, 'clients', Client), _defineProperty(_ResourceClasses, 'client-discounts', ClientDiscount), _defineProperty(_ResourceClasses, 'client-order-invoices', ClientOrderInvoice), _defineProperty(_ResourceClasses, 'client-signups', ClientSignup), _defineProperty(_ResourceClasses, 'communication-preferences', CommunicationPreference), _defineProperty(_ResourceClasses, 'companies', Company), _defineProperty(_ResourceClasses, 'contacts', Contact), _defineProperty(_ResourceClasses, 'couriers', Courier), _defineProperty(_ResourceClasses, 'delivery-cases', DeliveryCase), _defineProperty(_ResourceClasses, 'delivery-locations', DeliveryLocation), _defineProperty(_ResourceClasses, 'desk-cases', DeskCase), _defineProperty(_ResourceClasses, 'dietary-tags', DietaryTag), _defineProperty(_ResourceClasses, 'discount-codes', DiscountCode), _defineProperty(_ResourceClasses, 'driver-days', DriverDay), _defineProperty(_ResourceClasses, 'driver-payments', DriverPayment), _defineProperty(_ResourceClasses, 'driver-payroll-runs', DriverPayrollRun), _defineProperty(_ResourceClasses, 'driver-pings', DriverPing), _defineProperty(_ResourceClasses, 'driver-resources', DriverResource), _defineProperty(_ResourceClasses, 'driver-weeks', DriverWeek), _defineProperty(_ResourceClasses, 'email-messages', EmailMessage), _defineProperty(_ResourceClasses, 'events', Event), _defineProperty(_ResourceClasses, 'giftbit-cards', GiftbitCard), _defineProperty(_ResourceClasses, 'giftbit-errors', GiftbitError), _defineProperty(_ResourceClasses, 'giftbit-gifts', GiftbitGift), _defineProperty(_ResourceClasses, 'group-order-members', GroupOrderMember), _defineProperty(_ResourceClasses, 'invoices', Invoice), _defineProperty(_ResourceClasses, 'invoicing-tax-rates', InvoicingTaxRate), _defineProperty(_ResourceClasses, 'locations', Location), _defineProperty(_ResourceClasses, 'meal-plans', MealPlan), _defineProperty(_ResourceClasses, 'menus', Menu), _defineProperty(_ResourceClasses, 'menu-groups', MenuGroup), _defineProperty(_ResourceClasses, 'menu-items', MenuItem), _defineProperty(_ResourceClasses, 'menu-option-groups', MenuOptionGroup), _defineProperty(_ResourceClasses, 'menu-option-items', MenuOptionItem), _defineProperty(_ResourceClasses, 'orders', Order), _defineProperty(_ResourceClasses, 'order-items', OrderItem), _defineProperty(_ResourceClasses, 'payment-accounts', PaymentAccount), _defineProperty(_ResourceClasses, 'payment-cards', PaymentCard), _defineProperty(_ResourceClasses, 'payroll-runs', PayrollRun), _defineProperty(_ResourceClasses, 'pickup-locations', PickupLocation), _defineProperty(_ResourceClasses, 'promo-codes', PromoCode), _defineProperty(_ResourceClasses, 'qualifying-questions', QualifyingQuestion), _defineProperty(_ResourceClasses, 'restaurants', Restaurant), _defineProperty(_ResourceClasses, 'restaurant-capacity-tranches', RestaurantCapacityTranche), _defineProperty(_ResourceClasses, 'restaurant-closures', RestaurantClosure), _defineProperty(_ResourceClasses, 'restaurant-discounts', RestaurantDiscount), _defineProperty(_ResourceClasses, 'restaurant-order-invoices', RestaurantOrderInvoice), _defineProperty(_ResourceClasses, 'restaurant-votes', RestaurantVote), _defineProperty(_ResourceClasses, 'roles', Role), _defineProperty(_ResourceClasses, 'salesforce-sync-errors', SalesforceSyncError), _defineProperty(_ResourceClasses, 'service-times', ServiceTime), _defineProperty(_ResourceClasses, 'tags', Tag), _defineProperty(_ResourceClasses, 'teams', Team), _defineProperty(_ResourceClasses, 'users', User), _defineProperty(_ResourceClasses, 'user-feedbacks', UserFeedback), _defineProperty(_ResourceClasses, 'user-invites', UserInvite), _defineProperty(_ResourceClasses, 'versions', Version), _ResourceClasses);

exports.default = ResourceClasses;