import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts,delContact } from '../../actions/contactActions';



// class Contacts extends Component {
//   componentDidMount() {
//     this.props.getContacts();
//   }
//   render() {
//     const { contacts } = this.props;
//     console.log('allcontacts', contacts)
//     return (
//       <React.Fragment>
//         <h1 className="display-4 mb-2">
//           <span className="text-danger">Contact</span> List
//         </h1>
//         {contacts.map(contact => (
//           <Contact key={contact.id} contact={contact} contacts={contacts}/>
//         ))}
//       </React.Fragment>
//     );
//   }
// }

const Contacts = (props) => {
  const [contactList, setContactList] = useState(props.contacts)
  useEffect(() => {
    getContacts()
  },[props.contacts])
  const onDeleteClick = id => {
    this.props.delContact(id)
    console.log('updated contacts!!!!!', this.props.contacts)

  }
  return (
    <div>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
    </h1>
      {contactList.map(contact => (<Contact key={contact.id} contact={contact} contacts={contactList} onDelete={onDeleteClick} id={contact.id}/>
      ))}
    </div>
  )
}
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})



export default connect(mapStateToProps, { getContacts })(Contacts);
