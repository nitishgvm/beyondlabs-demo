const express = require('express');
const cors = require('cors');
const taskRoutes = require("./routes/task.routes");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});