const mockData = [
  {
    id: 'floor-1',
    name: 'Ground Floor',
    flats: [
      {
        id: 'flat-1-1',
        name: 'Flat 01',
        areas: [
          {
            id: 'area-1-1-1',
            name: 'Bathroom',
            lineItems: [
              { id: 'line-1-1-1-1', name: 'Primer Application', completed: true },
              { id: 'line-1-1-1-2', name: 'Geotextile Laying', completed: true },
              { id: 'line-1-1-1-3', name: 'PU Base Coat', completed: false }
            ]
          },
          {
            id: 'area-1-1-2',
            name: 'Kitchen',
            lineItems: [
              { id: 'line-1-1-2-1', name: 'Primer Application', completed: false },
              { id: 'line-1-1-2-2', name: 'Geotextile Laying', completed: false }
            ]
          }
        ]
      },
      {
        id: 'flat-1-2',
        name: 'Flat 02',
        areas: [
          {
            id: 'area-1-2-1',
            name: 'Bathroom',
            lineItems: [
              { id: 'line-1-2-1-1', name: 'Primer Application', completed: true },
              { id: 'line-1-2-1-2', name: 'PU Base Coat', completed: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'floor-2',
    name: 'First Floor',
    flats: [
      {
        id: 'flat-2-1',
        name: 'Flat 101',
        areas: [
          {
            id: 'area-2-1-1',
            name: 'Balcony',
            lineItems: [
              { id: 'line-2-1-1-1', name: 'Primer Application', completed: false },
              { id: 'line-2-1-1-2', name: 'Geotextile Laying', completed: false },
              { id: 'line-2-1-1-3', name: 'PU Base Coat', completed: false }
            ]
          }
        ]
      }
    ]
  },
  
  {
    id: 'floor-3',
    name: 'Second Floor',
    flats: [
      {
        id: 'flat-3-1',
        name: 'Flat 201',
        areas: [
          {
            id: 'area-1-2-1',
            name: 'Bathroom',
            lineItems: [
              { id: 'line-1-2-1-1', name: 'Primer Application', completed: true },
              { id: 'line-2-1-1-2', name: 'Geotextile Laying', completed: false },
              { id: 'line-1-2-1-2', name: 'PU Base Coat', completed: false }
            ]
          }
        ]
      }
    ]
  },

   {
    id: 'floor-4',
    name: 'Third Floor',
    flats: [
      {
        id: 'flat-2-1',
        name: 'Flat 301',
        areas: [
          {
            id: 'area-2-1-1',
            name: 'Balcony',
            lineItems: [
              { id: 'line-2-1-1-1', name: 'Primer Application', completed: false },
              { id: 'line-2-1-1-2', name: 'Geotextile Laying', completed: false },
              { id: 'line-2-1-1-3', name: 'PU Base Coat', completed: false }
            ]
          }
        ]
      }
    ]
  }

];