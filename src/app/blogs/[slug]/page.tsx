import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "../../../..//sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { client } from "../../../../sanity/lib/client";
import Post from "@/components/Post";


interface RouteParams {
  slug: string;
}
// export const revalidate = 10;

export async function generateMetadata({ params }: { params: RouteParams }) {
  try {
    const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
  // console.log("this is slug dear",post.seo);
     
    if (!post) 
      return {
      title: "No Found",
      description: "The page you're looking for does not exists."
    }
    return {
      title: post.seo.seoTitle,
      description: post.seo.seoDescription,
      alternates : {
        canonical : `/blogs/${post.slug.current}`,
        languages: {
          "en-US": `en-US/blogs/${post.slug.current}`,
          "de-DE": `de-DE/blogs/${post.slug.current}`,
        },
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo.seoTitle,
        description: post.seo.seoDescription,
        siteId: '1467726470533754880',
        creator: '@mohsin_codes',
        creatorId: '1467726470533754880',
        images: ['https://nextjs.org/og.png'], // Must be an absolute URL
      },
    }


  } catch (error) {
    console.error(error);
    return {
      title: "No SEO title found",
      description: "No SEO description found for this page."
    }

  }
};

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  if (!posts) return [];
  // console.log("lesssgoooo",posts);
  return posts.map((post: any) => ({
    slug: post.params.slug,
  }))
}

const PostPage = async ({ params }: { params: RouteParams }) => {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
  // console.log(post);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <Post post={post} />
  )
}

export default PostPage