import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <div>
        <Link to="/counter">Counter</Link>
      </div>
    </div>
  );
};

export default Home;
