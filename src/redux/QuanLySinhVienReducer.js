const stateDefault={
    mangSinhVien:[
        {maSinhVien:1,tenSinhVien:"nguyen van a",email:'nguyenavas@aaaa.com',soDienThoai:'0101010010101'},
        {maSinhVien:2,tenSinhVien:"nguyen van b",email:'nguyenavbs@bbb.com',soDienThoai:'0101010010101'}
    ],
    sinhVienSua:{
        maSinhVien:'',
        tenSinhVien:'',
        email:'',
        soDienThoai:'',
    },
    sinhVienRedux:{
        
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',

        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        }

    },
        
    
}
export const QuanLySinhVienReducer=(state=stateDefault,action)=>{

    switch(action.type){
        case 'THEM_SINH_VIEN':{
            const mangSinhVienCapNhat=[...state.mangSinhVien,action.sinhVien];
            return {...state,mangSinhVien:mangSinhVienCapNhat}
        }
        case 'SUA_SINH_VIEN':{
            state.sinhVienSua={...action.sinhVienSua};
            //cập nhật cho form redux
            let newSinhVienRedux={...action.sinhVienRedux};
            newSinhVienRedux.values={...action.sinhVienSua};
            
            return{...state,sinhVienRedux:newSinhVienRedux};
        }
        case 'SET_SV_REDUX':{
            state.sinhVienRedux=action.sinhVienRedux;
            return {...state}
        }
    }

    return {...state};
}