import graphqlRequest from "./graphqlRequest";

export async function getBlogList(Cursor = "", category = "", searchTerm = "") {
  // Build dynamic filters
  let filters = `orderby: {field: DATE, order: DESC}`;

  if (category) {
    filters += `, categoryName: "${category}"`;
  }

  if (searchTerm) {
    filters += `, search: "${searchTerm}"`;
  }

  const query = {
    query: `query getbloglist {
      posts(after: "${Cursor || ""}", first: 10, where: { ${filters} }) {
        nodes {
          status
          title
          date
          author {
            node { name }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          commentCount
          slug
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
  return resJson?.data?.posts || { nodes: [], pageInfo: {} };
}

export async function getBlogCategories() {
  const query = {
    query: `query geblogcategories {
  categories (first: 50){
    nodes {
      count
      uri
      name
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  return resJson?.data?.categories?.nodes || [];
}

export async function getSingleBlog(slug) {
  const query = {
    query: `query getSingleBlog {
  post(
    id: "${slug}"
    idType: SLUG
  ) {
    slug
    date
    content
    categories {
      nodes {
        name
        slug
      }
    }
    comments {
      nodes {
        content
        author {
          email
          name
        }
        date
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    title
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    commentCount
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  return resJson?.data?.post || {};
}
