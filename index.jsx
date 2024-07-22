const CAKE_ORDERED ='CAKE_ORDERED';
function cakeOrder() {
  return{
    type: CAKE_ORDERED,
    payload: 1
  }
    
}

// (pervState, action)=>newState
const initialState ={
    numberOfCakes: 10
  
}

const reducer = (state=initialState,action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload
      }
    default:
      return state;
    }
  
}
