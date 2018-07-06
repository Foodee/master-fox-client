import { ResourceDao, RelationshipDao } from '../client-base';


/** @class AppConfigurationDao
  * @extends {ResourceDao}
  **/
export class AppConfigurationDao extends ResourceDao {
  constructor(client) {
    super(client, 'app-configurations');
    this.relationshipDao = new AppConfigurationRelationshipDao(client);
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
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
      };
      }
}


/** @class AreaDao
  * @extends {ResourceDao}
  **/
export class AreaDao extends ResourceDao {
  constructor(client) {
    super(client, 'areas');
    this.relationshipDao = new AreaRelationshipDao(client);
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
       @returns {Promise<InvoicingTaxRate>} **/
      deliveryFeeTaxRate: (options) => this.toOne('delivery-fee-tax-rate', options),
      };
    
    
    this.index = {
    
      /** @method couriers
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      couriers: (options) => this.toMany('couriers', options),
    
      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: (options) => this.toMany('clients', options),
    
      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      restaurants: (options) => this.toMany('restaurants', options),
    
      /** @method invoicingTaxRates
       @params {Object} options
       @returns {Promise<IndexResult<InvoicingTaxRate>>} **/
      invoicingTaxRates: (options) => this.toMany('invoicing-tax-rates', options),
    
      /** @method globalInvoicingTaxRates
       @params {Object} options
       @returns {Promise<IndexResult<InvoicingTaxRate>>} **/
      globalInvoicingTaxRates: (options) => this.toMany('global-invoicing-tax-rates', options),
    
      /** @method areaClosures
       @params {Object} options
       @returns {Promise<IndexResult<AreaClosure>>} **/
      areaClosures: (options) => this.toMany('area-closures', options),
    
      /** @method currentAreaClosures
       @params {Object} options
       @returns {Promise<IndexResult<AreaClosure>>} **/
      currentAreaClosures: (options) => this.toMany('current-area-closures', options),
    
      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      promoCodes: (options) => this.toMany('promo-codes', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
      };
      }
}


/** @class AreaClosureDao
  * @extends {ResourceDao}
  **/
export class AreaClosureDao extends ResourceDao {
  constructor(client) {
    super(client, 'area-closures');
    this.relationshipDao = new AreaClosureRelationshipDao(client);
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
       @returns {Promise<Area>} **/
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
    this.relationshipDao = new ClientRelationshipDao(client);
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
       @returns {Promise<Area>} **/
      defaultArea: (options) => this.toOne('default-area', options),
    
      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      billingLocation: (options) => this.toOne('billing-location', options),
    
      /** @method billingContact
       @params {Object} options
       @returns {Promise<Contact>} **/
      billingContact: (options) => this.toOne('billing-contact', options),
    
      /** @method accountManager
       @params {Object} options
       @returns {Promise<User>} **/
      accountManager: (options) => this.toOne('account-manager', options),
    
      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: (options) => this.toOne('owner', options),
    
      /** @method salesSupport
       @params {Object} options
       @returns {Promise<User>} **/
      salesSupport: (options) => this.toOne('sales-support', options),
    
      /** @method company
       @params {Object} options
       @returns {Promise<Company>} **/
      company: (options) => this.toOne('company', options),
    
      /** @method mealPlan
       @params {Object} options
       @returns {Promise<MealPlan>} **/
      mealPlan: (options) => this.toOne('meal-plan', options),
    
      /** @method taxRate
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      taxRate: (options) => this.toOne('tax-rate', options),
    
      /** @method giftbitCard
       @params {Object} options
       @returns {Promise<GiftbitCard>} **/
      giftbitCard: (options) => this.toOne('giftbit-card', options),
      };
    
    
    this.index = {
    
      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: (options) => this.toMany('areas', options),
    
      /** @method deliveryLocations
       @params {Object} options
       @returns {Promise<IndexResult<DeliveryLocation>>} **/
      deliveryLocations: (options) => this.toMany('delivery-locations', options),
    
      /** @method paymentCards
       @params {Object} options
       @returns {Promise<IndexResult<PaymentCard>>} **/
      paymentCards: (options) => this.toMany('payment-cards', options),
    
      /** @method adminContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      adminContacts: (options) => this.toMany('admin-contacts', options),
    
      /** @method admins
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      admins: (options) => this.toMany('admins', options),
    
      /** @method orderContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      orderContacts: (options) => this.toMany('order-contacts', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
    
      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: (options) => this.toMany('teams', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method giftbitGifts
       @params {Object} options
       @returns {Promise<IndexResult<GiftbitGift>>} **/
      giftbitGifts: (options) => this.toMany('giftbit-gifts', options),
    
      /** @method giftbitErrors
       @params {Object} options
       @returns {Promise<IndexResult<GiftbitError>>} **/
      giftbitErrors: (options) => this.toMany('giftbit-errors', options),
      };
      }
}


