// const express = require('express');
// const router = express.Router();

// module.exports = (db) => {

//   //get all employees as json.
//   router.get("users/social", (req, res) => {
//     db.query(`SELECT username, url, password WHERE type =$1`, ["social"])
//       .then(data => {
//         const social = data.rows;
//         console.log(social)
//         res.json({ social });
//       })
//       .catch(err => {
//         res.status(500)
//           .json({ error: err.message });
//       });
//   });


//   router.get("/pear", (req, res) => {
//     db.query(`SELECT email,CONCAT(First , ' ' ,  Last) AS Name,department,start_date,password FROM employees WHERE organization_name =$1`, ["Pear"])
//       .then(data => {
//         const pear = data.rows;
//         res.json({ pear });
//       })
//       .catch(err => {
//         res.status(500)
//           .json({ error: err.message });
//       });
//   });

//     router.get("/strawberry", (req, res) => {
//       db.query(`SELECT email,CONCAT(First , ' ' ,  Last) AS Name,department,start_date,password FROM employees WHERE organization_name =$1`, ["Strawberry"])

//         .then(data => {
//           const strawberry = data.rows;
//           res.json({ strawberry });
//         })
//         .catch(err => {
//           res.status(500)
//             .json({ error: err.message });
//         });
//     })
//     return router;
// };
