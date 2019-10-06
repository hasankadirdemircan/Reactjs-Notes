import React, { Component } from 'react';


import './List.css';

class List extends Component {


    render() {
        return (
            <div className={"listArea"}>
                <input name={"filter"} id={"filer"} placeholder={"Filter by name or Phone"}></input>
                <ul className={"list"}>
                   {
                       this.props.contacts.map(contact => 
                         
                            <li key={contact.phone}>
                                <span className={"name"}>{contact.name}</span>
                                <span className={"phone"}>{contact.phone}</span>
                                <span className={"clearfix"}></span>
                            </li>
            
                       )
                   }
                </ul>
            </div>
        );
    }
}

export default List;