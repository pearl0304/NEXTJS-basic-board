import moment from "moment";
import checkNull from "@/pages/api/common/checkNullValue";
import { updateMongo } from "@/pages/api/common/mongo";

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
      await updateMongo(_id, dbData, "posts");
      return res.redirect(302, `/view/${_id}`);
    } else {
      return res.status(result[0]).json({ message: result[1] });
    }
  }
}
