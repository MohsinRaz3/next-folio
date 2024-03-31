import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetdata';
import { Metadata } from 'next';
interface RouteParams {
  slug: string;
}

interface RouteData {
  params: RouteParams;
  
}

export async function generateMetadata(props: RouteData):Promise<Metadata | undefined> {
 const slug = props.params.slug;

  const posts = await getPostMetadata(); 
  //console.log("slug",posts);
  
  return posts.find((post)=>{
    if(post.slug === slug){
     // console.log(post.subtitle);
      
     return { 
        title: post.subtitle,
        description: post.subtitle
      }
    }
  })
}

const getPostContent = (slug:string)=>{
    const folder = "src/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file,"utf8");
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = () => {
  const posts = getPostMetadata()
  return posts.map((post)=>({
    slug: post.slug,
  }))

  
}     

const PostPage = (props: any) => {

    const slug = props.params.slug;
    const post = getPostContent(slug)

  return (
    <div className='md:flex md:flex-col md:mx-auto md:justify-center md:items-center px-3 '> 
      <div className='my-12 text-center'>
        <h1 className="text-2xl text-slate-600 text-center" >{post.data.title} </h1>
        <p className='text-slate-400 mt-2'>{post.data.date}</p>
      </div>
    <article className='prose lg:prose-xl'> <Markdown>{post.content}</Markdown></article>
   
    </div>
  )
}

export default PostPage;