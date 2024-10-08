const { db } = require("./db");

async function createUser(newUser, tableName) {
  const params = {
    TableName: tableName,
    Item: newUser,
  };

  try {
    await db.put(params);
    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: error.message };
  }
}

module.exports = { createUser };
