import { ResourceDao, RelationshipDao } from '../client-base';


/** @class AccountingConsolidationConfigurationDao
  * @extends {ResourceDao}
  **/
export class AccountingConsolidationConfigurationDao extends ResourceDao {
  constructor(client) {
    super(client, 'accounting-consolidation-configurations');
    this.relationshipDao = new AccountingConsolidationConfigurationRelationshipDao(client);
  }
}

/** @class AccountingConsolidationConfigurationRelationshipDao
 * @extends {RelationshipDao}  **/
export class AccountingConsolidationConfigurationRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'accounting-consolidation-configurations');
    
    this.get = {
    
      /** @method paymentCard
       @params {Object} options
       @returns {Promise<PaymentCard>} **/
      paymentCard: (options) => this.toOne('payment-card', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
      };
    
    
    this.index = {
    
      /** @method runs
       @params {Object} options
       @returns {Promise<IndexResult<AccountingConsolidationRun>>} **/
      runs: (options) => this.toMany('runs', options),
      };
      }
}


/** @class AccountingConsolidationRunDao
  * @extends {ResourceDao}
  **/
export class AccountingConsolidationRunDao extends ResourceDao {
  constructor(client) {
    super(client, 'accounting-consolidation-runs');
    this.relationshipDao = new AccountingConsolidationRunRelationshipDao(client);
  }
}

/** @class AccountingConsolidationRunRelationshipDao
 * @extends {RelationshipDao}  **/
export class AccountingConsolidationRunRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'accounting-consolidation-runs');
    
    this.get = {
    
      /** @method configuration
       @params {Object} options
       @returns {Promise<AccountingConsolidationConfiguration>} **/
      configuration: (options) => this.toOne('configuration', options),
    
      /** @method invoice
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      invoice: (options) => this.toOne('invoice', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
      };
    
      }
}


/** @class AccountingLedgerItemDao
  * @extends {ResourceDao}
  **/
export class AccountingLedgerItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'accounting-ledger-items');
    this.relationshipDao = new AccountingLedgerItemRelationshipDao(client);
  }
}

/** @class AccountingLedgerItemRelationshipDao
 * @extends {RelationshipDao}  **/
export class AccountingLedgerItemRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'accounting-ledger-items');
    
    this.get = {
    
      /** @method parent
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      parent: (options) => this.toOne('parent', options),
      };
    
    
    this.index = {
    
      /** @method lineItems
       @params {Object} options
       @returns {Promise<IndexResult<AccountingLineItem>>} **/
      lineItems: (options) => this.toMany('line-items', options),
    
      /** @method children
       @params {Object} options
       @returns {Promise<IndexResult<AccountingLedgerItem>>} **/
      children: (options) => this.toMany('children', options),
      };
      }
}


/** @class AccountingLineItemDao
  * @extends {ResourceDao}
  **/
export class AccountingLineItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'accounting-line-items');
    this.relationshipDao = new AccountingLineItemRelationshipDao(client);
  }
}

/** @class AccountingLineItemRelationshipDao
 * @extends {RelationshipDao}  **/
