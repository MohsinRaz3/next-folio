import Posts from "@/components/Posts"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { postsQuery } from "../../../sanity/lib/queries"
import { SanityDocument } from "next-sanity"

export const revalidate = 10;

const page = async () => {
    const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery })
    return (
        <section className="relative min-h-screen py-16 md:py-20 px-6 md:px-8 lg:px-24 bg-[#FDF7C4] border-t-[6px] border-b-[6px] border-black">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
                <h2 className="font-lexend text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-center">
                    TECH BLOGS
                </h2>
                {/* Decorative line */}
                <div className="w-32 h-2 bg-black mx-auto mt-4"></div>
            </div>

            {/* Posts Component */}
            <div className="max-w-7xl mx-auto">
                <Posts posts={posts} />
            </div>

            {/* Decorative Geometric Elements */}
            <div className="absolute top-20 right-10 w-16 h-16 border-4 border-black bg-neo-orange rotate-45 hidden lg:block -z-10"></div>
            <div className="absolute bottom-20 left-8 w-12 h-12 rounded-full border-4 border-black bg-neo-pink hidden md:block -z-10"></div>
        </section>
    )
}

export default page