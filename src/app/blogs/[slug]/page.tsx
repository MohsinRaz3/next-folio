import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "../../../..//sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { client } from "../../../../sanity/lib/client";
import Post from "@/components/Post";
import { Metadata } from "next";

interface RouteParams {
  slug: string;
}
// export const revalidate = 10;

export async function generateMetadata({ params }: { params: RouteParams }) {
  try {

    // async function findPost(){
    //   const posts = await client.fetch(postPathsQuery);
    //   if (!posts) return "noty value";
    // const slugVal =  posts.find((post:any) => post.params.slug == params)
    //   return slugVal
    // console.log("slug value",slugVal);
    
    // }

    const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
    console.log("this is slug dear",post.slug);
     
    if (!post) 
      return {
      title: "No Found",
      description: "The page you're looking for does not exists."
    }
    return {
      title: post.seo.seoTitle,
      description: post.seo.seoDescription,
      alternates : {
        canonical : `http://localhost:3000/blogs/${post.slug.current}}`
      }
    }


  } catch (error) {
    console.error(error);
    return {
      title: "No Found",
      description: "The page you're looking for does not exists."
    }

  }
};

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  if (!posts) return [];
  // console.log("lesssgoooo",posts);
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

const PostPage = async ({ params }: { params: RouteParams }) => {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
  // console.log(post);

  return (
    <Post post={post} />
  )
}

export default PostPage