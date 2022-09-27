import express from "express";
import { tableRouter } from "./routes/table.routes.js";
import cors from "cors";

const PORT = process.env.PORT || 5005;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", tableRouter);

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	{
		console.log(`server start on PORT ${PORT}`);
	}
});
