import withAuth from "components/withAuth";

function Home() {
  return <div>Hello World</div>;
}

export default withAuth(Home);
