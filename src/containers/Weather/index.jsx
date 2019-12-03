import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Home/index';
import {getForCast} from '../../function';

class MarsWeather extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            forcast:{
            0:[],
            1:[],
            3:[],
        
        }};
    }
    componentDidMount(){
        this.getSevenDayForcast();
    }

    getSevenDayForcast(){
        getForCast()
        .then(res => res.json())
        .then(d => {let list = Object.keys(d) 
        console.log(list)});
    }

    render(){
        return(<div><Header/><h2>Mars page</h2></div>);
    }
}
export default MarsWeather;