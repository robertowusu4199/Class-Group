import React, { useState } from 'react';
import { connect } from 'react-redux'
import { SETBANKEDITUSER } from '../index.js'

function EditUserForm(props) {

    const [state, setState] = useState({
        BankName: props.bank.BankName,
        BankLocation: props.bank.BankLocation,
        BankAccountNumber: props.bank.BankAccountNumber,
        BankReference: props.bank.BankReference,
        BankType: props.bank.BankType,
        BankBalance: props.bank.BankBalance,
    });

    function handleOnChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div className='details'>
            <form>
                <label>Bank Name</label>
                <input
                    type="text"
                    name="BankName"
                    value={state.BankName}
                    onChange={handleOnChange}
                />
                <br /> <br />

                <label>Bank Location</label>
                <input
                    type="text"
                    name="BankLocation"
                    value={state.BankLocation}
                    onChange={handleOnChange}
                />
                <br /> <br />

                <label>Bank Account No</label>
                <input
                    type="text"
                    name="BankAccountNumber"
                    value={state.BankAccountNumber}
                    onChange={handleOnChange}
                />
                <br /> <br />

                <label>Bank Reference</label>
                <input
                    type="text"
                    name="BankReference"
                    value={state.BankReference}
                    onChange={handleOnChange}
                />
                <br /> <br />

                <label>Bank Type</label>
                <input
                    type="text"
                    name="BankType"
                    value={state.BankType}
                    onChange={handleOnChange}
                />
                <br /> <br />

                <label>Bank Balance</label>
                <input
                    type="text"
                    name="BankBalance"
                    value={state.BankBalance}
                    onChange={handleOnChange}
                />
                <br /> <br />

                <button onClick={(event) => {
                    event.preventDefault();
                    const updatedUserInfo = { ...state, id: props.bank.id }
                    props.SET_BANK_EDIT_USER(props.bank.id, updatedUserInfo)
                    setState({ BankName: "", BankLocation: "", BankAccountNumber: "", BankReference: "", BankType: "", BankBalance: "" })
                    props.hideModal();
                }}
                >
                    Update User</button>
            </form>
        </div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        SET_BANK_EDIT_USER: (value) => {
            dispatch = (SETBANKEDITUSER(value))
        }
    }
}

export default connect(MapDispatchToProps)(EditUserForm)