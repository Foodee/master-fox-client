'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MFClient = exports.QualifyingQuestion = exports.ClientSignup = exports.UserInvite = exports.UserFeedback = exports.DiscountCode = exports.SalesforceSyncError = exports.Role = exports.RestaurantClosure = exports.Tag = exports.ServiceTime = exports.RestaurantOrderInvoice = exports.ClientOrderInvoice = exports.DeskCase = exports.RestaurantDiscount = exports.ClientDiscount = exports.MenuOptionGroup = exports.MenuItem = exports.Menu = exports.MenuGroup = exports.PickupLocation = exports.EmailMessage = exports.Invoice = exports.OrderItem = exports.GroupOrderMember = exports.DriverWeek = exports.DriverPing = exports.DriverDay = exports.MenuOptionItem = exports.DietaryTag = exports.DeliveryCase = exports.GiftbitError = exports.GiftbitGift = exports.GiftbitCard = exports.MealPlan = exports.PaymentCard = exports.Order = exports.Location = exports.DeliveryLocation = exports.User = exports.Contact = exports.Company = exports.PromoCode = exports.AreaClosure = exports.InvoicingTaxRate = exports.Restaurant = exports.Client = exports.Courier = exports.Area = exports.Version = exports.AppConfiguration = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clientBase = require('./client-base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @module MasterFox **/

/** @class AppConfiguration
 * @extends Resource  **/
var AppConfiguration = exports.AppConfiguration = function (_Resource) {
  _inherits(AppConfiguration, _Resource);

  function AppConfiguration() {
    _classCallCheck(this, AppConfiguration);

    return _possibleConstructorReturn(this, (AppConfiguration.__proto__ || Object.getPrototypeOf(AppConfiguration)).apply(this, arguments));
  }

  _createClass(AppConfiguration, [{
    key: 'key',

    /** @param {string} key **/
    set: function set(key) {
      this._attributes.key = key;
    },
    get: function get() {
      return this._attributes.key;
    }
    /** @param {string} preferences **/

  }, {
    key: 'preferences',
    set: function set(preferences) {
      this._attributes.preferences = preferences;
    },
    get: function get() {
      return this._attributes.preferences;
    }

    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
  }]);

  return AppConfiguration;
}(_clientBase.Resource);

_clientBase.ResourceClasses['app-configurations'] = AppConfiguration;
/** @class AppConfigurationRelDao
 * @extends RelationshipDao  **/

var AppConfigurationRelDao = function (_RelationshipDao) {
  _inherits(AppConfigurationRelDao, _RelationshipDao);

  function AppConfigurationRelDao(client) {
    _classCallCheck(this, AppConfigurationRelDao);

    var _this2 = _possibleConstructorReturn(this, (AppConfigurationRelDao.__proto__ || Object.getPrototypeOf(AppConfigurationRelDao)).call(this, client, 'app-configurations', AppConfiguration));

    _this2.id = null;
    _this2.get = {};
    _this2.index = {
      versions: function versions(options) {
        return _this2.toMany('versions', Version, options);
      }
    };
    return _this2;
  }

  return AppConfigurationRelDao;
}(_clientBase.RelationshipDao);
/** @class AppConfigurationDao
 * @extends ResourceDao  **/


var AppConfigurationDao = function (_ResourceDao) {
  _inherits(AppConfigurationDao, _ResourceDao);

  function AppConfigurationDao(client) {
    _classCallCheck(this, AppConfigurationDao);

    var _this3 = _possibleConstructorReturn(this, (AppConfigurationDao.__proto__ || Object.getPrototypeOf(AppConfigurationDao)).call(this, client, 'app-configurations', AppConfiguration));

    _this3.relationshipDao = new AppConfigurationRelDao(client, 'app-configurations');
    return _this3;
  }

  return AppConfigurationDao;
}(_clientBase.ResourceDao);

/** @class Version
 * @extends Resource  **/


var Version = exports.Version = function (_Resource2) {
  _inherits(Version, _Resource2);

  function Version() {
    _classCallCheck(this, Version);

    return _possibleConstructorReturn(this, (Version.__proto__ || Object.getPrototypeOf(Version)).apply(this, arguments));
  }

  _createClass(Version, [{
    key: 'createdAt',

    /** @param {Date} createdAt **/
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {Date} itemType **/

  }, {
    key: 'itemType',
    set: function set(itemType) {
      this._attributes.itemType = itemType;
    },
    get: function get() {
      return this._attributes.itemType;
    }
    /** @param {Date} itemId **/

  }, {
    key: 'itemId',
    set: function set(itemId) {
      this._attributes.itemId = itemId;
    },
    get: function get() {
      return this._attributes.itemId;
    }
    /** @param {Date} event **/

  }, {
    key: 'event',
    set: function set(event) {
      this._attributes.event = event;
    },
    get: function get() {
      return this._attributes.event;
    }
    /** @param {Date} object **/

  }, {
    key: 'object',
    set: function set(object) {
      this._attributes.object = object;
    },
    get: function get() {
      return this._attributes.object;
    }
    /** @param {Date} objectChanges **/

  }, {
    key: 'objectChanges',
    set: function set(objectChanges) {
      this._attributes.objectChanges = objectChanges;
    },
    get: function get() {
      return this._attributes.objectChanges;
    }
    /** @param {Date} whodunnit **/

  }, {
    key: 'whodunnit',
    set: function set(whodunnit) {
      this._attributes.whodunnit = whodunnit;
    },
    get: function get() {
      return this._attributes.whodunnit;
    }
  }]);

  return Version;
}(_clientBase.Resource);

_clientBase.ResourceClasses['versions'] = Version;
/** @class VersionRelDao
 * @extends RelationshipDao  **/

var VersionRelDao = function (_RelationshipDao2) {
  _inherits(VersionRelDao, _RelationshipDao2);

  function VersionRelDao(client) {
    _classCallCheck(this, VersionRelDao);

    var _this5 = _possibleConstructorReturn(this, (VersionRelDao.__proto__ || Object.getPrototypeOf(VersionRelDao)).call(this, client, 'versions', Version));

    _this5.id = null;
    _this5.get = {};
    _this5.index = {};
    return _this5;
  }

  return VersionRelDao;
}(_clientBase.RelationshipDao);
/** @class VersionDao
 * @extends ResourceDao  **/


var VersionDao = function (_ResourceDao2) {
  _inherits(VersionDao, _ResourceDao2);

  function VersionDao(client) {
    _classCallCheck(this, VersionDao);

    var _this6 = _possibleConstructorReturn(this, (VersionDao.__proto__ || Object.getPrototypeOf(VersionDao)).call(this, client, 'versions', Version));

    _this6.relationshipDao = new VersionRelDao(client, 'versions');
    return _this6;
  }

  return VersionDao;
}(_clientBase.ResourceDao);

/** @class Area
 * @extends Resource  **/


var Area = exports.Area = function (_Resource3) {
  _inherits(Area, _Resource3);

  function Area() {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).apply(this, arguments));
  }

  _createClass(Area, [{
    key: 'active',

    /** @param {boolean} active **/
    set: function set(active) {
      this._attributes.active = active;
    },
    get: function get() {
      return this._attributes.active;
    }
    /** @param {boolean} title **/

  }, {
    key: 'title',
    set: function set(title) {
      this._attributes.title = title;
    },
    get: function get() {
      return this._attributes.title;
    }
    /** @param {boolean} country **/

  }, {
    key: 'country',
    set: function set(country) {
      this._attributes.country = country;
    },
    get: function get() {
      return this._attributes.country;
    }
    /** @param {boolean} province **/

  }, {
    key: 'province',
    set: function set(province) {
      this._attributes.province = province;
    },
    get: function get() {
      return this._attributes.province;
    }
    /** @param {boolean} city **/

  }, {
    key: 'city',
    set: function set(city) {
      this._attributes.city = city;
    },
    get: function get() {
      return this._attributes.city;
    }
    /** @param {boolean} district **/

  }, {
    key: 'district',
    set: function set(district) {
      this._attributes.district = district;
    },
    get: function get() {
      return this._attributes.district;
    }
    /** @param {boolean} slug **/

  }, {
    key: 'slug',
    set: function set(slug) {
      this._attributes.slug = slug;
    },
    get: function get() {
      return this._attributes.slug;
    }
    /** @param {boolean} isoTimeZone **/

  }, {
    key: 'isoTimeZone',
    set: function set(isoTimeZone) {
      this._attributes.isoTimeZone = isoTimeZone;
    },
    get: function get() {
      return this._attributes.isoTimeZone;
    }
    /** @param {boolean} deliveryLeadTime **/

  }, {
    key: 'deliveryLeadTime',
    set: function set(deliveryLeadTime) {
      this._attributes.deliveryLeadTime = deliveryLeadTime;
    },
    get: function get() {
      return this._attributes.deliveryLeadTime;
    }
    /** @param {boolean} currency **/

  }, {
    key: 'currency',
    set: function set(currency) {
      this._attributes.currency = currency;
    },
    get: function get() {
      return this._attributes.currency;
    }
    /** @param {boolean} deliveryFee **/

  }, {
    key: 'deliveryFee',
    set: function set(deliveryFee) {
      this._attributes.deliveryFee = deliveryFee;
    },
    get: function get() {
      return this._attributes.deliveryFee;
    }
    /** @param {boolean} geoJSON **/

  }, {
    key: 'geoJSON',
    set: function set(geoJSON) {
      this._attributes.geoJSON = geoJSON;
    },
    get: function get() {
      return this._attributes.geoJSON;
    }
    /** @param {boolean} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {boolean} prefix **/

  }, {
    key: 'prefix',
    set: function set(prefix) {
      this._attributes.prefix = prefix;
    },
    get: function get() {
      return this._attributes.prefix;
    }
    /** @param {boolean} coverImageUrl **/

  }, {
    key: 'coverImageUrl',
    set: function set(coverImageUrl) {
      this._attributes.coverImageUrl = coverImageUrl;
    },
    get: function get() {
      return this._attributes.coverImageUrl;
    }

    /** @param {Courier[]} couriers **/

  }, {
    key: 'couriers',
    set: function set(couriers) {
      this._relationships.couriers = couriers;
    }
    /** @type {Courier[]} */
    ,
    get: function get() {
      return this._relationships.couriers;
    }
    /** @param {Client[]} clients **/

  }, {
    key: 'clients',
    set: function set(clients) {
      this._relationships.clients = clients;
    }
    /** @type {Client[]} */
    ,
    get: function get() {
      return this._relationships.clients;
    }
    /** @param {Restaurant[]} restaurants **/

  }, {
    key: 'restaurants',
    set: function set(restaurants) {
      this._relationships.restaurants = restaurants;
    }
    /** @type {Restaurant[]} */
    ,
    get: function get() {
      return this._relationships.restaurants;
    }
    /** @param {InvoicingTaxRate[]} invoicingTaxRates **/

  }, {
    key: 'invoicingTaxRates',
    set: function set(invoicingTaxRates) {
      this._relationships.invoicingTaxRates = invoicingTaxRates;
    }
    /** @type {InvoicingTaxRate[]} */
    ,
    get: function get() {
      return this._relationships.invoicingTaxRates;
    }
    /** @param {InvoicingTaxRate[]} globalInvoicingTaxRates **/

  }, {
    key: 'globalInvoicingTaxRates',
    set: function set(globalInvoicingTaxRates) {
      this._relationships.globalInvoicingTaxRates = globalInvoicingTaxRates;
    }
    /** @type {InvoicingTaxRate[]} */
    ,
    get: function get() {
      return this._relationships.globalInvoicingTaxRates;
    }
    /** @param {AreaClosure[]} areaClosures **/

  }, {
    key: 'areaClosures',
    set: function set(areaClosures) {
      this._relationships.areaClosures = areaClosures;
    }
    /** @type {AreaClosure[]} */
    ,
    get: function get() {
      return this._relationships.areaClosures;
    }
    /** @param {AreaClosure[]} currentAreaClosures **/

  }, {
    key: 'currentAreaClosures',
    set: function set(currentAreaClosures) {
      this._relationships.currentAreaClosures = currentAreaClosures;
    }
    /** @type {AreaClosure[]} */
    ,
    get: function get() {
      return this._relationships.currentAreaClosures;
    }
    /** @param {PromoCode[]} promoCodes **/

  }, {
    key: 'promoCodes',
    set: function set(promoCodes) {
      this._relationships.promoCodes = promoCodes;
    }
    /** @type {PromoCode[]} */
    ,
    get: function get() {
      return this._relationships.promoCodes;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
    /** @param {InvoicingTaxRate} deliveryFeeTaxRate **/

  }, {
    key: 'deliveryFeeTaxRate',
    set: function set(deliveryFeeTaxRate) {
      this._relationships.deliveryFeeTaxRate = deliveryFeeTaxRate;
    }
    /** @type {InvoicingTaxRate} */
    ,
    get: function get() {
      return this._relationships.deliveryFeeTaxRate;
    }
  }]);

  return Area;
}(_clientBase.Resource);

_clientBase.ResourceClasses['areas'] = Area;
/** @class AreaRelDao
 * @extends RelationshipDao  **/

var AreaRelDao = function (_RelationshipDao3) {
  _inherits(AreaRelDao, _RelationshipDao3);

  function AreaRelDao(client) {
    _classCallCheck(this, AreaRelDao);

    var _this8 = _possibleConstructorReturn(this, (AreaRelDao.__proto__ || Object.getPrototypeOf(AreaRelDao)).call(this, client, 'areas', Area));

    _this8.id = null;
    _this8.get = {
      deliveryFeeTaxRate: function deliveryFeeTaxRate(options) {
        return _this8.toOne('delivery-fee-tax-rate', InvoicingTaxRate, options);
      }
    };
    _this8.index = {
      couriers: function couriers(options) {
        return _this8.toMany('couriers', Courier, options);
      },
      clients: function clients(options) {
        return _this8.toMany('clients', Client, options);
      },
      restaurants: function restaurants(options) {
        return _this8.toMany('restaurants', Restaurant, options);
      },
      invoicingTaxRates: function invoicingTaxRates(options) {
        return _this8.toMany('invoicing-tax-rates', InvoicingTaxRate, options);
      },
      globalInvoicingTaxRates: function globalInvoicingTaxRates(options) {
        return _this8.toMany('global-invoicing-tax-rates', InvoicingTaxRate, options);
      },
      areaClosures: function areaClosures(options) {
        return _this8.toMany('area-closures', AreaClosure, options);
      },
      currentAreaClosures: function currentAreaClosures(options) {
        return _this8.toMany('current-area-closures', AreaClosure, options);
      },
      promoCodes: function promoCodes(options) {
        return _this8.toMany('promo-codes', PromoCode, options);
      },
      versions: function versions(options) {
        return _this8.toMany('versions', Version, options);
      }
    };
    return _this8;
  }

  return AreaRelDao;
}(_clientBase.RelationshipDao);
/** @class AreaDao
 * @extends ResourceDao  **/


var AreaDao = function (_ResourceDao3) {
  _inherits(AreaDao, _ResourceDao3);

  function AreaDao(client) {
    _classCallCheck(this, AreaDao);

    var _this9 = _possibleConstructorReturn(this, (AreaDao.__proto__ || Object.getPrototypeOf(AreaDao)).call(this, client, 'areas', Area));

    _this9.relationshipDao = new AreaRelDao(client, 'areas');
    return _this9;
  }

  return AreaDao;
}(_clientBase.ResourceDao);

/** @class Courier
 * @extends Resource  **/


var Courier = exports.Courier = function (_Resource4) {
  _inherits(Courier, _Resource4);

  function Courier() {
    _classCallCheck(this, Courier);

    return _possibleConstructorReturn(this, (Courier.__proto__ || Object.getPrototypeOf(Courier)).apply(this, arguments));
  }

  _createClass(Courier, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} legalName **/

  }, {
    key: 'legalName',
    set: function set(legalName) {
      this._attributes.legalName = legalName;
    },
    get: function get() {
      return this._attributes.legalName;
    }
    /** @param {string} driverCount **/

  }, {
    key: 'driverCount',
    set: function set(driverCount) {
      this._attributes.driverCount = driverCount;
    },
    get: function get() {
      return this._attributes.driverCount;
    }
    /** @param {string} ownerEmail **/

  }, {
    key: 'ownerEmail',
    set: function set(ownerEmail) {
      this._attributes.ownerEmail = ownerEmail;
    },
    get: function get() {
      return this._attributes.ownerEmail;
    }

    /** @param {User} owner **/

  }, {
    key: 'owner',
    set: function set(owner) {
      this._relationships.owner = owner;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.owner;
    }
    /** @param {User[]} drivers **/

  }, {
    key: 'drivers',
    set: function set(drivers) {
      this._relationships.drivers = drivers;
    }
    /** @type {User[]} */
    ,
    get: function get() {
      return this._relationships.drivers;
    }
    /** @param {Area[]} areas **/

  }, {
    key: 'areas',
    set: function set(areas) {
      this._relationships.areas = areas;
    }
    /** @type {Area[]} */
    ,
    get: function get() {
      return this._relationships.areas;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
  }]);

  return Courier;
}(_clientBase.Resource);

_clientBase.ResourceClasses['couriers'] = Courier;
/** @class CourierRelDao
 * @extends RelationshipDao  **/

var CourierRelDao = function (_RelationshipDao4) {
  _inherits(CourierRelDao, _RelationshipDao4);

  function CourierRelDao(client) {
    _classCallCheck(this, CourierRelDao);

    var _this11 = _possibleConstructorReturn(this, (CourierRelDao.__proto__ || Object.getPrototypeOf(CourierRelDao)).call(this, client, 'couriers', Courier));

    _this11.id = null;
    _this11.get = {
      owner: function owner(options) {
        return _this11.toOne('owner', User, options);
      }
    };
    _this11.index = {
      drivers: function drivers(options) {
        return _this11.toMany('drivers', User, options);
      },
      areas: function areas(options) {
        return _this11.toMany('areas', Area, options);
      },
      versions: function versions(options) {
        return _this11.toMany('versions', Version, options);
      }
    };
    return _this11;
  }

  return CourierRelDao;
}(_clientBase.RelationshipDao);
/** @class CourierDao
 * @extends ResourceDao  **/


var CourierDao = function (_ResourceDao4) {
  _inherits(CourierDao, _ResourceDao4);

  function CourierDao(client) {
    _classCallCheck(this, CourierDao);

    var _this12 = _possibleConstructorReturn(this, (CourierDao.__proto__ || Object.getPrototypeOf(CourierDao)).call(this, client, 'couriers', Courier));

    _this12.relationshipDao = new CourierRelDao(client, 'couriers');
    return _this12;
  }

  return CourierDao;
}(_clientBase.ResourceDao);

/** @class Client
 * @extends Resource  **/


var Client = exports.Client = function (_Resource5) {
  _inherits(Client, _Resource5);

  function Client() {
    _classCallCheck(this, Client);

    return _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).apply(this, arguments));
  }

  _createClass(Client, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} legalName **/

  }, {
    key: 'legalName',
    set: function set(legalName) {
      this._attributes.legalName = legalName;
    },
    get: function get() {
      return this._attributes.legalName;
    }
    /** @param {string} accountName **/

  }, {
    key: 'accountName',
    set: function set(accountName) {
      this._attributes.accountName = accountName;
    },
    get: function get() {
      return this._attributes.accountName;
    }
    /** @param {string} deliveryNotes **/

  }, {
    key: 'deliveryNotes',
    set: function set(deliveryNotes) {
      this._attributes.deliveryNotes = deliveryNotes;
    },
    get: function get() {
      return this._attributes.deliveryNotes;
    }
    /** @param {string} notes **/

  }, {
    key: 'notes',
    set: function set(notes) {
      this._attributes.notes = notes;
    },
    get: function get() {
      return this._attributes.notes;
    }
    /** @param {string} plan **/

  }, {
    key: 'plan',
    set: function set(plan) {
      this._attributes.plan = plan;
    },
    get: function get() {
      return this._attributes.plan;
    }
    /** @param {string} features **/

  }, {
    key: 'features',
    set: function set(features) {
      this._attributes.features = features;
    },
    get: function get() {
      return this._attributes.features;
    }
    /** @param {string} terms **/

  }, {
    key: 'terms',
    set: function set(terms) {
      this._attributes.terms = terms;
    },
    get: function get() {
      return this._attributes.terms;
    }
    /** @param {string} termDays **/

  }, {
    key: 'termDays',
    set: function set(termDays) {
      this._attributes.termDays = termDays;
    },
    get: function get() {
      return this._attributes.termDays;
    }
    /** @param {string} apiToken **/

  }, {
    key: 'apiToken',
    set: function set(apiToken) {
      this._attributes.apiToken = apiToken;
    },
    get: function get() {
      return this._attributes.apiToken;
    }
    /** @param {string} salesSupportClient **/

  }, {
    key: 'salesSupportClient',
    set: function set(salesSupportClient) {
      this._attributes.salesSupportClient = salesSupportClient;
    },
    get: function get() {
      return this._attributes.salesSupportClient;
    }
    /** @param {string} salesSupportAgent **/

  }, {
    key: 'salesSupportAgent',
    set: function set(salesSupportAgent) {
      this._attributes.salesSupportAgent = salesSupportAgent;
    },
    get: function get() {
      return this._attributes.salesSupportAgent;
    }

    /** @param {Area[]} areas **/

  }, {
    key: 'areas',
    set: function set(areas) {
      this._relationships.areas = areas;
    }
    /** @type {Area[]} */
    ,
    get: function get() {
      return this._relationships.areas;
    }
    /** @param {Area} defaultArea **/

  }, {
    key: 'defaultArea',
    set: function set(defaultArea) {
      this._relationships.defaultArea = defaultArea;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.defaultArea;
    }
    /** @param {DeliveryLocation[]} deliveryLocations **/

  }, {
    key: 'deliveryLocations',
    set: function set(deliveryLocations) {
      this._relationships.deliveryLocations = deliveryLocations;
    }
    /** @type {DeliveryLocation[]} */
    ,
    get: function get() {
      return this._relationships.deliveryLocations;
    }
    /** @param {Location} billingLocation **/

  }, {
    key: 'billingLocation',
    set: function set(billingLocation) {
      this._relationships.billingLocation = billingLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.billingLocation;
    }
    /** @param {Contact[]} adminContacts **/

  }, {
    key: 'adminContacts',
    set: function set(adminContacts) {
      this._relationships.adminContacts = adminContacts;
    }
    /** @type {Contact[]} */
    ,
    get: function get() {
      return this._relationships.adminContacts;
    }
    /** @param {User[]} admins **/

  }, {
    key: 'admins',
    set: function set(admins) {
      this._relationships.admins = admins;
    }
    /** @type {User[]} */
    ,
    get: function get() {
      return this._relationships.admins;
    }
    /** @param {User} accountManager **/

  }, {
    key: 'accountManager',
    set: function set(accountManager) {
      this._relationships.accountManager = accountManager;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.accountManager;
    }
    /** @param {User} owner **/

  }, {
    key: 'owner',
    set: function set(owner) {
      this._relationships.owner = owner;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.owner;
    }
    /** @param {Contact[]} orderContacts **/

  }, {
    key: 'orderContacts',
    set: function set(orderContacts) {
      this._relationships.orderContacts = orderContacts;
    }
    /** @type {Contact[]} */
    ,
    get: function get() {
      return this._relationships.orderContacts;
    }
    /** @param {Order[]} orders **/

  }, {
    key: 'orders',
    set: function set(orders) {
      this._relationships.orders = orders;
    }
    /** @type {Order[]} */
    ,
    get: function get() {
      return this._relationships.orders;
    }
    /** @param {PaymentCard[]} paymentCards **/

  }, {
    key: 'paymentCards',
    set: function set(paymentCards) {
      this._relationships.paymentCards = paymentCards;
    }
    /** @type {PaymentCard[]} */
    ,
    get: function get() {
      return this._relationships.paymentCards;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
    /** @param {Company} company **/

  }, {
    key: 'company',
    set: function set(company) {
      this._relationships.company = company;
    }
    /** @type {Company} */
    ,
    get: function get() {
      return this._relationships.company;
    }
    /** @param {MealPlan} mealPlan **/

  }, {
    key: 'mealPlan',
    set: function set(mealPlan) {
      this._relationships.mealPlan = mealPlan;
    }
    /** @type {MealPlan} */
    ,
    get: function get() {
      return this._relationships.mealPlan;
    }
    /** @param {InvoicingTaxRate} taxRate **/

  }, {
    key: 'taxRate',
    set: function set(taxRate) {
      this._relationships.taxRate = taxRate;
    }
    /** @type {InvoicingTaxRate} */
    ,
    get: function get() {
      return this._relationships.taxRate;
    }
    /** @param {GiftbitCard} giftbitCard **/

  }, {
    key: 'giftbitCard',
    set: function set(giftbitCard) {
      this._relationships.giftbitCard = giftbitCard;
    }
    /** @type {GiftbitCard} */
    ,
    get: function get() {
      return this._relationships.giftbitCard;
    }
    /** @param {GiftbitGift[]} giftbitGifts **/

  }, {
    key: 'giftbitGifts',
    set: function set(giftbitGifts) {
      this._relationships.giftbitGifts = giftbitGifts;
    }
    /** @type {GiftbitGift[]} */
    ,
    get: function get() {
      return this._relationships.giftbitGifts;
    }
    /** @param {GiftbitError[]} giftbitErrors **/

  }, {
    key: 'giftbitErrors',
    set: function set(giftbitErrors) {
      this._relationships.giftbitErrors = giftbitErrors;
    }
    /** @type {GiftbitError[]} */
    ,
    get: function get() {
      return this._relationships.giftbitErrors;
    }
  }]);

  return Client;
}(_clientBase.Resource);

_clientBase.ResourceClasses['clients'] = Client;
/** @class ClientRelDao
 * @extends RelationshipDao  **/

