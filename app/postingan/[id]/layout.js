import Link from "next/link";
import Postingan from "../page";

export default async function layout({ children }) {
  return (
    <div>
      <Postingan />
      <hr />
      <div>{children}</div>
    </div>
  );
}
