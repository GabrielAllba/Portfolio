import { Container } from '@mui/material'
import classes from './index.module.css'
import { Box } from '@mui/system'
import WorkItem from './WorkItem'

const DUMMY_DATA = [
  {
    id: "1",
    title: "Inisiasi FTI UAJY",
    subtitle: "Main and admin page of Inisiasi FTI UAJY 2022",
    image: "/img/inisiasi.png",
    link: "/",
  },
  {
    id: "1",
    title: "Ecommerce",
    subtitle: "Ecommerce personal project",
    image: "/img/ecommerce.png",
    link: "/",
  },
  {
    id: "1",
    title: "Ecommerce",
    subtitle: "Ecommerce personal project",
    image: "/img/ecommerce.png",
    link: "/",
  },
  {
    id: "1",
    title: "Inisiasi FTI UAJY",
    subtitle: "Main and admin page of Inisiasi FTI UAJY 2022",
    image: "/img/inisiasi.png",
    link: "/",
  },
];

function Works(props){
    return(
        <Container maxWidth='lg'>
            <Box sx={{ minHeight: "42rem", width: "100%" }}>
                <h2 className={classes.sub_heading}>Works</h2>
                <div className={classes.work_container}>
                    {DUMMY_DATA.map((data) => {
                        return(
                            <WorkItem 
                            key={data.id} 
                            id={data.id}
                            title={data.title}
                            subtitle={data.subtitle}
                            image={data.image}
                            link={data.link}
                            ></WorkItem>
                        ) 
                    })}
                    
                </div>
            </Box>
        </Container>
    )
}

export default Works