// Tests that the default number of results on the iTunes API is 50

test("The default number of results is 50", async () => {
  const data = await fetch(
    "https://itunes.apple.com/search?country=gb&term=jim+jones&media=all"
  );
  const json = await data.json();
  expect(json.resultCount).toBe(50);
});

// NOTE re backend snapshot test: As far as I could understand there is limited (or no?) functionality to do snapshot tests of the backend.
// Confirmed by mentor Jason Morta on 11/03/23 that we weren't supposed to include this in the assignment (?)
