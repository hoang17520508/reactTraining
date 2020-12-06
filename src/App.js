import logo from './logo.svg';
import './App.css';
import DemoFunctionComponent from './Components/DemoFunctionComponent';
import DemoClassComponent from './Components/DemoClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayOut';
import Header from './Components/BaiTapLayout/Header';
import Carousel from './Components/BaiTapLayout/Carousel';
import SmartPhone from './Components/BaiTapLayout/SmartPhone';
import Laptop from './Components/BaiTapLayout/Laptop';
import Promotion from './Components/BaiTapLayout/Promotion';
import DataBilding from './DataBilding/DataBilding';
import DatabindingClassComponent from './DataBilding/DatabindingClassComponent';
import HandelEvent from './HandleEvent/HandelEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './DemoState/BaiTapChonXe';
import RendeWithMap from './RenderWithMap/RendeWithMap';
import BaiTapRenderDanhSachPhim from './RenderWithMap/BaiTapRenderDanhSachPhim';
import Demoprops from './Props/Demoprops';
import ProductlistRCC from './Props/ProductlistRCC';
import ProductList from './Props/PropsWithEvent/ProductList';
import PropsWithEvent from './Props/PropsWithEvent';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';


function App() {
  return (
    <div className="App ">
     
     {/* <Header/>
     <Carousel/>
     <SmartPhone/>
     <Laptop/>
     <Promotion/> */}
     {/* <DataBilding/>
     <DatabindingClassComponent/> */}
     {/* <HandelEvent/> */}
     {/* <DemoState/> */}
     {/* <BaiTapChonXe/> */}
    {/* <RendeWithMap/> */}
    {/* <BaiTapRenderDanhSachPhim/> */}
    {/* <Demoprops/>     */}
    {/* <ProductlistRCC/> */}
    <PropsWithEvent/>
    {/* <BaiTapGioHangRedux/> */}
     </div>
  );
}

export default App;
