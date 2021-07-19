// import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/Sidebar'
// import "./app.css"
import Dashboard from "./components/pages/dashboard/dashboard";
import SearchBar from "./components/searchbar/searchbar";

function App() {
  return (
 
    <div>
        <div className="container">
        <Sidebar />

        <div className="others">
          <SearchBar />
          <Dashboard />


        </div>

        </div>
  
    </div>
 
  );
}

export default App;
