if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("view" + __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.listen(process.env.PORT || 3000);

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

const mongoose = require("mongoose");
main().catch((e) => console.error(e));

async function main() {
	await mongoose.connect(process.env.DATABASE_URL);
	console.log("Connected to MongoDB");
}
