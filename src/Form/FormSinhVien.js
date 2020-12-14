import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormSinhVien extends Component {

    state = {
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


    }
    componentWillReceiveProps(newProps){
        this.setState({
            values:newProps.sinhVienSua
        });
    }

    handleChangeInput = (event) => {
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeInput');//attribute la thuộc tính người dùng thêm
        console.log(typeInput);
        const newValues = { ...this.state.values } //lưu lại các giá trị trc
        newValues[name] = value;//gán giá trị mới cho thuộc tính đăng nhập
        //set state

        //xử lý lỗi
        this.setState({
            values: newValues
        }, () => {
            console.log(this.state)
        })

        //xử lý error
        const newErrors = { ...this.state.errors }
        newErrors[name] = value.trim() === '' ? name + 'Không dc bỏ trống' : '';
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })
        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + 'Không đúng định dạng';
            }
        }

        if (typeInput === 'phone') {
            const regexNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if (!regexNumber.test(value)) {
                newErrors[name] = name + 'Không đúng định dạng';
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();//chawnj suwj kieenj submit cuar brower khi nguowif dungf dungf submitform=reactform
        let valid = true;
        for (let key in this.state.values) {
            if (this.state.values[key].trim() === '') {
                valid = false;
            }
            //kiểm tra tất carcc ác thuộc tính của this.state.error
            for (let key in this.state.errors) {
                if (this.state.errors[key] !== '') {
                    valid = false;
                }
            }
            if (!valid) {
                alert('dữ liệu không hợp lệ');
                return;
            }

            //xử lý submit=>api hoặc redux{dispatch}...

        }
        this.props.dispatch({
            type: 'THEM_SINH_VIEN',
            sinhVien: this.state.values
        })


    }
    render() {
        let { maSinhVien, tenSinhVien, email, soDienThoai } = this.state.values;
        return (
            <form>
                <div className="card text-left ">
                    <div className="card-header text-center display-4 bg-light text-primary">
                        Thông Tin Sinh Viên
  </div>
                    <div className="card-body">
                        <div className="row text-left">
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Mã Sinh Viên</h3>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={maSinhVien} />
                                    <p className="text text-danger"> {this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <h3>Họ tên</h3>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien} />
                                    <p className="text text-danger"> {this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Số Điện Thoại</h3>
                                    <input typeInput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} value={soDienThoai} />
                                    <p className="text text-danger"> {this.state.errors.soDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <h3>Email</h3>
                                    <input typeInput="email" className="form-control" name="email" onChange={this.handleChangeInput} value={email} />
                                    <p className="text text-danger"> {this.state.errors.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-success"  onClick={this.handleSubmit}>Thêm Sinh Viên</button>
                        <button className="btn btn-primary ml-1" onClick={()=>{}}>Cập nhật sinh viên</button>
                    </div>
                </div>

            </form>
        )
    }
}
const mapstatetoprops = (state) => {
    return {
        sinhVienSua: state.stateQuanLySinhVien.sinhVienSua
    }
}
export default connect(mapstatetoprops)(FormSinhVien)