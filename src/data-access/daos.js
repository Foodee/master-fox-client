import { ResourceDao, RelationshipDao } from '../client-base';


/** @class AppConfigurationDao
  * @extends {ResourceDao}
  **/
export class AppConfigurationDao extends ResourceDao {
  constructor(client) {
    super(client, 'app-configurations');
    this.relationshipDao = new AppConfigurationRelationshipDao(client, 'app-configurations')
  }
}

/** @class AppConfigurationRelationshipDao
 * @extends {RelationshipDao}  **/
export class AppConfigurationRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'app-configurations');
    
    
    this.index = {
    
      /** @method versions
       @params {Object} options
       @returns {Promise<AppConfiguration[]>} **/
      versions: (options) => this.toOne('versions', options),
      };
      }
}


/** @class AreaDao
  * @extends {ResourceDao}
  **/
export class AreaDao extends ResourceDao {
  constructor(client) {
    super(client, 'areas');
    this.relationshipDao = new AreaRelationshipDao(client, 'areas')
  }
}

/** @class AreaRelationshipDao
 * @extends {RelationshipDao}  **/
export class AreaRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'areas');
    
    this.get = {
    
      /** @method deliveryFeeTaxRate
       @params {Object} options
       @returns {Promise<Area>} **/
      deliveryFeeTaxRate: (options) => this.toOne('delivery-fee-tax-rate', options),
      };
    
    
    this.index = {
    
      /** @method couriers
       @params {Object} options
       @returns {Promise<Area[]>} **/
      couriers: (options) => this.toOne('couriers', options),
    
      /** @method clients
       @params {Object} options
       @returns {Promise<Area[]>} **/
      clients: (options) => this.toOne('clients', options),
    
      /** @method restaurants
       @params {Object} options
       @returns {Promise<Area[]>} **/
      restaurants: (options) => this.toOne('restaurants', options),
    
      /** @method invoicingTaxRates
       @params {Object} options
       @returns {Promise<Area[]>} **/
      invoicingTaxRates: (options) => this.toOne('invoicing-tax-rates', options),
    
      /** @method globalInvoicingTaxRates
       @params {Object} options
       @returns {Promise<Area[]>} **/
      globalInvoicingTaxRates: (options) => this.toOne('global-invoicing-tax-rates', options),
    
      /** @method areaClosures
       @params {Object} options
       @returns {Promise<Area[]>} **/
      areaClosures: (options) => this.toOne('area-closures', options),
    
      /** @method currentAreaClosures
       @params {Object} options
       @returns {Promise<Area[]>} **/
      currentAreaClosures: (options) => this.toOne('current-area-closures', options),
    
      /** @method promoCodes
       @params {Object} options
       @returns {Promise<Area[]>} **/
      promoCodes: (options) => this.toOne('promo-codes', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<Area[]>} **/
      versions: (options) => this.toOne('versions', options),
      };
      }
}


/** @class AreaClosureDao
  * @extends {ResourceDao}
  **/
export class AreaClosureDao extends ResourceDao {
  constructor(client) {
    super(client, 'area-closures');
    this.relationshipDao = new AreaClosureRelationshipDao(client, 'area-closures')
  }
}

/** @class AreaClosureRelationshipDao
 * @extends {RelationshipDao}  **/
export class AreaClosureRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'area-closures');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<AreaClosure>} **/
      area: (options) => this.toOne('area', options),
      };
    
      }
}


/** @class ClientDao
  * @extends {ResourceDao}
  **/
export class ClientDao extends ResourceDao {
  constructor(client) {
    super(client, 'clients');
    this.relationshipDao = new ClientRelationshipDao(client, 'clients')
  }
}

/** @class ClientRelationshipDao
 * @extends {RelationshipDao}  **/
