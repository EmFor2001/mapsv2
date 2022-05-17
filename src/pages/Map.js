import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Link } from "react-router-dom";


const Map = () => {
    return ( 
        <>
            <button className='back-btn'>
                <Link to="/">X</Link>
            </button>
        <MapContainer center={[54.35, 18.65]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        </>
    );
}

export default Map;