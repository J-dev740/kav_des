import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "b7bd9f75aa4db6fb6309f4bbde", // replace with your API key
  version: "v5.0",
});

export const getPosts = async () => {
  try {
    const posts=await api.posts.browse({
      limit: "all",
      fields:"feature_image, id, title ,slug, published_at",
      include:"authors,tags",
    });
    const tags=posts.map((post)=>(post.tags))
    // const tag_names=tags
    console.log(tags);
    return posts;
  } catch (error) {
    console.error(error);
  }
};
export const getSinglePost = async (slug) => {
  try {
    return await api.posts.read({
      slug,
    });
  } catch (error) {
    console.error(error);
  }
};