export class ClientRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'clients');
    
    this.get = {
    
      /** @method defaultArea
       @params {Object} options
       @returns {Promise<Client>} **/
      defaultArea: (options) => this.toOne('default-area', options),
    
      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Client>} **/
      billingLocation: (options) => this.toOne('billing-location', options),
    
      /** @method accountManager
       @params {Object} options
       @returns {Promise<Client>} **/
      accountManager: (options) => this.toOne('account-manager', options),
    
      /** @method owner
       @params {Object} options
       @returns {Promise<Client>} **/
      owner: (options) => this.toOne('owner', options),
    
      /** @method company
       @params {Object} options
       @returns {Promise<Client>} **/
      company: (options) => this.toOne('company', options),
    
      /** @method mealPlan
       @params {Object} options
       @returns {Promise<Client>} **/
      mealPlan: (options) => this.toOne('meal-plan', options),
    
      /** @method taxRate
       @params {Object} options
       @returns {Promise<Client>} **/
      taxRate: (options) => this.toOne('tax-rate', options),
    
      /** @method giftbitCard
       @params {Object} options
       @returns {Promise<Client>} **/
      giftbitCard: (options) => this.toOne('giftbit-card', options),
      };
    
    
    this.index = {
    
      /** @method areas
       @params {Object} options
       @returns {Promise<Client[]>} **/
      areas: (options) => this.toOne('areas', options),
    
      /** @method deliveryLocations
       @params {Object} options
       @returns {Promise<Client[]>} **/
      deliveryLocations: (options) => this.toOne('delivery-locations', options),
    
      /** @method adminContacts
       @params {Object} options
       @returns {Promise<Client[]>} **/
      adminContacts: (options) => this.toOne('admin-contacts', options),
    
      /** @method admins
       @params {Object} options
       @returns {Promise<Client[]>} **/
      admins: (options) => this.toOne('admins', options),
    
      /** @method orderContacts
       @params {Object} options
       @returns {Promise<Client[]>} **/
      orderContacts: (options) => this.toOne('order-contacts', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<Client[]>} **/
      orders: (options) => this.toOne('orders', options),
    
      /** @method paymentCards
       @params {Object} options
       @returns {Promise<Client[]>} **/
      paymentCards: (options) => this.toOne('payment-cards', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<Client[]>} **/
      versions: (options) => this.toOne('versions', options),
    
      /** @method giftbitGifts
       @params {Object} options
       @returns {Promise<Client[]>} **/
      giftbitGifts: (options) => this.toOne('giftbit-gifts', options),
    
      /** @method giftbitErrors
       @params {Object} options
       @returns {Promise<Client[]>} **/
      giftbitErrors: (options) => this.toOne('giftbit-errors', options),
      };
      }
}


/** @class ClientDiscountDao
  * @extends {ResourceDao}
  **/
export class ClientDiscountDao extends ResourceDao {
  constructor(client) {
    super(client, 'client-discounts');
    this.relationshipDao = new ClientDiscountRelationshipDao(client, 'client-discounts')
  }
}

/** @class ClientDiscountRelationshipDao
 * @extends {RelationshipDao}  **/
export class ClientDiscountRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'client-discounts');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<ClientDiscount>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class ClientOrderInvoiceDao
  * @extends {ResourceDao}
  **/
export class ClientOrderInvoiceDao extends ResourceDao {
  constructor(client) {
    super(client, 'client-order-invoices');
    this.relationshipDao = new ClientOrderInvoiceRelationshipDao(client, 'client-order-invoices')
  }
}

/** @class ClientOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/
export class ClientOrderInvoiceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'client-order-invoices');
    
      }
}


/** @class ClientSignupDao
  * @extends {ResourceDao}
  **/
export class ClientSignupDao extends ResourceDao {
  constructor(client) {
    super(client, 'client-signups');
    this.relationshipDao = new ClientSignupRelationshipDao(client, 'client-signups')
  }
}

/** @class ClientSignupRelationshipDao
 * @extends {RelationshipDao}  **/
export class ClientSignupRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'client-signups');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method qualifyingQuestion
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      qualifyingQuestion: (options) => this.toOne('qualifying-question', options),
    
      /** @method billingLocation
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      billingLocation: (options) => this.toOne('billing-location', options),
    
      /** @method deliveryLocation
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      deliveryLocation: (options) => this.toOne('delivery-location', options),
    
      /** @method billingContact
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      billingContact: (options) => this.toOne('billing-contact', options),
    
      /** @method contact
       @params {Object} options
       @returns {Promise<ClientSignup>} **/
      contact: (options) => this.toOne('contact', options),
      };
    
    
    this.index = {
    
      /** @method clients
       @params {Object} options
       @returns {Promise<ClientSignup[]>} **/
      clients: (options) => this.toOne('clients', options),
    
      /** @method areas
       @params {Object} options
       @returns {Promise<ClientSignup[]>} **/
      areas: (options) => this.toOne('areas', options),
      };
      }
}


/** @class CompanyDao
  * @extends {ResourceDao}
  **/
export class CompanyDao extends ResourceDao {
  constructor(client) {
    super(client, 'companies');
    this.relationshipDao = new CompanyRelationshipDao(client, 'companies')
  }
}

/** @class CompanyRelationshipDao
 * @extends {RelationshipDao}  **/
export class CompanyRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'companies');
    
    
    this.index = {
    
      /** @method clients
       @params {Object} options
       @returns {Promise<Company[]>} **/
      clients: (options) => this.toOne('clients', options),
      };
      }
}


/** @class ContactDao
  * @extends {ResourceDao}
  **/
export class ContactDao extends ResourceDao {
  constructor(client) {
    super(client, 'contacts');
    this.relationshipDao = new ContactRelationshipDao(client, 'contacts')
  }
}

