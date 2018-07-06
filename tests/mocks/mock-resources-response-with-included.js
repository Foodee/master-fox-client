const mockResourceResponseWithIncluded = {
  data: [
    {
      type: 'mock-resources',
      id: '123',
      attributes: {
        foo: 1,
        bar: 'test',
      },
      relationships: {
        one: {
          data: {
            type: 'mock-resources',
            id: '124'
          }
        },
        many:
          {
            data: [
              {
                type: 'mock-resources',
                id: '124'
              }
            ]
          }

      }
    }
  ],
  included: [
    {
      type: 'mock-resources',
      id: '124',
      attributes: {
        foo: 1,
        bar: 'test',
      }
    }
  ]

};

export default mockResourceResponseWithIncluded;
