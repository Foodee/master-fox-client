'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionRelationshipDao = exports.VersionDao = exports.UserInviteRelationshipDao = exports.UserInviteDao = undefined;
exports.UserFeedbackRelationshipDao = exports.UserFeedbackDao = exports.UserRelationshipDao = exports.UserDao = exports.TagRelationshipDao = exports.TagDao = exports.ServiceTimeRelationshipDao = exports.ServiceTimeDao = exports.SalesforceSyncErrorRelationshipDao = exports.SalesforceSyncErrorDao = exports.RoleRelationshipDao = exports.RoleDao = exports.RestaurantOrderInvoiceRelationshipDao = exports.RestaurantOrderInvoiceDao = exports.RestaurantDiscountRelationshipDao = exports.RestaurantDiscountDao = exports.RestaurantClosureRelationshipDao = exports.RestaurantClosureDao = exports.RestaurantRelationshipDao = exports.RestaurantDao = exports.QualifyingQuestionRelationshipDao = exports.QualifyingQuestionDao = exports.PromoCodeRelationshipDao = exports.PromoCodeDao = exports.PickupLocationRelationshipDao = exports.PickupLocationDao = exports.PaymentCardRelationshipDao = exports.PaymentCardDao = exports.PaymentAccountRelationshipDao = exports.PaymentAccountDao = exports.OrderItemRelationshipDao = exports.OrderItemDao = exports.OrderRelationshipDao = exports.OrderDao = exports.MenuOptionItemRelationshipDao = exports.MenuOptionItemDao = exports.MenuOptionGroupRelationshipDao = exports.MenuOptionGroupDao = exports.MenuItemRelationshipDao = exports.MenuItemDao = exports.MenuGroupRelationshipDao = exports.MenuGroupDao = exports.MenuRelationshipDao = exports.MenuDao = exports.MealPlanRelationshipDao = exports.MealPlanDao = exports.LocationRelationshipDao = exports.LocationDao = exports.InvoicingTaxRateRelationshipDao = exports.InvoicingTaxRateDao = exports.InvoiceRelationshipDao = exports.InvoiceDao = exports.GroupOrderMemberRelationshipDao = exports.GroupOrderMemberDao = exports.GiftbitGiftRelationshipDao = exports.GiftbitGiftDao = exports.GiftbitErrorRelationshipDao = exports.GiftbitErrorDao = exports.GiftbitCardRelationshipDao = exports.GiftbitCardDao = exports.EventRelationshipDao = exports.EventDao = exports.EmailMessageRelationshipDao = exports.EmailMessageDao = exports.DriverWeekRelationshipDao = exports.DriverWeekDao = exports.DriverPingRelationshipDao = exports.DriverPingDao = exports.DriverDayRelationshipDao = exports.DriverDayDao = exports.DiscountCodeRelationshipDao = exports.DiscountCodeDao = exports.DietaryTagRelationshipDao = exports.DietaryTagDao = exports.DeskCaseRelationshipDao = exports.DeskCaseDao = exports.DeliveryLocationRelationshipDao = exports.DeliveryLocationDao = exports.DeliveryCaseRelationshipDao = exports.DeliveryCaseDao = exports.CourierRelationshipDao = exports.CourierDao = exports.ContactRelationshipDao = exports.ContactDao = exports.CompanyRelationshipDao = exports.CompanyDao = exports.ClientSignupRelationshipDao = exports.ClientSignupDao = exports.ClientOrderInvoiceRelationshipDao = exports.ClientOrderInvoiceDao = exports.ClientDiscountRelationshipDao = exports.ClientDiscountDao = exports.ClientRelationshipDao = exports.ClientDao = exports.AreaClosureRelationshipDao = exports.AreaClosureDao = exports.AreaRelationshipDao = exports.AreaDao = exports.AppConfigurationRelationshipDao = exports.AppConfigurationDao = undefined;

var _clientBase = require('../client-base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @class AppConfigurationDao
  * @extends {ResourceDao}
  **/
var AppConfigurationDao = exports.AppConfigurationDao = function (_ResourceDao) {
  _inherits(AppConfigurationDao, _ResourceDao);

  function AppConfigurationDao(client) {
    _classCallCheck(this, AppConfigurationDao);

    var _this = _possibleConstructorReturn(this, (AppConfigurationDao.__proto__ || Object.getPrototypeOf(AppConfigurationDao)).call(this, client, 'app-configurations'));

    _this.relationshipDao = new AppConfigurationRelationshipDao(client, 'app-configurations');
    return _this;
  }

  return AppConfigurationDao;
}(_clientBase.ResourceDao);

/** @class AppConfigurationRelationshipDao
 * @extends {RelationshipDao}  **/


var AppConfigurationRelationshipDao = exports.AppConfigurationRelationshipDao = function (_RelationshipDao) {
  _inherits(AppConfigurationRelationshipDao, _RelationshipDao);

  function AppConfigurationRelationshipDao(client) {
    _classCallCheck(this, AppConfigurationRelationshipDao);

    var _this2 = _possibleConstructorReturn(this, (AppConfigurationRelationshipDao.__proto__ || Object.getPrototypeOf(AppConfigurationRelationshipDao)).call(this, client, 'app-configurations'));

    _this2.index = {

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<AppConfiguration>>} **/
      versions: function versions(options) {
        return _this2.toMany('versions', options);
      }
    };
    return _this2;
  }

  return AppConfigurationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AreaDao
  * @extends {ResourceDao}
  **/


var AreaDao = exports.AreaDao = function (_ResourceDao2) {
  _inherits(AreaDao, _ResourceDao2);

  function AreaDao(client) {
    _classCallCheck(this, AreaDao);

    var _this3 = _possibleConstructorReturn(this, (AreaDao.__proto__ || Object.getPrototypeOf(AreaDao)).call(this, client, 'areas'));

    _this3.relationshipDao = new AreaRelationshipDao(client, 'areas');
    return _this3;
  }

  return AreaDao;
}(_clientBase.ResourceDao);

/** @class AreaRelationshipDao
 * @extends {RelationshipDao}  **/


var AreaRelationshipDao = exports.AreaRelationshipDao = function (_RelationshipDao2) {
  _inherits(AreaRelationshipDao, _RelationshipDao2);

  function AreaRelationshipDao(client) {
    _classCallCheck(this, AreaRelationshipDao);

    var _this4 = _possibleConstructorReturn(this, (AreaRelationshipDao.__proto__ || Object.getPrototypeOf(AreaRelationshipDao)).call(this, client, 'areas'));

    _this4.get = {

      /** @method deliveryFeeTaxRate
       @params {Object} options
       @returns {Promise<Area>} **/
      deliveryFeeTaxRate: function deliveryFeeTaxRate(options) {
        return _this4.toOne('delivery-fee-tax-rate', options);
      }
    };

    _this4.index = {

      /** @method couriers
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      couriers: function couriers(options) {
        return _this4.toMany('couriers', options);
      },

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      clients: function clients(options) {
        return _this4.toMany('clients', options);
      },

      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      restaurants: function restaurants(options) {
        return _this4.toMany('restaurants', options);
      },

      /** @method invoicingTaxRates
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      invoicingTaxRates: function invoicingTaxRates(options) {
        return _this4.toMany('invoicing-tax-rates', options);
      },

      /** @method globalInvoicingTaxRates
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      globalInvoicingTaxRates: function globalInvoicingTaxRates(options) {
        return _this4.toMany('global-invoicing-tax-rates', options);
      },

      /** @method areaClosures
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areaClosures: function areaClosures(options) {
        return _this4.toMany('area-closures', options);
      },

      /** @method currentAreaClosures
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      currentAreaClosures: function currentAreaClosures(options) {
        return _this4.toMany('current-area-closures', options);
      },

      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      promoCodes: function promoCodes(options) {
        return _this4.toMany('promo-codes', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      versions: function versions(options) {
        return _this4.toMany('versions', options);
      }
    };
    return _this4;
  }

  return AreaRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class AreaClosureDao
  * @extends {ResourceDao}
  **/


var AreaClosureDao = exports.AreaClosureDao = function (_ResourceDao3) {
  _inherits(AreaClosureDao, _ResourceDao3);

  function AreaClosureDao(client) {
    _classCallCheck(this, AreaClosureDao);

    var _this5 = _possibleConstructorReturn(this, (AreaClosureDao.__proto__ || Object.getPrototypeOf(AreaClosureDao)).call(this, client, 'area-closures'));

    _this5.relationshipDao = new AreaClosureRelationshipDao(client, 'area-closures');
    return _this5;
  }

  return AreaClosureDao;
}(_clientBase.ResourceDao);

/** @class AreaClosureRelationshipDao
 * @extends {RelationshipDao}  **/


var AreaClosureRelationshipDao = exports.AreaClosureRelationshipDao = function (_RelationshipDao3) {
  _inherits(AreaClosureRelationshipDao, _RelationshipDao3);

  function AreaClosureRelationshipDao(client) {
    _classCallCheck(this, AreaClosureRelationshipDao);

    var _this6 = _possibleConstructorReturn(this, (AreaClosureRelationshipDao.__proto__ || Object.getPrototypeOf(AreaClosureRelationshipDao)).call(this, client, 'area-closures'));

    _this6.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<AreaClosure>} **/
      area: function area(options) {
        return _this6.toOne('area', options);
      }
    };

    return _this6;
  }

  return AreaClosureRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientDao
  * @extends {ResourceDao}
  **/


var ClientDao = exports.ClientDao = function (_ResourceDao4) {
  _inherits(ClientDao, _ResourceDao4);

  function ClientDao(client) {
    _classCallCheck(this, ClientDao);

    var _this7 = _possibleConstructorReturn(this, (ClientDao.__proto__ || Object.getPrototypeOf(ClientDao)).call(this, client, 'clients'));

    _this7.relationshipDao = new ClientRelationshipDao(client, 'clients');
    return _this7;
  }

  return ClientDao;
}(_clientBase.ResourceDao);

/** @class ClientRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientRelationshipDao = exports.ClientRelationshipDao = function (_RelationshipDao4) {
  _inherits(ClientRelationshipDao, _RelationshipDao4);

  function ClientRelationshipDao(client) {
    _classCallCheck(this, ClientRelationshipDao);

    var _this8 = _possibleConstructorReturn(this, (ClientRelationshipDao.__proto__ || Object.getPrototypeOf(ClientRelationshipDao)).call(this, client, 'clients'));

    _this8.get = {

      /** @method defaultArea
       @params {Object} options
       @returns {Promise<Client>} **/
      defaultArea: function defaultArea(options) {
        return _this8.toOne('default-area', options);
      },

      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Client>} **/
      billingLocation: function billingLocation(options) {
        return _this8.toOne('billing-location', options);
      },

      /** @method accountManager
       @params {Object} options
       @returns {Promise<Client>} **/
      accountManager: function accountManager(options) {
        return _this8.toOne('account-manager', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<Client>} **/
      owner: function owner(options) {
        return _this8.toOne('owner', options);
      },

      /** @method company
       @params {Object} options
       @returns {Promise<Client>} **/
      company: function company(options) {
        return _this8.toOne('company', options);
      },

      /** @method mealPlan
       @params {Object} options
       @returns {Promise<Client>} **/
      mealPlan: function mealPlan(options) {
        return _this8.toOne('meal-plan', options);
      },

      /** @method taxRate
       @params {Object} options
       @returns {Promise<Client>} **/
      taxRate: function taxRate(options) {
        return _this8.toOne('tax-rate', options);
      },

      /** @method giftbitCard
       @params {Object} options
       @returns {Promise<Client>} **/
      giftbitCard: function giftbitCard(options) {
        return _this8.toOne('giftbit-card', options);
      }
    };

    _this8.index = {

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      areas: function areas(options) {
        return _this8.toMany('areas', options);
      },

      /** @method deliveryLocations
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      deliveryLocations: function deliveryLocations(options) {
        return _this8.toMany('delivery-locations', options);
      },

      /** @method adminContacts
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      adminContacts: function adminContacts(options) {
        return _this8.toMany('admin-contacts', options);
      },

      /** @method admins
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      admins: function admins(options) {
        return _this8.toMany('admins', options);
      },

      /** @method orderContacts
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      orderContacts: function orderContacts(options) {
        return _this8.toMany('order-contacts', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      orders: function orders(options) {
        return _this8.toMany('orders', options);
      },

      /** @method paymentCards
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      paymentCards: function paymentCards(options) {
        return _this8.toMany('payment-cards', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      versions: function versions(options) {
        return _this8.toMany('versions', options);
      },

      /** @method giftbitGifts
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      giftbitGifts: function giftbitGifts(options) {
        return _this8.toMany('giftbit-gifts', options);
      },

      /** @method giftbitErrors
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      giftbitErrors: function giftbitErrors(options) {
        return _this8.toMany('giftbit-errors', options);
      }
    };
    return _this8;
  }

  return ClientRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientDiscountDao
  * @extends {ResourceDao}
  **/


var ClientDiscountDao = exports.ClientDiscountDao = function (_ResourceDao5) {
  _inherits(ClientDiscountDao, _ResourceDao5);

  function ClientDiscountDao(client) {
    _classCallCheck(this, ClientDiscountDao);

    var _this9 = _possibleConstructorReturn(this, (ClientDiscountDao.__proto__ || Object.getPrototypeOf(ClientDiscountDao)).call(this, client, 'client-discounts'));

    _this9.relationshipDao = new ClientDiscountRelationshipDao(client, 'client-discounts');
    return _this9;
  }

  return ClientDiscountDao;
}(_clientBase.ResourceDao);

/** @class ClientDiscountRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientDiscountRelationshipDao = exports.ClientDiscountRelationshipDao = function (_RelationshipDao5) {
  _inherits(ClientDiscountRelationshipDao, _RelationshipDao5);

  function ClientDiscountRelationshipDao(client) {
    _classCallCheck(this, ClientDiscountRelationshipDao);

    var _this10 = _possibleConstructorReturn(this, (ClientDiscountRelationshipDao.__proto__ || Object.getPrototypeOf(ClientDiscountRelationshipDao)).call(this, client, 'client-discounts'));

    _this10.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<ClientDiscount>} **/
      order: function order(options) {
        return _this10.toOne('order', options);
      }
    };

    return _this10;
  }

  return ClientDiscountRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientOrderInvoiceDao
  * @extends {ResourceDao}
  **/


var ClientOrderInvoiceDao = exports.ClientOrderInvoiceDao = function (_ResourceDao6) {
  _inherits(ClientOrderInvoiceDao, _ResourceDao6);

  function ClientOrderInvoiceDao(client) {
    _classCallCheck(this, ClientOrderInvoiceDao);

    var _this11 = _possibleConstructorReturn(this, (ClientOrderInvoiceDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceDao)).call(this, client, 'client-order-invoices'));

    _this11.relationshipDao = new ClientOrderInvoiceRelationshipDao(client, 'client-order-invoices');
    return _this11;
  }

  return ClientOrderInvoiceDao;
}(_clientBase.ResourceDao);

