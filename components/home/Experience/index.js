import classes from "./index.module.css";

import { Box } from "@mui/material";
import { Chrono } from "react-chrono";
import ExperienceItem from "./ExperienceItem";
import Gradient from "rgt";
import { Container } from "@mui/system";


const REAL_DATA = [
  {
    id: "1",
    title: "Kominfo Member of Himaforka UAJY",
    start_date: new Date("2022-08-01"),
    end_date: new Date("2022-08-01"),
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Adobe Illustrator"],
    description:
      "Remake and redesign HIMAFORKA UAJY main page website using HTML 5, CSS 3, Bootstrap, JavaScript ES6, disseminate information submitted both from the university and external parties, also make some posters using Adobe Illustrator when there were some events or playdays.",
    color: ["#7591FF", "#6CFFC1"],
  },
  {
    id: "2",
    title: "Web Developer IFEST#10",
    start_date: new Date("2022-02-01"),
    end_date: new Date("2022-02-01"),
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    description:
      "Developped IFest#10 main page website using HTML 5, CSS 3, Bootstrap, JavaScript ES6, PHP to display some information about the Festival including Competitive Programming (CP), National Seminar, Innovative Informatics Contest (I2C) and Web Design Competition (WDC) 2022.",
    color: ["#FFCC90", "#FF9A9A"],
  },
  {
    id: "3",
    title: "Web Developer Inisiasi FTI UAJY",
    start_date: new Date("2022-07-01"),
    end_date: new Date("2022-07-01"),
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    description:
      "Developped IFest#10 main page website using HTML 5, CSS 3, Bootstrap, JavaScript ES6, PHP to display some information about the Festival including Competitive Programming (CP), National Seminar, Innovative Informatics Contest (I2C) and Web Design Competition (WDC) 2022.",
    color: ["#FFCC90", "#FF9A9A"],
  },
];


const Experience = () => {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ minHeight: "42rem", width: "100%" }}>
        <h2 className={classes.sub_heading}>Experience</h2>
        <div style={{width: '100%'}}>
          {REAL_DATA.map((data) => {
            return (
              <ExperienceItem
              color={data.color}
              key={data.id}
              title={data.title}
              skills={data.skills}
              description={data.description}
              date={data.start_date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
                })}
                ></ExperienceItem>
                );
              })}
        </div>
      </Box>
    </Container>
  );
}

export default Experience