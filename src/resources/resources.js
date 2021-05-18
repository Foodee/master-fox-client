import  Resource from './resource';


/** @class AccountingConsolidationConfiguration
  * @extends {Resource}
  **/
export class AccountingConsolidationConfiguration extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'accounting-consolidation-configurations', attributes, one, many);
  }

  // attributes

  /** @param {string} period **/
  set period(period){this._attributes['period'] = period};
  /** @type {string} */
  get period(){return this._attributes['period'];};

  /** @param {string} queryType **/
  set queryType(queryType){this._attributes['query-type'] = queryType};
  /** @type {string} */
  get queryType(){return this._attributes['query-type'];};

  /** @param {string} queryData **/
  set queryData(queryData){this._attributes['query-data'] = queryData};
  /** @type {string} */
  get queryData(){return this._attributes['query-data'];};

  /** @param {string} firstRunOn **/
  set firstRunOn(firstRunOn){this._attributes['first-run-on'] = firstRunOn};
  /** @type {string} */
  get firstRunOn(){return this._attributes['first-run-on'];};

  /** @param {string} lastRanOn **/
  set lastRanOn(lastRanOn){this._attributes['last-ran-on'] = lastRanOn};
  /** @type {string} */
  get lastRanOn(){return this._attributes['last-ran-on'];};

  /** @param {string} nextRunOn **/
  set nextRunOn(nextRunOn){this._attributes['next-run-on'] = nextRunOn};
  /** @type {string} */
  get nextRunOn(){return this._attributes['next-run-on'];};

  /** @param {string} currency **/
  set currency(currency){this._attributes['currency'] = currency};
  /** @type {string} */
  get currency(){return this._attributes['currency'];};

  /** @param {string} termDays **/
  set termDays(termDays){this._attributes['term-days'] = termDays};
  /** @type {string} */
  get termDays(){return this._attributes['term-days'];};


  // relationships


  /** @param {PaymentCard} paymentCard **/
  set paymentCard(paymentCard){this._one['payment-card'] = paymentCard};
  /** @type {PaymentCard} */
  get paymentCard(){return this._one['payment-card']};

  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};



  /** @param {AccountingConsolidationRun[]} runs **/
  set runs(runs){this._many['runs'] = runs};
  /** @type {AccountingConsolidationRun[]} */
  get runs(){return this._many['runs']};


}

/** @class AccountingConsolidationRun
  * @extends {Resource}
  **/
export class AccountingConsolidationRun extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'accounting-consolidation-runs', attributes, one, many);
  }

  // attributes

  /** @param {date} ranOn **/
  set ranOn(ranOn){this._attributes['ran-on'] = ranOn};
  /** @type {date} */
  get ranOn(){return this._attributes['ran-on'];};

  /** @param {date} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {date} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {date} period **/
  set period(period){this._attributes['period'] = period};
  /** @type {date} */
  get period(){return this._attributes['period'];};

  /** @param {date} queryType **/
  set queryType(queryType){this._attributes['query-type'] = queryType};
  /** @type {date} */
  get queryType(){return this._attributes['query-type'];};

  /** @param {date} queryData **/
  set queryData(queryData){this._attributes['query-data'] = queryData};
  /** @type {date} */
  get queryData(){return this._attributes['query-data'];};


  // relationships


  /** @param {AccountingConsolidationConfiguration} configuration **/
  set configuration(configuration){this._one['configuration'] = configuration};
  /** @type {AccountingConsolidationConfiguration} */
  get configuration(){return this._one['configuration']};

  /** @param {AccountingLedgerItem} invoice **/
  set invoice(invoice){this._one['invoice'] = invoice};
  /** @type {AccountingLedgerItem} */
  get invoice(){return this._one['invoice']};

  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};




}

/** @class AccountingLedgerItem
  * @extends {Resource}
  **/
export class AccountingLedgerItem extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'accounting-ledger-items', attributes, one, many);
  }

  // attributes

  /** @param {any} ledgerType **/
  set ledgerType(ledgerType){this._attributes['ledger-type'] = ledgerType};
  /** @type {any} */
  get ledgerType(){return this._attributes['ledger-type'];};

  /** @param {any} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {any} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {any} status **/
  set status(status){this._attributes['status'] = status};
  /** @type {any} */
  get status(){return this._attributes['status'];};

  /** @param {any} issueDate **/
  set issueDate(issueDate){this._attributes['issue-date'] = issueDate};
  /** @type {any} */
  get issueDate(){return this._attributes['issue-date'];};

  /** @param {any} currency **/
  set currency(currency){this._attributes['currency'] = currency};
  /** @type {any} */
  get currency(){return this._attributes['currency'];};

  /** @param {any} netAmount **/
  set netAmount(netAmount){this._attributes['net-amount'] = netAmount};
  /** @type {any} */
  get netAmount(){return this._attributes['net-amount'];};

  /** @param {any} totalAmount **/
  set totalAmount(totalAmount){this._attributes['total-amount'] = totalAmount};
  /** @type {any} */
  get totalAmount(){return this._attributes['total-amount'];};

  /** @param {any} taxAmount **/
  set taxAmount(taxAmount){this._attributes['tax-amount'] = taxAmount};
  /** @type {any} */
  get taxAmount(){return this._attributes['tax-amount'];};

  /** @param {any} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {any} */
  get description(){return this._attributes['description'];};

  /** @param {any} dueDate **/
  set dueDate(dueDate){this._attributes['due-date'] = dueDate};
  /** @type {any} */
  get dueDate(){return this._attributes['due-date'];};

  /** @param {any} xeroId **/
  set xeroId(xeroId){this._attributes['xero-id'] = xeroId};
  /** @type {any} */
  get xeroId(){return this._attributes['xero-id'];};

  /** @param {any} refundableAmount **/
  set refundableAmount(refundableAmount){this._attributes['refundable-amount'] = refundableAmount};
  /** @type {any} */
  get refundableAmount(){return this._attributes['refundable-amount'];};

  /** @param {any} taxTotals **/
  set taxTotals(taxTotals){this._attributes['tax-totals'] = taxTotals};
  /** @type {any} */
  get taxTotals(){return this._attributes['tax-totals'];};

  /** @param {any} aggregatedLedger **/
  set aggregatedLedger(aggregatedLedger){this._attributes['aggregated-ledger'] = aggregatedLedger};
  /** @type {any} */
  get aggregatedLedger(){return this._attributes['aggregated-ledger'];};

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {Date} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {Date} canRefund **/
  set canRefund(canRefund){this._attributes['can-refund'] = canRefund};
  /** @type {Date} */
  get canRefund(){return this._attributes['can-refund'];};


  // relationships


  /** @param {AccountingLedgerItem} parent **/
  set parent(parent){this._one['parent'] = parent};
  /** @type {AccountingLedgerItem} */
  get parent(){return this._one['parent']};



  /** @param {AccountingLineItem[]} lineItems **/
  set lineItems(lineItems){this._many['line-items'] = lineItems};
  /** @type {AccountingLineItem[]} */
  get lineItems(){return this._many['line-items']};

  /** @param {AccountingLedgerItem[]} children **/
  set children(children){this._many['children'] = children};
  /** @type {AccountingLedgerItem[]} */
  get children(){return this._many['children']};


}

/** @class AccountingLineItem
  * @extends {Resource}
  **/
export class AccountingLineItem extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'accounting-line-items', attributes, one, many);
  }

  // attributes

  /** @param {number} quantity **/
  set quantity(quantity){this._attributes['quantity'] = quantity};
  /** @type {number} */
  get quantity(){return this._attributes['quantity'];};

  /** @param {number} netAmount **/
  set netAmount(netAmount){this._attributes['net-amount'] = netAmount};
  /** @type {number} */
  get netAmount(){return this._attributes['net-amount'];};

  /** @param {number} totalAmount **/
  set totalAmount(totalAmount){this._attributes['total-amount'] = totalAmount};
  /** @type {number} */
  get totalAmount(){return this._attributes['total-amount'];};

  /** @param {number} taxAmount **/
  set taxAmount(taxAmount){this._attributes['tax-amount'] = taxAmount};
  /** @type {number} */
  get taxAmount(){return this._attributes['tax-amount'];};

  /** @param {number} taxRate **/
  set taxRate(taxRate){this._attributes['tax-rate'] = taxRate};
  /** @type {number} */
  get taxRate(){return this._attributes['tax-rate'];};

  /** @param {number} unitAmount **/
  set unitAmount(unitAmount){this._attributes['unit-amount'] = unitAmount};
  /** @type {number} */
  get unitAmount(){return this._attributes['unit-amount'];};

  /** @param {number} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {number} */
  get name(){return this._attributes['name'];};

  /** @param {number} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {number} */
  get description(){return this._attributes['description'];};

  /** @param {number} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {number} */
  get notes(){return this._attributes['notes'];};

  /** @param {number} metaData **/
  set metaData(metaData){this._attributes['meta-data'] = metaData};
  /** @type {number} */
  get metaData(){return this._attributes['meta-data'];};


  // relationships


  /** @param {AccountingLedgerItem} ledgerItem **/
  set ledgerItem(ledgerItem){this._one['ledger-item'] = ledgerItem};
  /** @type {AccountingLedgerItem} */
  get ledgerItem(){return this._one['ledger-item']};




}

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




  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
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

  /** @param {boolean} parkAndLoadTime **/
  set parkAndLoadTime(parkAndLoadTime){this._attributes['park-and-load-time'] = parkAndLoadTime};
  /** @type {boolean} */
  get parkAndLoadTime(){return this._attributes['park-and-load-time'];};

  /** @param {boolean} currency **/
  set currency(currency){this._attributes['currency'] = currency};
  /** @type {boolean} */
  get currency(){return this._attributes['currency'];};

  /** @param {boolean} adminFee **/
  set adminFee(adminFee){this._attributes['admin-fee'] = adminFee};
  /** @type {boolean} */
  get adminFee(){return this._attributes['admin-fee'];};

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

  /** @param {boolean} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {boolean} */
  get features(){return this._attributes['features'];};

  /** @param {boolean} isInternal **/
  set isInternal(isInternal){this._attributes['is-internal'] = isInternal};
  /** @type {boolean} */
  get isInternal(){return this._attributes['is-internal'];};

  /** @param {boolean} center **/
  set center(center){this._attributes['center'] = center};
  /** @type {boolean} */
  get center(){return this._attributes['center'];};


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

  /** @param {AreaClosure[]} currentWeekAreaClosures **/
  set currentWeekAreaClosures(currentWeekAreaClosures){this._many['current-week-area-closures'] = currentWeekAreaClosures};
  /** @type {AreaClosure[]} */
  get currentWeekAreaClosures(){return this._many['current-week-area-closures']};

  /** @param {PromoCode[]} promoCodes **/
  set promoCodes(promoCodes){this._many['promo-codes'] = promoCodes};
  /** @type {PromoCode[]} */
  get promoCodes(){return this._many['promo-codes']};

  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
  get versions(){return this._many['versions']};

  /** @param {HistorianVersion[]} allAreaVersions **/
  set allAreaVersions(allAreaVersions){this._many['all-area-versions'] = allAreaVersions};
  /** @type {HistorianVersion[]} */
  get allAreaVersions(){return this._many['all-area-versions']};


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

  /** @param {string} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {string} */
  get notes(){return this._attributes['notes'];};

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

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {string} xeroContactId **/
  set xeroContactId(xeroContactId){this._attributes['xero-contact-id'] = xeroContactId};
  /** @type {string} */
  get xeroContactId(){return this._attributes['xero-contact-id'];};

  /** @param {string} xeroSynchronizedAt **/
  set xeroSynchronizedAt(xeroSynchronizedAt){this._attributes['xero-synchronized-at'] = xeroSynchronizedAt};
  /** @type {string} */
  get xeroSynchronizedAt(){return this._attributes['xero-synchronized-at'];};

  /** @param {string} waiveDeliveryFee **/
  set waiveDeliveryFee(waiveDeliveryFee){this._attributes['waive-delivery-fee'] = waiveDeliveryFee};
  /** @type {string} */
  get waiveDeliveryFee(){return this._attributes['waive-delivery-fee'];};

  /** @param {string} waiveServiceFee **/
  set waiveServiceFee(waiveServiceFee){this._attributes['waive-service-fee'] = waiveServiceFee};
  /** @type {string} */
  get waiveServiceFee(){return this._attributes['waive-service-fee'];};

  /** @param {string} waiveDeliveryFeeAccountingCode **/
  set waiveDeliveryFeeAccountingCode(waiveDeliveryFeeAccountingCode){this._attributes['waive-delivery-fee-accounting-code'] = waiveDeliveryFeeAccountingCode};
  /** @type {string} */
  get waiveDeliveryFeeAccountingCode(){return this._attributes['waive-delivery-fee-accounting-code'];};

  /** @param {string} waiveServiceFeeAccountingCode **/
  set waiveServiceFeeAccountingCode(waiveServiceFeeAccountingCode){this._attributes['waive-service-fee-accounting-code'] = waiveServiceFeeAccountingCode};
  /** @type {string} */
  get waiveServiceFeeAccountingCode(){return this._attributes['waive-service-fee-accounting-code'];};

  /** @param {string} waiveDeliveryFeeDescription **/
  set waiveDeliveryFeeDescription(waiveDeliveryFeeDescription){this._attributes['waive-delivery-fee-description'] = waiveDeliveryFeeDescription};
  /** @type {string} */
  get waiveDeliveryFeeDescription(){return this._attributes['waive-delivery-fee-description'];};

  /** @param {string} waiveServiceFeeDescription **/
  set waiveServiceFeeDescription(waiveServiceFeeDescription){this._attributes['waive-service-fee-description'] = waiveServiceFeeDescription};
  /** @type {string} */
  get waiveServiceFeeDescription(){return this._attributes['waive-service-fee-description'];};

  /** @param {string} uuid **/
  set uuid(uuid){this._attributes['uuid'] = uuid};
  /** @type {string} */
  get uuid(){return this._attributes['uuid'];};

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

  /** @param {string} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {string} */
  get features(){return this._attributes['features'];};

  /** @param {string} plan **/
  set plan(plan){this._attributes['plan'] = plan};
  /** @type {string} */
  get plan(){return this._attributes['plan'];};

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

  /** @param {string} isPayingServiceFee **/
  set isPayingServiceFee(isPayingServiceFee){this._attributes['is-paying-service-fee'] = isPayingServiceFee};
  /** @type {string} */
  get isPayingServiceFee(){return this._attributes['is-paying-service-fee'];};

  /** @param {string} cutleryPreference **/
  set cutleryPreference(cutleryPreference){this._attributes['cutlery-preference'] = cutleryPreference};
  /** @type {string} */
  get cutleryPreference(){return this._attributes['cutlery-preference'];};

  /** @param {string} manageTeams **/
  set manageTeams(manageTeams){this._attributes['manage-teams'] = manageTeams};
  /** @type {string} */
  get manageTeams(){return this._attributes['manage-teams'];};

  /** @param {string} limitShareNotifications **/
  set limitShareNotifications(limitShareNotifications){this._attributes['limit-share-notifications'] = limitShareNotifications};
  /** @type {string} */
  get limitShareNotifications(){return this._attributes['limit-share-notifications'];};

  /** @param {string} companyName **/
  set companyName(companyName){this._attributes['company-name'] = companyName};
  /** @type {string} */
  get companyName(){return this._attributes['company-name'];};

  /** @param {string} planIcalUrl **/
  set planIcalUrl(planIcalUrl){this._attributes['plan-ical-url'] = planIcalUrl};
  /** @type {string} */
  get planIcalUrl(){return this._attributes['plan-ical-url'];};

  /** @param {string} storage **/
  set storage(storage){this._attributes['storage'] = storage};
  /** @type {string} */
  get storage(){return this._attributes['storage'];};

  /** @param {string} state **/
  set state(state){this._attributes['state'] = state};
  /** @type {string} */
  get state(){return this._attributes['state'];};

  /** @param {string} recentSignup **/
  set recentSignup(recentSignup){this._attributes['recent-signup'] = recentSignup};
  /** @type {string} */
  get recentSignup(){return this._attributes['recent-signup'];};

  /** @param {string} ordersCount **/
  set ordersCount(ordersCount){this._attributes['orders-count'] = ordersCount};
  /** @type {string} */
  get ordersCount(){return this._attributes['orders-count'];};


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

  /** @param {SubscriptionPlan} subscriptionPlan **/
  set subscriptionPlan(subscriptionPlan){this._one['subscription-plan'] = subscriptionPlan};
  /** @type {SubscriptionPlan} */
  get subscriptionPlan(){return this._one['subscription-plan']};

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

  /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
  set preferenceProfile(preferenceProfile){this._one['preference-profile'] = preferenceProfile};
  /** @type {MealPlanningPreferenceProfile} */
  get preferenceProfile(){return this._one['preference-profile']};

  /** @param {InvoicingTaxRate} taxRate **/
  set taxRate(taxRate){this._one['tax-rate'] = taxRate};
  /** @type {InvoicingTaxRate} */
  get taxRate(){return this._one['tax-rate']};

  /** @param {GiftbitCard} giftbitCard **/
  set giftbitCard(giftbitCard){this._one['giftbit-card'] = giftbitCard};
  /** @type {GiftbitCard} */
  get giftbitCard(){return this._one['giftbit-card']};

  /** @param {CurrenciesWallet} wallet **/
  set wallet(wallet){this._one['wallet'] = wallet};
  /** @type {CurrenciesWallet} */
  get wallet(){return this._one['wallet']};



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

  /** @param {Contact[]} contacts **/
  set contacts(contacts){this._many['contacts'] = contacts};
  /** @type {Contact[]} */
  get contacts(){return this._many['contacts']};

  /** @param {Team[]} teams **/
  set teams(teams){this._many['teams'] = teams};
  /** @type {Team[]} */
  get teams(){return this._many['teams']};

  /** @param {HistorianVersion[]} allClientVersions **/
  set allClientVersions(allClientVersions){this._many['all-client-versions'] = allClientVersions};
  /** @type {HistorianVersion[]} */
  get allClientVersions(){return this._many['all-client-versions']};

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
  get versions(){return this._many['versions']};

  /** @param {MealPlanningTemplate[]} mealPlanningTemplates **/
  set mealPlanningTemplates(mealPlanningTemplates){this._many['meal-planning-templates'] = mealPlanningTemplates};
  /** @type {MealPlanningTemplate[]} */
  get mealPlanningTemplates(){return this._many['meal-planning-templates']};

  /** @param {MealPlanningInstance[]} mealPlanningInstances **/
  set mealPlanningInstances(mealPlanningInstances){this._many['meal-planning-instances'] = mealPlanningInstances};
  /** @type {MealPlanningInstance[]} */
  get mealPlanningInstances(){return this._many['meal-planning-instances']};

  /** @param {MealPlanningReservation[]} mealPlanningReservations **/
  set mealPlanningReservations(mealPlanningReservations){this._many['meal-planning-reservations'] = mealPlanningReservations};
  /** @type {MealPlanningReservation[]} */
  get mealPlanningReservations(){return this._many['meal-planning-reservations']};

  /** @param {ClientDiscount[]} clientDiscounts **/
  set clientDiscounts(clientDiscounts){this._many['client-discounts'] = clientDiscounts};
  /** @type {ClientDiscount[]} */
  get clientDiscounts(){return this._many['client-discounts']};

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

  /** @param {Owner} owner **/
  set owner(owner){this._one['owner'] = owner};
  /** @type {Owner} */
  get owner(){return this._one['owner']};




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

  /** @param {any} country **/
  set country(country){this._attributes['country'] = country};
  /** @type {any} */
  get country(){return this._attributes['country'];};

  /** @param {any} building **/
  set building(building){this._attributes['building'] = building};
  /** @type {any} */
  get building(){return this._attributes['building'];};

  /** @param {any} street **/
  set street(street){this._attributes['street'] = street};
  /** @type {any} */
  get street(){return this._attributes['street'];};

  /** @param {any} region **/
  set region(region){this._attributes['region'] = region};
  /** @type {any} */
  get region(){return this._attributes['region'];};

  /** @param {any} city **/
  set city(city){this._attributes['city'] = city};
  /** @type {any} */
  get city(){return this._attributes['city'];};

  /** @param {any} addressCode **/
  set addressCode(addressCode){this._attributes['address-code'] = addressCode};
  /** @type {any} */
  get addressCode(){return this._attributes['address-code'];};

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

  /** @param {any} deliveryNotes **/
  set deliveryNotes(deliveryNotes){this._attributes['delivery-notes'] = deliveryNotes};
  /** @type {any} */
  get deliveryNotes(){return this._attributes['delivery-notes'];};

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

  /** @param {any} howDidYouHearAboutUs **/
  set howDidYouHearAboutUs(howDidYouHearAboutUs){this._attributes['how-did-you-hear-about-us'] = howDidYouHearAboutUs};
  /** @type {any} */
  get howDidYouHearAboutUs(){return this._attributes['how-did-you-hear-about-us'];};

  /** @param {any} howDidYouHearAboutUsOther **/
  set howDidYouHearAboutUsOther(howDidYouHearAboutUsOther){this._attributes['how-did-you-hear-about-us-other'] = howDidYouHearAboutUsOther};
  /** @type {any} */
  get howDidYouHearAboutUsOther(){return this._attributes['how-did-you-hear-about-us-other'];};

  /** @param {any} ordersRegularly **/
  set ordersRegularly(ordersRegularly){this._attributes['orders-regularly'] = ordersRegularly};
  /** @type {any} */
  get ordersRegularly(){return this._attributes['orders-regularly'];};

  /** @param {any} ordersForEvents **/
  set ordersForEvents(ordersForEvents){this._attributes['orders-for-events'] = ordersForEvents};
  /** @type {any} */
  get ordersForEvents(){return this._attributes['orders-for-events'];};

  /** @param {any} ordersForThemselves **/
  set ordersForThemselves(ordersForThemselves){this._attributes['orders-for-themselves'] = ordersForThemselves};
  /** @type {any} */
  get ordersForThemselves(){return this._attributes['orders-for-themselves'];};

  /** @param {any} howManyPeopleDoYouFeed **/
  set howManyPeopleDoYouFeed(howManyPeopleDoYouFeed){this._attributes['how-many-people-do-you-feed'] = howManyPeopleDoYouFeed};
  /** @type {any} */
  get howManyPeopleDoYouFeed(){return this._attributes['how-many-people-do-you-feed'];};

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

  /** @param {any} referrer **/
  set referrer(referrer){this._attributes['referrer'] = referrer};
  /** @type {any} */
  get referrer(){return this._attributes['referrer'];};

  /** @param {any} smsEnabled **/
  set smsEnabled(smsEnabled){this._attributes['sms-enabled'] = smsEnabled};
  /** @type {any} */
  get smsEnabled(){return this._attributes['sms-enabled'];};

  /** @param {any} newFlow **/
  set newFlow(newFlow){this._attributes['new-flow'] = newFlow};
  /** @type {any} */
  get newFlow(){return this._attributes['new-flow'];};


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

  /** @param {string} apiType **/
  set apiType(apiType){this._attributes['api-type'] = apiType};
  /** @type {string} */
  get apiType(){return this._attributes['api-type'];};

  /** @param {string} alwaysSync **/
  set alwaysSync(alwaysSync){this._attributes['always-sync'] = alwaysSync};
  /** @type {string} */
  get alwaysSync(){return this._attributes['always-sync'];};

  /** @param {string} thirdPartyLogisticsConfiguration **/
  set thirdPartyLogisticsConfiguration(thirdPartyLogisticsConfiguration){this._attributes['third-party-logistics-configuration'] = thirdPartyLogisticsConfiguration};
  /** @type {string} */
  get thirdPartyLogisticsConfiguration(){return this._attributes['third-party-logistics-configuration'];};


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

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
  get versions(){return this._many['versions']};


}

