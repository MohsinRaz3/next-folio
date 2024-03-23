import getPostMetadata from '@/components/getPostMetdata';
import PostPreview from '@/components/PostPreview';

const HomePage=()=>{
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post: any) =>(
 <PostPreview key={post.slug} {...post}/>
  ));

  return (
    <div className='mx-auto max-w-2xl px-6 py-6'>
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4'>
      {postPreview}

    </div>
    </div>
  )
}

export default HomePage;