export class AccountingLineItemRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'accounting-line-items');
    
    this.get = {
    
      /** @method ledgerItem
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      ledgerItem: (options) => this.toOne('ledger-item', options),
      };
    
      }
}


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
       @returns {Promise<IndexResult<HistorianVersion>>} **/
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
    
      /** @method currentWeekAreaClosures
       @params {Object} options
       @returns {Promise<IndexResult<AreaClosure>>} **/
      currentWeekAreaClosures: (options) => this.toMany('current-week-area-closures', options),
    
      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      promoCodes: (options) => this.toMany('promo-codes', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method allAreaVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allAreaVersions: (options) => this.toMany('all-area-versions', options),
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
    
      /** @method subscriptionPlan
       @params {Object} options
       @returns {Promise<SubscriptionPlan>} **/
      subscriptionPlan: (options) => this.toOne('subscription-plan', options),
    
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
    
      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: (options) => this.toOne('preference-profile', options),
    
      /** @method taxRate
       @params {Object} options
       @returns {Promise<InvoicingTaxRate>} **/
      taxRate: (options) => this.toOne('tax-rate', options),
    
      /** @method giftbitCard
       @params {Object} options
       @returns {Promise<GiftbitCard>} **/
      giftbitCard: (options) => this.toOne('giftbit-card', options),
    
      /** @method wallet
       @params {Object} options
       @returns {Promise<CurrenciesWallet>} **/
      wallet: (options) => this.toOne('wallet', options),
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
    
      /** @method contacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      contacts: (options) => this.toMany('contacts', options),
    
      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: (options) => this.toMany('teams', options),
    
      /** @method allClientVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allClientVersions: (options) => this.toMany('all-client-versions', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method mealPlanningTemplates
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningTemplate>>} **/
      mealPlanningTemplates: (options) => this.toMany('meal-planning-templates', options),
    
      /** @method mealPlanningInstances
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningInstance>>} **/
      mealPlanningInstances: (options) => this.toMany('meal-planning-instances', options),
    
      /** @method mealPlanningReservations
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningReservation>>} **/
      mealPlanningReservations: (options) => this.toMany('meal-planning-reservations', options),
    
      /** @method clientDiscounts
       @params {Object} options
       @returns {Promise<IndexResult<ClientDiscount>>} **/
      clientDiscounts: (options) => this.toMany('client-discounts', options),
    
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
    
      /** @method owner
       @params {Object} options
       @returns {Promise<Owner>} **/
      owner: (options) => this.toOne('owner', options),
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
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: (options) => this.toMany('versions', options),
      };
      }
}


/** @class CurrenciesCurrencyDao
  * @extends {ResourceDao}
  **/
export class CurrenciesCurrencyDao extends ResourceDao {
  constructor(client) {
    super(client, 'currencies-currencies');
    this.relationshipDao = new CurrenciesCurrencyRelationshipDao(client);
  }
}

/** @class CurrenciesCurrencyRelationshipDao
 * @extends {RelationshipDao}  **/
export class CurrenciesCurrencyRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'currencies-currencies');
    
      }
}


/** @class CurrenciesTransactionDao
  * @extends {ResourceDao}
  **/
export class CurrenciesTransactionDao extends ResourceDao {
  constructor(client) {
    super(client, 'currencies-transactions');
    this.relationshipDao = new CurrenciesTransactionRelationshipDao(client);
  }
}

/** @class CurrenciesTransactionRelationshipDao
 * @extends {RelationshipDao}  **/
export class CurrenciesTransactionRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'currencies-transactions');
    
    this.get = {
    
      /** @method agent
       @params {Object} options
       @returns {Promise<Agent>} **/
      agent: (options) => this.toOne('agent', options),
    
      /** @method subject
       @params {Object} options
       @returns {Promise<Subject>} **/
      subject: (options) => this.toOne('subject', options),
      };
    
      }
}


/** @class CurrenciesWalletDao
  * @extends {ResourceDao}
  **/
export class CurrenciesWalletDao extends ResourceDao {
  constructor(client) {
    super(client, 'currencies-wallets');
    this.relationshipDao = new CurrenciesWalletRelationshipDao(client);
  }
}

/** @class CurrenciesWalletRelationshipDao
 * @extends {RelationshipDao}  **/
export class CurrenciesWalletRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'currencies-wallets');
    
    this.get = {
    
      /** @method owner
       @params {Object} options
       @returns {Promise<Owner>} **/
      owner: (options) => this.toOne('owner', options),
      };
    
    
    this.index = {
    
      /** @method transactions
       @params {Object} options
       @returns {Promise<IndexResult<Currencies::Transaction>>} **/
      transactions: (options) => this.toMany('transactions', options),
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


/** @class FeatureFlagDescriptionDao
  * @extends {ResourceDao}
  **/
export class FeatureFlagDescriptionDao extends ResourceDao {
  constructor(client) {
    super(client, 'feature-flag-descriptions');
    this.relationshipDao = new FeatureFlagDescriptionRelationshipDao(client);
  }
}

/** @class FeatureFlagDescriptionRelationshipDao
 * @extends {RelationshipDao}  **/
export class FeatureFlagDescriptionRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'feature-flag-descriptions');
    
    
    this.index = {
    
      /** @method subscriptionPlans
       @params {Object} options
       @returns {Promise<IndexResult<SubscriptionPlan>>} **/
      subscriptionPlans: (options) => this.toMany('subscription-plans', options),
      };
      }
}


