import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("listStore")
@observer
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  render() {
    let pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.listStore.totalModels / this.listStore.itemsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link
                onClick={() => this.listStore.setCurrentPage(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
