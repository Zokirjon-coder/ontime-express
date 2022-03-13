import React from "react";
import TestimonialsPage from "../../components/testimonials";

const Testimonials = (props) => {
  return <TestimonialsPage {...props} />;
};

export default React.memo(Testimonials);