/** @class ClientDiscountDao
  * @extends {ResourceDao}
  **/
export class ClientDiscountDao extends ResourceDao {
  constructor(client) {
    super(client, 'client-discounts');
    this.relationshipDao = new ClientDiscountRelationshipDao(client);
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
       @returns {Promise<Order>} **/
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
    this.relationshipDao = new ClientOrderInvoiceRelationshipDao(client);
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
    this.relationshipDao = new ClientSignupRelationshipDao(client);
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
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method qualifyingQuestion
       @params {Object} options
       @returns {Promise<QualifyingQuestion>} **/
      qualifyingQuestion: (options) => this.toOne('qualifying-question', options),
    
      /** @method billingLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      billingLocation: (options) => this.toOne('billing-location', options),
    
      /** @method deliveryLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      deliveryLocation: (options) => this.toOne('delivery-location', options),
    
      /** @method billingContact
       @params {Object} options
       @returns {Promise<Contact>} **/
      billingContact: (options) => this.toOne('billing-contact', options),
    
      /** @method contact
       @params {Object} options
       @returns {Promise<Contact>} **/
      contact: (options) => this.toOne('contact', options),
      };
    
    
    this.index = {
    
      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: (options) => this.toMany('clients', options),
    
      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: (options) => this.toMany('areas', options),
      };
      }
}


/** @class CommunicationPreferenceDao
  * @extends {ResourceDao}
  **/
export class CommunicationPreferenceDao extends ResourceDao {
  constructor(client) {
    super(client, 'communication-preferences');
    this.relationshipDao = new CommunicationPreferenceRelationshipDao(client);
  }
}

/** @class CommunicationPreferenceRelationshipDao
 * @extends {RelationshipDao}  **/
export class CommunicationPreferenceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'communication-preferences');
    
    this.get = {
    
      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class CompanyDao
  * @extends {ResourceDao}
  **/
export class CompanyDao extends ResourceDao {
  constructor(client) {
    super(client, 'companies');
    this.relationshipDao = new CompanyRelationshipDao(client);
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
       @returns {Promise<IndexResult<Client>>} **/
      clients: (options) => this.toMany('clients', options),
      };
      }
}


/** @class ContactDao
  * @extends {ResourceDao}
  **/
export class ContactDao extends ResourceDao {
  constructor(client) {
    super(client, 'contacts');
    this.relationshipDao = new ContactRelationshipDao(client);
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
    this.relationshipDao = new CourierRelationshipDao(client);
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
       @returns {Promise<User>} **/
      owner: (options) => this.toOne('owner', options),
      };
    
    
    this.index = {
    
      /** @method drivers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      drivers: (options) => this.toMany('drivers', options),
    
      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: (options) => this.toMany('areas', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
      };
      }
}


/** @class DeliveryCaseDao
  * @extends {ResourceDao}
  **/
export class DeliveryCaseDao extends ResourceDao {
  constructor(client) {
    super(client, 'delivery-cases');
    this.relationshipDao = new DeliveryCaseRelationshipDao(client);
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
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
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
    this.relationshipDao = new DeliveryLocationRelationshipDao(client);
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
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method location
       @params {Object} options
       @returns {Promise<Location>} **/
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
    this.relationshipDao = new DeskCaseRelationshipDao(client);
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
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
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
    this.relationshipDao = new DietaryTagRelationshipDao(client);
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
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      menuOptionItems: (options) => this.toMany('menu-option-items', options),
      };
      }
}


/** @class DiscountCodeDao
  * @extends {ResourceDao}
  **/
export class DiscountCodeDao extends ResourceDao {
  constructor(client) {
    super(client, 'discount-codes');
    this.relationshipDao = new DiscountCodeRelationshipDao(client);
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
    this.relationshipDao = new DriverDayRelationshipDao(client);
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
       @returns {Promise<User>} **/
      driver: (options) => this.toOne('driver', options),
      };
    
      }
}


