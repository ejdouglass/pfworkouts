import { createContext, useReducer } from 'react';

const actions = {

}

const Reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const initialState = {
    name: 'Fred'
};

export const Context = createContext(initialState);

export const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};