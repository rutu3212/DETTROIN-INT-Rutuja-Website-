import db from "../config/db.js";

export const saveAdmission = (data, callback) => {
  db.query(
    "INSERT INTO admissions (name, email, course) VALUES (?, ?, ?)",
    [data.name, data.email, data.course],
    callback
  );
};