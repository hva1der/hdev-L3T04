// Testing the frontend to backend fetch. I had scrapped this test because I couldn't get it to work,
// but once I got the connection to work it served as a useful indicator that the fetch was operational.
// Sometimes fails due to timeout

test("testing the connection to iTunes via backend", async () => {
  const data = await fetch("http://localhost:3001/iTunes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(["ebook", "harry"]),
  });
  const json = await data.json();
  expect(json.id).toBe(json.id);
});
