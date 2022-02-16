import React from "react";
import Card from "../UI/Card";
import "./DeskSelection.css";
import "../User/User.css"
import SelectedDesk from './SelectedDesk';

const DeskSelection = (props) => {

  const onSubmitHandler = () => {
    console.log("Your Desk(s) have been booked successfully!")
    props.setUserInfo("")
  }

  return (
    <div>
    <Card className='user'>
      <h1>You have selected:
      {props.slots.map((desk) => (
        desk.userSelection ?
        desk.name : <div></div>
      ))}</h1>
    </Card>
    <Card>
      <div>
        <h2>Please click 'Confirm' to finalize your booking(s)</h2>
        <button onClick={onSubmitHandler}>Confirm</button>
      </div>
    </Card>
    </div>
  );
};

export default DeskSelection;