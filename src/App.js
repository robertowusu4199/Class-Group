//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import BankForms from './Components/BankForms';
import BankList from './Components/BankList';
import { useState } from 'react';

function App() {

  const [banks, setUsers] = useState([]);

  const [userToUpdate, setUserToUpdate] = useState({
    BankName: '',
    BankLocation: '',
    BankAccountNumber: '',
    BankReference: '',
    BankType: '',
    BankBalance: '',
  })

  function bankUser(bank) {
    setUsers([...banks, bank]);
  }

function DELETE_USER(id) {
  let newUsers = banks.filter((bank) => bank.id !== id);
  setUsers(newUsers);
}

  return (
    <Container>
      <Row>
        <Col md-6>
          <BankForms 
          bankUser={bankUser}/>
        </Col>

        <Col md-6>
          <BankList
            allUsers={banks}
            delete={DELETE_USER}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
