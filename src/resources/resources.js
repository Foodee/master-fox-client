import  Resource from './resource';


/** @class AppConfiguration
  * @extends {Resource}
  **/
export class AppConfiguration extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'app-configurations', attributes, one, many);
  }

  // attributes

  /** @param {string} key **/
  set key(key){this._attributes['key'] = key};
  /** @type {string} */
  get key(){return this._attributes['key'];};

  /** @param {string} preferences **/
  set preferences(preferences){this._attributes['preferences'] = preferences};
  /** @type {string} */
  get preferences(){return this._attributes['preferences'];};


  // relationships




  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};


}

/** @class Area
  * @extends {Resource}
  **/
export class Area extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'areas', attributes, one, many);
  }

  // attributes

  /** @param {boolean} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {boolean} */
  get active(){return this._attributes['active'];};

  /** @param {boolean} title **/
  set title(title){this._attributes['title'] = title};
  /** @type {boolean} */
  get title(){return this._attributes['title'];};

  /** @param {boolean} country **/
  set country(country){this._attributes['country'] = country};
  /** @type {boolean} */
  get country(){return this._attributes['country'];};

  /** @param {boolean} province **/
  set province(province){this._attributes['province'] = province};
  /** @type {boolean} */
  get province(){return this._attributes['province'];};

  /** @param {boolean} city **/
  set city(city){this._attributes['city'] = city};
  /** @type {boolean} */
  get city(){return this._attributes['city'];};

  /** @param {boolean} district **/
  set district(district){this._attributes['district'] = district};
  /** @type {boolean} */
  get district(){return this._attributes['district'];};

  /** @param {boolean} slug **/
  set slug(slug){this._attributes['slug'] = slug};
  /** @type {boolean} */
  get slug(){return this._attributes['slug'];};

  /** @param {boolean} isoTimeZone **/
  set isoTimeZone(isoTimeZone){this._attributes['iso-time-zone'] = isoTimeZone};
  /** @type {boolean} */
  get isoTimeZone(){return this._attributes['iso-time-zone'];};

  /** @param {boolean} deliveryLeadTime **/
  set deliveryLeadTime(deliveryLeadTime){this._attributes['delivery-lead-time'] = deliveryLeadTime};
  /** @type {boolean} */
  get deliveryLeadTime(){return this._attributes['delivery-lead-time'];};

  /** @param {boolean} currency **/
  set currency(currency){this._attributes['currency'] = currency};
  /** @type {boolean} */
  get currency(){return this._attributes['currency'];};

  /** @param {boolean} deliveryFee **/
  set deliveryFee(deliveryFee){this._attributes['delivery-fee'] = deliveryFee};
  /** @type {boolean} */
  get deliveryFee(){return this._attributes['delivery-fee'];};

  /** @param {boolean} deliveryZone **/
  set deliveryZone(deliveryZone){this._attributes['delivery-zone'] = deliveryZone};
  /** @type {boolean} */
  get deliveryZone(){return this._attributes['delivery-zone'];};

  /** @param {boolean} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {boolean} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {boolean} prefix **/
  set prefix(prefix){this._attributes['prefix'] = prefix};
  /** @type {boolean} */
  get prefix(){return this._attributes['prefix'];};

  /** @param {boolean} coverImageUrl **/
  set coverImageUrl(coverImageUrl){this._attributes['cover-image-url'] = coverImageUrl};
  /** @type {boolean} */
  get coverImageUrl(){return this._attributes['cover-image-url'];};


  // relationships


  /** @param {InvoicingTaxRate} deliveryFeeTaxRate **/
  set deliveryFeeTaxRate(deliveryFeeTaxRate){this._one['delivery-fee-tax-rate'] = deliveryFeeTaxRate};
  /** @type {InvoicingTaxRate} */
  get deliveryFeeTaxRate(){return this._one['delivery-fee-tax-rate']};



  /** @param {Courier[]} couriers **/
  set couriers(couriers){this._many['couriers'] = couriers};
  /** @type {Courier[]} */
  get couriers(){return this._many['couriers']};

  /** @param {Client[]} clients **/
  set clients(clients){this._many['clients'] = clients};
  /** @type {Client[]} */
  get clients(){return this._many['clients']};

  /** @param {Restaurant[]} restaurants **/
  set restaurants(restaurants){this._many['restaurants'] = restaurants};
  /** @type {Restaurant[]} */
  get restaurants(){return this._many['restaurants']};

  /** @param {InvoicingTaxRate[]} invoicingTaxRates **/
  set invoicingTaxRates(invoicingTaxRates){this._many['invoicing-tax-rates'] = invoicingTaxRates};
  /** @type {InvoicingTaxRate[]} */
  get invoicingTaxRates(){return this._many['invoicing-tax-rates']};

  /** @param {InvoicingTaxRate[]} globalInvoicingTaxRates **/
  set globalInvoicingTaxRates(globalInvoicingTaxRates){this._many['global-invoicing-tax-rates'] = globalInvoicingTaxRates};
  /** @type {InvoicingTaxRate[]} */
  get globalInvoicingTaxRates(){return this._many['global-invoicing-tax-rates']};

  /** @param {AreaClosure[]} areaClosures **/
  set areaClosures(areaClosures){this._many['area-closures'] = areaClosures};
  /** @type {AreaClosure[]} */
  get areaClosures(){return this._many['area-closures']};

  /** @param {AreaClosure[]} currentAreaClosures **/
  set currentAreaClosures(currentAreaClosures){this._many['current-area-closures'] = currentAreaClosures};
  /** @type {AreaClosure[]} */
  get currentAreaClosures(){return this._many['current-area-closures']};

  /** @param {PromoCode[]} promoCodes **/
  set promoCodes(promoCodes){this._many['promo-codes'] = promoCodes};
  /** @type {PromoCode[]} */
  get promoCodes(){return this._many['promo-codes']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};


}

/** @class AreaClosure
  * @extends {Resource}
  **/
export class AreaClosure extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'area-closures', attributes, one, many);
  }

  // attributes

  /** @param {Date} startBlock **/
  set startBlock(startBlock){this._attributes['start-block'] = startBlock};
  /** @type {Date} */
  get startBlock(){return this._attributes['start-block'];};

  /** @param {Date} endBlock **/
  set endBlock(endBlock){this._attributes['end-block'] = endBlock};
  /** @type {Date} */
  get endBlock(){return this._attributes['end-block'];};

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {Date} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};




}

/** @class Client
  * @extends {Resource}
  **/
export class Client extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'clients', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} legalName **/
  set legalName(legalName){this._attributes['legal-name'] = legalName};
  /** @type {string} */
  get legalName(){return this._attributes['legal-name'];};

  /** @param {string} accountName **/
  set accountName(accountName){this._attributes['account-name'] = accountName};
  /** @type {string} */
  get accountName(){return this._attributes['account-name'];};

  /** @param {string} deliveryNotes **/
  set deliveryNotes(deliveryNotes){this._attributes['delivery-notes'] = deliveryNotes};
  /** @type {string} */
  get deliveryNotes(){return this._attributes['delivery-notes'];};

  /** @param {string} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {string} */
  get notes(){return this._attributes['notes'];};

  /** @param {string} plan **/
  set plan(plan){this._attributes['plan'] = plan};
  /** @type {string} */
  get plan(){return this._attributes['plan'];};

  /** @param {string} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {string} */
  get features(){return this._attributes['features'];};

  /** @param {string} terms **/
  set terms(terms){this._attributes['terms'] = terms};
  /** @type {string} */
  get terms(){return this._attributes['terms'];};

  /** @param {string} termDays **/
  set termDays(termDays){this._attributes['term-days'] = termDays};
  /** @type {string} */
  get termDays(){return this._attributes['term-days'];};

  /** @param {string} apiToken **/
  set apiToken(apiToken){this._attributes['api-token'] = apiToken};
  /** @type {string} */
  get apiToken(){return this._attributes['api-token'];};

  /** @param {string} veryLateScore **/
  set veryLateScore(veryLateScore){this._attributes['very-late-score'] = veryLateScore};
  /** @type {string} */
  get veryLateScore(){return this._attributes['very-late-score'];};

  /** @param {string} actualSegment **/
  set actualSegment(actualSegment){this._attributes['actual-segment'] = actualSegment};
  /** @type {string} */
  get actualSegment(){return this._attributes['actual-segment'];};

  /** @param {string} salesSupportClient **/
  set salesSupportClient(salesSupportClient){this._attributes['sales-support-client'] = salesSupportClient};
  /** @type {string} */
  get salesSupportClient(){return this._attributes['sales-support-client'];};


  // relationships


  /** @param {Area} defaultArea **/
  set defaultArea(defaultArea){this._one['default-area'] = defaultArea};
  /** @type {Area} */
  get defaultArea(){return this._one['default-area']};

  /** @param {Location} billingLocation **/
  set billingLocation(billingLocation){this._one['billing-location'] = billingLocation};
  /** @type {Location} */
  get billingLocation(){return this._one['billing-location']};

  /** @param {Contact} billingContact **/
  set billingContact(billingContact){this._one['billing-contact'] = billingContact};
  /** @type {Contact} */
  get billingContact(){return this._one['billing-contact']};

  /** @param {User} accountManager **/
  set accountManager(accountManager){this._one['account-manager'] = accountManager};
  /** @type {User} */
  get accountManager(){return this._one['account-manager']};

  /** @param {User} owner **/
  set owner(owner){this._one['owner'] = owner};
  /** @type {User} */
  get owner(){return this._one['owner']};

  /** @param {User} salesSupport **/
  set salesSupport(salesSupport){this._one['sales-support'] = salesSupport};
  /** @type {User} */
  get salesSupport(){return this._one['sales-support']};

  /** @param {Company} company **/
  set company(company){this._one['company'] = company};
  /** @type {Company} */
  get company(){return this._one['company']};

  /** @param {MealPlan} mealPlan **/
  set mealPlan(mealPlan){this._one['meal-plan'] = mealPlan};
  /** @type {MealPlan} */
  get mealPlan(){return this._one['meal-plan']};

  /** @param {InvoicingTaxRate} taxRate **/
  set taxRate(taxRate){this._one['tax-rate'] = taxRate};
  /** @type {InvoicingTaxRate} */
  get taxRate(){return this._one['tax-rate']};

  /** @param {GiftbitCard} giftbitCard **/
  set giftbitCard(giftbitCard){this._one['giftbit-card'] = giftbitCard};
  /** @type {GiftbitCard} */
  get giftbitCard(){return this._one['giftbit-card']};



  /** @param {Area[]} areas **/
  set areas(areas){this._many['areas'] = areas};
  /** @type {Area[]} */
  get areas(){return this._many['areas']};

  /** @param {DeliveryLocation[]} deliveryLocations **/
  set deliveryLocations(deliveryLocations){this._many['delivery-locations'] = deliveryLocations};
  /** @type {DeliveryLocation[]} */
  get deliveryLocations(){return this._many['delivery-locations']};

  /** @param {PaymentCard[]} paymentCards **/
  set paymentCards(paymentCards){this._many['payment-cards'] = paymentCards};
  /** @type {PaymentCard[]} */
  get paymentCards(){return this._many['payment-cards']};

  /** @param {Contact[]} adminContacts **/
  set adminContacts(adminContacts){this._many['admin-contacts'] = adminContacts};
  /** @type {Contact[]} */
  get adminContacts(){return this._many['admin-contacts']};

  /** @param {User[]} admins **/
  set admins(admins){this._many['admins'] = admins};
  /** @type {User[]} */
  get admins(){return this._many['admins']};

  /** @param {Contact[]} orderContacts **/
  set orderContacts(orderContacts){this._many['order-contacts'] = orderContacts};
  /** @type {Contact[]} */
  get orderContacts(){return this._many['order-contacts']};

  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};

  /** @param {Team[]} teams **/
  set teams(teams){this._many['teams'] = teams};
  /** @type {Team[]} */
  get teams(){return this._many['teams']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};

  /** @param {GiftbitGift[]} giftbitGifts **/
  set giftbitGifts(giftbitGifts){this._many['giftbit-gifts'] = giftbitGifts};
  /** @type {GiftbitGift[]} */
  get giftbitGifts(){return this._many['giftbit-gifts']};

  /** @param {GiftbitError[]} giftbitErrors **/
  set giftbitErrors(giftbitErrors){this._many['giftbit-errors'] = giftbitErrors};
  /** @type {GiftbitError[]} */
  get giftbitErrors(){return this._many['giftbit-errors']};


}

/** @class ClientDiscount
  * @extends {Resource}
  **/
export class ClientDiscount extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'client-discounts', attributes, one, many);
  }

  // attributes

  /** @param {string} accountingCode **/
  set accountingCode(accountingCode){this._attributes['accounting-code'] = accountingCode};
  /** @type {string} */
  get accountingCode(){return this._attributes['accounting-code'];};

  /** @param {string} amount **/
  set amount(amount){this._attributes['amount'] = amount};
  /** @type {string} */
  get amount(){return this._attributes['amount'];};

  /** @param {string} amountType **/
  set amountType(amountType){this._attributes['amount-type'] = amountType};
  /** @type {string} */
  get amountType(){return this._attributes['amount-type'];};

  /** @param {string} caseId **/
  set caseId(caseId){this._attributes['case-id'] = caseId};
  /** @type {string} */
  get caseId(){return this._attributes['case-id'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class ClientOrderInvoice
  * @extends {Resource}
  **/
export class ClientOrderInvoice extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'client-order-invoices', attributes, one, many);
  }

  // attributes

  /** @param {any} summary **/
  set summary(summary){this._attributes['summary'] = summary};
  /** @type {any} */
  get summary(){return this._attributes['summary'];};


  // relationships





}

/** @class ClientSignup
  * @extends {Resource}
  **/
