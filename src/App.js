import Content from "./components/Content";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";
import "./app.css"
import { useQuery } from "@apollo/client";
import { RICKANDMORTY_QUERY } from "./queries";
import { useState } from "react";
import Loading from "./components/Loading";
function App() {
  const { loading } = useQuery(RICKANDMORTY_QUERY)
  const [search, setSearch] = useState("")
  const [selectedGender, setSelectedGender] = useState([])
  const [selectedSpecies, setSelectedSpecies] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])

  if (loading) {
    return <Loading />
  }


  return (
    <div>
      <Search setSearch={setSearch} search={search} />
      <div className="container">
        <div className="filterMenu">
          <FilterMenu
            setSelectedGender={setSelectedGender}
            selectedGender={selectedGender}
            selectedSpecies={selectedSpecies}
            setSelectedSpecies={setSelectedSpecies}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
          />
        </div>
        <div className="content">
          <Content search={search}
            selectedGender={selectedGender}
            selectedSpecies={selectedSpecies}
            selectedLocations={selectedLocations} />
        </div>
      </div>



    </div>
  );
}

export default App;
