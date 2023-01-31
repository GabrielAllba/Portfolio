import { Container } from '@mui/system'
import classes from './index.module.css'
import Search from 'components/ui/Search/Search'
import { useState } from 'react';
import BlogItem from 'components/blogItem';
import CustomCard from 'components/ui/CustomCard/CustomCard';
import Layout from 'components/layout/Layout';
import { ThemeProvider } from 'next-themes';
function Blog(props){
    const dummy = props.blogs
    const [input, setInput] = useState("");
    const inputHandler = (value) => {
        setInput(value)    
    }
    const filteredData = dummy.filter((data) => {
      if(input === "") return data
      return data.title.toLowerCase().includes(input);
      
    });

    return (
      <ThemeProvider themes={["dark", "light"]} enableSystem={false}>

      <Layout>  
        <Container maxWidth="lg">
          <h2 className={classes.sub_heading}>Blog</h2>
          <div style={{ marginBottom: "2rem" }}>
            <CustomCard>
              <p>Here's a blog, documentation and etc!</p>
            </CustomCard>
          </div>
          <Search handler={inputHandler}></Search>
          <ul className={classes.ulitem}>
            {filteredData.map((item) => (
              <div className={classes.blogitem} key={item.id}>
                <BlogItem
                  className={classes.blogitem}
                  key={item.id}
                  
                  id={item.id}
                  color={item.color}
                  title={item.title}
                  content={item.content}
                  publish_date={item.publish_date}
                  tags={item.tags}
                  description={item.description}
                  ></BlogItem>
              </div>
            ))}
          </ul>
        </Container>
      </Layout>
      </ThemeProvider>
    );
}

export default Blog

export async function getServerSideProps(){
  const blog = await fetch(`http://localhost:3000/api/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const results = await blog.json()
  

  const dataku = results.map((data) => ({
    id: data.id,
    color: data.color,
    description: data.description,
    publish_date: new Date(data.publish_date),
    tags: data.tags,
    title: data.title,
    writerId: data.writerId,
  }));

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const datas = dataku.map((data) => ({
    id: data.id,
    color: data.color,
    description: data.description,
    publish_date: data.publish_date.toLocaleString("en-us", options),
    tags: data.tags,
    title: data.title,
    writerId: data.writerId,
  }));


  return{
    props: {
      blogs: datas.map(data => ({
        id: data.id,
        color: data.color,
        description: data.description,
        publish_date: data.publish_date,
        tags: data.tags,
        title: data.title,
        writerId: data.writerId
      }))
    }
  }
}