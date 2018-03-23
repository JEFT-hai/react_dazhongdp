import React ,{Component} from 'react'
import IconItem from '../../component/iconList/iconItem.js'
import './m_slider.css'

class m_slider extends Component {
	constructor(props){
		super(props)
		this.state = {
			sliderNum:3,
			sliderWidth:'',
			curIndex:0,
			start:0,
			end:0,
			move:0,
			transTime:300,
			startTime:'',
			endTime:''
		}
	}
	static defaultProps = {
		indicator:true,
		IconItem:false
	}
	componentWillMount(){
		if(this.props.Img){
			var len = this.props.Img.length
			this.setState({
				sliderNum:len
			})
		}
		this.setState({
			sliderWidth:document.body.clientWidth
		})
	}
	scrollStart(e){
		this.setState({
			start:e.changedTouches[0].clientX,
			startTime:new Date()
		})
	}
	scrollMove(e){
		this.setState({
			move:this.state.end+e.changedTouches[0].clientX - this.state.start,
			transTime:0
		})		
	}
	scrollEnd(e){
		this.setState({
			transTime:300
		})

		if(new Date() - this.state.startTime < 200){
			if(e.changedTouches[0].clientX - this.state.start > 0 && this.state.curIndex !== 0){
				this.setState({
					curIndex:this.state.curIndex -1,
					move:-this.state.sliderWidth*(this.state.curIndex-1),
					end:-this.state.sliderWidth*(this.state.curIndex-1),
				})

			}else if(e.changedTouches[0].clientX - this.state.start < 0 && this.state.curIndex !== this.state.sliderNum-1){
				this.setState({
					curIndex:this.state.curIndex +1,
					move:-this.state.sliderWidth*(this.state.curIndex+1),
					end:-this.state.sliderWidth*(this.state.curIndex+1),
				})
			}
			if(this.state.move > 0 ){
				this.setState({
					move:0,
					end:0,
					curIndex:0
				})
			}else if(this.state.move < -this.state.sliderWidth*(this.state.sliderNum-1)){
				this.setState({
					move:-this.state.sliderWidth*(this.state.sliderNum-1),
					end:-this.state.sliderWidth*(this.state.sliderNum-1),
					curIndex:this.state.sliderNum-1
				})
			}
		}else{
			if(this.state.move > 0 ){
				this.setState({
					move:0,
					end:0,
					curIndex:0
				})
			}else if(this.state.move < -this.state.sliderWidth*(this.state.sliderNum-1)){
				this.setState({
					move:-this.state.sliderWidth*(this.state.sliderNum-1),
					end:-this.state.sliderWidth*(this.state.sliderNum-1),
					curIndex:this.state.sliderNum-1
				})
			}else{
				this.setState({
					curIndex:Math.round(-this.state.move/this.state.sliderWidth),
					end:-this.state.sliderWidth*Math.round(-this.state.move/this.state.sliderWidth),
					move:-this.state.sliderWidth*Math.round(-this.state.move/this.state.sliderWidth)
				})
			}
		}
		
		
		this.setState({
			start:''
		})
		
	}

	componentDidMount(){
		if(this.state.move > 0){
			this.setState({
				move:0,
				end:0
			})
		}
	}
	render(){

		if(this.props.IconItem){
		  var	sliderList = 
		  	<div  onTouchStart={this.scrollStart.bind(this)} onTouchEnd={this.scrollEnd.bind(this)} onTouchMove={this.scrollMove.bind(this)} style={{width:this.state.sliderWidth*this.state.sliderNum,transform:'translate3d('+this.state.move+'px,0,0)',transitionDuration: this.state.transTime +'ms'}} ref="slider_content" className="slider_content">
				<div style={{width:this.state.sliderWidth}}  className="slider_item">
					<IconItem  keyWord="list1" />
				</div>
				<div style={{width:this.state.sliderWidth}} className="slider_item">
					<IconItem  keyWord="list2" />
				</div>
				<div style={{width:this.state.sliderWidth}} className="slider_item">
					<IconItem  keyWord="list3" />
				</div>
			</div>
		}

		if(this.props.Index){
			var Index = 
				<div className="Index">
					<span className="nowIndex">{this.state.curIndex +1}</span>
					/{this.props.Img.length}
				</div>
		}

		if(this.props.Img){
			  var	sliderImgList = 
			  	<div  onTouchStart={this.scrollStart.bind(this)} onTouchEnd={this.scrollEnd.bind(this)} onTouchMove={this.scrollMove.bind(this)} style={{width:this.state.sliderWidth*this.props.Img.length,transform:'translate3d('+this.state.move+'px,0,0)',transitionDuration: this.state.transTime +'ms'}} ref="slider_content" className="slider_content">
			  		{this.props.Img.map((Item,index)=>{
			  				return (
			  					  			<div key={index} style={{width:this.state.sliderWidth}}  className="slider_item">
			  									<img className="cover" src={Item.src} alt="" />
			  								</div>
			  					
			  					)
			  					  		})}
					
				</div>
		}
		return (
			<div className="slider" style={{width:this.state.sliderWidth,paddingBottom:this.props.indicator?20:0}}>
					{sliderList}
					{sliderImgList}
					{Index}
				{
					this.props.indicator
					?
					<div className="indicators">
						<i className={ this.state.curIndex === 0?'active slider_indicator':'slider_indicator'} ></i>
						<i className={ this.state.curIndex === 1?'active slider_indicator':'slider_indicator'}></i>
						<i className={ this.state.curIndex === 2?'active slider_indicator':'slider_indicator'}></i>
					</div>
					:''
				}
				
			</div>
		)
	}
}

export default m_slider