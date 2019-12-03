import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Home/index';
import {getForCast} from '../../function';
import Day from'./Days';
import Weather from "./Weather";
import { withRouter } from 'react-router';

    const MarsWeather = ({}) => (

        <div><Header/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                    <h2>Mars page</h2>
            <Weather/>

        </div>
                );



export default withRouter(MarsWeather);
