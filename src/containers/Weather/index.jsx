import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Home/index';
import {getForCast} from '../../function';
import Day from'./Days';
import Weather from "./Weather";
import { withRouter } from 'react-router';

    const MarsWeather = ({}) => (

        <div><Header/> <Weather/>


            </div>);

export default withRouter(MarsWeather);