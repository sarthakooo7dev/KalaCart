import { GET_USERNAME , ADD_ITEM ,INCREASE ,DECREASE, CLEAR_CART, GET_TOTAL } from "./Action";

function reducer (state,action){



if(action.type === GET_USERNAME){

    var a = action.payload.username;
    var firstName = a.split(' ').slice(0, -1).join(' ');
    return {...state ,user:firstName }
}

if(action.type === ADD_ITEM){
    let items=state.itemID;
    let final_cart = state.finalcart;
    let tempcart=state.data.filter( val=>{
        if(val.id === action.payload.id){
            return val;
        }
    })
    final_cart = final_cart.concat(tempcart);
    items=items.concat(action.payload.id);
{console.log(items,"--items--concat")}
{console.log(final_cart,"--finalcart-reducer--add item")}
    
    return { ...state, count: state.count + 1, finalcart: final_cart , cardStatus:true , itemID:items}

    
}

    // .......................................................

    if (action.type === INCREASE) {
        

        let tempcart = state.finalcart.map(val => {
           
           

            
            console.log(action.payload.id, "--action.payload.id")
         
            if (val.id === action.payload.id) {
                console.log(val.amount, "---inc --test--val amount")
                var a = val.amount;
                val = { ...val, amount : val.amount + 1 }
            }
            return val;
        })
            console.log(tempcart,"tempcart - for inc")

        return {
            ...state, finalcart: tempcart, count: state.count + 1
        };
    }

// .......................................................


    if (action.type === DECREASE) {
        let tempcart = [];let item=[]
        if (action.payload.amount === 1) {
          
            tempcart = state.finalcart.filter(
                val => val.id !== action.payload.id
            )

            item=state.itemID.filter(
                val => val !== action.payload.id
            )

        }
        else {
            item=state.itemID;
            tempcart = state.finalcart.map(val => {
                if (val.id === action.payload.id) {
                    val = { ...val, amount: val.amount - 1 }
                }
                return val;
            })



        }

        console.log(tempcart, "tempcart - for dec")
        console.log(item,"itemID for dec reducer")

        return { ...state, finalcart: tempcart, count: state.count - 1 , itemID:item}

    }
// .............................................................

if(action.type === CLEAR_CART){
    let a = state.finalcart
     let item = []
    console.log(a, "---cart page finalcart")

   


    return { ...state , finalcart:[ ] , count:0  , itemID:[]}

}


// >>>>>>>>>>>>>>>>  GET TOTAL <<<<<<<<<<<<<<<<<<<<<

if(action.type === GET_TOTAL){

var grandTotal=0;var itemtotal=0;

let tempcart= state.finalcart.map( val =>{
    itemtotal= ( val.amount * val.price);
    grandTotal=grandTotal+itemtotal;
    return val

})
 console.log(grandTotal, "--grandtotal")
    console.log(state.total, "--total")
        return { ...state , total:grandTotal}
}


return state;
}
export default reducer