/** @class DriverPaymentDao
  * @extends {ResourceDao}
  **/
export class DriverPaymentDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-payments');
    this.relationshipDao = new DriverPaymentRelationshipDao(client);
  }
}

/** @class DriverPaymentRelationshipDao
 * @extends {RelationshipDao}  **/
export class DriverPaymentRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'driver-payments');
    
    this.get = {
    
      /** @method driverPayrollRun
       @params {Object} options
       @returns {Promise<DriverPayrollRun>} **/
      driverPayrollRun: (options) => this.toOne('driver-payroll-run', options),
      };
    
      }
}


/** @class DriverPayrollRunDao
  * @extends {ResourceDao}
  **/
export class DriverPayrollRunDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-payroll-runs');
    this.relationshipDao = new DriverPayrollRunRelationshipDao(client);
  }
}

/** @class DriverPayrollRunRelationshipDao
 * @extends {RelationshipDao}  **/
export class DriverPayrollRunRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'driver-payroll-runs');
    
    this.get = {
    
      /** @method driver
       @params {Object} options
       @returns {Promise<Driver>} **/
      driver: (options) => this.toOne('driver', options),
    
      /** @method payrollRun
       @params {Object} options
       @returns {Promise<PayrollRun>} **/
      payrollRun: (options) => this.toOne('payroll-run', options),
      };
    
      }
}


/** @class DriverPingDao
  * @extends {ResourceDao}
  **/
export class DriverPingDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-pings');
    this.relationshipDao = new DriverPingRelationshipDao(client);
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
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class DriverResourceDao
  * @extends {ResourceDao}
  **/
export class DriverResourceDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-resources');
    this.relationshipDao = new DriverResourceRelationshipDao(client);
  }
}

/** @class DriverResourceRelationshipDao
 * @extends {RelationshipDao}  **/
export class DriverResourceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'driver-resources');
    
      }
}


/** @class DriverWeekDao
  * @extends {ResourceDao}
  **/
export class DriverWeekDao extends ResourceDao {
  constructor(client) {
    super(client, 'driver-weeks');
    this.relationshipDao = new DriverWeekRelationshipDao(client);
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
       @returns {Promise<User>} **/
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
    this.relationshipDao = new EmailMessageRelationshipDao(client);
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
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class EventDao
  * @extends {ResourceDao}
  **/
export class EventDao extends ResourceDao {
  constructor(client) {
    super(client, 'events');
    this.relationshipDao = new EventRelationshipDao(client);
  }
}

/** @class EventRelationshipDao
 * @extends {RelationshipDao}  **/
export class EventRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'events');
    
      }
}


/** @class GiftbitCardDao
  * @extends {ResourceDao}
  **/
export class GiftbitCardDao extends ResourceDao {
  constructor(client) {
    super(client, 'giftbit-cards');
    this.relationshipDao = new GiftbitCardRelationshipDao(client);
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
    this.relationshipDao = new GiftbitErrorRelationshipDao(client);
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
       @returns {Promise<Order>} **/
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
    this.relationshipDao = new GiftbitGiftRelationshipDao(client);
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
    this.relationshipDao = new GroupOrderMemberRelationshipDao(client);
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
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
      };
    
    
    this.index = {
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: (options) => this.toMany('order-items', options),
      };
      }
}


/** @class InvoiceDao
  * @extends {ResourceDao}
  **/
export class InvoiceDao extends ResourceDao {
  constructor(client) {
    super(client, 'invoices');
    this.relationshipDao = new InvoiceRelationshipDao(client);
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
    this.relationshipDao = new InvoicingTaxRateRelationshipDao(client);
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
       @returns {Promise<Area>} **/
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
    this.relationshipDao = new LocationRelationshipDao(client);
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
       @returns {Promise<Area>} **/
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
    this.relationshipDao = new MealPlanRelationshipDao(client);
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
       @returns {Promise<User>} **/
      mealPlanUser: (options) => this.toOne('meal-plan-user', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
      };
    
    
    this.index = {
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
      };
      }
}


