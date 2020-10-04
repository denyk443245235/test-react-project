import React from "react";
import { connect } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from "@material-ui/core/Checkbox";
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import { changeBuyingState, deleteEntryFromList } from "../../actions/list-actions";
import history from '../../history';
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

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

let ListItemComponent =  ({
    item,
    deleteEntryFromList,
    index,
    changeBuyingState
}) => {
  let { name, buyingState, changeBuyingStateTime, priority, id } = item;
  let date = new Date(changeBuyingStateTime).toLocaleString();

  let openEntryView = () => {
    history.push(`/entry-view/${ id }/${index}`);
  };

  return (
    <StyledTableRow >
      <StyledTableCell component="th" scope="row">
        <ListItem button onClick={openEntryView}>
          { name }
        </ListItem>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Checkbox
          checked={buyingState}
          onChange={() => {changeBuyingState(index, !buyingState)}}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        { priority }
      </StyledTableCell>
      <StyledTableCell align="center">
        { changeBuyingStateTime ? date : "You don't change this yet" }
      </StyledTableCell>
      <StyledTableCell align="center" >
        <DeleteIcon color="action" onClick={() => { deleteEntryFromList(index)} }/>
      </StyledTableCell>
    </StyledTableRow>
  )
};

const mapStateToProps = ({ list }) => {
  return { list }
;};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntryFromList : (index) => {
      return dispatch(deleteEntryFromList(index));
    },
    changeBuyingState : (index, buyingState) => {
      return dispatch(changeBuyingState({ index, buyingState }));
    }
  }
};

export default connect ( mapStateToProps, mapDispatchToProps )( ListItemComponent );