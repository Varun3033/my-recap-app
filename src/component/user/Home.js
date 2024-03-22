import Header from "./Header";
import Blogs from "./blogs";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Blogs />
          <Blogs />
          <Blogs />
        </section>
      </main>
    </>
  );
};
export default Home;
