import { useState } from "react";

// COMPONENT: Input field and Search button
function GetApples() {
  // Set state to display top 5 results. Initial state with empty result objects - prevents issue with display further down. Could find neater solution.
  const [resultDisplay, setResultDisplay] = useState(
    Array(5).fill({ artist: "", item: "" })
  );

  // Variables to store input fields data - NOTE: I DON'T THING THESE NEED TO BE STATE
  let [searchType, setSearchType] = useState("");
  let [searchTerm, setSearchTerm] = useState("");

  // function: fetch GET request to backend - changed to POST request, as GET requests can't have body, and I wasn't sure how else to effectively resolve that(?)
  function fetchArtistData(type, terms) {
    return fetch("/iTunes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([type, terms]),
    })
      .then((res) => res.json())
      .then((result) => setResultDisplay(result));
  }

  return (
    <>
      <h4>
        Please put the type of search (movie, podcast, music, musicVideo,
        audiobook, shortFilm, tvShow, software, ebook, or all) in the box below.
      </h4>
      {/* Input field search type */}
      <label>
        Search type:
        <input onChange={(e) => setSearchType(e.target.value)}></input>
      </label>
      {/* Input field search term */}
      <label>
        Search term:
        <input onChange={(e) => setSearchTerm(e.target.value)}></input>
      </label>
      {/* Search button */}
      <button onClick={() => fetchArtistData(searchType, searchTerm)}>
        Search
      </button>
      {/* Results display - formatting it this way is not ideal, as the app can crash where there are less than 5 
      results - ex where someone enters an unusual search term. I'm falling behind as usual, so didn't get a change to improve this. 
      I think I made a fundamental mistake: I spent a lot of time on defensive programming at the start of the course and now I don't
      have time anymore for these assignments when I would have liked to do it. Hopefully I will have enough time at the final capstone, 
      and in any event I will go back and improve and refine my old tasks for my portfolio. */}
      <p>{`${resultDisplay[0].item} - ${resultDisplay[0].artist}`}</p>
      <p>{`${resultDisplay[1].item} - ${resultDisplay[1].artist}`}</p>
      <p>{`${resultDisplay[2].item} - ${resultDisplay[2].artist}`}</p>
      <p>{`${resultDisplay[3].item} - ${resultDisplay[3].artist}`}</p>
      <p>{`${resultDisplay[4].item} - ${resultDisplay[4].artist}`}</p>
    </>
  );
}

// Exports
export default GetApples;
