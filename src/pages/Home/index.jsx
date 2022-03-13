import React from "react";
import HomePage from '../../components/home'

const Home = (props) => {
  return <HomePage {...props} />;
};

export default React.memo(Home);