/** @class FoodTypeDao
  * @extends {ResourceDao}
  **/
export class FoodTypeDao extends ResourceDao {
  constructor(client) {
    super(client, 'food-types');
    this.relationshipDao = new FoodTypeRelationshipDao(client);
  }
}

/** @class FoodTypeRelationshipDao
 * @extends {RelationshipDao}  **/
export class FoodTypeRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'food-types');
    
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
    
      /** @method invoice
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      invoice: (options) => this.toOne('invoice', options),
      };
    
    
    this.index = {
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: (options) => this.toMany('order-items', options),
      };
      }
}


/** @class HistorianVersionDao
  * @extends {ResourceDao}
  **/
export class HistorianVersionDao extends ResourceDao {
  constructor(client) {
    super(client, 'historian-versions');
    this.relationshipDao = new HistorianVersionRelationshipDao(client);
  }
}

/** @class HistorianVersionRelationshipDao
 * @extends {RelationshipDao}  **/
export class HistorianVersionRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'historian-versions');
    
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


/** @class InvoicingLedgerItemDao
  * @extends {ResourceDao}
  **/
export class InvoicingLedgerItemDao extends ResourceDao {
  constructor(client) {
    super(client, 'invoicing-ledger-items');
    this.relationshipDao = new InvoicingLedgerItemRelationshipDao(client);
  }
}

/** @class InvoicingLedgerItemRelationshipDao
 * @extends {RelationshipDao}  **/
export class InvoicingLedgerItemRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'invoicing-ledger-items');
    
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
    
    
    this.index = {
    
      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: (options) => this.toMany('areas', options),
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


/** @class LogisticsArrivalEstimateDao
  * @extends {ResourceDao}
  **/
export class LogisticsArrivalEstimateDao extends ResourceDao {
  constructor(client) {
    super(client, 'logistics-arrival-estimates');
    this.relationshipDao = new LogisticsArrivalEstimateRelationshipDao(client);
  }
}

/** @class LogisticsArrivalEstimateRelationshipDao
 * @extends {RelationshipDao}  **/
export class LogisticsArrivalEstimateRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'logistics-arrival-estimates');
    
      }
}


/** @class LogisticsDeliveryDao
  * @extends {ResourceDao}
  **/
export class LogisticsDeliveryDao extends ResourceDao {
  constructor(client) {
    super(client, 'logistics-deliveries');
    this.relationshipDao = new LogisticsDeliveryRelationshipDao(client);
  }
}

/** @class LogisticsDeliveryRelationshipDao
 * @extends {RelationshipDao}  **/
export class LogisticsDeliveryRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'logistics-deliveries');
    
    this.get = {
    
      /** @method driver
       @params {Object} options
       @returns {Promise<User>} **/
      driver: (options) => this.toOne('driver', options),
    
      /** @method courier
       @params {Object} options
       @returns {Promise<Courier>} **/
      courier: (options) => this.toOne('courier', options),
    
      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
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


/** @class MealPlanningEventDao
  * @extends {ResourceDao}
  **/
export class MealPlanningEventDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-events');
    this.relationshipDao = new MealPlanningEventRelationshipDao(client);
  }
}

/** @class MealPlanningEventRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningEventRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-events');
    
    this.get = {
    
      /** @method instance
       @params {Object} options
       @returns {Promise<MealPlanningInstance>} **/
      instance: (options) => this.toOne('instance', options),
      };
    
    
    this.index = {
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
    
      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      restaurants: (options) => this.toMany('restaurants', options),
    
      /** @method reservations
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningReservation>>} **/
      reservations: (options) => this.toMany('reservations', options),
    
      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: (options) => this.toMany('restaurant-constraints', options),
    
      /** @method users
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      users: (options) => this.toMany('users', options),
      };
      }
}


/** @class MealPlanningInstanceDao
  * @extends {ResourceDao}
  **/
export class MealPlanningInstanceDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-instances');
    this.relationshipDao = new MealPlanningInstanceRelationshipDao(client);
  }
}

