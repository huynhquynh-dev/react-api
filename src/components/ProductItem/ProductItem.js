import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDeleteProduct = (id) => {
        if(confirm('Bạn có chắc muốn xóa sản phẩm?')) { // eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }

    render() {
        const { product, index } = this.props;
        const statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        const statusClassName = product.status ? 'badge-warning' : 'badge-secondary';

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge ${statusClassName}`}>{statusName}</span>
                </td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                        <Link 
                            to={`/product/${product.id}/edit`} 
                            className="btn btn-radial btn-success mr-2"
                        >
                            Sửa
                        </Link>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => this.onDeleteProduct(product.id)}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ProductItem;