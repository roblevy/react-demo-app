import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { Link } from 'react-router-dom';

const BurgerMap = ({ userPosition, burgers }) => {
  console.log(burgers);
  return (
    <div id='map'>
      <Map center={userPosition || burgers[0].location} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {userPosition && <Marker position={userPosition}>
          <Popup>
            You!
          </Popup>
        </Marker>}
        {burgers && burgers.map(burger =>
          <Marker key={burger._id} position={[burger.location.lat, burger.location.lng]}>
            <Popup>
              <Link to={`/burgers/${burger._id}`}>
                {burger.name}
              </Link>
            </Popup>
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default BurgerMap;
