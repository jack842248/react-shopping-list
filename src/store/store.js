import { createContext } from "react";

const calcTotal = (list) => list.map((item) => item.qty * item.price).reduce((a, b) => a + b, 0);

export const CartInit = {
    cartList: [],
    total: 0,
};

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newCartList;
            if (state.cartList.some((item) => item.id === action.payload.id)) {
                newCartList = state.cartList.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            qty: item.qty + action.payload.qty,
                        };
                    } else {
                        return item;
                    }
                });
            } else {
                newCartList = [...state.cartList, action.payload];
            }
            return {
                ...state,
                cartList: newCartList,
                total: calcTotal(newCartList),
            };
        }
        case 'REMOVE_FROM_CART': {
            const newCartList = state.cartList.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                cartList: newCartList,
                total: calcTotal(newCartList),
            };
        }
        case 'UPDATE_CART_QTY': {
            const newCartList = state.cartList.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        qty: action.payload.qty,
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                cartList: newCartList,
                total: calcTotal(newCartList),
            };
        }
        default:
            return state;
    }
};

export const CartContext = createContext({});