/** @class ContactRelationshipDao
 * @extends {RelationshipDao}  **/
export class ContactRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'contacts');
    
      }
}


/** @class CourierDao
  * @extends {ResourceDao}
  **/
export class CourierDao extends ResourceDao {
  constructor(client) {
    super(client, 'couriers');
    this.relationshipDao = new CourierRelationshipDao(client, 'couriers')
  }
}

/** @class CourierRelationshipDao
 * @extends {RelationshipDao}  **/
export class CourierRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'couriers');
    
    this.get = {
    
      /** @method owner
       @params {Object} options
       @returns {Promise<Courier>} **/
      owner: (options) => this.toOne('owner', options),
      };
    
    
    this.index = {
    
      /** @method drivers
       @params {Object} options
       @returns {Promise<Courier[]>} **/
      drivers: (options) => this.toOne('drivers', options),
    
      /** @method areas
       @params {Object} options
       @returns {Promise<Courier[]>} **/
      areas: (options) => this.toOne('areas', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<Courier[]>} **/
      versions: (options) => this.toOne('versions', options),
      };
      }
}


/** @class DeliveryCaseDao
  * @extends {ResourceDao}
  **/
export class DeliveryCaseDao extends ResourceDao {
  constructor(client) {
    super(client, 'delivery-cases');
    this.relationshipDao = new DeliveryCaseRelationshipDao(client, 'delivery-cases')
  }
}

/** @class DeliveryCaseRelationshipDao
 * @extends {RelationshipDao}  **/
export class DeliveryCaseRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'delivery-cases');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<DeliveryCase>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<DeliveryCase>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class DeliveryLocationDao
  * @extends {ResourceDao}
  **/
export class DeliveryLocationDao extends ResourceDao {
  constructor(client) {
    super(client, 'delivery-locations');
    this.relationshipDao = new DeliveryLocationRelationshipDao(client, 'delivery-locations')
  }
}

/** @class DeliveryLocationRelationshipDao
 * @extends {RelationshipDao}  **/
export class DeliveryLocationRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'delivery-locations');
    
    this.get = {
    
      /** @method client
       @params {Object} options
       @returns {Promise<DeliveryLocation>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method location
       @params {Object} options
       @returns {Promise<DeliveryLocation>} **/
      location: (options) => this.toOne('location', options),
      };
    
      }
}


/** @class DeskCaseDao
  * @extends {ResourceDao}
  **/
export class DeskCaseDao extends ResourceDao {
  constructor(client) {
    super(client, 'desk-cases');
    this.relationshipDao = new DeskCaseRelationshipDao(client, 'desk-cases')
  }
}

/** @class DeskCaseRelationshipDao
 * @extends {RelationshipDao}  **/
export class DeskCaseRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'desk-cases');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<DeskCase>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<DeskCase>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class DietaryTagDao
  * @extends {ResourceDao}
  **/
export class DietaryTagDao extends ResourceDao {
  constructor(client) {
    super(client, 'dietary-tags');
    this.relationshipDao = new DietaryTagRelationshipDao(client, 'dietary-tags')
  }
}

/** @class DietaryTagRelationshipDao
 * @extends {RelationshipDao}  **/
export class DietaryTagRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'dietary-tags');
    
    
    this.index = {
    
      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<DietaryTag[]>} **/
      menuOptionItems: (options) => this.toOne('menu-option-items', options),
      };
      }
}


/** @class DiscountCodeDao
  * @extends {ResourceDao}
  **/
export class DiscountCodeDao extends ResourceDao {
  constructor(client) {
    super(client, 'discount-codes');
    this.relationshipDao = new DiscountCodeRelationshipDao(client, 'discount-codes')
  }
}

/** @class DiscountCodeRelationshipDao
 * @extends {RelationshipDao}  **/
export class DiscountCodeRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'discount-codes');
    
      }
}


/** @class DriverDayDao
  * @extends {ResourceDao}
  **/
export class DriverDayDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-days');
    this.relationshipDao = new DriverDayRelationshipDao(client, 'driver-days')
  }
}

/** @class DriverDayRelationshipDao
 * @extends {RelationshipDao}  **/
export class DriverDayRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'driver-days');
    
    this.get = {
    
      /** @method driver
       @params {Object} options
       @returns {Promise<DriverDay>} **/
      driver: (options) => this.toOne('driver', options),
      };
    
      }
}


/** @class DriverPingDao
  * @extends {ResourceDao}
  **/
export class DriverPingDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-pings');
    this.relationshipDao = new DriverPingRelationshipDao(client, 'driver-pings')
  }
}

/** @class DriverPingRelationshipDao
 * @extends {RelationshipDao}  **/
export class DriverPingRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'driver-pings');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<DriverPing>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class DriverWeekDao
  * @extends {ResourceDao}
  **/
