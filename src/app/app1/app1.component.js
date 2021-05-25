const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "ninjazadmin", // update me
      password: "Inn@vate48!48" // update me
    },
    type: "default"
  },
  server: "ninjazsql01.database.windows.net", // update me
  options: {
    database: "NinjazDB", //update me
    encrypt: true
  }
};



const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
      alert('connected')
    queryDatabase();
  }
});

connection.connect();



function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT * from `,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}