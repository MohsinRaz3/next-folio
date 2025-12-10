import { MetadataRoute } from "next";
import { client } from "../../sanity/lib/client";
import { postPathsQuery } from "../../sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {

    const baseURL = "https://mohsinraz.me/sitemap.xml"
    const posts = await client.fetch(postPathsQuery);
    
    const postEnteries: MetadataRoute.Sitemap =  posts.map((post:any)=>({
        
      url: `${baseURL}/blogs/${post.params.slug}`,
      lastModified: new Date(post._createdAt),
      changeFrequency: 'monthly',
      priority: 0.8
    }))

    return [
      {
        url: `${baseURL}/blogs/`,
        changeFrequency: 'weekly',
        priority: 1
    },{
        url: `${baseURL}/`,
        changeFrequency: 'weekly',
        priority: 1
    },
    ...postEnteries
]

}