export class ClientSignup extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'client-signups', attributes, one, many);
  }

  // attributes

  /** @param {any} companyName **/
  set companyName(companyName){this._attributes['company-name'] = companyName};
  /** @type {any} */
  get companyName(){return this._attributes['company-name'];};

  /** @param {any} password **/
  set password(password){this._attributes['password'] = password};
  /** @type {any} */
  get password(){return this._attributes['password'];};

  /** @param {any} passwordConfirmation **/
  set passwordConfirmation(passwordConfirmation){this._attributes['password-confirmation'] = passwordConfirmation};
  /** @type {any} */
  get passwordConfirmation(){return this._attributes['password-confirmation'];};

  /** @param {any} rawAddress **/
  set rawAddress(rawAddress){this._attributes['raw-address'] = rawAddress};
  /** @type {any} */
  get rawAddress(){return this._attributes['raw-address'];};

  /** @param {any} unitNumber **/
  set unitNumber(unitNumber){this._attributes['unit-number'] = unitNumber};
  /** @type {any} */
  get unitNumber(){return this._attributes['unit-number'];};

  /** @param {any} floor **/
  set floor(floor){this._attributes['floor'] = floor};
  /** @type {any} */
  get floor(){return this._attributes['floor'];};

  /** @param {any} buzzer **/
  set buzzer(buzzer){this._attributes['buzzer'] = buzzer};
  /** @type {any} */
  get buzzer(){return this._attributes['buzzer'];};

  /** @param {any} contactPerson **/
  set contactPerson(contactPerson){this._attributes['contact-person'] = contactPerson};
  /** @type {any} */
  get contactPerson(){return this._attributes['contact-person'];};

  /** @param {any} orderFrequency **/
  set orderFrequency(orderFrequency){this._attributes['order-frequency'] = orderFrequency};
  /** @type {any} */
  get orderFrequency(){return this._attributes['order-frequency'];};

  /** @param {any} orderSize **/
  set orderSize(orderSize){this._attributes['order-size'] = orderSize};
  /** @type {any} */
  get orderSize(){return this._attributes['order-size'];};

  /** @param {any} orderBudget **/
  set orderBudget(orderBudget){this._attributes['order-budget'] = orderBudget};
  /** @type {any} */
  get orderBudget(){return this._attributes['order-budget'];};

  /** @param {any} firstName **/
  set firstName(firstName){this._attributes['first-name'] = firstName};
  /** @type {any} */
  get firstName(){return this._attributes['first-name'];};

  /** @param {any} lastName **/
  set lastName(lastName){this._attributes['last-name'] = lastName};
  /** @type {any} */
  get lastName(){return this._attributes['last-name'];};

  /** @param {any} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {any} */
  get email(){return this._attributes['email'];};

  /** @param {any} phoneNumber **/
  set phoneNumber(phoneNumber){this._attributes['phone-number'] = phoneNumber};
  /** @type {any} */
  get phoneNumber(){return this._attributes['phone-number'];};

  /** @param {any} extension **/
  set extension(extension){this._attributes['extension'] = extension};
  /** @type {any} */
  get extension(){return this._attributes['extension'];};

  /** @param {any} smsNumber **/
  set smsNumber(smsNumber){this._attributes['sms-number'] = smsNumber};
  /** @type {any} */
  get smsNumber(){return this._attributes['sms-number'];};

  /** @param {any} consentToNewTerms **/
  set consentToNewTerms(consentToNewTerms){this._attributes['consent-to-new-terms'] = consentToNewTerms};
  /** @type {any} */
  get consentToNewTerms(){return this._attributes['consent-to-new-terms'];};

  /** @param {any} receiveNewsletters **/
  set receiveNewsletters(receiveNewsletters){this._attributes['receive-newsletters'] = receiveNewsletters};
  /** @type {any} */
  get receiveNewsletters(){return this._attributes['receive-newsletters'];};

  /** @param {any} smsEnabled **/
  set smsEnabled(smsEnabled){this._attributes['sms-enabled'] = smsEnabled};
  /** @type {any} */
  get smsEnabled(){return this._attributes['sms-enabled'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};

  /** @param {QualifyingQuestion} qualifyingQuestion **/
  set qualifyingQuestion(qualifyingQuestion){this._one['qualifying-question'] = qualifyingQuestion};
  /** @type {QualifyingQuestion} */
  get qualifyingQuestion(){return this._one['qualifying-question']};

  /** @param {Location} billingLocation **/
  set billingLocation(billingLocation){this._one['billing-location'] = billingLocation};
  /** @type {Location} */
  get billingLocation(){return this._one['billing-location']};

  /** @param {Location} deliveryLocation **/
  set deliveryLocation(deliveryLocation){this._one['delivery-location'] = deliveryLocation};
  /** @type {Location} */
  get deliveryLocation(){return this._one['delivery-location']};

  /** @param {Contact} billingContact **/
  set billingContact(billingContact){this._one['billing-contact'] = billingContact};
  /** @type {Contact} */
  get billingContact(){return this._one['billing-contact']};

  /** @param {Contact} contact **/
  set contact(contact){this._one['contact'] = contact};
  /** @type {Contact} */
  get contact(){return this._one['contact']};



  /** @param {Client[]} clients **/
  set clients(clients){this._many['clients'] = clients};
  /** @type {Client[]} */
  get clients(){return this._many['clients']};

  /** @param {Area[]} areas **/
  set areas(areas){this._many['areas'] = areas};
  /** @type {Area[]} */
  get areas(){return this._many['areas']};


}

/** @class CommunicationPreference
  * @extends {Resource}
  **/
export class CommunicationPreference extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'communication-preferences', attributes, one, many);
  }

  // attributes

  /** @param {boolean} sms **/
  set sms(sms){this._attributes['sms'] = sms};
  /** @type {boolean} */
  get sms(){return this._attributes['sms'];};

  /** @param {boolean} emailFeedback **/
  set emailFeedback(emailFeedback){this._attributes['email-feedback'] = emailFeedback};
  /** @type {boolean} */
  get emailFeedback(){return this._attributes['email-feedback'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};




}

/** @class Company
  * @extends {Resource}
  **/
export class Company extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'companies', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} clientCount **/
  set clientCount(clientCount){this._attributes['client-count'] = clientCount};
  /** @type {string} */
  get clientCount(){return this._attributes['client-count'];};


  // relationships




  /** @param {Client[]} clients **/
  set clients(clients){this._many['clients'] = clients};
  /** @type {Client[]} */
  get clients(){return this._many['clients']};


}

/** @class Contact
  * @extends {Resource}
  **/
export class Contact extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'contacts', attributes, one, many);
  }

  // attributes

  /** @param {string} firstName **/
  set firstName(firstName){this._attributes['first-name'] = firstName};
  /** @type {string} */
  get firstName(){return this._attributes['first-name'];};

  /** @param {string} lastName **/
  set lastName(lastName){this._attributes['last-name'] = lastName};
  /** @type {string} */
  get lastName(){return this._attributes['last-name'];};

  /** @param {string} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {string} */
  get email(){return this._attributes['email'];};

  /** @param {string} extension **/
  set extension(extension){this._attributes['extension'] = extension};
  /** @type {string} */
  get extension(){return this._attributes['extension'];};

  /** @param {string} phoneNumber **/
  set phoneNumber(phoneNumber){this._attributes['phone-number'] = phoneNumber};
  /** @type {string} */
  get phoneNumber(){return this._attributes['phone-number'];};

  /** @param {string} smsNumber **/
  set smsNumber(smsNumber){this._attributes['sms-number'] = smsNumber};
  /** @type {string} */
  get smsNumber(){return this._attributes['sms-number'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships





}

/** @class Courier
  * @extends {Resource}
  **/
export class Courier extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'couriers', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} legalName **/
  set legalName(legalName){this._attributes['legal-name'] = legalName};
  /** @type {string} */
  get legalName(){return this._attributes['legal-name'];};

  /** @param {string} driverCount **/
  set driverCount(driverCount){this._attributes['driver-count'] = driverCount};
  /** @type {string} */
  get driverCount(){return this._attributes['driver-count'];};

  /** @param {string} ownerEmail **/
  set ownerEmail(ownerEmail){this._attributes['owner-email'] = ownerEmail};
  /** @type {string} */
  get ownerEmail(){return this._attributes['owner-email'];};


  // relationships


  /** @param {User} owner **/
  set owner(owner){this._one['owner'] = owner};
  /** @type {User} */
  get owner(){return this._one['owner']};



  /** @param {User[]} drivers **/
  set drivers(drivers){this._many['drivers'] = drivers};
  /** @type {User[]} */
  get drivers(){return this._many['drivers']};

  /** @param {Area[]} areas **/
  set areas(areas){this._many['areas'] = areas};
  /** @type {Area[]} */
  get areas(){return this._many['areas']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};


}

/** @class DeliveryCase
  * @extends {Resource}
  **/
export class DeliveryCase extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'delivery-cases', attributes, one, many);
  }

  // attributes

  /** @param {string} caseType **/
  set caseType(caseType){this._attributes['case-type'] = caseType};
  /** @type {string} */
  get caseType(){return this._attributes['case-type'];};

  /** @param {string} value **/
  set value(value){this._attributes['value'] = value};
  /** @type {string} */
  get value(){return this._attributes['value'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class DeliveryLocation
  * @extends {Resource}
  **/
export class DeliveryLocation extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'delivery-locations', attributes, one, many);
  }

  // attributes

  /** @param {any} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {any} */
  get name(){return this._attributes['name'];};

  /** @param {any} addressCode **/
  set addressCode(addressCode){this._attributes['address-code'] = addressCode};
  /** @type {any} */
  get addressCode(){return this._attributes['address-code'];};

  /** @param {any} building **/
  set building(building){this._attributes['building'] = building};
  /** @type {any} */
  get building(){return this._attributes['building'];};

  /** @param {any} buzzer **/
  set buzzer(buzzer){this._attributes['buzzer'] = buzzer};
  /** @type {any} */
  get buzzer(){return this._attributes['buzzer'];};

  /** @param {any} city **/
  set city(city){this._attributes['city'] = city};
  /** @type {any} */
  get city(){return this._attributes['city'];};

  /** @param {any} country **/
  set country(country){this._attributes['country'] = country};
  /** @type {any} */
  get country(){return this._attributes['country'];};

  /** @param {any} floor **/
  set floor(floor){this._attributes['floor'] = floor};
  /** @type {any} */
  get floor(){return this._attributes['floor'];};

  /** @param {any} latitude **/
  set latitude(latitude){this._attributes['latitude'] = latitude};
  /** @type {any} */
  get latitude(){return this._attributes['latitude'];};

  /** @param {any} locationId **/
  set locationId(locationId){this._attributes['location-id'] = locationId};
  /** @type {any} */
  get locationId(){return this._attributes['location-id'];};

  /** @param {any} longitude **/
  set longitude(longitude){this._attributes['longitude'] = longitude};
  /** @type {any} */
  get longitude(){return this._attributes['longitude'];};

  /** @param {any} province **/
  set province(province){this._attributes['province'] = province};
  /** @type {any} */
  get province(){return this._attributes['province'];};

  /** @param {any} street **/
  set street(street){this._attributes['street'] = street};
  /** @type {any} */
  get street(){return this._attributes['street'];};

  /** @param {any} unitNumber **/
  set unitNumber(unitNumber){this._attributes['unit-number'] = unitNumber};
  /** @type {any} */
  get unitNumber(){return this._attributes['unit-number'];};

  /** @param {any} isDefault **/
  set isDefault(isDefault){this._attributes['default'] = isDefault};
  /** @type {any} */
  get isDefault(){return this._attributes['default'];};

  /** @param {any} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {any} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {Location} location **/
  set location(location){this._one['location'] = location};
  /** @type {Location} */
  get location(){return this._one['location']};




}

/** @class DeskCase
  * @extends {Resource}
  **/
export class DeskCase extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'desk-cases', attributes, one, many);
  }

  // attributes

  /** @param {string} caseRequest **/
  set caseRequest(caseRequest){this._attributes['case-request'] = caseRequest};
  /** @type {string} */
  get caseRequest(){return this._attributes['case-request'];};

  /** @param {string} caseId **/
  set caseId(caseId){this._attributes['case-id'] = caseId};
  /** @type {string} */
  get caseId(){return this._attributes['case-id'];};

  /** @param {string} caseMessage **/
  set caseMessage(caseMessage){this._attributes['case-message'] = caseMessage};
  /** @type {string} */
  get caseMessage(){return this._attributes['case-message'];};

  /** @param {string} caseStatus **/
  set caseStatus(caseStatus){this._attributes['case-status'] = caseStatus};
  /** @type {string} */
  get caseStatus(){return this._attributes['case-status'];};

  /** @param {string} caseValue **/
  set caseValue(caseValue){this._attributes['case-value'] = caseValue};
  /** @type {string} */
  get caseValue(){return this._attributes['case-value'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class DietaryTag
  * @extends {Resource}
  **/
export class DietaryTag extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'dietary-tags', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} slug **/
  set slug(slug){this._attributes['slug'] = slug};
  /** @type {string} */
  get slug(){return this._attributes['slug'];};

  /** @param {string} abbreviation **/
  set abbreviation(abbreviation){this._attributes['abbreviation'] = abbreviation};
  /** @type {string} */
  get abbreviation(){return this._attributes['abbreviation'];};

  /** @param {string} color **/
  set color(color){this._attributes['color'] = color};
  /** @type {string} */
  get color(){return this._attributes['color'];};


  // relationships




  /** @param {MenuOptionItem[]} menuOptionItems **/
  set menuOptionItems(menuOptionItems){this._many['menu-option-items'] = menuOptionItems};
  /** @type {MenuOptionItem[]} */
  get menuOptionItems(){return this._many['menu-option-items']};


}

/** @class DiscountCode
  * @extends {Resource}
  **/
export class DiscountCode extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'discount-codes', attributes, one, many);
  }

  // attributes

  /** @param {any} code **/
  set code(code){this._attributes['code'] = code};
  /** @type {any} */
  get code(){return this._attributes['code'];};

  /** @param {any} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {any} */
  get description(){return this._attributes['description'];};

  /** @param {any} discountType **/
  set discountType(discountType){this._attributes['discount-type'] = discountType};
  /** @type {any} */
  get discountType(){return this._attributes['discount-type'];};


  // relationships





}

/** @class DriverDay
  * @extends {Resource}
  **/
export class DriverDay extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'driver-days', attributes, one, many);
  }

  // attributes

  /** @param {jsonb} pings **/
  set pings(pings){this._attributes['pings'] = pings};
  /** @type {jsonb} */
  get pings(){return this._attributes['pings'];};


  // relationships


  /** @param {User} driver **/
  set driver(driver){this._one['driver'] = driver};
  /** @type {User} */
  get driver(){return this._one['driver']};




}

/** @class DriverPayment
  * @extends {Resource}
  **/
export class DriverPayment extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'driver-payments', attributes, one, many);
  }

  // attributes

  /** @param {float} amount **/
  set amount(amount){this._attributes['amount'] = amount};
  /** @type {float} */
  get amount(){return this._attributes['amount'];};

  /** @param {date} deliveryDate **/
  set deliveryDate(deliveryDate){this._attributes['delivery-date'] = deliveryDate};
  /** @type {date} */
  get deliveryDate(){return this._attributes['delivery-date'];};

  /** @param {integer} driverId **/
  set driverId(driverId){this._attributes['driver-id'] = driverId};
  /** @type {integer} */
  get driverId(){return this._attributes['driver-id'];};

  /** @param {boolean} manuallyAdded **/
  set manuallyAdded(manuallyAdded){this._attributes['manually-added'] = manuallyAdded};
  /** @type {boolean} */
  get manuallyAdded(){return this._attributes['manually-added'];};

  /** @param {string} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {string} */
  get notes(){return this._attributes['notes'];};

  /** @param {integer} orderId **/
  set orderId(orderId){this._attributes['order-id'] = orderId};
  /** @type {integer} */
  get orderId(){return this._attributes['order-id'];};

  /** @param {integer} driverPayrollRunId **/
  set driverPayrollRunId(driverPayrollRunId){this._attributes['driver-payroll-run-id'] = driverPayrollRunId};
  /** @type {integer} */
  get driverPayrollRunId(){return this._attributes['driver-payroll-run-id'];};

  /** @param {string} ruleName **/
  set ruleName(ruleName){this._attributes['rule-name'] = ruleName};
  /** @type {string} */
  get ruleName(){return this._attributes['rule-name'];};

  /** @param {string} orderIdentifier **/
  set orderIdentifier(orderIdentifier){this._attributes['order-identifier'] = orderIdentifier};
  /** @type {string} */
  get orderIdentifier(){return this._attributes['order-identifier'];};

  /** @param {date} orderDeliverAt **/
  set orderDeliverAt(orderDeliverAt){this._attributes['order-deliver-at'] = orderDeliverAt};
  /** @type {date} */
  get orderDeliverAt(){return this._attributes['order-deliver-at'];};

  /** @param {date} orderPickupAt **/
  set orderPickupAt(orderPickupAt){this._attributes['order-pickup-at'] = orderPickupAt};
  /** @type {date} */
  get orderPickupAt(){return this._attributes['order-pickup-at'];};

  /** @param {date} orderDeliveredAt **/
  set orderDeliveredAt(orderDeliveredAt){this._attributes['order-delivered-at'] = orderDeliveredAt};
  /** @type {date} */
  get orderDeliveredAt(){return this._attributes['order-delivered-at'];};


  // relationships


  /** @param {DriverPayrollRun} driverPayrollRun **/
  set driverPayrollRun(driverPayrollRun){this._one['driver-payroll-run'] = driverPayrollRun};
  /** @type {DriverPayrollRun} */
  get driverPayrollRun(){return this._one['driver-payroll-run']};




}

