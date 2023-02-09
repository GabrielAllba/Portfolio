import classes from './index.module.css'
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import AwardItem from './AwardItem';
const DUMMY_DATA = [
  {
    id: "1asfasfd",
    title: "Front-End Web Development National Competition",
    information: "Second Winner",
    image: "/img/certificate/fewdc_berkahjaya.png",
    description:
      "A website for  visualizing NFT data from various artists. It just a frontend without backend technology, there is no such abilty for doing create, read, update, delete and other requests.",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    id: "kjoiunnk",
    title: "Programming in Contest (PNC) 2022 ",
    information: "Second Winner",
    image: "/img/certificate/pnc.png",
    description:
      "Successfully solved some algorithmic problem that was given by KSP UAJY using C programming Language.Before went to the final stage, KSP UAJY also sent 4 challenges (1 challenge every week) that must be solved by the participant. The final stage only took 2 hours for participant to solved the problem while the challenges took 1 day.",
    tools: ["HTML", "CSS", "Javascript"],
  },
];

function Awards(){
    return (
      <Container maxWidth="lg">
        <Box sx={{ minHeight: "42rem", width: "100%" }}>
          <h2 className={classes.sub_heading}>Awards</h2>
          <div className={classes.work_container}>
            {DUMMY_DATA.map((data) => {
              return (
                <AwardItem
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  information={data.information}
                  image={data.image}
                  description={data.description}
                  tools={data.tools}
                ></AwardItem>
              );
            })}
          </div>
        </Box>
      </Container>
    );
}

export default Awards