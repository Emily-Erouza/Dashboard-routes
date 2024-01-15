import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
   <div >
   <nav className='nav'>
    <ul>
{/* <li><Link to='/'>Home</Link></li>
<li><Link to='/books'>Books</Link></li>
<li><Link to='/names'>Names</Link></li>
<li><Link to='/dashboard'>Dashboard</Link></li> */}
              
              <li>
                <a href="#Dashbaord">Dashboard</a>
              </li>
              <li>
                <a href="#Book">Books</a>
              </li>
              <li>
                <a href="#Name">Names</a>
              </li>
              <li>
                <a href="#Home">Home</a>
              </li>

        
    </ul>
</nav>
</div>
  )
}

export default Navbar