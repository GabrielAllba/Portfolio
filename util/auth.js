const {sign, verify} = require('jsonwebtoken')
var jwt = require("jsonwebtoken");

const KEY = "supersecret";

function createJSONToken(email){
  var token = jwt.sign({ email: email }, KEY, { expiresIn: "1h" });
  return token
}

exports.createJSONToken = createJSONToken