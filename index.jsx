const redux= require('redux')
const createStore = redux.configureStore;


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

const store = createStore(reducer);
console.log("initial state",store.getState())
store.subscribe(() => console.log("updated state",store.getState()))

store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
store.dispatch(cakeOrder());