/** @class CurrenciesCurrency
  * @extends {Resource}
  **/
export class CurrenciesCurrency extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'currencies-currencies', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} symbol **/
  set symbol(symbol){this._attributes['symbol'] = symbol};
  /** @type {string} */
  get symbol(){return this._attributes['symbol'];};


  // relationships





}

/** @class CurrenciesTransaction
  * @extends {Resource}
  **/
export class CurrenciesTransaction extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'currencies-transactions', attributes, one, many);
  }

  // attributes

  /** @param {any} value **/
  set value(value){this._attributes['value'] = value};
  /** @type {any} */
  get value(){return this._attributes['value'];};

  /** @param {any} agentName **/
  set agentName(agentName){this._attributes['agent-name'] = agentName};
  /** @type {any} */
  get agentName(){return this._attributes['agent-name'];};

  /** @param {any} agentEmail **/
  set agentEmail(agentEmail){this._attributes['agent-email'] = agentEmail};
  /** @type {any} */
  get agentEmail(){return this._attributes['agent-email'];};

  /** @param {any} subjectName **/
  set subjectName(subjectName){this._attributes['subject-name'] = subjectName};
  /** @type {any} */
  get subjectName(){return this._attributes['subject-name'];};

  /** @param {any} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {any} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {any} reason **/
  set reason(reason){this._attributes['reason'] = reason};
  /** @type {any} */
  get reason(){return this._attributes['reason'];};

  /** @param {any} event **/
  set event(event){this._attributes['event'] = event};
  /** @type {any} */
  get event(){return this._attributes['event'];};


  // relationships


  /** @param {Agent} agent **/
  set agent(agent){this._one['agent'] = agent};
  /** @type {Agent} */
  get agent(){return this._one['agent']};

  /** @param {Subject} subject **/
  set subject(subject){this._one['subject'] = subject};
  /** @type {Subject} */
  get subject(){return this._one['subject']};




}

/** @class CurrenciesWallet
  * @extends {Resource}
  **/
export class CurrenciesWallet extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'currencies-wallets', attributes, one, many);
  }

  // attributes

  /** @param {jsonb} balances **/
  set balances(balances){this._attributes['balances'] = balances};
  /** @type {jsonb} */
  get balances(){return this._attributes['balances'];};


  // relationships


  /** @param {Owner} owner **/
  set owner(owner){this._one['owner'] = owner};
  /** @type {Owner} */
  get owner(){return this._one['owner']};



  /** @param {Currencies::Transaction[]} transactions **/
  set transactions(transactions){this._many['transactions'] = transactions};
  /** @type {Currencies::Transaction[]} */
  get transactions(){return this._many['transactions']};


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

  /** @param {any} addressLine1 **/
  set addressLine1(addressLine1){this._attributes['address-line-1'] = addressLine1};
  /** @type {any} */
  get addressLine1(){return this._attributes['address-line-1'];};

  /** @param {any} addressLine2 **/
  set addressLine2(addressLine2){this._attributes['address-line-2'] = addressLine2};
  /** @type {any} */
  get addressLine2(){return this._attributes['address-line-2'];};

  /** @param {any} area **/
  set area(area){this._attributes['area'] = area};
  /** @type {any} */
  get area(){return this._attributes['area'];};

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

  /** @param {any} rawAddress **/
  set rawAddress(rawAddress){this._attributes['raw-address'] = rawAddress};
  /** @type {any} */
  get rawAddress(){return this._attributes['raw-address'];};

  /** @param {any} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {any} */
  get notes(){return this._attributes['notes'];};


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

  /** @param {string} foodLabelName **/
  set foodLabelName(foodLabelName){this._attributes['food-label-name'] = foodLabelName};
  /** @type {string} */
  get foodLabelName(){return this._attributes['food-label-name'];};

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

  /** @param {string} tagType **/
  set tagType(tagType){this._attributes['tag-type'] = tagType};
  /** @type {string} */
  get tagType(){return this._attributes['tag-type'];};


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

  /** @param {any} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {any} */
  get name(){return this._attributes['name'];};

  /** @param {any} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {any} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {any} leadTime **/
  set leadTime(leadTime){this._attributes['lead-time'] = leadTime};
  /** @type {any} */
  get leadTime(){return this._attributes['lead-time'];};

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

  /** @param {any} usageReport **/
  set usageReport(usageReport){this._attributes['usage-report'] = usageReport};
  /** @type {any} */
  get usageReport(){return this._attributes['usage-report'];};


  // relationships





}

/** @class FeatureFlagDescription
  * @extends {Resource}
  **/
export class FeatureFlagDescription extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'feature-flag-descriptions', attributes, one, many);
  }

  // attributes

  /** @param {string} flagId **/
  set flagId(flagId){this._attributes['flag-id'] = flagId};
  /** @type {string} */
  get flagId(){return this._attributes['flag-id'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} isPlanFeature **/
  set isPlanFeature(isPlanFeature){this._attributes['is-plan-feature'] = isPlanFeature};
  /** @type {string} */
  get isPlanFeature(){return this._attributes['is-plan-feature'];};


  // relationships




  /** @param {SubscriptionPlan[]} subscriptionPlans **/
  set subscriptionPlans(subscriptionPlans){this._many['subscription-plans'] = subscriptionPlans};
  /** @type {SubscriptionPlan[]} */
  get subscriptionPlans(){return this._many['subscription-plans']};


}

/** @class FoodType
  * @extends {Resource}
  **/
export class FoodType extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'food-types', attributes, one, many);
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

  /** @param {any} dollarsToPoints **/
  set dollarsToPoints(dollarsToPoints){this._attributes['dollars-to-points'] = dollarsToPoints};
  /** @type {any} */
  get dollarsToPoints(){return this._attributes['dollars-to-points'];};

  /** @param {any} maxFoodeePriceInCents **/
  set maxFoodeePriceInCents(maxFoodeePriceInCents){this._attributes['max-foodee-price-in-cents'] = maxFoodeePriceInCents};
  /** @type {any} */
  get maxFoodeePriceInCents(){return this._attributes['max-foodee-price-in-cents'];};

  /** @param {any} minFoodeePriceInCents **/
  set minFoodeePriceInCents(minFoodeePriceInCents){this._attributes['min-foodee-price-in-cents'] = minFoodeePriceInCents};
  /** @type {any} */
  get minFoodeePriceInCents(){return this._attributes['min-foodee-price-in-cents'];};


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

  /** @param {string} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {string} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {string} notifyByEmailOnDelivery **/
  set notifyByEmailOnDelivery(notifyByEmailOnDelivery){this._attributes['notify-by-email-on-delivery'] = notifyByEmailOnDelivery};
  /** @type {string} */
  get notifyByEmailOnDelivery(){return this._attributes['notify-by-email-on-delivery'];};

  /** @param {string} notifyBySMSOnDelivery **/
  set notifyBySMSOnDelivery(notifyBySMSOnDelivery){this._attributes['notify-by-sms-on-delivery'] = notifyBySMSOnDelivery};
  /** @type {string} */
  get notifyBySMSOnDelivery(){return this._attributes['notify-by-sms-on-delivery'];};

  /** @param {string} notificationPreferences **/
  set notificationPreferences(notificationPreferences){this._attributes['notification-preferences'] = notificationPreferences};
  /** @type {string} */
  get notificationPreferences(){return this._attributes['notification-preferences'];};

  /** @param {string} customFields **/
  set customFields(customFields){this._attributes['custom-fields'] = customFields};
  /** @type {string} */
  get customFields(){return this._attributes['custom-fields'];};


  // relationships


  /** @param {User} user **/
  set user(user){this._one['user'] = user};
  /** @type {User} */
  get user(){return this._one['user']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};

  /** @param {AccountingLedgerItem} invoice **/
  set invoice(invoice){this._one['invoice'] = invoice};
  /** @type {AccountingLedgerItem} */
  get invoice(){return this._one['invoice']};



  /** @param {OrderItem[]} orderItems **/
  set orderItems(orderItems){this._many['order-items'] = orderItems};
  /** @type {OrderItem[]} */
  get orderItems(){return this._many['order-items']};


}

/** @class HistorianVersion
  * @extends {Resource}
  **/
export class HistorianVersion extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'historian-versions', attributes, one, many);
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

  /** @param {Date} verb **/
  set verb(verb){this._attributes['verb'] = verb};
  /** @type {Date} */
  get verb(){return this._attributes['verb'];};

  /** @param {Date} object **/
  set object(object){this._attributes['object'] = object};
  /** @type {Date} */
  get object(){return this._attributes['object'];};

  /** @param {Date} objectChanges **/
  set objectChanges(objectChanges){this._attributes['object-changes'] = objectChanges};
  /** @type {Date} */
  get objectChanges(){return this._attributes['object-changes'];};

  /** @param {Date} misc **/
  set misc(misc){this._attributes['misc'] = misc};
  /** @type {Date} */
  get misc(){return this._attributes['misc'];};

  /** @param {Date} whodunnit **/
  set whodunnit(whodunnit){this._attributes['whodunnit'] = whodunnit};
  /** @type {Date} */
  get whodunnit(){return this._attributes['whodunnit'];};

  /** @param {Date} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {Date} */
  get email(){return this._attributes['email'];};


  // relationships





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

/** @class InvoicingLedgerItem
  * @extends {Resource}
  **/
export class InvoicingLedgerItem extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'invoicing-ledger-items', attributes, one, many);
  }

  // attributes

  /** @param {Date} issueDate **/
  set issueDate(issueDate){this._attributes['issue-date'] = issueDate};
  /** @type {Date} */
  get issueDate(){return this._attributes['issue-date'];};

  /** @param {Date} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {Date} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {Date} currency **/
  set currency(currency){this._attributes['currency'] = currency};
  /** @type {Date} */
  get currency(){return this._attributes['currency'];};

  /** @param {Date} totalAmount **/
  set totalAmount(totalAmount){this._attributes['total-amount'] = totalAmount};
  /** @type {Date} */
  get totalAmount(){return this._attributes['total-amount'];};

  /** @param {Date} netAmount **/
  set netAmount(netAmount){this._attributes['net-amount'] = netAmount};
  /** @type {Date} */
  get netAmount(){return this._attributes['net-amount'];};

  /** @param {Date} taxAmount **/
  set taxAmount(taxAmount){this._attributes['tax-amount'] = taxAmount};
  /** @type {Date} */
  get taxAmount(){return this._attributes['tax-amount'];};

  /** @param {Date} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {Date} */
  get description(){return this._attributes['description'];};

  /** @param {Date} dueDate **/
  set dueDate(dueDate){this._attributes['due-date'] = dueDate};
  /** @type {Date} */
  get dueDate(){return this._attributes['due-date'];};

  /** @param {Date} status **/
  set status(status){this._attributes['status'] = status};
  /** @type {Date} */
  get status(){return this._attributes['status'];};

  /** @param {Date} customFields **/
  set customFields(customFields){this._attributes['custom-fields'] = customFields};
  /** @type {Date} */
  get customFields(){return this._attributes['custom-fields'];};

  /** @param {Date} senderDetails **/
  set senderDetails(senderDetails){this._attributes['sender-details'] = senderDetails};
  /** @type {Date} */
  get senderDetails(){return this._attributes['sender-details'];};

  /** @param {Date} pdf **/
  set pdf(pdf){this._attributes['pdf'] = pdf};
  /** @type {Date} */
  get pdf(){return this._attributes['pdf'];};

  /** @param {Date} xeroId **/
  set xeroId(xeroId){this._attributes['xero-id'] = xeroId};
  /** @type {Date} */
  get xeroId(){return this._attributes['xero-id'];};

  /** @param {Date} ledgerType **/
  set ledgerType(ledgerType){this._attributes['ledger-type'] = ledgerType};
  /** @type {Date} */
  get ledgerType(){return this._attributes['ledger-type'];};


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




  /** @param {Area[]} areas **/
  set areas(areas){this._many['areas'] = areas};
  /** @type {Area[]} */
  get areas(){return this._many['areas']};


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

  /** @param {*} addressLine2 **/
  set addressLine2(addressLine2){this._attributes['address-line-2'] = addressLine2};
  /** @type {*} */
  get addressLine2(){return this._attributes['address-line-2'];};

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

/** @class LogisticsArrivalEstimate
  * @extends {Resource}
  **/
export class LogisticsArrivalEstimate extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'logistics-arrival-estimates', attributes, one, many);
  }

  // attributes

  /** @param {any} pickupEstimate **/
  set pickupEstimate(pickupEstimate){this._attributes['pickup-estimate'] = pickupEstimate};
  /** @type {any} */
  get pickupEstimate(){return this._attributes['pickup-estimate'];};

  /** @param {any} deliveryEstimate **/
  set deliveryEstimate(deliveryEstimate){this._attributes['delivery-estimate'] = deliveryEstimate};
  /** @type {any} */
  get deliveryEstimate(){return this._attributes['delivery-estimate'];};

  /** @param {any} orderId **/
  set orderId(orderId){this._attributes['order-id'] = orderId};
  /** @type {any} */
  get orderId(){return this._attributes['order-id'];};


  // relationships





}

/** @class LogisticsDelivery
  * @extends {Resource}
  **/
