'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInvite = exports.UserFeedback = exports.User = exports.Team = exports.Tag = exports.SubscriptionPlan = exports.ServiceTime = exports.SalesforceSyncError = exports.SalesforceCase = exports.Role = exports.RestaurantVote = exports.RestaurantRanking = exports.RestaurantOrderInvoice = exports.RestaurantDiscount = exports.RestaurantClosure = exports.RestaurantCapacityTranche = exports.Restaurant = exports.ReleaseNote = exports.QualifyingQuestion = exports.PromoCode = exports.PickupLocation = exports.PayrollRun = exports.PaymentCard = exports.PaymentAccount = exports.OrderItem = exports.Order = exports.NotificationLog = exports.MenuOptionItem = exports.MenuOptionGroup = exports.MenuItem = exports.MenuGroup = exports.Menu = exports.MealType = exports.MealPlanningTemplate = exports.MealPlanningSchedule = exports.MealPlanningRestaurantConstraint = exports.MealPlanningReservation = exports.MealPlanningRequirementGroup = exports.MealPlanningRequirementConstraint = exports.MealPlanningRequirement = exports.MealPlanningPreferenceProfile = exports.MealPlanningLogRecord = exports.MealPlanningInstance = exports.MealPlanningEvent = exports.MealPlan = exports.LogisticsDelivery = exports.LogisticsArrivalEstimate = exports.Location = exports.InvoicingTaxRate = exports.InvoicingLedgerItem = exports.Invoice = exports.HistorianVersion = exports.GroupOrderMember = exports.GiftbitGift = exports.GiftbitError = exports.GiftbitCard = exports.FoodType = exports.FeatureFlagDescription = exports.Event = exports.EmailMessage = exports.DriverWeek = exports.DriverResource = exports.DriverPing = exports.DriverPayrollRun = exports.DriverPayment = exports.DriverDay = exports.DiscountCode = exports.DietaryTag = exports.DeskCase = exports.DeliveryLocation = exports.DeliveryCase = exports.CurrenciesWallet = exports.CurrenciesTransaction = exports.CurrenciesCurrency = exports.Courier = exports.Contact = exports.Company = exports.CommunicationPreference = exports.ClientSignup = exports.ClientOrderInvoice = exports.ClientDiscount = exports.Client = exports.AreaClosure = exports.Area = exports.AppConfiguration = exports.AccountingLineItem = exports.AccountingLedgerItem = exports.AccountingConsolidationRun = exports.AccountingConsolidationConfiguration = undefined;

var _ResourceClasses;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @class AccountingConsolidationConfiguration
  * @extends {Resource}
  **/
var AccountingConsolidationConfiguration = exports.AccountingConsolidationConfiguration = function (_Resource) {
  _inherits(AccountingConsolidationConfiguration, _Resource);

  function AccountingConsolidationConfiguration() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AccountingConsolidationConfiguration);

    return _possibleConstructorReturn(this, (AccountingConsolidationConfiguration.__proto__ || Object.getPrototypeOf(AccountingConsolidationConfiguration)).call(this, id, 'accounting-consolidation-configurations', attributes, one, many));
  }

  // attributes

  /** @param {string} period **/


  _createClass(AccountingConsolidationConfiguration, [{
    key: 'period',
    set: function set(period) {
      this._attributes['period'] = period;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['period'];
    }
  }, {
    key: 'queryType',


    /** @param {string} queryType **/
    set: function set(queryType) {
      this._attributes['query-type'] = queryType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['query-type'];
    }
  }, {
    key: 'queryData',


    /** @param {string} queryData **/
    set: function set(queryData) {
      this._attributes['query-data'] = queryData;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['query-data'];
    }
  }, {
    key: 'firstRunOn',


    /** @param {string} firstRunOn **/
    set: function set(firstRunOn) {
      this._attributes['first-run-on'] = firstRunOn;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['first-run-on'];
    }
  }, {
    key: 'lastRanOn',


    /** @param {string} lastRanOn **/
    set: function set(lastRanOn) {
      this._attributes['last-ran-on'] = lastRanOn;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-ran-on'];
    }
  }, {
    key: 'nextRunOn',


    /** @param {string} nextRunOn **/
    set: function set(nextRunOn) {
      this._attributes['next-run-on'] = nextRunOn;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['next-run-on'];
    }
  }, {
    key: 'currency',


    /** @param {string} currency **/
    set: function set(currency) {
      this._attributes['currency'] = currency;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['currency'];
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
    key: 'paymentCard',


    // relationships


    /** @param {PaymentCard} paymentCard **/
    set: function set(paymentCard) {
      this._one['payment-card'] = paymentCard;
    },

    /** @type {PaymentCard} */
    get: function get() {
      return this._one['payment-card'];
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
    key: 'runs',


    /** @param {AccountingConsolidationRun[]} runs **/
    set: function set(runs) {
      this._many['runs'] = runs;
    },

    /** @type {AccountingConsolidationRun[]} */
    get: function get() {
      return this._many['runs'];
    }
  }]);

  return AccountingConsolidationConfiguration;
}(_resource2.default);

/** @class AccountingConsolidationRun
  * @extends {Resource}
  **/


var AccountingConsolidationRun = exports.AccountingConsolidationRun = function (_Resource2) {
  _inherits(AccountingConsolidationRun, _Resource2);

  function AccountingConsolidationRun() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AccountingConsolidationRun);

    return _possibleConstructorReturn(this, (AccountingConsolidationRun.__proto__ || Object.getPrototypeOf(AccountingConsolidationRun)).call(this, id, 'accounting-consolidation-runs', attributes, one, many));
  }

  // attributes

  /** @param {date} ranOn **/


  _createClass(AccountingConsolidationRun, [{
    key: 'ranOn',
    set: function set(ranOn) {
      this._attributes['ran-on'] = ranOn;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['ran-on'];
    }
  }, {
    key: 'identifier',


    /** @param {date} identifier **/
    set: function set(identifier) {
      this._attributes['identifier'] = identifier;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['identifier'];
    }
  }, {
    key: 'period',


    /** @param {date} period **/
    set: function set(period) {
      this._attributes['period'] = period;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['period'];
    }
  }, {
    key: 'queryType',


    /** @param {date} queryType **/
    set: function set(queryType) {
      this._attributes['query-type'] = queryType;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['query-type'];
    }
  }, {
    key: 'queryData',


    /** @param {date} queryData **/
    set: function set(queryData) {
      this._attributes['query-data'] = queryData;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['query-data'];
    }
  }, {
    key: 'configuration',


    // relationships


    /** @param {AccountingConsolidationConfiguration} configuration **/
    set: function set(configuration) {
      this._one['configuration'] = configuration;
    },

    /** @type {AccountingConsolidationConfiguration} */
    get: function get() {
      return this._one['configuration'];
    }
  }, {
    key: 'invoice',


    /** @param {AccountingLedgerItem} invoice **/
    set: function set(invoice) {
      this._one['invoice'] = invoice;
    },

    /** @type {AccountingLedgerItem} */
    get: function get() {
      return this._one['invoice'];
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
  }]);

  return AccountingConsolidationRun;
}(_resource2.default);

/** @class AccountingLedgerItem
  * @extends {Resource}
  **/


var AccountingLedgerItem = exports.AccountingLedgerItem = function (_Resource3) {
  _inherits(AccountingLedgerItem, _Resource3);

  function AccountingLedgerItem() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AccountingLedgerItem);

    return _possibleConstructorReturn(this, (AccountingLedgerItem.__proto__ || Object.getPrototypeOf(AccountingLedgerItem)).call(this, id, 'accounting-ledger-items', attributes, one, many));
  }

  // attributes

  /** @param {any} ledgerType **/


  _createClass(AccountingLedgerItem, [{
    key: 'ledgerType',
    set: function set(ledgerType) {
      this._attributes['ledger-type'] = ledgerType;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['ledger-type'];
    }
  }, {
    key: 'identifier',


    /** @param {any} identifier **/
    set: function set(identifier) {
      this._attributes['identifier'] = identifier;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['identifier'];
    }
  }, {
    key: 'status',


    /** @param {any} status **/
    set: function set(status) {
      this._attributes['status'] = status;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['status'];
    }
  }, {
    key: 'issueDate',


    /** @param {any} issueDate **/
    set: function set(issueDate) {
      this._attributes['issue-date'] = issueDate;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['issue-date'];
    }
  }, {
    key: 'currency',


    /** @param {any} currency **/
    set: function set(currency) {
      this._attributes['currency'] = currency;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['currency'];
    }
  }, {
    key: 'netAmount',


    /** @param {any} netAmount **/
    set: function set(netAmount) {
      this._attributes['net-amount'] = netAmount;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['net-amount'];
    }
  }, {
    key: 'totalAmount',


    /** @param {any} totalAmount **/
    set: function set(totalAmount) {
      this._attributes['total-amount'] = totalAmount;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['total-amount'];
    }
  }, {
    key: 'taxAmount',


    /** @param {any} taxAmount **/
    set: function set(taxAmount) {
      this._attributes['tax-amount'] = taxAmount;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['tax-amount'];
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
    key: 'dueDate',


    /** @param {any} dueDate **/
    set: function set(dueDate) {
      this._attributes['due-date'] = dueDate;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['due-date'];
    }
  }, {
    key: 'xeroId',


    /** @param {any} xeroId **/
    set: function set(xeroId) {
      this._attributes['xero-id'] = xeroId;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['xero-id'];
    }
  }, {
    key: 'refundableAmount',


    /** @param {any} refundableAmount **/
    set: function set(refundableAmount) {
      this._attributes['refundable-amount'] = refundableAmount;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['refundable-amount'];
    }
  }, {
    key: 'taxTotals',


    /** @param {any} taxTotals **/
    set: function set(taxTotals) {
      this._attributes['tax-totals'] = taxTotals;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['tax-totals'];
    }
  }, {
    key: 'aggregatedLedger',


    /** @param {any} aggregatedLedger **/
    set: function set(aggregatedLedger) {
      this._attributes['aggregated-ledger'] = aggregatedLedger;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['aggregated-ledger'];
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
    key: 'canRefund',


    /** @param {Date} canRefund **/
    set: function set(canRefund) {
      this._attributes['can-refund'] = canRefund;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['can-refund'];
    }
  }, {
    key: 'parent',


    // relationships


    /** @param {AccountingLedgerItem} parent **/
    set: function set(parent) {
      this._one['parent'] = parent;
    },

    /** @type {AccountingLedgerItem} */
    get: function get() {
      return this._one['parent'];
    }
  }, {
    key: 'lineItems',


    /** @param {AccountingLineItem[]} lineItems **/
    set: function set(lineItems) {
      this._many['line-items'] = lineItems;
    },

    /** @type {AccountingLineItem[]} */
    get: function get() {
      return this._many['line-items'];
    }
  }, {
    key: 'children',


    /** @param {AccountingLedgerItem[]} children **/
    set: function set(children) {
      this._many['children'] = children;
    },

    /** @type {AccountingLedgerItem[]} */
    get: function get() {
      return this._many['children'];
    }
  }]);

  return AccountingLedgerItem;
}(_resource2.default);

/** @class AccountingLineItem
  * @extends {Resource}
  **/


var AccountingLineItem = exports.AccountingLineItem = function (_Resource4) {
  _inherits(AccountingLineItem, _Resource4);

  function AccountingLineItem() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, AccountingLineItem);

    return _possibleConstructorReturn(this, (AccountingLineItem.__proto__ || Object.getPrototypeOf(AccountingLineItem)).call(this, id, 'accounting-line-items', attributes, one, many));
  }

  // attributes

  /** @param {number} quantity **/


  _createClass(AccountingLineItem, [{
    key: 'quantity',
    set: function set(quantity) {
      this._attributes['quantity'] = quantity;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['quantity'];
    }
  }, {
    key: 'netAmount',


    /** @param {number} netAmount **/
    set: function set(netAmount) {
      this._attributes['net-amount'] = netAmount;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['net-amount'];
    }
  }, {
    key: 'totalAmount',


    /** @param {number} totalAmount **/
    set: function set(totalAmount) {
      this._attributes['total-amount'] = totalAmount;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['total-amount'];
    }
  }, {
    key: 'taxAmount',


    /** @param {number} taxAmount **/
    set: function set(taxAmount) {
      this._attributes['tax-amount'] = taxAmount;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['tax-amount'];
    }
  }, {
    key: 'taxRate',


    /** @param {number} taxRate **/
    set: function set(taxRate) {
      this._attributes['tax-rate'] = taxRate;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['tax-rate'];
    }
  }, {
    key: 'unitAmount',


    /** @param {number} unitAmount **/
    set: function set(unitAmount) {
      this._attributes['unit-amount'] = unitAmount;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['unit-amount'];
    }
  }, {
    key: 'name',


    /** @param {number} name **/
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'description',


    /** @param {number} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['description'];
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
    key: 'metaData',


    /** @param {number} metaData **/
    set: function set(metaData) {
      this._attributes['meta-data'] = metaData;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['meta-data'];
    }
  }, {
    key: 'ledgerItem',


    // relationships


    /** @param {AccountingLedgerItem} ledgerItem **/
    set: function set(ledgerItem) {
      this._one['ledger-item'] = ledgerItem;
    },

    /** @type {AccountingLedgerItem} */
    get: function get() {
      return this._one['ledger-item'];
    }
  }]);

  return AccountingLineItem;
}(_resource2.default);

/** @class AppConfiguration
  * @extends {Resource}
  **/


var AppConfiguration = exports.AppConfiguration = function (_Resource5) {
  _inherits(AppConfiguration, _Resource5);

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


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return AppConfiguration;
}(_resource2.default);

/** @class Area
  * @extends {Resource}
  **/


var Area = exports.Area = function (_Resource6) {
  _inherits(Area, _Resource6);

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
    key: 'parkAndLoadTime',


    /** @param {boolean} parkAndLoadTime **/
    set: function set(parkAndLoadTime) {
      this._attributes['park-and-load-time'] = parkAndLoadTime;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['park-and-load-time'];
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
    key: 'adminFee',


    /** @param {boolean} adminFee **/
    set: function set(adminFee) {
      this._attributes['admin-fee'] = adminFee;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['admin-fee'];
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
    key: 'isInternal',


    /** @param {boolean} isInternal **/
    set: function set(isInternal) {
      this._attributes['is-internal'] = isInternal;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-internal'];
    }
  }, {
    key: 'center',


    /** @param {boolean} center **/
    set: function set(center) {
      this._attributes['center'] = center;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['center'];
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
    key: 'currentWeekAreaClosures',


    /** @param {AreaClosure[]} currentWeekAreaClosures **/
    set: function set(currentWeekAreaClosures) {
      this._many['current-week-area-closures'] = currentWeekAreaClosures;
    },

    /** @type {AreaClosure[]} */
    get: function get() {
      return this._many['current-week-area-closures'];
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
    key: 'versions',


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['versions'];
    }
  }, {
    key: 'allAreaVersions',


    /** @param {HistorianVersion[]} allAreaVersions **/
    set: function set(allAreaVersions) {
      this._many['all-area-versions'] = allAreaVersions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['all-area-versions'];
    }
  }]);

  return Area;
}(_resource2.default);

/** @class AreaClosure
  * @extends {Resource}
  **/


