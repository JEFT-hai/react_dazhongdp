import React ,{Component} from 'react'

import './hScroll.css'

var timer;
class HScroll extends Component {
	constructor(){
		super()
		this.state = {
			data:'',
			index:0		}
	}
	componentWillMount(){
		fetch('/api/hScroll',{method:'GET'})
		.then(response => response.json())
		.then(json => {this.setState({ data:json.hScroll.headlines });})

		this.hS()
	}
	hS(){
		timer = setInterval(()=>{
			this.refs.hScroll.classList.remove('move'+this.state.index)
			if(this.state.index >= 3){
				this.setState({
					index:0
				})
			}else{
				this.setState({
					index:this.state.index+1
				})
				this.refs.hScroll.classList.add('move'+this.state.index)
			}
			
			
		},3500)
	}
	componentWillUnmount(){
		clearInterval(timer)
	}
	render(){
		const {data} = this.state
		const ListItem = 
			  		data.length
			  		?
			  		this.state.data.slice(0,4).map((Item,index)=>{
			  			return (
			  				<li className="s_Item" key={index}>
			  					<a href={Item.url} >
				  					<div className="s_title">{Item.title}</div>
				  					<div className="s_pic">
				  						<img src={Item.headPic} alt='' />
				  						<span className="p_count">{Item.picCount}</span>
				  					</div>
				  				</a>
			  				</li>
			  				)
			  		})
			  		:
			  		''
		return (
			<div className="hScroll">
				<div className="headerTitle">
				</div>
				<ul className="hScroll_inner" ref="hScroll">
					{ListItem}
				</ul>
			</div>
		)
	}
}

export default HScroll