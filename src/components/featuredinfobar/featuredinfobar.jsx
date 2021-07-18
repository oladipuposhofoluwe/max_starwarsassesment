import Topbar from "../topbar/Topbar"
import { Search } from '@material-ui/icons';


import "./featuredinfobar.css"

function Featuredinfobar() {
    return (
        <div className="featuredInfoBar">
            <div className="featuredInfoBarWrapper">
                <p className="featuredInfoBarTitle">Dashboard</p>
                <Topbar/>
            </div>
            <div className="featuredInfoBarWrapper">
                <p className="featuredInfoBarTitle"></p>
                <input type="text" placeholder="search for vehicles" className="featuredInfoBarSearch" />
                <Search className="searchIcon"/>

            </div>
        </div>
    )
}


export default Featuredinfobar;
