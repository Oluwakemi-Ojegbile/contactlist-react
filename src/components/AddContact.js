import React, { Component } from 'react'
import Modal from '../Modal'

class AddContact extends Component {
    state = { 
        show: false, 
        firstName: '',
        surName: '',
        email: '',
        phone_number: ''
    };

    showForm = () => {
      this.setState({ show: true });
    };
  
    hideForm = () => {
      this.setState({ show: false });
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       this.props.saveContact(this.state);
       this.setState({
        firstName: '',
        surName: '',
        email: '',
        phone_number: '',
        show: false
      })

    }

    render() {
        return (
            <div>
                <Modal show={this.state.show}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add Contact</h5>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName} /> <br/>
                    <input type="text" name="surName" placeholder="Surname" onChange={this.handleChange} value={this.state.surName}/><br/>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} /><br/>
                    <input type="number" name="phone_number" placeholder="Phone No..." onChange={this.handleChange} value={this.state.phone_number} />
                    <button>Save</button>
                    <button onClick={this.hideForm}>Close</button>
                </form>
                </Modal>
                <button type="button" onClick={e => {this.showForm()}} className="addcontact-btn">Add Contact</button>
            </div>
        )
    }
}

export default AddContact;
