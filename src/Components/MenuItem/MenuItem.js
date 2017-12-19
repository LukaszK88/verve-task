import * as React from 'react';
import { MenuSubItem } from '../../Components'
import './MenuItem.css';


class MenuItem extends React.Component{

  renderSubMenuItems() {
    return this.props.menuItem.child.map((subMenuItem) => {
      return(
        <MenuSubItem
          handleMenuSelect={this.props.handleMenuSelect}
          key={subMenuItem.key}
          subMenuItem={subMenuItem}
        />
      )
    })
  }

  render(){
    const { menuItem } = this.props;
      return(
        <div className="dropdown">
          <div className="menuItem menuItemMobile" >
            {menuItem.label}
          </div>
          {(menuItem.child !== undefined) &&
          <div className="dropdownContent">
            <div className="dropdownItem">
              {this.renderSubMenuItems()}
            </div>
          </div>
          }
        </div>
      )
  }
}

export default (MenuItem);