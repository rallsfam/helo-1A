const initalState = {
    user: {
     id: 'user_id' ,
     name: 'username',
     image: 'picture'
    }
   };
   
   
   // ACTION TYPES/ CONSTANTS:
   const  UPDATE_USER_DATA = 'UPDATE_USER_DATA';
   
   
   // ACTION CREATORS/ BUILDERS:
   export function updateUserData(user) {
    return {
      type: UPDATE_USER_DATA,
      payload: user
    }
   };
   
   // export function updateUserData( id, name, image ){
   //   return {
   //     type: UPDATE_LOAN_TYPE,
   //     payload: 
   //   }
   //   };
   
   
   // REDUCER w/ our diff. CASES:
   export default function reducer(state = initalState, action) {
    switch (action.type) {
      case UPDATE_USER_DATA:
      return Object.assign({}, state, { user: action.payload });
   
      default:
        return state;
    }
   };