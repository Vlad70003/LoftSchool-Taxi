import React from 'react';
import mapbox from 'mapbox-gl';
import { connect } from 'react-redux';


export const drawRoute = (map, coordinates, zoom) => {
    map.flyTo({
        center: coordinates[0],
        zoom: zoom
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
            "line-width": 6
        }
    });
};

const removeZoom = (map, zoom) => {
    map.flyTo({
        zoom: zoom
    });
}




class MapSection extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.mapConteiner = React.createRef();
        this.state = {
            latitude: '30.30',
            longitude: '59.94',
            zoom: 12,
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
        if(!this.props.newOrder && !this.props.eventProfile){
            drawRoute(this.map, this.props.readyRoute, 15);
        }       
    }

    componentWillUnmount(){
        this.map.remove();
    }

    newOrder = () => {
        if (this.map.getLayer('route')) {
            this.map.removeLayer('route');
            removeZoom(this.map, this.state.zoom)
        }
        if (this.map.getSource('route')) {
            this.map.removeSource('route');
            removeZoom(this.map, this.state.zoom)
        }
    }

    render(){
        return (
            <div className="map-wrapper">
                <div data-test="map" ref={this.mapConteiner} className="map"></div>
                {this.props.newOrder && this.newOrder()}
            </div>
        )
    }
}

export default connect(
    state => ({isLoggedIn: state.isLoggedIn, saveCard: state.saveCard, readyRoute: state.readyRoute}),
    null
)(MapSection);