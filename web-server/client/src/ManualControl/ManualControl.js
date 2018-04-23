import './ManualControl.css';
import ManualControlForm from './ManualControlForm';
import React from 'react';

var request = require('request');

class ManualControl extends React.Component{
    constructor(){
        super();
        // operating True means the drone is in the air
        // InOrder to do other command like rolling or turn, operating must be True
        this.state = {
            operating: false
        }
    }

    render(){
        return(
            <ManualControlForm
                onCommand={(e)=>this.sendingControlCommand(e)}
            />
        );
    }

    // API call to Node for sending command request
    sendingControlCommand(event) {
        const command = event.target.name;
        if (command == 'takingOff') {
            this.setState({
                operating: true
            });
        }
 
        if (this.state.operating == true) {
            // if command is landing, immediately set operating state to be false
            // so that no further action can be take
            if (command == 'landing') {
                this.setState({
                    operating: false
                });
            }
            var clientServerOptions = {
                uri: 'http://' + window.location.hostname + ':3000/api' + command,
                body: JSON.stringify({'command': command}),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            request(clientServerOptions, function (error, response) {
                console.log(error,response.body);
            });
        } else {
            console.log('drone not operating');
        }
    }
}

export default ManualControl;