const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const mysql = require("mysql");

const app = express();
const port = 3306;

// MySQL connection
const connection = mysql.createConnection({
  host: "b4yuuss7xlf0bq0hyv4m-mysql.services.clever-cloud.com",
  user: "usj2jg1md8t9ub4u",
  password: "bBLw9V6UpXHh224r84n4",
  database: "b4yuuss7xlf0bq0hyv4m",
});

connection.connect();

// Express middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret-key",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs"); // Set EJS as the view engine

// Routes
// Render signup.ejs at the root URL
app.get("/", (req, res) => {
  res.render("signup", { alertMessage: null }); // Render signup.ejs and pass alertMessage as null
});

// Define route for /signup
app.get("/signup", (req, res) => {
  res.render("signup", { alertMessage: null }); // Render signup.ejs and pass alertMessage as null
});

// Define route for /login
app.get("/login", (req, res) => {
  res.render("login", { alertMessage: null }); // Render login.ejs and pass alertMessage as null
});

// Route for rendering the success page
app.get("/success-page", (req, res) => {
  res.render("success-page"); // Render the success-page.ejs
});

// Handle POST request for /signup
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Check if username or email already exists
  connection.query(
    "SELECT * FROM users WHERE username = ? OR email = ?",
    [username, email],
    (error, results) => {
      if (error) {
        res.render("signup", {
          alertMessage: "An error occurred. Please try again later.",
        });
        return; // Return early to avoid further execution
      }

      if (results.length > 0) {
        const existingUser = results[0];
        if (existingUser.username === username) {
          res.render("signup", {
            alertMessage: "Username or Email already taken.",
          });
        } else {
          res.render("signup", {
            alertMessage: "Email already registered with another username.",
          });
        }
      } else {
        // Hash password and store user in database
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.render("signup", {
              alertMessage: "An error occurred. Please try again later.",
            });
            return; // Return early to avoid further execution
          }

          // Store user in database
          connection.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hash],
            (error, results) => {
              if (error) {
                res.render("signup", {
                  alertMessage: "An error occurred. Please try again later.",
                });
                return; // Return early to avoid further execution
              }

              // Redirect user to success page upon successful signup
              res.redirect("/success-page");
            }
          );
        });
      }
    }
  );
});

// Handle POST request for /login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Retrieve user from database
  connection.query(
    "SELECT * FROM users WHERE username = ? OR email = ?",
    [username, username],
    (error, results) => {
      if (error) throw error;

      if (results.length === 0) {
        res.render("login", { alertMessage: "Invalid user account." }); // Render login.ejs with alertMessage
      } else {
        const user = results[0];

        // Compare hashed passwords
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;

          if (result) {
            req.session.userId = user.id;
            res.redirect("/dashboard");
          } else {
            res.render("login", { alertMessage: "Invalid password." }); // Render login.ejs with alertMessage
          }
        });
      }
    }
  );
});

// Dashboard route
app.get("/dashboard", (req, res) => {
  if (req.session.userId) {
    const userId = req.session.userId;
    connection.query(
      "SELECT username FROM users WHERE id = ?",
      [userId],
      (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
          const username = results[0].username;
          res.render("dashboard", { username: username });
        } else {
          res.redirect("/");
        }
      }
    );
  } else {
    res.redirect("/");
  }
});

// Logout route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
