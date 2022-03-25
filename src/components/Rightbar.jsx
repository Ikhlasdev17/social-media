import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: '0'
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
    margin: '1rem 0 .5rem 0'
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#666',
    fontSize: '18px' 
  }
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Online Friends</Typography>

      <AvatarGroup max={5}>
        <Avatar
          alt="John Doe"
          src="https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=278"
        />
        <Avatar
          alt="Markus"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU"
        />
        <Avatar
          alt="John Doe"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS9QtmhjRwXBsOw5fHTf19BSB8h52QCwCVfu15DHRnnZInFpqtGT2qBbM8s0HwJiLKSM&usqp=CAU"
        />
        <Avatar
          alt="John Doe"
          src="https://www.freecodecamp.org/news/content/images/2022/01/IMG_1763.jpg"
        />
        <Avatar
          alt="John Doe"
          src="https://www.freecodecamp.org/news/content/images/2022/01/IMG_1763.jpg"
        />
        <Avatar
          alt="John Doe"
          src="https://www.freecodecamp.org/news/content/images/2022/01/IMG_1763.jpg"
        />
      </AvatarGroup>

      <Typography className={classes.title}>Gallery</Typography>
      <ImageList rowHeight={160} cols={2}>
        <ImageListItem>
          <img src="https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://ensia.com/wp-content/uploads/2022/03/Voices_nature-positive_main-scaled.jpg" />
        </ImageListItem>
      </ImageList>

      <Typography className={classes.title}>Category</Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        News
      </Link>
      <Divider flexItem style={{marginBottom: 10}} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Scince
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>

    </Container>
  );
}

export default Rightbar;
