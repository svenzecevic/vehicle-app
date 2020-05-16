import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { action, computed } from "mobx";
import { Link } from "react-router-dom";

@inject("store")
@observer
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
    this.carStore = this.props.store.carStore;
  }

  @computed get totalItems() {
    return this.listStore.carsList.length;
  }

  @action
  setCurrentPage = (number) => {
    this.listStore.currentPage = number;
  };

  render() {
    let pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.totalItems / this.listStore.itemsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <Link>
                <a
                  onClick={() => this.setCurrentPage(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
