import PostContent from '../../../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../../../lib/posts-util';

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
    const posts = getPostsFiles();
    const slugs = posts.map((fileName) => fileName.replace(/\.md$/, ''));
    return slugs.map((slug) => ({
        slug: slug.slug,
    }));
}

async function getData(params) {
    const featuredPosts = getPostData(params.slug);
    return featuredPosts;
}

export async function generateMetadata({ params, searchParams }, parent) {

    // fetch data
    const featuredPosts = getPostData(params.slug);

    return {
        title: featuredPosts.title,
        description: featuredPosts.excerpt,
    };
}


async function PostDetailPage({ params }) {
    const post = await getData(params);
    return <PostContent post={post} />;
}

export default PostDetailPage;
