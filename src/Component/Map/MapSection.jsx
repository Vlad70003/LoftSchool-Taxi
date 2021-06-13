import React from 'react';
import mapbox from 'mapbox-gl';
import { connect } from 'react-redux';


export const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            },
        },
        layout: {
            "line-join": "round",
            "line-cap": "round",
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};



class MapSection extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.mapConteiner = React.createRef();
        this.state = {
            latitude: '30.30',
            longitude: '59.94',
            zoom: '12',
            readyRoute: this.props.readyRoute,
        }
    }


    componentDidMount(){
        mapbox.accessToken = "pk.eyJ1IjoibHVzdDcwMDAzIiwiYSI6ImNrb2Z5dGFwNzBsa2wydmp6bWlrYzU1ajYifQ.3XDEiAGyZBZQPENW796BeA";
        this.map = new mapbox.Map({
            id: "icon-layer",
            container: this.mapConteiner.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [this.state.latitude, this.state.longitude],
            zoom: this.state.zoom, 
        })
        this.map.resize(); 
    }

    componentDidUpdate() {
            drawRoute(this.map, this.state.readyRoute);
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
    state => ({isLoggedIn: state.isLoggedIn, saveCard: state.saveCard, readyRoute: state.readyRoute}),
    null
)(MapSection);