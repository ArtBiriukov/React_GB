import { getNewsStart, getNewsSuccses } from "../actions";
import { REQUEST_PENDING, REQUEST_SUCCESS } from "../actionTypes";

describe("getNewsStart", () => {
  it("return an object with specified type", () => {
    const result = getNewsStart();

    expect(result).toEqual({ type: REQUEST_PENDING });
  });
});

describe("getNewsSuccses", () => {
  it("returns an obj with payload from argument and specified type", () => {
    const result = getNewsSuccses([]);

    expect(result).toEqual({ type: REQUEST_SUCCESS, payload: [] });
  });
});
