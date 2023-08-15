import * as React from "react";
import { useEffect } from "react";

const IndexPage = () => {
  // useEffect(() => {
  //   fetch("http://localhost:8080/global-stats/")
  //     .then((re) => re.json())
  //     .then((result) => console.log(result));
  // }, []);

  return (
    <main>
      <h1>Hello Gatsby</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
