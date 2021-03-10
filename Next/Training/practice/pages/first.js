import Link from "next/link";

function first() {
  return (
    <>
      <h1>First Page</h1>
      <h2>
        <Link href="/">
          <a>Back</a>
        </Link>
      </h2>
    </>
  );
}

export default first;