/** @class DriverPayrollRun
  * @extends {Resource}
  **/
export class DriverPayrollRun extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'driver-payroll-runs', attributes, one, many);
  }

  // attributes

  /** @param {json} amounts **/
  set amounts(amounts){this._attributes['amounts'] = amounts};
  /** @type {json} */
  get amounts(){return this._attributes['amounts'];};

  /** @param {json} approvals **/
  set approvals(approvals){this._attributes['approvals'] = approvals};
  /** @type {json} */
  get approvals(){return this._attributes['approvals'];};

  /** @param {integer} driverId **/
  set driverId(driverId){this._attributes['driver-id'] = driverId};
  /** @type {integer} */
  get driverId(){return this._attributes['driver-id'];};

  /** @param {integer} payrollRunId **/
  set payrollRunId(payrollRunId){this._attributes['payroll-run-id'] = payrollRunId};
  /** @type {integer} */
  get payrollRunId(){return this._attributes['payroll-run-id'];};


  // relationships


  /** @param {Driver} driver **/
  set driver(driver){this._one['driver'] = driver};
  /** @type {Driver} */
  get driver(){return this._one['driver']};

  /** @param {PayrollRun} payrollRun **/
  set payrollRun(payrollRun){this._one['payroll-run'] = payrollRun};
  /** @type {PayrollRun} */
  get payrollRun(){return this._one['payroll-run']};




}

/** @class DriverPing
  * @extends {Resource}
  **/
export class DriverPing extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'driver-pings', attributes, one, many);
  }

  // attributes

  /** @param {float} longitude **/
  set longitude(longitude){this._attributes['longitude'] = longitude};
  /** @type {float} */
  get longitude(){return this._attributes['longitude'];};

  /** @param {float} latitude **/
  set latitude(latitude){this._attributes['latitude'] = latitude};
  /** @type {float} */
  get latitude(){return this._attributes['latitude'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};




}

/** @class DriverResource
  * @extends {Resource}
  **/
export class DriverResource extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'driver-resources', attributes, one, many);
  }

  // attributes

  /** @param {integer} driverId **/
  set driverId(driverId){this._attributes['driver-id'] = driverId};
  /** @type {integer} */
  get driverId(){return this._attributes['driver-id'];};

  /** @param {string} firstName **/
  set firstName(firstName){this._attributes['first-name'] = firstName};
  /** @type {string} */
  get firstName(){return this._attributes['first-name'];};

  /** @param {string} lastName **/
  set lastName(lastName){this._attributes['last-name'] = lastName};
  /** @type {string} */
  get lastName(){return this._attributes['last-name'];};


  // relationships





}

/** @class DriverWeek
  * @extends {Resource}
  **/
export class DriverWeek extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'driver-weeks', attributes, one, many);
  }

  // attributes

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {Date} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {Date} monday **/
  set monday(monday){this._attributes['monday'] = monday};
  /** @type {Date} */
  get monday(){return this._attributes['monday'];};

  /** @param {Date} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {Date} */
  get notes(){return this._attributes['notes'];};

  /** @param {Date} availableMondayBreakfast **/
  set availableMondayBreakfast(availableMondayBreakfast){this._attributes['available-monday-breakfast'] = availableMondayBreakfast};
  /** @type {Date} */
  get availableMondayBreakfast(){return this._attributes['available-monday-breakfast'];};

  /** @param {Date} availableMondayLunch **/
  set availableMondayLunch(availableMondayLunch){this._attributes['available-monday-lunch'] = availableMondayLunch};
  /** @type {Date} */
  get availableMondayLunch(){return this._attributes['available-monday-lunch'];};

  /** @param {Date} availableMondayDinner **/
  set availableMondayDinner(availableMondayDinner){this._attributes['available-monday-dinner'] = availableMondayDinner};
  /** @type {Date} */
  get availableMondayDinner(){return this._attributes['available-monday-dinner'];};

  /** @param {Date} availableTuesdayBreakfast **/
  set availableTuesdayBreakfast(availableTuesdayBreakfast){this._attributes['available-tuesday-breakfast'] = availableTuesdayBreakfast};
  /** @type {Date} */
  get availableTuesdayBreakfast(){return this._attributes['available-tuesday-breakfast'];};

  /** @param {Date} availableTuesdayLunch **/
  set availableTuesdayLunch(availableTuesdayLunch){this._attributes['available-tuesday-lunch'] = availableTuesdayLunch};
  /** @type {Date} */
  get availableTuesdayLunch(){return this._attributes['available-tuesday-lunch'];};

  /** @param {Date} availableTuesdayDinner **/
  set availableTuesdayDinner(availableTuesdayDinner){this._attributes['available-tuesday-dinner'] = availableTuesdayDinner};
  /** @type {Date} */
  get availableTuesdayDinner(){return this._attributes['available-tuesday-dinner'];};

  /** @param {Date} availableWednesdayBreakfast **/
  set availableWednesdayBreakfast(availableWednesdayBreakfast){this._attributes['available-wednesday-breakfast'] = availableWednesdayBreakfast};
  /** @type {Date} */
  get availableWednesdayBreakfast(){return this._attributes['available-wednesday-breakfast'];};

  /** @param {Date} availableWednesdayLunch **/
  set availableWednesdayLunch(availableWednesdayLunch){this._attributes['available-wednesday-lunch'] = availableWednesdayLunch};
  /** @type {Date} */
  get availableWednesdayLunch(){return this._attributes['available-wednesday-lunch'];};

  /** @param {Date} availableWednesdayDinner **/
  set availableWednesdayDinner(availableWednesdayDinner){this._attributes['available-wednesday-dinner'] = availableWednesdayDinner};
  /** @type {Date} */
  get availableWednesdayDinner(){return this._attributes['available-wednesday-dinner'];};

  /** @param {Date} availableThursdayBreakfast **/
  set availableThursdayBreakfast(availableThursdayBreakfast){this._attributes['available-thursday-breakfast'] = availableThursdayBreakfast};
  /** @type {Date} */
  get availableThursdayBreakfast(){return this._attributes['available-thursday-breakfast'];};

  /** @param {Date} availableThursdayLunch **/
  set availableThursdayLunch(availableThursdayLunch){this._attributes['available-thursday-lunch'] = availableThursdayLunch};
  /** @type {Date} */
  get availableThursdayLunch(){return this._attributes['available-thursday-lunch'];};

  /** @param {Date} availableThursdayDinner **/
  set availableThursdayDinner(availableThursdayDinner){this._attributes['available-thursday-dinner'] = availableThursdayDinner};
  /** @type {Date} */
  get availableThursdayDinner(){return this._attributes['available-thursday-dinner'];};

  /** @param {Date} availableFridayBreakfast **/
  set availableFridayBreakfast(availableFridayBreakfast){this._attributes['available-friday-breakfast'] = availableFridayBreakfast};
  /** @type {Date} */
  get availableFridayBreakfast(){return this._attributes['available-friday-breakfast'];};

  /** @param {Date} availableFridayLunch **/
  set availableFridayLunch(availableFridayLunch){this._attributes['available-friday-lunch'] = availableFridayLunch};
  /** @type {Date} */
  get availableFridayLunch(){return this._attributes['available-friday-lunch'];};

  /** @param {Date} availableFridayDinner **/
  set availableFridayDinner(availableFridayDinner){this._attributes['available-friday-dinner'] = availableFridayDinner};
  /** @type {Date} */
  get availableFridayDinner(){return this._attributes['available-friday-dinner'];};

  /** @param {Date} availableSaturdayBreakfast **/
  set availableSaturdayBreakfast(availableSaturdayBreakfast){this._attributes['available-saturday-breakfast'] = availableSaturdayBreakfast};
  /** @type {Date} */
  get availableSaturdayBreakfast(){return this._attributes['available-saturday-breakfast'];};

  /** @param {Date} availableSaturdayLunch **/
  set availableSaturdayLunch(availableSaturdayLunch){this._attributes['available-saturday-lunch'] = availableSaturdayLunch};
  /** @type {Date} */
  get availableSaturdayLunch(){return this._attributes['available-saturday-lunch'];};

  /** @param {Date} availableSaturdayDinner **/
  set availableSaturdayDinner(availableSaturdayDinner){this._attributes['available-saturday-dinner'] = availableSaturdayDinner};
  /** @type {Date} */
  get availableSaturdayDinner(){return this._attributes['available-saturday-dinner'];};

  /** @param {Date} availableSundayBreakfast **/
  set availableSundayBreakfast(availableSundayBreakfast){this._attributes['available-sunday-breakfast'] = availableSundayBreakfast};
  /** @type {Date} */
  get availableSundayBreakfast(){return this._attributes['available-sunday-breakfast'];};

  /** @param {Date} availableSundayLunch **/
  set availableSundayLunch(availableSundayLunch){this._attributes['available-sunday-lunch'] = availableSundayLunch};
  /** @type {Date} */
  get availableSundayLunch(){return this._attributes['available-sunday-lunch'];};

  /** @param {Date} availableSundayDinner **/
  set availableSundayDinner(availableSundayDinner){this._attributes['available-sunday-dinner'] = availableSundayDinner};
  /** @type {Date} */
  get availableSundayDinner(){return this._attributes['available-sunday-dinner'];};


  // relationships


  /** @param {User} driver **/
  set driver(driver){this._one['driver'] = driver};
  /** @type {User} */
  get driver(){return this._one['driver']};




}

/** @class EmailMessage
  * @extends {Resource}
  **/
export class EmailMessage extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'email-messages', attributes, one, many);
  }

  // attributes

  /** @param {string} messageId **/
  set messageId(messageId){this._attributes['message-id'] = messageId};
  /** @type {string} */
  get messageId(){return this._attributes['message-id'];};

  /** @param {string} recipients **/
  set recipients(recipients){this._attributes['recipients'] = recipients};
  /** @type {string} */
  get recipients(){return this._attributes['recipients'];};

  /** @param {string} message **/
  set message(message){this._attributes['message'] = message};
  /** @type {string} */
  get message(){return this._attributes['message'];};

  /** @param {string} subject **/
  set subject(subject){this._attributes['subject'] = subject};
  /** @type {string} */
  get subject(){return this._attributes['subject'];};

  /** @param {string} event **/
  set event(event){this._attributes['event'] = event};
  /** @type {string} */
  get event(){return this._attributes['event'];};

  /** @param {string} mailableId **/
  set mailableId(mailableId){this._attributes['mailable-id'] = mailableId};
  /** @type {string} */
  get mailableId(){return this._attributes['mailable-id'];};

  /** @param {string} timestamp **/
  set timestamp(timestamp){this._attributes['timestamp'] = timestamp};
  /** @type {string} */
  get timestamp(){return this._attributes['timestamp'];};

  /** @param {string} messageType **/
  set messageType(messageType){this._attributes['message-type'] = messageType};
  /** @type {string} */
  get messageType(){return this._attributes['message-type'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class Event
  * @extends {Resource}
  **/
export class Event extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'events', attributes, one, many);
  }

  // attributes

  /** @param {any} event **/
  set event(event){this._attributes['event'] = event};
  /** @type {any} */
  get event(){return this._attributes['event'];};

  /** @param {any} timestamp **/
  set timestamp(timestamp){this._attributes['timestamp'] = timestamp};
  /** @type {any} */
  get timestamp(){return this._attributes['timestamp'];};

  /** @param {any} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {any} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {any} eventTimestamp **/
  set eventTimestamp(eventTimestamp){this._attributes['event-timestamp'] = eventTimestamp};
  /** @type {any} */
  get eventTimestamp(){return this._attributes['event-timestamp'];};


  // relationships





}

/** @class GiftbitCard
  * @extends {Resource}
  **/
export class GiftbitCard extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'giftbit-cards', attributes, one, many);
  }

  // attributes

  /** @param {any} balance **/
  set balance(balance){this._attributes['balance'] = balance};
  /** @type {any} */
  get balance(){return this._attributes['balance'];};

  /** @param {any} transactions **/
  set transactions(transactions){this._attributes['transactions'] = transactions};
  /** @type {any} */
  get transactions(){return this._attributes['transactions'];};


  // relationships





}

/** @class GiftbitError
  * @extends {Resource}
  **/
export class GiftbitError extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'giftbit-errors', attributes, one, many);
  }

  // attributes

  /** @param {string} log **/
  set log(log){this._attributes['log'] = log};
  /** @type {string} */
  get log(){return this._attributes['log'];};

  /** @param {string} isResolved **/
  set isResolved(isResolved){this._attributes['is-resolved'] = isResolved};
  /** @type {string} */
  get isResolved(){return this._attributes['is-resolved'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class GiftbitGift
  * @extends {Resource}
  **/
export class GiftbitGift extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'giftbit-gifts', attributes, one, many);
  }

  // attributes

  /** @param {any} isActive **/
  set isActive(isActive){this._attributes['is-active'] = isActive};
  /** @type {any} */
  get isActive(){return this._attributes['is-active'];};

  /** @param {any} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {any} */
  get name(){return this._attributes['name'];};

  /** @param {any} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {any} */
  get description(){return this._attributes['description'];};

  /** @param {any} imageUrl **/
  set imageUrl(imageUrl){this._attributes['image-url'] = imageUrl};
  /** @type {any} */
  get imageUrl(){return this._attributes['image-url'];};

  /** @param {any} tax **/
  set tax(tax){this._attributes['tax'] = tax};
  /** @type {any} */
  get tax(){return this._attributes['tax'];};

  /** @param {any} currencyisocode **/
  set currencyisocode(currencyisocode){this._attributes['currencyisocode'] = currencyisocode};
  /** @type {any} */
  get currencyisocode(){return this._attributes['currencyisocode'];};

  /** @param {any} maxPriceInCents **/
  set maxPriceInCents(maxPriceInCents){this._attributes['max-price-in-cents'] = maxPriceInCents};
  /** @type {any} */
  get maxPriceInCents(){return this._attributes['max-price-in-cents'];};

  /** @param {any} minPriceInCents **/
  set minPriceInCents(minPriceInCents){this._attributes['min-price-in-cents'] = minPriceInCents};
  /** @type {any} */
  get minPriceInCents(){return this._attributes['min-price-in-cents'];};

  /** @param {any} maxFoodeePriceInCents **/
  set maxFoodeePriceInCents(maxFoodeePriceInCents){this._attributes['max-foodee-price-in-cents'] = maxFoodeePriceInCents};
  /** @type {any} */
  get maxFoodeePriceInCents(){return this._attributes['max-foodee-price-in-cents'];};

  /** @param {any} minFoodeePriceInCents **/
  set minFoodeePriceInCents(minFoodeePriceInCents){this._attributes['min-foodee-price-in-cents'] = minFoodeePriceInCents};
  /** @type {any} */
  get minFoodeePriceInCents(){return this._attributes['min-foodee-price-in-cents'];};

  /** @param {any} dollarsToPoints **/
  set dollarsToPoints(dollarsToPoints){this._attributes['dollars-to-points'] = dollarsToPoints};
  /** @type {any} */
  get dollarsToPoints(){return this._attributes['dollars-to-points'];};


  // relationships





}

