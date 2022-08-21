import React, {useState} from "react";


const NavBar = ({connect, accountBal}) => {
     const [toggle, setToggle] = useState(true);
  return (
    <header>
      <div className="logo">
      <i className="fa-solid fa-money-bill-transfer"></i>
      </div>

      <nav>
        <div className="hamb" onClick={() => setToggle(!toggle)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={toggle ? "nav-list" : "nav-list open"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li className="btn" onClick={() => connect()}>
            {accountBal ? 
            <a href="#">balance: {accountBal} </a> : 
            <a href="#">connect Wallet</a>}
            
            {/* <Link to={'/'}>logout</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar