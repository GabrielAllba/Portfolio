import Layout from 'components/layout/Layout';
import classes from './index.module.css'
import { Container } from '@mui/system';
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { ThemeProvider } from 'next-themes';
function BlogDetail(props){
    return(
        <ThemeProvider themes={["dark", "light"]} enableSystem={false}>

        <Layout>
            <Container maxWidth="lg">

            <div>
                <p>ID : {props.blogData.title}</p>
            </div>
            </Container>
        </Layout>
        </ThemeProvider>
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
