
import {HUY_GHE,DAT_GHE } from '../types/BookingTicketType'
const stateDefault = {
    danhSachGheDangDat: [
      


    ]
};
export const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {

                //khi người đung click ghế đang dặtd đã có trong mảng       =>remove đi
                danhSachGheDangDatUpdate.splice(index, 1);

            }
            else {
                danhSachGheDangDatUpdate.push(action.ghe);
                // khi người dùng click vào   ghế chưa có trong mảng => push vào mảng    
            }

            // cập nhật ;lại state=> giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state }
        }
        case HUY_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {

                //khi người đung click ghế đang dặtd đã có trong mảng       =>remove đi
                danhSachGheDangDatUpdate.splice(index, 1);

            }
           

            // cập nhật ;lại state=> giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state }

        }
  

        default: return { ...state }
    }


}


