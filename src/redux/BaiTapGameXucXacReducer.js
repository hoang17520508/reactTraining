const stateDefault = {
    datCuoc: true,
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './imgGame/1.png', diem: 0 },
        { hinhAnh: './imgGame/1.png', diem: 0 },
        { hinhAnh: './imgGame/1.png', diem: 0 }
    ]

};
export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    return { ...state };
}