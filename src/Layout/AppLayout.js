import * as React from 'react';
import axios from 'axios';
import { Menu } from '../Components';
import './AppLayout.css';

const MENU_API = 'http://vervesearch.com/test.json';

class AppLayout extends React.Component{
  constructor(props){
    super(props);

    this.handleMenuSelect = this.handleMenuSelect.bind(this);
  }

  state = {
    menu:[],
    content:null,
  };

  componentDidMount() {
      this.fetchMenu();
  }

  fetchMenu() {
    axios.get(MENU_API).then((response) => {
      this.setState({ menu:response.data });
    })
  }

  handleMenuSelect(content) {
    this.setState({ content })
  }

  render(){
    return(
      <div>
        <Menu handleMenuSelect={this.handleMenuSelect} menu={this.state.menu}/>
        <div className="content">
          {this.state.content &&
          <div className="contentText">{this.state.content}</div>
          }
          {!this.state.content &&
          <div className="contentText">Select Content from Navigation Menu</div>
          }
        </div>
      </div>
    )
  }
}

export default AppLayout;