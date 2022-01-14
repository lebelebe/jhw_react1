import logo from './logo.svg';
import './App.css';
import Gnb from './Gnb';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <img src={logo} className="App-logo" alt="logo" />
          <Gnb gnblink='https://naver.com' gnbtext='네이버' gnbtg='_blank'></Gnb>
          <Gnb gnblink='https://daum.net' gnbtext='다음'></Gnb>
          <Gnb gnblink='https://google.com' gnbtext='구글'></Gnb>
        </div>
      </header>

    </div>
  );
}

export default App;
