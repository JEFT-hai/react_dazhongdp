import React from 'react'

import './style.css'

class Star extends React.Component{
	constructor(){
		super()
		this.state ={

		}
	}

	static defaultProps = {
		score:'10%'
	}

	render(){
		return (
			<span className="star_pic">
				<i style={{width:this.props.score}}></i>
			</span>
		)
	}
}

export default Star