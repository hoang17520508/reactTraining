import SanPham from "../BaiTapRedux/BaiTapGioHangRedux/SanPham";

const stateGioHang={
    gioHang:[{maSP:1,tenSP:'iphone x',hinhAnh:'./img/sp_iphoneX.png',donGia:100000,soLuong:1}
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
    }
    return state;

}