/** @class GroupOrderMember
  * @extends {Resource}
  **/
export class GroupOrderMember extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'group-order-members', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {string} */
  get email(){return this._attributes['email'];};

  /** @param {string} phoneNumber **/
  set phoneNumber(phoneNumber){this._attributes['phone-number'] = phoneNumber};
  /** @type {string} */
  get phoneNumber(){return this._attributes['phone-number'];};

  /** @param {string} department **/
  set department(department){this._attributes['department'] = department};
  /** @type {string} */
  get department(){return this._attributes['department'];};

  /** @param {string} termsAcceptedAt **/
  set termsAcceptedAt(termsAcceptedAt){this._attributes['terms-accepted-at'] = termsAcceptedAt};
  /** @type {string} */
  get termsAcceptedAt(){return this._attributes['terms-accepted-at'];};

  /** @param {string} stripeChargeToken **/
  set stripeChargeToken(stripeChargeToken){this._attributes['stripe-charge-token'] = stripeChargeToken};
  /** @type {string} */
  get stripeChargeToken(){return this._attributes['stripe-charge-token'];};

  /** @param {string} notifyByEmailOnDelivery **/
  set notifyByEmailOnDelivery(notifyByEmailOnDelivery){this._attributes['notify-by-email-on-delivery'] = notifyByEmailOnDelivery};
  /** @type {string} */
  get notifyByEmailOnDelivery(){return this._attributes['notify-by-email-on-delivery'];};

  /** @param {string} notifyBySMSOnDelivery **/
  set notifyBySMSOnDelivery(notifyBySMSOnDelivery){this._attributes['notify-by-sms-on-delivery'] = notifyBySMSOnDelivery};
  /** @type {string} */
  get notifyBySMSOnDelivery(){return this._attributes['notify-by-sms-on-delivery'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};



  /** @param {OrderItem[]} orderItems **/
  set orderItems(orderItems){this._many['order-items'] = orderItems};
  /** @type {OrderItem[]} */
  get orderItems(){return this._many['order-items']};


}

/** @class Invoice
  * @extends {Resource}
  **/
export class Invoice extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'invoices', attributes, one, many);
  }

  // attributes

  /** @param {any} clientInvoice **/
  set clientInvoice(clientInvoice){this._attributes['client-invoice'] = clientInvoice};
  /** @type {any} */
  get clientInvoice(){return this._attributes['client-invoice'];};

  /** @param {any} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {any} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships





}

/** @class InvoicingTaxRate
  * @extends {Resource}
  **/
export class InvoicingTaxRate extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'invoicing-tax-rates', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} rate **/
  set rate(rate){this._attributes['rate'] = rate};
  /** @type {string} */
  get rate(){return this._attributes['rate'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} isValid **/
  set isValid(isValid){this._attributes['is-valid'] = isValid};
  /** @type {string} */
  get isValid(){return this._attributes['is-valid'];};

  /** @param {string} isDefault **/
  set isDefault(isDefault){this._attributes['is-default'] = isDefault};
  /** @type {string} */
  get isDefault(){return this._attributes['is-default'];};

  /** @param {string} taxCode **/
  set taxCode(taxCode){this._attributes['tax-code'] = taxCode};
  /** @type {string} */
  get taxCode(){return this._attributes['tax-code'];};

  /** @param {string} validFrom **/
  set validFrom(validFrom){this._attributes['valid-from'] = validFrom};
  /** @type {string} */
  get validFrom(){return this._attributes['valid-from'];};

  /** @param {string} validUntil **/
  set validUntil(validUntil){this._attributes['valid-until'] = validUntil};
  /** @type {string} */
  get validUntil(){return this._attributes['valid-until'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};




}

/** @class Location
  * @extends {Resource}
  **/
export class Location extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'locations', attributes, one, many);
  }

  // attributes

  /** @param {*} latitude **/
  set latitude(latitude){this._attributes['latitude'] = latitude};
  /** @type {*} */
  get latitude(){return this._attributes['latitude'];};

  /** @param {*} longitude **/
  set longitude(longitude){this._attributes['longitude'] = longitude};
  /** @type {*} */
  get longitude(){return this._attributes['longitude'];};

  /** @param {*} buzzer **/
  set buzzer(buzzer){this._attributes['buzzer'] = buzzer};
  /** @type {*} */
  get buzzer(){return this._attributes['buzzer'];};

  /** @param {*} unitNumber **/
  set unitNumber(unitNumber){this._attributes['unit-number'] = unitNumber};
  /** @type {*} */
  get unitNumber(){return this._attributes['unit-number'];};

  /** @param {*} floor **/
  set floor(floor){this._attributes['floor'] = floor};
  /** @type {*} */
  get floor(){return this._attributes['floor'];};

  /** @param {*} building **/
  set building(building){this._attributes['building'] = building};
  /** @type {*} */
  get building(){return this._attributes['building'];};

  /** @param {*} city **/
  set city(city){this._attributes['city'] = city};
  /** @type {*} */
  get city(){return this._attributes['city'];};

  /** @param {*} country **/
  set country(country){this._attributes['country'] = country};
  /** @type {*} */
  get country(){return this._attributes['country'];};

  /** @param {*} province **/
  set province(province){this._attributes['province'] = province};
  /** @type {*} */
  get province(){return this._attributes['province'];};

  /** @param {*} street **/
  set street(street){this._attributes['street'] = street};
  /** @type {*} */
  get street(){return this._attributes['street'];};

  /** @param {*} addressCode **/
  set addressCode(addressCode){this._attributes['address-code'] = addressCode};
  /** @type {*} */
  get addressCode(){return this._attributes['address-code'];};

  /** @param {*} isDefault **/
  set isDefault(isDefault){this._attributes['default'] = isDefault};
  /** @type {*} */
  get isDefault(){return this._attributes['default'];};

  /** @param {*} addressLine1 **/
  set addressLine1(addressLine1){this._attributes['address-line-1'] = addressLine1};
  /** @type {*} */
  get addressLine1(){return this._attributes['address-line-1'];};

  /** @param {*} rawAddress **/
  set rawAddress(rawAddress){this._attributes['raw-address'] = rawAddress};
  /** @type {*} */
  get rawAddress(){return this._attributes['raw-address'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};




}

/** @class MealPlan
  * @extends {Resource}
  **/
export class MealPlan extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-plans', attributes, one, many);
  }

  // attributes

  /** @param {string} brandColor **/
  set brandColor(brandColor){this._attributes['brand-color'] = brandColor};
  /** @type {string} */
  get brandColor(){return this._attributes['brand-color'];};

  /** @param {string} displayName **/
  set displayName(displayName){this._attributes['display-name'] = displayName};
  /** @type {string} */
  get displayName(){return this._attributes['display-name'];};

  /** @param {string} logoUrl **/
  set logoUrl(logoUrl){this._attributes['logo-url'] = logoUrl};
  /** @type {string} */
  get logoUrl(){return this._attributes['logo-url'];};

  /** @param {string} vanityUrl **/
  set vanityUrl(vanityUrl){this._attributes['vanity-url'] = vanityUrl};
  /** @type {string} */
  get vanityUrl(){return this._attributes['vanity-url'];};

  /** @param {string} emailDomain **/
  set emailDomain(emailDomain){this._attributes['email-domain'] = emailDomain};
  /** @type {string} */
  get emailDomain(){return this._attributes['email-domain'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {string} isDepartmentRequired **/
  set isDepartmentRequired(isDepartmentRequired){this._attributes['is-department-required'] = isDepartmentRequired};
  /** @type {string} */
  get isDepartmentRequired(){return this._attributes['is-department-required'];};

  /** @param {string} password **/
  set password(password){this._attributes['password'] = password};
  /** @type {string} */
  get password(){return this._attributes['password'];};


  // relationships


  /** @param {User} mealPlanUser **/
  set mealPlanUser(mealPlanUser){this._one['meal-plan-user'] = mealPlanUser};
  /** @type {User} */
  get mealPlanUser(){return this._one['meal-plan-user']};

  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};



  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};


}

/** @class Menu
  * @extends {Resource}
  **/
export class Menu extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'menus', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {string} */
  get active(){return this._attributes['active'];};

  /** @param {string} areaId **/
  set areaId(areaId){this._attributes['area-id'] = areaId};
  /** @type {string} */
  get areaId(){return this._attributes['area-id'];};

  /** @param {string} restaurantId **/
  set restaurantId(restaurantId){this._attributes['restaurant-id'] = restaurantId};
  /** @type {string} */
  get restaurantId(){return this._attributes['restaurant-id'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} dietaryTagsCounts **/
  set dietaryTagsCounts(dietaryTagsCounts){this._attributes['dietary-tags-counts'] = dietaryTagsCounts};
  /** @type {string} */
  get dietaryTagsCounts(){return this._attributes['dietary-tags-counts'];};

  /** @param {string} setMenus **/
  set setMenus(setMenus){this._attributes['set-menus'] = setMenus};
  /** @type {string} */
  get setMenus(){return this._attributes['set-menus'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};



  /** @param {MenuGroup[]} menuGroups **/
  set menuGroups(menuGroups){this._many['menu-groups'] = menuGroups};
  /** @type {MenuGroup[]} */
  get menuGroups(){return this._many['menu-groups']};

  /** @param {MenuItem[]} menuItems **/
  set menuItems(menuItems){this._many['menu-items'] = menuItems};
  /** @type {MenuItem[]} */
  get menuItems(){return this._many['menu-items']};

  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};


}

/** @class MenuGroup
  * @extends {Resource}
  **/
export class MenuGroup extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'menu-groups', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {string} */
  get active(){return this._attributes['active'];};

  /** @param {string} internal **/
  set internal(internal){this._attributes['internal'] = internal};
  /** @type {string} */
  get internal(){return this._attributes['internal'];};

  /** @param {string} isCutlery **/
  set isCutlery(isCutlery){this._attributes['is-cutlery'] = isCutlery};
  /** @type {string} */
  get isCutlery(){return this._attributes['is-cutlery'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} position **/
  set position(position){this._attributes['position'] = position};
  /** @type {string} */
  get position(){return this._attributes['position'];};

  /** @param {string} minimumQuantity **/
  set minimumQuantity(minimumQuantity){this._attributes['minimum-quantity'] = minimumQuantity};
  /** @type {string} */
  get minimumQuantity(){return this._attributes['minimum-quantity'];};

  /** @param {string} maximumQuantity **/
  set maximumQuantity(maximumQuantity){this._attributes['maximum-quantity'] = maximumQuantity};
  /** @type {string} */
  get maximumQuantity(){return this._attributes['maximum-quantity'];};

  /** @param {string} clientPriceCents **/
  set clientPriceCents(clientPriceCents){this._attributes['client-price-cents'] = clientPriceCents};
  /** @type {string} */
  get clientPriceCents(){return this._attributes['client-price-cents'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};


  // relationships


  /** @param {Menu} menu **/
  set menu(menu){this._one['menu'] = menu};
  /** @type {Menu} */
  get menu(){return this._one['menu']};



  /** @param {MenuItem[]} menuItems **/
  set menuItems(menuItems){this._many['menu-items'] = menuItems};
  /** @type {MenuItem[]} */
  get menuItems(){return this._many['menu-items']};


}

/** @class MenuItem
  * @extends {Resource}
  **/
export class MenuItem extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'menu-items', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {string} */
  get active(){return this._attributes['active'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} internalDescription **/
  set internalDescription(internalDescription){this._attributes['internal-description'] = internalDescription};
  /** @type {string} */
  get internalDescription(){return this._attributes['internal-description'];};

  /** @param {string} position **/
  set position(position){this._attributes['position'] = position};
  /** @type {string} */
  get position(){return this._attributes['position'];};

  /** @param {string} minimumQuantity **/
  set minimumQuantity(minimumQuantity){this._attributes['minimum-quantity'] = minimumQuantity};
  /** @type {string} */
  get minimumQuantity(){return this._attributes['minimum-quantity'];};

  /** @param {string} maximumQuantity **/
  set maximumQuantity(maximumQuantity){this._attributes['maximum-quantity'] = maximumQuantity};
  /** @type {string} */
  get maximumQuantity(){return this._attributes['maximum-quantity'];};

  /** @param {string} clientPriceCents **/
  set clientPriceCents(clientPriceCents){this._attributes['client-price-cents'] = clientPriceCents};
  /** @type {string} */
  get clientPriceCents(){return this._attributes['client-price-cents'];};

  /** @param {string} restaurantPriceCents **/
  set restaurantPriceCents(restaurantPriceCents){this._attributes['restaurant-price-cents'] = restaurantPriceCents};
  /** @type {string} */
  get restaurantPriceCents(){return this._attributes['restaurant-price-cents'];};

  /** @param {string} retailPriceCents **/
  set retailPriceCents(retailPriceCents){this._attributes['retail-price-cents'] = retailPriceCents};
  /** @type {string} */
  get retailPriceCents(){return this._attributes['retail-price-cents'];};

  /** @param {string} taxRateId **/
  set taxRateId(taxRateId){this._attributes['tax-rate-id'] = taxRateId};
  /** @type {string} */
  get taxRateId(){return this._attributes['tax-rate-id'];};

  /** @param {string} taxable **/
  set taxable(taxable){this._attributes['taxable'] = taxable};
  /** @type {string} */
  get taxable(){return this._attributes['taxable'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} capacityUnits **/
  set capacityUnits(capacityUnits){this._attributes['capacity-units'] = capacityUnits};
  /** @type {string} */
  get capacityUnits(){return this._attributes['capacity-units'];};


  // relationships


  /** @param {InvoicingTaxRate} taxRate **/
  set taxRate(taxRate){this._one['tax-rate'] = taxRate};
  /** @type {InvoicingTaxRate} */
  get taxRate(){return this._one['tax-rate']};

  /** @param {MenuGroup} menuGroup **/
  set menuGroup(menuGroup){this._one['menu-group'] = menuGroup};
  /** @type {MenuGroup} */
  get menuGroup(){return this._one['menu-group']};



  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {MenuOptionGroup[]} menuOptionGroups **/
  set menuOptionGroups(menuOptionGroups){this._many['menu-option-groups'] = menuOptionGroups};
  /** @type {MenuOptionGroup[]} */
  get menuOptionGroups(){return this._many['menu-option-groups']};


}

/** @class MenuOptionGroup
  * @extends {Resource}
  **/
export class MenuOptionGroup extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'menu-option-groups', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} verb **/
  set verb(verb){this._attributes['verb'] = verb};
  /** @type {string} */
  get verb(){return this._attributes['verb'];};

  /** @param {string} isRequired **/
  set isRequired(isRequired){this._attributes['is-required'] = isRequired};
  /** @type {string} */
  get isRequired(){return this._attributes['is-required'];};

  /** @param {string} isSingleOpt **/
  set isSingleOpt(isSingleOpt){this._attributes['is-single-opt'] = isSingleOpt};
  /** @type {string} */
  get isSingleOpt(){return this._attributes['is-single-opt'];};


  // relationships


  /** @param {MenuItem} menuItem **/
  set menuItem(menuItem){this._one['menu-item'] = menuItem};
  /** @type {MenuItem} */
  get menuItem(){return this._one['menu-item']};



  /** @param {MenuOptionItem[]} menuOptionItems **/
  set menuOptionItems(menuOptionItems){this._many['menu-option-items'] = menuOptionItems};
  /** @type {MenuOptionItem[]} */
  get menuOptionItems(){return this._many['menu-option-items']};


}

