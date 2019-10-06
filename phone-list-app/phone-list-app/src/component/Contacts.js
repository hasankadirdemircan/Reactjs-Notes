import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form';
//state kullanmadığımız component'leri stateless olarak tanımla.
const Contacts = props => 

    <div>
        <List contacts={props.contacts}/>
        <Form addContact={props.addContact}/>
    </div>;


Contacts.PropTypes = {
    contacts : PropTypes.array.isRequired,
    addContact: PropTypes.func
};
/*
class Contacts extends Component {
    
    static propTypes = {
        contacts : PropTypes.array.isRequired,
        addContact: PropTypes.func
    };

    render() {
        return (
            <div>
                <List contacts={this.props.contacts}/>
                <Form addContact={this.props.addContact}/>
            </div>
        );
    }
}
*/

export default Contacts;