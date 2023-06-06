import moment from "moment";
import { connectDB } from "@/database/mongoDB";
import checkNull from "@/pages/api/common/checkNullValue";

export default async function handler(req, res) {
  if (req.method == "GET") {
    return res.status(404).json("Not Found");
  } else {
    const { userId, displayName, title, contents } = req.body;
    const nullCheckData = {
      userId: userId,
      displayName: displayName,
      title: title,
      contents: contents,
    };

    const dbData = {
      ...nullCheckData,
      regDate: moment().utc().format(),
    };

    const result = checkNull("write", nullCheckData); // result[0] = statusCode , result [1] = message
    if (result[0] === 200) {
      const idx = await insertMongo(dbData);
      return res.redirect(302, `/view/${idx}`);
    } else {
      return res.status(result[0]).json({ message: result[1] });
    }
  }
}

/**
 * IMSERT IN TO MONGO DB
 * @param dbData
 * @returns {Promise<string>}
 */
async function insertMongo(dbData) {
  try {
    const db = (await connectDB).db("Next");
    const result = await db.collection("posts").insertOne(dbData);

    return result.insertedId.toString();
  } catch (e) {
    throw e;
  }
}
