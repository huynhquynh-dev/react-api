import React, { Component } from 'react';
import apiCaller from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actEditProductRequest } from '../../actions/productActions';
import { connect } from 'react-redux';

class ProductActionPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            txtName:'',
            txtPrice:'',
            chkbStatus:false
        }
    }

    isChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (event) => {
        event.preventDefault();

        const { id, txtName, txtPrice, chkbStatus } = this.state;     
        const { history } = this.props;
        const product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }

        if (product.id) {
            this.props.editProduct(product);
            history.goBack();
        }
        else {
            this.props.addProduct(product);
            history.history.goBack();                
        }        
    }

    componentDidMount() {
        const { match } = this.props;
        if (match) {
            apiCaller(`products/${match.params.id}`, 'GET', null).then(res => {
                this.setState({
                    id:res.data.id,
                    txtName:res.data.name,
                    txtPrice:res.data.price,
                    chkbStatus:res.data.status                     
                }); 
                console.log(this.state);                               
            });
        }        
    }

    render() {
        const {id, txtName, txtPrice, chkbStatus } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center mt-3">
                        <h1>{id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}</h1>
                    </div>                   
                </div>
                <div className="row">                    
                    <div className="col-6">                        
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input 
                                    type="text" 
                                    name='txtName' 
                                    className="form-control"
                                    value={txtName}
                                    onChange={(event)=> this.isChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá</label>
                                <input 
                                    type="number" 
                                    name='txtPrice' 
                                    className="form-control"
                                    value={txtPrice}
                                    onChange={(event)=> this.isChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input 
                                            type="checkbox" 
                                            name='chkbStatus' 
                                            className="form-check-input" 
                                            value={chkbStatus}
                                            checked={chkbStatus}
                                            onChange={(event)=> this.isChange(event)}
                                        />
                                Còn hàng
                            </label>
                                </div>
                            </div>
                            <Link to='/product-list' className="btn btn-danger mr-3" >Trở lại</Link>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        editProduct: (product) => {
            dispatch(actEditProductRequest(product));
        }
    }
}

export default connect(null, mapDispatchToProps) (ProductActionPage);