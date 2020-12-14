import React from 'react'

class Registration extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            surname: '',
            dateOfBirth: '',
            email: ''
        }
    }

    handleFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        })
        console.log(this.state.surname)
    }

    handleDateOfBirthChange(e) {
        this.setState({
            dateOfBirth: e.target.value
        })
        console.log(this.state.dateOfBirth)
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    registerUser (e) {
        e.preventDefault()
        console.log(this.state.firstName)
    }

    render(){
        return(
            <div className='registrationForm'>
            <form>
            <div class="form-group">
                        <label for="firstNameInput">First Name</label>
                        <input type="text" 
                            class="form-control" 
                            id="firstNameInput"
                            value={this.state.firstName}
                            onChange={e=> this.handleFirstNameChange(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="surnameInput">Surname</label>
                        <input type="text" 
                            class="form-control" 
                            id="surnameInput"
                            value={this.state.surname}
                            onChange={e=> this.handleSurnameChange(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="dobInput">Date of Birth</label>
                        <input type="date" 
                            class="form-control" 
                            id="dobInput"
                            value={this.state.dateOfBirth}
                            onChange={e=> this.handleDateOfBirthChange(e)}
                        ></input>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">Email</label>
                        <input type="email" 
                            class="form-control" 
                            id="emailInput"
                            value={this.state.email}
                            onChange={e=> this.handleEmailChange(e)}
                        ></input>
                    </div>
                    <button className='btn btn-primary' onClick={this.registerUser.bind(this)}>Register</button>
            </form>
               
            </div>
        )
    }
}

export default Registration