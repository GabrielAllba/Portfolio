import { Container } from '@mui/system'
import classes from './index.module.css'
import Search from 'components/ui/Search/Search'
import { useState } from 'react';
import BlogItem from 'components/blogItem';
import CustomCard from 'components/ui/CustomCard/CustomCard';

function Blog(){
    const dummy = [
      {
        id: "1",
        title: "Welcome message",
        publish_date: new Date("2022-07-01"),
        color: ["#FFA6D6", "#A091FF"],
        tags: ["Laravel 9", "JSON Web Token"],
        description:
          "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
        content:
          "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
      },
      {
        id: "2",
        title: "Welcome message",
        publish_date: new Date("2022-07-01"),
        color: ["#FFA6D6", "#A091FF"],
        tags: ["Laravel 9", "JSON Web Token"],
        description:
        "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
        content:
        "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
    },
    {
        id: "3",
        title: "Welcome message",
        color: ["#FFA6D6", "#A091FF"],
        publish_date: new Date("2022-07-01"),
        tags: ["Laravel 9", "JSON Web Token"],
        description:
        "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
        content:
        "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
    },
    {
        id: "4",
        title: "Welcome message",
        color: ["#FFA6D6", "#A091FF"],
        publish_date: new Date("2022-07-01"),
        tags: ["Laravel 9", "JSON Web Token"],
        description:
        "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
        content:
          "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.",
      },
    ]; 

    const [input, setInput] = useState("");
    const inputHandler = (value) => {
        setInput(value)    
    }
    const filteredData = dummy.filter((data) => {
      if(input === "") return data
      return data.title.toLowerCase().includes(input);
      
    });

    return (
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
                title={item.title}
                publish_date={item.publish_date}
                tags={item.tags}
                description={item.description}
                content={item.content}
                color={item.color}
              ></BlogItem>
            </div>
          ))}
        </ul>
      </Container>
    );
}

export default Blog