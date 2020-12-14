/// file quản lý tất cả các state của uqwnsg dụng thay vì đặt tại component ta đặt state tại store
import {combineReducers, createStore} from 'redux';
import {BookingTicketReducer} from './BookingTicketReducer';





const rootReducer=combineReducers({
    // các sate sau này khai báo tại dâdy
   
   stateBookingTicket:BookingTicketReducer,
   

   
    
})
 // tạo ra các store chưa rootReducer{xem như store tổng của ứng dụng}
 export default  rootReducer;
