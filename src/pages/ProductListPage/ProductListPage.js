import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/productActions';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }
   
    onDeleteProduct = (id) => {
        this.props.deleteProduct(id);
    }

    render() {
        var { products } = this.props;
                
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 mt-3 mb-3">
                        <Link to='product/add' className="btn btn-primary">Thêm sản phẩm</Link>
                    </div>
                </div>
                <ProductList>
                    {this.showProducts(products)}                    
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDeleteProduct={this.onDeleteProduct}
                    />
                )
            })
        }
        return result;
    }
}

ProductListPage.propTypes = {

};

const mapStateToProps = state => {
    return {
        products: state.productsReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductListPage);