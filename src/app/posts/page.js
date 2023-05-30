import AllPosts from '../../../components/posts/all-posts.js';
import { getAllPosts } from '../../../lib/posts-util.js';

// const DUMMY_POSTS = [
//     {
//         slug: 'getting-started-with-nextjs',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt:
//             'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//         date: '2022-02-10',
//     },
// ];

export const metadata = {
    title: 'All Posts',
    description: 'A list of all programming-related tutorials and posts!',
};

async function getData() {
    const allPosts = getAllPosts();

    return allPosts;
}

async function AllPostsPage() {
    const allPosts = await getData();
    return <AllPosts posts={allPosts} />;
}

export default AllPostsPage;
