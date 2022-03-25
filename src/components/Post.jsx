
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({ 
    container: {
        paddingTop: theme.spacing(10)
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150
        }
    },
    card: {
        marginBottom: theme.spacing(5)
    }
}))

function Post(props) {
    const {title, image, excerpt} = props
  const classes = useStyles()
  return (
    <Card className={classes.card}>
        <CardActionArea color='white'>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography variant='subtitle1'>
                    {excerpt}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default Post;