var ClientRelDao = function (_RelationshipDao5) {
  _inherits(ClientRelDao, _RelationshipDao5);

  function ClientRelDao(client) {
    _classCallCheck(this, ClientRelDao);

    var _this14 = _possibleConstructorReturn(this, (ClientRelDao.__proto__ || Object.getPrototypeOf(ClientRelDao)).call(this, client, 'clients', Client));

    _this14.id = null;
    _this14.get = {
      defaultArea: function defaultArea(options) {
        return _this14.toOne('default-area', Area, options);
      },
      billingLocation: function billingLocation(options) {
        return _this14.toOne('billing-location', Location, options);
      },
      accountManager: function accountManager(options) {
        return _this14.toOne('account-manager', User, options);
      },
      owner: function owner(options) {
        return _this14.toOne('owner', User, options);
      },
      company: function company(options) {
        return _this14.toOne('company', Company, options);
      },
      mealPlan: function mealPlan(options) {
        return _this14.toOne('meal-plan', MealPlan, options);
      },
      taxRate: function taxRate(options) {
        return _this14.toOne('tax-rate', InvoicingTaxRate, options);
      },
      giftbitCard: function giftbitCard(options) {
        return _this14.toOne('giftbit-card', GiftbitCard, options);
      }
    };
    _this14.index = {
      areas: function areas(options) {
        return _this14.toMany('areas', Area, options);
      },
      deliveryLocations: function deliveryLocations(options) {
        return _this14.toMany('delivery-locations', DeliveryLocation, options);
      },
      adminContacts: function adminContacts(options) {
        return _this14.toMany('admin-contacts', Contact, options);
      },
      admins: function admins(options) {
        return _this14.toMany('admins', User, options);
      },
      orderContacts: function orderContacts(options) {
        return _this14.toMany('order-contacts', Contact, options);
      },
      orders: function orders(options) {
        return _this14.toMany('orders', Order, options);
      },
      paymentCards: function paymentCards(options) {
        return _this14.toMany('payment-cards', PaymentCard, options);
      },
      versions: function versions(options) {
        return _this14.toMany('versions', Version, options);
      },
      giftbitGifts: function giftbitGifts(options) {
        return _this14.toMany('giftbit-gifts', GiftbitGift, options);
      },
      giftbitErrors: function giftbitErrors(options) {
        return _this14.toMany('giftbit-errors', GiftbitError, options);
      }
    };
    return _this14;
  }

  return ClientRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientDao
 * @extends ResourceDao  **/


var ClientDao = function (_ResourceDao5) {
  _inherits(ClientDao, _ResourceDao5);

  function ClientDao(client) {
    _classCallCheck(this, ClientDao);

    var _this15 = _possibleConstructorReturn(this, (ClientDao.__proto__ || Object.getPrototypeOf(ClientDao)).call(this, client, 'clients', Client));

    _this15.relationshipDao = new ClientRelDao(client, 'clients');
    return _this15;
  }

  return ClientDao;
}(_clientBase.ResourceDao);

/** @class Restaurant
 * @extends Resource  **/


var Restaurant = exports.Restaurant = function (_Resource6) {
  _inherits(Restaurant, _Resource6);

  function Restaurant() {
    _classCallCheck(this, Restaurant);

    return _possibleConstructorReturn(this, (Restaurant.__proto__ || Object.getPrototypeOf(Restaurant)).apply(this, arguments));
  }

  _createClass(Restaurant, [{
    key: 'createdAt',

    /** @param {Date} createdAt **/
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {Date} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
    /** @param {Date} active **/

  }, {
    key: 'active',
    set: function set(active) {
      this._attributes.active = active;
    },
    get: function get() {
      return this._attributes.active;
    }
    /** @param {Date} name **/

  }, {
    key: 'name',
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {Date} slug **/

  }, {
    key: 'slug',
    set: function set(slug) {
      this._attributes.slug = slug;
    },
    get: function get() {
      return this._attributes.slug;
    }
    /** @param {Date} subtitle **/

  }, {
    key: 'subtitle',
    set: function set(subtitle) {
      this._attributes.subtitle = subtitle;
    },
    get: function get() {
      return this._attributes.subtitle;
    }
    /** @param {Date} legalName **/

  }, {
    key: 'legalName',
    set: function set(legalName) {
      this._attributes.legalName = legalName;
    },
    get: function get() {
      return this._attributes.legalName;
    }
    /** @param {Date} pickupNotes **/

  }, {
    key: 'pickupNotes',
    set: function set(pickupNotes) {
      this._attributes.pickupNotes = pickupNotes;
    },
    get: function get() {
      return this._attributes.pickupNotes;
    }
    /** @param {Date} completionProgress **/

  }, {
    key: 'completionProgress',
    set: function set(completionProgress) {
      this._attributes.completionProgress = completionProgress;
    },
    get: function get() {
      return this._attributes.completionProgress;
    }
    /** @param {Date} dietaryTagsCounts **/

  }, {
    key: 'dietaryTagsCounts',
    set: function set(dietaryTagsCounts) {
      this._attributes.dietaryTagsCounts = dietaryTagsCounts;
    },
    get: function get() {
      return this._attributes.dietaryTagsCounts;
    }
    /** @param {Date} comingSoon **/

  }, {
    key: 'comingSoon',
    set: function set(comingSoon) {
      this._attributes.comingSoon = comingSoon;
    },
    get: function get() {
      return this._attributes.comingSoon;
    }
    /** @param {Date} hoursInAdvance **/

  }, {
    key: 'hoursInAdvance',
    set: function set(hoursInAdvance) {
      this._attributes.hoursInAdvance = hoursInAdvance;
    },
    get: function get() {
      return this._attributes.hoursInAdvance;
    }
    /** @param {Date} internal **/

  }, {
    key: 'internal',
    set: function set(internal) {
      this._attributes.internal = internal;
    },
    get: function get() {
      return this._attributes.internal;
    }
    /** @param {Date} isNew **/

  }, {
    key: 'isNew',
    set: function set(isNew) {
      this._attributes.isNew = isNew;
    },
    get: function get() {
      return this._attributes.isNew;
    }
    /** @param {Date} coverImageUrl **/

  }, {
    key: 'coverImageUrl',
    set: function set(coverImageUrl) {
      this._attributes.coverImageUrl = coverImageUrl;
    },
    get: function get() {
      return this._attributes.coverImageUrl;
    }
    /** @param {Date} thumbnailImageUrl **/

  }, {
    key: 'thumbnailImageUrl',
    set: function set(thumbnailImageUrl) {
      this._attributes.thumbnailImageUrl = thumbnailImageUrl;
    },
    get: function get() {
      return this._attributes.thumbnailImageUrl;
    }
    /** @param {Date} isPayingAdminFee **/

  }, {
    key: 'isPayingAdminFee',
    set: function set(isPayingAdminFee) {
      this._attributes.isPayingAdminFee = isPayingAdminFee;
    },
    get: function get() {
      return this._attributes.isPayingAdminFee;
    }
    /** @param {Date} canGroupOrder **/

  }, {
    key: 'canGroupOrder',
    set: function set(canGroupOrder) {
      this._attributes.canGroupOrder = canGroupOrder;
    },
    get: function get() {
      return this._attributes.canGroupOrder;
    }
    /** @param {Date} receivesDailyOrderSummary **/

  }, {
    key: 'receivesDailyOrderSummary',
    set: function set(receivesDailyOrderSummary) {
      this._attributes.receivesDailyOrderSummary = receivesDailyOrderSummary;
    },
    get: function get() {
      return this._attributes.receivesDailyOrderSummary;
    }
    /** @param {Date} receivesSMS **/

  }, {
    key: 'receivesSMS',
    set: function set(receivesSMS) {
      this._attributes.receivesSMS = receivesSMS;
    },
    get: function get() {
      return this._attributes.receivesSMS;
    }
    /** @param {Date} marketingTitle **/

  }, {
    key: 'marketingTitle',
    set: function set(marketingTitle) {
      this._attributes.marketingTitle = marketingTitle;
    },
    get: function get() {
      return this._attributes.marketingTitle;
    }
    /** @param {Date} marketingDescription **/

  }, {
    key: 'marketingDescription',
    set: function set(marketingDescription) {
      this._attributes.marketingDescription = marketingDescription;
    },
    get: function get() {
      return this._attributes.marketingDescription;
    }
    /** @param {Date} features **/

  }, {
    key: 'features',
    set: function set(features) {
      this._attributes.features = features;
    },
    get: function get() {
      return this._attributes.features;
    }

    /** @param {Order[]} orders **/

  }, {
    key: 'orders',
    set: function set(orders) {
      this._relationships.orders = orders;
    }
    /** @type {Order[]} */
    ,
    get: function get() {
      return this._relationships.orders;
    }
    /** @param {ServiceTime[]} serviceTimes **/

  }, {
    key: 'serviceTimes',
    set: function set(serviceTimes) {
      this._relationships.serviceTimes = serviceTimes;
    }
    /** @type {ServiceTime[]} */
    ,
    get: function get() {
      return this._relationships.serviceTimes;
    }
    /** @param {PickupLocation[]} pickupLocations **/

  }, {
    key: 'pickupLocations',
    set: function set(pickupLocations) {
      this._relationships.pickupLocations = pickupLocations;
    }
    /** @type {PickupLocation[]} */
    ,
    get: function get() {
      return this._relationships.pickupLocations;
    }
    /** @param {Location} billingLocation **/

  }, {
    key: 'billingLocation',
    set: function set(billingLocation) {
      this._relationships.billingLocation = billingLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.billingLocation;
    }
    /** @param {Contact} billingContact **/

  }, {
    key: 'billingContact',
    set: function set(billingContact) {
      this._relationships.billingContact = billingContact;
    }
    /** @type {Contact} */
    ,
    get: function get() {
      return this._relationships.billingContact;
    }
    /** @param {User} owner **/

  }, {
    key: 'owner',
    set: function set(owner) {
      this._relationships.owner = owner;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.owner;
    }
    /** @param {DietaryTag[]} dietaryTags **/

  }, {
    key: 'dietaryTags',
    set: function set(dietaryTags) {
      this._relationships.dietaryTags = dietaryTags;
    }
    /** @type {DietaryTag[]} */
    ,
    get: function get() {
      return this._relationships.dietaryTags;
    }
    /** @param {Tag[]} tags **/

  }, {
    key: 'tags',
    set: function set(tags) {
      this._relationships.tags = tags;
    }
    /** @type {Tag[]} */
    ,
    get: function get() {
      return this._relationships.tags;
    }
    /** @param {Area[]} areas **/

  }, {
    key: 'areas',
    set: function set(areas) {
      this._relationships.areas = areas;
    }
    /** @type {Area[]} */
    ,
    get: function get() {
      return this._relationships.areas;
    }
    /** @param {Menu[]} menus **/

  }, {
    key: 'menus',
    set: function set(menus) {
      this._relationships.menus = menus;
    }
    /** @type {Menu[]} */
    ,
    get: function get() {
      return this._relationships.menus;
    }
    /** @param {RestaurantClosure[]} closures **/

  }, {
    key: 'closures',
    set: function set(closures) {
      this._relationships.closures = closures;
    }
    /** @type {RestaurantClosure[]} */
    ,
    get: function get() {
      return this._relationships.closures;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
    /** @param {PromoCode[]} promoCodes **/

  }, {
    key: 'promoCodes',
    set: function set(promoCodes) {
      this._relationships.promoCodes = promoCodes;
    }
    /** @type {PromoCode[]} */
    ,
    get: function get() {
      return this._relationships.promoCodes;
    }
  }]);

  return Restaurant;
}(_clientBase.Resource);

_clientBase.ResourceClasses['restaurants'] = Restaurant;
/** @class RestaurantRelDao
 * @extends RelationshipDao  **/

var RestaurantRelDao = function (_RelationshipDao6) {
  _inherits(RestaurantRelDao, _RelationshipDao6);

  function RestaurantRelDao(client) {
    _classCallCheck(this, RestaurantRelDao);

    var _this17 = _possibleConstructorReturn(this, (RestaurantRelDao.__proto__ || Object.getPrototypeOf(RestaurantRelDao)).call(this, client, 'restaurants', Restaurant));

    _this17.id = null;
    _this17.get = {
      billingLocation: function billingLocation(options) {
        return _this17.toOne('billing-location', Location, options);
      },
      billingContact: function billingContact(options) {
        return _this17.toOne('billing-contact', Contact, options);
      },
      owner: function owner(options) {
        return _this17.toOne('owner', User, options);
      }
    };
    _this17.index = {
      orders: function orders(options) {
        return _this17.toMany('orders', Order, options);
      },
      serviceTimes: function serviceTimes(options) {
        return _this17.toMany('service-times', ServiceTime, options);
      },
      pickupLocations: function pickupLocations(options) {
        return _this17.toMany('pickup-locations', PickupLocation, options);
      },
      dietaryTags: function dietaryTags(options) {
        return _this17.toMany('dietary-tags', DietaryTag, options);
      },
      tags: function tags(options) {
        return _this17.toMany('tags', Tag, options);
      },
      areas: function areas(options) {
        return _this17.toMany('areas', Area, options);
      },
      menus: function menus(options) {
        return _this17.toMany('menus', Menu, options);
      },
      closures: function closures(options) {
        return _this17.toMany('closures', RestaurantClosure, options);
      },
      versions: function versions(options) {
        return _this17.toMany('versions', Version, options);
      },
      promoCodes: function promoCodes(options) {
        return _this17.toMany('promo-codes', PromoCode, options);
      }
    };
    return _this17;
  }

  return RestaurantRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantDao
 * @extends ResourceDao  **/


var RestaurantDao = function (_ResourceDao6) {
  _inherits(RestaurantDao, _ResourceDao6);

  function RestaurantDao(client) {
    _classCallCheck(this, RestaurantDao);

    var _this18 = _possibleConstructorReturn(this, (RestaurantDao.__proto__ || Object.getPrototypeOf(RestaurantDao)).call(this, client, 'restaurants', Restaurant));

    _this18.relationshipDao = new RestaurantRelDao(client, 'restaurants');
    return _this18;
  }

  return RestaurantDao;
}(_clientBase.ResourceDao);

/** @class InvoicingTaxRate
 * @extends Resource  **/


var InvoicingTaxRate = exports.InvoicingTaxRate = function (_Resource7) {
  _inherits(InvoicingTaxRate, _Resource7);

  function InvoicingTaxRate() {
    _classCallCheck(this, InvoicingTaxRate);

    return _possibleConstructorReturn(this, (InvoicingTaxRate.__proto__ || Object.getPrototypeOf(InvoicingTaxRate)).apply(this, arguments));
  }

  _createClass(InvoicingTaxRate, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} rate **/

  }, {
    key: 'rate',
    set: function set(rate) {
      this._attributes.rate = rate;
    },
    get: function get() {
      return this._attributes.rate;
    }
    /** @param {string} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }
    /** @param {string} isValid **/

  }, {
    key: 'isValid',
    set: function set(isValid) {
      this._attributes.isValid = isValid;
    },
    get: function get() {
      return this._attributes.isValid;
    }
    /** @param {string} isDefault **/

  }, {
    key: 'isDefault',
    set: function set(isDefault) {
      this._attributes.isDefault = isDefault;
    },
    get: function get() {
      return this._attributes.isDefault;
    }
    /** @param {string} taxCode **/

  }, {
    key: 'taxCode',
    set: function set(taxCode) {
      this._attributes.taxCode = taxCode;
    },
    get: function get() {
      return this._attributes.taxCode;
    }
    /** @param {string} validFrom **/

  }, {
    key: 'validFrom',
    set: function set(validFrom) {
      this._attributes.validFrom = validFrom;
    },
    get: function get() {
      return this._attributes.validFrom;
    }
    /** @param {string} validUntil **/

  }, {
    key: 'validUntil',
    set: function set(validUntil) {
      this._attributes.validUntil = validUntil;
    },
    get: function get() {
      return this._attributes.validUntil;
    }

    /** @param {Area} area **/

  }, {
    key: 'area',
    set: function set(area) {
      this._relationships.area = area;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.area;
    }
  }]);

  return InvoicingTaxRate;
}(_clientBase.Resource);

_clientBase.ResourceClasses['invoicing-tax-rates'] = InvoicingTaxRate;
/** @class InvoicingTaxRateRelDao
 * @extends RelationshipDao  **/

var InvoicingTaxRateRelDao = function (_RelationshipDao7) {
  _inherits(InvoicingTaxRateRelDao, _RelationshipDao7);

  function InvoicingTaxRateRelDao(client) {
    _classCallCheck(this, InvoicingTaxRateRelDao);

    var _this20 = _possibleConstructorReturn(this, (InvoicingTaxRateRelDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateRelDao)).call(this, client, 'invoicing-tax-rates', InvoicingTaxRate));

    _this20.id = null;
    _this20.get = {
      area: function area(options) {
        return _this20.toOne('area', Area, options);
      }
    };
    _this20.index = {};
    return _this20;
  }

  return InvoicingTaxRateRelDao;
}(_clientBase.RelationshipDao);
/** @class InvoicingTaxRateDao
 * @extends ResourceDao  **/


var InvoicingTaxRateDao = function (_ResourceDao7) {
  _inherits(InvoicingTaxRateDao, _ResourceDao7);

  function InvoicingTaxRateDao(client) {
    _classCallCheck(this, InvoicingTaxRateDao);

    var _this21 = _possibleConstructorReturn(this, (InvoicingTaxRateDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateDao)).call(this, client, 'invoicing-tax-rates', InvoicingTaxRate));

    _this21.relationshipDao = new InvoicingTaxRateRelDao(client, 'invoicing-tax-rates');
    return _this21;
  }

  return InvoicingTaxRateDao;
}(_clientBase.ResourceDao);

/** @class AreaClosure
 * @extends Resource  **/


var AreaClosure = exports.AreaClosure = function (_Resource8) {
  _inherits(AreaClosure, _Resource8);

  function AreaClosure() {
    _classCallCheck(this, AreaClosure);

    return _possibleConstructorReturn(this, (AreaClosure.__proto__ || Object.getPrototypeOf(AreaClosure)).apply(this, arguments));
  }

  _createClass(AreaClosure, [{
    key: 'startBlock',

    /** @param {Date} startBlock **/
    set: function set(startBlock) {
      this._attributes.startBlock = startBlock;
    },
    get: function get() {
      return this._attributes.startBlock;
    }
    /** @param {Date} endBlock **/

  }, {
    key: 'endBlock',
    set: function set(endBlock) {
      this._attributes.endBlock = endBlock;
    },
    get: function get() {
      return this._attributes.endBlock;
    }
    /** @param {Date} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {Date} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }

    /** @param {Area} area **/

  }, {
    key: 'area',
    set: function set(area) {
      this._relationships.area = area;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.area;
    }
  }]);

  return AreaClosure;
}(_clientBase.Resource);

_clientBase.ResourceClasses['area-closures'] = AreaClosure;
/** @class AreaClosureRelDao
 * @extends RelationshipDao  **/

var AreaClosureRelDao = function (_RelationshipDao8) {
  _inherits(AreaClosureRelDao, _RelationshipDao8);

  function AreaClosureRelDao(client) {
    _classCallCheck(this, AreaClosureRelDao);

    var _this23 = _possibleConstructorReturn(this, (AreaClosureRelDao.__proto__ || Object.getPrototypeOf(AreaClosureRelDao)).call(this, client, 'area-closures', AreaClosure));

    _this23.id = null;
    _this23.get = {
      area: function area(options) {
        return _this23.toOne('area', Area, options);
      }
    };
    _this23.index = {};
    return _this23;
  }

  return AreaClosureRelDao;
}(_clientBase.RelationshipDao);
/** @class AreaClosureDao
 * @extends ResourceDao  **/


var AreaClosureDao = function (_ResourceDao8) {
  _inherits(AreaClosureDao, _ResourceDao8);

  function AreaClosureDao(client) {
    _classCallCheck(this, AreaClosureDao);

    var _this24 = _possibleConstructorReturn(this, (AreaClosureDao.__proto__ || Object.getPrototypeOf(AreaClosureDao)).call(this, client, 'area-closures', AreaClosure));

    _this24.relationshipDao = new AreaClosureRelDao(client, 'area-closures');
    return _this24;
  }

  return AreaClosureDao;
}(_clientBase.ResourceDao);

/** @class PromoCode
 * @extends Resource  **/


var PromoCode = exports.PromoCode = function (_Resource9) {
  _inherits(PromoCode, _Resource9);

  function PromoCode() {
    _classCallCheck(this, PromoCode);

    return _possibleConstructorReturn(this, (PromoCode.__proto__ || Object.getPrototypeOf(PromoCode)).apply(this, arguments));
  }

  _createClass(PromoCode, [{
    key: 'code',

    /** @param {string} code **/
    set: function set(code) {
      this._attributes.code = code;
    },
    get: function get() {
      return this._attributes.code;
    }
    /** @param {string} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }
    /** @param {string} amount **/

  }, {
    key: 'amount',
    set: function set(amount) {
      this._attributes.amount = amount;
    },
    get: function get() {
      return this._attributes.amount;
    }
    /** @param {string} amountType **/

  }, {
    key: 'amountType',
    set: function set(amountType) {
      this._attributes.amountType = amountType;
    },
    get: function get() {
      return this._attributes.amountType;
    }
    /** @param {string} clientAccountingCode **/

  }, {
    key: 'clientAccountingCode',
    set: function set(clientAccountingCode) {
      this._attributes.clientAccountingCode = clientAccountingCode;
    },
    get: function get() {
      return this._attributes.clientAccountingCode;
    }
    /** @param {string} restaurantAccountingCode **/

  }, {
    key: 'restaurantAccountingCode',
    set: function set(restaurantAccountingCode) {
      this._attributes.restaurantAccountingCode = restaurantAccountingCode;
    },
    get: function get() {
      return this._attributes.restaurantAccountingCode;
    }
    /** @param {string} startsAt **/

  }, {
    key: 'startsAt',
    set: function set(startsAt) {
      this._attributes.startsAt = startsAt;
    },
    get: function get() {
      return this._attributes.startsAt;
    }
    /** @param {string} expiresAt **/

  }, {
    key: 'expiresAt',
    set: function set(expiresAt) {
      this._attributes.expiresAt = expiresAt;
    },
    get: function get() {
      return this._attributes.expiresAt;
    }
    /** @param {string} internal **/

  }, {
    key: 'internal',
    set: function set(internal) {
      this._attributes.internal = internal;
    },
    get: function get() {
      return this._attributes.internal;
    }
    /** @param {string} removed **/

  }, {
    key: 'removed',
    set: function set(removed) {
      this._attributes.removed = removed;
    },
    get: function get() {
      return this._attributes.removed;
    }
    /** @param {string} allowMultipleClientUses **/

  }, {
    key: 'allowMultipleClientUses',
    set: function set(allowMultipleClientUses) {
      this._attributes.allowMultipleClientUses = allowMultipleClientUses;
    },
    get: function get() {
      return this._attributes.allowMultipleClientUses;
    }

    /** @param {Area} area **/

  }, {
    key: 'area',
    set: function set(area) {
      this._relationships.area = area;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.area;
    }
    /** @param {Restaurant} restaurant **/

  }, {
    key: 'restaurant',
    set: function set(restaurant) {
      this._relationships.restaurant = restaurant;
    }
    /** @type {Restaurant} */
    ,
    get: function get() {
      return this._relationships.restaurant;
    }
    /** @param {Order[]} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order[]} */
    ,
    get: function get() {
      return this._relationships.order;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
  }]);

  return PromoCode;
}(_clientBase.Resource);

_clientBase.ResourceClasses['promo-codes'] = PromoCode;
/** @class PromoCodeRelDao
 * @extends RelationshipDao  **/

var PromoCodeRelDao = function (_RelationshipDao9) {
  _inherits(PromoCodeRelDao, _RelationshipDao9);

  function PromoCodeRelDao(client) {
    _classCallCheck(this, PromoCodeRelDao);

    var _this26 = _possibleConstructorReturn(this, (PromoCodeRelDao.__proto__ || Object.getPrototypeOf(PromoCodeRelDao)).call(this, client, 'promo-codes', PromoCode));

    _this26.id = null;
    _this26.get = {
      area: function area(options) {
        return _this26.toOne('area', Area, options);
      },
      restaurant: function restaurant(options) {
        return _this26.toOne('restaurant', Restaurant, options);
      }
    };
    _this26.index = {
      orders: function orders(options) {
        return _this26.toMany('orders', Order, options);
      },
      versions: function versions(options) {
        return _this26.toMany('versions', Version, options);
      }
    };
    return _this26;
  }

  return PromoCodeRelDao;
}(_clientBase.RelationshipDao);
/** @class PromoCodeDao
 * @extends ResourceDao  **/


var PromoCodeDao = function (_ResourceDao9) {
  _inherits(PromoCodeDao, _ResourceDao9);

  function PromoCodeDao(client) {
    _classCallCheck(this, PromoCodeDao);

    var _this27 = _possibleConstructorReturn(this, (PromoCodeDao.__proto__ || Object.getPrototypeOf(PromoCodeDao)).call(this, client, 'promo-codes', PromoCode));

    _this27.relationshipDao = new PromoCodeRelDao(client, 'promo-codes');
    return _this27;
  }

  return PromoCodeDao;
}(_clientBase.ResourceDao);

/** @class Company
 * @extends Resource  **/


var Company = exports.Company = function (_Resource10) {
  _inherits(Company, _Resource10);

  function Company() {
    _classCallCheck(this, Company);

    return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).apply(this, arguments));
  }

  _createClass(Company, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} clientCount **/

  }, {
    key: 'clientCount',
    set: function set(clientCount) {
      this._attributes.clientCount = clientCount;
    },
    get: function get() {
      return this._attributes.clientCount;
    }

    /** @param {Client[]} clients **/

  }, {
    key: 'clients',
    set: function set(clients) {
      this._relationships.clients = clients;
    }
    /** @type {Client[]} */
    ,
    get: function get() {
      return this._relationships.clients;
    }
  }]);

  return Company;
}(_clientBase.Resource);

_clientBase.ResourceClasses['companies'] = Company;
/** @class CompanyRelDao
 * @extends RelationshipDao  **/

var CompanyRelDao = function (_RelationshipDao10) {
  _inherits(CompanyRelDao, _RelationshipDao10);

  function CompanyRelDao(client) {
    _classCallCheck(this, CompanyRelDao);

    var _this29 = _possibleConstructorReturn(this, (CompanyRelDao.__proto__ || Object.getPrototypeOf(CompanyRelDao)).call(this, client, 'companies', Company));

    _this29.id = null;
    _this29.get = {};
    _this29.index = {
      clients: function clients(options) {
        return _this29.toMany('clients', Client, options);
      }
    };
    return _this29;
  }

  return CompanyRelDao;
}(_clientBase.RelationshipDao);
/** @class CompanyDao
 * @extends ResourceDao  **/


var CompanyDao = function (_ResourceDao10) {
  _inherits(CompanyDao, _ResourceDao10);

  function CompanyDao(client) {
    _classCallCheck(this, CompanyDao);

    var _this30 = _possibleConstructorReturn(this, (CompanyDao.__proto__ || Object.getPrototypeOf(CompanyDao)).call(this, client, 'companies', Company));

    _this30.relationshipDao = new CompanyRelDao(client, 'companies');
    return _this30;
  }

  return CompanyDao;
}(_clientBase.ResourceDao);

/** @class Contact
 * @extends Resource  **/


