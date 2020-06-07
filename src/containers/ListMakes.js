import React from "react";
import CarList from "../components/MakeList/MakeList";
import Pagination from "../components/Pagination/PaginationMake";
import Filter from "../components/Filter/Filter";
import SortAsc from "../components/SortButton/Make/SortMakeAsc";
import SortDesc from "../components/SortButton/Make/SortMakeDesc";
import Search from "../components/Search/Search";
import Reload from "../components/Reload/Reload";

const List = () => (
  <React.Fragment>
    <Search />
    <SortAsc />
    <SortDesc />
    <Reload />
    <Filter />
    <CarList />
    <Pagination />
  </React.Fragment>
);

export default List;
