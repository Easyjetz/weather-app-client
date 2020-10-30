import React from "react";
import { SearchButton } from "./SearchButton";
import { StyledSearch } from "./SearchElements";
import { SearchInput } from "./SearchInput";

export function Search() {

  return <StyledSearch>
    <SearchInput />
    <SearchButton />
  </StyledSearch>
};
