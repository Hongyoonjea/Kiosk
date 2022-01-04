import { useState } from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import './App.css';
import HAMBURGERS from './data/Hamburger';
import SIDE from './data/SIDE';
import BEVERAGE from './data/Beverage';
import { useLocation } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom'


function App() {
  const location = useLocation();
  const [Menuselect, setMenuSelect] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [listMenuVisible, setListMenuVisible] = useState(false);
  const [burgersum, setBurgerSum] = useState(0);
  const [addedMenuList, setAddedMenuList] = useState([]);
  const [burgerInfo, setBurgerInfo] = useState({
    name:'',
    engname: '',
    price:0,
    img:''
  });

  const removeMenu = (name)=> {
    // console.log('받아온 index', index);
    // console.log('addedMenuList', addedMenuList);
   const result = addedMenuList.filter((v) => {
    return v.name !== name;
  })
   setAddedMenuList(result);
 }
 ///매개변수를 이용해서 함수이벤트 줌
 
  

  const getFoodMenu = () => {
    if(location.pathname === '/SIDE') {
      return SIDE
    }
    else if(location.pathname === '/Hamburger') {
      return HAMBURGERS
    }
    else if(location.pathname === '/Beverage') {
      return BEVERAGE
    }
    return [];
    // 예외처리 
  };

  const getTitleName = () => {
    if(location.pathname === '/SIDE') {
      return '사이드 & 디저트'
    }
    else if(location.pathname === '/Beverage'){
      return '맥카페 & 음료'
    }
    else if(location.pathname === '/Hamburger'){
      return '버거'
    }
    return ''
  };

  const numberPlus = () => {
    setBurgerSum(burgersum+1);
  }

  const numberMinus = () => {
    if(burgersum === 0)return;
    setBurgerSum(burgersum-1);
  }
 
  const addMenuHandler = () => {
    if(burgersum === 0) {
      alert('선택하신 메뉴의 갯수가 0개 입니다. 다시 선택하세요');
      return;
    }
    const result = addedMenuList.concat({...burgerInfo, burgersum});
    setAddedMenuList(result);
  }; 

  let sum = 0;
  for (let i = 0; i < addedMenuList.length; i++) {
    console.log(i, '한줄 ==================================')
    console.log('price', addedMenuList[i].price);
    console.log('burgersum', addedMenuList[i].burgersum);
    console.log('sum', sum);
    sum = sum + (addedMenuList[i].price * addedMenuList[i].burgersum);
  }
  // document.result(sum);
  console.log('sum ==================================')
  console.log('sum', sum);

 
  return (
    <>
       <div className="Kiosk">
        <div className="mc-logo">
          <img src="mcdonald.png" />
          <div className="mc-menu">
            <h1 className="mc-menu-choice">메뉴선택</h1>
            <button 
            className="mc-menu-serch" 
            onClick={()=> setMenuSelect(true)}>메뉴조회</button>
            {Menuselect ?
              <div className="menu-select" >
                <Link to={`/Hamburger`}>
                  <span className="meun-select-choice">버거</span>
                </Link>
                <Link to={`/SIDE`}>
                  <span className="meun-select-choice">사이드</span>
                </Link>
                <Link to={`/Beverage`}>
                  <span className="meun-select-choice">음료</span>
                </Link>
            </div>
            : <></>}
          </div>
        </div>

      {listMenuVisible ? 
        <body className="add-menu">
          <div className="add-menu-result">
            <h1 className="add-menu-head-name">장바구니</h1>
            {addedMenuList.map((v, i) =>
              <div 
                key={v.name+i} 
                onClick={()=> {setBurgerInfo(v) }}>
                <ul>
                  <li className="add-menu-list">버거명: {v.name}</li>
                  <li className="add-menu-list">가격: {'₩'+v.price}</li>
                  <li className="add-menu-list">수량: {v.burgersum}</li>
                  <li className="add-menu-list">총 금액: {v.price * v.burgersum}</li>
                </ul>
                <Button
                    sx={{
                      padding:'5px',  
                      fontSize:'15px',
                      marginBottom:'0',
                      right:'0',
                      backgroundColor:'white'
                      }} 
                    color="error" 
                    size="large" 
                    onClick={()=> removeMenu(v.name)}
                  >
                  X
                </Button>
            </div>)} 
          </div>

          <div className="add-menu-list-reset">
              <div className="total-amount">
                <TextField 
                  sx={{
                    backgroundColor:'white'}}
                  label="총 금액" 
                  size='large'
                  value={sum}
                />
              </div>
            
                <Button
                  sx={{
                    padding:'10px 10px',  
                    fontSize:'18px',
                    right:'0',
                    backgroundColor:'white',
                    flex:'1'
                    }} 
                    variant="outlined" 
                    color="error" 
                    size="large" 
                    onClick={()=>{ setListMenuVisible(false); setAddedMenuList([]); setBurgerSum(0)}}
                  >
                  Reset
                  </Button>
                
                </div>
        </body>
        :<></>}


        <header className="burger-name-container">
          <h3 className="burger-head">{getTitleName()}</h3>
          <div className="burger-name-list">
            {getFoodMenu().map((v, i) =>
            <div
              className="menu-choice"
              key={v.name+i}
              onClick={()=> {
                setIsMenuVisible(true);
                setBurgerInfo(v);
                }}>
              <img src={v.img} />
              <p className="menu-choice-name">{v.name}</p>
              <p className="menu-eng-name">{v.engname}</p>
              <p className="menu-price">{'₩'+v.price}</p>
            </div>)}
          </div>
        </header>
        
        {isMenuVisible ? 
        <footer className="count-menu">
          <div className="count-sum">
            <div className="result-sum-menu">
              <img className="result-img" src={burgerInfo.img}/>
              <div>
                <li className="burger-menuname">{burgerInfo.name}</li>
                <li className="burger-menuname">{burgerInfo.engname}</li>
                <li className="burger-menuname">{'₩'+burgerInfo.price}</li>
              </div>
            </div>
            <div className="calculator-number">
              <div className="">
                <TextField 
                  label="총 금액" 
                  size='small'
                  value={'₩'+(burgerInfo.price * burgersum)}
                />
              </div>
              <div>
                <ButtonGroup 
                  sx={{width: '40ch'}} size='large' 
                  variant="outlined" 
                  aria-label="text button group">
                  <Button className="count-button" 
                    onClick={numberMinus}>-</Button>
                  <Button className="count-button">
                    {burgersum}
                  </Button>
                  <Button className="count-button" 
                    onClick={numberPlus}>
                    +
                  </Button>
                  <Button className="count-button" 
                    onClick={()=>{ addMenuHandler(); setListMenuVisible(true);}}>
                    추가
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className='next-button'>
              {
                <Button className="bottom-button"
                sx={{
                  padding:'15px 30px', 
                  marginRight:'20px', 
                  fontSize:'20px'
                  }} 
                  variant="outlined" 
                  color="error" 
                  size="large" 
                  onClick={()=> setIsMenuVisible(false)} 
                >
                  주문 취소
                </Button>
              }
              <Link 
                to={`/Receipt`}>
                <Button className="bottom-button"
                  sx={{
                    padding:'15px 50px',
                    fontSize:'20px',
                    fontWeight:'700'
                    }}
                    variant="contained"
                    color="success"
                    size='large'
                >
                  다음
                </Button>
              </Link>
            </div>
          </div>
        </footer>
        : <></>}
      </div>
    </>
  );
};

export default App;