/** @class MealPlanningInstanceRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningInstanceRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-instances');
    
    this.get = {
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method mealPlanningTemplate
       @params {Object} options
       @returns {Promise<MealPlanningTemplate>} **/
      mealPlanningTemplate: (options) => this.toOne('meal-planning-template', options),
    
      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: (options) => this.toOne('preference-profile', options),
    
      /** @method orderTemplate
       @params {Object} options
       @returns {Promise<Order>} **/
      orderTemplate: (options) => this.toOne('order-template', options),
    
      /** @method defaultOrderOwner
       @params {Object} options
       @returns {Promise<User>} **/
      defaultOrderOwner: (options) => this.toOne('default-order-owner', options),
      };
    
    
    this.index = {
    
      /** @method mealPlanningReservations
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningReservation>>} **/
      mealPlanningReservations: (options) => this.toMany('meal-planning-reservations', options),
    
      /** @method events
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningEvent>>} **/
      events: (options) => this.toMany('events', options),
    
      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: (options) => this.toMany('restaurant-constraints', options),
    
      /** @method teamMembers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      teamMembers: (options) => this.toMany('team-members', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
    
      /** @method logRecords
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningLogRecord>>} **/
      logRecords: (options) => this.toMany('log-records', options),
      };
      }
}


/** @class MealPlanningLogRecordDao
  * @extends {ResourceDao}
  **/
export class MealPlanningLogRecordDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-log-records');
    this.relationshipDao = new MealPlanningLogRecordRelationshipDao(client);
  }
}

/** @class MealPlanningLogRecordRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningLogRecordRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-log-records');
    
    this.get = {
    
      /** @method planable
       @params {Object} options
       @returns {Promise<Planable>} **/
      planable: (options) => this.toOne('planable', options),
      };
    
      }
}


/** @class MealPlanningPreferenceProfileDao
  * @extends {ResourceDao}
  **/
export class MealPlanningPreferenceProfileDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-preference-profiles');
    this.relationshipDao = new MealPlanningPreferenceProfileRelationshipDao(client);
  }
}

/** @class MealPlanningPreferenceProfileRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningPreferenceProfileRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-preference-profiles');
    
    this.get = {
    
      /** @method preferee
       @params {Object} options
       @returns {Promise<Preferee>} **/
      preferee: (options) => this.toOne('preferee', options),
      };
    
    
    this.index = {
    
      /** @method requirements
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirement>>} **/
      requirements: (options) => this.toMany('requirements', options),
    
      /** @method requirementGroups
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirementGroup>>} **/
      requirementGroups: (options) => this.toMany('requirement-groups', options),
    
      /** @method lovedRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      lovedRestaurants: (options) => this.toMany('loved-restaurants', options),
    
      /** @method hatedRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      hatedRestaurants: (options) => this.toMany('hated-restaurants', options),
    
      /** @method lovedCuisineTypes
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      lovedCuisineTypes: (options) => this.toMany('loved-cuisine-types', options),
    
      /** @method hatedCuisineTypes
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      hatedCuisineTypes: (options) => this.toMany('hated-cuisine-types', options),
      };
      }
}


/** @class MealPlanningRequirementDao
  * @extends {ResourceDao}
  **/
export class MealPlanningRequirementDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-requirements');
    this.relationshipDao = new MealPlanningRequirementRelationshipDao(client);
  }
}

/** @class MealPlanningRequirementRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningRequirementRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-requirements');
    
    this.get = {
    
      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: (options) => this.toOne('preference-profile', options),
    
      /** @method requirementGroup
       @params {Object} options
       @returns {Promise<MealPlanningRequirementGroup>} **/
      requirementGroup: (options) => this.toOne('requirement-group', options),
    
      /** @method restaurantConstraint
       @params {Object} options
       @returns {Promise<MealPlanningRestaurantConstraint>} **/
      restaurantConstraint: (options) => this.toOne('restaurant-constraint', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
      };
    
    
    this.index = {
    
      /** @method requirementConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirementConstraint>>} **/
      requirementConstraints: (options) => this.toMany('requirement-constraints', options),
    
      /** @method tags
       @params {Object} options
       @returns {Promise<IndexResult<Tag>>} **/
      tags: (options) => this.toMany('tags', options),
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method allergyTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      allergyTags: (options) => this.toMany('allergy-tags', options),
    
      /** @method packagingTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      packagingTags: (options) => this.toMany('packaging-tags', options),
    
      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: (options) => this.toMany('food-types', options),
    
      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: (options) => this.toMany('meal-types', options),
      };
      }
}


/** @class MealPlanningRequirementConstraintDao
  * @extends {ResourceDao}
  **/
export class MealPlanningRequirementConstraintDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-requirement-constraints');
    this.relationshipDao = new MealPlanningRequirementConstraintRelationshipDao(client);
  }
}

/** @class MealPlanningRequirementConstraintRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningRequirementConstraintRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-requirement-constraints');
    
    this.get = {
    
      /** @method requirement
       @params {Object} options
       @returns {Promise<MealPlanningRequirement>} **/
      requirement: (options) => this.toOne('requirement', options),
      };
    
    
    this.index = {
    
      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: (options) => this.toMany('meal-types', options),
    
      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: (options) => this.toMany('food-types', options),
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method allergyTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      allergyTags: (options) => this.toMany('allergy-tags', options),
    
      /** @method packagingTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      packagingTags: (options) => this.toMany('packaging-tags', options),
      };
      }
}


/** @class MealPlanningRequirementGroupDao
  * @extends {ResourceDao}
  **/
export class MealPlanningRequirementGroupDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-requirement-groups');
    this.relationshipDao = new MealPlanningRequirementGroupRelationshipDao(client);
  }
}

/** @class MealPlanningRequirementGroupRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningRequirementGroupRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-requirement-groups');
    
    this.get = {
    
      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: (options) => this.toOne('preference-profile', options),
      };
    
    
    this.index = {
    
      /** @method requirements
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRequirement>>} **/
      requirements: (options) => this.toMany('requirements', options),
      };
      }
}


/** @class MealPlanningReservationDao
  * @extends {ResourceDao}
  **/
export class MealPlanningReservationDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-reservations');
    this.relationshipDao = new MealPlanningReservationRelationshipDao(client);
  }
}

/** @class MealPlanningReservationRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningReservationRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-reservations');
    
    this.get = {
    
      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
    
      /** @method mealPlanningInstance
       @params {Object} options
       @returns {Promise<MealPlanningInstance>} **/
      mealPlanningInstance: (options) => this.toOne('meal-planning-instance', options),
    
      /** @method event
       @params {Object} options
       @returns {Promise<MealPlanningEvent>} **/
      event: (options) => this.toOne('event', options),
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
      };
    
      }
}


/** @class MealPlanningRestaurantConstraintDao
  * @extends {ResourceDao}
  **/
export class MealPlanningRestaurantConstraintDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-restaurant-constraints');
    this.relationshipDao = new MealPlanningRestaurantConstraintRelationshipDao(client);
  }
}

/** @class MealPlanningRestaurantConstraintRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningRestaurantConstraintRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-restaurant-constraints');
    
    this.get = {
    
      /** @method template
       @params {Object} options
       @returns {Promise<MealPlanningTemplate>} **/
      template: (options) => this.toOne('template', options),
    
      /** @method instance
       @params {Object} options
       @returns {Promise<MealPlanningInstance>} **/
      instance: (options) => this.toOne('instance', options),
    
      /** @method event
       @params {Object} options
       @returns {Promise<MealPlanningEvent>} **/
      event: (options) => this.toOne('event', options),
    
      /** @method requirement
       @params {Object} options
       @returns {Promise<MealPlanningRequirement>} **/
      requirement: (options) => this.toOne('requirement', options),
      };
    
    
    this.index = {
    
      /** @method restaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      restaurants: (options) => this.toMany('restaurants', options),
      };
      }
}


/** @class MealPlanningScheduleDao
  * @extends {ResourceDao}
  **/
export class MealPlanningScheduleDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-schedules');
    this.relationshipDao = new MealPlanningScheduleRelationshipDao(client);
  }
}

/** @class MealPlanningScheduleRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningScheduleRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-schedules');
    
    this.get = {
    
      /** @method template
       @params {Object} options
       @returns {Promise<MealPlanningTemplate>} **/
      template: (options) => this.toOne('template', options),
      };
    
    
    this.index = {
    
      /** @method skipPeriods
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningSkipPeriod>>} **/
      skipPeriods: (options) => this.toMany('skip-periods', options),
      };
      }
}


/** @class MealPlanningTemplateDao
  * @extends {ResourceDao}
  **/