/** @class MenuOptionItem
  * @extends {Resource}
  **/
export class MenuOptionItem extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'menu-option-items', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} clientPriceCents **/
  set clientPriceCents(clientPriceCents){this._attributes['client-price-cents'] = clientPriceCents};
  /** @type {string} */
  get clientPriceCents(){return this._attributes['client-price-cents'];};

  /** @param {string} restaurantPriceCents **/
  set restaurantPriceCents(restaurantPriceCents){this._attributes['restaurant-price-cents'] = restaurantPriceCents};
  /** @type {string} */
  get restaurantPriceCents(){return this._attributes['restaurant-price-cents'];};

  /** @param {string} retailPriceCents **/
  set retailPriceCents(retailPriceCents){this._attributes['retail-price-cents'] = retailPriceCents};
  /** @type {string} */
  get retailPriceCents(){return this._attributes['retail-price-cents'];};

  /** @param {string} deletedAt **/
  set deletedAt(deletedAt){this._attributes['deleted-at'] = deletedAt};
  /** @type {string} */
  get deletedAt(){return this._attributes['deleted-at'];};


  // relationships


  /** @param {MenuOptionGroup} menuOptionGroup **/
  set menuOptionGroup(menuOptionGroup){this._one['menu-option-group'] = menuOptionGroup};
  /** @type {MenuOptionGroup} */
  get menuOptionGroup(){return this._one['menu-option-group']};



  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {OrderItem[]} orderItems **/
  set orderItems(orderItems){this._many['order-items'] = orderItems};
  /** @type {OrderItem[]} */
  get orderItems(){return this._many['order-items']};


}

/** @class Order
  * @extends {Resource}
  **/
export class Order extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'orders', attributes, one, many);
  }

  // attributes

  /** @param {string} alertStatus **/
  set alertStatus(alertStatus){this._attributes['alert-status'] = alertStatus};
  /** @type {string} */
  get alertStatus(){return this._attributes['alert-status'];};

  /** @param {string} allowsPayOutOfPocket **/
  set allowsPayOutOfPocket(allowsPayOutOfPocket){this._attributes['allows-pay-out-of-pocket'] = allowsPayOutOfPocket};
  /** @type {string} */
  get allowsPayOutOfPocket(){return this._attributes['allows-pay-out-of-pocket'];};

  /** @param {string} bowtieServiceFee **/
  set bowtieServiceFee(bowtieServiceFee){this._attributes['bowtie-service-fee'] = bowtieServiceFee};
  /** @type {string} */
  get bowtieServiceFee(){return this._attributes['bowtie-service-fee'];};

  /** @param {string} clientInvoicePdf **/
  set clientInvoicePdf(clientInvoicePdf){this._attributes['client-invoice-pdf'] = clientInvoicePdf};
  /** @type {string} */
  get clientInvoicePdf(){return this._attributes['client-invoice-pdf'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} deadlineAt **/
  set deadlineAt(deadlineAt){this._attributes['deadline-at'] = deadlineAt};
  /** @type {string} */
  get deadlineAt(){return this._attributes['deadline-at'];};

  /** @param {string} deliverAt **/
  set deliverAt(deliverAt){this._attributes['deliver-at'] = deliverAt};
  /** @type {string} */
  get deliverAt(){return this._attributes['deliver-at'];};

  /** @param {string} deliverOn **/
  set deliverOn(deliverOn){this._attributes['deliver-on'] = deliverOn};
  /** @type {string} */
  get deliverOn(){return this._attributes['deliver-on'];};

  /** @param {string} deliveredAt **/
  set deliveredAt(deliveredAt){this._attributes['delivered-at'] = deliveredAt};
  /** @type {string} */
  get deliveredAt(){return this._attributes['delivered-at'];};

  /** @param {string} expiresAt **/
  set expiresAt(expiresAt){this._attributes['expires-at'] = expiresAt};
  /** @type {string} */
  get expiresAt(){return this._attributes['expires-at'];};

  /** @param {string} flag **/
  set flag(flag){this._attributes['flag'] = flag};
  /** @type {string} */
  get flag(){return this._attributes['flag'];};

  /** @param {string} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {string} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {string} ignoresCapacityLimit **/
  set ignoresCapacityLimit(ignoresCapacityLimit){this._attributes['ignores-capacity-limit'] = ignoresCapacityLimit};
  /** @type {string} */
  get ignoresCapacityLimit(){return this._attributes['ignores-capacity-limit'];};

  /** @param {string} isAtMaxCapacity **/
  set isAtMaxCapacity(isAtMaxCapacity){this._attributes['is-at-max-capacity'] = isAtMaxCapacity};
  /** @type {string} */
  get isAtMaxCapacity(){return this._attributes['is-at-max-capacity'];};

  /** @param {string} isFoodhall **/
  set isFoodhall(isFoodhall){this._attributes['is-foodhall'] = isFoodhall};
  /** @type {string} */
  get isFoodhall(){return this._attributes['is-foodhall'];};

  /** @param {string} isGroupOrder **/
  set isGroupOrder(isGroupOrder){this._attributes['is-group-order'] = isGroupOrder};
  /** @type {string} */
  get isGroupOrder(){return this._attributes['is-group-order'];};

  /** @param {string} isSameDay **/
  set isSameDay(isSameDay){this._attributes['is-same-day'] = isSameDay};
  /** @type {string} */
  get isSameDay(){return this._attributes['is-same-day'];};

  /** @param {string} lastMinute **/
  set lastMinute(lastMinute){this._attributes['last-minute'] = lastMinute};
  /** @type {string} */
  get lastMinute(){return this._attributes['last-minute'];};

  /** @param {string} maxNumberOfPeople **/
  set maxNumberOfPeople(maxNumberOfPeople){this._attributes['max-number-of-people'] = maxNumberOfPeople};
  /** @type {string} */
  get maxNumberOfPeople(){return this._attributes['max-number-of-people'];};

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} clientNotes **/
  set clientNotes(clientNotes){this._attributes['client-notes'] = clientNotes};
  /** @type {string} */
  get clientNotes(){return this._attributes['client-notes'];};

  /** @param {string} courierNotes **/
  set courierNotes(courierNotes){this._attributes['courier-notes'] = courierNotes};
  /** @type {string} */
  get courierNotes(){return this._attributes['courier-notes'];};

  /** @param {string} monitoringNotes **/
  set monitoringNotes(monitoringNotes){this._attributes['monitoring-notes'] = monitoringNotes};
  /** @type {string} */
  get monitoringNotes(){return this._attributes['monitoring-notes'];};

  /** @param {string} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {string} */
  get notes(){return this._attributes['notes'];};

  /** @param {string} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {string} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {string} orderSoldOut **/
  set orderSoldOut(orderSoldOut){this._attributes['order-sold-out'] = orderSoldOut};
  /** @type {string} */
  get orderSoldOut(){return this._attributes['order-sold-out'];};

  /** @param {string} payOutOfPocketFee **/
  set payOutOfPocketFee(payOutOfPocketFee){this._attributes['pay-out-of-pocket-fee'] = payOutOfPocketFee};
  /** @type {string} */
  get payOutOfPocketFee(){return this._attributes['pay-out-of-pocket-fee'];};

  /** @param {string} perPersonBudget **/
  set perPersonBudget(perPersonBudget){this._attributes['per-person-budget'] = perPersonBudget};
  /** @type {string} */
  get perPersonBudget(){return this._attributes['per-person-budget'];};

  /** @param {string} pickedUpAt **/
  set pickedUpAt(pickedUpAt){this._attributes['picked-up-at'] = pickedUpAt};
  /** @type {string} */
  get pickedUpAt(){return this._attributes['picked-up-at'];};

  /** @param {string} pickupAt **/
  set pickupAt(pickupAt){this._attributes['pickup-at'] = pickupAt};
  /** @type {string} */
  get pickupAt(){return this._attributes['pickup-at'];};

  /** @param {string} setMenu **/
  set setMenu(setMenu){this._attributes['set-menu'] = setMenu};
  /** @type {string} */
  get setMenu(){return this._attributes['set-menu'];};

  /** @param {string} skipDeliveryFee **/
  set skipDeliveryFee(skipDeliveryFee){this._attributes['skip-delivery-fee'] = skipDeliveryFee};
  /** @type {string} */
  get skipDeliveryFee(){return this._attributes['skip-delivery-fee'];};

  /** @param {string} stateEvent **/
  set stateEvent(stateEvent){this._attributes['state-event'] = stateEvent};
  /** @type {string} */
  get stateEvent(){return this._attributes['state-event'];};

  /** @param {string} state **/
  set state(state){this._attributes['state'] = state};
  /** @type {string} */
  get state(){return this._attributes['state'];};

  /** @param {string} totalAmount **/
  set totalAmount(totalAmount){this._attributes['total-amount'] = totalAmount};
  /** @type {string} */
  get totalAmount(){return this._attributes['total-amount'];};

  /** @param {string} restaurantTotalAmount **/
  set restaurantTotalAmount(restaurantTotalAmount){this._attributes['restaurant-total-amount'] = restaurantTotalAmount};
  /** @type {string} */
  get restaurantTotalAmount(){return this._attributes['restaurant-total-amount'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {string} clientLocationId **/
  set clientLocationId(clientLocationId){this._attributes['client-location-id'] = clientLocationId};
  /** @type {string} */
  get clientLocationId(){return this._attributes['client-location-id'];};

  /** @param {string} restaurantPollDeadlineAt **/
  set restaurantPollDeadlineAt(restaurantPollDeadlineAt){this._attributes['restaurant-poll-deadline-at'] = restaurantPollDeadlineAt};
  /** @type {string} */
  get restaurantPollDeadlineAt(){return this._attributes['restaurant-poll-deadline-at'];};

  /** @param {string} hasActivePoll **/
  set hasActivePoll(hasActivePoll){this._attributes['has-active-poll'] = hasActivePoll};
  /** @type {string} */
  get hasActivePoll(){return this._attributes['has-active-poll'];};

  /** @param {string} isAutosave **/
  set isAutosave(isAutosave){this._attributes['is-autosave'] = isAutosave};
  /** @type {string} */
  get isAutosave(){return this._attributes['is-autosave'];};

  /** @param {string} largeOrder **/
  set largeOrder(largeOrder){this._attributes['large-order'] = largeOrder};
  /** @type {string} */
  get largeOrder(){return this._attributes['large-order'];};

  /** @param {string} outsideHours **/
  set outsideHours(outsideHours){this._attributes['outside-hours'] = outsideHours};
  /** @type {string} */
  get outsideHours(){return this._attributes['outside-hours'];};

  /** @param {string} outOfZone **/
  set outOfZone(outOfZone){this._attributes['out-of-zone'] = outOfZone};
  /** @type {string} */
  get outOfZone(){return this._attributes['out-of-zone'];};

  /** @param {string} isMealPlanOrder **/
  set isMealPlanOrder(isMealPlanOrder){this._attributes['is-meal-plan-order'] = isMealPlanOrder};
  /** @type {string} */
  get isMealPlanOrder(){return this._attributes['is-meal-plan-order'];};

  /** @param {string} ordersInTranche **/
  set ordersInTranche(ordersInTranche){this._attributes['orders-in-tranche'] = ordersInTranche};
  /** @type {string} */
  get ordersInTranche(){return this._attributes['orders-in-tranche'];};

  /** @param {string} tranche **/
  set tranche(tranche){this._attributes['tranche'] = tranche};
  /** @type {string} */
  get tranche(){return this._attributes['tranche'];};

  /** @param {string} clientConfirmationId **/
  set clientConfirmationId(clientConfirmationId){this._attributes['client-confirmation-id'] = clientConfirmationId};
  /** @type {string} */
  get clientConfirmationId(){return this._attributes['client-confirmation-id'];};

  /** @param {string} restaurantConfirmationId **/
  set restaurantConfirmationId(restaurantConfirmationId){this._attributes['restaurant-confirmation-id'] = restaurantConfirmationId};
  /** @type {string} */
  get restaurantConfirmationId(){return this._attributes['restaurant-confirmation-id'];};

  /** @param {string} isBookmark **/
  set isBookmark(isBookmark){this._attributes['is-bookmark'] = isBookmark};
  /** @type {string} */
  get isBookmark(){return this._attributes['is-bookmark'];};

  /** @param {string} bookmarkExpiresAt **/
  set bookmarkExpiresAt(bookmarkExpiresAt){this._attributes['bookmark-expires-at'] = bookmarkExpiresAt};
  /** @type {string} */
  get bookmarkExpiresAt(){return this._attributes['bookmark-expires-at'];};

  /** @param {string} bookmarkName **/
  set bookmarkName(bookmarkName){this._attributes['bookmark-name'] = bookmarkName};
  /** @type {string} */
  get bookmarkName(){return this._attributes['bookmark-name'];};

  /** @param {string} urlSafeId **/
  set urlSafeId(urlSafeId){this._attributes['url-safe-id'] = urlSafeId};
  /** @type {string} */
  get urlSafeId(){return this._attributes['url-safe-id'];};

  /** @param {string} uuid **/
  set uuid(uuid){this._attributes['uuid'] = uuid};
  /** @type {string} */
  get uuid(){return this._attributes['uuid'];};

  /** @param {string} online **/
  set online(online){this._attributes['online'] = online};
  /** @type {string} */
  get online(){return this._attributes['online'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {User} owner **/
  set owner(owner){this._one['owner'] = owner};
  /** @type {User} */
  get owner(){return this._one['owner']};

  /** @param {User} creator **/
  set creator(creator){this._one['creator'] = creator};
  /** @type {User} */
  get creator(){return this._one['creator']};

  /** @param {PaymentCard} paymentCard **/
  set paymentCard(paymentCard){this._one['payment-card'] = paymentCard};
  /** @type {PaymentCard} */
  get paymentCard(){return this._one['payment-card']};

  /** @param {Contact} contact **/
  set contact(contact){this._one['contact'] = contact};
  /** @type {Contact} */
  get contact(){return this._one['contact']};

  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};

  /** @param {Courier} courier **/
  set courier(courier){this._one['courier'] = courier};
  /** @type {Courier} */
  get courier(){return this._one['courier']};

  /** @param {PromoCode} promoCode **/
  set promoCode(promoCode){this._one['promo-code'] = promoCode};
  /** @type {PromoCode} */
  get promoCode(){return this._one['promo-code']};

  /** @param {User} driver **/
  set driver(driver){this._one['driver'] = driver};
  /** @type {User} */
  get driver(){return this._one['driver']};

  /** @param {User} salesSupport **/
  set salesSupport(salesSupport){this._one['sales-support'] = salesSupport};
  /** @type {User} */
  get salesSupport(){return this._one['sales-support']};

  /** @param {Location} restaurantLocation **/
  set restaurantLocation(restaurantLocation){this._one['restaurant-location'] = restaurantLocation};
  /** @type {Location} */
  get restaurantLocation(){return this._one['restaurant-location']};

  /** @param {Location} clientLocation **/
  set clientLocation(clientLocation){this._one['client-location'] = clientLocation};
  /** @type {Location} */
  get clientLocation(){return this._one['client-location']};

  /** @param {ClientDiscount} clientDiscount **/
  set clientDiscount(clientDiscount){this._one['client-discount'] = clientDiscount};
  /** @type {ClientDiscount} */
  get clientDiscount(){return this._one['client-discount']};

  /** @param {RestaurantDiscount} restaurantDiscount **/
  set restaurantDiscount(restaurantDiscount){this._one['restaurant-discount'] = restaurantDiscount};
  /** @type {RestaurantDiscount} */
  get restaurantDiscount(){return this._one['restaurant-discount']};

  /** @param {Menu} menu **/
  set menu(menu){this._one['menu'] = menu};
  /** @type {Menu} */
  get menu(){return this._one['menu']};

  /** @param {Location} customLocation **/
  set customLocation(customLocation){this._one['custom-location'] = customLocation};
  /** @type {Location} */
  get customLocation(){return this._one['custom-location']};

  /** @param {GiftbitError} giftbitError **/
  set giftbitError(giftbitError){this._one['giftbit-error'] = giftbitError};
  /** @type {GiftbitError} */
  get giftbitError(){return this._one['giftbit-error']};

  /** @param {ClientOrderInvoice} clientOrderInvoice **/
  set clientOrderInvoice(clientOrderInvoice){this._one['client-order-invoice'] = clientOrderInvoice};
  /** @type {ClientOrderInvoice} */
  get clientOrderInvoice(){return this._one['client-order-invoice']};

  /** @param {RestaurantOrderInvoice} restaurantOrderInvoice **/
  set restaurantOrderInvoice(restaurantOrderInvoice){this._one['restaurant-order-invoice'] = restaurantOrderInvoice};
  /** @type {RestaurantOrderInvoice} */
  get restaurantOrderInvoice(){return this._one['restaurant-order-invoice']};



  /** @param {EmailMessage[]} emailMessages **/
  set emailMessages(emailMessages){this._many['email-messages'] = emailMessages};
  /** @type {EmailMessage[]} */
  get emailMessages(){return this._many['email-messages']};

  /** @param {DeliveryCase[]} deliveryCases **/
  set deliveryCases(deliveryCases){this._many['delivery-cases'] = deliveryCases};
  /** @type {DeliveryCase[]} */
  get deliveryCases(){return this._many['delivery-cases']};

  /** @param {DeskCase[]} deskCases **/
  set deskCases(deskCases){this._many['desk-cases'] = deskCases};
  /** @type {DeskCase[]} */
  get deskCases(){return this._many['desk-cases']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};

  /** @param {Restaurant[]} pollableRestaurants **/
  set pollableRestaurants(pollableRestaurants){this._many['pollable-restaurants'] = pollableRestaurants};
  /** @type {Restaurant[]} */
  get pollableRestaurants(){return this._many['pollable-restaurants']};

  /** @param {RestaurantVote[]} restaurantVotes **/
  set restaurantVotes(restaurantVotes){this._many['restaurant-votes'] = restaurantVotes};
  /** @type {RestaurantVote[]} */
  get restaurantVotes(){return this._many['restaurant-votes']};

  /** @param {GroupOrderMember[]} groupOrderMembers **/
  set groupOrderMembers(groupOrderMembers){this._many['group-order-members'] = groupOrderMembers};
  /** @type {GroupOrderMember[]} */
  get groupOrderMembers(){return this._many['group-order-members']};

  /** @param {OrderItem[]} orderItems **/
  set orderItems(orderItems){this._many['order-items'] = orderItems};
  /** @type {OrderItem[]} */
  get orderItems(){return this._many['order-items']};


}

/** @class OrderItem
  * @extends {Resource}
  **/
export class OrderItem extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'order-items', attributes, one, many);
  }

  // attributes

  /** @param {number} quantity **/
  set quantity(quantity){this._attributes['quantity'] = quantity};
  /** @type {number} */
  get quantity(){return this._attributes['quantity'];};

  /** @param {number} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {number} */
  get notes(){return this._attributes['notes'];};

  /** @param {number} clientPriceCents **/
  set clientPriceCents(clientPriceCents){this._attributes['client-price-cents'] = clientPriceCents};
  /** @type {number} */
  get clientPriceCents(){return this._attributes['client-price-cents'];};

  /** @param {number} restaurantPriceCents **/
  set restaurantPriceCents(restaurantPriceCents){this._attributes['restaurant-price-cents'] = restaurantPriceCents};
  /** @type {number} */
  get restaurantPriceCents(){return this._attributes['restaurant-price-cents'];};

  /** @param {number} custom **/
  set custom(custom){this._attributes['custom'] = custom};
  /** @type {number} */
  get custom(){return this._attributes['custom'];};

  /** @param {number} taxable **/
  set taxable(taxable){this._attributes['taxable'] = taxable};
  /** @type {number} */
  get taxable(){return this._attributes['taxable'];};

  /** @param {number} overridePrices **/
  set overridePrices(overridePrices){this._attributes['override-prices'] = overridePrices};
  /** @type {number} */
  get overridePrices(){return this._attributes['override-prices'];};

  /** @param {number} capacityUnits **/
  set capacityUnits(capacityUnits){this._attributes['capacity-units'] = capacityUnits};
  /** @type {number} */
  get capacityUnits(){return this._attributes['capacity-units'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};

  /** @param {MenuItem} menuItem **/
  set menuItem(menuItem){this._one['menu-item'] = menuItem};
  /** @type {MenuItem} */
  get menuItem(){return this._one['menu-item']};

  /** @param {GroupOrderMember} groupOrderMember **/
  set groupOrderMember(groupOrderMember){this._one['group-order-member'] = groupOrderMember};
  /** @type {GroupOrderMember} */
  get groupOrderMember(){return this._one['group-order-member']};



  /** @param {MenuOptionItem[]} menuOptionItems **/
  set menuOptionItems(menuOptionItems){this._many['menu-option-items'] = menuOptionItems};
  /** @type {MenuOptionItem[]} */
  get menuOptionItems(){return this._many['menu-option-items']};


}

