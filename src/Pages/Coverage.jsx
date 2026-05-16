import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router-dom'


const Coverage = () => {

  const serviceCenters = useLoaderData()
  console.log(serviceCenters)


  return (
    <div>
      <h1>Coverage</h1>
      <div className='w-[90%] h-[800px]'>
        <MapContainer className='h-[800px]' center={[23.6850, 90.3563]} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong>
            </Popup>
          </Marker>)}
        </MapContainer>
      </div>
    </div>
  )
}

export default Coverage