export class DriverWeekDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-weeks');
    this.relationshipDao = new DriverWeekRelationshipDao(client, 'driver-weeks')
  }
}

/** @class DriverWeekRelationshipDao
 * @extends {RelationshipDao}  **/
export class DriverWeekRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'driver-weeks');
    
    this.get = {
    
      /** @method driver
       @params {Object} options
       @returns {Promise<DriverWeek>} **/
      driver: (options) => this.toOne('driver', options),
      };
    
      }
}


/** @class EmailMessageDao
  * @extends {ResourceDao}
  **/
export class EmailMessageDao extends ResourceDao {
  constructor(client) {
    super(client, 'email-messages');
    this.relationshipDao = new EmailMessageRelationshipDao(client, 'email-messages')
  }
}

/** @class EmailMessageRelationshipDao
 * @extends {RelationshipDao}  **/
export class EmailMessageRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'email-messages');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<EmailMessage>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class GiftbitCardDao
  * @extends {ResourceDao}
  **/
export class GiftbitCardDao extends ResourceDao {
  constructor(client) {
    super(client, 'giftbit-cards');
    this.relationshipDao = new GiftbitCardRelationshipDao(client, 'giftbit-cards')
  }
}

/** @class GiftbitCardRelationshipDao
 * @extends {RelationshipDao}  **/
export class GiftbitCardRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'giftbit-cards');
    
      }
}


/** @class GiftbitErrorDao
  * @extends {ResourceDao}
  **/
export class GiftbitErrorDao extends ResourceDao {
  constructor(client) {
    super(client, 'giftbit-errors');
    this.relationshipDao = new GiftbitErrorRelationshipDao(client, 'giftbit-errors')
  }
}

/** @class GiftbitErrorRelationshipDao
 * @extends {RelationshipDao}  **/
export class GiftbitErrorRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'giftbit-errors');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<GiftbitError>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class GiftbitGiftDao
  * @extends {ResourceDao}
  **/
export class GiftbitGiftDao extends ResourceDao {
  constructor(client) {
    super(client, 'giftbit-gifts');
    this.relationshipDao = new GiftbitGiftRelationshipDao(client, 'giftbit-gifts')
  }
}

/** @class GiftbitGiftRelationshipDao
 * @extends {RelationshipDao}  **/
export class GiftbitGiftRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'giftbit-gifts');
    
      }
}


/** @class GroupOrderMemberDao
  * @extends {ResourceDao}
  **/
export class GroupOrderMemberDao extends ResourceDao {
  constructor(client) {
    super(client, 'group-order-members');
    this.relationshipDao = new GroupOrderMemberRelationshipDao(client, 'group-order-members')
  }
}

/** @class GroupOrderMemberRelationshipDao
 * @extends {RelationshipDao}  **/
export class GroupOrderMemberRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'group-order-members');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<GroupOrderMember>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<GroupOrderMember>} **/
      order: (options) => this.toOne('order', options),
      };
    
    
    this.index = {
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<GroupOrderMember[]>} **/
      orderItems: (options) => this.toOne('order-items', options),
      };
      }
}


/** @class InvoiceDao
  * @extends {ResourceDao}
  **/
export class InvoiceDao extends ResourceDao {
  constructor(client) {
    super(client, 'invoices');
    this.relationshipDao = new InvoiceRelationshipDao(client, 'invoices')
  }
}

/** @class InvoiceRelationshipDao
 * @extends {RelationshipDao}  **/
export class InvoiceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'invoices');
    
      }
}


/** @class InvoicingTaxRateDao
  * @extends {ResourceDao}
  **/
export class InvoicingTaxRateDao extends ResourceDao {
  constructor(client) {
    super(client, 'invoicing-tax-rates');
    this.relationshipDao = new InvoicingTaxRateRelationshipDao(client, 'invoicing-tax-rates')
  }
}

/** @class InvoicingTaxRateRelationshipDao
 * @extends {RelationshipDao}  **/
export class InvoicingTaxRateRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'invoicing-tax-rates');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      area: (options) => this.toOne('area', options),
      };
    
      }
}


/** @class LocationDao
  * @extends {ResourceDao}
  **/
export class LocationDao extends ResourceDao {
  constructor(client) {
    super(client, 'locations');
    this.relationshipDao = new LocationRelationshipDao(client, 'locations')
  }
}

/** @class LocationRelationshipDao
 * @extends {RelationshipDao}  **/
export class LocationRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'locations');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<Location>} **/
      area: (options) => this.toOne('area', options),
      };
    
      }
}


/** @class MealPlanDao
  * @extends {ResourceDao}
  **/
export class MealPlanDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-plans');
    this.relationshipDao = new MealPlanRelationshipDao(client, 'meal-plans')
  }
}

