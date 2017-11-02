'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.QualifyingQuestionDao = exports.QualifyingQuestionRelDao = exports.ClientSignupDao = exports.ClientSignupRelDao = exports.UserInviteDao = exports.UserInviteRelDao = exports.UserFeedbackDao = exports.UserFeedbackRelDao = exports.DiscountCodeDao = exports.DiscountCodeRelDao = exports.SalesforceSyncErrorDao = exports.SalesforceSyncErrorRelDao = exports.RoleDao = exports.RoleRelDao = exports.RestaurantClosureDao = exports.RestaurantClosureRelDao = exports.TagDao = exports.TagRelDao = exports.ServiceTimeDao = exports.ServiceTimeRelDao = exports.RestaurantOrderInvoiceDao = exports.RestaurantOrderInvoiceRelDao = exports.ClientOrderInvoiceDao = exports.ClientOrderInvoiceRelDao = exports.DeskCaseDao = exports.DeskCaseRelDao = exports.RestaurantDiscountDao = exports.RestaurantDiscountRelDao = exports.ClientDiscountDao = exports.ClientDiscountRelDao = exports.MenuOptionGroupDao = exports.MenuOptionGroupRelDao = exports.MenuItemDao = exports.MenuItemRelDao = exports.MenuDao = exports.MenuRelDao = exports.MenuGroupDao = exports.MenuGroupRelDao = exports.PickupLocationDao = exports.PickupLocationRelDao = exports.EmailMessageDao = exports.EmailMessageRelDao = exports.InvoiceDao = exports.InvoiceRelDao = exports.OrderItemDao = exports.OrderItemRelDao = exports.GroupOrderMemberDao = exports.GroupOrderMemberRelDao = exports.DriverWeekDao = exports.DriverWeekRelDao = exports.DriverPingDao = exports.DriverPingRelDao = exports.DriverDayDao = exports.DriverDayRelDao = exports.MenuOptionItemDao = exports.MenuOptionItemRelDao = exports.DietaryTagDao = exports.DietaryTagRelDao = exports.DeliveryCaseDao = exports.DeliveryCaseRelDao = exports.GiftbitErrorDao = exports.GiftbitErrorRelDao = exports.GiftbitGiftDao = exports.GiftbitGiftRelDao = exports.GiftbitCardDao = exports.GiftbitCardRelDao = exports.MealPlanDao = exports.MealPlanRelDao = exports.PaymentCardDao = exports.PaymentCardRelDao = exports.OrderDao = exports.OrderRelDao = exports.LocationDao = exports.LocationRelDao = exports.DeliveryLocationDao = exports.DeliveryLocationRelDao = exports.UserDao = exports.UserRelDao = exports.ContactDao = exports.ContactRelDao = exports.CompanyDao = exports.CompanyRelDao = exports.PromoCodeDao = exports.PromoCodeRelDao = exports.AreaClosureDao = exports.AreaClosureRelDao = exports.InvoicingTaxRateDao = exports.InvoicingTaxRateRelDao = exports.RestaurantDao = exports.RestaurantRelDao = exports.ClientDao = exports.ClientRelDao = exports.CourierDao = exports.CourierRelDao = exports.AreaDao = exports.AreaRelDao = exports.VersionDao = exports.VersionRelDao = exports.AppConfigurationDao = exports.AppConfigurationRelDao = undefined;

var _clientBase = require('./client-base');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @module master-fox/resources/data-access **/
/** @class AppConfigurationRelDao
  * @extends {RelationshipDao}  **/
var AppConfigurationRelDao = exports.AppConfigurationRelDao = function (_RelationshipDao) {
	_inherits(AppConfigurationRelDao, _RelationshipDao);

	function AppConfigurationRelDao(client) {
		_classCallCheck(this, AppConfigurationRelDao);

		var _this = _possibleConstructorReturn(this, (AppConfigurationRelDao.__proto__ || Object.getPrototypeOf(AppConfigurationRelDao)).call(this, client, 'app-configurations', AppConfiguration));

		_this.id = null;
		_this.get = {};
		_this.index = {
			versions: function versions(options) {
				return _this.toMany('versions', Version, options);
			}
		};
		return _this;
	}

	return AppConfigurationRelDao;
}(_clientBase.RelationshipDao);
/** @class AppConfigurationDao
  * @extends {ResourceDao}  **/


var AppConfigurationDao = exports.AppConfigurationDao = function (_ResourceDao) {
	_inherits(AppConfigurationDao, _ResourceDao);

	function AppConfigurationDao(client) {
		_classCallCheck(this, AppConfigurationDao);

		var _this2 = _possibleConstructorReturn(this, (AppConfigurationDao.__proto__ || Object.getPrototypeOf(AppConfigurationDao)).call(this, client, 'app-configurations', AppConfiguration));

		_this2.relationshipDao = new AppConfigurationRelDao(client, 'app-configurations');
		return _this2;
	}

	return AppConfigurationDao;
}(_clientBase.ResourceDao);
/** @class VersionRelDao
  * @extends {RelationshipDao}  **/


var VersionRelDao = exports.VersionRelDao = function (_RelationshipDao2) {
	_inherits(VersionRelDao, _RelationshipDao2);

	function VersionRelDao(client) {
		_classCallCheck(this, VersionRelDao);

		var _this3 = _possibleConstructorReturn(this, (VersionRelDao.__proto__ || Object.getPrototypeOf(VersionRelDao)).call(this, client, 'versions', Version));

		_this3.id = null;
		_this3.get = {};
		_this3.index = {};
		return _this3;
	}

	return VersionRelDao;
}(_clientBase.RelationshipDao);
/** @class VersionDao
  * @extends {ResourceDao}  **/


var VersionDao = exports.VersionDao = function (_ResourceDao2) {
	_inherits(VersionDao, _ResourceDao2);

	function VersionDao(client) {
		_classCallCheck(this, VersionDao);

		var _this4 = _possibleConstructorReturn(this, (VersionDao.__proto__ || Object.getPrototypeOf(VersionDao)).call(this, client, 'versions', Version));

		_this4.relationshipDao = new VersionRelDao(client, 'versions');
		return _this4;
	}

	return VersionDao;
}(_clientBase.ResourceDao);
/** @class AreaRelDao
  * @extends {RelationshipDao}  **/


var AreaRelDao = exports.AreaRelDao = function (_RelationshipDao3) {
	_inherits(AreaRelDao, _RelationshipDao3);

	function AreaRelDao(client) {
		_classCallCheck(this, AreaRelDao);

		var _this5 = _possibleConstructorReturn(this, (AreaRelDao.__proto__ || Object.getPrototypeOf(AreaRelDao)).call(this, client, 'areas', Area));

		_this5.id = null;
		_this5.get = {
			deliveryFeeTaxRate: function deliveryFeeTaxRate(options) {
				return _this5.toOne('delivery-fee-tax-rate', InvoicingTaxRate, options);
			}
		};
		_this5.index = {
			couriers: function couriers(options) {
				return _this5.toMany('couriers', Courier, options);
			},
			clients: function clients(options) {
				return _this5.toMany('clients', Client, options);
			},
			restaurants: function restaurants(options) {
				return _this5.toMany('restaurants', Restaurant, options);
			},
			invoicingTaxRates: function invoicingTaxRates(options) {
				return _this5.toMany('invoicing-tax-rates', InvoicingTaxRate, options);
			},
			globalInvoicingTaxRates: function globalInvoicingTaxRates(options) {
				return _this5.toMany('global-invoicing-tax-rates', InvoicingTaxRate, options);
			},
			areaClosures: function areaClosures(options) {
				return _this5.toMany('area-closures', AreaClosure, options);
			},
			currentAreaClosures: function currentAreaClosures(options) {
				return _this5.toMany('current-area-closures', AreaClosure, options);
			},
			promoCodes: function promoCodes(options) {
				return _this5.toMany('promo-codes', PromoCode, options);
			},
			versions: function versions(options) {
				return _this5.toMany('versions', Version, options);
			}
		};
		return _this5;
	}

	return AreaRelDao;
}(_clientBase.RelationshipDao);
/** @class AreaDao
  * @extends {ResourceDao}  **/


var AreaDao = exports.AreaDao = function (_ResourceDao3) {
	_inherits(AreaDao, _ResourceDao3);

	function AreaDao(client) {
		_classCallCheck(this, AreaDao);

		var _this6 = _possibleConstructorReturn(this, (AreaDao.__proto__ || Object.getPrototypeOf(AreaDao)).call(this, client, 'areas', Area));

		_this6.relationshipDao = new AreaRelDao(client, 'areas');
		return _this6;
	}

	return AreaDao;
}(_clientBase.ResourceDao);
/** @class CourierRelDao
  * @extends {RelationshipDao}  **/


var CourierRelDao = exports.CourierRelDao = function (_RelationshipDao4) {
	_inherits(CourierRelDao, _RelationshipDao4);

	function CourierRelDao(client) {
		_classCallCheck(this, CourierRelDao);

		var _this7 = _possibleConstructorReturn(this, (CourierRelDao.__proto__ || Object.getPrototypeOf(CourierRelDao)).call(this, client, 'couriers', Courier));

		_this7.id = null;
		_this7.get = {
			owner: function owner(options) {
				return _this7.toOne('owner', User, options);
			}
		};
		_this7.index = {
			drivers: function drivers(options) {
				return _this7.toMany('drivers', User, options);
			},
			areas: function areas(options) {
				return _this7.toMany('areas', Area, options);
			},
			versions: function versions(options) {
				return _this7.toMany('versions', Version, options);
			}
		};
		return _this7;
	}

	return CourierRelDao;
}(_clientBase.RelationshipDao);
/** @class CourierDao
  * @extends {ResourceDao}  **/


var CourierDao = exports.CourierDao = function (_ResourceDao4) {
	_inherits(CourierDao, _ResourceDao4);

	function CourierDao(client) {
		_classCallCheck(this, CourierDao);

		var _this8 = _possibleConstructorReturn(this, (CourierDao.__proto__ || Object.getPrototypeOf(CourierDao)).call(this, client, 'couriers', Courier));

		_this8.relationshipDao = new CourierRelDao(client, 'couriers');
		return _this8;
	}

	return CourierDao;
}(_clientBase.ResourceDao);
/** @class ClientRelDao
  * @extends {RelationshipDao}  **/


