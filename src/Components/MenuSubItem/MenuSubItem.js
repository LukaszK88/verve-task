import * as React from 'react';
import './MenuSubItem.css';
import { MenuSubChildItem } from '../../Components'

class MenuSubItem extends React.Component{

  renderSubMenuChildItems() {
    return this.props.subMenuItem.child.map((subChildMenuItem) => {
      return(
        <MenuSubChildItem
          handleMenuSelect={this.props.handleMenuSelect}
          key={subChildMenuItem.key}
          subChildMenuItem={subChildMenuItem}
        />
      )
    })
  }

  render(){
    const { subMenuItem, handleMenuSelect } = this.props;
    return(
      <div className="subDropdown">
        <div
          onClick={() => handleMenuSelect(subMenuItem.content)}
          className="subMenuItem"
        >
          {subMenuItem.label}
        </div>
        {(subMenuItem.child !== undefined) &&
        <div className="subDropdownContent">
          <div className="subDropdownItem">
            {this.renderSubMenuChildItems()}
          </div>
        </div>
        }
      </div>
    )
  }
}

export default (MenuSubItem);