import SanPham from "../BaiTapRedux/BaiTapGioHangRedux/SanPham";

const stateGioHang={
    gioHang:[
    ]
}
export const GioHangReducer=(state =stateGioHang,action)=>{
    switch(action.type){
        case 'Them_Gio_Hang':{

            // xửu lý cập nhạt state giohang
            let gioHangCapNhat=[...state.gioHang];
            //tìm trong  gio hang có ản phẩm  nào cso mã == sp click hay không?
            let spGioHang=gioHangCapNhat.find(sp=>sp.maSP === action.sanPhamClick.maSP);
            if(spGioHang){
                //tim thấy=== tổng spsp l;ượng
                spGioHang.soLuong+=1;
            }
            else{
                
                    gioHangCapNhat.push(action.sanPhamClick)
                
            }
            //cap mnhat lai state
            state.gioHang=gioHangCapNhat;
            //immutable laf timsj bat bien cua redux
            return {...state};

        }
        case 'Xoa_Gio_Hang':{
            const gioHangCapNhat=[...state.gioHang];
            let index=gioHangCapNhat.findIndex(sp=>sp.maSP===action.maSPXoa);
            if(index!==-1)
            {
                gioHangCapNhat.splice(index,1);
            }
            state.gioHang=gioHangCapNhat;
            return{...state};
        }
        case 'Tang_Giam_So_Luong':{
            const gioHangCapNhat=[...state.gioHang];
            let spGH=gioHangCapNhat.find(sp=>sp.maSP===action.maSPClick);
            if(spGH){
                spGH.soLuong+=action.soLuong;
            }
            state.gioHang=gioHangCapNhat;
            return{...state};
        }
    }
    return state;

}