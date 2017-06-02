<template>
	<div id="kbtShow">
		<div class="swiper-container">			
			<div class="kbtshow-Page">
				<div id="News" :class="{kbtshow_page_color: swiperBaclk1}">News & Events</div><!--
				--><span>/</span><!--
				--><div id="Feadture" :class="{kbtshow_page_color: swiperBaclk2}">Feature Products</div>
			</div>
	    	<div class="swiper-wrapper">
	        	<div class="swiper-slide">
	        		<div class="kbtshow-homeNews">
	        			<div v-for="(item, index) in mode" :key="item" :class="{kbtshowBg: item.kbtshowBg}">
	        				<div class="kbtshow-news">
			        			<div class="kbtshow-text">
			        				<h1>{{item.title}}</h1>
			        			 	<h6>{{item.time}}</h6>
			        				<p>{{item.description}}</p>
			        			</div>
			        			<div class="kbtshow-img">
			        				<img :src="item.urlimg" />
			        			</div>
			        			<div style="clear:both"></div>
	        				</div>
	        			</div>
	        			<a class="kbtshowUrl">Load more News</a>
	        		</div>
	        	</div>
	        	<div class="swiper-slide">
	        		<div class="kbtshow-products">
	        			<div class="kbtshow-products-Featured">
	        				<img :src="kbtshow_products.sell.URLImg" />
	        				<div class="Featured-description">
	        					<h1>{{kbtshow_products.sell.title}}</h1>
	        					<p>
	        						{{kbtshow_products.sell.description}}
	        					</p>	        					
	        					<a class="sellLoaction">more</a>
	        					<div class="clear"></div>
	        				</div>
	        			</div>
	        			<ul class="kbtshow-products-sell">
	        				<li v-for="(item, index) in kbtshow_products.ProductsList" :key="item.name" :class="{kbtshow_sellStyle: item.sellStyel}">
	        					<h1>{{item.name}}</h1>
	        					<img :src="item.productsImg" />
	        				</li>
	        			</ul>
	        			<a class="kbtshowUrl">Load more products</a>
	        		</div>
	        	</div>
	    	</div>
			
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
  export default{
    data () {
      return {
        mode: [
          {title: 'Cobetter Sterilizing Grade Filter Cartridges DMF Acknowledged by the FDA', time: new Date(), description: 'Cobetter Sterilizing Grade Filter Cartridges are now listed in DMF (Class II DMF Number 031365) which means that they comply with U.S. FDA requirements with the potential to help pharmaceutical customers with New Drug Applications.', urlimg: './static/img/kbtshow-02.png', kbtshowBg: '123'},
          {title: 'Cobetter 2nm HAPES Filter Improves Semiconductor Fabrication Yield', time: new Date(), description: '14nm nodes required the complete removal of external contaminants during the cleaning process to preserve chip quality.  As the first filtration company in China to manufacture this type of filter, our customers improve their Clean Process efficiencies which results in increased fabrication yields and reduced chemical usage.', urlimg: './static/img/kbtshow-01.png'}
        ],
        kbtshow_products: {
          sell: {
            title: 'Activated Carbon CSD-C Lenticular Filter Series',
            description: 'Cobetter CSD-C® Lenticular Filter Series adds activated carbon to the wood fiber.  It is suitable for industries that need',
            URLImg: '../static/img/productsListBan.png'
          },
          ProductsList: [
            {name: 'High Flow Filter Cartridge', productsImg: '../static/img/productsList01.png'},
            {name: 'High Flow Filter Cartridge', productsImg: '../static/img/productsList02.png'},
            {name: 'H-FRP Housing', productsImg: '../static/img/productsList03.png', sellStyel: true},
            {name: 'H-FRP Housing', productsImg: '../static/img/productsList04.png', sellStyel: true},
            {name: 'High Flow Filter Cartridge', productsImg: '../static/img/productsList05.png'},
            {name: 'High Flow Filter Cartridge', productsImg: '../static/img/productsList06.png'}
          ]
        },
        swiperBaclk1: true,
        swiperBaclk2: false
      }
    },
    mounted () {
      var mySwiper2 = new Swiper('.swiper-container', {
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        width: window.innerWidth,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        runCallbacks: true,
        onTouchEnd: function () {
          if (mySwiper2[1].activeIndex === 1) {
            saveVue._data.swiperBaclk1 = false
            saveVue._data.swiperBaclk2 = true
          } else if (mySwiper2[1].activeIndex === 2) {
            saveVue._data.swiperBaclk1 = true
            saveVue._data.swiperBaclk2 = false
          }
        }
      })
      var saveVue = this
    }
  }
