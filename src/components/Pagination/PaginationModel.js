import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("modelListStore")
@observer
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.modelListStore = this.props.modelListStore;
  }

  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {this.modelListStore.PageNum.map((number) => (
            <li key={number} className="page-item">
              <Link
                onClick={() => this.modelListStore.setCurrentPage(number)}
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
