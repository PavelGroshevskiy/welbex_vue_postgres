import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
	name: "postgres",
	password: "",
	host: "localhost",
	port: 1234,
	database: "welbex_postgres",
});

export default pool;
