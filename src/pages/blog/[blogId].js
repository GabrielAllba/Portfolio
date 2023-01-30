import classes from './index.module.css'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
function BlogDetail(props){
    return(
        <div>
            <p>ID : {props.blogData.title}</p>
        </div>
    )
}


export async function getStaticPaths(){
   const blogs = await prisma.blog.findMany({
     select: {
       id: true,
     },
   });
   console.log(blogs)
   return{
    fallback: 'blocking',
    paths: blogs.map((blog) => ({
        params: {
            blogId: blog.id
        }
    }))
   }
}
export async function getStaticProps(context){
    const blogId = context.params.blogId.toString()
    const blog = await fetch('http://localhost:3000/api/blog/'+blogId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await blog.json()

    return {
        props: {
            blogData: {
                id: result.id,
                color: result.color,
                content: result.content,
                description: result.description,
                publish_date: result.publish_date,
                tags: result.tags,
                title: result.title,
                writerId: result.writerId,
            }
        }
    }

}
export default BlogDetail;