/** @class ClientOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientOrderInvoiceRelationshipDao = exports.ClientOrderInvoiceRelationshipDao = function (_RelationshipDao6) {
  _inherits(ClientOrderInvoiceRelationshipDao, _RelationshipDao6);

  function ClientOrderInvoiceRelationshipDao(client) {
    _classCallCheck(this, ClientOrderInvoiceRelationshipDao);

    return _possibleConstructorReturn(this, (ClientOrderInvoiceRelationshipDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceRelationshipDao)).call(this, client, 'client-order-invoices'));
  }

  return ClientOrderInvoiceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ClientSignupDao
  * @extends {ResourceDao}
  **/


var ClientSignupDao = exports.ClientSignupDao = function (_ResourceDao7) {
  _inherits(ClientSignupDao, _ResourceDao7);

  function ClientSignupDao(client) {
    _classCallCheck(this, ClientSignupDao);

    var _this13 = _possibleConstructorReturn(this, (ClientSignupDao.__proto__ || Object.getPrototypeOf(ClientSignupDao)).call(this, client, 'client-signups'));

    _this13.relationshipDao = new ClientSignupRelationshipDao(client, 'client-signups');
    return _this13;
  }

  return ClientSignupDao;
}(_clientBase.ResourceDao);

/** @class ClientSignupRelationshipDao
 * @extends {RelationshipDao}  **/


