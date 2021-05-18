'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInviteRelationshipDao = exports.UserInviteDao = exports.UserFeedbackRelationshipDao = exports.UserFeedbackDao = exports.UserRelationshipDao = exports.UserDao = exports.TeamRelationshipDao = exports.TeamDao = exports.TagRelationshipDao = exports.TagDao = exports.SubscriptionPlanRelationshipDao = exports.SubscriptionPlanDao = exports.ServiceTimeRelationshipDao = exports.ServiceTimeDao = exports.SalesforceSyncErrorRelationshipDao = exports.SalesforceSyncErrorDao = exports.SalesforceCaseRelationshipDao = exports.SalesforceCaseDao = exports.RoleRelationshipDao = exports.RoleDao = exports.RestaurantVoteRelationshipDao = exports.RestaurantVoteDao = exports.RestaurantRankingRelationshipDao = exports.RestaurantRankingDao = exports.RestaurantOrderInvoiceRelationshipDao = exports.RestaurantOrderInvoiceDao = exports.RestaurantDiscountRelationshipDao = exports.RestaurantDiscountDao = exports.RestaurantClosureRelationshipDao = exports.RestaurantClosureDao = exports.RestaurantCapacityTrancheRelationshipDao = exports.RestaurantCapacityTrancheDao = exports.RestaurantRelationshipDao = exports.RestaurantDao = exports.ReleaseNoteRelationshipDao = exports.ReleaseNoteDao = exports.QualifyingQuestionRelationshipDao = exports.QualifyingQuestionDao = exports.PromoCodeRelationshipDao = exports.PromoCodeDao = exports.PickupLocationRelationshipDao = exports.PickupLocationDao = exports.PayrollRunRelationshipDao = exports.PayrollRunDao = exports.PaymentCardRelationshipDao = exports.PaymentCardDao = exports.PaymentAccountRelationshipDao = exports.PaymentAccountDao = exports.OrderItemRelationshipDao = exports.OrderItemDao = exports.OrderRelationshipDao = exports.OrderDao = exports.NotificationLogRelationshipDao = exports.NotificationLogDao = exports.MenuOptionItemRelationshipDao = exports.MenuOptionItemDao = exports.MenuOptionGroupRelationshipDao = exports.MenuOptionGroupDao = exports.MenuItemRelationshipDao = exports.MenuItemDao = exports.MenuGroupRelationshipDao = exports.MenuGroupDao = exports.MenuRelationshipDao = exports.MenuDao = exports.MealTypeRelationshipDao = exports.MealTypeDao = exports.MealPlanningTemplateRelationshipDao = exports.MealPlanningTemplateDao = exports.MealPlanningScheduleRelationshipDao = exports.MealPlanningScheduleDao = exports.MealPlanningRestaurantConstraintRelationshipDao = exports.MealPlanningRestaurantConstraintDao = exports.MealPlanningReservationRelationshipDao = exports.MealPlanningReservationDao = exports.MealPlanningRequirementGroupRelationshipDao = exports.MealPlanningRequirementGroupDao = exports.MealPlanningRequirementConstraintRelationshipDao = exports.MealPlanningRequirementConstraintDao = undefined;
exports.MealPlanningRequirementRelationshipDao = exports.MealPlanningRequirementDao = exports.MealPlanningPreferenceProfileRelationshipDao = exports.MealPlanningPreferenceProfileDao = exports.MealPlanningLogRecordRelationshipDao = exports.MealPlanningLogRecordDao = exports.MealPlanningInstanceRelationshipDao = exports.MealPlanningInstanceDao = exports.MealPlanningEventRelationshipDao = exports.MealPlanningEventDao = exports.MealPlanRelationshipDao = exports.MealPlanDao = exports.LogisticsDeliveryRelationshipDao = exports.LogisticsDeliveryDao = exports.LogisticsArrivalEstimateRelationshipDao = exports.LogisticsArrivalEstimateDao = exports.LocationRelationshipDao = exports.LocationDao = exports.InvoicingTaxRateRelationshipDao = exports.InvoicingTaxRateDao = exports.InvoicingLedgerItemRelationshipDao = exports.InvoicingLedgerItemDao = exports.InvoiceRelationshipDao = exports.InvoiceDao = exports.HistorianVersionRelationshipDao = exports.HistorianVersionDao = exports.GroupOrderMemberRelationshipDao = exports.GroupOrderMemberDao = exports.GiftbitGiftRelationshipDao = exports.GiftbitGiftDao = exports.GiftbitErrorRelationshipDao = exports.GiftbitErrorDao = exports.GiftbitCardRelationshipDao = exports.GiftbitCardDao = exports.FoodTypeRelationshipDao = exports.FoodTypeDao = exports.FeatureFlagDescriptionRelationshipDao = exports.FeatureFlagDescriptionDao = exports.EventRelationshipDao = exports.EventDao = exports.EmailMessageRelationshipDao = exports.EmailMessageDao = exports.DriverWeekRelationshipDao = exports.DriverWeekDao = exports.DriverResourceRelationshipDao = exports.DriverResourceDao = exports.DriverPingRelationshipDao = exports.DriverPingDao = exports.DriverPayrollRunRelationshipDao = exports.DriverPayrollRunDao = exports.DriverPaymentRelationshipDao = exports.DriverPaymentDao = exports.DriverDayRelationshipDao = exports.DriverDayDao = exports.DiscountCodeRelationshipDao = exports.DiscountCodeDao = exports.DietaryTagRelationshipDao = exports.DietaryTagDao = exports.DeskCaseRelationshipDao = exports.DeskCaseDao = exports.DeliveryLocationRelationshipDao = exports.DeliveryLocationDao = exports.DeliveryCaseRelationshipDao = exports.DeliveryCaseDao = exports.CurrenciesWalletRelationshipDao = exports.CurrenciesWalletDao = exports.CurrenciesTransactionRelationshipDao = exports.CurrenciesTransactionDao = exports.CurrenciesCurrencyRelationshipDao = exports.CurrenciesCurrencyDao = exports.CourierRelationshipDao = exports.CourierDao = exports.ContactRelationshipDao = exports.ContactDao = exports.CompanyRelationshipDao = exports.CompanyDao = exports.CommunicationPreferenceRelationshipDao = exports.CommunicationPreferenceDao = exports.ClientSignupRelationshipDao = exports.ClientSignupDao = exports.ClientOrderInvoiceRelationshipDao = exports.ClientOrderInvoiceDao = exports.ClientDiscountRelationshipDao = exports.ClientDiscountDao = exports.ClientRelationshipDao = exports.ClientDao = exports.AreaClosureRelationshipDao = exports.AreaClosureDao = exports.AreaRelationshipDao = exports.AreaDao = exports.AppConfigurationRelationshipDao = exports.AppConfigurationDao = exports.AccountingLineItemRelationshipDao = exports.AccountingLineItemDao = exports.AccountingLedgerItemRelationshipDao = exports.AccountingLedgerItemDao = exports.AccountingConsolidationRunRelationshipDao = exports.AccountingConsolidationRunDao = exports.AccountingConsolidationConfigurationRelationshipDao = exports.AccountingConsolidationConfigurationDao = undefined;

