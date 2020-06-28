import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: { marginBottom: 10 },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: { fontSize: 14 },
  pos: { marginBottom: 12 },
  image: { width: 50, height: 50 },
  icon: { width: 20, height: 20 },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto'
  }
});