export class LogisticsDelivery extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'logistics-deliveries', attributes, one, many);
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

  /** @param {string} deskCases **/
  set deskCases(deskCases){this._attributes['desk-cases'] = deskCases};
  /** @type {string} */
  get deskCases(){return this._attributes['desk-cases'];};

  /** @param {string} deliveryCases **/
  set deliveryCases(deliveryCases){this._attributes['delivery-cases'] = deliveryCases};
  /** @type {string} */
  get deliveryCases(){return this._attributes['delivery-cases'];};

  /** @param {string} deliverAt **/
  set deliverAt(deliverAt){this._attributes['deliver-at'] = deliverAt};
  /** @type {string} */
  get deliverAt(){return this._attributes['deliver-at'];};

  /** @param {string} deliveredAt **/
  set deliveredAt(deliveredAt){this._attributes['delivered-at'] = deliveredAt};
  /** @type {string} */
  get deliveredAt(){return this._attributes['delivered-at'];};

  /** @param {string} deliverOn **/
  set deliverOn(deliverOn){this._attributes['deliver-on'] = deliverOn};
  /** @type {string} */
  get deliverOn(){return this._attributes['deliver-on'];};

  /** @param {string} deliveryEstimate **/
  set deliveryEstimate(deliveryEstimate){this._attributes['delivery-estimate'] = deliveryEstimate};
  /** @type {string} */
  get deliveryEstimate(){return this._attributes['delivery-estimate'];};

  /** @param {string} flag **/
  set flag(flag){this._attributes['flag'] = flag};
  /** @type {string} */
  get flag(){return this._attributes['flag'];};

  /** @param {string} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {string} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {string} isFoodhall **/
  set isFoodhall(isFoodhall){this._attributes['is-foodhall'] = isFoodhall};
  /** @type {string} */
  get isFoodhall(){return this._attributes['is-foodhall'];};

  /** @param {string} isMealPlanOrder **/
  set isMealPlanOrder(isMealPlanOrder){this._attributes['is-meal-plan-order'] = isMealPlanOrder};
  /** @type {string} */
  get isMealPlanOrder(){return this._attributes['is-meal-plan-order'];};

  /** @param {string} isSameDay **/
  set isSameDay(isSameDay){this._attributes['is-same-day'] = isSameDay};
  /** @type {string} */
  get isSameDay(){return this._attributes['is-same-day'];};

  /** @param {string} lastMinute **/
  set lastMinute(lastMinute){this._attributes['last-minute'] = lastMinute};
  /** @type {string} */
  get lastMinute(){return this._attributes['last-minute'];};

  /** @param {string} logisticsType **/
  set logisticsType(logisticsType){this._attributes['logistics-type'] = logisticsType};
  /** @type {string} */
  get logisticsType(){return this._attributes['logistics-type'];};

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

  /** @param {string} orderImages **/
  set orderImages(orderImages){this._attributes['order-images'] = orderImages};
  /** @type {string} */
  get orderImages(){return this._attributes['order-images'];};

  /** @param {jsonb} orderItems **/
  set orderItems(orderItems){this._attributes['order-items'] = orderItems};
  /** @type {jsonb} */
  get orderItems(){return this._attributes['order-items'];};

  /** @param {string} orderType **/
  set orderType(orderType){this._attributes['order-type'] = orderType};
  /** @type {string} */
  get orderType(){return this._attributes['order-type'];};

  /** @param {string} pickupAt **/
  set pickupAt(pickupAt){this._attributes['pickup-at'] = pickupAt};
  /** @type {string} */
  get pickupAt(){return this._attributes['pickup-at'];};

  /** @param {string} pickedUpAt **/
  set pickedUpAt(pickedUpAt){this._attributes['picked-up-at'] = pickedUpAt};
  /** @type {string} */
  get pickedUpAt(){return this._attributes['picked-up-at'];};

  /** @param {string} state **/
  set state(state){this._attributes['state'] = state};
  /** @type {string} */
  get state(){return this._attributes['state'];};

  /** @param {string} syncedWithThirdPartyLogisticsAt **/
  set syncedWithThirdPartyLogisticsAt(syncedWithThirdPartyLogisticsAt){this._attributes['synced-with-third-party-logistics-at'] = syncedWithThirdPartyLogisticsAt};
  /** @type {string} */
  get syncedWithThirdPartyLogisticsAt(){return this._attributes['synced-with-third-party-logistics-at'];};

  /** @param {string} thirdPartyLogisticsException **/
  set thirdPartyLogisticsException(thirdPartyLogisticsException){this._attributes['third-party-logistics-exception'] = thirdPartyLogisticsException};
  /** @type {string} */
  get thirdPartyLogisticsException(){return this._attributes['third-party-logistics-exception'];};

  /** @param {string} thirdPartyLogisticsId **/
  set thirdPartyLogisticsId(thirdPartyLogisticsId){this._attributes['third-party-logistics-id'] = thirdPartyLogisticsId};
  /** @type {string} */
  get thirdPartyLogisticsId(){return this._attributes['third-party-logistics-id'];};

  /** @param {string} thirdPartyLogisticsTrackingUrl **/
  set thirdPartyLogisticsTrackingUrl(thirdPartyLogisticsTrackingUrl){this._attributes['third-party-logistics-tracking-url'] = thirdPartyLogisticsTrackingUrl};
  /** @type {string} */
  get thirdPartyLogisticsTrackingUrl(){return this._attributes['third-party-logistics-tracking-url'];};

  /** @param {string} totalAmount **/
  set totalAmount(totalAmount){this._attributes['total-amount'] = totalAmount};
  /** @type {string} */
  get totalAmount(){return this._attributes['total-amount'];};

  /** @param {jsonb} contact **/
  set contact(contact){this._attributes['contact'] = contact};
  /** @type {jsonb} */
  get contact(){return this._attributes['contact'];};

  /** @param {jsonb} owner **/
  set owner(owner){this._attributes['owner'] = owner};
  /** @type {jsonb} */
  get owner(){return this._attributes['owner'];};

  /** @param {jsonb} client **/
  set client(client){this._attributes['client'] = client};
  /** @type {jsonb} */
  get client(){return this._attributes['client'];};

  /** @param {jsonb} restaurant **/
  set restaurant(restaurant){this._attributes['restaurant'] = restaurant};
  /** @type {jsonb} */
  get restaurant(){return this._attributes['restaurant'];};

  /** @param {jsonb} clientLocation **/
  set clientLocation(clientLocation){this._attributes['client-location'] = clientLocation};
  /** @type {jsonb} */
  get clientLocation(){return this._attributes['client-location'];};

  /** @param {jsonb} restaurantLocation **/
  set restaurantLocation(restaurantLocation){this._attributes['restaurant-location'] = restaurantLocation};
  /** @type {jsonb} */
  get restaurantLocation(){return this._attributes['restaurant-location'];};


  // relationships


  /** @param {User} driver **/
  set driver(driver){this._one['driver'] = driver};
  /** @type {User} */
  get driver(){return this._one['driver']};

  /** @param {Courier} courier **/
  set courier(courier){this._one['courier'] = courier};
  /** @type {Courier} */
  get courier(){return this._one['courier']};

  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




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

  /** @param {string} customCss **/
  set customCss(customCss){this._attributes['custom-css'] = customCss};
  /** @type {string} */
  get customCss(){return this._attributes['custom-css'];};

  /** @param {string} displayName **/
  set displayName(displayName){this._attributes['display-name'] = displayName};
  /** @type {string} */
  get displayName(){return this._attributes['display-name'];};

  /** @param {string} nameLabel **/
  set nameLabel(nameLabel){this._attributes['name-label'] = nameLabel};
  /** @type {string} */
  get nameLabel(){return this._attributes['name-label'];};

  /** @param {string} nameLabelPlaceholder **/
  set nameLabelPlaceholder(nameLabelPlaceholder){this._attributes['name-label-placeholder'] = nameLabelPlaceholder};
  /** @type {string} */
  get nameLabelPlaceholder(){return this._attributes['name-label-placeholder'];};

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

  /** @param {string} defaultOpensAtLeadTime **/
  set defaultOpensAtLeadTime(defaultOpensAtLeadTime){this._attributes['default-opens-at-lead-time'] = defaultOpensAtLeadTime};
  /** @type {string} */
  get defaultOpensAtLeadTime(){return this._attributes['default-opens-at-lead-time'];};

  /** @param {string} alwaysRequestDepartment **/
  set alwaysRequestDepartment(alwaysRequestDepartment){this._attributes['always-request-department'] = alwaysRequestDepartment};
  /** @type {string} */
  get alwaysRequestDepartment(){return this._attributes['always-request-department'];};

  /** @param {string} departmentLabel **/
  set departmentLabel(departmentLabel){this._attributes['department-label'] = departmentLabel};
  /** @type {string} */
  get departmentLabel(){return this._attributes['department-label'];};

  /** @param {string} departmentOptions **/
  set departmentOptions(departmentOptions){this._attributes['department-options'] = departmentOptions};
  /** @type {string} */
  get departmentOptions(){return this._attributes['department-options'];};

  /** @param {string} isDepartmentRequired **/
  set isDepartmentRequired(isDepartmentRequired){this._attributes['is-department-required'] = isDepartmentRequired};
  /** @type {string} */
  get isDepartmentRequired(){return this._attributes['is-department-required'];};

  /** @param {string} ssoType **/
  set ssoType(ssoType){this._attributes['sso-type'] = ssoType};
  /** @type {string} */
  get ssoType(){return this._attributes['sso-type'];};

  /** @param {string} samlSettings **/
  set samlSettings(samlSettings){this._attributes['saml-settings'] = samlSettings};
  /** @type {string} */
  get samlSettings(){return this._attributes['saml-settings'];};

  /** @param {string} samlIdpMetadataXml **/
  set samlIdpMetadataXml(samlIdpMetadataXml){this._attributes['saml-idp-metadata-xml'] = samlIdpMetadataXml};
  /** @type {string} */
  get samlIdpMetadataXml(){return this._attributes['saml-idp-metadata-xml'];};

  /** @param {string} oauthSettings **/
  set oauthSettings(oauthSettings){this._attributes['oauth-settings'] = oauthSettings};
  /** @type {string} */
  get oauthSettings(){return this._attributes['oauth-settings'];};

  /** @param {string} password **/
  set password(password){this._attributes['password'] = password};
  /** @type {string} */
  get password(){return this._attributes['password'];};

  /** @param {jsonb} customFields **/
  set customFields(customFields){this._attributes['custom-fields'] = customFields};
  /** @type {jsonb} */
  get customFields(){return this._attributes['custom-fields'];};


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

/** @class MealPlanningEvent
  * @extends {Resource}
  **/
export class MealPlanningEvent extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-events', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} leadTime **/
  set leadTime(leadTime){this._attributes['lead-time'] = leadTime};
  /** @type {string} */
  get leadTime(){return this._attributes['lead-time'];};

  /** @param {string} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {string} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {string} deliverAt **/
  set deliverAt(deliverAt){this._attributes['deliver-at'] = deliverAt};
  /** @type {string} */
  get deliverAt(){return this._attributes['deliver-at'];};

  /** @param {string} pickupAt **/
  set pickupAt(pickupAt){this._attributes['pickup-at'] = pickupAt};
  /** @type {string} */
  get pickupAt(){return this._attributes['pickup-at'];};

  /** @param {string} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {string} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {string} mealId **/
  set mealId(mealId){this._attributes['meal-id'] = mealId};
  /** @type {string} */
  get mealId(){return this._attributes['meal-id'];};

  /** @param {string} userOrderMap **/
  set userOrderMap(userOrderMap){this._attributes['user-order-map'] = userOrderMap};
  /** @type {string} */
  get userOrderMap(){return this._attributes['user-order-map'];};

  /** @param {string} createdFromTemplate **/
  set createdFromTemplate(createdFromTemplate){this._attributes['created-from-template'] = createdFromTemplate};
  /** @type {string} */
  get createdFromTemplate(){return this._attributes['created-from-template'];};

  /** @param {string} usageReport **/
  set usageReport(usageReport){this._attributes['usage-report'] = usageReport};
  /** @type {string} */
  get usageReport(){return this._attributes['usage-report'];};


  // relationships


  /** @param {MealPlanningInstance} instance **/
  set instance(instance){this._one['instance'] = instance};
  /** @type {MealPlanningInstance} */
  get instance(){return this._one['instance']};



  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};

  /** @param {Restaurant[]} restaurants **/
  set restaurants(restaurants){this._many['restaurants'] = restaurants};
  /** @type {Restaurant[]} */
  get restaurants(){return this._many['restaurants']};

  /** @param {MealPlanningReservation[]} reservations **/
  set reservations(reservations){this._many['reservations'] = reservations};
  /** @type {MealPlanningReservation[]} */
  get reservations(){return this._many['reservations']};

  /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
  set restaurantConstraints(restaurantConstraints){this._many['restaurant-constraints'] = restaurantConstraints};
  /** @type {MealPlanningRestaurantConstraint[]} */
  get restaurantConstraints(){return this._many['restaurant-constraints']};

  /** @param {User[]} users **/
  set users(users){this._many['users'] = users};
  /** @type {User[]} */
  get users(){return this._many['users']};


}

/** @class MealPlanningInstance
  * @extends {Resource}
  **/
export class MealPlanningInstance extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-instances', attributes, one, many);
  }

  // attributes

  /** @param {jsonb} plan **/
  set plan(plan){this._attributes['plan'] = plan};
  /** @type {jsonb} */
  get plan(){return this._attributes['plan'];};

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} startOfWeek **/
  set startOfWeek(startOfWeek){this._attributes['start-of-week'] = startOfWeek};
  /** @type {string} */
  get startOfWeek(){return this._attributes['start-of-week'];};

  /** @param {string} buildGroupOrders **/
  set buildGroupOrders(buildGroupOrders){this._attributes['build-group-orders'] = buildGroupOrders};
  /** @type {string} */
  get buildGroupOrders(){return this._attributes['build-group-orders'];};

  /** @param {string} newWeight **/
  set newWeight(newWeight){this._attributes['new-weight'] = newWeight};
  /** @type {string} */
  get newWeight(){return this._attributes['new-weight'];};

  /** @param {string} favWeight **/
  set favWeight(favWeight){this._attributes['fav-weight'] = favWeight};
  /** @type {string} */
  get favWeight(){return this._attributes['fav-weight'];};

  /** @param {string} popularityWeight **/
  set popularityWeight(popularityWeight){this._attributes['popularity-weight'] = popularityWeight};
  /** @type {string} */
  get popularityWeight(){return this._attributes['popularity-weight'];};

  /** @param {string} lastWeekWeight **/
  set lastWeekWeight(lastWeekWeight){this._attributes['last-week-weight'] = lastWeekWeight};
  /** @type {string} */
  get lastWeekWeight(){return this._attributes['last-week-weight'];};

  /** @param {string} lastWeekOffset **/
  set lastWeekOffset(lastWeekOffset){this._attributes['last-week-offset'] = lastWeekOffset};
  /** @type {string} */
  get lastWeekOffset(){return this._attributes['last-week-offset'];};

  /** @param {string} maxUsesPerWeek **/
  set maxUsesPerWeek(maxUsesPerWeek){this._attributes['max-uses-per-week'] = maxUsesPerWeek};
  /** @type {string} */
  get maxUsesPerWeek(){return this._attributes['max-uses-per-week'];};

  /** @param {string} maxUsesPerDay **/
  set maxUsesPerDay(maxUsesPerDay){this._attributes['max-uses-per-day'] = maxUsesPerDay};
  /** @type {string} */
  get maxUsesPerDay(){return this._attributes['max-uses-per-day'];};

  /** @param {string} maxUsesPerMeal **/
  set maxUsesPerMeal(maxUsesPerMeal){this._attributes['max-uses-per-meal'] = maxUsesPerMeal};
  /** @type {string} */
  get maxUsesPerMeal(){return this._attributes['max-uses-per-meal'];};

  /** @param {string} smallestLeadTime **/
  set smallestLeadTime(smallestLeadTime){this._attributes['smallest-lead-time'] = smallestLeadTime};
  /** @type {string} */
  get smallestLeadTime(){return this._attributes['smallest-lead-time'];};

  /** @param {string} teamMembersCount **/
  set teamMembersCount(teamMembersCount){this._attributes['team-members-count'] = teamMembersCount};
  /** @type {string} */
  get teamMembersCount(){return this._attributes['team-members-count'];};

  /** @param {string} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {string} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {string} allowRepeats **/
  set allowRepeats(allowRepeats){this._attributes['allow-repeats'] = allowRepeats};
  /** @type {string} */
  get allowRepeats(){return this._attributes['allow-repeats'];};

  /** @param {string} useTeamProfiles **/
  set useTeamProfiles(useTeamProfiles){this._attributes['use-team-profiles'] = useTeamProfiles};
  /** @type {string} */
  get useTeamProfiles(){return this._attributes['use-team-profiles'];};

  /** @param {string} ignoreEmptyConstraints **/
  set ignoreEmptyConstraints(ignoreEmptyConstraints){this._attributes['ignore-empty-constraints'] = ignoreEmptyConstraints};
  /** @type {string} */
  get ignoreEmptyConstraints(){return this._attributes['ignore-empty-constraints'];};

  /** @param {string} ignoredConstraints **/
  set ignoredConstraints(ignoredConstraints){this._attributes['ignored-constraints'] = ignoredConstraints};
  /** @type {string} */
  get ignoredConstraints(){return this._attributes['ignored-constraints'];};

  /** @param {string} disabledPreferences **/
  set disabledPreferences(disabledPreferences){this._attributes['disabled-preferences'] = disabledPreferences};
  /** @type {string} */
  get disabledPreferences(){return this._attributes['disabled-preferences'];};

  /** @param {string} excludedPreferenceIds **/
  set excludedPreferenceIds(excludedPreferenceIds){this._attributes['excluded-preference-ids'] = excludedPreferenceIds};
  /** @type {string} */
  get excludedPreferenceIds(){return this._attributes['excluded-preference-ids'];};

  /** @param {string} isRecurring **/
  set isRecurring(isRecurring){this._attributes['is-recurring'] = isRecurring};
  /** @type {string} */
  get isRecurring(){return this._attributes['is-recurring'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {MealPlanningTemplate} mealPlanningTemplate **/
  set mealPlanningTemplate(mealPlanningTemplate){this._one['meal-planning-template'] = mealPlanningTemplate};
  /** @type {MealPlanningTemplate} */
  get mealPlanningTemplate(){return this._one['meal-planning-template']};

  /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
  set preferenceProfile(preferenceProfile){this._one['preference-profile'] = preferenceProfile};
  /** @type {MealPlanningPreferenceProfile} */
  get preferenceProfile(){return this._one['preference-profile']};

  /** @param {Order} orderTemplate **/
  set orderTemplate(orderTemplate){this._one['order-template'] = orderTemplate};
  /** @type {Order} */
  get orderTemplate(){return this._one['order-template']};

  /** @param {User} defaultOrderOwner **/
  set defaultOrderOwner(defaultOrderOwner){this._one['default-order-owner'] = defaultOrderOwner};
  /** @type {User} */
  get defaultOrderOwner(){return this._one['default-order-owner']};



  /** @param {MealPlanningReservation[]} mealPlanningReservations **/
  set mealPlanningReservations(mealPlanningReservations){this._many['meal-planning-reservations'] = mealPlanningReservations};
  /** @type {MealPlanningReservation[]} */
  get mealPlanningReservations(){return this._many['meal-planning-reservations']};

  /** @param {MealPlanningEvent[]} events **/
  set events(events){this._many['events'] = events};
  /** @type {MealPlanningEvent[]} */
  get events(){return this._many['events']};

  /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
  set restaurantConstraints(restaurantConstraints){this._many['restaurant-constraints'] = restaurantConstraints};
  /** @type {MealPlanningRestaurantConstraint[]} */
  get restaurantConstraints(){return this._many['restaurant-constraints']};

  /** @param {User[]} teamMembers **/
  set teamMembers(teamMembers){this._many['team-members'] = teamMembers};
  /** @type {User[]} */
  get teamMembers(){return this._many['team-members']};

  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};

  /** @param {MealPlanningLogRecord[]} logRecords **/
  set logRecords(logRecords){this._many['log-records'] = logRecords};
  /** @type {MealPlanningLogRecord[]} */
  get logRecords(){return this._many['log-records']};


}

/** @class MealPlanningLogRecord
  * @extends {Resource}
  **/
export class MealPlanningLogRecord extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-log-records', attributes, one, many);
  }

  // attributes

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} text **/
  set text(text){this._attributes['text'] = text};
  /** @type {Date} */
  get text(){return this._attributes['text'];};

  /** @param {Date} solverLog **/
  set solverLog(solverLog){this._attributes['solver-log'] = solverLog};
  /** @type {Date} */
  get solverLog(){return this._attributes['solver-log'];};

  /** @param {Date} foodeeEmployee **/
  set foodeeEmployee(foodeeEmployee){this._attributes['foodee-employee'] = foodeeEmployee};
  /** @type {Date} */
  get foodeeEmployee(){return this._attributes['foodee-employee'];};

  /** @param {Date} logType **/
  set logType(logType){this._attributes['log-type'] = logType};
  /** @type {Date} */
  get logType(){return this._attributes['log-type'];};


  // relationships


  /** @param {Planable} planable **/
  set planable(planable){this._one['planable'] = planable};
  /** @type {Planable} */
  get planable(){return this._one['planable']};




}

/** @class MealPlanningPreferenceProfile
  * @extends {Resource}
  **/
export class MealPlanningPreferenceProfile extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-preference-profiles', attributes, one, many);
  }

  // attributes

  /** @param {any} searchBudget **/
  set searchBudget(searchBudget){this._attributes['search-budget'] = searchBudget};
  /** @type {any} */
  get searchBudget(){return this._attributes['search-budget'];};

  /** @param {any} searchBudgetEnabled **/
  set searchBudgetEnabled(searchBudgetEnabled){this._attributes['search-budget-enabled'] = searchBudgetEnabled};
  /** @type {any} */
  get searchBudgetEnabled(){return this._attributes['search-budget-enabled'];};


  // relationships


  /** @param {Preferee} preferee **/
  set preferee(preferee){this._one['preferee'] = preferee};
  /** @type {Preferee} */
  get preferee(){return this._one['preferee']};



  /** @param {MealPlanningRequirement[]} requirements **/
  set requirements(requirements){this._many['requirements'] = requirements};
  /** @type {MealPlanningRequirement[]} */
  get requirements(){return this._many['requirements']};

  /** @param {MealPlanningRequirementGroup[]} requirementGroups **/
  set requirementGroups(requirementGroups){this._many['requirement-groups'] = requirementGroups};
  /** @type {MealPlanningRequirementGroup[]} */
  get requirementGroups(){return this._many['requirement-groups']};

  /** @param {Restaurant[]} lovedRestaurants **/
  set lovedRestaurants(lovedRestaurants){this._many['loved-restaurants'] = lovedRestaurants};
  /** @type {Restaurant[]} */
  get lovedRestaurants(){return this._many['loved-restaurants']};

  /** @param {Restaurant[]} hatedRestaurants **/
  set hatedRestaurants(hatedRestaurants){this._many['hated-restaurants'] = hatedRestaurants};
  /** @type {Restaurant[]} */
  get hatedRestaurants(){return this._many['hated-restaurants']};

  /** @param {Tag[]} lovedCuisineTypes **/
  set lovedCuisineTypes(lovedCuisineTypes){this._many['loved-cuisine-types'] = lovedCuisineTypes};
  /** @type {Tag[]} */
  get lovedCuisineTypes(){return this._many['loved-cuisine-types']};

  /** @param {Tag[]} hatedCuisineTypes **/
  set hatedCuisineTypes(hatedCuisineTypes){this._many['hated-cuisine-types'] = hatedCuisineTypes};
  /** @type {Tag[]} */
  get hatedCuisineTypes(){return this._many['hated-cuisine-types']};


}

/** @class MealPlanningRequirement
  * @extends {Resource}
  **/
export class MealPlanningRequirement extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-requirements', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} numberOfOptions **/
  set numberOfOptions(numberOfOptions){this._attributes['number-of-options'] = numberOfOptions};
  /** @type {string} */
  get numberOfOptions(){return this._attributes['number-of-options'];};

  /** @param {string} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {string} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {string} maxPrice **/
  set maxPrice(maxPrice){this._attributes['max-price'] = maxPrice};
  /** @type {string} */
  get maxPrice(){return this._attributes['max-price'];};

  /** @param {string} minPrice **/
  set minPrice(minPrice){this._attributes['min-price'] = minPrice};
  /** @type {string} */
  get minPrice(){return this._attributes['min-price'];};

  /** @param {string} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {string} */
  get active(){return this._attributes['active'];};

  /** @param {string} composition **/
  set composition(composition){this._attributes['composition'] = composition};
  /** @type {string} */
  get composition(){return this._attributes['composition'];};


  // relationships


  /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
  set preferenceProfile(preferenceProfile){this._one['preference-profile'] = preferenceProfile};
  /** @type {MealPlanningPreferenceProfile} */
  get preferenceProfile(){return this._one['preference-profile']};

  /** @param {MealPlanningRequirementGroup} requirementGroup **/
  set requirementGroup(requirementGroup){this._one['requirement-group'] = requirementGroup};
  /** @type {MealPlanningRequirementGroup} */
  get requirementGroup(){return this._one['requirement-group']};

  /** @param {MealPlanningRestaurantConstraint} restaurantConstraint **/
  set restaurantConstraint(restaurantConstraint){this._one['restaurant-constraint'] = restaurantConstraint};
  /** @type {MealPlanningRestaurantConstraint} */
  get restaurantConstraint(){return this._one['restaurant-constraint']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};



  /** @param {MealPlanningRequirementConstraint[]} requirementConstraints **/
  set requirementConstraints(requirementConstraints){this._many['requirement-constraints'] = requirementConstraints};
  /** @type {MealPlanningRequirementConstraint[]} */
  get requirementConstraints(){return this._many['requirement-constraints']};

  /** @param {Tag[]} tags **/
  set tags(tags){this._many['tags'] = tags};
  /** @type {Tag[]} */
  get tags(){return this._many['tags']};

  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {DietaryTag[]} allergyTags **/
  set allergyTags(allergyTags){this._many['allergy-tags'] = allergyTags};
  /** @type {DietaryTag[]} */
  get allergyTags(){return this._many['allergy-tags']};

  /** @param {DietaryTag[]} packagingTags **/
  set packagingTags(packagingTags){this._many['packaging-tags'] = packagingTags};
  /** @type {DietaryTag[]} */
  get packagingTags(){return this._many['packaging-tags']};

  /** @param {FoodType[]} foodTypes **/
  set foodTypes(foodTypes){this._many['food-types'] = foodTypes};
  /** @type {FoodType[]} */
  get foodTypes(){return this._many['food-types']};

  /** @param {MealType[]} mealTypes **/
  set mealTypes(mealTypes){this._many['meal-types'] = mealTypes};
  /** @type {MealType[]} */
  get mealTypes(){return this._many['meal-types']};


}

/** @class MealPlanningRequirementConstraint
  * @extends {Resource}
  **/
export class MealPlanningRequirementConstraint extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-requirement-constraints', attributes, one, many);
  }

  // attributes

  /** @param {string} tagType **/
  set tagType(tagType){this._attributes['tag-type'] = tagType};
  /** @type {string} */
  get tagType(){return this._attributes['tag-type'];};

  /** @param {string} constraintType **/
  set constraintType(constraintType){this._attributes['constraint-type'] = constraintType};
  /** @type {string} */
  get constraintType(){return this._attributes['constraint-type'];};

  /** @param {string} isReadonly **/
  set isReadonly(isReadonly){this._attributes['is-readonly'] = isReadonly};
  /** @type {string} */
  get isReadonly(){return this._attributes['is-readonly'];};


  // relationships


  /** @param {MealPlanningRequirement} requirement **/
  set requirement(requirement){this._one['requirement'] = requirement};
  /** @type {MealPlanningRequirement} */
  get requirement(){return this._one['requirement']};



  /** @param {MealType[]} mealTypes **/
  set mealTypes(mealTypes){this._many['meal-types'] = mealTypes};
  /** @type {MealType[]} */
  get mealTypes(){return this._many['meal-types']};

  /** @param {FoodType[]} foodTypes **/
  set foodTypes(foodTypes){this._many['food-types'] = foodTypes};
  /** @type {FoodType[]} */
  get foodTypes(){return this._many['food-types']};

  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {DietaryTag[]} allergyTags **/
  set allergyTags(allergyTags){this._many['allergy-tags'] = allergyTags};
  /** @type {DietaryTag[]} */
  get allergyTags(){return this._many['allergy-tags']};

  /** @param {DietaryTag[]} packagingTags **/
  set packagingTags(packagingTags){this._many['packaging-tags'] = packagingTags};
  /** @type {DietaryTag[]} */
  get packagingTags(){return this._many['packaging-tags']};


}

/** @class MealPlanningRequirementGroup
  * @extends {Resource}
  **/
export class MealPlanningRequirementGroup extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-requirement-groups', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} budget **/
  set budget(budget){this._attributes['budget'] = budget};
  /** @type {string} */
  get budget(){return this._attributes['budget'];};

  /** @param {string} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {string} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {string} portionSize **/
  set portionSize(portionSize){this._attributes['portion-size'] = portionSize};
  /** @type {string} */
  get portionSize(){return this._attributes['portion-size'];};

  /** @param {string} isSharingStyleGroup **/
  set isSharingStyleGroup(isSharingStyleGroup){this._attributes['is-sharing-style-group'] = isSharingStyleGroup};
  /** @type {string} */
  get isSharingStyleGroup(){return this._attributes['is-sharing-style-group'];};


  // relationships


  /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
  set preferenceProfile(preferenceProfile){this._one['preference-profile'] = preferenceProfile};
  /** @type {MealPlanningPreferenceProfile} */
  get preferenceProfile(){return this._one['preference-profile']};



  /** @param {MealPlanningRequirement[]} requirements **/
  set requirements(requirements){this._many['requirements'] = requirements};
  /** @type {MealPlanningRequirement[]} */
  get requirements(){return this._many['requirements']};


}

/** @class MealPlanningReservation
  * @extends {Resource}
  **/
export class MealPlanningReservation extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-reservations', attributes, one, many);
  }

  // attributes

  /** @param {string} state **/
  set state(state){this._attributes['state'] = state};
  /** @type {string} */
  get state(){return this._attributes['state'];};

  /** @param {string} deliverAt **/
  set deliverAt(deliverAt){this._attributes['deliver-at'] = deliverAt};
  /** @type {string} */
  get deliverAt(){return this._attributes['deliver-at'];};

  /** @param {string} pickupAt **/
  set pickupAt(pickupAt){this._attributes['pickup-at'] = pickupAt};
  /** @type {string} */
  get pickupAt(){return this._attributes['pickup-at'];};

  /** @param {string} numberOfPeople **/
  set numberOfPeople(numberOfPeople){this._attributes['number-of-people'] = numberOfPeople};
  /** @type {string} */
  get numberOfPeople(){return this._attributes['number-of-people'];};

  /** @param {string} ignoresCapacityLimit **/
  set ignoresCapacityLimit(ignoresCapacityLimit){this._attributes['ignores-capacity-limit'] = ignoresCapacityLimit};
  /** @type {string} */
  get ignoresCapacityLimit(){return this._attributes['ignores-capacity-limit'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {string} requestedCapacity **/
  set requestedCapacity(requestedCapacity){this._attributes['requested-capacity'] = requestedCapacity};
  /** @type {string} */
  get requestedCapacity(){return this._attributes['requested-capacity'];};

  /** @param {string} favourite **/
  set favourite(favourite){this._attributes['favourite'] = favourite};
  /** @type {string} */
  get favourite(){return this._attributes['favourite'];};

  /** @param {string} favouriteCount **/
  set favouriteCount(favouriteCount){this._attributes['favourite-count'] = favouriteCount};
  /** @type {string} */
  get favouriteCount(){return this._attributes['favourite-count'];};

  /** @param {string} favouriteCuisine **/
  set favouriteCuisine(favouriteCuisine){this._attributes['favourite-cuisine'] = favouriteCuisine};
  /** @type {string} */
  get favouriteCuisine(){return this._attributes['favourite-cuisine'];};

  /** @param {string} favouriteCuisineCount **/
  set favouriteCuisineCount(favouriteCuisineCount){this._attributes['favourite-cuisine-count'] = favouriteCuisineCount};
  /** @type {string} */
  get favouriteCuisineCount(){return this._attributes['favourite-cuisine-count'];};

  /** @param {string} lastWeek **/
  set lastWeek(lastWeek){this._attributes['last-week'] = lastWeek};
  /** @type {string} */
  get lastWeek(){return this._attributes['last-week'];};

  /** @param {string} first **/
  set first(first){this._attributes['first'] = first};
  /** @type {string} */
  get first(){return this._attributes['first'];};

  /** @param {string} percentRank **/
  set percentRank(percentRank){this._attributes['percent-rank'] = percentRank};
  /** @type {string} */
  get percentRank(){return this._attributes['percent-rank'];};


  // relationships


  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};

  /** @param {MealPlanningInstance} mealPlanningInstance **/
  set mealPlanningInstance(mealPlanningInstance){this._one['meal-planning-instance'] = mealPlanningInstance};
  /** @type {MealPlanningInstance} */
  get mealPlanningInstance(){return this._one['meal-planning-instance']};

  /** @param {MealPlanningEvent} event **/
  set event(event){this._one['event'] = event};
  /** @type {MealPlanningEvent} */
  get event(){return this._one['event']};

  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




}

/** @class MealPlanningRestaurantConstraint
  * @extends {Resource}
  **/
export class MealPlanningRestaurantConstraint extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-restaurant-constraints', attributes, one, many);
  }

  // attributes

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} value **/
  set value(value){this._attributes['value'] = value};
  /** @type {string} */
  get value(){return this._attributes['value'];};

  /** @param {string} constraintType **/
  set constraintType(constraintType){this._attributes['constraint-type'] = constraintType};
  /** @type {string} */
  get constraintType(){return this._attributes['constraint-type'];};


  // relationships


  /** @param {MealPlanningTemplate} template **/
  set template(template){this._one['template'] = template};
  /** @type {MealPlanningTemplate} */
  get template(){return this._one['template']};

  /** @param {MealPlanningInstance} instance **/
  set instance(instance){this._one['instance'] = instance};
  /** @type {MealPlanningInstance} */
  get instance(){return this._one['instance']};

  /** @param {MealPlanningEvent} event **/
  set event(event){this._one['event'] = event};
  /** @type {MealPlanningEvent} */
  get event(){return this._one['event']};

  /** @param {MealPlanningRequirement} requirement **/
  set requirement(requirement){this._one['requirement'] = requirement};
  /** @type {MealPlanningRequirement} */
  get requirement(){return this._one['requirement']};



  /** @param {Restaurant[]} restaurants **/
  set restaurants(restaurants){this._many['restaurants'] = restaurants};
  /** @type {Restaurant[]} */
  get restaurants(){return this._many['restaurants']};


}

/** @class MealPlanningSchedule
  * @extends {Resource}
  **/
export class MealPlanningSchedule extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-schedules', attributes, one, many);
  }

  // attributes

  /** @param {string} frequency **/
  set frequency(frequency){this._attributes['frequency'] = frequency};
  /** @type {string} */
  get frequency(){return this._attributes['frequency'];};

  /** @param {string} frequencyValue **/
  set frequencyValue(frequencyValue){this._attributes['frequency-value'] = frequencyValue};
  /** @type {string} */
  get frequencyValue(){return this._attributes['frequency-value'];};

  /** @param {string} periodsInAdvance **/
  set periodsInAdvance(periodsInAdvance){this._attributes['periods-in-advance'] = periodsInAdvance};
  /** @type {string} */
  get periodsInAdvance(){return this._attributes['periods-in-advance'];};

  /** @param {string} periodsPerSchedule **/
  set periodsPerSchedule(periodsPerSchedule){this._attributes['periods-per-schedule'] = periodsPerSchedule};
  /** @type {string} */
  get periodsPerSchedule(){return this._attributes['periods-per-schedule'];};

  /** @param {string} startsOn **/
  set startsOn(startsOn){this._attributes['starts-on'] = startsOn};
  /** @type {string} */
  get startsOn(){return this._attributes['starts-on'];};

  /** @param {string} endsOn **/
  set endsOn(endsOn){this._attributes['ends-on'] = endsOn};
  /** @type {string} */
  get endsOn(){return this._attributes['ends-on'];};


  // relationships


  /** @param {MealPlanningTemplate} template **/
  set template(template){this._one['template'] = template};
  /** @type {MealPlanningTemplate} */
  get template(){return this._one['template']};



  /** @param {MealPlanningSkipPeriod[]} skipPeriods **/
  set skipPeriods(skipPeriods){this._many['skip-periods'] = skipPeriods};
  /** @type {MealPlanningSkipPeriod[]} */
  get skipPeriods(){return this._many['skip-periods']};


}

/** @class MealPlanningTemplate
  * @extends {Resource}
  **/
