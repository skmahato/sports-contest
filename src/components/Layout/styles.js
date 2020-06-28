import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#333'
  },
  tabs: {
    backgroundColor: ' #f7f7f7',
    padding: '0 10px'
  },
  indicator: { backgroundColor: '#0097e1' },
  selected: { color: '#0097e1' }
}));