var AreaClosure = exports.AreaClosure = function (_Resource7) {
  _inherits(AreaClosure, _Resource7);

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


var Client = exports.Client = function (_Resource8) {
  _inherits(Client, _Resource8);

  function Client() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Client);

    return _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, id, 'clients', attributes, one, many));
  }

  // attributes

  /** @param {string} notes **/


  _createClass(Client, [{
    key: 'notes',
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notes'];
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
    key: 'xeroContactId',


    /** @param {string} xeroContactId **/
    set: function set(xeroContactId) {
      this._attributes['xero-contact-id'] = xeroContactId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['xero-contact-id'];
    }
  }, {
    key: 'xeroSynchronizedAt',


    /** @param {string} xeroSynchronizedAt **/
    set: function set(xeroSynchronizedAt) {
      this._attributes['xero-synchronized-at'] = xeroSynchronizedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['xero-synchronized-at'];
    }
  }, {
    key: 'waiveDeliveryFee',


    /** @param {string} waiveDeliveryFee **/
    set: function set(waiveDeliveryFee) {
      this._attributes['waive-delivery-fee'] = waiveDeliveryFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-delivery-fee'];
    }
  }, {
    key: 'waiveServiceFee',


    /** @param {string} waiveServiceFee **/
    set: function set(waiveServiceFee) {
      this._attributes['waive-service-fee'] = waiveServiceFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-service-fee'];
    }
  }, {
    key: 'waiveDeliveryFeeAccountingCode',


    /** @param {string} waiveDeliveryFeeAccountingCode **/
    set: function set(waiveDeliveryFeeAccountingCode) {
      this._attributes['waive-delivery-fee-accounting-code'] = waiveDeliveryFeeAccountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-delivery-fee-accounting-code'];
    }
  }, {
    key: 'waiveServiceFeeAccountingCode',


    /** @param {string} waiveServiceFeeAccountingCode **/
    set: function set(waiveServiceFeeAccountingCode) {
      this._attributes['waive-service-fee-accounting-code'] = waiveServiceFeeAccountingCode;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-service-fee-accounting-code'];
    }
  }, {
    key: 'waiveDeliveryFeeDescription',


    /** @param {string} waiveDeliveryFeeDescription **/
    set: function set(waiveDeliveryFeeDescription) {
      this._attributes['waive-delivery-fee-description'] = waiveDeliveryFeeDescription;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-delivery-fee-description'];
    }
  }, {
    key: 'waiveServiceFeeDescription',


    /** @param {string} waiveServiceFeeDescription **/
    set: function set(waiveServiceFeeDescription) {
      this._attributes['waive-service-fee-description'] = waiveServiceFeeDescription;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-service-fee-description'];
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
    key: 'isPayingServiceFee',


    /** @param {string} isPayingServiceFee **/
    set: function set(isPayingServiceFee) {
      this._attributes['is-paying-service-fee'] = isPayingServiceFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-paying-service-fee'];
    }
  }, {
    key: 'cutleryPreference',


    /** @param {string} cutleryPreference **/
    set: function set(cutleryPreference) {
      this._attributes['cutlery-preference'] = cutleryPreference;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['cutlery-preference'];
    }
  }, {
    key: 'manageTeams',


    /** @param {string} manageTeams **/
    set: function set(manageTeams) {
      this._attributes['manage-teams'] = manageTeams;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['manage-teams'];
    }
  }, {
    key: 'limitShareNotifications',


    /** @param {string} limitShareNotifications **/
    set: function set(limitShareNotifications) {
      this._attributes['limit-share-notifications'] = limitShareNotifications;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['limit-share-notifications'];
    }
  }, {
    key: 'companyName',


    /** @param {string} companyName **/
    set: function set(companyName) {
      this._attributes['company-name'] = companyName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['company-name'];
    }
  }, {
    key: 'planIcalUrl',


    /** @param {string} planIcalUrl **/
    set: function set(planIcalUrl) {
      this._attributes['plan-ical-url'] = planIcalUrl;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['plan-ical-url'];
    }
  }, {
    key: 'storage',


    /** @param {string} storage **/
    set: function set(storage) {
      this._attributes['storage'] = storage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['storage'];
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
    key: 'recentSignup',


    /** @param {string} recentSignup **/
    set: function set(recentSignup) {
      this._attributes['recent-signup'] = recentSignup;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['recent-signup'];
    }
  }, {
    key: 'ordersCount',


    /** @param {string} ordersCount **/
    set: function set(ordersCount) {
      this._attributes['orders-count'] = ordersCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['orders-count'];
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
    key: 'subscriptionPlan',


    /** @param {SubscriptionPlan} subscriptionPlan **/
    set: function set(subscriptionPlan) {
      this._one['subscription-plan'] = subscriptionPlan;
    },

    /** @type {SubscriptionPlan} */
    get: function get() {
      return this._one['subscription-plan'];
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
    key: 'preferenceProfile',


    /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
    set: function set(preferenceProfile) {
      this._one['preference-profile'] = preferenceProfile;
    },

    /** @type {MealPlanningPreferenceProfile} */
    get: function get() {
      return this._one['preference-profile'];
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
    key: 'wallet',


    /** @param {CurrenciesWallet} wallet **/
    set: function set(wallet) {
      this._one['wallet'] = wallet;
    },

    /** @type {CurrenciesWallet} */
    get: function get() {
      return this._one['wallet'];
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
    key: 'contacts',


    /** @param {Contact[]} contacts **/
    set: function set(contacts) {
      this._many['contacts'] = contacts;
    },

    /** @type {Contact[]} */
    get: function get() {
      return this._many['contacts'];
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
    key: 'allClientVersions',


    /** @param {HistorianVersion[]} allClientVersions **/
    set: function set(allClientVersions) {
      this._many['all-client-versions'] = allClientVersions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['all-client-versions'];
    }
  }, {
    key: 'versions',


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['versions'];
    }
  }, {
    key: 'mealPlanningTemplates',


    /** @param {MealPlanningTemplate[]} mealPlanningTemplates **/
    set: function set(mealPlanningTemplates) {
      this._many['meal-planning-templates'] = mealPlanningTemplates;
    },

    /** @type {MealPlanningTemplate[]} */
    get: function get() {
      return this._many['meal-planning-templates'];
    }
  }, {
    key: 'mealPlanningInstances',


    /** @param {MealPlanningInstance[]} mealPlanningInstances **/
    set: function set(mealPlanningInstances) {
      this._many['meal-planning-instances'] = mealPlanningInstances;
    },

    /** @type {MealPlanningInstance[]} */
    get: function get() {
      return this._many['meal-planning-instances'];
    }
  }, {
    key: 'mealPlanningReservations',


    /** @param {MealPlanningReservation[]} mealPlanningReservations **/
    set: function set(mealPlanningReservations) {
      this._many['meal-planning-reservations'] = mealPlanningReservations;
    },

    /** @type {MealPlanningReservation[]} */
    get: function get() {
      return this._many['meal-planning-reservations'];
    }
  }, {
    key: 'clientDiscounts',


    /** @param {ClientDiscount[]} clientDiscounts **/
    set: function set(clientDiscounts) {
      this._many['client-discounts'] = clientDiscounts;
    },

    /** @type {ClientDiscount[]} */
    get: function get() {
      return this._many['client-discounts'];
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


var ClientDiscount = exports.ClientDiscount = function (_Resource9) {
  _inherits(ClientDiscount, _Resource9);

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
  }, {
    key: 'owner',


    /** @param {Owner} owner **/
    set: function set(owner) {
      this._one['owner'] = owner;
    },

    /** @type {Owner} */
    get: function get() {
      return this._one['owner'];
    }
  }]);

  return ClientDiscount;
}(_resource2.default);

/** @class ClientOrderInvoice
  * @extends {Resource}
  **/


var ClientOrderInvoice = exports.ClientOrderInvoice = function (_Resource10) {
  _inherits(ClientOrderInvoice, _Resource10);

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
var ClientSignup = exports.ClientSignup = function (_Resource11) {
  _inherits(ClientSignup, _Resource11);

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
    key: 'region',


    /** @param {any} region **/
    set: function set(region) {
      this._attributes['region'] = region;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['region'];
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
    key: 'deliveryNotes',


    /** @param {any} deliveryNotes **/
    set: function set(deliveryNotes) {
      this._attributes['delivery-notes'] = deliveryNotes;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['delivery-notes'];
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
    key: 'howDidYouHearAboutUs',


    /** @param {any} howDidYouHearAboutUs **/
    set: function set(howDidYouHearAboutUs) {
      this._attributes['how-did-you-hear-about-us'] = howDidYouHearAboutUs;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['how-did-you-hear-about-us'];
    }
  }, {
    key: 'howDidYouHearAboutUsOther',


    /** @param {any} howDidYouHearAboutUsOther **/
    set: function set(howDidYouHearAboutUsOther) {
      this._attributes['how-did-you-hear-about-us-other'] = howDidYouHearAboutUsOther;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['how-did-you-hear-about-us-other'];
    }
  }, {
    key: 'ordersRegularly',


    /** @param {any} ordersRegularly **/
    set: function set(ordersRegularly) {
      this._attributes['orders-regularly'] = ordersRegularly;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['orders-regularly'];
    }
  }, {
    key: 'ordersForEvents',


    /** @param {any} ordersForEvents **/
    set: function set(ordersForEvents) {
      this._attributes['orders-for-events'] = ordersForEvents;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['orders-for-events'];
    }
  }, {
    key: 'ordersForThemselves',


    /** @param {any} ordersForThemselves **/
    set: function set(ordersForThemselves) {
      this._attributes['orders-for-themselves'] = ordersForThemselves;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['orders-for-themselves'];
    }
  }, {
    key: 'howManyPeopleDoYouFeed',


    /** @param {any} howManyPeopleDoYouFeed **/
    set: function set(howManyPeopleDoYouFeed) {
      this._attributes['how-many-people-do-you-feed'] = howManyPeopleDoYouFeed;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['how-many-people-do-you-feed'];
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
    key: 'referrer',


    /** @param {any} referrer **/
    set: function set(referrer) {
      this._attributes['referrer'] = referrer;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['referrer'];
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
    key: 'newFlow',


    /** @param {any} newFlow **/
    set: function set(newFlow) {
      this._attributes['new-flow'] = newFlow;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['new-flow'];
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


var CommunicationPreference = exports.CommunicationPreference = function (_Resource12) {
  _inherits(CommunicationPreference, _Resource12);

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


var Company = exports.Company = function (_Resource13) {
  _inherits(Company, _Resource13);

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


var Contact = exports.Contact = function (_Resource14) {
  _inherits(Contact, _Resource14);

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
var Courier = exports.Courier = function (_Resource15) {
  _inherits(Courier, _Resource15);

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
    key: 'apiType',


    /** @param {string} apiType **/
    set: function set(apiType) {
      this._attributes['api-type'] = apiType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['api-type'];
    }
  }, {
    key: 'alwaysSync',


    /** @param {string} alwaysSync **/
    set: function set(alwaysSync) {
      this._attributes['always-sync'] = alwaysSync;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['always-sync'];
    }
  }, {
    key: 'thirdPartyLogisticsConfiguration',


    /** @param {string} thirdPartyLogisticsConfiguration **/
    set: function set(thirdPartyLogisticsConfiguration) {
      this._attributes['third-party-logistics-configuration'] = thirdPartyLogisticsConfiguration;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['third-party-logistics-configuration'];
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


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return Courier;
}(_resource2.default);

/** @class CurrenciesCurrency
  * @extends {Resource}
  **/


var CurrenciesCurrency = exports.CurrenciesCurrency = function (_Resource16) {
  _inherits(CurrenciesCurrency, _Resource16);

  function CurrenciesCurrency() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, CurrenciesCurrency);

    return _possibleConstructorReturn(this, (CurrenciesCurrency.__proto__ || Object.getPrototypeOf(CurrenciesCurrency)).call(this, id, 'currencies-currencies', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(CurrenciesCurrency, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'symbol',


    /** @param {string} symbol **/
    set: function set(symbol) {
      this._attributes['symbol'] = symbol;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['symbol'];
    }
  }]);

  return CurrenciesCurrency;
}(_resource2.default);

/** @class CurrenciesTransaction
  * @extends {Resource}
  **/
var CurrenciesTransaction = exports.CurrenciesTransaction = function (_Resource17) {
  _inherits(CurrenciesTransaction, _Resource17);

  function CurrenciesTransaction() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, CurrenciesTransaction);

    return _possibleConstructorReturn(this, (CurrenciesTransaction.__proto__ || Object.getPrototypeOf(CurrenciesTransaction)).call(this, id, 'currencies-transactions', attributes, one, many));
  }

  // attributes

  /** @param {any} value **/


  _createClass(CurrenciesTransaction, [{
    key: 'value',
    set: function set(value) {
      this._attributes['value'] = value;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['value'];
    }
  }, {
    key: 'agentName',


    /** @param {any} agentName **/
    set: function set(agentName) {
      this._attributes['agent-name'] = agentName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['agent-name'];
    }
  }, {
    key: 'agentEmail',


    /** @param {any} agentEmail **/
    set: function set(agentEmail) {
      this._attributes['agent-email'] = agentEmail;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['agent-email'];
    }
  }, {
    key: 'subjectName',


    /** @param {any} subjectName **/
    set: function set(subjectName) {
      this._attributes['subject-name'] = subjectName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['subject-name'];
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
    key: 'reason',


    /** @param {any} reason **/
    set: function set(reason) {
      this._attributes['reason'] = reason;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['reason'];
    }
  }, {
    key: 'event',


    /** @param {any} event **/
    set: function set(event) {
      this._attributes['event'] = event;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['event'];
    }
  }, {
    key: 'agent',


    // relationships


    /** @param {Agent} agent **/
    set: function set(agent) {
      this._one['agent'] = agent;
    },

    /** @type {Agent} */
    get: function get() {
      return this._one['agent'];
    }
  }, {
    key: 'subject',


    /** @param {Subject} subject **/
    set: function set(subject) {
      this._one['subject'] = subject;
    },

    /** @type {Subject} */
    get: function get() {
      return this._one['subject'];
    }
  }]);

  return CurrenciesTransaction;
}(_resource2.default);

/** @class CurrenciesWallet
  * @extends {Resource}
  **/


var CurrenciesWallet = exports.CurrenciesWallet = function (_Resource18) {
  _inherits(CurrenciesWallet, _Resource18);

  function CurrenciesWallet() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, CurrenciesWallet);

    return _possibleConstructorReturn(this, (CurrenciesWallet.__proto__ || Object.getPrototypeOf(CurrenciesWallet)).call(this, id, 'currencies-wallets', attributes, one, many));
  }

  // attributes

  /** @param {jsonb} balances **/


  _createClass(CurrenciesWallet, [{
    key: 'balances',
    set: function set(balances) {
      this._attributes['balances'] = balances;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['balances'];
    }
  }, {
    key: 'owner',


    // relationships


    /** @param {Owner} owner **/
    set: function set(owner) {
      this._one['owner'] = owner;
    },

    /** @type {Owner} */
    get: function get() {
      return this._one['owner'];
    }
  }, {
    key: 'transactions',


    /** @param {Currencies::Transaction[]} transactions **/
    set: function set(transactions) {
      this._many['transactions'] = transactions;
    },

    /** @type {Currencies::Transaction[]} */
    get: function get() {
      return this._many['transactions'];
    }
  }]);

  return CurrenciesWallet;
}(_resource2.default);

/** @class DeliveryCase
  * @extends {Resource}
  **/


var DeliveryCase = exports.DeliveryCase = function (_Resource19) {
  _inherits(DeliveryCase, _Resource19);

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


var DeliveryLocation = exports.DeliveryLocation = function (_Resource20) {
  _inherits(DeliveryLocation, _Resource20);

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
    key: 'addressLine1',


    /** @param {any} addressLine1 **/
    set: function set(addressLine1) {
      this._attributes['address-line-1'] = addressLine1;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['address-line-1'];
    }
  }, {
    key: 'addressLine2',


    /** @param {any} addressLine2 **/
    set: function set(addressLine2) {
      this._attributes['address-line-2'] = addressLine2;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['address-line-2'];
    }
  }, {
    key: 'area',


    /** @param {any} area **/
    set: function set(area) {
      this._attributes['area'] = area;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['area'];
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
    key: 'notes',


    /** @param {any} notes **/
    set: function set(notes) {
      this._attributes['notes'] = notes;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['notes'];
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


var DeskCase = exports.DeskCase = function (_Resource21) {
  _inherits(DeskCase, _Resource21);

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


var DietaryTag = exports.DietaryTag = function (_Resource22) {
  _inherits(DietaryTag, _Resource22);

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
    key: 'foodLabelName',


    /** @param {string} foodLabelName **/
    set: function set(foodLabelName) {
      this._attributes['food-label-name'] = foodLabelName;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['food-label-name'];
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
    key: 'tagType',


    /** @param {string} tagType **/
    set: function set(tagType) {
      this._attributes['tag-type'] = tagType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['tag-type'];
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


var DiscountCode = exports.DiscountCode = function (_Resource23) {
  _inherits(DiscountCode, _Resource23);

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
var DriverDay = exports.DriverDay = function (_Resource24) {
  _inherits(DriverDay, _Resource24);

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


var DriverPayment = exports.DriverPayment = function (_Resource25) {
  _inherits(DriverPayment, _Resource25);

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


var DriverPayrollRun = exports.DriverPayrollRun = function (_Resource26) {
  _inherits(DriverPayrollRun, _Resource26);

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


var DriverPing = exports.DriverPing = function (_Resource27) {
  _inherits(DriverPing, _Resource27);

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


var DriverResource = exports.DriverResource = function (_Resource28) {
  _inherits(DriverResource, _Resource28);

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
var DriverWeek = exports.DriverWeek = function (_Resource29) {
  _inherits(DriverWeek, _Resource29);

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


var EmailMessage = exports.EmailMessage = function (_Resource30) {
  _inherits(EmailMessage, _Resource30);

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


var Event = exports.Event = function (_Resource31) {
  _inherits(Event, _Resource31);

  function Event() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Event);

    return _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, id, 'events', attributes, one, many));
  }

  // attributes

  /** @param {any} name **/


  _createClass(Event, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'numberOfPeople',


    /** @param {any} numberOfPeople **/
    set: function set(numberOfPeople) {
      this._attributes['number-of-people'] = numberOfPeople;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['number-of-people'];
    }
  }, {
    key: 'leadTime',


    /** @param {any} leadTime **/
    set: function set(leadTime) {
      this._attributes['lead-time'] = leadTime;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['lead-time'];
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
  }, {
    key: 'usageReport',


    /** @param {any} usageReport **/
    set: function set(usageReport) {
      this._attributes['usage-report'] = usageReport;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['usage-report'];
    }
  }]);

  return Event;
}(_resource2.default);

/** @class FeatureFlagDescription
  * @extends {Resource}
  **/
var FeatureFlagDescription = exports.FeatureFlagDescription = function (_Resource32) {
  _inherits(FeatureFlagDescription, _Resource32);

  function FeatureFlagDescription() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, FeatureFlagDescription);

    return _possibleConstructorReturn(this, (FeatureFlagDescription.__proto__ || Object.getPrototypeOf(FeatureFlagDescription)).call(this, id, 'feature-flag-descriptions', attributes, one, many));
  }

  // attributes

  /** @param {string} flagId **/


  _createClass(FeatureFlagDescription, [{
    key: 'flagId',
    set: function set(flagId) {
      this._attributes['flag-id'] = flagId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['flag-id'];
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
    key: 'isPlanFeature',


    /** @param {string} isPlanFeature **/
    set: function set(isPlanFeature) {
      this._attributes['is-plan-feature'] = isPlanFeature;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-plan-feature'];
    }
  }, {
    key: 'subscriptionPlans',


    // relationships


    /** @param {SubscriptionPlan[]} subscriptionPlans **/
    set: function set(subscriptionPlans) {
      this._many['subscription-plans'] = subscriptionPlans;
    },

    /** @type {SubscriptionPlan[]} */
    get: function get() {
      return this._many['subscription-plans'];
    }
  }]);

  return FeatureFlagDescription;
}(_resource2.default);

/** @class FoodType
  * @extends {Resource}
  **/


var FoodType = exports.FoodType = function (_Resource33) {
  _inherits(FoodType, _Resource33);

  function FoodType() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, FoodType);

    return _possibleConstructorReturn(this, (FoodType.__proto__ || Object.getPrototypeOf(FoodType)).call(this, id, 'food-types', attributes, one, many));
  }

  // attributes

  /** @param {string} emoji **/


  _createClass(FoodType, [{
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
  }]);

  return FoodType;
}(_resource2.default);

/** @class GiftbitCard
  * @extends {Resource}
  **/
var GiftbitCard = exports.GiftbitCard = function (_Resource34) {
  _inherits(GiftbitCard, _Resource34);

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
var GiftbitError = exports.GiftbitError = function (_Resource35) {
  _inherits(GiftbitError, _Resource35);

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


var GiftbitGift = exports.GiftbitGift = function (_Resource36) {
  _inherits(GiftbitGift, _Resource36);

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
    key: 'dollarsToPoints',


    /** @param {any} dollarsToPoints **/
    set: function set(dollarsToPoints) {
      this._attributes['dollars-to-points'] = dollarsToPoints;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['dollars-to-points'];
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
  }]);

  return GiftbitGift;
}(_resource2.default);

/** @class GroupOrderMember
  * @extends {Resource}
  **/
var GroupOrderMember = exports.GroupOrderMember = function (_Resource37) {
  _inherits(GroupOrderMember, _Resource37);

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
    key: 'notificationPreferences',


    /** @param {string} notificationPreferences **/
    set: function set(notificationPreferences) {
      this._attributes['notification-preferences'] = notificationPreferences;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['notification-preferences'];
    }
  }, {
    key: 'customFields',


    /** @param {string} customFields **/
    set: function set(customFields) {
      this._attributes['custom-fields'] = customFields;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['custom-fields'];
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
    key: 'invoice',


    /** @param {AccountingLedgerItem} invoice **/
    set: function set(invoice) {
      this._one['invoice'] = invoice;
    },

    /** @type {AccountingLedgerItem} */
    get: function get() {
      return this._one['invoice'];
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

/** @class HistorianVersion
  * @extends {Resource}
  **/


var HistorianVersion = exports.HistorianVersion = function (_Resource38) {
  _inherits(HistorianVersion, _Resource38);

  function HistorianVersion() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, HistorianVersion);

    return _possibleConstructorReturn(this, (HistorianVersion.__proto__ || Object.getPrototypeOf(HistorianVersion)).call(this, id, 'historian-versions', attributes, one, many));
  }

  // attributes

  /** @param {Date} createdAt **/


  _createClass(HistorianVersion, [{
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
    key: 'verb',


    /** @param {Date} verb **/
    set: function set(verb) {
      this._attributes['verb'] = verb;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['verb'];
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
    key: 'misc',


    /** @param {Date} misc **/
    set: function set(misc) {
      this._attributes['misc'] = misc;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['misc'];
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
  }, {
    key: 'email',


    /** @param {Date} email **/
    set: function set(email) {
      this._attributes['email'] = email;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['email'];
    }
  }]);

  return HistorianVersion;
}(_resource2.default);

/** @class Invoice
  * @extends {Resource}
  **/
var Invoice = exports.Invoice = function (_Resource39) {
  _inherits(Invoice, _Resource39);

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

/** @class InvoicingLedgerItem
  * @extends {Resource}
  **/
var InvoicingLedgerItem = exports.InvoicingLedgerItem = function (_Resource40) {
  _inherits(InvoicingLedgerItem, _Resource40);

  function InvoicingLedgerItem() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, InvoicingLedgerItem);

    return _possibleConstructorReturn(this, (InvoicingLedgerItem.__proto__ || Object.getPrototypeOf(InvoicingLedgerItem)).call(this, id, 'invoicing-ledger-items', attributes, one, many));
  }

  // attributes

  /** @param {Date} issueDate **/


  _createClass(InvoicingLedgerItem, [{
    key: 'issueDate',
    set: function set(issueDate) {
      this._attributes['issue-date'] = issueDate;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['issue-date'];
    }
  }, {
    key: 'identifier',


    /** @param {Date} identifier **/
    set: function set(identifier) {
      this._attributes['identifier'] = identifier;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['identifier'];
    }
  }, {
    key: 'currency',


    /** @param {Date} currency **/
    set: function set(currency) {
      this._attributes['currency'] = currency;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['currency'];
    }
  }, {
    key: 'totalAmount',


    /** @param {Date} totalAmount **/
    set: function set(totalAmount) {
      this._attributes['total-amount'] = totalAmount;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['total-amount'];
    }
  }, {
    key: 'netAmount',


    /** @param {Date} netAmount **/
    set: function set(netAmount) {
      this._attributes['net-amount'] = netAmount;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['net-amount'];
    }
  }, {
    key: 'taxAmount',


    /** @param {Date} taxAmount **/
    set: function set(taxAmount) {
      this._attributes['tax-amount'] = taxAmount;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['tax-amount'];
    }
  }, {
    key: 'description',


    /** @param {Date} description **/
    set: function set(description) {
      this._attributes['description'] = description;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['description'];
    }
  }, {
    key: 'dueDate',


    /** @param {Date} dueDate **/
    set: function set(dueDate) {
      this._attributes['due-date'] = dueDate;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['due-date'];
    }
  }, {
    key: 'status',


    /** @param {Date} status **/
    set: function set(status) {
      this._attributes['status'] = status;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['status'];
    }
  }, {
    key: 'customFields',


    /** @param {Date} customFields **/
    set: function set(customFields) {
      this._attributes['custom-fields'] = customFields;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['custom-fields'];
    }
  }, {
    key: 'senderDetails',


    /** @param {Date} senderDetails **/
    set: function set(senderDetails) {
      this._attributes['sender-details'] = senderDetails;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['sender-details'];
    }
  }, {
    key: 'pdf',


    /** @param {Date} pdf **/
    set: function set(pdf) {
      this._attributes['pdf'] = pdf;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['pdf'];
    }
  }, {
    key: 'xeroId',


    /** @param {Date} xeroId **/
    set: function set(xeroId) {
      this._attributes['xero-id'] = xeroId;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['xero-id'];
    }
  }, {
    key: 'ledgerType',


    /** @param {Date} ledgerType **/
    set: function set(ledgerType) {
      this._attributes['ledger-type'] = ledgerType;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['ledger-type'];
    }
  }]);

  return InvoicingLedgerItem;
}(_resource2.default);

/** @class InvoicingTaxRate
  * @extends {Resource}
  **/
var InvoicingTaxRate = exports.InvoicingTaxRate = function (_Resource41) {
  _inherits(InvoicingTaxRate, _Resource41);

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
    key: 'areas',


    // relationships


    /** @param {Area[]} areas **/
    set: function set(areas) {
      this._many['areas'] = areas;
    },

    /** @type {Area[]} */
    get: function get() {
      return this._many['areas'];
    }
  }]);

  return InvoicingTaxRate;
}(_resource2.default);

/** @class Location
  * @extends {Resource}
  **/


var Location = exports.Location = function (_Resource42) {
  _inherits(Location, _Resource42);

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
    key: 'addressLine2',


    /** @param {*} addressLine2 **/
    set: function set(addressLine2) {
      this._attributes['address-line-2'] = addressLine2;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['address-line-2'];
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

/** @class LogisticsArrivalEstimate
  * @extends {Resource}
  **/


var LogisticsArrivalEstimate = exports.LogisticsArrivalEstimate = function (_Resource43) {
  _inherits(LogisticsArrivalEstimate, _Resource43);

  function LogisticsArrivalEstimate() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, LogisticsArrivalEstimate);

    return _possibleConstructorReturn(this, (LogisticsArrivalEstimate.__proto__ || Object.getPrototypeOf(LogisticsArrivalEstimate)).call(this, id, 'logistics-arrival-estimates', attributes, one, many));
  }

  // attributes

  /** @param {any} pickupEstimate **/


  _createClass(LogisticsArrivalEstimate, [{
    key: 'pickupEstimate',
    set: function set(pickupEstimate) {
      this._attributes['pickup-estimate'] = pickupEstimate;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['pickup-estimate'];
    }
  }, {
    key: 'deliveryEstimate',


    /** @param {any} deliveryEstimate **/
    set: function set(deliveryEstimate) {
      this._attributes['delivery-estimate'] = deliveryEstimate;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['delivery-estimate'];
    }
  }, {
    key: 'orderId',


    /** @param {any} orderId **/
    set: function set(orderId) {
      this._attributes['order-id'] = orderId;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['order-id'];
    }
  }]);

  return LogisticsArrivalEstimate;
}(_resource2.default);

/** @class LogisticsDelivery
  * @extends {Resource}
  **/
var LogisticsDelivery = exports.LogisticsDelivery = function (_Resource44) {
  _inherits(LogisticsDelivery, _Resource44);

  function LogisticsDelivery() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, LogisticsDelivery);

    return _possibleConstructorReturn(this, (LogisticsDelivery.__proto__ || Object.getPrototypeOf(LogisticsDelivery)).call(this, id, 'logistics-deliveries', attributes, one, many));
  }

  // attributes

  /** @param {string} alertStatus **/


  _createClass(LogisticsDelivery, [{
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
    key: 'deskCases',


    /** @param {string} deskCases **/
    set: function set(deskCases) {
      this._attributes['desk-cases'] = deskCases;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['desk-cases'];
    }
  }, {
    key: 'deliveryCases',


    /** @param {string} deliveryCases **/
    set: function set(deliveryCases) {
      this._attributes['delivery-cases'] = deliveryCases;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['delivery-cases'];
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
    key: 'deliveryEstimate',


    /** @param {string} deliveryEstimate **/
    set: function set(deliveryEstimate) {
      this._attributes['delivery-estimate'] = deliveryEstimate;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['delivery-estimate'];
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
    key: 'logisticsType',


    /** @param {string} logisticsType **/
    set: function set(logisticsType) {
      this._attributes['logistics-type'] = logisticsType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['logistics-type'];
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
    key: 'orderImages',


    /** @param {string} orderImages **/
    set: function set(orderImages) {
      this._attributes['order-images'] = orderImages;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-images'];
    }
  }, {
    key: 'orderItems',


    /** @param {jsonb} orderItems **/
    set: function set(orderItems) {
      this._attributes['order-items'] = orderItems;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['order-items'];
    }
  }, {
    key: 'orderType',


    /** @param {string} orderType **/
    set: function set(orderType) {
      this._attributes['order-type'] = orderType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-type'];
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
    key: 'syncedWithThirdPartyLogisticsAt',


    /** @param {string} syncedWithThirdPartyLogisticsAt **/
    set: function set(syncedWithThirdPartyLogisticsAt) {
      this._attributes['synced-with-third-party-logistics-at'] = syncedWithThirdPartyLogisticsAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['synced-with-third-party-logistics-at'];
    }
  }, {
    key: 'thirdPartyLogisticsException',


    /** @param {string} thirdPartyLogisticsException **/
    set: function set(thirdPartyLogisticsException) {
      this._attributes['third-party-logistics-exception'] = thirdPartyLogisticsException;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['third-party-logistics-exception'];
    }
  }, {
    key: 'thirdPartyLogisticsId',


    /** @param {string} thirdPartyLogisticsId **/
    set: function set(thirdPartyLogisticsId) {
      this._attributes['third-party-logistics-id'] = thirdPartyLogisticsId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['third-party-logistics-id'];
    }
  }, {
    key: 'thirdPartyLogisticsTrackingUrl',


    /** @param {string} thirdPartyLogisticsTrackingUrl **/
    set: function set(thirdPartyLogisticsTrackingUrl) {
      this._attributes['third-party-logistics-tracking-url'] = thirdPartyLogisticsTrackingUrl;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['third-party-logistics-tracking-url'];
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
    key: 'contact',


    /** @param {jsonb} contact **/
    set: function set(contact) {
      this._attributes['contact'] = contact;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['contact'];
    }
  }, {
    key: 'owner',


    /** @param {jsonb} owner **/
    set: function set(owner) {
      this._attributes['owner'] = owner;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['owner'];
    }
  }, {
    key: 'client',


    /** @param {jsonb} client **/
    set: function set(client) {
      this._attributes['client'] = client;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['client'];
    }
  }, {
    key: 'restaurant',


    /** @param {jsonb} restaurant **/
    set: function set(restaurant) {
      this._attributes['restaurant'] = restaurant;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['restaurant'];
    }
  }, {
    key: 'clientLocation',


    /** @param {jsonb} clientLocation **/
    set: function set(clientLocation) {
      this._attributes['client-location'] = clientLocation;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['client-location'];
    }
  }, {
    key: 'restaurantLocation',


    /** @param {jsonb} restaurantLocation **/
    set: function set(restaurantLocation) {
      this._attributes['restaurant-location'] = restaurantLocation;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['restaurant-location'];
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
    key: 'area',


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
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

  return LogisticsDelivery;
}(_resource2.default);

/** @class MealPlan
  * @extends {Resource}
  **/


var MealPlan = exports.MealPlan = function (_Resource45) {
  _inherits(MealPlan, _Resource45);

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
    key: 'customCss',


    /** @param {string} customCss **/
    set: function set(customCss) {
      this._attributes['custom-css'] = customCss;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['custom-css'];
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
    key: 'nameLabel',


    /** @param {string} nameLabel **/
    set: function set(nameLabel) {
      this._attributes['name-label'] = nameLabel;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name-label'];
    }
  }, {
    key: 'nameLabelPlaceholder',


    /** @param {string} nameLabelPlaceholder **/
    set: function set(nameLabelPlaceholder) {
      this._attributes['name-label-placeholder'] = nameLabelPlaceholder;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name-label-placeholder'];
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
    key: 'defaultOpensAtLeadTime',


    /** @param {string} defaultOpensAtLeadTime **/
    set: function set(defaultOpensAtLeadTime) {
      this._attributes['default-opens-at-lead-time'] = defaultOpensAtLeadTime;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['default-opens-at-lead-time'];
    }
  }, {
    key: 'alwaysRequestDepartment',


    /** @param {string} alwaysRequestDepartment **/
    set: function set(alwaysRequestDepartment) {
      this._attributes['always-request-department'] = alwaysRequestDepartment;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['always-request-department'];
    }
  }, {
    key: 'departmentLabel',


    /** @param {string} departmentLabel **/
    set: function set(departmentLabel) {
      this._attributes['department-label'] = departmentLabel;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['department-label'];
    }
  }, {
    key: 'departmentOptions',


    /** @param {string} departmentOptions **/
    set: function set(departmentOptions) {
      this._attributes['department-options'] = departmentOptions;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['department-options'];
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
    key: 'ssoType',


    /** @param {string} ssoType **/
    set: function set(ssoType) {
      this._attributes['sso-type'] = ssoType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['sso-type'];
    }
  }, {
    key: 'samlSettings',


    /** @param {string} samlSettings **/
    set: function set(samlSettings) {
      this._attributes['saml-settings'] = samlSettings;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['saml-settings'];
    }
  }, {
    key: 'samlIdpMetadataXml',


    /** @param {string} samlIdpMetadataXml **/
    set: function set(samlIdpMetadataXml) {
      this._attributes['saml-idp-metadata-xml'] = samlIdpMetadataXml;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['saml-idp-metadata-xml'];
    }
  }, {
    key: 'oauthSettings',


    /** @param {string} oauthSettings **/
    set: function set(oauthSettings) {
      this._attributes['oauth-settings'] = oauthSettings;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['oauth-settings'];
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
    key: 'customFields',


    /** @param {jsonb} customFields **/
    set: function set(customFields) {
      this._attributes['custom-fields'] = customFields;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['custom-fields'];
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

/** @class MealPlanningEvent
  * @extends {Resource}
  **/


var MealPlanningEvent = exports.MealPlanningEvent = function (_Resource46) {
  _inherits(MealPlanningEvent, _Resource46);

  function MealPlanningEvent() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningEvent);

    return _possibleConstructorReturn(this, (MealPlanningEvent.__proto__ || Object.getPrototypeOf(MealPlanningEvent)).call(this, id, 'meal-planning-events', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MealPlanningEvent, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'leadTime',


    /** @param {string} leadTime **/
    set: function set(leadTime) {
      this._attributes['lead-time'] = leadTime;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['lead-time'];
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
    key: 'mealId',


    /** @param {string} mealId **/
    set: function set(mealId) {
      this._attributes['meal-id'] = mealId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['meal-id'];
    }
  }, {
    key: 'userOrderMap',


    /** @param {string} userOrderMap **/
    set: function set(userOrderMap) {
      this._attributes['user-order-map'] = userOrderMap;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['user-order-map'];
    }
  }, {
    key: 'createdFromTemplate',


    /** @param {string} createdFromTemplate **/
    set: function set(createdFromTemplate) {
      this._attributes['created-from-template'] = createdFromTemplate;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['created-from-template'];
    }
  }, {
    key: 'usageReport',


    /** @param {string} usageReport **/
    set: function set(usageReport) {
      this._attributes['usage-report'] = usageReport;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['usage-report'];
    }
  }, {
    key: 'instance',


    // relationships


    /** @param {MealPlanningInstance} instance **/
    set: function set(instance) {
      this._one['instance'] = instance;
    },

    /** @type {MealPlanningInstance} */
    get: function get() {
      return this._one['instance'];
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
    key: 'reservations',


    /** @param {MealPlanningReservation[]} reservations **/
    set: function set(reservations) {
      this._many['reservations'] = reservations;
    },

    /** @type {MealPlanningReservation[]} */
    get: function get() {
      return this._many['reservations'];
    }
  }, {
    key: 'restaurantConstraints',


    /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
    set: function set(restaurantConstraints) {
      this._many['restaurant-constraints'] = restaurantConstraints;
    },

    /** @type {MealPlanningRestaurantConstraint[]} */
    get: function get() {
      return this._many['restaurant-constraints'];
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

  return MealPlanningEvent;
}(_resource2.default);

/** @class MealPlanningInstance
  * @extends {Resource}
  **/


var MealPlanningInstance = exports.MealPlanningInstance = function (_Resource47) {
  _inherits(MealPlanningInstance, _Resource47);

  function MealPlanningInstance() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningInstance);

    return _possibleConstructorReturn(this, (MealPlanningInstance.__proto__ || Object.getPrototypeOf(MealPlanningInstance)).call(this, id, 'meal-planning-instances', attributes, one, many));
  }

  // attributes

  /** @param {jsonb} plan **/


  _createClass(MealPlanningInstance, [{
    key: 'plan',
    set: function set(plan) {
      this._attributes['plan'] = plan;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['plan'];
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
    key: 'startOfWeek',


    /** @param {string} startOfWeek **/
    set: function set(startOfWeek) {
      this._attributes['start-of-week'] = startOfWeek;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['start-of-week'];
    }
  }, {
    key: 'buildGroupOrders',


    /** @param {string} buildGroupOrders **/
    set: function set(buildGroupOrders) {
      this._attributes['build-group-orders'] = buildGroupOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['build-group-orders'];
    }
  }, {
    key: 'newWeight',


    /** @param {string} newWeight **/
    set: function set(newWeight) {
      this._attributes['new-weight'] = newWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['new-weight'];
    }
  }, {
    key: 'favWeight',


    /** @param {string} favWeight **/
    set: function set(favWeight) {
      this._attributes['fav-weight'] = favWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['fav-weight'];
    }
  }, {
    key: 'popularityWeight',


    /** @param {string} popularityWeight **/
    set: function set(popularityWeight) {
      this._attributes['popularity-weight'] = popularityWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['popularity-weight'];
    }
  }, {
    key: 'lastWeekWeight',


    /** @param {string} lastWeekWeight **/
    set: function set(lastWeekWeight) {
      this._attributes['last-week-weight'] = lastWeekWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-week-weight'];
    }
  }, {
    key: 'lastWeekOffset',


    /** @param {string} lastWeekOffset **/
    set: function set(lastWeekOffset) {
      this._attributes['last-week-offset'] = lastWeekOffset;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-week-offset'];
    }
  }, {
    key: 'maxUsesPerWeek',


    /** @param {string} maxUsesPerWeek **/
    set: function set(maxUsesPerWeek) {
      this._attributes['max-uses-per-week'] = maxUsesPerWeek;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-uses-per-week'];
    }
  }, {
    key: 'maxUsesPerDay',


    /** @param {string} maxUsesPerDay **/
    set: function set(maxUsesPerDay) {
      this._attributes['max-uses-per-day'] = maxUsesPerDay;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-uses-per-day'];
    }
  }, {
    key: 'maxUsesPerMeal',


    /** @param {string} maxUsesPerMeal **/
    set: function set(maxUsesPerMeal) {
      this._attributes['max-uses-per-meal'] = maxUsesPerMeal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-uses-per-meal'];
    }
  }, {
    key: 'smallestLeadTime',


    /** @param {string} smallestLeadTime **/
    set: function set(smallestLeadTime) {
      this._attributes['smallest-lead-time'] = smallestLeadTime;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['smallest-lead-time'];
    }
  }, {
    key: 'teamMembersCount',


    /** @param {string} teamMembersCount **/
    set: function set(teamMembersCount) {
      this._attributes['team-members-count'] = teamMembersCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['team-members-count'];
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
    key: 'allowRepeats',


    /** @param {string} allowRepeats **/
    set: function set(allowRepeats) {
      this._attributes['allow-repeats'] = allowRepeats;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['allow-repeats'];
    }
  }, {
    key: 'useTeamProfiles',


    /** @param {string} useTeamProfiles **/
    set: function set(useTeamProfiles) {
      this._attributes['use-team-profiles'] = useTeamProfiles;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['use-team-profiles'];
    }
  }, {
    key: 'ignoreEmptyConstraints',


    /** @param {string} ignoreEmptyConstraints **/
    set: function set(ignoreEmptyConstraints) {
      this._attributes['ignore-empty-constraints'] = ignoreEmptyConstraints;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['ignore-empty-constraints'];
    }
  }, {
    key: 'ignoredConstraints',


    /** @param {string} ignoredConstraints **/
    set: function set(ignoredConstraints) {
      this._attributes['ignored-constraints'] = ignoredConstraints;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['ignored-constraints'];
    }
  }, {
    key: 'disabledPreferences',


    /** @param {string} disabledPreferences **/
    set: function set(disabledPreferences) {
      this._attributes['disabled-preferences'] = disabledPreferences;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['disabled-preferences'];
    }
  }, {
    key: 'excludedPreferenceIds',


    /** @param {string} excludedPreferenceIds **/
    set: function set(excludedPreferenceIds) {
      this._attributes['excluded-preference-ids'] = excludedPreferenceIds;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['excluded-preference-ids'];
    }
  }, {
    key: 'isRecurring',


    /** @param {string} isRecurring **/
    set: function set(isRecurring) {
      this._attributes['is-recurring'] = isRecurring;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-recurring'];
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
    key: 'area',


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }, {
    key: 'mealPlanningTemplate',


    /** @param {MealPlanningTemplate} mealPlanningTemplate **/
    set: function set(mealPlanningTemplate) {
      this._one['meal-planning-template'] = mealPlanningTemplate;
    },

    /** @type {MealPlanningTemplate} */
    get: function get() {
      return this._one['meal-planning-template'];
    }
  }, {
    key: 'preferenceProfile',


    /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
    set: function set(preferenceProfile) {
      this._one['preference-profile'] = preferenceProfile;
    },

    /** @type {MealPlanningPreferenceProfile} */
    get: function get() {
      return this._one['preference-profile'];
    }
  }, {
    key: 'orderTemplate',


    /** @param {Order} orderTemplate **/
    set: function set(orderTemplate) {
      this._one['order-template'] = orderTemplate;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order-template'];
    }
  }, {
    key: 'defaultOrderOwner',


    /** @param {User} defaultOrderOwner **/
    set: function set(defaultOrderOwner) {
      this._one['default-order-owner'] = defaultOrderOwner;
    },

    /** @type {User} */
    get: function get() {
      return this._one['default-order-owner'];
    }
  }, {
    key: 'mealPlanningReservations',


    /** @param {MealPlanningReservation[]} mealPlanningReservations **/
    set: function set(mealPlanningReservations) {
      this._many['meal-planning-reservations'] = mealPlanningReservations;
    },

    /** @type {MealPlanningReservation[]} */
    get: function get() {
      return this._many['meal-planning-reservations'];
    }
  }, {
    key: 'events',


    /** @param {MealPlanningEvent[]} events **/
    set: function set(events) {
      this._many['events'] = events;
    },

    /** @type {MealPlanningEvent[]} */
    get: function get() {
      return this._many['events'];
    }
  }, {
    key: 'restaurantConstraints',


    /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
    set: function set(restaurantConstraints) {
      this._many['restaurant-constraints'] = restaurantConstraints;
    },

    /** @type {MealPlanningRestaurantConstraint[]} */
    get: function get() {
      return this._many['restaurant-constraints'];
    }
  }, {
    key: 'teamMembers',


    /** @param {User[]} teamMembers **/
    set: function set(teamMembers) {
      this._many['team-members'] = teamMembers;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['team-members'];
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
    key: 'logRecords',


    /** @param {MealPlanningLogRecord[]} logRecords **/
    set: function set(logRecords) {
      this._many['log-records'] = logRecords;
    },

    /** @type {MealPlanningLogRecord[]} */
    get: function get() {
      return this._many['log-records'];
    }
  }]);

  return MealPlanningInstance;
}(_resource2.default);

/** @class MealPlanningLogRecord
  * @extends {Resource}
  **/


var MealPlanningLogRecord = exports.MealPlanningLogRecord = function (_Resource48) {
  _inherits(MealPlanningLogRecord, _Resource48);

  function MealPlanningLogRecord() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningLogRecord);

    return _possibleConstructorReturn(this, (MealPlanningLogRecord.__proto__ || Object.getPrototypeOf(MealPlanningLogRecord)).call(this, id, 'meal-planning-log-records', attributes, one, many));
  }

  // attributes

  /** @param {Date} createdAt **/


  _createClass(MealPlanningLogRecord, [{
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes['created-at'] = createdAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['created-at'];
    }
  }, {
    key: 'text',


    /** @param {Date} text **/
    set: function set(text) {
      this._attributes['text'] = text;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['text'];
    }
  }, {
    key: 'solverLog',


    /** @param {Date} solverLog **/
    set: function set(solverLog) {
      this._attributes['solver-log'] = solverLog;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['solver-log'];
    }
  }, {
    key: 'foodeeEmployee',


    /** @param {Date} foodeeEmployee **/
    set: function set(foodeeEmployee) {
      this._attributes['foodee-employee'] = foodeeEmployee;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['foodee-employee'];
    }
  }, {
    key: 'logType',


    /** @param {Date} logType **/
    set: function set(logType) {
      this._attributes['log-type'] = logType;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['log-type'];
    }
  }, {
    key: 'planable',


    // relationships


    /** @param {Planable} planable **/
    set: function set(planable) {
      this._one['planable'] = planable;
    },

    /** @type {Planable} */
    get: function get() {
      return this._one['planable'];
    }
  }]);

  return MealPlanningLogRecord;
}(_resource2.default);

/** @class MealPlanningPreferenceProfile
  * @extends {Resource}
  **/


var MealPlanningPreferenceProfile = exports.MealPlanningPreferenceProfile = function (_Resource49) {
  _inherits(MealPlanningPreferenceProfile, _Resource49);

  function MealPlanningPreferenceProfile() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningPreferenceProfile);

    return _possibleConstructorReturn(this, (MealPlanningPreferenceProfile.__proto__ || Object.getPrototypeOf(MealPlanningPreferenceProfile)).call(this, id, 'meal-planning-preference-profiles', attributes, one, many));
  }

  // attributes

  /** @param {any} searchBudget **/


  _createClass(MealPlanningPreferenceProfile, [{
    key: 'searchBudget',
    set: function set(searchBudget) {
      this._attributes['search-budget'] = searchBudget;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['search-budget'];
    }
  }, {
    key: 'searchBudgetEnabled',


    /** @param {any} searchBudgetEnabled **/
    set: function set(searchBudgetEnabled) {
      this._attributes['search-budget-enabled'] = searchBudgetEnabled;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['search-budget-enabled'];
    }
  }, {
    key: 'preferee',


    // relationships


    /** @param {Preferee} preferee **/
    set: function set(preferee) {
      this._one['preferee'] = preferee;
    },

    /** @type {Preferee} */
    get: function get() {
      return this._one['preferee'];
    }
  }, {
    key: 'requirements',


    /** @param {MealPlanningRequirement[]} requirements **/
    set: function set(requirements) {
      this._many['requirements'] = requirements;
    },

    /** @type {MealPlanningRequirement[]} */
    get: function get() {
      return this._many['requirements'];
    }
  }, {
    key: 'requirementGroups',


    /** @param {MealPlanningRequirementGroup[]} requirementGroups **/
    set: function set(requirementGroups) {
      this._many['requirement-groups'] = requirementGroups;
    },

    /** @type {MealPlanningRequirementGroup[]} */
    get: function get() {
      return this._many['requirement-groups'];
    }
  }, {
    key: 'lovedRestaurants',


    /** @param {Restaurant[]} lovedRestaurants **/
    set: function set(lovedRestaurants) {
      this._many['loved-restaurants'] = lovedRestaurants;
    },

    /** @type {Restaurant[]} */
    get: function get() {
      return this._many['loved-restaurants'];
    }
  }, {
    key: 'hatedRestaurants',


    /** @param {Restaurant[]} hatedRestaurants **/
    set: function set(hatedRestaurants) {
      this._many['hated-restaurants'] = hatedRestaurants;
    },

    /** @type {Restaurant[]} */
    get: function get() {
      return this._many['hated-restaurants'];
    }
  }, {
    key: 'lovedCuisineTypes',


    /** @param {Tag[]} lovedCuisineTypes **/
    set: function set(lovedCuisineTypes) {
      this._many['loved-cuisine-types'] = lovedCuisineTypes;
    },

    /** @type {Tag[]} */
    get: function get() {
      return this._many['loved-cuisine-types'];
    }
  }, {
    key: 'hatedCuisineTypes',


    /** @param {Tag[]} hatedCuisineTypes **/
    set: function set(hatedCuisineTypes) {
      this._many['hated-cuisine-types'] = hatedCuisineTypes;
    },

    /** @type {Tag[]} */
    get: function get() {
      return this._many['hated-cuisine-types'];
    }
  }]);

  return MealPlanningPreferenceProfile;
}(_resource2.default);

/** @class MealPlanningRequirement
  * @extends {Resource}
  **/


var MealPlanningRequirement = exports.MealPlanningRequirement = function (_Resource50) {
  _inherits(MealPlanningRequirement, _Resource50);

  function MealPlanningRequirement() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningRequirement);

    return _possibleConstructorReturn(this, (MealPlanningRequirement.__proto__ || Object.getPrototypeOf(MealPlanningRequirement)).call(this, id, 'meal-planning-requirements', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MealPlanningRequirement, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'numberOfOptions',


    /** @param {string} numberOfOptions **/
    set: function set(numberOfOptions) {
      this._attributes['number-of-options'] = numberOfOptions;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['number-of-options'];
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
    key: 'maxPrice',


    /** @param {string} maxPrice **/
    set: function set(maxPrice) {
      this._attributes['max-price'] = maxPrice;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-price'];
    }
  }, {
    key: 'minPrice',


    /** @param {string} minPrice **/
    set: function set(minPrice) {
      this._attributes['min-price'] = minPrice;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['min-price'];
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
    key: 'composition',


    /** @param {string} composition **/
    set: function set(composition) {
      this._attributes['composition'] = composition;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['composition'];
    }
  }, {
    key: 'preferenceProfile',


    // relationships


    /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
    set: function set(preferenceProfile) {
      this._one['preference-profile'] = preferenceProfile;
    },

    /** @type {MealPlanningPreferenceProfile} */
    get: function get() {
      return this._one['preference-profile'];
    }
  }, {
    key: 'requirementGroup',


    /** @param {MealPlanningRequirementGroup} requirementGroup **/
    set: function set(requirementGroup) {
      this._one['requirement-group'] = requirementGroup;
    },

    /** @type {MealPlanningRequirementGroup} */
    get: function get() {
      return this._one['requirement-group'];
    }
  }, {
    key: 'restaurantConstraint',


    /** @param {MealPlanningRestaurantConstraint} restaurantConstraint **/
    set: function set(restaurantConstraint) {
      this._one['restaurant-constraint'] = restaurantConstraint;
    },

    /** @type {MealPlanningRestaurantConstraint} */
    get: function get() {
      return this._one['restaurant-constraint'];
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
    key: 'requirementConstraints',


    /** @param {MealPlanningRequirementConstraint[]} requirementConstraints **/
    set: function set(requirementConstraints) {
      this._many['requirement-constraints'] = requirementConstraints;
    },

    /** @type {MealPlanningRequirementConstraint[]} */
    get: function get() {
      return this._many['requirement-constraints'];
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
    key: 'allergyTags',


    /** @param {DietaryTag[]} allergyTags **/
    set: function set(allergyTags) {
      this._many['allergy-tags'] = allergyTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['allergy-tags'];
    }
  }, {
    key: 'packagingTags',


    /** @param {DietaryTag[]} packagingTags **/
    set: function set(packagingTags) {
      this._many['packaging-tags'] = packagingTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['packaging-tags'];
    }
  }, {
    key: 'foodTypes',


    /** @param {FoodType[]} foodTypes **/
    set: function set(foodTypes) {
      this._many['food-types'] = foodTypes;
    },

    /** @type {FoodType[]} */
    get: function get() {
      return this._many['food-types'];
    }
  }, {
    key: 'mealTypes',


    /** @param {MealType[]} mealTypes **/
    set: function set(mealTypes) {
      this._many['meal-types'] = mealTypes;
    },

    /** @type {MealType[]} */
    get: function get() {
      return this._many['meal-types'];
    }
  }]);

  return MealPlanningRequirement;
}(_resource2.default);

/** @class MealPlanningRequirementConstraint
  * @extends {Resource}
  **/


var MealPlanningRequirementConstraint = exports.MealPlanningRequirementConstraint = function (_Resource51) {
  _inherits(MealPlanningRequirementConstraint, _Resource51);

  function MealPlanningRequirementConstraint() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningRequirementConstraint);

    return _possibleConstructorReturn(this, (MealPlanningRequirementConstraint.__proto__ || Object.getPrototypeOf(MealPlanningRequirementConstraint)).call(this, id, 'meal-planning-requirement-constraints', attributes, one, many));
  }

  // attributes

  /** @param {string} tagType **/


  _createClass(MealPlanningRequirementConstraint, [{
    key: 'tagType',
    set: function set(tagType) {
      this._attributes['tag-type'] = tagType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['tag-type'];
    }
  }, {
    key: 'constraintType',


    /** @param {string} constraintType **/
    set: function set(constraintType) {
      this._attributes['constraint-type'] = constraintType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['constraint-type'];
    }
  }, {
    key: 'isReadonly',


    /** @param {string} isReadonly **/
    set: function set(isReadonly) {
      this._attributes['is-readonly'] = isReadonly;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-readonly'];
    }
  }, {
    key: 'requirement',


    // relationships


    /** @param {MealPlanningRequirement} requirement **/
    set: function set(requirement) {
      this._one['requirement'] = requirement;
    },

    /** @type {MealPlanningRequirement} */
    get: function get() {
      return this._one['requirement'];
    }
  }, {
    key: 'mealTypes',


    /** @param {MealType[]} mealTypes **/
    set: function set(mealTypes) {
      this._many['meal-types'] = mealTypes;
    },

    /** @type {MealType[]} */
    get: function get() {
      return this._many['meal-types'];
    }
  }, {
    key: 'foodTypes',


    /** @param {FoodType[]} foodTypes **/
    set: function set(foodTypes) {
      this._many['food-types'] = foodTypes;
    },

    /** @type {FoodType[]} */
    get: function get() {
      return this._many['food-types'];
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
    key: 'allergyTags',


    /** @param {DietaryTag[]} allergyTags **/
    set: function set(allergyTags) {
      this._many['allergy-tags'] = allergyTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['allergy-tags'];
    }
  }, {
    key: 'packagingTags',


    /** @param {DietaryTag[]} packagingTags **/
    set: function set(packagingTags) {
      this._many['packaging-tags'] = packagingTags;
    },

    /** @type {DietaryTag[]} */
    get: function get() {
      return this._many['packaging-tags'];
    }
  }]);

  return MealPlanningRequirementConstraint;
}(_resource2.default);

/** @class MealPlanningRequirementGroup
  * @extends {Resource}
  **/


var MealPlanningRequirementGroup = exports.MealPlanningRequirementGroup = function (_Resource52) {
  _inherits(MealPlanningRequirementGroup, _Resource52);

  function MealPlanningRequirementGroup() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningRequirementGroup);

    return _possibleConstructorReturn(this, (MealPlanningRequirementGroup.__proto__ || Object.getPrototypeOf(MealPlanningRequirementGroup)).call(this, id, 'meal-planning-requirement-groups', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MealPlanningRequirementGroup, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
    }
  }, {
    key: 'budget',


    /** @param {string} budget **/
    set: function set(budget) {
      this._attributes['budget'] = budget;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['budget'];
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
    key: 'portionSize',


    /** @param {string} portionSize **/
    set: function set(portionSize) {
      this._attributes['portion-size'] = portionSize;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['portion-size'];
    }
  }, {
    key: 'isSharingStyleGroup',


    /** @param {string} isSharingStyleGroup **/
    set: function set(isSharingStyleGroup) {
      this._attributes['is-sharing-style-group'] = isSharingStyleGroup;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-sharing-style-group'];
    }
  }, {
    key: 'preferenceProfile',


    // relationships


    /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
    set: function set(preferenceProfile) {
      this._one['preference-profile'] = preferenceProfile;
    },

    /** @type {MealPlanningPreferenceProfile} */
    get: function get() {
      return this._one['preference-profile'];
    }
  }, {
    key: 'requirements',


    /** @param {MealPlanningRequirement[]} requirements **/
    set: function set(requirements) {
      this._many['requirements'] = requirements;
    },

    /** @type {MealPlanningRequirement[]} */
    get: function get() {
      return this._many['requirements'];
    }
  }]);

  return MealPlanningRequirementGroup;
}(_resource2.default);

/** @class MealPlanningReservation
  * @extends {Resource}
  **/


var MealPlanningReservation = exports.MealPlanningReservation = function (_Resource53) {
  _inherits(MealPlanningReservation, _Resource53);

  function MealPlanningReservation() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningReservation);

    return _possibleConstructorReturn(this, (MealPlanningReservation.__proto__ || Object.getPrototypeOf(MealPlanningReservation)).call(this, id, 'meal-planning-reservations', attributes, one, many));
  }

  // attributes

  /** @param {string} state **/


  _createClass(MealPlanningReservation, [{
    key: 'state',
    set: function set(state) {
      this._attributes['state'] = state;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['state'];
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
    key: 'requestedCapacity',


    /** @param {string} requestedCapacity **/
    set: function set(requestedCapacity) {
      this._attributes['requested-capacity'] = requestedCapacity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['requested-capacity'];
    }
  }, {
    key: 'favourite',


    /** @param {string} favourite **/
    set: function set(favourite) {
      this._attributes['favourite'] = favourite;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['favourite'];
    }
  }, {
    key: 'favouriteCount',


    /** @param {string} favouriteCount **/
    set: function set(favouriteCount) {
      this._attributes['favourite-count'] = favouriteCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['favourite-count'];
    }
  }, {
    key: 'favouriteCuisine',


    /** @param {string} favouriteCuisine **/
    set: function set(favouriteCuisine) {
      this._attributes['favourite-cuisine'] = favouriteCuisine;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['favourite-cuisine'];
    }
  }, {
    key: 'favouriteCuisineCount',


    /** @param {string} favouriteCuisineCount **/
    set: function set(favouriteCuisineCount) {
      this._attributes['favourite-cuisine-count'] = favouriteCuisineCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['favourite-cuisine-count'];
    }
  }, {
    key: 'lastWeek',


    /** @param {string} lastWeek **/
    set: function set(lastWeek) {
      this._attributes['last-week'] = lastWeek;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-week'];
    }
  }, {
    key: 'first',


    /** @param {string} first **/
    set: function set(first) {
      this._attributes['first'] = first;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['first'];
    }
  }, {
    key: 'percentRank',


    /** @param {string} percentRank **/
    set: function set(percentRank) {
      this._attributes['percent-rank'] = percentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['percent-rank'];
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
    key: 'mealPlanningInstance',


    /** @param {MealPlanningInstance} mealPlanningInstance **/
    set: function set(mealPlanningInstance) {
      this._one['meal-planning-instance'] = mealPlanningInstance;
    },

    /** @type {MealPlanningInstance} */
    get: function get() {
      return this._one['meal-planning-instance'];
    }
  }, {
    key: 'event',


    /** @param {MealPlanningEvent} event **/
    set: function set(event) {
      this._one['event'] = event;
    },

    /** @type {MealPlanningEvent} */
    get: function get() {
      return this._one['event'];
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

  return MealPlanningReservation;
}(_resource2.default);

/** @class MealPlanningRestaurantConstraint
  * @extends {Resource}
  **/


var MealPlanningRestaurantConstraint = exports.MealPlanningRestaurantConstraint = function (_Resource54) {
  _inherits(MealPlanningRestaurantConstraint, _Resource54);

  function MealPlanningRestaurantConstraint() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningRestaurantConstraint);

    return _possibleConstructorReturn(this, (MealPlanningRestaurantConstraint.__proto__ || Object.getPrototypeOf(MealPlanningRestaurantConstraint)).call(this, id, 'meal-planning-restaurant-constraints', attributes, one, many));
  }

  // attributes

  /** @param {string} name **/


  _createClass(MealPlanningRestaurantConstraint, [{
    key: 'name',
    set: function set(name) {
      this._attributes['name'] = name;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['name'];
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
    key: 'constraintType',


    /** @param {string} constraintType **/
    set: function set(constraintType) {
      this._attributes['constraint-type'] = constraintType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['constraint-type'];
    }
  }, {
    key: 'template',


    // relationships


    /** @param {MealPlanningTemplate} template **/
    set: function set(template) {
      this._one['template'] = template;
    },

    /** @type {MealPlanningTemplate} */
    get: function get() {
      return this._one['template'];
    }
  }, {
    key: 'instance',


    /** @param {MealPlanningInstance} instance **/
    set: function set(instance) {
      this._one['instance'] = instance;
    },

    /** @type {MealPlanningInstance} */
    get: function get() {
      return this._one['instance'];
    }
  }, {
    key: 'event',


    /** @param {MealPlanningEvent} event **/
    set: function set(event) {
      this._one['event'] = event;
    },

    /** @type {MealPlanningEvent} */
    get: function get() {
      return this._one['event'];
    }
  }, {
    key: 'requirement',


    /** @param {MealPlanningRequirement} requirement **/
    set: function set(requirement) {
      this._one['requirement'] = requirement;
    },

    /** @type {MealPlanningRequirement} */
    get: function get() {
      return this._one['requirement'];
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
  }]);

  return MealPlanningRestaurantConstraint;
}(_resource2.default);

/** @class MealPlanningSchedule
  * @extends {Resource}
  **/


var MealPlanningSchedule = exports.MealPlanningSchedule = function (_Resource55) {
  _inherits(MealPlanningSchedule, _Resource55);

  function MealPlanningSchedule() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningSchedule);

    return _possibleConstructorReturn(this, (MealPlanningSchedule.__proto__ || Object.getPrototypeOf(MealPlanningSchedule)).call(this, id, 'meal-planning-schedules', attributes, one, many));
  }

  // attributes

  /** @param {string} frequency **/


  _createClass(MealPlanningSchedule, [{
    key: 'frequency',
    set: function set(frequency) {
      this._attributes['frequency'] = frequency;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['frequency'];
    }
  }, {
    key: 'frequencyValue',


    /** @param {string} frequencyValue **/
    set: function set(frequencyValue) {
      this._attributes['frequency-value'] = frequencyValue;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['frequency-value'];
    }
  }, {
    key: 'periodsInAdvance',


    /** @param {string} periodsInAdvance **/
    set: function set(periodsInAdvance) {
      this._attributes['periods-in-advance'] = periodsInAdvance;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['periods-in-advance'];
    }
  }, {
    key: 'periodsPerSchedule',


    /** @param {string} periodsPerSchedule **/
    set: function set(periodsPerSchedule) {
      this._attributes['periods-per-schedule'] = periodsPerSchedule;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['periods-per-schedule'];
    }
  }, {
    key: 'startsOn',


    /** @param {string} startsOn **/
    set: function set(startsOn) {
      this._attributes['starts-on'] = startsOn;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['starts-on'];
    }
  }, {
    key: 'endsOn',


    /** @param {string} endsOn **/
    set: function set(endsOn) {
      this._attributes['ends-on'] = endsOn;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['ends-on'];
    }
  }, {
    key: 'template',


    // relationships


    /** @param {MealPlanningTemplate} template **/
    set: function set(template) {
      this._one['template'] = template;
    },

    /** @type {MealPlanningTemplate} */
    get: function get() {
      return this._one['template'];
    }
  }, {
    key: 'skipPeriods',


    /** @param {MealPlanningSkipPeriod[]} skipPeriods **/
    set: function set(skipPeriods) {
      this._many['skip-periods'] = skipPeriods;
    },

    /** @type {MealPlanningSkipPeriod[]} */
    get: function get() {
      return this._many['skip-periods'];
    }
  }]);

  return MealPlanningSchedule;
}(_resource2.default);

/** @class MealPlanningTemplate
  * @extends {Resource}
  **/


var MealPlanningTemplate = exports.MealPlanningTemplate = function (_Resource56) {
  _inherits(MealPlanningTemplate, _Resource56);

  function MealPlanningTemplate() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealPlanningTemplate);

    return _possibleConstructorReturn(this, (MealPlanningTemplate.__proto__ || Object.getPrototypeOf(MealPlanningTemplate)).call(this, id, 'meal-planning-templates', attributes, one, many));
  }

  // attributes

  /** @param {jsonb} plan **/


  _createClass(MealPlanningTemplate, [{
    key: 'plan',
    set: function set(plan) {
      this._attributes['plan'] = plan;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['plan'];
    }
  }, {
    key: 'contact',


    /** @param {jsonb} contact **/
    set: function set(contact) {
      this._attributes['contact'] = contact;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['contact'];
    }
  }, {
    key: 'location',


    /** @param {jsonb} location **/
    set: function set(location) {
      this._attributes['location'] = location;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['location'];
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
    key: 'defaultNumberOfPeople',


    /** @param {string} defaultNumberOfPeople **/
    set: function set(defaultNumberOfPeople) {
      this._attributes['default-number-of-people'] = defaultNumberOfPeople;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['default-number-of-people'];
    }
  }, {
    key: 'buildGroupOrders',


    /** @param {string} buildGroupOrders **/
    set: function set(buildGroupOrders) {
      this._attributes['build-group-orders'] = buildGroupOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['build-group-orders'];
    }
  }, {
    key: 'newWeight',


    /** @param {string} newWeight **/
    set: function set(newWeight) {
      this._attributes['new-weight'] = newWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['new-weight'];
    }
  }, {
    key: 'popularityWeight',


    /** @param {string} popularityWeight **/
    set: function set(popularityWeight) {
      this._attributes['popularity-weight'] = popularityWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['popularity-weight'];
    }
  }, {
    key: 'favWeight',


    /** @param {string} favWeight **/
    set: function set(favWeight) {
      this._attributes['fav-weight'] = favWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['fav-weight'];
    }
  }, {
    key: 'lastWeekWeight',


    /** @param {string} lastWeekWeight **/
    set: function set(lastWeekWeight) {
      this._attributes['last-week-weight'] = lastWeekWeight;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-week-weight'];
    }
  }, {
    key: 'lastWeekOffset',


    /** @param {string} lastWeekOffset **/
    set: function set(lastWeekOffset) {
      this._attributes['last-week-offset'] = lastWeekOffset;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['last-week-offset'];
    }
  }, {
    key: 'maxUsesPerWeek',


    /** @param {string} maxUsesPerWeek **/
    set: function set(maxUsesPerWeek) {
      this._attributes['max-uses-per-week'] = maxUsesPerWeek;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-uses-per-week'];
    }
  }, {
    key: 'maxUsesPerDay',


    /** @param {string} maxUsesPerDay **/
    set: function set(maxUsesPerDay) {
      this._attributes['max-uses-per-day'] = maxUsesPerDay;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-uses-per-day'];
    }
  }, {
    key: 'maxUsesPerMeal',


    /** @param {string} maxUsesPerMeal **/
    set: function set(maxUsesPerMeal) {
      this._attributes['max-uses-per-meal'] = maxUsesPerMeal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['max-uses-per-meal'];
    }
  }, {
    key: 'orderTemplateNumberOfPeople',


    /** @param {string} orderTemplateNumberOfPeople **/
    set: function set(orderTemplateNumberOfPeople) {
      this._attributes['order-template-number-of-people'] = orderTemplateNumberOfPeople;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-template-number-of-people'];
    }
  }, {
    key: 'allowRepeats',


    /** @param {string} allowRepeats **/
    set: function set(allowRepeats) {
      this._attributes['allow-repeats'] = allowRepeats;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['allow-repeats'];
    }
  }, {
    key: 'useTeamProfiles',


    /** @param {string} useTeamProfiles **/
    set: function set(useTeamProfiles) {
      this._attributes['use-team-profiles'] = useTeamProfiles;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['use-team-profiles'];
    }
  }, {
    key: 'ignoreEmptyConstraints',


    /** @param {string} ignoreEmptyConstraints **/
    set: function set(ignoreEmptyConstraints) {
      this._attributes['ignore-empty-constraints'] = ignoreEmptyConstraints;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['ignore-empty-constraints'];
    }
  }, {
    key: 'isRecurring',


    /** @param {string} isRecurring **/
    set: function set(isRecurring) {
      this._attributes['is-recurring'] = isRecurring;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-recurring'];
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
    key: 'orderTemplate',


    /** @param {Order} orderTemplate **/
    set: function set(orderTemplate) {
      this._one['order-template'] = orderTemplate;
    },

    /** @type {Order} */
    get: function get() {
      return this._one['order-template'];
    }
  }, {
    key: 'area',


    /** @param {Area} area **/
    set: function set(area) {
      this._one['area'] = area;
    },

    /** @type {Area} */
    get: function get() {
      return this._one['area'];
    }
  }, {
    key: 'preferenceProfile',


    /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
    set: function set(preferenceProfile) {
      this._one['preference-profile'] = preferenceProfile;
    },

    /** @type {MealPlanningPreferenceProfile} */
    get: function get() {
      return this._one['preference-profile'];
    }
  }, {
    key: 'schedule',


    /** @param {MealPlanningSchedule} schedule **/
    set: function set(schedule) {
      this._one['schedule'] = schedule;
    },

    /** @type {MealPlanningSchedule} */
    get: function get() {
      return this._one['schedule'];
    }
  }, {
    key: 'defaultOrderOwner',


    /** @param {User} defaultOrderOwner **/
    set: function set(defaultOrderOwner) {
      this._one['default-order-owner'] = defaultOrderOwner;
    },

    /** @type {User} */
    get: function get() {
      return this._one['default-order-owner'];
    }
  }, {
    key: 'mealPlanningInstances',


    /** @param {MealPlanningInstance[]} mealPlanningInstances **/
    set: function set(mealPlanningInstances) {
      this._many['meal-planning-instances'] = mealPlanningInstances;
    },

    /** @type {MealPlanningInstance[]} */
    get: function get() {
      return this._many['meal-planning-instances'];
    }
  }, {
    key: 'restaurantConstraints',


    /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
    set: function set(restaurantConstraints) {
      this._many['restaurant-constraints'] = restaurantConstraints;
    },

    /** @type {MealPlanningRestaurantConstraint[]} */
    get: function get() {
      return this._many['restaurant-constraints'];
    }
  }]);

  return MealPlanningTemplate;
}(_resource2.default);

/** @class MealType
  * @extends {Resource}
  **/


var MealType = exports.MealType = function (_Resource57) {
  _inherits(MealType, _Resource57);

  function MealType() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MealType);

    return _possibleConstructorReturn(this, (MealType.__proto__ || Object.getPrototypeOf(MealType)).call(this, id, 'meal-types', attributes, one, many));
  }

  // attributes

  /** @param {string} emoji **/


  _createClass(MealType, [{
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
    key: 'isExclusive',


    /** @param {string} isExclusive **/
    set: function set(isExclusive) {
      this._attributes['is-exclusive'] = isExclusive;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-exclusive'];
    }
  }]);

  return MealType;
}(_resource2.default);

/** @class Menu
  * @extends {Resource}
  **/
var Menu = exports.Menu = function (_Resource58) {
  _inherits(Menu, _Resource58);

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
    key: 'draft',


    /** @param {boolean} draft **/
    set: function set(draft) {
      this._attributes['draft'] = draft;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['draft'];
    }
  }, {
    key: 'ancestry',


    /** @param {boolean} ancestry **/
    set: function set(ancestry) {
      this._attributes['ancestry'] = ancestry;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['ancestry'];
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


var MenuGroup = exports.MenuGroup = function (_Resource59) {
  _inherits(MenuGroup, _Resource59);

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
    key: 'minimumServing',


    /** @param {string} minimumServing **/
    set: function set(minimumServing) {
      this._attributes['minimum-serving'] = minimumServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['minimum-serving'];
    }
  }, {
    key: 'maximumServing',


    /** @param {string} maximumServing **/
    set: function set(maximumServing) {
      this._attributes['maximum-serving'] = maximumServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['maximum-serving'];
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
  }, {
    key: 'mealTypes',


    /** @param {MealType[]} mealTypes **/
    set: function set(mealTypes) {
      this._many['meal-types'] = mealTypes;
    },

    /** @type {MealType[]} */
    get: function get() {
      return this._many['meal-types'];
    }
  }, {
    key: 'foodTypes',


    /** @param {FoodType[]} foodTypes **/
    set: function set(foodTypes) {
      this._many['food-types'] = foodTypes;
    },

    /** @type {FoodType[]} */
    get: function get() {
      return this._many['food-types'];
    }
  }]);

  return MenuGroup;
}(_resource2.default);

/** @class MenuItem
  * @extends {Resource}
  **/


var MenuItem = exports.MenuItem = function (_Resource60) {
  _inherits(MenuItem, _Resource60);

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
    key: 'minimumServing',


    /** @param {string} minimumServing **/
    set: function set(minimumServing) {
      this._attributes['minimum-serving'] = minimumServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['minimum-serving'];
    }
  }, {
    key: 'maximumServing',


    /** @param {string} maximumServing **/
    set: function set(maximumServing) {
      this._attributes['maximum-serving'] = maximumServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['maximum-serving'];
    }
  }, {
    key: 'actualMinimumQuantity',


    /** @param {string} actualMinimumQuantity **/
    set: function set(actualMinimumQuantity) {
      this._attributes['actual-minimum-quantity'] = actualMinimumQuantity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['actual-minimum-quantity'];
    }
  }, {
    key: 'actualMaximumQuantity',


    /** @param {string} actualMaximumQuantity **/
    set: function set(actualMaximumQuantity) {
      this._attributes['actual-maximum-quantity'] = actualMaximumQuantity;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['actual-maximum-quantity'];
    }
  }, {
    key: 'actualMinimumServing',


    /** @param {string} actualMinimumServing **/
    set: function set(actualMinimumServing) {
      this._attributes['actual-minimum-serving'] = actualMinimumServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['actual-minimum-serving'];
    }
  }, {
    key: 'actualMaximumServing',


    /** @param {string} actualMaximumServing **/
    set: function set(actualMaximumServing) {
      this._attributes['actual-maximum-serving'] = actualMaximumServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['actual-maximum-serving'];
    }
  }, {
    key: 'actualAverageServing',


    /** @param {string} actualAverageServing **/
    set: function set(actualAverageServing) {
      this._attributes['actual-average-serving'] = actualAverageServing;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['actual-average-serving'];
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
    key: 'budgetPrice',


    /** @param {string} budgetPrice **/
    set: function set(budgetPrice) {
      this._attributes['budget-price'] = budgetPrice;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['budget-price'];
    }
  }, {
    key: 'balancedPrice',


    /** @param {string} balancedPrice **/
    set: function set(balancedPrice) {
      this._attributes['balanced-price'] = balancedPrice;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['balanced-price'];
    }
  }, {
    key: 'bountifulPrice',


    /** @param {string} bountifulPrice **/
    set: function set(bountifulPrice) {
      this._attributes['bountiful-price'] = bountifulPrice;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['bountiful-price'];
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
    key: 'retailPriceCents',


    /** @param {number} retailPriceCents **/
    set: function set(retailPriceCents) {
      this._attributes['retail-price-cents'] = retailPriceCents;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['retail-price-cents'];
    }
  }, {
    key: 'internalDescription',


    /** @param {number} internalDescription **/
    set: function set(internalDescription) {
      this._attributes['internal-description'] = internalDescription;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['internal-description'];
    }
  }, {
    key: 'taxRateId',


    /** @param {number} taxRateId **/
    set: function set(taxRateId) {
      this._attributes['tax-rate-id'] = taxRateId;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['tax-rate-id'];
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
    key: 'mealTypes',


    /** @param {MealType[]} mealTypes **/
    set: function set(mealTypes) {
      this._many['meal-types'] = mealTypes;
    },

    /** @type {MealType[]} */
    get: function get() {
      return this._many['meal-types'];
    }
  }, {
    key: 'foodTypes',


    /** @param {FoodType[]} foodTypes **/
    set: function set(foodTypes) {
      this._many['food-types'] = foodTypes;
    },

    /** @type {FoodType[]} */
    get: function get() {
      return this._many['food-types'];
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


var MenuOptionGroup = exports.MenuOptionGroup = function (_Resource61) {
  _inherits(MenuOptionGroup, _Resource61);

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
    key: 'isPackagedSeparately',


    /** @param {string} isPackagedSeparately **/
    set: function set(isPackagedSeparately) {
      this._attributes['is-packaged-separately'] = isPackagedSeparately;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-packaged-separately'];
    }
  }, {
    key: 'position',


    /** @param {number} position **/
    set: function set(position) {
      this._attributes['position'] = position;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['position'];
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


var MenuOptionItem = exports.MenuOptionItem = function (_Resource62) {
  _inherits(MenuOptionItem, _Resource62);

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
    key: 'restaurantPriceCents',


    /** @param {*} restaurantPriceCents **/
    set: function set(restaurantPriceCents) {
      this._attributes['restaurant-price-cents'] = restaurantPriceCents;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['restaurant-price-cents'];
    }
  }, {
    key: 'retailPriceCents',


    /** @param {*} retailPriceCents **/
    set: function set(retailPriceCents) {
      this._attributes['retail-price-cents'] = retailPriceCents;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['retail-price-cents'];
    }
  }, {
    key: 'position',


    /** @param {*} position **/
    set: function set(position) {
      this._attributes['position'] = position;
    },

    /** @type {*} */
    get: function get() {
      return this._attributes['position'];
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

/** @class NotificationLog
  * @extends {Resource}
  **/


var NotificationLog = exports.NotificationLog = function (_Resource63) {
  _inherits(NotificationLog, _Resource63);

  function NotificationLog() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, NotificationLog);

    return _possibleConstructorReturn(this, (NotificationLog.__proto__ || Object.getPrototypeOf(NotificationLog)).call(this, id, 'notification-logs', attributes, one, many));
  }

  // attributes

  /** @param {any} receiver **/


  _createClass(NotificationLog, [{
    key: 'receiver',
    set: function set(receiver) {
      this._attributes['receiver'] = receiver;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['receiver'];
    }
  }, {
    key: 'uniquenessContext',


    /** @param {any} uniquenessContext **/
    set: function set(uniquenessContext) {
      this._attributes['uniqueness-context'] = uniquenessContext;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['uniqueness-context'];
    }
  }, {
    key: 'medium',


    /** @param {any} medium **/
    set: function set(medium) {
      this._attributes['medium'] = medium;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['medium'];
    }
  }, {
    key: 'reason',


    /** @param {any} reason **/
    set: function set(reason) {
      this._attributes['reason'] = reason;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['reason'];
    }
  }, {
    key: 'url',


    /** @param {any} url **/
    set: function set(url) {
      this._attributes['url'] = url;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['url'];
    }
  }, {
    key: 'metaInfo',


    /** @param {any} metaInfo **/
    set: function set(metaInfo) {
      this._attributes['meta-info'] = metaInfo;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['meta-info'];
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
    key: 'receiverType',


    /** @param {any} receiverType **/
    set: function set(receiverType) {
      this._attributes['receiver-type'] = receiverType;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['receiver-type'];
    }
  }, {
    key: 'receiverId',


    /** @param {any} receiverId **/
    set: function set(receiverId) {
      this._attributes['receiver-id'] = receiverId;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['receiver-id'];
    }
  }, {
    key: 'sentTos',


    /** @param {any} sentTos **/
    set: function set(sentTos) {
      this._attributes['sent-tos'] = sentTos;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['sent-tos'];
    }
  }, {
    key: 'events',


    /** @param {any} events **/
    set: function set(events) {
      this._attributes['events'] = events;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['events'];
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

  return NotificationLog;
}(_resource2.default);

/** @class Order
  * @extends {Resource}
  **/


var Order = exports.Order = function (_Resource64) {
  _inherits(Order, _Resource64);

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
    key: 'allowsGuests',


    /** @param {string} allowsGuests **/
    set: function set(allowsGuests) {
      this._attributes['allows-guests'] = allowsGuests;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['allows-guests'];
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
    key: 'restaurantSummaryPdfUrl',


    /** @param {string} restaurantSummaryPdfUrl **/
    set: function set(restaurantSummaryPdfUrl) {
      this._attributes['restaurant-summary-pdf-url'] = restaurantSummaryPdfUrl;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['restaurant-summary-pdf-url'];
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
    key: 'opensAt',


    /** @param {string} opensAt **/
    set: function set(opensAt) {
      this._attributes['opens-at'] = opensAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['opens-at'];
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
    key: 'guestList',


    /** @param {string} guestList **/
    set: function set(guestList) {
      this._attributes['guest-list'] = guestList;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['guest-list'];
    }
  }, {
    key: 'budgetType',


    /** @param {string} budgetType **/
    set: function set(budgetType) {
      this._attributes['budget-type'] = budgetType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['budget-type'];
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
    key: 'duplicatedFromId',


    /** @param {string} duplicatedFromId **/
    set: function set(duplicatedFromId) {
      this._attributes['duplicated-from-id'] = duplicatedFromId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['duplicated-from-id'];
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
    key: 'validMembersCount',


    /** @param {string} validMembersCount **/
    set: function set(validMembersCount) {
      this._attributes['valid-members-count'] = validMembersCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['valid-members-count'];
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
    key: 'orderType',


    /** @param {string} orderType **/
    set: function set(orderType) {
      this._attributes['order-type'] = orderType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-type'];
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
    key: 'orderImages',


    /** @param {string} orderImages **/
    set: function set(orderImages) {
      this._attributes['order-images'] = orderImages;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-images'];
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
    key: 'thirdPartyLogisticsException',


    /** @param {string} thirdPartyLogisticsException **/
    set: function set(thirdPartyLogisticsException) {
      this._attributes['third-party-logistics-exception'] = thirdPartyLogisticsException;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['third-party-logistics-exception'];
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
    key: 'cutleryPreference',


    /** @param {string} cutleryPreference **/
    set: function set(cutleryPreference) {
      this._attributes['cutlery-preference'] = cutleryPreference;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['cutlery-preference'];
    }
  }, {
    key: 'waiveDeliveryFee',


    /** @param {string} waiveDeliveryFee **/
    set: function set(waiveDeliveryFee) {
      this._attributes['waive-delivery-fee'] = waiveDeliveryFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-delivery-fee'];
    }
  }, {
    key: 'waiveServiceFee',


    /** @param {string} waiveServiceFee **/
    set: function set(waiveServiceFee) {
      this._attributes['waive-service-fee'] = waiveServiceFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['waive-service-fee'];
    }
  }, {
    key: 'orderedCount',


    /** @param {string} orderedCount **/
    set: function set(orderedCount) {
      this._attributes['ordered-count'] = orderedCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['ordered-count'];
    }
  }, {
    key: 'memberCount',


    /** @param {string} memberCount **/
    set: function set(memberCount) {
      this._attributes['member-count'] = memberCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['member-count'];
    }
  }, {
    key: 'isTemplate',


    /** @param {string} isTemplate **/
    set: function set(isTemplate) {
      this._attributes['is-template'] = isTemplate;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-template'];
    }
  }, {
    key: 'deliveryEstimate',


    /** @param {jsonb} deliveryEstimate **/
    set: function set(deliveryEstimate) {
      this._attributes['delivery-estimate'] = deliveryEstimate;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['delivery-estimate'];
    }
  }, {
    key: 'overridePickupAtAdjustment',


    /** @param {jsonb} overridePickupAtAdjustment **/
    set: function set(overridePickupAtAdjustment) {
      this._attributes['override-pickup-at-adjustment'] = overridePickupAtAdjustment;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['override-pickup-at-adjustment'];
    }
  }, {
    key: 'logisticsType',


    /** @param {jsonb} logisticsType **/
    set: function set(logisticsType) {
      this._attributes['logistics-type'] = logisticsType;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['logistics-type'];
    }
  }, {
    key: 'thirdPartyLogisticsId',


    /** @param {jsonb} thirdPartyLogisticsId **/
    set: function set(thirdPartyLogisticsId) {
      this._attributes['third-party-logistics-id'] = thirdPartyLogisticsId;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['third-party-logistics-id'];
    }
  }, {
    key: 'thirdPartyLogisticsTrackingUrl',


    /** @param {jsonb} thirdPartyLogisticsTrackingUrl **/
    set: function set(thirdPartyLogisticsTrackingUrl) {
      this._attributes['third-party-logistics-tracking-url'] = thirdPartyLogisticsTrackingUrl;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['third-party-logistics-tracking-url'];
    }
  }, {
    key: 'syncedWithThirdPartyLogisticsAt',


    /** @param {jsonb} syncedWithThirdPartyLogisticsAt **/
    set: function set(syncedWithThirdPartyLogisticsAt) {
      this._attributes['synced-with-third-party-logistics-at'] = syncedWithThirdPartyLogisticsAt;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['synced-with-third-party-logistics-at'];
    }
  }, {
    key: 'requestedCapacity',


    /** @param {jsonb} requestedCapacity **/
    set: function set(requestedCapacity) {
      this._attributes['requested-capacity'] = requestedCapacity;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['requested-capacity'];
    }
  }, {
    key: 'waiveDeliveryFeeAccountingCode',


    /** @param {jsonb} waiveDeliveryFeeAccountingCode **/
    set: function set(waiveDeliveryFeeAccountingCode) {
      this._attributes['waive-delivery-fee-accounting-code'] = waiveDeliveryFeeAccountingCode;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['waive-delivery-fee-accounting-code'];
    }
  }, {
    key: 'waiveServiceFeeAccountingCode',


    /** @param {jsonb} waiveServiceFeeAccountingCode **/
    set: function set(waiveServiceFeeAccountingCode) {
      this._attributes['waive-service-fee-accounting-code'] = waiveServiceFeeAccountingCode;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['waive-service-fee-accounting-code'];
    }
  }, {
    key: 'waiveDeliveryFeeDescription',


    /** @param {jsonb} waiveDeliveryFeeDescription **/
    set: function set(waiveDeliveryFeeDescription) {
      this._attributes['waive-delivery-fee-description'] = waiveDeliveryFeeDescription;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['waive-delivery-fee-description'];
    }
  }, {
    key: 'waiveServiceFeeDescription',


    /** @param {jsonb} waiveServiceFeeDescription **/
    set: function set(waiveServiceFeeDescription) {
      this._attributes['waive-service-fee-description'] = waiveServiceFeeDescription;
    },

    /** @type {jsonb} */
    get: function get() {
      return this._attributes['waive-service-fee-description'];
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
    key: 'menuFilter',


    /** @param {MealPlanningRequirement} menuFilter **/
    set: function set(menuFilter) {
      this._one['menu-filter'] = menuFilter;
    },

    /** @type {MealPlanningRequirement} */
    get: function get() {
      return this._one['menu-filter'];
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
    key: 'restaurantInvoice',


    /** @param {InvoicingLedgerItem} restaurantInvoice **/
    set: function set(restaurantInvoice) {
      this._one['restaurant-invoice'] = restaurantInvoice;
    },

    /** @type {InvoicingLedgerItem} */
    get: function get() {
      return this._one['restaurant-invoice'];
    }
  }, {
    key: 'clientInvoice',


    /** @param {InvoicingLedgerItem} clientInvoice **/
    set: function set(clientInvoice) {
      this._one['client-invoice'] = clientInvoice;
    },

    /** @type {InvoicingLedgerItem} */
    get: function get() {
      return this._one['client-invoice'];
    }
  }, {
    key: 'invoice',


    /** @param {AccountingLedgerItem} invoice **/
    set: function set(invoice) {
      this._one['invoice'] = invoice;
    },

    /** @type {AccountingLedgerItem} */
    get: function get() {
      return this._one['invoice'];
    }
  }, {
    key: 'restaurantBill',


    /** @param {AccountingLedgerItem} restaurantBill **/
    set: function set(restaurantBill) {
      this._one['restaurant-bill'] = restaurantBill;
    },

    /** @type {AccountingLedgerItem} */
    get: function get() {
      return this._one['restaurant-bill'];
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
    key: 'arrivalEstimate',


    /** @param {LogisticsArrivalEstimate} arrivalEstimate **/
    set: function set(arrivalEstimate) {
      this._one['arrival-estimate'] = arrivalEstimate;
    },

    /** @type {LogisticsArrivalEstimate} */
    get: function get() {
      return this._one['arrival-estimate'];
    }
  }, {
    key: 'clientDiscounts',


    /** @param {ClientDiscount[]} clientDiscounts **/
    set: function set(clientDiscounts) {
      this._many['client-discounts'] = clientDiscounts;
    },

    /** @type {ClientDiscount[]} */
    get: function get() {
      return this._many['client-discounts'];
    }
  }, {
    key: 'restaurantDiscounts',


    /** @param {RestaurantDiscount[]} restaurantDiscounts **/
    set: function set(restaurantDiscounts) {
      this._many['restaurant-discounts'] = restaurantDiscounts;
    },

    /** @type {RestaurantDiscount[]} */
    get: function get() {
      return this._many['restaurant-discounts'];
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
    key: 'allOrderVersions',


    /** @param {HistorianVersion[]} allOrderVersions **/
    set: function set(allOrderVersions) {
      this._many['all-order-versions'] = allOrderVersions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['all-order-versions'];
    }
  }, {
    key: 'versions',


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
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
    key: 'allUsers',


    /** @param {User[]} allUsers **/
    set: function set(allUsers) {
      this._many['all-users'] = allUsers;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['all-users'];
    }
  }, {
    key: 'orderedUsers',


    /** @param {User[]} orderedUsers **/
    set: function set(orderedUsers) {
      this._many['ordered-users'] = orderedUsers;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['ordered-users'];
    }
  }, {
    key: 'orderedGroupOrderMembers',


    /** @param {GroupOrderMember[]} orderedGroupOrderMembers **/
    set: function set(orderedGroupOrderMembers) {
      this._many['ordered-group-order-members'] = orderedGroupOrderMembers;
    },

    /** @type {GroupOrderMember[]} */
    get: function get() {
      return this._many['ordered-group-order-members'];
    }
  }, {
    key: 'joinedUsers',


    /** @param {User[]} joinedUsers **/
    set: function set(joinedUsers) {
      this._many['joined-users'] = joinedUsers;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['joined-users'];
    }
  }, {
    key: 'teamMembers',


    /** @param {User[]} teamMembers **/
    set: function set(teamMembers) {
      this._many['team-members'] = teamMembers;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['team-members'];
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
  }, {
    key: 'ledgerItems',


    /** @param {AccountingLedgerItem[]} ledgerItems **/
    set: function set(ledgerItems) {
      this._many['ledger-items'] = ledgerItems;
    },

    /** @type {AccountingLedgerItem[]} */
    get: function get() {
      return this._many['ledger-items'];
    }
  }, {
    key: 'salesforceCases',


    /** @param {SalesforceCase[]} salesforceCases **/
    set: function set(salesforceCases) {
      this._many['salesforce-cases'] = salesforceCases;
    },

    /** @type {SalesforceCase[]} */
    get: function get() {
      return this._many['salesforce-cases'];
    }
  }, {
    key: 'notificationLogs',


    /** @param {NotificationLog[]} notificationLogs **/
    set: function set(notificationLogs) {
      this._many['notification-logs'] = notificationLogs;
    },

    /** @type {NotificationLog[]} */
    get: function get() {
      return this._many['notification-logs'];
    }
  }]);

  return Order;
}(_resource2.default);

/** @class OrderItem
  * @extends {Resource}
  **/


var OrderItem = exports.OrderItem = function (_Resource65) {
  _inherits(OrderItem, _Resource65);

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
    key: 'maximumServing',


    /** @param {number} maximumServing **/
    set: function set(maximumServing) {
      this._attributes['maximum-serving'] = maximumServing;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['maximum-serving'];
    }
  }, {
    key: 'minimumServing',


    /** @param {number} minimumServing **/
    set: function set(minimumServing) {
      this._attributes['minimum-serving'] = minimumServing;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['minimum-serving'];
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


var PaymentAccount = exports.PaymentAccount = function (_Resource66) {
  _inherits(PaymentAccount, _Resource66);

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


var PaymentCard = exports.PaymentCard = function (_Resource67) {
  _inherits(PaymentCard, _Resource67);

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
    key: 'nickname',


    /** @param {number} nickname **/
    set: function set(nickname) {
      this._attributes['nickname'] = nickname;
    },

    /** @type {number} */
    get: function get() {
      return this._attributes['nickname'];
    }
  }, {
    key: 'removed',


    /** @param {boolean} removed **/
    set: function set(removed) {
      this._attributes['removed'] = removed;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['removed'];
    }
  }, {
    key: 'cardToken',


    /** @param {boolean} cardToken **/
    set: function set(cardToken) {
      this._attributes['card-token'] = cardToken;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['card-token'];
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


var PayrollRun = exports.PayrollRun = function (_Resource68) {
  _inherits(PayrollRun, _Resource68);

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


var PickupLocation = exports.PickupLocation = function (_Resource69) {
  _inherits(PickupLocation, _Resource69);

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


var PromoCode = exports.PromoCode = function (_Resource70) {
  _inherits(PromoCode, _Resource70);

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


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['versions'];
    }
  }]);

  return PromoCode;
}(_resource2.default);

/** @class QualifyingQuestion
  * @extends {Resource}
  **/


var QualifyingQuestion = exports.QualifyingQuestion = function (_Resource71) {
  _inherits(QualifyingQuestion, _Resource71);

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

/** @class ReleaseNote
  * @extends {Resource}
  **/
var ReleaseNote = exports.ReleaseNote = function (_Resource72) {
  _inherits(ReleaseNote, _Resource72);

  function ReleaseNote() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ReleaseNote);

    return _possibleConstructorReturn(this, (ReleaseNote.__proto__ || Object.getPrototypeOf(ReleaseNote)).call(this, id, 'release-notes', attributes, one, many));
  }

  // attributes

  /** @param {string} subject **/


  _createClass(ReleaseNote, [{
    key: 'subject',
    set: function set(subject) {
      this._attributes['subject'] = subject;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['subject'];
    }
  }, {
    key: 'body',


    /** @param {string} body **/
    set: function set(body) {
      this._attributes['body'] = body;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['body'];
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
    key: 'author',


    /** @param {string} author **/
    set: function set(author) {
      this._attributes['author'] = author;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['author'];
    }
  }, {
    key: 'authorProfilePictureUrl',


    /** @param {string} authorProfilePictureUrl **/
    set: function set(authorProfilePictureUrl) {
      this._attributes['author-profile-picture-url'] = authorProfilePictureUrl;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['author-profile-picture-url'];
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
  }]);

  return ReleaseNote;
}(_resource2.default);

/** @class Restaurant
  * @extends {Resource}
  **/
var Restaurant = exports.Restaurant = function (_Resource73) {
  _inherits(Restaurant, _Resource73);

  function Restaurant() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Restaurant);

    return _possibleConstructorReturn(this, (Restaurant.__proto__ || Object.getPrototypeOf(Restaurant)).call(this, id, 'restaurants', attributes, one, many));
  }

  // attributes

  /** @param {string} pickupNotes **/


  _createClass(Restaurant, [{
    key: 'pickupNotes',
    set: function set(pickupNotes) {
      this._attributes['pickup-notes'] = pickupNotes;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['pickup-notes'];
    }
  }, {
    key: 'enterpriseRequest',


    /** @param {string} enterpriseRequest **/
    set: function set(enterpriseRequest) {
      this._attributes['enterprise-request'] = enterpriseRequest;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['enterprise-request'];
    }
  }, {
    key: 'completionProgress',


    /** @param {string} completionProgress **/
    set: function set(completionProgress) {
      this._attributes['completion-progress'] = completionProgress;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['completion-progress'];
    }
  }, {
    key: 'isPayingAdminFee',


    /** @param {string} isPayingAdminFee **/
    set: function set(isPayingAdminFee) {
      this._attributes['is-paying-admin-fee'] = isPayingAdminFee;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-paying-admin-fee'];
    }
  }, {
    key: 'receivesDailyOrderSummary',


    /** @param {string} receivesDailyOrderSummary **/
    set: function set(receivesDailyOrderSummary) {
      this._attributes['receives-daily-order-summary'] = receivesDailyOrderSummary;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['receives-daily-order-summary'];
    }
  }, {
    key: 'receivesSMS',


    /** @param {string} receivesSMS **/
    set: function set(receivesSMS) {
      this._attributes['receives-sms'] = receivesSMS;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['receives-sms'];
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
    key: 'xeroContactId',


    /** @param {string} xeroContactId **/
    set: function set(xeroContactId) {
      this._attributes['xero-contact-id'] = xeroContactId;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['xero-contact-id'];
    }
  }, {
    key: 'xeroSynchronizedAt',


    /** @param {string} xeroSynchronizedAt **/
    set: function set(xeroSynchronizedAt) {
      this._attributes['xero-synchronized-at'] = xeroSynchronizedAt;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['xero-synchronized-at'];
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
    key: 'isExclusive',


    /** @param {Date} isExclusive **/
    set: function set(isExclusive) {
      this._attributes['is-exclusive'] = isExclusive;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['is-exclusive'];
    }
  }, {
    key: 'isNewRestaurant',


    /** @param {Date} isNewRestaurant **/
    set: function set(isNewRestaurant) {
      this._attributes['is-new-restaurant'] = isNewRestaurant;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['is-new-restaurant'];
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
    key: 'canSameDayTeamOrder',


    /** @param {Date} canSameDayTeamOrder **/
    set: function set(canSameDayTeamOrder) {
      this._attributes['can-same-day-team-order'] = canSameDayTeamOrder;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['can-same-day-team-order'];
    }
  }, {
    key: 'canEnterpriseOrder',


    /** @param {Date} canEnterpriseOrder **/
    set: function set(canEnterpriseOrder) {
      this._attributes['can-enterprise-order'] = canEnterpriseOrder;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['can-enterprise-order'];
    }
  }, {
    key: 'canSameDayEnterpriseOrder',


    /** @param {Date} canSameDayEnterpriseOrder **/
    set: function set(canSameDayEnterpriseOrder) {
      this._attributes['can-same-day-enterprise-order'] = canSameDayEnterpriseOrder;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['can-same-day-enterprise-order'];
    }
  }, {
    key: 'sameDayHoursInAdvance',


    /** @param {Date} sameDayHoursInAdvance **/
    set: function set(sameDayHoursInAdvance) {
      this._attributes['same-day-hours-in-advance'] = sameDayHoursInAdvance;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['same-day-hours-in-advance'];
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
    key: 'enterpriseHoursInAdvance',


    /** @param {Date} enterpriseHoursInAdvance **/
    set: function set(enterpriseHoursInAdvance) {
      this._attributes['enterprise-hours-in-advance'] = enterpriseHoursInAdvance;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['enterprise-hours-in-advance'];
    }
  }, {
    key: 'minimumOrder',


    /** @param {Date} minimumOrder **/
    set: function set(minimumOrder) {
      this._attributes['minimum-order'] = minimumOrder;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['minimum-order'];
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
    key: 'counts',


    /** @param {Date} counts **/
    set: function set(counts) {
      this._attributes['counts'] = counts;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['counts'];
    }
  }, {
    key: 'ordersIcalUrl',


    /** @param {Date} ordersIcalUrl **/
    set: function set(ordersIcalUrl) {
      this._attributes['orders-ical-url'] = ordersIcalUrl;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['orders-ical-url'];
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
    key: 'activeMenu',


    /** @param {Menu} activeMenu **/
    set: function set(activeMenu) {
      this._one['active-menu'] = activeMenu;
    },

    /** @type {Menu} */
    get: function get() {
      return this._one['active-menu'];
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
    key: 'allRestaurantVersions',


    /** @param {HistorianVersion[]} allRestaurantVersions **/
    set: function set(allRestaurantVersions) {
      this._many['all-restaurant-versions'] = allRestaurantVersions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['all-restaurant-versions'];
    }
  }, {
    key: 'versions',


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
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
  }, {
    key: 'restaurantConstraints',


    /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
    set: function set(restaurantConstraints) {
      this._many['restaurant-constraints'] = restaurantConstraints;
    },

    /** @type {MealPlanningRestaurantConstraint[]} */
    get: function get() {
      return this._many['restaurant-constraints'];
    }
  }, {
    key: 'rankings',


    /** @param {RestaurantRanking[]} rankings **/
    set: function set(rankings) {
      this._many['rankings'] = rankings;
    },

    /** @type {RestaurantRanking[]} */
    get: function get() {
      return this._many['rankings'];
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
    key: 'foodTypes',


    /** @param {FoodType[]} foodTypes **/
    set: function set(foodTypes) {
      this._many['food-types'] = foodTypes;
    },

    /** @type {FoodType[]} */
    get: function get() {
      return this._many['food-types'];
    }
  }, {
    key: 'mealTypes',


    /** @param {MealType[]} mealTypes **/
    set: function set(mealTypes) {
      this._many['meal-types'] = mealTypes;
    },

    /** @type {MealType[]} */
    get: function get() {
      return this._many['meal-types'];
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
  }]);

  return Restaurant;
}(_resource2.default);

/** @class RestaurantCapacityTranche
  * @extends {Resource}
  **/


var RestaurantCapacityTranche = exports.RestaurantCapacityTranche = function (_Resource74) {
  _inherits(RestaurantCapacityTranche, _Resource74);

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


    /** @param {float} capacity **/
    set: function set(capacity) {
      this._attributes['capacity'] = capacity;
    },

    /** @type {float} */
    get: function get() {
      return this._attributes['capacity'];
    }
  }, {
    key: 'orderMax',


    /** @param {float} orderMax **/
    set: function set(orderMax) {
      this._attributes['order-max'] = orderMax;
    },

    /** @type {float} */
    get: function get() {
      return this._attributes['order-max'];
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


var RestaurantClosure = exports.RestaurantClosure = function (_Resource75) {
  _inherits(RestaurantClosure, _Resource75);

  function RestaurantClosure() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantClosure);

    return _possibleConstructorReturn(this, (RestaurantClosure.__proto__ || Object.getPrototypeOf(RestaurantClosure)).call(this, id, 'restaurant-closures', attributes, one, many));
  }

  // attributes

  /** @param {Date} createdAt **/


  _createClass(RestaurantClosure, [{
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
    key: 'date',


    /** @param {date} date **/
    set: function set(date) {
      this._attributes['date'] = date;
    },

    /** @type {date} */
    get: function get() {
      return this._attributes['date'];
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


var RestaurantDiscount = exports.RestaurantDiscount = function (_Resource76) {
  _inherits(RestaurantDiscount, _Resource76);

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


var RestaurantOrderInvoice = exports.RestaurantOrderInvoice = function (_Resource77) {
  _inherits(RestaurantOrderInvoice, _Resource77);

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

/** @class RestaurantRanking
  * @extends {Resource}
  **/
var RestaurantRanking = exports.RestaurantRanking = function (_Resource78) {
  _inherits(RestaurantRanking, _Resource78);

  function RestaurantRanking() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, RestaurantRanking);

    return _possibleConstructorReturn(this, (RestaurantRanking.__proto__ || Object.getPrototypeOf(RestaurantRanking)).call(this, id, 'restaurant-rankings', attributes, one, many));
  }

  // attributes

  /** @param {string} month **/


  _createClass(RestaurantRanking, [{
    key: 'month',
    set: function set(month) {
      this._attributes['month'] = month;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['month'];
    }
  }, {
    key: 'orders',


    /** @param {string} orders **/
    set: function set(orders) {
      this._attributes['orders'] = orders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['orders'];
    }
  }, {
    key: 'orderPlatformRank',


    /** @param {string} orderPlatformRank **/
    set: function set(orderPlatformRank) {
      this._attributes['order-platform-rank'] = orderPlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-platform-rank'];
    }
  }, {
    key: 'orderAreaRank',


    /** @param {string} orderAreaRank **/
    set: function set(orderAreaRank) {
      this._attributes['order-area-rank'] = orderAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-area-rank'];
    }
  }, {
    key: 'orderAreaPercentRank',


    /** @param {string} orderAreaPercentRank **/
    set: function set(orderAreaPercentRank) {
      this._attributes['order-area-percent-rank'] = orderAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-area-percent-rank'];
    }
  }, {
    key: 'areaRestaurantCount',


    /** @param {string} areaRestaurantCount **/
    set: function set(areaRestaurantCount) {
      this._attributes['area-restaurant-count'] = areaRestaurantCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['area-restaurant-count'];
    }
  }, {
    key: 'platformRestaurantCount',


    /** @param {string} platformRestaurantCount **/
    set: function set(platformRestaurantCount) {
      this._attributes['platform-restaurant-count'] = platformRestaurantCount;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['platform-restaurant-count'];
    }
  }, {
    key: 'orderTotal',


    /** @param {string} orderTotal **/
    set: function set(orderTotal) {
      this._attributes['order-total'] = orderTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-total'];
    }
  }, {
    key: 'orderPercentage',


    /** @param {string} orderPercentage **/
    set: function set(orderPercentage) {
      this._attributes['order-percentage'] = orderPercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['order-percentage'];
    }
  }, {
    key: 'onlineOrders',


    /** @param {string} onlineOrders **/
    set: function set(onlineOrders) {
      this._attributes['online-orders'] = onlineOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-orders'];
    }
  }, {
    key: 'onlineTotal',


    /** @param {string} onlineTotal **/
    set: function set(onlineTotal) {
      this._attributes['online-total'] = onlineTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-total'];
    }
  }, {
    key: 'onlinePlatformRank',


    /** @param {string} onlinePlatformRank **/
    set: function set(onlinePlatformRank) {
      this._attributes['online-platform-rank'] = onlinePlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-platform-rank'];
    }
  }, {
    key: 'onlineAreaRank',


    /** @param {string} onlineAreaRank **/
    set: function set(onlineAreaRank) {
      this._attributes['online-area-rank'] = onlineAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-area-rank'];
    }
  }, {
    key: 'onlineAreaPercentRank',


    /** @param {string} onlineAreaPercentRank **/
    set: function set(onlineAreaPercentRank) {
      this._attributes['online-area-percent-rank'] = onlineAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-area-percent-rank'];
    }
  }, {
    key: 'onlinePercentage',


    /** @param {string} onlinePercentage **/
    set: function set(onlinePercentage) {
      this._attributes['online-percentage'] = onlinePercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-percentage'];
    }
  }, {
    key: 'foodeeOrders',


    /** @param {string} foodeeOrders **/
    set: function set(foodeeOrders) {
      this._attributes['foodee-orders'] = foodeeOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-orders'];
    }
  }, {
    key: 'foodeeTotal',


    /** @param {string} foodeeTotal **/
    set: function set(foodeeTotal) {
      this._attributes['foodee-total'] = foodeeTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-total'];
    }
  }, {
    key: 'foodeePlatformRank',


    /** @param {string} foodeePlatformRank **/
    set: function set(foodeePlatformRank) {
      this._attributes['foodee-platform-rank'] = foodeePlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-platform-rank'];
    }
  }, {
    key: 'foodeeAreaRank',


    /** @param {string} foodeeAreaRank **/
    set: function set(foodeeAreaRank) {
      this._attributes['foodee-area-rank'] = foodeeAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-area-rank'];
    }
  }, {
    key: 'foodeeAreaPercentRank',


    /** @param {string} foodeeAreaPercentRank **/
    set: function set(foodeeAreaPercentRank) {
      this._attributes['foodee-area-percent-rank'] = foodeeAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-area-percent-rank'];
    }
  }, {
    key: 'foodeePercentage',


    /** @param {string} foodeePercentage **/
    set: function set(foodeePercentage) {
      this._attributes['foodee-percentage'] = foodeePercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-percentage'];
    }
  }, {
    key: 'onlineTeamOrders',


    /** @param {string} onlineTeamOrders **/
    set: function set(onlineTeamOrders) {
      this._attributes['online-team-orders'] = onlineTeamOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-team-orders'];
    }
  }, {
    key: 'onlineTeamOrderTotal',


    /** @param {string} onlineTeamOrderTotal **/
    set: function set(onlineTeamOrderTotal) {
      this._attributes['online-team-order-total'] = onlineTeamOrderTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-team-order-total'];
    }
  }, {
    key: 'onlineTeamOrderPlatformRank',


    /** @param {string} onlineTeamOrderPlatformRank **/
    set: function set(onlineTeamOrderPlatformRank) {
      this._attributes['online-team-order-platform-rank'] = onlineTeamOrderPlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-team-order-platform-rank'];
    }
  }, {
    key: 'onlineTeamOrderAreaRank',


    /** @param {string} onlineTeamOrderAreaRank **/
    set: function set(onlineTeamOrderAreaRank) {
      this._attributes['online-team-order-area-rank'] = onlineTeamOrderAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-team-order-area-rank'];
    }
  }, {
    key: 'onlineTeamOrderAreaPercentRank',


    /** @param {string} onlineTeamOrderAreaPercentRank **/
    set: function set(onlineTeamOrderAreaPercentRank) {
      this._attributes['online-team-order-area-percent-rank'] = onlineTeamOrderAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-team-order-area-percent-rank'];
    }
  }, {
    key: 'onlineTeamOrderPercentage',


    /** @param {string} onlineTeamOrderPercentage **/
    set: function set(onlineTeamOrderPercentage) {
      this._attributes['online-team-order-percentage'] = onlineTeamOrderPercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-team-order-percentage'];
    }
  }, {
    key: 'foodeeTeamOrders',


    /** @param {string} foodeeTeamOrders **/
    set: function set(foodeeTeamOrders) {
      this._attributes['foodee-team-orders'] = foodeeTeamOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-team-orders'];
    }
  }, {
    key: 'foodeeTeamOrderTotal',


    /** @param {string} foodeeTeamOrderTotal **/
    set: function set(foodeeTeamOrderTotal) {
      this._attributes['foodee-team-order-total'] = foodeeTeamOrderTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-team-order-total'];
    }
  }, {
    key: 'foodeeTeamOrderPlatformRank',


    /** @param {string} foodeeTeamOrderPlatformRank **/
    set: function set(foodeeTeamOrderPlatformRank) {
      this._attributes['foodee-team-order-platform-rank'] = foodeeTeamOrderPlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-team-order-platform-rank'];
    }
  }, {
    key: 'foodeeTeamOrderAreaRank',


    /** @param {string} foodeeTeamOrderAreaRank **/
    set: function set(foodeeTeamOrderAreaRank) {
      this._attributes['foodee-team-order-area-rank'] = foodeeTeamOrderAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-team-order-area-rank'];
    }
  }, {
    key: 'foodeeTeamOrderAreaPercentRank',


    /** @param {string} foodeeTeamOrderAreaPercentRank **/
    set: function set(foodeeTeamOrderAreaPercentRank) {
      this._attributes['foodee-team-order-area-percent-rank'] = foodeeTeamOrderAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-team-order-area-percent-rank'];
    }
  }, {
    key: 'foodeeTeamOrderPercentage',


    /** @param {string} foodeeTeamOrderPercentage **/
    set: function set(foodeeTeamOrderPercentage) {
      this._attributes['foodee-team-order-percentage'] = foodeeTeamOrderPercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-team-order-percentage'];
    }
  }, {
    key: 'onlineEnterpriseOrders',


    /** @param {string} onlineEnterpriseOrders **/
    set: function set(onlineEnterpriseOrders) {
      this._attributes['online-enterprise-orders'] = onlineEnterpriseOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-enterprise-orders'];
    }
  }, {
    key: 'onlineEnterpriseOrderTotal',


    /** @param {string} onlineEnterpriseOrderTotal **/
    set: function set(onlineEnterpriseOrderTotal) {
      this._attributes['online-enterprise-order-total'] = onlineEnterpriseOrderTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-enterprise-order-total'];
    }
  }, {
    key: 'onlineEnterpriseOrderPlatformRank',


    /** @param {string} onlineEnterpriseOrderPlatformRank **/
    set: function set(onlineEnterpriseOrderPlatformRank) {
      this._attributes['online-enterprise-order-platform-rank'] = onlineEnterpriseOrderPlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-enterprise-order-platform-rank'];
    }
  }, {
    key: 'onlineEnterpriseOrderAreaRank',


    /** @param {string} onlineEnterpriseOrderAreaRank **/
    set: function set(onlineEnterpriseOrderAreaRank) {
      this._attributes['online-enterprise-order-area-rank'] = onlineEnterpriseOrderAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-enterprise-order-area-rank'];
    }
  }, {
    key: 'onlineEnterpriseOrderAreaPercentRank',


    /** @param {string} onlineEnterpriseOrderAreaPercentRank **/
    set: function set(onlineEnterpriseOrderAreaPercentRank) {
      this._attributes['online-enterprise-order-area-percent-rank'] = onlineEnterpriseOrderAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-enterprise-order-area-percent-rank'];
    }
  }, {
    key: 'onlineEnterpriseOrderPercentage',


    /** @param {string} onlineEnterpriseOrderPercentage **/
    set: function set(onlineEnterpriseOrderPercentage) {
      this._attributes['online-enterprise-order-percentage'] = onlineEnterpriseOrderPercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['online-enterprise-order-percentage'];
    }
  }, {
    key: 'foodeeEnterpriseOrders',


    /** @param {string} foodeeEnterpriseOrders **/
    set: function set(foodeeEnterpriseOrders) {
      this._attributes['foodee-enterprise-orders'] = foodeeEnterpriseOrders;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-enterprise-orders'];
    }
  }, {
    key: 'foodeeEnterpriseOrderTotal',


    /** @param {string} foodeeEnterpriseOrderTotal **/
    set: function set(foodeeEnterpriseOrderTotal) {
      this._attributes['foodee-enterprise-order-total'] = foodeeEnterpriseOrderTotal;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-enterprise-order-total'];
    }
  }, {
    key: 'foodeeEnterpriseOrderPlatformRank',


    /** @param {string} foodeeEnterpriseOrderPlatformRank **/
    set: function set(foodeeEnterpriseOrderPlatformRank) {
      this._attributes['foodee-enterprise-order-platform-rank'] = foodeeEnterpriseOrderPlatformRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-enterprise-order-platform-rank'];
    }
  }, {
    key: 'foodeeEnterpriseOrderAreaRank',


    /** @param {string} foodeeEnterpriseOrderAreaRank **/
    set: function set(foodeeEnterpriseOrderAreaRank) {
      this._attributes['foodee-enterprise-order-area-rank'] = foodeeEnterpriseOrderAreaRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-enterprise-order-area-rank'];
    }
  }, {
    key: 'foodeeEnterpriseOrderAreaPercentRank',


    /** @param {string} foodeeEnterpriseOrderAreaPercentRank **/
    set: function set(foodeeEnterpriseOrderAreaPercentRank) {
      this._attributes['foodee-enterprise-order-area-percent-rank'] = foodeeEnterpriseOrderAreaPercentRank;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-enterprise-order-area-percent-rank'];
    }
  }, {
    key: 'foodeeEnterpriseOrderPercentage',


    /** @param {string} foodeeEnterpriseOrderPercentage **/
    set: function set(foodeeEnterpriseOrderPercentage) {
      this._attributes['foodee-enterprise-order-percentage'] = foodeeEnterpriseOrderPercentage;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['foodee-enterprise-order-percentage'];
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

  return RestaurantRanking;
}(_resource2.default);

/** @class RestaurantVote
  * @extends {Resource}
  **/


var RestaurantVote = exports.RestaurantVote = function (_Resource79) {
  _inherits(RestaurantVote, _Resource79);

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


var Role = exports.Role = function (_Resource80) {
  _inherits(Role, _Resource80);

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

/** @class SalesforceCase
  * @extends {Resource}
  **/


var SalesforceCase = exports.SalesforceCase = function (_Resource81) {
  _inherits(SalesforceCase, _Resource81);

  function SalesforceCase() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, SalesforceCase);

    return _possibleConstructorReturn(this, (SalesforceCase.__proto__ || Object.getPrototypeOf(SalesforceCase)).call(this, id, 'salesforce-cases', attributes, one, many));
  }

  // attributes

  /** @param {any} caseReason **/


  _createClass(SalesforceCase, [{
    key: 'caseReason',
    set: function set(caseReason) {
      this._attributes['case-reason'] = caseReason;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['case-reason'];
    }
  }, {
    key: 'status',


    /** @param {string} status **/
    set: function set(status) {
      this._attributes['status'] = status;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['status'];
    }
  }, {
    key: 'origin',


    /** @param {string} origin **/
    set: function set(origin) {
      this._attributes['origin'] = origin;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['origin'];
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
    key: 'caseType',


    /** @param {any} caseType **/
    set: function set(caseType) {
      this._attributes['case-type'] = caseType;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['case-type'];
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

  return SalesforceCase;
}(_resource2.default);

/** @class SalesforceSyncError
  * @extends {Resource}
  **/


var SalesforceSyncError = exports.SalesforceSyncError = function (_Resource82) {
  _inherits(SalesforceSyncError, _Resource82);

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
var ServiceTime = exports.ServiceTime = function (_Resource83) {
  _inherits(ServiceTime, _Resource83);

  function ServiceTime() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, ServiceTime);

    return _possibleConstructorReturn(this, (ServiceTime.__proto__ || Object.getPrototypeOf(ServiceTime)).call(this, id, 'service-times', attributes, one, many));
  }

  // attributes

  /** @param {any} weekdayLetter **/


  _createClass(ServiceTime, [{
    key: 'weekdayLetter',
    set: function set(weekdayLetter) {
      this._attributes['weekday-letter'] = weekdayLetter;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['weekday-letter'];
    }
  }, {
    key: 'weekdayName',


    /** @param {any} weekdayName **/
    set: function set(weekdayName) {
      this._attributes['weekday-name'] = weekdayName;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['weekday-name'];
    }
  }, {
    key: 'weekday',


    /** @param {any} weekday **/
    set: function set(weekday) {
      this._attributes['weekday'] = weekday;
    },

    /** @type {any} */
    get: function get() {
      return this._attributes['weekday'];
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

/** @class SubscriptionPlan
  * @extends {Resource}
  **/


var SubscriptionPlan = exports.SubscriptionPlan = function (_Resource84) {
  _inherits(SubscriptionPlan, _Resource84);

  function SubscriptionPlan() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, SubscriptionPlan);

    return _possibleConstructorReturn(this, (SubscriptionPlan.__proto__ || Object.getPrototypeOf(SubscriptionPlan)).call(this, id, 'subscription-plans', attributes, one, many));
  }

  // attributes

  /** @param {string} plan **/


  _createClass(SubscriptionPlan, [{
    key: 'plan',
    set: function set(plan) {
      this._attributes['plan'] = plan;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['plan'];
    }
  }, {
    key: 'price',


    /** @param {string} price **/
    set: function set(price) {
      this._attributes['price'] = price;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['price'];
    }
  }, {
    key: 'deliveryPrice',


    /** @param {string} deliveryPrice **/
    set: function set(deliveryPrice) {
      this._attributes['delivery-price'] = deliveryPrice;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['delivery-price'];
    }
  }, {
    key: 'planType',


    /** @param {string} planType **/
    set: function set(planType) {
      this._attributes['plan-type'] = planType;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['plan-type'];
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
    key: 'isCustom',


    /** @param {string} isCustom **/
    set: function set(isCustom) {
      this._attributes['is-custom'] = isCustom;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['is-custom'];
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
  }, {
    key: 'featureFlagDescriptions',


    /** @param {FeatureFlagDescription[]} featureFlagDescriptions **/
    set: function set(featureFlagDescriptions) {
      this._many['feature-flag-descriptions'] = featureFlagDescriptions;
    },

    /** @type {FeatureFlagDescription[]} */
    get: function get() {
      return this._many['feature-flag-descriptions'];
    }
  }]);

  return SubscriptionPlan;
}(_resource2.default);

/** @class Tag
  * @extends {Resource}
  **/


var Tag = exports.Tag = function (_Resource85) {
  _inherits(Tag, _Resource85);

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
var Team = exports.Team = function (_Resource86) {
  _inherits(Team, _Resource86);

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
    key: 'managedInternally',


    /** @param {string} managedInternally **/
    set: function set(managedInternally) {
      this._attributes['managed-internally'] = managedInternally;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['managed-internally'];
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
    key: 'dietaryComposition',


    /** @param {string} dietaryComposition **/
    set: function set(dietaryComposition) {
      this._attributes['dietary-composition'] = dietaryComposition;
    },

    /** @type {string} */
    get: function get() {
      return this._attributes['dietary-composition'];
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
    key: 'members',


    /** @param {User[]} members **/
    set: function set(members) {
      this._many['members'] = members;
    },

    /** @type {User[]} */
    get: function get() {
      return this._many['members'];
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
    key: 'memberProfiles',


    /** @param {MealPlanningPreferenceProfile[]} memberProfiles **/
    set: function set(memberProfiles) {
      this._many['member-profiles'] = memberProfiles;
    },

    /** @type {MealPlanningPreferenceProfile[]} */
    get: function get() {
      return this._many['member-profiles'];
    }
  }]);

  return Team;
}(_resource2.default);

/** @class User
  * @extends {Resource}
  **/


var User = exports.User = function (_Resource87) {
  _inherits(User, _Resource87);

  function User() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var one = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, id, 'users', attributes, one, many));
  }

  // attributes

  /** @param {Date} acceptedTermsAt **/


  _createClass(User, [{
    key: 'acceptedTermsAt',
    set: function set(acceptedTermsAt) {
      this._attributes['accepted-terms-at'] = acceptedTermsAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['accepted-terms-at'];
    }
  }, {
    key: 'lastSignInAt',


    /** @param {Date} lastSignInAt **/
    set: function set(lastSignInAt) {
      this._attributes['last-sign-in-at'] = lastSignInAt;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['last-sign-in-at'];
    }
  }, {
    key: 'slackChannelInfo',


    /** @param {Date} slackChannelInfo **/
    set: function set(slackChannelInfo) {
      this._attributes['slack-channel-info'] = slackChannelInfo;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['slack-channel-info'];
    }
  }, {
    key: 'onPayroll',


    /** @param {Date} onPayroll **/
    set: function set(onPayroll) {
      this._attributes['on-payroll'] = onPayroll;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['on-payroll'];
    }
  }, {
    key: 'clientAlwaysCall',


    /** @param {Date} clientAlwaysCall **/
    set: function set(clientAlwaysCall) {
      this._attributes['client-always-call'] = clientAlwaysCall;
    },

    /** @type {Date} */
    get: function get() {
      return this._attributes['client-always-call'];
    }
  }, {
    key: 'active',


    /** @param {boolean} active **/
    set: function set(active) {
      this._attributes['active'] = active;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['active'];
    }
  }, {
    key: 'managedInternally',


    /** @param {boolean} managedInternally **/
    set: function set(managedInternally) {
      this._attributes['managed-internally'] = managedInternally;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['managed-internally'];
    }
  }, {
    key: 'department',


    /** @param {boolean} department **/
    set: function set(department) {
      this._attributes['department'] = department;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['department'];
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
    key: 'salesforceEmail',


    /** @param {boolean} salesforceEmail **/
    set: function set(salesforceEmail) {
      this._attributes['salesforce-email'] = salesforceEmail;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['salesforce-email'];
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
    key: 'profilePictureUrl',


    /** @param {boolean} profilePictureUrl **/
    set: function set(profilePictureUrl) {
      this._attributes['profile-picture-url'] = profilePictureUrl;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['profile-picture-url'];
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
    key: 'isFoodeeEmployee',


    /** @param {boolean} isFoodeeEmployee **/
    set: function set(isFoodeeEmployee) {
      this._attributes['is-foodee-employee'] = isFoodeeEmployee;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-foodee-employee'];
    }
  }, {
    key: 'isRestaurantUser',


    /** @param {boolean} isRestaurantUser **/
    set: function set(isRestaurantUser) {
      this._attributes['is-restaurant-user'] = isRestaurantUser;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-restaurant-user'];
    }
  }, {
    key: 'isExclusivelySwiftFoxUser',


    /** @param {boolean} isExclusivelySwiftFoxUser **/
    set: function set(isExclusivelySwiftFoxUser) {
      this._attributes['is-exclusively-swift-fox-user'] = isExclusivelySwiftFoxUser;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['is-exclusively-swift-fox-user'];
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
    key: 'overridePhoneNumber',


    /** @param {boolean} overridePhoneNumber **/
    set: function set(overridePhoneNumber) {
      this._attributes['override-phone-number'] = overridePhoneNumber;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['override-phone-number'];
    }
  }, {
    key: 'notifyByEmailOnDelivery',


    /** @param {boolean} notifyByEmailOnDelivery **/
    set: function set(notifyByEmailOnDelivery) {
      this._attributes['notify-by-email-on-delivery'] = notifyByEmailOnDelivery;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['notify-by-email-on-delivery'];
    }
  }, {
    key: 'notifyBySMSOnDelivery',


    /** @param {boolean} notifyBySMSOnDelivery **/
    set: function set(notifyBySMSOnDelivery) {
      this._attributes['notify-by-sms-on-delivery'] = notifyBySMSOnDelivery;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['notify-by-sms-on-delivery'];
    }
  }, {
    key: 'notificationPreferences',


    /** @param {boolean} notificationPreferences **/
    set: function set(notificationPreferences) {
      this._attributes['notification-preferences'] = notificationPreferences;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['notification-preferences'];
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
    key: 'shouldShowWelcome',


    /** @param {boolean} shouldShowWelcome **/
    set: function set(shouldShowWelcome) {
      this._attributes['should-show-welcome'] = shouldShowWelcome;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['should-show-welcome'];
    }
  }, {
    key: 'customFields',


    /** @param {boolean} customFields **/
    set: function set(customFields) {
      this._attributes['custom-fields'] = customFields;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['custom-fields'];
    }
  }, {
    key: 'storage',


    /** @param {boolean} storage **/
    set: function set(storage) {
      this._attributes['storage'] = storage;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['storage'];
    }
  }, {
    key: 'planIcalUrl',


    /** @param {boolean} planIcalUrl **/
    set: function set(planIcalUrl) {
      this._attributes['plan-ical-url'] = planIcalUrl;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['plan-ical-url'];
    }
  }, {
    key: 'state',


    /** @param {boolean} state **/
    set: function set(state) {
      this._attributes['state'] = state;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['state'];
    }
  }, {
    key: 'newExperience',


    /** @param {boolean} newExperience **/
    set: function set(newExperience) {
      this._attributes['new-experience'] = newExperience;
    },

    /** @type {boolean} */
    get: function get() {
      return this._attributes['new-experience'];
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
    key: 'communicationPreference',


    /** @param {CommunicationPreference} communicationPreference **/
    set: function set(communicationPreference) {
      this._one['communication-preference'] = communicationPreference;
    },

    /** @type {CommunicationPreference} */
    get: function get() {
      return this._one['communication-preference'];
    }
  }, {
    key: 'preferenceProfile',


    /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
    set: function set(preferenceProfile) {
      this._one['preference-profile'] = preferenceProfile;
    },

    /** @type {MealPlanningPreferenceProfile} */
    get: function get() {
      return this._one['preference-profile'];
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
    key: 'allUserVersions',


    /** @param {HistorianVersion[]} allUserVersions **/
    set: function set(allUserVersions) {
      this._many['all-user-versions'] = allUserVersions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['all-user-versions'];
    }
  }, {
    key: 'versions',


    /** @param {HistorianVersion[]} versions **/
    set: function set(versions) {
      this._many['versions'] = versions;
    },

    /** @type {HistorianVersion[]} */
    get: function get() {
      return this._many['versions'];
    }
  }, {
    key: 'clientOrders',


    /** @param {Order[]} clientOrders **/
    set: function set(clientOrders) {
      this._many['client-orders'] = clientOrders;
    },

    /** @type {Order[]} */
    get: function get() {
      return this._many['client-orders'];
    }
  }, {
    key: 'events',


    /** @param {MealPlanningEvent[]} events **/
    set: function set(events) {
      this._many['events'] = events;
    },

    /** @type {MealPlanningEvent[]} */
    get: function get() {
      return this._many['events'];
    }
  }]);

  return User;
}(_resource2.default);

/** @class UserFeedback
  * @extends {Resource}
  **/


var UserFeedback = exports.UserFeedback = function (_Resource88) {
  _inherits(UserFeedback, _Resource88);

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
var UserInvite = exports.UserInvite = function (_Resource89) {
  _inherits(UserInvite, _Resource89);

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

var ResourceClasses = (_ResourceClasses = {}, _defineProperty(_ResourceClasses, 'accounting-consolidation-configurations', AccountingConsolidationConfiguration), _defineProperty(_ResourceClasses, 'accounting-consolidation-runs', AccountingConsolidationRun), _defineProperty(_ResourceClasses, 'accounting-ledger-items', AccountingLedgerItem), _defineProperty(_ResourceClasses, 'accounting-line-items', AccountingLineItem), _defineProperty(_ResourceClasses, 'app-configurations', AppConfiguration), _defineProperty(_ResourceClasses, 'areas', Area), _defineProperty(_ResourceClasses, 'area-closures', AreaClosure), _defineProperty(_ResourceClasses, 'clients', Client), _defineProperty(_ResourceClasses, 'client-discounts', ClientDiscount), _defineProperty(_ResourceClasses, 'client-order-invoices', ClientOrderInvoice), _defineProperty(_ResourceClasses, 'client-signups', ClientSignup), _defineProperty(_ResourceClasses, 'communication-preferences', CommunicationPreference), _defineProperty(_ResourceClasses, 'companies', Company), _defineProperty(_ResourceClasses, 'contacts', Contact), _defineProperty(_ResourceClasses, 'couriers', Courier), _defineProperty(_ResourceClasses, 'currencies-currencies', CurrenciesCurrency), _defineProperty(_ResourceClasses, 'currencies-transactions', CurrenciesTransaction), _defineProperty(_ResourceClasses, 'currencies-wallets', CurrenciesWallet), _defineProperty(_ResourceClasses, 'delivery-cases', DeliveryCase), _defineProperty(_ResourceClasses, 'delivery-locations', DeliveryLocation), _defineProperty(_ResourceClasses, 'desk-cases', DeskCase), _defineProperty(_ResourceClasses, 'dietary-tags', DietaryTag), _defineProperty(_ResourceClasses, 'discount-codes', DiscountCode), _defineProperty(_ResourceClasses, 'driver-days', DriverDay), _defineProperty(_ResourceClasses, 'driver-payments', DriverPayment), _defineProperty(_ResourceClasses, 'driver-payroll-runs', DriverPayrollRun), _defineProperty(_ResourceClasses, 'driver-pings', DriverPing), _defineProperty(_ResourceClasses, 'driver-resources', DriverResource), _defineProperty(_ResourceClasses, 'driver-weeks', DriverWeek), _defineProperty(_ResourceClasses, 'email-messages', EmailMessage), _defineProperty(_ResourceClasses, 'events', Event), _defineProperty(_ResourceClasses, 'feature-flag-descriptions', FeatureFlagDescription), _defineProperty(_ResourceClasses, 'food-types', FoodType), _defineProperty(_ResourceClasses, 'giftbit-cards', GiftbitCard), _defineProperty(_ResourceClasses, 'giftbit-errors', GiftbitError), _defineProperty(_ResourceClasses, 'giftbit-gifts', GiftbitGift), _defineProperty(_ResourceClasses, 'group-order-members', GroupOrderMember), _defineProperty(_ResourceClasses, 'historian-versions', HistorianVersion), _defineProperty(_ResourceClasses, 'invoices', Invoice), _defineProperty(_ResourceClasses, 'invoicing-ledger-items', InvoicingLedgerItem), _defineProperty(_ResourceClasses, 'invoicing-tax-rates', InvoicingTaxRate), _defineProperty(_ResourceClasses, 'locations', Location), _defineProperty(_ResourceClasses, 'logistics-arrival-estimates', LogisticsArrivalEstimate), _defineProperty(_ResourceClasses, 'logistics-deliveries', LogisticsDelivery), _defineProperty(_ResourceClasses, 'meal-plans', MealPlan), _defineProperty(_ResourceClasses, 'meal-planning-events', MealPlanningEvent), _defineProperty(_ResourceClasses, 'meal-planning-instances', MealPlanningInstance), _defineProperty(_ResourceClasses, 'meal-planning-log-records', MealPlanningLogRecord), _defineProperty(_ResourceClasses, 'meal-planning-preference-profiles', MealPlanningPreferenceProfile), _defineProperty(_ResourceClasses, 'meal-planning-requirements', MealPlanningRequirement), _defineProperty(_ResourceClasses, 'meal-planning-requirement-constraints', MealPlanningRequirementConstraint), _defineProperty(_ResourceClasses, 'meal-planning-requirement-groups', MealPlanningRequirementGroup), _defineProperty(_ResourceClasses, 'meal-planning-reservations', MealPlanningReservation), _defineProperty(_ResourceClasses, 'meal-planning-restaurant-constraints', MealPlanningRestaurantConstraint), _defineProperty(_ResourceClasses, 'meal-planning-schedules', MealPlanningSchedule), _defineProperty(_ResourceClasses, 'meal-planning-templates', MealPlanningTemplate), _defineProperty(_ResourceClasses, 'meal-types', MealType), _defineProperty(_ResourceClasses, 'menus', Menu), _defineProperty(_ResourceClasses, 'menu-groups', MenuGroup), _defineProperty(_ResourceClasses, 'menu-items', MenuItem), _defineProperty(_ResourceClasses, 'menu-option-groups', MenuOptionGroup), _defineProperty(_ResourceClasses, 'menu-option-items', MenuOptionItem), _defineProperty(_ResourceClasses, 'notification-logs', NotificationLog), _defineProperty(_ResourceClasses, 'orders', Order), _defineProperty(_ResourceClasses, 'order-items', OrderItem), _defineProperty(_ResourceClasses, 'payment-accounts', PaymentAccount), _defineProperty(_ResourceClasses, 'payment-cards', PaymentCard), _defineProperty(_ResourceClasses, 'payroll-runs', PayrollRun), _defineProperty(_ResourceClasses, 'pickup-locations', PickupLocation), _defineProperty(_ResourceClasses, 'promo-codes', PromoCode), _defineProperty(_ResourceClasses, 'qualifying-questions', QualifyingQuestion), _defineProperty(_ResourceClasses, 'release-notes', ReleaseNote), _defineProperty(_ResourceClasses, 'restaurants', Restaurant), _defineProperty(_ResourceClasses, 'restaurant-capacity-tranches', RestaurantCapacityTranche), _defineProperty(_ResourceClasses, 'restaurant-closures', RestaurantClosure), _defineProperty(_ResourceClasses, 'restaurant-discounts', RestaurantDiscount), _defineProperty(_ResourceClasses, 'restaurant-order-invoices', RestaurantOrderInvoice), _defineProperty(_ResourceClasses, 'restaurant-rankings', RestaurantRanking), _defineProperty(_ResourceClasses, 'restaurant-votes', RestaurantVote), _defineProperty(_ResourceClasses, 'roles', Role), _defineProperty(_ResourceClasses, 'salesforce-cases', SalesforceCase), _defineProperty(_ResourceClasses, 'salesforce-sync-errors', SalesforceSyncError), _defineProperty(_ResourceClasses, 'service-times', ServiceTime), _defineProperty(_ResourceClasses, 'subscription-plans', SubscriptionPlan), _defineProperty(_ResourceClasses, 'tags', Tag), _defineProperty(_ResourceClasses, 'teams', Team), _defineProperty(_ResourceClasses, 'users', User), _defineProperty(_ResourceClasses, 'user-feedbacks', UserFeedback), _defineProperty(_ResourceClasses, 'user-invites', UserInvite), _ResourceClasses);

exports.default = ResourceClasses;