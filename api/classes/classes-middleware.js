const { JWT_SECRET } = require("../secrets");
const Classes = require("../classes/classes-model");
const jwt = require("jsonwebtoken");

// const restricted = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return next({
//       status: 401,
//       message: "Token Required",
//     });
//   }
//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return next({
//         status: 401,
//         message: "Token Invalid",
//       });
//     }
//     req.decodedJwt = decoded;
//     next();
//   });
// };

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const classById = await Classes.findById(id);
  !classById
    ? res.status(404).json({ message: "Class not found" })
    : (req.classById = classById);
  next();
};

// const only = (role_name) => (req, res, next) => {
//   if (req.decodedJwt.role_name !== role_name) {
//     next({
//       status: 403,
//       message: "Access Denied",
//     });
//   } else {
//     next();
//   }
// };

module.exports = { checkId };
