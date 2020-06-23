import React from "react";
import CarList from "../components/MakeList/MakeList";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
import SortAsc from "../components/SortButton/Make/SortMakeAsc";
import SortDesc from "../components/SortButton/Make/SortMakeDesc";
import Search from "../components/Search/SearchMake";
import Reload from "../components/Reload/ReloadMake";

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