var Contact = exports.Contact = function (_Resource11) {
  _inherits(Contact, _Resource11);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'firstName',

    /** @param {string} firstName **/
    set: function set(firstName) {
      this._attributes.firstName = firstName;
    },
    get: function get() {
      return this._attributes.firstName;
    }
    /** @param {string} lastName **/

  }, {
    key: 'lastName',
    set: function set(lastName) {
      this._attributes.lastName = lastName;
    },
    get: function get() {
      return this._attributes.lastName;
    }
    /** @param {string} email **/

  }, {
    key: 'email',
    set: function set(email) {
      this._attributes.email = email;
    },
    get: function get() {
      return this._attributes.email;
    }
    /** @param {string} extension **/

  }, {
    key: 'extension',
    set: function set(extension) {
      this._attributes.extension = extension;
    },
    get: function get() {
      return this._attributes.extension;
    }
    /** @param {string} phoneNumber **/

  }, {
    key: 'phoneNumber',
    set: function set(phoneNumber) {
      this._attributes.phoneNumber = phoneNumber;
    },
    get: function get() {
      return this._attributes.phoneNumber;
    }
    /** @param {string} smsNumber **/

  }, {
    key: 'smsNumber',
    set: function set(smsNumber) {
      this._attributes.smsNumber = smsNumber;
    },
    get: function get() {
      return this._attributes.smsNumber;
    }
    /** @param {string} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
  }]);

  return Contact;
}(_clientBase.Resource);

_clientBase.ResourceClasses['contacts'] = Contact;
/** @class ContactRelDao
 * @extends RelationshipDao  **/

var ContactRelDao = function (_RelationshipDao11) {
  _inherits(ContactRelDao, _RelationshipDao11);

  function ContactRelDao(client) {
    _classCallCheck(this, ContactRelDao);

    var _this32 = _possibleConstructorReturn(this, (ContactRelDao.__proto__ || Object.getPrototypeOf(ContactRelDao)).call(this, client, 'contacts', Contact));

    _this32.id = null;
    _this32.get = {};
    _this32.index = {};
    return _this32;
  }

  return ContactRelDao;
}(_clientBase.RelationshipDao);
/** @class ContactDao
 * @extends ResourceDao  **/


var ContactDao = function (_ResourceDao11) {
  _inherits(ContactDao, _ResourceDao11);

  function ContactDao(client) {
    _classCallCheck(this, ContactDao);

    var _this33 = _possibleConstructorReturn(this, (ContactDao.__proto__ || Object.getPrototypeOf(ContactDao)).call(this, client, 'contacts', Contact));

    _this33.relationshipDao = new ContactRelDao(client, 'contacts');
    return _this33;
  }

  return ContactDao;
}(_clientBase.ResourceDao);

/** @class User
 * @extends Resource  **/


var User = exports.User = function (_Resource12) {
  _inherits(User, _Resource12);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'active',

    /** @param {boolean} active **/
    set: function set(active) {
      this._attributes.active = active;
    },
    get: function get() {
      return this._attributes.active;
    }
    /** @param {boolean} email **/

  }, {
    key: 'email',
    set: function set(email) {
      this._attributes.email = email;
    },
    get: function get() {
      return this._attributes.email;
    }
    /** @param {boolean} firstName **/

  }, {
    key: 'firstName',
    set: function set(firstName) {
      this._attributes.firstName = firstName;
    },
    get: function get() {
      return this._attributes.firstName;
    }
    /** @param {boolean} lastName **/

  }, {
    key: 'lastName',
    set: function set(lastName) {
      this._attributes.lastName = lastName;
    },
    get: function get() {
      return this._attributes.lastName;
    }
    /** @param {boolean} password **/

  }, {
    key: 'password',
    set: function set(password) {
      this._attributes.password = password;
    },
    get: function get() {
      return this._attributes.password;
    }
    /** @param {boolean} passwordConfirmation **/

  }, {
    key: 'passwordConfirmation',
    set: function set(passwordConfirmation) {
      this._attributes.passwordConfirmation = passwordConfirmation;
    },
    get: function get() {
      return this._attributes.passwordConfirmation;
    }
    /** @param {boolean} resetPasswordToken **/

  }, {
    key: 'resetPasswordToken',
    set: function set(resetPasswordToken) {
      this._attributes.resetPasswordToken = resetPasswordToken;
    },
    get: function get() {
      return this._attributes.resetPasswordToken;
    }
    /** @param {boolean} hasPassword **/

  }, {
    key: 'hasPassword',
    set: function set(hasPassword) {
      this._attributes.hasPassword = hasPassword;
    },
    get: function get() {
      return this._attributes.hasPassword;
    }
    /** @param {boolean} phoneNumber **/

  }, {
    key: 'phoneNumber',
    set: function set(phoneNumber) {
      this._attributes.phoneNumber = phoneNumber;
    },
    get: function get() {
      return this._attributes.phoneNumber;
    }
    /** @param {boolean} extension **/

  }, {
    key: 'extension',
    set: function set(extension) {
      this._attributes.extension = extension;
    },
    get: function get() {
      return this._attributes.extension;
    }
    /** @param {boolean} phoneCanSMS **/

  }, {
    key: 'phoneCanSMS',
    set: function set(phoneCanSMS) {
      this._attributes.phoneCanSMS = phoneCanSMS;
    },
    get: function get() {
      return this._attributes.phoneCanSMS;
    }
    /** @param {boolean} phoneType **/

  }, {
    key: 'phoneType',
    set: function set(phoneType) {
      this._attributes.phoneType = phoneType;
    },
    get: function get() {
      return this._attributes.phoneType;
    }
    /** @param {boolean} profilePicture **/

  }, {
    key: 'profilePicture',
    set: function set(profilePicture) {
      this._attributes.profilePicture = profilePicture;
    },
    get: function get() {
      return this._attributes.profilePicture;
    }
    /** @param {boolean} features **/

  }, {
    key: 'features',
    set: function set(features) {
      this._attributes.features = features;
    },
    get: function get() {
      return this._attributes.features;
    }
    /** @param {boolean} slackChannelInfo **/

  }, {
    key: 'slackChannelInfo',
    set: function set(slackChannelInfo) {
      this._attributes.slackChannelInfo = slackChannelInfo;
    },
    get: function get() {
      return this._attributes.slackChannelInfo;
    }
    /** @param {boolean} lastSignInAt **/

  }, {
    key: 'lastSignInAt',
    set: function set(lastSignInAt) {
      this._attributes.lastSignInAt = lastSignInAt;
    },
    get: function get() {
      return this._attributes.lastSignInAt;
    }
    /** @param {boolean} invitationSentAt **/

  }, {
    key: 'invitationSentAt',
    set: function set(invitationSentAt) {
      this._attributes.invitationSentAt = invitationSentAt;
    },
    get: function get() {
      return this._attributes.invitationSentAt;
    }
    /** @param {boolean} invitationToken **/

  }, {
    key: 'invitationToken',
    set: function set(invitationToken) {
      this._attributes.invitationToken = invitationToken;
    },
    get: function get() {
      return this._attributes.invitationToken;
    }
    /** @param {boolean} driverDeviceInfo **/

  }, {
    key: 'driverDeviceInfo',
    set: function set(driverDeviceInfo) {
      this._attributes.driverDeviceInfo = driverDeviceInfo;
    },
    get: function get() {
      return this._attributes.driverDeviceInfo;
    }
    /** @param {boolean} driverFileNumber **/

  }, {
    key: 'driverFileNumber',
    set: function set(driverFileNumber) {
      this._attributes.driverFileNumber = driverFileNumber;
    },
    get: function get() {
      return this._attributes.driverFileNumber;
    }
    /** @param {boolean} driverSpeedRating **/

  }, {
    key: 'driverSpeedRating',
    set: function set(driverSpeedRating) {
      this._attributes.driverSpeedRating = driverSpeedRating;
    },
    get: function get() {
      return this._attributes.driverSpeedRating;
    }
    /** @param {boolean} driverVehicleType **/

  }, {
    key: 'driverVehicleType',
    set: function set(driverVehicleType) {
      this._attributes.driverVehicleType = driverVehicleType;
    },
    get: function get() {
      return this._attributes.driverVehicleType;
    }
    /** @param {boolean} lastDriverNotificationSentAt **/

  }, {
    key: 'lastDriverNotificationSentAt',
    set: function set(lastDriverNotificationSentAt) {
      this._attributes.lastDriverNotificationSentAt = lastDriverNotificationSentAt;
    },
    get: function get() {
      return this._attributes.lastDriverNotificationSentAt;
    }
    /** @param {boolean} isActiveDriver **/

  }, {
    key: 'isActiveDriver',
    set: function set(isActiveDriver) {
      this._attributes.isActiveDriver = isActiveDriver;
    },
    get: function get() {
      return this._attributes.isActiveDriver;
    }
    /** @param {boolean} clientAlwaysCall **/

  }, {
    key: 'clientAlwaysCall',
    set: function set(clientAlwaysCall) {
      this._attributes.clientAlwaysCall = clientAlwaysCall;
    },
    get: function get() {
      return this._attributes.clientAlwaysCall;
    }

    /** @param {DriverPing[]} driverPings **/

  }, {
    key: 'driverPings',
    set: function set(driverPings) {
      this._relationships.driverPings = driverPings;
    }
    /** @type {DriverPing[]} */
    ,
    get: function get() {
      return this._relationships.driverPings;
    }
    /** @param {DriverWeek[]} driverWeeks **/

  }, {
    key: 'driverWeeks',
    set: function set(driverWeeks) {
      this._relationships.driverWeeks = driverWeeks;
    }
    /** @type {DriverWeek[]} */
    ,
    get: function get() {
      return this._relationships.driverWeeks;
    }
    /** @param {DriverDay[]} driverDays **/

  }, {
    key: 'driverDays',
    set: function set(driverDays) {
      this._relationships.driverDays = driverDays;
    }
    /** @type {DriverDay[]} */
    ,
    get: function get() {
      return this._relationships.driverDays;
    }
    /** @param {Order[]} deliveredOrders **/

  }, {
    key: 'deliveredOrders',
    set: function set(deliveredOrders) {
      this._relationships.deliveredOrders = deliveredOrders;
    }
    /** @type {Order[]} */
    ,
    get: function get() {
      return this._relationships.deliveredOrders;
    }
    /** @param {Courier[]} couriers **/

  }, {
    key: 'couriers',
    set: function set(couriers) {
      this._relationships.couriers = couriers;
    }
    /** @type {Courier[]} */
    ,
    get: function get() {
      return this._relationships.couriers;
    }
    /** @param {Role[]} roles **/

  }, {
    key: 'roles',
    set: function set(roles) {
      this._relationships.roles = roles;
    }
    /** @type {Role[]} */
    ,
    get: function get() {
      return this._relationships.roles;
    }
    /** @param {PaymentCard[]} paymentCards **/

  }, {
    key: 'paymentCards',
    set: function set(paymentCards) {
      this._relationships.paymentCards = paymentCards;
    }
    /** @type {PaymentCard[]} */
    ,
    get: function get() {
      return this._relationships.paymentCards;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
  }]);

  return User;
}(_clientBase.Resource);

_clientBase.ResourceClasses['users'] = User;
/** @class UserRelDao
 * @extends RelationshipDao  **/

var UserRelDao = function (_RelationshipDao12) {
  _inherits(UserRelDao, _RelationshipDao12);

  function UserRelDao(client) {
    _classCallCheck(this, UserRelDao);

    var _this35 = _possibleConstructorReturn(this, (UserRelDao.__proto__ || Object.getPrototypeOf(UserRelDao)).call(this, client, 'users', User));

    _this35.id = null;
    _this35.get = {};
    _this35.index = {
      driverPings: function driverPings(options) {
        return _this35.toMany('driver-pings', DriverPing, options);
      },
      driverWeeks: function driverWeeks(options) {
        return _this35.toMany('driver-weeks', DriverWeek, options);
      },
      driverDays: function driverDays(options) {
        return _this35.toMany('driver-days', DriverDay, options);
      },
      deliveredOrders: function deliveredOrders(options) {
        return _this35.toMany('delivered-orders', Order, options);
      },
      couriers: function couriers(options) {
        return _this35.toMany('couriers', Courier, options);
      },
      roles: function roles(options) {
        return _this35.toMany('roles', Role, options);
      },
      paymentCards: function paymentCards(options) {
        return _this35.toMany('payment-cards', PaymentCard, options);
      },
      versions: function versions(options) {
        return _this35.toMany('versions', Version, options);
      }
    };
    return _this35;
  }

  return UserRelDao;
}(_clientBase.RelationshipDao);
/** @class UserDao
 * @extends ResourceDao  **/


var UserDao = function (_ResourceDao12) {
  _inherits(UserDao, _ResourceDao12);

  function UserDao(client) {
    _classCallCheck(this, UserDao);

    var _this36 = _possibleConstructorReturn(this, (UserDao.__proto__ || Object.getPrototypeOf(UserDao)).call(this, client, 'users', User));

    _this36.relationshipDao = new UserRelDao(client, 'users');
    return _this36;
  }

  return UserDao;
}(_clientBase.ResourceDao);

/** @class DeliveryLocation
 * @extends Resource  **/


var DeliveryLocation = exports.DeliveryLocation = function (_Resource13) {
  _inherits(DeliveryLocation, _Resource13);

  function DeliveryLocation() {
    _classCallCheck(this, DeliveryLocation);

    return _possibleConstructorReturn(this, (DeliveryLocation.__proto__ || Object.getPrototypeOf(DeliveryLocation)).apply(this, arguments));
  }

  _createClass(DeliveryLocation, [{
    key: 'name',

    /** @param {any} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {any} addressCode **/

  }, {
    key: 'addressCode',
    set: function set(addressCode) {
      this._attributes.addressCode = addressCode;
    },
    get: function get() {
      return this._attributes.addressCode;
    }
    /** @param {any} building **/

  }, {
    key: 'building',
    set: function set(building) {
      this._attributes.building = building;
    },
    get: function get() {
      return this._attributes.building;
    }
    /** @param {any} buzzer **/

  }, {
    key: 'buzzer',
    set: function set(buzzer) {
      this._attributes.buzzer = buzzer;
    },
    get: function get() {
      return this._attributes.buzzer;
    }
    /** @param {any} city **/

  }, {
    key: 'city',
    set: function set(city) {
      this._attributes.city = city;
    },
    get: function get() {
      return this._attributes.city;
    }
    /** @param {any} country **/

  }, {
    key: 'country',
    set: function set(country) {
      this._attributes.country = country;
    },
    get: function get() {
      return this._attributes.country;
    }
    /** @param {any} floor **/

  }, {
    key: 'floor',
    set: function set(floor) {
      this._attributes.floor = floor;
    },
    get: function get() {
      return this._attributes.floor;
    }
    /** @param {any} latitude **/

  }, {
    key: 'latitude',
    set: function set(latitude) {
      this._attributes.latitude = latitude;
    },
    get: function get() {
      return this._attributes.latitude;
    }
    /** @param {any} locationId **/

  }, {
    key: 'locationId',
    set: function set(locationId) {
      this._attributes.locationId = locationId;
    },
    get: function get() {
      return this._attributes.locationId;
    }
    /** @param {any} longitude **/

  }, {
    key: 'longitude',
    set: function set(longitude) {
      this._attributes.longitude = longitude;
    },
    get: function get() {
      return this._attributes.longitude;
    }
    /** @param {any} province **/

  }, {
    key: 'province',
    set: function set(province) {
      this._attributes.province = province;
    },
    get: function get() {
      return this._attributes.province;
    }
    /** @param {any} street **/

  }, {
    key: 'street',
    set: function set(street) {
      this._attributes.street = street;
    },
    get: function get() {
      return this._attributes.street;
    }
    /** @param {any} unitNumber **/

  }, {
    key: 'unitNumber',
    set: function set(unitNumber) {
      this._attributes.unitNumber = unitNumber;
    },
    get: function get() {
      return this._attributes.unitNumber;
    }
    /** @param {boolean} isDefault **/

  }, {
    key: 'isDefault',
    set: function set(isDefault) {
      this._attributes['default'] = isDefault;
    },
    get: function get() {
      return this._attributes['default'];
    }
    /** @param {any} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }

    /** @param {Client} client **/

  }, {
    key: 'client',
    set: function set(client) {
      this._relationships.client = client;
    }
    /** @type {Client} */
    ,
    get: function get() {
      return this._relationships.client;
    }
    /** @param {Location} location **/

  }, {
    key: 'location',
    set: function set(location) {
      this._relationships.location = location;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.location;
    }
  }]);

  return DeliveryLocation;
}(_clientBase.Resource);

_clientBase.ResourceClasses['delivery-locations'] = DeliveryLocation;
/** @class DeliveryLocationRelDao
 * @extends RelationshipDao  **/

var DeliveryLocationRelDao = function (_RelationshipDao13) {
  _inherits(DeliveryLocationRelDao, _RelationshipDao13);

  function DeliveryLocationRelDao(client) {
    _classCallCheck(this, DeliveryLocationRelDao);

    var _this38 = _possibleConstructorReturn(this, (DeliveryLocationRelDao.__proto__ || Object.getPrototypeOf(DeliveryLocationRelDao)).call(this, client, 'delivery-locations', DeliveryLocation));

    _this38.id = null;
    _this38.get = {
      client: function client(options) {
        return _this38.toOne('client', Client, options);
      },
      location: function location(options) {
        return _this38.toOne('location', Location, options);
      }
    };
    _this38.index = {};
    return _this38;
  }

  return DeliveryLocationRelDao;
}(_clientBase.RelationshipDao);
/** @class DeliveryLocationDao
 * @extends ResourceDao  **/


var DeliveryLocationDao = function (_ResourceDao13) {
  _inherits(DeliveryLocationDao, _ResourceDao13);

  function DeliveryLocationDao(client) {
    _classCallCheck(this, DeliveryLocationDao);

    var _this39 = _possibleConstructorReturn(this, (DeliveryLocationDao.__proto__ || Object.getPrototypeOf(DeliveryLocationDao)).call(this, client, 'delivery-locations', DeliveryLocation));

    _this39.relationshipDao = new DeliveryLocationRelDao(client, 'delivery-locations');
    return _this39;
  }

  return DeliveryLocationDao;
}(_clientBase.ResourceDao);

/** @class Location
 * @extends Resource  **/


var Location = exports.Location = function (_Resource14) {
  _inherits(Location, _Resource14);

  function Location() {
    _classCallCheck(this, Location);

    return _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).apply(this, arguments));
  }

  _createClass(Location, [{
    key: 'latitude',

    /** @param {*} latitude **/
    set: function set(latitude) {
      this._attributes.latitude = latitude;
    },
    get: function get() {
      return this._attributes.latitude;
    }
    /** @param {*} longitude **/

  }, {
    key: 'longitude',
    set: function set(longitude) {
      this._attributes.longitude = longitude;
    },
    get: function get() {
      return this._attributes.longitude;
    }
    /** @param {*} buzzer **/

  }, {
    key: 'buzzer',
    set: function set(buzzer) {
      this._attributes.buzzer = buzzer;
    },
    get: function get() {
      return this._attributes.buzzer;
    }
    /** @param {*} unitNumber **/

  }, {
    key: 'unitNumber',
    set: function set(unitNumber) {
      this._attributes.unitNumber = unitNumber;
    },
    get: function get() {
      return this._attributes.unitNumber;
    }
    /** @param {*} floor **/

  }, {
    key: 'floor',
    set: function set(floor) {
      this._attributes.floor = floor;
    },
    get: function get() {
      return this._attributes.floor;
    }
    /** @param {*} building **/

  }, {
    key: 'building',
    set: function set(building) {
      this._attributes.building = building;
    },
    get: function get() {
      return this._attributes.building;
    }
    /** @param {*} city **/

  }, {
    key: 'city',
    set: function set(city) {
      this._attributes.city = city;
    },
    get: function get() {
      return this._attributes.city;
    }
    /** @param {*} country **/

  }, {
    key: 'country',
    set: function set(country) {
      this._attributes.country = country;
    },
    get: function get() {
      return this._attributes.country;
    }
    /** @param {*} province **/

  }, {
    key: 'province',
    set: function set(province) {
      this._attributes.province = province;
    },
    get: function get() {
      return this._attributes.province;
    }
    /** @param {*} street **/

  }, {
    key: 'street',
    set: function set(street) {
      this._attributes.street = street;
    },
    get: function get() {
      return this._attributes.street;
    }
    /** @param {*} addressCode **/

  }, {
    key: 'addressCode',
    set: function set(addressCode) {
      this._attributes.addressCode = addressCode;
    },
    get: function get() {
      return this._attributes.addressCode;
    }
    /** @param {boolean} isDefault **/

  }, {
    key: 'isDefault',
    set: function set(isDefault) {
      this._attributes['default'] = isDefault;
    },
    get: function get() {
      return this._attributes['default'];
    }
    /** @param {*} addressLine1 **/

  }, {
    key: 'addressLine1',
    set: function set(addressLine1) {
      this._attributes.addressLine1 = addressLine1;
    },
    get: function get() {
      return this._attributes.addressLine1;
    }
    /** @param {*} rawAddress **/

  }, {
    key: 'rawAddress',
    set: function set(rawAddress) {
      this._attributes.rawAddress = rawAddress;
    },
    get: function get() {
      return this._attributes.rawAddress;
    }

    /** @param {Area} area **/

  }, {
    key: 'area',
    set: function set(area) {
      this._relationships.area = area;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.area;
    }
  }]);

  return Location;
}(_clientBase.Resource);

_clientBase.ResourceClasses['locations'] = Location;
/** @class LocationRelDao
 * @extends RelationshipDao  **/

var LocationRelDao = function (_RelationshipDao14) {
  _inherits(LocationRelDao, _RelationshipDao14);

  function LocationRelDao(client) {
    _classCallCheck(this, LocationRelDao);

    var _this41 = _possibleConstructorReturn(this, (LocationRelDao.__proto__ || Object.getPrototypeOf(LocationRelDao)).call(this, client, 'locations', Location));

    _this41.id = null;
    _this41.get = {
      area: function area(options) {
        return _this41.toOne('area', Area, options);
      }
    };
    _this41.index = {};
    return _this41;
  }

  return LocationRelDao;
}(_clientBase.RelationshipDao);
/** @class LocationDao
 * @extends ResourceDao  **/


var LocationDao = function (_ResourceDao14) {
  _inherits(LocationDao, _ResourceDao14);

  function LocationDao(client) {
    _classCallCheck(this, LocationDao);

    var _this42 = _possibleConstructorReturn(this, (LocationDao.__proto__ || Object.getPrototypeOf(LocationDao)).call(this, client, 'locations', Location));

    _this42.relationshipDao = new LocationRelDao(client, 'locations');
    return _this42;
  }

  return LocationDao;
}(_clientBase.ResourceDao);

/** @class Order
 * @extends Resource  **/


var Order = exports.Order = function (_Resource15) {
  _inherits(Order, _Resource15);

  function Order() {
    _classCallCheck(this, Order);

    return _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).apply(this, arguments));
  }

  _createClass(Order, [{
    key: 'areaId',

    /** @param {number} areaId **/
    set: function set(areaId) {
      this._attributes.areaId = areaId;
    },
    get: function get() {
      return this._attributes.areaId;
    }
    /** @param {number} alertStatus **/

  }, {
    key: 'alertStatus',
    set: function set(alertStatus) {
      this._attributes.alertStatus = alertStatus;
    },
    get: function get() {
      return this._attributes.alertStatus;
    }
    /** @param {number} allowsPayOutOfPocket **/

  }, {
    key: 'allowsPayOutOfPocket',
    set: function set(allowsPayOutOfPocket) {
      this._attributes.allowsPayOutOfPocket = allowsPayOutOfPocket;
    },
    get: function get() {
      return this._attributes.allowsPayOutOfPocket;
    }
    /** @param {number} bowtieServiceFee **/

  }, {
    key: 'bowtieServiceFee',
    set: function set(bowtieServiceFee) {
      this._attributes.bowtieServiceFee = bowtieServiceFee;
    },
    get: function get() {
      return this._attributes.bowtieServiceFee;
    }
    /** @param {number} clientInvoicePdf **/

  }, {
    key: 'clientInvoicePdf',
    set: function set(clientInvoicePdf) {
      this._attributes.clientInvoicePdf = clientInvoicePdf;
    },
    get: function get() {
      return this._attributes.clientInvoicePdf;
    }
    /** @param {number} deadlineAt **/

  }, {
    key: 'deadlineAt',
    set: function set(deadlineAt) {
      this._attributes.deadlineAt = deadlineAt;
    },
    get: function get() {
      return this._attributes.deadlineAt;
    }
    /** @param {number} deliverAt **/

  }, {
    key: 'deliverAt',
    set: function set(deliverAt) {
      this._attributes.deliverAt = deliverAt;
    },
    get: function get() {
      return this._attributes.deliverAt;
    }
    /** @param {number} deliverOn **/

  }, {
    key: 'deliverOn',
    set: function set(deliverOn) {
      this._attributes.deliverOn = deliverOn;
    },
    get: function get() {
      return this._attributes.deliverOn;
    }
    /** @param {number} deliveredAt **/

  }, {
    key: 'deliveredAt',
    set: function set(deliveredAt) {
      this._attributes.deliveredAt = deliveredAt;
    },
    get: function get() {
      return this._attributes.deliveredAt;
    }
    /** @param {number} expiresAt **/

  }, {
    key: 'expiresAt',
    set: function set(expiresAt) {
      this._attributes.expiresAt = expiresAt;
    },
    get: function get() {
      return this._attributes.expiresAt;
    }
    /** @param {number} flag **/

  }, {
    key: 'flag',
    set: function set(flag) {
      this._attributes.flag = flag;
    },
    get: function get() {
      return this._attributes.flag;
    }
    /** @param {number} identifier **/

  }, {
    key: 'identifier',
    set: function set(identifier) {
      this._attributes.identifier = identifier;
    },
    get: function get() {
      return this._attributes.identifier;
    }
    /** @param {number} isAtMaxCapacity **/

  }, {
    key: 'isAtMaxCapacity',
    set: function set(isAtMaxCapacity) {
      this._attributes.isAtMaxCapacity = isAtMaxCapacity;
    },
    get: function get() {
      return this._attributes.isAtMaxCapacity;
    }
    /** @param {number} isFoodhall **/

  }, {
    key: 'isFoodhall',
    set: function set(isFoodhall) {
      this._attributes.isFoodhall = isFoodhall;
    },
    get: function get() {
      return this._attributes.isFoodhall;
    }
    /** @param {number} isGroupOrder **/

  }, {
    key: 'isGroupOrder',
    set: function set(isGroupOrder) {
      this._attributes.isGroupOrder = isGroupOrder;
    },
    get: function get() {
      return this._attributes.isGroupOrder;
    }
    /** @param {number} isMealPlanOrder **/

  }, {
    key: 'isMealPlanOrder',
    set: function set(isMealPlanOrder) {
      this._attributes.isMealPlanOrder = isMealPlanOrder;
    },
    get: function get() {
      return this._attributes.isMealPlanOrder;
    }
    /** @param {number} isSameDay **/

  }, {
    key: 'isSameDay',
    set: function set(isSameDay) {
      this._attributes.isSameDay = isSameDay;
    },
    get: function get() {
      return this._attributes.isSameDay;
    }
    /** @param {number} lastMinute **/

  }, {
    key: 'lastMinute',
    set: function set(lastMinute) {
      this._attributes.lastMinute = lastMinute;
    },
    get: function get() {
      return this._attributes.lastMinute;
    }
    /** @param {number} maxNumberOfPeople **/

  }, {
    key: 'maxNumberOfPeople',
    set: function set(maxNumberOfPeople) {
      this._attributes.maxNumberOfPeople = maxNumberOfPeople;
    },
    get: function get() {
      return this._attributes.maxNumberOfPeople;
    }
    /** @param {number} monitoringNotes **/

  }, {
    key: 'monitoringNotes',
    set: function set(monitoringNotes) {
      this._attributes.monitoringNotes = monitoringNotes;
    },
    get: function get() {
      return this._attributes.monitoringNotes;
    }
    /** @param {number} name **/

  }, {
    key: 'name',
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {number} notes **/

  }, {
    key: 'notes',
    set: function set(notes) {
      this._attributes.notes = notes;
    },
    get: function get() {
      return this._attributes.notes;
    }
    /** @param {number} numberOfPeople **/

  }, {
    key: 'numberOfPeople',
    set: function set(numberOfPeople) {
      this._attributes.numberOfPeople = numberOfPeople;
    },
    get: function get() {
      return this._attributes.numberOfPeople;
    }
    /** @param {number} orderSoldOut **/

  }, {
    key: 'orderSoldOut',
    set: function set(orderSoldOut) {
      this._attributes.orderSoldOut = orderSoldOut;
    },
    get: function get() {
      return this._attributes.orderSoldOut;
    }
    /** @param {number} payOutOfPocketFee **/

  }, {
    key: 'payOutOfPocketFee',
    set: function set(payOutOfPocketFee) {
      this._attributes.payOutOfPocketFee = payOutOfPocketFee;
    },
    get: function get() {
      return this._attributes.payOutOfPocketFee;
    }
    /** @param {number} perPersonBudget **/

  }, {
    key: 'perPersonBudget',
    set: function set(perPersonBudget) {
      this._attributes.perPersonBudget = perPersonBudget;
    },
    get: function get() {
      return this._attributes.perPersonBudget;
    }
    /** @param {number} pickedUpAt **/

  }, {
    key: 'pickedUpAt',
    set: function set(pickedUpAt) {
      this._attributes.pickedUpAt = pickedUpAt;
    },
    get: function get() {
      return this._attributes.pickedUpAt;
    }
    /** @param {number} pickupAt **/

  }, {
    key: 'pickupAt',
    set: function set(pickupAt) {
      this._attributes.pickupAt = pickupAt;
    },
    get: function get() {
      return this._attributes.pickupAt;
    }
    /** @param {number} setMenu **/

  }, {
    key: 'setMenu',
    set: function set(setMenu) {
      this._attributes.setMenu = setMenu;
    },
    get: function get() {
      return this._attributes.setMenu;
    }
    /** @param {number} skipDeliveryFee **/

  }, {
    key: 'skipDeliveryFee',
    set: function set(skipDeliveryFee) {
      this._attributes.skipDeliveryFee = skipDeliveryFee;
    },
    get: function get() {
      return this._attributes.skipDeliveryFee;
    }
    /** @param {number} stateEvent **/

  }, {
    key: 'stateEvent',
    set: function set(stateEvent) {
      this._attributes.stateEvent = stateEvent;
    },
    get: function get() {
      return this._attributes.stateEvent;
    }
    /** @param {number} state **/

  }, {
    key: 'state',
    set: function set(state) {
      this._attributes.state = state;
    },
    get: function get() {
      return this._attributes.state;
    }
    /** @param {number} tranche **/

  }, {
    key: 'tranche',
    set: function set(tranche) {
      this._attributes.tranche = tranche;
    },
    get: function get() {
      return this._attributes.tranche;
    }
    /** @param {number} totalAmount **/

  }, {
    key: 'totalAmount',
    set: function set(totalAmount) {
      this._attributes.totalAmount = totalAmount;
    },
    get: function get() {
      return this._attributes.totalAmount;
    }
    /** @param {number} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
    /** @param {number} clientLocationId **/

  }, {
    key: 'clientLocationId',
    set: function set(clientLocationId) {
      this._attributes.clientLocationId = clientLocationId;
    },
    get: function get() {
      return this._attributes.clientLocationId;
    }
    /** @param {number} clientConfirmationId **/

  }, {
    key: 'clientConfirmationId',
    set: function set(clientConfirmationId) {
      this._attributes.clientConfirmationId = clientConfirmationId;
    },
    get: function get() {
      return this._attributes.clientConfirmationId;
    }
    /** @param {number} restaurantConfirmationId **/

  }, {
    key: 'restaurantConfirmationId',
    set: function set(restaurantConfirmationId) {
      this._attributes.restaurantConfirmationId = restaurantConfirmationId;
    },
    get: function get() {
      return this._attributes.restaurantConfirmationId;
    }
    /** @param {number} isBookmark **/

  }, {
    key: 'isBookmark',
    set: function set(isBookmark) {
      this._attributes.isBookmark = isBookmark;
    },
    get: function get() {
      return this._attributes.isBookmark;
    }
    /** @param {number} bookmarkExpiresAt **/

  }, {
    key: 'bookmarkExpiresAt',
    set: function set(bookmarkExpiresAt) {
      this._attributes.bookmarkExpiresAt = bookmarkExpiresAt;
    },
    get: function get() {
      return this._attributes.bookmarkExpiresAt;
    }
    /** @param {number} bookmarkName **/

  }, {
    key: 'bookmarkName',
    set: function set(bookmarkName) {
      this._attributes.bookmarkName = bookmarkName;
    },
    get: function get() {
      return this._attributes.bookmarkName;
    }
    /** @param {number} urlSafeId **/

  }, {
    key: 'urlSafeId',
    set: function set(urlSafeId) {
      this._attributes.urlSafeId = urlSafeId;
    },
    get: function get() {
      return this._attributes.urlSafeId;
    }
    /** @param {number} uuid **/

  }, {
    key: 'uuid',
    set: function set(uuid) {
      this._attributes.uuid = uuid;
    },
    get: function get() {
      return this._attributes.uuid;
    }
    /** @param {number} online **/

  }, {
    key: 'online',
    set: function set(online) {
      this._attributes.online = online;
    },
    get: function get() {
      return this._attributes.online;
    }

    /** @param {Area} area **/

  }, {
    key: 'area',
    set: function set(area) {
      this._relationships.area = area;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.area;
    }
    /** @param {User} owner **/

  }, {
    key: 'owner',
    set: function set(owner) {
      this._relationships.owner = owner;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.owner;
    }
    /** @param {User} creator **/

  }, {
    key: 'creator',
    set: function set(creator) {
      this._relationships.creator = creator;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.creator;
    }
    /** @param {PaymentCard} paymentCard **/

  }, {
    key: 'paymentCard',
    set: function set(paymentCard) {
      this._relationships.paymentCard = paymentCard;
    }
    /** @type {PaymentCard} */
    ,
    get: function get() {
      return this._relationships.paymentCard;
    }
    /** @param {Contact} contact **/

  }, {
    key: 'contact',
    set: function set(contact) {
      this._relationships.contact = contact;
    }
    /** @type {Contact} */
    ,
    get: function get() {
      return this._relationships.contact;
    }
    /** @param {Client} client **/

  }, {
    key: 'client',
    set: function set(client) {
      this._relationships.client = client;
    }
    /** @type {Client} */
    ,
    get: function get() {
      return this._relationships.client;
    }
    /** @param {Restaurant} restaurant **/

  }, {
    key: 'restaurant',
    set: function set(restaurant) {
      this._relationships.restaurant = restaurant;
    }
    /** @type {Restaurant} */
    ,
    get: function get() {
      return this._relationships.restaurant;
    }
    /** @param {Courier} courier **/

  }, {
    key: 'courier',
    set: function set(courier) {
      this._relationships.courier = courier;
    }
    /** @type {Courier} */
    ,
    get: function get() {
      return this._relationships.courier;
    }
    /** @param {PromoCode} promoCode **/

  }, {
    key: 'promoCode',
    set: function set(promoCode) {
      this._relationships.promoCode = promoCode;
    }
    /** @type {PromoCode} */
    ,
    get: function get() {
      return this._relationships.promoCode;
    }
    /** @param {User} driver **/

  }, {
    key: 'driver',
    set: function set(driver) {
      this._relationships.driver = driver;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.driver;
    }
    /** @param {Location} restaurantLocation **/

  }, {
    key: 'restaurantLocation',
    set: function set(restaurantLocation) {
      this._relationships.restaurantLocation = restaurantLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.restaurantLocation;
    }
    /** @param {Location} clientLocation **/

  }, {
    key: 'clientLocation',
    set: function set(clientLocation) {
      this._relationships.clientLocation = clientLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.clientLocation;
    }
    /** @param {ClientDiscount} clientDiscount **/

  }, {
    key: 'clientDiscount',
    set: function set(clientDiscount) {
      this._relationships.clientDiscount = clientDiscount;
    }
    /** @type {ClientDiscount} */
    ,
    get: function get() {
      return this._relationships.clientDiscount;
    }
    /** @param {RestaurantDiscount} restaurantDiscount **/

  }, {
    key: 'restaurantDiscount',
    set: function set(restaurantDiscount) {
      this._relationships.restaurantDiscount = restaurantDiscount;
    }
    /** @type {RestaurantDiscount} */
    ,
    get: function get() {
      return this._relationships.restaurantDiscount;
    }
    /** @param {Menu} menu **/

  }, {
    key: 'menu',
    set: function set(menu) {
      this._relationships.menu = menu;
    }
    /** @type {Menu} */
    ,
    get: function get() {
      return this._relationships.menu;
    }
    /** @param {EmailMessage[]} emailMessages **/

  }, {
    key: 'emailMessages',
    set: function set(emailMessages) {
      this._relationships.emailMessages = emailMessages;
    }
    /** @type {EmailMessage[]} */
    ,
    get: function get() {
      return this._relationships.emailMessages;
    }
    /** @param {DeliveryCase[]} deliveryCases **/

  }, {
    key: 'deliveryCases',
    set: function set(deliveryCases) {
      this._relationships.deliveryCases = deliveryCases;
    }
    /** @type {DeliveryCase[]} */
    ,
    get: function get() {
      return this._relationships.deliveryCases;
    }
    /** @param {DeskCase[]} deskCases **/

  }, {
    key: 'deskCases',
    set: function set(deskCases) {
      this._relationships.deskCases = deskCases;
    }
    /** @type {DeskCase[]} */
    ,
    get: function get() {
      return this._relationships.deskCases;
    }
    /** @param {Version[]} versions **/

  }, {
    key: 'versions',
    set: function set(versions) {
      this._relationships.versions = versions;
    }
    /** @type {Version[]} */
    ,
    get: function get() {
      return this._relationships.versions;
    }
    /** @param {Location} customLocation **/

  }, {
    key: 'customLocation',
    set: function set(customLocation) {
      this._relationships.customLocation = customLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.customLocation;
    }
    /** @param {GroupOrderMember[]} groupOrderMembers **/

  }, {
    key: 'groupOrderMembers',
    set: function set(groupOrderMembers) {
      this._relationships.groupOrderMembers = groupOrderMembers;
    }
    /** @type {GroupOrderMember[]} */
    ,
    get: function get() {
      return this._relationships.groupOrderMembers;
    }
    /** @param {OrderItem[]} orderItems **/

  }, {
    key: 'orderItems',
    set: function set(orderItems) {
      this._relationships.orderItems = orderItems;
    }
    /** @type {OrderItem[]} */
    ,
    get: function get() {
      return this._relationships.orderItems;
    }
    /** @param {GiftbitError} giftbitError **/

  }, {
    key: 'giftbitError',
    set: function set(giftbitError) {
      this._relationships.giftbitError = giftbitError;
    }
    /** @type {GiftbitError} */
    ,
    get: function get() {
      return this._relationships.giftbitError;
    }
    /** @param {ClientOrderInvoice} clientOrderInvoice **/

  }, {
    key: 'clientOrderInvoice',
    set: function set(clientOrderInvoice) {
      this._relationships.clientOrderInvoice = clientOrderInvoice;
    }
    /** @type {ClientOrderInvoice} */
    ,
    get: function get() {
      return this._relationships.clientOrderInvoice;
    }
    /** @param {RestaurantOrderInvoice} restaurantOrderInvoice **/

  }, {
    key: 'restaurantOrderInvoice',
    set: function set(restaurantOrderInvoice) {
      this._relationships.restaurantOrderInvoice = restaurantOrderInvoice;
    }
    /** @type {RestaurantOrderInvoice} */
    ,
    get: function get() {
      return this._relationships.restaurantOrderInvoice;
    }
  }]);

  return Order;
}(_clientBase.Resource);

