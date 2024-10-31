import React, { useState } from 'react'
import "../css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Header() {
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate()

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);

    if (theme) {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    } else {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <div className='flex-row'>
        <p className='logo-text' onClick={()=>{ navigate("/")}}>Mehmet Akif Salman</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type="text" />
        <div>

          {theme ? <CiLight className='icon' onClick={changeTheme} /> : <IoMoonOutline className='icon' onClick={changeTheme} /> }
          <CiShoppingBasket className='icon'  />
          {/* onClick fonksiyonu eklendi */}
        </div>
      </div>
    </div>
  )
}

export default Header;
