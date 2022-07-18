import { createSlice, configureStore } from '@reduxjs/toolkit'

const productsList =[
    {
        "id": 1,
        "name": "iPhone 9",
        "price": 549,
        "discountPrice": 456,
        "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/1/1.jpg",
        "isNew": true,
        "isShippingFree": true
    },
    {
        "id": 3,
        "name": "Samsung Universe 9",
        "price": 124,
        "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/3/1.jpg",
        "isShippingFree": true
    },
    {
        "id": 6,
        "name": "MacBook Pro",
        "price": 1749,
        "discountPrice": 1300,
        "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png",
        "img": "https://dummyjson.com/image/i/products/6/1.png"
    },
    {
        "id": 7,
        "name": "Samsung Galaxy Book",
        "price": 1499,
        "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/7/1.jpg",
        "isShippingFree": true
    },
    {
        "id": 9,
        "name": "Infinix INBOOK",
        "price": 1099,
        "discountPrice": 875,
        "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/9/1.jpg"
    },
    {
        "id": 11,
        "name": "perfume Oil",
        "price": 13,
        "discountPrice": 1.09,
        "thumbnail": "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/11/1.jpg",
        "isNew": true
    },
    {
        "id": 15,
        "name": "Eau De Perfume Spray",
        "price": 30,
        "discountPrice": 9.3,
        "thumbnail": "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/15/1.jpg"
    },
    {
        "id": 16,
        "name": "Hyaluronic Acid Serum",
        "price": 19,
        "discountPrice": 6.53,
        "thumbnail": "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/16/1.png"
    },
    {
        "id": 17,
        "name": "Tree Oil 30ml",
        "price": 12,
        "thumbnail": "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/17/1.jpg"
    },
    {
        "id": 18,
        "name": "Oil Free Moisturizer",
        "price": 40,
        "discountPrice": 20.24,
        "thumbnail": "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/18/1.jpg"
    },
    {
        "id": 19,
        "name": "Skin Beauty Serum.",
        "price": 46,
        "discountPrice": 35.91,
        "thumbnail": "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/19/1.jpg"
    },
    {
        "id": 20,
        "name": "Freckle Treatment Cream",
        "price": 20,
        "discountPrice": 11.89,
        "thumbnail": "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/20/1.jpg"
    },
    {
        "id": 22,
        "name": "Elbow Macaroni - 400 gm",
        "price": 14,
        "discountPrice": 8.18,
        "thumbnail": "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/22/1.jpg"
    },
    {
        "id": 23,
        "name": "Orange Essence",
        "price": 7,
        "discountPrice": 1.13,
        "thumbnail": "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/23/1.jpg",
        "isNew": true
    },
    {
        "id": 24,
        "name": "cereals muesli fruit nuts",
        "price": 13,
        "discountPrice": 7.73,
        "thumbnail": "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/24/1.jpg",
    },
    {
        "id": 25,
        "name": "Gulab Powder 50 Gram",
        "price": 15,
        "discountPrice": 9.51,
        "thumbnail": "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/25/1.png"
    },
    {
        "id": 26,
        "name": "Plant Hanger For Home",
        "price": 15,
        "discountPrice": 7.32,
        "thumbnail": "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/26/1.jpg"
    },
    {
        "id": 27,
        "name": "Flying Wooden Bird",
        "price": 51,
        "discountPrice": 7.95,
        "thumbnail": "https://dummyjson.com/image/i/products/27/thumbnail.webp",
        "img": "https://dummyjson.com/image/i/products/27/1.jpg"
    },
    {
        "id": 28,
        "name": "3D Art Lamp",
        "price": 20,
        "thumbnail": "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/28/1.jpg",
        "isShippingFree": true
    },
    {
        "id": 29,
        "name": "Handcraft Chinese style",
        "price": 60,
        "thumbnail": "https://dummyjson.com/image/i/products/29/thumbnail.webp",
        "img": "https://dummyjson.com/image/i/products/29/1.jpg",
    },
    {
        "id": 30,
        "name": "Key Holder",
        "price": 30,
        "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
        "img": "https://dummyjson.com/image/i/products/30/1.jpg",
        "isNew": true
    }
]
const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsList,
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            let cartItem = state.cartItems.find(item => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            let cartItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex !== -1) {
                state.cartItems.splice(cartItemIndex, 1);
            }
        },
        incrementItemQuantity: (state, action) => {
            let cartItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex !== -1) {
                state.cartItems[cartItemIndex].quantity += 1;
            }
        },
        decrementItemQuantity: (state, action) => {
            let cartItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (cartItemIndex !== -1) {
                if (state.cartItems[cartItemIndex] !== 1)
                    state.cartItems[cartItemIndex].quantity -= 1;
                else
                    state.cartItems.splice(cartItemIndex, 1);
            }
        }

    }
})

export const { addToCart, removeFromCart, incrementItemQuantity, decrementItemQuantity } = productSlice.actions;

export const store = configureStore({
    reducer: { products: productSlice.reducer }
});

