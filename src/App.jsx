import { useEffect, useState } from 'react'
import image from './assets/morty1080p.jpg'
import rickandmorty from './assets/loading.png'
import './App.css'
import axios from 'axios'
// import ResidentInfo from './ResidentInfo'
import LocationInfo from './components/LocationInfo'

function App() {
  const [location, setLocation] = useState({})

  const [searchId, setSearchId] = useState("")

  const [isLoading, setIsloading] = useState(true);



  useEffect(() => {
    const randomId = Math.floor(Math.random() * 127);
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => {
        setLocation(res.data)
        setTimeout(() => setIsloading(false), 2000)
      });

  }, [])

  // console.log(location)

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
      .then(res => setLocation(res.data));
  }

  return (
    <div className="App">
      {
        isLoading ? (
          <div className='loading-icon'><img className='rnm-img' src={rickandmorty} alt="" /></div>

        ) : (
          <>
            <header className="header">

              <img className='img-header' src={image} alt="" />

            </header>





            <div className='conteiner'>

              <div className='input-conteiner'>
                <input className='input'
                  type="text"
                  placeholder='type a location type id'
                  value={searchId}
                  onChange={e => setSearchId(e.target.value)}

                />


                <button className='button'
                  onClick={searchType}
                >
                  Search
                </button>
              </div>

              <div className='ubication'>
                <p>Planet:</p>
                <h2>{location.name}</h2>
                <ul className='list-location'>
                  <li><p>Type:</p> {location.type}</li>
                  <li><p>Dimension:</p> {location.dimension}</li>
                  <li><p>Population:</p> {location.residents?.length}</li>
                </ul>
              </div>

              <h3 className='residents'>Residents</h3>

            </div>
            <ul className='location'>

              {
                location.residents?.map(location => (
                  <LocationInfo location={location} key={location} />
                ))
              }

            </ul>
          </>
        )
      }

    </div >
  )
}

export default App
