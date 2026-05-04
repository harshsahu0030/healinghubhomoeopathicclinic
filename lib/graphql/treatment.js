import graphqlRequest from "./graphqlRequest";

export async function getTreatmentsList(endCursor = null) {
  let condition = `after: "${endCursor}", first: 15, where: {orderby: {field: DATE, order: DESC}}`;

  const query = {
    query: `query getAllTreatmentsList {
  treatments (${condition}) {
    nodes {
      title
      slug
      featuredImage {
        node {
          filePath
          altText
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const treatmentsList = resJson?.data?.treatments?.nodes || [];

  return treatmentsList;
}
