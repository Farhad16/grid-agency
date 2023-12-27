import React from "react";
import DOMPurify from "dompurify";

const HTMLParser = ({ content }) => {
  const sanitizedHTML = DOMPurify.sanitize(content);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

export default HTMLParser;
