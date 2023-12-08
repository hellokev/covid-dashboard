import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"

function Map() {
  const mapStyle = {
    height: '100vh',
    width: '100%',
    margin: '0 auto',
  }
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} scrollWheelZoom={false} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map;