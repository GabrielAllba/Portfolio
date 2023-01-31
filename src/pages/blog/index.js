import { Container } from '@mui/system'
import classes from './index.module.css'
import Search from 'components/ui/Search/Search'
import { useState,useEffect } from 'react';
import BlogItem from 'components/blogItem';
import CustomCard from 'components/ui/CustomCard/CustomCard';
import Layout from 'components/layout/Layout'
import { ThemeProvider } from 'next-themes';
import MobileNav from 'components/ui/MobileNav/MobileNav'
import Footer from 'components/footer/Footer'
function Blog(props){
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

    const dummy = [
      { 
        id: '1',
        color: ["#FFA6D6","#A091FF"],
        content: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.',
        description: 'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.',
        publish_date: new Date('2022-01-01'),
        tags: ['Other'],
        title: 'Welcome message',
        writerId: '1'
      }
    ]
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
            {isMobile && <MobileNav></MobileNav>}
            <div style={{marginTop: '5rem'}}>
              <Footer></Footer>
            </div>
          </Container>
        </Layout>
      </ThemeProvider>
    );
}

export default Blog