/** @class MealPlanRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-plans');
    
    this.get = {
    
      /** @method mealPlanUser
       @params {Object} options
       @returns {Promise<MealPlan>} **/
      mealPlanUser: (options) => this.toOne('meal-plan-user', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<MealPlan>} **/
      client: (options) => this.toOne('client', options),
      };
    
    
    this.index = {
    
      /** @method orders
       @params {Object} options
       @returns {Promise<MealPlan[]>} **/
      orders: (options) => this.toOne('orders', options),
      };
      }
}


/** @class MenuDao
  * @extends {ResourceDao}
  **/
export class MenuDao extends ResourceDao {
  constructor(client) {
    super(client, 'menus');
    this.relationshipDao = new MenuRelationshipDao(client, 'menus')
  }
}

/** @class MenuRelationshipDao
 * @extends {RelationshipDao}  **/
export class MenuRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'menus');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<Menu>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Menu>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
    
    this.index = {
    
      /** @method menuGroups
       @params {Object} options
       @returns {Promise<Menu[]>} **/
      menuGroups: (options) => this.toOne('menu-groups', options),
    
      /** @method menuItems
       @params {Object} options
       @returns {Promise<Menu[]>} **/
      menuItems: (options) => this.toOne('menu-items', options),
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<Menu[]>} **/
      dietaryTags: (options) => this.toOne('dietary-tags', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<Menu[]>} **/
      orders: (options) => this.toOne('orders', options),
      };
      }
}


/** @class MenuGroupDao
  * @extends {ResourceDao}
  **/
export class MenuGroupDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-groups');
    this.relationshipDao = new MenuGroupRelationshipDao(client, 'menu-groups')
  }
}

/** @class MenuGroupRelationshipDao
 * @extends {RelationshipDao}  **/
export class MenuGroupRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'menu-groups');
    
    this.get = {
    
      /** @method menu
       @params {Object} options
       @returns {Promise<MenuGroup>} **/
      menu: (options) => this.toOne('menu', options),
      };
    
    
    this.index = {
    
      /** @method menuItems
       @params {Object} options
       @returns {Promise<MenuGroup[]>} **/
      menuItems: (options) => this.toOne('menu-items', options),
      };
      }
}


/** @class MenuItemDao
  * @extends {ResourceDao}
  **/
export class MenuItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-items');
    this.relationshipDao = new MenuItemRelationshipDao(client, 'menu-items')
  }
}

/** @class MenuItemRelationshipDao
 * @extends {RelationshipDao}  **/
export class MenuItemRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'menu-items');
    
    this.get = {
    
      /** @method taxRate
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      taxRate: (options) => this.toOne('tax-rate', options),
    
      /** @method menuGroup
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      menuGroup: (options) => this.toOne('menu-group', options),
      };
    
    
    this.index = {
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<MenuItem[]>} **/
      dietaryTags: (options) => this.toOne('dietary-tags', options),
    
      /** @method menuOptionGroups
       @params {Object} options
       @returns {Promise<MenuItem[]>} **/
      menuOptionGroups: (options) => this.toOne('menu-option-groups', options),
      };
      }
}


/** @class MenuOptionGroupDao
  * @extends {ResourceDao}
  **/
export class MenuOptionGroupDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-option-groups');
    this.relationshipDao = new MenuOptionGroupRelationshipDao(client, 'menu-option-groups')
  }
}

/** @class MenuOptionGroupRelationshipDao
 * @extends {RelationshipDao}  **/
export class MenuOptionGroupRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'menu-option-groups');
    
    this.get = {
    
      /** @method menuItem
       @params {Object} options
       @returns {Promise<MenuOptionGroup>} **/
      menuItem: (options) => this.toOne('menu-item', options),
      };
    
    
    this.index = {
    
      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<MenuOptionGroup[]>} **/
      menuOptionItems: (options) => this.toOne('menu-option-items', options),
      };
      }
}


/** @class MenuOptionItemDao
  * @extends {ResourceDao}
  **/
export class MenuOptionItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-option-items');
    this.relationshipDao = new MenuOptionItemRelationshipDao(client, 'menu-option-items')
  }
}

/** @class MenuOptionItemRelationshipDao
 * @extends {RelationshipDao}  **/
export class MenuOptionItemRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'menu-option-items');
    
    this.get = {
    
      /** @method menuOptionGroup
       @params {Object} options
       @returns {Promise<MenuOptionItem>} **/
      menuOptionGroup: (options) => this.toOne('menu-option-group', options),
      };
    
    
    this.index = {
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<MenuOptionItem[]>} **/
      dietaryTags: (options) => this.toOne('dietary-tags', options),
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<MenuOptionItem[]>} **/
      orderItems: (options) => this.toOne('order-items', options),
      };
      }
}


