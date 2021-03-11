import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  bordeR: "1px solid #DDD",
};

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);
export default Layout;
