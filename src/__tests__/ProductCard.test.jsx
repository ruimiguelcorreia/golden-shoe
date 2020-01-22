import React from "react";
import Enzyme from "enzyme";
import ProductCard from "../Components/ProductCard";

describe("it renders the card with all of the required info", () => {
  it("renders the img", () => {
    const wrapper = Enzyme.shallow(<ProductCard img="mockImg" />);
  });
});
