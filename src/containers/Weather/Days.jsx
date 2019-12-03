import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const Day = ({weather}) => (
    <div>Temperature for this day will be 
        {console.log( weather)}
<div>High  {weather.AT.mx}</div>
<div>Low {weather.AT.mn}</div>
    </div> );

Day.prototype ={
    weather:PropTypes.shape().isRequired,
}

 export default Day;
