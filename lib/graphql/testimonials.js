import graphqlRequest from "./graphqlRequest";

export async function getTestimonialsList() {
  const query = {
    query: ` query testimonials {
  testimonials {
    nodes {
      content
      testimonialAddons {
        clientName
        rating
      }
      featuredImage {
        node {
          filePath
          altText
        }
      }
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const treatmentsList = resJson?.data?.testimonials?.nodes || [];

  return treatmentsList;
}
