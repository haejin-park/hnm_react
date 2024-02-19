import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { productAction } from '../redux/actions/productAction';

const Navbar = () => {
  let authenticate = useSelector((state) => state.auth.authenticate);
  let dispatch = useDispatch();
  const logout = () => {
    dispatch(authenticateAction.logout());
  }
  const search = (event) => {
    if(event.key === 'Enter') {
      let keyword = event.target.value;
      dispatch(productAction.searchKeyword(keyword));
    }
  }
  let navigate = useNavigate();
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];

  let [width, setWidth] = useState(0);


  return (
    <div>
      <div className='side-menu' style={{width: width}}>
        <button className='closebtn' onClick={() => setWidth(0)}>&times;</button>
        <div className='side-menu-list'>
          {menuList.map((menu,index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
        <div className='side-search-box'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text' placeholder='제품 검색' onKeyDown={(event) => search(event)}/>
        </div>
      </div>
      <div>
        <div className="nav-header">
          <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
          </div>
          {authenticate ? (
            <div onClick={() => logout()}>
              <FontAwesomeIcon icon={faUser} />
              <span style={{ cursor: "pointer" }}>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              <span style={{ cursor: "pointer" }}>로그인</span>
            </div>
          )}
        </div>
      </div>
      <div className="nav-logo">
        <Link to='/'>
          <img 
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu,index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text' placeholder='제품 검색' onKeyDown={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