var ClientSignupRelationshipDao = exports.ClientSignupRelationshipDao = function (_RelationshipDao7) {
  _inherits(ClientSignupRelationshipDao, _RelationshipDao7);

  function ClientSignupRelationshipDao(client) {
    _classCallCheck(this, ClientSignupRelationshipDao);

    var _this14 = _possibleConstructorReturn(this, (ClientSignupRelationshipDao.__proto__ || Object.getPrototypeOf(ClientSignupRelationshipDao)).call(this, client, 'client-signups'));

    _this14.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      user: function user(options) {
        return _this14.toOne('user', options);
      },

      /** @method qualifyingQuestion
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      qualifyingQuestion: function qualifyingQuestion(options) {
        return _this14.toOne('qualifying-question', options);
      },

      /** @method billingLocation
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      billingLocation: function billingLocation(options) {
        return _this14.toOne('billing-location', options);
      },

      /** @method deliveryLocation
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      deliveryLocation: function deliveryLocation(options) {
        return _this14.toOne('delivery-location', options);
      },

      /** @method billingContact
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      billingContact: function billingContact(options) {
        return _this14.toOne('billing-contact', options);
      },

      /** @method contact
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      contact: function contact(options) {
        return _this14.toOne('contact', options);
      }
    };

    _this14.index = {

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<ClientSignup>>} **/
      clients: function clients(options) {
        return _this14.toMany('clients', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<ClientSignup>>} **/
      areas: function areas(options) {
        return _this14.toMany('areas', options);
      }
    };
    return _this14;
  }

  return ClientSignupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CompanyDao
  * @extends {ResourceDao}
  **/


var CompanyDao = exports.CompanyDao = function (_ResourceDao8) {
  _inherits(CompanyDao, _ResourceDao8);

  function CompanyDao(client) {
    _classCallCheck(this, CompanyDao);

    var _this15 = _possibleConstructorReturn(this, (CompanyDao.__proto__ || Object.getPrototypeOf(CompanyDao)).call(this, client, 'companies'));

    _this15.relationshipDao = new CompanyRelationshipDao(client, 'companies');
    return _this15;
  }

  return CompanyDao;
}(_clientBase.ResourceDao);

/** @class CompanyRelationshipDao
 * @extends {RelationshipDao}  **/


var CompanyRelationshipDao = exports.CompanyRelationshipDao = function (_RelationshipDao8) {
  _inherits(CompanyRelationshipDao, _RelationshipDao8);

  function CompanyRelationshipDao(client) {
    _classCallCheck(this, CompanyRelationshipDao);

    var _this16 = _possibleConstructorReturn(this, (CompanyRelationshipDao.__proto__ || Object.getPrototypeOf(CompanyRelationshipDao)).call(this, client, 'companies'));

    _this16.index = {

      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Company>>} **/
      clients: function clients(options) {
        return _this16.toMany('clients', options);
      }
    };
    return _this16;
  }

  return CompanyRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ContactDao
  * @extends {ResourceDao}
  **/


var ContactDao = exports.ContactDao = function (_ResourceDao9) {
  _inherits(ContactDao, _ResourceDao9);

  function ContactDao(client) {
    _classCallCheck(this, ContactDao);

    var _this17 = _possibleConstructorReturn(this, (ContactDao.__proto__ || Object.getPrototypeOf(ContactDao)).call(this, client, 'contacts'));

    _this17.relationshipDao = new ContactRelationshipDao(client, 'contacts');
    return _this17;
  }

  return ContactDao;
}(_clientBase.ResourceDao);

/** @class ContactRelationshipDao
 * @extends {RelationshipDao}  **/


var ContactRelationshipDao = exports.ContactRelationshipDao = function (_RelationshipDao9) {
  _inherits(ContactRelationshipDao, _RelationshipDao9);

  function ContactRelationshipDao(client) {
    _classCallCheck(this, ContactRelationshipDao);

    return _possibleConstructorReturn(this, (ContactRelationshipDao.__proto__ || Object.getPrototypeOf(ContactRelationshipDao)).call(this, client, 'contacts'));
  }

  return ContactRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class CourierDao
  * @extends {ResourceDao}
  **/


var CourierDao = exports.CourierDao = function (_ResourceDao10) {
  _inherits(CourierDao, _ResourceDao10);

  function CourierDao(client) {
    _classCallCheck(this, CourierDao);

    var _this19 = _possibleConstructorReturn(this, (CourierDao.__proto__ || Object.getPrototypeOf(CourierDao)).call(this, client, 'couriers'));

    _this19.relationshipDao = new CourierRelationshipDao(client, 'couriers');
    return _this19;
  }

  return CourierDao;
}(_clientBase.ResourceDao);

/** @class CourierRelationshipDao
 * @extends {RelationshipDao}  **/


var CourierRelationshipDao = exports.CourierRelationshipDao = function (_RelationshipDao10) {
  _inherits(CourierRelationshipDao, _RelationshipDao10);

  function CourierRelationshipDao(client) {
    _classCallCheck(this, CourierRelationshipDao);

    var _this20 = _possibleConstructorReturn(this, (CourierRelationshipDao.__proto__ || Object.getPrototypeOf(CourierRelationshipDao)).call(this, client, 'couriers'));

    _this20.get = {

      /** @method owner
       @params {Object} options
       @returns {Promise<Courier>} **/
      owner: function owner(options) {
        return _this20.toOne('owner', options);
      }
    };

    _this20.index = {

      /** @method drivers
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      drivers: function drivers(options) {
        return _this20.toMany('drivers', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      areas: function areas(options) {
        return _this20.toMany('areas', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      versions: function versions(options) {
        return _this20.toMany('versions', options);
      }
    };
    return _this20;
  }

  return CourierRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DeliveryCaseDao
  * @extends {ResourceDao}
  **/


var DeliveryCaseDao = exports.DeliveryCaseDao = function (_ResourceDao11) {
  _inherits(DeliveryCaseDao, _ResourceDao11);

  function DeliveryCaseDao(client) {
    _classCallCheck(this, DeliveryCaseDao);

    var _this21 = _possibleConstructorReturn(this, (DeliveryCaseDao.__proto__ || Object.getPrototypeOf(DeliveryCaseDao)).call(this, client, 'delivery-cases'));

    _this21.relationshipDao = new DeliveryCaseRelationshipDao(client, 'delivery-cases');
    return _this21;
  }

  return DeliveryCaseDao;
}(_clientBase.ResourceDao);

/** @class DeliveryCaseRelationshipDao
 * @extends {RelationshipDao}  **/


var DeliveryCaseRelationshipDao = exports.DeliveryCaseRelationshipDao = function (_RelationshipDao11) {
  _inherits(DeliveryCaseRelationshipDao, _RelationshipDao11);

  function DeliveryCaseRelationshipDao(client) {
    _classCallCheck(this, DeliveryCaseRelationshipDao);

    var _this22 = _possibleConstructorReturn(this, (DeliveryCaseRelationshipDao.__proto__ || Object.getPrototypeOf(DeliveryCaseRelationshipDao)).call(this, client, 'delivery-cases'));

    _this22.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<DeliveryCase>} **/
      user: function user(options) {
        return _this22.toOne('user', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<DeliveryCase>} **/
      order: function order(options) {
        return _this22.toOne('order', options);
      }
    };

    return _this22;
  }

  return DeliveryCaseRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DeliveryLocationDao
  * @extends {ResourceDao}
  **/


var DeliveryLocationDao = exports.DeliveryLocationDao = function (_ResourceDao12) {
  _inherits(DeliveryLocationDao, _ResourceDao12);

  function DeliveryLocationDao(client) {
    _classCallCheck(this, DeliveryLocationDao);

    var _this23 = _possibleConstructorReturn(this, (DeliveryLocationDao.__proto__ || Object.getPrototypeOf(DeliveryLocationDao)).call(this, client, 'delivery-locations'));

    _this23.relationshipDao = new DeliveryLocationRelationshipDao(client, 'delivery-locations');
    return _this23;
  }

  return DeliveryLocationDao;
}(_clientBase.ResourceDao);

/** @class DeliveryLocationRelationshipDao
 * @extends {RelationshipDao}  **/


var DeliveryLocationRelationshipDao = exports.DeliveryLocationRelationshipDao = function (_RelationshipDao12) {
  _inherits(DeliveryLocationRelationshipDao, _RelationshipDao12);

  function DeliveryLocationRelationshipDao(client) {
    _classCallCheck(this, DeliveryLocationRelationshipDao);

    var _this24 = _possibleConstructorReturn(this, (DeliveryLocationRelationshipDao.__proto__ || Object.getPrototypeOf(DeliveryLocationRelationshipDao)).call(this, client, 'delivery-locations'));

    _this24.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<DeliveryLocation>} **/
      client: function client(options) {
        return _this24.toOne('client', options);
      },

      /** @method location
       @params {Object} options
       @returns {Promise<DeliveryLocation>} **/
      location: function location(options) {
        return _this24.toOne('location', options);
      }
    };

    return _this24;
  }

  return DeliveryLocationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DeskCaseDao
  * @extends {ResourceDao}
  **/


var DeskCaseDao = exports.DeskCaseDao = function (_ResourceDao13) {
  _inherits(DeskCaseDao, _ResourceDao13);

  function DeskCaseDao(client) {
    _classCallCheck(this, DeskCaseDao);

    var _this25 = _possibleConstructorReturn(this, (DeskCaseDao.__proto__ || Object.getPrototypeOf(DeskCaseDao)).call(this, client, 'desk-cases'));

    _this25.relationshipDao = new DeskCaseRelationshipDao(client, 'desk-cases');
    return _this25;
  }

  return DeskCaseDao;
}(_clientBase.ResourceDao);

/** @class DeskCaseRelationshipDao
 * @extends {RelationshipDao}  **/


var DeskCaseRelationshipDao = exports.DeskCaseRelationshipDao = function (_RelationshipDao13) {
  _inherits(DeskCaseRelationshipDao, _RelationshipDao13);

  function DeskCaseRelationshipDao(client) {
    _classCallCheck(this, DeskCaseRelationshipDao);

    var _this26 = _possibleConstructorReturn(this, (DeskCaseRelationshipDao.__proto__ || Object.getPrototypeOf(DeskCaseRelationshipDao)).call(this, client, 'desk-cases'));

    _this26.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<DeskCase>} **/
      user: function user(options) {
        return _this26.toOne('user', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<DeskCase>} **/
      order: function order(options) {
        return _this26.toOne('order', options);
      }
    };

    return _this26;
  }

  return DeskCaseRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DietaryTagDao
  * @extends {ResourceDao}
  **/


var DietaryTagDao = exports.DietaryTagDao = function (_ResourceDao14) {
  _inherits(DietaryTagDao, _ResourceDao14);

  function DietaryTagDao(client) {
    _classCallCheck(this, DietaryTagDao);

    var _this27 = _possibleConstructorReturn(this, (DietaryTagDao.__proto__ || Object.getPrototypeOf(DietaryTagDao)).call(this, client, 'dietary-tags'));

    _this27.relationshipDao = new DietaryTagRelationshipDao(client, 'dietary-tags');
    return _this27;
  }

  return DietaryTagDao;
}(_clientBase.ResourceDao);

/** @class DietaryTagRelationshipDao
 * @extends {RelationshipDao}  **/


var DietaryTagRelationshipDao = exports.DietaryTagRelationshipDao = function (_RelationshipDao14) {
  _inherits(DietaryTagRelationshipDao, _RelationshipDao14);

  function DietaryTagRelationshipDao(client) {
    _classCallCheck(this, DietaryTagRelationshipDao);

    var _this28 = _possibleConstructorReturn(this, (DietaryTagRelationshipDao.__proto__ || Object.getPrototypeOf(DietaryTagRelationshipDao)).call(this, client, 'dietary-tags'));

    _this28.index = {

      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      menuOptionItems: function menuOptionItems(options) {
        return _this28.toMany('menu-option-items', options);
      }
    };
    return _this28;
  }

  return DietaryTagRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DiscountCodeDao
  * @extends {ResourceDao}
  **/


var DiscountCodeDao = exports.DiscountCodeDao = function (_ResourceDao15) {
  _inherits(DiscountCodeDao, _ResourceDao15);

  function DiscountCodeDao(client) {
    _classCallCheck(this, DiscountCodeDao);

    var _this29 = _possibleConstructorReturn(this, (DiscountCodeDao.__proto__ || Object.getPrototypeOf(DiscountCodeDao)).call(this, client, 'discount-codes'));

    _this29.relationshipDao = new DiscountCodeRelationshipDao(client, 'discount-codes');
    return _this29;
  }

  return DiscountCodeDao;
}(_clientBase.ResourceDao);

/** @class DiscountCodeRelationshipDao
 * @extends {RelationshipDao}  **/


var DiscountCodeRelationshipDao = exports.DiscountCodeRelationshipDao = function (_RelationshipDao15) {
  _inherits(DiscountCodeRelationshipDao, _RelationshipDao15);

  function DiscountCodeRelationshipDao(client) {
    _classCallCheck(this, DiscountCodeRelationshipDao);

    return _possibleConstructorReturn(this, (DiscountCodeRelationshipDao.__proto__ || Object.getPrototypeOf(DiscountCodeRelationshipDao)).call(this, client, 'discount-codes'));
  }

  return DiscountCodeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverDayDao
  * @extends {ResourceDao}
  **/


var DriverDayDao = exports.DriverDayDao = function (_ResourceDao16) {
  _inherits(DriverDayDao, _ResourceDao16);

  function DriverDayDao(client) {
    _classCallCheck(this, DriverDayDao);

    var _this31 = _possibleConstructorReturn(this, (DriverDayDao.__proto__ || Object.getPrototypeOf(DriverDayDao)).call(this, client, 'driver-days'));

    _this31.relationshipDao = new DriverDayRelationshipDao(client, 'driver-days');
    return _this31;
  }

  return DriverDayDao;
}(_clientBase.ResourceDao);

/** @class DriverDayRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverDayRelationshipDao = exports.DriverDayRelationshipDao = function (_RelationshipDao16) {
  _inherits(DriverDayRelationshipDao, _RelationshipDao16);

  function DriverDayRelationshipDao(client) {
    _classCallCheck(this, DriverDayRelationshipDao);

    var _this32 = _possibleConstructorReturn(this, (DriverDayRelationshipDao.__proto__ || Object.getPrototypeOf(DriverDayRelationshipDao)).call(this, client, 'driver-days'));

    _this32.get = {

      /** @method driver
       @params {Object} options
       @returns {Promise<DriverDay>} **/
      driver: function driver(options) {
        return _this32.toOne('driver', options);
      }
    };

    return _this32;
  }

  return DriverDayRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverPingDao
  * @extends {ResourceDao}
  **/


var DriverPingDao = exports.DriverPingDao = function (_ResourceDao17) {
  _inherits(DriverPingDao, _ResourceDao17);

  function DriverPingDao(client) {
    _classCallCheck(this, DriverPingDao);

    var _this33 = _possibleConstructorReturn(this, (DriverPingDao.__proto__ || Object.getPrototypeOf(DriverPingDao)).call(this, client, 'driver-pings'));

    _this33.relationshipDao = new DriverPingRelationshipDao(client, 'driver-pings');
    return _this33;
  }

  return DriverPingDao;
}(_clientBase.ResourceDao);

/** @class DriverPingRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverPingRelationshipDao = exports.DriverPingRelationshipDao = function (_RelationshipDao17) {
  _inherits(DriverPingRelationshipDao, _RelationshipDao17);

  function DriverPingRelationshipDao(client) {
    _classCallCheck(this, DriverPingRelationshipDao);

    var _this34 = _possibleConstructorReturn(this, (DriverPingRelationshipDao.__proto__ || Object.getPrototypeOf(DriverPingRelationshipDao)).call(this, client, 'driver-pings'));

    _this34.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<DriverPing>} **/
      user: function user(options) {
        return _this34.toOne('user', options);
      }
    };

    return _this34;
  }

  return DriverPingRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class DriverWeekDao
  * @extends {ResourceDao}
  **/


var DriverWeekDao = exports.DriverWeekDao = function (_ResourceDao18) {
  _inherits(DriverWeekDao, _ResourceDao18);

  function DriverWeekDao(client) {
    _classCallCheck(this, DriverWeekDao);

    var _this35 = _possibleConstructorReturn(this, (DriverWeekDao.__proto__ || Object.getPrototypeOf(DriverWeekDao)).call(this, client, 'driver-weeks'));

    _this35.relationshipDao = new DriverWeekRelationshipDao(client, 'driver-weeks');
    return _this35;
  }

  return DriverWeekDao;
}(_clientBase.ResourceDao);

/** @class DriverWeekRelationshipDao
 * @extends {RelationshipDao}  **/


var DriverWeekRelationshipDao = exports.DriverWeekRelationshipDao = function (_RelationshipDao18) {
  _inherits(DriverWeekRelationshipDao, _RelationshipDao18);

  function DriverWeekRelationshipDao(client) {
    _classCallCheck(this, DriverWeekRelationshipDao);

    var _this36 = _possibleConstructorReturn(this, (DriverWeekRelationshipDao.__proto__ || Object.getPrototypeOf(DriverWeekRelationshipDao)).call(this, client, 'driver-weeks'));

    _this36.get = {

      /** @method driver
       @params {Object} options
       @returns {Promise<DriverWeek>} **/
      driver: function driver(options) {
        return _this36.toOne('driver', options);
      }
    };

    return _this36;
  }

  return DriverWeekRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class EmailMessageDao
  * @extends {ResourceDao}
  **/


var EmailMessageDao = exports.EmailMessageDao = function (_ResourceDao19) {
  _inherits(EmailMessageDao, _ResourceDao19);

  function EmailMessageDao(client) {
    _classCallCheck(this, EmailMessageDao);

    var _this37 = _possibleConstructorReturn(this, (EmailMessageDao.__proto__ || Object.getPrototypeOf(EmailMessageDao)).call(this, client, 'email-messages'));

    _this37.relationshipDao = new EmailMessageRelationshipDao(client, 'email-messages');
    return _this37;
  }

  return EmailMessageDao;
}(_clientBase.ResourceDao);

/** @class EmailMessageRelationshipDao
 * @extends {RelationshipDao}  **/


var EmailMessageRelationshipDao = exports.EmailMessageRelationshipDao = function (_RelationshipDao19) {
  _inherits(EmailMessageRelationshipDao, _RelationshipDao19);

  function EmailMessageRelationshipDao(client) {
    _classCallCheck(this, EmailMessageRelationshipDao);

    var _this38 = _possibleConstructorReturn(this, (EmailMessageRelationshipDao.__proto__ || Object.getPrototypeOf(EmailMessageRelationshipDao)).call(this, client, 'email-messages'));

    _this38.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<EmailMessage>} **/
      order: function order(options) {
        return _this38.toOne('order', options);
      }
    };

    return _this38;
  }

  return EmailMessageRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class EventDao
  * @extends {ResourceDao}
  **/


var EventDao = exports.EventDao = function (_ResourceDao20) {
  _inherits(EventDao, _ResourceDao20);

  function EventDao(client) {
    _classCallCheck(this, EventDao);

    var _this39 = _possibleConstructorReturn(this, (EventDao.__proto__ || Object.getPrototypeOf(EventDao)).call(this, client, 'events'));

    _this39.relationshipDao = new EventRelationshipDao(client, 'events');
    return _this39;
  }

  return EventDao;
}(_clientBase.ResourceDao);

/** @class EventRelationshipDao
 * @extends {RelationshipDao}  **/


var EventRelationshipDao = exports.EventRelationshipDao = function (_RelationshipDao20) {
  _inherits(EventRelationshipDao, _RelationshipDao20);

  function EventRelationshipDao(client) {
    _classCallCheck(this, EventRelationshipDao);

    return _possibleConstructorReturn(this, (EventRelationshipDao.__proto__ || Object.getPrototypeOf(EventRelationshipDao)).call(this, client, 'events'));
  }

  return EventRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GiftbitCardDao
  * @extends {ResourceDao}
  **/


var GiftbitCardDao = exports.GiftbitCardDao = function (_ResourceDao21) {
  _inherits(GiftbitCardDao, _ResourceDao21);

  function GiftbitCardDao(client) {
    _classCallCheck(this, GiftbitCardDao);

    var _this41 = _possibleConstructorReturn(this, (GiftbitCardDao.__proto__ || Object.getPrototypeOf(GiftbitCardDao)).call(this, client, 'giftbit-cards'));

    _this41.relationshipDao = new GiftbitCardRelationshipDao(client, 'giftbit-cards');
    return _this41;
  }

  return GiftbitCardDao;
}(_clientBase.ResourceDao);

/** @class GiftbitCardRelationshipDao
 * @extends {RelationshipDao}  **/


var GiftbitCardRelationshipDao = exports.GiftbitCardRelationshipDao = function (_RelationshipDao21) {
  _inherits(GiftbitCardRelationshipDao, _RelationshipDao21);

  function GiftbitCardRelationshipDao(client) {
    _classCallCheck(this, GiftbitCardRelationshipDao);

    return _possibleConstructorReturn(this, (GiftbitCardRelationshipDao.__proto__ || Object.getPrototypeOf(GiftbitCardRelationshipDao)).call(this, client, 'giftbit-cards'));
  }

  return GiftbitCardRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GiftbitErrorDao
  * @extends {ResourceDao}
  **/


var GiftbitErrorDao = exports.GiftbitErrorDao = function (_ResourceDao22) {
  _inherits(GiftbitErrorDao, _ResourceDao22);

  function GiftbitErrorDao(client) {
    _classCallCheck(this, GiftbitErrorDao);

    var _this43 = _possibleConstructorReturn(this, (GiftbitErrorDao.__proto__ || Object.getPrototypeOf(GiftbitErrorDao)).call(this, client, 'giftbit-errors'));

    _this43.relationshipDao = new GiftbitErrorRelationshipDao(client, 'giftbit-errors');
    return _this43;
  }

  return GiftbitErrorDao;
}(_clientBase.ResourceDao);

/** @class GiftbitErrorRelationshipDao
 * @extends {RelationshipDao}  **/


var GiftbitErrorRelationshipDao = exports.GiftbitErrorRelationshipDao = function (_RelationshipDao22) {
  _inherits(GiftbitErrorRelationshipDao, _RelationshipDao22);

  function GiftbitErrorRelationshipDao(client) {
    _classCallCheck(this, GiftbitErrorRelationshipDao);

    var _this44 = _possibleConstructorReturn(this, (GiftbitErrorRelationshipDao.__proto__ || Object.getPrototypeOf(GiftbitErrorRelationshipDao)).call(this, client, 'giftbit-errors'));

    _this44.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<GiftbitError>} **/
      order: function order(options) {
        return _this44.toOne('order', options);
      }
    };

    return _this44;
  }

  return GiftbitErrorRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GiftbitGiftDao
  * @extends {ResourceDao}
  **/


var GiftbitGiftDao = exports.GiftbitGiftDao = function (_ResourceDao23) {
  _inherits(GiftbitGiftDao, _ResourceDao23);

  function GiftbitGiftDao(client) {
    _classCallCheck(this, GiftbitGiftDao);

    var _this45 = _possibleConstructorReturn(this, (GiftbitGiftDao.__proto__ || Object.getPrototypeOf(GiftbitGiftDao)).call(this, client, 'giftbit-gifts'));

    _this45.relationshipDao = new GiftbitGiftRelationshipDao(client, 'giftbit-gifts');
    return _this45;
  }

  return GiftbitGiftDao;
}(_clientBase.ResourceDao);

/** @class GiftbitGiftRelationshipDao
 * @extends {RelationshipDao}  **/


var GiftbitGiftRelationshipDao = exports.GiftbitGiftRelationshipDao = function (_RelationshipDao23) {
  _inherits(GiftbitGiftRelationshipDao, _RelationshipDao23);

  function GiftbitGiftRelationshipDao(client) {
    _classCallCheck(this, GiftbitGiftRelationshipDao);

    return _possibleConstructorReturn(this, (GiftbitGiftRelationshipDao.__proto__ || Object.getPrototypeOf(GiftbitGiftRelationshipDao)).call(this, client, 'giftbit-gifts'));
  }

  return GiftbitGiftRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class GroupOrderMemberDao
  * @extends {ResourceDao}
  **/


var GroupOrderMemberDao = exports.GroupOrderMemberDao = function (_ResourceDao24) {
  _inherits(GroupOrderMemberDao, _ResourceDao24);

  function GroupOrderMemberDao(client) {
    _classCallCheck(this, GroupOrderMemberDao);

    var _this47 = _possibleConstructorReturn(this, (GroupOrderMemberDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberDao)).call(this, client, 'group-order-members'));

    _this47.relationshipDao = new GroupOrderMemberRelationshipDao(client, 'group-order-members');
    return _this47;
  }

  return GroupOrderMemberDao;
}(_clientBase.ResourceDao);

/** @class GroupOrderMemberRelationshipDao
 * @extends {RelationshipDao}  **/


var GroupOrderMemberRelationshipDao = exports.GroupOrderMemberRelationshipDao = function (_RelationshipDao24) {
  _inherits(GroupOrderMemberRelationshipDao, _RelationshipDao24);

  function GroupOrderMemberRelationshipDao(client) {
    _classCallCheck(this, GroupOrderMemberRelationshipDao);

    var _this48 = _possibleConstructorReturn(this, (GroupOrderMemberRelationshipDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberRelationshipDao)).call(this, client, 'group-order-members'));

    _this48.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<GroupOrderMember>} **/
      user: function user(options) {
        return _this48.toOne('user', options);
      },

      /** @method order
       @params {Object} options
       @returns {Promise<GroupOrderMember>} **/
      order: function order(options) {
        return _this48.toOne('order', options);
      }
    };

    _this48.index = {

      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<GroupOrderMember>>} **/
      orderItems: function orderItems(options) {
        return _this48.toMany('order-items', options);
      }
    };
    return _this48;
  }

  return GroupOrderMemberRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class InvoiceDao
  * @extends {ResourceDao}
  **/


