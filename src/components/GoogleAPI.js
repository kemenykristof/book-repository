import React from "react";

const GoogleAPI = async () => {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"
  );
  const data = await response.text();
  console.log(data);

  return <div></div>;
};

export default GoogleAPI;
