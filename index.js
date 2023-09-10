const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "tuhin", email: "tuhin@gmail.com" },
  { id: 2, name: "tarek", email: "tarek@gmail.com" },
  { id: 3, name: "zia", email: "zia@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("hit post method");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
