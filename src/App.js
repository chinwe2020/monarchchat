import './App.css';
import './';

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

const getApiAndEmit = "TODO";

function App() {
  return (
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