var InvoiceDao = exports.InvoiceDao = function (_ResourceDao25) {
  _inherits(InvoiceDao, _ResourceDao25);

  function InvoiceDao(client) {
    _classCallCheck(this, InvoiceDao);

    var _this49 = _possibleConstructorReturn(this, (InvoiceDao.__proto__ || Object.getPrototypeOf(InvoiceDao)).call(this, client, 'invoices'));

    _this49.relationshipDao = new InvoiceRelationshipDao(client, 'invoices');
    return _this49;
  }

  return InvoiceDao;
}(_clientBase.ResourceDao);

/** @class InvoiceRelationshipDao
 * @extends {RelationshipDao}  **/


var InvoiceRelationshipDao = exports.InvoiceRelationshipDao = function (_RelationshipDao25) {
  _inherits(InvoiceRelationshipDao, _RelationshipDao25);

  function InvoiceRelationshipDao(client) {
    _classCallCheck(this, InvoiceRelationshipDao);

    return _possibleConstructorReturn(this, (InvoiceRelationshipDao.__proto__ || Object.getPrototypeOf(InvoiceRelationshipDao)).call(this, client, 'invoices'));
  }

  return InvoiceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class InvoicingTaxRateDao
  * @extends {ResourceDao}
  **/


var InvoicingTaxRateDao = exports.InvoicingTaxRateDao = function (_ResourceDao26) {
  _inherits(InvoicingTaxRateDao, _ResourceDao26);

  function InvoicingTaxRateDao(client) {
    _classCallCheck(this, InvoicingTaxRateDao);

    var _this51 = _possibleConstructorReturn(this, (InvoicingTaxRateDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateDao)).call(this, client, 'invoicing-tax-rates'));

    _this51.relationshipDao = new InvoicingTaxRateRelationshipDao(client, 'invoicing-tax-rates');
    return _this51;
  }

  return InvoicingTaxRateDao;
}(_clientBase.ResourceDao);

/** @class InvoicingTaxRateRelationshipDao
 * @extends {RelationshipDao}  **/


var InvoicingTaxRateRelationshipDao = exports.InvoicingTaxRateRelationshipDao = function (_RelationshipDao26) {
  _inherits(InvoicingTaxRateRelationshipDao, _RelationshipDao26);

  function InvoicingTaxRateRelationshipDao(client) {
    _classCallCheck(this, InvoicingTaxRateRelationshipDao);

    var _this52 = _possibleConstructorReturn(this, (InvoicingTaxRateRelationshipDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateRelationshipDao)).call(this, client, 'invoicing-tax-rates'));

    _this52.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      area: function area(options) {
        return _this52.toOne('area', options);
      }
    };

    return _this52;
  }

  return InvoicingTaxRateRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class LocationDao
  * @extends {ResourceDao}
  **/


