export const todos: Array<ITodoCategory> = [
  {
    id: '1',
    category: 'Groceries',
    todo: [
      {
        id: '1',
        title: 'Milk',
        due: new Date('2018-02-02'),
        completed: false,
      }
    ]
  },
  {
    id: '2',
    category: 'Pharmacy',
    todo: [
      {
        id: '1',
        title: 'Get Antacid',
        due: new Date('2018-02-02'),
        completed: false,
      },
      {
        id: '2',
        title: 'Pick up prescription',
        due: new Date('2018-02-02'),
        completed: false,
      }
    ]
  },
]
