import Layout from "../components/Layout.js";

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>this is blog post</p>
  </div>
);
export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);