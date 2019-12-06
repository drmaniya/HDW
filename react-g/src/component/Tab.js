import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Tab extends Component {

  constructor()
  {
    super();
    this.state={
      label:'',
      id:''
    }
  }
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    activeTabStatus:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickStatus:PropTypes.func.isRequired,
  };
  state={
   
    error: null,
    isLoaded: false,
    items: [],
  }
 
  onClick = () => {
    const { label, id , onClick } = this.props;
    onClick(label,id);
    this.setState({label:label})
    this.setState({id:id})
    console.log(label+" "+id);
  }

  render() {
   const { error, isLoaded, items } = this.state;
    const {
      onClick,
      onClickStatus,
      props: {
        activeTab,
        activeTabStatus,
        label,
        id,
      },
    } = this;
    
 

    return (
       <div>
          
          <li
              // className={className}
              class="dib"
              onClick={onClick}
           >
      
             {this.props.label?
              <div class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6">{label}</div>:
              <div class="w-33 ml4 mr3">{id}</div>} 
              
            </li>
         
          
      </div>
     );
  }
  

}

export default Tab;