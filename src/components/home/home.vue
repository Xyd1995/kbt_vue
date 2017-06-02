<template>
	<div id="kbtHome">
		<div class="swiper-container" style="height: 4.5rem;">
	    	<div class="swiper-wrapper">
	        	<div class="swiper-slide">
	        		<img src="../../assets/img/banner_01.jpg"/>
	        			<div class="kbt_bannerText">
							<p>Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.</p>
						</div>
	       		</div>
	      	  	<div class="swiper-slide">
	        		<img src="../../assets/img/banner_01.jpg"/>
	        		<div class="kbt_bannerText">
						<p>Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.</p>
					</div>
	      	  	</div>
	     	    <div class="swiper-slide">
	        		<img src="../../assets/img/banner_01.jpg"/>
	        		<div class="kbt_bannerText">
						<p>Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.</p>
					</div>
	        	</div>
	    	</div>
		</div>
	    <el-row :gutter="4" class="kbtCentet">
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_01">
			  		<div class="kbtIndustry" :class="{mobile_top:section=='g'}">
			  			<h1 v-on:click="test('g')">Microelectronics</h1>
			  			<ul>
			  				<li><a href="#">- CMP Filtration</a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_02">
			  		<div class="kbtIndustry" :class="{mobile_top:section=='f'}">
			  			<h1 @click="test('f')">Pharmaceutical</h1>
			  			<ul>
			  				<li><a href="#">- CMP Filtration</a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_03">
			  		<div class="kbtIndustry" :class="{mobile_top:section=='e'}">
			  			<h1 @click="test('e')">Industrial</h1>
			  			<ul>
			  				<li><a href="#">- CMP Filtration</a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_04">
			  		<div class="kbtIndustry" :class="{mobile_top:section=='d'}">
			  			<h1 @click="test('d')">Food & Beveage</h1>
			  			<ul>
			  				<li><a href="#">- CMP Filtration</a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_05">
			  		<div  class="kbtIndustry" :class="{mobile_top:section=='c'}">
			  			<h1 @click="test('c')">Medical</h1>
			  			<ul>
			  				<li><a href="#">- CMP Filtration</a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_06">
			  		<div class="kbtIndustry" :class="{mobile_top:section=='b'}">
			  			<h1 @click="test('b')">Filter Housing</h1>
			  			<ul>
			  				<li><a href="#">- CMP Filtration</a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_07">
			  		<div class="kbtIndustry" :class="{mobile_top:section=='a'}">
			  			<h1 @click="test('a')">Laboratory</h1>
			  			<ul>
			  				<li><a href="#"></a></li>
			  				<li><a href="#">- FPD Wet Process</a></li>
			  				<li><a href="#">- Electronics Chemicals</a></li>
			  				<li><a href="#">- Hard Disk</a></li>
			  				<li><a href="#">- HBLED</a></li>
			  			</ul>
			  			<a href="#" class="kbtIndustryUrl">+ More</a>
			  		</div>			  		
			  	</div>
			  </el-col>
		</el-row>
		<router-view></router-view>
		<div class="kbtHome-advertising">
			<div class="kbtHome-advertising-images">
				<img src="../../../static/img/advertising.png" />
			</div>
			<p class="kbtHome-advertising-txt">
				Over 1200 technical analysis reports for customers in the pharmaceutical industry and 1300 technical analysis reports for customers in electronics, chemical, and life science industries annually. 
			</p>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      section: ''
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      width: window.innerWidth
    })
  },
  methods: {
    test: function (section) {
      if (this.section !== section) {
        this.section = section
      } else if (this.section === section) {
        this.section = ''
      }
    }
  }
}
</script>

<style>
.kbtCentet{
	margin-top:.16rem;
	margin-left:0 !important;margin-right:0 !important;
	padding:0 0.05rem;
}
.grid-content{
	height:1.74rem;
	border:1px #eaf0fb solid;
	margin-bottom:.16rem;
	overflow: hidden;
}
.kbtshow_01{
	background:url('../../assets/img/kbtshow_01.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_02{
	background:url('../../assets/img/kbtshow_02.jpg') no-repeat center;
	background-size:cover;
	height:3.7rem;
}
.kbtshow_03{
	background:url('../../assets/img/kbtshow_03.jpg') no-repeat center;
	background-size:cover;
	margin-top:-1.95rem;
	margin-bottom:0;
}
.kbtshow_04{
	background:url('../../assets/img/kbtshow_04.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_05{
	background:url('../../assets/img/kbtshow_05.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_06{
	background:url('../../assets/img/kbtshow_06.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_07{
	background:url('../../assets/img/kbtshow_07.jpg') no-repeat center;
	background-size:cover;
}
.swiper-slide{
	height:2.56rem;
}
.swiper-slide img{
	display:block;
	width:100%;height:100%;
}
.kbt_bannerText{
	position: absolute;
	width:93.4%;
	left:0;
	bottom:-1.5rem;
	background:rgba(60,82,136,.8);	
	padding:.25rem;
}
.swiper-container{
}
.kbt_bannerText p{
	font-family:arial;
	font-size:.2rem;
	color:#fff;
	line-height:.32rem;
	word-break:break-word;
}
.kbtIndustry{
	background:rgba(58,80,132,.8);
	padding:.04rem .18rem;
	height:100%;
	position: relative;
	margin-top:1.3rem;
	overflow: hidden;	
	transition: all 1s;
}
.kbtshow_02 .kbtIndustry{
	margin-top:3.25rem;
}
.kbtIndustry h1{
	font-size:.24rem;
	color:#fff;
	font-family: arial;
	line-height:.42rem;
}
.kbtIndustry ul li{
	height:.24rem;
}
.kbtIndustry ul li a{
	display: block;
	font-family: arial;
	color:#fff;
	font-size:.2rem;
}
.kbtIndustry .kbtIndustryUrl{
	display: block;
	font-family: arial;
	position: absolute;
	right:.1rem;bottom:.1rem;
	font-size:.18rem;
	color:#b4b1c4;
	padding:0 .1rem;
	background:#fff;
	border-radius:4px;
	line-height:.3rem;
}
.kbthome-tab{
	height:.84rem;
	padding:0 .74rem;
	margin-top:.44rem;
}
.kbthome-tab li{
	display: inline-block;
	font-size:.28rem;	
	line-height:.84rem;
	vertical-align:top;
}
.kbthome-tab li a{
	font-size:.28rem;
	color:#50545d;
	text-decoration: none;
	font-weight: bold;
	font-family: arial;
	height:.84rem;
}
.kbthome-tab li a.kbtTbaStyle{
	color:rgb(50,50,50);
	display: inline-block;
}
.kbtilline{
	margin:0 .06rem;
}
/*广告*/
.kbtHome-advertising-images{
	width:100%;
	height:2.74rem;
}
.kbtHome-advertising-images img{
	display:block;
	width:100%;height:100%;
}
.kbtHome-advertising-txt{
	padding:.19rem .35rem;
	font:.3rem/.4rem arial;
	color:#fff;
	background:url(../../../static/img/bg.jpg) repeat-x;
	word-wrap: break-word;
}
</style>
