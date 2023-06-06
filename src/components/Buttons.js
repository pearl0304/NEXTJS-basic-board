import Link from "next/link";

export default function Buttons({ _id }) {
  return (
    <div className="btns-wrap">
      <Link href="/list">
        <span className="list">LIST</span>
      </Link>
      <Link href={`/edit/${_id}`}>
        <span className="edit">Edit</span>
      </Link>
      <Link href={`/delete/${_id}`}>
        <span className="delete">Delete</span>
      </Link>
    </div>
  );
}
