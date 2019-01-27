import React, {Component} from 'react';

import Button from 'react-native-material-ui';
import AddIcon from '../icons/baseline-add-24px.svg';
import HomeIcon from '../icons/baseline-home-24px.svg';
import FeedbackIcon from '../icons/baseline-announcement-24px.svg';

export class AddLocation extends Component{
  render() {
    return (
      <Button variant="contained" color="primary" className={classes.button}>
        Add location
        <AddIcon className={classes.leftIcon} />
      </Button>
    );
  }
}

export class AddMessage extends Component{
  render() {
    return (
      <Button variant="contained" color="primary" className={classes.button}>
        Add message
        <AddIcon className={classes.leftIcon} />
      </Button>
    );
  }
}

export class Home extends Component{
  render() {
    return (
      <Button variant="contained" color="primary" className={classes.button}>
        Home
        <HomeIcon className={classes.leftIcon} />
      </Button>
    );
  }
}

export class AddFeedback extends Component{
  render() {
    return (
      <Button variant="contained" color="primary" className={classes.button}>
        Add Feedback
        <FeedbackIcon className={classes.leftIcon} />
      </Button>
    );
  }
}


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});
