/// file quản lý tất cả các state của uqwnsg dụng thay vì đặt tại component ta đặt state tại store
import {combineReducers, createStore} from 'redux';
import {GioHangReducer} from '../redux/GioHangReducer';
import { BaiTapGameXucXacReducer } from './BaiTapGameXucXacReducer';




const rootReducer=combineReducers({
    // các sate sau này khai báo tại dâdy
    stateGioHang:GioHangReducer,
    stateGameXucXac:BaiTapGameXucXacReducer

   
    
})
 // tạo ra các store chưa rootReducer{xem như store tổng của ứng dụng}
 export const store= createStore(rootReducer);
