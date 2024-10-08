const { db } = require("../../../services/db");
const { createUser } = require("../../../services/userService");
require("dotenv").config();
const userTable = process.env.TABLE_USER;

exports.handler = async (event) => {
  try {
    const newUser = JSON.parse(event.body);

    const user = await createUser(newUser, userTable);
    if (!user.success) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: user.error,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: newUser.username,
      }),
    };
  } catch (error) {
    console.error(error.message);
    return sendError(500, error.message);
  }
};
