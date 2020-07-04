import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
				<a className="navbar-brand" href="/">CALL API</a>
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="/">Trang chủ</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Quản lý sản phẩm</a>
					</li>
				</ul>
			</nav>
        );
    }
}

export default Menu;