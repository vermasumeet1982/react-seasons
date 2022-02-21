import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        // THIS IS THE ONLY TIME we do direct assignment. Every other place should call setState
        this.state = { 
            loading: true,
            lat: null,
            errorMessage: '',
        };

        window.navigator.geolocation.getCurrentPosition(
            position => { 
                this.setState({
                    ...this.state,
                    loading: false,
                    lat: position.coords.latitude,
                    errorMessage: '',
                })
            },
            (error) => {
                console.error(error);
                this.setState({
                    ...this.state,
                    loading: false,
                    lat: null,
                    errorMessage: error.message,
                })
            },
        );
    }

    render() {
        if(this.state.loading) {
            return <div> Loading... </div> 
        } else if(this.state.errorMessage && !this.state.lat) {
            return <div> Error : {this.state.errorMessage} </div>
        } else if(this.state.lat && !this.state.errorMessage) {
            return <div> Latitude : {this.state.lat} </div>
        } 
    }

}

ReactDOM.render(
    <App />, 
    document.getElementById('root'),
);