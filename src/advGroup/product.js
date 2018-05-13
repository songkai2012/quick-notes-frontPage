
export const productListMapper = [{
  type: 'advertGroup',
  id: '01020420',
  mapTo: 'T1',
  next: [{
    type: 'advertGroup',
    mapKey: 'desc',
    mapTo: 'T1_1'
  }]
},
{
  type: 'advertGroup',
  id: '01020425',
  mapTo: 'T2',
  next: [{
    type: 'advertGroup',
    mapKey: 'desc',
    mapTo: 'T2_1'
  }]
},
{
  type: 'advertGroup',
  id: '01016517',
  mapTo: 'T3'
},
{
  type: 'advertGroup',
  id: '01017084',
  mapTo: 'T4_1'
},
{
  type: 'advertGroup',
  id: '01017085',
  mapTo: 'T4_2'
}
]
