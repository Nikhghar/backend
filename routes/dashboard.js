const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");

router.get("/getstudents", async (req, res) => {
  try {
    const user = await pool.query(
      'SELECT * FROM "student"'
    ); 
    console.log(user)
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", authorization,async (req, res) => {
  try {
    console.log(req.body);
    
    const q= `SELECT h_name FROM hostelites WHERE h_id = '${req.body.id}'`;
    console.log(q);
    const user = await pool.query(q);
    console.log(user);
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    //console.log(user);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
