<template>
	<div id="kbt-news">
		<div class="kbtNews-pageButton">
			<div class="kbtNews-nextButton" :class="{buttonColor:pageButton}" v-on:click="kbtButton()">Company News 丨 </div><div class="kbtNews-prevButton" :class="{buttonColor:!pageButton}" v-on:click="kbtButton()">Trade Show Event</div>
		</div>
		<div class="kbtNews-banner">
			<img src="/static/img/News_banner.png" />
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
	        	<div class="swiper-slide">
	        		<ul class="kbtNews-ul">
	        			<!--<li class="kbtNewsList">
	        				<div class="kbtNews-list-Icon" @click="kbtNewsLink(1)">
	        					<img src="/static/img/News-list01.png"/>
	        				</div><!--
	        				--><!--<div class="kbtNews-listInformation">
	        					<h3 class="kbtNews-list-titel" @click="kbtNewsLink(1)">Cobetter Sterilizing Grade Filter Cartridges DMF Acknowledged by the FDA</h3>
	        					<h6 class="kbtNews-list-author">Pharmaceutiacl</h6>
	        					<span class="kbtNews-list-timer">2017-06-20</span>
	        				</div>
	        			</li>-->
	        			<li class="kbtNewsList" v-for="(list, index) in newsTitle" :key="list.id">
	        				<div class="kbtNews-list-Icon" @click="kbtNewsLink(1)">
	        					<img :src="list.suoLueTu"/>
	        				</div><!--
	        				--><div class="kbtNews-listInformation">
	        					<h3 class="kbtNews-list-titel" @click="kbtNewsLink(1)">{{list.commonName}}</h3>
	        					<h6 class="kbtNews-list-author">{{list.zuoZhe}}</h6>
	        					<span class="kbtNews-list-timer">{{list.xinWenShiJian}}</span>
	        				</div>
	        			</li>
	        		</ul>
	        	</div>
	        	<div class="swiper-slide">
	        		<div class="kbtNewsTrade-title">
	        			<p>Date</p><p>Event</p><p>Location</p>
	        		</div>
	        		<ul class="kbtNewsTrade-address">
	        			<li><!--
	        				--><p class="kbtNewsTrade-timer">Oct 24-26th, 2017</p><!--
	        				--><div class="kbtNewsTrade-address-description"><!--
	        					--><h6>CPhl Germany 2017</h6><!--
	        					--><p>The World’s Leading Pharmacetical Platform</p><!--
	        				--></div><!--
	        				--><h5>Frankfurt, Germany 40J72</h5><!--
	        			--></li><!--
	        			--><li><!--
	        				--><p class="kbtNewsTrade-timer">Oct 15-20th, 2017</p><!--
	        				--><div class="kbtNewsTrade-address-description">
	        					<h6>IDA World Congress 2017</h6>
	        					<p>DA World Congress 2017</p>
	        				</div><!--
	        				--><h5>San Paulo, Brazil Booth 112</h5><!--
	        			--></li>
	        			<li>
	        				<p class="kbtNewsTrade-timer">Sep 11-15th, 2017</p><!--
	        				--><div class="kbtNewsTrade-address-description">
	        					<h6>CPhl Germany 2017</h6>
	        					<p>The World’s Leading Pharmacetical Platform</p>
	        				</div><!--
	        				--><h5>Frankfurt, Germany 40J72</h5><!--
	        			--></li>
	        			<li>
	        				<p class="kbtNewsTrade-timer">Jul 11-13th, 2017</p><!--
	        				--><div class="kbtNewsTrade-address-description">
	        					<h6>Semicon West 2017</h6>
	        					<p>World’s Leading Exhibition for the Semiconductor Industry</p>
	        				</div><!--
	        				--><h5>Moscon Center,San Francisico, USA West Hall 7519</h5>
	        			</li>
	        			<li>
	        				<p class="kbtNewsTrade-timer">Apr 11-13th, 2017</p><!--
	        				--><div class="kbtNewsTrade-address-description">
	        					<h6>Craft Brewers Conferene & BrewExpo American 2017</h6>
	        					<p>A Passionate Voice for Craft Brewers</p>
	        				</div><!--
	        				--><h5>Washington, D.C Booth 6116</h5>
	        			</li>	        			
	        		</ul>
	        	</div>
	       </div>
		</div>
	</div>
</template>