_clientBase.ResourceClasses['orders'] = Order;
/** @class OrderRelDao
 * @extends RelationshipDao  **/

var OrderRelDao = function (_RelationshipDao15) {
  _inherits(OrderRelDao, _RelationshipDao15);

  function OrderRelDao(client) {
    _classCallCheck(this, OrderRelDao);

    var _this44 = _possibleConstructorReturn(this, (OrderRelDao.__proto__ || Object.getPrototypeOf(OrderRelDao)).call(this, client, 'orders', Order));

    _this44.id = null;
    _this44.get = {
      area: function area(options) {
        return _this44.toOne('area', Area, options);
      },
      owner: function owner(options) {
        return _this44.toOne('owner', User, options);
      },
      creator: function creator(options) {
        return _this44.toOne('creator', User, options);
      },
      paymentCard: function paymentCard(options) {
        return _this44.toOne('payment-card', PaymentCard, options);
      },
      contact: function contact(options) {
        return _this44.toOne('contact', Contact, options);
      },
      client: function client(options) {
        return _this44.toOne('client', Client, options);
      },
      restaurant: function restaurant(options) {
        return _this44.toOne('restaurant', Restaurant, options);
      },
      courier: function courier(options) {
        return _this44.toOne('courier', Courier, options);
      },
      promoCode: function promoCode(options) {
        return _this44.toOne('promo-code', PromoCode, options);
      },
      driver: function driver(options) {
        return _this44.toOne('driver', User, options);
      },
      restaurantLocation: function restaurantLocation(options) {
        return _this44.toOne('restaurant-location', Location, options);
      },
      clientLocation: function clientLocation(options) {
        return _this44.toOne('client-location', Location, options);
      },
      clientDiscount: function clientDiscount(options) {
        return _this44.toOne('client-discount', ClientDiscount, options);
      },
      restaurantDiscount: function restaurantDiscount(options) {
        return _this44.toOne('restaurant-discount', RestaurantDiscount, options);
      },
      menu: function menu(options) {
        return _this44.toOne('menu', Menu, options);
      },
      customLocation: function customLocation(options) {
        return _this44.toOne('custom-location', Location, options);
      },
      giftbitError: function giftbitError(options) {
        return _this44.toOne('giftbit-error', GiftbitError, options);
      },
      clientOrderInvoice: function clientOrderInvoice(options) {
        return _this44.toOne('client-order-invoice', ClientOrderInvoice, options);
      },
      restaurantOrderInvoice: function restaurantOrderInvoice(options) {
        return _this44.toOne('restaurant-order-invoice', RestaurantOrderInvoice, options);
      }
    };
    _this44.index = {
      emailMessages: function emailMessages(options) {
        return _this44.toMany('email-messages', EmailMessage, options);
      },
      deliveryCases: function deliveryCases(options) {
        return _this44.toMany('delivery-cases', DeliveryCase, options);
      },
      deskCases: function deskCases(options) {
        return _this44.toMany('desk-cases', DeskCase, options);
      },
      versions: function versions(options) {
        return _this44.toMany('versions', Version, options);
      },
      groupOrderMembers: function groupOrderMembers(options) {
        return _this44.toMany('group-order-members', GroupOrderMember, options);
      },
      orderItems: function orderItems(options) {
        return _this44.toMany('order-items', OrderItem, options);
      }
    };
    return _this44;
  }

  return OrderRelDao;
}(_clientBase.RelationshipDao);
/** @class OrderDao
 * @extends ResourceDao  **/


var OrderDao = function (_ResourceDao15) {
  _inherits(OrderDao, _ResourceDao15);

  function OrderDao(client) {
    _classCallCheck(this, OrderDao);

    var _this45 = _possibleConstructorReturn(this, (OrderDao.__proto__ || Object.getPrototypeOf(OrderDao)).call(this, client, 'orders', Order));

    _this45.relationshipDao = new OrderRelDao(client, 'orders');
    return _this45;
  }

  return OrderDao;
}(_clientBase.ResourceDao);

/** @class PaymentCard
 * @extends Resource  **/


var PaymentCard = exports.PaymentCard = function (_Resource16) {
  _inherits(PaymentCard, _Resource16);

  function PaymentCard() {
    _classCallCheck(this, PaymentCard);

    return _possibleConstructorReturn(this, (PaymentCard.__proto__ || Object.getPrototypeOf(PaymentCard)).apply(this, arguments));
  }

  _createClass(PaymentCard, [{
    key: 'position',

    /** @param {number} position **/
    set: function set(position) {
      this._attributes.position = position;
    },
    get: function get() {
      return this._attributes.position;
    }
    /** @param {number} lastFourDigits **/

  }, {
    key: 'lastFourDigits',
    set: function set(lastFourDigits) {
      this._attributes.lastFourDigits = lastFourDigits;
    },
    get: function get() {
      return this._attributes.lastFourDigits;
    }
    /** @param {number} expiryMonth **/

  }, {
    key: 'expiryMonth',
    set: function set(expiryMonth) {
      this._attributes.expiryMonth = expiryMonth;
    },
    get: function get() {
      return this._attributes.expiryMonth;
    }
    /** @param {number} expiryYear **/

  }, {
    key: 'expiryYear',
    set: function set(expiryYear) {
      this._attributes.expiryYear = expiryYear;
    },
    get: function get() {
      return this._attributes.expiryYear;
    }
    /** @param {number} cardType **/

  }, {
    key: 'cardType',
    set: function set(cardType) {
      this._attributes.cardType = cardType;
    },
    get: function get() {
      return this._attributes.cardType;
    }
    /** @param {boolean} isDefault **/

  }, {
    key: 'isDefault',
    set: function set(isDefault) {
      this._attributes['default'] = isDefault;
    },
    get: function get() {
      return this._attributes['default'];
    }
    /** @param {number} cardToken **/

  }, {
    key: 'cardToken',
    set: function set(cardToken) {
      this._attributes.cardToken = cardToken;
    },
    get: function get() {
      return this._attributes.cardToken;
    }
    /** @param {number} nameOnCard **/

  }, {
    key: 'nameOnCard',
    set: function set(nameOnCard) {
      this._attributes.nameOnCard = nameOnCard;
    },
    get: function get() {
      return this._attributes.nameOnCard;
    }

    /** @param {Client} client **/

  }, {
    key: 'client',
    set: function set(client) {
      this._relationships.client = client;
    }
    /** @type {Client} */
    ,
    get: function get() {
      return this._relationships.client;
    }
    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
  }]);

  return PaymentCard;
}(_clientBase.Resource);

_clientBase.ResourceClasses['payment-cards'] = PaymentCard;
/** @class PaymentCardRelDao
 * @extends RelationshipDao  **/

var PaymentCardRelDao = function (_RelationshipDao16) {
  _inherits(PaymentCardRelDao, _RelationshipDao16);

  function PaymentCardRelDao(client) {
    _classCallCheck(this, PaymentCardRelDao);

    var _this47 = _possibleConstructorReturn(this, (PaymentCardRelDao.__proto__ || Object.getPrototypeOf(PaymentCardRelDao)).call(this, client, 'payment-cards', PaymentCard));

    _this47.id = null;
    _this47.get = {
      client: function client(options) {
        return _this47.toOne('client', Client, options);
      },
      user: function user(options) {
        return _this47.toOne('user', User, options);
      }
    };
    _this47.index = {};
    return _this47;
  }

  return PaymentCardRelDao;
}(_clientBase.RelationshipDao);
/** @class PaymentCardDao
 * @extends ResourceDao  **/


var PaymentCardDao = function (_ResourceDao16) {
  _inherits(PaymentCardDao, _ResourceDao16);

  function PaymentCardDao(client) {
    _classCallCheck(this, PaymentCardDao);

    var _this48 = _possibleConstructorReturn(this, (PaymentCardDao.__proto__ || Object.getPrototypeOf(PaymentCardDao)).call(this, client, 'payment-cards', PaymentCard));

    _this48.relationshipDao = new PaymentCardRelDao(client, 'payment-cards');
    return _this48;
  }

  return PaymentCardDao;
}(_clientBase.ResourceDao);

/** @class MealPlan
 * @extends Resource  **/


var MealPlan = exports.MealPlan = function (_Resource17) {
  _inherits(MealPlan, _Resource17);

  function MealPlan() {
    _classCallCheck(this, MealPlan);

    return _possibleConstructorReturn(this, (MealPlan.__proto__ || Object.getPrototypeOf(MealPlan)).apply(this, arguments));
  }

  _createClass(MealPlan, [{
    key: 'brandColor',

    /** @param {string} brandColor **/
    set: function set(brandColor) {
      this._attributes.brandColor = brandColor;
    },
    get: function get() {
      return this._attributes.brandColor;
    }
    /** @param {string} displayName **/

  }, {
    key: 'displayName',
    set: function set(displayName) {
      this._attributes.displayName = displayName;
    },
    get: function get() {
      return this._attributes.displayName;
    }
    /** @param {string} logoUrl **/

  }, {
    key: 'logoUrl',
    set: function set(logoUrl) {
      this._attributes.logoUrl = logoUrl;
    },
    get: function get() {
      return this._attributes.logoUrl;
    }
    /** @param {string} vanityUrl **/

  }, {
    key: 'vanityUrl',
    set: function set(vanityUrl) {
      this._attributes.vanityUrl = vanityUrl;
    },
    get: function get() {
      return this._attributes.vanityUrl;
    }
    /** @param {string} emailDomain **/

  }, {
    key: 'emailDomain',
    set: function set(emailDomain) {
      this._attributes.emailDomain = emailDomain;
    },
    get: function get() {
      return this._attributes.emailDomain;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {string} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
    /** @param {string} isDepartmentRequired **/

  }, {
    key: 'isDepartmentRequired',
    set: function set(isDepartmentRequired) {
      this._attributes.isDepartmentRequired = isDepartmentRequired;
    },
    get: function get() {
      return this._attributes.isDepartmentRequired;
    }
    /** @param {string} password **/

  }, {
    key: 'password',
    set: function set(password) {
      this._attributes.password = password;
    },
    get: function get() {
      return this._attributes.password;
    }

    /** @param {User} mealPlanUser **/

  }, {
    key: 'mealPlanUser',
    set: function set(mealPlanUser) {
      this._relationships.mealPlanUser = mealPlanUser;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.mealPlanUser;
    }
    /** @param {Client} client **/

  }, {
    key: 'client',
    set: function set(client) {
      this._relationships.client = client;
    }
    /** @type {Client} */
    ,
    get: function get() {
      return this._relationships.client;
    }
    /** @param {Order[]} orders **/

  }, {
    key: 'orders',
    set: function set(orders) {
      this._relationships.orders = orders;
    }
    /** @type {Order[]} */
    ,
    get: function get() {
      return this._relationships.orders;
    }
  }]);

  return MealPlan;
}(_clientBase.Resource);

_clientBase.ResourceClasses['meal-plans'] = MealPlan;
/** @class MealPlanRelDao
 * @extends RelationshipDao  **/

var MealPlanRelDao = function (_RelationshipDao17) {
  _inherits(MealPlanRelDao, _RelationshipDao17);

  function MealPlanRelDao(client) {
    _classCallCheck(this, MealPlanRelDao);

    var _this50 = _possibleConstructorReturn(this, (MealPlanRelDao.__proto__ || Object.getPrototypeOf(MealPlanRelDao)).call(this, client, 'meal-plans', MealPlan));

    _this50.id = null;
    _this50.get = {
      mealPlanUser: function mealPlanUser(options) {
        return _this50.toOne('meal-plan-user', User, options);
      },
      client: function client(options) {
        return _this50.toOne('client', Client, options);
      }
    };
    _this50.index = {
      orders: function orders(options) {
        return _this50.toMany('orders', Order, options);
      }
    };
    return _this50;
  }

  return MealPlanRelDao;
}(_clientBase.RelationshipDao);
/** @class MealPlanDao
 * @extends ResourceDao  **/


var MealPlanDao = function (_ResourceDao17) {
  _inherits(MealPlanDao, _ResourceDao17);

  function MealPlanDao(client) {
    _classCallCheck(this, MealPlanDao);

    var _this51 = _possibleConstructorReturn(this, (MealPlanDao.__proto__ || Object.getPrototypeOf(MealPlanDao)).call(this, client, 'meal-plans', MealPlan));

    _this51.relationshipDao = new MealPlanRelDao(client, 'meal-plans');
    return _this51;
  }

  return MealPlanDao;
}(_clientBase.ResourceDao);

/** @class GiftbitCard
 * @extends Resource  **/


var GiftbitCard = exports.GiftbitCard = function (_Resource18) {
  _inherits(GiftbitCard, _Resource18);

  function GiftbitCard() {
    _classCallCheck(this, GiftbitCard);

    return _possibleConstructorReturn(this, (GiftbitCard.__proto__ || Object.getPrototypeOf(GiftbitCard)).apply(this, arguments));
  }

  _createClass(GiftbitCard, [{
    key: 'balance',

    /** @param {any} balance **/
    set: function set(balance) {
      this._attributes.balance = balance;
    },
    get: function get() {
      return this._attributes.balance;
    }
    /** @param {any} transactions **/

  }, {
    key: 'transactions',
    set: function set(transactions) {
      this._attributes.transactions = transactions;
    },
    get: function get() {
      return this._attributes.transactions;
    }
  }]);

  return GiftbitCard;
}(_clientBase.Resource);

_clientBase.ResourceClasses['giftbit-cards'] = GiftbitCard;
/** @class GiftbitCardRelDao
 * @extends RelationshipDao  **/

var GiftbitCardRelDao = function (_RelationshipDao18) {
  _inherits(GiftbitCardRelDao, _RelationshipDao18);

  function GiftbitCardRelDao(client) {
    _classCallCheck(this, GiftbitCardRelDao);

    var _this53 = _possibleConstructorReturn(this, (GiftbitCardRelDao.__proto__ || Object.getPrototypeOf(GiftbitCardRelDao)).call(this, client, 'giftbit-cards', GiftbitCard));

    _this53.id = null;
    _this53.get = {};
    _this53.index = {};
    return _this53;
  }

  return GiftbitCardRelDao;
}(_clientBase.RelationshipDao);
/** @class GiftbitCardDao
 * @extends ResourceDao  **/


var GiftbitCardDao = function (_ResourceDao18) {
  _inherits(GiftbitCardDao, _ResourceDao18);

  function GiftbitCardDao(client) {
    _classCallCheck(this, GiftbitCardDao);

    var _this54 = _possibleConstructorReturn(this, (GiftbitCardDao.__proto__ || Object.getPrototypeOf(GiftbitCardDao)).call(this, client, 'giftbit-cards', GiftbitCard));

    _this54.relationshipDao = new GiftbitCardRelDao(client, 'giftbit-cards');
    return _this54;
  }

  return GiftbitCardDao;
}(_clientBase.ResourceDao);

/** @class GiftbitGift
 * @extends Resource  **/


var GiftbitGift = exports.GiftbitGift = function (_Resource19) {
  _inherits(GiftbitGift, _Resource19);

  function GiftbitGift() {
    _classCallCheck(this, GiftbitGift);

    return _possibleConstructorReturn(this, (GiftbitGift.__proto__ || Object.getPrototypeOf(GiftbitGift)).apply(this, arguments));
  }

  _createClass(GiftbitGift, [{
    key: 'isActive',

    /** @param {any} isActive **/
    set: function set(isActive) {
      this._attributes.isActive = isActive;
    },
    get: function get() {
      return this._attributes.isActive;
    }
    /** @param {any} name **/

  }, {
    key: 'name',
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {any} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }
    /** @param {any} imageUrl **/

  }, {
    key: 'imageUrl',
    set: function set(imageUrl) {
      this._attributes.imageUrl = imageUrl;
    },
    get: function get() {
      return this._attributes.imageUrl;
    }
    /** @param {any} tax **/

  }, {
    key: 'tax',
    set: function set(tax) {
      this._attributes.tax = tax;
    },
    get: function get() {
      return this._attributes.tax;
    }
    /** @param {any} currencyisocode **/

  }, {
    key: 'currencyisocode',
    set: function set(currencyisocode) {
      this._attributes.currencyisocode = currencyisocode;
    },
    get: function get() {
      return this._attributes.currencyisocode;
    }
    /** @param {any} maxPriceInCents **/

  }, {
    key: 'maxPriceInCents',
    set: function set(maxPriceInCents) {
      this._attributes.maxPriceInCents = maxPriceInCents;
    },
    get: function get() {
      return this._attributes.maxPriceInCents;
    }
    /** @param {any} minPriceInCents **/

  }, {
    key: 'minPriceInCents',
    set: function set(minPriceInCents) {
      this._attributes.minPriceInCents = minPriceInCents;
    },
    get: function get() {
      return this._attributes.minPriceInCents;
    }
    /** @param {any} maxFoodeePriceInCents **/

  }, {
    key: 'maxFoodeePriceInCents',
    set: function set(maxFoodeePriceInCents) {
      this._attributes.maxFoodeePriceInCents = maxFoodeePriceInCents;
    },
    get: function get() {
      return this._attributes.maxFoodeePriceInCents;
    }
    /** @param {any} minFoodeePriceInCents **/

  }, {
    key: 'minFoodeePriceInCents',
    set: function set(minFoodeePriceInCents) {
      this._attributes.minFoodeePriceInCents = minFoodeePriceInCents;
    },
    get: function get() {
      return this._attributes.minFoodeePriceInCents;
    }
    /** @param {any} dollarsToPoints **/

  }, {
    key: 'dollarsToPoints',
    set: function set(dollarsToPoints) {
      this._attributes.dollarsToPoints = dollarsToPoints;
    },
    get: function get() {
      return this._attributes.dollarsToPoints;
    }
  }]);

  return GiftbitGift;
}(_clientBase.Resource);

_clientBase.ResourceClasses['giftbit-gifts'] = GiftbitGift;
/** @class GiftbitGiftRelDao
 * @extends RelationshipDao  **/

var GiftbitGiftRelDao = function (_RelationshipDao19) {
  _inherits(GiftbitGiftRelDao, _RelationshipDao19);

  function GiftbitGiftRelDao(client) {
    _classCallCheck(this, GiftbitGiftRelDao);

    var _this56 = _possibleConstructorReturn(this, (GiftbitGiftRelDao.__proto__ || Object.getPrototypeOf(GiftbitGiftRelDao)).call(this, client, 'giftbit-gifts', GiftbitGift));

    _this56.id = null;
    _this56.get = {};
    _this56.index = {};
    return _this56;
  }

  return GiftbitGiftRelDao;
}(_clientBase.RelationshipDao);
/** @class GiftbitGiftDao
 * @extends ResourceDao  **/


var GiftbitGiftDao = function (_ResourceDao19) {
  _inherits(GiftbitGiftDao, _ResourceDao19);

  function GiftbitGiftDao(client) {
    _classCallCheck(this, GiftbitGiftDao);

    var _this57 = _possibleConstructorReturn(this, (GiftbitGiftDao.__proto__ || Object.getPrototypeOf(GiftbitGiftDao)).call(this, client, 'giftbit-gifts', GiftbitGift));

    _this57.relationshipDao = new GiftbitGiftRelDao(client, 'giftbit-gifts');
    return _this57;
  }

  return GiftbitGiftDao;
}(_clientBase.ResourceDao);

/** @class GiftbitError
 * @extends Resource  **/


var GiftbitError = exports.GiftbitError = function (_Resource20) {
  _inherits(GiftbitError, _Resource20);

  function GiftbitError() {
    _classCallCheck(this, GiftbitError);

    return _possibleConstructorReturn(this, (GiftbitError.__proto__ || Object.getPrototypeOf(GiftbitError)).apply(this, arguments));
  }

  _createClass(GiftbitError, [{
    key: 'log',

    /** @param {string} log **/
    set: function set(log) {
      this._attributes.log = log;
    },
    get: function get() {
      return this._attributes.log;
    }
    /** @param {string} isResolved **/

  }, {
    key: 'isResolved',
    set: function set(isResolved) {
      this._attributes.isResolved = isResolved;
    },
    get: function get() {
      return this._attributes.isResolved;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {string} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }

    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
  }]);

  return GiftbitError;
}(_clientBase.Resource);

_clientBase.ResourceClasses['giftbit-errors'] = GiftbitError;
/** @class GiftbitErrorRelDao
 * @extends RelationshipDao  **/

var GiftbitErrorRelDao = function (_RelationshipDao20) {
  _inherits(GiftbitErrorRelDao, _RelationshipDao20);

  function GiftbitErrorRelDao(client) {
    _classCallCheck(this, GiftbitErrorRelDao);

    var _this59 = _possibleConstructorReturn(this, (GiftbitErrorRelDao.__proto__ || Object.getPrototypeOf(GiftbitErrorRelDao)).call(this, client, 'giftbit-errors', GiftbitError));

    _this59.id = null;
    _this59.get = {
      order: function order(options) {
        return _this59.toOne('order', Order, options);
      }
    };
    _this59.index = {};
    return _this59;
  }

  return GiftbitErrorRelDao;
}(_clientBase.RelationshipDao);
/** @class GiftbitErrorDao
 * @extends ResourceDao  **/


