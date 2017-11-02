'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.QualifyingQuestion = exports.ClientSignup = exports.UserInvite = exports.UserFeedback = exports.DiscountCode = exports.SalesforceSyncError = exports.Role = exports.RestaurantClosure = exports.Tag = exports.ServiceTime = exports.RestaurantOrderInvoice = exports.ClientOrderInvoice = exports.DeskCase = exports.RestaurantDiscount = exports.ClientDiscount = exports.MenuOptionGroup = exports.MenuItem = exports.Menu = exports.MenuGroup = exports.PickupLocation = exports.EmailMessage = exports.Invoice = exports.OrderItem = exports.GroupOrderMember = exports.DriverWeek = exports.DriverPing = exports.DriverDay = exports.MenuOptionItem = exports.DietaryTag = exports.DeliveryCase = exports.GiftbitError = exports.GiftbitGift = exports.GiftbitCard = exports.MealPlan = exports.PaymentCard = exports.Order = exports.Location = exports.DeliveryLocation = exports.User = exports.Contact = exports.Company = exports.PromoCode = exports.AreaClosure = exports.InvoicingTaxRate = exports.Restaurant = exports.Client = exports.Courier = exports.Area = exports.Version = exports.AppConfiguration = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clientBase = require('./client-base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @module master-fox/resources **/
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