var LocationDao = exports.LocationDao = function (_ResourceDao27) {
  _inherits(LocationDao, _ResourceDao27);

  function LocationDao(client) {
    _classCallCheck(this, LocationDao);

    var _this53 = _possibleConstructorReturn(this, (LocationDao.__proto__ || Object.getPrototypeOf(LocationDao)).call(this, client, 'locations'));

    _this53.relationshipDao = new LocationRelationshipDao(client, 'locations');
    return _this53;
  }

  return LocationDao;
}(_clientBase.ResourceDao);

/** @class LocationRelationshipDao
 * @extends {RelationshipDao}  **/


var LocationRelationshipDao = exports.LocationRelationshipDao = function (_RelationshipDao27) {
  _inherits(LocationRelationshipDao, _RelationshipDao27);

  function LocationRelationshipDao(client) {
    _classCallCheck(this, LocationRelationshipDao);

    var _this54 = _possibleConstructorReturn(this, (LocationRelationshipDao.__proto__ || Object.getPrototypeOf(LocationRelationshipDao)).call(this, client, 'locations'));

    _this54.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Location>} **/
      area: function area(options) {
        return _this54.toOne('area', options);
      }
    };

    return _this54;
  }

  return LocationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MealPlanDao
  * @extends {ResourceDao}
  **/


var MealPlanDao = exports.MealPlanDao = function (_ResourceDao28) {
  _inherits(MealPlanDao, _ResourceDao28);

  function MealPlanDao(client) {
    _classCallCheck(this, MealPlanDao);

    var _this55 = _possibleConstructorReturn(this, (MealPlanDao.__proto__ || Object.getPrototypeOf(MealPlanDao)).call(this, client, 'meal-plans'));

    _this55.relationshipDao = new MealPlanRelationshipDao(client, 'meal-plans');
    return _this55;
  }

  return MealPlanDao;
}(_clientBase.ResourceDao);

/** @class MealPlanRelationshipDao
 * @extends {RelationshipDao}  **/


var MealPlanRelationshipDao = exports.MealPlanRelationshipDao = function (_RelationshipDao28) {
  _inherits(MealPlanRelationshipDao, _RelationshipDao28);

  function MealPlanRelationshipDao(client) {
    _classCallCheck(this, MealPlanRelationshipDao);

    var _this56 = _possibleConstructorReturn(this, (MealPlanRelationshipDao.__proto__ || Object.getPrototypeOf(MealPlanRelationshipDao)).call(this, client, 'meal-plans'));

    _this56.get = {

      /** @method mealPlanUser
       @params {Object} options
       @returns {Promise<MealPlan>} **/
      mealPlanUser: function mealPlanUser(options) {
        return _this56.toOne('meal-plan-user', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<MealPlan>} **/
      client: function client(options) {
        return _this56.toOne('client', options);
      }
    };

    _this56.index = {

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<MealPlan>>} **/
      orders: function orders(options) {
        return _this56.toMany('orders', options);
      }
    };
    return _this56;
  }

  return MealPlanRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuDao
  * @extends {ResourceDao}
  **/


var MenuDao = exports.MenuDao = function (_ResourceDao29) {
  _inherits(MenuDao, _ResourceDao29);

  function MenuDao(client) {
    _classCallCheck(this, MenuDao);

    var _this57 = _possibleConstructorReturn(this, (MenuDao.__proto__ || Object.getPrototypeOf(MenuDao)).call(this, client, 'menus'));

    _this57.relationshipDao = new MenuRelationshipDao(client, 'menus');
    return _this57;
  }

  return MenuDao;
}(_clientBase.ResourceDao);

/** @class MenuRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuRelationshipDao = exports.MenuRelationshipDao = function (_RelationshipDao29) {
  _inherits(MenuRelationshipDao, _RelationshipDao29);

  function MenuRelationshipDao(client) {
    _classCallCheck(this, MenuRelationshipDao);

    var _this58 = _possibleConstructorReturn(this, (MenuRelationshipDao.__proto__ || Object.getPrototypeOf(MenuRelationshipDao)).call(this, client, 'menus'));

    _this58.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Menu>} **/
      area: function area(options) {
        return _this58.toOne('area', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Menu>} **/
      restaurant: function restaurant(options) {
        return _this58.toOne('restaurant', options);
      }
    };

    _this58.index = {

      /** @method menuGroups
       @params {Object} options
       @returns {Promise<IndexResult<Menu>>} **/
      menuGroups: function menuGroups(options) {
        return _this58.toMany('menu-groups', options);
      },

      /** @method menuItems
       @params {Object} options
       @returns {Promise<IndexResult<Menu>>} **/
      menuItems: function menuItems(options) {
        return _this58.toMany('menu-items', options);
      },

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<Menu>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this58.toMany('dietary-tags', options);
      },

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Menu>>} **/
      orders: function orders(options) {
        return _this58.toMany('orders', options);
      }
    };
    return _this58;
  }

  return MenuRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuGroupDao
  * @extends {ResourceDao}
  **/


var MenuGroupDao = exports.MenuGroupDao = function (_ResourceDao30) {
  _inherits(MenuGroupDao, _ResourceDao30);

  function MenuGroupDao(client) {
    _classCallCheck(this, MenuGroupDao);

    var _this59 = _possibleConstructorReturn(this, (MenuGroupDao.__proto__ || Object.getPrototypeOf(MenuGroupDao)).call(this, client, 'menu-groups'));

    _this59.relationshipDao = new MenuGroupRelationshipDao(client, 'menu-groups');
    return _this59;
  }

  return MenuGroupDao;
}(_clientBase.ResourceDao);

/** @class MenuGroupRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuGroupRelationshipDao = exports.MenuGroupRelationshipDao = function (_RelationshipDao30) {
  _inherits(MenuGroupRelationshipDao, _RelationshipDao30);

  function MenuGroupRelationshipDao(client) {
    _classCallCheck(this, MenuGroupRelationshipDao);

    var _this60 = _possibleConstructorReturn(this, (MenuGroupRelationshipDao.__proto__ || Object.getPrototypeOf(MenuGroupRelationshipDao)).call(this, client, 'menu-groups'));

    _this60.get = {

      /** @method menu
       @params {Object} options
       @returns {Promise<MenuGroup>} **/
      menu: function menu(options) {
        return _this60.toOne('menu', options);
      }
    };

    _this60.index = {

      /** @method menuItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuGroup>>} **/
      menuItems: function menuItems(options) {
        return _this60.toMany('menu-items', options);
      }
    };
    return _this60;
  }

  return MenuGroupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuItemDao
  * @extends {ResourceDao}
  **/


var MenuItemDao = exports.MenuItemDao = function (_ResourceDao31) {
  _inherits(MenuItemDao, _ResourceDao31);

  function MenuItemDao(client) {
    _classCallCheck(this, MenuItemDao);

    var _this61 = _possibleConstructorReturn(this, (MenuItemDao.__proto__ || Object.getPrototypeOf(MenuItemDao)).call(this, client, 'menu-items'));

    _this61.relationshipDao = new MenuItemRelationshipDao(client, 'menu-items');
    return _this61;
  }

  return MenuItemDao;
}(_clientBase.ResourceDao);

/** @class MenuItemRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuItemRelationshipDao = exports.MenuItemRelationshipDao = function (_RelationshipDao31) {
  _inherits(MenuItemRelationshipDao, _RelationshipDao31);

  function MenuItemRelationshipDao(client) {
    _classCallCheck(this, MenuItemRelationshipDao);

    var _this62 = _possibleConstructorReturn(this, (MenuItemRelationshipDao.__proto__ || Object.getPrototypeOf(MenuItemRelationshipDao)).call(this, client, 'menu-items'));

    _this62.get = {

      /** @method taxRate
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      taxRate: function taxRate(options) {
        return _this62.toOne('tax-rate', options);
      },

      /** @method menuGroup
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      menuGroup: function menuGroup(options) {
        return _this62.toOne('menu-group', options);
      }
    };

    _this62.index = {

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<MenuItem>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this62.toMany('dietary-tags', options);
      },

      /** @method menuOptionGroups
       @params {Object} options
       @returns {Promise<IndexResult<MenuItem>>} **/
      menuOptionGroups: function menuOptionGroups(options) {
        return _this62.toMany('menu-option-groups', options);
      }
    };
    return _this62;
  }

  return MenuItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuOptionGroupDao
  * @extends {ResourceDao}
  **/


var MenuOptionGroupDao = exports.MenuOptionGroupDao = function (_ResourceDao32) {
  _inherits(MenuOptionGroupDao, _ResourceDao32);

  function MenuOptionGroupDao(client) {
    _classCallCheck(this, MenuOptionGroupDao);

    var _this63 = _possibleConstructorReturn(this, (MenuOptionGroupDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupDao)).call(this, client, 'menu-option-groups'));

    _this63.relationshipDao = new MenuOptionGroupRelationshipDao(client, 'menu-option-groups');
    return _this63;
  }

  return MenuOptionGroupDao;
}(_clientBase.ResourceDao);

/** @class MenuOptionGroupRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuOptionGroupRelationshipDao = exports.MenuOptionGroupRelationshipDao = function (_RelationshipDao32) {
  _inherits(MenuOptionGroupRelationshipDao, _RelationshipDao32);

  function MenuOptionGroupRelationshipDao(client) {
    _classCallCheck(this, MenuOptionGroupRelationshipDao);

    var _this64 = _possibleConstructorReturn(this, (MenuOptionGroupRelationshipDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupRelationshipDao)).call(this, client, 'menu-option-groups'));

    _this64.get = {

      /** @method menuItem
       @params {Object} options
       @returns {Promise<MenuOptionGroup>} **/
      menuItem: function menuItem(options) {
        return _this64.toOne('menu-item', options);
      }
    };

    _this64.index = {

      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionGroup>>} **/
      menuOptionItems: function menuOptionItems(options) {
        return _this64.toMany('menu-option-items', options);
      }
    };
    return _this64;
  }

  return MenuOptionGroupRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class MenuOptionItemDao
  * @extends {ResourceDao}
  **/


var MenuOptionItemDao = exports.MenuOptionItemDao = function (_ResourceDao33) {
  _inherits(MenuOptionItemDao, _ResourceDao33);

  function MenuOptionItemDao(client) {
    _classCallCheck(this, MenuOptionItemDao);

    var _this65 = _possibleConstructorReturn(this, (MenuOptionItemDao.__proto__ || Object.getPrototypeOf(MenuOptionItemDao)).call(this, client, 'menu-option-items'));

    _this65.relationshipDao = new MenuOptionItemRelationshipDao(client, 'menu-option-items');
    return _this65;
  }

  return MenuOptionItemDao;
}(_clientBase.ResourceDao);

/** @class MenuOptionItemRelationshipDao
 * @extends {RelationshipDao}  **/