var GiftbitErrorDao = function (_ResourceDao20) {
  _inherits(GiftbitErrorDao, _ResourceDao20);

  function GiftbitErrorDao(client) {
    _classCallCheck(this, GiftbitErrorDao);

    var _this60 = _possibleConstructorReturn(this, (GiftbitErrorDao.__proto__ || Object.getPrototypeOf(GiftbitErrorDao)).call(this, client, 'giftbit-errors', GiftbitError));

    _this60.relationshipDao = new GiftbitErrorRelDao(client, 'giftbit-errors');
    return _this60;
  }

  return GiftbitErrorDao;
}(_clientBase.ResourceDao);

/** @class DeliveryCase
 * @extends Resource  **/


var DeliveryCase = exports.DeliveryCase = function (_Resource21) {
  _inherits(DeliveryCase, _Resource21);

  function DeliveryCase() {
    _classCallCheck(this, DeliveryCase);

    return _possibleConstructorReturn(this, (DeliveryCase.__proto__ || Object.getPrototypeOf(DeliveryCase)).apply(this, arguments));
  }

  _createClass(DeliveryCase, [{
    key: 'caseType',

    /** @param {string} caseType **/
    set: function set(caseType) {
      this._attributes.caseType = caseType;
    },
    get: function get() {
      return this._attributes.caseType;
    }
    /** @param {string} value **/

  }, {
    key: 'value',
    set: function set(value) {
      this._attributes.value = value;
    },
    get: function get() {
      return this._attributes.value;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }

    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
  }]);

  return DeliveryCase;
}(_clientBase.Resource);

_clientBase.ResourceClasses['delivery-cases'] = DeliveryCase;
/** @class DeliveryCaseRelDao
 * @extends RelationshipDao  **/

var DeliveryCaseRelDao = function (_RelationshipDao21) {
  _inherits(DeliveryCaseRelDao, _RelationshipDao21);

  function DeliveryCaseRelDao(client) {
    _classCallCheck(this, DeliveryCaseRelDao);

    var _this62 = _possibleConstructorReturn(this, (DeliveryCaseRelDao.__proto__ || Object.getPrototypeOf(DeliveryCaseRelDao)).call(this, client, 'delivery-cases', DeliveryCase));

    _this62.id = null;
    _this62.get = {
      user: function user(options) {
        return _this62.toOne('user', User, options);
      },
      order: function order(options) {
        return _this62.toOne('order', Order, options);
      }
    };
    _this62.index = {};
    return _this62;
  }

  return DeliveryCaseRelDao;
}(_clientBase.RelationshipDao);
/** @class DeliveryCaseDao
 * @extends ResourceDao  **/


var DeliveryCaseDao = function (_ResourceDao21) {
  _inherits(DeliveryCaseDao, _ResourceDao21);

  function DeliveryCaseDao(client) {
    _classCallCheck(this, DeliveryCaseDao);

    var _this63 = _possibleConstructorReturn(this, (DeliveryCaseDao.__proto__ || Object.getPrototypeOf(DeliveryCaseDao)).call(this, client, 'delivery-cases', DeliveryCase));

    _this63.relationshipDao = new DeliveryCaseRelDao(client, 'delivery-cases');
    return _this63;
  }

  return DeliveryCaseDao;
}(_clientBase.ResourceDao);

/** @class DietaryTag
 * @extends Resource  **/


var DietaryTag = exports.DietaryTag = function (_Resource22) {
  _inherits(DietaryTag, _Resource22);

  function DietaryTag() {
    _classCallCheck(this, DietaryTag);

    return _possibleConstructorReturn(this, (DietaryTag.__proto__ || Object.getPrototypeOf(DietaryTag)).apply(this, arguments));
  }

  _createClass(DietaryTag, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} slug **/

  }, {
    key: 'slug',
    set: function set(slug) {
      this._attributes.slug = slug;
    },
    get: function get() {
      return this._attributes.slug;
    }
    /** @param {string} abbreviation **/

  }, {
    key: 'abbreviation',
    set: function set(abbreviation) {
      this._attributes.abbreviation = abbreviation;
    },
    get: function get() {
      return this._attributes.abbreviation;
    }
    /** @param {string} color **/

  }, {
    key: 'color',
    set: function set(color) {
      this._attributes.color = color;
    },
    get: function get() {
      return this._attributes.color;
    }

    /** @param {MenuOptionItem[]} menuOptionItems **/

  }, {
    key: 'menuOptionItems',
    set: function set(menuOptionItems) {
      this._relationships.menuOptionItems = menuOptionItems;
    }
    /** @type {MenuOptionItem[]} */
    ,
    get: function get() {
      return this._relationships.menuOptionItems;
    }
  }]);

  return DietaryTag;
}(_clientBase.Resource);

_clientBase.ResourceClasses['dietary-tags'] = DietaryTag;
/** @class DietaryTagRelDao
 * @extends RelationshipDao  **/

var DietaryTagRelDao = function (_RelationshipDao22) {
  _inherits(DietaryTagRelDao, _RelationshipDao22);

  function DietaryTagRelDao(client) {
    _classCallCheck(this, DietaryTagRelDao);

    var _this65 = _possibleConstructorReturn(this, (DietaryTagRelDao.__proto__ || Object.getPrototypeOf(DietaryTagRelDao)).call(this, client, 'dietary-tags', DietaryTag));

    _this65.id = null;
    _this65.get = {};
    _this65.index = {
      menuOptionItems: function menuOptionItems(options) {
        return _this65.toMany('menu-option-items', MenuOptionItem, options);
      }
    };
    return _this65;
  }

  return DietaryTagRelDao;
}(_clientBase.RelationshipDao);
/** @class DietaryTagDao
 * @extends ResourceDao  **/


var DietaryTagDao = function (_ResourceDao22) {
  _inherits(DietaryTagDao, _ResourceDao22);

  function DietaryTagDao(client) {
    _classCallCheck(this, DietaryTagDao);

    var _this66 = _possibleConstructorReturn(this, (DietaryTagDao.__proto__ || Object.getPrototypeOf(DietaryTagDao)).call(this, client, 'dietary-tags', DietaryTag));

    _this66.relationshipDao = new DietaryTagRelDao(client, 'dietary-tags');
    return _this66;
  }

  return DietaryTagDao;
}(_clientBase.ResourceDao);

/** @class MenuOptionItem
 * @extends Resource  **/


var MenuOptionItem = exports.MenuOptionItem = function (_Resource23) {
  _inherits(MenuOptionItem, _Resource23);

  function MenuOptionItem() {
    _classCallCheck(this, MenuOptionItem);

    return _possibleConstructorReturn(this, (MenuOptionItem.__proto__ || Object.getPrototypeOf(MenuOptionItem)).apply(this, arguments));
  }

  _createClass(MenuOptionItem, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} clientPriceCents **/

  }, {
    key: 'clientPriceCents',
    set: function set(clientPriceCents) {
      this._attributes.clientPriceCents = clientPriceCents;
    },
    get: function get() {
      return this._attributes.clientPriceCents;
    }
    /** @param {string} restaurantPriceCents **/

  }, {
    key: 'restaurantPriceCents',
    set: function set(restaurantPriceCents) {
      this._attributes.restaurantPriceCents = restaurantPriceCents;
    },
    get: function get() {
      return this._attributes.restaurantPriceCents;
    }
    /** @param {string} retailPriceCents **/

  }, {
    key: 'retailPriceCents',
    set: function set(retailPriceCents) {
      this._attributes.retailPriceCents = retailPriceCents;
    },
    get: function get() {
      return this._attributes.retailPriceCents;
    }

    /** @param {MenuOptionGroup} menuOptionGroup **/

  }, {
    key: 'menuOptionGroup',
    set: function set(menuOptionGroup) {
      this._relationships.menuOptionGroup = menuOptionGroup;
    }
    /** @type {MenuOptionGroup} */
    ,
    get: function get() {
      return this._relationships.menuOptionGroup;
    }
    /** @param {DietaryTag[]} dietaryTags **/

  }, {
    key: 'dietaryTags',
    set: function set(dietaryTags) {
      this._relationships.dietaryTags = dietaryTags;
    }
    /** @type {DietaryTag[]} */
    ,
    get: function get() {
      return this._relationships.dietaryTags;
    }
    /** @param {OrderItem[]} orderItems **/

  }, {
    key: 'orderItems',
    set: function set(orderItems) {
      this._relationships.orderItems = orderItems;
    }
    /** @type {OrderItem[]} */
    ,
    get: function get() {
      return this._relationships.orderItems;
    }
  }]);

  return MenuOptionItem;
}(_clientBase.Resource);

_clientBase.ResourceClasses['menu-option-items'] = MenuOptionItem;
/** @class MenuOptionItemRelDao
 * @extends RelationshipDao  **/

var MenuOptionItemRelDao = function (_RelationshipDao23) {
  _inherits(MenuOptionItemRelDao, _RelationshipDao23);

  function MenuOptionItemRelDao(client) {
    _classCallCheck(this, MenuOptionItemRelDao);

    var _this68 = _possibleConstructorReturn(this, (MenuOptionItemRelDao.__proto__ || Object.getPrototypeOf(MenuOptionItemRelDao)).call(this, client, 'menu-option-items', MenuOptionItem));

    _this68.id = null;
    _this68.get = {
      menuOptionGroup: function menuOptionGroup(options) {
        return _this68.toOne('menu-option-group', MenuOptionGroup, options);
      }
    };
    _this68.index = {
      dietaryTags: function dietaryTags(options) {
        return _this68.toMany('dietary-tags', DietaryTag, options);
      },
      orderItems: function orderItems(options) {
        return _this68.toMany('order-items', OrderItem, options);
      }
    };
    return _this68;
  }

  return MenuOptionItemRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuOptionItemDao
 * @extends ResourceDao  **/


var MenuOptionItemDao = function (_ResourceDao23) {
  _inherits(MenuOptionItemDao, _ResourceDao23);

  function MenuOptionItemDao(client) {
    _classCallCheck(this, MenuOptionItemDao);

    var _this69 = _possibleConstructorReturn(this, (MenuOptionItemDao.__proto__ || Object.getPrototypeOf(MenuOptionItemDao)).call(this, client, 'menu-option-items', MenuOptionItem));

    _this69.relationshipDao = new MenuOptionItemRelDao(client, 'menu-option-items');
    return _this69;
  }

  return MenuOptionItemDao;
}(_clientBase.ResourceDao);

/** @class DriverDay
 * @extends Resource  **/


var DriverDay = exports.DriverDay = function (_Resource24) {
  _inherits(DriverDay, _Resource24);

  function DriverDay() {
    _classCallCheck(this, DriverDay);

    return _possibleConstructorReturn(this, (DriverDay.__proto__ || Object.getPrototypeOf(DriverDay)).apply(this, arguments));
  }

  _createClass(DriverDay, [{
    key: 'pings',

    /** @param {jsonb} pings **/
    set: function set(pings) {
      this._attributes.pings = pings;
    },
    get: function get() {
      return this._attributes.pings;
    }

    /** @param {User} driver **/

  }, {
    key: 'driver',
    set: function set(driver) {
      this._relationships.driver = driver;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.driver;
    }
  }]);

  return DriverDay;
}(_clientBase.Resource);

_clientBase.ResourceClasses['driver-days'] = DriverDay;
/** @class DriverDayRelDao
 * @extends RelationshipDao  **/

var DriverDayRelDao = function (_RelationshipDao24) {
  _inherits(DriverDayRelDao, _RelationshipDao24);

  function DriverDayRelDao(client) {
    _classCallCheck(this, DriverDayRelDao);

    var _this71 = _possibleConstructorReturn(this, (DriverDayRelDao.__proto__ || Object.getPrototypeOf(DriverDayRelDao)).call(this, client, 'driver-days', DriverDay));

    _this71.id = null;
    _this71.get = {
      driver: function driver(options) {
        return _this71.toOne('driver', User, options);
      }
    };
    _this71.index = {};
    return _this71;
  }

  return DriverDayRelDao;
}(_clientBase.RelationshipDao);
/** @class DriverDayDao
 * @extends ResourceDao  **/


var DriverDayDao = function (_ResourceDao24) {
  _inherits(DriverDayDao, _ResourceDao24);

  function DriverDayDao(client) {
    _classCallCheck(this, DriverDayDao);

    var _this72 = _possibleConstructorReturn(this, (DriverDayDao.__proto__ || Object.getPrototypeOf(DriverDayDao)).call(this, client, 'driver-days', DriverDay));

    _this72.relationshipDao = new DriverDayRelDao(client, 'driver-days');
    return _this72;
  }

  return DriverDayDao;
}(_clientBase.ResourceDao);

/** @class DriverPing
 * @extends Resource  **/


var DriverPing = exports.DriverPing = function (_Resource25) {
  _inherits(DriverPing, _Resource25);

  function DriverPing() {
    _classCallCheck(this, DriverPing);

    return _possibleConstructorReturn(this, (DriverPing.__proto__ || Object.getPrototypeOf(DriverPing)).apply(this, arguments));
  }

  _createClass(DriverPing, [{
    key: 'longitude',

    /** @param {float} longitude **/
    set: function set(longitude) {
      this._attributes.longitude = longitude;
    },
    get: function get() {
      return this._attributes.longitude;
    }
    /** @param {float} latitude **/

  }, {
    key: 'latitude',
    set: function set(latitude) {
      this._attributes.latitude = latitude;
    },
    get: function get() {
      return this._attributes.latitude;
    }

    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
  }]);

  return DriverPing;
}(_clientBase.Resource);

_clientBase.ResourceClasses['driver-pings'] = DriverPing;
/** @class DriverPingRelDao
 * @extends RelationshipDao  **/

var DriverPingRelDao = function (_RelationshipDao25) {
  _inherits(DriverPingRelDao, _RelationshipDao25);

  function DriverPingRelDao(client) {
    _classCallCheck(this, DriverPingRelDao);

    var _this74 = _possibleConstructorReturn(this, (DriverPingRelDao.__proto__ || Object.getPrototypeOf(DriverPingRelDao)).call(this, client, 'driver-pings', DriverPing));

    _this74.id = null;
    _this74.get = {
      user: function user(options) {
        return _this74.toOne('user', User, options);
      }
    };
    _this74.index = {};
    return _this74;
  }

  return DriverPingRelDao;
}(_clientBase.RelationshipDao);
/** @class DriverPingDao
 * @extends ResourceDao  **/


var DriverPingDao = function (_ResourceDao25) {
  _inherits(DriverPingDao, _ResourceDao25);

  function DriverPingDao(client) {
    _classCallCheck(this, DriverPingDao);

    var _this75 = _possibleConstructorReturn(this, (DriverPingDao.__proto__ || Object.getPrototypeOf(DriverPingDao)).call(this, client, 'driver-pings', DriverPing));

    _this75.relationshipDao = new DriverPingRelDao(client, 'driver-pings');
    return _this75;
  }

  return DriverPingDao;
}(_clientBase.ResourceDao);

/** @class DriverWeek
 * @extends Resource  **/


var DriverWeek = exports.DriverWeek = function (_Resource26) {
  _inherits(DriverWeek, _Resource26);

  function DriverWeek() {
    _classCallCheck(this, DriverWeek);

    return _possibleConstructorReturn(this, (DriverWeek.__proto__ || Object.getPrototypeOf(DriverWeek)).apply(this, arguments));
  }

  _createClass(DriverWeek, [{
    key: 'createdAt',

    /** @param {Date} createdAt **/
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {Date} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
    /** @param {Date} monday **/

  }, {
    key: 'monday',
    set: function set(monday) {
      this._attributes.monday = monday;
    },
    get: function get() {
      return this._attributes.monday;
    }
    /** @param {Date} notes **/

  }, {
    key: 'notes',
    set: function set(notes) {
      this._attributes.notes = notes;
    },
    get: function get() {
      return this._attributes.notes;
    }
    /** @param {Date} availableMondayBreakfast **/

  }, {
    key: 'availableMondayBreakfast',
    set: function set(availableMondayBreakfast) {
      this._attributes.availableMondayBreakfast = availableMondayBreakfast;
    },
    get: function get() {
      return this._attributes.availableMondayBreakfast;
    }
    /** @param {Date} availableMondayLunch **/

  }, {
    key: 'availableMondayLunch',
    set: function set(availableMondayLunch) {
      this._attributes.availableMondayLunch = availableMondayLunch;
    },
    get: function get() {
      return this._attributes.availableMondayLunch;
    }
    /** @param {Date} availableMondayDinner **/

  }, {
    key: 'availableMondayDinner',
    set: function set(availableMondayDinner) {
      this._attributes.availableMondayDinner = availableMondayDinner;
    },
    get: function get() {
      return this._attributes.availableMondayDinner;
    }
    /** @param {Date} availableTuesdayBreakfast **/

  }, {
    key: 'availableTuesdayBreakfast',
    set: function set(availableTuesdayBreakfast) {
      this._attributes.availableTuesdayBreakfast = availableTuesdayBreakfast;
    },
    get: function get() {
      return this._attributes.availableTuesdayBreakfast;
    }
    /** @param {Date} availableTuesdayLunch **/

  }, {
    key: 'availableTuesdayLunch',
    set: function set(availableTuesdayLunch) {
      this._attributes.availableTuesdayLunch = availableTuesdayLunch;
    },
    get: function get() {
      return this._attributes.availableTuesdayLunch;
    }
    /** @param {Date} availableTuesdayDinner **/

  }, {
    key: 'availableTuesdayDinner',
    set: function set(availableTuesdayDinner) {
      this._attributes.availableTuesdayDinner = availableTuesdayDinner;
    },
    get: function get() {
      return this._attributes.availableTuesdayDinner;
    }
    /** @param {Date} availableWednesdayBreakfast **/

  }, {
    key: 'availableWednesdayBreakfast',
    set: function set(availableWednesdayBreakfast) {
      this._attributes.availableWednesdayBreakfast = availableWednesdayBreakfast;
    },
    get: function get() {
      return this._attributes.availableWednesdayBreakfast;
    }
    /** @param {Date} availableWednesdayLunch **/

  }, {
    key: 'availableWednesdayLunch',
    set: function set(availableWednesdayLunch) {
      this._attributes.availableWednesdayLunch = availableWednesdayLunch;
    },
    get: function get() {
      return this._attributes.availableWednesdayLunch;
    }
    /** @param {Date} availableWednesdayDinner **/

  }, {
    key: 'availableWednesdayDinner',
    set: function set(availableWednesdayDinner) {
      this._attributes.availableWednesdayDinner = availableWednesdayDinner;
    },
    get: function get() {
      return this._attributes.availableWednesdayDinner;
    }
    /** @param {Date} availableThursdayBreakfast **/

  }, {
    key: 'availableThursdayBreakfast',
    set: function set(availableThursdayBreakfast) {
      this._attributes.availableThursdayBreakfast = availableThursdayBreakfast;
    },
    get: function get() {
      return this._attributes.availableThursdayBreakfast;
    }
    /** @param {Date} availableThursdayLunch **/

  }, {
    key: 'availableThursdayLunch',
    set: function set(availableThursdayLunch) {
      this._attributes.availableThursdayLunch = availableThursdayLunch;
    },
    get: function get() {
      return this._attributes.availableThursdayLunch;
    }
    /** @param {Date} availableThursdayDinner **/

  }, {
    key: 'availableThursdayDinner',
    set: function set(availableThursdayDinner) {
      this._attributes.availableThursdayDinner = availableThursdayDinner;
    },
    get: function get() {
      return this._attributes.availableThursdayDinner;
    }
    /** @param {Date} availableFridayBreakfast **/

  }, {
    key: 'availableFridayBreakfast',
    set: function set(availableFridayBreakfast) {
      this._attributes.availableFridayBreakfast = availableFridayBreakfast;
    },
    get: function get() {
      return this._attributes.availableFridayBreakfast;
    }
    /** @param {Date} availableFridayLunch **/

  }, {
    key: 'availableFridayLunch',
    set: function set(availableFridayLunch) {
      this._attributes.availableFridayLunch = availableFridayLunch;
    },
    get: function get() {
      return this._attributes.availableFridayLunch;
    }
    /** @param {Date} availableFridayDinner **/

  }, {
    key: 'availableFridayDinner',
    set: function set(availableFridayDinner) {
      this._attributes.availableFridayDinner = availableFridayDinner;
    },
    get: function get() {
      return this._attributes.availableFridayDinner;
    }
    /** @param {Date} availableSaturdayBreakfast **/

  }, {
    key: 'availableSaturdayBreakfast',
    set: function set(availableSaturdayBreakfast) {
      this._attributes.availableSaturdayBreakfast = availableSaturdayBreakfast;
    },
    get: function get() {
      return this._attributes.availableSaturdayBreakfast;
    }
    /** @param {Date} availableSaturdayLunch **/

  }, {
    key: 'availableSaturdayLunch',
    set: function set(availableSaturdayLunch) {
      this._attributes.availableSaturdayLunch = availableSaturdayLunch;
    },
    get: function get() {
      return this._attributes.availableSaturdayLunch;
    }
    /** @param {Date} availableSaturdayDinner **/

  }, {
    key: 'availableSaturdayDinner',
    set: function set(availableSaturdayDinner) {
      this._attributes.availableSaturdayDinner = availableSaturdayDinner;
    },
    get: function get() {
      return this._attributes.availableSaturdayDinner;
    }
    /** @param {Date} availableSundayBreakfast **/

  }, {
    key: 'availableSundayBreakfast',
    set: function set(availableSundayBreakfast) {
      this._attributes.availableSundayBreakfast = availableSundayBreakfast;
    },
    get: function get() {
      return this._attributes.availableSundayBreakfast;
    }
    /** @param {Date} availableSundayLunch **/

  }, {
    key: 'availableSundayLunch',
    set: function set(availableSundayLunch) {
      this._attributes.availableSundayLunch = availableSundayLunch;
    },
    get: function get() {
      return this._attributes.availableSundayLunch;
    }
    /** @param {Date} availableSundayDinner **/

  }, {
    key: 'availableSundayDinner',
    set: function set(availableSundayDinner) {
      this._attributes.availableSundayDinner = availableSundayDinner;
    },
    get: function get() {
      return this._attributes.availableSundayDinner;
    }

    /** @param {User} driver **/

  }, {
    key: 'driver',
    set: function set(driver) {
      this._relationships.driver = driver;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.driver;
    }
  }]);

  return DriverWeek;
}(_clientBase.Resource);

_clientBase.ResourceClasses['driver-weeks'] = DriverWeek;
/** @class DriverWeekRelDao
 * @extends RelationshipDao  **/

var DriverWeekRelDao = function (_RelationshipDao26) {
  _inherits(DriverWeekRelDao, _RelationshipDao26);

  function DriverWeekRelDao(client) {
    _classCallCheck(this, DriverWeekRelDao);

    var _this77 = _possibleConstructorReturn(this, (DriverWeekRelDao.__proto__ || Object.getPrototypeOf(DriverWeekRelDao)).call(this, client, 'driver-weeks', DriverWeek));

    _this77.id = null;
    _this77.get = {
      driver: function driver(options) {
        return _this77.toOne('driver', User, options);
      }
    };
    _this77.index = {};
    return _this77;
  }

  return DriverWeekRelDao;
}(_clientBase.RelationshipDao);
/** @class DriverWeekDao
 * @extends ResourceDao  **/


var DriverWeekDao = function (_ResourceDao26) {
  _inherits(DriverWeekDao, _ResourceDao26);

  function DriverWeekDao(client) {
    _classCallCheck(this, DriverWeekDao);

    var _this78 = _possibleConstructorReturn(this, (DriverWeekDao.__proto__ || Object.getPrototypeOf(DriverWeekDao)).call(this, client, 'driver-weeks', DriverWeek));

    _this78.relationshipDao = new DriverWeekRelDao(client, 'driver-weeks');
    return _this78;
  }

  return DriverWeekDao;
}(_clientBase.ResourceDao);

/** @class GroupOrderMember
 * @extends Resource  **/


var GroupOrderMember = exports.GroupOrderMember = function (_Resource27) {
  _inherits(GroupOrderMember, _Resource27);

  function GroupOrderMember() {
    _classCallCheck(this, GroupOrderMember);

    return _possibleConstructorReturn(this, (GroupOrderMember.__proto__ || Object.getPrototypeOf(GroupOrderMember)).apply(this, arguments));
  }

  _createClass(GroupOrderMember, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} email **/

  }, {
    key: 'email',
    set: function set(email) {
      this._attributes.email = email;
    },
    get: function get() {
      return this._attributes.email;
    }
    /** @param {string} phoneNumber **/

  }, {
    key: 'phoneNumber',
    set: function set(phoneNumber) {
      this._attributes.phoneNumber = phoneNumber;
    },
    get: function get() {
      return this._attributes.phoneNumber;
    }
    /** @param {string} department **/

  }, {
    key: 'department',
    set: function set(department) {
      this._attributes.department = department;
    },
    get: function get() {
      return this._attributes.department;
    }
    /** @param {string} termsAcceptedAt **/

  }, {
    key: 'termsAcceptedAt',
    set: function set(termsAcceptedAt) {
      this._attributes.termsAcceptedAt = termsAcceptedAt;
    },
    get: function get() {
      return this._attributes.termsAcceptedAt;
    }
    /** @param {string} stripeChargeToken **/

  }, {
    key: 'stripeChargeToken',
    set: function set(stripeChargeToken) {
      this._attributes.stripeChargeToken = stripeChargeToken;
    },
    get: function get() {
      return this._attributes.stripeChargeToken;
    }

    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
    /** @param {OrderItem[]} orderItems **/

  }, {
    key: 'orderItems',
    set: function set(orderItems) {
      this._relationships.orderItems = orderItems;
    }
    /** @type {OrderItem[]} */
    ,
    get: function get() {
      return this._relationships.orderItems;
    }
  }]);

  return GroupOrderMember;
}(_clientBase.Resource);

_clientBase.ResourceClasses['group-order-members'] = GroupOrderMember;
/** @class GroupOrderMemberRelDao
 * @extends RelationshipDao  **/

var GroupOrderMemberRelDao = function (_RelationshipDao27) {
  _inherits(GroupOrderMemberRelDao, _RelationshipDao27);

  function GroupOrderMemberRelDao(client) {
    _classCallCheck(this, GroupOrderMemberRelDao);

    var _this80 = _possibleConstructorReturn(this, (GroupOrderMemberRelDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberRelDao)).call(this, client, 'group-order-members', GroupOrderMember));

    _this80.id = null;
    _this80.get = {
      user: function user(options) {
        return _this80.toOne('user', User, options);
      },
      order: function order(options) {
        return _this80.toOne('order', Order, options);
      }
    };
    _this80.index = {
      orderItems: function orderItems(options) {
        return _this80.toMany('order-items', OrderItem, options);
      }
    };
    return _this80;
  }

  return GroupOrderMemberRelDao;
}(_clientBase.RelationshipDao);
/** @class GroupOrderMemberDao
 * @extends ResourceDao  **/


var GroupOrderMemberDao = function (_ResourceDao27) {
  _inherits(GroupOrderMemberDao, _ResourceDao27);

  function GroupOrderMemberDao(client) {
    _classCallCheck(this, GroupOrderMemberDao);

    var _this81 = _possibleConstructorReturn(this, (GroupOrderMemberDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberDao)).call(this, client, 'group-order-members', GroupOrderMember));

    _this81.relationshipDao = new GroupOrderMemberRelDao(client, 'group-order-members');
    return _this81;
  }

  return GroupOrderMemberDao;
}(_clientBase.ResourceDao);

/** @class OrderItem
 * @extends Resource  **/