/** @class OrderDao
  * @extends {ResourceDao}
  **/
export class OrderDao extends ResourceDao {
  constructor(client) {
    super(client, 'orders');
    this.relationshipDao = new OrderRelationshipDao(client, 'orders')
  }
}

/** @class OrderRelationshipDao
 * @extends {RelationshipDao}  **/
export class OrderRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'orders');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<Order>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method owner
       @params {Object} options
       @returns {Promise<Order>} **/
      owner: (options) => this.toOne('owner', options),
    
      /** @method creator
       @params {Object} options
       @returns {Promise<Order>} **/
      creator: (options) => this.toOne('creator', options),
    
      /** @method paymentCard
       @params {Object} options
       @returns {Promise<Order>} **/
      paymentCard: (options) => this.toOne('payment-card', options),
    
      /** @method contact
       @params {Object} options
       @returns {Promise<Order>} **/
      contact: (options) => this.toOne('contact', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<Order>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurant: (options) => this.toOne('restaurant', options),
    
      /** @method courier
       @params {Object} options
       @returns {Promise<Order>} **/
      courier: (options) => this.toOne('courier', options),
    
      /** @method promoCode
       @params {Object} options
       @returns {Promise<Order>} **/
      promoCode: (options) => this.toOne('promo-code', options),
    
      /** @method driver
       @params {Object} options
       @returns {Promise<Order>} **/
      driver: (options) => this.toOne('driver', options),
    
      /** @method restaurantLocation
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurantLocation: (options) => this.toOne('restaurant-location', options),
    
      /** @method clientLocation
       @params {Object} options
       @returns {Promise<Order>} **/
      clientLocation: (options) => this.toOne('client-location', options),
    
      /** @method clientDiscount
       @params {Object} options
       @returns {Promise<Order>} **/
      clientDiscount: (options) => this.toOne('client-discount', options),
    
      /** @method restaurantDiscount
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurantDiscount: (options) => this.toOne('restaurant-discount', options),
    
      /** @method menu
       @params {Object} options
       @returns {Promise<Order>} **/
      menu: (options) => this.toOne('menu', options),
    
      /** @method customLocation
       @params {Object} options
       @returns {Promise<Order>} **/
      customLocation: (options) => this.toOne('custom-location', options),
    
      /** @method giftbitError
       @params {Object} options
       @returns {Promise<Order>} **/
      giftbitError: (options) => this.toOne('giftbit-error', options),
    
      /** @method clientOrderInvoice
       @params {Object} options
       @returns {Promise<Order>} **/
      clientOrderInvoice: (options) => this.toOne('client-order-invoice', options),
    
      /** @method restaurantOrderInvoice
       @params {Object} options
       @returns {Promise<Order>} **/
      restaurantOrderInvoice: (options) => this.toOne('restaurant-order-invoice', options),
      };
    
    
    this.index = {
    
      /** @method emailMessages
       @params {Object} options
       @returns {Promise<Order[]>} **/
      emailMessages: (options) => this.toOne('email-messages', options),
    
      /** @method deliveryCases
       @params {Object} options
       @returns {Promise<Order[]>} **/
      deliveryCases: (options) => this.toOne('delivery-cases', options),
    
      /** @method deskCases
       @params {Object} options
       @returns {Promise<Order[]>} **/
      deskCases: (options) => this.toOne('desk-cases', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<Order[]>} **/
      versions: (options) => this.toOne('versions', options),
    
      /** @method groupOrderMembers
       @params {Object} options
       @returns {Promise<Order[]>} **/
      groupOrderMembers: (options) => this.toOne('group-order-members', options),
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<Order[]>} **/
      orderItems: (options) => this.toOne('order-items', options),
      };
      }
}


/** @class OrderItemDao
  * @extends {ResourceDao}
  **/
export class OrderItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'order-items');
    this.relationshipDao = new OrderItemRelationshipDao(client, 'order-items')
  }
}

/** @class OrderItemRelationshipDao
 * @extends {RelationshipDao}  **/
export class OrderItemRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'order-items');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<OrderItem>} **/
      order: (options) => this.toOne('order', options),
    
      /** @method menuItem
       @params {Object} options
       @returns {Promise<OrderItem>} **/
      menuItem: (options) => this.toOne('menu-item', options),
    
      /** @method groupOrderMember
       @params {Object} options
       @returns {Promise<OrderItem>} **/
      groupOrderMember: (options) => this.toOne('group-order-member', options),
      };
    
    
    this.index = {
    
      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<OrderItem[]>} **/
      menuOptionItems: (options) => this.toOne('menu-option-items', options),
      };
      }
}


/** @class PaymentCardDao
  * @extends {ResourceDao}
  **/