export class MealPlanningTemplateDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-planning-templates');
    this.relationshipDao = new MealPlanningTemplateRelationshipDao(client);
  }
}

/** @class MealPlanningTemplateRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealPlanningTemplateRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-planning-templates');
    
    this.get = {
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method orderTemplate
       @params {Object} options
       @returns {Promise<Order>} **/
      orderTemplate: (options) => this.toOne('order-template', options),
    
      /** @method area
       @params {Object} options
       @returns {Promise<Area>} **/
      area: (options) => this.toOne('area', options),
    
      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: (options) => this.toOne('preference-profile', options),
    
      /** @method schedule
       @params {Object} options
       @returns {Promise<MealPlanningSchedule>} **/
      schedule: (options) => this.toOne('schedule', options),
    
      /** @method defaultOrderOwner
       @params {Object} options
       @returns {Promise<User>} **/
      defaultOrderOwner: (options) => this.toOne('default-order-owner', options),
      };
    
    
    this.index = {
    
      /** @method mealPlanningInstances
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningInstance>>} **/
      mealPlanningInstances: (options) => this.toMany('meal-planning-instances', options),
    
      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: (options) => this.toMany('restaurant-constraints', options),
      };
      }
}


/** @class MealTypeDao
  * @extends {ResourceDao}
  **/
export class MealTypeDao extends ResourceDao {
  constructor(client) {
    super(client, 'meal-types');
    this.relationshipDao = new MealTypeRelationshipDao(client);
  }
}

/** @class MealTypeRelationshipDao
 * @extends {RelationshipDao}  **/
export class MealTypeRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'meal-types');
    
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
    
      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: (options) => this.toMany('meal-types', options),
    
      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: (options) => this.toMany('food-types', options),
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
    
      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: (options) => this.toMany('meal-types', options),
    
      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: (options) => this.toMany('food-types', options),
    
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


/** @class NotificationLogDao
  * @extends {ResourceDao}
  **/
export class NotificationLogDao extends ResourceDao {
  constructor(client) {
    super(client, 'notification-logs');
    this.relationshipDao = new NotificationLogRelationshipDao(client);
  }
}

/** @class NotificationLogRelationshipDao
 * @extends {RelationshipDao}  **/
