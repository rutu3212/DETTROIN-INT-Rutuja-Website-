import db from "../config/db.js";

export const saveContact = (data, callback) => {
  db.query(
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
    [data.name, data.email, data.message],
    callback
  );
};