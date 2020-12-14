const stateDefault = {
    datCuoc: true,
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './imgGame/6.png', diem: 6 },
        { hinhAnh: './imgGame/6.png', diem: 6 },
        { hinhAnh: './imgGame/6.png', diem: 6 }
    ]

};
export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  
    switch(action.type){
        case 'DAT':{
            
            state.datCuoc=action.datCuoc;   
            
        
        return {...state};
        }
        case 'RAMDOM_XUC_SAC':{
           
              

            //random
            //tạo 1 mảng xúc sắc ngẫu nhiên 
            const mangXSNN=[];
           
            for(let i=0;i<3;i++){
                //tạo ra 1 số ngẫu nhiên từ 1-0
                const soNN=Math.floor(Math.random() * 6)+1;
                //từ số ngẫu nhiên tạo ra object xúc sắc
                const xxNN={hinhAnh:`./imgGame/${soNN}.png`,diem:soNN}
                mangXSNN.push(xxNN);
               
               
            }
            
            state.soBanChoi += 1;
            state.mangXucXac=mangXSNN;
            const tongDiem = state.mangXucXac.reduce((td, xucXac, index) => {
                return td += xucXac.diem;
            }, 0);
           

            if ((state.datCuoc && tongDiem > 10) || (!state.datCuoc && tongDiem <= 10)) {
                state.soBanThang += 1;
            }
            

            //Cập nhật state số bàn chơi
           
         

            return {...state};
           
        }
        
    
    }


    return { ...state };
}