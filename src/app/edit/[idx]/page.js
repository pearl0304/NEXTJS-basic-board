import { connectDB } from "@/database/mongoDB";
import { ObjectId } from "mongodb";

export default async function edit(props) {
  const db = (await connectDB).db("Next");
  let result = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(props.params.idx) });
  return (
    <div className="write-wrap">
      <h2>Edit</h2>
      <form action="/api/post/edit" method="POST">
        <div className="write-item">
          <input
            type="hidden"
            name="_id"
            defaultValue={result._id.toString()}
          />
          <input
            name="title"
            type="text"
            id="title"
            placeholder="TITLE"
            defaultValue={result.title}
          />
        </div>
        <div className="write-item">
          <input
            name="userId"
            type="text"
            id="userId"
            placeholder="ID"
            defaultValue={result.userId}
          />
        </div>
        <div className="write-item">
          <input
            name="displayName"
            type="text"
            id="displayName"
            placeholder="DISPLAY NAME"
            defaultValue={result.displayName}
          />
        </div>
        <div className="write-item">
          <textarea
            name="contents"
            id="contents"
            placeholder="WRITE YOUR OPINION"
            defaultValue={result.contents}
          ></textarea>
        </div>

        <div className="write-btn">
          <button type="submit">Edit</button>
        </div>
      </form>
    </div>
  );
}
