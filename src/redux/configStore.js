/// file quản lý tất cả các state của uqwnsg dụng thay vì đặt tại component ta đặt state tại store
import {combineReducers, createStore} from 'redux';

import {GioHangReducer} from '../redux/GioHangReducer';
import { BaiTapGameXucXacReducer } from './BaiTapGameXucXacReducer';
import { QuanLySinhVienReducer } from './QuanLySinhVienReducer';
import {BookingTicketReducer} from '../redux/Reducer/BookingTicketReducer'
import BaiTapOanTuXiReducer from './Reducer/BaiTapOanTuXiReducer';




const rootReducer=combineReducers({
    // các sate sau này khai báo tại dâdy
    stateGioHang:GioHangReducer,
    stateGameXucXac:BaiTapGameXucXacReducer,
    stateQuanLySinhVien:QuanLySinhVienReducer,
    stateBookingTicket:BookingTicketReducer,
    stateBaiTapOanTuXi:BaiTapOanTuXiReducer
   

   


   
    
})
 // tạo ra các store chưa rootReducer{xem như store tổng của ứng dụng}
 export const store= createStore(rootReducer);
