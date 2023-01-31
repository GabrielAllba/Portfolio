import ProgressSkill from './Progress'
import classes from './SkillItem.module.css'
import Badge from 'components/ui/Badge/Badge'
function SkillItem(props){
    return(
        <div>
            <h3 className={classes.subheading}>Web Design</h3>
            <ProgressSkill></ProgressSkill>
            <div style={{display: 'flex', margin: '1rem 0'}}>
                <div style={{marginRight: '.5rem'}}>
                    <Badge>Figma</Badge>
                </div>
                <div style={{marginRight: '.5rem'}}>
                    <Badge>Figma</Badge>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default SkillItem