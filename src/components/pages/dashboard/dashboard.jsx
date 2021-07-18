
import { ArrowUpward, Videocam, PeopleOutline, DriveEta, FilterVintage } from "@material-ui/icons"
import DateFactor from "../../date/datefactor"
import  "./dashboard.css"

 function Dashboard() {

    return (
         <div className="dashboard">
          <DateFactor />
          
          <div className="dashboarItem" >
          
            <div className="dashboardWrapper">
                  <div className="dashboardMenu">
                     <div className="dashboardMenuList">
                        Films
                     </div>
                     <div className="dashboardMenuListIcon">
                        <Videocam className="dashboardMenuListIcon"/>
                     </div>
                  </div>  
                  <div className="dashboardMenuRate">
                     <p className="dashboardMenuList">200</p>
                     <span> <ArrowUpward className="icon"/> 20 more than Yesterday</span>
                  </div>
            </div>
         

            <div className="dashboardWrapper">
                  <div className="dashboardMenu">
                     <div className="dashboardMenuList">
                        Starships
                     </div>
                     <div className="dashboardMenuListIcon">
                        <Videocam className="dashboardMenuListIcon"/>
                     </div>
                  </div>  
                  <div className="dashboardMenuRate">
                     <p className="dashboardMenuList">200</p>
                     <span> <ArrowUpward className="icon"/> 20 more than Yesterday</span>
                  </div>
             </div>
             
             <div className="dashboardWrapper">
                  <div className="dashboardMenu">
                     <div className="dashboardMenuList">
                        People
                     </div>
                     <div className="dashboardMenuListIcon">
                        <PeopleOutline className="dashboardMenuListIcon"/>
                     </div>
                  </div>  
                  <div className="dashboardMenuRate">
                     <p className="dashboardMenuList">200</p>
                     <span> <ArrowUpward className="icon"/> 20 more than Yesterday</span>
                  </div>
            </div>
          
            <div className="dashboardWrapper">
                  <div className="dashboardMenu">
                     <div className="dashboardMenuList">
                        Vehicle
                     </div>
                     <div className="dashboardMenuListIcon">
                        <DriveEta className="dashboardMenuListIcon"/>
                     </div>
                  </div>  
                  <div className="dashboardMenuRate">
                     <p className="dashboardMenuList">200</p>
                     <span> <ArrowUpward className="icon"/> 20 more than Yesterday</span>
                  </div>
            </div>
          
            <div className="dashboardWrapper">
                  <div className="dashboardMenu">
                     <div className="dashboardMenuList">
                        Species
                     </div>
                     <div className="dashboardMenuListIcon">
                        <FilterVintage className="dashboardMenuListIcon"/>
                     </div>
                  </div>  
                  <div className="dashboardMenuRate">
                     <p className="dashboardMenuList">200</p>
                     <span> <ArrowUpward className="icon"/> 20 more than Yesterday</span>
                  </div>
            </div>
       
          </div>
          
          </div>

   
    )
 }

 export default Dashboard
