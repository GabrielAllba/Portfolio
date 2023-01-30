import classes from './index.module.css'

import { Container } from '@mui/system';
import {Box} from '@mui/system';
import Badge from 'components/ui/Badge/Badge';
import CustomCard from 'components/ui/CustomCard/CustomCard';

function Collaborate(props){
    return (
      <Container maxWidth="lg">
        <div style={{marginTop: '5rem', paddingBottom: '5rem'}}>
          <CustomCard>
            <h2 className={classes.sub_heading}>Interested in collaborating?</h2>
            <p className={classes.collaborate_text}>
              Always open to discussing project, working and partnership
              opportunities.
            </p>

            <p className={classes.collaborate_text}>
              Feel free to contact via{" "}
              <a className={classes.link} href="/">
                LinkedIn
              </a>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a className={classes.discuss_text} href="/">
                <Badge>Let's Discuss</Badge>
              </a>
            </div>
          </CustomCard>
        </div>
        
      </Container>
    );
}

export default Collaborate