const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

const DashboardRoutes = require("./Routes/Dashboard_Route")

app.use(cors());
app.use(express.json());
app.use(DashboardRoutes)

app.listen(port, () => {
    console.log(`Listening to port no ${port}`);
})