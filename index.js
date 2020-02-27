const redux=require('redux');
const createstore =redux.createStore
const combinereducer =redux.combineReducers
// action 
const BUY_CAKE="BUY_CAKE";
const ADD_CAKE="ADD_CAKE";
const BUY_ICECREAME="BUY_ICECREAME";
const ADD_ICECREAME="ADD_ICECREAME";


function buycake(){
    return {
        type:BUY_CAKE,
        info:'first redux action'
    }
}

function addcake(){
    return {
        type:ADD_CAKE,
        info:'second redux action'
    }}

function buyicecreame(){
    return {
        type:BUY_ICECREAME,
        info:'first redux action'
    }
}

function addicecreame(){
    return {
        type:ADD_ICECREAME,
        info:'second redux action'
    }
}


// reducer 
const initialcakestate={
    noOfCakes:10
}
const initialicecreamestate={
    noOfIcecreames:20
}
// const reducer=(state=initialstate,action)=>
// {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             noOfCakes: state.noOfCakes - 1
//     }
//     case ADD_CAKE: return {
//         ...state,
//         noOfCakes: state.noOfCakes + 2
// }
//     default:return state
//     }
// }

const cakereducer=(state=initialcakestate,action)=>
{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
    }
    case ADD_CAKE: return {
        ...state,
        noOfCakes: state.noOfCakes + 1
}
    default:return state
    }
}
const icecreamereducer=(state=initialicecreamestate,action)=>
{
    switch(action.type){
        case BUY_ICECREAME: return {
            ...state,
            noOfIcecreames: state.noOfIcecreames - 1
    }
    case ADD_ICECREAME: return {
        ...state,
        noOfIcecreames: state.noOfIcecreames + 1
}
    default:return state
    }
}
const rootreducer=combinereducer({
    cake:cakereducer,
    icecreame:icecreamereducer
})
const store =createstore(rootreducer)
console.log('Initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updatedstate',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(addcake())
store.dispatch(addicecreame())
store.dispatch(buyicecreame())
store.dispatch(buyicecreame())
unsubscribe()



















