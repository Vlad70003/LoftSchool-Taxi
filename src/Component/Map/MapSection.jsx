import React from 'react';
import mapbox from 'mapbox-gl';
import { connect } from 'react-redux';
import { logOut } from '../../actions';


class MapSection extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.mapConteiner = React.createRef();
        this.state = {
            
        }
    }

    componentDidMount(){
        mapbox.accessToken = "pk.eyJ1IjoibHVzdDcwMDAzIiwiYSI6ImNrb2Z5dGFwNzBsa2wydmp6bWlrYzU1ajYifQ.3XDEiAGyZBZQPENW796BeA";
        this.map = new mapbox.Map({
            container: this.mapConteiner.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [30.30, 59.94],
            zoom: 12,
        })
        
    }

    componentWillUnmount(){
        this.map.remove();
    }

    render(){
        return (
            <div className="map-wrapper">
                <div data-test="map" ref={this.mapConteiner} className="map"></div>
            </div>
        )
    }
}

export default connect(
    state => ({isLoggedIn: state.isLoggedIn}, {saveCard: state.saveCard}),
    null
)(MapSection);