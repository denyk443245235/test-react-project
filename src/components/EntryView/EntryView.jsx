import React  from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import { deleteEntryFromList } from "../../actions/list-actions";
import history from "../../history";

let EntryView = ({ list , deleteEntryFromList }) => {
  let { id , index } = useParams();

  let deleteEntry = () => {
    deleteEntryFromList(index);
    history.push('/');
  };



  if (list.length) {
    var { name, buyingState, changeBuyingStateTime, priority } = list.find(item => item.id === id);
    var date;
    if (changeBuyingStateTime) {
       date =  new Date(changeBuyingStateTime).toLocaleString();
    } else {
       date = "You don't change this yet";
    }

    var template = (
      <List component="nav" aria-label="contacts">
        <ListItem button>
          Name :  {name}
        </ListItem>
        <ListItem button>
          Buying :  {buyingState.toString()}
        </ListItem>
        <ListItem button>
          Change Buying State Time :  {date}
        </ListItem>
        <ListItem button>
          Priority :  {priority}
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={deleteEntry}
          >
            Delete
          </Button>
        </ListItem>
      </List>
    );
  }

  return ( <div> { template} </div> )
};

const mapStateToProps = ({ list }) => {
  return { list }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntryFromList : (index) => {
      return dispatch(deleteEntryFromList(index));
    }
  }
};

export default connect( mapStateToProps, mapDispatchToProps )( EntryView );