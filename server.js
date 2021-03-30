const db = require("dotenv").config();
//      ({
//   path: path.resolve(process.cwd(), "/config/.env"),
// });
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const app = express();

mongoose.connect(
  "mongodb+srv://Majdi:0000@cluster0.nzsn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(" Connected to the Database successefully.....")
);

const usersRouter = require("./Routers/users");
app.use("/users", usersRouter);
app.use(express.json());
// router.post("/", (req, res) => {
//   const Utilisateurr = new Utilisateur({
//     UserName: req.body.name,
//     age: req.body.age,
//   });
//   try {
//     const newUtilisateur = Utilisateurr.save();
//     res.status(201).json(newUtilisateur);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// router.get("/", (req, res) => {
//   res.send(req.params.id);
// });

// router.patch("/:id", async (req, res) => {
//   try {
//     const Userr = await Utilisateur.findById(req.params.id);
//     Userr.age = req.body.age;
//     const a1 = await Userr.save();
//     res.json(a1);
//   } catch (err) {
//     res.send("Error");
//   }
// });

// router.delete("/:id", (req, res) => {
//   Utilisateur.findByIdAndUpdate(req.params.id);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
