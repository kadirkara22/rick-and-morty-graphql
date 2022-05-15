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


  if (loading) {
    return <Loading />
  }


  return (
    <div>
      <Search setSearch={setSearch} search={search} />
      <div className="container">
        <div className="filterMenu">
          <FilterMenu />
        </div>
        <div className="content">
          <Content search={search} />
        </div>
      </div>



    </div>
  );
}

export default App;