/** @class PaymentAccount
  * @extends {Resource}
  **/
export class PaymentAccount extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'payment-accounts', attributes, one, many);
  }

  // attributes


  // relationships





}

/** @class PaymentCard
  * @extends {Resource}
  **/
export class PaymentCard extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'payment-cards', attributes, one, many);
  }

  // attributes

  /** @param {number} position **/
  set position(position){this._attributes['position'] = position};
  /** @type {number} */
  get position(){return this._attributes['position'];};

  /** @param {number} lastFourDigits **/
  set lastFourDigits(lastFourDigits){this._attributes['last-four-digits'] = lastFourDigits};
  /** @type {number} */
  get lastFourDigits(){return this._attributes['last-four-digits'];};

  /** @param {number} expiryMonth **/
  set expiryMonth(expiryMonth){this._attributes['expiry-month'] = expiryMonth};
  /** @type {number} */
  get expiryMonth(){return this._attributes['expiry-month'];};

  /** @param {number} expiryYear **/
  set expiryYear(expiryYear){this._attributes['expiry-year'] = expiryYear};
  /** @type {number} */
  get expiryYear(){return this._attributes['expiry-year'];};

  /** @param {number} cardType **/
  set cardType(cardType){this._attributes['card-type'] = cardType};
  /** @type {number} */
  get cardType(){return this._attributes['card-type'];};

  /** @param {number} isDefault **/
  set isDefault(isDefault){this._attributes['default'] = isDefault};
  /** @type {number} */
  get isDefault(){return this._attributes['default'];};

  /** @param {number} removed **/
  set removed(removed){this._attributes['removed'] = removed};
  /** @type {number} */
  get removed(){return this._attributes['removed'];};

  /** @param {number} cardToken **/
  set cardToken(cardToken){this._attributes['card-token'] = cardToken};
  /** @type {number} */
  get cardToken(){return this._attributes['card-token'];};

  /** @param {number} nameOnCard **/
  set nameOnCard(nameOnCard){this._attributes['name-on-card'] = nameOnCard};
  /** @type {number} */
  get nameOnCard(){return this._attributes['name-on-card'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};




}

/** @class PayrollRun
  * @extends {Resource}
  **/
export class PayrollRun extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'payroll-runs', attributes, one, many);
  }

  // attributes

  /** @param {boolean} country **/
  set country(country){this._attributes['country'] = country};
  /** @type {boolean} */
  get country(){return this._attributes['country'];};

  /** @param {string} payrollPeriod **/
  set payrollPeriod(payrollPeriod){this._attributes['payroll-period'] = payrollPeriod};
  /** @type {string} */
  get payrollPeriod(){return this._attributes['payroll-period'];};

  /** @param {boolean} paid **/
  set paid(paid){this._attributes['paid'] = paid};
  /** @type {boolean} */
  get paid(){return this._attributes['paid'];};


  // relationships




  /** @param {DriverPayrollRun[]} driverPayrollRun **/
  set driverPayrollRun(driverPayrollRun){this._many['driver-payroll-run'] = driverPayrollRun};
  /** @type {DriverPayrollRun[]} */
  get driverPayrollRun(){return this._many['driver-payroll-run']};


}

/** @class PickupLocation
  * @extends {Resource}
  **/
export class PickupLocation extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'pickup-locations', attributes, one, many);
  }

  // attributes

  /** @param {any} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {any} */
  get name(){return this._attributes['name'];};

  /** @param {number} locationId **/
  set locationId(locationId){this._attributes['location-id'] = locationId};
  /** @type {number} */
  get locationId(){return this._attributes['location-id'];};

  /** @param {number} latitude **/
  set latitude(latitude){this._attributes['latitude'] = latitude};
  /** @type {number} */
  get latitude(){return this._attributes['latitude'];};

  /** @param {number} longitude **/
  set longitude(longitude){this._attributes['longitude'] = longitude};
  /** @type {number} */
  get longitude(){return this._attributes['longitude'];};

  /** @param {number} buzzer **/
  set buzzer(buzzer){this._attributes['buzzer'] = buzzer};
  /** @type {number} */
  get buzzer(){return this._attributes['buzzer'];};

  /** @param {number} unitNumber **/
  set unitNumber(unitNumber){this._attributes['unit-number'] = unitNumber};
  /** @type {number} */
  get unitNumber(){return this._attributes['unit-number'];};

  /** @param {number} floor **/
  set floor(floor){this._attributes['floor'] = floor};
  /** @type {number} */
  get floor(){return this._attributes['floor'];};

  /** @param {number} building **/
  set building(building){this._attributes['building'] = building};
  /** @type {number} */
  get building(){return this._attributes['building'];};

  /** @param {number} street **/
  set street(street){this._attributes['street'] = street};
  /** @type {number} */
  get street(){return this._attributes['street'];};

  /** @param {number} city **/
  set city(city){this._attributes['city'] = city};
  /** @type {number} */
  get city(){return this._attributes['city'];};

  /** @param {number} province **/
  set province(province){this._attributes['province'] = province};
  /** @type {number} */
  get province(){return this._attributes['province'];};

  /** @param {number} country **/
  set country(country){this._attributes['country'] = country};
  /** @type {number} */
  get country(){return this._attributes['country'];};

  /** @param {number} addressCode **/
  set addressCode(addressCode){this._attributes['address-code'] = addressCode};
  /** @type {number} */
  get addressCode(){return this._attributes['address-code'];};


  // relationships


  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};

  /** @param {Location} location **/
  set location(location){this._one['location'] = location};
  /** @type {Location} */
  get location(){return this._one['location']};




}

/** @class PromoCode
  * @extends {Resource}
  **/
export class PromoCode extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'promo-codes', attributes, one, many);
  }

  // attributes

  /** @param {string} code **/
  set code(code){this._attributes['code'] = code};
  /** @type {string} */
  get code(){return this._attributes['code'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} amount **/
  set amount(amount){this._attributes['amount'] = amount};
  /** @type {string} */
  get amount(){return this._attributes['amount'];};

  /** @param {string} amountType **/
  set amountType(amountType){this._attributes['amount-type'] = amountType};
  /** @type {string} */
  get amountType(){return this._attributes['amount-type'];};

  /** @param {string} clientAccountingCode **/
  set clientAccountingCode(clientAccountingCode){this._attributes['client-accounting-code'] = clientAccountingCode};
  /** @type {string} */
  get clientAccountingCode(){return this._attributes['client-accounting-code'];};

  /** @param {string} restaurantAccountingCode **/
  set restaurantAccountingCode(restaurantAccountingCode){this._attributes['restaurant-accounting-code'] = restaurantAccountingCode};
  /** @type {string} */
  get restaurantAccountingCode(){return this._attributes['restaurant-accounting-code'];};

  /** @param {string} startsAt **/
  set startsAt(startsAt){this._attributes['starts-at'] = startsAt};
  /** @type {string} */
  get startsAt(){return this._attributes['starts-at'];};

  /** @param {string} expiresAt **/
  set expiresAt(expiresAt){this._attributes['expires-at'] = expiresAt};
  /** @type {string} */
  get expiresAt(){return this._attributes['expires-at'];};

  /** @param {string} internal **/
  set internal(internal){this._attributes['internal'] = internal};
  /** @type {string} */
  get internal(){return this._attributes['internal'];};

  /** @param {string} removed **/
  set removed(removed){this._attributes['removed'] = removed};
  /** @type {string} */
  get removed(){return this._attributes['removed'];};

  /** @param {string} allowMultipleClientUses **/
  set allowMultipleClientUses(allowMultipleClientUses){this._attributes['allow-multiple-client-uses'] = allowMultipleClientUses};
  /** @type {string} */
  get allowMultipleClientUses(){return this._attributes['allow-multiple-client-uses'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};



  /** @param {Order[]} order **/
  set order(order){this._many['order'] = order};
  /** @type {Order[]} */
  get order(){return this._many['order']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};


}

/** @class QualifyingQuestion
  * @extends {Resource}
  **/
export class QualifyingQuestion extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'qualifying-questions', attributes, one, many);
  }

  // attributes

  /** @param {string} contactPerson **/
  set contactPerson(contactPerson){this._attributes['contact-person'] = contactPerson};
  /** @type {string} */
  get contactPerson(){return this._attributes['contact-person'];};

  /** @param {string} orderFrequency **/
  set orderFrequency(orderFrequency){this._attributes['order-frequency'] = orderFrequency};
  /** @type {string} */
  get orderFrequency(){return this._attributes['order-frequency'];};

  /** @param {string} orderSize **/
  set orderSize(orderSize){this._attributes['order-size'] = orderSize};
  /** @type {string} */
  get orderSize(){return this._attributes['order-size'];};

  /** @param {string} orderBudget **/
  set orderBudget(orderBudget){this._attributes['order-budget'] = orderBudget};
  /** @type {string} */
  get orderBudget(){return this._attributes['order-budget'];};


  // relationships





}

/** @class Restaurant
  * @extends {Resource}
  **/
