import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lua2xpbmUiLCJhIjoiY2tmb3ljdjc0MDVxODMxbXQ0b25oZ3J2cSJ9.M-K2IshZBr-L1K9ck3fkKw';

const AirQuality = () => {
    const mapContainer = useRef(null);
    const [locationInfo] = useState({
        lng: 31,
        lat: 48.3,
        zoom: 5
    });
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
    }, []);

    return (
        <section className="maps" id="maps">
            <div className="container">
                <h2 className="maps-title" id="quality">Индекс качества воздуха в режиме реального времени</h2>
                <div className="maps-map" ref={mapContainer} />
                <p className="maps-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество
                    воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
            </div>
        </section>
    );
};

export default AirQuality;