import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../src/containers/Home/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends PureComponent{
    constructor(props){
        super(props);
        this.state={ };
    }
     redirect(){
        let currentURL = this.props.location.pathname;
        // save them in local storage when you click into an order details page, this way you can go back easily
        localStorage.setItem('url', currentURL);

        this.props.history.push('/weather');
    }
    render(){
        const{hi}=this.state;
    return( <div>
    <Header/>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="box_forweather box" onClick={()=>this.redirect()}>See 7 Day Forecast</div>
            </div>
            <div className="col-lg-6"></div>
        </div>
        <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
        </div>
    </div>
    </div>
    );
    }
    
}
export default Home;