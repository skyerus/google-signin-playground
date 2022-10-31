import logo from './logo.svg';
import './App.css';

window.handleCredentialResponse = (response) => {
  fetch("http://localhost:8080/v1/users/google_login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "id_token": response.credential
    })
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="g_id_onload"
          data-client_id="513517838296-5flqpk6t125tl5dakn97nci745mh74pj.apps.googleusercontent.com"
          data-callback="handleCredentialResponse"
        >
      </div>
    </div>
  );
}

export default App;
