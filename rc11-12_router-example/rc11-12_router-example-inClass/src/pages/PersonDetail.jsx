import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { state: person } = useLocation();
  console.log(person);

  return <div>PersonDetail</div>;
};

export default PersonDetail;