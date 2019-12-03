import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Home/index';
import {getForCast} from '../../function';
import Day from'./Days';
import { withRouter } from 'react-router';
class Weather extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            forCast:[],


        };
    }
    componentDidMount() {
        this.getSevenDayForcast();
    }

    getSevenDayForcast(){
        getForCast()
            .then(res => res.json())
            .then(d => {
                let list = Object.keys(d);
                for(let i = 0; i<= 2; i++ ){
                    switch(i){
                        case 0:
                            console.log(d[list[i]])
                            this.setState({forCast: [...this.state.forCast, d[list[i]]] });
                            break;
                        case 1:
                            console.log(d[list[i]])
                            this.setState({forCast:[...this.state.forCast , d[list[i]]] });
                            break;
                    }

                }
            } );
        console.log(this.state.forCast);
    }

    render(){
        const{
            forCast
        } = this.state
        return(

            <div> <h2>This is the Seven day forcast</h2>{forCast.length > 0 ?
                this.state.forCast.map(wea => (<Day weather={wea}/>)):(<div>none found</div>)}
        </div>);
            }
}
export default Weather;