var ClientRelDao = exports.ClientRelDao = function (_RelationshipDao5) {
	_inherits(ClientRelDao, _RelationshipDao5);

	function ClientRelDao(client) {
		_classCallCheck(this, ClientRelDao);

		var _this9 = _possibleConstructorReturn(this, (ClientRelDao.__proto__ || Object.getPrototypeOf(ClientRelDao)).call(this, client, 'clients', Client));

		_this9.id = null;
		_this9.get = {
			defaultArea: function defaultArea(options) {
				return _this9.toOne('default-area', Area, options);
			},
			billingLocation: function billingLocation(options) {
				return _this9.toOne('billing-location', Location, options);
			},
			accountManager: function accountManager(options) {
				return _this9.toOne('account-manager', User, options);
			},
			owner: function owner(options) {
				return _this9.toOne('owner', User, options);
			},
			company: function company(options) {
				return _this9.toOne('company', Company, options);
			},
			mealPlan: function mealPlan(options) {
				return _this9.toOne('meal-plan', MealPlan, options);
			},
			taxRate: function taxRate(options) {
				return _this9.toOne('tax-rate', InvoicingTaxRate, options);
			},
			giftbitCard: function giftbitCard(options) {
				return _this9.toOne('giftbit-card', GiftbitCard, options);
			}
		};
		_this9.index = {
			areas: function areas(options) {
				return _this9.toMany('areas', Area, options);
			},
			deliveryLocations: function deliveryLocations(options) {
				return _this9.toMany('delivery-locations', DeliveryLocation, options);
			},
			adminContacts: function adminContacts(options) {
				return _this9.toMany('admin-contacts', Contact, options);
			},
			admins: function admins(options) {
				return _this9.toMany('admins', User, options);
			},
			orderContacts: function orderContacts(options) {
				return _this9.toMany('order-contacts', Contact, options);
			},
			orders: function orders(options) {
				return _this9.toMany('orders', Order, options);
			},
			paymentCards: function paymentCards(options) {
				return _this9.toMany('payment-cards', PaymentCard, options);
			},
			versions: function versions(options) {
				return _this9.toMany('versions', Version, options);
			},
			giftbitGifts: function giftbitGifts(options) {
				return _this9.toMany('giftbit-gifts', GiftbitGift, options);
			},
			giftbitErrors: function giftbitErrors(options) {
				return _this9.toMany('giftbit-errors', GiftbitError, options);
			}
		};
		return _this9;
	}

	return ClientRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientDao
  * @extends {ResourceDao}  **/


var ClientDao = exports.ClientDao = function (_ResourceDao5) {
	_inherits(ClientDao, _ResourceDao5);

	function ClientDao(client) {
		_classCallCheck(this, ClientDao);

		var _this10 = _possibleConstructorReturn(this, (ClientDao.__proto__ || Object.getPrototypeOf(ClientDao)).call(this, client, 'clients', Client));

		_this10.relationshipDao = new ClientRelDao(client, 'clients');
		return _this10;
	}

	return ClientDao;
}(_clientBase.ResourceDao);
/** @class RestaurantRelDao
  * @extends {RelationshipDao}  **/


var RestaurantRelDao = exports.RestaurantRelDao = function (_RelationshipDao6) {
	_inherits(RestaurantRelDao, _RelationshipDao6);

	function RestaurantRelDao(client) {
		_classCallCheck(this, RestaurantRelDao);

		var _this11 = _possibleConstructorReturn(this, (RestaurantRelDao.__proto__ || Object.getPrototypeOf(RestaurantRelDao)).call(this, client, 'restaurants', Restaurant));

		_this11.id = null;
		_this11.get = {
			billingLocation: function billingLocation(options) {
				return _this11.toOne('billing-location', Location, options);
			},
			billingContact: function billingContact(options) {
				return _this11.toOne('billing-contact', Contact, options);
			},
			owner: function owner(options) {
				return _this11.toOne('owner', User, options);
			}
		};
		_this11.index = {
			orders: function orders(options) {
				return _this11.toMany('orders', Order, options);
			},
			serviceTimes: function serviceTimes(options) {
				return _this11.toMany('service-times', ServiceTime, options);
			},
			pickupLocations: function pickupLocations(options) {
				return _this11.toMany('pickup-locations', PickupLocation, options);
			},
			dietaryTags: function dietaryTags(options) {
				return _this11.toMany('dietary-tags', DietaryTag, options);
			},
			tags: function tags(options) {
				return _this11.toMany('tags', Tag, options);
			},
			areas: function areas(options) {
				return _this11.toMany('areas', Area, options);
			},
			menus: function menus(options) {
				return _this11.toMany('menus', Menu, options);
			},
			closures: function closures(options) {
				return _this11.toMany('closures', RestaurantClosure, options);
			},
			versions: function versions(options) {
				return _this11.toMany('versions', Version, options);
			},
			promoCodes: function promoCodes(options) {
				return _this11.toMany('promo-codes', PromoCode, options);
			}
		};
		return _this11;
	}

	return RestaurantRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantDao
  * @extends {ResourceDao}  **/


var RestaurantDao = exports.RestaurantDao = function (_ResourceDao6) {
	_inherits(RestaurantDao, _ResourceDao6);

	function RestaurantDao(client) {
		_classCallCheck(this, RestaurantDao);

		var _this12 = _possibleConstructorReturn(this, (RestaurantDao.__proto__ || Object.getPrototypeOf(RestaurantDao)).call(this, client, 'restaurants', Restaurant));

		_this12.relationshipDao = new RestaurantRelDao(client, 'restaurants');
		return _this12;
	}

	return RestaurantDao;
}(_clientBase.ResourceDao);
/** @class InvoicingTaxRateRelDao
  * @extends {RelationshipDao}  **/


var InvoicingTaxRateRelDao = exports.InvoicingTaxRateRelDao = function (_RelationshipDao7) {
	_inherits(InvoicingTaxRateRelDao, _RelationshipDao7);

	function InvoicingTaxRateRelDao(client) {
		_classCallCheck(this, InvoicingTaxRateRelDao);

		var _this13 = _possibleConstructorReturn(this, (InvoicingTaxRateRelDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateRelDao)).call(this, client, 'invoicing-tax-rates', InvoicingTaxRate));

		_this13.id = null;
		_this13.get = {
			area: function area(options) {
				return _this13.toOne('area', Area, options);
			}
		};
		_this13.index = {};
		return _this13;
	}

	return InvoicingTaxRateRelDao;
}(_clientBase.RelationshipDao);
/** @class InvoicingTaxRateDao
  * @extends {ResourceDao}  **/


var InvoicingTaxRateDao = exports.InvoicingTaxRateDao = function (_ResourceDao7) {
	_inherits(InvoicingTaxRateDao, _ResourceDao7);

	function InvoicingTaxRateDao(client) {
		_classCallCheck(this, InvoicingTaxRateDao);

		var _this14 = _possibleConstructorReturn(this, (InvoicingTaxRateDao.__proto__ || Object.getPrototypeOf(InvoicingTaxRateDao)).call(this, client, 'invoicing-tax-rates', InvoicingTaxRate));

		_this14.relationshipDao = new InvoicingTaxRateRelDao(client, 'invoicing-tax-rates');
		return _this14;
	}

	return InvoicingTaxRateDao;
}(_clientBase.ResourceDao);
/** @class AreaClosureRelDao
  * @extends {RelationshipDao}  **/


var AreaClosureRelDao = exports.AreaClosureRelDao = function (_RelationshipDao8) {
	_inherits(AreaClosureRelDao, _RelationshipDao8);

	function AreaClosureRelDao(client) {
		_classCallCheck(this, AreaClosureRelDao);

		var _this15 = _possibleConstructorReturn(this, (AreaClosureRelDao.__proto__ || Object.getPrototypeOf(AreaClosureRelDao)).call(this, client, 'area-closures', AreaClosure));

		_this15.id = null;
		_this15.get = {
			area: function area(options) {
				return _this15.toOne('area', Area, options);
			}
		};
		_this15.index = {};
		return _this15;
	}

	return AreaClosureRelDao;
}(_clientBase.RelationshipDao);
/** @class AreaClosureDao
  * @extends {ResourceDao}  **/


var AreaClosureDao = exports.AreaClosureDao = function (_ResourceDao8) {
	_inherits(AreaClosureDao, _ResourceDao8);

	function AreaClosureDao(client) {
		_classCallCheck(this, AreaClosureDao);

		var _this16 = _possibleConstructorReturn(this, (AreaClosureDao.__proto__ || Object.getPrototypeOf(AreaClosureDao)).call(this, client, 'area-closures', AreaClosure));

		_this16.relationshipDao = new AreaClosureRelDao(client, 'area-closures');
		return _this16;
	}

	return AreaClosureDao;
}(_clientBase.ResourceDao);
/** @class PromoCodeRelDao
  * @extends {RelationshipDao}  **/


var PromoCodeRelDao = exports.PromoCodeRelDao = function (_RelationshipDao9) {
	_inherits(PromoCodeRelDao, _RelationshipDao9);

	function PromoCodeRelDao(client) {
		_classCallCheck(this, PromoCodeRelDao);

		var _this17 = _possibleConstructorReturn(this, (PromoCodeRelDao.__proto__ || Object.getPrototypeOf(PromoCodeRelDao)).call(this, client, 'promo-codes', PromoCode));

		_this17.id = null;
		_this17.get = {
			area: function area(options) {
				return _this17.toOne('area', Area, options);
			},
			restaurant: function restaurant(options) {
				return _this17.toOne('restaurant', Restaurant, options);
			}
		};
		_this17.index = {
			orders: function orders(options) {
				return _this17.toMany('orders', Order, options);
			},
			versions: function versions(options) {
				return _this17.toMany('versions', Version, options);
			}
		};
		return _this17;
	}

	return PromoCodeRelDao;
}(_clientBase.RelationshipDao);
/** @class PromoCodeDao
  * @extends {ResourceDao}  **/


var PromoCodeDao = exports.PromoCodeDao = function (_ResourceDao9) {
	_inherits(PromoCodeDao, _ResourceDao9);

	function PromoCodeDao(client) {
		_classCallCheck(this, PromoCodeDao);

		var _this18 = _possibleConstructorReturn(this, (PromoCodeDao.__proto__ || Object.getPrototypeOf(PromoCodeDao)).call(this, client, 'promo-codes', PromoCode));

		_this18.relationshipDao = new PromoCodeRelDao(client, 'promo-codes');
		return _this18;
	}

	return PromoCodeDao;
}(_clientBase.ResourceDao);
/** @class CompanyRelDao
  * @extends {RelationshipDao}  **/


var CompanyRelDao = exports.CompanyRelDao = function (_RelationshipDao10) {
	_inherits(CompanyRelDao, _RelationshipDao10);

	function CompanyRelDao(client) {
		_classCallCheck(this, CompanyRelDao);

		var _this19 = _possibleConstructorReturn(this, (CompanyRelDao.__proto__ || Object.getPrototypeOf(CompanyRelDao)).call(this, client, 'companies', Company));

		_this19.id = null;
		_this19.get = {};
		_this19.index = {
			clients: function clients(options) {
				return _this19.toMany('clients', Client, options);
			}
		};
		return _this19;
	}

	return CompanyRelDao;
}(_clientBase.RelationshipDao);
/** @class CompanyDao
  * @extends {ResourceDao}  **/


var CompanyDao = exports.CompanyDao = function (_ResourceDao10) {
	_inherits(CompanyDao, _ResourceDao10);

	function CompanyDao(client) {
		_classCallCheck(this, CompanyDao);

		var _this20 = _possibleConstructorReturn(this, (CompanyDao.__proto__ || Object.getPrototypeOf(CompanyDao)).call(this, client, 'companies', Company));

		_this20.relationshipDao = new CompanyRelDao(client, 'companies');
		return _this20;
	}

	return CompanyDao;
}(_clientBase.ResourceDao);
/** @class ContactRelDao
  * @extends {RelationshipDao}  **/


var ContactRelDao = exports.ContactRelDao = function (_RelationshipDao11) {
	_inherits(ContactRelDao, _RelationshipDao11);

	function ContactRelDao(client) {
		_classCallCheck(this, ContactRelDao);

		var _this21 = _possibleConstructorReturn(this, (ContactRelDao.__proto__ || Object.getPrototypeOf(ContactRelDao)).call(this, client, 'contacts', Contact));

		_this21.id = null;
		_this21.get = {};
		_this21.index = {};
		return _this21;
	}

	return ContactRelDao;
}(_clientBase.RelationshipDao);
/** @class ContactDao
  * @extends {ResourceDao}  **/


var ContactDao = exports.ContactDao = function (_ResourceDao11) {
	_inherits(ContactDao, _ResourceDao11);

	function ContactDao(client) {
		_classCallCheck(this, ContactDao);

		var _this22 = _possibleConstructorReturn(this, (ContactDao.__proto__ || Object.getPrototypeOf(ContactDao)).call(this, client, 'contacts', Contact));

		_this22.relationshipDao = new ContactRelDao(client, 'contacts');
		return _this22;
	}

	return ContactDao;
}(_clientBase.ResourceDao);
/** @class UserRelDao
  * @extends {RelationshipDao}  **/


var UserRelDao = exports.UserRelDao = function (_RelationshipDao12) {
	_inherits(UserRelDao, _RelationshipDao12);

	function UserRelDao(client) {
		_classCallCheck(this, UserRelDao);

		var _this23 = _possibleConstructorReturn(this, (UserRelDao.__proto__ || Object.getPrototypeOf(UserRelDao)).call(this, client, 'users', User));

		_this23.id = null;
		_this23.get = {};
		_this23.index = {
			driverPings: function driverPings(options) {
				return _this23.toMany('driver-pings', DriverPing, options);
			},
			driverWeeks: function driverWeeks(options) {
				return _this23.toMany('driver-weeks', DriverWeek, options);
			},
			driverDays: function driverDays(options) {
				return _this23.toMany('driver-days', DriverDay, options);
			},
			deliveredOrders: function deliveredOrders(options) {
				return _this23.toMany('delivered-orders', Order, options);
			},
			couriers: function couriers(options) {
				return _this23.toMany('couriers', Courier, options);
			},
			roles: function roles(options) {
				return _this23.toMany('roles', Role, options);
			},
			paymentCards: function paymentCards(options) {
				return _this23.toMany('payment-cards', PaymentCard, options);
			},
			versions: function versions(options) {
				return _this23.toMany('versions', Version, options);
			}
		};
		return _this23;
	}

	return UserRelDao;
}(_clientBase.RelationshipDao);
/** @class UserDao
  * @extends {ResourceDao}  **/


var UserDao = exports.UserDao = function (_ResourceDao12) {
	_inherits(UserDao, _ResourceDao12);

	function UserDao(client) {
		_classCallCheck(this, UserDao);

		var _this24 = _possibleConstructorReturn(this, (UserDao.__proto__ || Object.getPrototypeOf(UserDao)).call(this, client, 'users', User));

		_this24.relationshipDao = new UserRelDao(client, 'users');
		return _this24;
	}

	return UserDao;
}(_clientBase.ResourceDao);
/** @class DeliveryLocationRelDao
  * @extends {RelationshipDao}  **/


var DeliveryLocationRelDao = exports.DeliveryLocationRelDao = function (_RelationshipDao13) {
	_inherits(DeliveryLocationRelDao, _RelationshipDao13);

	function DeliveryLocationRelDao(client) {
		_classCallCheck(this, DeliveryLocationRelDao);

		var _this25 = _possibleConstructorReturn(this, (DeliveryLocationRelDao.__proto__ || Object.getPrototypeOf(DeliveryLocationRelDao)).call(this, client, 'delivery-locations', DeliveryLocation));

		_this25.id = null;
		_this25.get = {
			client: function client(options) {
				return _this25.toOne('client', Client, options);
			},
			location: function location(options) {
				return _this25.toOne('location', Location, options);
			}
		};
		_this25.index = {};
		return _this25;
	}

	return DeliveryLocationRelDao;
}(_clientBase.RelationshipDao);
/** @class DeliveryLocationDao
  * @extends {ResourceDao}  **/


var DeliveryLocationDao = exports.DeliveryLocationDao = function (_ResourceDao13) {
	_inherits(DeliveryLocationDao, _ResourceDao13);

	function DeliveryLocationDao(client) {
		_classCallCheck(this, DeliveryLocationDao);

		var _this26 = _possibleConstructorReturn(this, (DeliveryLocationDao.__proto__ || Object.getPrototypeOf(DeliveryLocationDao)).call(this, client, 'delivery-locations', DeliveryLocation));

		_this26.relationshipDao = new DeliveryLocationRelDao(client, 'delivery-locations');
		return _this26;
	}

	return DeliveryLocationDao;
}(_clientBase.ResourceDao);
/** @class LocationRelDao
  * @extends {RelationshipDao}  **/


var LocationRelDao = exports.LocationRelDao = function (_RelationshipDao14) {
	_inherits(LocationRelDao, _RelationshipDao14);

	function LocationRelDao(client) {
		_classCallCheck(this, LocationRelDao);

		var _this27 = _possibleConstructorReturn(this, (LocationRelDao.__proto__ || Object.getPrototypeOf(LocationRelDao)).call(this, client, 'locations', Location));

		_this27.id = null;
		_this27.get = {
			area: function area(options) {
				return _this27.toOne('area', Area, options);
			}
		};
		_this27.index = {};
		return _this27;
	}

	return LocationRelDao;
}(_clientBase.RelationshipDao);
/** @class LocationDao
  * @extends {ResourceDao}  **/


var LocationDao = exports.LocationDao = function (_ResourceDao14) {
	_inherits(LocationDao, _ResourceDao14);

	function LocationDao(client) {
		_classCallCheck(this, LocationDao);

		var _this28 = _possibleConstructorReturn(this, (LocationDao.__proto__ || Object.getPrototypeOf(LocationDao)).call(this, client, 'locations', Location));

		_this28.relationshipDao = new LocationRelDao(client, 'locations');
		return _this28;
	}

	return LocationDao;
}(_clientBase.ResourceDao);
/** @class OrderRelDao
  * @extends {RelationshipDao}  **/


var OrderRelDao = exports.OrderRelDao = function (_RelationshipDao15) {
	_inherits(OrderRelDao, _RelationshipDao15);

	function OrderRelDao(client) {
		_classCallCheck(this, OrderRelDao);

		var _this29 = _possibleConstructorReturn(this, (OrderRelDao.__proto__ || Object.getPrototypeOf(OrderRelDao)).call(this, client, 'orders', Order));

		_this29.id = null;
		_this29.get = {
			area: function area(options) {
				return _this29.toOne('area', Area, options);
			},
			owner: function owner(options) {
				return _this29.toOne('owner', User, options);
			},
			creator: function creator(options) {
				return _this29.toOne('creator', User, options);
			},
			paymentCard: function paymentCard(options) {
				return _this29.toOne('payment-card', PaymentCard, options);
			},
			contact: function contact(options) {
				return _this29.toOne('contact', Contact, options);
			},
			client: function client(options) {
				return _this29.toOne('client', Client, options);
			},
			restaurant: function restaurant(options) {
				return _this29.toOne('restaurant', Restaurant, options);
			},
			courier: function courier(options) {
				return _this29.toOne('courier', Courier, options);
			},
			promoCode: function promoCode(options) {
				return _this29.toOne('promo-code', PromoCode, options);
			},
			driver: function driver(options) {
				return _this29.toOne('driver', User, options);
			},
			restaurantLocation: function restaurantLocation(options) {
				return _this29.toOne('restaurant-location', Location, options);
			},
			clientLocation: function clientLocation(options) {
				return _this29.toOne('client-location', Location, options);
			},
			clientDiscount: function clientDiscount(options) {
				return _this29.toOne('client-discount', ClientDiscount, options);
			},
			restaurantDiscount: function restaurantDiscount(options) {
				return _this29.toOne('restaurant-discount', RestaurantDiscount, options);
			},
			menu: function menu(options) {
				return _this29.toOne('menu', Menu, options);
			},
			customLocation: function customLocation(options) {
				return _this29.toOne('custom-location', Location, options);
			},
			giftbitError: function giftbitError(options) {
				return _this29.toOne('giftbit-error', GiftbitError, options);
			},
			clientOrderInvoice: function clientOrderInvoice(options) {
				return _this29.toOne('client-order-invoice', ClientOrderInvoice, options);
			},
			restaurantOrderInvoice: function restaurantOrderInvoice(options) {
				return _this29.toOne('restaurant-order-invoice', RestaurantOrderInvoice, options);
			}
		};
		_this29.index = {
			emailMessages: function emailMessages(options) {
				return _this29.toMany('email-messages', EmailMessage, options);
			},
			deliveryCases: function deliveryCases(options) {
				return _this29.toMany('delivery-cases', DeliveryCase, options);
			},
			deskCases: function deskCases(options) {
				return _this29.toMany('desk-cases', DeskCase, options);
			},
			versions: function versions(options) {
				return _this29.toMany('versions', Version, options);
			},
			groupOrderMembers: function groupOrderMembers(options) {
				return _this29.toMany('group-order-members', GroupOrderMember, options);
			},
			orderItems: function orderItems(options) {
				return _this29.toMany('order-items', OrderItem, options);
			}
		};
		return _this29;
	}

	return OrderRelDao;
}(_clientBase.RelationshipDao);
/** @class OrderDao
  * @extends {ResourceDao}  **/


var OrderDao = exports.OrderDao = function (_ResourceDao15) {
	_inherits(OrderDao, _ResourceDao15);

	function OrderDao(client) {
		_classCallCheck(this, OrderDao);

		var _this30 = _possibleConstructorReturn(this, (OrderDao.__proto__ || Object.getPrototypeOf(OrderDao)).call(this, client, 'orders', Order));

		_this30.relationshipDao = new OrderRelDao(client, 'orders');
		return _this30;
	}

	return OrderDao;
}(_clientBase.ResourceDao);
/** @class PaymentCardRelDao
  * @extends {RelationshipDao}  **/


var PaymentCardRelDao = exports.PaymentCardRelDao = function (_RelationshipDao16) {
	_inherits(PaymentCardRelDao, _RelationshipDao16);

	function PaymentCardRelDao(client) {
		_classCallCheck(this, PaymentCardRelDao);

		var _this31 = _possibleConstructorReturn(this, (PaymentCardRelDao.__proto__ || Object.getPrototypeOf(PaymentCardRelDao)).call(this, client, 'payment-cards', PaymentCard));

		_this31.id = null;
		_this31.get = {
			client: function client(options) {
				return _this31.toOne('client', Client, options);
			},
			user: function user(options) {
				return _this31.toOne('user', User, options);
			}
		};
		_this31.index = {};
		return _this31;
	}

	return PaymentCardRelDao;
}(_clientBase.RelationshipDao);
/** @class PaymentCardDao
  * @extends {ResourceDao}  **/


var PaymentCardDao = exports.PaymentCardDao = function (_ResourceDao16) {
	_inherits(PaymentCardDao, _ResourceDao16);

	function PaymentCardDao(client) {
		_classCallCheck(this, PaymentCardDao);

		var _this32 = _possibleConstructorReturn(this, (PaymentCardDao.__proto__ || Object.getPrototypeOf(PaymentCardDao)).call(this, client, 'payment-cards', PaymentCard));

		_this32.relationshipDao = new PaymentCardRelDao(client, 'payment-cards');
		return _this32;
	}

	return PaymentCardDao;
}(_clientBase.ResourceDao);
/** @class MealPlanRelDao
  * @extends {RelationshipDao}  **/


var MealPlanRelDao = exports.MealPlanRelDao = function (_RelationshipDao17) {
	_inherits(MealPlanRelDao, _RelationshipDao17);

	function MealPlanRelDao(client) {
		_classCallCheck(this, MealPlanRelDao);

		var _this33 = _possibleConstructorReturn(this, (MealPlanRelDao.__proto__ || Object.getPrototypeOf(MealPlanRelDao)).call(this, client, 'meal-plans', MealPlan));

		_this33.id = null;
		_this33.get = {
			mealPlanUser: function mealPlanUser(options) {
				return _this33.toOne('meal-plan-user', User, options);
			},
			client: function client(options) {
				return _this33.toOne('client', Client, options);
			}
		};
		_this33.index = {
			orders: function orders(options) {
				return _this33.toMany('orders', Order, options);
			}
		};
		return _this33;
	}

	return MealPlanRelDao;
}(_clientBase.RelationshipDao);
/** @class MealPlanDao
  * @extends {ResourceDao}  **/


var MealPlanDao = exports.MealPlanDao = function (_ResourceDao17) {
	_inherits(MealPlanDao, _ResourceDao17);

	function MealPlanDao(client) {
		_classCallCheck(this, MealPlanDao);

		var _this34 = _possibleConstructorReturn(this, (MealPlanDao.__proto__ || Object.getPrototypeOf(MealPlanDao)).call(this, client, 'meal-plans', MealPlan));

		_this34.relationshipDao = new MealPlanRelDao(client, 'meal-plans');
		return _this34;
	}

	return MealPlanDao;
}(_clientBase.ResourceDao);
/** @class GiftbitCardRelDao
  * @extends {RelationshipDao}  **/


var GiftbitCardRelDao = exports.GiftbitCardRelDao = function (_RelationshipDao18) {
	_inherits(GiftbitCardRelDao, _RelationshipDao18);

	function GiftbitCardRelDao(client) {
		_classCallCheck(this, GiftbitCardRelDao);

		var _this35 = _possibleConstructorReturn(this, (GiftbitCardRelDao.__proto__ || Object.getPrototypeOf(GiftbitCardRelDao)).call(this, client, 'giftbit-cards', GiftbitCard));

		_this35.id = null;
		_this35.get = {};
		_this35.index = {};
		return _this35;
	}

	return GiftbitCardRelDao;
}(_clientBase.RelationshipDao);
/** @class GiftbitCardDao
  * @extends {ResourceDao}  **/


var GiftbitCardDao = exports.GiftbitCardDao = function (_ResourceDao18) {
	_inherits(GiftbitCardDao, _ResourceDao18);

	function GiftbitCardDao(client) {
		_classCallCheck(this, GiftbitCardDao);

		var _this36 = _possibleConstructorReturn(this, (GiftbitCardDao.__proto__ || Object.getPrototypeOf(GiftbitCardDao)).call(this, client, 'giftbit-cards', GiftbitCard));

		_this36.relationshipDao = new GiftbitCardRelDao(client, 'giftbit-cards');
		return _this36;
	}

	return GiftbitCardDao;
}(_clientBase.ResourceDao);
/** @class GiftbitGiftRelDao
  * @extends {RelationshipDao}  **/


var GiftbitGiftRelDao = exports.GiftbitGiftRelDao = function (_RelationshipDao19) {
	_inherits(GiftbitGiftRelDao, _RelationshipDao19);

	function GiftbitGiftRelDao(client) {
		_classCallCheck(this, GiftbitGiftRelDao);

		var _this37 = _possibleConstructorReturn(this, (GiftbitGiftRelDao.__proto__ || Object.getPrototypeOf(GiftbitGiftRelDao)).call(this, client, 'giftbit-gifts', GiftbitGift));

		_this37.id = null;
		_this37.get = {};
		_this37.index = {};
		return _this37;
	}

	return GiftbitGiftRelDao;
}(_clientBase.RelationshipDao);
/** @class GiftbitGiftDao
  * @extends {ResourceDao}  **/


var GiftbitGiftDao = exports.GiftbitGiftDao = function (_ResourceDao19) {
	_inherits(GiftbitGiftDao, _ResourceDao19);

	function GiftbitGiftDao(client) {
		_classCallCheck(this, GiftbitGiftDao);

		var _this38 = _possibleConstructorReturn(this, (GiftbitGiftDao.__proto__ || Object.getPrototypeOf(GiftbitGiftDao)).call(this, client, 'giftbit-gifts', GiftbitGift));

		_this38.relationshipDao = new GiftbitGiftRelDao(client, 'giftbit-gifts');
		return _this38;
	}

	return GiftbitGiftDao;
}(_clientBase.ResourceDao);
/** @class GiftbitErrorRelDao
  * @extends {RelationshipDao}  **/


var GiftbitErrorRelDao = exports.GiftbitErrorRelDao = function (_RelationshipDao20) {
	_inherits(GiftbitErrorRelDao, _RelationshipDao20);

	function GiftbitErrorRelDao(client) {
		_classCallCheck(this, GiftbitErrorRelDao);

		var _this39 = _possibleConstructorReturn(this, (GiftbitErrorRelDao.__proto__ || Object.getPrototypeOf(GiftbitErrorRelDao)).call(this, client, 'giftbit-errors', GiftbitError));

		_this39.id = null;
		_this39.get = {
			order: function order(options) {
				return _this39.toOne('order', Order, options);
			}
		};
		_this39.index = {};
		return _this39;
	}

	return GiftbitErrorRelDao;
}(_clientBase.RelationshipDao);
/** @class GiftbitErrorDao
  * @extends {ResourceDao}  **/


var GiftbitErrorDao = exports.GiftbitErrorDao = function (_ResourceDao20) {
	_inherits(GiftbitErrorDao, _ResourceDao20);

	function GiftbitErrorDao(client) {
		_classCallCheck(this, GiftbitErrorDao);

		var _this40 = _possibleConstructorReturn(this, (GiftbitErrorDao.__proto__ || Object.getPrototypeOf(GiftbitErrorDao)).call(this, client, 'giftbit-errors', GiftbitError));

		_this40.relationshipDao = new GiftbitErrorRelDao(client, 'giftbit-errors');
		return _this40;
	}

	return GiftbitErrorDao;
}(_clientBase.ResourceDao);
/** @class DeliveryCaseRelDao
  * @extends {RelationshipDao}  **/


var DeliveryCaseRelDao = exports.DeliveryCaseRelDao = function (_RelationshipDao21) {
	_inherits(DeliveryCaseRelDao, _RelationshipDao21);

	function DeliveryCaseRelDao(client) {
		_classCallCheck(this, DeliveryCaseRelDao);

		var _this41 = _possibleConstructorReturn(this, (DeliveryCaseRelDao.__proto__ || Object.getPrototypeOf(DeliveryCaseRelDao)).call(this, client, 'delivery-cases', DeliveryCase));

		_this41.id = null;
		_this41.get = {
			user: function user(options) {
				return _this41.toOne('user', User, options);
			},
			order: function order(options) {
				return _this41.toOne('order', Order, options);
			}
		};
		_this41.index = {};
		return _this41;
	}

	return DeliveryCaseRelDao;
}(_clientBase.RelationshipDao);
/** @class DeliveryCaseDao
  * @extends {ResourceDao}  **/


var DeliveryCaseDao = exports.DeliveryCaseDao = function (_ResourceDao21) {
	_inherits(DeliveryCaseDao, _ResourceDao21);

	function DeliveryCaseDao(client) {
		_classCallCheck(this, DeliveryCaseDao);

		var _this42 = _possibleConstructorReturn(this, (DeliveryCaseDao.__proto__ || Object.getPrototypeOf(DeliveryCaseDao)).call(this, client, 'delivery-cases', DeliveryCase));

		_this42.relationshipDao = new DeliveryCaseRelDao(client, 'delivery-cases');
		return _this42;
	}

	return DeliveryCaseDao;
}(_clientBase.ResourceDao);
/** @class DietaryTagRelDao
  * @extends {RelationshipDao}  **/


var DietaryTagRelDao = exports.DietaryTagRelDao = function (_RelationshipDao22) {
	_inherits(DietaryTagRelDao, _RelationshipDao22);

	function DietaryTagRelDao(client) {
		_classCallCheck(this, DietaryTagRelDao);

		var _this43 = _possibleConstructorReturn(this, (DietaryTagRelDao.__proto__ || Object.getPrototypeOf(DietaryTagRelDao)).call(this, client, 'dietary-tags', DietaryTag));

		_this43.id = null;
		_this43.get = {};
		_this43.index = {
			menuOptionItems: function menuOptionItems(options) {
				return _this43.toMany('menu-option-items', MenuOptionItem, options);
			}
		};
		return _this43;
	}

	return DietaryTagRelDao;
}(_clientBase.RelationshipDao);
/** @class DietaryTagDao
  * @extends {ResourceDao}  **/


var DietaryTagDao = exports.DietaryTagDao = function (_ResourceDao22) {
	_inherits(DietaryTagDao, _ResourceDao22);

	function DietaryTagDao(client) {
		_classCallCheck(this, DietaryTagDao);

		var _this44 = _possibleConstructorReturn(this, (DietaryTagDao.__proto__ || Object.getPrototypeOf(DietaryTagDao)).call(this, client, 'dietary-tags', DietaryTag));

		_this44.relationshipDao = new DietaryTagRelDao(client, 'dietary-tags');
		return _this44;
	}

	return DietaryTagDao;
}(_clientBase.ResourceDao);
/** @class MenuOptionItemRelDao
  * @extends {RelationshipDao}  **/


var MenuOptionItemRelDao = exports.MenuOptionItemRelDao = function (_RelationshipDao23) {
	_inherits(MenuOptionItemRelDao, _RelationshipDao23);

	function MenuOptionItemRelDao(client) {
		_classCallCheck(this, MenuOptionItemRelDao);

		var _this45 = _possibleConstructorReturn(this, (MenuOptionItemRelDao.__proto__ || Object.getPrototypeOf(MenuOptionItemRelDao)).call(this, client, 'menu-option-items', MenuOptionItem));

		_this45.id = null;
		_this45.get = {
			menuOptionGroup: function menuOptionGroup(options) {
				return _this45.toOne('menu-option-group', MenuOptionGroup, options);
			}
		};
		_this45.index = {
			dietaryTags: function dietaryTags(options) {
				return _this45.toMany('dietary-tags', DietaryTag, options);
			},
			orderItems: function orderItems(options) {
				return _this45.toMany('order-items', OrderItem, options);
			}
		};
		return _this45;
	}

	return MenuOptionItemRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuOptionItemDao
  * @extends {ResourceDao}  **/


var MenuOptionItemDao = exports.MenuOptionItemDao = function (_ResourceDao23) {
	_inherits(MenuOptionItemDao, _ResourceDao23);

	function MenuOptionItemDao(client) {
		_classCallCheck(this, MenuOptionItemDao);

		var _this46 = _possibleConstructorReturn(this, (MenuOptionItemDao.__proto__ || Object.getPrototypeOf(MenuOptionItemDao)).call(this, client, 'menu-option-items', MenuOptionItem));

		_this46.relationshipDao = new MenuOptionItemRelDao(client, 'menu-option-items');
		return _this46;
	}

	return MenuOptionItemDao;
}(_clientBase.ResourceDao);
/** @class DriverDayRelDao
  * @extends {RelationshipDao}  **/


var DriverDayRelDao = exports.DriverDayRelDao = function (_RelationshipDao24) {
	_inherits(DriverDayRelDao, _RelationshipDao24);

	function DriverDayRelDao(client) {
		_classCallCheck(this, DriverDayRelDao);

		var _this47 = _possibleConstructorReturn(this, (DriverDayRelDao.__proto__ || Object.getPrototypeOf(DriverDayRelDao)).call(this, client, 'driver-days', DriverDay));

		_this47.id = null;
		_this47.get = {
			driver: function driver(options) {
				return _this47.toOne('driver', User, options);
			}
		};
		_this47.index = {};
		return _this47;
	}

	return DriverDayRelDao;
}(_clientBase.RelationshipDao);
/** @class DriverDayDao
  * @extends {ResourceDao}  **/


var DriverDayDao = exports.DriverDayDao = function (_ResourceDao24) {
	_inherits(DriverDayDao, _ResourceDao24);

	function DriverDayDao(client) {
		_classCallCheck(this, DriverDayDao);

		var _this48 = _possibleConstructorReturn(this, (DriverDayDao.__proto__ || Object.getPrototypeOf(DriverDayDao)).call(this, client, 'driver-days', DriverDay));

		_this48.relationshipDao = new DriverDayRelDao(client, 'driver-days');
		return _this48;
	}

	return DriverDayDao;
}(_clientBase.ResourceDao);
/** @class DriverPingRelDao
  * @extends {RelationshipDao}  **/


var DriverPingRelDao = exports.DriverPingRelDao = function (_RelationshipDao25) {
	_inherits(DriverPingRelDao, _RelationshipDao25);

	function DriverPingRelDao(client) {
		_classCallCheck(this, DriverPingRelDao);

		var _this49 = _possibleConstructorReturn(this, (DriverPingRelDao.__proto__ || Object.getPrototypeOf(DriverPingRelDao)).call(this, client, 'driver-pings', DriverPing));

		_this49.id = null;
		_this49.get = {
			user: function user(options) {
				return _this49.toOne('user', User, options);
			}
		};
		_this49.index = {};
		return _this49;
	}

	return DriverPingRelDao;
}(_clientBase.RelationshipDao);
/** @class DriverPingDao
  * @extends {ResourceDao}  **/


var DriverPingDao = exports.DriverPingDao = function (_ResourceDao25) {
	_inherits(DriverPingDao, _ResourceDao25);

	function DriverPingDao(client) {
		_classCallCheck(this, DriverPingDao);

		var _this50 = _possibleConstructorReturn(this, (DriverPingDao.__proto__ || Object.getPrototypeOf(DriverPingDao)).call(this, client, 'driver-pings', DriverPing));

		_this50.relationshipDao = new DriverPingRelDao(client, 'driver-pings');
		return _this50;
	}

	return DriverPingDao;
}(_clientBase.ResourceDao);
/** @class DriverWeekRelDao
  * @extends {RelationshipDao}  **/


var DriverWeekRelDao = exports.DriverWeekRelDao = function (_RelationshipDao26) {
	_inherits(DriverWeekRelDao, _RelationshipDao26);

	function DriverWeekRelDao(client) {
		_classCallCheck(this, DriverWeekRelDao);

		var _this51 = _possibleConstructorReturn(this, (DriverWeekRelDao.__proto__ || Object.getPrototypeOf(DriverWeekRelDao)).call(this, client, 'driver-weeks', DriverWeek));

		_this51.id = null;
		_this51.get = {
			driver: function driver(options) {
				return _this51.toOne('driver', User, options);
			}
		};
		_this51.index = {};
		return _this51;
	}

	return DriverWeekRelDao;
}(_clientBase.RelationshipDao);
/** @class DriverWeekDao
  * @extends {ResourceDao}  **/


var DriverWeekDao = exports.DriverWeekDao = function (_ResourceDao26) {
	_inherits(DriverWeekDao, _ResourceDao26);

	function DriverWeekDao(client) {
		_classCallCheck(this, DriverWeekDao);

		var _this52 = _possibleConstructorReturn(this, (DriverWeekDao.__proto__ || Object.getPrototypeOf(DriverWeekDao)).call(this, client, 'driver-weeks', DriverWeek));

		_this52.relationshipDao = new DriverWeekRelDao(client, 'driver-weeks');
		return _this52;
	}

	return DriverWeekDao;
}(_clientBase.ResourceDao);
/** @class GroupOrderMemberRelDao
  * @extends {RelationshipDao}  **/


var GroupOrderMemberRelDao = exports.GroupOrderMemberRelDao = function (_RelationshipDao27) {
	_inherits(GroupOrderMemberRelDao, _RelationshipDao27);

	function GroupOrderMemberRelDao(client) {
		_classCallCheck(this, GroupOrderMemberRelDao);

		var _this53 = _possibleConstructorReturn(this, (GroupOrderMemberRelDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberRelDao)).call(this, client, 'group-order-members', GroupOrderMember));

		_this53.id = null;
		_this53.get = {
			user: function user(options) {
				return _this53.toOne('user', User, options);
			},
			order: function order(options) {
				return _this53.toOne('order', Order, options);
			}
		};
		_this53.index = {
			orderItems: function orderItems(options) {
				return _this53.toMany('order-items', OrderItem, options);
			}
		};
		return _this53;
	}

	return GroupOrderMemberRelDao;
}(_clientBase.RelationshipDao);
/** @class GroupOrderMemberDao
  * @extends {ResourceDao}  **/


var GroupOrderMemberDao = exports.GroupOrderMemberDao = function (_ResourceDao27) {
	_inherits(GroupOrderMemberDao, _ResourceDao27);

	function GroupOrderMemberDao(client) {
		_classCallCheck(this, GroupOrderMemberDao);

		var _this54 = _possibleConstructorReturn(this, (GroupOrderMemberDao.__proto__ || Object.getPrototypeOf(GroupOrderMemberDao)).call(this, client, 'group-order-members', GroupOrderMember));

		_this54.relationshipDao = new GroupOrderMemberRelDao(client, 'group-order-members');
		return _this54;
	}

	return GroupOrderMemberDao;
}(_clientBase.ResourceDao);
/** @class OrderItemRelDao
  * @extends {RelationshipDao}  **/


var OrderItemRelDao = exports.OrderItemRelDao = function (_RelationshipDao28) {
	_inherits(OrderItemRelDao, _RelationshipDao28);

	function OrderItemRelDao(client) {
		_classCallCheck(this, OrderItemRelDao);

		var _this55 = _possibleConstructorReturn(this, (OrderItemRelDao.__proto__ || Object.getPrototypeOf(OrderItemRelDao)).call(this, client, 'order-items', OrderItem));

		_this55.id = null;
		_this55.get = {
			order: function order(options) {
				return _this55.toOne('order', Order, options);
			},
			menuItem: function menuItem(options) {
				return _this55.toOne('menu-item', MenuItem, options);
			},
			groupOrderMember: function groupOrderMember(options) {
				return _this55.toOne('group-order-member', GroupOrderMember, options);
			}
		};
		_this55.index = {
			menuOptionItems: function menuOptionItems(options) {
				return _this55.toMany('menu-option-items', MenuOptionItem, options);
			}
		};
		return _this55;
	}

	return OrderItemRelDao;
}(_clientBase.RelationshipDao);
/** @class OrderItemDao
  * @extends {ResourceDao}  **/


var OrderItemDao = exports.OrderItemDao = function (_ResourceDao28) {
	_inherits(OrderItemDao, _ResourceDao28);

	function OrderItemDao(client) {
		_classCallCheck(this, OrderItemDao);

		var _this56 = _possibleConstructorReturn(this, (OrderItemDao.__proto__ || Object.getPrototypeOf(OrderItemDao)).call(this, client, 'order-items', OrderItem));

		_this56.relationshipDao = new OrderItemRelDao(client, 'order-items');
		return _this56;
	}

	return OrderItemDao;
}(_clientBase.ResourceDao);
/** @class InvoiceRelDao
  * @extends {RelationshipDao}  **/


var InvoiceRelDao = exports.InvoiceRelDao = function (_RelationshipDao29) {
	_inherits(InvoiceRelDao, _RelationshipDao29);

	function InvoiceRelDao(client) {
		_classCallCheck(this, InvoiceRelDao);

		var _this57 = _possibleConstructorReturn(this, (InvoiceRelDao.__proto__ || Object.getPrototypeOf(InvoiceRelDao)).call(this, client, 'invoices', Invoice));

		_this57.id = null;
		_this57.get = {};
		_this57.index = {};
		return _this57;
	}

	return InvoiceRelDao;
}(_clientBase.RelationshipDao);
/** @class InvoiceDao
  * @extends {ResourceDao}  **/


var InvoiceDao = exports.InvoiceDao = function (_ResourceDao29) {
	_inherits(InvoiceDao, _ResourceDao29);

	function InvoiceDao(client) {
		_classCallCheck(this, InvoiceDao);

		var _this58 = _possibleConstructorReturn(this, (InvoiceDao.__proto__ || Object.getPrototypeOf(InvoiceDao)).call(this, client, 'invoices', Invoice));

		_this58.relationshipDao = new InvoiceRelDao(client, 'invoices');
		return _this58;
	}

	return InvoiceDao;
}(_clientBase.ResourceDao);
/** @class EmailMessageRelDao
  * @extends {RelationshipDao}  **/


var EmailMessageRelDao = exports.EmailMessageRelDao = function (_RelationshipDao30) {
	_inherits(EmailMessageRelDao, _RelationshipDao30);

	function EmailMessageRelDao(client) {
		_classCallCheck(this, EmailMessageRelDao);

		var _this59 = _possibleConstructorReturn(this, (EmailMessageRelDao.__proto__ || Object.getPrototypeOf(EmailMessageRelDao)).call(this, client, 'email-messages', EmailMessage));

		_this59.id = null;
		_this59.get = {
			order: function order(options) {
				return _this59.toOne('order', Order, options);
			}
		};
		_this59.index = {};
		return _this59;
	}

	return EmailMessageRelDao;
}(_clientBase.RelationshipDao);
/** @class EmailMessageDao
  * @extends {ResourceDao}  **/


var EmailMessageDao = exports.EmailMessageDao = function (_ResourceDao30) {
	_inherits(EmailMessageDao, _ResourceDao30);

	function EmailMessageDao(client) {
		_classCallCheck(this, EmailMessageDao);

		var _this60 = _possibleConstructorReturn(this, (EmailMessageDao.__proto__ || Object.getPrototypeOf(EmailMessageDao)).call(this, client, 'email-messages', EmailMessage));

		_this60.relationshipDao = new EmailMessageRelDao(client, 'email-messages');
		return _this60;
	}

	return EmailMessageDao;
}(_clientBase.ResourceDao);
/** @class PickupLocationRelDao
  * @extends {RelationshipDao}  **/


var PickupLocationRelDao = exports.PickupLocationRelDao = function (_RelationshipDao31) {
	_inherits(PickupLocationRelDao, _RelationshipDao31);

	function PickupLocationRelDao(client) {
		_classCallCheck(this, PickupLocationRelDao);

		var _this61 = _possibleConstructorReturn(this, (PickupLocationRelDao.__proto__ || Object.getPrototypeOf(PickupLocationRelDao)).call(this, client, 'pickup-locations', PickupLocation));

		_this61.id = null;
		_this61.get = {
			restaurant: function restaurant(options) {
				return _this61.toOne('restaurant', Restaurant, options);
			},
			location: function location(options) {
				return _this61.toOne('location', Location, options);
			}
		};
		_this61.index = {};
		return _this61;
	}

	return PickupLocationRelDao;
}(_clientBase.RelationshipDao);
/** @class PickupLocationDao
  * @extends {ResourceDao}  **/


var PickupLocationDao = exports.PickupLocationDao = function (_ResourceDao31) {
	_inherits(PickupLocationDao, _ResourceDao31);

	function PickupLocationDao(client) {
		_classCallCheck(this, PickupLocationDao);

		var _this62 = _possibleConstructorReturn(this, (PickupLocationDao.__proto__ || Object.getPrototypeOf(PickupLocationDao)).call(this, client, 'pickup-locations', PickupLocation));

		_this62.relationshipDao = new PickupLocationRelDao(client, 'pickup-locations');
		return _this62;
	}

	return PickupLocationDao;
}(_clientBase.ResourceDao);
/** @class MenuGroupRelDao
  * @extends {RelationshipDao}  **/


var MenuGroupRelDao = exports.MenuGroupRelDao = function (_RelationshipDao32) {
	_inherits(MenuGroupRelDao, _RelationshipDao32);

	function MenuGroupRelDao(client) {
		_classCallCheck(this, MenuGroupRelDao);

		var _this63 = _possibleConstructorReturn(this, (MenuGroupRelDao.__proto__ || Object.getPrototypeOf(MenuGroupRelDao)).call(this, client, 'menu-groups', MenuGroup));

		_this63.id = null;
		_this63.get = {
			menu: function menu(options) {
				return _this63.toOne('menu', Menu, options);
			}
		};
		_this63.index = {
			menuItems: function menuItems(options) {
				return _this63.toMany('menu-items', MenuItem, options);
			}
		};
		return _this63;
	}

	return MenuGroupRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuGroupDao
  * @extends {ResourceDao}  **/


var MenuGroupDao = exports.MenuGroupDao = function (_ResourceDao32) {
	_inherits(MenuGroupDao, _ResourceDao32);

	function MenuGroupDao(client) {
		_classCallCheck(this, MenuGroupDao);

		var _this64 = _possibleConstructorReturn(this, (MenuGroupDao.__proto__ || Object.getPrototypeOf(MenuGroupDao)).call(this, client, 'menu-groups', MenuGroup));

		_this64.relationshipDao = new MenuGroupRelDao(client, 'menu-groups');
		return _this64;
	}

	return MenuGroupDao;
}(_clientBase.ResourceDao);
/** @class MenuRelDao
  * @extends {RelationshipDao}  **/


var MenuRelDao = exports.MenuRelDao = function (_RelationshipDao33) {
	_inherits(MenuRelDao, _RelationshipDao33);

	function MenuRelDao(client) {
		_classCallCheck(this, MenuRelDao);

		var _this65 = _possibleConstructorReturn(this, (MenuRelDao.__proto__ || Object.getPrototypeOf(MenuRelDao)).call(this, client, 'menus', Menu));

		_this65.id = null;
		_this65.get = {
			area: function area(options) {
				return _this65.toOne('area', Area, options);
			},
			restaurant: function restaurant(options) {
				return _this65.toOne('restaurant', Restaurant, options);
			}
		};
		_this65.index = {
			menuGroups: function menuGroups(options) {
				return _this65.toMany('menu-groups', MenuGroup, options);
			},
			menuItems: function menuItems(options) {
				return _this65.toMany('menu-items', MenuItem, options);
			},
			dietaryTags: function dietaryTags(options) {
				return _this65.toMany('dietary-tags', DietaryTag, options);
			},
			orders: function orders(options) {
				return _this65.toMany('orders', Order, options);
			}
		};
		return _this65;
	}

	return MenuRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuDao
  * @extends {ResourceDao}  **/


var MenuDao = exports.MenuDao = function (_ResourceDao33) {
	_inherits(MenuDao, _ResourceDao33);

	function MenuDao(client) {
		_classCallCheck(this, MenuDao);

		var _this66 = _possibleConstructorReturn(this, (MenuDao.__proto__ || Object.getPrototypeOf(MenuDao)).call(this, client, 'menus', Menu));

		_this66.relationshipDao = new MenuRelDao(client, 'menus');
		return _this66;
	}

	return MenuDao;
}(_clientBase.ResourceDao);
/** @class MenuItemRelDao
  * @extends {RelationshipDao}  **/


var MenuItemRelDao = exports.MenuItemRelDao = function (_RelationshipDao34) {
	_inherits(MenuItemRelDao, _RelationshipDao34);

	function MenuItemRelDao(client) {
		_classCallCheck(this, MenuItemRelDao);

		var _this67 = _possibleConstructorReturn(this, (MenuItemRelDao.__proto__ || Object.getPrototypeOf(MenuItemRelDao)).call(this, client, 'menu-items', MenuItem));

		_this67.id = null;
		_this67.get = {
			taxRate: function taxRate(options) {
				return _this67.toOne('tax-rate', InvoicingTaxRate, options);
			},
			menuGroup: function menuGroup(options) {
				return _this67.toOne('menu-group', MenuGroup, options);
			}
		};
		_this67.index = {
			dietaryTags: function dietaryTags(options) {
				return _this67.toMany('dietary-tags', DietaryTag, options);
			},
			menuOptionGroups: function menuOptionGroups(options) {
				return _this67.toMany('menu-option-groups', MenuOptionGroup, options);
			}
		};
		return _this67;
	}

	return MenuItemRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuItemDao
  * @extends {ResourceDao}  **/


var MenuItemDao = exports.MenuItemDao = function (_ResourceDao34) {
	_inherits(MenuItemDao, _ResourceDao34);

	function MenuItemDao(client) {
		_classCallCheck(this, MenuItemDao);

		var _this68 = _possibleConstructorReturn(this, (MenuItemDao.__proto__ || Object.getPrototypeOf(MenuItemDao)).call(this, client, 'menu-items', MenuItem));

		_this68.relationshipDao = new MenuItemRelDao(client, 'menu-items');
		return _this68;
	}

	return MenuItemDao;
}(_clientBase.ResourceDao);
/** @class MenuOptionGroupRelDao
  * @extends {RelationshipDao}  **/


var MenuOptionGroupRelDao = exports.MenuOptionGroupRelDao = function (_RelationshipDao35) {
	_inherits(MenuOptionGroupRelDao, _RelationshipDao35);

	function MenuOptionGroupRelDao(client) {
		_classCallCheck(this, MenuOptionGroupRelDao);

		var _this69 = _possibleConstructorReturn(this, (MenuOptionGroupRelDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupRelDao)).call(this, client, 'menu-option-groups', MenuOptionGroup));

		_this69.id = null;
		_this69.get = {
			menuItem: function menuItem(options) {
				return _this69.toOne('menu-item', MenuItem, options);
			}
		};
		_this69.index = {
			menuOptionItems: function menuOptionItems(options) {
				return _this69.toMany('menu-option-items', MenuOptionItem, options);
			}
		};
		return _this69;
	}

	return MenuOptionGroupRelDao;
}(_clientBase.RelationshipDao);
/** @class MenuOptionGroupDao
  * @extends {ResourceDao}  **/


var MenuOptionGroupDao = exports.MenuOptionGroupDao = function (_ResourceDao35) {
	_inherits(MenuOptionGroupDao, _ResourceDao35);

	function MenuOptionGroupDao(client) {
		_classCallCheck(this, MenuOptionGroupDao);

		var _this70 = _possibleConstructorReturn(this, (MenuOptionGroupDao.__proto__ || Object.getPrototypeOf(MenuOptionGroupDao)).call(this, client, 'menu-option-groups', MenuOptionGroup));

		_this70.relationshipDao = new MenuOptionGroupRelDao(client, 'menu-option-groups');
		return _this70;
	}

	return MenuOptionGroupDao;
}(_clientBase.ResourceDao);
/** @class ClientDiscountRelDao
  * @extends {RelationshipDao}  **/


var ClientDiscountRelDao = exports.ClientDiscountRelDao = function (_RelationshipDao36) {
	_inherits(ClientDiscountRelDao, _RelationshipDao36);

	function ClientDiscountRelDao(client) {
		_classCallCheck(this, ClientDiscountRelDao);

		var _this71 = _possibleConstructorReturn(this, (ClientDiscountRelDao.__proto__ || Object.getPrototypeOf(ClientDiscountRelDao)).call(this, client, 'client-discounts', ClientDiscount));

		_this71.id = null;
		_this71.get = {
			order: function order(options) {
				return _this71.toOne('order', Order, options);
			}
		};
		_this71.index = {};
		return _this71;
	}

	return ClientDiscountRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientDiscountDao
  * @extends {ResourceDao}  **/


var ClientDiscountDao = exports.ClientDiscountDao = function (_ResourceDao36) {
	_inherits(ClientDiscountDao, _ResourceDao36);

	function ClientDiscountDao(client) {
		_classCallCheck(this, ClientDiscountDao);

		var _this72 = _possibleConstructorReturn(this, (ClientDiscountDao.__proto__ || Object.getPrototypeOf(ClientDiscountDao)).call(this, client, 'client-discounts', ClientDiscount));

		_this72.relationshipDao = new ClientDiscountRelDao(client, 'client-discounts');
		return _this72;
	}

	return ClientDiscountDao;
}(_clientBase.ResourceDao);
/** @class RestaurantDiscountRelDao
  * @extends {RelationshipDao}  **/


var RestaurantDiscountRelDao = exports.RestaurantDiscountRelDao = function (_RelationshipDao37) {
	_inherits(RestaurantDiscountRelDao, _RelationshipDao37);

	function RestaurantDiscountRelDao(client) {
		_classCallCheck(this, RestaurantDiscountRelDao);

		var _this73 = _possibleConstructorReturn(this, (RestaurantDiscountRelDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountRelDao)).call(this, client, 'restaurant-discounts', RestaurantDiscount));

		_this73.id = null;
		_this73.get = {
			order: function order(options) {
				return _this73.toOne('order', Order, options);
			}
		};
		_this73.index = {};
		return _this73;
	}

	return RestaurantDiscountRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantDiscountDao
  * @extends {ResourceDao}  **/


var RestaurantDiscountDao = exports.RestaurantDiscountDao = function (_ResourceDao37) {
	_inherits(RestaurantDiscountDao, _ResourceDao37);

	function RestaurantDiscountDao(client) {
		_classCallCheck(this, RestaurantDiscountDao);

		var _this74 = _possibleConstructorReturn(this, (RestaurantDiscountDao.__proto__ || Object.getPrototypeOf(RestaurantDiscountDao)).call(this, client, 'restaurant-discounts', RestaurantDiscount));

		_this74.relationshipDao = new RestaurantDiscountRelDao(client, 'restaurant-discounts');
		return _this74;
	}

	return RestaurantDiscountDao;
}(_clientBase.ResourceDao);
/** @class DeskCaseRelDao
  * @extends {RelationshipDao}  **/


var DeskCaseRelDao = exports.DeskCaseRelDao = function (_RelationshipDao38) {
	_inherits(DeskCaseRelDao, _RelationshipDao38);

	function DeskCaseRelDao(client) {
		_classCallCheck(this, DeskCaseRelDao);

		var _this75 = _possibleConstructorReturn(this, (DeskCaseRelDao.__proto__ || Object.getPrototypeOf(DeskCaseRelDao)).call(this, client, 'desk-cases', DeskCase));

		_this75.id = null;
		_this75.get = {
			user: function user(options) {
				return _this75.toOne('user', User, options);
			},
			order: function order(options) {
				return _this75.toOne('order', Order, options);
			}
		};
		_this75.index = {};
		return _this75;
	}

	return DeskCaseRelDao;
}(_clientBase.RelationshipDao);
/** @class DeskCaseDao
  * @extends {ResourceDao}  **/


var DeskCaseDao = exports.DeskCaseDao = function (_ResourceDao38) {
	_inherits(DeskCaseDao, _ResourceDao38);

	function DeskCaseDao(client) {
		_classCallCheck(this, DeskCaseDao);

		var _this76 = _possibleConstructorReturn(this, (DeskCaseDao.__proto__ || Object.getPrototypeOf(DeskCaseDao)).call(this, client, 'desk-cases', DeskCase));

		_this76.relationshipDao = new DeskCaseRelDao(client, 'desk-cases');
		return _this76;
	}

	return DeskCaseDao;
}(_clientBase.ResourceDao);
/** @class ClientOrderInvoiceRelDao
  * @extends {RelationshipDao}  **/


var ClientOrderInvoiceRelDao = exports.ClientOrderInvoiceRelDao = function (_RelationshipDao39) {
	_inherits(ClientOrderInvoiceRelDao, _RelationshipDao39);

	function ClientOrderInvoiceRelDao(client) {
		_classCallCheck(this, ClientOrderInvoiceRelDao);

		var _this77 = _possibleConstructorReturn(this, (ClientOrderInvoiceRelDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceRelDao)).call(this, client, 'client-order-invoices', ClientOrderInvoice));

		_this77.id = null;
		_this77.get = {};
		_this77.index = {};
		return _this77;
	}

	return ClientOrderInvoiceRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientOrderInvoiceDao
  * @extends {ResourceDao}  **/


var ClientOrderInvoiceDao = exports.ClientOrderInvoiceDao = function (_ResourceDao39) {
	_inherits(ClientOrderInvoiceDao, _ResourceDao39);

	function ClientOrderInvoiceDao(client) {
		_classCallCheck(this, ClientOrderInvoiceDao);

		var _this78 = _possibleConstructorReturn(this, (ClientOrderInvoiceDao.__proto__ || Object.getPrototypeOf(ClientOrderInvoiceDao)).call(this, client, 'client-order-invoices', ClientOrderInvoice));

		_this78.relationshipDao = new ClientOrderInvoiceRelDao(client, 'client-order-invoices');
		return _this78;
	}

	return ClientOrderInvoiceDao;
}(_clientBase.ResourceDao);
/** @class RestaurantOrderInvoiceRelDao
  * @extends {RelationshipDao}  **/


var RestaurantOrderInvoiceRelDao = exports.RestaurantOrderInvoiceRelDao = function (_RelationshipDao40) {
	_inherits(RestaurantOrderInvoiceRelDao, _RelationshipDao40);

	function RestaurantOrderInvoiceRelDao(client) {
		_classCallCheck(this, RestaurantOrderInvoiceRelDao);

		var _this79 = _possibleConstructorReturn(this, (RestaurantOrderInvoiceRelDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceRelDao)).call(this, client, 'restaurant-order-invoices', RestaurantOrderInvoice));

		_this79.id = null;
		_this79.get = {};
		_this79.index = {};
		return _this79;
	}

	return RestaurantOrderInvoiceRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantOrderInvoiceDao
  * @extends {ResourceDao}  **/


var RestaurantOrderInvoiceDao = exports.RestaurantOrderInvoiceDao = function (_ResourceDao40) {
	_inherits(RestaurantOrderInvoiceDao, _ResourceDao40);

	function RestaurantOrderInvoiceDao(client) {
		_classCallCheck(this, RestaurantOrderInvoiceDao);

		var _this80 = _possibleConstructorReturn(this, (RestaurantOrderInvoiceDao.__proto__ || Object.getPrototypeOf(RestaurantOrderInvoiceDao)).call(this, client, 'restaurant-order-invoices', RestaurantOrderInvoice));

		_this80.relationshipDao = new RestaurantOrderInvoiceRelDao(client, 'restaurant-order-invoices');
		return _this80;
	}

	return RestaurantOrderInvoiceDao;
}(_clientBase.ResourceDao);
/** @class ServiceTimeRelDao
  * @extends {RelationshipDao}  **/


var ServiceTimeRelDao = exports.ServiceTimeRelDao = function (_RelationshipDao41) {
	_inherits(ServiceTimeRelDao, _RelationshipDao41);

	function ServiceTimeRelDao(client) {
		_classCallCheck(this, ServiceTimeRelDao);

		var _this81 = _possibleConstructorReturn(this, (ServiceTimeRelDao.__proto__ || Object.getPrototypeOf(ServiceTimeRelDao)).call(this, client, 'service-times', ServiceTime));

		_this81.id = null;
		_this81.get = {
			restaurant: function restaurant(options) {
				return _this81.toOne('restaurant', Restaurant, options);
			}
		};
		_this81.index = {};
		return _this81;
	}

	return ServiceTimeRelDao;
}(_clientBase.RelationshipDao);
/** @class ServiceTimeDao
  * @extends {ResourceDao}  **/


var ServiceTimeDao = exports.ServiceTimeDao = function (_ResourceDao41) {
	_inherits(ServiceTimeDao, _ResourceDao41);

	function ServiceTimeDao(client) {
		_classCallCheck(this, ServiceTimeDao);

		var _this82 = _possibleConstructorReturn(this, (ServiceTimeDao.__proto__ || Object.getPrototypeOf(ServiceTimeDao)).call(this, client, 'service-times', ServiceTime));

		_this82.relationshipDao = new ServiceTimeRelDao(client, 'service-times');
		return _this82;
	}

	return ServiceTimeDao;
}(_clientBase.ResourceDao);
/** @class TagRelDao
  * @extends {RelationshipDao}  **/


var TagRelDao = exports.TagRelDao = function (_RelationshipDao42) {
	_inherits(TagRelDao, _RelationshipDao42);

	function TagRelDao(client) {
		_classCallCheck(this, TagRelDao);

		var _this83 = _possibleConstructorReturn(this, (TagRelDao.__proto__ || Object.getPrototypeOf(TagRelDao)).call(this, client, 'tags', Tag));

		_this83.id = null;
		_this83.get = {};
		_this83.index = {};
		return _this83;
	}

	return TagRelDao;
}(_clientBase.RelationshipDao);
/** @class TagDao
  * @extends {ResourceDao}  **/


var TagDao = exports.TagDao = function (_ResourceDao42) {
	_inherits(TagDao, _ResourceDao42);

	function TagDao(client) {
		_classCallCheck(this, TagDao);

		var _this84 = _possibleConstructorReturn(this, (TagDao.__proto__ || Object.getPrototypeOf(TagDao)).call(this, client, 'tags', Tag));

		_this84.relationshipDao = new TagRelDao(client, 'tags');
		return _this84;
	}

	return TagDao;
}(_clientBase.ResourceDao);
/** @class RestaurantClosureRelDao
  * @extends {RelationshipDao}  **/


var RestaurantClosureRelDao = exports.RestaurantClosureRelDao = function (_RelationshipDao43) {
	_inherits(RestaurantClosureRelDao, _RelationshipDao43);

	function RestaurantClosureRelDao(client) {
		_classCallCheck(this, RestaurantClosureRelDao);

		var _this85 = _possibleConstructorReturn(this, (RestaurantClosureRelDao.__proto__ || Object.getPrototypeOf(RestaurantClosureRelDao)).call(this, client, 'restaurant-closures', RestaurantClosure));

		_this85.id = null;
		_this85.get = {
			restaurant: function restaurant(options) {
				return _this85.toOne('restaurant', Restaurant, options);
			}
		};
		_this85.index = {};
		return _this85;
	}

	return RestaurantClosureRelDao;
}(_clientBase.RelationshipDao);
/** @class RestaurantClosureDao
  * @extends {ResourceDao}  **/


var RestaurantClosureDao = exports.RestaurantClosureDao = function (_ResourceDao43) {
	_inherits(RestaurantClosureDao, _ResourceDao43);

	function RestaurantClosureDao(client) {
		_classCallCheck(this, RestaurantClosureDao);

		var _this86 = _possibleConstructorReturn(this, (RestaurantClosureDao.__proto__ || Object.getPrototypeOf(RestaurantClosureDao)).call(this, client, 'restaurant-closures', RestaurantClosure));

		_this86.relationshipDao = new RestaurantClosureRelDao(client, 'restaurant-closures');
		return _this86;
	}

	return RestaurantClosureDao;
}(_clientBase.ResourceDao);
/** @class RoleRelDao
  * @extends {RelationshipDao}  **/


var RoleRelDao = exports.RoleRelDao = function (_RelationshipDao44) {
	_inherits(RoleRelDao, _RelationshipDao44);

	function RoleRelDao(client) {
		_classCallCheck(this, RoleRelDao);

		var _this87 = _possibleConstructorReturn(this, (RoleRelDao.__proto__ || Object.getPrototypeOf(RoleRelDao)).call(this, client, 'roles', Role));

		_this87.id = null;
		_this87.get = {
			user: function user(options) {
				return _this87.toOne('user', User, options);
			}
		};
		_this87.index = {};
		return _this87;
	}

	return RoleRelDao;
}(_clientBase.RelationshipDao);
/** @class RoleDao
  * @extends {ResourceDao}  **/


var RoleDao = exports.RoleDao = function (_ResourceDao44) {
	_inherits(RoleDao, _ResourceDao44);

	function RoleDao(client) {
		_classCallCheck(this, RoleDao);

		var _this88 = _possibleConstructorReturn(this, (RoleDao.__proto__ || Object.getPrototypeOf(RoleDao)).call(this, client, 'roles', Role));

		_this88.relationshipDao = new RoleRelDao(client, 'roles');
		return _this88;
	}

	return RoleDao;
}(_clientBase.ResourceDao);
/** @class SalesforceSyncErrorRelDao
  * @extends {RelationshipDao}  **/


var SalesforceSyncErrorRelDao = exports.SalesforceSyncErrorRelDao = function (_RelationshipDao45) {
	_inherits(SalesforceSyncErrorRelDao, _RelationshipDao45);

	function SalesforceSyncErrorRelDao(client) {
		_classCallCheck(this, SalesforceSyncErrorRelDao);

		var _this89 = _possibleConstructorReturn(this, (SalesforceSyncErrorRelDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorRelDao)).call(this, client, 'salesforce-sync-errors', SalesforceSyncError));

		_this89.id = null;
		_this89.get = {};
		_this89.index = {};
		return _this89;
	}

	return SalesforceSyncErrorRelDao;
}(_clientBase.RelationshipDao);
/** @class SalesforceSyncErrorDao
  * @extends {ResourceDao}  **/


var SalesforceSyncErrorDao = exports.SalesforceSyncErrorDao = function (_ResourceDao45) {
	_inherits(SalesforceSyncErrorDao, _ResourceDao45);

	function SalesforceSyncErrorDao(client) {
		_classCallCheck(this, SalesforceSyncErrorDao);

		var _this90 = _possibleConstructorReturn(this, (SalesforceSyncErrorDao.__proto__ || Object.getPrototypeOf(SalesforceSyncErrorDao)).call(this, client, 'salesforce-sync-errors', SalesforceSyncError));

		_this90.relationshipDao = new SalesforceSyncErrorRelDao(client, 'salesforce-sync-errors');
		return _this90;
	}

	return SalesforceSyncErrorDao;
}(_clientBase.ResourceDao);
/** @class DiscountCodeRelDao
  * @extends {RelationshipDao}  **/


var DiscountCodeRelDao = exports.DiscountCodeRelDao = function (_RelationshipDao46) {
	_inherits(DiscountCodeRelDao, _RelationshipDao46);

	function DiscountCodeRelDao(client) {
		_classCallCheck(this, DiscountCodeRelDao);

		var _this91 = _possibleConstructorReturn(this, (DiscountCodeRelDao.__proto__ || Object.getPrototypeOf(DiscountCodeRelDao)).call(this, client, 'discount-codes', DiscountCode));

		_this91.id = null;
		_this91.get = {};
		_this91.index = {};
		return _this91;
	}

	return DiscountCodeRelDao;
}(_clientBase.RelationshipDao);
/** @class DiscountCodeDao
  * @extends {ResourceDao}  **/


var DiscountCodeDao = exports.DiscountCodeDao = function (_ResourceDao46) {
	_inherits(DiscountCodeDao, _ResourceDao46);

	function DiscountCodeDao(client) {
		_classCallCheck(this, DiscountCodeDao);

		var _this92 = _possibleConstructorReturn(this, (DiscountCodeDao.__proto__ || Object.getPrototypeOf(DiscountCodeDao)).call(this, client, 'discount-codes', DiscountCode));

		_this92.relationshipDao = new DiscountCodeRelDao(client, 'discount-codes');
		return _this92;
	}

	return DiscountCodeDao;
}(_clientBase.ResourceDao);
/** @class UserFeedbackRelDao
  * @extends {RelationshipDao}  **/


var UserFeedbackRelDao = exports.UserFeedbackRelDao = function (_RelationshipDao47) {
	_inherits(UserFeedbackRelDao, _RelationshipDao47);

	function UserFeedbackRelDao(client) {
		_classCallCheck(this, UserFeedbackRelDao);

		var _this93 = _possibleConstructorReturn(this, (UserFeedbackRelDao.__proto__ || Object.getPrototypeOf(UserFeedbackRelDao)).call(this, client, 'user-feedbacks', UserFeedback));

		_this93.id = null;
		_this93.get = {};
		_this93.index = {};
		return _this93;
	}

	return UserFeedbackRelDao;
}(_clientBase.RelationshipDao);
/** @class UserFeedbackDao
  * @extends {ResourceDao}  **/


var UserFeedbackDao = exports.UserFeedbackDao = function (_ResourceDao47) {
	_inherits(UserFeedbackDao, _ResourceDao47);

	function UserFeedbackDao(client) {
		_classCallCheck(this, UserFeedbackDao);

		var _this94 = _possibleConstructorReturn(this, (UserFeedbackDao.__proto__ || Object.getPrototypeOf(UserFeedbackDao)).call(this, client, 'user-feedbacks', UserFeedback));

		_this94.relationshipDao = new UserFeedbackRelDao(client, 'user-feedbacks');
		return _this94;
	}

	return UserFeedbackDao;
}(_clientBase.ResourceDao);
/** @class UserInviteRelDao
  * @extends {RelationshipDao}  **/


var UserInviteRelDao = exports.UserInviteRelDao = function (_RelationshipDao48) {
	_inherits(UserInviteRelDao, _RelationshipDao48);

	function UserInviteRelDao(client) {
		_classCallCheck(this, UserInviteRelDao);

		var _this95 = _possibleConstructorReturn(this, (UserInviteRelDao.__proto__ || Object.getPrototypeOf(UserInviteRelDao)).call(this, client, 'user-invites', UserInvite));

		_this95.id = null;
		_this95.get = {
			client: function client(options) {
				return _this95.toOne('client', Client, options);
			},
			user: function user(options) {
				return _this95.toOne('user', User, options);
			}
		};
		_this95.index = {};
		return _this95;
	}

	return UserInviteRelDao;
}(_clientBase.RelationshipDao);
/** @class UserInviteDao
  * @extends {ResourceDao}  **/


var UserInviteDao = exports.UserInviteDao = function (_ResourceDao48) {
	_inherits(UserInviteDao, _ResourceDao48);

	function UserInviteDao(client) {
		_classCallCheck(this, UserInviteDao);

		var _this96 = _possibleConstructorReturn(this, (UserInviteDao.__proto__ || Object.getPrototypeOf(UserInviteDao)).call(this, client, 'user-invites', UserInvite));

		_this96.relationshipDao = new UserInviteRelDao(client, 'user-invites');
		return _this96;
	}

	return UserInviteDao;
}(_clientBase.ResourceDao);
/** @class ClientSignupRelDao
  * @extends {RelationshipDao}  **/


var ClientSignupRelDao = exports.ClientSignupRelDao = function (_RelationshipDao49) {
	_inherits(ClientSignupRelDao, _RelationshipDao49);

	function ClientSignupRelDao(client) {
		_classCallCheck(this, ClientSignupRelDao);

		var _this97 = _possibleConstructorReturn(this, (ClientSignupRelDao.__proto__ || Object.getPrototypeOf(ClientSignupRelDao)).call(this, client, 'client-signups', ClientSignup));

		_this97.id = null;
		_this97.get = {
			user: function user(options) {
				return _this97.toOne('user', User, options);
			},
			qualifyingQuestion: function qualifyingQuestion(options) {
				return _this97.toOne('qualifying-question', QualifyingQuestion, options);
			},
			billingLocation: function billingLocation(options) {
				return _this97.toOne('billing-location', Location, options);
			},
			deliveryLocation: function deliveryLocation(options) {
				return _this97.toOne('delivery-location', Location, options);
			},
			billingContact: function billingContact(options) {
				return _this97.toOne('billing-contact', Contact, options);
			},
			contact: function contact(options) {
				return _this97.toOne('contact', Contact, options);
			}
		};
		_this97.index = {
			clients: function clients(options) {
				return _this97.toMany('clients', Client, options);
			},
			areas: function areas(options) {
				return _this97.toMany('areas', Area, options);
			}
		};
		return _this97;
	}

	return ClientSignupRelDao;
}(_clientBase.RelationshipDao);
/** @class ClientSignupDao
  * @extends {ResourceDao}  **/


var ClientSignupDao = exports.ClientSignupDao = function (_ResourceDao49) {
	_inherits(ClientSignupDao, _ResourceDao49);

	function ClientSignupDao(client) {
		_classCallCheck(this, ClientSignupDao);

		var _this98 = _possibleConstructorReturn(this, (ClientSignupDao.__proto__ || Object.getPrototypeOf(ClientSignupDao)).call(this, client, 'client-signups', ClientSignup));

		_this98.relationshipDao = new ClientSignupRelDao(client, 'client-signups');
		return _this98;
	}

	return ClientSignupDao;
}(_clientBase.ResourceDao);
/** @class QualifyingQuestionRelDao
  * @extends {RelationshipDao}  **/


var QualifyingQuestionRelDao = exports.QualifyingQuestionRelDao = function (_RelationshipDao50) {
	_inherits(QualifyingQuestionRelDao, _RelationshipDao50);

	function QualifyingQuestionRelDao(client) {
		_classCallCheck(this, QualifyingQuestionRelDao);

		var _this99 = _possibleConstructorReturn(this, (QualifyingQuestionRelDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionRelDao)).call(this, client, 'qualifying-questions', QualifyingQuestion));

		_this99.id = null;
		_this99.get = {};
		_this99.index = {};
		return _this99;
	}

	return QualifyingQuestionRelDao;
}(_clientBase.RelationshipDao);
/** @class QualifyingQuestionDao
  * @extends {ResourceDao}  **/


var QualifyingQuestionDao = exports.QualifyingQuestionDao = function (_ResourceDao50) {
	_inherits(QualifyingQuestionDao, _ResourceDao50);

	function QualifyingQuestionDao(client) {
		_classCallCheck(this, QualifyingQuestionDao);

		var _this100 = _possibleConstructorReturn(this, (QualifyingQuestionDao.__proto__ || Object.getPrototypeOf(QualifyingQuestionDao)).call(this, client, 'qualifying-questions', QualifyingQuestion));

		_this100.relationshipDao = new QualifyingQuestionRelDao(client, 'qualifying-questions');
		return _this100;
	}

	return QualifyingQuestionDao;
}(_clientBase.ResourceDao);