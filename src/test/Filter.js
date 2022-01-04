import { useState} from 'react';

const Data = [
  {
    name: '철수',
    age: 12,
    grade: 'A'
  },
  {
    name: '짱구',
    age: 11,
    grade: 'F'
  },
  {
    name: '맹구',
    age: 9,
    grade: 'B'
  },
  {
    name: '유리',
    age: 13,
    grade: 'C'
  },
  {
    name: '훈이',
    age: 15,
    grade: 'F'
  },
]

const Suzi = [
  {
    name:'수지',
    age:21,
    grade:'A'
  },
]

const App = () => {
  const [users, setUsers] = useState([]);
  
  const exceptF = ()=> {
     const result = Data.filter((v) => {
      return v.grade !== 'F';
    })
    setUsers(result);
  }

  const underageTen = () => {
    const person = Data.filter((a) => {
      return a.age > 10;
    })
    setUsers(person);
  }

  const gradeAorB = () => {
    const highclass = Data.filter((s) =>{
      return s.grade === 'A' || s.grade === 'B'; 
    })
    setUsers(highclass);
  }

  const gradeFage = () => {
    const hooney = Data.filter((h) =>{
      return h.grade === 'F' && h.age >= 15;
    })
    setUsers(hooney);
  }

  // const han

  /////////////////////////////////

  const [serchname, setSerchName] = useState('');

  const doSerchName = () => {
    const result = Data.filter((v) =>{
      return v.name === serchname;
    })
    setUsers(result);
  }


  return (
  <div>
    <p>
      전체데이터
    </p>
      <div style={{display: 'flex'}}>
      {Data.map(v => 
        <ul key={v.name}>
          <li>
            이름:{v.name}
          </li>
          <li>나이:{v.age}
          </li>
          <li>등급:{v.grade}
          </li>
        </ul>
        )}
    </div>
    <p>
     필터된 데이터
    </p>
    <div style={{display: 'flex'}}>
      {users.map(v => 
        <ul key={v.name}>
          <li>
            이름:{v.name}
          </li>
          <li>나이:{v.age}
          </li>
          <li>등급:{v.grade}
          </li>
        </ul>
        )}
    </div>
    <p>이름 검색</p>
    <input onChange={e => setSerchName(e.target.value)} value={serchname}/>
    <button onClick={()=> doSerchName()}>
      같은 이름만 보이기
    </button>
    <br/>
    <button onClick={()=> setUsers(Data)} >
      전체 데이터 넣기
    </button>
    <button onClick={()=> setUsers([])}>전체리셋</button>
    <button onClick={()=> exceptF()}>
      등급 F제외
    </button>
    <button onClick={()=> underageTen()} >
      나이 10이상
    </button>
    <button onClick={()=> gradeAorB()}>
      등급 A또는 B만
    </button>
    <button onClick={()=> gradeFage()}>
      등급 F 이고 15살만
    </button>
    <br/>
    <p>숙제 (* filter 만 사용하지 않습니다.)</p>
    <button  onClick={()=> setUsers(Suzi)}>
      사람 수지 추가하기
    </button>
    <button>
      11살 이하 14이상
    </button>
    <button>
      나이 순서대로 정렬
    </button>
    <p>심화</p>
    <button>
      나이가 2자릿수가 아닌 사람
    </button>
    <button>
      이름 마지막 글자 구 포함
    </button>
  </div>)
}
 export default App;