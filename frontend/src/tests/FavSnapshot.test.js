// NOTE: This test was working when Mentor Jason Morta helped me with it on 11/03/23. Since then it stopped working, without me changing anything.
// It gives me a few errors, such as: "Support for the experimental syntax 'jsx' isn't currently enabled (7:32):"
// Having Googled this I can't find any solutions.

import React from "react";
import renderer from "react-test-renderer";

import Favourites from "../components/Favourites";

it("renders correctly", () => {
  const tree = renderer.create(<Favourites />);
  expect(tree.toJSON).toMatchSnapshot();
});
