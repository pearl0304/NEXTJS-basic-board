import moment from "moment";
import { connectDB } from "@/database/mongoDB";
import checkNull from "@/pages/api/common/checkNullValue";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "GET") {
    return res.status(404).json("Not Found");
  } else {
    const { _id, userId, displayName, title, contents } = req.body;

    const nullCheckData = {
      userId: userId,
      displayName: displayName,
      title: title,
      contents: contents,
    };

    const dbData = {
      ...nullCheckData,
      modifyDate: moment().utc().format(),
    };

    const result = checkNull("write", nullCheckData); // result[0] = statusCode , result [1] = message
    if (result[0] === 200) {
      await updateMongo(_id, dbData);
      return res.redirect(302, `/view/${_id}`);
    } else {
      return res.status(result[0]).json({ message: result[1] });
    }
  }
}

async function updateMongo(_id, dbData) {
  try {
    const db = (await connectDB).db("Next");
    await db
      .collection("posts")
      .updateOne({ _id: new ObjectId(_id) }, { $set: dbData });
  } catch (e) {
    throw e;
  }
}
