import * as React from "react";

const SinglePage = ({ pageContext }) => {
  const { dataSource } = pageContext;
  const { countryByCc, globalStats } = dataSource;
  console.log(countryByCc);
  console.log(globalStats);

  return (
    <main>
      <h1>single-page</h1>
    </main>
  );
};

export default SinglePage;

export const Head = () => <title>Single Page</title>;
