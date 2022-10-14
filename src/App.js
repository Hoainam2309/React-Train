import logo from './logo.svg';
import './App.css';
import DemoFuntionCom from './components/DemoComponent/DemoFuntionCom';
import DemoClassCom from './components/DemoComponent/DemoClassCom';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './Databinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';

function App() {
  return (
    <div className="App">
      {/* hello nam
      <DemoFuntionCom />
      <div className='w-25'>
        <DemoClassCom />

      </div>
      <div className='w-25'>
        <DemoClassCom />

      </div> */}
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StyleWithJSX /> */}
      <StateDemo />
    </div>
  );
}

export default App;
