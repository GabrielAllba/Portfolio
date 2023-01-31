import { Container } from '@mui/system';

import { ThemeProvider } from 'next-themes';
import Layout from 'components/layout/Layout'

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
   
   return {
     fallback: "blocking",
     paths: [{ 
        params: { blogId: "1" } 
    }],
   };
}
export async function getStaticProps(context){
    return {
      props: {
        blogData: {
          id: "1",
          color: ["#FFA6D6", "#A091FF"],
          content:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
          description:
            "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
          publish_date: "2022-01-01",
          tags: ["Other"],
          title: "Welcome message",
          writerId: "1",
        },
      },
    };

}
export default BlogDetail;
