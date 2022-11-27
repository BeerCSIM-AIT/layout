import DocumentTitle from "react-document-title";
import MainLayout from "./components/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <DocumentTitle title="Home" />
      <h1>Home</h1>
      <hr />
    </MainLayout>
  );
};

export default Home;
