import axios from "axios";

const instance = axios.create({
  baseURL: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
});

export const getAllRooms = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
            roomCollection {
                items {
                  label
                  image {
                    url
                  }
                  slug
                }
              }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.roomCollection.items;
};

export const getAllRoomSlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          roomCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.roomCollection.items;
};

export const getAllCategorySlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          categoryCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getAllCategories = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
            categoryCollection {
                items {
                  label
                  image {
                    url
                  }
                  slug
                }
              }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getFiveCategories = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
            categoryCollection(limit: 5) {
                items {
                  label
                  image {
                    url
                  }
                  slug
                }
              }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getSupportCards = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          supportCardCollection {
            items {
              label
              image {
                url
              }
              title
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazan objekt
  if (!response) return {};

  const data = response.data.data;
  return data.supportCardCollection.items;
};

export const getAllPostSlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          blogPostCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.blogPostCollection.items;
};

export const getAllPosts = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          blogPostCollection {
            total
            items {
              title
              slug
              date
              image{
                  url
              }
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  if (!response) return {};

  const data = response.data.data;
  return data.blogPostCollection.items;
};

export const getPostBySlug = async (slug) => {
  const response = await instance.post(
    "",
    {
      query: `query{
        blogPostCollection(where: {
        slug: "${slug}"
      }){
        items{
          title
          body
          date
          image{
            url
          }
        }
      }
    }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  );
  // Add error handling
  const data = response.data.data;
  return data.blogPostCollection.items[0];
};

export const getAllProductsByRoom = async (room) => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          productCollection(where: {
            roomSlug: "${room}"
          }) {
            items {
              title
              imagesCollection {
                items {
                  url
                }
              }
              slug
              description
              dimensions
              model{
                  url
              }
              category
              room
              price
              categorySlug
              roomSlug
              color
              availability
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  if (!response) return {};

  const data = response.data.data;
  return data.productCollection.items;
};

export const getAllCategoriesByRoom = async (room) => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          categoryCollection(where: {
            roomSlug: "${room}"
          }) {
            items {
              label
              image {
                  url
              }
              slug
              room
              roomSlug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  if (!response) return {};

  const data = response.data.data;
  return data.categoryCollection.items;
};

export const getAllProductsByCategory = async (category) => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          productCollection(where: {
            categorySlug: "${category}"
          }) {
            items {
              title
              imagesCollection {
                items {
                  url
                }
              }
              slug
              category
              room
              price
              categorySlug
              roomSlug
              color
              availability
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  if (!response) return {};

  const data = response.data.data;
  return data.productCollection.items;
};

export const getProductBySlug = async (slug) => {
  const response = await instance.post(
    "",
    {
      query: `query{
        productCollection(where: {
        slug: "${slug}"
      }){
        items {
          title
          imagesCollection {
            items {
              url
            }
          }
          slug
          description
          dimensions
          model{
              url
          }
          category
          room
          price
          categorySlug
          roomSlug
          color
          availability
        }
      }
    }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  );
  // Add error handling
  const data = response.data.data;
  return data.productCollection.items[0];
};

export const getAllProductSlugs = async () => {
  const response = await instance
    .post(
      "",
      {
        query: `{
          productCollection {
            items {
              slug
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      }
    )
    .catch(() => null);

  // U slucaju greske, vraca se prazna lista
  if (!response) return [];

  const data = response.data.data;
  return data.productCollection.items;
};
