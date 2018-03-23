import React,{Component} from 'react'

import {Link} from 'react-router-dom'

import CityItemList from './cityItemList.js'
import IndexFooter from '../../component/footer/indexFooter.js'

import './style.css'

class CityList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			cityList:{},
			k:[],
			c:'A',
			type:''
		}
	}	

	getSearchKey(name){
		 	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		 	var r = this.props.location.search.substr(1).match(reg);
		 	if(r!=null) return unescape(r[2]); return null;
	}

	// componentWillMount(){
	// 	var type =(this.getSearchKey('type') !== 0)?1:0;

	// 	console.log(type)

	// 	fetch('/api/cityList'+type,{method:"GET"})
	// 	.then(response=> response.json())
	// 	.then(json => {
			
	// 		var k = [],data;
	// 		for (var v in json){
	// 			for(var key in json[v]){
	// 				k.push(key)
	// 			}
	// 			data = json[v]
	// 		}
		
	// 		this.setState({
	// 			cityList:data,
	// 			k:k,
	// 			c:this.getSearchKey('c'),
	// 			type:type
	// 		})
	// 	})
	// }
	// 
	

	componentDidMount(){
		var type =(Number(this.getSearchKey('type')) !== 0)?1:0;

		console.log('type',type)

		fetch('/api/cityList'+type,{method:"GET"})
		.then(response=> response.json())
		.then(json => {
			
			var k = [],data;
			for (var v in json){
				for(var key in json[v]){
					k.push(key)
				}
				data = json[v]
			}
		
			this.setState({
				cityList:data,
				k:k,
				c:this.getSearchKey('c'),
				type:type
			})
		})
	}

	scrollToAnchor = (anchorName) => {
	    if (anchorName) {
	        let anchorElement = document.getElementById(anchorName.Item);
	        if(anchorElement) { anchorElement.scrollIntoView(); }
	    }
	}

	back(){
		window.history.back();
	}

	Update(){
		Component.forceUpdate();
	}

	render(){

		const {cityList,k,type} = this.state; 
		return (
			<div className="cityList">
				{
					this.state.c?
						<CityItemList title={this.state.c} data={cityList[this.state.c]} />
					:
					<div>
						<header>
							<div className="cityback back" onClick={this.back.bind(this)} ></div>
							<div className="typeList">
								<Link onClick={this.Update.bind(this)} className={type===0?'on':''} to="/cityList?type=0&returl=">国内</Link>
								<Link onClick={this.Update.bind(this)} className={type===1?'on':''} to="/cityList?type=1&returl=">国际港澳台</Link>
							</div>
						</header>
						<div className="citySearch">
							<div className="citySearch_inner">
								<span>输入城市名或拼音查询</span>
							</div>
						</div>
						<p className="noPosition">无法获取您的定位</p>
						<div className="hotCityList">
							<div className="areaListTitle">热门城市</div>
							<ul className="areaList">
								<li>
									<Link to="/北京">北京</Link>
								</li>
								<li>
									<Link to="/成都">成都</Link>
								</li>
								<li>
									<Link to="/重庆">重庆</Link>
								</li>
								<li>
									<Link to="/广州">广州</Link>
								</li>
								<li>
									<Link to="/杭州">杭州</Link>
								</li>
								<li>
									<Link to="/南京">南京</Link>
								</li>
								<li>
									<Link to="/上海">上海</Link>
								</li>
								<li>
									<Link to="/深圳">深圳</Link>
								</li>
								<li>
									<Link to="/苏州">苏州</Link>
								</li>
								<li>
									<Link to="/天津">天津</Link>
								</li>
								<li>
									<Link to="/武汉">武汉</Link>
								</li>
								<li>
									<Link to="/西安">西安</Link>
								</li>
							</ul>
						</div>
						<div className="moreArea">
							<div className="areaListTitle">更多城市</div>
							<ul className="areaList">
								{
									k.map((Item,index)=>{
										return (
												<li key={index}>
													<a onClick={()=>this.scrollToAnchor({Item})}>
														{Item}
													</a>
												</li>
										)
									})
								}
							</ul>
						</div>
						
						{
							k.map((Item1,index)=>{
								return(
									<div id={Item1} key={index}>
										<div className="areaListTitle">{Item1}</div>
										<ul className="areaList">
										{	cityList[Item1].length>20?
											cityList[Item1].slice(0,20).map((Item,index)=>{
												return (
													<li key={index}>
														<Link to={"/"+Item}>{Item}</Link>
													</li>
												)
											})
											:
											cityList[Item1].map((Item,index)=>{
												return (
													<li key={index}>
														<Link to={"/"+Item}>{Item}</Link>
													</li>
												)
											})
										}
										<li>
											<Link onClick={this.Update.bind(this)} to={"/cityList?c="+Item1+"&type="+type}>更多</Link>
										</li>
										</ul>	
									</div>
								)
								
							})
						}
					</div>
				}
				<IndexFooter bg={'#fff'} />
			</div>
		)
	}
}

export default CityList