export class PaymentCardDao extends ResourceDao {
  constructor(client) {
    super(client, 'payment-cards');
    this.relationshipDao = new PaymentCardRelationshipDao(client, 'payment-cards')
  }
}

/** @class PaymentCardRelationshipDao
 * @extends {RelationshipDao}  **/
export class PaymentCardRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'payment-cards');
    
    this.get = {
    
      /** @method client
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method user
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class PickupLocationDao
  * @extends {ResourceDao}
  **/
export class PickupLocationDao extends ResourceDao {
  constructor(client) {
    super(client, 'pickup-locations');
    this.relationshipDao = new PickupLocationRelationshipDao(client, 'pickup-locations')
  }
}

/** @class PickupLocationRelationshipDao
 * @extends {RelationshipDao}  **/
export class PickupLocationRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'pickup-locations');
    
    this.get = {
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<PickupLocation>} **/
      restaurant: (options) => this.toOne('restaurant', options),
    
      /** @method location
       @params {Object} options
       @returns {Promise<PickupLocation>} **/
      location: (options) => this.toOne('location', options),
      };
    
      }
}


/** @class PromoCodeDao
  * @extends {ResourceDao}
  **/
export class PromoCodeDao extends ResourceDao {
  constructor(client) {
    super(client, 'promo-codes');
    this.relationshipDao = new PromoCodeRelationshipDao(client, 'promo-codes')
  }
}

/** @class PromoCodeRelationshipDao
 * @extends {RelationshipDao}  **/
export class PromoCodeRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'promo-codes');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<PromoCode>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<PromoCode>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
    
    this.index = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<PromoCode[]>} **/
      order: (options) => this.toOne('orders', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<PromoCode[]>} **/
      versions: (options) => this.toOne('versions', options),
      };
      }
}


/** @class QualifyingQuestionDao
  * @extends {ResourceDao}
  **/
export class QualifyingQuestionDao extends ResourceDao {
  constructor(client) {
    super(client, 'qualifying-questions');
    this.relationshipDao = new QualifyingQuestionRelationshipDao(client, 'qualifying-questions')
  }
}

/** @class QualifyingQuestionRelationshipDao
 * @extends {RelationshipDao}  **/
export class QualifyingQuestionRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'qualifying-questions');
    
      }
}


/** @class RestaurantDao
  * @extends {ResourceDao}
  **/
export class RestaurantDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurants');
    this.relationshipDao = new RestaurantRelationshipDao(client, 'restaurants')
  }
}

/** @class RestaurantRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurants');
    
    this.get = {
    
      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      billingLocation: (options) => this.toOne('billing-location', options),
    
      /** @method billingContact
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      billingContact: (options) => this.toOne('billing-contact', options),
    
      /** @method owner
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      owner: (options) => this.toOne('owner', options),
      };
    
    
    this.index = {
    
      /** @method orders
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      orders: (options) => this.toOne('orders', options),
    
      /** @method serviceTimes
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      serviceTimes: (options) => this.toOne('service-times', options),
    
      /** @method pickupLocations
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      pickupLocations: (options) => this.toOne('pickup-locations', options),
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      dietaryTags: (options) => this.toOne('dietary-tags', options),
    
      /** @method tags
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      tags: (options) => this.toOne('tags', options),
    
      /** @method areas
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      areas: (options) => this.toOne('areas', options),
    
      /** @method menus
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      menus: (options) => this.toOne('menus', options),
    
      /** @method closures
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      closures: (options) => this.toOne('closures', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      versions: (options) => this.toOne('versions', options),
    
      /** @method promoCodes
       @params {Object} options
       @returns {Promise<Restaurant[]>} **/
      promoCodes: (options) => this.toOne('promo-codes', options),
      };
      }
}


/** @class RestaurantClosureDao
  * @extends {ResourceDao}
  **/
export class RestaurantClosureDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-closures');
    this.relationshipDao = new RestaurantClosureRelationshipDao(client, 'restaurant-closures')
  }
}

/** @class RestaurantClosureRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantClosureRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-closures');
    
    this.get = {
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<RestaurantClosure>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
      }
}


/** @class RestaurantDiscountDao
  * @extends {ResourceDao}
  **/
export class RestaurantDiscountDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-discounts');
    this.relationshipDao = new RestaurantDiscountRelationshipDao(client, 'restaurant-discounts')
  }
}

/** @class RestaurantDiscountRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantDiscountRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-discounts');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<RestaurantDiscount>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class RestaurantOrderInvoiceDao
  * @extends {ResourceDao}
  **/
export class RestaurantOrderInvoiceDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-order-invoices');
    this.relationshipDao = new RestaurantOrderInvoiceRelationshipDao(client, 'restaurant-order-invoices')
  }
}

/** @class RestaurantOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantOrderInvoiceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-order-invoices');
    
      }
}


/** @class RoleDao
  * @extends {ResourceDao}
  **/
