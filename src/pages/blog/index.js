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
        id: "sdfasdfadsf",
        color: ["#FFA6D6", "#A091FF"],
        description:
          "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
        publish_date: "2022-01-01",
        tags: ["Other"],
        subContent: [
          {
            id: "adf",
            name: "Bending light with refraction",
          },
          {
            id: "2ghdf",
            name: "Chromatic Dispersion",
          },
          {
            id: "fdgasdf",
            name: "Saturating and expanding",
          },
          {
            id: "fdshsd",
            name: "Adding volume and shininess",
          },
          {
            id: "bfdhds",
            name: "Bending",
          },
          {
            id: "hfgdfg",
            name: "Conclusion",
          },
          {
            id: "54tdgfsa",
            name: "Conclusion",
          },
        ],
        content: [
          {
            id: "1",
            type: "code",
            name: [
              {
                nameType: "code",
                nameContent: 
`int main(void)
  {
    puts("Hello World!");
    return EXIT_SUCCESS;
  }
  `,
              },
            ],
          },
          {
            id: "2",
            name: `Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.`,
          },
          {
            id: "3",
            name: `Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.`,
          },
          {
            id: "4",
            name: `Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.`,
          },
          {
            id: "5",
            name: `Vercel is the platform for frontend developers, providing the speed and 
                    reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice. <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    <br><br>
                    Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.`,
          },
        ],
        title: "Welcome message",
        writerId: "kfj92u3r0",
      },
    ];
    const [input, setInput] = useState("");
    const inputHandler = (value) => {
        setInput(value)    
    }
    const filteredData = dummy.filter((data) => {
      if(input === "") return data
      return data.title.toLowerCase().includes(input);
      
    })

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
                    subContent={item.subContent}
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