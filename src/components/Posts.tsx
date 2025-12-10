import type { SanityDocument } from "@sanity/client"
import Image from "next/image"
import Link from "next/link"

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })
  }

  // Alternating background colors for blog cards
  const cardColors = [
    'bg-neo-cyan',
    'bg-neo-pink',
    'bg-neo-yellow',
    'bg-neo-orange',
    'bg-white',
    'bg-neo-cyan',
  ];

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-public text-lg md:text-xl uppercase tracking-wide text-black">
          NO BLOG POSTS AVAILABLE
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <p className="font-public text-base md:text-lg font-bold uppercase tracking-wider text-black">
        LATEST POSTS:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, index) => {
          const bgColor = cardColors[index % cardColors.length];
          return (
            <Link
              key={post._id}
              href={`/blogs/${post.slug.current}`}
              className={`
                ${bgColor}
                border-4 border-black
                shadow-[8px_8px_0_#000]
                p-6 md:p-8
                flex flex-col
                transition-all duration-200
                hover:shadow-[12px_12px_0_#000]
                hover:-translate-y-1
                hover:-translate-x-1
                active:shadow-[4px_4px_0_#000]
                active:translate-y-1
                active:translate-x-1
                min-h-[280px] md:min-h-[320px]
              `}
            >
              {/* Post Image */}
              {post?.mainImage && (
                <div className="border-4 border-black overflow-hidden mb-4">
                  <Image
                    className="w-full h-48 md:h-56 object-cover"
                    src={post.imageURL}
                    alt={post.mainImage.alt || post.title}
                    width={350}
                    height={350}
                    priority
                  />
                </div>
              )}

              {/* Post Content */}
              <div className="flex-1 flex flex-col">
                <h2 className="font-lexend text-xl md:text-2xl font-bold uppercase tracking-tight text-black mb-3 md:mb-4 line-clamp-2">
                  {post.title}
                </h2>
                <div className="mt-auto pt-4 border-t-2 border-black">
                  <p className="font-public text-xs md:text-sm uppercase tracking-wide text-black font-medium">
                    {convertDate(post._createdAt).toUpperCase()} • {post.authorName?.toUpperCase() || 'AUTHOR'}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}
export default Posts