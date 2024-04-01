import getPostMetadata from "@/components/getPostMetdata";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    const posts = getPostMetadata()
    const postEnteries: MetadataRoute.Sitemap =  posts.map((post)=>({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8
    }))

    return [{
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        changeFrequency: 'weekly',
        priority: 1
    },
    ...postEnteries
]

}