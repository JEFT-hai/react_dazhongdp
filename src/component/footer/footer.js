import React from 'react'

import './style.css'

class Footer extends React.Component{
	constructor(){
		super()
		this.state ={

		}
	}

	render(){
		return (
			<footer className="footer">
				<a>首页</a>
				<em>|</em>
				<a>我的点评团</a>
				<em>|</em>
				<a>客户端</a>
				<em>|</em>
				<br></br>
				<a>电脑版</a>
				<em>|</em>
				<a>大众点评网</a>
				<em>|</em>
				<a>意见反馈</a>
				<em>|</em>
			</footer>
		)
	}
}

export default Footer