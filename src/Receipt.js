import './App.css';
import {Link} from 'react-router-dom'

const Receipt = () => {

return(
    <div className="receipt-container">
        <header className="receipt-head">
            <h1 className="receipt-name">결제하기</h1>
            <h2 className="order-menu">주문 확인</h2>
            <ul className="menu-set">빅맥 세트
                <li className="order-select">음료: 코카콜라</li>
                <li className="order-select">사이드: 감자튀김</li>
                <li className="order-select">추가토핑 없음</li>
            </ul>
        </header>
        <body className="payment">
            <h1 className="payment-select">결제 선택</h1>
            <ul><button className="receipt-button">신용카드</button></ul>
            <ul><button className="receipt-button">삼성페이</button></ul>
            <ul><button className="receipt-button">카카오페이</button></ul>
        </body>
        <footer className="total">
            <span className="sum">총 결제금액 ₩ 10500원 </span>
            <button className="sum-button">결제</button>
        </footer>
    </div>
    );
};

export default Receipt;