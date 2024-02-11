import Map, { Marker, Source, Layer } from "react-map-gl";
import marker from "./marker.png";
import plane from "./plane.png";
import { useRef } from "react";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [14.57203549703318, 45.220035573837016],
      },
    },
  ],
};

export default function MyMap() {
  const mapRef = useRef(null);

  return (
    <div className="mapContainer">
      <Map
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoidHJpbS12amVrbyIsImEiOiJjbGtueGd5ZW4wbWZhM2NreWhyZHdsejJ0In0.mLJzNGY5o1Aqcb1BkRB2ww"
        initialViewState={{
          longitude: 14.42579,
          latitude: 45.337461,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onLoad={() => {
          const map = mapRef.current.getMap();
          map.loadImage(plane, (error, image) => {
            if (error) return console.log(error);
            if (!map.hasImage("plane")) map.addImage("plane", image);
          });
        }}
      >
        <Marker longitude={14.42579} latitude={45.337461} anchor="bottom">
          <img src={marker} alt="marker" />
        </Marker>

        <Source id="my-data" type="geojson" data={geojson}>
          <Layer
            id="point"
            type="symbol"
            layout={{
              "icon-image": "plane",
              "icon-size": 0.5,
            }}
          />
        </Source>
      </Map>
    </div>
  );
}
