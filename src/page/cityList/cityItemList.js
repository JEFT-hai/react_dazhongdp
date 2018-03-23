import React from 'react'

import './style.css'

class cityItemList extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}

	static defaultProps = {
		data:[]
	}

	componentWillMount(){
	}

	back(){
		window.history.back();
	}

	render(){

		return (
			<div>	
					<header>
						<div className="cityback back" onClick={this.back.bind(this)} ></div>
						<div className="typeList">
							切换城市
						</div>
					</header>
					<div>
						<div className="citySearch">
							<div className="citySearch_inner">
								<span>输入城市名或拼音查询</span>
							</div>
						</div>
						<p className="noPosition">无法获取您的定位</p>
						<div className="areaListTitle">{this.props.title}</div>
						<ul className="areaList">
							{	this.props.data.length?
								this.props.data.map((Item,index)=>{
									return (
										<li key={index}>
											{Item}
										</li>
									)
								})
								:''
							}
						</ul>	
					</div>
			</div>
		)
	}
}

export default cityItemList