import React from "react";
import OntimePage from "../../components/ontime";

const Ontime = (props) => {
  return <OntimePage {...props} />;
};

export default React.memo(Ontime);
