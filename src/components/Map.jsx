import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useState } from 'react';
import { features } from '../data/us-states.json';
import "leaflet/dist/leaflet.css"
import '../assets/stylesheets/components/map.css';


function Map() {
  const [onSelect, setOnselect] = useState({});
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

  const mapPolygonColorToDensity=(density => {
      return density > 3023
        ? '#67001f'
        : density > 676
        ? '#980043'
        : density > 428
        ? '#ce1256'
        : density > 236
        ? '#e7298a'
        : density > 23
        ? '#d4b9da'
        : '#f1eef6';
  })
  const style = (feature => {
      return ({
          fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '2',
          fillOpacity: 0.5
      });
  });

  return (
    <div>
      {(onSelect.state && (
        <ul className="state-stats">
          <li><strong>{onSelect.state}</strong></li>
          <li>Active: {onSelect.active}</li>
          <li>Recovered: {onSelect.recovered}</li>
          <li>Deaths: {onSelect.deaths}</li>
        </ul>
      ))}
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
      </MapContainer>
    </div>
  )
}

export default Map;