export class RoleDao extends ResourceDao {
  constructor(client) {
    super(client, 'roles');
    this.relationshipDao = new RoleRelationshipDao(client, 'roles')
  }
}

/** @class RoleRelationshipDao
 * @extends {RelationshipDao}  **/
export class RoleRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'roles');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<Role>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class SalesforceSyncErrorDao
  * @extends {ResourceDao}
  **/
export class SalesforceSyncErrorDao extends ResourceDao {
  constructor(client) {
    super(client, 'salesforce-sync-errors');
    this.relationshipDao = new SalesforceSyncErrorRelationshipDao(client, 'salesforce-sync-errors')
  }
}

/** @class SalesforceSyncErrorRelationshipDao
 * @extends {RelationshipDao}  **/
export class SalesforceSyncErrorRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'salesforce-sync-errors');
    
      }
}


/** @class ServiceTimeDao
  * @extends {ResourceDao}
  **/
export class ServiceTimeDao extends ResourceDao {
  constructor(client) {
    super(client, 'service-times');
    this.relationshipDao = new ServiceTimeRelationshipDao(client, 'service-times')
  }
}

/** @class ServiceTimeRelationshipDao
 * @extends {RelationshipDao}  **/
export class ServiceTimeRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'service-times');
    
    this.get = {
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<ServiceTime>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
      }
}


/** @class TagDao
  * @extends {ResourceDao}
  **/
export class TagDao extends ResourceDao {
  constructor(client) {
    super(client, 'tags');
    this.relationshipDao = new TagRelationshipDao(client, 'tags')
  }
}

/** @class TagRelationshipDao
 * @extends {RelationshipDao}  **/
export class TagRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'tags');
    
      }
}


/** @class UserDao
  * @extends {ResourceDao}
  **/
export class UserDao extends ResourceDao {
  constructor(client) {
    super(client, 'users');
    this.relationshipDao = new UserRelationshipDao(client, 'users')
  }
}

/** @class UserRelationshipDao
 * @extends {RelationshipDao}  **/
export class UserRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'users');
    
    
    this.index = {
    
      /** @method driverPings
       @params {Object} options
       @returns {Promise<User[]>} **/
      driverPings: (options) => this.toOne('driver-pings', options),
    
      /** @method driverWeeks
       @params {Object} options
       @returns {Promise<User[]>} **/
      driverWeeks: (options) => this.toOne('driver-weeks', options),
    
      /** @method driverDays
       @params {Object} options
       @returns {Promise<User[]>} **/
      driverDays: (options) => this.toOne('driver-days', options),
    
      /** @method deliveredOrders
       @params {Object} options
       @returns {Promise<User[]>} **/
      deliveredOrders: (options) => this.toOne('delivered-orders', options),
    
      /** @method couriers
       @params {Object} options
       @returns {Promise<User[]>} **/
      couriers: (options) => this.toOne('couriers', options),
    
      /** @method roles
       @params {Object} options
       @returns {Promise<User[]>} **/
      roles: (options) => this.toOne('roles', options),
    
      /** @method paymentCards
       @params {Object} options
       @returns {Promise<User[]>} **/
      paymentCards: (options) => this.toOne('payment-cards', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<User[]>} **/
      versions: (options) => this.toOne('versions', options),
      };
      }
}


/** @class UserFeedbackDao
  * @extends {ResourceDao}
  **/
export class UserFeedbackDao extends ResourceDao {
  constructor(client) {
    super(client, 'user-feedbacks');
    this.relationshipDao = new UserFeedbackRelationshipDao(client, 'user-feedbacks')
  }
}

/** @class UserFeedbackRelationshipDao
 * @extends {RelationshipDao}  **/
export class UserFeedbackRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'user-feedbacks');
    
      }
}


/** @class UserInviteDao
  * @extends {ResourceDao}
  **/
export class UserInviteDao extends ResourceDao {
  constructor(client) {
    super(client, 'user-invites');
    this.relationshipDao = new UserInviteRelationshipDao(client, 'user-invites')
  }
}

/** @class UserInviteRelationshipDao
 * @extends {RelationshipDao}  **/
export class UserInviteRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'user-invites');
    
    this.get = {
    
      /** @method client
       @params {Object} options
       @returns {Promise<UserInvite>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method user
       @params {Object} options
       @returns {Promise<UserInvite>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class VersionDao
  * @extends {ResourceDao}
  **/
export class VersionDao extends ResourceDao {
  constructor(client) {
    super(client, 'versions');
    this.relationshipDao = new VersionRelationshipDao(client, 'versions')
  }
}

/** @class VersionRelationshipDao
 * @extends {RelationshipDao}  **/
export class VersionRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'versions');
    
      }
}


