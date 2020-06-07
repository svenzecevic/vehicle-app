import React from "react";
import CarList from "../components/ModelList/ModelList";
import Pagination from "../components/Pagination/PaginationModel";
import Search from "../components/Search/SearchModel";
import SortButton from "../components/SortButton/Make/SortMakeAsc";

const List = () => (
  <React.Fragment>
    <Search />
    <SortButton />
    <CarList />
    <Pagination />
  </React.Fragment>
);

export default List;
