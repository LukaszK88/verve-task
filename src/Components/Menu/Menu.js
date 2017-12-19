import * as React from 'react';
import { MenuItem } from '../../Components'
import './Menu.css';

class Menu extends React.Component{

  renderMenuItems() {
    return this.props.menu.map((menuItem) => {
      return(
        <MenuItem handleMenuSelect={this.props.handleMenuSelect} key={menuItem.key} menuItem={menuItem}/>
      )
    })
  }

  render(){
    return(
      <div className="menuContainer">
        {this.renderMenuItems()}
      </div>
    )
  }
}

export default (Menu);
