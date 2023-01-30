import classes from './index.module.css'
import CustomCard from 'components/ui/CustomCard/CustomCard'
import Gradient from 'rgt'
import Badge from 'components/ui/Badge/Badge';
import Link from 'next/link';
import { useRouter } from 'next/router';

function BlogItem(props){
    const router = useRouter()
    const detailHandler = () => {
        router.push('/blog/'+props.id)
    }
    return (
      
        <div onClick={detailHandler} className={classes.box}>
            <CustomCard>
                <h3 className={classes.title}>
                    <Gradient
                    dir="left-to-right"
                    from={`${props.color[0]}`}
                    to={`${props.color[1]}`}
                    >
                    {props.title}
                    </Gradient>
                </h3>
                <p className={classes.date}>
                    {props.publish_date}
                </p>
                <ul style={{ display: "flex", padding: "0" }}>
                    {props.tags.map((tag) => {
                        return (
                            <li
                            key={tag}
                            style={{ listStyle: "none", marginRight: ".5rem" }}
                            >
                        <Badge key={tag}>{tag}</Badge>
                        </li>
                    );
                    })}
                </ul>
                <p className={classes.content}>{props.description}</p>
            </CustomCard>
        </div>
    );
}

export default BlogItem