var OrderItem = exports.OrderItem = function (_Resource28) {
  _inherits(OrderItem, _Resource28);

  function OrderItem() {
    _classCallCheck(this, OrderItem);

    return _possibleConstructorReturn(this, (OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).apply(this, arguments));
  }

  _createClass(OrderItem, [{
    key: 'quantity',

    /** @param {number} quantity **/
    set: function set(quantity) {
      this._attributes.quantity = quantity;
    },
    get: function get() {
      return this._attributes.quantity;
    }
    /** @param {number} notes **/

  }, {
    key: 'notes',
    set: function set(notes) {
      this._attributes.notes = notes;
    },
    get: function get() {
      return this._attributes.notes;
    }
    /** @param {number} clientPriceCents **/

  }, {
    key: 'clientPriceCents',
    set: function set(clientPriceCents) {
      this._attributes.clientPriceCents = clientPriceCents;
    },
    get: function get() {
      return this._attributes.clientPriceCents;
    }
    /** @param {number} restaurantPriceCents **/

  }, {
    key: 'restaurantPriceCents',
    set: function set(restaurantPriceCents) {
      this._attributes.restaurantPriceCents = restaurantPriceCents;
    },
    get: function get() {
      return this._attributes.restaurantPriceCents;
    }
    /** @param {number} custom **/

  }, {
    key: 'custom',
    set: function set(custom) {
      this._attributes.custom = custom;
    },
    get: function get() {
      return this._attributes.custom;
    }
    /** @param {number} taxable **/

  }, {
    key: 'taxable',
    set: function set(taxable) {
      this._attributes.taxable = taxable;
    },
    get: function get() {
      return this._attributes.taxable;
    }
    /** @param {number} overridePrices **/

  }, {
    key: 'overridePrices',
    set: function set(overridePrices) {
      this._attributes.overridePrices = overridePrices;
    },
    get: function get() {
      return this._attributes.overridePrices;
    }

    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
    /** @param {MenuItem} menuItem **/

  }, {
    key: 'menuItem',
    set: function set(menuItem) {
      this._relationships.menuItem = menuItem;
    }
    /** @type {MenuItem} */
    ,
    get: function get() {
      return this._relationships.menuItem;
    }
    /** @param {GroupOrderMember} groupOrderMember **/

  }, {
    key: 'groupOrderMember',
    set: function set(groupOrderMember) {
      this._relationships.groupOrderMember = groupOrderMember;
    }
    /** @type {GroupOrderMember} */
    ,
    get: function get() {
      return this._relationships.groupOrderMember;
    }
    /** @param {MenuOptionItem[]} menuOptionItems **/

  }, {
    key: 'menuOptionItems',
    set: function set(menuOptionItems) {
      this._relationships.menuOptionItems = menuOptionItems;
    }
    /** @type {MenuOptionItem[]} */
    ,
    get: function get() {
      return this._relationships.menuOptionItems;
    }
  }]);

  return OrderItem;
}(_clientBase.Resource);

_clientBase.ResourceClasses['order-items'] = OrderItem;
/** @class OrderItemRelDao
 * @extends RelationshipDao  **/

var OrderItemRelDao = function (_RelationshipDao28) {
  _inherits(OrderItemRelDao, _RelationshipDao28);

  function OrderItemRelDao(client) {
    _classCallCheck(this, OrderItemRelDao);

    var _this83 = _possibleConstructorReturn(this, (OrderItemRelDao.__proto__ || Object.getPrototypeOf(OrderItemRelDao)).call(this, client, 'order-items', OrderItem));

    _this83.id = null;
    _this83.get = {
      order: function order(options) {
        return _this83.toOne('order', Order, options);
      },
      menuItem: function menuItem(options) {
        return _this83.toOne('menu-item', MenuItem, options);
      },
      groupOrderMember: function groupOrderMember(options) {
        return _this83.toOne('group-order-member', GroupOrderMember, options);
      }
    };
    _this83.index = {
      menuOptionItems: function menuOptionItems(options) {
        return _this83.toMany('menu-option-items', MenuOptionItem, options);
      }
    };
    return _this83;
  }

  return OrderItemRelDao;
}(_clientBase.RelationshipDao);
/** @class OrderItemDao
 * @extends ResourceDao  **/


var OrderItemDao = function (_ResourceDao28) {
  _inherits(OrderItemDao, _ResourceDao28);

  function OrderItemDao(client) {
    _classCallCheck(this, OrderItemDao);

    var _this84 = _possibleConstructorReturn(this, (OrderItemDao.__proto__ || Object.getPrototypeOf(OrderItemDao)).call(this, client, 'order-items', OrderItem));

    _this84.relationshipDao = new OrderItemRelDao(client, 'order-items');
    return _this84;
  }

  return OrderItemDao;
}(_clientBase.ResourceDao);

/** @class Invoice
 * @extends Resource  **/


var Invoice = exports.Invoice = function (_Resource29) {
  _inherits(Invoice, _Resource29);

  function Invoice() {
    _classCallCheck(this, Invoice);

    return _possibleConstructorReturn(this, (Invoice.__proto__ || Object.getPrototypeOf(Invoice)).apply(this, arguments));
  }

  _createClass(Invoice, [{
    key: 'clientInvoice',

    /** @param {any} clientInvoice **/
    set: function set(clientInvoice) {
      this._attributes.clientInvoice = clientInvoice;
    },
    get: function get() {
      return this._attributes.clientInvoice;
    }
    /** @param {any} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
  }]);

  return Invoice;
}(_clientBase.Resource);

_clientBase.ResourceClasses['invoices'] = Invoice;
/** @class InvoiceRelDao
 * @extends RelationshipDao  **/

var InvoiceRelDao = function (_RelationshipDao29) {
  _inherits(InvoiceRelDao, _RelationshipDao29);

  function InvoiceRelDao(client) {
    _classCallCheck(this, InvoiceRelDao);

    var _this86 = _possibleConstructorReturn(this, (InvoiceRelDao.__proto__ || Object.getPrototypeOf(InvoiceRelDao)).call(this, client, 'invoices', Invoice));

    _this86.id = null;
    _this86.get = {};
    _this86.index = {};
    return _this86;
  }

  return InvoiceRelDao;
}(_clientBase.RelationshipDao);
/** @class InvoiceDao
 * @extends ResourceDao  **/


var InvoiceDao = function (_ResourceDao29) {
  _inherits(InvoiceDao, _ResourceDao29);

  function InvoiceDao(client) {
    _classCallCheck(this, InvoiceDao);

    var _this87 = _possibleConstructorReturn(this, (InvoiceDao.__proto__ || Object.getPrototypeOf(InvoiceDao)).call(this, client, 'invoices', Invoice));

    _this87.relationshipDao = new InvoiceRelDao(client, 'invoices');
    return _this87;
  }

  return InvoiceDao;
}(_clientBase.ResourceDao);

/** @class EmailMessage
 * @extends Resource  **/


var EmailMessage = exports.EmailMessage = function (_Resource30) {
  _inherits(EmailMessage, _Resource30);

  function EmailMessage() {
    _classCallCheck(this, EmailMessage);

    return _possibleConstructorReturn(this, (EmailMessage.__proto__ || Object.getPrototypeOf(EmailMessage)).apply(this, arguments));
  }

  _createClass(EmailMessage, [{
    key: 'messageId',

    /** @param {string} messageId **/
    set: function set(messageId) {
      this._attributes.messageId = messageId;
    },
    get: function get() {
      return this._attributes.messageId;
    }
    /** @param {string} recipients **/

  }, {
    key: 'recipients',
    set: function set(recipients) {
      this._attributes.recipients = recipients;
    },
    get: function get() {
      return this._attributes.recipients;
    }
    /** @param {string} message **/

  }, {
    key: 'message',
    set: function set(message) {
      this._attributes.message = message;
    },
    get: function get() {
      return this._attributes.message;
    }
    /** @param {string} subject **/

  }, {
    key: 'subject',
    set: function set(subject) {
      this._attributes.subject = subject;
    },
    get: function get() {
      return this._attributes.subject;
    }
    /** @param {string} event **/

  }, {
    key: 'event',
    set: function set(event) {
      this._attributes.event = event;
    },
    get: function get() {
      return this._attributes.event;
    }
    /** @param {string} mailableId **/

  }, {
    key: 'mailableId',
    set: function set(mailableId) {
      this._attributes.mailableId = mailableId;
    },
    get: function get() {
      return this._attributes.mailableId;
    }
    /** @param {string} timestamp **/

  }, {
    key: 'timestamp',
    set: function set(timestamp) {
      this._attributes.timestamp = timestamp;
    },
    get: function get() {
      return this._attributes.timestamp;
    }
    /** @param {string} messageType **/

  }, {
    key: 'messageType',
    set: function set(messageType) {
      this._attributes.messageType = messageType;
    },
    get: function get() {
      return this._attributes.messageType;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }

    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
  }]);

  return EmailMessage;
}(_clientBase.Resource);

_clientBase.ResourceClasses['email-messages'] = EmailMessage;
/** @class EmailMessageRelDao
 * @extends RelationshipDao  **/

var EmailMessageRelDao = function (_RelationshipDao30) {
  _inherits(EmailMessageRelDao, _RelationshipDao30);

  function EmailMessageRelDao(client) {
    _classCallCheck(this, EmailMessageRelDao);

    var _this89 = _possibleConstructorReturn(this, (EmailMessageRelDao.__proto__ || Object.getPrototypeOf(EmailMessageRelDao)).call(this, client, 'email-messages', EmailMessage));

    _this89.id = null;
    _this89.get = {
      order: function order(options) {
        return _this89.toOne('order', Order, options);
      }
    };
    _this89.index = {};
    return _this89;
  }

  return EmailMessageRelDao;
}(_clientBase.RelationshipDao);
/** @class EmailMessageDao
 * @extends ResourceDao  **/


var EmailMessageDao = function (_ResourceDao30) {
  _inherits(EmailMessageDao, _ResourceDao30);

  function EmailMessageDao(client) {
    _classCallCheck(this, EmailMessageDao);

    var _this90 = _possibleConstructorReturn(this, (EmailMessageDao.__proto__ || Object.getPrototypeOf(EmailMessageDao)).call(this, client, 'email-messages', EmailMessage));

    _this90.relationshipDao = new EmailMessageRelDao(client, 'email-messages');
    return _this90;
  }

  return EmailMessageDao;
}(_clientBase.ResourceDao);

/** @class PickupLocation
 * @extends Resource  **/


var PickupLocation = exports.PickupLocation = function (_Resource31) {
  _inherits(PickupLocation, _Resource31);

  function PickupLocation() {
    _classCallCheck(this, PickupLocation);

    return _possibleConstructorReturn(this, (PickupLocation.__proto__ || Object.getPrototypeOf(PickupLocation)).apply(this, arguments));
  }

  _createClass(PickupLocation, [{
    key: 'name',

    /** @param {any} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {number} locationId **/

  }, {
    key: 'locationId',
    set: function set(locationId) {
      this._attributes.locationId = locationId;
    },
    get: function get() {
      return this._attributes.locationId;
    }
    /** @param {number} latitude **/

  }, {
    key: 'latitude',
    set: function set(latitude) {
      this._attributes.latitude = latitude;
    },
    get: function get() {
      return this._attributes.latitude;
    }
    /** @param {number} longitude **/

  }, {
    key: 'longitude',
    set: function set(longitude) {
      this._attributes.longitude = longitude;
    },
    get: function get() {
      return this._attributes.longitude;
    }
    /** @param {number} buzzer **/

  }, {
    key: 'buzzer',
    set: function set(buzzer) {
      this._attributes.buzzer = buzzer;
    },
    get: function get() {
      return this._attributes.buzzer;
    }
    /** @param {number} unitNumber **/

  }, {
    key: 'unitNumber',
    set: function set(unitNumber) {
      this._attributes.unitNumber = unitNumber;
    },
    get: function get() {
      return this._attributes.unitNumber;
    }
    /** @param {number} floor **/

  }, {
    key: 'floor',
    set: function set(floor) {
      this._attributes.floor = floor;
    },
    get: function get() {
      return this._attributes.floor;
    }
    /** @param {number} building **/

  }, {
    key: 'building',
    set: function set(building) {
      this._attributes.building = building;
    },
    get: function get() {
      return this._attributes.building;
    }
    /** @param {number} street **/

  }, {
    key: 'street',
    set: function set(street) {
      this._attributes.street = street;
    },
    get: function get() {
      return this._attributes.street;
    }
    /** @param {number} city **/

  }, {
    key: 'city',
    set: function set(city) {
      this._attributes.city = city;
    },
    get: function get() {
      return this._attributes.city;
    }
    /** @param {number} province **/

  }, {
    key: 'province',
    set: function set(province) {
      this._attributes.province = province;
    },
    get: function get() {
      return this._attributes.province;
    }
    /** @param {number} country **/

  }, {
    key: 'country',
    set: function set(country) {
      this._attributes.country = country;
    },
    get: function get() {
      return this._attributes.country;
    }
    /** @param {number} addressCode **/

  }, {
    key: 'addressCode',
    set: function set(addressCode) {
      this._attributes.addressCode = addressCode;
    },
    get: function get() {
      return this._attributes.addressCode;
    }

    /** @param {Restaurant} restaurant **/

  }, {
    key: 'restaurant',
    set: function set(restaurant) {
      this._relationships.restaurant = restaurant;
    }
    /** @type {Restaurant} */
    ,
    get: function get() {
      return this._relationships.restaurant;
    }
    /** @param {Location} location **/

  }, {
    key: 'location',
    set: function set(location) {
      this._relationships.location = location;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.location;
    }
  }]);

  return PickupLocation;
}(_clientBase.Resource);

_clientBase.ResourceClasses['pickup-locations'] = PickupLocation;
/** @class PickupLocationRelDao
 * @extends RelationshipDao  **/

var PickupLocationRelDao = function (_RelationshipDao31) {
  _inherits(PickupLocationRelDao, _RelationshipDao31);

  function PickupLocationRelDao(client) {
    _classCallCheck(this, PickupLocationRelDao);

    var _this92 = _possibleConstructorReturn(this, (PickupLocationRelDao.__proto__ || Object.getPrototypeOf(PickupLocationRelDao)).call(this, client, 'pickup-locations', PickupLocation));

    _this92.id = null;
    _this92.get = {
      restaurant: function restaurant(options) {
        return _this92.toOne('restaurant', Restaurant, options);
      },
      location: function location(options) {
        return _this92.toOne('location', Location, options);
      }
    };
    _this92.index = {};
    return _this92;
  }

  return PickupLocationRelDao;
}(_clientBase.RelationshipDao);
/** @class PickupLocationDao
 * @extends ResourceDao  **/


var PickupLocationDao = function (_ResourceDao31) {
  _inherits(PickupLocationDao, _ResourceDao31);

  function PickupLocationDao(client) {
    _classCallCheck(this, PickupLocationDao);

    var _this93 = _possibleConstructorReturn(this, (PickupLocationDao.__proto__ || Object.getPrototypeOf(PickupLocationDao)).call(this, client, 'pickup-locations', PickupLocation));

    _this93.relationshipDao = new PickupLocationRelDao(client, 'pickup-locations');
    return _this93;
  }

  return PickupLocationDao;
}(_clientBase.ResourceDao);

/** @class MenuGroup
 * @extends Resource  **/


var MenuGroup = exports.MenuGroup = function (_Resource32) {
  _inherits(MenuGroup, _Resource32);

  function MenuGroup() {
    _classCallCheck(this, MenuGroup);

    return _possibleConstructorReturn(this, (MenuGroup.__proto__ || Object.getPrototypeOf(MenuGroup)).apply(this, arguments));
  }

  _createClass(MenuGroup, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} active **/

  }, {
    key: 'active',
    set: function set(active) {
      this._attributes.active = active;
    },
    get: function get() {
      return this._attributes.active;
    }
    /** @param {string} internal **/

  }, {
    key: 'internal',
    set: function set(internal) {
      this._attributes.internal = internal;
    },
    get: function get() {
      return this._attributes.internal;
    }
    /** @param {string} isCutlery **/

  }, {
    key: 'isCutlery',
    set: function set(isCutlery) {
      this._attributes.isCutlery = isCutlery;
    },
    get: function get() {
      return this._attributes.isCutlery;
    }
    /** @param {string} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }
    /** @param {string} position **/

  }, {
    key: 'position',
    set: function set(position) {
      this._attributes.position = position;
    },
    get: function get() {
      return this._attributes.position;
    }
    /** @param {string} minimumQuantity **/

  }, {
    key: 'minimumQuantity',
    set: function set(minimumQuantity) {
      this._attributes.minimumQuantity = minimumQuantity;
    },
    get: function get() {
      return this._attributes.minimumQuantity;
    }
    /** @param {string} maximumQuantity **/

  }, {
    key: 'maximumQuantity',
    set: function set(maximumQuantity) {
      this._attributes.maximumQuantity = maximumQuantity;
    },
    get: function get() {
      return this._attributes.maximumQuantity;
    }
    /** @param {string} clientPriceCents **/

  }, {
    key: 'clientPriceCents',
    set: function set(clientPriceCents) {
      this._attributes.clientPriceCents = clientPriceCents;
    },
    get: function get() {
      return this._attributes.clientPriceCents;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }

    /** @param {Menu} menu **/

  }, {
    key: 'menu',
    set: function set(menu) {
      this._relationships.menu = menu;
    }
    /** @type {Menu} */
    ,
    get: function get() {
      return this._relationships.menu;
    }
    /** @param {MenuItem[]} menuItems **/

  }, {
    key: 'menuItems',
    set: function set(menuItems) {
      this._relationships.menuItems = menuItems;
    }
    /** @type {MenuItem[]} */
    ,
    get: function get() {
      return this._relationships.menuItems;
    }
  }]);

  return MenuGroup;
}(_clientBase.Resource);

_clientBase.ResourceClasses['menu-groups'] = MenuGroup;
/** @class MenuGroupRelDao
 * @extends RelationshipDao  **/

var MenuGroupRelDao = function (_RelationshipDao32) {
  _inherits(MenuGroupRelDao, _RelationshipDao32);

  function MenuGroupRelDao(client) {
    _classCallCheck(this, MenuGroupRelDao);

    var _this95 = _possibleConstructorReturn(this, (MenuGroupRelDao.__proto__ || Object.getPrototypeOf(MenuGroupRelDao)).call(this, client, 'menu-groups', MenuGroup));

    _this95.id = null;
    _this95.get = {
      menu: function menu(options) {
        return _this95.toOne('menu', Menu, options);
      }
    };
    _this95.index = {
      menuItems: function menuItems(options) {
        return _this95.toMany('menu-items', MenuItem, options);
      }
    };
    return _this95;
  }

  return MenuGroupRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuGroupDao
 * @extends ResourceDao  **/


var MenuGroupDao = function (_ResourceDao32) {
  _inherits(MenuGroupDao, _ResourceDao32);

  function MenuGroupDao(client) {
    _classCallCheck(this, MenuGroupDao);

    var _this96 = _possibleConstructorReturn(this, (MenuGroupDao.__proto__ || Object.getPrototypeOf(MenuGroupDao)).call(this, client, 'menu-groups', MenuGroup));

    _this96.relationshipDao = new MenuGroupRelDao(client, 'menu-groups');
    return _this96;
  }

  return MenuGroupDao;
}(_clientBase.ResourceDao);

/** @class Menu
 * @extends Resource  **/


var Menu = exports.Menu = function (_Resource33) {
  _inherits(Menu, _Resource33);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} active **/

  }, {
    key: 'active',
    set: function set(active) {
      this._attributes.active = active;
    },
    get: function get() {
      return this._attributes.active;
    }
    /** @param {string} areaId **/

  }, {
    key: 'areaId',
    set: function set(areaId) {
      this._attributes.areaId = areaId;
    },
    get: function get() {
      return this._attributes.areaId;
    }
    /** @param {string} restaurantId **/

  }, {
    key: 'restaurantId',
    set: function set(restaurantId) {
      this._attributes.restaurantId = restaurantId;
    },
    get: function get() {
      return this._attributes.restaurantId;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {string} dietaryTagsCounts **/

  }, {
    key: 'dietaryTagsCounts',
    set: function set(dietaryTagsCounts) {
      this._attributes.dietaryTagsCounts = dietaryTagsCounts;
    },
    get: function get() {
      return this._attributes.dietaryTagsCounts;
    }
    /** @param {string} setMenus **/

  }, {
    key: 'setMenus',
    set: function set(setMenus) {
      this._attributes.setMenus = setMenus;
    },
    get: function get() {
      return this._attributes.setMenus;
    }

    /** @param {MenuGroup[]} menuGroups **/

  }, {
    key: 'menuGroups',
    set: function set(menuGroups) {
      this._relationships.menuGroups = menuGroups;
    }
    /** @type {MenuGroup[]} */
    ,
    get: function get() {
      return this._relationships.menuGroups;
    }
    /** @param {MenuItem[]} menuItems **/

  }, {
    key: 'menuItems',
    set: function set(menuItems) {
      this._relationships.menuItems = menuItems;
    }
    /** @type {MenuItem[]} */
    ,
    get: function get() {
      return this._relationships.menuItems;
    }
    /** @param {DietaryTag[]} dietaryTags **/

  }, {
    key: 'dietaryTags',
    set: function set(dietaryTags) {
      this._relationships.dietaryTags = dietaryTags;
    }
    /** @type {DietaryTag[]} */
    ,
    get: function get() {
      return this._relationships.dietaryTags;
    }
    /** @param {Order[]} orders **/

  }, {
    key: 'orders',
    set: function set(orders) {
      this._relationships.orders = orders;
    }
    /** @type {Order[]} */
    ,
    get: function get() {
      return this._relationships.orders;
    }
    /** @param {Area} area **/

  }, {
    key: 'area',
    set: function set(area) {
      this._relationships.area = area;
    }
    /** @type {Area} */
    ,
    get: function get() {
      return this._relationships.area;
    }
    /** @param {Restaurant} restaurant **/

  }, {
    key: 'restaurant',
    set: function set(restaurant) {
      this._relationships.restaurant = restaurant;
    }
    /** @type {Restaurant} */
    ,
    get: function get() {
      return this._relationships.restaurant;
    }
  }]);

  return Menu;
}(_clientBase.Resource);

_clientBase.ResourceClasses['menus'] = Menu;
/** @class MenuRelDao
 * @extends RelationshipDao  **/

var MenuRelDao = function (_RelationshipDao33) {
  _inherits(MenuRelDao, _RelationshipDao33);

  function MenuRelDao(client) {
    _classCallCheck(this, MenuRelDao);

    var _this98 = _possibleConstructorReturn(this, (MenuRelDao.__proto__ || Object.getPrototypeOf(MenuRelDao)).call(this, client, 'menus', Menu));

    _this98.id = null;
    _this98.get = {
      area: function area(options) {
        return _this98.toOne('area', Area, options);
      },
      restaurant: function restaurant(options) {
        return _this98.toOne('restaurant', Restaurant, options);
      }
    };
    _this98.index = {
      menuGroups: function menuGroups(options) {
        return _this98.toMany('menu-groups', MenuGroup, options);
      },
      menuItems: function menuItems(options) {
        return _this98.toMany('menu-items', MenuItem, options);
      },
      dietaryTags: function dietaryTags(options) {
        return _this98.toMany('dietary-tags', DietaryTag, options);
      },
      orders: function orders(options) {
        return _this98.toMany('orders', Order, options);
      }
    };
    return _this98;
  }

  return MenuRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuDao
 * @extends ResourceDao  **/


var MenuDao = function (_ResourceDao33) {
  _inherits(MenuDao, _ResourceDao33);

  function MenuDao(client) {
    _classCallCheck(this, MenuDao);

    var _this99 = _possibleConstructorReturn(this, (MenuDao.__proto__ || Object.getPrototypeOf(MenuDao)).call(this, client, 'menus', Menu));

    _this99.relationshipDao = new MenuRelDao(client, 'menus');
    return _this99;
  }

  return MenuDao;
}(_clientBase.ResourceDao);

/** @class MenuItem
 * @extends Resource  **/


var MenuItem = exports.MenuItem = function (_Resource34) {
  _inherits(MenuItem, _Resource34);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} active **/

  }, {
    key: 'active',
    set: function set(active) {
      this._attributes.active = active;
    },
    get: function get() {
      return this._attributes.active;
    }
    /** @param {string} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }
    /** @param {string} position **/

  }, {
    key: 'position',
    set: function set(position) {
      this._attributes.position = position;
    },
    get: function get() {
      return this._attributes.position;
    }
    /** @param {string} minimumQuantity **/

  }, {
    key: 'minimumQuantity',
    set: function set(minimumQuantity) {
      this._attributes.minimumQuantity = minimumQuantity;
    },
    get: function get() {
      return this._attributes.minimumQuantity;
    }
    /** @param {string} maximumQuantity **/

  }, {
    key: 'maximumQuantity',
    set: function set(maximumQuantity) {
      this._attributes.maximumQuantity = maximumQuantity;
    },
    get: function get() {
      return this._attributes.maximumQuantity;
    }
    /** @param {string} clientPriceCents **/

  }, {
    key: 'clientPriceCents',
    set: function set(clientPriceCents) {
      this._attributes.clientPriceCents = clientPriceCents;
    },
    get: function get() {
      return this._attributes.clientPriceCents;
    }
    /** @param {string} restaurantPriceCents **/

  }, {
    key: 'restaurantPriceCents',
    set: function set(restaurantPriceCents) {
      this._attributes.restaurantPriceCents = restaurantPriceCents;
    },
    get: function get() {
      return this._attributes.restaurantPriceCents;
    }
    /** @param {string} retailPriceCents **/

  }, {
    key: 'retailPriceCents',
    set: function set(retailPriceCents) {
      this._attributes.retailPriceCents = retailPriceCents;
    },
    get: function get() {
      return this._attributes.retailPriceCents;
    }
    /** @param {string} taxRateId **/

  }, {
    key: 'taxRateId',
    set: function set(taxRateId) {
      this._attributes.taxRateId = taxRateId;
    },
    get: function get() {
      return this._attributes.taxRateId;
    }
    /** @param {string} taxable **/

  }, {
    key: 'taxable',
    set: function set(taxable) {
      this._attributes.taxable = taxable;
    },
    get: function get() {
      return this._attributes.taxable;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }

    /** @param {DietaryTag[]} dietaryTags **/

  }, {
    key: 'dietaryTags',
    set: function set(dietaryTags) {
      this._relationships.dietaryTags = dietaryTags;
    }
    /** @type {DietaryTag[]} */
    ,
    get: function get() {
      return this._relationships.dietaryTags;
    }
    /** @param {InvoicingTaxRate} taxRate **/

  }, {
    key: 'taxRate',
    set: function set(taxRate) {
      this._relationships.taxRate = taxRate;
    }
    /** @type {InvoicingTaxRate} */
    ,
    get: function get() {
      return this._relationships.taxRate;
    }
    /** @param {MenuGroup} menuGroup **/

  }, {
    key: 'menuGroup',
    set: function set(menuGroup) {
      this._relationships.menuGroup = menuGroup;
    }
    /** @type {MenuGroup} */
    ,
    get: function get() {
      return this._relationships.menuGroup;
    }
    /** @param {MenuOptionGroup[]} menuOptionGroups **/

  }, {
    key: 'menuOptionGroups',
    set: function set(menuOptionGroups) {
      this._relationships.menuOptionGroups = menuOptionGroups;
    }
    /** @type {MenuOptionGroup[]} */
    ,
    get: function get() {
      return this._relationships.menuOptionGroups;
    }
  }]);

  return MenuItem;
}(_clientBase.Resource);

_clientBase.ResourceClasses['menu-items'] = MenuItem;
/** @class MenuItemRelDao
 * @extends RelationshipDao  **/

