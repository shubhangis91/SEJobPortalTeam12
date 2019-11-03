import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { userInfo } from 'os';
import Form from "react-bootstrap/Form"
import axios from "axios"
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "react-bootstrap/Button"
import PersonalData from "./PersonalData"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
 
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 300,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menu: {
    width: 200,
  },
}));

export default function ProfileDetails(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(user.firstName)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
    axios
        .post("/register", {user})
        .then(res => {
            console.log(res) 
            console.log(res.data)
        })
}
const [user, setValues] = React.useState({
  firstName: '',
  lastName: '',
  dob: '',
  secondaryContact: '',
  primaryContact: '',
  gender:'',
});
const handleChange = name => event => {
  setValues({ ...user, [name]: event.target.value });
  console.log(user)
};
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General details</Typography>
          <Typography className={classes.secondaryHeading}>Tell us who you are!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
          <form className={classes.container} noValidate autoComplete="off">
            <Grid >
            <Grid item>
            <TextField
              id="standard-name"
              label="First Name"
              className={classes.textField}
              value={user.firstName}
              onChange={handleChange('firstName')}
              margin="normal"
            />
            <TextField
              id="outlined-name"
              label="Last Name"
              className={classes.textField}
              value={user.lasttName}
              onChange={handleChange('lastName')}
              margin="normal"
            />
            </Grid>
            <TextField
              id="date"
              label="dob"
              type="date"
              defaultValue="2000-01-01"
              className={classes.textField}
              onChange={handleChange('dob')}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Grid>
            <Grid >
            <Grid item>
            <TextField
              id="standard-name"
              label="Primary Contact"
              className={classes.textField}
              value={user.primaryContact}
              onChange={handleChange('primaryContact')}
              margin="normal"
         
            />
            <TextField
              id="outlined-name"
              label="Secondary Contact"
              className={classes.textField}
              value={user.secondaryContact}
              onChange={handleChange('secondaryContact')}
              margin="normal"
            />
            </Grid>
            <Grid item>
            <FormControl component="fieldset" className={classes.formControl} style={{marginTop:"2%",marginLeft:"3.5%"}}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender" value={user.gender} onChange={handleChange('gender')}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            </Grid>
            <Grid>
              <Button variant="green" onClick={handleSubmit} style={{marginLeft:"100%"}}>
               Sumbit
              </Button>
              </Grid>
            </Grid>
          
          </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Education Details</Typography>
          <Typography className={classes.secondaryHeading}>
            Tell us about your qualifications!
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleExpand('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Work Experience</Typography>
          <Typography className={classes.secondaryHeading}>
            Tell us about your work experience, it'll give you an edge!
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleExpand('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           <PersonalData/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
