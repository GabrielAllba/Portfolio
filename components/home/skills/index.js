import classes from './index.module.css'
import { Box } from '@mui/system'
import SkillItem from './SkillItem';
import Container from '@mui/material/Container'

function Skills(props){
    return (
        <Container maxWidth="md">
          
      <Box sx={{ minHeight: "42rem", width: "100%" }}>
        <h2 className={classes.sub_heading}>Skills</h2>
        <div className={classes.container}>
            <div className={classes.skill_container}>
                <SkillItem></SkillItem>
            </div>
            <div className={classes.skill_container}>
                <SkillItem></SkillItem>
            </div>
            
            <div className={classes.skill_container}>
                <SkillItem></SkillItem>
            </div>
            <div className={classes.skill_container}>
                <SkillItem></SkillItem>
            </div>
        </div>
        
        
      </Box>
        </Container>
    );
    
}

export default Skills