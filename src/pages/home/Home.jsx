import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className="w-full"
      /> */}
      <Featured type={"series"} />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