export class Restaurant extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurants', attributes, one, many);
  }

  // attributes

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {Date} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {Date} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {Date} */
  get active(){return this._attributes['active'];};

  /** @param {Date} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {Date} */
  get name(){return this._attributes['name'];};

  /** @param {Date} slug **/
  set slug(slug){this._attributes['slug'] = slug};
  /** @type {Date} */
  get slug(){return this._attributes['slug'];};

  /** @param {Date} subtitle **/
  set subtitle(subtitle){this._attributes['subtitle'] = subtitle};
  /** @type {Date} */
  get subtitle(){return this._attributes['subtitle'];};

  /** @param {Date} legalName **/
  set legalName(legalName){this._attributes['legal-name'] = legalName};
  /** @type {Date} */
  get legalName(){return this._attributes['legal-name'];};

  /** @param {Date} pickupNotes **/
  set pickupNotes(pickupNotes){this._attributes['pickup-notes'] = pickupNotes};
  /** @type {Date} */
  get pickupNotes(){return this._attributes['pickup-notes'];};

  /** @param {Date} completionProgress **/
  set completionProgress(completionProgress){this._attributes['completion-progress'] = completionProgress};
  /** @type {Date} */
  get completionProgress(){return this._attributes['completion-progress'];};

  /** @param {Date} dietaryTagsCounts **/
  set dietaryTagsCounts(dietaryTagsCounts){this._attributes['dietary-tags-counts'] = dietaryTagsCounts};
  /** @type {Date} */
  get dietaryTagsCounts(){return this._attributes['dietary-tags-counts'];};

  /** @param {Date} comingSoon **/
  set comingSoon(comingSoon){this._attributes['coming-soon'] = comingSoon};
  /** @type {Date} */
  get comingSoon(){return this._attributes['coming-soon'];};

  /** @param {Date} hoursInAdvance **/
  set hoursInAdvance(hoursInAdvance){this._attributes['hours-in-advance'] = hoursInAdvance};
  /** @type {Date} */
  get hoursInAdvance(){return this._attributes['hours-in-advance'];};

  /** @param {Date} internal **/
  set internal(internal){this._attributes['internal'] = internal};
  /** @type {Date} */
  get internal(){return this._attributes['internal'];};

  /** @param {Date} isNew **/
  set isNew(isNew){this._attributes['is-new'] = isNew};
  /** @type {Date} */
  get isNew(){return this._attributes['is-new'];};

  /** @param {Date} coverImageUrl **/
  set coverImageUrl(coverImageUrl){this._attributes['cover-image-url'] = coverImageUrl};
  /** @type {Date} */
  get coverImageUrl(){return this._attributes['cover-image-url'];};

  /** @param {Date} thumbnailImageUrl **/
  set thumbnailImageUrl(thumbnailImageUrl){this._attributes['thumbnail-image-url'] = thumbnailImageUrl};
  /** @type {Date} */
  get thumbnailImageUrl(){return this._attributes['thumbnail-image-url'];};

  /** @param {Date} isPayingAdminFee **/
  set isPayingAdminFee(isPayingAdminFee){this._attributes['is-paying-admin-fee'] = isPayingAdminFee};
  /** @type {Date} */
  get isPayingAdminFee(){return this._attributes['is-paying-admin-fee'];};

  /** @param {Date} canGroupOrder **/
  set canGroupOrder(canGroupOrder){this._attributes['can-group-order'] = canGroupOrder};
  /** @type {Date} */
  get canGroupOrder(){return this._attributes['can-group-order'];};

  /** @param {Date} canSameDayOrder **/
  set canSameDayOrder(canSameDayOrder){this._attributes['can-same-day-order'] = canSameDayOrder};
  /** @type {Date} */
  get canSameDayOrder(){return this._attributes['can-same-day-order'];};

  /** @param {Date} receivesDailyOrderSummary **/
  set receivesDailyOrderSummary(receivesDailyOrderSummary){this._attributes['receives-daily-order-summary'] = receivesDailyOrderSummary};
  /** @type {Date} */
  get receivesDailyOrderSummary(){return this._attributes['receives-daily-order-summary'];};

  /** @param {Date} receivesSMS **/
  set receivesSMS(receivesSMS){this._attributes['receives-sms'] = receivesSMS};
  /** @type {Date} */
  get receivesSMS(){return this._attributes['receives-sms'];};

  /** @param {Date} marketingTitle **/
  set marketingTitle(marketingTitle){this._attributes['marketing-title'] = marketingTitle};
  /** @type {Date} */
  get marketingTitle(){return this._attributes['marketing-title'];};

  /** @param {Date} marketingDescription **/
  set marketingDescription(marketingDescription){this._attributes['marketing-description'] = marketingDescription};
  /** @type {Date} */
  get marketingDescription(){return this._attributes['marketing-description'];};

  /** @param {Date} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {Date} */
  get features(){return this._attributes['features'];};


  // relationships


  /** @param {Location} billingLocation **/
  set billingLocation(billingLocation){this._one['billing-location'] = billingLocation};
  /** @type {Location} */
  get billingLocation(){return this._one['billing-location']};

  /** @param {Contact} billingContact **/
  set billingContact(billingContact){this._one['billing-contact'] = billingContact};
  /** @type {Contact} */
  get billingContact(){return this._one['billing-contact']};

  /** @param {User} owner **/
  set owner(owner){this._one['owner'] = owner};
  /** @type {User} */
  get owner(){return this._one['owner']};



  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};

  /** @param {RestaurantCapacityTranche[]} restaurantCapacityTranches **/
  set restaurantCapacityTranches(restaurantCapacityTranches){this._many['restaurant-capacity-tranches'] = restaurantCapacityTranches};
  /** @type {RestaurantCapacityTranche[]} */
  get restaurantCapacityTranches(){return this._many['restaurant-capacity-tranches']};

  /** @param {ServiceTime[]} serviceTimes **/
  set serviceTimes(serviceTimes){this._many['service-times'] = serviceTimes};
  /** @type {ServiceTime[]} */
  get serviceTimes(){return this._many['service-times']};

  /** @param {PickupLocation[]} pickupLocations **/
  set pickupLocations(pickupLocations){this._many['pickup-locations'] = pickupLocations};
  /** @type {PickupLocation[]} */
  get pickupLocations(){return this._many['pickup-locations']};

  /** @param {User[]} admins **/
  set admins(admins){this._many['admins'] = admins};
  /** @type {User[]} */
  get admins(){return this._many['admins']};

  /** @param {Contact[]} adminContacts **/
  set adminContacts(adminContacts){this._many['admin-contacts'] = adminContacts};
  /** @type {Contact[]} */
  get adminContacts(){return this._many['admin-contacts']};

  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {Tag[]} tags **/
  set tags(tags){this._many['tags'] = tags};
  /** @type {Tag[]} */
  get tags(){return this._many['tags']};

  /** @param {Area[]} areas **/
  set areas(areas){this._many['areas'] = areas};
  /** @type {Area[]} */
  get areas(){return this._many['areas']};

  /** @param {Menu[]} menus **/
  set menus(menus){this._many['menus'] = menus};
  /** @type {Menu[]} */
  get menus(){return this._many['menus']};

  /** @param {RestaurantVote[]} restaurantVotes **/
  set restaurantVotes(restaurantVotes){this._many['restaurant-votes'] = restaurantVotes};
  /** @type {RestaurantVote[]} */
  get restaurantVotes(){return this._many['restaurant-votes']};

  /** @param {RestaurantClosure[]} closures **/
  set closures(closures){this._many['closures'] = closures};
  /** @type {RestaurantClosure[]} */
  get closures(){return this._many['closures']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};

  /** @param {PromoCode[]} promoCodes **/
  set promoCodes(promoCodes){this._many['promo-codes'] = promoCodes};
  /** @type {PromoCode[]} */
  get promoCodes(){return this._many['promo-codes']};


}

/** @class RestaurantCapacityTranche
  * @extends {Resource}
  **/
export class RestaurantCapacityTranche extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurant-capacity-tranches', attributes, one, many);
  }

  // attributes

  /** @param {*} startTime **/
  set startTime(startTime){this._attributes['start-time'] = startTime};
  /** @type {*} */
  get startTime(){return this._attributes['start-time'];};

  /** @param {*} endTime **/
  set endTime(endTime){this._attributes['end-time'] = endTime};
  /** @type {*} */
  get endTime(){return this._attributes['end-time'];};

  /** @param {*} capacity **/
  set capacity(capacity){this._attributes['capacity'] = capacity};
  /** @type {*} */
  get capacity(){return this._attributes['capacity'];};


  // relationships


  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};




}

/** @class RestaurantClosure
  * @extends {Resource}
  **/
export class RestaurantClosure extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurant-closures', attributes, one, many);
  }

  // attributes

  /** @param {date} date **/
  set date(date){this._attributes['date'] = date};
  /** @type {date} */
  get date(){return this._attributes['date'];};

  /** @param {date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {date} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {date} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships


  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};




}

/** @class RestaurantDiscount
  * @extends {Resource}
  **/
export class RestaurantDiscount extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurant-discounts', attributes, one, many);
  }

  // attributes

  /** @param {string} accountingCode **/
  set accountingCode(accountingCode){this._attributes['accounting-code'] = accountingCode};
  /** @type {string} */
  get accountingCode(){return this._attributes['accounting-code'];};

  /** @param {string} amount **/
  set amount(amount){this._attributes['amount'] = amount};
  /** @type {string} */
  get amount(){return this._attributes['amount'];};

  /** @param {string} amountType **/
  set amountType(amountType){this._attributes['amount-type'] = amountType};
  /** @type {string} */
  get amountType(){return this._attributes['amount-type'];};

  /** @param {string} caseId **/
  set caseId(caseId){this._attributes['case-id'] = caseId};
  /** @type {string} */
  get caseId(){return this._attributes['case-id'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class RestaurantOrderInvoice
  * @extends {Resource}
  **/
export class RestaurantOrderInvoice extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurant-order-invoices', attributes, one, many);
  }

  // attributes

  /** @param {any} summary **/
  set summary(summary){this._attributes['summary'] = summary};
  /** @type {any} */
  get summary(){return this._attributes['summary'];};


  // relationships





}

/** @class RestaurantVote
  * @extends {Resource}
  **/
export class RestaurantVote extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurant-votes', attributes, one, many);
  }

  // attributes

  /** @param {string} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {string} */
  get email(){return this._attributes['email'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};

  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};




}

/** @class Role
  * @extends {Resource}
  **/
export class Role extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'roles', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};




}

/** @class SalesforceSyncError
  * @extends {Resource}
  **/
export class SalesforceSyncError extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'salesforce-sync-errors', attributes, one, many);
  }

  // attributes

  /** @param {string} log **/
  set log(log){this._attributes['log'] = log};
  /** @type {string} */
  get log(){return this._attributes['log'];};

  /** @param {string} recordId **/
  set recordId(recordId){this._attributes['record-id'] = recordId};
  /** @type {string} */
  get recordId(){return this._attributes['record-id'];};

  /** @param {string} recordType **/
  set recordType(recordType){this._attributes['record-type'] = recordType};
  /** @type {string} */
  get recordType(){return this._attributes['record-type'];};

  /** @param {string} isResolved **/
  set isResolved(isResolved){this._attributes['is-resolved'] = isResolved};
  /** @type {string} */
  get isResolved(){return this._attributes['is-resolved'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships





}

/** @class ServiceTime
  * @extends {Resource}
  **/
export class ServiceTime extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'service-times', attributes, one, many);
  }

  // attributes

  /** @param {number} weekday **/
  set weekday(weekday){this._attributes['weekday'] = weekday};
  /** @type {number} */
  get weekday(){return this._attributes['weekday'];};

  /** @param {number} weekdayLetter **/
  set weekdayLetter(weekdayLetter){this._attributes['weekday-letter'] = weekdayLetter};
  /** @type {number} */
  get weekdayLetter(){return this._attributes['weekday-letter'];};

  /** @param {number} weekdayName **/
  set weekdayName(weekdayName){this._attributes['weekday-name'] = weekdayName};
  /** @type {number} */
  get weekdayName(){return this._attributes['weekday-name'];};

  /** @param {*} deliveryStartTime **/
  set deliveryStartTime(deliveryStartTime){this._attributes['delivery-start-time'] = deliveryStartTime};
  /** @type {*} */
  get deliveryStartTime(){return this._attributes['delivery-start-time'];};

  /** @param {*} deliveryEndTime **/
  set deliveryEndTime(deliveryEndTime){this._attributes['delivery-end-time'] = deliveryEndTime};
  /** @type {*} */
  get deliveryEndTime(){return this._attributes['delivery-end-time'];};

  /** @param {*} pickupStartTime **/
  set pickupStartTime(pickupStartTime){this._attributes['pickup-start-time'] = pickupStartTime};
  /** @type {*} */
  get pickupStartTime(){return this._attributes['pickup-start-time'];};

  /** @param {*} pickupEndTime **/
  set pickupEndTime(pickupEndTime){this._attributes['pickup-end-time'] = pickupEndTime};
  /** @type {*} */
  get pickupEndTime(){return this._attributes['pickup-end-time'];};


  // relationships


  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};




}

/** @class Tag
  * @extends {Resource}
  **/
export class Tag extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'tags', attributes, one, many);
  }

  // attributes

  /** @param {string} emoji **/
  set emoji(emoji){this._attributes['emoji'] = emoji};
  /** @type {string} */
  get emoji(){return this._attributes['emoji'];};

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} tagType **/
  set tagType(tagType){this._attributes['tag-type'] = tagType};
  /** @type {string} */
  get tagType(){return this._attributes['tag-type'];};


  // relationships





}

/** @class Team
  * @extends {Resource}
  **/
export class Team extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'teams', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} accountingCode **/
  set accountingCode(accountingCode){this._attributes['accounting-code'] = accountingCode};
  /** @type {string} */
  get accountingCode(){return this._attributes['accounting-code'];};

  /** @param {string} isActive **/
  set isActive(isActive){this._attributes['is-active'] = isActive};
  /** @type {string} */
  get isActive(){return this._attributes['is-active'];};

  /** @param {string} isDefault **/
  set isDefault(isDefault){this._attributes['is-default'] = isDefault};
  /** @type {string} */
  get isDefault(){return this._attributes['is-default'];};

  /** @param {string} numberOfMembers **/
  set numberOfMembers(numberOfMembers){this._attributes['number-of-members'] = numberOfMembers};
  /** @type {string} */
  get numberOfMembers(){return this._attributes['number-of-members'];};

  /** @param {string} perPersonBudget **/
  set perPersonBudget(perPersonBudget){this._attributes['per-person-budget'] = perPersonBudget};
  /** @type {string} */
  get perPersonBudget(){return this._attributes['per-person-budget'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};



  /** @param {User[]} users **/
  set users(users){this._many['users'] = users};
  /** @type {User[]} */
  get users(){return this._many['users']};


}

/** @class User
  * @extends {Resource}
  **/
