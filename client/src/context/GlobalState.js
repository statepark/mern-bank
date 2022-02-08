import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//This is our context API 
// initial state

const initialState = {
    users:
    [],
    error: null,
    loading: true
};

// Create context
export const UserContext = createContext(initialState);

// Provider component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions (these will make calls to the reducer) get, add, delete etc

    async function getUsers() {
        try{
            const res = await axios.get('/api/v1/users');

            dispatch({
                type: 'GET_USERS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'USERS_ERROR',
                payload: err.respose.data.error
            });
        }
    }

    async function deleteUser(id) {
        try{
            await axios.delete(`/api/v1/users/${id}`);
            dispatch({
                type: 'DELETE_USER',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.data.error
            });
        }
    }

        async function addUser(user){
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try{
                const res = await axios.post('/api/v1/users', user, config);
                dispatch({
                    type: 'ADD_USER',
                    payload: res.data.data
                });
            } catch (err){
                dispatch({
                    type: 'TRANSACTION_ERROR',
                    payload: err.response.data.error
                });
            }
    }


    return(<UserContext.Provider value={{
        users: state.users,
        error: state.error,
        loading: state.loading,
        getUsers,
        deleteUser,
        addUser
    }}>
        { children }
    </UserContext.Provider>
    );
}
