import React from "react";

const HTMLParser = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HTMLParser;
