import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "../../../..//sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { client } from "../../../../sanity/lib/client";
import Post from "@/components/Post";

interface RouteParams {
  slug: string;
}
export const revalidate = 10;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
 // console.log("lesssgoooo",posts);
  
  return posts.map((post:any) => ({
    slug: post.slug,
  }))
}

const PostPage = async ({ params }: { params: RouteParams }) => {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params })

  return (
    <Post post={post} />
  )
}

export default PostPage