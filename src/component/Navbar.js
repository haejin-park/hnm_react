import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  }
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];
  const search = (event) => {
    if(event.key === 'Enter') {
      //enter를 칠 때만 콘솔에 찍히게
      console.log("we click this key", event.key);
      //입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      console.log("keyword", keyword);
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }

  }

  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser}/>
          <div onClick={goToLogin}>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img 
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu,index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} className='search-icon'/>
            <input type='text' placeholder='제품 검색' onKeyPress={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

