import React from 'react'

import Header from '../component/header';
import Top from '../component/top';
import HScroll from '../component/hScroll/hScroll.js';
import MSlider from '../component/m_slider/m_slider.js';
import LikeLink from '../component/likeList/likeList.js';

import IndexFooter from '../component/footer/indexFooter.js'

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentWillMount(){
		window.scrollTo(0,0)
		this.setState({
			city:this.props.location.pathname.slice(1)
		})
	}

	render(){

		return (
			<div>
				<Header city={this.state.city} />
				<Top />
				<MSlider IconItem={true} />
				<HScroll />
				<LikeLink />
				<IndexFooter />
			</div>
		)
	}
}

export default Home
