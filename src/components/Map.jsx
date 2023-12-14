import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useState } from 'react';
import { features } from '../data/us-states.json';
import Popover from '@mui/material/Popover';
import Legend from './Legend';
import "leaflet/dist/leaflet.css"
import '../assets/stylesheets/components/map.css';


function Map() {
  const [onSelect, setOnselect] = useState({});

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const highlightFeature = (e => {
    var layer = e.target;
    const { name, positive, recovered, death } = e.target.feature.properties;
    setOnselect({
      state: name,
      active: positive,
      recovered: recovered,
      deaths: death
    });

    layer.setStyle({
        weight: 1,
        color: "black",
        fillOpacity: 1
    });
  });
  const mapStyle = {
    height: '100vh',
    width: '100%',
    margin: '0 auto',
  }
  const feature = features.map(feature=>{
    return(feature);
  });
  const resetHighlight= (e =>{
    setOnselect({});
    e.target.setStyle(style(e.target.feature));
  })
  /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
   highlightFeature and resetHighlight*/
  const onEachFeature= (feature, layer)=> {
      layer.on({
          mouseover: highlightFeature,
          mouseout: resetHighlight,
      });
  }

  const mapPolygonColorToDensity = (positive) => {
    return positive > 1000000
      ? '#ff00ff' // brightest purple
      : positive > 800000
      ? '#d400d4'
      : positive > 600000
      ? '#b300b3'
      : positive > 400000
      ? '#990099'
      : positive > 200000
      ? '#7a007a'
      : positive > 0
      ? '#4d004d' // darker purple
      : '#4d004d'; // default color for zero or negative values (negative values not possible)
  };
  
  
  const style = (feature => {
      return ({
          fillColor: mapPolygonColorToDensity(feature.properties.positive),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '2',
          fillOpacity: 0.5
      });
  });

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableScrollLock={true}
      >
        {(onSelect.state && (
          <ul className="state-stats">
            <li><strong>{onSelect.state}</strong></li>
            <li>Active: {onSelect.active}</li>
            <li>Recovered: {onSelect.recovered}</li>
            <li>Deaths: {onSelect.deaths}</li>
          </ul>
        ))}
      </Popover>
      <MapContainer center={[39.8283, -98.5795]} zoom={4} scrollWheelZoom={false} style={mapStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        {feature && (
          <GeoJSON data={feature} 
          style={style} 
          onEachFeature={onEachFeature}/>
        )}
        <Legend />
      </MapContainer>
    </div>
  )
}

export default Map;