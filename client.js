const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");
  //write the username upon connection
  conn.on("connect", () => {
    console.log("Connected");
    conn.write('Name: SLN');
  });
  
  //allows messages sent from the servers to be displayed
  conn.on('data', (message) => {
    console.log(message);
  });
  return conn;
};

module.exports = { connect };