export class MealPlanningTemplate extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-planning-templates', attributes, one, many);
  }

  // attributes

  /** @param {jsonb} plan **/
  set plan(plan){this._attributes['plan'] = plan};
  /** @type {jsonb} */
  get plan(){return this._attributes['plan'];};

  /** @param {jsonb} contact **/
  set contact(contact){this._attributes['contact'] = contact};
  /** @type {jsonb} */
  get contact(){return this._attributes['contact'];};

  /** @param {jsonb} location **/
  set location(location){this._attributes['location'] = location};
  /** @type {jsonb} */
  get location(){return this._attributes['location'];};

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} defaultNumberOfPeople **/
  set defaultNumberOfPeople(defaultNumberOfPeople){this._attributes['default-number-of-people'] = defaultNumberOfPeople};
  /** @type {string} */
  get defaultNumberOfPeople(){return this._attributes['default-number-of-people'];};

  /** @param {string} buildGroupOrders **/
  set buildGroupOrders(buildGroupOrders){this._attributes['build-group-orders'] = buildGroupOrders};
  /** @type {string} */
  get buildGroupOrders(){return this._attributes['build-group-orders'];};

  /** @param {string} newWeight **/
  set newWeight(newWeight){this._attributes['new-weight'] = newWeight};
  /** @type {string} */
  get newWeight(){return this._attributes['new-weight'];};

  /** @param {string} popularityWeight **/
  set popularityWeight(popularityWeight){this._attributes['popularity-weight'] = popularityWeight};
  /** @type {string} */
  get popularityWeight(){return this._attributes['popularity-weight'];};

  /** @param {string} favWeight **/
  set favWeight(favWeight){this._attributes['fav-weight'] = favWeight};
  /** @type {string} */
  get favWeight(){return this._attributes['fav-weight'];};

  /** @param {string} lastWeekWeight **/
  set lastWeekWeight(lastWeekWeight){this._attributes['last-week-weight'] = lastWeekWeight};
  /** @type {string} */
  get lastWeekWeight(){return this._attributes['last-week-weight'];};

  /** @param {string} lastWeekOffset **/
  set lastWeekOffset(lastWeekOffset){this._attributes['last-week-offset'] = lastWeekOffset};
  /** @type {string} */
  get lastWeekOffset(){return this._attributes['last-week-offset'];};

  /** @param {string} maxUsesPerWeek **/
  set maxUsesPerWeek(maxUsesPerWeek){this._attributes['max-uses-per-week'] = maxUsesPerWeek};
  /** @type {string} */
  get maxUsesPerWeek(){return this._attributes['max-uses-per-week'];};

  /** @param {string} maxUsesPerDay **/
  set maxUsesPerDay(maxUsesPerDay){this._attributes['max-uses-per-day'] = maxUsesPerDay};
  /** @type {string} */
  get maxUsesPerDay(){return this._attributes['max-uses-per-day'];};

  /** @param {string} maxUsesPerMeal **/
  set maxUsesPerMeal(maxUsesPerMeal){this._attributes['max-uses-per-meal'] = maxUsesPerMeal};
  /** @type {string} */
  get maxUsesPerMeal(){return this._attributes['max-uses-per-meal'];};

  /** @param {string} orderTemplateNumberOfPeople **/
  set orderTemplateNumberOfPeople(orderTemplateNumberOfPeople){this._attributes['order-template-number-of-people'] = orderTemplateNumberOfPeople};
  /** @type {string} */
  get orderTemplateNumberOfPeople(){return this._attributes['order-template-number-of-people'];};

  /** @param {string} allowRepeats **/
  set allowRepeats(allowRepeats){this._attributes['allow-repeats'] = allowRepeats};
  /** @type {string} */
  get allowRepeats(){return this._attributes['allow-repeats'];};

  /** @param {string} useTeamProfiles **/
  set useTeamProfiles(useTeamProfiles){this._attributes['use-team-profiles'] = useTeamProfiles};
  /** @type {string} */
  get useTeamProfiles(){return this._attributes['use-team-profiles'];};

  /** @param {string} ignoreEmptyConstraints **/
  set ignoreEmptyConstraints(ignoreEmptyConstraints){this._attributes['ignore-empty-constraints'] = ignoreEmptyConstraints};
  /** @type {string} */
  get ignoreEmptyConstraints(){return this._attributes['ignore-empty-constraints'];};

  /** @param {string} isRecurring **/
  set isRecurring(isRecurring){this._attributes['is-recurring'] = isRecurring};
  /** @type {string} */
  get isRecurring(){return this._attributes['is-recurring'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {Order} orderTemplate **/
  set orderTemplate(orderTemplate){this._one['order-template'] = orderTemplate};
  /** @type {Order} */
  get orderTemplate(){return this._one['order-template']};

  /** @param {Area} area **/
  set area(area){this._one['area'] = area};
  /** @type {Area} */
  get area(){return this._one['area']};

  /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
  set preferenceProfile(preferenceProfile){this._one['preference-profile'] = preferenceProfile};
  /** @type {MealPlanningPreferenceProfile} */
  get preferenceProfile(){return this._one['preference-profile']};

  /** @param {MealPlanningSchedule} schedule **/
  set schedule(schedule){this._one['schedule'] = schedule};
  /** @type {MealPlanningSchedule} */
  get schedule(){return this._one['schedule']};

  /** @param {User} defaultOrderOwner **/
  set defaultOrderOwner(defaultOrderOwner){this._one['default-order-owner'] = defaultOrderOwner};
  /** @type {User} */
  get defaultOrderOwner(){return this._one['default-order-owner']};



  /** @param {MealPlanningInstance[]} mealPlanningInstances **/
  set mealPlanningInstances(mealPlanningInstances){this._many['meal-planning-instances'] = mealPlanningInstances};
  /** @type {MealPlanningInstance[]} */
  get mealPlanningInstances(){return this._many['meal-planning-instances']};

  /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
  set restaurantConstraints(restaurantConstraints){this._many['restaurant-constraints'] = restaurantConstraints};
  /** @type {MealPlanningRestaurantConstraint[]} */
  get restaurantConstraints(){return this._many['restaurant-constraints']};


}

/** @class MealType
  * @extends {Resource}
  **/
export class MealType extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'meal-types', attributes, one, many);
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

  /** @param {string} isExclusive **/
  set isExclusive(isExclusive){this._attributes['is-exclusive'] = isExclusive};
  /** @type {string} */
  get isExclusive(){return this._attributes['is-exclusive'];};


  // relationships





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

  /** @param {boolean} draft **/
  set draft(draft){this._attributes['draft'] = draft};
  /** @type {boolean} */
  get draft(){return this._attributes['draft'];};

  /** @param {boolean} ancestry **/
  set ancestry(ancestry){this._attributes['ancestry'] = ancestry};
  /** @type {boolean} */
  get ancestry(){return this._attributes['ancestry'];};


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

  /** @param {string} minimumServing **/
  set minimumServing(minimumServing){this._attributes['minimum-serving'] = minimumServing};
  /** @type {string} */
  get minimumServing(){return this._attributes['minimum-serving'];};

  /** @param {string} maximumServing **/
  set maximumServing(maximumServing){this._attributes['maximum-serving'] = maximumServing};
  /** @type {string} */
  get maximumServing(){return this._attributes['maximum-serving'];};

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

  /** @param {MealType[]} mealTypes **/
  set mealTypes(mealTypes){this._many['meal-types'] = mealTypes};
  /** @type {MealType[]} */
  get mealTypes(){return this._many['meal-types']};

  /** @param {FoodType[]} foodTypes **/
  set foodTypes(foodTypes){this._many['food-types'] = foodTypes};
  /** @type {FoodType[]} */
  get foodTypes(){return this._many['food-types']};


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

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {string} */
  get active(){return this._attributes['active'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} minimumQuantity **/
  set minimumQuantity(minimumQuantity){this._attributes['minimum-quantity'] = minimumQuantity};
  /** @type {string} */
  get minimumQuantity(){return this._attributes['minimum-quantity'];};

  /** @param {string} maximumQuantity **/
  set maximumQuantity(maximumQuantity){this._attributes['maximum-quantity'] = maximumQuantity};
  /** @type {string} */
  get maximumQuantity(){return this._attributes['maximum-quantity'];};

  /** @param {string} minimumServing **/
  set minimumServing(minimumServing){this._attributes['minimum-serving'] = minimumServing};
  /** @type {string} */
  get minimumServing(){return this._attributes['minimum-serving'];};

  /** @param {string} maximumServing **/
  set maximumServing(maximumServing){this._attributes['maximum-serving'] = maximumServing};
  /** @type {string} */
  get maximumServing(){return this._attributes['maximum-serving'];};

  /** @param {string} actualMinimumQuantity **/
  set actualMinimumQuantity(actualMinimumQuantity){this._attributes['actual-minimum-quantity'] = actualMinimumQuantity};
  /** @type {string} */
  get actualMinimumQuantity(){return this._attributes['actual-minimum-quantity'];};

  /** @param {string} actualMaximumQuantity **/
  set actualMaximumQuantity(actualMaximumQuantity){this._attributes['actual-maximum-quantity'] = actualMaximumQuantity};
  /** @type {string} */
  get actualMaximumQuantity(){return this._attributes['actual-maximum-quantity'];};

  /** @param {string} actualMinimumServing **/
  set actualMinimumServing(actualMinimumServing){this._attributes['actual-minimum-serving'] = actualMinimumServing};
  /** @type {string} */
  get actualMinimumServing(){return this._attributes['actual-minimum-serving'];};

  /** @param {string} actualMaximumServing **/
  set actualMaximumServing(actualMaximumServing){this._attributes['actual-maximum-serving'] = actualMaximumServing};
  /** @type {string} */
  get actualMaximumServing(){return this._attributes['actual-maximum-serving'];};

  /** @param {string} actualAverageServing **/
  set actualAverageServing(actualAverageServing){this._attributes['actual-average-serving'] = actualAverageServing};
  /** @type {string} */
  get actualAverageServing(){return this._attributes['actual-average-serving'];};

  /** @param {string} clientPriceCents **/
  set clientPriceCents(clientPriceCents){this._attributes['client-price-cents'] = clientPriceCents};
  /** @type {string} */
  get clientPriceCents(){return this._attributes['client-price-cents'];};

  /** @param {string} budgetPrice **/
  set budgetPrice(budgetPrice){this._attributes['budget-price'] = budgetPrice};
  /** @type {string} */
  get budgetPrice(){return this._attributes['budget-price'];};

  /** @param {string} balancedPrice **/
  set balancedPrice(balancedPrice){this._attributes['balanced-price'] = balancedPrice};
  /** @type {string} */
  get balancedPrice(){return this._attributes['balanced-price'];};

  /** @param {string} bountifulPrice **/
  set bountifulPrice(bountifulPrice){this._attributes['bountiful-price'] = bountifulPrice};
  /** @type {string} */
  get bountifulPrice(){return this._attributes['bountiful-price'];};

  /** @param {string} position **/
  set position(position){this._attributes['position'] = position};
  /** @type {string} */
  get position(){return this._attributes['position'];};

  /** @param {number} restaurantPriceCents **/
  set restaurantPriceCents(restaurantPriceCents){this._attributes['restaurant-price-cents'] = restaurantPriceCents};
  /** @type {number} */
  get restaurantPriceCents(){return this._attributes['restaurant-price-cents'];};

  /** @param {number} retailPriceCents **/
  set retailPriceCents(retailPriceCents){this._attributes['retail-price-cents'] = retailPriceCents};
  /** @type {number} */
  get retailPriceCents(){return this._attributes['retail-price-cents'];};

  /** @param {number} internalDescription **/
  set internalDescription(internalDescription){this._attributes['internal-description'] = internalDescription};
  /** @type {number} */
  get internalDescription(){return this._attributes['internal-description'];};

  /** @param {number} taxRateId **/
  set taxRateId(taxRateId){this._attributes['tax-rate-id'] = taxRateId};
  /** @type {number} */
  get taxRateId(){return this._attributes['tax-rate-id'];};

  /** @param {number} taxable **/
  set taxable(taxable){this._attributes['taxable'] = taxable};
  /** @type {number} */
  get taxable(){return this._attributes['taxable'];};

  /** @param {number} capacityUnits **/
  set capacityUnits(capacityUnits){this._attributes['capacity-units'] = capacityUnits};
  /** @type {number} */
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

  /** @param {MealType[]} mealTypes **/
  set mealTypes(mealTypes){this._many['meal-types'] = mealTypes};
  /** @type {MealType[]} */
  get mealTypes(){return this._many['meal-types']};

  /** @param {FoodType[]} foodTypes **/
  set foodTypes(foodTypes){this._many['food-types'] = foodTypes};
  /** @type {FoodType[]} */
  get foodTypes(){return this._many['food-types']};

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

  /** @param {string} isPackagedSeparately **/
  set isPackagedSeparately(isPackagedSeparately){this._attributes['is-packaged-separately'] = isPackagedSeparately};
  /** @type {string} */
  get isPackagedSeparately(){return this._attributes['is-packaged-separately'];};

  /** @param {number} position **/
  set position(position){this._attributes['position'] = position};
  /** @type {number} */
  get position(){return this._attributes['position'];};


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

  /** @param {string} deletedAt **/
  set deletedAt(deletedAt){this._attributes['deleted-at'] = deletedAt};
  /** @type {string} */
  get deletedAt(){return this._attributes['deleted-at'];};

  /** @param {*} restaurantPriceCents **/
  set restaurantPriceCents(restaurantPriceCents){this._attributes['restaurant-price-cents'] = restaurantPriceCents};
  /** @type {*} */
  get restaurantPriceCents(){return this._attributes['restaurant-price-cents'];};

  /** @param {*} retailPriceCents **/
  set retailPriceCents(retailPriceCents){this._attributes['retail-price-cents'] = retailPriceCents};
  /** @type {*} */
  get retailPriceCents(){return this._attributes['retail-price-cents'];};

  /** @param {*} position **/
  set position(position){this._attributes['position'] = position};
  /** @type {*} */
  get position(){return this._attributes['position'];};


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

/** @class NotificationLog
  * @extends {Resource}
  **/
export class NotificationLog extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'notification-logs', attributes, one, many);
  }

  // attributes

  /** @param {any} receiver **/
  set receiver(receiver){this._attributes['receiver'] = receiver};
  /** @type {any} */
  get receiver(){return this._attributes['receiver'];};

  /** @param {any} uniquenessContext **/
  set uniquenessContext(uniquenessContext){this._attributes['uniqueness-context'] = uniquenessContext};
  /** @type {any} */
  get uniquenessContext(){return this._attributes['uniqueness-context'];};

  /** @param {any} medium **/
  set medium(medium){this._attributes['medium'] = medium};
  /** @type {any} */
  get medium(){return this._attributes['medium'];};

  /** @param {any} reason **/
  set reason(reason){this._attributes['reason'] = reason};
  /** @type {any} */
  get reason(){return this._attributes['reason'];};

  /** @param {any} url **/
  set url(url){this._attributes['url'] = url};
  /** @type {any} */
  get url(){return this._attributes['url'];};

  /** @param {any} metaInfo **/
  set metaInfo(metaInfo){this._attributes['meta-info'] = metaInfo};
  /** @type {any} */
  get metaInfo(){return this._attributes['meta-info'];};

  /** @param {any} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {any} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {any} receiverType **/
  set receiverType(receiverType){this._attributes['receiver-type'] = receiverType};
  /** @type {any} */
  get receiverType(){return this._attributes['receiver-type'];};

  /** @param {any} receiverId **/
  set receiverId(receiverId){this._attributes['receiver-id'] = receiverId};
  /** @type {any} */
  get receiverId(){return this._attributes['receiver-id'];};

  /** @param {any} sentTos **/
  set sentTos(sentTos){this._attributes['sent-tos'] = sentTos};
  /** @type {any} */
  get sentTos(){return this._attributes['sent-tos'];};

  /** @param {any} events **/
  set events(events){this._attributes['events'] = events};
  /** @type {any} */
  get events(){return this._attributes['events'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




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

  /** @param {string} allowsGuests **/
  set allowsGuests(allowsGuests){this._attributes['allows-guests'] = allowsGuests};
  /** @type {string} */
  get allowsGuests(){return this._attributes['allows-guests'];};

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

  /** @param {string} restaurantSummaryPdfUrl **/
  set restaurantSummaryPdfUrl(restaurantSummaryPdfUrl){this._attributes['restaurant-summary-pdf-url'] = restaurantSummaryPdfUrl};
  /** @type {string} */
  get restaurantSummaryPdfUrl(){return this._attributes['restaurant-summary-pdf-url'];};

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

  /** @param {string} opensAt **/
  set opensAt(opensAt){this._attributes['opens-at'] = opensAt};
  /** @type {string} */
  get opensAt(){return this._attributes['opens-at'];};

  /** @param {string} flag **/
  set flag(flag){this._attributes['flag'] = flag};
  /** @type {string} */
  get flag(){return this._attributes['flag'];};

  /** @param {string} guestList **/
  set guestList(guestList){this._attributes['guest-list'] = guestList};
  /** @type {string} */
  get guestList(){return this._attributes['guest-list'];};

  /** @param {string} budgetType **/
  set budgetType(budgetType){this._attributes['budget-type'] = budgetType};
  /** @type {string} */
  get budgetType(){return this._attributes['budget-type'];};

  /** @param {string} identifier **/
  set identifier(identifier){this._attributes['identifier'] = identifier};
  /** @type {string} */
  get identifier(){return this._attributes['identifier'];};

  /** @param {string} duplicatedFromId **/
  set duplicatedFromId(duplicatedFromId){this._attributes['duplicated-from-id'] = duplicatedFromId};
  /** @type {string} */
  get duplicatedFromId(){return this._attributes['duplicated-from-id'];};

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

  /** @param {string} validMembersCount **/
  set validMembersCount(validMembersCount){this._attributes['valid-members-count'] = validMembersCount};
  /** @type {string} */
  get validMembersCount(){return this._attributes['valid-members-count'];};

  /** @param {string} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {string} */
  get name(){return this._attributes['name'];};

  /** @param {string} orderType **/
  set orderType(orderType){this._attributes['order-type'] = orderType};
  /** @type {string} */
  get orderType(){return this._attributes['order-type'];};

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

  /** @param {string} orderImages **/
  set orderImages(orderImages){this._attributes['order-images'] = orderImages};
  /** @type {string} */
  get orderImages(){return this._attributes['order-images'];};

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

  /** @param {string} thirdPartyLogisticsException **/
  set thirdPartyLogisticsException(thirdPartyLogisticsException){this._attributes['third-party-logistics-exception'] = thirdPartyLogisticsException};
  /** @type {string} */
  get thirdPartyLogisticsException(){return this._attributes['third-party-logistics-exception'];};

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

  /** @param {string} cutleryPreference **/
  set cutleryPreference(cutleryPreference){this._attributes['cutlery-preference'] = cutleryPreference};
  /** @type {string} */
  get cutleryPreference(){return this._attributes['cutlery-preference'];};

  /** @param {string} waiveDeliveryFee **/
  set waiveDeliveryFee(waiveDeliveryFee){this._attributes['waive-delivery-fee'] = waiveDeliveryFee};
  /** @type {string} */
  get waiveDeliveryFee(){return this._attributes['waive-delivery-fee'];};

  /** @param {string} waiveServiceFee **/
  set waiveServiceFee(waiveServiceFee){this._attributes['waive-service-fee'] = waiveServiceFee};
  /** @type {string} */
  get waiveServiceFee(){return this._attributes['waive-service-fee'];};

  /** @param {string} orderedCount **/
  set orderedCount(orderedCount){this._attributes['ordered-count'] = orderedCount};
  /** @type {string} */
  get orderedCount(){return this._attributes['ordered-count'];};

  /** @param {string} memberCount **/
  set memberCount(memberCount){this._attributes['member-count'] = memberCount};
  /** @type {string} */
  get memberCount(){return this._attributes['member-count'];};

  /** @param {string} isTemplate **/
  set isTemplate(isTemplate){this._attributes['is-template'] = isTemplate};
  /** @type {string} */
  get isTemplate(){return this._attributes['is-template'];};

  /** @param {jsonb} deliveryEstimate **/
  set deliveryEstimate(deliveryEstimate){this._attributes['delivery-estimate'] = deliveryEstimate};
  /** @type {jsonb} */
  get deliveryEstimate(){return this._attributes['delivery-estimate'];};

  /** @param {jsonb} overridePickupAtAdjustment **/
  set overridePickupAtAdjustment(overridePickupAtAdjustment){this._attributes['override-pickup-at-adjustment'] = overridePickupAtAdjustment};
  /** @type {jsonb} */
  get overridePickupAtAdjustment(){return this._attributes['override-pickup-at-adjustment'];};

  /** @param {jsonb} logisticsType **/
  set logisticsType(logisticsType){this._attributes['logistics-type'] = logisticsType};
  /** @type {jsonb} */
  get logisticsType(){return this._attributes['logistics-type'];};

  /** @param {jsonb} thirdPartyLogisticsId **/
  set thirdPartyLogisticsId(thirdPartyLogisticsId){this._attributes['third-party-logistics-id'] = thirdPartyLogisticsId};
  /** @type {jsonb} */
  get thirdPartyLogisticsId(){return this._attributes['third-party-logistics-id'];};

  /** @param {jsonb} thirdPartyLogisticsTrackingUrl **/
  set thirdPartyLogisticsTrackingUrl(thirdPartyLogisticsTrackingUrl){this._attributes['third-party-logistics-tracking-url'] = thirdPartyLogisticsTrackingUrl};
  /** @type {jsonb} */
  get thirdPartyLogisticsTrackingUrl(){return this._attributes['third-party-logistics-tracking-url'];};

  /** @param {jsonb} syncedWithThirdPartyLogisticsAt **/
  set syncedWithThirdPartyLogisticsAt(syncedWithThirdPartyLogisticsAt){this._attributes['synced-with-third-party-logistics-at'] = syncedWithThirdPartyLogisticsAt};
  /** @type {jsonb} */
  get syncedWithThirdPartyLogisticsAt(){return this._attributes['synced-with-third-party-logistics-at'];};

  /** @param {jsonb} requestedCapacity **/
  set requestedCapacity(requestedCapacity){this._attributes['requested-capacity'] = requestedCapacity};
  /** @type {jsonb} */
  get requestedCapacity(){return this._attributes['requested-capacity'];};

  /** @param {jsonb} waiveDeliveryFeeAccountingCode **/
  set waiveDeliveryFeeAccountingCode(waiveDeliveryFeeAccountingCode){this._attributes['waive-delivery-fee-accounting-code'] = waiveDeliveryFeeAccountingCode};
  /** @type {jsonb} */
  get waiveDeliveryFeeAccountingCode(){return this._attributes['waive-delivery-fee-accounting-code'];};

  /** @param {jsonb} waiveServiceFeeAccountingCode **/
  set waiveServiceFeeAccountingCode(waiveServiceFeeAccountingCode){this._attributes['waive-service-fee-accounting-code'] = waiveServiceFeeAccountingCode};
  /** @type {jsonb} */
  get waiveServiceFeeAccountingCode(){return this._attributes['waive-service-fee-accounting-code'];};

  /** @param {jsonb} waiveDeliveryFeeDescription **/
  set waiveDeliveryFeeDescription(waiveDeliveryFeeDescription){this._attributes['waive-delivery-fee-description'] = waiveDeliveryFeeDescription};
  /** @type {jsonb} */
  get waiveDeliveryFeeDescription(){return this._attributes['waive-delivery-fee-description'];};

  /** @param {jsonb} waiveServiceFeeDescription **/
  set waiveServiceFeeDescription(waiveServiceFeeDescription){this._attributes['waive-service-fee-description'] = waiveServiceFeeDescription};
  /** @type {jsonb} */
  get waiveServiceFeeDescription(){return this._attributes['waive-service-fee-description'];};


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

  /** @param {Menu} menu **/
  set menu(menu){this._one['menu'] = menu};
  /** @type {Menu} */
  get menu(){return this._one['menu']};

  /** @param {MealPlanningRequirement} menuFilter **/
  set menuFilter(menuFilter){this._one['menu-filter'] = menuFilter};
  /** @type {MealPlanningRequirement} */
  get menuFilter(){return this._one['menu-filter']};

  /** @param {Location} customLocation **/
  set customLocation(customLocation){this._one['custom-location'] = customLocation};
  /** @type {Location} */
  get customLocation(){return this._one['custom-location']};

  /** @param {GiftbitError} giftbitError **/
  set giftbitError(giftbitError){this._one['giftbit-error'] = giftbitError};
  /** @type {GiftbitError} */
  get giftbitError(){return this._one['giftbit-error']};

  /** @param {InvoicingLedgerItem} restaurantInvoice **/
  set restaurantInvoice(restaurantInvoice){this._one['restaurant-invoice'] = restaurantInvoice};
  /** @type {InvoicingLedgerItem} */
  get restaurantInvoice(){return this._one['restaurant-invoice']};

  /** @param {InvoicingLedgerItem} clientInvoice **/
  set clientInvoice(clientInvoice){this._one['client-invoice'] = clientInvoice};
  /** @type {InvoicingLedgerItem} */
  get clientInvoice(){return this._one['client-invoice']};

  /** @param {AccountingLedgerItem} invoice **/
  set invoice(invoice){this._one['invoice'] = invoice};
  /** @type {AccountingLedgerItem} */
  get invoice(){return this._one['invoice']};

  /** @param {AccountingLedgerItem} restaurantBill **/
  set restaurantBill(restaurantBill){this._one['restaurant-bill'] = restaurantBill};
  /** @type {AccountingLedgerItem} */
  get restaurantBill(){return this._one['restaurant-bill']};

  /** @param {ClientOrderInvoice} clientOrderInvoice **/
  set clientOrderInvoice(clientOrderInvoice){this._one['client-order-invoice'] = clientOrderInvoice};
  /** @type {ClientOrderInvoice} */
  get clientOrderInvoice(){return this._one['client-order-invoice']};

  /** @param {RestaurantOrderInvoice} restaurantOrderInvoice **/
  set restaurantOrderInvoice(restaurantOrderInvoice){this._one['restaurant-order-invoice'] = restaurantOrderInvoice};
  /** @type {RestaurantOrderInvoice} */
  get restaurantOrderInvoice(){return this._one['restaurant-order-invoice']};

  /** @param {LogisticsArrivalEstimate} arrivalEstimate **/
  set arrivalEstimate(arrivalEstimate){this._one['arrival-estimate'] = arrivalEstimate};
  /** @type {LogisticsArrivalEstimate} */
  get arrivalEstimate(){return this._one['arrival-estimate']};



  /** @param {ClientDiscount[]} clientDiscounts **/
  set clientDiscounts(clientDiscounts){this._many['client-discounts'] = clientDiscounts};
  /** @type {ClientDiscount[]} */
  get clientDiscounts(){return this._many['client-discounts']};

  /** @param {RestaurantDiscount[]} restaurantDiscounts **/
  set restaurantDiscounts(restaurantDiscounts){this._many['restaurant-discounts'] = restaurantDiscounts};
  /** @type {RestaurantDiscount[]} */
  get restaurantDiscounts(){return this._many['restaurant-discounts']};

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

  /** @param {HistorianVersion[]} allOrderVersions **/
  set allOrderVersions(allOrderVersions){this._many['all-order-versions'] = allOrderVersions};
  /** @type {HistorianVersion[]} */
  get allOrderVersions(){return this._many['all-order-versions']};

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
  get versions(){return this._many['versions']};

  /** @param {Restaurant[]} pollableRestaurants **/
  set pollableRestaurants(pollableRestaurants){this._many['pollable-restaurants'] = pollableRestaurants};
  /** @type {Restaurant[]} */
  get pollableRestaurants(){return this._many['pollable-restaurants']};

  /** @param {RestaurantVote[]} restaurantVotes **/
  set restaurantVotes(restaurantVotes){this._many['restaurant-votes'] = restaurantVotes};
  /** @type {RestaurantVote[]} */
  get restaurantVotes(){return this._many['restaurant-votes']};

  /** @param {Team[]} teams **/
  set teams(teams){this._many['teams'] = teams};
  /** @type {Team[]} */
  get teams(){return this._many['teams']};

  /** @param {User[]} allUsers **/
  set allUsers(allUsers){this._many['all-users'] = allUsers};
  /** @type {User[]} */
  get allUsers(){return this._many['all-users']};

  /** @param {User[]} orderedUsers **/
  set orderedUsers(orderedUsers){this._many['ordered-users'] = orderedUsers};
  /** @type {User[]} */
  get orderedUsers(){return this._many['ordered-users']};

  /** @param {GroupOrderMember[]} orderedGroupOrderMembers **/
  set orderedGroupOrderMembers(orderedGroupOrderMembers){this._many['ordered-group-order-members'] = orderedGroupOrderMembers};
  /** @type {GroupOrderMember[]} */
  get orderedGroupOrderMembers(){return this._many['ordered-group-order-members']};

  /** @param {User[]} joinedUsers **/
  set joinedUsers(joinedUsers){this._many['joined-users'] = joinedUsers};
  /** @type {User[]} */
  get joinedUsers(){return this._many['joined-users']};

  /** @param {User[]} teamMembers **/
  set teamMembers(teamMembers){this._many['team-members'] = teamMembers};
  /** @type {User[]} */
  get teamMembers(){return this._many['team-members']};

  /** @param {GroupOrderMember[]} groupOrderMembers **/
  set groupOrderMembers(groupOrderMembers){this._many['group-order-members'] = groupOrderMembers};
  /** @type {GroupOrderMember[]} */
  get groupOrderMembers(){return this._many['group-order-members']};

  /** @param {OrderItem[]} orderItems **/
  set orderItems(orderItems){this._many['order-items'] = orderItems};
  /** @type {OrderItem[]} */
  get orderItems(){return this._many['order-items']};

  /** @param {AccountingLedgerItem[]} ledgerItems **/
  set ledgerItems(ledgerItems){this._many['ledger-items'] = ledgerItems};
  /** @type {AccountingLedgerItem[]} */
  get ledgerItems(){return this._many['ledger-items']};

  /** @param {SalesforceCase[]} salesforceCases **/
  set salesforceCases(salesforceCases){this._many['salesforce-cases'] = salesforceCases};
  /** @type {SalesforceCase[]} */
  get salesforceCases(){return this._many['salesforce-cases']};

  /** @param {NotificationLog[]} notificationLogs **/
  set notificationLogs(notificationLogs){this._many['notification-logs'] = notificationLogs};
  /** @type {NotificationLog[]} */
  get notificationLogs(){return this._many['notification-logs']};


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

  /** @param {number} maximumServing **/
  set maximumServing(maximumServing){this._attributes['maximum-serving'] = maximumServing};
  /** @type {number} */
  get maximumServing(){return this._attributes['maximum-serving'];};

  /** @param {number} minimumServing **/
  set minimumServing(minimumServing){this._attributes['minimum-serving'] = minimumServing};
  /** @type {number} */
  get minimumServing(){return this._attributes['minimum-serving'];};

  /** @param {number} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {number} */
  get notes(){return this._attributes['notes'];};

  /** @param {number} clientPriceCents **/
  set clientPriceCents(clientPriceCents){this._attributes['client-price-cents'] = clientPriceCents};
  /** @type {number} */
  get clientPriceCents(){return this._attributes['client-price-cents'];};

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

  /** @param {number} restaurantPriceCents **/
  set restaurantPriceCents(restaurantPriceCents){this._attributes['restaurant-price-cents'] = restaurantPriceCents};
  /** @type {number} */
  get restaurantPriceCents(){return this._attributes['restaurant-price-cents'];};


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

  /** @param {number} nameOnCard **/
  set nameOnCard(nameOnCard){this._attributes['name-on-card'] = nameOnCard};
  /** @type {number} */
  get nameOnCard(){return this._attributes['name-on-card'];};

  /** @param {number} nickname **/
  set nickname(nickname){this._attributes['nickname'] = nickname};
  /** @type {number} */
  get nickname(){return this._attributes['nickname'];};

  /** @param {boolean} removed **/
  set removed(removed){this._attributes['removed'] = removed};
  /** @type {boolean} */
  get removed(){return this._attributes['removed'];};

  /** @param {boolean} cardToken **/
  set cardToken(cardToken){this._attributes['card-token'] = cardToken};
  /** @type {boolean} */
  get cardToken(){return this._attributes['card-token'];};


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

  /** @param {number} notes **/
  set notes(notes){this._attributes['notes'] = notes};
  /** @type {number} */
  get notes(){return this._attributes['notes'];};


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

  /** @param {string} amount **/
  set amount(amount){this._attributes['amount'] = amount};
  /** @type {string} */
  get amount(){return this._attributes['amount'];};

  /** @param {string} amountType **/
  set amountType(amountType){this._attributes['amount-type'] = amountType};
  /** @type {string} */
  get amountType(){return this._attributes['amount-type'];};

  /** @param {string} expiresAt **/
  set expiresAt(expiresAt){this._attributes['expires-at'] = expiresAt};
  /** @type {string} */
  get expiresAt(){return this._attributes['expires-at'];};

  /** @param {string} internal **/
  set internal(internal){this._attributes['internal'] = internal};
  /** @type {string} */
  get internal(){return this._attributes['internal'];};

  /** @param {string} allowMultipleClientUses **/
  set allowMultipleClientUses(allowMultipleClientUses){this._attributes['allow-multiple-client-uses'] = allowMultipleClientUses};
  /** @type {string} */
  get allowMultipleClientUses(){return this._attributes['allow-multiple-client-uses'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} removed **/
  set removed(removed){this._attributes['removed'] = removed};
  /** @type {string} */
  get removed(){return this._attributes['removed'];};

  /** @param {string} startsAt **/
  set startsAt(startsAt){this._attributes['starts-at'] = startsAt};
  /** @type {string} */
  get startsAt(){return this._attributes['starts-at'];};

  /** @param {string} clientAccountingCode **/
  set clientAccountingCode(clientAccountingCode){this._attributes['client-accounting-code'] = clientAccountingCode};
  /** @type {string} */
  get clientAccountingCode(){return this._attributes['client-accounting-code'];};

  /** @param {string} restaurantAccountingCode **/
  set restaurantAccountingCode(restaurantAccountingCode){this._attributes['restaurant-accounting-code'] = restaurantAccountingCode};
  /** @type {string} */
  get restaurantAccountingCode(){return this._attributes['restaurant-accounting-code'];};


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

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
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

/** @class ReleaseNote
  * @extends {Resource}
  **/
export class ReleaseNote extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'release-notes', attributes, one, many);
  }

  // attributes

  /** @param {string} subject **/
  set subject(subject){this._attributes['subject'] = subject};
  /** @type {string} */
  get subject(){return this._attributes['subject'];};

  /** @param {string} body **/
  set body(body){this._attributes['body'] = body};
  /** @type {string} */
  get body(){return this._attributes['body'];};

  /** @param {string} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {string} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {string} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {string} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {string} author **/
  set author(author){this._attributes['author'] = author};
  /** @type {string} */
  get author(){return this._attributes['author'];};

  /** @param {string} authorProfilePictureUrl **/
  set authorProfilePictureUrl(authorProfilePictureUrl){this._attributes['author-profile-picture-url'] = authorProfilePictureUrl};
  /** @type {string} */
  get authorProfilePictureUrl(){return this._attributes['author-profile-picture-url'];};

  /** @param {string} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {string} */
  get active(){return this._attributes['active'];};


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

  /** @param {string} pickupNotes **/
  set pickupNotes(pickupNotes){this._attributes['pickup-notes'] = pickupNotes};
  /** @type {string} */
  get pickupNotes(){return this._attributes['pickup-notes'];};

  /** @param {string} enterpriseRequest **/
  set enterpriseRequest(enterpriseRequest){this._attributes['enterprise-request'] = enterpriseRequest};
  /** @type {string} */
  get enterpriseRequest(){return this._attributes['enterprise-request'];};

  /** @param {string} completionProgress **/
  set completionProgress(completionProgress){this._attributes['completion-progress'] = completionProgress};
  /** @type {string} */
  get completionProgress(){return this._attributes['completion-progress'];};

  /** @param {string} isPayingAdminFee **/
  set isPayingAdminFee(isPayingAdminFee){this._attributes['is-paying-admin-fee'] = isPayingAdminFee};
  /** @type {string} */
  get isPayingAdminFee(){return this._attributes['is-paying-admin-fee'];};

  /** @param {string} receivesDailyOrderSummary **/
  set receivesDailyOrderSummary(receivesDailyOrderSummary){this._attributes['receives-daily-order-summary'] = receivesDailyOrderSummary};
  /** @type {string} */
  get receivesDailyOrderSummary(){return this._attributes['receives-daily-order-summary'];};

  /** @param {string} receivesSMS **/
  set receivesSMS(receivesSMS){this._attributes['receives-sms'] = receivesSMS};
  /** @type {string} */
  get receivesSMS(){return this._attributes['receives-sms'];};

  /** @param {string} uuid **/
  set uuid(uuid){this._attributes['uuid'] = uuid};
  /** @type {string} */
  get uuid(){return this._attributes['uuid'];};

  /** @param {string} xeroContactId **/
  set xeroContactId(xeroContactId){this._attributes['xero-contact-id'] = xeroContactId};
  /** @type {string} */
  get xeroContactId(){return this._attributes['xero-contact-id'];};

  /** @param {string} xeroSynchronizedAt **/
  set xeroSynchronizedAt(xeroSynchronizedAt){this._attributes['xero-synchronized-at'] = xeroSynchronizedAt};
  /** @type {string} */
  get xeroSynchronizedAt(){return this._attributes['xero-synchronized-at'];};

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

  /** @param {Date} internal **/
  set internal(internal){this._attributes['internal'] = internal};
  /** @type {Date} */
  get internal(){return this._attributes['internal'];};

  /** @param {Date} isExclusive **/
  set isExclusive(isExclusive){this._attributes['is-exclusive'] = isExclusive};
  /** @type {Date} */
  get isExclusive(){return this._attributes['is-exclusive'];};

  /** @param {Date} isNewRestaurant **/
  set isNewRestaurant(isNewRestaurant){this._attributes['is-new-restaurant'] = isNewRestaurant};
  /** @type {Date} */
  get isNewRestaurant(){return this._attributes['is-new-restaurant'];};

  /** @param {Date} canGroupOrder **/
  set canGroupOrder(canGroupOrder){this._attributes['can-group-order'] = canGroupOrder};
  /** @type {Date} */
  get canGroupOrder(){return this._attributes['can-group-order'];};

  /** @param {Date} canSameDayOrder **/
  set canSameDayOrder(canSameDayOrder){this._attributes['can-same-day-order'] = canSameDayOrder};
  /** @type {Date} */
  get canSameDayOrder(){return this._attributes['can-same-day-order'];};

  /** @param {Date} canSameDayTeamOrder **/
  set canSameDayTeamOrder(canSameDayTeamOrder){this._attributes['can-same-day-team-order'] = canSameDayTeamOrder};
  /** @type {Date} */
  get canSameDayTeamOrder(){return this._attributes['can-same-day-team-order'];};

  /** @param {Date} canEnterpriseOrder **/
  set canEnterpriseOrder(canEnterpriseOrder){this._attributes['can-enterprise-order'] = canEnterpriseOrder};
  /** @type {Date} */
  get canEnterpriseOrder(){return this._attributes['can-enterprise-order'];};

  /** @param {Date} canSameDayEnterpriseOrder **/
  set canSameDayEnterpriseOrder(canSameDayEnterpriseOrder){this._attributes['can-same-day-enterprise-order'] = canSameDayEnterpriseOrder};
  /** @type {Date} */
  get canSameDayEnterpriseOrder(){return this._attributes['can-same-day-enterprise-order'];};

  /** @param {Date} sameDayHoursInAdvance **/
  set sameDayHoursInAdvance(sameDayHoursInAdvance){this._attributes['same-day-hours-in-advance'] = sameDayHoursInAdvance};
  /** @type {Date} */
  get sameDayHoursInAdvance(){return this._attributes['same-day-hours-in-advance'];};

  /** @param {Date} hoursInAdvance **/
  set hoursInAdvance(hoursInAdvance){this._attributes['hours-in-advance'] = hoursInAdvance};
  /** @type {Date} */
  get hoursInAdvance(){return this._attributes['hours-in-advance'];};

  /** @param {Date} enterpriseHoursInAdvance **/
  set enterpriseHoursInAdvance(enterpriseHoursInAdvance){this._attributes['enterprise-hours-in-advance'] = enterpriseHoursInAdvance};
  /** @type {Date} */
  get enterpriseHoursInAdvance(){return this._attributes['enterprise-hours-in-advance'];};

  /** @param {Date} minimumOrder **/
  set minimumOrder(minimumOrder){this._attributes['minimum-order'] = minimumOrder};
  /** @type {Date} */
  get minimumOrder(){return this._attributes['minimum-order'];};

  /** @param {Date} name **/
  set name(name){this._attributes['name'] = name};
  /** @type {Date} */
  get name(){return this._attributes['name'];};

  /** @param {Date} legalName **/
  set legalName(legalName){this._attributes['legal-name'] = legalName};
  /** @type {Date} */
  get legalName(){return this._attributes['legal-name'];};

  /** @param {Date} dietaryTagsCounts **/
  set dietaryTagsCounts(dietaryTagsCounts){this._attributes['dietary-tags-counts'] = dietaryTagsCounts};
  /** @type {Date} */
  get dietaryTagsCounts(){return this._attributes['dietary-tags-counts'];};

  /** @param {Date} slug **/
  set slug(slug){this._attributes['slug'] = slug};
  /** @type {Date} */
  get slug(){return this._attributes['slug'];};

  /** @param {Date} subtitle **/
  set subtitle(subtitle){this._attributes['subtitle'] = subtitle};
  /** @type {Date} */
  get subtitle(){return this._attributes['subtitle'];};

  /** @param {Date} thumbnailImageUrl **/
  set thumbnailImageUrl(thumbnailImageUrl){this._attributes['thumbnail-image-url'] = thumbnailImageUrl};
  /** @type {Date} */
  get thumbnailImageUrl(){return this._attributes['thumbnail-image-url'];};

  /** @param {Date} coverImageUrl **/
  set coverImageUrl(coverImageUrl){this._attributes['cover-image-url'] = coverImageUrl};
  /** @type {Date} */
  get coverImageUrl(){return this._attributes['cover-image-url'];};

  /** @param {Date} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {Date} */
  get features(){return this._attributes['features'];};

  /** @param {Date} marketingTitle **/
  set marketingTitle(marketingTitle){this._attributes['marketing-title'] = marketingTitle};
  /** @type {Date} */
  get marketingTitle(){return this._attributes['marketing-title'];};

  /** @param {Date} marketingDescription **/
  set marketingDescription(marketingDescription){this._attributes['marketing-description'] = marketingDescription};
  /** @type {Date} */
  get marketingDescription(){return this._attributes['marketing-description'];};

  /** @param {Date} comingSoon **/
  set comingSoon(comingSoon){this._attributes['coming-soon'] = comingSoon};
  /** @type {Date} */
  get comingSoon(){return this._attributes['coming-soon'];};

  /** @param {Date} counts **/
  set counts(counts){this._attributes['counts'] = counts};
  /** @type {Date} */
  get counts(){return this._attributes['counts'];};

  /** @param {Date} ordersIcalUrl **/
  set ordersIcalUrl(ordersIcalUrl){this._attributes['orders-ical-url'] = ordersIcalUrl};
  /** @type {Date} */
  get ordersIcalUrl(){return this._attributes['orders-ical-url'];};


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

  /** @param {Menu} activeMenu **/
  set activeMenu(activeMenu){this._one['active-menu'] = activeMenu};
  /** @type {Menu} */
  get activeMenu(){return this._one['active-menu']};



  /** @param {User[]} admins **/
  set admins(admins){this._many['admins'] = admins};
  /** @type {User[]} */
  get admins(){return this._many['admins']};

  /** @param {Contact[]} adminContacts **/
  set adminContacts(adminContacts){this._many['admin-contacts'] = adminContacts};
  /** @type {Contact[]} */
  get adminContacts(){return this._many['admin-contacts']};

  /** @param {HistorianVersion[]} allRestaurantVersions **/
  set allRestaurantVersions(allRestaurantVersions){this._many['all-restaurant-versions'] = allRestaurantVersions};
  /** @type {HistorianVersion[]} */
  get allRestaurantVersions(){return this._many['all-restaurant-versions']};

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
  get versions(){return this._many['versions']};

  /** @param {PromoCode[]} promoCodes **/
  set promoCodes(promoCodes){this._many['promo-codes'] = promoCodes};
  /** @type {PromoCode[]} */
  get promoCodes(){return this._many['promo-codes']};

  /** @param {MealPlanningRestaurantConstraint[]} restaurantConstraints **/
  set restaurantConstraints(restaurantConstraints){this._many['restaurant-constraints'] = restaurantConstraints};
  /** @type {MealPlanningRestaurantConstraint[]} */
  get restaurantConstraints(){return this._many['restaurant-constraints']};

  /** @param {RestaurantRanking[]} rankings **/
  set rankings(rankings){this._many['rankings'] = rankings};
  /** @type {RestaurantRanking[]} */
  get rankings(){return this._many['rankings']};

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

  /** @param {DietaryTag[]} dietaryTags **/
  set dietaryTags(dietaryTags){this._many['dietary-tags'] = dietaryTags};
  /** @type {DietaryTag[]} */
  get dietaryTags(){return this._many['dietary-tags']};

  /** @param {FoodType[]} foodTypes **/
  set foodTypes(foodTypes){this._many['food-types'] = foodTypes};
  /** @type {FoodType[]} */
  get foodTypes(){return this._many['food-types']};

  /** @param {MealType[]} mealTypes **/
  set mealTypes(mealTypes){this._many['meal-types'] = mealTypes};
  /** @type {MealType[]} */
  get mealTypes(){return this._many['meal-types']};

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

  /** @param {float} capacity **/
  set capacity(capacity){this._attributes['capacity'] = capacity};
  /** @type {float} */
  get capacity(){return this._attributes['capacity'];};

  /** @param {float} orderMax **/
  set orderMax(orderMax){this._attributes['order-max'] = orderMax};
  /** @type {float} */
  get orderMax(){return this._attributes['order-max'];};


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

  /** @param {Date} createdAt **/
  set createdAt(createdAt){this._attributes['created-at'] = createdAt};
  /** @type {Date} */
  get createdAt(){return this._attributes['created-at'];};

  /** @param {Date} updatedAt **/
  set updatedAt(updatedAt){this._attributes['updated-at'] = updatedAt};
  /** @type {Date} */
  get updatedAt(){return this._attributes['updated-at'];};

  /** @param {date} date **/
  set date(date){this._attributes['date'] = date};
  /** @type {date} */
  get date(){return this._attributes['date'];};


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

/** @class RestaurantRanking
  * @extends {Resource}
  **/
export class RestaurantRanking extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'restaurant-rankings', attributes, one, many);
  }

  // attributes

  /** @param {string} month **/
  set month(month){this._attributes['month'] = month};
  /** @type {string} */
  get month(){return this._attributes['month'];};

  /** @param {string} orders **/
  set orders(orders){this._attributes['orders'] = orders};
  /** @type {string} */
  get orders(){return this._attributes['orders'];};

  /** @param {string} orderPlatformRank **/
  set orderPlatformRank(orderPlatformRank){this._attributes['order-platform-rank'] = orderPlatformRank};
  /** @type {string} */
  get orderPlatformRank(){return this._attributes['order-platform-rank'];};

  /** @param {string} orderAreaRank **/
  set orderAreaRank(orderAreaRank){this._attributes['order-area-rank'] = orderAreaRank};
  /** @type {string} */
  get orderAreaRank(){return this._attributes['order-area-rank'];};

  /** @param {string} orderAreaPercentRank **/
  set orderAreaPercentRank(orderAreaPercentRank){this._attributes['order-area-percent-rank'] = orderAreaPercentRank};
  /** @type {string} */
  get orderAreaPercentRank(){return this._attributes['order-area-percent-rank'];};

  /** @param {string} areaRestaurantCount **/
  set areaRestaurantCount(areaRestaurantCount){this._attributes['area-restaurant-count'] = areaRestaurantCount};
  /** @type {string} */
  get areaRestaurantCount(){return this._attributes['area-restaurant-count'];};

  /** @param {string} platformRestaurantCount **/
  set platformRestaurantCount(platformRestaurantCount){this._attributes['platform-restaurant-count'] = platformRestaurantCount};
  /** @type {string} */
  get platformRestaurantCount(){return this._attributes['platform-restaurant-count'];};

  /** @param {string} orderTotal **/
  set orderTotal(orderTotal){this._attributes['order-total'] = orderTotal};
  /** @type {string} */
  get orderTotal(){return this._attributes['order-total'];};

  /** @param {string} orderPercentage **/
  set orderPercentage(orderPercentage){this._attributes['order-percentage'] = orderPercentage};
  /** @type {string} */
  get orderPercentage(){return this._attributes['order-percentage'];};

  /** @param {string} onlineOrders **/
  set onlineOrders(onlineOrders){this._attributes['online-orders'] = onlineOrders};
  /** @type {string} */
  get onlineOrders(){return this._attributes['online-orders'];};

  /** @param {string} onlineTotal **/
  set onlineTotal(onlineTotal){this._attributes['online-total'] = onlineTotal};
  /** @type {string} */
  get onlineTotal(){return this._attributes['online-total'];};

  /** @param {string} onlinePlatformRank **/
  set onlinePlatformRank(onlinePlatformRank){this._attributes['online-platform-rank'] = onlinePlatformRank};
  /** @type {string} */
  get onlinePlatformRank(){return this._attributes['online-platform-rank'];};

  /** @param {string} onlineAreaRank **/
  set onlineAreaRank(onlineAreaRank){this._attributes['online-area-rank'] = onlineAreaRank};
  /** @type {string} */
  get onlineAreaRank(){return this._attributes['online-area-rank'];};

  /** @param {string} onlineAreaPercentRank **/
  set onlineAreaPercentRank(onlineAreaPercentRank){this._attributes['online-area-percent-rank'] = onlineAreaPercentRank};
  /** @type {string} */
  get onlineAreaPercentRank(){return this._attributes['online-area-percent-rank'];};

  /** @param {string} onlinePercentage **/
  set onlinePercentage(onlinePercentage){this._attributes['online-percentage'] = onlinePercentage};
  /** @type {string} */
  get onlinePercentage(){return this._attributes['online-percentage'];};

  /** @param {string} foodeeOrders **/
  set foodeeOrders(foodeeOrders){this._attributes['foodee-orders'] = foodeeOrders};
  /** @type {string} */
  get foodeeOrders(){return this._attributes['foodee-orders'];};

  /** @param {string} foodeeTotal **/
  set foodeeTotal(foodeeTotal){this._attributes['foodee-total'] = foodeeTotal};
  /** @type {string} */
  get foodeeTotal(){return this._attributes['foodee-total'];};

  /** @param {string} foodeePlatformRank **/
  set foodeePlatformRank(foodeePlatformRank){this._attributes['foodee-platform-rank'] = foodeePlatformRank};
  /** @type {string} */
  get foodeePlatformRank(){return this._attributes['foodee-platform-rank'];};

  /** @param {string} foodeeAreaRank **/
  set foodeeAreaRank(foodeeAreaRank){this._attributes['foodee-area-rank'] = foodeeAreaRank};
  /** @type {string} */
  get foodeeAreaRank(){return this._attributes['foodee-area-rank'];};

  /** @param {string} foodeeAreaPercentRank **/
  set foodeeAreaPercentRank(foodeeAreaPercentRank){this._attributes['foodee-area-percent-rank'] = foodeeAreaPercentRank};
  /** @type {string} */
  get foodeeAreaPercentRank(){return this._attributes['foodee-area-percent-rank'];};

  /** @param {string} foodeePercentage **/
  set foodeePercentage(foodeePercentage){this._attributes['foodee-percentage'] = foodeePercentage};
  /** @type {string} */
  get foodeePercentage(){return this._attributes['foodee-percentage'];};

  /** @param {string} onlineTeamOrders **/
  set onlineTeamOrders(onlineTeamOrders){this._attributes['online-team-orders'] = onlineTeamOrders};
  /** @type {string} */
  get onlineTeamOrders(){return this._attributes['online-team-orders'];};

  /** @param {string} onlineTeamOrderTotal **/
  set onlineTeamOrderTotal(onlineTeamOrderTotal){this._attributes['online-team-order-total'] = onlineTeamOrderTotal};
  /** @type {string} */
  get onlineTeamOrderTotal(){return this._attributes['online-team-order-total'];};

  /** @param {string} onlineTeamOrderPlatformRank **/
  set onlineTeamOrderPlatformRank(onlineTeamOrderPlatformRank){this._attributes['online-team-order-platform-rank'] = onlineTeamOrderPlatformRank};
  /** @type {string} */
  get onlineTeamOrderPlatformRank(){return this._attributes['online-team-order-platform-rank'];};

  /** @param {string} onlineTeamOrderAreaRank **/
  set onlineTeamOrderAreaRank(onlineTeamOrderAreaRank){this._attributes['online-team-order-area-rank'] = onlineTeamOrderAreaRank};
  /** @type {string} */
  get onlineTeamOrderAreaRank(){return this._attributes['online-team-order-area-rank'];};

  /** @param {string} onlineTeamOrderAreaPercentRank **/
  set onlineTeamOrderAreaPercentRank(onlineTeamOrderAreaPercentRank){this._attributes['online-team-order-area-percent-rank'] = onlineTeamOrderAreaPercentRank};
  /** @type {string} */
  get onlineTeamOrderAreaPercentRank(){return this._attributes['online-team-order-area-percent-rank'];};

  /** @param {string} onlineTeamOrderPercentage **/
  set onlineTeamOrderPercentage(onlineTeamOrderPercentage){this._attributes['online-team-order-percentage'] = onlineTeamOrderPercentage};
  /** @type {string} */
  get onlineTeamOrderPercentage(){return this._attributes['online-team-order-percentage'];};

  /** @param {string} foodeeTeamOrders **/
  set foodeeTeamOrders(foodeeTeamOrders){this._attributes['foodee-team-orders'] = foodeeTeamOrders};
  /** @type {string} */
  get foodeeTeamOrders(){return this._attributes['foodee-team-orders'];};

  /** @param {string} foodeeTeamOrderTotal **/
  set foodeeTeamOrderTotal(foodeeTeamOrderTotal){this._attributes['foodee-team-order-total'] = foodeeTeamOrderTotal};
  /** @type {string} */
  get foodeeTeamOrderTotal(){return this._attributes['foodee-team-order-total'];};

  /** @param {string} foodeeTeamOrderPlatformRank **/
  set foodeeTeamOrderPlatformRank(foodeeTeamOrderPlatformRank){this._attributes['foodee-team-order-platform-rank'] = foodeeTeamOrderPlatformRank};
  /** @type {string} */
  get foodeeTeamOrderPlatformRank(){return this._attributes['foodee-team-order-platform-rank'];};

  /** @param {string} foodeeTeamOrderAreaRank **/
  set foodeeTeamOrderAreaRank(foodeeTeamOrderAreaRank){this._attributes['foodee-team-order-area-rank'] = foodeeTeamOrderAreaRank};
  /** @type {string} */
  get foodeeTeamOrderAreaRank(){return this._attributes['foodee-team-order-area-rank'];};

  /** @param {string} foodeeTeamOrderAreaPercentRank **/
  set foodeeTeamOrderAreaPercentRank(foodeeTeamOrderAreaPercentRank){this._attributes['foodee-team-order-area-percent-rank'] = foodeeTeamOrderAreaPercentRank};
  /** @type {string} */
  get foodeeTeamOrderAreaPercentRank(){return this._attributes['foodee-team-order-area-percent-rank'];};

  /** @param {string} foodeeTeamOrderPercentage **/
  set foodeeTeamOrderPercentage(foodeeTeamOrderPercentage){this._attributes['foodee-team-order-percentage'] = foodeeTeamOrderPercentage};
  /** @type {string} */
  get foodeeTeamOrderPercentage(){return this._attributes['foodee-team-order-percentage'];};

  /** @param {string} onlineEnterpriseOrders **/
  set onlineEnterpriseOrders(onlineEnterpriseOrders){this._attributes['online-enterprise-orders'] = onlineEnterpriseOrders};
  /** @type {string} */
  get onlineEnterpriseOrders(){return this._attributes['online-enterprise-orders'];};

  /** @param {string} onlineEnterpriseOrderTotal **/
  set onlineEnterpriseOrderTotal(onlineEnterpriseOrderTotal){this._attributes['online-enterprise-order-total'] = onlineEnterpriseOrderTotal};
  /** @type {string} */
  get onlineEnterpriseOrderTotal(){return this._attributes['online-enterprise-order-total'];};

  /** @param {string} onlineEnterpriseOrderPlatformRank **/
  set onlineEnterpriseOrderPlatformRank(onlineEnterpriseOrderPlatformRank){this._attributes['online-enterprise-order-platform-rank'] = onlineEnterpriseOrderPlatformRank};
  /** @type {string} */
  get onlineEnterpriseOrderPlatformRank(){return this._attributes['online-enterprise-order-platform-rank'];};

  /** @param {string} onlineEnterpriseOrderAreaRank **/
  set onlineEnterpriseOrderAreaRank(onlineEnterpriseOrderAreaRank){this._attributes['online-enterprise-order-area-rank'] = onlineEnterpriseOrderAreaRank};
  /** @type {string} */
  get onlineEnterpriseOrderAreaRank(){return this._attributes['online-enterprise-order-area-rank'];};

  /** @param {string} onlineEnterpriseOrderAreaPercentRank **/
  set onlineEnterpriseOrderAreaPercentRank(onlineEnterpriseOrderAreaPercentRank){this._attributes['online-enterprise-order-area-percent-rank'] = onlineEnterpriseOrderAreaPercentRank};
  /** @type {string} */
  get onlineEnterpriseOrderAreaPercentRank(){return this._attributes['online-enterprise-order-area-percent-rank'];};

  /** @param {string} onlineEnterpriseOrderPercentage **/
  set onlineEnterpriseOrderPercentage(onlineEnterpriseOrderPercentage){this._attributes['online-enterprise-order-percentage'] = onlineEnterpriseOrderPercentage};
  /** @type {string} */
  get onlineEnterpriseOrderPercentage(){return this._attributes['online-enterprise-order-percentage'];};

  /** @param {string} foodeeEnterpriseOrders **/
  set foodeeEnterpriseOrders(foodeeEnterpriseOrders){this._attributes['foodee-enterprise-orders'] = foodeeEnterpriseOrders};
  /** @type {string} */
  get foodeeEnterpriseOrders(){return this._attributes['foodee-enterprise-orders'];};

  /** @param {string} foodeeEnterpriseOrderTotal **/
  set foodeeEnterpriseOrderTotal(foodeeEnterpriseOrderTotal){this._attributes['foodee-enterprise-order-total'] = foodeeEnterpriseOrderTotal};
  /** @type {string} */
  get foodeeEnterpriseOrderTotal(){return this._attributes['foodee-enterprise-order-total'];};

  /** @param {string} foodeeEnterpriseOrderPlatformRank **/
  set foodeeEnterpriseOrderPlatformRank(foodeeEnterpriseOrderPlatformRank){this._attributes['foodee-enterprise-order-platform-rank'] = foodeeEnterpriseOrderPlatformRank};
  /** @type {string} */
  get foodeeEnterpriseOrderPlatformRank(){return this._attributes['foodee-enterprise-order-platform-rank'];};

  /** @param {string} foodeeEnterpriseOrderAreaRank **/
  set foodeeEnterpriseOrderAreaRank(foodeeEnterpriseOrderAreaRank){this._attributes['foodee-enterprise-order-area-rank'] = foodeeEnterpriseOrderAreaRank};
  /** @type {string} */
  get foodeeEnterpriseOrderAreaRank(){return this._attributes['foodee-enterprise-order-area-rank'];};

  /** @param {string} foodeeEnterpriseOrderAreaPercentRank **/
  set foodeeEnterpriseOrderAreaPercentRank(foodeeEnterpriseOrderAreaPercentRank){this._attributes['foodee-enterprise-order-area-percent-rank'] = foodeeEnterpriseOrderAreaPercentRank};
  /** @type {string} */
  get foodeeEnterpriseOrderAreaPercentRank(){return this._attributes['foodee-enterprise-order-area-percent-rank'];};

  /** @param {string} foodeeEnterpriseOrderPercentage **/
  set foodeeEnterpriseOrderPercentage(foodeeEnterpriseOrderPercentage){this._attributes['foodee-enterprise-order-percentage'] = foodeeEnterpriseOrderPercentage};
  /** @type {string} */
  get foodeeEnterpriseOrderPercentage(){return this._attributes['foodee-enterprise-order-percentage'];};


  // relationships


  /** @param {Restaurant} restaurant **/
  set restaurant(restaurant){this._one['restaurant'] = restaurant};
  /** @type {Restaurant} */
  get restaurant(){return this._one['restaurant']};




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

