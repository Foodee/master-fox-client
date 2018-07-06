import { RelationshipDao, ResourceDao } from "../../src/client-base";

export class MockRelationshipDao extends RelationshipDao {

  constructor(client) {
    super(client, 'mock-resources');

    this.index = {
      many: (options) => this.toMany('many', options),
    };

    this.get = {
      one: (options) => this.toOne('one', options),
    };
  }
}

export class MockResourceDao extends ResourceDao {

  constructor(client) {
    super(client, 'mock-resources');
    this.relationshipDao = new MockRelationshipDao(client)
  }
}
