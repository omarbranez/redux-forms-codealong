export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);

  // return state;
  switch(action.type){
    case "ADD_TODO":
      console.log({ todos: [...state.todos, action.payload.text] })
      return { todos: [...state.todos, action.payload.text] }
    default: 
      return state
  }
}
