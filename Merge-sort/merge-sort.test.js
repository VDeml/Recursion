import { test, expect } from "@jest/globals";
import { mergeSort } from "./merge-sort.js"


test("Input is an empty array", () => {
    expect(mergeSort()).toEqual([]);
});

test("Normal input, single unsorted array", () => {
    expect(mergeSort([0, 1, 2, 4, 3, 7, 6])).toEqual([0, 1, 2, 3, 4, 6, 7]);
});

 