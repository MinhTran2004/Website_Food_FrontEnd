import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function AppMap() {
  return (
    <div className="relative z-0">
      <MapContainer
        center={[21.0285, 105.8542] as [number, number]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[21.0285, 105.8542]}>
          <Popup>Hồ Hoàn Kiếm</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}