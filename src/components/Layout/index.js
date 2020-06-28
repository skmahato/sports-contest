import React from 'react';
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import Challenge from '../Challenge';
import useStyles from './styles';
import { sportsSelector, contentSelector, challengesSelector } from '../../selectors/content';

const Layout = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const content = useSelector(contentSelector);
  const challenges = useSelector(challengesSelector);
  let sports = useSelector(sportsSelector) || [];
  sports = [{ sports_id: 0, sports_name: 'All' }, ...sports];

  const result = (function () {
    if (value === 0) {
      return challenges;
    }

    const sportId = sports[value].sports_id;
    return challenges.filter(f => f.sports_id === sportId);
  }());

  console.log(result);

  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Paper>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            classes={{ indicator: classes.indicator }}
            className={classes.tabs}
            variant="scrollable"
            scrollButtons="auto"
          >
            {sports.map(f => <Tab key={f.sports_id} classes={{ selected: classes.selected }} label={f.sports_name} />)}
          </Tabs>

          <Box p={3}>
            {!isEmpty(result) && result.map(f => <Challenge key={`${f.sports_id}-${f.challenge_name}`} challenge={f} />)}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Layout;
