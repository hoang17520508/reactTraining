 import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import FormSinhVienRedux from './FormSinhVienRedux'
import TableSInhVien from './TableSInhVien'
 
 export default class BaiTapQuanLySinhVien extends Component {
     render() {
         return (
             <div>
               <FormSinhVienRedux/>
                 <TableSInhVien/>
             </div>
         )
     }
 }
 