import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken = 
'pk.eyJ1IjoiYmVyYXRrYWxlcyIsImEiOiJja3Z4ZXdxZW8wNjgwMnVsYTNxMmR4MDRrIn0.6SD8KHB3FoCpux3U043_QQ';

const Map = (props) => {
    console.log(props)
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-2.18051, -21.06926],
          zoom: 3,
        });

        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates);
        }

        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates);
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ],{
                padding: 60
            })
        }

     }, [props.pickupCoordinates, props.dropoffCoordinates]);

     const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
     }

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`

