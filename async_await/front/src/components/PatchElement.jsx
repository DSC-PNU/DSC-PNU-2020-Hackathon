import React, { memo } from "react";
import { Link } from "react-router-dom";

const PatchElement = memo(({ name, id, title }) => {
  return (
    <Link to={`/${name}/${id}`}>
      <li>{title}</li>
    </Link>
  );
});

export default PatchElement;
