import getAllFavPosts from "./getAllFavPosts.mjs";

console.info("TEST getAllFavPosts");

console.info("CASE get all fav posts from mamoracho");

sessionStorage.username = "caulifFlower";

const favs = getAllFavPosts();

console.log(favs);