export class NotificationLogRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'notification-logs');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
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
    
      /** @method menu
       @params {Object} options
       @returns {Promise<Menu>} **/
      menu: (options) => this.toOne('menu', options),
    
      /** @method menuFilter
       @params {Object} options
       @returns {Promise<MealPlanningRequirement>} **/
      menuFilter: (options) => this.toOne('menu-filter', options),
    
      /** @method customLocation
       @params {Object} options
       @returns {Promise<Location>} **/
      customLocation: (options) => this.toOne('custom-location', options),
    
      /** @method giftbitError
       @params {Object} options
       @returns {Promise<GiftbitError>} **/
      giftbitError: (options) => this.toOne('giftbit-error', options),
    
      /** @method restaurantInvoice
       @params {Object} options
       @returns {Promise<InvoicingLedgerItem>} **/
      restaurantInvoice: (options) => this.toOne('restaurant-invoice', options),
    
      /** @method clientInvoice
       @params {Object} options
       @returns {Promise<InvoicingLedgerItem>} **/
      clientInvoice: (options) => this.toOne('client-invoice', options),
    
      /** @method invoice
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      invoice: (options) => this.toOne('invoice', options),
    
      /** @method restaurantBill
       @params {Object} options
       @returns {Promise<AccountingLedgerItem>} **/
      restaurantBill: (options) => this.toOne('restaurant-bill', options),
    
      /** @method clientOrderInvoice
       @params {Object} options
       @returns {Promise<ClientOrderInvoice>} **/
      clientOrderInvoice: (options) => this.toOne('client-order-invoice', options),
    
      /** @method restaurantOrderInvoice
       @params {Object} options
       @returns {Promise<RestaurantOrderInvoice>} **/
      restaurantOrderInvoice: (options) => this.toOne('restaurant-order-invoice', options),
    
      /** @method arrivalEstimate
       @params {Object} options
       @returns {Promise<LogisticsArrivalEstimate>} **/
      arrivalEstimate: (options) => this.toOne('arrival-estimate', options),
      };
    
    
    this.index = {
    
      /** @method clientDiscounts
       @params {Object} options
       @returns {Promise<IndexResult<ClientDiscount>>} **/
      clientDiscounts: (options) => this.toMany('client-discounts', options),
    
      /** @method restaurantDiscounts
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantDiscount>>} **/
      restaurantDiscounts: (options) => this.toMany('restaurant-discounts', options),
    
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
    
      /** @method allOrderVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allOrderVersions: (options) => this.toMany('all-order-versions', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method pollableRestaurants
       @params {Object} options
       @returns {Promise<IndexResult<Restaurant>>} **/
      pollableRestaurants: (options) => this.toMany('pollable-restaurants', options),
    
      /** @method restaurantVotes
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantVote>>} **/
      restaurantVotes: (options) => this.toMany('restaurant-votes', options),
    
      /** @method teams
       @params {Object} options
       @returns {Promise<IndexResult<Team>>} **/
      teams: (options) => this.toMany('teams', options),
    
      /** @method allUsers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      allUsers: (options) => this.toMany('all-users', options),
    
      /** @method orderedUsers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      orderedUsers: (options) => this.toMany('ordered-users', options),
    
      /** @method orderedGroupOrderMembers
       @params {Object} options
       @returns {Promise<IndexResult<GroupOrderMember>>} **/
      orderedGroupOrderMembers: (options) => this.toMany('ordered-group-order-members', options),
    
      /** @method joinedUsers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      joinedUsers: (options) => this.toMany('joined-users', options),
    
      /** @method teamMembers
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      teamMembers: (options) => this.toMany('team-members', options),
    
      /** @method groupOrderMembers
       @params {Object} options
       @returns {Promise<IndexResult<GroupOrderMember>>} **/
      groupOrderMembers: (options) => this.toMany('group-order-members', options),
    
      /** @method orderItems
       @params {Object} options
       @returns {Promise<IndexResult<OrderItem>>} **/
      orderItems: (options) => this.toMany('order-items', options),
    
      /** @method ledgerItems
       @params {Object} options
       @returns {Promise<IndexResult<AccountingLedgerItem>>} **/
      ledgerItems: (options) => this.toMany('ledger-items', options),
    
      /** @method salesforceCases
       @params {Object} options
       @returns {Promise<IndexResult<SalesforceCase>>} **/
      salesforceCases: (options) => this.toMany('salesforce-cases', options),
    
      /** @method notificationLogs
       @params {Object} options
       @returns {Promise<IndexResult<NotificationLog>>} **/
      notificationLogs: (options) => this.toMany('notification-logs', options),
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
       @returns {Promise<IndexResult<HistorianVersion>>} **/
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


/** @class ReleaseNoteDao
  * @extends {ResourceDao}
  **/
export class ReleaseNoteDao extends ResourceDao {
  constructor(client) {
    super(client, 'release-notes');
    this.relationshipDao = new ReleaseNoteRelationshipDao(client);
  }
}

/** @class ReleaseNoteRelationshipDao
 * @extends {RelationshipDao}  **/
export class ReleaseNoteRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'release-notes');
    
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
    
      /** @method activeMenu
       @params {Object} options
       @returns {Promise<Menu>} **/
      activeMenu: (options) => this.toOne('active-menu', options),
      };
    
    
    this.index = {
    
      /** @method admins
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      admins: (options) => this.toMany('admins', options),
    
      /** @method adminContacts
       @params {Object} options
       @returns {Promise<IndexResult<Contact>>} **/
      adminContacts: (options) => this.toMany('admin-contacts', options),
    
      /** @method allRestaurantVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allRestaurantVersions: (options) => this.toMany('all-restaurant-versions', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method promoCodes
       @params {Object} options
       @returns {Promise<IndexResult<PromoCode>>} **/
      promoCodes: (options) => this.toMany('promo-codes', options),
    
      /** @method restaurantConstraints
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningRestaurantConstraint>>} **/
      restaurantConstraints: (options) => this.toMany('restaurant-constraints', options),
    
      /** @method rankings
       @params {Object} options
       @returns {Promise<IndexResult<RestaurantRanking>>} **/
      rankings: (options) => this.toMany('rankings', options),
    
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
    
      /** @method dietaryTags
       @params {Object} options
       @returns {Promise<IndexResult<DietaryTag>>} **/
      dietaryTags: (options) => this.toMany('dietary-tags', options),
    
      /** @method foodTypes
       @params {Object} options
       @returns {Promise<IndexResult<FoodType>>} **/
      foodTypes: (options) => this.toMany('food-types', options),
    
      /** @method mealTypes
       @params {Object} options
       @returns {Promise<IndexResult<MealType>>} **/
      mealTypes: (options) => this.toMany('meal-types', options),
    
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


/** @class RestaurantRankingDao
  * @extends {ResourceDao}
  **/
export class RestaurantRankingDao extends ResourceDao {
  constructor(client) {
    super(client, 'restaurant-rankings');
    this.relationshipDao = new RestaurantRankingRelationshipDao(client);
  }
}

/** @class RestaurantRankingRelationshipDao
 * @extends {RelationshipDao}  **/
export class RestaurantRankingRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'restaurant-rankings');
    
    this.get = {
    
      /** @method restaurant
       @params {Object} options
       @returns {Promise<Restaurant>} **/
      restaurant: (options) => this.toOne('restaurant', options),
      };
    
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