/** @class SalesforceCase
  * @extends {Resource}
  **/
export class SalesforceCase extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'salesforce-cases', attributes, one, many);
  }

  // attributes

  /** @param {any} caseReason **/
  set caseReason(caseReason){this._attributes['case-reason'] = caseReason};
  /** @type {any} */
  get caseReason(){return this._attributes['case-reason'];};

  /** @param {string} status **/
  set status(status){this._attributes['status'] = status};
  /** @type {string} */
  get status(){return this._attributes['status'];};

  /** @param {string} origin **/
  set origin(origin){this._attributes['origin'] = origin};
  /** @type {string} */
  get origin(){return this._attributes['origin'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} subject **/
  set subject(subject){this._attributes['subject'] = subject};
  /** @type {string} */
  get subject(){return this._attributes['subject'];};

  /** @param {any} caseType **/
  set caseType(caseType){this._attributes['case-type'] = caseType};
  /** @type {any} */
  get caseType(){return this._attributes['case-type'];};


  // relationships


  /** @param {Order} order **/
  set order(order){this._one['order'] = order};
  /** @type {Order} */
  get order(){return this._one['order']};




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

  /** @param {any} weekdayLetter **/
  set weekdayLetter(weekdayLetter){this._attributes['weekday-letter'] = weekdayLetter};
  /** @type {any} */
  get weekdayLetter(){return this._attributes['weekday-letter'];};

  /** @param {any} weekdayName **/
  set weekdayName(weekdayName){this._attributes['weekday-name'] = weekdayName};
  /** @type {any} */
  get weekdayName(){return this._attributes['weekday-name'];};

  /** @param {any} weekday **/
  set weekday(weekday){this._attributes['weekday'] = weekday};
  /** @type {any} */
  get weekday(){return this._attributes['weekday'];};

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

/** @class SubscriptionPlan
  * @extends {Resource}
  **/
export class SubscriptionPlan extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'subscription-plans', attributes, one, many);
  }

  // attributes

  /** @param {string} plan **/
  set plan(plan){this._attributes['plan'] = plan};
  /** @type {string} */
  get plan(){return this._attributes['plan'];};

  /** @param {string} price **/
  set price(price){this._attributes['price'] = price};
  /** @type {string} */
  get price(){return this._attributes['price'];};

  /** @param {string} deliveryPrice **/
  set deliveryPrice(deliveryPrice){this._attributes['delivery-price'] = deliveryPrice};
  /** @type {string} */
  get deliveryPrice(){return this._attributes['delivery-price'];};

  /** @param {string} planType **/
  set planType(planType){this._attributes['plan-type'] = planType};
  /** @type {string} */
  get planType(){return this._attributes['plan-type'];};

  /** @param {string} description **/
  set description(description){this._attributes['description'] = description};
  /** @type {string} */
  get description(){return this._attributes['description'];};

  /** @param {string} isCustom **/
  set isCustom(isCustom){this._attributes['is-custom'] = isCustom};
  /** @type {string} */
  get isCustom(){return this._attributes['is-custom'];};


  // relationships




  /** @param {Client[]} clients **/
  set clients(clients){this._many['clients'] = clients};
  /** @type {Client[]} */
  get clients(){return this._many['clients']};

  /** @param {FeatureFlagDescription[]} featureFlagDescriptions **/
  set featureFlagDescriptions(featureFlagDescriptions){this._many['feature-flag-descriptions'] = featureFlagDescriptions};
  /** @type {FeatureFlagDescription[]} */
  get featureFlagDescriptions(){return this._many['feature-flag-descriptions']};


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

  /** @param {string} managedInternally **/
  set managedInternally(managedInternally){this._attributes['managed-internally'] = managedInternally};
  /** @type {string} */
  get managedInternally(){return this._attributes['managed-internally'];};

  /** @param {string} numberOfMembers **/
  set numberOfMembers(numberOfMembers){this._attributes['number-of-members'] = numberOfMembers};
  /** @type {string} */
  get numberOfMembers(){return this._attributes['number-of-members'];};

  /** @param {string} perPersonBudget **/
  set perPersonBudget(perPersonBudget){this._attributes['per-person-budget'] = perPersonBudget};
  /** @type {string} */
  get perPersonBudget(){return this._attributes['per-person-budget'];};

  /** @param {string} dietaryComposition **/
  set dietaryComposition(dietaryComposition){this._attributes['dietary-composition'] = dietaryComposition};
  /** @type {string} */
  get dietaryComposition(){return this._attributes['dietary-composition'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};



  /** @param {User[]} members **/
  set members(members){this._many['members'] = members};
  /** @type {User[]} */
  get members(){return this._many['members']};

  /** @param {Order[]} orders **/
  set orders(orders){this._many['orders'] = orders};
  /** @type {Order[]} */
  get orders(){return this._many['orders']};

  /** @param {MealPlanningPreferenceProfile[]} memberProfiles **/
  set memberProfiles(memberProfiles){this._many['member-profiles'] = memberProfiles};
  /** @type {MealPlanningPreferenceProfile[]} */
  get memberProfiles(){return this._many['member-profiles']};


}

