import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("makeListStore")
@observer
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
  }

  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {this.makeListStore.PageNum.map((number) => (
            <li key={number} className="page-item">
              <Link
                onClick={() => this.makeListStore.setCurrentPage(number)}
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
