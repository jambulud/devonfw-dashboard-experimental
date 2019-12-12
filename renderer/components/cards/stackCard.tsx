import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: '0 1rem 1rem 0',
    paddingTop: '1rem'
  },
  media: {
    height: 120
  },

  containImg: {
    'background-size': 'contain',
    margin: '0 1rem',
  }
});


interface StackProps {
  image: string;
  command: string;
  onClick: ((event: React.MouseEvent) => void);
}

export default function StackCard(props: StackProps) {
  const classes = useStyles();
  const { image, command } = props;

  return (
    <Card className={classes.card} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          className={`${classes.media} ${classes.containImg}`}
          image={image}
          title={command}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {command}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}