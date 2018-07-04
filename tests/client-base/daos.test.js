import { ResourceDao } from '../../src/client-base';
import Faker from 'faker';
import Resource from "../../src/resources/resource";

let mockJRClient;
let indexMock;
let getMock;
let createMock;
let updateMock;

beforeEach(() => {
  mockJRClient = {
    get: jest.fn(),
    index: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };

  indexMock = mockJRClient.index.mock;
  getMock = mockJRClient.get.mock;
  createMock = mockJRClient.create.mock;
  updateMock = mockJRClient.update.mock;

});

test('ResourceDao#get maps id and type to the url', () => {
  const type = Faker.lorem.word();
  const id = Faker.lorem.word();
  const dao = new ResourceDao(mockJRClient, type);

  dao.get(id);

  expect(getMock.calls.length).toBe(1);
  expect(getMock.calls[0][0]).toBe(`${type}/${id}`);
});

test('ResourceDao#index maps type to the url', () => {
  const type = Faker.lorem.word();
  const dao = new ResourceDao(mockJRClient, type);

  dao.index();

  expect(indexMock.calls.length).toBe(1);
  expect(indexMock.calls[0][0]).toBe(type);
});

test('ResourceDao#index filters non allowable options', () => {
  const type = Faker.lorem.word();
  const dao = new ResourceDao(mockJRClient, type);

  dao.index({
    include: 'foo',
    filter: 'bar',
    sort: 'baz',
    page: 'pago',
    iShouldNotBePresent: 'bah'
  });

  expect(indexMock.calls.length).toBe(1);
  expect(indexMock.calls[0][0]).toBe(type);
  expect(indexMock.calls[0][1]).toBe('foo');
  expect(indexMock.calls[0][2]).toBe('bar');
  expect(indexMock.calls[0][3]).toBe('baz');
  expect(indexMock.calls[0][4]).toBe('pago');
  expect(indexMock.calls[0][5]).not.toBe('bah');
});


test('Resource#Update should throw you try and update a resource without and id', () => {
  try {
    const type = Faker.lorem.word();
    const dao = new ResourceDao(mockJRClient, type);
    dao.update(new Resource());
    jest.fail('Should not reach');
  }
  catch (e) {
    expect(e.message).toBe('You cannot update a resource without an id')
  }
});