var MenuOptionItemRelationshipDao = exports.MenuOptionItemRelationshipDao = function (_RelationshipDao33) {
  _inherits(MenuOptionItemRelationshipDao, _RelationshipDao33);

  function MenuOptionItemRelationshipDao(client) {
    _classCallCheck(this, MenuOptionItemRelationshipDao);

    var _this66 = _possibleConstructorReturn(this, (MenuOptionItemRelationshipDao.__proto__ || Object.getPrototypeOf(MenuOptionItemRelationshipDao)).call(this, client, 'menu-option-items'));

    _this66.get = {

      /** @method menuOptionGroup
       @params {Object} options
       @returns {Promise<MenuOptionItem>} **/
      menuOptionGroup: function menuOptionGroup(options) {
        return _this66.toOne('menu-option-group', options);
      }
    };

    _this66.index = {

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this66.toMany('dietary-tags', options);
      },

      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      orderItems: function orderItems(options) {
        return _this66.toMany('order-items', options);
      }
    };
    return _this66;
  }

  return MenuOptionItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class OrderDao
  * @extends {ResourceDao}
  **/


var OrderDao = exports.OrderDao = function (_ResourceDao34) {
  _inherits(OrderDao, _ResourceDao34);

  function OrderDao(client) {
    _classCallCheck(this, OrderDao);

    var _this67 = _possibleConstructorReturn(this, (OrderDao.__proto__ || Object.getPrototypeOf(OrderDao)).call(this, client, 'orders'));

    _this67.relationshipDao = new OrderRelationshipDao(client, 'orders');
    return _this67;
  }

  return OrderDao;
}(_clientBase.ResourceDao);

/** @class OrderRelationshipDao
 * @extends {RelationshipDao}  **/


