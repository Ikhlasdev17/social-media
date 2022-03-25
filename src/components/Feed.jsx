
import { Container, makeStyles } from '@material-ui/core'
import posts from '../data.js';
import Post from './Post';


const useStyles = makeStyles(theme => ({ 
    container: {
        paddingTop: theme.spacing(10)
      }
}))

console.log(posts);

function Feed() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
        {posts && posts.map((item, index) => {
            return <Post {...item} key={index} />
        })}
    </Container>
  );
}

export default Feed;
