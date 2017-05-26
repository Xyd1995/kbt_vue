<template>
  <div id="app">
  		<kbtheader></kbtheader>
  		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
		        	<img src="./assets/img/banner_01.jpg"/>
		        	<div class="kbt_bannerText">
								<p>Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.</p>
							</div>
		        </div>
		        <div class="swiper-slide">
		        	<img src="./assets/img/banner_01.jpg"/>
		        	<div class="kbt_bannerText">
								<p>Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.</p>
							</div>
		        </div>
		        <div class="swiper-slide">
		        	<img src="./assets/img/banner_01.jpg"/>
		        	<div class="kbt_bannerText">
								<p>Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.</p>
							</div>
		        </div>
		    </div>
			</div>
  		<el-row :gutter="12">
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_01">
			  		<div>
			  			<h1></h1>
			  			<ul>
			  				<li><a href="#"></a></li>
			  			</ul>
			  			<a href="#">+　More</a>
			  		</div>
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_02">			  	
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_03">			  	
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_04">			  	
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_05">			  	
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_06">			  	
			  	</div>
			  </el-col>
			  <el-col :sm="4" :span="12">
			  	<div class="grid-content bg-purple kbtshow_07">			  	
			  	</div>
			  </el-col>
			</el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      width: window.innerWidth
    })
  }
}
</script>

<style>
.el-row{
	padding:.18rem .11rem;
	margin-left:0 !important;margin-right:0 !important;
}
.grid-content{
	height:1.6rem;
	border:1px #eaf0fb solid;
	margin-bottom:.16rem;
}
.kbtshow_01{
	background:url('./assets/img/kbtshow_01.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_02{
	background:url('./assets/img/kbtshow_02.jpg') no-repeat center;
	background-size:cover;
	height:3.4rem;
}
.kbtshow_03{
	background:url('./assets/img/kbtshow_03.jpg') no-repeat center;
	background-size:cover;
	margin-top:-1.8rem;
	margin-bottom:0;
}
.kbtshow_04{
	background:url('./assets/img/kbtshow_04.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_05{
	background:url('./assets/img/kbtshow_05.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_06{
	background:url('./assets/img/kbtshow_06.jpg') no-repeat center;
	background-size:cover;
}
.kbtshow_07{
	background:url('./assets/img/kbtshow_07.jpg') no-repeat center;
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
	width:92.2%;
	left:0;
	bottom:-1.9rem;
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
.swiper-container{
	height:4.5rem;
}
</style>