var MenuItemRelDao = function (_RelationshipDao34) {
  _inherits(MenuItemRelDao, _RelationshipDao34);

  function MenuItemRelDao(client) {
    _classCallCheck(this, MenuItemRelDao);

    var _this101 = _possibleConstructorReturn(this, (MenuItemRelDao.__proto__ || Object.getPrototypeOf(MenuItemRelDao)).call(this, client, 'menu-items', MenuItem));

    _this101.id = null;
    _this101.get = {
      taxRate: function taxRate(options) {
        return _this101.toOne('tax-rate', InvoicingTaxRate, options);
      },
      menuGroup: function menuGroup(options) {
        return _this101.toOne('menu-group', MenuGroup, options);
      }
    };
    _this101.index = {
      dietaryTags: function dietaryTags(options) {
        return _this101.toMany('dietary-tags', DietaryTag, options);
      },
      menuOptionGroups: function menuOptionGroups(options) {
        return _this101.toMany('menu-option-groups', MenuOptionGroup, options);
      }
    };
    return _this101;
  }

  return MenuItemRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuItemDao
 * @extends ResourceDao  **/


var MenuItemDao = function (_ResourceDao34) {
  _inherits(MenuItemDao, _ResourceDao34);

  function MenuItemDao(client) {
    _classCallCheck(this, MenuItemDao);

    var _this102 = _possibleConstructorReturn(this, (MenuItemDao.__proto__ || Object.getPrototypeOf(MenuItemDao)).call(this, client, 'menu-items', MenuItem));

    _this102.relationshipDao = new MenuItemRelDao(client, 'menu-items');
    return _this102;
  }

  return MenuItemDao;
}(_clientBase.ResourceDao);

/** @class MenuOptionGroup
 * @extends Resource  **/


var MenuOptionGroup = exports.MenuOptionGroup = function (_Resource35) {
  _inherits(MenuOptionGroup, _Resource35);

  function MenuOptionGroup() {
    _classCallCheck(this, MenuOptionGroup);

    return _possibleConstructorReturn(this, (MenuOptionGroup.__proto__ || Object.getPrototypeOf(MenuOptionGroup)).apply(this, arguments));
  }

  _createClass(MenuOptionGroup, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} verb **/

  }, {
    key: 'verb',
    set: function set(verb) {
      this._attributes.verb = verb;
    },
    get: function get() {
      return this._attributes.verb;
    }
    /** @param {string} isRequired **/

  }, {
    key: 'isRequired',
    set: function set(isRequired) {
      this._attributes.isRequired = isRequired;
    },
    get: function get() {
      return this._attributes.isRequired;
    }
    /** @param {string} isSingleOpt **/

  }, {
    key: 'isSingleOpt',
    set: function set(isSingleOpt) {
      this._attributes.isSingleOpt = isSingleOpt;
    },
    get: function get() {
      return this._attributes.isSingleOpt;
    }

    /** @param {MenuOptionItem[]} menuOptionItems **/

  }, {
    key: 'menuOptionItems',
    set: function set(menuOptionItems) {
      this._relationships.menuOptionItems = menuOptionItems;
    }
    /** @type {MenuOptionItem[]} */
    ,
    get: function get() {
      return this._relationships.menuOptionItems;
    }
    /** @param {MenuItem} menuItem **/

  }, {
    key: 'menuItem',
    set: function set(menuItem) {
      this._relationships.menuItem = menuItem;
    }
    /** @type {MenuItem} */
    ,
    get: function get() {
      return this._relationships.menuItem;
    }
  }]);

  return MenuOptionGroup;
}(_clientBase.Resource);

_clientBase.ResourceClasses['menu-option-groups'] = MenuOptionGroup;
/** @class MenuOptionGroupRelDao
 * @extends RelationshipDao  **/

var MenuOptionGroupRelDao = function (_RelationshipDao35) {
  _inherits(MenuOptionGroupRelDao, _RelationshipDao35);

  function MenuOptionGroupRelDao(client) {
    _classCallCheck(this, MenuOptionGroupRelDao);

    var _this104 = _possibleConstructorReturn(this, (MenuOptionGroupRelDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupRelDao)).call(this, client, 'menu-option-groups', MenuOptionGroup));

    _this104.id = null;
    _this104.get = {
      menuItem: function menuItem(options) {
        return _this104.toOne('menu-item', MenuItem, options);
      }
    };
    _this104.index = {
      menuOptionItems: function menuOptionItems(options) {
        return _this104.toMany('menu-option-items', MenuOptionItem, options);
      }
    };
    return _this104;
  }

  return MenuOptionGroupRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuOptionGroupDao
 * @extends ResourceDao  **/


var MenuOptionGroupDao = function (_ResourceDao35) {
  _inherits(MenuOptionGroupDao, _ResourceDao35);

  function MenuOptionGroupDao(client) {
    _classCallCheck(this, MenuOptionGroupDao);

    var _this105 = _possibleConstructorReturn(this, (MenuOptionGroupDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupDao)).call(this, client, 'menu-option-groups', MenuOptionGroup));

    _this105.relationshipDao = new MenuOptionGroupRelDao(client, 'menu-option-groups');
    return _this105;
  }

  return MenuOptionGroupDao;
}(_clientBase.ResourceDao);

/** @class ClientDiscount
 * @extends Resource  **/


