import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const Day = ({weather}) => (
    <div className="day_forweather box" >Temperature for this day will be <br/>
High  {weather.AT.mx}
 Low {weather.AT.mn}
    </div> );

Day.prototype ={
    weather:PropTypes.shape().isRequired,
}

 export default Day;
