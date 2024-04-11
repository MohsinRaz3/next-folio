import Posts from "@/components/Posts"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { postsQuery } from "../../../sanity/lib/queries"
import { SanityDocument } from "next-sanity"

const page = async () => {
    const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery })
    return (
        <div>
            <main className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
                <h2 className="py-10  text-5xl text-center font-semibold">Tech Blogs</h2>
                <Posts posts={posts} />
            </main>
        </div>
    )
}

export default page