var ClientDiscount = exports.ClientDiscount = function (_Resource36) {
  _inherits(ClientDiscount, _Resource36);

  function ClientDiscount() {
    _classCallCheck(this, ClientDiscount);

    return _possibleConstructorReturn(this, (ClientDiscount.__proto__ || Object.getPrototypeOf(ClientDiscount)).apply(this, arguments));
  }

  _createClass(ClientDiscount, [{
    key: 'amountType',

    /** @param {string} amountType **/
    set: function set(amountType) {
      this._attributes.amountType = amountType;
    },
    get: function get() {
      return this._attributes.amountType;
    }
    /** @param {string} accountingCode **/

  }, {
    key: 'accountingCode',
    set: function set(accountingCode) {
      this._attributes.accountingCode = accountingCode;
    },
    get: function get() {
      return this._attributes.accountingCode;
    }
    /** @param {string} amount **/

  }, {
    key: 'amount',
    set: function set(amount) {
      this._attributes.amount = amount;
    },
    get: function get() {
      return this._attributes.amount;
    }
    /** @param {string} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }

    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
  }]);

  return ClientDiscount;
}(_clientBase.Resource);

_clientBase.ResourceClasses['client-discounts'] = ClientDiscount;
/** @class ClientDiscountRelDao
 * @extends RelationshipDao  **/

var ClientDiscountRelDao = function (_RelationshipDao36) {
  _inherits(ClientDiscountRelDao, _RelationshipDao36);

  function ClientDiscountRelDao(client) {
    _classCallCheck(this, ClientDiscountRelDao);

    var _this107 = _possibleConstructorReturn(this, (ClientDiscountRelDao.__proto__ || Object.getPrototypeOf(ClientDiscountRelDao)).call(this, client, 'client-discounts', ClientDiscount));

    _this107.id = null;
    _this107.get = {
      order: function order(options) {
        return _this107.toOne('order', Order, options);
      }
    };
    _this107.index = {};
    return _this107;
  }

  return ClientDiscountRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientDiscountDao
 * @extends ResourceDao  **/


var ClientDiscountDao = function (_ResourceDao36) {
  _inherits(ClientDiscountDao, _ResourceDao36);

  function ClientDiscountDao(client) {
    _classCallCheck(this, ClientDiscountDao);

    var _this108 = _possibleConstructorReturn(this, (ClientDiscountDao.__proto__ || Object.getPrototypeOf(ClientDiscountDao)).call(this, client, 'client-discounts', ClientDiscount));

    _this108.relationshipDao = new ClientDiscountRelDao(client, 'client-discounts');
    return _this108;
  }

  return ClientDiscountDao;
}(_clientBase.ResourceDao);

/** @class RestaurantDiscount
 * @extends Resource  **/


var RestaurantDiscount = exports.RestaurantDiscount = function (_Resource37) {
  _inherits(RestaurantDiscount, _Resource37);

  function RestaurantDiscount() {
    _classCallCheck(this, RestaurantDiscount);

    return _possibleConstructorReturn(this, (RestaurantDiscount.__proto__ || Object.getPrototypeOf(RestaurantDiscount)).apply(this, arguments));
  }

  _createClass(RestaurantDiscount, [{
    key: 'amountType',

    /** @param {string} amountType **/
    set: function set(amountType) {
      this._attributes.amountType = amountType;
    },
    get: function get() {
      return this._attributes.amountType;
    }
    /** @param {string} accountingCode **/

  }, {
    key: 'accountingCode',
    set: function set(accountingCode) {
      this._attributes.accountingCode = accountingCode;
    },
    get: function get() {
      return this._attributes.accountingCode;
    }
    /** @param {string} amount **/

  }, {
    key: 'amount',
    set: function set(amount) {
      this._attributes.amount = amount;
    },
    get: function get() {
      return this._attributes.amount;
    }
    /** @param {string} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }

    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
  }]);

  return RestaurantDiscount;
}(_clientBase.Resource);

_clientBase.ResourceClasses['restaurant-discounts'] = RestaurantDiscount;
/** @class RestaurantDiscountRelDao
 * @extends RelationshipDao  **/

var RestaurantDiscountRelDao = function (_RelationshipDao37) {
  _inherits(RestaurantDiscountRelDao, _RelationshipDao37);

  function RestaurantDiscountRelDao(client) {
    _classCallCheck(this, RestaurantDiscountRelDao);

    var _this110 = _possibleConstructorReturn(this, (RestaurantDiscountRelDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountRelDao)).call(this, client, 'restaurant-discounts', RestaurantDiscount));

    _this110.id = null;
    _this110.get = {
      order: function order(options) {
        return _this110.toOne('order', Order, options);
      }
    };
    _this110.index = {};
    return _this110;
  }

  return RestaurantDiscountRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantDiscountDao
 * @extends ResourceDao  **/


var RestaurantDiscountDao = function (_ResourceDao37) {
  _inherits(RestaurantDiscountDao, _ResourceDao37);

  function RestaurantDiscountDao(client) {
    _classCallCheck(this, RestaurantDiscountDao);

    var _this111 = _possibleConstructorReturn(this, (RestaurantDiscountDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountDao)).call(this, client, 'restaurant-discounts', RestaurantDiscount));

    _this111.relationshipDao = new RestaurantDiscountRelDao(client, 'restaurant-discounts');
    return _this111;
  }

  return RestaurantDiscountDao;
}(_clientBase.ResourceDao);

/** @class DeskCase
 * @extends Resource  **/


var DeskCase = exports.DeskCase = function (_Resource38) {
  _inherits(DeskCase, _Resource38);

  function DeskCase() {
    _classCallCheck(this, DeskCase);

    return _possibleConstructorReturn(this, (DeskCase.__proto__ || Object.getPrototypeOf(DeskCase)).apply(this, arguments));
  }

  _createClass(DeskCase, [{
    key: 'caseRequest',

    /** @param {string} caseRequest **/
    set: function set(caseRequest) {
      this._attributes.caseRequest = caseRequest;
    },
    get: function get() {
      return this._attributes.caseRequest;
    }
    /** @param {string} caseId **/

  }, {
    key: 'caseId',
    set: function set(caseId) {
      this._attributes.caseId = caseId;
    },
    get: function get() {
      return this._attributes.caseId;
    }
    /** @param {string} caseMessage **/

  }, {
    key: 'caseMessage',
    set: function set(caseMessage) {
      this._attributes.caseMessage = caseMessage;
    },
    get: function get() {
      return this._attributes.caseMessage;
    }
    /** @param {string} caseStatus **/

  }, {
    key: 'caseStatus',
    set: function set(caseStatus) {
      this._attributes.caseStatus = caseStatus;
    },
    get: function get() {
      return this._attributes.caseStatus;
    }
    /** @param {string} caseValue **/

  }, {
    key: 'caseValue',
    set: function set(caseValue) {
      this._attributes.caseValue = caseValue;
    },
    get: function get() {
      return this._attributes.caseValue;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }

    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
    /** @param {Order} order **/

  }, {
    key: 'order',
    set: function set(order) {
      this._relationships.order = order;
    }
    /** @type {Order} */
    ,
    get: function get() {
      return this._relationships.order;
    }
  }]);

  return DeskCase;
}(_clientBase.Resource);

_clientBase.ResourceClasses['desk-cases'] = DeskCase;
/** @class DeskCaseRelDao
 * @extends RelationshipDao  **/

var DeskCaseRelDao = function (_RelationshipDao38) {
  _inherits(DeskCaseRelDao, _RelationshipDao38);

  function DeskCaseRelDao(client) {
    _classCallCheck(this, DeskCaseRelDao);

    var _this113 = _possibleConstructorReturn(this, (DeskCaseRelDao.__proto__ || Object.getPrototypeOf(DeskCaseRelDao)).call(this, client, 'desk-cases', DeskCase));

    _this113.id = null;
    _this113.get = {
      user: function user(options) {
        return _this113.toOne('user', User, options);
      },
      order: function order(options) {
        return _this113.toOne('order', Order, options);
      }
    };
    _this113.index = {};
    return _this113;
  }

  return DeskCaseRelDao;
}(_clientBase.RelationshipDao);
/** @class DeskCaseDao
 * @extends ResourceDao  **/


var DeskCaseDao = function (_ResourceDao38) {
  _inherits(DeskCaseDao, _ResourceDao38);

  function DeskCaseDao(client) {
    _classCallCheck(this, DeskCaseDao);

    var _this114 = _possibleConstructorReturn(this, (DeskCaseDao.__proto__ || Object.getPrototypeOf(DeskCaseDao)).call(this, client, 'desk-cases', DeskCase));

    _this114.relationshipDao = new DeskCaseRelDao(client, 'desk-cases');
    return _this114;
  }

  return DeskCaseDao;
}(_clientBase.ResourceDao);

/** @class ClientOrderInvoice
 * @extends Resource  **/


var ClientOrderInvoice = exports.ClientOrderInvoice = function (_Resource39) {
  _inherits(ClientOrderInvoice, _Resource39);

  function ClientOrderInvoice() {
    _classCallCheck(this, ClientOrderInvoice);

    return _possibleConstructorReturn(this, (ClientOrderInvoice.__proto__ || Object.getPrototypeOf(ClientOrderInvoice)).apply(this, arguments));
  }

  _createClass(ClientOrderInvoice, [{
    key: 'summary',

    /** @param {any} summary **/
    set: function set(summary) {
      this._attributes.summary = summary;
    },
    get: function get() {
      return this._attributes.summary;
    }
  }]);

  return ClientOrderInvoice;
}(_clientBase.Resource);

_clientBase.ResourceClasses['client-order-invoices'] = ClientOrderInvoice;
/** @class ClientOrderInvoiceRelDao
 * @extends RelationshipDao  **/

var ClientOrderInvoiceRelDao = function (_RelationshipDao39) {
  _inherits(ClientOrderInvoiceRelDao, _RelationshipDao39);

  function ClientOrderInvoiceRelDao(client) {
    _classCallCheck(this, ClientOrderInvoiceRelDao);

    var _this116 = _possibleConstructorReturn(this, (ClientOrderInvoiceRelDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceRelDao)).call(this, client, 'client-order-invoices', ClientOrderInvoice));

    _this116.id = null;
    _this116.get = {};
    _this116.index = {};
    return _this116;
  }

  return ClientOrderInvoiceRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientOrderInvoiceDao
 * @extends ResourceDao  **/


var ClientOrderInvoiceDao = function (_ResourceDao39) {
  _inherits(ClientOrderInvoiceDao, _ResourceDao39);

  function ClientOrderInvoiceDao(client) {
    _classCallCheck(this, ClientOrderInvoiceDao);

    var _this117 = _possibleConstructorReturn(this, (ClientOrderInvoiceDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceDao)).call(this, client, 'client-order-invoices', ClientOrderInvoice));

    _this117.relationshipDao = new ClientOrderInvoiceRelDao(client, 'client-order-invoices');
    return _this117;
  }

  return ClientOrderInvoiceDao;
}(_clientBase.ResourceDao);

/** @class RestaurantOrderInvoice
 * @extends Resource  **/


var RestaurantOrderInvoice = exports.RestaurantOrderInvoice = function (_Resource40) {
  _inherits(RestaurantOrderInvoice, _Resource40);

  function RestaurantOrderInvoice() {
    _classCallCheck(this, RestaurantOrderInvoice);

    return _possibleConstructorReturn(this, (RestaurantOrderInvoice.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoice)).apply(this, arguments));
  }

  _createClass(RestaurantOrderInvoice, [{
    key: 'summary',

    /** @param {any} summary **/
    set: function set(summary) {
      this._attributes.summary = summary;
    },
    get: function get() {
      return this._attributes.summary;
    }
  }]);

  return RestaurantOrderInvoice;
}(_clientBase.Resource);

_clientBase.ResourceClasses['restaurant-order-invoices'] = RestaurantOrderInvoice;
/** @class RestaurantOrderInvoiceRelDao
 * @extends RelationshipDao  **/

var RestaurantOrderInvoiceRelDao = function (_RelationshipDao40) {
  _inherits(RestaurantOrderInvoiceRelDao, _RelationshipDao40);

  function RestaurantOrderInvoiceRelDao(client) {
    _classCallCheck(this, RestaurantOrderInvoiceRelDao);

    var _this119 = _possibleConstructorReturn(this, (RestaurantOrderInvoiceRelDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceRelDao)).call(this, client, 'restaurant-order-invoices', RestaurantOrderInvoice));

    _this119.id = null;
    _this119.get = {};
    _this119.index = {};
    return _this119;
  }

  return RestaurantOrderInvoiceRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantOrderInvoiceDao
 * @extends ResourceDao  **/


var RestaurantOrderInvoiceDao = function (_ResourceDao40) {
  _inherits(RestaurantOrderInvoiceDao, _ResourceDao40);

  function RestaurantOrderInvoiceDao(client) {
    _classCallCheck(this, RestaurantOrderInvoiceDao);

    var _this120 = _possibleConstructorReturn(this, (RestaurantOrderInvoiceDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceDao)).call(this, client, 'restaurant-order-invoices', RestaurantOrderInvoice));

    _this120.relationshipDao = new RestaurantOrderInvoiceRelDao(client, 'restaurant-order-invoices');
    return _this120;
  }

  return RestaurantOrderInvoiceDao;
}(_clientBase.ResourceDao);

/** @class ServiceTime
 * @extends Resource  **/


var ServiceTime = exports.ServiceTime = function (_Resource41) {
  _inherits(ServiceTime, _Resource41);

  function ServiceTime() {
    _classCallCheck(this, ServiceTime);

    return _possibleConstructorReturn(this, (ServiceTime.__proto__ || Object.getPrototypeOf(ServiceTime)).apply(this, arguments));
  }

  _createClass(ServiceTime, [{
    key: 'weekday',

    /** @param {number} weekday **/
    set: function set(weekday) {
      this._attributes.weekday = weekday;
    },
    get: function get() {
      return this._attributes.weekday;
    }
    /** @param {number} weekdayLetter **/

  }, {
    key: 'weekdayLetter',
    set: function set(weekdayLetter) {
      this._attributes.weekdayLetter = weekdayLetter;
    },
    get: function get() {
      return this._attributes.weekdayLetter;
    }
    /** @param {number} weekdayName **/

  }, {
    key: 'weekdayName',
    set: function set(weekdayName) {
      this._attributes.weekdayName = weekdayName;
    },
    get: function get() {
      return this._attributes.weekdayName;
    }
    /** @param {*} deliveryStartTime **/

  }, {
    key: 'deliveryStartTime',
    set: function set(deliveryStartTime) {
      this._attributes.deliveryStartTime = deliveryStartTime;
    },
    get: function get() {
      return this._attributes.deliveryStartTime;
    }
    /** @param {*} deliveryEndTime **/

  }, {
    key: 'deliveryEndTime',
    set: function set(deliveryEndTime) {
      this._attributes.deliveryEndTime = deliveryEndTime;
    },
    get: function get() {
      return this._attributes.deliveryEndTime;
    }
    /** @param {*} pickupStartTime **/

  }, {
    key: 'pickupStartTime',
    set: function set(pickupStartTime) {
      this._attributes.pickupStartTime = pickupStartTime;
    },
    get: function get() {
      return this._attributes.pickupStartTime;
    }
    /** @param {*} pickupEndTime **/

  }, {
    key: 'pickupEndTime',
    set: function set(pickupEndTime) {
      this._attributes.pickupEndTime = pickupEndTime;
    },
    get: function get() {
      return this._attributes.pickupEndTime;
    }

    /** @param {Restaurant} restaurant **/

  }, {
    key: 'restaurant',
    set: function set(restaurant) {
      this._relationships.restaurant = restaurant;
    }
    /** @type {Restaurant} */
    ,
    get: function get() {
      return this._relationships.restaurant;
    }
  }]);

  return ServiceTime;
}(_clientBase.Resource);

_clientBase.ResourceClasses['service-times'] = ServiceTime;
/** @class ServiceTimeRelDao
 * @extends RelationshipDao  **/

var ServiceTimeRelDao = function (_RelationshipDao41) {
  _inherits(ServiceTimeRelDao, _RelationshipDao41);

  function ServiceTimeRelDao(client) {
    _classCallCheck(this, ServiceTimeRelDao);

    var _this122 = _possibleConstructorReturn(this, (ServiceTimeRelDao.__proto__ || Object.getPrototypeOf(ServiceTimeRelDao)).call(this, client, 'service-times', ServiceTime));

    _this122.id = null;
    _this122.get = {
      restaurant: function restaurant(options) {
        return _this122.toOne('restaurant', Restaurant, options);
      }
    };
    _this122.index = {};
    return _this122;
  }

  return ServiceTimeRelDao;
}(_clientBase.RelationshipDao);
/** @class ServiceTimeDao
 * @extends ResourceDao  **/


var ServiceTimeDao = function (_ResourceDao41) {
  _inherits(ServiceTimeDao, _ResourceDao41);

  function ServiceTimeDao(client) {
    _classCallCheck(this, ServiceTimeDao);

    var _this123 = _possibleConstructorReturn(this, (ServiceTimeDao.__proto__ || Object.getPrototypeOf(ServiceTimeDao)).call(this, client, 'service-times', ServiceTime));

    _this123.relationshipDao = new ServiceTimeRelDao(client, 'service-times');
    return _this123;
  }

  return ServiceTimeDao;
}(_clientBase.ResourceDao);

/** @class Tag
 * @extends Resource  **/


var Tag = exports.Tag = function (_Resource42) {
  _inherits(Tag, _Resource42);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: 'emoji',

    /** @param {string} emoji **/
    set: function set(emoji) {
      this._attributes.emoji = emoji;
    },
    get: function get() {
      return this._attributes.emoji;
    }
    /** @param {string} name **/

  }, {
    key: 'name',
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }
    /** @param {string} tagType **/

  }, {
    key: 'tagType',
    set: function set(tagType) {
      this._attributes.tagType = tagType;
    },
    get: function get() {
      return this._attributes.tagType;
    }
  }]);

  return Tag;
}(_clientBase.Resource);

_clientBase.ResourceClasses['tags'] = Tag;
/** @class TagRelDao
 * @extends RelationshipDao  **/

var TagRelDao = function (_RelationshipDao42) {
  _inherits(TagRelDao, _RelationshipDao42);

  function TagRelDao(client) {
    _classCallCheck(this, TagRelDao);

    var _this125 = _possibleConstructorReturn(this, (TagRelDao.__proto__ || Object.getPrototypeOf(TagRelDao)).call(this, client, 'tags', Tag));

    _this125.id = null;
    _this125.get = {};
    _this125.index = {};
    return _this125;
  }

  return TagRelDao;
}(_clientBase.RelationshipDao);
/** @class TagDao
 * @extends ResourceDao  **/


var TagDao = function (_ResourceDao42) {
  _inherits(TagDao, _ResourceDao42);

  function TagDao(client) {
    _classCallCheck(this, TagDao);

    var _this126 = _possibleConstructorReturn(this, (TagDao.__proto__ || Object.getPrototypeOf(TagDao)).call(this, client, 'tags', Tag));

    _this126.relationshipDao = new TagRelDao(client, 'tags');
    return _this126;
  }

  return TagDao;
}(_clientBase.ResourceDao);

/** @class RestaurantClosure
 * @extends Resource  **/


var RestaurantClosure = exports.RestaurantClosure = function (_Resource43) {
  _inherits(RestaurantClosure, _Resource43);

  function RestaurantClosure() {
    _classCallCheck(this, RestaurantClosure);

    return _possibleConstructorReturn(this, (RestaurantClosure.__proto__ || Object.getPrototypeOf(RestaurantClosure)).apply(this, arguments));
  }

  _createClass(RestaurantClosure, [{
    key: 'date',

    /** @param {date} date **/
    set: function set(date) {
      this._attributes.date = date;
    },
    get: function get() {
      return this._attributes.date;
    }
    /** @param {date} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {date} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }

    /** @param {Restaurant} restaurant **/

  }, {
    key: 'restaurant',
    set: function set(restaurant) {
      this._relationships.restaurant = restaurant;
    }
    /** @type {Restaurant} */
    ,
    get: function get() {
      return this._relationships.restaurant;
    }
  }]);

  return RestaurantClosure;
}(_clientBase.Resource);

_clientBase.ResourceClasses['restaurant-closures'] = RestaurantClosure;
/** @class RestaurantClosureRelDao
 * @extends RelationshipDao  **/

var RestaurantClosureRelDao = function (_RelationshipDao43) {
  _inherits(RestaurantClosureRelDao, _RelationshipDao43);

  function RestaurantClosureRelDao(client) {
    _classCallCheck(this, RestaurantClosureRelDao);

    var _this128 = _possibleConstructorReturn(this, (RestaurantClosureRelDao.__proto__ || Object.getPrototypeOf(RestaurantClosureRelDao)).call(this, client, 'restaurant-closures', RestaurantClosure));

    _this128.id = null;
    _this128.get = {
      restaurant: function restaurant(options) {
        return _this128.toOne('restaurant', Restaurant, options);
      }
    };
    _this128.index = {};
    return _this128;
  }

  return RestaurantClosureRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantClosureDao
 * @extends ResourceDao  **/


var RestaurantClosureDao = function (_ResourceDao43) {
  _inherits(RestaurantClosureDao, _ResourceDao43);

  function RestaurantClosureDao(client) {
    _classCallCheck(this, RestaurantClosureDao);

    var _this129 = _possibleConstructorReturn(this, (RestaurantClosureDao.__proto__ || Object.getPrototypeOf(RestaurantClosureDao)).call(this, client, 'restaurant-closures', RestaurantClosure));

    _this129.relationshipDao = new RestaurantClosureRelDao(client, 'restaurant-closures');
    return _this129;
  }

  return RestaurantClosureDao;
}(_clientBase.ResourceDao);

/** @class Role
 * @extends Resource  **/


var Role = exports.Role = function (_Resource44) {
  _inherits(Role, _Resource44);

  function Role() {
    _classCallCheck(this, Role);

    return _possibleConstructorReturn(this, (Role.__proto__ || Object.getPrototypeOf(Role)).apply(this, arguments));
  }

  _createClass(Role, [{
    key: 'name',

    /** @param {string} name **/
    set: function set(name) {
      this._attributes.name = name;
    },
    get: function get() {
      return this._attributes.name;
    }

    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
  }]);

  return Role;
}(_clientBase.Resource);

_clientBase.ResourceClasses['roles'] = Role;
/** @class RoleRelDao
 * @extends RelationshipDao  **/

var RoleRelDao = function (_RelationshipDao44) {
  _inherits(RoleRelDao, _RelationshipDao44);

  function RoleRelDao(client) {
    _classCallCheck(this, RoleRelDao);

    var _this131 = _possibleConstructorReturn(this, (RoleRelDao.__proto__ || Object.getPrototypeOf(RoleRelDao)).call(this, client, 'roles', Role));

    _this131.id = null;
    _this131.get = {
      user: function user(options) {
        return _this131.toOne('user', User, options);
      }
    };
    _this131.index = {};
    return _this131;
  }

  return RoleRelDao;
}(_clientBase.RelationshipDao);
/** @class RoleDao
 * @extends ResourceDao  **/


var RoleDao = function (_ResourceDao44) {
  _inherits(RoleDao, _ResourceDao44);

  function RoleDao(client) {
    _classCallCheck(this, RoleDao);

    var _this132 = _possibleConstructorReturn(this, (RoleDao.__proto__ || Object.getPrototypeOf(RoleDao)).call(this, client, 'roles', Role));

    _this132.relationshipDao = new RoleRelDao(client, 'roles');
    return _this132;
  }

  return RoleDao;
}(_clientBase.ResourceDao);

/** @class SalesforceSyncError
 * @extends Resource  **/


var SalesforceSyncError = exports.SalesforceSyncError = function (_Resource45) {
  _inherits(SalesforceSyncError, _Resource45);

  function SalesforceSyncError() {
    _classCallCheck(this, SalesforceSyncError);

    return _possibleConstructorReturn(this, (SalesforceSyncError.__proto__ || Object.getPrototypeOf(SalesforceSyncError)).apply(this, arguments));
  }

  _createClass(SalesforceSyncError, [{
    key: 'log',

    /** @param {string} log **/
    set: function set(log) {
      this._attributes.log = log;
    },
    get: function get() {
      return this._attributes.log;
    }
    /** @param {string} recordId **/

  }, {
    key: 'recordId',
    set: function set(recordId) {
      this._attributes.recordId = recordId;
    },
    get: function get() {
      return this._attributes.recordId;
    }
    /** @param {string} recordType **/

  }, {
    key: 'recordType',
    set: function set(recordType) {
      this._attributes.recordType = recordType;
    },
    get: function get() {
      return this._attributes.recordType;
    }
    /** @param {string} isResolved **/

  }, {
    key: 'isResolved',
    set: function set(isResolved) {
      this._attributes.isResolved = isResolved;
    },
    get: function get() {
      return this._attributes.isResolved;
    }
    /** @param {string} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {string} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
  }]);

  return SalesforceSyncError;
}(_clientBase.Resource);

_clientBase.ResourceClasses['salesforce-sync-errors'] = SalesforceSyncError;
/** @class SalesforceSyncErrorRelDao
 * @extends RelationshipDao  **/

var SalesforceSyncErrorRelDao = function (_RelationshipDao45) {
  _inherits(SalesforceSyncErrorRelDao, _RelationshipDao45);

  function SalesforceSyncErrorRelDao(client) {
    _classCallCheck(this, SalesforceSyncErrorRelDao);

    var _this134 = _possibleConstructorReturn(this, (SalesforceSyncErrorRelDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorRelDao)).call(this, client, 'salesforce-sync-errors', SalesforceSyncError));

    _this134.id = null;
    _this134.get = {};
    _this134.index = {};
    return _this134;
  }

  return SalesforceSyncErrorRelDao;
}(_clientBase.RelationshipDao);
/** @class SalesforceSyncErrorDao
 * @extends ResourceDao  **/


var SalesforceSyncErrorDao = function (_ResourceDao45) {
  _inherits(SalesforceSyncErrorDao, _ResourceDao45);

  function SalesforceSyncErrorDao(client) {
    _classCallCheck(this, SalesforceSyncErrorDao);

    var _this135 = _possibleConstructorReturn(this, (SalesforceSyncErrorDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorDao)).call(this, client, 'salesforce-sync-errors', SalesforceSyncError));

    _this135.relationshipDao = new SalesforceSyncErrorRelDao(client, 'salesforce-sync-errors');
    return _this135;
  }

  return SalesforceSyncErrorDao;
}(_clientBase.ResourceDao);

/** @class DiscountCode
 * @extends Resource  **/


var DiscountCode = exports.DiscountCode = function (_Resource46) {
  _inherits(DiscountCode, _Resource46);

  function DiscountCode() {
    _classCallCheck(this, DiscountCode);

    return _possibleConstructorReturn(this, (DiscountCode.__proto__ || Object.getPrototypeOf(DiscountCode)).apply(this, arguments));
  }

  _createClass(DiscountCode, [{
    key: 'code',

    /** @param {any} code **/
    set: function set(code) {
      this._attributes.code = code;
    },
    get: function get() {
      return this._attributes.code;
    }
    /** @param {any} description **/

  }, {
    key: 'description',
    set: function set(description) {
      this._attributes.description = description;
    },
    get: function get() {
      return this._attributes.description;
    }
    /** @param {any} discountType **/

  }, {
    key: 'discountType',
    set: function set(discountType) {
      this._attributes.discountType = discountType;
    },
    get: function get() {
      return this._attributes.discountType;
    }
  }]);

  return DiscountCode;
}(_clientBase.Resource);

_clientBase.ResourceClasses['discount-codes'] = DiscountCode;
/** @class DiscountCodeRelDao
 * @extends RelationshipDao  **/

var DiscountCodeRelDao = function (_RelationshipDao46) {
  _inherits(DiscountCodeRelDao, _RelationshipDao46);

  function DiscountCodeRelDao(client) {
    _classCallCheck(this, DiscountCodeRelDao);

    var _this137 = _possibleConstructorReturn(this, (DiscountCodeRelDao.__proto__ || Object.getPrototypeOf(DiscountCodeRelDao)).call(this, client, 'discount-codes', DiscountCode));

    _this137.id = null;
    _this137.get = {};
    _this137.index = {};
    return _this137;
  }

  return DiscountCodeRelDao;
}(_clientBase.RelationshipDao);
/** @class DiscountCodeDao
 * @extends ResourceDao  **/


var DiscountCodeDao = function (_ResourceDao46) {
  _inherits(DiscountCodeDao, _ResourceDao46);

  function DiscountCodeDao(client) {
    _classCallCheck(this, DiscountCodeDao);

    var _this138 = _possibleConstructorReturn(this, (DiscountCodeDao.__proto__ || Object.getPrototypeOf(DiscountCodeDao)).call(this, client, 'discount-codes', DiscountCode));

    _this138.relationshipDao = new DiscountCodeRelDao(client, 'discount-codes');
    return _this138;
  }

  return DiscountCodeDao;
}(_clientBase.ResourceDao);

/** @class UserFeedback
 * @extends Resource  **/


var UserFeedback = exports.UserFeedback = function (_Resource47) {
  _inherits(UserFeedback, _Resource47);

  function UserFeedback() {
    _classCallCheck(this, UserFeedback);

    return _possibleConstructorReturn(this, (UserFeedback.__proto__ || Object.getPrototypeOf(UserFeedback)).apply(this, arguments));
  }

  _createClass(UserFeedback, [{
    key: 'orderId',

    /** @param {any} orderId **/
    set: function set(orderId) {
      this._attributes.orderId = orderId;
    },
    get: function get() {
      return this._attributes.orderId;
    }
    /** @param {any} meal **/

  }, {
    key: 'meal',
    set: function set(meal) {
      this._attributes.meal = meal;
    },
    get: function get() {
      return this._attributes.meal;
    }
    /** @param {any} website **/

  }, {
    key: 'website',
    set: function set(website) {
      this._attributes.website = website;
    },
    get: function get() {
      return this._attributes.website;
    }
    /** @param {any} delivery **/

  }, {
    key: 'delivery',
    set: function set(delivery) {
      this._attributes.delivery = delivery;
    },
    get: function get() {
      return this._attributes.delivery;
    }
    /** @param {any} ordering **/

  }, {
    key: 'ordering',
    set: function set(ordering) {
      this._attributes.ordering = ordering;
    },
    get: function get() {
      return this._attributes.ordering;
    }
    /** @param {any} recommend **/

  }, {
    key: 'recommend',
    set: function set(recommend) {
      this._attributes.recommend = recommend;
    },
    get: function get() {
      return this._attributes.recommend;
    }
    /** @param {any} suggestion **/

  }, {
    key: 'suggestion',
    set: function set(suggestion) {
      this._attributes.suggestion = suggestion;
    },
    get: function get() {
      return this._attributes.suggestion;
    }
    /** @param {any} createdAt **/

  }, {
    key: 'createdAt',
    set: function set(createdAt) {
      this._attributes.createdAt = createdAt;
    },
    get: function get() {
      return this._attributes.createdAt;
    }
    /** @param {any} updatedAt **/

  }, {
    key: 'updatedAt',
    set: function set(updatedAt) {
      this._attributes.updatedAt = updatedAt;
    },
    get: function get() {
      return this._attributes.updatedAt;
    }
  }]);

  return UserFeedback;
}(_clientBase.Resource);

_clientBase.ResourceClasses['user-feedbacks'] = UserFeedback;
/** @class UserFeedbackRelDao
 * @extends RelationshipDao  **/

var UserFeedbackRelDao = function (_RelationshipDao47) {
  _inherits(UserFeedbackRelDao, _RelationshipDao47);

  function UserFeedbackRelDao(client) {
    _classCallCheck(this, UserFeedbackRelDao);

    var _this140 = _possibleConstructorReturn(this, (UserFeedbackRelDao.__proto__ || Object.getPrototypeOf(UserFeedbackRelDao)).call(this, client, 'user-feedbacks', UserFeedback));

    _this140.id = null;
    _this140.get = {};
    _this140.index = {};
    return _this140;
  }

  return UserFeedbackRelDao;
}(_clientBase.RelationshipDao);
/** @class UserFeedbackDao
 * @extends ResourceDao  **/


var UserFeedbackDao = function (_ResourceDao47) {
  _inherits(UserFeedbackDao, _ResourceDao47);

  function UserFeedbackDao(client) {
    _classCallCheck(this, UserFeedbackDao);

    var _this141 = _possibleConstructorReturn(this, (UserFeedbackDao.__proto__ || Object.getPrototypeOf(UserFeedbackDao)).call(this, client, 'user-feedbacks', UserFeedback));

    _this141.relationshipDao = new UserFeedbackRelDao(client, 'user-feedbacks');
    return _this141;
  }

  return UserFeedbackDao;
}(_clientBase.ResourceDao);

/** @class UserInvite
 * @extends Resource  **/


var UserInvite = exports.UserInvite = function (_Resource48) {
  _inherits(UserInvite, _Resource48);

  function UserInvite() {
    _classCallCheck(this, UserInvite);

    return _possibleConstructorReturn(this, (UserInvite.__proto__ || Object.getPrototypeOf(UserInvite)).apply(this, arguments));
  }

  _createClass(UserInvite, [{
    key: 'email',

    /** @param {any} email **/
    set: function set(email) {
      this._attributes.email = email;
    },
    get: function get() {
      return this._attributes.email;
    }
    /** @param {any} firstName **/

  }, {
    key: 'firstName',
    set: function set(firstName) {
      this._attributes.firstName = firstName;
    },
    get: function get() {
      return this._attributes.firstName;
    }
    /** @param {any} lastName **/

  }, {
    key: 'lastName',
    set: function set(lastName) {
      this._attributes.lastName = lastName;
    },
    get: function get() {
      return this._attributes.lastName;
    }
    /** @param {any} phoneNumber **/

  }, {
    key: 'phoneNumber',
    set: function set(phoneNumber) {
      this._attributes.phoneNumber = phoneNumber;
    },
    get: function get() {
      return this._attributes.phoneNumber;
    }
    /** @param {any} extension **/

  }, {
    key: 'extension',
    set: function set(extension) {
      this._attributes.extension = extension;
    },
    get: function get() {
      return this._attributes.extension;
    }

    /** @param {Client} client **/

  }, {
    key: 'client',
    set: function set(client) {
      this._relationships.client = client;
    }
    /** @type {Client} */
    ,
    get: function get() {
      return this._relationships.client;
    }
    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
  }]);

  return UserInvite;
}(_clientBase.Resource);

_clientBase.ResourceClasses['user-invites'] = UserInvite;
/** @class UserInviteRelDao
 * @extends RelationshipDao  **/

var UserInviteRelDao = function (_RelationshipDao48) {
  _inherits(UserInviteRelDao, _RelationshipDao48);

  function UserInviteRelDao(client) {
    _classCallCheck(this, UserInviteRelDao);

    var _this143 = _possibleConstructorReturn(this, (UserInviteRelDao.__proto__ || Object.getPrototypeOf(UserInviteRelDao)).call(this, client, 'user-invites', UserInvite));

    _this143.id = null;
    _this143.get = {
      client: function client(options) {
        return _this143.toOne('client', Client, options);
      },
      user: function user(options) {
        return _this143.toOne('user', User, options);
      }
    };
    _this143.index = {};
    return _this143;
  }

  return UserInviteRelDao;
}(_clientBase.RelationshipDao);
/** @class UserInviteDao
 * @extends ResourceDao  **/


var UserInviteDao = function (_ResourceDao48) {
  _inherits(UserInviteDao, _ResourceDao48);

  function UserInviteDao(client) {
    _classCallCheck(this, UserInviteDao);

    var _this144 = _possibleConstructorReturn(this, (UserInviteDao.__proto__ || Object.getPrototypeOf(UserInviteDao)).call(this, client, 'user-invites', UserInvite));

    _this144.relationshipDao = new UserInviteRelDao(client, 'user-invites');
    return _this144;
  }

  return UserInviteDao;
}(_clientBase.ResourceDao);

/** @class ClientSignup
 * @extends Resource  **/


var ClientSignup = exports.ClientSignup = function (_Resource49) {
  _inherits(ClientSignup, _Resource49);

  function ClientSignup() {
    _classCallCheck(this, ClientSignup);

    return _possibleConstructorReturn(this, (ClientSignup.__proto__ || Object.getPrototypeOf(ClientSignup)).apply(this, arguments));
  }

  _createClass(ClientSignup, [{
    key: 'companyName',

    /** @param {any} companyName **/
    set: function set(companyName) {
      this._attributes.companyName = companyName;
    },
    get: function get() {
      return this._attributes.companyName;
    }
    /** @param {any} password **/

  }, {
    key: 'password',
    set: function set(password) {
      this._attributes.password = password;
    },
    get: function get() {
      return this._attributes.password;
    }
    /** @param {any} passwordConfirmation **/

  }, {
    key: 'passwordConfirmation',
    set: function set(passwordConfirmation) {
      this._attributes.passwordConfirmation = passwordConfirmation;
    },
    get: function get() {
      return this._attributes.passwordConfirmation;
    }
    /** @param {any} rawAddress **/

  }, {
    key: 'rawAddress',
    set: function set(rawAddress) {
      this._attributes.rawAddress = rawAddress;
    },
    get: function get() {
      return this._attributes.rawAddress;
    }
    /** @param {any} unitNumber **/

  }, {
    key: 'unitNumber',
    set: function set(unitNumber) {
      this._attributes.unitNumber = unitNumber;
    },
    get: function get() {
      return this._attributes.unitNumber;
    }
    /** @param {any} floor **/

  }, {
    key: 'floor',
    set: function set(floor) {
      this._attributes.floor = floor;
    },
    get: function get() {
      return this._attributes.floor;
    }
    /** @param {any} buzzer **/

  }, {
    key: 'buzzer',
    set: function set(buzzer) {
      this._attributes.buzzer = buzzer;
    },
    get: function get() {
      return this._attributes.buzzer;
    }
    /** @param {any} contactPerson **/

  }, {
    key: 'contactPerson',
    set: function set(contactPerson) {
      this._attributes.contactPerson = contactPerson;
    },
    get: function get() {
      return this._attributes.contactPerson;
    }
    /** @param {any} orderFrequency **/

  }, {
    key: 'orderFrequency',
    set: function set(orderFrequency) {
      this._attributes.orderFrequency = orderFrequency;
    },
    get: function get() {
      return this._attributes.orderFrequency;
    }
    /** @param {any} orderSize **/

  }, {
    key: 'orderSize',
    set: function set(orderSize) {
      this._attributes.orderSize = orderSize;
    },
    get: function get() {
      return this._attributes.orderSize;
    }
    /** @param {any} orderBudget **/

  }, {
    key: 'orderBudget',
    set: function set(orderBudget) {
      this._attributes.orderBudget = orderBudget;
    },
    get: function get() {
      return this._attributes.orderBudget;
    }
    /** @param {any} firstName **/

  }, {
    key: 'firstName',
    set: function set(firstName) {
      this._attributes.firstName = firstName;
    },
    get: function get() {
      return this._attributes.firstName;
    }
    /** @param {any} lastName **/

  }, {
    key: 'lastName',
    set: function set(lastName) {
      this._attributes.lastName = lastName;
    },
    get: function get() {
      return this._attributes.lastName;
    }
    /** @param {any} email **/

  }, {
    key: 'email',
    set: function set(email) {
      this._attributes.email = email;
    },
    get: function get() {
      return this._attributes.email;
    }
    /** @param {any} phoneNumber **/

  }, {
    key: 'phoneNumber',
    set: function set(phoneNumber) {
      this._attributes.phoneNumber = phoneNumber;
    },
    get: function get() {
      return this._attributes.phoneNumber;
    }
    /** @param {any} extension **/

  }, {
    key: 'extension',
    set: function set(extension) {
      this._attributes.extension = extension;
    },
    get: function get() {
      return this._attributes.extension;
    }
    /** @param {any} consentToNewTerms **/

  }, {
    key: 'consentToNewTerms',
    set: function set(consentToNewTerms) {
      this._attributes.consentToNewTerms = consentToNewTerms;
    },
    get: function get() {
      return this._attributes.consentToNewTerms;
    }
    /** @param {any} receiveNewsletters **/

  }, {
    key: 'receiveNewsletters',
    set: function set(receiveNewsletters) {
      this._attributes.receiveNewsletters = receiveNewsletters;
    },
    get: function get() {
      return this._attributes.receiveNewsletters;
    }

    /** @param {Client[]} clients **/

  }, {
    key: 'clients',
    set: function set(clients) {
      this._relationships.clients = clients;
    }
    /** @type {Client[]} */
    ,
    get: function get() {
      return this._relationships.clients;
    }
    /** @param {Area[]} areas **/

  }, {
    key: 'areas',
    set: function set(areas) {
      this._relationships.areas = areas;
    }
    /** @type {Area[]} */
    ,
    get: function get() {
      return this._relationships.areas;
    }
    /** @param {User} user **/

  }, {
    key: 'user',
    set: function set(user) {
      this._relationships.user = user;
    }
    /** @type {User} */
    ,
    get: function get() {
      return this._relationships.user;
    }
    /** @param {QualifyingQuestion} qualifyingQuestion **/

  }, {
    key: 'qualifyingQuestion',
    set: function set(qualifyingQuestion) {
      this._relationships.qualifyingQuestion = qualifyingQuestion;
    }
    /** @type {QualifyingQuestion} */
    ,
    get: function get() {
      return this._relationships.qualifyingQuestion;
    }
    /** @param {Location} billingLocation **/

  }, {
    key: 'billingLocation',
    set: function set(billingLocation) {
      this._relationships.billingLocation = billingLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.billingLocation;
    }
    /** @param {Location} deliveryLocation **/

  }, {
    key: 'deliveryLocation',
    set: function set(deliveryLocation) {
      this._relationships.deliveryLocation = deliveryLocation;
    }
    /** @type {Location} */
    ,
    get: function get() {
      return this._relationships.deliveryLocation;
    }
    /** @param {Contact} billingContact **/

  }, {
    key: 'billingContact',
    set: function set(billingContact) {
      this._relationships.billingContact = billingContact;
    }
    /** @type {Contact} */
    ,
    get: function get() {
      return this._relationships.billingContact;
    }
    /** @param {Contact} contact **/

  }, {
    key: 'contact',
    set: function set(contact) {
      this._relationships.contact = contact;
    }
    /** @type {Contact} */
    ,
    get: function get() {
      return this._relationships.contact;
    }
  }]);

  return ClientSignup;
}(_clientBase.Resource);

_clientBase.ResourceClasses['client-signups'] = ClientSignup;
/** @class ClientSignupRelDao
 * @extends RelationshipDao  **/

var ClientSignupRelDao = function (_RelationshipDao49) {
  _inherits(ClientSignupRelDao, _RelationshipDao49);

  function ClientSignupRelDao(client) {
    _classCallCheck(this, ClientSignupRelDao);

    var _this146 = _possibleConstructorReturn(this, (ClientSignupRelDao.__proto__ || Object.getPrototypeOf(ClientSignupRelDao)).call(this, client, 'client-signups', ClientSignup));

    _this146.id = null;
    _this146.get = {
      user: function user(options) {
        return _this146.toOne('user', User, options);
      },
      qualifyingQuestion: function qualifyingQuestion(options) {
        return _this146.toOne('qualifying-question', QualifyingQuestion, options);
      },
      billingLocation: function billingLocation(options) {
        return _this146.toOne('billing-location', Location, options);
      },
      deliveryLocation: function deliveryLocation(options) {
        return _this146.toOne('delivery-location', Location, options);
      },
      billingContact: function billingContact(options) {
        return _this146.toOne('billing-contact', Contact, options);
      },
      contact: function contact(options) {
        return _this146.toOne('contact', Contact, options);
      }
    };
    _this146.index = {
      clients: function clients(options) {
        return _this146.toMany('clients', Client, options);
      },
      areas: function areas(options) {
        return _this146.toMany('areas', Area, options);
      }
    };
    return _this146;
  }

  return ClientSignupRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientSignupDao
 * @extends ResourceDao  **/


var ClientSignupDao = function (_ResourceDao49) {
  _inherits(ClientSignupDao, _ResourceDao49);

  function ClientSignupDao(client) {
    _classCallCheck(this, ClientSignupDao);

    var _this147 = _possibleConstructorReturn(this, (ClientSignupDao.__proto__ || Object.getPrototypeOf(ClientSignupDao)).call(this, client, 'client-signups', ClientSignup));

    _this147.relationshipDao = new ClientSignupRelDao(client, 'client-signups');
    return _this147;
  }

  return ClientSignupDao;
}(_clientBase.ResourceDao);

/** @class QualifyingQuestion
 * @extends Resource  **/


var QualifyingQuestion = exports.QualifyingQuestion = function (_Resource50) {
  _inherits(QualifyingQuestion, _Resource50);

  function QualifyingQuestion() {
    _classCallCheck(this, QualifyingQuestion);

    return _possibleConstructorReturn(this, (QualifyingQuestion.__proto__ || Object.getPrototypeOf(QualifyingQuestion)).apply(this, arguments));
  }

  _createClass(QualifyingQuestion, [{
    key: 'contactPerson',

    /** @param {string} contactPerson **/
    set: function set(contactPerson) {
      this._attributes.contactPerson = contactPerson;
    },
    get: function get() {
      return this._attributes.contactPerson;
    }
    /** @param {string} orderFrequency **/

  }, {
    key: 'orderFrequency',
    set: function set(orderFrequency) {
      this._attributes.orderFrequency = orderFrequency;
    },
    get: function get() {
      return this._attributes.orderFrequency;
    }
    /** @param {string} orderSize **/

  }, {
    key: 'orderSize',
    set: function set(orderSize) {
      this._attributes.orderSize = orderSize;
    },
    get: function get() {
      return this._attributes.orderSize;
    }
    /** @param {string} orderBudget **/

  }, {
    key: 'orderBudget',
    set: function set(orderBudget) {
      this._attributes.orderBudget = orderBudget;
    },
    get: function get() {
      return this._attributes.orderBudget;
    }
  }]);

  return QualifyingQuestion;
}(_clientBase.Resource);

_clientBase.ResourceClasses['qualifying-questions'] = QualifyingQuestion;
/** @class QualifyingQuestionRelDao
 * @extends RelationshipDao  **/

var QualifyingQuestionRelDao = function (_RelationshipDao50) {
  _inherits(QualifyingQuestionRelDao, _RelationshipDao50);

  function QualifyingQuestionRelDao(client) {
    _classCallCheck(this, QualifyingQuestionRelDao);

    var _this149 = _possibleConstructorReturn(this, (QualifyingQuestionRelDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionRelDao)).call(this, client, 'qualifying-questions', QualifyingQuestion));

    _this149.id = null;
    _this149.get = {};
    _this149.index = {};
    return _this149;
  }

  return QualifyingQuestionRelDao;
}(_clientBase.RelationshipDao);
/** @class QualifyingQuestionDao
 * @extends ResourceDao  **/


var QualifyingQuestionDao = function (_ResourceDao50) {
  _inherits(QualifyingQuestionDao, _ResourceDao50);

  function QualifyingQuestionDao(client) {
    _classCallCheck(this, QualifyingQuestionDao);

    var _this150 = _possibleConstructorReturn(this, (QualifyingQuestionDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionDao)).call(this, client, 'qualifying-questions', QualifyingQuestion));

    _this150.relationshipDao = new QualifyingQuestionRelDao(client, 'qualifying-questions');
    return _this150;
  }

  return QualifyingQuestionDao;
}(_clientBase.ResourceDao);

/** @class MFClient **/


var MFClient = exports.MFClient = function (_JRClient) {
  _inherits(MFClient, _JRClient);

  function MFClient(baseUrl, token) {
    _classCallCheck(this, MFClient);

    /** @type {AppConfigurationDao} **/
    var _this151 = _possibleConstructorReturn(this, (MFClient.__proto__ || Object.getPrototypeOf(MFClient)).call(this, baseUrl, token));

    _this151.appConfigurations = new AppConfigurationDao(_this151);
    /** @type {VersionDao} **/
    _this151.versions = new VersionDao(_this151);
    /** @type {AreaDao} **/
    _this151.areas = new AreaDao(_this151);
    /** @type {CourierDao} **/
    _this151.couriers = new CourierDao(_this151);
    /** @type {ClientDao} **/
    _this151.clients = new ClientDao(_this151);
    /** @type {RestaurantDao} **/
    _this151.restaurants = new RestaurantDao(_this151);
    /** @type {InvoicingTaxRateDao} **/
    _this151.invoicingTaxRates = new InvoicingTaxRateDao(_this151);
    /** @type {AreaClosureDao} **/
    _this151.areaClosures = new AreaClosureDao(_this151);
    /** @type {PromoCodeDao} **/
    _this151.promoCodes = new PromoCodeDao(_this151);
    /** @type {CompanyDao} **/
    _this151.companies = new CompanyDao(_this151);
    /** @type {ContactDao} **/
    _this151.contacts = new ContactDao(_this151);
    /** @type {UserDao} **/
    _this151.users = new UserDao(_this151);
    /** @type {DeliveryLocationDao} **/
    _this151.deliveryLocations = new DeliveryLocationDao(_this151);
    /** @type {LocationDao} **/
    _this151.locations = new LocationDao(_this151);
    /** @type {OrderDao} **/
    _this151.orders = new OrderDao(_this151);
    /** @type {PaymentCardDao} **/
    _this151.paymentCards = new PaymentCardDao(_this151);
    /** @type {MealPlanDao} **/
    _this151.mealPlans = new MealPlanDao(_this151);
    /** @type {GiftbitCardDao} **/
    _this151.giftbitCards = new GiftbitCardDao(_this151);
    /** @type {GiftbitGiftDao} **/
    _this151.giftbitGifts = new GiftbitGiftDao(_this151);
    /** @type {GiftbitErrorDao} **/
    _this151.giftbitErrors = new GiftbitErrorDao(_this151);
    /** @type {DeliveryCaseDao} **/
    _this151.deliveryCases = new DeliveryCaseDao(_this151);
    /** @type {DietaryTagDao} **/
    _this151.dietaryTags = new DietaryTagDao(_this151);
    /** @type {MenuOptionItemDao} **/
    _this151.menuOptionItems = new MenuOptionItemDao(_this151);
    /** @type {DriverDayDao} **/
    _this151.driverDays = new DriverDayDao(_this151);
    /** @type {DriverPingDao} **/
    _this151.driverPings = new DriverPingDao(_this151);
    /** @type {DriverWeekDao} **/
    _this151.driverWeeks = new DriverWeekDao(_this151);
    /** @type {GroupOrderMemberDao} **/
    _this151.groupOrderMembers = new GroupOrderMemberDao(_this151);
    /** @type {OrderItemDao} **/
    _this151.orderItems = new OrderItemDao(_this151);
    /** @type {InvoiceDao} **/
    _this151.invoices = new InvoiceDao(_this151);
    /** @type {EmailMessageDao} **/
    _this151.emailMessages = new EmailMessageDao(_this151);
    /** @type {PickupLocationDao} **/
    _this151.pickupLocations = new PickupLocationDao(_this151);
    /** @type {MenuGroupDao} **/
    _this151.menuGroups = new MenuGroupDao(_this151);
    /** @type {MenuDao} **/
    _this151.menus = new MenuDao(_this151);
    /** @type {MenuItemDao} **/
    _this151.menuItems = new MenuItemDao(_this151);
    /** @type {MenuOptionGroupDao} **/
    _this151.menuOptionGroups = new MenuOptionGroupDao(_this151);
    /** @type {ClientDiscountDao} **/
    _this151.clientDiscounts = new ClientDiscountDao(_this151);
    /** @type {RestaurantDiscountDao} **/
    _this151.restaurantDiscounts = new RestaurantDiscountDao(_this151);
    /** @type {DeskCaseDao} **/
    _this151.deskCases = new DeskCaseDao(_this151);
    /** @type {ClientOrderInvoiceDao} **/
    _this151.clientOrderInvoices = new ClientOrderInvoiceDao(_this151);
    /** @type {RestaurantOrderInvoiceDao} **/
    _this151.restaurantOrderInvoices = new RestaurantOrderInvoiceDao(_this151);
    /** @type {ServiceTimeDao} **/
    _this151.serviceTimes = new ServiceTimeDao(_this151);
    /** @type {TagDao} **/
    _this151.tags = new TagDao(_this151);
    /** @type {RestaurantClosureDao} **/
    _this151.restaurantClosures = new RestaurantClosureDao(_this151);
    /** @type {RoleDao} **/
    _this151.roles = new RoleDao(_this151);
    /** @type {SalesforceSyncErrorDao} **/
    _this151.salesforceSyncErrors = new SalesforceSyncErrorDao(_this151);
    /** @type {DiscountCodeDao} **/
    _this151.discountCodes = new DiscountCodeDao(_this151);
    /** @type {UserFeedbackDao} **/
    _this151.userFeedbacks = new UserFeedbackDao(_this151);
    /** @type {UserInviteDao} **/
    _this151.userInvites = new UserInviteDao(_this151);
    /** @type {ClientSignupDao} **/
    _this151.clientSignups = new ClientSignupDao(_this151);
    /** @type {QualifyingQuestionDao} **/
    _this151.qualifyingQuestions = new QualifyingQuestionDao(_this151);
    return _this151;
  }

  return MFClient;
}(_clientBase.JRClient);