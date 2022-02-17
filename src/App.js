import "./App.css";
import React, { useState } from "react";
import DeskCollection from "./components/Desks/DeskCollection";
import Card from "./components/UI/Card";
import User from "./components/User/User";
import DeskSelection from "./components/Desks/DeskSelection";
import Confirmation from "./components/Desks/Confirmation";

const SLOT_DETAILS = [
  {
    id: "d1",
    name: "Desk 1",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d2",
    name: "Desk 2",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d3",
    name: "Desk 3",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d4",
    name: "Desk 4",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d5",
    name: "Desk 5",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d6",
    name: "Desk 6",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d7",
    name: "Desk 7",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d8",
    name: "Desk 8",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d9",
    name: "Desk 9",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d10",
    name: "Desk 10",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d11",
    name: "Desk 11",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d12",
    name: "Desk 12",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d13",
    name: "Desk 13",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d14",
    name: "Desk 14",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d15",
    name: "Desk 15",
    bookingStatus: true,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d16",
    name: "Desk 16",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d17",
    name: "Desk 17",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d18",
    name: "Desk 18",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d19",
    name: "Desk 19",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
  {
    id: "d20",
    name: "Desk 20",
    bookingStatus: false,
    favorite: false,
    userSelection: false,
  },
];

const App = () => {
  const [slots, setSlots] = useState(SLOT_DETAILS);
  const [user, setUser] = useState("");
  const [deskUI, setDeskUI] = useState(false);
  const [selectionUI, setSelectionUI] = useState(false);
  const [confirmationUI, setConfirmationUI] = useState(false);

  const bookingHandler = (bookedName) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === bookedName
          ? { ...object, bookingStatus: true, userSelection: true }
          : object
      );
    });
    if (user === "employee") {
      setDeskUI(false);
    }
    setSelectionUI(true);
  };

  const favoritesHandler = (favName) => {
    setSlots((prevSlots) => {
      return prevSlots.map((object) =>
        object.name === favName
          ? { ...object, favorite: true }
          : object
      );
    });
  }

  const userHandler = (userDetails) => {
    setUser(userDetails);
    setDeskUI(true);
  };

  const submitHandler = () => {
    setConfirmationUI(true);
    setSelectionUI(false);
    setDeskUI(false);
  };

  return (
    <div>
      <h1 className="App-header">Desk Booking facility</h1>

      {user === "" && (
        <Card className="booking-ui">
          <User userDetails={userHandler} />
        </Card>
      )}

      <Card>
        {deskUI === true && (
          <DeskCollection
            slots={slots}
            onBooking={bookingHandler}
            onFavorite={favoritesHandler}
            userInfo={user}
          />
        )}
        {selectionUI === true && (
          <Card className="booking-ui">
          <DeskSelection 
            slots={slots}
            setUserInfo={setUser}
            onSubmitHandler={submitHandler}
          />
          </Card>
        )}
        {confirmationUI === true && <Confirmation slots={slots} />}
      </Card>

      {/* {user === "team manager" &&
      <Card className="booking-ui">
        <DeskCollection slots={slots} onBooking={bookingHandler} userInfo={user} />
        {desksSelectedUI}
      </Card>}

      {user === "floor manager" &&
      <Card className="booking-ui">
        <DeskCollection slots={slots} onBooking={bookingHandler} userInfo={user} />
        {desksSelectedUI}
      </Card>} */}
    </div>
  );
};

export default App;
