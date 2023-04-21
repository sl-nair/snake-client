const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected");
    conn.write('Name: SLN');
  });
  
  conn.on('connect', () => {
    setInterval(() => {
      conn.write('Move: up')}, 50);
  })
  conn.on('data', (message) => {
    console.log(message)
  })

  return conn;
};


module.exports = { connect };