/** @class MenuDao
  * @extends {ResourceDao}
  **/
export class MenuDao extends ResourceDao {
  constructor(client) {
    super(client, 'menus');
    this.relationshipDao = new MenuRelationshipDao(client);
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
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
    
    this.index = {
    
      /** @method menuGroups
       @params {Object} options
       @returns {Promise<IndexResult<MenuGroup>>} **/
      menuGroups: (options) => this.toMany('menu-groups', options),
    
      /** @method menuItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuItem>>} **/
      menuItems: (options) => this.toMany('menu-items', options),
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
      };
      }
}


/** @class MenuGroupDao
  * @extends {ResourceDao}
  **/
export class MenuGroupDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-groups');
    this.relationshipDao = new MenuGroupRelationshipDao(client);
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
       @returns {Promise<Menu>} **/
      menu: (options) => this.toOne('menu', options),
      };
    
    
    this.index = {
    
      /** @method menuItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuItem>>} **/
      menuItems: (options) => this.toMany('menu-items', options),
      };
      }
}


/** @class MenuItemDao
  * @extends {ResourceDao}
  **/
export class MenuItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-items');
    this.relationshipDao = new MenuItemRelationshipDao(client);
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
       @returns {Promise<InvoicingTaxRate>} **/
      taxRate: (options) => this.toOne('tax-rate', options),
    
      /** @method menuGroup
       @params {Object} options
       @returns {Promise<MenuGroup>} **/
      menuGroup: (options) => this.toOne('menu-group', options),
      };
    
    
    this.index = {
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method menuOptionGroups
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionGroup>>} **/
      menuOptionGroups: (options) => this.toMany('menu-option-groups', options),
      };
      }
}


/** @class MenuOptionGroupDao
  * @extends {ResourceDao}
  **/
export class MenuOptionGroupDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-option-groups');
    this.relationshipDao = new MenuOptionGroupRelationshipDao(client);
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
       @returns {Promise<MenuItem>} **/
      menuItem: (options) => this.toOne('menu-item', options),
      };
    
    
    this.index = {
    
      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      menuOptionItems: (options) => this.toMany('menu-option-items', options),
      };
      }
}


/** @class MenuOptionItemDao
  * @extends {ResourceDao}
  **/
export class MenuOptionItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'menu-option-items');
    this.relationshipDao = new MenuOptionItemRelationshipDao(client);
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
       @returns {Promise<MenuOptionGroup>} **/
      menuOptionGroup: (options) => this.toOne('menu-option-group', options),
      };
    
    
    this.index = {
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: (options) => this.toMany('order-items', options),
      };
      }
}


/** @class OrderDao
  * @extends {ResourceDao}
  **/
