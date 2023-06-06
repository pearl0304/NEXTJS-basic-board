import { connectDB } from "@/database/mongoDB";
import { ObjectId } from "mongodb";
import Link from "next/link";
import Buttons from "@/components/Buttons";

export default async function View(props) {
  const db = (await connectDB).db("Next");
  let result = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(props.params.idx) });

  let print_reg_date = `Reg date : ${result.regDate?.slice(0, 10)}`;
  let print_modify_date = `Modify date : ${result.modifyDate?.slice(0, 10)}`;

  return (
    <div className="view-wrap">
      <div className="view-box">
        <h2>{result.title}</h2>
        <div className="post-info">
          <div className="writer"> Written by : {result.userId}</div>
          <div className="regDate"> {print_reg_date} </div>
          {result.modifyDate ? (
            <div className="regDate">{print_modify_date}</div>
          ) : (
            ""
          )}
        </div>
        <div className="post">
          <p>{result.contents}</p>
        </div>
      </div>
      <Buttons _id={result._id.toString()} />
    </div>
  );
}
