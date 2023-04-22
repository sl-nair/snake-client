const { connect } = require("http2");

let connection;

const messages = {
  '1': "Say: You can run but you cant hide",
  '2': "Say: I'm gonna get u!!",
  '3': "Say: Why are u running",
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if(key === 'w'){
    connection.write('Move: up')
  } else if (key === 'a'){
    connection.write('Move: left')
  } else if (key === 's'){
    connection.write('Move: down')
  } else if (key === 'd') {
    connection.write('Move: right')
  } else if (messages[key]) {
    connection.write(messages[key])
  }
};


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput }