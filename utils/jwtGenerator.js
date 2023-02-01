const jwt = require("jsonwebtoken");
require('dotenv').config();
function jwtGenerator(h_id){
    const payload = {
        user:h_id
    };

    return jwt.sign(payload,process.env.JWTSECRET);
}

module.exports = jwtGenerator;