/** @class User
  * @extends {Resource}
  **/
export class User extends Resource {


  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'users', attributes, one, many);
  }

  // attributes

  /** @param {Date} acceptedTermsAt **/
  set acceptedTermsAt(acceptedTermsAt){this._attributes['accepted-terms-at'] = acceptedTermsAt};
  /** @type {Date} */
  get acceptedTermsAt(){return this._attributes['accepted-terms-at'];};

  /** @param {Date} lastSignInAt **/
  set lastSignInAt(lastSignInAt){this._attributes['last-sign-in-at'] = lastSignInAt};
  /** @type {Date} */
  get lastSignInAt(){return this._attributes['last-sign-in-at'];};

  /** @param {Date} slackChannelInfo **/
  set slackChannelInfo(slackChannelInfo){this._attributes['slack-channel-info'] = slackChannelInfo};
  /** @type {Date} */
  get slackChannelInfo(){return this._attributes['slack-channel-info'];};

  /** @param {Date} onPayroll **/
  set onPayroll(onPayroll){this._attributes['on-payroll'] = onPayroll};
  /** @type {Date} */
  get onPayroll(){return this._attributes['on-payroll'];};

  /** @param {Date} clientAlwaysCall **/
  set clientAlwaysCall(clientAlwaysCall){this._attributes['client-always-call'] = clientAlwaysCall};
  /** @type {Date} */
  get clientAlwaysCall(){return this._attributes['client-always-call'];};

  /** @param {boolean} active **/
  set active(active){this._attributes['active'] = active};
  /** @type {boolean} */
  get active(){return this._attributes['active'];};

  /** @param {boolean} managedInternally **/
  set managedInternally(managedInternally){this._attributes['managed-internally'] = managedInternally};
  /** @type {boolean} */
  get managedInternally(){return this._attributes['managed-internally'];};

  /** @param {boolean} department **/
  set department(department){this._attributes['department'] = department};
  /** @type {boolean} */
  get department(){return this._attributes['department'];};

  /** @param {boolean} email **/
  set email(email){this._attributes['email'] = email};
  /** @type {boolean} */
  get email(){return this._attributes['email'];};

  /** @param {boolean} salesforceEmail **/
  set salesforceEmail(salesforceEmail){this._attributes['salesforce-email'] = salesforceEmail};
  /** @type {boolean} */
  get salesforceEmail(){return this._attributes['salesforce-email'];};

  /** @param {boolean} firstName **/
  set firstName(firstName){this._attributes['first-name'] = firstName};
  /** @type {boolean} */
  get firstName(){return this._attributes['first-name'];};

  /** @param {boolean} lastName **/
  set lastName(lastName){this._attributes['last-name'] = lastName};
  /** @type {boolean} */
  get lastName(){return this._attributes['last-name'];};

  /** @param {boolean} profilePictureUrl **/
  set profilePictureUrl(profilePictureUrl){this._attributes['profile-picture-url'] = profilePictureUrl};
  /** @type {boolean} */
  get profilePictureUrl(){return this._attributes['profile-picture-url'];};

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

  /** @param {boolean} isFoodeeEmployee **/
  set isFoodeeEmployee(isFoodeeEmployee){this._attributes['is-foodee-employee'] = isFoodeeEmployee};
  /** @type {boolean} */
  get isFoodeeEmployee(){return this._attributes['is-foodee-employee'];};

  /** @param {boolean} isRestaurantUser **/
  set isRestaurantUser(isRestaurantUser){this._attributes['is-restaurant-user'] = isRestaurantUser};
  /** @type {boolean} */
  get isRestaurantUser(){return this._attributes['is-restaurant-user'];};

  /** @param {boolean} isExclusivelySwiftFoxUser **/
  set isExclusivelySwiftFoxUser(isExclusivelySwiftFoxUser){this._attributes['is-exclusively-swift-fox-user'] = isExclusivelySwiftFoxUser};
  /** @type {boolean} */
  get isExclusivelySwiftFoxUser(){return this._attributes['is-exclusively-swift-fox-user'];};

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

  /** @param {boolean} overridePhoneNumber **/
  set overridePhoneNumber(overridePhoneNumber){this._attributes['override-phone-number'] = overridePhoneNumber};
  /** @type {boolean} */
  get overridePhoneNumber(){return this._attributes['override-phone-number'];};

  /** @param {boolean} notifyByEmailOnDelivery **/
  set notifyByEmailOnDelivery(notifyByEmailOnDelivery){this._attributes['notify-by-email-on-delivery'] = notifyByEmailOnDelivery};
  /** @type {boolean} */
  get notifyByEmailOnDelivery(){return this._attributes['notify-by-email-on-delivery'];};

  /** @param {boolean} notifyBySMSOnDelivery **/
  set notifyBySMSOnDelivery(notifyBySMSOnDelivery){this._attributes['notify-by-sms-on-delivery'] = notifyBySMSOnDelivery};
  /** @type {boolean} */
  get notifyBySMSOnDelivery(){return this._attributes['notify-by-sms-on-delivery'];};

  /** @param {boolean} notificationPreferences **/
  set notificationPreferences(notificationPreferences){this._attributes['notification-preferences'] = notificationPreferences};
  /** @type {boolean} */
  get notificationPreferences(){return this._attributes['notification-preferences'];};

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

  /** @param {boolean} features **/
  set features(features){this._attributes['features'] = features};
  /** @type {boolean} */
  get features(){return this._attributes['features'];};

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

  /** @param {boolean} shouldShowWelcome **/
  set shouldShowWelcome(shouldShowWelcome){this._attributes['should-show-welcome'] = shouldShowWelcome};
  /** @type {boolean} */
  get shouldShowWelcome(){return this._attributes['should-show-welcome'];};

  /** @param {boolean} customFields **/
  set customFields(customFields){this._attributes['custom-fields'] = customFields};
  /** @type {boolean} */
  get customFields(){return this._attributes['custom-fields'];};

  /** @param {boolean} storage **/
  set storage(storage){this._attributes['storage'] = storage};
  /** @type {boolean} */
  get storage(){return this._attributes['storage'];};

  /** @param {boolean} planIcalUrl **/
  set planIcalUrl(planIcalUrl){this._attributes['plan-ical-url'] = planIcalUrl};
  /** @type {boolean} */
  get planIcalUrl(){return this._attributes['plan-ical-url'];};

  /** @param {boolean} state **/
  set state(state){this._attributes['state'] = state};
  /** @type {boolean} */
  get state(){return this._attributes['state'];};

  /** @param {boolean} newExperience **/
  set newExperience(newExperience){this._attributes['new-experience'] = newExperience};
  /** @type {boolean} */
  get newExperience(){return this._attributes['new-experience'];};


  // relationships


  /** @param {Client} client **/
  set client(client){this._one['client'] = client};
  /** @type {Client} */
  get client(){return this._one['client']};

  /** @param {CommunicationPreference} communicationPreference **/
  set communicationPreference(communicationPreference){this._one['communication-preference'] = communicationPreference};
  /** @type {CommunicationPreference} */
  get communicationPreference(){return this._one['communication-preference']};

  /** @param {MealPlanningPreferenceProfile} preferenceProfile **/
  set preferenceProfile(preferenceProfile){this._one['preference-profile'] = preferenceProfile};
  /** @type {MealPlanningPreferenceProfile} */
  get preferenceProfile(){return this._one['preference-profile']};



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

  /** @param {Area[]} areas **/
  set areas(areas){this._many['areas'] = areas};
  /** @type {Area[]} */
  get areas(){return this._many['areas']};

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

  /** @param {HistorianVersion[]} allUserVersions **/
  set allUserVersions(allUserVersions){this._many['all-user-versions'] = allUserVersions};
  /** @type {HistorianVersion[]} */
  get allUserVersions(){return this._many['all-user-versions']};

  /** @param {HistorianVersion[]} versions **/
  set versions(versions){this._many['versions'] = versions};
  /** @type {HistorianVersion[]} */
  get versions(){return this._many['versions']};

  /** @param {Order[]} clientOrders **/
  set clientOrders(clientOrders){this._many['client-orders'] = clientOrders};
  /** @type {Order[]} */
  get clientOrders(){return this._many['client-orders']};

  /** @param {MealPlanningEvent[]} events **/
  set events(events){this._many['events'] = events};
  /** @type {MealPlanningEvent[]} */
  get events(){return this._many['events']};


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



