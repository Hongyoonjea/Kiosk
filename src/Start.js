import './App.css';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Start = () => {

return(
    <>
    <div className="start-screen">
        <div className="screen-img">
            <img src="mcdonald.png" />
        </div>
        <h2 className="screen-text">식사하실 장소를 선택해 주세요</h2>
        <nav className="select-choice">
            <Link to={`/Hamburger`}>
                <div className="select-screen">
                    <img src="http://img.danawa.com/prod_img/500000/882/724/img/5724882_1.jpg?shrink=330:330&_v=20171212162328" />
                    <p className="select-text">매장에서 식사</p>
                </div>
            </Link>
            <Link to={`/Hamburger`}>
                <div className="select-screen">
                    <img src="http://www.gearbax.com/wp-content/uploads/2015/05/1-ebb3b5ec82acebb3b8.jpg" />
                    <p className="select-text">테이크 아웃</p>
                </div>
            </Link>
        </nav>
        <footer className="select-language">
            <h2 className="screen-text-eng">Please select your language</h2>
            <button className="screen-button">한국어</button>
            <button className="screen-button">English</button>
        </footer>
    </div>
    </>
    );  
};

export default Start;
