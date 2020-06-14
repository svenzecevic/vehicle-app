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

  componentWillMount = () => {
    this.listStore.getMakePageNum();
  };

  componentWillUnmount = () => {
    this.listStore.removeMakePageNum();
  };

  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {this.listStore.MakePageNum.map((number) => (
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
