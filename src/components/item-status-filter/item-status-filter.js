import { Component } from "react";

export default class ItemStatusFilter extends Component {
      
    render() {
      return (
        <div className="flex border rounded item-status-filter">
          <button type="button"
                  className="item-status-filter-btn">All</button>
          <button type="button"
                  className="item-status-filter-btn border-x">Active</button>
          <button type="button"
                  className="item-status-filter-btn">Done</button>
        </div>
      );
    }
};