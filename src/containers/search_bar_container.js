import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {search: ''};
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({search: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        
        this.props.fetchWeather(this.state.search);
        this.setState({ search: '' });
    }

    render() {
        return(
            <form className="input-group" onSubmit={this.onFormSubmit} >
                <input placeholder="Get wather" className="form-control" value={this.state.search} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secundary"> Search </button>
                </span>
            </form>
        );
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);