const { db } = require("../../../services/db");
require("dotenv").config();

exports.handler = async (event) => {
  try {
    const { username, password } = JSON.parse(event.body);
    console.log("username: ", username);
    console.log("password: ", password);

    const params = {
      TableName: process.env.TABLE_USER,
      Item: {
        username: username,
        password: password,
      },
    };

    await db.put(params);

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