export class User extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'users', attributes, one, many);
  }

  // attributes

  /** @param {boolean} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {boolean} */
  get active(){return this._attributes['active'];};

  /** @param {boolean} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {boolean} */
  get email(){return this._attributes['email'];};

  /** @param {boolean} firstName **/
  set firstName(firstName){this._attributes['first-name'] = firstName};
  /** @type {boolean} */
  get firstName(){return this._attributes['first-name'];};

  /** @param {boolean} lastName **/
  set lastName(lastName){this._attributes['last-name'] = lastName};
  /** @type {boolean} */
  get lastName(){return this._attributes['last-name'];};

  /** @param {boolean} isPending **/
  set isPending(isPending){this._attributes['is-pending'] = isPending};
  /** @type {boolean} */
  get isPending(){return this._attributes['is-pending'];};

  /** @param {boolean} password **/
  set password(password){this._attributes['password'] = password};
  /** @type {boolean} */
  get password(){return this._attributes['password'];};

  /** @param {boolean} passwordConfirmation **/
  set passwordConfirmation(passwordConfirmation){this._attributes['password-confirmation'] = passwordConfirmation};
  /** @type {boolean} */
  get passwordConfirmation(){return this._attributes['password-confirmation'];};

  /** @param {boolean} resetPasswordToken **/
  set resetPasswordToken(resetPasswordToken){this._attributes['reset-password-token'] = resetPasswordToken};
  /** @type {boolean} */
  get resetPasswordToken(){return this._attributes['reset-password-token'];};

  /** @param {boolean} phoneNumber **/
  set phoneNumber(phoneNumber){this._attributes['phone-number'] = phoneNumber};
  /** @type {boolean} */
  get phoneNumber(){return this._attributes['phone-number'];};

  /** @param {boolean} extension **/
  set extension(extension){this._attributes['extension'] = extension};
  /** @type {boolean} */
  get extension(){return this._attributes['extension'];};

  /** @param {boolean} isClientAdmin **/
  set isClientAdmin(isClientAdmin){this._attributes['is-client-admin'] = isClientAdmin};
  /** @type {boolean} */
  get isClientAdmin(){return this._attributes['is-client-admin'];};

  /** @param {boolean} smsNumber **/
  set smsNumber(smsNumber){this._attributes['sms-number'] = smsNumber};
  /** @type {boolean} */
  get smsNumber(){return this._attributes['sms-number'];};

  /** @param {boolean} phoneCanSMS **/
  set phoneCanSMS(phoneCanSMS){this._attributes['phone-can-sms'] = phoneCanSMS};
  /** @type {boolean} */
  get phoneCanSMS(){return this._attributes['phone-can-sms'];};

  /** @param {boolean} phoneType **/
  set phoneType(phoneType){this._attributes['phone-type'] = phoneType};
  /** @type {boolean} */
  get phoneType(){return this._attributes['phone-type'];};

  /** @param {boolean} profilePicture **/
  set profilePicture(profilePicture){this._attributes['profile-picture'] = profilePicture};
  /** @type {boolean} */
  get profilePicture(){return this._attributes['profile-picture'];};

  /** @param {boolean} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {boolean} */
  get features(){return this._attributes['features'];};

  /** @param {boolean} slackChannelInfo **/
  set slackChannelInfo(slackChannelInfo){this._attributes['slack-channel-info'] = slackChannelInfo};
  /** @type {boolean} */
  get slackChannelInfo(){return this._attributes['slack-channel-info'];};

  /** @param {boolean} acceptedTermsAt **/
  set acceptedTermsAt(acceptedTermsAt){this._attributes['accepted-terms-at'] = acceptedTermsAt};
  /** @type {boolean} */
  get acceptedTermsAt(){return this._attributes['accepted-terms-at'];};

  /** @param {boolean} lastSignInAt **/
  set lastSignInAt(lastSignInAt){this._attributes['last-sign-in-at'] = lastSignInAt};
  /** @type {boolean} */
  get lastSignInAt(){return this._attributes['last-sign-in-at'];};

  /** @param {boolean} invitationSentAt **/
  set invitationSentAt(invitationSentAt){this._attributes['invitation-sent-at'] = invitationSentAt};
  /** @type {boolean} */
  get invitationSentAt(){return this._attributes['invitation-sent-at'];};

  /** @param {boolean} invitationStatus **/
  set invitationStatus(invitationStatus){this._attributes['invitation-status'] = invitationStatus};
  /** @type {boolean} */
  get invitationStatus(){return this._attributes['invitation-status'];};

  /** @param {boolean} invitationToken **/
  set invitationToken(invitationToken){this._attributes['invitation-token'] = invitationToken};
  /** @type {boolean} */
  get invitationToken(){return this._attributes['invitation-token'];};

  /** @param {boolean} invitationAcceptedAt **/
  set invitationAcceptedAt(invitationAcceptedAt){this._attributes['invitation-accepted-at'] = invitationAcceptedAt};
  /** @type {boolean} */
  get invitationAcceptedAt(){return this._attributes['invitation-accepted-at'];};

  /** @param {boolean} completedQuestionaire **/
  set completedQuestionaire(completedQuestionaire){this._attributes['completed-questionaire'] = completedQuestionaire};
  /** @type {boolean} */
  get completedQuestionaire(){return this._attributes['completed-questionaire'];};

  /** @param {boolean} driverDeviceInfo **/
  set driverDeviceInfo(driverDeviceInfo){this._attributes['driver-device-info'] = driverDeviceInfo};
  /** @type {boolean} */
  get driverDeviceInfo(){return this._attributes['driver-device-info'];};

  /** @param {boolean} driverFileNumber **/
  set driverFileNumber(driverFileNumber){this._attributes['driver-file-number'] = driverFileNumber};
  /** @type {boolean} */
  get driverFileNumber(){return this._attributes['driver-file-number'];};

  /** @param {boolean} driverSpeedRating **/
  set driverSpeedRating(driverSpeedRating){this._attributes['driver-speed-rating'] = driverSpeedRating};
  /** @type {boolean} */
  get driverSpeedRating(){return this._attributes['driver-speed-rating'];};

  /** @param {boolean} driverVehicleType **/
  set driverVehicleType(driverVehicleType){this._attributes['driver-vehicle-type'] = driverVehicleType};
  /** @type {boolean} */
  get driverVehicleType(){return this._attributes['driver-vehicle-type'];};

  /** @param {boolean} lastDriverNotificationSentAt **/
  set lastDriverNotificationSentAt(lastDriverNotificationSentAt){this._attributes['last-driver-notification-sent-at'] = lastDriverNotificationSentAt};
  /** @type {boolean} */
  get lastDriverNotificationSentAt(){return this._attributes['last-driver-notification-sent-at'];};

  /** @param {boolean} isActiveDriver **/
  set isActiveDriver(isActiveDriver){this._attributes['is-active-driver'] = isActiveDriver};
  /** @type {boolean} */
  get isActiveDriver(){return this._attributes['is-active-driver'];};

  /** @param {boolean} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {boolean} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {boolean} clientAlwaysCall **/
  set clientAlwaysCall(clientAlwaysCall){this._attributes['client-always-call'] = clientAlwaysCall};
  /** @type {boolean} */
  get clientAlwaysCall(){return this._attributes['client-always-call'];};


  // relationships


  /** @param {CommunicationPreference} communicationPreference **/
  set communicationPreference(communicationPreference){this._one['communication-preference'] = communicationPreference};
  /** @type {CommunicationPreference} */
  get communicationPreference(){return this._one['communication-preference']};



  /** @param {DriverPing[]} driverPings **/
  set driverPings(driverPings){this._many['driver-pings'] = driverPings};
  /** @type {DriverPing[]} */
  get driverPings(){return this._many['driver-pings']};

  /** @param {DriverWeek[]} driverWeeks **/
  set driverWeeks(driverWeeks){this._many['driver-weeks'] = driverWeeks};
  /** @type {DriverWeek[]} */
  get driverWeeks(){return this._many['driver-weeks']};

  /** @param {DriverDay[]} driverDays **/
  set driverDays(driverDays){this._many['driver-days'] = driverDays};
  /** @type {DriverDay[]} */
  get driverDays(){return this._many['driver-days']};

  /** @param {Order[]} deliveredOrders **/
  set deliveredOrders(deliveredOrders){this._many['delivered-orders'] = deliveredOrders};
  /** @type {Order[]} */
  get deliveredOrders(){return this._many['delivered-orders']};

  /** @param {Courier[]} couriers **/
  set couriers(couriers){this._many['couriers'] = couriers};
  /** @type {Courier[]} */
  get couriers(){return this._many['couriers']};

  /** @param {Client[]} clients **/
  set clients(clients){this._many['clients'] = clients};
  /** @type {Client[]} */
  get clients(){return this._many['clients']};

  /** @param {Role[]} roles **/
  set roles(roles){this._many['roles'] = roles};
  /** @type {Role[]} */
  get roles(){return this._many['roles']};

  /** @param {PaymentCard[]} paymentCards **/
  set paymentCards(paymentCards){this._many['payment-cards'] = paymentCards};
  /** @type {PaymentCard[]} */
  get paymentCards(){return this._many['payment-cards']};

  /** @param {Team[]} teams **/
  set teams(teams){this._many['teams'] = teams};
  /** @type {Team[]} */
  get teams(){return this._many['teams']};

  /** @param {Version[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {Version[]} */
  get versions(){return this._many['versions']};


}

/** @class UserFeedback
  * @extends {Resource}
  **/
export class UserFeedback extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'user-feedbacks', attributes, one, many);
  }

  // attributes

  /** @param {any} orderId **/
  set orderId(orderId){this._attributes['order-id'] = orderId};
  /** @type {any} */
  get orderId(){return this._attributes['order-id'];};

  /** @param {any} meal **/
  set meal(meal){this._attributes['meal'] = meal};
  /** @type {any} */
  get meal(){return this._attributes['meal'];};

  /** @param {any} website **/
  set website(website){this._attributes['website'] = website};
  /** @type {any} */
  get website(){return this._attributes['website'];};

  /** @param {any} delivery **/
  set delivery(delivery){this._attributes['delivery'] = delivery};
  /** @type {any} */
  get delivery(){return this._attributes['delivery'];};

  /** @param {any} ordering **/
  set ordering(ordering){this._attributes['ordering'] = ordering};
  /** @type {any} */
  get ordering(){return this._attributes['ordering'];};

  /** @param {any} recommend **/
  set recommend(recommend){this._attributes['recommend'] = recommend};
  /** @type {any} */
  get recommend(){return this._attributes['recommend'];};

  /** @param {any} suggestion **/
  set suggestion(suggestion){this._attributes['suggestion'] = suggestion};
  /** @type {any} */
  get suggestion(){return this._attributes['suggestion'];};

  /** @param {any} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {any} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {any} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {any} */
  get updatedAt(){return this._attributes['updated-at'];};


  // relationships





}

/** @class UserInvite
  * @extends {Resource}
  **/
export class UserInvite extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'user-invites', attributes, one, many);
  }

  // attributes

  /** @param {any} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {any} */
  get email(){return this._attributes['email'];};

  /** @param {any} firstName **/
  set firstName(firstName){this._attributes['first-name'] = firstName};
  /** @type {any} */
  get firstName(){return this._attributes['first-name'];};

  /** @param {any} lastName **/
  set lastName(lastName){this._attributes['last-name'] = lastName};
  /** @type {any} */
  get lastName(){return this._attributes['last-name'];};

  /** @param {any} phoneNumber **/
  set phoneNumber(phoneNumber){this._attributes['phone-number'] = phoneNumber};
  /** @type {any} */
  get phoneNumber(){return this._attributes['phone-number'];};

  /** @param {any} extension **/
  set extension(extension){this._attributes['extension'] = extension};
  /** @type {any} */
  get extension(){return this._attributes['extension'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};

  /** @param {Team} team **/
  set team(team){this._one['team'] = team};
  /** @type {Team} */
  get team(){return this._one['team']};

  /** @param {Courier} courier **/
  set courier(courier){this._one['courier'] = courier};
  /** @type {Courier} */
  get courier(){return this._one['courier']};

  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};




}

/** @class Version
  * @extends {Resource}
  **/
export class Version extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'versions', attributes, one, many);
  }

  // attributes

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} itemType **/
  set itemType(itemType){this._attributes['item-type'] = itemType};
  /** @type {Date} */
  get itemType(){return this._attributes['item-type'];};

  /** @param {Date} itemId **/
  set itemId(itemId){this._attributes['item-id'] = itemId};
  /** @type {Date} */
  get itemId(){return this._attributes['item-id'];};

  /** @param {Date} event **/
  set event(event){this._attributes['event'] = event};
  /** @type {Date} */
  get event(){return this._attributes['event'];};

  /** @param {Date} object **/
  set object(object){this._attributes['object'] = object};
  /** @type {Date} */
  get object(){return this._attributes['object'];};

  /** @param {Date} objectChanges **/
  set objectChanges(objectChanges){this._attributes['object-changes'] = objectChanges};
  /** @type {Date} */
  get objectChanges(){return this._attributes['object-changes'];};

  /** @param {Date} whodunnit **/
  set whodunnit(whodunnit){this._attributes['whodunnit'] = whodunnit};
  /** @type {Date} */
  get whodunnit(){return this._attributes['whodunnit'];};


  // relationships





}



const ResourceClasses = {
  ['app-configurations']:AppConfiguration,
  ['areas']:Area,
  ['area-closures']:AreaClosure,
  ['clients']:Client,
  ['client-discounts']:ClientDiscount,
  ['client-order-invoices']:ClientOrderInvoice,
  ['client-signups']:ClientSignup,
  ['communication-preferences']:CommunicationPreference,
  ['companies']:Company,
  ['contacts']:Contact,
  ['couriers']:Courier,
  ['delivery-cases']:DeliveryCase,
  ['delivery-locations']:DeliveryLocation,
  ['desk-cases']:DeskCase,
  ['dietary-tags']:DietaryTag,
  ['discount-codes']:DiscountCode,
  ['driver-days']:DriverDay,
  ['driver-payments']:DriverPayment,
  ['driver-payroll-runs']:DriverPayrollRun,
  ['driver-pings']:DriverPing,
  ['driver-resources']:DriverResource,
  ['driver-weeks']:DriverWeek,
  ['email-messages']:EmailMessage,
  ['events']:Event,
  ['giftbit-cards']:GiftbitCard,
  ['giftbit-errors']:GiftbitError,
  ['giftbit-gifts']:GiftbitGift,
  ['group-order-members']:GroupOrderMember,
  ['invoices']:Invoice,
  ['invoicing-tax-rates']:InvoicingTaxRate,
  ['locations']:Location,
  ['meal-plans']:MealPlan,
  ['menus']:Menu,
  ['menu-groups']:MenuGroup,
  ['menu-items']:MenuItem,
  ['menu-option-groups']:MenuOptionGroup,
  ['menu-option-items']:MenuOptionItem,
  ['orders']:Order,
  ['order-items']:OrderItem,
  ['payment-accounts']:PaymentAccount,
  ['payment-cards']:PaymentCard,
  ['payroll-runs']:PayrollRun,
  ['pickup-locations']:PickupLocation,
  ['promo-codes']:PromoCode,
  ['qualifying-questions']:QualifyingQuestion,
  ['restaurants']:Restaurant,
  ['restaurant-capacity-tranches']:RestaurantCapacityTranche,
  ['restaurant-closures']:RestaurantClosure,
  ['restaurant-discounts']:RestaurantDiscount,
  ['restaurant-order-invoices']:RestaurantOrderInvoice,
  ['restaurant-votes']:RestaurantVote,
  ['roles']:Role,
  ['salesforce-sync-errors']:SalesforceSyncError,
  ['service-times']:ServiceTime,
  ['tags']:Tag,
  ['teams']:Team,
  ['users']:User,
  ['user-feedbacks']:UserFeedback,
  ['user-invites']:UserInvite,
  ['versions']:Version,
};

export default ResourceClasses;