/** @class SalesforceCaseDao
  * @extends {ResourceDao}
  **/
export class SalesforceCaseDao extends ResourceDao {
  constructor(client) {
    super(client, 'salesforce-cases');
    this.relationshipDao = new SalesforceCaseRelationshipDao(client);
  }
}

/** @class SalesforceCaseRelationshipDao
 * @extends {RelationshipDao}  **/
export class SalesforceCaseRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'salesforce-cases');
    
    this.get = {
    
      /** @method order
       @params {Object} options
       @returns {Promise<Order>} **/
      order: (options) => this.toOne('order', options),
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


/** @class SubscriptionPlanDao
  * @extends {ResourceDao}
  **/
export class SubscriptionPlanDao extends ResourceDao {
  constructor(client) {
    super(client, 'subscription-plans');
    this.relationshipDao = new SubscriptionPlanRelationshipDao(client);
  }
}

/** @class SubscriptionPlanRelationshipDao
 * @extends {RelationshipDao}  **/
export class SubscriptionPlanRelationshipDao extends RelationshipDao {
  constructor(client) {
    super(client, 'subscription-plans');
    
    
    this.index = {
    
      /** @method clients
       @params {Object} options
       @returns {Promise<IndexResult<Client>>} **/
      clients: (options) => this.toMany('clients', options),
    
      /** @method featureFlagDescriptions
       @params {Object} options
       @returns {Promise<IndexResult<FeatureFlagDescription>>} **/
      featureFlagDescriptions: (options) => this.toMany('feature-flag-descriptions', options),
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
    
      /** @method members
       @params {Object} options
       @returns {Promise<IndexResult<User>>} **/
      members: (options) => this.toMany('members', options),
    
      /** @method orders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      orders: (options) => this.toMany('orders', options),
    
      /** @method memberProfiles
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningPreferenceProfile>>} **/
      memberProfiles: (options) => this.toMany('member-profiles', options),
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
    
      /** @method client
       @params {Object} options
       @returns {Promise<Client>} **/
      client: (options) => this.toOne('client', options),
    
      /** @method communicationPreference
       @params {Object} options
       @returns {Promise<CommunicationPreference>} **/
      communicationPreference: (options) => this.toOne('communication-preference', options),
    
      /** @method preferenceProfile
       @params {Object} options
       @returns {Promise<MealPlanningPreferenceProfile>} **/
      preferenceProfile: (options) => this.toOne('preference-profile', options),
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
    
      /** @method areas
       @params {Object} options
       @returns {Promise<IndexResult<Area>>} **/
      areas: (options) => this.toMany('areas', options),
    
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
    
      /** @method allUserVersions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      allUserVersions: (options) => this.toMany('all-user-versions', options),
    
      /** @method versions
       @params {Object} options
       @returns {Promise<IndexResult<HistorianVersion>>} **/
      versions: (options) => this.toMany('versions', options),
    
      /** @method clientOrders
       @params {Object} options
       @returns {Promise<IndexResult<Order>>} **/
      clientOrders: (options) => this.toMany('client-orders', options),
    
      /** @method events
       @params {Object} options
       @returns {Promise<IndexResult<MealPlanningEvent>>} **/
      events: (options) => this.toMany('events', options),
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


