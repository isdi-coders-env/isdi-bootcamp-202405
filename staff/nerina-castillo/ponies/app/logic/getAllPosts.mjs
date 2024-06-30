import data from "../data/index.mjs";

const getAllPosts = () => {
  const user = data.findUser(
    (user) => user.username === sessionStorage.username
  );

  if (user === null) throw new Error("User not found");

  const posts = data.findPosts(() => true);

  posts.forEach((post) => {
    post.fav = user.favs.includes(post.id);
    post.like = post.likes.includes(sessionStorage.username);
    post.following = user.following.includes(post.author);
  });

  return posts.reverse();
};

export default getAllPosts;