export class OrderDao extends ResourceDao {
  constructor(client) {
    super(client, 'orders');
    this.relationshipDao = new OrderRelationshipDao(client);
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
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: (options) => this.toOne('owner', options),
    
      /** @method creator
       @params {Object} options
       @returns {Promise<User>} **/
      creator: (options) => this.toOne('creator', options),
    
      /** @method paymentCard
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      paymentCard: (options) => this.toOne('payment-card', options),
    
      /** @method contact
       @params {Object} options
       @returns {Promise<Contact>} **/
      contact: (options) => this.toOne('contact', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
    
      /** @method courier
       @params {Object} options
       @returns {Promise<Courier>} **/
      courier: (options) => this.toOne('courier', options),
    
      /** @method promoCode
       @params {Object} options
       @returns {Promise<PromoCode>} **/
      promoCode: (options) => this.toOne('promo-code', options),
    
      /** @method driver
       @params {Object} options
       @returns {Promise<User>} **/
      driver: (options) => this.toOne('driver', options),
    
      /** @method salesSupport
       @params {Object} options
       @returns {Promise<User>} **/
      salesSupport: (options) => this.toOne('sales-support', options),
    
      /** @method restaurantLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      restaurantLocation: (options) => this.toOne('restaurant-location', options),
    
      /** @method clientLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      clientLocation: (options) => this.toOne('client-location', options),
    
      /** @method clientDiscount
       @params {Object} options
       @returns {Promise<ClientDiscount>} **/
      clientDiscount: (options) => this.toOne('client-discount', options),
    
      /** @method restaurantDiscount
       @params {Object} options
       @returns {Promise<RestaurantDiscount>} **/
      restaurantDiscount: (options) => this.toOne('restaurant-discount', options),
    
      /** @method menu
       @params {Object} options
       @returns {Promise<Menu>} **/
      menu: (options) => this.toOne('menu', options),
    
      /** @method customLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      customLocation: (options) => this.toOne('custom-location', options),
    
      /** @method giftbitError
       @params {Object} options
       @returns {Promise<GiftbitError>} **/
      giftbitError: (options) => this.toOne('giftbit-error', options),
    
      /** @method clientOrderInvoice
       @params {Object} options
       @returns {Promise<ClientOrderInvoice>} **/
      clientOrderInvoice: (options) => this.toOne('client-order-invoice', options),
    
      /** @method restaurantOrderInvoice
       @params {Object} options
       @returns {Promise<RestaurantOrderInvoice>} **/
      restaurantOrderInvoice: (options) => this.toOne('restaurant-order-invoice', options),
      };
    
    
    this.index = {
    
      /** @method emailMessages
       @params {Object} options
       @returns {Promise<IndexResult<EmailMessage>>} **/
      emailMessages: (options) => this.toMany('email-messages', options),
    
      /** @method deliveryCases
       @params {Object} options
       @returns {Promise<IndexResult<DeliveryCase>>} **/
      deliveryCases: (options) => this.toMany('delivery-cases', options),
    
      /** @method deskCases
       @params {Object} options
       @returns {Promise<IndexResult<DeskCase>>} **/
      deskCases: (options) => this.toMany('desk-cases', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method pollableRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      pollableRestaurants: (options) => this.toMany('pollable-restaurants', options),
    
      /** @method restaurantVotes
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantVote>>} **/
      restaurantVotes: (options) => this.toMany('restaurant-votes', options),
    
      /** @method groupOrderMembers
       @params {Object} options
       @returns {Promise<IndexResult<GroupOrderMember>>} **/
      groupOrderMembers: (options) => this.toMany('group-order-members', options),
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: (options) => this.toMany('order-items', options),
      };
      }
}


/** @class OrderItemDao
  * @extends {ResourceDao}
  **/
export class OrderItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'order-items');
    this.relationshipDao = new OrderItemRelationshipDao(client);
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
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
    
      /** @method menuItem
       @params {Object} options
       @returns {Promise<MenuItem>} **/
      menuItem: (options) => this.toOne('menu-item', options),
    
      /** @method groupOrderMember
       @params {Object} options
       @returns {Promise<GroupOrderMember>} **/
      groupOrderMember: (options) => this.toOne('group-order-member', options),
      };
    
    
    this.index = {
    
      /** @method menuOptionItems
       @params {Object} options
       @returns {Promise<IndexResult<MenuOptionItem>>} **/
      menuOptionItems: (options) => this.toMany('menu-option-items', options),
      };
      }
}


/** @class PaymentAccountDao
  * @extends {ResourceDao}
  **/
export class PaymentAccountDao extends ResourceDao {
  constructor(client) {
    super(client, 'payment-accounts');
    this.relationshipDao = new PaymentAccountRelationshipDao(client);
  }
}

/** @class PaymentAccountRelationshipDao
 * @extends {RelationshipDao}  **/
export class PaymentAccountRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'payment-accounts');
    
      }
}


/** @class PaymentCardDao
  * @extends {ResourceDao}
  **/
export class PaymentCardDao extends ResourceDao {
  constructor(client) {
    super(client, 'payment-cards');
    this.relationshipDao = new PaymentCardRelationshipDao(client);
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
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
      user: (options) => this.toOne('user', options),
      };
    
      }
}


/** @class PayrollRunDao
  * @extends {ResourceDao}
  **/
export class PayrollRunDao extends ResourceDao {
  constructor(client) {
    super(client, 'payroll-runs');
    this.relationshipDao = new PayrollRunRelationshipDao(client);
  }
}

