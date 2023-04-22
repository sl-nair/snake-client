const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
      host: IP, // IP address here,
      port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected");
    conn.write('Name: SLN');
  });
  
  conn.on('connect', () => {
  });

  conn.on('data', (message) => {
    console.log(message)
  });

  return conn;
};


module.exports = { connect };