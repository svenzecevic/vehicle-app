import React from "react"
import CarList from "../components/CarList/CarList"
import Pagination from "../components/Pagination/Pagination"
import Filter from "../components/Filter/Filter"
import Sort from "../components/SortButton/SortButton"
import Search from "../components/Search/Search"




const List = () => (

    <React.Fragment>
        <Search />
        <Sort/>
        <Filter/>
        <CarList/>
        <Pagination/>
    </React.Fragment>
)




export default List