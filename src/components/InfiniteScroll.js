import { useEffect, useRef, useState } from "react";

const InfiniteScroll = ({ getData, data, input }) => {
  console.log(input);
  const pageNumber = useRef(1);
  console.log(data);
  useEffect(() => {
    getData(input, pageNumber);
    console.log("LOl");
  }, [input]);
  return (
    <div>
      {data.map((item, index) => {
        return <div key={index + 1}>{item.author_name}</div>;
      })}
    </div>
  );
};

export default InfiniteScroll;