var OrderRelationshipDao = exports.OrderRelationshipDao = function (_RelationshipDao34) {
  _inherits(OrderRelationshipDao, _RelationshipDao34);

  function OrderRelationshipDao(client) {
    _classCallCheck(this, OrderRelationshipDao);

    var _this68 = _possibleConstructorReturn(this, (OrderRelationshipDao.__proto__ || Object.getPrototypeOf(OrderRelationshipDao)).call(this, client, 'orders'));

    _this68.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<Order>} **/
      area: function area(options) {
        return _this68.toOne('area', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<Order>} **/
      owner: function owner(options) {
        return _this68.toOne('owner', options);
      },

      /** @method creator
       @params {Object} options
       @returns {Promise<Order>} **/
      creator: function creator(options) {
        return _this68.toOne('creator', options);
      },

      /** @method paymentCard
       @params {Object} options
       @returns {Promise<Order>} **/
      paymentCard: function paymentCard(options) {
        return _this68.toOne('payment-card', options);
      },

      /** @method contact
       @params {Object} options
       @returns {Promise<Order>} **/
      contact: function contact(options) {
        return _this68.toOne('contact', options);
      },

      /** @method client
       @params {Object} options
       @returns {Promise<Order>} **/
      client: function client(options) {
        return _this68.toOne('client', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurant: function restaurant(options) {
        return _this68.toOne('restaurant', options);
      },

      /** @method courier
       @params {Object} options
       @returns {Promise<Order>} **/
      courier: function courier(options) {
        return _this68.toOne('courier', options);
      },

      /** @method promoCode
       @params {Object} options
       @returns {Promise<Order>} **/
      promoCode: function promoCode(options) {
        return _this68.toOne('promo-code', options);
      },

      /** @method driver
       @params {Object} options
       @returns {Promise<Order>} **/
      driver: function driver(options) {
        return _this68.toOne('driver', options);
      },

      /** @method restaurantLocation
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurantLocation: function restaurantLocation(options) {
        return _this68.toOne('restaurant-location', options);
      },

      /** @method clientLocation
       @params {Object} options
       @returns {Promise<Order>} **/
      clientLocation: function clientLocation(options) {
        return _this68.toOne('client-location', options);
      },

      /** @method clientDiscount
       @params {Object} options
       @returns {Promise<Order>} **/
      clientDiscount: function clientDiscount(options) {
        return _this68.toOne('client-discount', options);
      },

      /** @method restaurantDiscount
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurantDiscount: function restaurantDiscount(options) {
        return _this68.toOne('restaurant-discount', options);
      },

      /** @method menu
       @params {Object} options
       @returns {Promise<Order>} **/
      menu: function menu(options) {
        return _this68.toOne('menu', options);
      },

      /** @method customLocation
       @params {Object} options
       @returns {Promise<Order>} **/
      customLocation: function customLocation(options) {
        return _this68.toOne('custom-location', options);
      },

      /** @method giftbitError
       @params {Object} options
       @returns {Promise<Order>} **/
      giftbitError: function giftbitError(options) {
        return _this68.toOne('giftbit-error', options);
      },

      /** @method clientOrderInvoice
       @params {Object} options
       @returns {Promise<Order>} **/
      clientOrderInvoice: function clientOrderInvoice(options) {
        return _this68.toOne('client-order-invoice', options);
      },

      /** @method restaurantOrderInvoice
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurantOrderInvoice: function restaurantOrderInvoice(options) {
        return _this68.toOne('restaurant-order-invoice', options);
      }
    };

    _this68.index = {

      /** @method emailMessages
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      emailMessages: function emailMessages(options) {
        return _this68.toMany('email-messages', options);
      },

      /** @method deliveryCases
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      deliveryCases: function deliveryCases(options) {
        return _this68.toMany('delivery-cases', options);
      },

      /** @method deskCases
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      deskCases: function deskCases(options) {
        return _this68.toMany('desk-cases', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      versions: function versions(options) {
        return _this68.toMany('versions', options);
      },

      /** @method groupOrderMembers
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      groupOrderMembers: function groupOrderMembers(options) {
        return _this68.toMany('group-order-members', options);
      },

      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orderItems: function orderItems(options) {
        return _this68.toMany('order-items', options);
      }
    };
    return _this68;
  }

  return OrderRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class OrderItemDao
  * @extends {ResourceDao}
  **/


var OrderItemDao = exports.OrderItemDao = function (_ResourceDao35) {
  _inherits(OrderItemDao, _ResourceDao35);

  function OrderItemDao(client) {
    _classCallCheck(this, OrderItemDao);

    var _this69 = _possibleConstructorReturn(this, (OrderItemDao.__proto__ || Object.getPrototypeOf(OrderItemDao)).call(this, client, 'order-items'));

    _this69.relationshipDao = new OrderItemRelationshipDao(client, 'order-items');
    return _this69;
  }

  return OrderItemDao;
}(_clientBase.ResourceDao);

/** @class OrderItemRelationshipDao
 * @extends {RelationshipDao}  **/


var OrderItemRelationshipDao = exports.OrderItemRelationshipDao = function (_RelationshipDao35) {
  _inherits(OrderItemRelationshipDao, _RelationshipDao35);

  function OrderItemRelationshipDao(client) {
    _classCallCheck(this, OrderItemRelationshipDao);

    var _this70 = _possibleConstructorReturn(this, (OrderItemRelationshipDao.__proto__ || Object.getPrototypeOf(OrderItemRelationshipDao)).call(this, client, 'order-items'));

    _this70.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<OrderItem>} **/
      order: function order(options) {
        return _this70.toOne('order', options);
      },

      /** @method menuItem
       @params {Object} options
       @returns {Promise<OrderItem>} **/
      menuItem: function menuItem(options) {
        return _this70.toOne('menu-item', options);
      },

      /** @method groupOrderMember
       @params {Object} options
       @returns {Promise<OrderItem>} **/
      groupOrderMember: function groupOrderMember(options) {
        return _this70.toOne('group-order-member', options);
      }
    };

    _this70.index = {

      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      menuOptionItems: function menuOptionItems(options) {
        return _this70.toMany('menu-option-items', options);
      }
    };
    return _this70;
  }

  return OrderItemRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PaymentAccountDao
  * @extends {ResourceDao}
  **/


var PaymentAccountDao = exports.PaymentAccountDao = function (_ResourceDao36) {
  _inherits(PaymentAccountDao, _ResourceDao36);

  function PaymentAccountDao(client) {
    _classCallCheck(this, PaymentAccountDao);

    var _this71 = _possibleConstructorReturn(this, (PaymentAccountDao.__proto__ || Object.getPrototypeOf(PaymentAccountDao)).call(this, client, 'payment-accounts'));

    _this71.relationshipDao = new PaymentAccountRelationshipDao(client, 'payment-accounts');
    return _this71;
  }

  return PaymentAccountDao;
}(_clientBase.ResourceDao);

/** @class PaymentAccountRelationshipDao
 * @extends {RelationshipDao}  **/


var PaymentAccountRelationshipDao = exports.PaymentAccountRelationshipDao = function (_RelationshipDao36) {
  _inherits(PaymentAccountRelationshipDao, _RelationshipDao36);

  function PaymentAccountRelationshipDao(client) {
    _classCallCheck(this, PaymentAccountRelationshipDao);

    return _possibleConstructorReturn(this, (PaymentAccountRelationshipDao.__proto__ || Object.getPrototypeOf(PaymentAccountRelationshipDao)).call(this, client, 'payment-accounts'));
  }

  return PaymentAccountRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PaymentCardDao
  * @extends {ResourceDao}
  **/


var PaymentCardDao = exports.PaymentCardDao = function (_ResourceDao37) {
  _inherits(PaymentCardDao, _ResourceDao37);

  function PaymentCardDao(client) {
    _classCallCheck(this, PaymentCardDao);

    var _this73 = _possibleConstructorReturn(this, (PaymentCardDao.__proto__ || Object.getPrototypeOf(PaymentCardDao)).call(this, client, 'payment-cards'));

    _this73.relationshipDao = new PaymentCardRelationshipDao(client, 'payment-cards');
    return _this73;
  }

  return PaymentCardDao;
}(_clientBase.ResourceDao);

/** @class PaymentCardRelationshipDao
 * @extends {RelationshipDao}  **/


var PaymentCardRelationshipDao = exports.PaymentCardRelationshipDao = function (_RelationshipDao37) {
  _inherits(PaymentCardRelationshipDao, _RelationshipDao37);

  function PaymentCardRelationshipDao(client) {
    _classCallCheck(this, PaymentCardRelationshipDao);

    var _this74 = _possibleConstructorReturn(this, (PaymentCardRelationshipDao.__proto__ || Object.getPrototypeOf(PaymentCardRelationshipDao)).call(this, client, 'payment-cards'));

    _this74.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      client: function client(options) {
        return _this74.toOne('client', options);
      },

      /** @method user
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      user: function user(options) {
        return _this74.toOne('user', options);
      }
    };

    return _this74;
  }

  return PaymentCardRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PickupLocationDao
  * @extends {ResourceDao}
  **/


var PickupLocationDao = exports.PickupLocationDao = function (_ResourceDao38) {
  _inherits(PickupLocationDao, _ResourceDao38);

  function PickupLocationDao(client) {
    _classCallCheck(this, PickupLocationDao);

    var _this75 = _possibleConstructorReturn(this, (PickupLocationDao.__proto__ || Object.getPrototypeOf(PickupLocationDao)).call(this, client, 'pickup-locations'));

    _this75.relationshipDao = new PickupLocationRelationshipDao(client, 'pickup-locations');
    return _this75;
  }

  return PickupLocationDao;
}(_clientBase.ResourceDao);

/** @class PickupLocationRelationshipDao
 * @extends {RelationshipDao}  **/


var PickupLocationRelationshipDao = exports.PickupLocationRelationshipDao = function (_RelationshipDao38) {
  _inherits(PickupLocationRelationshipDao, _RelationshipDao38);

  function PickupLocationRelationshipDao(client) {
    _classCallCheck(this, PickupLocationRelationshipDao);

    var _this76 = _possibleConstructorReturn(this, (PickupLocationRelationshipDao.__proto__ || Object.getPrototypeOf(PickupLocationRelationshipDao)).call(this, client, 'pickup-locations'));

    _this76.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<PickupLocation>} **/
      restaurant: function restaurant(options) {
        return _this76.toOne('restaurant', options);
      },

      /** @method location
       @params {Object} options
       @returns {Promise<PickupLocation>} **/
      location: function location(options) {
        return _this76.toOne('location', options);
      }
    };

    return _this76;
  }

  return PickupLocationRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class PromoCodeDao
  * @extends {ResourceDao}
  **/


var PromoCodeDao = exports.PromoCodeDao = function (_ResourceDao39) {
  _inherits(PromoCodeDao, _ResourceDao39);

  function PromoCodeDao(client) {
    _classCallCheck(this, PromoCodeDao);

    var _this77 = _possibleConstructorReturn(this, (PromoCodeDao.__proto__ || Object.getPrototypeOf(PromoCodeDao)).call(this, client, 'promo-codes'));

    _this77.relationshipDao = new PromoCodeRelationshipDao(client, 'promo-codes');
    return _this77;
  }

  return PromoCodeDao;
}(_clientBase.ResourceDao);

/** @class PromoCodeRelationshipDao
 * @extends {RelationshipDao}  **/


var PromoCodeRelationshipDao = exports.PromoCodeRelationshipDao = function (_RelationshipDao39) {
  _inherits(PromoCodeRelationshipDao, _RelationshipDao39);

  function PromoCodeRelationshipDao(client) {
    _classCallCheck(this, PromoCodeRelationshipDao);

    var _this78 = _possibleConstructorReturn(this, (PromoCodeRelationshipDao.__proto__ || Object.getPrototypeOf(PromoCodeRelationshipDao)).call(this, client, 'promo-codes'));

    _this78.get = {

      /** @method area
       @params {Object} options
       @returns {Promise<PromoCode>} **/
      area: function area(options) {
        return _this78.toOne('area', options);
      },

      /** @method restaurant
       @params {Object} options
       @returns {Promise<PromoCode>} **/
      restaurant: function restaurant(options) {
        return _this78.toOne('restaurant', options);
      }
    };

    _this78.index = {

      /** @method order
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      order: function order(options) {
        return _this78.toMany('orders', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      versions: function versions(options) {
        return _this78.toMany('versions', options);
      }
    };
    return _this78;
  }

  return PromoCodeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class QualifyingQuestionDao
  * @extends {ResourceDao}
  **/


var QualifyingQuestionDao = exports.QualifyingQuestionDao = function (_ResourceDao40) {
  _inherits(QualifyingQuestionDao, _ResourceDao40);

  function QualifyingQuestionDao(client) {
    _classCallCheck(this, QualifyingQuestionDao);

    var _this79 = _possibleConstructorReturn(this, (QualifyingQuestionDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionDao)).call(this, client, 'qualifying-questions'));

    _this79.relationshipDao = new QualifyingQuestionRelationshipDao(client, 'qualifying-questions');
    return _this79;
  }

  return QualifyingQuestionDao;
}(_clientBase.ResourceDao);

/** @class QualifyingQuestionRelationshipDao
 * @extends {RelationshipDao}  **/


var QualifyingQuestionRelationshipDao = exports.QualifyingQuestionRelationshipDao = function (_RelationshipDao40) {
  _inherits(QualifyingQuestionRelationshipDao, _RelationshipDao40);

  function QualifyingQuestionRelationshipDao(client) {
    _classCallCheck(this, QualifyingQuestionRelationshipDao);

    return _possibleConstructorReturn(this, (QualifyingQuestionRelationshipDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionRelationshipDao)).call(this, client, 'qualifying-questions'));
  }

  return QualifyingQuestionRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantDao
  * @extends {ResourceDao}
  **/


var RestaurantDao = exports.RestaurantDao = function (_ResourceDao41) {
  _inherits(RestaurantDao, _ResourceDao41);

  function RestaurantDao(client) {
    _classCallCheck(this, RestaurantDao);

    var _this81 = _possibleConstructorReturn(this, (RestaurantDao.__proto__ || Object.getPrototypeOf(RestaurantDao)).call(this, client, 'restaurants'));

    _this81.relationshipDao = new RestaurantRelationshipDao(client, 'restaurants');
    return _this81;
  }

  return RestaurantDao;
}(_clientBase.ResourceDao);

/** @class RestaurantRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantRelationshipDao = exports.RestaurantRelationshipDao = function (_RelationshipDao41) {
  _inherits(RestaurantRelationshipDao, _RelationshipDao41);

  function RestaurantRelationshipDao(client) {
    _classCallCheck(this, RestaurantRelationshipDao);

    var _this82 = _possibleConstructorReturn(this, (RestaurantRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantRelationshipDao)).call(this, client, 'restaurants'));

    _this82.get = {

      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      billingLocation: function billingLocation(options) {
        return _this82.toOne('billing-location', options);
      },

      /** @method billingContact
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      billingContact: function billingContact(options) {
        return _this82.toOne('billing-contact', options);
      },

      /** @method owner
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      owner: function owner(options) {
        return _this82.toOne('owner', options);
      }
    };

    _this82.index = {

      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      orders: function orders(options) {
        return _this82.toMany('orders', options);
      },

      /** @method serviceTimes
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      serviceTimes: function serviceTimes(options) {
        return _this82.toMany('service-times', options);
      },

      /** @method pickupLocations
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      pickupLocations: function pickupLocations(options) {
        return _this82.toMany('pickup-locations', options);
      },

      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      dietaryTags: function dietaryTags(options) {
        return _this82.toMany('dietary-tags', options);
      },

      /** @method tags
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      tags: function tags(options) {
        return _this82.toMany('tags', options);
      },

      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      areas: function areas(options) {
        return _this82.toMany('areas', options);
      },

      /** @method menus
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      menus: function menus(options) {
        return _this82.toMany('menus', options);
      },

      /** @method closures
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      closures: function closures(options) {
        return _this82.toMany('closures', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      versions: function versions(options) {
        return _this82.toMany('versions', options);
      },

      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      promoCodes: function promoCodes(options) {
        return _this82.toMany('promo-codes', options);
      }
    };
    return _this82;
  }

  return RestaurantRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantClosureDao
  * @extends {ResourceDao}
  **/


var RestaurantClosureDao = exports.RestaurantClosureDao = function (_ResourceDao42) {
  _inherits(RestaurantClosureDao, _ResourceDao42);

  function RestaurantClosureDao(client) {
    _classCallCheck(this, RestaurantClosureDao);

    var _this83 = _possibleConstructorReturn(this, (RestaurantClosureDao.__proto__ || Object.getPrototypeOf(RestaurantClosureDao)).call(this, client, 'restaurant-closures'));

    _this83.relationshipDao = new RestaurantClosureRelationshipDao(client, 'restaurant-closures');
    return _this83;
  }

  return RestaurantClosureDao;
}(_clientBase.ResourceDao);

/** @class RestaurantClosureRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantClosureRelationshipDao = exports.RestaurantClosureRelationshipDao = function (_RelationshipDao42) {
  _inherits(RestaurantClosureRelationshipDao, _RelationshipDao42);

  function RestaurantClosureRelationshipDao(client) {
    _classCallCheck(this, RestaurantClosureRelationshipDao);

    var _this84 = _possibleConstructorReturn(this, (RestaurantClosureRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantClosureRelationshipDao)).call(this, client, 'restaurant-closures'));

    _this84.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<RestaurantClosure>} **/
      restaurant: function restaurant(options) {
        return _this84.toOne('restaurant', options);
      }
    };

    return _this84;
  }

  return RestaurantClosureRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantDiscountDao
  * @extends {ResourceDao}
  **/


var RestaurantDiscountDao = exports.RestaurantDiscountDao = function (_ResourceDao43) {
  _inherits(RestaurantDiscountDao, _ResourceDao43);

  function RestaurantDiscountDao(client) {
    _classCallCheck(this, RestaurantDiscountDao);

    var _this85 = _possibleConstructorReturn(this, (RestaurantDiscountDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountDao)).call(this, client, 'restaurant-discounts'));

    _this85.relationshipDao = new RestaurantDiscountRelationshipDao(client, 'restaurant-discounts');
    return _this85;
  }

  return RestaurantDiscountDao;
}(_clientBase.ResourceDao);

/** @class RestaurantDiscountRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantDiscountRelationshipDao = exports.RestaurantDiscountRelationshipDao = function (_RelationshipDao43) {
  _inherits(RestaurantDiscountRelationshipDao, _RelationshipDao43);

  function RestaurantDiscountRelationshipDao(client) {
    _classCallCheck(this, RestaurantDiscountRelationshipDao);

    var _this86 = _possibleConstructorReturn(this, (RestaurantDiscountRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountRelationshipDao)).call(this, client, 'restaurant-discounts'));

    _this86.get = {

      /** @method order
       @params {Object} options
       @returns {Promise<RestaurantDiscount>} **/
      order: function order(options) {
        return _this86.toOne('order', options);
      }
    };

    return _this86;
  }

  return RestaurantDiscountRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RestaurantOrderInvoiceDao
  * @extends {ResourceDao}
  **/


var RestaurantOrderInvoiceDao = exports.RestaurantOrderInvoiceDao = function (_ResourceDao44) {
  _inherits(RestaurantOrderInvoiceDao, _ResourceDao44);

  function RestaurantOrderInvoiceDao(client) {
    _classCallCheck(this, RestaurantOrderInvoiceDao);

    var _this87 = _possibleConstructorReturn(this, (RestaurantOrderInvoiceDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceDao)).call(this, client, 'restaurant-order-invoices'));

    _this87.relationshipDao = new RestaurantOrderInvoiceRelationshipDao(client, 'restaurant-order-invoices');
    return _this87;
  }

  return RestaurantOrderInvoiceDao;
}(_clientBase.ResourceDao);

/** @class RestaurantOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/


var RestaurantOrderInvoiceRelationshipDao = exports.RestaurantOrderInvoiceRelationshipDao = function (_RelationshipDao44) {
  _inherits(RestaurantOrderInvoiceRelationshipDao, _RelationshipDao44);

  function RestaurantOrderInvoiceRelationshipDao(client) {
    _classCallCheck(this, RestaurantOrderInvoiceRelationshipDao);

    return _possibleConstructorReturn(this, (RestaurantOrderInvoiceRelationshipDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceRelationshipDao)).call(this, client, 'restaurant-order-invoices'));
  }

  return RestaurantOrderInvoiceRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class RoleDao
  * @extends {ResourceDao}
  **/


var RoleDao = exports.RoleDao = function (_ResourceDao45) {
  _inherits(RoleDao, _ResourceDao45);

  function RoleDao(client) {
    _classCallCheck(this, RoleDao);

    var _this89 = _possibleConstructorReturn(this, (RoleDao.__proto__ || Object.getPrototypeOf(RoleDao)).call(this, client, 'roles'));

    _this89.relationshipDao = new RoleRelationshipDao(client, 'roles');
    return _this89;
  }

  return RoleDao;
}(_clientBase.ResourceDao);

/** @class RoleRelationshipDao
 * @extends {RelationshipDao}  **/


var RoleRelationshipDao = exports.RoleRelationshipDao = function (_RelationshipDao45) {
  _inherits(RoleRelationshipDao, _RelationshipDao45);

  function RoleRelationshipDao(client) {
    _classCallCheck(this, RoleRelationshipDao);

    var _this90 = _possibleConstructorReturn(this, (RoleRelationshipDao.__proto__ || Object.getPrototypeOf(RoleRelationshipDao)).call(this, client, 'roles'));

    _this90.get = {

      /** @method user
       @params {Object} options
       @returns {Promise<Role>} **/
      user: function user(options) {
        return _this90.toOne('user', options);
      }
    };

    return _this90;
  }

  return RoleRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class SalesforceSyncErrorDao
  * @extends {ResourceDao}
  **/


var SalesforceSyncErrorDao = exports.SalesforceSyncErrorDao = function (_ResourceDao46) {
  _inherits(SalesforceSyncErrorDao, _ResourceDao46);

  function SalesforceSyncErrorDao(client) {
    _classCallCheck(this, SalesforceSyncErrorDao);

    var _this91 = _possibleConstructorReturn(this, (SalesforceSyncErrorDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorDao)).call(this, client, 'salesforce-sync-errors'));

    _this91.relationshipDao = new SalesforceSyncErrorRelationshipDao(client, 'salesforce-sync-errors');
    return _this91;
  }

  return SalesforceSyncErrorDao;
}(_clientBase.ResourceDao);

/** @class SalesforceSyncErrorRelationshipDao
 * @extends {RelationshipDao}  **/


var SalesforceSyncErrorRelationshipDao = exports.SalesforceSyncErrorRelationshipDao = function (_RelationshipDao46) {
  _inherits(SalesforceSyncErrorRelationshipDao, _RelationshipDao46);

  function SalesforceSyncErrorRelationshipDao(client) {
    _classCallCheck(this, SalesforceSyncErrorRelationshipDao);

    return _possibleConstructorReturn(this, (SalesforceSyncErrorRelationshipDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorRelationshipDao)).call(this, client, 'salesforce-sync-errors'));
  }

  return SalesforceSyncErrorRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class ServiceTimeDao
  * @extends {ResourceDao}
  **/


var ServiceTimeDao = exports.ServiceTimeDao = function (_ResourceDao47) {
  _inherits(ServiceTimeDao, _ResourceDao47);

  function ServiceTimeDao(client) {
    _classCallCheck(this, ServiceTimeDao);

    var _this93 = _possibleConstructorReturn(this, (ServiceTimeDao.__proto__ || Object.getPrototypeOf(ServiceTimeDao)).call(this, client, 'service-times'));

    _this93.relationshipDao = new ServiceTimeRelationshipDao(client, 'service-times');
    return _this93;
  }

  return ServiceTimeDao;
}(_clientBase.ResourceDao);

/** @class ServiceTimeRelationshipDao
 * @extends {RelationshipDao}  **/


var ServiceTimeRelationshipDao = exports.ServiceTimeRelationshipDao = function (_RelationshipDao47) {
  _inherits(ServiceTimeRelationshipDao, _RelationshipDao47);

  function ServiceTimeRelationshipDao(client) {
    _classCallCheck(this, ServiceTimeRelationshipDao);

    var _this94 = _possibleConstructorReturn(this, (ServiceTimeRelationshipDao.__proto__ || Object.getPrototypeOf(ServiceTimeRelationshipDao)).call(this, client, 'service-times'));

    _this94.get = {

      /** @method restaurant
       @params {Object} options
       @returns {Promise<ServiceTime>} **/
      restaurant: function restaurant(options) {
        return _this94.toOne('restaurant', options);
      }
    };

    return _this94;
  }

  return ServiceTimeRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class TagDao
  * @extends {ResourceDao}
  **/


var TagDao = exports.TagDao = function (_ResourceDao48) {
  _inherits(TagDao, _ResourceDao48);

  function TagDao(client) {
    _classCallCheck(this, TagDao);

    var _this95 = _possibleConstructorReturn(this, (TagDao.__proto__ || Object.getPrototypeOf(TagDao)).call(this, client, 'tags'));

    _this95.relationshipDao = new TagRelationshipDao(client, 'tags');
    return _this95;
  }

  return TagDao;
}(_clientBase.ResourceDao);

/** @class TagRelationshipDao
 * @extends {RelationshipDao}  **/


var TagRelationshipDao = exports.TagRelationshipDao = function (_RelationshipDao48) {
  _inherits(TagRelationshipDao, _RelationshipDao48);

  function TagRelationshipDao(client) {
    _classCallCheck(this, TagRelationshipDao);

    return _possibleConstructorReturn(this, (TagRelationshipDao.__proto__ || Object.getPrototypeOf(TagRelationshipDao)).call(this, client, 'tags'));
  }

  return TagRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class UserDao
  * @extends {ResourceDao}
  **/


var UserDao = exports.UserDao = function (_ResourceDao49) {
  _inherits(UserDao, _ResourceDao49);

  function UserDao(client) {
    _classCallCheck(this, UserDao);

    var _this97 = _possibleConstructorReturn(this, (UserDao.__proto__ || Object.getPrototypeOf(UserDao)).call(this, client, 'users'));

    _this97.relationshipDao = new UserRelationshipDao(client, 'users');
    return _this97;
  }

  return UserDao;
}(_clientBase.ResourceDao);

/** @class UserRelationshipDao
 * @extends {RelationshipDao}  **/


var UserRelationshipDao = exports.UserRelationshipDao = function (_RelationshipDao49) {
  _inherits(UserRelationshipDao, _RelationshipDao49);

  function UserRelationshipDao(client) {
    _classCallCheck(this, UserRelationshipDao);

    var _this98 = _possibleConstructorReturn(this, (UserRelationshipDao.__proto__ || Object.getPrototypeOf(UserRelationshipDao)).call(this, client, 'users'));

    _this98.index = {

      /** @method driverPings
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      driverPings: function driverPings(options) {
        return _this98.toMany('driver-pings', options);
      },

      /** @method driverWeeks
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      driverWeeks: function driverWeeks(options) {
        return _this98.toMany('driver-weeks', options);
      },

      /** @method driverDays
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      driverDays: function driverDays(options) {
        return _this98.toMany('driver-days', options);
      },

      /** @method deliveredOrders
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      deliveredOrders: function deliveredOrders(options) {
        return _this98.toMany('delivered-orders', options);
      },

      /** @method couriers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      couriers: function couriers(options) {
        return _this98.toMany('couriers', options);
      },

      /** @method roles
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      roles: function roles(options) {
        return _this98.toMany('roles', options);
      },

      /** @method paymentCards
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      paymentCards: function paymentCards(options) {
        return _this98.toMany('payment-cards', options);
      },

      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      versions: function versions(options) {
        return _this98.toMany('versions', options);
      }
    };
    return _this98;
  }

  return UserRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class UserFeedbackDao
  * @extends {ResourceDao}
  **/


var UserFeedbackDao = exports.UserFeedbackDao = function (_ResourceDao50) {
  _inherits(UserFeedbackDao, _ResourceDao50);

  function UserFeedbackDao(client) {
    _classCallCheck(this, UserFeedbackDao);

    var _this99 = _possibleConstructorReturn(this, (UserFeedbackDao.__proto__ || Object.getPrototypeOf(UserFeedbackDao)).call(this, client, 'user-feedbacks'));

    _this99.relationshipDao = new UserFeedbackRelationshipDao(client, 'user-feedbacks');
    return _this99;
  }

  return UserFeedbackDao;
}(_clientBase.ResourceDao);

/** @class UserFeedbackRelationshipDao
 * @extends {RelationshipDao}  **/


var UserFeedbackRelationshipDao = exports.UserFeedbackRelationshipDao = function (_RelationshipDao50) {
  _inherits(UserFeedbackRelationshipDao, _RelationshipDao50);

  function UserFeedbackRelationshipDao(client) {
    _classCallCheck(this, UserFeedbackRelationshipDao);

    return _possibleConstructorReturn(this, (UserFeedbackRelationshipDao.__proto__ || Object.getPrototypeOf(UserFeedbackRelationshipDao)).call(this, client, 'user-feedbacks'));
  }

  return UserFeedbackRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class UserInviteDao
  * @extends {ResourceDao}
  **/


var UserInviteDao = exports.UserInviteDao = function (_ResourceDao51) {
  _inherits(UserInviteDao, _ResourceDao51);

  function UserInviteDao(client) {
    _classCallCheck(this, UserInviteDao);

    var _this101 = _possibleConstructorReturn(this, (UserInviteDao.__proto__ || Object.getPrototypeOf(UserInviteDao)).call(this, client, 'user-invites'));

    _this101.relationshipDao = new UserInviteRelationshipDao(client, 'user-invites');
    return _this101;
  }

  return UserInviteDao;
}(_clientBase.ResourceDao);

/** @class UserInviteRelationshipDao
 * @extends {RelationshipDao}  **/


var UserInviteRelationshipDao = exports.UserInviteRelationshipDao = function (_RelationshipDao51) {
  _inherits(UserInviteRelationshipDao, _RelationshipDao51);

  function UserInviteRelationshipDao(client) {
    _classCallCheck(this, UserInviteRelationshipDao);

    var _this102 = _possibleConstructorReturn(this, (UserInviteRelationshipDao.__proto__ || Object.getPrototypeOf(UserInviteRelationshipDao)).call(this, client, 'user-invites'));

    _this102.get = {

      /** @method client
       @params {Object} options
       @returns {Promise<UserInvite>} **/
      client: function client(options) {
        return _this102.toOne('client', options);
      },

      /** @method user
       @params {Object} options
       @returns {Promise<UserInvite>} **/
      user: function user(options) {
        return _this102.toOne('user', options);
      }
    };

    return _this102;
  }

  return UserInviteRelationshipDao;
}(_clientBase.RelationshipDao);

/** @class VersionDao
  * @extends {ResourceDao}
  **/


var VersionDao = exports.VersionDao = function (_ResourceDao52) {
  _inherits(VersionDao, _ResourceDao52);

  function VersionDao(client) {
    _classCallCheck(this, VersionDao);

    var _this103 = _possibleConstructorReturn(this, (VersionDao.__proto__ || Object.getPrototypeOf(VersionDao)).call(this, client, 'versions'));

    _this103.relationshipDao = new VersionRelationshipDao(client, 'versions');
    return _this103;
  }

  return VersionDao;
}(_clientBase.ResourceDao);

/** @class VersionRelationshipDao
 * @extends {RelationshipDao}  **/


var VersionRelationshipDao = exports.VersionRelationshipDao = function (_RelationshipDao52) {
  _inherits(VersionRelationshipDao, _RelationshipDao52);

  function VersionRelationshipDao(client) {
    _classCallCheck(this, VersionRelationshipDao);

    return _possibleConstructorReturn(this, (VersionRelationshipDao.__proto__ || Object.getPrototypeOf(VersionRelationshipDao)).call(this, client, 'versions'));
  }

  return VersionRelationshipDao;
}(_clientBase.RelationshipDao);