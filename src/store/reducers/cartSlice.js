import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
};

const findItemById = (state, { itemId }) => state.items.find(item => item.id === itemId);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push({ ...action.payload });
            state.totalPrice += action.payload.price;
            state.totalCount += action.payload.count;
        },
        incrementCount(state, action) {
            const item = findItemById(state, action.payload);

            item.count += 1;
            state.totalCount += 1;
        },
        decrementCount(state, action) {
            const item = findItemById(state, action.payload);

            item.count -= 1;
            state.totalCount -= 1;
        },
        incrementByMoney(state, action) {
            const item = findItemById(state, action.payload);

            item.price += item.basePrice;
            state.totalPrice += item.basePrice;
        },
        decrementByMoney(state, action) {
            const item = findItemById(state, action.payload);

            item.price -= item.basePrice;
            state.totalPrice -= item.basePrice;
        },
        deleteItem: (state, action) => {
            const item = findItemById(state, action.payload);

            state.items = state.items.filter(item => item.id !== action.payload.itemId);
            state.totalPrice -= item.price;
            state.totalCount -= item.count;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const { addItem, incrementCount, decrementCount, incrementByMoney, decrementByMoney, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;