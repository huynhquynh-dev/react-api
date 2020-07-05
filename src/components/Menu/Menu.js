import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
	{
		name: 'Trang chủ',
		to: '/',
		exact: true
	},
	{
		name: 'Quản lí sản phẩm',
		to: '/product-list',
		exact: false
	}
];

const MenuLink = ( {lable, to, activeOnlyWhenExact} ) => {
	return (
		<Route 
			path={to}
			exact={activeOnlyWhenExact}
			children={ ( {match} ) => {
				var active = match ? 'active' : ''
				return (
					<li className={`nav-item ${active}`}>
						<Link className="nav-link" to={to}>{lable}</Link>
					</li>
				);
			}}
		/>
	);
}


class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
				<a className="navbar-brand" href="/">CALL API</a>
				<ul className="nav navbar-nav">
					{this.showMenus(menus)}					
				</ul>
			</nav>
        );
	}

	showMenus = (menus) => {
		var result = null;
		if (menus.length > 0) {
			result = menus.map((menu, index) => {
				return (
					<MenuLink 
						key={index}
						lable={menu.name}
						activeOnlyWhenExact={menu.exact}
						to={menu.to}
					/>
				);
			});
		}
		return result;
	}
}

export default Menu;