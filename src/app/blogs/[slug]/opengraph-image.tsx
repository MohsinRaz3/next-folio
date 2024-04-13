/* eslint-disable @next/next/no-img-element */
import { SanityDocument } from "next-sanity";
import { ImageResponse } from "next/og";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postQuery } from "../../../../sanity/lib/queries";



export const size = {
    width: 1200,
    height: 630,
};
export const alt = "Expolorer | Blog";
export const contentType = "image/png";

export default async function og({ params }: { params: any } ) {
    // Get Data from CMS
    const post = await sanityFetch<SanityDocument>({ query: postQuery, params })


    return new ImageResponse(
        (
            <div tw="relative flex w-full h-full flex items-center justify-center">
                {/* Background */}
                <div tw="absolute flex inset-0">
                    <img
                        tw="flex flex-1 object-cover w-full h-full object-center"
                        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.seo.ogURL}`}
                        alt={post?.seo.seoTitle!!}
                    />
                    {/* Overlay */}
                    <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
                </div>
                <div tw="flex flex-col text-neutral-50 ">
                    {/* Title */}
                    <div tw="text-[60px]">{post?.seo.seoTitle}</div>
                    {/* Description */}
                    <div tw="text-2xl max-w-4xl">{post?.seoDescription}</div>
                    {/* Tags */}
                    <div tw="flex mt-6 flex-wrap items-center text-3xl text-neutral-200">
                        
                        {/* <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
                        <div>{`${post?.author.first_name} ${post?.author.last_name}`}</div>
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                        <div>{getReadingTime(post?.body!!, lang)}</div>
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                        <div>{getRelativeDate(post?.date_created!!, lang)}</div> */}
                    </div>
                </div>
            </div>
        ),
        size
    );
}