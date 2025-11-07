import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8080/handle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "auth",
        auth: {
          email,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8080/handle", {
      method: "POST",
      body: JSON.stringify({
        action: "mail",
        mail: {
          from: "dpack@example.com",
          to: "nikk@example.com",
          subject: "test subject",
          message: "test message",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const logEntry = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8080/handle", {
      method: "POST",
      body: JSON.stringify({
        action: "log",
        log: {
          name: "test",
          data: "test data from frontend",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  const testBroker = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8080", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button onClick={testBroker}>Test Broker</button>
          <button onClick={logEntry}>Log Broker</button>
          <button onClick={sendMail}>MailButton</button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
