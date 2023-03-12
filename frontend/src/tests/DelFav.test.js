// I tried to test a closer semblance to the original function, but Jest didn't agree with me
// importing useState and I couldn't figure out how to fix that. Function is the same, just without state.

let favDisplay = [
  {
    name: "Redneck - Lamb of God",
    id: 1,
  },
  {
    name: "Laid to Rest - Lamb of God",
    id: 2,
  },
  {
    name: "Again We Rise - Lamb of God",
    id: 3,
  },
];
// Function to delete items from favourites.
function delFav(idToDel) {
  let delDisplay = favDisplay.slice();
  for (let i = 0; i < delDisplay.length; i++) {
    if (delDisplay[i].id === idToDel) {
      delDisplay.splice(i, 1);
      break;
    }
  }
  favDisplay = delDisplay;

  // return the favDisplay array variable for testing
  return favDisplay;
}

test("Delete item with id 2 means new 2nd item has id 3", () => {
  const data = delFav(2);
  // Only the first and last items remain, so [1] should be 3.
  expect(data[1].id).toBe(3);
});