</script>

<style>
.kbtshow-homeNews{
	padding:0 .29rem;
}
.kbtshow-news{
	padding:.2rem .2rem;
}
.kbtshow-products{
	padding:0 .29rem;
}
.kbtshow-news .kbtshow-text{
	float:left;	
	width:4.59rem;
	margin-right: .18rem;
	word-wrap: break-word;
}
.kbtshow-news .kbtshow-text h1{
	font-family: arial;
	color:#1a4899;
	font-size:.28rem;
	line-height:.34rem;
	font-weight: 600;
	word-wrap: break-word;
}
.kbtshow-news .kbtshow-text h6{
	font-size:.16rem;
	line-height:.34rem;
	color:#b8b8b8;
	font-weight:normal;
	word-wrap: break-word;
}
.kbtshow-news .kbtshow-text p{
	margin-top:.08rem;
	font-family:arial;
	font-size:.16rem;
	line-height:.3rem;
	color:#3e3e3e;
	margin-bottom:.08rem;
	word-wrap: break-word;
}
.kbtshow-news .kbtshow-img{
	float:left;
	width:1.72rem;
}
.kbtshowUrl{
	display:inline-block;
	padding:0 .12rem;
	background:#1a4899;
	font:.2rem/.3rem arial;
	color:#fff;
	float:right;
	border:1px #ccc solid;
	margin-top:8px;
}
.kbtshowBg{
	background:#f8f8f8;
	border-bottom:2px #f2f2f2 solid;
}
.kbtshow-products-Featured{
	border:1px #e4e4e4 solid;
}
.kbtshow-products-Featured>img{
	width:100%;
	height:2.19rem;
}
.Featured-description{
	background:#f3f3f3;
	padding:.19rem .16rem .14rem;
}
.kbtshow-products-Featured .Featured-description h1{
	font-family: arial;
	color:#5570ca;
	line-height:.4rem;
	font-size:.28rem;
	word-wrap: break-word;
}
.kbtshow-products-Featured .Featured-description p{	
	font-family: arial;
	font-size:.16rem;
	line-height:.28rem;
	color:#464444;
	word-wrap: break-word;
}
/*多行文本省略*/
.kbtshow-products-Featured .Featured-description p::after{
	content:"...";
    font-weight:bold;
}
.Featured-description .sellLoaction{
	float:right;
	font: .16rem/.20rem arial;
	color:#464444;
	border-bottom:1px #464444 solid;
}
/*宣传产品列表*/
.kbtshow-products-sell li{
	width:3.14rem;
	float:left;
	padding:.11rem 0.16rem;
	border-bottom: 1px #e4e4e4 solid;
}
.kbtshow-products-sell li h1{
	width:1.62rem;
	word-wrap: break-word;
	font: 600 .24rem/.3rem arial;
	color:#5570ca;
	float:left;
}
.kbtshow-products-sell li img{
	width:1.25rem;
	height:1.25rem;
	float:right;
}
.kbtshow-products-sell li.kbtshow_sellStyle{
	background:#f3f3f3;
}
/*分业按钮修改*/
#kbtShow .swiper-container{
	padding-bottom:.80rem;
}
#kbtShow .swiper-pagination-bullet{
	width:1.03rem;
	height:.12rem;
	border-radius: 10px;
}
.kbtshow-Page{
	margin-left:.48rem;
	height:1rem;
	line-height: .5rem;
}
.kbtshow-Page div,span{
	display: inline-block;
	font:.28rem/.3rem arial;
	color:#bfbfbf;	
}
.kbtshow-Page span{
	padding:0 .08rem;
}
#kbtShow .kbtshow_page_color{
	color:#000
}
</style>
