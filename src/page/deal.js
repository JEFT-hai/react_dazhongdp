import React from 'react';
import HeaderTab from '../component/headerTab/HeaderTab.js'
import MSlider from '../component/m_slider/m_slider.js'

import Star from '../component/star/star.js'
import Footer from '../component/footer/footer.js'
import Down from '../component/download/downLoad.js'

// import fetchJsonp from 'fetch-jsonp'

class Deal extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:'',
			Img:[{src:'https://p0.meituan.net/deal/760bc62f2df176b4966a72dfdba399f721121.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'},{src:'https://p1.meituan.net/deal/87ca42efc65381b306d04a93f580a3e418146.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'},
			{src:'https://p0.meituan.net/deal/760bc62f2df176b4966a72dfdba399f721121.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'}]
		}
	}

	componentWillMount(){
		window.scrollTo(0,0)
		var id = this.props.match.params.id;
		id = 2/id? 2: 1;
		fetch('/api/tuan/',
			{method: 'GET'})
			.then(response => response.json())
			.then(json => {this.setState({data:json.tuan[id]});})
		// fetchJsonp('http://m.dianping.com/tuan/ajax/dealShop?dealGroupId='+this.props.match.params.id+'&lat=&lng=&userCityId=7')
		// .then(response=>response.json())
		// .then(json => console.log(json))
	}

	render(){
		return (
			<div className="deal">
				<HeaderTab />
				<div className="Img_slider">
					<MSlider indicator={false} Img={this.state.Img} Index={true} />
					<div className="Info">
						<p className="dealTitle">{this.state.data.shopName}</p>
						<p className="dealContent">活动内容</p>
					</div>
				</div>
				<div className="costList">
					<div className="cost">
						<i className="price">¥</i>
						<ins>9.9</ins>
						<del>¥20</del>
						<div className="buy">
							立即购买
						</div>
					</div>
					<ul className="advantage">
						<li><i className="ok"></i><span>随时可退</span></li>
						<li><i className="time"></i><span>过期自动退</span></li>
					</ul>
				</div>
				<div className="shop">
					<div className="headTitle suit border-1px">适用商户({this.state.data.totalShopNum})</div>
					<div className="shopList border-1px">
						<div className="shopList_left">
							<h3>{this.state.data.shopName}</h3>
							<p>
								<Star score={this.state.data.shopPower*2+'%'} />
								<span>{this.state.data.distance}</span>
							</p>
						</div>
						<div className="shopList_right">
							<i></i>
						</div>
					</div>
					<div className="address">
						<i></i>
						{this.state.data.address}
					</div>
				</div>
				<div className="dealDetail ">
					<div className="headTitle border-1px">团购详情<i></i></div>
					<div className="dealTitle border-1px">正餐</div>
					<div className="dealList border-1px">
						<ul className="deal_content">
							<li className='border-1px'>
								<span className="ItemName">香辣鸡腿堡</span>
								<span className="count_price">
									<span>1份</span>
									<span>9元</span>
								</span>
							</li>
							<li className='border-1px'>
								<span className="ItemName">鸡米花</span>
								<span className="count_price">
									<span>1份</span>
									<span>6元</span>
								</span>
							</li>
							<li className='border-1px'>
								<span className="ItemName">中可一杯</span>
								<span className="count_price">
									<span>1份</span>
									<span>5元</span>
								</span>
							</li>
						</ul>
						<div className="border-1px allPrice">
							<span className="right allPriceRight">
								<span>最高价值</span>
								<span>20元</span>
							</span>
						</div>
						<div className="border-1px dealPrice">
							<span className="right dealPriceRight">
								<span>团购价</span>
								<span>9.9元</span>
							</span>
						</div>
					</div>
					<div className="deal_more">更多图文详情<span>(建议Wifi环境下打开,土豪随意)</span><i className="more"></i></div>
				</div>
				<div className="buyKnow">
					<div className="headTitle border-1px">购买须知<i></i></div>
					<ul className="knowList">
						<li>
							<p className="title">有效期</p>
							<p className="listItem">2016-05-03至2018-03-29</p>
						</li>
						<li>
							<p className="title">除外日期</p>
							<p className="listItem">2018年2月13日至2018年2月20日</p>
						</li>
						<li>
							<p className="title">使用时间</p>
							<p className="listItem">使用时间：09:00-次日00:00</p>
						</li>
						<li>
							<p className="title">预约提醒</p>
							<p className="listItem">无需预约，消费高峰时可能需要等位</p>
						</li>
						<li>
							<p className="title">规则提醒</p>
							<p className="listItem">每人最多购买10</p>
							<p className="listItem">每张团购券建议1人使用</p>
						</li>
						<li>
							<p className="title">其他费用</p>
							<p className="listItem">不提供餐巾纸</p>
						</li>
						<li>
							<p className="title">堂食外带</p>
							<p className="listItem">仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家</p>
						</li>
						<li>
							<p className="title">温馨提示</p>
							<p className="listItem">团购用户不可同时享受商家其他优惠</p>
							<p className="listItem">酒水饮料等问题，请致电商家咨询，以商家反馈为准</p>
						</li>
						<li>
							<p className="title">商家服务</p>
							<p className="listItem">提供免费WiFi</p>
						</li>
					</ul>
				</div>
				<div className="buy_now">立即购买</div>
				<div className="other_deal">
					<h3>其他团购</h3>
					<div className="price">
						<ins>¥24.8</ins>
						<del>¥38</del>
						<span>双人套餐A</span>
					</div>
				</div>
				<div className="similar">
					<h3>看了此团购得人也看了</h3>
					<ul className="similar_list">
						<li>
							<figure>
								<img alt="" src="https://p0.meituan.net/deal/37378c70552416191e36bcf7a32f354d110506.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" />
							</figure>
							<div className="similar_item_Info">
								<p className="Info_title">
									五谷鱼粉
								</p>
								<div className="price">
									<ins>¥11.7</ins>
									<del>¥13</del>
								</div>
							</div>
						</li>
						<li>
							<figure>
								<img alt="" src="https://p0.meituan.net/deal/3c79ec297e5646880227106f4ac78d1d53672.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" />
							</figure>
							<div className="similar_item_Info">
								<p className="Info_title">
									名气寿司
								</p>
								<div className="price">
									<ins>¥16.8</ins>
									<del>¥33</del>
								</div>
							</div>
						</li>
						<li>
							<figure>
								<img alt="" src="https://p0.meituan.net/deal/ce3a0f386ee206c7852a1381f563646a34022.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" />
							</figure>
							<div className="similar_item_Info">
								<p className="Info_title">
									蒸的好海鲜馆
								</p>
								<div className="price">
									<ins>¥85</ins>
									<del>¥100</del>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<Footer />
				<Down />
			</div>
		)
	}
} 

export default Deal