import React from "react";
import { SearchButton } from "./SearchButton";
import { SearchInput } from "./SearchInput";

export function Search() {

  return <div className="searchWrapper">
    <SearchInput />
    <SearchButton />
  </div>;
}
