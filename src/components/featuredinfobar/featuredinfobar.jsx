import Topbar from "../topbar/Topbar"
import "./featuredinfobar.css"

function Featuredinfobar({title}) {
    return (
        <div className="featuredInfoBar">
            <div className="featuredInfoBarWrapper">
                <p className="featuredInfoBarTitle">{title }</p>
                <Topbar/>
            </div>
            <div className="featuredInfoBarWrapper">
                <p className="featuredInfoBarTitle"></p>
                <input type="text" placeholder="search for vehicles" className="featuredInfoBarSearch" />
            </div>
        </div>
    )
}


export default Featuredinfobar;
