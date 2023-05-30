import FeaturedPosts from "../../components/home-page/featured-posts";
import Hero from "../../components/home-page/hero";
import { getFeaturedPosts } from "../../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: 'getting-started-with-nextjs',
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//     date: '2022-02-10',
//   },
// ];

export const metadata = {
  title: 'Rana Blog',
  description: 'I post about programming and web development.',
};



async function getData() {
  const featuredPosts = getFeaturedPosts();

  return featuredPosts;
}

export default async function Home() {
  const featuredPosts = await getData();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