/** @class PayrollRunRelationshipDao
 * @extends {RelationshipDao}  **/
export class PayrollRunRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'payroll-runs');
    
    
    this.index = {
    
      /** @method driverPayrollRun
       @params {Object} options
       @returns {Promise<IndexResult<DriverPayrollRun>>} **/
      driverPayrollRun: (options) => this.toMany('driver-payroll-runs', options),
      };
      }
}


/** @class PickupLocationDao
  * @extends {ResourceDao}
  **/
export class PickupLocationDao extends ResourceDao {
  constructor(client) {
    super(client, 'pickup-locations');
    this.relationshipDao = new PickupLocationRelationshipDao(client);
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
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
    
      /** @method location
       @params {Object} options
       @returns {Promise<Location>} **/
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
    this.relationshipDao = new PromoCodeRelationshipDao(client);
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
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
    
    this.index = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      order: (options) => this.toMany('orders', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
      };
      }
}


/** @class QualifyingQuestionDao
  * @extends {ResourceDao}
  **/
export class QualifyingQuestionDao extends ResourceDao {
  constructor(client) {
    super(client, 'qualifying-questions');
    this.relationshipDao = new QualifyingQuestionRelationshipDao(client);
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
    this.relationshipDao = new RestaurantRelationshipDao(client);
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
       @returns {Promise<Location>} **/
      billingLocation: (options) => this.toOne('billing-location', options),
    
      /** @method billingContact
       @params {Object} options
       @returns {Promise<Contact>} **/
      billingContact: (options) => this.toOne('billing-contact', options),
    
      /** @method owner
       @params {Object} options
       @returns {Promise<User>} **/
      owner: (options) => this.toOne('owner', options),
      };
    
    
    this.index = {
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
    
      /** @method restaurantCapacityTranches
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantCapacityTranche>>} **/
      restaurantCapacityTranches: (options) => this.toMany('restaurant-capacity-tranches', options),
    
      /** @method serviceTimes
       @params {Object} options
       @returns {Promise<IndexResult<ServiceTime>>} **/
      serviceTimes: (options) => this.toMany('service-times', options),
    
      /** @method pickupLocations
       @params {Object} options
       @returns {Promise<IndexResult<PickupLocation>>} **/
      pickupLocations: (options) => this.toMany('pickup-locations', options),
    
      /** @method admins
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      admins: (options) => this.toMany('admins', options),
    
      /** @method adminContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      adminContacts: (options) => this.toMany('admin-contacts', options),
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method tags
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      tags: (options) => this.toMany('tags', options),
    
      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: (options) => this.toMany('areas', options),
    
      /** @method menus
       @params {Object} options
       @returns {Promise<IndexResult<Menu>>} **/
      menus: (options) => this.toMany('menus', options),
    
      /** @method restaurantVotes
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantVote>>} **/
      restaurantVotes: (options) => this.toMany('restaurant-votes', options),
    
      /** @method closures
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantClosure>>} **/
      closures: (options) => this.toMany('closures', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      promoCodes: (options) => this.toMany('promo-codes', options),
      };
      }
}


/** @class RestaurantCapacityTrancheDao
  * @extends {ResourceDao}
  **/
export class RestaurantCapacityTrancheDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-capacity-tranches');
    this.relationshipDao = new RestaurantCapacityTrancheRelationshipDao(client);
  }
}

/** @class RestaurantCapacityTrancheRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantCapacityTrancheRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-capacity-tranches');
    
    this.get = {
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
      }
}


/** @class RestaurantClosureDao
  * @extends {ResourceDao}
  **/
export class RestaurantClosureDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-closures');
    this.relationshipDao = new RestaurantClosureRelationshipDao(client);
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
       @returns {Promise<Restaurant>} **/
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
    this.relationshipDao = new RestaurantDiscountRelationshipDao(client);
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
       @returns {Promise<Order>} **/
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
    this.relationshipDao = new RestaurantOrderInvoiceRelationshipDao(client);
  }
}

/** @class RestaurantOrderInvoiceRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantOrderInvoiceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-order-invoices');
    
      }
}


/** @class RestaurantVoteDao
  * @extends {ResourceDao}
  **/
