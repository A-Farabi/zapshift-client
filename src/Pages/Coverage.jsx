import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router-dom'


const Coverage = () => {

  const serviceCenters = useLoaderData()
  console.log(serviceCenters)
  const mapRef = useRef(null)

  const handleSearch = e =>{
    e.preventDefault()
const location = e.target.location.value;
const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
if (district) {
  const coord = [district.latitude, district.longitude]
mapRef.current.flyTo(coord, 15)}}

  return (
    <div>
      <h1 className=''>Coverage</h1>
      <form onSubmit={handleSearch}>
        <label className="input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name='location' type="search" className="grow" placeholder="Search Service Center" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      </form>
      <div className='w-[90%] h-[800px]'>
        <MapContainer ref={mapRef} className='h-[800px]' center={[23.6850, 90.3563]} zoom={7} scrollWheelZoom={false}>
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
