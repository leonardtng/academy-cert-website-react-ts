import React from 'react';
import logo from './logo.34f82a1a.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
        </div>

        <div className="col-md-4 block">
          <header>
            <div className="img-logo">
              <img src={logo} alt="icon"/>
            </div>                    
            <div className="student-portal">
              <span>Student Portal</span>
            </div>                   
          </header>

          <form>
            <div id="user">
              <div className="form-group">
                <label>Username</label>
                  <input type="username" className="form-control" id="username"/>
                </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password"/>
                <div className='incorrect'>{''}</div>  
              </div> 
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary">Login</button>                        
            </div>                    
          </form>
          </div>

          <div className="col-md-4">
          </div>
      </div>
    </div>
  );
}

export default App;
