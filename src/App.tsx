import React from 'react';
import logo from './images/logo.34f82a1a.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './components/LoginComponent'

const Header: React.FC = () => {
  return (
    <header>
      <div className="img-logo">
        <img src={logo} alt="icon"/>
      </div>                    
      <div className="student-portal">
        <span>Student Portal</span>
      </div>                   
    </header>
  );
}

const Form: React.FC = () => {
  return(
    <div>
      <div>
        <LoginComponent info="Username" />
        <LoginComponent info="Password" />
        <div className='incorrect'>blank</div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary">Login</button>                        
      </div>                    
    </div>
  )
}

const App: React.FC = () => {
  return (
    <section className="bg-image">
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4 block">
          <Header />
          <Form />
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </section>
  )
}

export default App;
