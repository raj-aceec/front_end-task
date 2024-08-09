const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_USERS":
      return {
        ...state,
        users: action.payload,
      };
   
      case "DELETE_USERS":
        return{
          ...state,
          users:state.users.filter(user=> user.id!==action.payload)
        };


        case "EDIT_USERS":
          const updatedUsers = state.users.map(user => {
            if (user.id === action.payload.id) {
              return { ...user, ...action.payload.updatedData };
            }
            return user;
          });
    
          return {
            ...state,
            users: updatedUsers,
          };
        default:
          return state;
  }
};

export default userReducer;
