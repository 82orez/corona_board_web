const { getDataSource } = require("./src/data-loader");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const dataSource = await getDataSource();

  createPage({
    path: "/single-page",
    component: require.resolve("./src/templates/single-page.js"),
    // 컴포넌트 렌더링시 사용할 데이터를 객체 축약 문법으로 전달.
    // context: { dataSource: dataSource },
    context: { dataSource },
  });
};
