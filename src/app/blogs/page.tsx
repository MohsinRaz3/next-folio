import getPostMetadata from '@/components/getPostMetdata';
import PostPreview from '@/components/PostPreview';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title : {
    absolute : "Mohsin's Blog"
  },
  description: "Welcome to my Blog page"
}

const HomePage=()=>{
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post: any) =>(
 <PostPreview key={post.slug} {...post}/>
  ));

  return (
    <div className='mx-auto max-w-2xl px-6 py-6'>
       <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
    <div> 
    <Link href="/">
    <h1 className="text-2xl text-white font-bold mt-4">Techs Blogs</h1>
    </Link>
    <p className="text-slate-300"> Checkout my latest tech blogs!</p>

    </div>
    </header>
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4'>
      {postPreview}

    </div>
    </div>
  )
}

export default HomePage;