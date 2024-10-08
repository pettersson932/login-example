const { db } = require("../../../services/db");
const { createUser } = require("../../../services/userService");
require("dotenv").config();

exports.handler = async (event) => {
  try {
    const { username, password } = JSON.parse(event.body);
    console.log("username: ", username);
    console.log("password: ", password);

    await createUser(username, password, process.env.TABLE_USER);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: username,
      }),
    };
  } catch (error) {
    console.error(error.message);
    return sendError(500, error.message);
  }
};
