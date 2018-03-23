import React from 'react';
import './style.css';

import ReactPullLoad,{ STATS } from 'react-pullload';
import '../../../node_modules/react-pullload/dist/ReactPullLoad.css';

import {Link} from 'react-router-dom';

class LikeList extends React.Component{
	constructor(){
		super()
		this.state = {
			line1:'',
			line2:'',
			prefer:'',
			guessLike:[],
			adConfig:'',

			hasMore: true,
	        action: STATS.init,
	        index: 1,
	        guesslike_more:[]
		}
	}


	componentWillMount(){
		fetch('/api/line1',{method:'GET'})
		.then(response => response.json())
		.then(json => {this.setState({prefer:json.line1.data.moduleInfoList[2].moduleData.data.preferenceValueHuiVos,
			guessLike:json.line1.data.moduleInfoList[4].moduleData.data.guessYouVoList,
			adConfig:json.line1.data.moduleInfoList[4].moduleData.data.adConfig});
		})

		fetch('/api/line2',{method:'GET'})
		.then(response => response.json())
		.then(json => {this.setState({line2:json.line2.data.moduleInfoList[1].moduleData.data.list});})
	}

	handleAction = (action) => {
	    console.info(action, this.state.action,action === this.state.action);
	    //new action must do not equel to old action
	    if(action === this.state.action){
	      return false
	    }
	 
	    if(action === STATS.loading){
	    	
	      this.handLoadMore();
	    } else{
	      //DO NOT modify below code
	      this.setState({
	        action: action
	      })
	    }
	  }
	 
	  // handRefreshing = () =>{
	  // 	var guessLike = this.state.guessLike;
	  //   if(STATS.refreshing === this.state.action){
	  //     return false
	  //   }
	 
	  //   setTimeout(()=>{
	  //     //refreshing complete
	  //     this.setState({
	  //       data: guessLike,
	  //       hasMore: true,
	  //       action: STATS.refreshed,
	  //       index: 3
	        
	  //     });
	  //   }, 3000)
	 
	  //   this.setState({
	  //     action: STATS.refreshing
	  //   })
	  // }
	 
	  handLoadMore = () => {
	    if(STATS.loading === this.state.action){
	      return false
	    }
	    //无更多内容则不执行后面逻辑
	    if(!this.state.hasMore){
	      return;
	    }

	    fetch('/api/line3',{method:'GET'})
	    .then(response => response.json())
	    .then(json => {this.setState({guesslike_more:json.line3.data.moduleInfoList[0].moduleData.data.guessYouVoList});})
	 
	    setTimeout(()=>{
	      if(this.state.index === 0){
	        this.setState({
	          action: STATS.reset,
	          hasMore: false
	        });
	      } else{
	        this.setState({
	          guessLike: [...this.state.guessLike, ...this.state.guesslike_more],
	          action: STATS.reset,
	          index: this.state.index - 1
	        });
	      }
	    }, 2000)
	 
	    this.setState({
	      action: STATS.loading
	    })
	  }