const ResourceClasses = {
  ['accounting-consolidation-configurations']:AccountingConsolidationConfiguration,
  ['accounting-consolidation-runs']:AccountingConsolidationRun,
  ['accounting-ledger-items']:AccountingLedgerItem,
  ['accounting-line-items']:AccountingLineItem,
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
  ['currencies-currencies']:CurrenciesCurrency,
  ['currencies-transactions']:CurrenciesTransaction,
  ['currencies-wallets']:CurrenciesWallet,
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
  ['feature-flag-descriptions']:FeatureFlagDescription,
  ['food-types']:FoodType,
  ['giftbit-cards']:GiftbitCard,
  ['giftbit-errors']:GiftbitError,
  ['giftbit-gifts']:GiftbitGift,
  ['group-order-members']:GroupOrderMember,
  ['historian-versions']:HistorianVersion,
  ['invoices']:Invoice,
  ['invoicing-ledger-items']:InvoicingLedgerItem,
  ['invoicing-tax-rates']:InvoicingTaxRate,
  ['locations']:Location,
  ['logistics-arrival-estimates']:LogisticsArrivalEstimate,
  ['logistics-deliveries']:LogisticsDelivery,
  ['meal-plans']:MealPlan,
  ['meal-planning-events']:MealPlanningEvent,
  ['meal-planning-instances']:MealPlanningInstance,
  ['meal-planning-log-records']:MealPlanningLogRecord,
  ['meal-planning-preference-profiles']:MealPlanningPreferenceProfile,
  ['meal-planning-requirements']:MealPlanningRequirement,
  ['meal-planning-requirement-constraints']:MealPlanningRequirementConstraint,
  ['meal-planning-requirement-groups']:MealPlanningRequirementGroup,
  ['meal-planning-reservations']:MealPlanningReservation,
  ['meal-planning-restaurant-constraints']:MealPlanningRestaurantConstraint,
  ['meal-planning-schedules']:MealPlanningSchedule,
  ['meal-planning-templates']:MealPlanningTemplate,
  ['meal-types']:MealType,
  ['menus']:Menu,
  ['menu-groups']:MenuGroup,
  ['menu-items']:MenuItem,
  ['menu-option-groups']:MenuOptionGroup,
  ['menu-option-items']:MenuOptionItem,
  ['notification-logs']:NotificationLog,
  ['orders']:Order,
  ['order-items']:OrderItem,
  ['payment-accounts']:PaymentAccount,
  ['payment-cards']:PaymentCard,
  ['payroll-runs']:PayrollRun,
  ['pickup-locations']:PickupLocation,
  ['promo-codes']:PromoCode,
  ['qualifying-questions']:QualifyingQuestion,
  ['release-notes']:ReleaseNote,
  ['restaurants']:Restaurant,
  ['restaurant-capacity-tranches']:RestaurantCapacityTranche,
  ['restaurant-closures']:RestaurantClosure,
  ['restaurant-discounts']:RestaurantDiscount,
  ['restaurant-order-invoices']:RestaurantOrderInvoice,
  ['restaurant-rankings']:RestaurantRanking,
  ['restaurant-votes']:RestaurantVote,
  ['roles']:Role,
  ['salesforce-cases']:SalesforceCase,
  ['salesforce-sync-errors']:SalesforceSyncError,
  ['service-times']:ServiceTime,
  ['subscription-plans']:SubscriptionPlan,
  ['tags']:Tag,
  ['teams']:Team,
  ['users']:User,
  ['user-feedbacks']:UserFeedback,
  ['user-invites']:UserInvite,
};

export default ResourceClasses;

