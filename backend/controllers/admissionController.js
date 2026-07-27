// import db from "../config/db.js";

// // ✅ POST - Insert data
// export const submitAdmission = (req, res) => {
//   const { name, email, phone, course } = req.body;

//   const sql =
//     "INSERT INTO admissions (name, email, phone, course) VALUES (?, ?, ?, ?)";

//   db.query(sql, [name, email, phone, course], (err, result) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "Insert failed" });
//     }

//     res.json({ message: "Admission submitted successfully" });
//   });
// };

// // ✅ GET - Fetch data
// export const getAdmissions = (req, res) => {
//   const sql = "SELECT * FROM admissions";

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "Fetch failed" });
//     }

//     res.json(result);
//   });
// };

// export const deleteAdmission = (req, res) => {
//   const { id } = req.params;

//   const sql = "DELETE FROM admissions WHERE id = ?";

//   db.query(sql, [id], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Delete failed" });
//     }

//     res.json({ message: "Student deleted successfully" });
//   });
// };


import db from "../config/db.js";


// ✅ POST - Insert Admission Data
export const submitAdmission = (req, res) => {

  const {
    name,
    email,
    phone,
    className,
    message
  } = req.body;


  const sql = `
    INSERT INTO admissions
    (name, email, phone, class, message)
    VALUES (?, ?, ?, ?, ?)
  `;


  db.query(
    sql,
    [
      name,
      email,
      phone,
      className,
      message
    ],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          error: err.message
        });
      }


      res.status(200).json({
        message: "Admission submitted successfully"
      });

    }
  );

};



// ✅ GET - Fetch All Admissions
export const getAdmissions = (req, res) => {

  const sql = "SELECT * FROM admissions";


  db.query(sql, (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        error: "Fetch failed"
      });

    }


    res.json(result);

  });

};



// ✅ DELETE - Delete Admission
export const deleteAdmission = (req, res) => {

  const { id } = req.params;


  const sql = "DELETE FROM admissions WHERE id = ?";


  db.query(
    sql,
    [id],
    (err, result) => {

      if (err) {

        console.error(err);

        return res.status(500).json({
          message: "Delete failed"
        });

      }


      res.json({
        message: "Student deleted successfully"
      });

    }
  );

};