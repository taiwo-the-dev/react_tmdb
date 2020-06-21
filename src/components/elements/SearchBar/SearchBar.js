import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SearchBar extends Component {
    state = { 
        value: ''
     }

     timeOut = null;

     doSearch = (event) => {
        this.setState({value: event.target.value})
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() =>{
            this.props.callback(this.state.value)
        }, 500)
     }
     cancelSearch = () =>{
        this.setState({value: ''}, () =>{
            this.props.callback(this.state.value)
        })
     }
    render() { 
        return ( 
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                    <input type="text" className="rmdb-searchbar-input" placeholder="Search" 
                            onChange={this.doSearch} value={this.state.value} />
                    <FontAwesome className="rmdb-fa-cancel" name="bullseye" size="2x" onClick={this.cancelSearch} />
                </div>
            </div>
         );
    }
}
 
export default SearchBar;