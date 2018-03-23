import React, { Component } from 'react';
import './style.css'

class HeaderTab extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}

	static defaultProps = {
		tabName:'团购详情'
	}

	render(){
		return (
			<header>
				<a className="back" href="javascript:history.go(-1)" >
					返回
				</a>
				<p className="title">
				{this.props.tabName}
				</p>
			</header>
		)
	}
}

export default HeaderTab