var _clientBase = require('../client-base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @class AccountingConsolidationConfigurationDao
  * @extends {ResourceDao}
  **/
var AccountingConsolidationConfigurationDao = exports.AccountingConsolidationConfigurationDao = function (_ResourceDao) {
  _inherits(AccountingConsolidationConfigurationDao, _ResourceDao);

  function AccountingConsolidationConfigurationDao(client) {
    _classCallCheck(this, AccountingConsolidationConfigurationDao);

    var _this = _possibleConstructorReturn(this, (AccountingConsolidationConfigurationDao.__proto__ || Object.getPrototypeOf(AccountingConsolidationConfigurationDao)).call(this, client, 'accounting-consolidation-configurations'));

    _this.relationshipDao = new AccountingConsolidationConfigurationRelationshipDao(client);
    return _this;
  }

  return AccountingConsolidationConfigurationDao;
}(_clientBase.ResourceDao);

/** @class AccountingConsolidationConfigurationRelationshipDao
 * @extends {RelationshipDao}  **/


var AccountingConsolidationConfigurationRelationshipDao = exports.AccountingConsolidationConfigurationRelationshipDao = function (_RelationshipDao) {
  _inherits(AccountingConsolidationConfigurationRelationshipDao, _RelationshipDao);

  function AccountingConsolidationConfigurationRelationshipDao(client) {
    _classCallCheck(this, AccountingConsolidationConfigurationRelationshipDao);

    var _this2 = _possibleConstructorReturn(this, (AccountingConsolidationConfigurationRelationshipDao.__proto__ || Object.getPrototypeOf(AccountingConsolidationConfigurationRelationshipDao)).call(this, client, 'accounting-consolidation-configurations'));

    _this2.get = {

      /** @method paymentCard
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      paymentCard: function paymentCard(options) {
        return _this2.toOne('payment-card', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this2.toOne('client', options);
      }
    };

    _this2.index = {

      /** @method runs
       @params {Object} options
       @returns {Promise<IndexResult<AccountingConsolidationRun>>} **/
      runs: function runs(options) {
        return _this2.toMany('runs', options);
      }
    };
    return _this2;
  }

  return AccountingConsolidationConfigurationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AccountingConsolidationRunDao
  * @extends {ResourceDao}
  **/


var AccountingConsolidationRunDao = exports.AccountingConsolidationRunDao = function (_ResourceDao2) {
  _inherits(AccountingConsolidationRunDao, _ResourceDao2);

  function AccountingConsolidationRunDao(client) {
    _classCallCheck(this, AccountingConsolidationRunDao);

    var _this3 = _possibleConstructorReturn(this, (AccountingConsolidationRunDao.__proto__ || Object.getPrototypeOf(AccountingConsolidationRunDao)).call(this, client, 'accounting-consolidation-runs'));

    _this3.relationshipDao = new AccountingConsolidationRunRelationshipDao(client);
    return _this3;
  }

  return AccountingConsolidationRunDao;
}(_clientBase.ResourceDao);

/** @class AccountingConsolidationRunRelationshipDao
 * @extends {RelationshipDao}  **/


var AccountingConsolidationRunRelationshipDao = exports.AccountingConsolidationRunRelationshipDao = function (_RelationshipDao2) {
  _inherits(AccountingConsolidationRunRelationshipDao, _RelationshipDao2);

  function AccountingConsolidationRunRelationshipDao(client) {
    _classCallCheck(this, AccountingConsolidationRunRelationshipDao);

    var _this4 = _possibleConstructorReturn(this, (AccountingConsolidationRunRelationshipDao.__proto__ || Object.getPrototypeOf(AccountingConsolidationRunRelationshipDao)).call(this, client, 'accounting-consolidation-runs'));

    _this4.get = {

      /** @method configuration
       @params {Object} options
       @returns {Promise<AccountingConsolidationConfiguration>} **/
      configuration: function configuration(options) {
        return _this4.toOne('configuration', options);
      },

      /** @method invoice
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      invoice: function invoice(options) {
        return _this4.toOne('invoice', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this4.toOne('client', options);
      }
    };

    return _this4;
  }

  return AccountingConsolidationRunRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AccountingLedgerItemDao
  * @extends {ResourceDao}
  **/


var AccountingLedgerItemDao = exports.AccountingLedgerItemDao = function (_ResourceDao3) {
  _inherits(AccountingLedgerItemDao, _ResourceDao3);

  function AccountingLedgerItemDao(client) {
    _classCallCheck(this, AccountingLedgerItemDao);

    var _this5 = _possibleConstructorReturn(this, (AccountingLedgerItemDao.__proto__ || Object.getPrototypeOf(AccountingLedgerItemDao)).call(this, client, 'accounting-ledger-items'));

    _this5.relationshipDao = new AccountingLedgerItemRelationshipDao(client);
    return _this5;
  }

  return AccountingLedgerItemDao;
}(_clientBase.ResourceDao);

/** @class AccountingLedgerItemRelationshipDao
 * @extends {RelationshipDao}  **/


var AccountingLedgerItemRelationshipDao = exports.AccountingLedgerItemRelationshipDao = function (_RelationshipDao3) {
  _inherits(AccountingLedgerItemRelationshipDao, _RelationshipDao3);

  function AccountingLedgerItemRelationshipDao(client) {
    _classCallCheck(this, AccountingLedgerItemRelationshipDao);

    var _this6 = _possibleConstructorReturn(this, (AccountingLedgerItemRelationshipDao.__proto__ || Object.getPrototypeOf(AccountingLedgerItemRelationshipDao)).call(this, client, 'accounting-ledger-items'));

    _this6.get = {

      /** @method parent
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      parent: function parent(options) {
        return _this6.toOne('parent', options);
      }
    };

    _this6.index = {

      /** @method lineItems
       @params {Object} options
       @returns {Promise<IndexResult<AccountingLineItem>>} **/
      lineItems: function lineItems(options) {
        return _this6.toMany('line-items', options);
      },

      /** @method children
       @params {Object} options
       @returns {Promise<IndexResult<AccountingLedgerItem>>} **/
      children: function children(options) {
        return _this6.toMany('children', options);
      }
    };
    return _this6;
  }

  return AccountingLedgerItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AccountingLineItemDao
  * @extends {ResourceDao}
  **/


var AccountingLineItemDao = exports.AccountingLineItemDao = function (_ResourceDao4) {
  _inherits(AccountingLineItemDao, _ResourceDao4);

  function AccountingLineItemDao(client) {
    _classCallCheck(this, AccountingLineItemDao);

    var _this7 = _possibleConstructorReturn(this, (AccountingLineItemDao.__proto__ || Object.getPrototypeOf(AccountingLineItemDao)).call(this, client, 'accounting-line-items'));

    _this7.relationshipDao = new AccountingLineItemRelationshipDao(client);
    return _this7;
  }

  return AccountingLineItemDao;
}(_clientBase.ResourceDao);

/** @class AccountingLineItemRelationshipDao
 * @extends {RelationshipDao}  **/


var AccountingLineItemRelationshipDao = exports.AccountingLineItemRelationshipDao = function (_RelationshipDao4) {
  _inherits(AccountingLineItemRelationshipDao, _RelationshipDao4);

  function AccountingLineItemRelationshipDao(client) {
    _classCallCheck(this, AccountingLineItemRelationshipDao);

    var _this8 = _possibleConstructorReturn(this, (AccountingLineItemRelationshipDao.__proto__ || Object.getPrototypeOf(AccountingLineItemRelationshipDao)).call(this, client, 'accounting-line-items'));

    _this8.get = {

      /** @method ledgerItem
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      ledgerItem: function ledgerItem(options) {
        return _this8.toOne('ledger-item', options);
      }
    };

    return _this8;
  }

  return AccountingLineItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AppConfigurationDao
  * @extends {ResourceDao}
  **/


var AppConfigurationDao = exports.AppConfigurationDao = function (_ResourceDao5) {
  _inherits(AppConfigurationDao, _ResourceDao5);

  function AppConfigurationDao(client) {
    _classCallCheck(this, AppConfigurationDao);

    var _this9 = _possibleConstructorReturn(this, (AppConfigurationDao.__proto__ || Object.getPrototypeOf(AppConfigurationDao)).call(this, client, 'app-configurations'));

    _this9.relationshipDao = new AppConfigurationRelationshipDao(client);
    return _this9;
  }

  return AppConfigurationDao;
}(_clientBase.ResourceDao);

/** @class AppConfigurationRelationshipDao
 * @extends {RelationshipDao}  **/


var AppConfigurationRelationshipDao = exports.AppConfigurationRelationshipDao = function (_RelationshipDao5) {
  _inherits(AppConfigurationRelationshipDao, _RelationshipDao5);

  function AppConfigurationRelationshipDao(client) {
    _classCallCheck(this, AppConfigurationRelationshipDao);

    var _this10 = _possibleConstructorReturn(this, (AppConfigurationRelationshipDao.__proto__ || Object.getPrototypeOf(AppConfigurationRelationshipDao)).call(this, client, 'app-configurations'));

    _this10.index = {

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this10.toMany('versions', options);
      }
    };
    return _this10;
  }

  return AppConfigurationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AreaDao
  * @extends {ResourceDao}
  **/


var AreaDao = exports.AreaDao = function (_ResourceDao6) {
  _inherits(AreaDao, _ResourceDao6);

  function AreaDao(client) {
    _classCallCheck(this, AreaDao);

    var _this11 = _possibleConstructorReturn(this, (AreaDao.__proto__ || Object.getPrototypeOf(AreaDao)).call(this, client, 'areas'));

    _this11.relationshipDao = new AreaRelationshipDao(client);
    return _this11;
  }

  return AreaDao;
}(_clientBase.ResourceDao);

/** @class AreaRelationshipDao
 * @extends {RelationshipDao}  **/


var AreaRelationshipDao = exports.AreaRelationshipDao = function (_RelationshipDao6) {
  _inherits(AreaRelationshipDao, _RelationshipDao6);

  function AreaRelationshipDao(client) {
    _classCallCheck(this, AreaRelationshipDao);

    var _this12 = _possibleConstructorReturn(this, (AreaRelationshipDao.__proto__ || Object.getPrototypeOf(AreaRelationshipDao)).call(this, client, 'areas'));

    _this12.get = {

      /** @method deliveryFeeTaxRate
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      deliveryFeeTaxRate: function deliveryFeeTaxRate(options) {
        return _this12.toOne('delivery-fee-tax-rate', options);
      }
    };

    _this12.index = {

      /** @method couriers
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      couriers: function couriers(options) {
        return _this12.toMany('couriers', options);
      },

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: function clients(options) {
        return _this12.toMany('clients', options);
      },

      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      restaurants: function restaurants(options) {
        return _this12.toMany('restaurants', options);
      },

      /** @method invoicingTaxRates
       @params {Object} options
       @returns {Promise<IndexResult<InvoicingTaxRate>>} **/
      invoicingTaxRates: function invoicingTaxRates(options) {
        return _this12.toMany('invoicing-tax-rates', options);
      },

      /** @method globalInvoicingTaxRates
       @params {Object} options
       @returns {Promise<IndexResult<InvoicingTaxRate>>} **/
      globalInvoicingTaxRates: function globalInvoicingTaxRates(options) {
        return _this12.toMany('global-invoicing-tax-rates', options);
      },

      /** @method areaClosures
       @params {Object} options
       @returns {Promise<IndexResult<AreaClosure>>} **/
      areaClosures: function areaClosures(options) {
        return _this12.toMany('area-closures', options);
      },

      /** @method currentWeekAreaClosures
       @params {Object} options
       @returns {Promise<IndexResult<AreaClosure>>} **/
      currentWeekAreaClosures: function currentWeekAreaClosures(options) {
        return _this12.toMany('current-week-area-closures', options);
      },

      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      promoCodes: function promoCodes(options) {
        return _this12.toMany('promo-codes', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this12.toMany('orders', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this12.toMany('versions', options);
      },

      /** @method allAreaVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allAreaVersions: function allAreaVersions(options) {
        return _this12.toMany('all-area-versions', options);
      }
    };
    return _this12;
  }

  return AreaRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AreaClosureDao
  * @extends {ResourceDao}
  **/


var AreaClosureDao = exports.AreaClosureDao = function (_ResourceDao7) {
  _inherits(AreaClosureDao, _ResourceDao7);

  function AreaClosureDao(client) {
    _classCallCheck(this, AreaClosureDao);

    var _this13 = _possibleConstructorReturn(this, (AreaClosureDao.__proto__ || Object.getPrototypeOf(AreaClosureDao)).call(this, client, 'area-closures'));

    _this13.relationshipDao = new AreaClosureRelationshipDao(client);
    return _this13;
  }

  return AreaClosureDao;
}(_clientBase.ResourceDao);

/** @class AreaClosureRelationshipDao
 * @extends {RelationshipDao}  **/


var AreaClosureRelationshipDao = exports.AreaClosureRelationshipDao = function (_RelationshipDao7) {
  _inherits(AreaClosureRelationshipDao, _RelationshipDao7);

  function AreaClosureRelationshipDao(client) {
    _classCallCheck(this, AreaClosureRelationshipDao);

    var _this14 = _possibleConstructorReturn(this, (AreaClosureRelationshipDao.__proto__ || Object.getPrototypeOf(AreaClosureRelationshipDao)).call(this, client, 'area-closures'));

    _this14.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this14.toOne('area', options);
      }
    };

    return _this14;
  }

  return AreaClosureRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientDao
  * @extends {ResourceDao}
  **/


var ClientDao = exports.ClientDao = function (_ResourceDao8) {
  _inherits(ClientDao, _ResourceDao8);

  function ClientDao(client) {
    _classCallCheck(this, ClientDao);

    var _this15 = _possibleConstructorReturn(this, (ClientDao.__proto__ || Object.getPrototypeOf(ClientDao)).call(this, client, 'clients'));

    _this15.relationshipDao = new ClientRelationshipDao(client);
    return _this15;
  }

  return ClientDao;
}(_clientBase.ResourceDao);

/** @class ClientRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientRelationshipDao = exports.ClientRelationshipDao = function (_RelationshipDao8) {
  _inherits(ClientRelationshipDao, _RelationshipDao8);

  function ClientRelationshipDao(client) {
    _classCallCheck(this, ClientRelationshipDao);

    var _this16 = _possibleConstructorReturn(this, (ClientRelationshipDao.__proto__ || Object.getPrototypeOf(ClientRelationshipDao)).call(this, client, 'clients'));

    _this16.get = {

      /** @method defaultArea
       @params {Object} options
       @returns {Promise<Area>} **/
      defaultArea: function defaultArea(options) {
        return _this16.toOne('default-area', options);
      },

      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      billingLocation: function billingLocation(options) {
        return _this16.toOne('billing-location', options);
      },

      /** @method billingContact
       @params {Object} options
       @returns {Promise<Contact>} **/
      billingContact: function billingContact(options) {
        return _this16.toOne('billing-contact', options);
      },

      /** @method subscriptionPlan
       @params {Object} options
       @returns {Promise<SubscriptionPlan>} **/
      subscriptionPlan: function subscriptionPlan(options) {
        return _this16.toOne('subscription-plan', options);
      },

      /** @method accountManager
       @params {Object} options
       @returns {Promise<User>} **/
      accountManager: function accountManager(options) {
        return _this16.toOne('account-manager', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: function owner(options) {
        return _this16.toOne('owner', options);
      },

      /** @method salesSupport
       @params {Object} options
       @returns {Promise<User>} **/
      salesSupport: function salesSupport(options) {
        return _this16.toOne('sales-support', options);
      },

      /** @method company
       @params {Object} options
       @returns {Promise<Company>} **/
      company: function company(options) {
        return _this16.toOne('company', options);
      },

      /** @method mealPlan
       @params {Object} options
       @returns {Promise<MealPlan>} **/
      mealPlan: function mealPlan(options) {
        return _this16.toOne('meal-plan', options);
      },

      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: function preferenceProfile(options) {
        return _this16.toOne('preference-profile', options);
      },

      /** @method taxRate
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      taxRate: function taxRate(options) {
        return _this16.toOne('tax-rate', options);
      },

      /** @method giftbitCard
       @params {Object} options
       @returns {Promise<GiftbitCard>} **/
      giftbitCard: function giftbitCard(options) {
        return _this16.toOne('giftbit-card', options);
      },

      /** @method wallet
       @params {Object} options
       @returns {Promise<CurrenciesWallet>} **/
      wallet: function wallet(options) {
        return _this16.toOne('wallet', options);
      }
    };

    _this16.index = {

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: function areas(options) {
        return _this16.toMany('areas', options);
      },

      /** @method deliveryLocations
       @params {Object} options
       @returns {Promise<IndexResult<DeliveryLocation>>} **/
      deliveryLocations: function deliveryLocations(options) {
        return _this16.toMany('delivery-locations', options);
      },

      /** @method paymentCards
       @params {Object} options
       @returns {Promise<IndexResult<PaymentCard>>} **/
      paymentCards: function paymentCards(options) {
        return _this16.toMany('payment-cards', options);
      },

      /** @method adminContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      adminContacts: function adminContacts(options) {
        return _this16.toMany('admin-contacts', options);
      },

      /** @method admins
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      admins: function admins(options) {
        return _this16.toMany('admins', options);
      },

      /** @method orderContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      orderContacts: function orderContacts(options) {
        return _this16.toMany('order-contacts', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this16.toMany('orders', options);
      },

      /** @method contacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      contacts: function contacts(options) {
        return _this16.toMany('contacts', options);
      },

      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: function teams(options) {
        return _this16.toMany('teams', options);
      },

      /** @method allClientVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allClientVersions: function allClientVersions(options) {
        return _this16.toMany('all-client-versions', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this16.toMany('versions', options);
      },

      /** @method mealPlanningTemplates
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningTemplate>>} **/
      mealPlanningTemplates: function mealPlanningTemplates(options) {
        return _this16.toMany('meal-planning-templates', options);
      },

      /** @method mealPlanningInstances
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningInstance>>} **/
      mealPlanningInstances: function mealPlanningInstances(options) {
        return _this16.toMany('meal-planning-instances', options);
      },

      /** @method mealPlanningReservations
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningReservation>>} **/
      mealPlanningReservations: function mealPlanningReservations(options) {
        return _this16.toMany('meal-planning-reservations', options);
      },

      /** @method clientDiscounts
       @params {Object} options
       @returns {Promise<IndexResult<ClientDiscount>>} **/
      clientDiscounts: function clientDiscounts(options) {
        return _this16.toMany('client-discounts', options);
      },

      /** @method giftbitGifts
       @params {Object} options
       @returns {Promise<IndexResult<GiftbitGift>>} **/
      giftbitGifts: function giftbitGifts(options) {
        return _this16.toMany('giftbit-gifts', options);
      },

      /** @method giftbitErrors
       @params {Object} options
       @returns {Promise<IndexResult<GiftbitError>>} **/
      giftbitErrors: function giftbitErrors(options) {
        return _this16.toMany('giftbit-errors', options);
      }
    };
    return _this16;
  }

  return ClientRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientDiscountDao
  * @extends {ResourceDao}
  **/


var ClientDiscountDao = exports.ClientDiscountDao = function (_ResourceDao9) {
  _inherits(ClientDiscountDao, _ResourceDao9);

  function ClientDiscountDao(client) {
    _classCallCheck(this, ClientDiscountDao);

    var _this17 = _possibleConstructorReturn(this, (ClientDiscountDao.__proto__ || Object.getPrototypeOf(ClientDiscountDao)).call(this, client, 'client-discounts'));

    _this17.relationshipDao = new ClientDiscountRelationshipDao(client);
    return _this17;
  }

  return ClientDiscountDao;
}(_clientBase.ResourceDao);

/** @class ClientDiscountRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientDiscountRelationshipDao = exports.ClientDiscountRelationshipDao = function (_RelationshipDao9) {
  _inherits(ClientDiscountRelationshipDao, _RelationshipDao9);

  function ClientDiscountRelationshipDao(client) {
    _classCallCheck(this, ClientDiscountRelationshipDao);

    var _this18 = _possibleConstructorReturn(this, (ClientDiscountRelationshipDao.__proto__ || Object.getPrototypeOf(ClientDiscountRelationshipDao)).call(this, client, 'client-discounts'));

    _this18.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this18.toOne('order', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<Owner>} **/
      owner: function owner(options) {
        return _this18.toOne('owner', options);
      }
    };

    return _this18;
  }

  return ClientDiscountRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientOrderInvoiceDao
  * @extends {ResourceDao}
  **/


var ClientOrderInvoiceDao = exports.ClientOrderInvoiceDao = function (_ResourceDao10) {
  _inherits(ClientOrderInvoiceDao, _ResourceDao10);

  function ClientOrderInvoiceDao(client) {
    _classCallCheck(this, ClientOrderInvoiceDao);

    var _this19 = _possibleConstructorReturn(this, (ClientOrderInvoiceDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceDao)).call(this, client, 'client-order-invoices'));

    _this19.relationshipDao = new ClientOrderInvoiceRelationshipDao(client);
    return _this19;
  }

  return ClientOrderInvoiceDao;
}(_clientBase.ResourceDao);

/** @class ClientOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientOrderInvoiceRelationshipDao = exports.ClientOrderInvoiceRelationshipDao = function (_RelationshipDao10) {
  _inherits(ClientOrderInvoiceRelationshipDao, _RelationshipDao10);

  function ClientOrderInvoiceRelationshipDao(client) {
    _classCallCheck(this, ClientOrderInvoiceRelationshipDao);

    return _possibleConstructorReturn(this, (ClientOrderInvoiceRelationshipDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceRelationshipDao)).call(this, client, 'client-order-invoices'));
  }

  return ClientOrderInvoiceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientSignupDao
  * @extends {ResourceDao}
  **/


var ClientSignupDao = exports.ClientSignupDao = function (_ResourceDao11) {
  _inherits(ClientSignupDao, _ResourceDao11);

  function ClientSignupDao(client) {
    _classCallCheck(this, ClientSignupDao);

    var _this21 = _possibleConstructorReturn(this, (ClientSignupDao.__proto__ || Object.getPrototypeOf(ClientSignupDao)).call(this, client, 'client-signups'));

    _this21.relationshipDao = new ClientSignupRelationshipDao(client);
    return _this21;
  }

  return ClientSignupDao;
}(_clientBase.ResourceDao);

/** @class ClientSignupRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientSignupRelationshipDao = exports.ClientSignupRelationshipDao = function (_RelationshipDao11) {
  _inherits(ClientSignupRelationshipDao, _RelationshipDao11);

  function ClientSignupRelationshipDao(client) {
    _classCallCheck(this, ClientSignupRelationshipDao);

    var _this22 = _possibleConstructorReturn(this, (ClientSignupRelationshipDao.__proto__ || Object.getPrototypeOf(ClientSignupRelationshipDao)).call(this, client, 'client-signups'));

    _this22.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this22.toOne('user', options);
      },

      /** @method qualifyingQuestion
       @params {Object} options
       @returns {Promise<QualifyingQuestion>} **/
      qualifyingQuestion: function qualifyingQuestion(options) {
        return _this22.toOne('qualifying-question', options);
      },

      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      billingLocation: function billingLocation(options) {
        return _this22.toOne('billing-location', options);
      },

      /** @method deliveryLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      deliveryLocation: function deliveryLocation(options) {
        return _this22.toOne('delivery-location', options);
      },

      /** @method billingContact
       @params {Object} options
       @returns {Promise<Contact>} **/
      billingContact: function billingContact(options) {
        return _this22.toOne('billing-contact', options);
      },

      /** @method contact
       @params {Object} options
       @returns {Promise<Contact>} **/
      contact: function contact(options) {
        return _this22.toOne('contact', options);
      }
    };

    _this22.index = {

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: function clients(options) {
        return _this22.toMany('clients', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: function areas(options) {
        return _this22.toMany('areas', options);
      }
    };
    return _this22;
  }

  return ClientSignupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CommunicationPreferenceDao
  * @extends {ResourceDao}
  **/


var CommunicationPreferenceDao = exports.CommunicationPreferenceDao = function (_ResourceDao12) {
  _inherits(CommunicationPreferenceDao, _ResourceDao12);

  function CommunicationPreferenceDao(client) {
    _classCallCheck(this, CommunicationPreferenceDao);

    var _this23 = _possibleConstructorReturn(this, (CommunicationPreferenceDao.__proto__ || Object.getPrototypeOf(CommunicationPreferenceDao)).call(this, client, 'communication-preferences'));

    _this23.relationshipDao = new CommunicationPreferenceRelationshipDao(client);
    return _this23;
  }

  return CommunicationPreferenceDao;
}(_clientBase.ResourceDao);

/** @class CommunicationPreferenceRelationshipDao
 * @extends {RelationshipDao}  **/


var CommunicationPreferenceRelationshipDao = exports.CommunicationPreferenceRelationshipDao = function (_RelationshipDao12) {
  _inherits(CommunicationPreferenceRelationshipDao, _RelationshipDao12);

  function CommunicationPreferenceRelationshipDao(client) {
    _classCallCheck(this, CommunicationPreferenceRelationshipDao);

    var _this24 = _possibleConstructorReturn(this, (CommunicationPreferenceRelationshipDao.__proto__ || Object.getPrototypeOf(CommunicationPreferenceRelationshipDao)).call(this, client, 'communication-preferences'));

    _this24.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this24.toOne('user', options);
      }
    };

    return _this24;
  }

  return CommunicationPreferenceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CompanyDao
  * @extends {ResourceDao}
  **/


var CompanyDao = exports.CompanyDao = function (_ResourceDao13) {
  _inherits(CompanyDao, _ResourceDao13);

  function CompanyDao(client) {
    _classCallCheck(this, CompanyDao);

    var _this25 = _possibleConstructorReturn(this, (CompanyDao.__proto__ || Object.getPrototypeOf(CompanyDao)).call(this, client, 'companies'));

    _this25.relationshipDao = new CompanyRelationshipDao(client);
    return _this25;
  }

  return CompanyDao;
}(_clientBase.ResourceDao);

/** @class CompanyRelationshipDao
 * @extends {RelationshipDao}  **/


var CompanyRelationshipDao = exports.CompanyRelationshipDao = function (_RelationshipDao13) {
  _inherits(CompanyRelationshipDao, _RelationshipDao13);

  function CompanyRelationshipDao(client) {
    _classCallCheck(this, CompanyRelationshipDao);

    var _this26 = _possibleConstructorReturn(this, (CompanyRelationshipDao.__proto__ || Object.getPrototypeOf(CompanyRelationshipDao)).call(this, client, 'companies'));

    _this26.index = {

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: function clients(options) {
        return _this26.toMany('clients', options);
      }
    };
    return _this26;
  }

  return CompanyRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ContactDao
  * @extends {ResourceDao}
  **/


var ContactDao = exports.ContactDao = function (_ResourceDao14) {
  _inherits(ContactDao, _ResourceDao14);

  function ContactDao(client) {
    _classCallCheck(this, ContactDao);

    var _this27 = _possibleConstructorReturn(this, (ContactDao.__proto__ || Object.getPrototypeOf(ContactDao)).call(this, client, 'contacts'));

    _this27.relationshipDao = new ContactRelationshipDao(client);
    return _this27;
  }

  return ContactDao;
}(_clientBase.ResourceDao);

/** @class ContactRelationshipDao
 * @extends {RelationshipDao}  **/


var ContactRelationshipDao = exports.ContactRelationshipDao = function (_RelationshipDao14) {
  _inherits(ContactRelationshipDao, _RelationshipDao14);

  function ContactRelationshipDao(client) {
    _classCallCheck(this, ContactRelationshipDao);

    return _possibleConstructorReturn(this, (ContactRelationshipDao.__proto__ || Object.getPrototypeOf(ContactRelationshipDao)).call(this, client, 'contacts'));
  }

  return ContactRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CourierDao
  * @extends {ResourceDao}
  **/


var CourierDao = exports.CourierDao = function (_ResourceDao15) {
  _inherits(CourierDao, _ResourceDao15);

  function CourierDao(client) {
    _classCallCheck(this, CourierDao);

    var _this29 = _possibleConstructorReturn(this, (CourierDao.__proto__ || Object.getPrototypeOf(CourierDao)).call(this, client, 'couriers'));

    _this29.relationshipDao = new CourierRelationshipDao(client);
    return _this29;
  }

  return CourierDao;
}(_clientBase.ResourceDao);

/** @class CourierRelationshipDao
 * @extends {RelationshipDao}  **/


var CourierRelationshipDao = exports.CourierRelationshipDao = function (_RelationshipDao15) {
  _inherits(CourierRelationshipDao, _RelationshipDao15);

  function CourierRelationshipDao(client) {
    _classCallCheck(this, CourierRelationshipDao);

    var _this30 = _possibleConstructorReturn(this, (CourierRelationshipDao.__proto__ || Object.getPrototypeOf(CourierRelationshipDao)).call(this, client, 'couriers'));

    _this30.get = {

      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: function owner(options) {
        return _this30.toOne('owner', options);
      }
    };

    _this30.index = {

      /** @method drivers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      drivers: function drivers(options) {
        return _this30.toMany('drivers', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: function areas(options) {
        return _this30.toMany('areas', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this30.toMany('versions', options);
      }
    };
    return _this30;
  }

  return CourierRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CurrenciesCurrencyDao
  * @extends {ResourceDao}
  **/


var CurrenciesCurrencyDao = exports.CurrenciesCurrencyDao = function (_ResourceDao16) {
  _inherits(CurrenciesCurrencyDao, _ResourceDao16);

  function CurrenciesCurrencyDao(client) {
    _classCallCheck(this, CurrenciesCurrencyDao);

    var _this31 = _possibleConstructorReturn(this, (CurrenciesCurrencyDao.__proto__ || Object.getPrototypeOf(CurrenciesCurrencyDao)).call(this, client, 'currencies-currencies'));

    _this31.relationshipDao = new CurrenciesCurrencyRelationshipDao(client);
    return _this31;
  }

  return CurrenciesCurrencyDao;
}(_clientBase.ResourceDao);

/** @class CurrenciesCurrencyRelationshipDao
 * @extends {RelationshipDao}  **/


var CurrenciesCurrencyRelationshipDao = exports.CurrenciesCurrencyRelationshipDao = function (_RelationshipDao16) {
  _inherits(CurrenciesCurrencyRelationshipDao, _RelationshipDao16);

  function CurrenciesCurrencyRelationshipDao(client) {
    _classCallCheck(this, CurrenciesCurrencyRelationshipDao);

    return _possibleConstructorReturn(this, (CurrenciesCurrencyRelationshipDao.__proto__ || Object.getPrototypeOf(CurrenciesCurrencyRelationshipDao)).call(this, client, 'currencies-currencies'));
  }

  return CurrenciesCurrencyRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CurrenciesTransactionDao
  * @extends {ResourceDao}
  **/


var CurrenciesTransactionDao = exports.CurrenciesTransactionDao = function (_ResourceDao17) {
  _inherits(CurrenciesTransactionDao, _ResourceDao17);

  function CurrenciesTransactionDao(client) {
    _classCallCheck(this, CurrenciesTransactionDao);

    var _this33 = _possibleConstructorReturn(this, (CurrenciesTransactionDao.__proto__ || Object.getPrototypeOf(CurrenciesTransactionDao)).call(this, client, 'currencies-transactions'));

    _this33.relationshipDao = new CurrenciesTransactionRelationshipDao(client);
    return _this33;
  }

  return CurrenciesTransactionDao;
}(_clientBase.ResourceDao);

/** @class CurrenciesTransactionRelationshipDao
 * @extends {RelationshipDao}  **/


var CurrenciesTransactionRelationshipDao = exports.CurrenciesTransactionRelationshipDao = function (_RelationshipDao17) {
  _inherits(CurrenciesTransactionRelationshipDao, _RelationshipDao17);

  function CurrenciesTransactionRelationshipDao(client) {
    _classCallCheck(this, CurrenciesTransactionRelationshipDao);

    var _this34 = _possibleConstructorReturn(this, (CurrenciesTransactionRelationshipDao.__proto__ || Object.getPrototypeOf(CurrenciesTransactionRelationshipDao)).call(this, client, 'currencies-transactions'));

    _this34.get = {

      /** @method agent
       @params {Object} options
       @returns {Promise<Agent>} **/
      agent: function agent(options) {
        return _this34.toOne('agent', options);
      },

      /** @method subject
       @params {Object} options
       @returns {Promise<Subject>} **/
      subject: function subject(options) {
        return _this34.toOne('subject', options);
      }
    };

    return _this34;
  }

  return CurrenciesTransactionRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CurrenciesWalletDao
  * @extends {ResourceDao}
  **/


var CurrenciesWalletDao = exports.CurrenciesWalletDao = function (_ResourceDao18) {
  _inherits(CurrenciesWalletDao, _ResourceDao18);

  function CurrenciesWalletDao(client) {
    _classCallCheck(this, CurrenciesWalletDao);

    var _this35 = _possibleConstructorReturn(this, (CurrenciesWalletDao.__proto__ || Object.getPrototypeOf(CurrenciesWalletDao)).call(this, client, 'currencies-wallets'));

    _this35.relationshipDao = new CurrenciesWalletRelationshipDao(client);
    return _this35;
  }

  return CurrenciesWalletDao;
}(_clientBase.ResourceDao);

/** @class CurrenciesWalletRelationshipDao
 * @extends {RelationshipDao}  **/


var CurrenciesWalletRelationshipDao = exports.CurrenciesWalletRelationshipDao = function (_RelationshipDao18) {
  _inherits(CurrenciesWalletRelationshipDao, _RelationshipDao18);

  function CurrenciesWalletRelationshipDao(client) {
    _classCallCheck(this, CurrenciesWalletRelationshipDao);

    var _this36 = _possibleConstructorReturn(this, (CurrenciesWalletRelationshipDao.__proto__ || Object.getPrototypeOf(CurrenciesWalletRelationshipDao)).call(this, client, 'currencies-wallets'));

    _this36.get = {

      /** @method owner
       @params {Object} options
       @returns {Promise<Owner>} **/
      owner: function owner(options) {
        return _this36.toOne('owner', options);
      }
    };

    _this36.index = {

      /** @method transactions
       @params {Object} options
       @returns {Promise<IndexResult<Currencies::Transaction>>} **/
      transactions: function transactions(options) {
        return _this36.toMany('transactions', options);
      }
    };
    return _this36;
  }

  return CurrenciesWalletRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DeliveryCaseDao
  * @extends {ResourceDao}
  **/


var DeliveryCaseDao = exports.DeliveryCaseDao = function (_ResourceDao19) {
  _inherits(DeliveryCaseDao, _ResourceDao19);

  function DeliveryCaseDao(client) {
    _classCallCheck(this, DeliveryCaseDao);

    var _this37 = _possibleConstructorReturn(this, (DeliveryCaseDao.__proto__ || Object.getPrototypeOf(DeliveryCaseDao)).call(this, client, 'delivery-cases'));

    _this37.relationshipDao = new DeliveryCaseRelationshipDao(client);
    return _this37;
  }

  return DeliveryCaseDao;
}(_clientBase.ResourceDao);

/** @class DeliveryCaseRelationshipDao
 * @extends {RelationshipDao}  **/


var DeliveryCaseRelationshipDao = exports.DeliveryCaseRelationshipDao = function (_RelationshipDao19) {
  _inherits(DeliveryCaseRelationshipDao, _RelationshipDao19);

  function DeliveryCaseRelationshipDao(client) {
    _classCallCheck(this, DeliveryCaseRelationshipDao);

    var _this38 = _possibleConstructorReturn(this, (DeliveryCaseRelationshipDao.__proto__ || Object.getPrototypeOf(DeliveryCaseRelationshipDao)).call(this, client, 'delivery-cases'));

    _this38.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this38.toOne('user', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this38.toOne('order', options);
      }
    };

    return _this38;
  }

  return DeliveryCaseRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DeliveryLocationDao
  * @extends {ResourceDao}
  **/


var DeliveryLocationDao = exports.DeliveryLocationDao = function (_ResourceDao20) {
  _inherits(DeliveryLocationDao, _ResourceDao20);

  function DeliveryLocationDao(client) {
    _classCallCheck(this, DeliveryLocationDao);

    var _this39 = _possibleConstructorReturn(this, (DeliveryLocationDao.__proto__ || Object.getPrototypeOf(DeliveryLocationDao)).call(this, client, 'delivery-locations'));

    _this39.relationshipDao = new DeliveryLocationRelationshipDao(client);
    return _this39;
  }

  return DeliveryLocationDao;
}(_clientBase.ResourceDao);

/** @class DeliveryLocationRelationshipDao
 * @extends {RelationshipDao}  **/


var DeliveryLocationRelationshipDao = exports.DeliveryLocationRelationshipDao = function (_RelationshipDao20) {
  _inherits(DeliveryLocationRelationshipDao, _RelationshipDao20);

  function DeliveryLocationRelationshipDao(client) {
    _classCallCheck(this, DeliveryLocationRelationshipDao);

    var _this40 = _possibleConstructorReturn(this, (DeliveryLocationRelationshipDao.__proto__ || Object.getPrototypeOf(DeliveryLocationRelationshipDao)).call(this, client, 'delivery-locations'));

    _this40.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this40.toOne('client', options);
      },

      /** @method location
       @params {Object} options
       @returns {Promise<Location>} **/
      location: function location(options) {
        return _this40.toOne('location', options);
      }
    };

    return _this40;
  }

  return DeliveryLocationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DeskCaseDao
  * @extends {ResourceDao}
  **/


var DeskCaseDao = exports.DeskCaseDao = function (_ResourceDao21) {
  _inherits(DeskCaseDao, _ResourceDao21);

  function DeskCaseDao(client) {
    _classCallCheck(this, DeskCaseDao);

    var _this41 = _possibleConstructorReturn(this, (DeskCaseDao.__proto__ || Object.getPrototypeOf(DeskCaseDao)).call(this, client, 'desk-cases'));

    _this41.relationshipDao = new DeskCaseRelationshipDao(client);
    return _this41;
  }

  return DeskCaseDao;
}(_clientBase.ResourceDao);

/** @class DeskCaseRelationshipDao
 * @extends {RelationshipDao}  **/


var DeskCaseRelationshipDao = exports.DeskCaseRelationshipDao = function (_RelationshipDao21) {
  _inherits(DeskCaseRelationshipDao, _RelationshipDao21);

  function DeskCaseRelationshipDao(client) {
    _classCallCheck(this, DeskCaseRelationshipDao);

    var _this42 = _possibleConstructorReturn(this, (DeskCaseRelationshipDao.__proto__ || Object.getPrototypeOf(DeskCaseRelationshipDao)).call(this, client, 'desk-cases'));

    _this42.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this42.toOne('user', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this42.toOne('order', options);
      }
    };

    return _this42;
  }

  return DeskCaseRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DietaryTagDao
  * @extends {ResourceDao}
  **/


var DietaryTagDao = exports.DietaryTagDao = function (_ResourceDao22) {
  _inherits(DietaryTagDao, _ResourceDao22);

  function DietaryTagDao(client) {
    _classCallCheck(this, DietaryTagDao);

    var _this43 = _possibleConstructorReturn(this, (DietaryTagDao.__proto__ || Object.getPrototypeOf(DietaryTagDao)).call(this, client, 'dietary-tags'));

    _this43.relationshipDao = new DietaryTagRelationshipDao(client);
    return _this43;
  }

  return DietaryTagDao;
}(_clientBase.ResourceDao);

/** @class DietaryTagRelationshipDao
 * @extends {RelationshipDao}  **/


var DietaryTagRelationshipDao = exports.DietaryTagRelationshipDao = function (_RelationshipDao22) {
  _inherits(DietaryTagRelationshipDao, _RelationshipDao22);

  function DietaryTagRelationshipDao(client) {
    _classCallCheck(this, DietaryTagRelationshipDao);

    var _this44 = _possibleConstructorReturn(this, (DietaryTagRelationshipDao.__proto__ || Object.getPrototypeOf(DietaryTagRelationshipDao)).call(this, client, 'dietary-tags'));

    _this44.index = {

      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      menuOptionItems: function menuOptionItems(options) {
        return _this44.toMany('menu-option-items', options);
      }
    };
    return _this44;
  }

  return DietaryTagRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DiscountCodeDao
  * @extends {ResourceDao}
  **/


var DiscountCodeDao = exports.DiscountCodeDao = function (_ResourceDao23) {
  _inherits(DiscountCodeDao, _ResourceDao23);

  function DiscountCodeDao(client) {
    _classCallCheck(this, DiscountCodeDao);

    var _this45 = _possibleConstructorReturn(this, (DiscountCodeDao.__proto__ || Object.getPrototypeOf(DiscountCodeDao)).call(this, client, 'discount-codes'));

    _this45.relationshipDao = new DiscountCodeRelationshipDao(client);
    return _this45;
  }

  return DiscountCodeDao;
}(_clientBase.ResourceDao);

/** @class DiscountCodeRelationshipDao
 * @extends {RelationshipDao}  **/


var DiscountCodeRelationshipDao = exports.DiscountCodeRelationshipDao = function (_RelationshipDao23) {
  _inherits(DiscountCodeRelationshipDao, _RelationshipDao23);

  function DiscountCodeRelationshipDao(client) {
    _classCallCheck(this, DiscountCodeRelationshipDao);

    return _possibleConstructorReturn(this, (DiscountCodeRelationshipDao.__proto__ || Object.getPrototypeOf(DiscountCodeRelationshipDao)).call(this, client, 'discount-codes'));
  }

  return DiscountCodeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverDayDao
  * @extends {ResourceDao}
  **/


var DriverDayDao = exports.DriverDayDao = function (_ResourceDao24) {
  _inherits(DriverDayDao, _ResourceDao24);

  function DriverDayDao(client) {
    _classCallCheck(this, DriverDayDao);

    var _this47 = _possibleConstructorReturn(this, (DriverDayDao.__proto__ || Object.getPrototypeOf(DriverDayDao)).call(this, client, 'driver-days'));

    _this47.relationshipDao = new DriverDayRelationshipDao(client);
    return _this47;
  }

  return DriverDayDao;
}(_clientBase.ResourceDao);

/** @class DriverDayRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverDayRelationshipDao = exports.DriverDayRelationshipDao = function (_RelationshipDao24) {
  _inherits(DriverDayRelationshipDao, _RelationshipDao24);

  function DriverDayRelationshipDao(client) {
    _classCallCheck(this, DriverDayRelationshipDao);

    var _this48 = _possibleConstructorReturn(this, (DriverDayRelationshipDao.__proto__ || Object.getPrototypeOf(DriverDayRelationshipDao)).call(this, client, 'driver-days'));

    _this48.get = {

      /** @method driver
       @params {Object} options
       @returns {Promise<User>} **/
      driver: function driver(options) {
        return _this48.toOne('driver', options);
      }
    };

    return _this48;
  }

  return DriverDayRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverPaymentDao
  * @extends {ResourceDao}
  **/


var DriverPaymentDao = exports.DriverPaymentDao = function (_ResourceDao25) {
  _inherits(DriverPaymentDao, _ResourceDao25);

  function DriverPaymentDao(client) {
    _classCallCheck(this, DriverPaymentDao);

    var _this49 = _possibleConstructorReturn(this, (DriverPaymentDao.__proto__ || Object.getPrototypeOf(DriverPaymentDao)).call(this, client, 'driver-payments'));

    _this49.relationshipDao = new DriverPaymentRelationshipDao(client);
    return _this49;
  }

  return DriverPaymentDao;
}(_clientBase.ResourceDao);

/** @class DriverPaymentRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverPaymentRelationshipDao = exports.DriverPaymentRelationshipDao = function (_RelationshipDao25) {
  _inherits(DriverPaymentRelationshipDao, _RelationshipDao25);

  function DriverPaymentRelationshipDao(client) {
    _classCallCheck(this, DriverPaymentRelationshipDao);

    var _this50 = _possibleConstructorReturn(this, (DriverPaymentRelationshipDao.__proto__ || Object.getPrototypeOf(DriverPaymentRelationshipDao)).call(this, client, 'driver-payments'));

    _this50.get = {

      /** @method driverPayrollRun
       @params {Object} options
       @returns {Promise<DriverPayrollRun>} **/
      driverPayrollRun: function driverPayrollRun(options) {
        return _this50.toOne('driver-payroll-run', options);
      }
    };

    return _this50;
  }

  return DriverPaymentRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverPayrollRunDao
  * @extends {ResourceDao}
  **/


var DriverPayrollRunDao = exports.DriverPayrollRunDao = function (_ResourceDao26) {
  _inherits(DriverPayrollRunDao, _ResourceDao26);

  function DriverPayrollRunDao(client) {
    _classCallCheck(this, DriverPayrollRunDao);

    var _this51 = _possibleConstructorReturn(this, (DriverPayrollRunDao.__proto__ || Object.getPrototypeOf(DriverPayrollRunDao)).call(this, client, 'driver-payroll-runs'));

    _this51.relationshipDao = new DriverPayrollRunRelationshipDao(client);
    return _this51;
  }

  return DriverPayrollRunDao;
}(_clientBase.ResourceDao);

/** @class DriverPayrollRunRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverPayrollRunRelationshipDao = exports.DriverPayrollRunRelationshipDao = function (_RelationshipDao26) {
  _inherits(DriverPayrollRunRelationshipDao, _RelationshipDao26);

  function DriverPayrollRunRelationshipDao(client) {
    _classCallCheck(this, DriverPayrollRunRelationshipDao);

    var _this52 = _possibleConstructorReturn(this, (DriverPayrollRunRelationshipDao.__proto__ || Object.getPrototypeOf(DriverPayrollRunRelationshipDao)).call(this, client, 'driver-payroll-runs'));

    _this52.get = {

      /** @method driver
       @params {Object} options
       @returns {Promise<Driver>} **/
      driver: function driver(options) {
        return _this52.toOne('driver', options);
      },

      /** @method payrollRun
       @params {Object} options
       @returns {Promise<PayrollRun>} **/
      payrollRun: function payrollRun(options) {
        return _this52.toOne('payroll-run', options);
      }
    };

    return _this52;
  }

  return DriverPayrollRunRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverPingDao
  * @extends {ResourceDao}
  **/


var DriverPingDao = exports.DriverPingDao = function (_ResourceDao27) {
  _inherits(DriverPingDao, _ResourceDao27);

  function DriverPingDao(client) {
    _classCallCheck(this, DriverPingDao);

    var _this53 = _possibleConstructorReturn(this, (DriverPingDao.__proto__ || Object.getPrototypeOf(DriverPingDao)).call(this, client, 'driver-pings'));

    _this53.relationshipDao = new DriverPingRelationshipDao(client);
    return _this53;
  }

  return DriverPingDao;
}(_clientBase.ResourceDao);

/** @class DriverPingRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverPingRelationshipDao = exports.DriverPingRelationshipDao = function (_RelationshipDao27) {
  _inherits(DriverPingRelationshipDao, _RelationshipDao27);

  function DriverPingRelationshipDao(client) {
    _classCallCheck(this, DriverPingRelationshipDao);

    var _this54 = _possibleConstructorReturn(this, (DriverPingRelationshipDao.__proto__ || Object.getPrototypeOf(DriverPingRelationshipDao)).call(this, client, 'driver-pings'));

    _this54.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this54.toOne('user', options);
      }
    };

    return _this54;
  }

  return DriverPingRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverResourceDao
  * @extends {ResourceDao}
  **/


var DriverResourceDao = exports.DriverResourceDao = function (_ResourceDao28) {
  _inherits(DriverResourceDao, _ResourceDao28);

  function DriverResourceDao(client) {
    _classCallCheck(this, DriverResourceDao);

    var _this55 = _possibleConstructorReturn(this, (DriverResourceDao.__proto__ || Object.getPrototypeOf(DriverResourceDao)).call(this, client, 'driver-resources'));

    _this55.relationshipDao = new DriverResourceRelationshipDao(client);
    return _this55;
  }

  return DriverResourceDao;
}(_clientBase.ResourceDao);

/** @class DriverResourceRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverResourceRelationshipDao = exports.DriverResourceRelationshipDao = function (_RelationshipDao28) {
  _inherits(DriverResourceRelationshipDao, _RelationshipDao28);

  function DriverResourceRelationshipDao(client) {
    _classCallCheck(this, DriverResourceRelationshipDao);

    return _possibleConstructorReturn(this, (DriverResourceRelationshipDao.__proto__ || Object.getPrototypeOf(DriverResourceRelationshipDao)).call(this, client, 'driver-resources'));
  }

  return DriverResourceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverWeekDao
  * @extends {ResourceDao}
  **/


var DriverWeekDao = exports.DriverWeekDao = function (_ResourceDao29) {
  _inherits(DriverWeekDao, _ResourceDao29);

  function DriverWeekDao(client) {
    _classCallCheck(this, DriverWeekDao);

    var _this57 = _possibleConstructorReturn(this, (DriverWeekDao.__proto__ || Object.getPrototypeOf(DriverWeekDao)).call(this, client, 'driver-weeks'));

    _this57.relationshipDao = new DriverWeekRelationshipDao(client);
    return _this57;
  }

  return DriverWeekDao;
}(_clientBase.ResourceDao);

/** @class DriverWeekRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverWeekRelationshipDao = exports.DriverWeekRelationshipDao = function (_RelationshipDao29) {
  _inherits(DriverWeekRelationshipDao, _RelationshipDao29);

  function DriverWeekRelationshipDao(client) {
    _classCallCheck(this, DriverWeekRelationshipDao);

    var _this58 = _possibleConstructorReturn(this, (DriverWeekRelationshipDao.__proto__ || Object.getPrototypeOf(DriverWeekRelationshipDao)).call(this, client, 'driver-weeks'));

    _this58.get = {

      /** @method driver
       @params {Object} options
       @returns {Promise<User>} **/
      driver: function driver(options) {
        return _this58.toOne('driver', options);
      }
    };

    return _this58;
  }

  return DriverWeekRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class EmailMessageDao
  * @extends {ResourceDao}
  **/


var EmailMessageDao = exports.EmailMessageDao = function (_ResourceDao30) {
  _inherits(EmailMessageDao, _ResourceDao30);

  function EmailMessageDao(client) {
    _classCallCheck(this, EmailMessageDao);

    var _this59 = _possibleConstructorReturn(this, (EmailMessageDao.__proto__ || Object.getPrototypeOf(EmailMessageDao)).call(this, client, 'email-messages'));

    _this59.relationshipDao = new EmailMessageRelationshipDao(client);
    return _this59;
  }

  return EmailMessageDao;
}(_clientBase.ResourceDao);

/** @class EmailMessageRelationshipDao
 * @extends {RelationshipDao}  **/


var EmailMessageRelationshipDao = exports.EmailMessageRelationshipDao = function (_RelationshipDao30) {
  _inherits(EmailMessageRelationshipDao, _RelationshipDao30);

  function EmailMessageRelationshipDao(client) {
    _classCallCheck(this, EmailMessageRelationshipDao);

    var _this60 = _possibleConstructorReturn(this, (EmailMessageRelationshipDao.__proto__ || Object.getPrototypeOf(EmailMessageRelationshipDao)).call(this, client, 'email-messages'));

    _this60.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this60.toOne('order', options);
      }
    };

    return _this60;
  }

  return EmailMessageRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class EventDao
  * @extends {ResourceDao}
  **/


var EventDao = exports.EventDao = function (_ResourceDao31) {
  _inherits(EventDao, _ResourceDao31);

  function EventDao(client) {
    _classCallCheck(this, EventDao);

    var _this61 = _possibleConstructorReturn(this, (EventDao.__proto__ || Object.getPrototypeOf(EventDao)).call(this, client, 'events'));

    _this61.relationshipDao = new EventRelationshipDao(client);
    return _this61;
  }

  return EventDao;
}(_clientBase.ResourceDao);

/** @class EventRelationshipDao
 * @extends {RelationshipDao}  **/


var EventRelationshipDao = exports.EventRelationshipDao = function (_RelationshipDao31) {
  _inherits(EventRelationshipDao, _RelationshipDao31);

  function EventRelationshipDao(client) {
    _classCallCheck(this, EventRelationshipDao);

    return _possibleConstructorReturn(this, (EventRelationshipDao.__proto__ || Object.getPrototypeOf(EventRelationshipDao)).call(this, client, 'events'));
  }

  return EventRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class FeatureFlagDescriptionDao
  * @extends {ResourceDao}
  **/


var FeatureFlagDescriptionDao = exports.FeatureFlagDescriptionDao = function (_ResourceDao32) {
  _inherits(FeatureFlagDescriptionDao, _ResourceDao32);

  function FeatureFlagDescriptionDao(client) {
    _classCallCheck(this, FeatureFlagDescriptionDao);

    var _this63 = _possibleConstructorReturn(this, (FeatureFlagDescriptionDao.__proto__ || Object.getPrototypeOf(FeatureFlagDescriptionDao)).call(this, client, 'feature-flag-descriptions'));

    _this63.relationshipDao = new FeatureFlagDescriptionRelationshipDao(client);
    return _this63;
  }

  return FeatureFlagDescriptionDao;
}(_clientBase.ResourceDao);

/** @class FeatureFlagDescriptionRelationshipDao
 * @extends {RelationshipDao}  **/


var FeatureFlagDescriptionRelationshipDao = exports.FeatureFlagDescriptionRelationshipDao = function (_RelationshipDao32) {
  _inherits(FeatureFlagDescriptionRelationshipDao, _RelationshipDao32);

  function FeatureFlagDescriptionRelationshipDao(client) {
    _classCallCheck(this, FeatureFlagDescriptionRelationshipDao);

    var _this64 = _possibleConstructorReturn(this, (FeatureFlagDescriptionRelationshipDao.__proto__ || Object.getPrototypeOf(FeatureFlagDescriptionRelationshipDao)).call(this, client, 'feature-flag-descriptions'));

    _this64.index = {

      /** @method subscriptionPlans
       @params {Object} options
       @returns {Promise<IndexResult<SubscriptionPlan>>} **/
      subscriptionPlans: function subscriptionPlans(options) {
        return _this64.toMany('subscription-plans', options);
      }
    };
    return _this64;
  }

  return FeatureFlagDescriptionRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class FoodTypeDao
  * @extends {ResourceDao}
  **/


var FoodTypeDao = exports.FoodTypeDao = function (_ResourceDao33) {
  _inherits(FoodTypeDao, _ResourceDao33);

  function FoodTypeDao(client) {
    _classCallCheck(this, FoodTypeDao);

    var _this65 = _possibleConstructorReturn(this, (FoodTypeDao.__proto__ || Object.getPrototypeOf(FoodTypeDao)).call(this, client, 'food-types'));

    _this65.relationshipDao = new FoodTypeRelationshipDao(client);
    return _this65;
  }

  return FoodTypeDao;
}(_clientBase.ResourceDao);

/** @class FoodTypeRelationshipDao
 * @extends {RelationshipDao}  **/


var FoodTypeRelationshipDao = exports.FoodTypeRelationshipDao = function (_RelationshipDao33) {
  _inherits(FoodTypeRelationshipDao, _RelationshipDao33);

  function FoodTypeRelationshipDao(client) {
    _classCallCheck(this, FoodTypeRelationshipDao);

    return _possibleConstructorReturn(this, (FoodTypeRelationshipDao.__proto__ || Object.getPrototypeOf(FoodTypeRelationshipDao)).call(this, client, 'food-types'));
  }

  return FoodTypeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GiftbitCardDao
  * @extends {ResourceDao}
  **/


var GiftbitCardDao = exports.GiftbitCardDao = function (_ResourceDao34) {
  _inherits(GiftbitCardDao, _ResourceDao34);

  function GiftbitCardDao(client) {
    _classCallCheck(this, GiftbitCardDao);

    var _this67 = _possibleConstructorReturn(this, (GiftbitCardDao.__proto__ || Object.getPrototypeOf(GiftbitCardDao)).call(this, client, 'giftbit-cards'));

    _this67.relationshipDao = new GiftbitCardRelationshipDao(client);
    return _this67;
  }

  return GiftbitCardDao;
}(_clientBase.ResourceDao);

/** @class GiftbitCardRelationshipDao
 * @extends {RelationshipDao}  **/


var GiftbitCardRelationshipDao = exports.GiftbitCardRelationshipDao = function (_RelationshipDao34) {
  _inherits(GiftbitCardRelationshipDao, _RelationshipDao34);

  function GiftbitCardRelationshipDao(client) {
    _classCallCheck(this, GiftbitCardRelationshipDao);

    return _possibleConstructorReturn(this, (GiftbitCardRelationshipDao.__proto__ || Object.getPrototypeOf(GiftbitCardRelationshipDao)).call(this, client, 'giftbit-cards'));
  }

  return GiftbitCardRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GiftbitErrorDao
  * @extends {ResourceDao}
  **/


var GiftbitErrorDao = exports.GiftbitErrorDao = function (_ResourceDao35) {
  _inherits(GiftbitErrorDao, _ResourceDao35);

  function GiftbitErrorDao(client) {
    _classCallCheck(this, GiftbitErrorDao);

    var _this69 = _possibleConstructorReturn(this, (GiftbitErrorDao.__proto__ || Object.getPrototypeOf(GiftbitErrorDao)).call(this, client, 'giftbit-errors'));

    _this69.relationshipDao = new GiftbitErrorRelationshipDao(client);
    return _this69;
  }

  return GiftbitErrorDao;
}(_clientBase.ResourceDao);

/** @class GiftbitErrorRelationshipDao
 * @extends {RelationshipDao}  **/


var GiftbitErrorRelationshipDao = exports.GiftbitErrorRelationshipDao = function (_RelationshipDao35) {
  _inherits(GiftbitErrorRelationshipDao, _RelationshipDao35);

  function GiftbitErrorRelationshipDao(client) {
    _classCallCheck(this, GiftbitErrorRelationshipDao);

    var _this70 = _possibleConstructorReturn(this, (GiftbitErrorRelationshipDao.__proto__ || Object.getPrototypeOf(GiftbitErrorRelationshipDao)).call(this, client, 'giftbit-errors'));

    _this70.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this70.toOne('order', options);
      }
    };

    return _this70;
  }

  return GiftbitErrorRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GiftbitGiftDao
  * @extends {ResourceDao}
  **/


var GiftbitGiftDao = exports.GiftbitGiftDao = function (_ResourceDao36) {
  _inherits(GiftbitGiftDao, _ResourceDao36);

  function GiftbitGiftDao(client) {
    _classCallCheck(this, GiftbitGiftDao);

    var _this71 = _possibleConstructorReturn(this, (GiftbitGiftDao.__proto__ || Object.getPrototypeOf(GiftbitGiftDao)).call(this, client, 'giftbit-gifts'));

    _this71.relationshipDao = new GiftbitGiftRelationshipDao(client);
    return _this71;
  }

  return GiftbitGiftDao;
}(_clientBase.ResourceDao);

/** @class GiftbitGiftRelationshipDao
 * @extends {RelationshipDao}  **/


var GiftbitGiftRelationshipDao = exports.GiftbitGiftRelationshipDao = function (_RelationshipDao36) {
  _inherits(GiftbitGiftRelationshipDao, _RelationshipDao36);

  function GiftbitGiftRelationshipDao(client) {
    _classCallCheck(this, GiftbitGiftRelationshipDao);

    return _possibleConstructorReturn(this, (GiftbitGiftRelationshipDao.__proto__ || Object.getPrototypeOf(GiftbitGiftRelationshipDao)).call(this, client, 'giftbit-gifts'));
  }

  return GiftbitGiftRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GroupOrderMemberDao
  * @extends {ResourceDao}
  **/


var GroupOrderMemberDao = exports.GroupOrderMemberDao = function (_ResourceDao37) {
  _inherits(GroupOrderMemberDao, _ResourceDao37);

  function GroupOrderMemberDao(client) {
    _classCallCheck(this, GroupOrderMemberDao);

    var _this73 = _possibleConstructorReturn(this, (GroupOrderMemberDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberDao)).call(this, client, 'group-order-members'));

    _this73.relationshipDao = new GroupOrderMemberRelationshipDao(client);
    return _this73;
  }

  return GroupOrderMemberDao;
}(_clientBase.ResourceDao);

/** @class GroupOrderMemberRelationshipDao
 * @extends {RelationshipDao}  **/


var GroupOrderMemberRelationshipDao = exports.GroupOrderMemberRelationshipDao = function (_RelationshipDao37) {
  _inherits(GroupOrderMemberRelationshipDao, _RelationshipDao37);

  function GroupOrderMemberRelationshipDao(client) {
    _classCallCheck(this, GroupOrderMemberRelationshipDao);

    var _this74 = _possibleConstructorReturn(this, (GroupOrderMemberRelationshipDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberRelationshipDao)).call(this, client, 'group-order-members'));

    _this74.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this74.toOne('user', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this74.toOne('order', options);
      },

      /** @method invoice
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      invoice: function invoice(options) {
        return _this74.toOne('invoice', options);
      }
    };

    _this74.index = {

      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: function orderItems(options) {
        return _this74.toMany('order-items', options);
      }
    };
    return _this74;
  }

  return GroupOrderMemberRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class HistorianVersionDao
  * @extends {ResourceDao}
  **/


var HistorianVersionDao = exports.HistorianVersionDao = function (_ResourceDao38) {
  _inherits(HistorianVersionDao, _ResourceDao38);

  function HistorianVersionDao(client) {
    _classCallCheck(this, HistorianVersionDao);

    var _this75 = _possibleConstructorReturn(this, (HistorianVersionDao.__proto__ || Object.getPrototypeOf(HistorianVersionDao)).call(this, client, 'historian-versions'));

    _this75.relationshipDao = new HistorianVersionRelationshipDao(client);
    return _this75;
  }

  return HistorianVersionDao;
}(_clientBase.ResourceDao);

/** @class HistorianVersionRelationshipDao
 * @extends {RelationshipDao}  **/


var HistorianVersionRelationshipDao = exports.HistorianVersionRelationshipDao = function (_RelationshipDao38) {
  _inherits(HistorianVersionRelationshipDao, _RelationshipDao38);

  function HistorianVersionRelationshipDao(client) {
    _classCallCheck(this, HistorianVersionRelationshipDao);

    return _possibleConstructorReturn(this, (HistorianVersionRelationshipDao.__proto__ || Object.getPrototypeOf(HistorianVersionRelationshipDao)).call(this, client, 'historian-versions'));
  }

  return HistorianVersionRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class InvoiceDao
  * @extends {ResourceDao}
  **/


var InvoiceDao = exports.InvoiceDao = function (_ResourceDao39) {
  _inherits(InvoiceDao, _ResourceDao39);

  function InvoiceDao(client) {
    _classCallCheck(this, InvoiceDao);

    var _this77 = _possibleConstructorReturn(this, (InvoiceDao.__proto__ || Object.getPrototypeOf(InvoiceDao)).call(this, client, 'invoices'));

    _this77.relationshipDao = new InvoiceRelationshipDao(client);
    return _this77;
  }

  return InvoiceDao;
}(_clientBase.ResourceDao);

/** @class InvoiceRelationshipDao
 * @extends {RelationshipDao}  **/


var InvoiceRelationshipDao = exports.InvoiceRelationshipDao = function (_RelationshipDao39) {
  _inherits(InvoiceRelationshipDao, _RelationshipDao39);

  function InvoiceRelationshipDao(client) {
    _classCallCheck(this, InvoiceRelationshipDao);

    return _possibleConstructorReturn(this, (InvoiceRelationshipDao.__proto__ || Object.getPrototypeOf(InvoiceRelationshipDao)).call(this, client, 'invoices'));
  }

  return InvoiceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class InvoicingLedgerItemDao
  * @extends {ResourceDao}
  **/


var InvoicingLedgerItemDao = exports.InvoicingLedgerItemDao = function (_ResourceDao40) {
  _inherits(InvoicingLedgerItemDao, _ResourceDao40);

  function InvoicingLedgerItemDao(client) {
    _classCallCheck(this, InvoicingLedgerItemDao);

    var _this79 = _possibleConstructorReturn(this, (InvoicingLedgerItemDao.__proto__ || Object.getPrototypeOf(InvoicingLedgerItemDao)).call(this, client, 'invoicing-ledger-items'));

    _this79.relationshipDao = new InvoicingLedgerItemRelationshipDao(client);
    return _this79;
  }

  return InvoicingLedgerItemDao;
}(_clientBase.ResourceDao);

/** @class InvoicingLedgerItemRelationshipDao
 * @extends {RelationshipDao}  **/


var InvoicingLedgerItemRelationshipDao = exports.InvoicingLedgerItemRelationshipDao = function (_RelationshipDao40) {
  _inherits(InvoicingLedgerItemRelationshipDao, _RelationshipDao40);

  function InvoicingLedgerItemRelationshipDao(client) {
    _classCallCheck(this, InvoicingLedgerItemRelationshipDao);

    return _possibleConstructorReturn(this, (InvoicingLedgerItemRelationshipDao.__proto__ || Object.getPrototypeOf(InvoicingLedgerItemRelationshipDao)).call(this, client, 'invoicing-ledger-items'));
  }

  return InvoicingLedgerItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class InvoicingTaxRateDao
  * @extends {ResourceDao}
  **/


var InvoicingTaxRateDao = exports.InvoicingTaxRateDao = function (_ResourceDao41) {
  _inherits(InvoicingTaxRateDao, _ResourceDao41);

  function InvoicingTaxRateDao(client) {
    _classCallCheck(this, InvoicingTaxRateDao);

    var _this81 = _possibleConstructorReturn(this, (InvoicingTaxRateDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateDao)).call(this, client, 'invoicing-tax-rates'));

    _this81.relationshipDao = new InvoicingTaxRateRelationshipDao(client);
    return _this81;
  }

  return InvoicingTaxRateDao;
}(_clientBase.ResourceDao);

/** @class InvoicingTaxRateRelationshipDao
 * @extends {RelationshipDao}  **/


var InvoicingTaxRateRelationshipDao = exports.InvoicingTaxRateRelationshipDao = function (_RelationshipDao41) {
  _inherits(InvoicingTaxRateRelationshipDao, _RelationshipDao41);

  function InvoicingTaxRateRelationshipDao(client) {
    _classCallCheck(this, InvoicingTaxRateRelationshipDao);

    var _this82 = _possibleConstructorReturn(this, (InvoicingTaxRateRelationshipDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateRelationshipDao)).call(this, client, 'invoicing-tax-rates'));

    _this82.index = {

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: function areas(options) {
        return _this82.toMany('areas', options);
      }
    };
    return _this82;
  }

  return InvoicingTaxRateRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class LocationDao
  * @extends {ResourceDao}
  **/


var LocationDao = exports.LocationDao = function (_ResourceDao42) {
  _inherits(LocationDao, _ResourceDao42);

  function LocationDao(client) {
    _classCallCheck(this, LocationDao);

    var _this83 = _possibleConstructorReturn(this, (LocationDao.__proto__ || Object.getPrototypeOf(LocationDao)).call(this, client, 'locations'));

    _this83.relationshipDao = new LocationRelationshipDao(client);
    return _this83;
  }

  return LocationDao;
}(_clientBase.ResourceDao);

/** @class LocationRelationshipDao
 * @extends {RelationshipDao}  **/


var LocationRelationshipDao = exports.LocationRelationshipDao = function (_RelationshipDao42) {
  _inherits(LocationRelationshipDao, _RelationshipDao42);

  function LocationRelationshipDao(client) {
    _classCallCheck(this, LocationRelationshipDao);

    var _this84 = _possibleConstructorReturn(this, (LocationRelationshipDao.__proto__ || Object.getPrototypeOf(LocationRelationshipDao)).call(this, client, 'locations'));

    _this84.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this84.toOne('area', options);
      }
    };

    return _this84;
  }

  return LocationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class LogisticsArrivalEstimateDao
  * @extends {ResourceDao}
  **/


var LogisticsArrivalEstimateDao = exports.LogisticsArrivalEstimateDao = function (_ResourceDao43) {
  _inherits(LogisticsArrivalEstimateDao, _ResourceDao43);

  function LogisticsArrivalEstimateDao(client) {
    _classCallCheck(this, LogisticsArrivalEstimateDao);

    var _this85 = _possibleConstructorReturn(this, (LogisticsArrivalEstimateDao.__proto__ || Object.getPrototypeOf(LogisticsArrivalEstimateDao)).call(this, client, 'logistics-arrival-estimates'));

    _this85.relationshipDao = new LogisticsArrivalEstimateRelationshipDao(client);
    return _this85;
  }

  return LogisticsArrivalEstimateDao;
}(_clientBase.ResourceDao);

/** @class LogisticsArrivalEstimateRelationshipDao
 * @extends {RelationshipDao}  **/


var LogisticsArrivalEstimateRelationshipDao = exports.LogisticsArrivalEstimateRelationshipDao = function (_RelationshipDao43) {
  _inherits(LogisticsArrivalEstimateRelationshipDao, _RelationshipDao43);

  function LogisticsArrivalEstimateRelationshipDao(client) {
    _classCallCheck(this, LogisticsArrivalEstimateRelationshipDao);

    return _possibleConstructorReturn(this, (LogisticsArrivalEstimateRelationshipDao.__proto__ || Object.getPrototypeOf(LogisticsArrivalEstimateRelationshipDao)).call(this, client, 'logistics-arrival-estimates'));
  }

  return LogisticsArrivalEstimateRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class LogisticsDeliveryDao
  * @extends {ResourceDao}
  **/


var LogisticsDeliveryDao = exports.LogisticsDeliveryDao = function (_ResourceDao44) {
  _inherits(LogisticsDeliveryDao, _ResourceDao44);

  function LogisticsDeliveryDao(client) {
    _classCallCheck(this, LogisticsDeliveryDao);

    var _this87 = _possibleConstructorReturn(this, (LogisticsDeliveryDao.__proto__ || Object.getPrototypeOf(LogisticsDeliveryDao)).call(this, client, 'logistics-deliveries'));

    _this87.relationshipDao = new LogisticsDeliveryRelationshipDao(client);
    return _this87;
  }

  return LogisticsDeliveryDao;
}(_clientBase.ResourceDao);

/** @class LogisticsDeliveryRelationshipDao
 * @extends {RelationshipDao}  **/


var LogisticsDeliveryRelationshipDao = exports.LogisticsDeliveryRelationshipDao = function (_RelationshipDao44) {
  _inherits(LogisticsDeliveryRelationshipDao, _RelationshipDao44);

  function LogisticsDeliveryRelationshipDao(client) {
    _classCallCheck(this, LogisticsDeliveryRelationshipDao);

    var _this88 = _possibleConstructorReturn(this, (LogisticsDeliveryRelationshipDao.__proto__ || Object.getPrototypeOf(LogisticsDeliveryRelationshipDao)).call(this, client, 'logistics-deliveries'));

    _this88.get = {

      /** @method driver
       @params {Object} options
       @returns {Promise<User>} **/
      driver: function driver(options) {
        return _this88.toOne('driver', options);
      },

      /** @method courier
       @params {Object} options
       @returns {Promise<Courier>} **/
      courier: function courier(options) {
        return _this88.toOne('courier', options);
      },

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this88.toOne('area', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this88.toOne('order', options);
      }
    };

    return _this88;
  }

  return LogisticsDeliveryRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanDao
  * @extends {ResourceDao}
  **/


var MealPlanDao = exports.MealPlanDao = function (_ResourceDao45) {
  _inherits(MealPlanDao, _ResourceDao45);

  function MealPlanDao(client) {
    _classCallCheck(this, MealPlanDao);

    var _this89 = _possibleConstructorReturn(this, (MealPlanDao.__proto__ || Object.getPrototypeOf(MealPlanDao)).call(this, client, 'meal-plans'));

    _this89.relationshipDao = new MealPlanRelationshipDao(client);
    return _this89;
  }

  return MealPlanDao;
}(_clientBase.ResourceDao);

/** @class MealPlanRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanRelationshipDao = exports.MealPlanRelationshipDao = function (_RelationshipDao45) {
  _inherits(MealPlanRelationshipDao, _RelationshipDao45);

  function MealPlanRelationshipDao(client) {
    _classCallCheck(this, MealPlanRelationshipDao);

    var _this90 = _possibleConstructorReturn(this, (MealPlanRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanRelationshipDao)).call(this, client, 'meal-plans'));

    _this90.get = {

      /** @method mealPlanUser
       @params {Object} options
       @returns {Promise<User>} **/
      mealPlanUser: function mealPlanUser(options) {
        return _this90.toOne('meal-plan-user', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this90.toOne('client', options);
      }
    };

    _this90.index = {

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this90.toMany('orders', options);
      }
    };
    return _this90;
  }

  return MealPlanRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningEventDao
  * @extends {ResourceDao}
  **/


var MealPlanningEventDao = exports.MealPlanningEventDao = function (_ResourceDao46) {
  _inherits(MealPlanningEventDao, _ResourceDao46);

  function MealPlanningEventDao(client) {
    _classCallCheck(this, MealPlanningEventDao);

    var _this91 = _possibleConstructorReturn(this, (MealPlanningEventDao.__proto__ || Object.getPrototypeOf(MealPlanningEventDao)).call(this, client, 'meal-planning-events'));

    _this91.relationshipDao = new MealPlanningEventRelationshipDao(client);
    return _this91;
  }

  return MealPlanningEventDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningEventRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningEventRelationshipDao = exports.MealPlanningEventRelationshipDao = function (_RelationshipDao46) {
  _inherits(MealPlanningEventRelationshipDao, _RelationshipDao46);

  function MealPlanningEventRelationshipDao(client) {
    _classCallCheck(this, MealPlanningEventRelationshipDao);

    var _this92 = _possibleConstructorReturn(this, (MealPlanningEventRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningEventRelationshipDao)).call(this, client, 'meal-planning-events'));

    _this92.get = {

      /** @method instance
       @params {Object} options
       @returns {Promise<MealPlanningInstance>} **/
      instance: function instance(options) {
        return _this92.toOne('instance', options);
      }
    };

    _this92.index = {

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this92.toMany('orders', options);
      },

      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      restaurants: function restaurants(options) {
        return _this92.toMany('restaurants', options);
      },

      /** @method reservations
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningReservation>>} **/
      reservations: function reservations(options) {
        return _this92.toMany('reservations', options);
      },

      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: function restaurantConstraints(options) {
        return _this92.toMany('restaurant-constraints', options);
      },

      /** @method users
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      users: function users(options) {
        return _this92.toMany('users', options);
      }
    };
    return _this92;
  }

  return MealPlanningEventRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningInstanceDao
  * @extends {ResourceDao}
  **/


var MealPlanningInstanceDao = exports.MealPlanningInstanceDao = function (_ResourceDao47) {
  _inherits(MealPlanningInstanceDao, _ResourceDao47);

  function MealPlanningInstanceDao(client) {
    _classCallCheck(this, MealPlanningInstanceDao);

    var _this93 = _possibleConstructorReturn(this, (MealPlanningInstanceDao.__proto__ || Object.getPrototypeOf(MealPlanningInstanceDao)).call(this, client, 'meal-planning-instances'));

    _this93.relationshipDao = new MealPlanningInstanceRelationshipDao(client);
    return _this93;
  }

  return MealPlanningInstanceDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningInstanceRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningInstanceRelationshipDao = exports.MealPlanningInstanceRelationshipDao = function (_RelationshipDao47) {
  _inherits(MealPlanningInstanceRelationshipDao, _RelationshipDao47);

  function MealPlanningInstanceRelationshipDao(client) {
    _classCallCheck(this, MealPlanningInstanceRelationshipDao);

    var _this94 = _possibleConstructorReturn(this, (MealPlanningInstanceRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningInstanceRelationshipDao)).call(this, client, 'meal-planning-instances'));

    _this94.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this94.toOne('client', options);
      },

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this94.toOne('area', options);
      },

      /** @method mealPlanningTemplate
       @params {Object} options
       @returns {Promise<MealPlanningTemplate>} **/
      mealPlanningTemplate: function mealPlanningTemplate(options) {
        return _this94.toOne('meal-planning-template', options);
      },

      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: function preferenceProfile(options) {
        return _this94.toOne('preference-profile', options);
      },

      /** @method orderTemplate
       @params {Object} options
       @returns {Promise<Order>} **/
      orderTemplate: function orderTemplate(options) {
        return _this94.toOne('order-template', options);
      },

      /** @method defaultOrderOwner
       @params {Object} options
       @returns {Promise<User>} **/
      defaultOrderOwner: function defaultOrderOwner(options) {
        return _this94.toOne('default-order-owner', options);
      }
    };

    _this94.index = {

      /** @method mealPlanningReservations
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningReservation>>} **/
      mealPlanningReservations: function mealPlanningReservations(options) {
        return _this94.toMany('meal-planning-reservations', options);
      },

      /** @method events
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningEvent>>} **/
      events: function events(options) {
        return _this94.toMany('events', options);
      },

      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: function restaurantConstraints(options) {
        return _this94.toMany('restaurant-constraints', options);
      },

      /** @method teamMembers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      teamMembers: function teamMembers(options) {
        return _this94.toMany('team-members', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this94.toMany('orders', options);
      },

      /** @method logRecords
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningLogRecord>>} **/
      logRecords: function logRecords(options) {
        return _this94.toMany('log-records', options);
      }
    };
    return _this94;
  }

  return MealPlanningInstanceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningLogRecordDao
  * @extends {ResourceDao}
  **/


var MealPlanningLogRecordDao = exports.MealPlanningLogRecordDao = function (_ResourceDao48) {
  _inherits(MealPlanningLogRecordDao, _ResourceDao48);

  function MealPlanningLogRecordDao(client) {
    _classCallCheck(this, MealPlanningLogRecordDao);

    var _this95 = _possibleConstructorReturn(this, (MealPlanningLogRecordDao.__proto__ || Object.getPrototypeOf(MealPlanningLogRecordDao)).call(this, client, 'meal-planning-log-records'));

    _this95.relationshipDao = new MealPlanningLogRecordRelationshipDao(client);
    return _this95;
  }

  return MealPlanningLogRecordDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningLogRecordRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningLogRecordRelationshipDao = exports.MealPlanningLogRecordRelationshipDao = function (_RelationshipDao48) {
  _inherits(MealPlanningLogRecordRelationshipDao, _RelationshipDao48);

  function MealPlanningLogRecordRelationshipDao(client) {
    _classCallCheck(this, MealPlanningLogRecordRelationshipDao);

    var _this96 = _possibleConstructorReturn(this, (MealPlanningLogRecordRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningLogRecordRelationshipDao)).call(this, client, 'meal-planning-log-records'));

    _this96.get = {

      /** @method planable
       @params {Object} options
       @returns {Promise<Planable>} **/
      planable: function planable(options) {
        return _this96.toOne('planable', options);
      }
    };

    return _this96;
  }

  return MealPlanningLogRecordRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningPreferenceProfileDao
  * @extends {ResourceDao}
  **/


var MealPlanningPreferenceProfileDao = exports.MealPlanningPreferenceProfileDao = function (_ResourceDao49) {
  _inherits(MealPlanningPreferenceProfileDao, _ResourceDao49);

  function MealPlanningPreferenceProfileDao(client) {
    _classCallCheck(this, MealPlanningPreferenceProfileDao);

    var _this97 = _possibleConstructorReturn(this, (MealPlanningPreferenceProfileDao.__proto__ || Object.getPrototypeOf(MealPlanningPreferenceProfileDao)).call(this, client, 'meal-planning-preference-profiles'));

    _this97.relationshipDao = new MealPlanningPreferenceProfileRelationshipDao(client);
    return _this97;
  }

  return MealPlanningPreferenceProfileDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningPreferenceProfileRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningPreferenceProfileRelationshipDao = exports.MealPlanningPreferenceProfileRelationshipDao = function (_RelationshipDao49) {
  _inherits(MealPlanningPreferenceProfileRelationshipDao, _RelationshipDao49);

  function MealPlanningPreferenceProfileRelationshipDao(client) {
    _classCallCheck(this, MealPlanningPreferenceProfileRelationshipDao);

    var _this98 = _possibleConstructorReturn(this, (MealPlanningPreferenceProfileRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningPreferenceProfileRelationshipDao)).call(this, client, 'meal-planning-preference-profiles'));

    _this98.get = {

      /** @method preferee
       @params {Object} options
       @returns {Promise<Preferee>} **/
      preferee: function preferee(options) {
        return _this98.toOne('preferee', options);
      }
    };

    _this98.index = {

      /** @method requirements
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirement>>} **/
      requirements: function requirements(options) {
        return _this98.toMany('requirements', options);
      },

      /** @method requirementGroups
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirementGroup>>} **/
      requirementGroups: function requirementGroups(options) {
        return _this98.toMany('requirement-groups', options);
      },

      /** @method lovedRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      lovedRestaurants: function lovedRestaurants(options) {
        return _this98.toMany('loved-restaurants', options);
      },

      /** @method hatedRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      hatedRestaurants: function hatedRestaurants(options) {
        return _this98.toMany('hated-restaurants', options);
      },

      /** @method lovedCuisineTypes
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      lovedCuisineTypes: function lovedCuisineTypes(options) {
        return _this98.toMany('loved-cuisine-types', options);
      },

      /** @method hatedCuisineTypes
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      hatedCuisineTypes: function hatedCuisineTypes(options) {
        return _this98.toMany('hated-cuisine-types', options);
      }
    };
    return _this98;
  }

  return MealPlanningPreferenceProfileRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningRequirementDao
  * @extends {ResourceDao}
  **/


var MealPlanningRequirementDao = exports.MealPlanningRequirementDao = function (_ResourceDao50) {
  _inherits(MealPlanningRequirementDao, _ResourceDao50);

  function MealPlanningRequirementDao(client) {
    _classCallCheck(this, MealPlanningRequirementDao);

    var _this99 = _possibleConstructorReturn(this, (MealPlanningRequirementDao.__proto__ || Object.getPrototypeOf(MealPlanningRequirementDao)).call(this, client, 'meal-planning-requirements'));

    _this99.relationshipDao = new MealPlanningRequirementRelationshipDao(client);
    return _this99;
  }

  return MealPlanningRequirementDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningRequirementRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningRequirementRelationshipDao = exports.MealPlanningRequirementRelationshipDao = function (_RelationshipDao50) {
  _inherits(MealPlanningRequirementRelationshipDao, _RelationshipDao50);

  function MealPlanningRequirementRelationshipDao(client) {
    _classCallCheck(this, MealPlanningRequirementRelationshipDao);

    var _this100 = _possibleConstructorReturn(this, (MealPlanningRequirementRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningRequirementRelationshipDao)).call(this, client, 'meal-planning-requirements'));

    _this100.get = {

      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: function preferenceProfile(options) {
        return _this100.toOne('preference-profile', options);
      },

      /** @method requirementGroup
       @params {Object} options
       @returns {Promise<MealPlanningRequirementGroup>} **/
      requirementGroup: function requirementGroup(options) {
        return _this100.toOne('requirement-group', options);
      },

      /** @method restaurantConstraint
       @params {Object} options
       @returns {Promise<MealPlanningRestaurantConstraint>} **/
      restaurantConstraint: function restaurantConstraint(options) {
        return _this100.toOne('restaurant-constraint', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this100.toOne('order', options);
      }
    };

    _this100.index = {

      /** @method requirementConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirementConstraint>>} **/
      requirementConstraints: function requirementConstraints(options) {
        return _this100.toMany('requirement-constraints', options);
      },

      /** @method tags
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      tags: function tags(options) {
        return _this100.toMany('tags', options);
      },

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this100.toMany('dietary-tags', options);
      },

      /** @method allergyTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      allergyTags: function allergyTags(options) {
        return _this100.toMany('allergy-tags', options);
      },

      /** @method packagingTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      packagingTags: function packagingTags(options) {
        return _this100.toMany('packaging-tags', options);
      },

      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: function foodTypes(options) {
        return _this100.toMany('food-types', options);
      },

      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: function mealTypes(options) {
        return _this100.toMany('meal-types', options);
      }
    };
    return _this100;
  }

  return MealPlanningRequirementRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningRequirementConstraintDao
  * @extends {ResourceDao}
  **/


var MealPlanningRequirementConstraintDao = exports.MealPlanningRequirementConstraintDao = function (_ResourceDao51) {
  _inherits(MealPlanningRequirementConstraintDao, _ResourceDao51);

  function MealPlanningRequirementConstraintDao(client) {
    _classCallCheck(this, MealPlanningRequirementConstraintDao);

    var _this101 = _possibleConstructorReturn(this, (MealPlanningRequirementConstraintDao.__proto__ || Object.getPrototypeOf(MealPlanningRequirementConstraintDao)).call(this, client, 'meal-planning-requirement-constraints'));

    _this101.relationshipDao = new MealPlanningRequirementConstraintRelationshipDao(client);
    return _this101;
  }

  return MealPlanningRequirementConstraintDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningRequirementConstraintRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningRequirementConstraintRelationshipDao = exports.MealPlanningRequirementConstraintRelationshipDao = function (_RelationshipDao51) {
  _inherits(MealPlanningRequirementConstraintRelationshipDao, _RelationshipDao51);

  function MealPlanningRequirementConstraintRelationshipDao(client) {
    _classCallCheck(this, MealPlanningRequirementConstraintRelationshipDao);

    var _this102 = _possibleConstructorReturn(this, (MealPlanningRequirementConstraintRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningRequirementConstraintRelationshipDao)).call(this, client, 'meal-planning-requirement-constraints'));

    _this102.get = {

      /** @method requirement
       @params {Object} options
       @returns {Promise<MealPlanningRequirement>} **/
      requirement: function requirement(options) {
        return _this102.toOne('requirement', options);
      }
    };

    _this102.index = {

      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: function mealTypes(options) {
        return _this102.toMany('meal-types', options);
      },

      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: function foodTypes(options) {
        return _this102.toMany('food-types', options);
      },

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this102.toMany('dietary-tags', options);
      },

      /** @method allergyTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      allergyTags: function allergyTags(options) {
        return _this102.toMany('allergy-tags', options);
      },

      /** @method packagingTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      packagingTags: function packagingTags(options) {
        return _this102.toMany('packaging-tags', options);
      }
    };
    return _this102;
  }

  return MealPlanningRequirementConstraintRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningRequirementGroupDao
  * @extends {ResourceDao}
  **/


var MealPlanningRequirementGroupDao = exports.MealPlanningRequirementGroupDao = function (_ResourceDao52) {
  _inherits(MealPlanningRequirementGroupDao, _ResourceDao52);

  function MealPlanningRequirementGroupDao(client) {
    _classCallCheck(this, MealPlanningRequirementGroupDao);

    var _this103 = _possibleConstructorReturn(this, (MealPlanningRequirementGroupDao.__proto__ || Object.getPrototypeOf(MealPlanningRequirementGroupDao)).call(this, client, 'meal-planning-requirement-groups'));

    _this103.relationshipDao = new MealPlanningRequirementGroupRelationshipDao(client);
    return _this103;
  }

  return MealPlanningRequirementGroupDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningRequirementGroupRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningRequirementGroupRelationshipDao = exports.MealPlanningRequirementGroupRelationshipDao = function (_RelationshipDao52) {
  _inherits(MealPlanningRequirementGroupRelationshipDao, _RelationshipDao52);

  function MealPlanningRequirementGroupRelationshipDao(client) {
    _classCallCheck(this, MealPlanningRequirementGroupRelationshipDao);

    var _this104 = _possibleConstructorReturn(this, (MealPlanningRequirementGroupRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningRequirementGroupRelationshipDao)).call(this, client, 'meal-planning-requirement-groups'));

    _this104.get = {

      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: function preferenceProfile(options) {
        return _this104.toOne('preference-profile', options);
      }
    };

    _this104.index = {

      /** @method requirements
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirement>>} **/
      requirements: function requirements(options) {
        return _this104.toMany('requirements', options);
      }
    };
    return _this104;
  }

  return MealPlanningRequirementGroupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningReservationDao
  * @extends {ResourceDao}
  **/


var MealPlanningReservationDao = exports.MealPlanningReservationDao = function (_ResourceDao53) {
  _inherits(MealPlanningReservationDao, _ResourceDao53);

  function MealPlanningReservationDao(client) {
    _classCallCheck(this, MealPlanningReservationDao);

    var _this105 = _possibleConstructorReturn(this, (MealPlanningReservationDao.__proto__ || Object.getPrototypeOf(MealPlanningReservationDao)).call(this, client, 'meal-planning-reservations'));

    _this105.relationshipDao = new MealPlanningReservationRelationshipDao(client);
    return _this105;
  }

  return MealPlanningReservationDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningReservationRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningReservationRelationshipDao = exports.MealPlanningReservationRelationshipDao = function (_RelationshipDao53) {
  _inherits(MealPlanningReservationRelationshipDao, _RelationshipDao53);

  function MealPlanningReservationRelationshipDao(client) {
    _classCallCheck(this, MealPlanningReservationRelationshipDao);

    var _this106 = _possibleConstructorReturn(this, (MealPlanningReservationRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningReservationRelationshipDao)).call(this, client, 'meal-planning-reservations'));

    _this106.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this106.toOne('area', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this106.toOne('client', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this106.toOne('restaurant', options);
      },

      /** @method mealPlanningInstance
       @params {Object} options
       @returns {Promise<MealPlanningInstance>} **/
      mealPlanningInstance: function mealPlanningInstance(options) {
        return _this106.toOne('meal-planning-instance', options);
      },

      /** @method event
       @params {Object} options
       @returns {Promise<MealPlanningEvent>} **/
      event: function event(options) {
        return _this106.toOne('event', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this106.toOne('order', options);
      }
    };

    return _this106;
  }

  return MealPlanningReservationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningRestaurantConstraintDao
  * @extends {ResourceDao}
  **/


var MealPlanningRestaurantConstraintDao = exports.MealPlanningRestaurantConstraintDao = function (_ResourceDao54) {
  _inherits(MealPlanningRestaurantConstraintDao, _ResourceDao54);

  function MealPlanningRestaurantConstraintDao(client) {
    _classCallCheck(this, MealPlanningRestaurantConstraintDao);

    var _this107 = _possibleConstructorReturn(this, (MealPlanningRestaurantConstraintDao.__proto__ || Object.getPrototypeOf(MealPlanningRestaurantConstraintDao)).call(this, client, 'meal-planning-restaurant-constraints'));

    _this107.relationshipDao = new MealPlanningRestaurantConstraintRelationshipDao(client);
    return _this107;
  }

  return MealPlanningRestaurantConstraintDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningRestaurantConstraintRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningRestaurantConstraintRelationshipDao = exports.MealPlanningRestaurantConstraintRelationshipDao = function (_RelationshipDao54) {
  _inherits(MealPlanningRestaurantConstraintRelationshipDao, _RelationshipDao54);

  function MealPlanningRestaurantConstraintRelationshipDao(client) {
    _classCallCheck(this, MealPlanningRestaurantConstraintRelationshipDao);

    var _this108 = _possibleConstructorReturn(this, (MealPlanningRestaurantConstraintRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningRestaurantConstraintRelationshipDao)).call(this, client, 'meal-planning-restaurant-constraints'));

    _this108.get = {

      /** @method template
       @params {Object} options
       @returns {Promise<MealPlanningTemplate>} **/
      template: function template(options) {
        return _this108.toOne('template', options);
      },

      /** @method instance
       @params {Object} options
       @returns {Promise<MealPlanningInstance>} **/
      instance: function instance(options) {
        return _this108.toOne('instance', options);
      },

      /** @method event
       @params {Object} options
       @returns {Promise<MealPlanningEvent>} **/
      event: function event(options) {
        return _this108.toOne('event', options);
      },

      /** @method requirement
       @params {Object} options
       @returns {Promise<MealPlanningRequirement>} **/
      requirement: function requirement(options) {
        return _this108.toOne('requirement', options);
      }
    };

    _this108.index = {

      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      restaurants: function restaurants(options) {
        return _this108.toMany('restaurants', options);
      }
    };
    return _this108;
  }

  return MealPlanningRestaurantConstraintRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningScheduleDao
  * @extends {ResourceDao}
  **/


var MealPlanningScheduleDao = exports.MealPlanningScheduleDao = function (_ResourceDao55) {
  _inherits(MealPlanningScheduleDao, _ResourceDao55);

  function MealPlanningScheduleDao(client) {
    _classCallCheck(this, MealPlanningScheduleDao);

    var _this109 = _possibleConstructorReturn(this, (MealPlanningScheduleDao.__proto__ || Object.getPrototypeOf(MealPlanningScheduleDao)).call(this, client, 'meal-planning-schedules'));

    _this109.relationshipDao = new MealPlanningScheduleRelationshipDao(client);
    return _this109;
  }

  return MealPlanningScheduleDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningScheduleRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningScheduleRelationshipDao = exports.MealPlanningScheduleRelationshipDao = function (_RelationshipDao55) {
  _inherits(MealPlanningScheduleRelationshipDao, _RelationshipDao55);

  function MealPlanningScheduleRelationshipDao(client) {
    _classCallCheck(this, MealPlanningScheduleRelationshipDao);

    var _this110 = _possibleConstructorReturn(this, (MealPlanningScheduleRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningScheduleRelationshipDao)).call(this, client, 'meal-planning-schedules'));

    _this110.get = {

      /** @method template
       @params {Object} options
       @returns {Promise<MealPlanningTemplate>} **/
      template: function template(options) {
        return _this110.toOne('template', options);
      }
    };

    _this110.index = {

      /** @method skipPeriods
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningSkipPeriod>>} **/
      skipPeriods: function skipPeriods(options) {
        return _this110.toMany('skip-periods', options);
      }
    };
    return _this110;
  }

  return MealPlanningScheduleRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanningTemplateDao
  * @extends {ResourceDao}
  **/


var MealPlanningTemplateDao = exports.MealPlanningTemplateDao = function (_ResourceDao56) {
  _inherits(MealPlanningTemplateDao, _ResourceDao56);

  function MealPlanningTemplateDao(client) {
    _classCallCheck(this, MealPlanningTemplateDao);

    var _this111 = _possibleConstructorReturn(this, (MealPlanningTemplateDao.__proto__ || Object.getPrototypeOf(MealPlanningTemplateDao)).call(this, client, 'meal-planning-templates'));

    _this111.relationshipDao = new MealPlanningTemplateRelationshipDao(client);
    return _this111;
  }

  return MealPlanningTemplateDao;
}(_clientBase.ResourceDao);

/** @class MealPlanningTemplateRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanningTemplateRelationshipDao = exports.MealPlanningTemplateRelationshipDao = function (_RelationshipDao56) {
  _inherits(MealPlanningTemplateRelationshipDao, _RelationshipDao56);

  function MealPlanningTemplateRelationshipDao(client) {
    _classCallCheck(this, MealPlanningTemplateRelationshipDao);

    var _this112 = _possibleConstructorReturn(this, (MealPlanningTemplateRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanningTemplateRelationshipDao)).call(this, client, 'meal-planning-templates'));

    _this112.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this112.toOne('client', options);
      },

      /** @method orderTemplate
       @params {Object} options
       @returns {Promise<Order>} **/
      orderTemplate: function orderTemplate(options) {
        return _this112.toOne('order-template', options);
      },

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this112.toOne('area', options);
      },

      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: function preferenceProfile(options) {
        return _this112.toOne('preference-profile', options);
      },

      /** @method schedule
       @params {Object} options
       @returns {Promise<MealPlanningSchedule>} **/
      schedule: function schedule(options) {
        return _this112.toOne('schedule', options);
      },

      /** @method defaultOrderOwner
       @params {Object} options
       @returns {Promise<User>} **/
      defaultOrderOwner: function defaultOrderOwner(options) {
        return _this112.toOne('default-order-owner', options);
      }
    };

    _this112.index = {

      /** @method mealPlanningInstances
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningInstance>>} **/
      mealPlanningInstances: function mealPlanningInstances(options) {
        return _this112.toMany('meal-planning-instances', options);
      },

      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: function restaurantConstraints(options) {
        return _this112.toMany('restaurant-constraints', options);
      }
    };
    return _this112;
  }

  return MealPlanningTemplateRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealTypeDao
  * @extends {ResourceDao}
  **/


var MealTypeDao = exports.MealTypeDao = function (_ResourceDao57) {
  _inherits(MealTypeDao, _ResourceDao57);

  function MealTypeDao(client) {
    _classCallCheck(this, MealTypeDao);

    var _this113 = _possibleConstructorReturn(this, (MealTypeDao.__proto__ || Object.getPrototypeOf(MealTypeDao)).call(this, client, 'meal-types'));

    _this113.relationshipDao = new MealTypeRelationshipDao(client);
    return _this113;
  }

  return MealTypeDao;
}(_clientBase.ResourceDao);

/** @class MealTypeRelationshipDao
 * @extends {RelationshipDao}  **/


var MealTypeRelationshipDao = exports.MealTypeRelationshipDao = function (_RelationshipDao57) {
  _inherits(MealTypeRelationshipDao, _RelationshipDao57);

  function MealTypeRelationshipDao(client) {
    _classCallCheck(this, MealTypeRelationshipDao);

    return _possibleConstructorReturn(this, (MealTypeRelationshipDao.__proto__ || Object.getPrototypeOf(MealTypeRelationshipDao)).call(this, client, 'meal-types'));
  }

  return MealTypeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuDao
  * @extends {ResourceDao}
  **/


var MenuDao = exports.MenuDao = function (_ResourceDao58) {
  _inherits(MenuDao, _ResourceDao58);

  function MenuDao(client) {
    _classCallCheck(this, MenuDao);

    var _this115 = _possibleConstructorReturn(this, (MenuDao.__proto__ || Object.getPrototypeOf(MenuDao)).call(this, client, 'menus'));

    _this115.relationshipDao = new MenuRelationshipDao(client);
    return _this115;
  }

  return MenuDao;
}(_clientBase.ResourceDao);

/** @class MenuRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuRelationshipDao = exports.MenuRelationshipDao = function (_RelationshipDao58) {
  _inherits(MenuRelationshipDao, _RelationshipDao58);

  function MenuRelationshipDao(client) {
    _classCallCheck(this, MenuRelationshipDao);

    var _this116 = _possibleConstructorReturn(this, (MenuRelationshipDao.__proto__ || Object.getPrototypeOf(MenuRelationshipDao)).call(this, client, 'menus'));

    _this116.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this116.toOne('area', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this116.toOne('restaurant', options);
      }
    };

    _this116.index = {

      /** @method menuGroups
       @params {Object} options
       @returns {Promise<IndexResult<MenuGroup>>} **/
      menuGroups: function menuGroups(options) {
        return _this116.toMany('menu-groups', options);
      },

      /** @method menuItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuItem>>} **/
      menuItems: function menuItems(options) {
        return _this116.toMany('menu-items', options);
      },

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this116.toMany('dietary-tags', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this116.toMany('orders', options);
      }
    };
    return _this116;
  }

  return MenuRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuGroupDao
  * @extends {ResourceDao}
  **/


var MenuGroupDao = exports.MenuGroupDao = function (_ResourceDao59) {
  _inherits(MenuGroupDao, _ResourceDao59);

  function MenuGroupDao(client) {
    _classCallCheck(this, MenuGroupDao);

    var _this117 = _possibleConstructorReturn(this, (MenuGroupDao.__proto__ || Object.getPrototypeOf(MenuGroupDao)).call(this, client, 'menu-groups'));

    _this117.relationshipDao = new MenuGroupRelationshipDao(client);
    return _this117;
  }

  return MenuGroupDao;
}(_clientBase.ResourceDao);

/** @class MenuGroupRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuGroupRelationshipDao = exports.MenuGroupRelationshipDao = function (_RelationshipDao59) {
  _inherits(MenuGroupRelationshipDao, _RelationshipDao59);

  function MenuGroupRelationshipDao(client) {
    _classCallCheck(this, MenuGroupRelationshipDao);

    var _this118 = _possibleConstructorReturn(this, (MenuGroupRelationshipDao.__proto__ || Object.getPrototypeOf(MenuGroupRelationshipDao)).call(this, client, 'menu-groups'));

    _this118.get = {

      /** @method menu
       @params {Object} options
       @returns {Promise<Menu>} **/
      menu: function menu(options) {
        return _this118.toOne('menu', options);
      }
    };

    _this118.index = {

      /** @method menuItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuItem>>} **/
      menuItems: function menuItems(options) {
        return _this118.toMany('menu-items', options);
      },

      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: function mealTypes(options) {
        return _this118.toMany('meal-types', options);
      },

      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: function foodTypes(options) {
        return _this118.toMany('food-types', options);
      }
    };
    return _this118;
  }

  return MenuGroupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuItemDao
  * @extends {ResourceDao}
  **/


var MenuItemDao = exports.MenuItemDao = function (_ResourceDao60) {
  _inherits(MenuItemDao, _ResourceDao60);

  function MenuItemDao(client) {
    _classCallCheck(this, MenuItemDao);

    var _this119 = _possibleConstructorReturn(this, (MenuItemDao.__proto__ || Object.getPrototypeOf(MenuItemDao)).call(this, client, 'menu-items'));

    _this119.relationshipDao = new MenuItemRelationshipDao(client);
    return _this119;
  }

  return MenuItemDao;
}(_clientBase.ResourceDao);

/** @class MenuItemRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuItemRelationshipDao = exports.MenuItemRelationshipDao = function (_RelationshipDao60) {
  _inherits(MenuItemRelationshipDao, _RelationshipDao60);

  function MenuItemRelationshipDao(client) {
    _classCallCheck(this, MenuItemRelationshipDao);

    var _this120 = _possibleConstructorReturn(this, (MenuItemRelationshipDao.__proto__ || Object.getPrototypeOf(MenuItemRelationshipDao)).call(this, client, 'menu-items'));

    _this120.get = {

      /** @method taxRate
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      taxRate: function taxRate(options) {
        return _this120.toOne('tax-rate', options);
      },

      /** @method menuGroup
       @params {Object} options
       @returns {Promise<MenuGroup>} **/
      menuGroup: function menuGroup(options) {
        return _this120.toOne('menu-group', options);
      }
    };

    _this120.index = {

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this120.toMany('dietary-tags', options);
      },

      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: function mealTypes(options) {
        return _this120.toMany('meal-types', options);
      },

      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: function foodTypes(options) {
        return _this120.toMany('food-types', options);
      },

      /** @method menuOptionGroups
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionGroup>>} **/
      menuOptionGroups: function menuOptionGroups(options) {
        return _this120.toMany('menu-option-groups', options);
      }
    };
    return _this120;
  }

  return MenuItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuOptionGroupDao
  * @extends {ResourceDao}
  **/


var MenuOptionGroupDao = exports.MenuOptionGroupDao = function (_ResourceDao61) {
  _inherits(MenuOptionGroupDao, _ResourceDao61);

  function MenuOptionGroupDao(client) {
    _classCallCheck(this, MenuOptionGroupDao);

    var _this121 = _possibleConstructorReturn(this, (MenuOptionGroupDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupDao)).call(this, client, 'menu-option-groups'));

    _this121.relationshipDao = new MenuOptionGroupRelationshipDao(client);
    return _this121;
  }

  return MenuOptionGroupDao;
}(_clientBase.ResourceDao);

/** @class MenuOptionGroupRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuOptionGroupRelationshipDao = exports.MenuOptionGroupRelationshipDao = function (_RelationshipDao61) {
  _inherits(MenuOptionGroupRelationshipDao, _RelationshipDao61);

  function MenuOptionGroupRelationshipDao(client) {
    _classCallCheck(this, MenuOptionGroupRelationshipDao);

    var _this122 = _possibleConstructorReturn(this, (MenuOptionGroupRelationshipDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupRelationshipDao)).call(this, client, 'menu-option-groups'));

    _this122.get = {

      /** @method menuItem
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      menuItem: function menuItem(options) {
        return _this122.toOne('menu-item', options);
      }
    };

    _this122.index = {

      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      menuOptionItems: function menuOptionItems(options) {
        return _this122.toMany('menu-option-items', options);
      }
    };
    return _this122;
  }

  return MenuOptionGroupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuOptionItemDao
  * @extends {ResourceDao}
  **/


var MenuOptionItemDao = exports.MenuOptionItemDao = function (_ResourceDao62) {
  _inherits(MenuOptionItemDao, _ResourceDao62);

  function MenuOptionItemDao(client) {
    _classCallCheck(this, MenuOptionItemDao);

    var _this123 = _possibleConstructorReturn(this, (MenuOptionItemDao.__proto__ || Object.getPrototypeOf(MenuOptionItemDao)).call(this, client, 'menu-option-items'));

    _this123.relationshipDao = new MenuOptionItemRelationshipDao(client);
    return _this123;
  }

  return MenuOptionItemDao;
}(_clientBase.ResourceDao);

/** @class MenuOptionItemRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuOptionItemRelationshipDao = exports.MenuOptionItemRelationshipDao = function (_RelationshipDao62) {
  _inherits(MenuOptionItemRelationshipDao, _RelationshipDao62);

  function MenuOptionItemRelationshipDao(client) {
    _classCallCheck(this, MenuOptionItemRelationshipDao);

    var _this124 = _possibleConstructorReturn(this, (MenuOptionItemRelationshipDao.__proto__ || Object.getPrototypeOf(MenuOptionItemRelationshipDao)).call(this, client, 'menu-option-items'));

    _this124.get = {

      /** @method menuOptionGroup
       @params {Object} options
       @returns {Promise<MenuOptionGroup>} **/
      menuOptionGroup: function menuOptionGroup(options) {
        return _this124.toOne('menu-option-group', options);
      }
    };

    _this124.index = {

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this124.toMany('dietary-tags', options);
      },

      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: function orderItems(options) {
        return _this124.toMany('order-items', options);
      }
    };
    return _this124;
  }

  return MenuOptionItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class NotificationLogDao
  * @extends {ResourceDao}
  **/


var NotificationLogDao = exports.NotificationLogDao = function (_ResourceDao63) {
  _inherits(NotificationLogDao, _ResourceDao63);

  function NotificationLogDao(client) {
    _classCallCheck(this, NotificationLogDao);

    var _this125 = _possibleConstructorReturn(this, (NotificationLogDao.__proto__ || Object.getPrototypeOf(NotificationLogDao)).call(this, client, 'notification-logs'));

    _this125.relationshipDao = new NotificationLogRelationshipDao(client);
    return _this125;
  }

  return NotificationLogDao;
}(_clientBase.ResourceDao);

/** @class NotificationLogRelationshipDao
 * @extends {RelationshipDao}  **/


var NotificationLogRelationshipDao = exports.NotificationLogRelationshipDao = function (_RelationshipDao63) {
  _inherits(NotificationLogRelationshipDao, _RelationshipDao63);

  function NotificationLogRelationshipDao(client) {
    _classCallCheck(this, NotificationLogRelationshipDao);

    var _this126 = _possibleConstructorReturn(this, (NotificationLogRelationshipDao.__proto__ || Object.getPrototypeOf(NotificationLogRelationshipDao)).call(this, client, 'notification-logs'));

    _this126.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this126.toOne('order', options);
      }
    };

    return _this126;
  }

  return NotificationLogRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class OrderDao
  * @extends {ResourceDao}
  **/


var OrderDao = exports.OrderDao = function (_ResourceDao64) {
  _inherits(OrderDao, _ResourceDao64);

  function OrderDao(client) {
    _classCallCheck(this, OrderDao);

    var _this127 = _possibleConstructorReturn(this, (OrderDao.__proto__ || Object.getPrototypeOf(OrderDao)).call(this, client, 'orders'));

    _this127.relationshipDao = new OrderRelationshipDao(client);
    return _this127;
  }

  return OrderDao;
}(_clientBase.ResourceDao);

/** @class OrderRelationshipDao
 * @extends {RelationshipDao}  **/


var OrderRelationshipDao = exports.OrderRelationshipDao = function (_RelationshipDao64) {
  _inherits(OrderRelationshipDao, _RelationshipDao64);

  function OrderRelationshipDao(client) {
    _classCallCheck(this, OrderRelationshipDao);

    var _this128 = _possibleConstructorReturn(this, (OrderRelationshipDao.__proto__ || Object.getPrototypeOf(OrderRelationshipDao)).call(this, client, 'orders'));

    _this128.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this128.toOne('area', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: function owner(options) {
        return _this128.toOne('owner', options);
      },

      /** @method creator
       @params {Object} options
       @returns {Promise<User>} **/
      creator: function creator(options) {
        return _this128.toOne('creator', options);
      },

      /** @method paymentCard
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      paymentCard: function paymentCard(options) {
        return _this128.toOne('payment-card', options);
      },

      /** @method contact
       @params {Object} options
       @returns {Promise<Contact>} **/
      contact: function contact(options) {
        return _this128.toOne('contact', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this128.toOne('client', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this128.toOne('restaurant', options);
      },

      /** @method courier
       @params {Object} options
       @returns {Promise<Courier>} **/
      courier: function courier(options) {
        return _this128.toOne('courier', options);
      },

      /** @method promoCode
       @params {Object} options
       @returns {Promise<PromoCode>} **/
      promoCode: function promoCode(options) {
        return _this128.toOne('promo-code', options);
      },

      /** @method driver
       @params {Object} options
       @returns {Promise<User>} **/
      driver: function driver(options) {
        return _this128.toOne('driver', options);
      },

      /** @method salesSupport
       @params {Object} options
       @returns {Promise<User>} **/
      salesSupport: function salesSupport(options) {
        return _this128.toOne('sales-support', options);
      },

      /** @method restaurantLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      restaurantLocation: function restaurantLocation(options) {
        return _this128.toOne('restaurant-location', options);
      },

      /** @method clientLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      clientLocation: function clientLocation(options) {
        return _this128.toOne('client-location', options);
      },

      /** @method menu
       @params {Object} options
       @returns {Promise<Menu>} **/
      menu: function menu(options) {
        return _this128.toOne('menu', options);
      },

      /** @method menuFilter
       @params {Object} options
       @returns {Promise<MealPlanningRequirement>} **/
      menuFilter: function menuFilter(options) {
        return _this128.toOne('menu-filter', options);
      },

      /** @method customLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      customLocation: function customLocation(options) {
        return _this128.toOne('custom-location', options);
      },

      /** @method giftbitError
       @params {Object} options
       @returns {Promise<GiftbitError>} **/
      giftbitError: function giftbitError(options) {
        return _this128.toOne('giftbit-error', options);
      },

      /** @method restaurantInvoice
       @params {Object} options
       @returns {Promise<InvoicingLedgerItem>} **/
      restaurantInvoice: function restaurantInvoice(options) {
        return _this128.toOne('restaurant-invoice', options);
      },

      /** @method clientInvoice
       @params {Object} options
       @returns {Promise<InvoicingLedgerItem>} **/
      clientInvoice: function clientInvoice(options) {
        return _this128.toOne('client-invoice', options);
      },

      /** @method invoice
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      invoice: function invoice(options) {
        return _this128.toOne('invoice', options);
      },

      /** @method restaurantBill
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      restaurantBill: function restaurantBill(options) {
        return _this128.toOne('restaurant-bill', options);
      },

      /** @method clientOrderInvoice
       @params {Object} options
       @returns {Promise<ClientOrderInvoice>} **/
      clientOrderInvoice: function clientOrderInvoice(options) {
        return _this128.toOne('client-order-invoice', options);
      },

      /** @method restaurantOrderInvoice
       @params {Object} options
       @returns {Promise<RestaurantOrderInvoice>} **/
      restaurantOrderInvoice: function restaurantOrderInvoice(options) {
        return _this128.toOne('restaurant-order-invoice', options);
      },

      /** @method arrivalEstimate
       @params {Object} options
       @returns {Promise<LogisticsArrivalEstimate>} **/
      arrivalEstimate: function arrivalEstimate(options) {
        return _this128.toOne('arrival-estimate', options);
      }
    };

    _this128.index = {

      /** @method clientDiscounts
       @params {Object} options
       @returns {Promise<IndexResult<ClientDiscount>>} **/
      clientDiscounts: function clientDiscounts(options) {
        return _this128.toMany('client-discounts', options);
      },

      /** @method restaurantDiscounts
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantDiscount>>} **/
      restaurantDiscounts: function restaurantDiscounts(options) {
        return _this128.toMany('restaurant-discounts', options);
      },

      /** @method emailMessages
       @params {Object} options
       @returns {Promise<IndexResult<EmailMessage>>} **/
      emailMessages: function emailMessages(options) {
        return _this128.toMany('email-messages', options);
      },

      /** @method deliveryCases
       @params {Object} options
       @returns {Promise<IndexResult<DeliveryCase>>} **/
      deliveryCases: function deliveryCases(options) {
        return _this128.toMany('delivery-cases', options);
      },

      /** @method deskCases
       @params {Object} options
       @returns {Promise<IndexResult<DeskCase>>} **/
      deskCases: function deskCases(options) {
        return _this128.toMany('desk-cases', options);
      },

      /** @method allOrderVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allOrderVersions: function allOrderVersions(options) {
        return _this128.toMany('all-order-versions', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this128.toMany('versions', options);
      },

      /** @method pollableRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      pollableRestaurants: function pollableRestaurants(options) {
        return _this128.toMany('pollable-restaurants', options);
      },

      /** @method restaurantVotes
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantVote>>} **/
      restaurantVotes: function restaurantVotes(options) {
        return _this128.toMany('restaurant-votes', options);
      },

      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: function teams(options) {
        return _this128.toMany('teams', options);
      },

      /** @method allUsers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      allUsers: function allUsers(options) {
        return _this128.toMany('all-users', options);
      },

      /** @method orderedUsers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      orderedUsers: function orderedUsers(options) {
        return _this128.toMany('ordered-users', options);
      },

      /** @method orderedGroupOrderMembers
       @params {Object} options
       @returns {Promise<IndexResult<GroupOrderMember>>} **/
      orderedGroupOrderMembers: function orderedGroupOrderMembers(options) {
        return _this128.toMany('ordered-group-order-members', options);
      },

      /** @method joinedUsers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      joinedUsers: function joinedUsers(options) {
        return _this128.toMany('joined-users', options);
      },

      /** @method teamMembers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      teamMembers: function teamMembers(options) {
        return _this128.toMany('team-members', options);
      },

      /** @method groupOrderMembers
       @params {Object} options
       @returns {Promise<IndexResult<GroupOrderMember>>} **/
      groupOrderMembers: function groupOrderMembers(options) {
        return _this128.toMany('group-order-members', options);
      },

      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: function orderItems(options) {
        return _this128.toMany('order-items', options);
      },

      /** @method ledgerItems
       @params {Object} options
       @returns {Promise<IndexResult<AccountingLedgerItem>>} **/
      ledgerItems: function ledgerItems(options) {
        return _this128.toMany('ledger-items', options);
      },

      /** @method salesforceCases
       @params {Object} options
       @returns {Promise<IndexResult<SalesforceCase>>} **/
      salesforceCases: function salesforceCases(options) {
        return _this128.toMany('salesforce-cases', options);
      },

      /** @method notificationLogs
       @params {Object} options
       @returns {Promise<IndexResult<NotificationLog>>} **/
      notificationLogs: function notificationLogs(options) {
        return _this128.toMany('notification-logs', options);
      }
    };
    return _this128;
  }

  return OrderRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class OrderItemDao
  * @extends {ResourceDao}
  **/


var OrderItemDao = exports.OrderItemDao = function (_ResourceDao65) {
  _inherits(OrderItemDao, _ResourceDao65);

  function OrderItemDao(client) {
    _classCallCheck(this, OrderItemDao);

    var _this129 = _possibleConstructorReturn(this, (OrderItemDao.__proto__ || Object.getPrototypeOf(OrderItemDao)).call(this, client, 'order-items'));

    _this129.relationshipDao = new OrderItemRelationshipDao(client);
    return _this129;
  }

  return OrderItemDao;
}(_clientBase.ResourceDao);

/** @class OrderItemRelationshipDao
 * @extends {RelationshipDao}  **/


var OrderItemRelationshipDao = exports.OrderItemRelationshipDao = function (_RelationshipDao65) {
  _inherits(OrderItemRelationshipDao, _RelationshipDao65);

  function OrderItemRelationshipDao(client) {
    _classCallCheck(this, OrderItemRelationshipDao);

    var _this130 = _possibleConstructorReturn(this, (OrderItemRelationshipDao.__proto__ || Object.getPrototypeOf(OrderItemRelationshipDao)).call(this, client, 'order-items'));

    _this130.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this130.toOne('order', options);
      },

      /** @method menuItem
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      menuItem: function menuItem(options) {
        return _this130.toOne('menu-item', options);
      },

      /** @method groupOrderMember
       @params {Object} options
       @returns {Promise<GroupOrderMember>} **/
      groupOrderMember: function groupOrderMember(options) {
        return _this130.toOne('group-order-member', options);
      }
    };

    _this130.index = {

      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      menuOptionItems: function menuOptionItems(options) {
        return _this130.toMany('menu-option-items', options);
      }
    };
    return _this130;
  }

  return OrderItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PaymentAccountDao
  * @extends {ResourceDao}
  **/


var PaymentAccountDao = exports.PaymentAccountDao = function (_ResourceDao66) {
  _inherits(PaymentAccountDao, _ResourceDao66);

  function PaymentAccountDao(client) {
    _classCallCheck(this, PaymentAccountDao);

    var _this131 = _possibleConstructorReturn(this, (PaymentAccountDao.__proto__ || Object.getPrototypeOf(PaymentAccountDao)).call(this, client, 'payment-accounts'));

    _this131.relationshipDao = new PaymentAccountRelationshipDao(client);
    return _this131;
  }

  return PaymentAccountDao;
}(_clientBase.ResourceDao);

/** @class PaymentAccountRelationshipDao
 * @extends {RelationshipDao}  **/


var PaymentAccountRelationshipDao = exports.PaymentAccountRelationshipDao = function (_RelationshipDao66) {
  _inherits(PaymentAccountRelationshipDao, _RelationshipDao66);

  function PaymentAccountRelationshipDao(client) {
    _classCallCheck(this, PaymentAccountRelationshipDao);

    return _possibleConstructorReturn(this, (PaymentAccountRelationshipDao.__proto__ || Object.getPrototypeOf(PaymentAccountRelationshipDao)).call(this, client, 'payment-accounts'));
  }

  return PaymentAccountRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PaymentCardDao
  * @extends {ResourceDao}
  **/


var PaymentCardDao = exports.PaymentCardDao = function (_ResourceDao67) {
  _inherits(PaymentCardDao, _ResourceDao67);

  function PaymentCardDao(client) {
    _classCallCheck(this, PaymentCardDao);

    var _this133 = _possibleConstructorReturn(this, (PaymentCardDao.__proto__ || Object.getPrototypeOf(PaymentCardDao)).call(this, client, 'payment-cards'));

    _this133.relationshipDao = new PaymentCardRelationshipDao(client);
    return _this133;
  }

  return PaymentCardDao;
}(_clientBase.ResourceDao);

/** @class PaymentCardRelationshipDao
 * @extends {RelationshipDao}  **/


var PaymentCardRelationshipDao = exports.PaymentCardRelationshipDao = function (_RelationshipDao67) {
  _inherits(PaymentCardRelationshipDao, _RelationshipDao67);

  function PaymentCardRelationshipDao(client) {
    _classCallCheck(this, PaymentCardRelationshipDao);

    var _this134 = _possibleConstructorReturn(this, (PaymentCardRelationshipDao.__proto__ || Object.getPrototypeOf(PaymentCardRelationshipDao)).call(this, client, 'payment-cards'));

    _this134.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this134.toOne('client', options);
      },

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this134.toOne('user', options);
      }
    };

    return _this134;
  }

  return PaymentCardRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PayrollRunDao
  * @extends {ResourceDao}
  **/


var PayrollRunDao = exports.PayrollRunDao = function (_ResourceDao68) {
  _inherits(PayrollRunDao, _ResourceDao68);

  function PayrollRunDao(client) {
    _classCallCheck(this, PayrollRunDao);

    var _this135 = _possibleConstructorReturn(this, (PayrollRunDao.__proto__ || Object.getPrototypeOf(PayrollRunDao)).call(this, client, 'payroll-runs'));

    _this135.relationshipDao = new PayrollRunRelationshipDao(client);
    return _this135;
  }

  return PayrollRunDao;
}(_clientBase.ResourceDao);

/** @class PayrollRunRelationshipDao
 * @extends {RelationshipDao}  **/


var PayrollRunRelationshipDao = exports.PayrollRunRelationshipDao = function (_RelationshipDao68) {
  _inherits(PayrollRunRelationshipDao, _RelationshipDao68);

  function PayrollRunRelationshipDao(client) {
    _classCallCheck(this, PayrollRunRelationshipDao);

    var _this136 = _possibleConstructorReturn(this, (PayrollRunRelationshipDao.__proto__ || Object.getPrototypeOf(PayrollRunRelationshipDao)).call(this, client, 'payroll-runs'));

    _this136.index = {

      /** @method driverPayrollRun
       @params {Object} options
       @returns {Promise<IndexResult<DriverPayrollRun>>} **/
      driverPayrollRun: function driverPayrollRun(options) {
        return _this136.toMany('driver-payroll-runs', options);
      }
    };
    return _this136;
  }

  return PayrollRunRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PickupLocationDao
  * @extends {ResourceDao}
  **/


var PickupLocationDao = exports.PickupLocationDao = function (_ResourceDao69) {
  _inherits(PickupLocationDao, _ResourceDao69);

  function PickupLocationDao(client) {
    _classCallCheck(this, PickupLocationDao);

    var _this137 = _possibleConstructorReturn(this, (PickupLocationDao.__proto__ || Object.getPrototypeOf(PickupLocationDao)).call(this, client, 'pickup-locations'));

    _this137.relationshipDao = new PickupLocationRelationshipDao(client);
    return _this137;
  }

  return PickupLocationDao;
}(_clientBase.ResourceDao);

/** @class PickupLocationRelationshipDao
 * @extends {RelationshipDao}  **/


var PickupLocationRelationshipDao = exports.PickupLocationRelationshipDao = function (_RelationshipDao69) {
  _inherits(PickupLocationRelationshipDao, _RelationshipDao69);

  function PickupLocationRelationshipDao(client) {
    _classCallCheck(this, PickupLocationRelationshipDao);

    var _this138 = _possibleConstructorReturn(this, (PickupLocationRelationshipDao.__proto__ || Object.getPrototypeOf(PickupLocationRelationshipDao)).call(this, client, 'pickup-locations'));

    _this138.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this138.toOne('restaurant', options);
      },

      /** @method location
       @params {Object} options
       @returns {Promise<Location>} **/
      location: function location(options) {
        return _this138.toOne('location', options);
      }
    };

    return _this138;
  }

  return PickupLocationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PromoCodeDao
  * @extends {ResourceDao}
  **/


var PromoCodeDao = exports.PromoCodeDao = function (_ResourceDao70) {
  _inherits(PromoCodeDao, _ResourceDao70);

  function PromoCodeDao(client) {
    _classCallCheck(this, PromoCodeDao);

    var _this139 = _possibleConstructorReturn(this, (PromoCodeDao.__proto__ || Object.getPrototypeOf(PromoCodeDao)).call(this, client, 'promo-codes'));

    _this139.relationshipDao = new PromoCodeRelationshipDao(client);
    return _this139;
  }

  return PromoCodeDao;
}(_clientBase.ResourceDao);

/** @class PromoCodeRelationshipDao
 * @extends {RelationshipDao}  **/


var PromoCodeRelationshipDao = exports.PromoCodeRelationshipDao = function (_RelationshipDao70) {
  _inherits(PromoCodeRelationshipDao, _RelationshipDao70);

  function PromoCodeRelationshipDao(client) {
    _classCallCheck(this, PromoCodeRelationshipDao);

    var _this140 = _possibleConstructorReturn(this, (PromoCodeRelationshipDao.__proto__ || Object.getPrototypeOf(PromoCodeRelationshipDao)).call(this, client, 'promo-codes'));

    _this140.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: function area(options) {
        return _this140.toOne('area', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this140.toOne('restaurant', options);
      }
    };

    _this140.index = {

      /** @method order
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      order: function order(options) {
        return _this140.toMany('orders', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this140.toMany('versions', options);
      }
    };
    return _this140;
  }

  return PromoCodeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class QualifyingQuestionDao
  * @extends {ResourceDao}
  **/


var QualifyingQuestionDao = exports.QualifyingQuestionDao = function (_ResourceDao71) {
  _inherits(QualifyingQuestionDao, _ResourceDao71);

  function QualifyingQuestionDao(client) {
    _classCallCheck(this, QualifyingQuestionDao);

    var _this141 = _possibleConstructorReturn(this, (QualifyingQuestionDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionDao)).call(this, client, 'qualifying-questions'));

    _this141.relationshipDao = new QualifyingQuestionRelationshipDao(client);
    return _this141;
  }

  return QualifyingQuestionDao;
}(_clientBase.ResourceDao);

/** @class QualifyingQuestionRelationshipDao
 * @extends {RelationshipDao}  **/


var QualifyingQuestionRelationshipDao = exports.QualifyingQuestionRelationshipDao = function (_RelationshipDao71) {
  _inherits(QualifyingQuestionRelationshipDao, _RelationshipDao71);

  function QualifyingQuestionRelationshipDao(client) {
    _classCallCheck(this, QualifyingQuestionRelationshipDao);

    return _possibleConstructorReturn(this, (QualifyingQuestionRelationshipDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionRelationshipDao)).call(this, client, 'qualifying-questions'));
  }

  return QualifyingQuestionRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ReleaseNoteDao
  * @extends {ResourceDao}
  **/


var ReleaseNoteDao = exports.ReleaseNoteDao = function (_ResourceDao72) {
  _inherits(ReleaseNoteDao, _ResourceDao72);

  function ReleaseNoteDao(client) {
    _classCallCheck(this, ReleaseNoteDao);

    var _this143 = _possibleConstructorReturn(this, (ReleaseNoteDao.__proto__ || Object.getPrototypeOf(ReleaseNoteDao)).call(this, client, 'release-notes'));

    _this143.relationshipDao = new ReleaseNoteRelationshipDao(client);
    return _this143;
  }

  return ReleaseNoteDao;
}(_clientBase.ResourceDao);

/** @class ReleaseNoteRelationshipDao
 * @extends {RelationshipDao}  **/


var ReleaseNoteRelationshipDao = exports.ReleaseNoteRelationshipDao = function (_RelationshipDao72) {
  _inherits(ReleaseNoteRelationshipDao, _RelationshipDao72);

  function ReleaseNoteRelationshipDao(client) {
    _classCallCheck(this, ReleaseNoteRelationshipDao);

    return _possibleConstructorReturn(this, (ReleaseNoteRelationshipDao.__proto__ || Object.getPrototypeOf(ReleaseNoteRelationshipDao)).call(this, client, 'release-notes'));
  }

  return ReleaseNoteRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantDao
  * @extends {ResourceDao}
  **/


var RestaurantDao = exports.RestaurantDao = function (_ResourceDao73) {
  _inherits(RestaurantDao, _ResourceDao73);

  function RestaurantDao(client) {
    _classCallCheck(this, RestaurantDao);

    var _this145 = _possibleConstructorReturn(this, (RestaurantDao.__proto__ || Object.getPrototypeOf(RestaurantDao)).call(this, client, 'restaurants'));

    _this145.relationshipDao = new RestaurantRelationshipDao(client);
    return _this145;
  }

  return RestaurantDao;
}(_clientBase.ResourceDao);

/** @class RestaurantRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantRelationshipDao = exports.RestaurantRelationshipDao = function (_RelationshipDao73) {
  _inherits(RestaurantRelationshipDao, _RelationshipDao73);

  function RestaurantRelationshipDao(client) {
    _classCallCheck(this, RestaurantRelationshipDao);

    var _this146 = _possibleConstructorReturn(this, (RestaurantRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantRelationshipDao)).call(this, client, 'restaurants'));

    _this146.get = {

      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      billingLocation: function billingLocation(options) {
        return _this146.toOne('billing-location', options);
      },

      /** @method billingContact
       @params {Object} options
       @returns {Promise<Contact>} **/
      billingContact: function billingContact(options) {
        return _this146.toOne('billing-contact', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: function owner(options) {
        return _this146.toOne('owner', options);
      },

      /** @method activeMenu
       @params {Object} options
       @returns {Promise<Menu>} **/
      activeMenu: function activeMenu(options) {
        return _this146.toOne('active-menu', options);
      }
    };

    _this146.index = {

      /** @method admins
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      admins: function admins(options) {
        return _this146.toMany('admins', options);
      },

      /** @method adminContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      adminContacts: function adminContacts(options) {
        return _this146.toMany('admin-contacts', options);
      },

      /** @method allRestaurantVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allRestaurantVersions: function allRestaurantVersions(options) {
        return _this146.toMany('all-restaurant-versions', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this146.toMany('versions', options);
      },

      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      promoCodes: function promoCodes(options) {
        return _this146.toMany('promo-codes', options);
      },

      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: function restaurantConstraints(options) {
        return _this146.toMany('restaurant-constraints', options);
      },

      /** @method rankings
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantRanking>>} **/
      rankings: function rankings(options) {
        return _this146.toMany('rankings', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this146.toMany('orders', options);
      },

      /** @method restaurantCapacityTranches
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantCapacityTranche>>} **/
      restaurantCapacityTranches: function restaurantCapacityTranches(options) {
        return _this146.toMany('restaurant-capacity-tranches', options);
      },

      /** @method serviceTimes
       @params {Object} options
       @returns {Promise<IndexResult<ServiceTime>>} **/
      serviceTimes: function serviceTimes(options) {
        return _this146.toMany('service-times', options);
      },

      /** @method pickupLocations
       @params {Object} options
       @returns {Promise<IndexResult<PickupLocation>>} **/
      pickupLocations: function pickupLocations(options) {
        return _this146.toMany('pickup-locations', options);
      },

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this146.toMany('dietary-tags', options);
      },

      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: function foodTypes(options) {
        return _this146.toMany('food-types', options);
      },

      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: function mealTypes(options) {
        return _this146.toMany('meal-types', options);
      },

      /** @method tags
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      tags: function tags(options) {
        return _this146.toMany('tags', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: function areas(options) {
        return _this146.toMany('areas', options);
      },

      /** @method menus
       @params {Object} options
       @returns {Promise<IndexResult<Menu>>} **/
      menus: function menus(options) {
        return _this146.toMany('menus', options);
      },

      /** @method restaurantVotes
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantVote>>} **/
      restaurantVotes: function restaurantVotes(options) {
        return _this146.toMany('restaurant-votes', options);
      },

      /** @method closures
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantClosure>>} **/
      closures: function closures(options) {
        return _this146.toMany('closures', options);
      }
    };
    return _this146;
  }

  return RestaurantRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantCapacityTrancheDao
  * @extends {ResourceDao}
  **/


var RestaurantCapacityTrancheDao = exports.RestaurantCapacityTrancheDao = function (_ResourceDao74) {
  _inherits(RestaurantCapacityTrancheDao, _ResourceDao74);

  function RestaurantCapacityTrancheDao(client) {
    _classCallCheck(this, RestaurantCapacityTrancheDao);

    var _this147 = _possibleConstructorReturn(this, (RestaurantCapacityTrancheDao.__proto__ || Object.getPrototypeOf(RestaurantCapacityTrancheDao)).call(this, client, 'restaurant-capacity-tranches'));

    _this147.relationshipDao = new RestaurantCapacityTrancheRelationshipDao(client);
    return _this147;
  }

  return RestaurantCapacityTrancheDao;
}(_clientBase.ResourceDao);

/** @class RestaurantCapacityTrancheRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantCapacityTrancheRelationshipDao = exports.RestaurantCapacityTrancheRelationshipDao = function (_RelationshipDao74) {
  _inherits(RestaurantCapacityTrancheRelationshipDao, _RelationshipDao74);

  function RestaurantCapacityTrancheRelationshipDao(client) {
    _classCallCheck(this, RestaurantCapacityTrancheRelationshipDao);

    var _this148 = _possibleConstructorReturn(this, (RestaurantCapacityTrancheRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantCapacityTrancheRelationshipDao)).call(this, client, 'restaurant-capacity-tranches'));

    _this148.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this148.toOne('restaurant', options);
      }
    };

    return _this148;
  }

  return RestaurantCapacityTrancheRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantClosureDao
  * @extends {ResourceDao}
  **/


var RestaurantClosureDao = exports.RestaurantClosureDao = function (_ResourceDao75) {
  _inherits(RestaurantClosureDao, _ResourceDao75);

  function RestaurantClosureDao(client) {
    _classCallCheck(this, RestaurantClosureDao);

    var _this149 = _possibleConstructorReturn(this, (RestaurantClosureDao.__proto__ || Object.getPrototypeOf(RestaurantClosureDao)).call(this, client, 'restaurant-closures'));

    _this149.relationshipDao = new RestaurantClosureRelationshipDao(client);
    return _this149;
  }

  return RestaurantClosureDao;
}(_clientBase.ResourceDao);

/** @class RestaurantClosureRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantClosureRelationshipDao = exports.RestaurantClosureRelationshipDao = function (_RelationshipDao75) {
  _inherits(RestaurantClosureRelationshipDao, _RelationshipDao75);

  function RestaurantClosureRelationshipDao(client) {
    _classCallCheck(this, RestaurantClosureRelationshipDao);

    var _this150 = _possibleConstructorReturn(this, (RestaurantClosureRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantClosureRelationshipDao)).call(this, client, 'restaurant-closures'));

    _this150.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this150.toOne('restaurant', options);
      }
    };

    return _this150;
  }

  return RestaurantClosureRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantDiscountDao
  * @extends {ResourceDao}
  **/


var RestaurantDiscountDao = exports.RestaurantDiscountDao = function (_ResourceDao76) {
  _inherits(RestaurantDiscountDao, _ResourceDao76);

  function RestaurantDiscountDao(client) {
    _classCallCheck(this, RestaurantDiscountDao);

    var _this151 = _possibleConstructorReturn(this, (RestaurantDiscountDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountDao)).call(this, client, 'restaurant-discounts'));

    _this151.relationshipDao = new RestaurantDiscountRelationshipDao(client);
    return _this151;
  }

  return RestaurantDiscountDao;
}(_clientBase.ResourceDao);

/** @class RestaurantDiscountRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantDiscountRelationshipDao = exports.RestaurantDiscountRelationshipDao = function (_RelationshipDao76) {
  _inherits(RestaurantDiscountRelationshipDao, _RelationshipDao76);

  function RestaurantDiscountRelationshipDao(client) {
    _classCallCheck(this, RestaurantDiscountRelationshipDao);

    var _this152 = _possibleConstructorReturn(this, (RestaurantDiscountRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountRelationshipDao)).call(this, client, 'restaurant-discounts'));

    _this152.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this152.toOne('order', options);
      }
    };

    return _this152;
  }

  return RestaurantDiscountRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantOrderInvoiceDao
  * @extends {ResourceDao}
  **/


var RestaurantOrderInvoiceDao = exports.RestaurantOrderInvoiceDao = function (_ResourceDao77) {
  _inherits(RestaurantOrderInvoiceDao, _ResourceDao77);

  function RestaurantOrderInvoiceDao(client) {
    _classCallCheck(this, RestaurantOrderInvoiceDao);

    var _this153 = _possibleConstructorReturn(this, (RestaurantOrderInvoiceDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceDao)).call(this, client, 'restaurant-order-invoices'));

    _this153.relationshipDao = new RestaurantOrderInvoiceRelationshipDao(client);
    return _this153;
  }

  return RestaurantOrderInvoiceDao;
}(_clientBase.ResourceDao);

/** @class RestaurantOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantOrderInvoiceRelationshipDao = exports.RestaurantOrderInvoiceRelationshipDao = function (_RelationshipDao77) {
  _inherits(RestaurantOrderInvoiceRelationshipDao, _RelationshipDao77);

  function RestaurantOrderInvoiceRelationshipDao(client) {
    _classCallCheck(this, RestaurantOrderInvoiceRelationshipDao);

    return _possibleConstructorReturn(this, (RestaurantOrderInvoiceRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceRelationshipDao)).call(this, client, 'restaurant-order-invoices'));
  }

  return RestaurantOrderInvoiceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantRankingDao
  * @extends {ResourceDao}
  **/


var RestaurantRankingDao = exports.RestaurantRankingDao = function (_ResourceDao78) {
  _inherits(RestaurantRankingDao, _ResourceDao78);

  function RestaurantRankingDao(client) {
    _classCallCheck(this, RestaurantRankingDao);

    var _this155 = _possibleConstructorReturn(this, (RestaurantRankingDao.__proto__ || Object.getPrototypeOf(RestaurantRankingDao)).call(this, client, 'restaurant-rankings'));

    _this155.relationshipDao = new RestaurantRankingRelationshipDao(client);
    return _this155;
  }

  return RestaurantRankingDao;
}(_clientBase.ResourceDao);

/** @class RestaurantRankingRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantRankingRelationshipDao = exports.RestaurantRankingRelationshipDao = function (_RelationshipDao78) {
  _inherits(RestaurantRankingRelationshipDao, _RelationshipDao78);

  function RestaurantRankingRelationshipDao(client) {
    _classCallCheck(this, RestaurantRankingRelationshipDao);

    var _this156 = _possibleConstructorReturn(this, (RestaurantRankingRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantRankingRelationshipDao)).call(this, client, 'restaurant-rankings'));

    _this156.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this156.toOne('restaurant', options);
      }
    };

    return _this156;
  }

  return RestaurantRankingRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantVoteDao
  * @extends {ResourceDao}
  **/


var RestaurantVoteDao = exports.RestaurantVoteDao = function (_ResourceDao79) {
  _inherits(RestaurantVoteDao, _ResourceDao79);

  function RestaurantVoteDao(client) {
    _classCallCheck(this, RestaurantVoteDao);

    var _this157 = _possibleConstructorReturn(this, (RestaurantVoteDao.__proto__ || Object.getPrototypeOf(RestaurantVoteDao)).call(this, client, 'restaurant-votes'));

    _this157.relationshipDao = new RestaurantVoteRelationshipDao(client);
    return _this157;
  }

  return RestaurantVoteDao;
}(_clientBase.ResourceDao);

/** @class RestaurantVoteRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantVoteRelationshipDao = exports.RestaurantVoteRelationshipDao = function (_RelationshipDao79) {
  _inherits(RestaurantVoteRelationshipDao, _RelationshipDao79);

  function RestaurantVoteRelationshipDao(client) {
    _classCallCheck(this, RestaurantVoteRelationshipDao);

    var _this158 = _possibleConstructorReturn(this, (RestaurantVoteRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantVoteRelationshipDao)).call(this, client, 'restaurant-votes'));

    _this158.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this158.toOne('order', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this158.toOne('restaurant', options);
      }
    };

    return _this158;
  }

  return RestaurantVoteRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RoleDao
  * @extends {ResourceDao}
  **/


var RoleDao = exports.RoleDao = function (_ResourceDao80) {
  _inherits(RoleDao, _ResourceDao80);

  function RoleDao(client) {
    _classCallCheck(this, RoleDao);

    var _this159 = _possibleConstructorReturn(this, (RoleDao.__proto__ || Object.getPrototypeOf(RoleDao)).call(this, client, 'roles'));

    _this159.relationshipDao = new RoleRelationshipDao(client);
    return _this159;
  }

  return RoleDao;
}(_clientBase.ResourceDao);

/** @class RoleRelationshipDao
 * @extends {RelationshipDao}  **/


var RoleRelationshipDao = exports.RoleRelationshipDao = function (_RelationshipDao80) {
  _inherits(RoleRelationshipDao, _RelationshipDao80);

  function RoleRelationshipDao(client) {
    _classCallCheck(this, RoleRelationshipDao);

    var _this160 = _possibleConstructorReturn(this, (RoleRelationshipDao.__proto__ || Object.getPrototypeOf(RoleRelationshipDao)).call(this, client, 'roles'));

    _this160.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this160.toOne('user', options);
      }
    };

    return _this160;
  }

  return RoleRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class SalesforceCaseDao
  * @extends {ResourceDao}
  **/


var SalesforceCaseDao = exports.SalesforceCaseDao = function (_ResourceDao81) {
  _inherits(SalesforceCaseDao, _ResourceDao81);

  function SalesforceCaseDao(client) {
    _classCallCheck(this, SalesforceCaseDao);

    var _this161 = _possibleConstructorReturn(this, (SalesforceCaseDao.__proto__ || Object.getPrototypeOf(SalesforceCaseDao)).call(this, client, 'salesforce-cases'));

    _this161.relationshipDao = new SalesforceCaseRelationshipDao(client);
    return _this161;
  }

  return SalesforceCaseDao;
}(_clientBase.ResourceDao);

/** @class SalesforceCaseRelationshipDao
 * @extends {RelationshipDao}  **/


var SalesforceCaseRelationshipDao = exports.SalesforceCaseRelationshipDao = function (_RelationshipDao81) {
  _inherits(SalesforceCaseRelationshipDao, _RelationshipDao81);

  function SalesforceCaseRelationshipDao(client) {
    _classCallCheck(this, SalesforceCaseRelationshipDao);

    var _this162 = _possibleConstructorReturn(this, (SalesforceCaseRelationshipDao.__proto__ || Object.getPrototypeOf(SalesforceCaseRelationshipDao)).call(this, client, 'salesforce-cases'));

    _this162.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: function order(options) {
        return _this162.toOne('order', options);
      }
    };

    return _this162;
  }

  return SalesforceCaseRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class SalesforceSyncErrorDao
  * @extends {ResourceDao}
  **/


var SalesforceSyncErrorDao = exports.SalesforceSyncErrorDao = function (_ResourceDao82) {
  _inherits(SalesforceSyncErrorDao, _ResourceDao82);

  function SalesforceSyncErrorDao(client) {
    _classCallCheck(this, SalesforceSyncErrorDao);

    var _this163 = _possibleConstructorReturn(this, (SalesforceSyncErrorDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorDao)).call(this, client, 'salesforce-sync-errors'));

    _this163.relationshipDao = new SalesforceSyncErrorRelationshipDao(client);
    return _this163;
  }

  return SalesforceSyncErrorDao;
}(_clientBase.ResourceDao);

/** @class SalesforceSyncErrorRelationshipDao
 * @extends {RelationshipDao}  **/


var SalesforceSyncErrorRelationshipDao = exports.SalesforceSyncErrorRelationshipDao = function (_RelationshipDao82) {
  _inherits(SalesforceSyncErrorRelationshipDao, _RelationshipDao82);

  function SalesforceSyncErrorRelationshipDao(client) {
    _classCallCheck(this, SalesforceSyncErrorRelationshipDao);

    return _possibleConstructorReturn(this, (SalesforceSyncErrorRelationshipDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorRelationshipDao)).call(this, client, 'salesforce-sync-errors'));
  }

  return SalesforceSyncErrorRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ServiceTimeDao
  * @extends {ResourceDao}
  **/


var ServiceTimeDao = exports.ServiceTimeDao = function (_ResourceDao83) {
  _inherits(ServiceTimeDao, _ResourceDao83);

  function ServiceTimeDao(client) {
    _classCallCheck(this, ServiceTimeDao);

    var _this165 = _possibleConstructorReturn(this, (ServiceTimeDao.__proto__ || Object.getPrototypeOf(ServiceTimeDao)).call(this, client, 'service-times'));

    _this165.relationshipDao = new ServiceTimeRelationshipDao(client);
    return _this165;
  }

  return ServiceTimeDao;
}(_clientBase.ResourceDao);

/** @class ServiceTimeRelationshipDao
 * @extends {RelationshipDao}  **/


var ServiceTimeRelationshipDao = exports.ServiceTimeRelationshipDao = function (_RelationshipDao83) {
  _inherits(ServiceTimeRelationshipDao, _RelationshipDao83);

  function ServiceTimeRelationshipDao(client) {
    _classCallCheck(this, ServiceTimeRelationshipDao);

    var _this166 = _possibleConstructorReturn(this, (ServiceTimeRelationshipDao.__proto__ || Object.getPrototypeOf(ServiceTimeRelationshipDao)).call(this, client, 'service-times'));

    _this166.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this166.toOne('restaurant', options);
      }
    };

    return _this166;
  }

  return ServiceTimeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class SubscriptionPlanDao
  * @extends {ResourceDao}
  **/


var SubscriptionPlanDao = exports.SubscriptionPlanDao = function (_ResourceDao84) {
  _inherits(SubscriptionPlanDao, _ResourceDao84);

  function SubscriptionPlanDao(client) {
    _classCallCheck(this, SubscriptionPlanDao);

    var _this167 = _possibleConstructorReturn(this, (SubscriptionPlanDao.__proto__ || Object.getPrototypeOf(SubscriptionPlanDao)).call(this, client, 'subscription-plans'));

    _this167.relationshipDao = new SubscriptionPlanRelationshipDao(client);
    return _this167;
  }

  return SubscriptionPlanDao;
}(_clientBase.ResourceDao);

/** @class SubscriptionPlanRelationshipDao
 * @extends {RelationshipDao}  **/


var SubscriptionPlanRelationshipDao = exports.SubscriptionPlanRelationshipDao = function (_RelationshipDao84) {
  _inherits(SubscriptionPlanRelationshipDao, _RelationshipDao84);

  function SubscriptionPlanRelationshipDao(client) {
    _classCallCheck(this, SubscriptionPlanRelationshipDao);

    var _this168 = _possibleConstructorReturn(this, (SubscriptionPlanRelationshipDao.__proto__ || Object.getPrototypeOf(SubscriptionPlanRelationshipDao)).call(this, client, 'subscription-plans'));

    _this168.index = {

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: function clients(options) {
        return _this168.toMany('clients', options);
      },

      /** @method featureFlagDescriptions
       @params {Object} options
       @returns {Promise<IndexResult<FeatureFlagDescription>>} **/
      featureFlagDescriptions: function featureFlagDescriptions(options) {
        return _this168.toMany('feature-flag-descriptions', options);
      }
    };
    return _this168;
  }

  return SubscriptionPlanRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class TagDao
  * @extends {ResourceDao}
  **/


var TagDao = exports.TagDao = function (_ResourceDao85) {
  _inherits(TagDao, _ResourceDao85);

  function TagDao(client) {
    _classCallCheck(this, TagDao);

    var _this169 = _possibleConstructorReturn(this, (TagDao.__proto__ || Object.getPrototypeOf(TagDao)).call(this, client, 'tags'));

    _this169.relationshipDao = new TagRelationshipDao(client);
    return _this169;
  }

  return TagDao;
}(_clientBase.ResourceDao);

/** @class TagRelationshipDao
 * @extends {RelationshipDao}  **/


var TagRelationshipDao = exports.TagRelationshipDao = function (_RelationshipDao85) {
  _inherits(TagRelationshipDao, _RelationshipDao85);

  function TagRelationshipDao(client) {
    _classCallCheck(this, TagRelationshipDao);

    return _possibleConstructorReturn(this, (TagRelationshipDao.__proto__ || Object.getPrototypeOf(TagRelationshipDao)).call(this, client, 'tags'));
  }

  return TagRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class TeamDao
  * @extends {ResourceDao}
  **/


var TeamDao = exports.TeamDao = function (_ResourceDao86) {
  _inherits(TeamDao, _ResourceDao86);

  function TeamDao(client) {
    _classCallCheck(this, TeamDao);

    var _this171 = _possibleConstructorReturn(this, (TeamDao.__proto__ || Object.getPrototypeOf(TeamDao)).call(this, client, 'teams'));

    _this171.relationshipDao = new TeamRelationshipDao(client);
    return _this171;
  }

  return TeamDao;
}(_clientBase.ResourceDao);

/** @class TeamRelationshipDao
 * @extends {RelationshipDao}  **/


var TeamRelationshipDao = exports.TeamRelationshipDao = function (_RelationshipDao86) {
  _inherits(TeamRelationshipDao, _RelationshipDao86);

  function TeamRelationshipDao(client) {
    _classCallCheck(this, TeamRelationshipDao);

    var _this172 = _possibleConstructorReturn(this, (TeamRelationshipDao.__proto__ || Object.getPrototypeOf(TeamRelationshipDao)).call(this, client, 'teams'));

    _this172.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this172.toOne('client', options);
      }
    };

    _this172.index = {

      /** @method members
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      members: function members(options) {
        return _this172.toMany('members', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: function orders(options) {
        return _this172.toMany('orders', options);
      },

      /** @method memberProfiles
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningPreferenceProfile>>} **/
      memberProfiles: function memberProfiles(options) {
        return _this172.toMany('member-profiles', options);
      }
    };
    return _this172;
  }

  return TeamRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class UserDao
  * @extends {ResourceDao}
  **/


var UserDao = exports.UserDao = function (_ResourceDao87) {
  _inherits(UserDao, _ResourceDao87);

  function UserDao(client) {
    _classCallCheck(this, UserDao);

    var _this173 = _possibleConstructorReturn(this, (UserDao.__proto__ || Object.getPrototypeOf(UserDao)).call(this, client, 'users'));

    _this173.relationshipDao = new UserRelationshipDao(client);
    return _this173;
  }

  return UserDao;
}(_clientBase.ResourceDao);

/** @class UserRelationshipDao
 * @extends {RelationshipDao}  **/


var UserRelationshipDao = exports.UserRelationshipDao = function (_RelationshipDao87) {
  _inherits(UserRelationshipDao, _RelationshipDao87);

  function UserRelationshipDao(client) {
    _classCallCheck(this, UserRelationshipDao);

    var _this174 = _possibleConstructorReturn(this, (UserRelationshipDao.__proto__ || Object.getPrototypeOf(UserRelationshipDao)).call(this, client, 'users'));

    _this174.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this174.toOne('client', options);
      },

      /** @method communicationPreference
       @params {Object} options
       @returns {Promise<CommunicationPreference>} **/
      communicationPreference: function communicationPreference(options) {
        return _this174.toOne('communication-preference', options);
      },

      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: function preferenceProfile(options) {
        return _this174.toOne('preference-profile', options);
      }
    };

    _this174.index = {

      /** @method driverPings
       @params {Object} options
       @returns {Promise<IndexResult<DriverPing>>} **/
      driverPings: function driverPings(options) {
        return _this174.toMany('driver-pings', options);
      },

      /** @method driverWeeks
       @params {Object} options
       @returns {Promise<IndexResult<DriverWeek>>} **/
      driverWeeks: function driverWeeks(options) {
        return _this174.toMany('driver-weeks', options);
      },

      /** @method driverDays
       @params {Object} options
       @returns {Promise<IndexResult<DriverDay>>} **/
      driverDays: function driverDays(options) {
        return _this174.toMany('driver-days', options);
      },

      /** @method deliveredOrders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      deliveredOrders: function deliveredOrders(options) {
        return _this174.toMany('delivered-orders', options);
      },

      /** @method couriers
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      couriers: function couriers(options) {
        return _this174.toMany('couriers', options);
      },

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: function clients(options) {
        return _this174.toMany('clients', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: function areas(options) {
        return _this174.toMany('areas', options);
      },

      /** @method roles
       @params {Object} options
       @returns {Promise<IndexResult<Role>>} **/
      roles: function roles(options) {
        return _this174.toMany('roles', options);
      },

      /** @method paymentCards
       @params {Object} options
       @returns {Promise<IndexResult<PaymentCard>>} **/
      paymentCards: function paymentCards(options) {
        return _this174.toMany('payment-cards', options);
      },

      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: function teams(options) {
        return _this174.toMany('teams', options);
      },

      /** @method allUserVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allUserVersions: function allUserVersions(options) {
        return _this174.toMany('all-user-versions', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: function versions(options) {
        return _this174.toMany('versions', options);
      },

      /** @method clientOrders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      clientOrders: function clientOrders(options) {
        return _this174.toMany('client-orders', options);
      },

      /** @method events
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningEvent>>} **/
      events: function events(options) {
        return _this174.toMany('events', options);
      }
    };
    return _this174;
  }

  return UserRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class UserFeedbackDao
  * @extends {ResourceDao}
  **/


var UserFeedbackDao = exports.UserFeedbackDao = function (_ResourceDao88) {
  _inherits(UserFeedbackDao, _ResourceDao88);

  function UserFeedbackDao(client) {
    _classCallCheck(this, UserFeedbackDao);

    var _this175 = _possibleConstructorReturn(this, (UserFeedbackDao.__proto__ || Object.getPrototypeOf(UserFeedbackDao)).call(this, client, 'user-feedbacks'));

    _this175.relationshipDao = new UserFeedbackRelationshipDao(client);
    return _this175;
  }

  return UserFeedbackDao;
}(_clientBase.ResourceDao);

/** @class UserFeedbackRelationshipDao
 * @extends {RelationshipDao}  **/


var UserFeedbackRelationshipDao = exports.UserFeedbackRelationshipDao = function (_RelationshipDao88) {
  _inherits(UserFeedbackRelationshipDao, _RelationshipDao88);

  function UserFeedbackRelationshipDao(client) {
    _classCallCheck(this, UserFeedbackRelationshipDao);

    return _possibleConstructorReturn(this, (UserFeedbackRelationshipDao.__proto__ || Object.getPrototypeOf(UserFeedbackRelationshipDao)).call(this, client, 'user-feedbacks'));
  }

  return UserFeedbackRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class UserInviteDao
  * @extends {ResourceDao}
  **/


var UserInviteDao = exports.UserInviteDao = function (_ResourceDao89) {
  _inherits(UserInviteDao, _ResourceDao89);

  function UserInviteDao(client) {
    _classCallCheck(this, UserInviteDao);

    var _this177 = _possibleConstructorReturn(this, (UserInviteDao.__proto__ || Object.getPrototypeOf(UserInviteDao)).call(this, client, 'user-invites'));

    _this177.relationshipDao = new UserInviteRelationshipDao(client);
    return _this177;
  }

  return UserInviteDao;
}(_clientBase.ResourceDao);

/** @class UserInviteRelationshipDao
 * @extends {RelationshipDao}  **/


var UserInviteRelationshipDao = exports.UserInviteRelationshipDao = function (_RelationshipDao89) {
  _inherits(UserInviteRelationshipDao, _RelationshipDao89);

  function UserInviteRelationshipDao(client) {
    _classCallCheck(this, UserInviteRelationshipDao);

    var _this178 = _possibleConstructorReturn(this, (UserInviteRelationshipDao.__proto__ || Object.getPrototypeOf(UserInviteRelationshipDao)).call(this, client, 'user-invites'));

    _this178.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: function client(options) {
        return _this178.toOne('client', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: function restaurant(options) {
        return _this178.toOne('restaurant', options);
      },

      /** @method team
       @params {Object} options
       @returns {Promise<Team>} **/
      team: function team(options) {
        return _this178.toOne('team', options);
      },

      /** @method courier
       @params {Object} options
       @returns {Promise<Courier>} **/
      courier: function courier(options) {
        return _this178.toOne('courier', options);
      },

      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: function user(options) {
        return _this178.toOne('user', options);
      }
    };

    return _this178;
  }

  return UserInviteRelationshipDao;
}(_clientBase.RelationshipDao);