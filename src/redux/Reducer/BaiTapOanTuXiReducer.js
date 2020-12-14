const stateDefault={
mangDatCuoc:[
    {ma:'keo',hinhAnh:'./img/GameOanTuXi/keo.png',datCuoc:true},
    {ma:'bao',hinhAnh:'./img/GameOanTuXi/bao.png',datCuoc:false},
    {ma:'bua',hinhAnh:'./img/GameOanTuXi/bua.png',datCuoc:false}
],
ketqua:"I am iron Man ,  love you 3000 !!!",
soBanThang:0,
soBanChoi:0,
computer:{ma:'bua',hinhAnh:'./img/GameOanTuXi/bua.png'}
}

const BaiTapOanTuXiReducer=(state=stateDefault,action)=>{
    switch(action.type){

        case 'CHON_KEO_BUA_BAO':{
            let mangCuocUpdate=[...state.mangDatCuoc];
            mangCuocUpdate=mangCuocUpdate.map((item,index)=>{
                if(item.ma===action.maCuoc){
                    return {...item,datCuoc:true}
                }
                return {...item,datCuoc:false}
            })
            let index=mangCuocUpdate.findIndex(qc=>qc===action.maCuoc);
            if(index!=-1){
                mangCuocUpdate[index].datCuoc=true;
            }
            state.mangDatCuoc=mangCuocUpdate;
            return {...state};

        }
        case 'RAN_DOM':{
            let soNgauNhien=Math.floor(Math.random()*3);
            let quanCuocNgauNhien=state.mangDatCuoc[soNgauNhien];
            state.computer=quanCuocNgauNhien;


            return {...state};

        }
        case 'END_GAME':{
            let player=state.mangDatCuoc.find(item=>item.datCuoc===true);
            let computer=state.computer;
            switch(player.ma)
            {
                case 'keo':{
                    if(computer.ma==='keo'){
                        state.ketqua='Hòa nhau!!!!';

                    }else if(computer.ma==='bua')
                    {
                        state.ketqua='thua sml!!';
                    }else{
                        state.ketqua='I am iron Man ,  love you 3000 !!!';
                        state.soBanThang+=1;

                    }
                    ;break;

                }
                case 'bua':{
                    if(computer.ma==='keo'){
                        state.ketqua='I am iron Man ,  love you 3000 !!!';
                        state.soBanThang+=1;

                    }else if(computer.ma==='bua')
                    {
                        state.ketqua='hòa !!!';
                    }else{
                        state.ketqua='Thua sml !!!';

                    }
                    ;break;

                   
                }
                case 'bao':{
                    if(computer.ma==='keo'){
                        state.ketqua='Thua Sml !!!';

                    }else if(computer.ma==='bua')
                    {
                        state.ketqua='I am iron Man ,  love you 3000 !!!';
                        state.soBanThang+=1;
                    }else{
                        state.ketqua='Hòa !!!';

                    }
                    ;break;

                }
                default: state.ketqua='I am iron Man ,  love you 3000 !!!';
                
            }
          
        }
        state.soBanChoi+=1;
        return {...state};
        default:return{...state}
    }

}
export default BaiTapOanTuXiReducer;