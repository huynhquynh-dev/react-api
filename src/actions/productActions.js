import * as Types from './../constants/ActionTypes';
import  apiCaller  from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return dispatch => {
        return apiCaller('products', 'GET', null).then(response => {
            // Lỗi sẽ xảy ra khi thời gian lấy dữ liệu lâu hơn thời gian dispatch 
            // Dùng redux-thunk để trì hoãn dispatch khi đang lấy dữ liệu 
            dispatch(actFetchProducts(response.data));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return apiCaller(`products/${id}`, 'DELETE', null).then(response => {
            if (response.status === 200) {
                dispatch(actDeleteProduct(id))
            }
        })        
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return apiCaller('products', 'POST', product).then(response => {                                                
             dispatch(actAddProduct(response.data))
        }); 
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return apiCaller(`products/${id}`, 'GET', null).then(response => {                                                
             dispatch(actEditProduct(response.data))
        }); 
    }
}

export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return apiCaller(`products/${product.id}`, 'PUT', product).then(response => {                                                
             dispatch(actUpdateProduct(response.data))
        }); 
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}