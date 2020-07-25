export const initialToDoList = {
  toDo: [
      {
          name: 'Learn about reducers',
          completed: true,
          id: 3892987589
      }
  ]
}

export const toDoReducer = (state, action) => {
  switch (action.type) {
      case 'TOGGLE_COMPLETED':
          return {
              ...state,
              toDo: state.toDo.map(item => {
                  console.log(item.completed)
                  if (action.payload === item.id) {
                      return {
                          ...item,
                          completed: !item.completed
                      }
                  }
                  return item;
              })

          }
      case 'CLEAR_COMPLETED':
          return {
              ...state,
              toDo: state.toDo.filter(item => !item.completed)
          }
      case 'ADD_TODO':
          return {
              ...state,
              toDo: [...state.toDo,
              {
                  name: action.payload,
                  completed: false,
                  id: Date.now()
              }
              ]
          }
      default:
          return state;
  }
};