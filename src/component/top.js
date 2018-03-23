import React,{ Component } from 'react'

import './top.css'

class Top extends Component{
	render(){

		return (
			<div>
				<div className="downLoad">
					<div className="title">
						<span className="icon"></span>
						<span>吃喝玩乐，找优惠</span>
					</div>
					<div className="ButtonList">
						<button className="open">打开大众点评</button>
						<button className="down">下载APP享特价</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Top