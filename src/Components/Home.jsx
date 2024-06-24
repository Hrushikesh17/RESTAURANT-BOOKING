import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Style/Home.css'
const Home = () => {

    const location = useLocation()
    const option = location.pathname.startsWith('/adminPortal')

    return (
        <div>


            {
                option ?
                    <>
                        <div class="adminCard">
                            <Link to="/adminPortal/add"><button>Add Item</button></Link>
                            <Link to="/adminPortal/view"><button>View Item</button></Link>
                            <Link to="/adminPortal/search"><button>Search Item</button></Link>
                            <Link to="/adminLogin"><button>logOut</button></Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="useCard">
                           <div className="nav">
                            <Link to="/userPortal/view"><button>Menu</button></Link>
                            <Link to="/userPortal/search"><button>Search Item</button></Link>
                            <Link to="/userPortal/contact"><button>Contact Us</button></Link> 
                            <Link to="/userLogin"><button>Exit</button></Link>
                           </div>

                            
                         </div>
                    </>
            }
        </div>
    )
}

export default Home