<script>
  export default{
    data () {
      return {
        pageButton: true,
        newsTitle: {}
      }
    },
    created () {
      var url = this.HOST
      this.axios.get('http://www.test.com:8181/news').then((response) => {
        if (response.data) {
          this.newsTitle = response.data
        }
      })
    },
    methods: {
      kbtButton: function () {
        this.$data.pageButton = !this.$data.pageButton
      },
      kbtNewsLink: function (newsUrlID) {
        this.$router.push({path: 'newsList', query: {NewsId: newsUrlID}})
      }
    },
    mounted () {
      var mySwiper3 = new Swiper('.swiper-container', {
        notNextTick: true,
        direction: 'horizontal',
        loop: true,
        width: window.innerWidth,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        runCallbacks: true,
        nextButton: '.kbtNews-nextButton',
        prevButton: '.kbtNews-prevButton',
        onTouchEnd: function () {
          if (mySwiper3.activeIndex === 1) {
            newsData.$data.pageButton = false
          } else if (mySwiper3.activeIndex === 2) {
            newsData.$data.pageButton = true
          }
        }
      })
      var newsData = this
    }
  }
</script>

<style>
	#kbt-news{
		padding:.46rem .32rem;
	}
	.kbtNews-nextButton,.kbtNews-prevButton{
		display:inline-block;
		font: .24rem/.28rem arial;
		color:#848484;
	}
	.kbtNews-banner{
		width:6.52rem;
		height:2.6rem;
		border:1px #cfcfcf solid;
		margin-bottom: 10px;
	}
	.kbtNews-banner img{
		width:100%;
		height:100%;
	}
	.kbtNewsList{
		margin:.2rem 0;
	}
	.kbtNews-list-Icon{
		width:1.75rem;
		height:1.22rem;
		border:1px #999 solid;
		display: inline-block;
		vertical-align:top;
	}
	.kbtNews-list-Icon img{
		width:100%;
		height:100%;
	}
	.kbtNews-pageButton{
		font-size:0px;
		margin-bottom:.1rem;
	}
	.kbtNews-listInformation{
		display: inline-block;
		width:4.47rem;
		vertical-align:top;
		margin-left:.28rem;
	}
	.kbtNews-list-titel{
		font:.2rem/.28rem Frutiger LT Std,arial;
		color:#6f9c99;
		height:.57rem;
		overflow: hidden;
		position: relative;
	}
	.kbtNews-list-titel:after{
		content: "...";
		font-weight:bold;
    	position:absolute;
    	bottom:0;
   	 	right:0;
    	background-color:white;
	}
	.kbtNews-list-author,.kbtNews-list-timer{
		font:.18rem/.26rem Frutiger LT Std, arial;
		color:#7e7e7e;
		padding-left:.5rem;
		margin-top:.11rem;
		letter-spacing:.5px;
	}
	/*图标*/
	.kbtNews-list-author{
		background:url(/static/img/News-author.png)no-repeat 4px center ;		
		background-size:contain;
	}
	.kbtNews-list-timer{
		display:block;
		background:url(/static/img/News-timer.png)no-repeat left center ;		
		background-size:contain;
		padding-left:.5rem;
	}
	.kbtNewsTrade-title{
		width:6.38rem;
		height:.44rem;
		background:#d2d2d2;	
		padding-left:.17rem;	
	}
	.kbtNewsTrade-title p{
		display: inline-block;
		font:bold .2rem/.5rem Frutiger LT Std,arial;
		color:#fff;
		vertical-align:top;
	}
	.kbtNewsTrade-title p:nth-child(1){
		width:.96rem;
	}
	.kbtNewsTrade-title p:nth-child(2){
		width:2.38rem;
		margin-left:.55rem;
	}
	.kbtNewsTrade-title p:nth-child(3){
		width:1.58rem;
		margin-left:.55rem;
	}
	.kbtNewsTrade-timer{
		display:inline-block;
		vertical-align: top;
		width:.96rem;
		font:.18rem/.24rem Frutiger LT Std, arial;
		color:#7e7e7e;
	}
	.kbtNewsTrade-address{
		width:6.38rem;
		padding-left:.17rem;
	}
	.kbtNewsTrade-address li{
		border-bottom:1px #d9d9d9 solid;
		padding:.26rem 0;
		font-size:0px;
	}
	.kbtNewsTrade-address-description{
		display:inline-block;
		width:2.8rem;
		margin-left:.55rem;
		vertical-align: top;
	}
	.kbtNewsTrade-address-description h6{		
		font:bold .18rem/.24rem Frutiger LT Std, arial;
		color:#6f9c99;		
	}
	.kbtNewsTrade-address-description p{
		font:.18rem/.24rem Frutiger LT Std, arial;
		color:#7e7e7e;
	}
	.kbtNewsTrade-address h5{
		display:inline-block;
		margin-left:.14rem;
		vertical-align: top;
		width:1.58rem;
		font: bold .18rem/.24rem Frutiger LT Std,arial;
		color:#7e7e7e;
	}
	.buttonColor{
		color:#000;
	}
</style>
