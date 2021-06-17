import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class Signup extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        //this.setState({displayName: '', email: '', password: '', confirmPassword: '' });
        const{displayName, email, password, confirmPassword} = this.state;

        if(password != confirmPassword)
        {
            alert("Password don't match");
            return;
        }

        try{

            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName : '',
                email : '',
                password: '',
                confirmPassword: ''
            });
        }
        catch(error){
            console.error(error);
        }
    };

    //new same code
    handleSubmitNew = async event => {
        event.preventDefault();
        const{displayName, email, password, confirmPassword} = this.state;
        if(password != confrimPassword)
        {
            alert("Password don't match with confrim password");
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confrimPassword: ''
            });
        }
        catch(error){
            console.error(error);
        }
    }
    //new same code end

    handleChange = event => {
        const { name, value } = event.target;
        this.setState( {[name]: value });
    }

    //new same code
    handleChangeNew = event => {
        const{ name, value } = event.target;
        this.setState( {[name]: value });
    }
    //new same code end

    render(){
        return(
            <div className='sing-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}> 
                
                    <FormInput 
                    name='displayName' 
                    type='text' 
                    value={this.state.displayName} 
                    handleChange={this.handleChange} 
                    placeholder="Display Name"
                    required />

                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    placeholder="Email"
                    required />

                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    placeholder="Password"
                    required />

                    <FormInput 
                    name='confirmPassword' 
                    type='password' 
                    value={this.state.confirmPassword} 
                    handleChange={this.handleChange} 
                    placeholder="Confirm Password"
                    required />

                    <CustomButton type='submit'>SIGN IN</CustomButton>

                </form>
            </div>
        )
    }
}

export default Signup;