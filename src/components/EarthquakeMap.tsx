"use client";
import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { fetchData } from "@/utils/api";

const EarthquakeMap = () => {
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [selected, setSelected] = useState<any | null>(null);

  const style = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  useEffect(() => {
    fetchData()
      .then((res: any) => {
        setEarthquakeData(res);
      })
      .catch((err: string) => {
        console.error("fetch data error:", err);
      });
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap mapContainerStyle={style} center={center} zoom={1}>
        {earthquakeData.map((earthquake: any, index: number) => (
          <Marker
            key={index}
            position={{
              lat: earthquake.geometry.coordinates[1],
              lng: earthquake.geometry.coordinates[0],
            }}
            onClick={() => setSelected(earthquake)}
          ></Marker>
        ))}
        {selected && (
          <InfoWindow
            position={{
              lat: selected.geometry.coordinates[1],
              lng: selected.geometry.coordinates[0],
            }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <p className="font-semibold">Details:</p>
              <p>Location: {selected.properties.title}</p>
              <p>
                Date/Time: {new Date(selected.properties.time).toLocaleString()}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default EarthquakeMap;
