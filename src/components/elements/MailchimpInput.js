import React from 'react';
import './MailChimpInput.css';

class MailchimpInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: ''
        }
    }


    render() {
        
        return (
            <form action="https://gmail.us2.list-manage.com/subscribe/post" method="POST" noValidate className="chimp-form">
                <input type="hidden" name="u" value="c6e5e8b6700b594024137ef74"/>
                <input type="hidden" name="id" value="797007fc91"/>
                {/* <label htmlFor='MERGE0'>
                    Email */}
                    <input 
                        className="chimp-input"
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        placeholder="Enter email"
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                     /> 
                {/* </label> */}
                
                
                  <input type="submit" value="Go" name="subscribe" id="mc-embedded-subscribe" className="chimp-submit"/>

               
              </form>
             
        );
    }

}

export default MailchimpInput;