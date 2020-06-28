import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  Button,
  Typography,
  Icon
} from '@material-ui/core';

import Rupee from '../../assets/ruppe-min.png';
import useStyles from './styles';

export default function Challenge({ challenge }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title="Picks" />

      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <img
              className={classes.image}
              src={challenge.match_parties[0].party_img_url}
              alt={challenge.match_parties[0].party_name}
            />
          </Grid>
          <Grid item md={8}>
            <Typography>
              {challenge.match_parties[0].party_name}
              {' '}
              v
              {' '}
              {challenge.match_parties[1].party_name}
              {' '}
              {challenge.challenge_name}
            </Typography>

            <Typography>
              {challenge.desc}
              <span className={classes.bullet}>•</span>
              {challenge.game_mode}
            </Typography>
          </Grid>
          <Grid item md={2}>
            <img
              className={classes.image}
              src={challenge.match_parties[1].party_img_url}
              alt={challenge.match_parties[1].party_name}
            />
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
        <Typography>
          <Icon
            size="small"
            component={() => <img className={classes.icon} src={Rupee} alt="Rupee" />}
          />
          {challenge.prize_money}
        </Typography>

        <Typography className={classes.expand}>{challenge.start_time}</Typography>
      </CardActions>
    </Card>
  );
}
