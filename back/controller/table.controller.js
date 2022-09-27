import db from "../db.js";

class tableController {
	async createTableRow(req, res) {
		const { date, title, count, distance } = req.body;
		console.log(date, title, count, distance);
		const newTable = await db.query(
			`INSERT INTO "table" (date, title, count, distance) VALUES ($1, $2, $3, $4) RETURNING *`,
			[date, title, count, distance]
		);

		res.json(newTable.rows[0]);
	}

	async getAll(req, res) {
		const tables = await db.query(`SELECT * FROM "table"`);
		res.json(tables.rows);
	}
}

export default new tableController();
