import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        var { children } = this.props;
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header text-center text-white bg-info">
                            <h3>Danh sách sản phẩm</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-inverse">
                                <thead className="thead-inverse text-center">
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã</th>
                                        <th>Tên</th>
                                        <th>Giá</th>
                                        <th>Trạng thái</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {children}											
                                </tbody>
                            </table>
                        </div>							
                    </div>
                </div>					
            </div>
        );
    }
}

export default ProductList;