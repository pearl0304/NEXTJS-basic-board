import { connectDB } from "@/database/mongoDB";
import moment from "moment";
import { updateMongo } from "@/pages/api/common/mongo";

export default async function Delete(req, res) {
  const { id } = req.query;
  const dbData = {
    isDeleted: true,
    deletedDate: moment.utc().format(),
  };
  await updateMongo(id, dbData, "posts");
  return res.redirect(302, `/list`);
}
