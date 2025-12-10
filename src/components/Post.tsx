import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";

const builder = imageUrlBuilder(client);

// SSR-safe PortableText components
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-8">
          <Image
            src={builder.image(value).width(800).height(450).url()}
            alt={value.alt || "Blog post image"}
            width={800}
            height={450}
            className="rounded-lg"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="container mx-auto prose prose-xl px-4 py-16">
      <h1>{post.title}</h1>
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(600).height(250).url()}
          alt={post?.mainImage?.alt}
          width={600}
          height={250}
        />
      ) : null}
      {post?.body ? (
        <PortableText value={post.body} components={components} />
      ) : null}
    </main>
  );
};

export default Post;