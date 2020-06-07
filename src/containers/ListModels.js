import React from "react";
import CarList from "../components/ModelList/ModelList";
import Pagination from "../components/Pagination/PaginationModel";
import Search from "../components/Search/Search";
import SortAsc from "../components/SortButton/Model/SortModelAsc";
import SortDesc from "../components/SortButton/Model/SortModelDesc";
import Reload from "../components/Reload/Reload";

const List = () => (
  <React.Fragment>
    <Search />
    <SortAsc />
    <SortDesc />
    <Reload />
    <CarList />
    <Pagination />
  </React.Fragment>
);

export default List;
