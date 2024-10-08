const { db } = require("./db");

async function createUser(username, password, tableName) {
  const params = {
    TableName: tableName,
    Item: {
      username: username,
      password: password,
    },
  };

  try {
    // const command = new PutItemCommand(params);
    await db.put(params);
    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: error.message };
  }
}

module.exports = { createUser };
