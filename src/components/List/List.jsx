import React, { useState } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import TableBody from "@material-ui/core/TableBody";
import { addEntryToList, sortAlphabetically, sortByPriority } from '../../actions/list-actions';
import './style.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

let ListComponent = ({addEntry, list, sortByPriority, sortAlphabetically}) => {
  const [ name, setName ] = useState('');
  const [ priority, setPriority ] = useState(1);
  const [ sorting, setSorting ] = useState('byPriority');

  let listItems = list.map((item, index) => {
    return <ListItem key={ index } item={ item } index={ index }>
      { item }
    </ListItem>
  });

  let sortItems = (value) => {
    if (value === 'byPriority') {
      sortByPriority();
    } else if (value === 'alphabetically') {
      sortAlphabetically();
    }
    setSorting(value);
  };

  return (
    <div className='container'>
      <div>
        <div className='fields-container'>
          <TextField
            id="standard-basic"
            label="Name"
            value={name}
            style={{width: '100%'}}
            onChange={(e)=> {setName(e.target.value)}} />
          <FormControl style={{width: '60%'}}>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              onChange={(e)=> {setPriority(e.target.value)}}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={() =>{
            setName('');
            addEntry({name, priority, sorting})}
          }>
            Add
          </Button>
        </div>
        <div className='sorting-container'>
          <h4>
            Sorting
          </h4>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{width:'100%'}}
            value={sorting}
            onChange={(e)=> {sortItems(e.target.value)}}
          >
            <MenuItem value={'byPriority'}>By priority</MenuItem>
            <MenuItem value={'alphabetically'}>Alphabetically</MenuItem>
          </Select>
        </div>
      </div>

      <div className='list-container'>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell  align="center">Buying</StyledTableCell>
                <StyledTableCell  align="center">Priority</StyledTableCell>
                <StyledTableCell  align="center">Changing Date</StyledTableCell>
                <StyledTableCell  align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listItems}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
};

const mapStateToProps = ({ list }) => {
  return {list }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (obj) => {
      dispatch(addEntryToList(obj))
    },
    sortByPriority: () => {
      dispatch(sortByPriority())
    },
    sortAlphabetically: () => {
      dispatch(sortAlphabetically())
    }
  }
};

export default connect ( mapStateToProps, mapDispatchToProps )( ListComponent );
