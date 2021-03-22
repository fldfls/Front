import Header from "../components/Header";
import Layout from "../components/Layout";
import Link from "next/link";

const Post = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default () => (
  <Layout>
    <h1>Blog</h1>
    <ul>
      <Post id="hello-next" title="hello next.js" />
      <Post id="study-next" title="study Next.js" />
      <Post id="enjoy-next" title="next.js enjoy" />
    </ul>
  </Layout>
);
