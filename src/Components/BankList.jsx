import React from 'react';
import { connect } from 'react-redux';
import BankItem from './BankItem';    



function BankList(props) {
    return (
        <div>
            {props.banks.map((bank, index) => (
                <BankItem bank={bank} key={index}
                
                />
            ))}       
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        banks : state.banks
    }
}

export default connect(mapStateToProps,{}) (BankList);