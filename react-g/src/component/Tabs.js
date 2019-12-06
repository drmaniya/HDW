import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

//import Test from './Test';
class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      activeTabStatus:this.props.children[0].props.id,
      
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab});
  }
  onClickTabItemStatus = (tab) => {
    this.setState({ activeTabStatus :tab });
    
  }
  render() {
    const {
      onClickTabItem,
      onClickTabItemStatus,
      props: {
        children,
      },
      state: {
        activeTab,
        activeTabStatus,
      }
    } = this;
    return (
    <div> 

      <div className="tabs">

        {this.state.activeTab?
        <ol className="tab-list w-90 center bg-white pa3 pa4-ns mv3 ba b--black-10 tc">
          {children.map((child) => {
            const { label } = child.props;
            
            return (
               <div class="dib">
                <Tab
                    activeTab={activeTab}
                    // key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                  
              </div> 
             
               );
          })}
        </ol>:
        <ol className="tab-list mt3 w-90 center bg-white pa3 pa4-ns mv3 ba b--black-10 tc">
        {children.map((child) => {
          const { id } = child.props;
         
          
          return (
             <div class="dib">
              <Tab
                  activeTabStatus={activeTabStatus}
                  // key={label}
                  id={id}
                  onClick={onClickTabItemStatus}
                />
             
             </div> 
            
             );
        })}
      </ol>
  }
      </div>     

      

        

        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
           
          })}
       
        </div>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.id !== activeTab) return undefined;
            return child.props.children;
           
          })}
       
        </div>

       
            
      </div>

    );
  }
}

export default Tabs;