const restoPayload = {
  "data": {
    "id": "1",
    "type": "restaurants",
    "links": {
      "self": "https://concierge.food.ee/api/v3/restaurants/1"
    },
    "attributes": {
      "created-at": "2013-07-09T19:02:43.000Z",
      "updated-at": "2017-10-18T03:25:06.021Z",
      "active": false,
      "name": "Scott test",
      "slug": "scott",
      "subtitle": null,
      "legal-name": "Scott test",
      "pickup-notes": null,
      "completion-progress": {
        "has-basic-profile": true,
        "has-pickup-location": true,
        "has-thumbnail-image": false,
        "has-hero-image": false,
        "has-service-times": false,
        "has-menu": true,
        "has-story-page": null
      },
      "dietary-tags-counts": {
        "ids": {},
        "names": {}
      },
      "coming-soon": false,
      "hours-in-advance": 21,
      "internal": null,
      "is-new": false,
      "cover-image-url": "",
      "thumbnail-image-url": "",
      "is-paying-admin-fee": true,
      "can-group-order": true,
      "receives-daily-order-summary": false,
      "receives-sms": false,
      "marketing-title": "",
      "marketing-description": "",
      "features": {
        "sms": false,
        "star-fox": false,
        "fleet-fox-logging": false,
        "salesforce-sync": true,
        "daily-order-summary": true,
        "delivery-cases": true,
        "order-calendar-attachement": false,
        "rewards-program": true,
        "meal-plan": false,
        "restaurant-confirmation-mailer": true,
        "auto-finalize-meal-plan-orders": true,
        "waive-delivery-fee": false,
        "restaurants-index-filters": true,
        "mailer-authorization-failure": true,
        "mailer-payment-failure": true,
        "mailer-client-rejected-notification": true,
        "mailer-group-order-auto-cancel": true,
        "mailer-restaurant-rejected-notification": true,
        "mailer-cancellation-notification-for-restaurant": true,
        "mailer-cancellation-notification-for-client": true,
        "mailer-online-order-notification": true,
        "mailer-client-summary": true,
        "mailer-restaurant-summary": true,
        "mailer-client-confirmation": true,
        "mailer-restaurant-confirmation": true,
        "mailer-client-invoice": true,
        "mailer-client-submitted": true,
        "mailer-group-order-member-submitted": true,
        "mailer-client-follow-up": true,
        "mailer-same-day-group-order-summary": true,
        "mailer-group-order-locked-notification": true,
        "mailer-group-order-expiry-reminder": true,
        "mailer-group-order-deadline-reminder": true,
        "poop": true,
        "pickles": true,
        "auto-finalize-orders": true,
        "cloud-cart": true,
        "restaurant-admin-fee-email": true,
        "group-order-modal-v3": false,
        "stripe-webhook": false,
        "discount-codes": true,
        "typeform-feedback": true,
        "phone-numbers": true,
        "write-phone-numbers": true,
        "sms-client-facing": true,
        "cutlery-on-checkout": true,
        "skip-address-verification": false,
        "show-client-drafts": true
      }
    },
    "relationships": {
      "orders": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/orders",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/orders"
        }
      },
      "service-times": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/service-times",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/service-times"
        }
      },
      "pickup-locations": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/pickup-locations",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/pickup-locations"
        }
      },
      "billing-location": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/billing-location",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/billing-location"
        }
      },
      "billing-contact": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/billing-contact",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/billing-contact"
        }
      },
      "owner": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/owner",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/owner"
        },
        "data": {
          "type": "users",
          "id": "98"
        }
      },
      "dietary-tags": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/dietary-tags",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/dietary-tags"
        }
      },
      "tags": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/tags",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/tags"
        }
      },
      "areas": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/areas",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/areas"
        }
      },
      "menus": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/menus",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/menus"
        }
      },
      "closures": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/closures",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/closures"
        }
      },
      "versions": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/versions",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/versions"
        }
      },
      "promo-codes": {
        "links": {
          "self": "https://concierge.food.ee/api/v3/restaurants/1/relationships/promo-codes",
          "related": "https://concierge.food.ee/api/v3/restaurants/1/promo-codes"
        }
      }
    }
  },
  "included": [
    {
      "id": "98",
      "type": "users",
      "links": {
        "self": "https://concierge.food.ee/api/v3/users/98"
      },
      "attributes": {
        "active": true,
        "email": "scott_a_merchant@food.ee",
        "first-name": "scott_a_merchant",
        "last-name": "-",
        "reset-password-token": null,
        "has-password": true,
        "phone-number": "9999999999",
        "extension": null,
        "sms-number": null,
        "phone-can-sms": false,
        "phone-type": "none",
        "slack-channel-info": {},
        "last-sign-in-at": null,
        "invitation-sent-at": null,
        "invitation-token": null,
        "driver-device-info": {},
        "driver-file-number": null,
        "driver-speed-rating": 0,
        "driver-vehicle-type": "none",
        "last-driver-notification-sent-at": null,
        "is-active-driver": false,
        "client-always-call": false
      },
      "relationships": {
        "driver-pings": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/driver-pings",
            "related": "https://concierge.food.ee/api/v3/users/98/driver-pings"
          }
        },
        "driver-weeks": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/driver-weeks",
            "related": "https://concierge.food.ee/api/v3/users/98/driver-weeks"
          }
        },
        "driver-days": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/driver-days",
            "related": "https://concierge.food.ee/api/v3/users/98/driver-days"
          }
        },
        "delivered-orders": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/delivered-orders",
            "related": "https://concierge.food.ee/api/v3/users/98/delivered-orders"
          }
        },
        "couriers": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/couriers",
            "related": "https://concierge.food.ee/api/v3/users/98/couriers"
          }
        },
        "roles": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/roles",
            "related": "https://concierge.food.ee/api/v3/users/98/roles"
          }
        },
        "payment-cards": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/payment-cards",
            "related": "https://concierge.food.ee/api/v3/users/98/payment-cards"
          }
        },
        "versions": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/versions",
            "related": "https://concierge.food.ee/api/v3/users/98/versions"
          }
        },
        "communication-preference": {
          "links": {
            "self": "https://concierge.food.ee/api/v3/users/98/relationships/communication-preference",
            "related": "https://concierge.food.ee/api/v3/users/98/communication-preference"
          }
        }
      }
    }
  ]
};


test('Restaurant#get returns a correctly nested object', () => {

});
