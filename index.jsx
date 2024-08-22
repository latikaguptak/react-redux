const redux= require('redux')
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators


const CAKE_ORDERED ='CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function cakeOrder() {
  return{
    type: CAKE_ORDERED,
    payload: 1,
  
  }
    
}
function restocked(qyt= 1){
  return{
    type: CAKE_RESTOCKED,
    payload: qyt,
  
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
        numberOfCakes: state.numberOfCakes - action.payload
      }
    case CAKE_RESTOCKED:
      return{
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload
      }
    default:
      return state;
    }
  
}

const store = createStore(reducer);
console.log("initial state",store.getState())
const unsubscribe = store.subscribe(() => console.log("updated state",store.getState()))

// store.dispatch(cakeOrder());
// store.dispatch(cakeOrder());
// store.dispatch(cakeOrder());
// store.dispatch(restocked(3));
const actions = bindActionCreators({cakeOrder, restocked}, store.dispatch)
actions.cakeOrder()
actions.cakeOrder()
actions.cakeOrder()
actions.restocked(4)
unsubscribe(); // to stop listening to changes

