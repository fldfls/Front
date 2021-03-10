import Link from "next/link";

function home() {
  return (
    <h1>
      Read{" "}
      <Link href="/first">
        <a>This Page!</a>
      </Link>{" "}
    </h1>
  );
}

export default home;
