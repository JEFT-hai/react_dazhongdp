import React ,{ Component } from 'react'

import './iconList.css'

class IconItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Data:""
		}
	}
	// get defaultprops(){
	// 	return {
	// 		key:''
	// 	}
	// }
	componentWillMount(){
		fetch("/api/"+this.props.keyWord,{methods:'GET'})
		.then(response => response.json())
		.then(json=>{this.setState({Data:json.data});})
	}

	render(){
		const {Data} = this.state;
		const Item = 
		Data.length
		?
		Data.map((ListItem,index)=>{
			return (
				<a href={ListItem.Fix_page_item_href} className="icon_item" key={index}>
					<img src={ListItem.item_icon_src} alt="" />
					<span>{ListItem.属性0}</span>
				</a>
				)
		})
		:
		''

		return (
			<div className="icon_list">
				{Item}
			</div>
		)
		
	}
}

export default IconItem