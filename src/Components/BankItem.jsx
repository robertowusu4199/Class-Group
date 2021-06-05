import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { SETDELETE } from '../index.js';
import { connect } from 'react-redux';
import EditUserForm from './EditUserForm.jsx';

function BankItem(props) {

    const [isModalVisible, setShowModal] = useState(false);

    function showModal() {
        setShowModal(true);
    }

    function hideModal() {
        setShowModal(false);
    }

    return (
        <div>
           <h6>Bank Name</h6> {props.bank.BankName}

           <h6>Bank Location</h6> {props.bank.BankLocation}

           <h6>Bank Account Number</h6>{props.bank.BankAccountNumber}

           <h6>Bank Reference</h6>{props.bank.BankReference}

           <h6>Bank Type</h6>{props.bank.BankType}

           <h6>Account Balance</h6>{props.bank.BankBalance}

            <div className="submit">
                <button className="renew" onClick={showModal}> Edit</button>
                <Modal show={isModalVisible} onHide={hideModal}>
                    <Modal.Header clodeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditUserForm
                        bank={props.bank}
                        updatedUserInfo={props.updatedUserInfo}
                        hideModal={hideModal}/>
                    </Modal.Body>
                </Modal>
            </div>
            <button
            onClick={() => { 
                props.DELETE_USER(props.bank.id);
              }}
            >Delete</button>
        </div>
    );
}

const MapDispatchToProps = (dispatch) => {
    return {
        DELETE_USER: (value) => {
            dispatch = (SETDELETE(value))
        }
    }
}

export default connect(null, MapDispatchToProps)(BankItem);