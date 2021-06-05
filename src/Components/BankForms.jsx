import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SETBANKDATAACTION } from '../index.js'

function BankForms(props) {

    const [state, setState] = useState({
        BankName: '',
        BankLocation: '',
        BankAccountNumber: '',
        BankReference: '',
        BankType: '',
        BankBalance: '',
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

                <label>Account Balance</label>
                <input
                    type="text"
                    name="BankBalance"
                    value={state.BankBalance}
                    onChange={handleOnChange}
                />
                <br/> <br/>

                <button onClick={(event)=> {
                    event.preventDefault(); 
                    const {BankName, BankLocation, BankAccountNumber, 
                    BankReference, BankBalance, BankType}=state
                    props.SET_BANK_DATA({BankName, BankLocation, BankAccountNumber,
                    BankReference, BankType, BankBalance})
                    setState({BankName:"", BankLocation:"", BankAccountNumber:"", BankReference:"", BankType:"", BankBalance:"" }) 
                    }}
                    >
                    Sumbit</button>
            </form>
        </div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        SET_BANK_DATA : (value) => {
            dispatch (SETBANKDATAACTION (value))
        }
    }
}

export default connect(null, MapDispatchToProps) (BankForms);