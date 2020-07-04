import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			
			<div className="container">
				<div className="row">
					<div className="col-6 mt-3 mb-3">
						<button type="button" className="btn btn-primary">Thêm sản phẩm</button>
					</div>
				</div>
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
										<tr>
											<td>1</td>
											<td>1</td>
											<td>Iphone 6</td>
											<td>500</td>
											<td>
												<span className="badge badge-warning">Còn hàng</span>
											</td>
											<td>
												<div className="btn-group" role="group" aria-label="">
													<button type="button" className="btn btn-radial btn-success mr-2">Sửa</button>
													<button type="button" className="btn btn-danger">Xóa</button>														
												</div>													
											</td>
										</tr>											
									</tbody>
								</table>
							</div>							
						</div>
					</div>					
				</div>
			</div>
		</div>		
	);
}

export default App;