export class RestaurantVoteDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-votes');
    this.relationshipDao = new RestaurantVoteRelationshipDao(client);
  }
}

/** @class RestaurantVoteRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantVoteRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-votes');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
      }
}


/** @class RoleDao
  * @extends {ResourceDao}
  **/
export class RoleDao extends ResourceDao {
  constructor(client) {
    super(client, 'roles');
    this.relationshipDao = new RoleRelationshipDao(client);
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
       @returns {Promise<User>} **/
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
    this.relationshipDao = new SalesforceSyncErrorRelationshipDao(client);
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
    this.relationshipDao = new ServiceTimeRelationshipDao(client);
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
       @returns {Promise<Restaurant>} **/
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
    this.relationshipDao = new TagRelationshipDao(client);
  }
}

/** @class TagRelationshipDao
 * @extends {RelationshipDao}  **/
export class TagRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'tags');
    
      }
}


/** @class TeamDao
  * @extends {ResourceDao}
  **/
export class TeamDao extends ResourceDao {
  constructor(client) {
    super(client, 'teams');
    this.relationshipDao = new TeamRelationshipDao(client);
  }
}

/** @class TeamRelationshipDao
 * @extends {RelationshipDao}  **/
export class TeamRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'teams');
    
    this.get = {
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
      };
    
    
    this.index = {
    
      /** @method users
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      users: (options) => this.toMany('users', options),
      };
      }
}


/** @class UserDao
  * @extends {ResourceDao}
  **/
export class UserDao extends ResourceDao {
  constructor(client) {
    super(client, 'users');
    this.relationshipDao = new UserRelationshipDao(client);
  }
}

/** @class UserRelationshipDao
 * @extends {RelationshipDao}  **/
export class UserRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'users');
    
    this.get = {
    
      /** @method communicationPreference
       @params {Object} options
       @returns {Promise<CommunicationPreference>} **/
      communicationPreference: (options) => this.toOne('communication-preference', options),
      };
    
    
    this.index = {
    
      /** @method driverPings
       @params {Object} options
       @returns {Promise<IndexResult<DriverPing>>} **/
      driverPings: (options) => this.toMany('driver-pings', options),
    
      /** @method driverWeeks
       @params {Object} options
       @returns {Promise<IndexResult<DriverWeek>>} **/
      driverWeeks: (options) => this.toMany('driver-weeks', options),
    
      /** @method driverDays
       @params {Object} options
       @returns {Promise<IndexResult<DriverDay>>} **/
      driverDays: (options) => this.toMany('driver-days', options),
    
      /** @method deliveredOrders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      deliveredOrders: (options) => this.toMany('delivered-orders', options),
    
      /** @method couriers
       @params {Object} options
       @returns {Promise<IndexResult<Courier>>} **/
      couriers: (options) => this.toMany('couriers', options),
    
      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: (options) => this.toMany('clients', options),
    
      /** @method roles
       @params {Object} options
       @returns {Promise<IndexResult<Role>>} **/
      roles: (options) => this.toMany('roles', options),
    
      /** @method paymentCards
       @params {Object} options
       @returns {Promise<IndexResult<PaymentCard>>} **/
      paymentCards: (options) => this.toMany('payment-cards', options),
    
      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: (options) => this.toMany('teams', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<Version>>} **/
      versions: (options) => this.toMany('versions', options),
      };
      }
}


/** @class UserFeedbackDao
  * @extends {ResourceDao}
  **/
export class UserFeedbackDao extends ResourceDao {
  constructor(client) {
    super(client, 'user-feedbacks');
    this.relationshipDao = new UserFeedbackRelationshipDao(client);
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
    this.relationshipDao = new UserInviteRelationshipDao(client);
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
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
    
      /** @method team
       @params {Object} options
       @returns {Promise<Team>} **/
      team: (options) => this.toOne('team', options),
    
      /** @method courier
       @params {Object} options
       @returns {Promise<Courier>} **/
      courier: (options) => this.toOne('courier', options),
    
      /** @method user
       @params {Object} options
       @returns {Promise<User>} **/
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
    this.relationshipDao = new VersionRelationshipDao(client);
  }
}

/** @class VersionRelationshipDao
 * @extends {RelationshipDao}  **/
export class VersionRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'versions');
    
      }
}


