import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const SETBANKDATAACTION = (value) => ({
  type: "SET_BANK_DATA", payload: value
})

export const SETBANKEDITUSER = (bank_id, updatedUserInfo) => {
  return {
    type: "SET_BANK_EDIT_USER",
    payload: { bank_id: bank_id, updatedUserInfo: updatedUserInfo },
  }

}

export const SETDELETE = (bank_id) => ({
  type: "DELETE_USER", payload: bank_id
})

const initialState = {
  banks: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BANK_DATA":
      console.log(action.payload)
      return { ...state, banks: [...state.banks, action.payload] };

    case "SET_BANK_EDIT_USER":
      const updatedUserInfo = state.banks.map(bank => {
        if (bank === action.bank_id) {
          return {...bank, ...action.action.updatedUserInfo}
        } else {
          return bank
        }
      })
      return {...state, banks: updatedUserInfo}

    case "DELETE_USER":
      const filteredBanks = state.banks.filter(bank => bank.id !== action.payloaf)
      return {...state, banks: filteredBanks}
      
    default: return state;
  }
}

const store = createStore(profileReducer, { banks: [] });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
