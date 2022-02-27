import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay  from "./components/SeasonDisplay";

class App extends React.Component {

    state = { 
        loading: true,
        lat: null,
        errorMessage: '',
    };
    componentDidMount() {
        console.log('Component Did Mount. Making the call');
        window.navigator.geolocation.getCurrentPosition(
            position => 
                this.setState({
                    ...this.state,
                    loading: false,
                    lat: position.coords.latitude,
                    errorMessage: '',
                })
            ,
            (error) => 
                this.setState({
                    ...this.state,
                    loading: false,
                    lat: null,
                    errorMessage: error.message,
                })
            ,
        );
    }

    componentDidUpdate() {
        console.log('Component Did Update, rendered again');
    }

    render() {
        console.log('Render called');
        if(this.state.loading) {
            return <div> Loading... </div> 
        } else if(this.state.errorMessage && !this.state.lat) {
            return <div> Error : {this.state.errorMessage} </div>
        } else if(this.state.lat && !this.state.errorMessage) {
            return < SeasonDisplay lat={this.state.lat} />
        } 
    }

}

ReactDOM.render(
    <App />, 
    document.getElementById('root'),
);