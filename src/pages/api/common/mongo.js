import { connectDB } from "@/database/mongoDB";
import { ObjectId } from "mongodb";

/**
 * NEW DATA INSERT INTO MONGO DB
 * @param dbData
 * @returns {Promise<string>}
 */

export async function insertMongo(dbData, collection) {
  try {
    const db = (await connectDB).db("Next");
    const result = await db.collection(collection).insertOne(dbData);

    return result.insertedId.toString();
  } catch (e) {
    throw e;
  }
}

/**
 * FOR EDIT, DELETE
 * @param _id
 * @param dbData
 * @returns {Promise<void>}
 */
export async function updateMongo(_id, dbData, collection) {
  try {
    const db = (await connectDB).db("Next");
    await db
      .collection(collection)
      .updateOne({ _id: new ObjectId(_id) }, { $set: dbData });
  } catch (e) {
    throw e;
  }
}
