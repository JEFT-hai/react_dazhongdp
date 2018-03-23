import React from 'react'

import './style.css'

class IndexFooter extends React.Component{
	constructor(props){
		super(props)
		this.state ={

		}
	}


	render(){
		return (
			<footer style={{background:this.props.bg}} className="footer IndexFooter">
				<a>我的</a>
				<em>|</em>
				<a>社区论坛</a>
				<em>|</em>
				<a>添加商户</a>
				<em>|</em>
				<a>意见反馈</a>
				<em>|</em>
				<br></br>
				<a>美团网</a>
				<em>|</em>
				<a>美团下载</a>
				<em>|</em>
				<a>结婚</a>
				<em>|</em>
				<a>亲子</a>
				<em>|</em>
				<a>家庭</a>
				<em>|</em>
				<a>宴会</a>
				<em>|</em>
				<a>教育</a>
				<br />
				<a>电脑端</a>
				<em>|</em>
				<a>客户端</a>
				<br />
				<p className="copyright">
					copyright ©2018 dianping.com
				</p>
			</footer>
		)
	}
}

export default IndexFooter