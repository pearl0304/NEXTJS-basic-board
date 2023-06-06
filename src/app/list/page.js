import { connectDB } from "@/database/mongoDB";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("Next");
  let result = await db
    .collection("posts")
    .find()
    .sort({ regDate: -1 })
    .toArray();

  return (
    <div className="list-bg">
      <div className="btn-write-wrap">
        <div className="btn-write">
          <Link href="/write">Write</Link>
        </div>
      </div>

      <div className="list">
        {result.map((data) => (
          <div className="list-item" key={data._id}>
            <Link href={`/view/${data._id}`}>
              <h4>{data.title}</h4>
              <div className="info">
                <span>{data.userId}</span>
                <span>{data.regDate?.slice(0, 10)}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
