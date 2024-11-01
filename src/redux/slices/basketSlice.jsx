import {createSlice} from "@reduxjs/toolkit"


const getBasketFromStorage = ()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"));
    }
    else{
        return []
    }
}

const initialState = {
    products : getBasketFromStorage()
}

const writeFromBasketToStorage =(basket)=>{
    localStorage.setItem("basket" , JSON.stringify(basket))
}



export const basketSlice = createSlice({
    name : "basket",
    initialState,
    reducers : {
        addToBasket : (state , action)=>{
            const findProduct = state.products.find((product) => product.id === action.payload.id);

            if(findProduct){
               const extratedProducts = state.products.filter((product)=>product.id != action.payload.id)
               findProduct.count += action.payload.count;

               state.products = [...extratedProducts , findProduct]

            }else{
                state.products = [...state.products , action.payload]
                writeFromBasketToStorage(state.products)
            }
        }
    }
})


export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer