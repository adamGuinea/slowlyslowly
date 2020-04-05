const Pool = require("pg").Pool;

export const pool = new Pool({
  user: "postgres",
  password: "barney99",
  host: "localhost",
  database: "perntodo",
  port: 5432
});

