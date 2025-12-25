const express = require("express");
const app = express();

app.use(express.json()); // to read JSON body

// Dummy data
let users = [
  { id: 1, name: "Piyush", email: "piyush@gmail.com" },
  { id: 2, name: "Aman", email: "aman@gmail.com" }
];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET, PATCH, DELETE by ID
app
  .route("/api/users/:id")

  // GET user by id
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  })

  // UPDATE user by id
  .patch((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json({
      message: "User updated successfully",
      user
    });
  })

  // DELETE user by id
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.json({
      message: "User deleted successfully"
    });
  });

// CREATE new user
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});