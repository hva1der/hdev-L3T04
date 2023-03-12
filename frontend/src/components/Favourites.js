import { useState } from "react";

// COMPONENT: Favourites - takes input and stores in a list of favourites. Can delete by same input.
function Favourites() {
  // State: list of favourites to display
  const [favDisplay, setFavDisplay] = useState([]);
  const [favId, setFavId] = useState(1);

  // Input new favourite variable
  let newFavInput = {};
  // Function to save (push) new favourite to array
  function newFav(inputFav) {
    let newDisplay = favDisplay.slice();
    let newFavId = favId;
    inputFav.id = newFavId;
    newDisplay.push(inputFav);
    newFavId++;
    setFavDisplay(newDisplay);
    setFavId(newFavId);
  }

  // Function to delete items from favourites.
  function delFav(idToDel) {
    let delDisplay = favDisplay.slice();
    for (let i = 0; i < delDisplay.length; i++) {
      if (delDisplay[i].id === idToDel) {
        delDisplay.splice(i, 1);
        break;
      }
    }
    setFavDisplay(delDisplay);
  }

  // COMPONENT to list favourites in an unordered list - with red X delete buttons
  function ListFavs() {
    const listItems = favDisplay.map((item) => (
      <li key={item.id}>
        {item.name}
        <button className="delFav" onClick={() => delFav(item.id)}>
          X
        </button>
      </li>
    ));

    return <ul>{listItems}</ul>;
  }

  return (
    <>
      <h3>Here you can save items to your list of favourites</h3>
      {/* Input new favourite field */}
      <label>
        New favourite:
        <input onChange={(e) => (newFavInput.name = e.target.value)}></input>
      </label>
      {/* Button save favourite */}
      <button onClick={() => newFav(newFavInput)}>Save</button>
      {/* Display list of favourites */}
      <ListFavs />
    </>
  );
}

// Exports
export default Favourites;
