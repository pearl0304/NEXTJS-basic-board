/* TODO
 * must - user_id (not modify), displayName (not modify), title, contents
 * not must - images, files
 * */

export default function Write() {
  return (
    <div className="write-wrap">
      <h2>Write</h2>
      <form action="/api/post/write" method="POST">
        <div className="write-item">
          <input name="title" type="text" id="title" placeholder="TITLE" />
        </div>
        <div className="write-item">
          <input name="userId" type="text" id="userId" placeholder="ID" />
        </div>
        <div className="write-item">
          <input
            name="displayName"
            type="text"
            id="displayName"
            placeholder="DISPLAY NAME"
          />
        </div>
        <div className="write-item">
          <textarea
            name="contents"
            id="contents"
            placeholder="WRITE YOUR OPINION"
          ></textarea>
        </div>

        <div className="write-btn">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
