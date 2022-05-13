import Content from "./components/Content";
import FilterMenu from "./components/FilterMenu";
import Search from "./components/Search";
import "./app.css"
function App() {

  return (
    <div>
      <Search />
      <div className="container">
        <div className="filterMenu">
          <FilterMenu />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>



    </div>
  );
}

export default App;
