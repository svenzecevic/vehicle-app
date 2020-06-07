import React from "react";
import CarList from "../components/ModelList/ModelList";
import Pagination from "../components/Pagination/PaginationModel";
import Search from "../components/Search/SearchModel";
import SortAsc from "../components/SortButton/Model/SortModelAsc";
import SortDesc from "../components/SortButton/Model/SortModelDesc";

const List = () => (
  <React.Fragment>
    <Search />
    <SortAsc />
    <SortDesc />
    <CarList />
    <Pagination />
  </React.Fragment>
);

export default List;