	render(){

		const {
		      hasMore
		    } = this.state;
		 
		    // const fixHeaderStyle = {
		    //   position: "fixed",
		    //   width: "100%",
		    //   height: "50px",
		    //   color: "#fff",
		    //   lineHeight: "50px",
		    //   backgroundColor: "#e24f37",
		    //   left: 0,
		    //   top: 0,
		    //   textAlign: "center",
		    //   zIndex: 1
		    // }

		const {line2} = this.state;
		const {prefer} = this.state;
		const {guessLike} = this.state;
		const {adConfig} = this.state;

		const adItem = adConfig.length?
						adConfig.map((Item,index)=>{
							return (
								<div className="adItem" key={index}>
									<div className="ad_content">
										<p className="title">{Item.adTitle}</p>
										<p className="subTitle">{Item.adSubTitle}</p>
										<p className="btn" style={{backgroundColor:Item.btnBkgColor,color:Item.btnTxtColor}}>{Item.btnText}</p>
									</div>
									<div className="ad_container">
										<img src={Item.thumb} alt="" />
									</div>
								</div>
							)
						})
						:
						'';
		const line2_item = 
				line2.length?
				line2.slice(0,2).map((Item,index)=>{
					return (
						<div className={index===0?'line2_item line2_item1':'line2_item'} key={index}>
							<a className="line2_item_link" href={Item.link}>
								<p className="adTitle">{Item.adTitle}</p>
								<p className="adSubTitle">{Item.adSubTitle}</p>
								<img src={Item.thumb} alt="" />
							</a>
						</div>
					)
				})
				:
				'';
		const prefer_item = 
		        prefer.length?
		        prefer.map((Item,index)=>{
		        	return (
		        		<div className="prefer_content_item" key={index}>
		        			<figure><img src={Item.imageUrl} alt="" /></figure>
		        			<figcaption>{Item.shortTitle}</figcaption>
		        			<div className="price">
		        				<ins className="curPrice"><i>¥</i>{Math.floor(Item.price)}</ins>
		        				<del className="oldPrice">{'¥'+Item.markPrice}</del>
		        			</div>
		        		</div>
		        	)
		        })
		        :
		        '';

		const guessLike_item1 = 
				guessLike.length?
				guessLike.slice(0,3).map((Item,index)=>{
					return (
						<div key={index}>
						<Link to={'/deal/'+Item.dealgroupid} className="like_shop" >
							<figure>
								<img src={Item.defaultPic} alt='' />
								<span className="shopTig">{Item.needpromocall?'免预约':''}</span>
							</figure>
							<div className="shop_content">
								<h3 className="shop_name">{Item.shopName}</h3>
								<p className="dealTitle">{Item.dealGroupTitle}</p>
								<p className="price">
									<span>
										<ins className="dealgroupPrice"><i>¥</i>{Math.floor(Item.dealgroupPrice)}</ins>
										<del className="marketPrice"><i>¥</i>{Item.marketPrice}</del>
									</span>
									<span className="salesdesc">{Item.salesdesc}</span>
								</p>
							</div>
						</Link>
						</div>
					)
				})
				:
				'';

		const guessLike_item2 = 
				guessLike.length?
				guessLike.slice(3).map((Item,index)=>{
					return (
						<Link key={index} to={'/deal/'+Item.dealgroupid} className="like_shop" >
							<figure>
								<img src={Item.defaultPic} alt='' />
								<span className="shopTig">{Item.needpromocall?'免预约':''}</span>
							</figure>
							<div className="shop_content">
								<h3 className="shop_name">{Item.shopName}</h3>
								<p className="dealTitle">{Item.dealGroupTitle}</p>
								<p className="price">
									<span>
										<ins className="dealgroupPrice"><i>¥</i>{Math.floor(Item.dealgroupPrice)}</ins>
										<del className="marketPrice"><i>¥</i>{Item.marketPrice}</del>
									</span>
									<span className="salesdesc">{Item.salesdesc}</span>
								</p>
							</div>
						</Link>
					)
				})
				:
				'';
		return (	
					<div>  
						<div className="line2">
							<div className="bg_line"></div>
							{line2_item}
						</div>
						<div className="prefer">
							<div className="bg_line"></div>
							<div className="prefer_inner">
								<a className="prefer_head">
									<span className="prefer_head_title"></span>
									<span className="prefer_head_more">更多优惠<i className="more"></i></span>
								</a>
								<div className="prefer_content">
									{prefer_item}
								</div>
							</div>
							
						</div>
					<ReactPullLoad 
					          downEnough={150}
					          action={this.state.action}
					          handleAction={this.handleAction}
					          hasMore={hasMore}
					          distanceBottom={1000}>
						<div className="guessLike">
							<div className="bg_line"></div>
							<div className="like_head">
								猜你喜欢
							</div>
							<div className="like_content">
								{guessLike_item1}
							</div>
							<div className="ad">
								{adItem}
							</div>
							<div className="like_content">
								{guessLike_item2}
							</div>
						</div>
					
					</ReactPullLoad>
			</div>
		)
	}
}

export default LikeList
