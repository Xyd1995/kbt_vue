<template>
	<div id="connect">
		<h1 class="connect-tilte">Welcome to Cobetter</h1>
		<div class="connect-banner">
			<img src="/static/img/connect-Baneer.png" />
		</div>
		<h2 class="connect-title2">Hangzhou Cobetter Filtration Equipment Co.,Ltd</h2>
		<ul class="connect-address">
			<li>
				<h6>Phone</h6>
				<p>86-0571-87704359</p>
			</li>
			<li>
				<h6>Email</h6>
				<p>sales@cobetterfilter.com</p>
			</li>
			<li>
				<h6 class="connect-address-title">Sales</h6>
				<p class="connect-address-img">19/F, Building B, Huanyu Bussiness Center, No.626 Kejiguan Road, Binjiang District, Hangzhou 310052,China</p>
				<span class="connect-address-position" @click="connectAddressPosition('connectMapSales')"></span>
			</li>
			<li>
				<h6 class="connect-address-title">Factory</h6>
				<p class="connect-address-img">Heshang Industry Section, Xiaoshan, Hangzhou 310053, China</p>
				<span class="connect-address-position" @click="connectAddressPosition('connectMapFactory')"></span>
			</li>
		</ul>
		<h2 class="connect-address-navigationTitle">Welcome to Hangzhou Cobetter</h2>
		<div class="connect-address-navBanner">
			<img src="/static/img/connect-address-navbanner.png" />
		</div>
		<div class="connect-gaotie">
			<img class="connect-gaotieImg" src="/static/img/connect-gaotie.png" />
			<h2>TRAIN STATION</h2>
			<ul class="connect-gaotie-list">
				<li @click="connectAddress('TRAINEast')">Hangzhou East Station</li>
				<li @click="connectAddress('TRAINEast')">Hangzhou City Station</li>
			</ul>
		</div>
		<div class="connect-aricraft">
			<img class="connect-aricraftImg" src="/static/img/connect-feiji.png" />
			<h2>AIRPORT</h2>
			<ul class="connect-aricraft-list">
				<li @click="connectAddress('AIRPORTSH')">Shanghai Hongqiao International Airport</li>
				<li @click="connectAddress('AIRPORTSP')">Shanghai Pudong International Airport</li>
				<li @click="connectAddress('AIRPORTHX')">Hangzhou Xiaoshan International Airport</li>
			</ul>
		</div>
		<!--导航图-->
		<div class="connect-address-navMap" v-show="connectNavMap" @click.self.prevent="connectNavMapOFF">
			<ul>
				<li v-if="connectNavMapTool==='TRAINEast'">
					<h2 class="connect-addressListTitle connect-addressListTitleTRAIN">TRAIN STATION</h2>
					<div style="clear:both"></div>
					<div class="coonectNavMapStart">
						<div class="coonectNavMap-start"></div>
						<h1>Hangzhou <i>East Station</i><br>Or  Hangzhou <i>City Station</i></h1>
					</div>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Metro Line 1</p>
					</div>
					<h1 class="connectNavMapH1">Hangzhou East Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>TAXI</p>
					</div>
					<div>
						<div class="connectNavMapStop"></div>
						<p class="connectNavMap-stop">16F , <i>Longhe Internation Building</i></p>
					</div>
				</li>
				<li  v-if="connectNavMapTool==='AIRPORTSH'">
					<h2 class="connect-addressListTitle">AIRPORT</h2>
					<div style="clear:both"></div>
					<div class="coonectNavMapStart">
						<div class="coonectNavMap-start"></div>
						<h1>Hangzhou <i>Xiaoshan</i><br>International Airport</h1>
					</div>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Airport Shuttle Bus</p>
					</div>
					<h1 class="connectNavMapH1"><i>Hangzhou</i> City Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Metro Line 1 </p>
					</div>
					<h1 class="connectNavMapH1"><i>Jianglin Road</i> Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Taxl</p>
					</div>
					<div>
						<div class="connectNavMapStop"></div>
						<p class="connectNavMap-stop">16F , <i>Longhe Internation Building</i></p>
					</div>
				</li>
				<li  v-if="connectNavMapTool==='AIRPORTSP'">
					<h2 class="connect-addressListTitle">AIRPORT</h2>
					<div style="clear:both"></div>
					<div class="coonectNavMapStart">
						<div class="coonectNavMap-start"></div>
						<h1>Shanghai <i>Hongqiao</i><br>International Airport</h1>
					</div>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Rail Transit Line Line 10</p>
					</div>
					<h1 class="connectNavMapH1"><i>Hongqiao</i> Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>“G” or “D” Train</p>
					</div>
					<h1 class="connectNavMapH1">Hangzhou <i>East Station</i><br>Or  Hangzhou <i>City Station</i></h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Metro Line 1 </p>
					</div>
					<h1 class="connectNavMapH1"><i>Jianglin Road</i> Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Taxl</p>
					</div>
					<div>
						<div class="connectNavMapStop"></div>
						<p class="connectNavMap-stop">16F , <i>Longhe Internation Building</i></p>
					</div>
				</li>
				<li  v-if="connectNavMapTool==='AIRPORTHX'">
					<h2 class="connect-addressListTitle">AIRPORT</h2>
					<div style="clear:both"></div>
					<div class="coonectNavMapStart">
						<div class="coonectNavMap-start"></div>
						<h1>Shanghai <i>Pudong</i> <br>International Airport</h1>
					</div>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Metro Line 2</p>
					</div>
					<h1 class="connectNavMapH1"><i>Hongqiao</i> Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>“G” or “D” Train</p>
					</div>
					<h1 class="connectNavMapH1">Hangzhou <i>East Station</i><br>Or  Hangzhou <i>City Station</i></h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Metro Line 1 </p>
					</div>
					<h1 class="connectNavMapH1"><i>Jianglin Road</i> Station</h1>
					<div class="connectNavMap-tool">
						<div class="arrow"></div>
						<p>Taxl</p>
					</div>
					<div>
						<div class="connectNavMapStop"></div>
						<p class="connectNavMap-stop">16F , <i>Longhe Internation Building</i></p>
					</div>
				</li>
			</ul>
		</div>
		<!--地图-->
		<div class="connect-map" v-show="connectMap" @click.stop="connectMapOFF">
			<div class="amap-page-container connect-amap-page" @click="connectMapOn">
      			<el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        			<el-amap-marker v-for="(marker, index) in markers" :key="marker.id" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
        			<el-amap-info-window v-for="(window, index) in windows" :key="window.id" :position="window.position" :content="window.content" :visible="window.visible" :events="window.events"></el-amap-info-window>
        		</el-amap>
   			</div>
		</div>
	</div>
</template>

<script>
  let self = this
  export default{
    data () {
      return {
        connectNavMap: false,
        connectNavMapTool: false,
        connectMap: false,
        zoom: 14,
        center: [120.205030, 30.209840],
        markers: [
          {
            position: [120.205030, 30.209840],
            events: {
              click: () => {
                this.$data.windows[0].visible = !this.$data.windows[0].visible
              },
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
              }
            },
            visible: true,
            draggable: false,
            raiseOnDrag: true
          }
        ],
        windows: [
          {
            position: [120.205030, 30.209840],
            content: '',
            visible: true
          }
        ]
      }
    },
    methods: {
      connectAddressPosition: function (connect) {
        this.$data.connectMap = true
        if (connect === 'connectMapSales') {
          this.$data.center = [120.205030, 30.209840]
          this.$data.markers = [{
            position: [120.205030, 30.209840]
          }]
          this.$data.windows[0].position = [120.205030, 30.209840]
          this.$data.windows[0].content = '<div class="connectWindow">Sales</div><div class="connectWindow-address">19/F, Building B, Huanyu Bussiness Center, No.626 Kejiguan Road, Binjiang District, Hangzhou 310052,China</div>'
        } else if (connect === 'connectMapFactory') {
          this.$data.center = [120.200240, 29.975840]
          this.$data.markers = [{
            position: [120.200240, 29.975840]
          }]
          this.$data.windows[0].position = [120.200240, 29.975840]
          this.$data.windows[0].content = '<div class="connectWindow">Factory</div><div class="connectWindow-address">Heshang Industry Section, Xiaoshan</div>'
        }
      },
      connectMapOFF: function (ev) {
        this.$data.connectMap = !this.$data.connectMap
      },
      connectMapOn: function () {
        this.$data.connectMap = false
      },
      connectAddress: function (connectNavMap) {
        this.$data.connectNavMap = true
        if (this.$data.connectNavMapTool !== connectNavMap) {
          this.$data.connectNavMapTool = connectNavMap
        }
      },
      connectNavMapOFF: function () {
        this.$data.connectNavMap = false
      }
    }
  }
</script>

<style>
	#connect{
		padding:0 .2rem;
	}
	.connect-tilte{
		margin-top:.68rem;
		font:normal .48rem/.46rem Helvetica,arial;
		color:#567fd0;
	}
	.connect-banner{
		width:6.8rem;
		height:2.73rem;
	}
	.connect-banner img{
		width:100%;
		height:100%;
	}
	.connect-title2{
		margin-top:.8rem;
		font:bold .3rem/.36rem FrutigerLT,arial;
		color:#666;
	}
	.connect-address{
		margin:.3rem 0 1.35rem;
	}
	.connect-address li{
		font-size:0px;
		width:4rem;
		position:relative;
	}
	.connect-address li h6{
		display: inline-block;
		font:bold .22rem/.44rem FrutigerCE,arial;
		color:#7bc075;
		margin-right:.12rem;
	}
	.connect-address li p{
		display: inline-block;
		font:normal .22rem/.34rem FrutigerLT,arial;
		color:#535353;
		width:3rem;
	}
	.connect-address li p.connect-address-img{
		width:4.8rem;
		position:relative;
	}
	.connect-address-position{
		content:"";
		display: block;
		position: absolute;
		right:-1.2rem;
		top:.6rem;
		width:.4rem;
		height:.62rem;
		background: url(/static/img/connect-map.png)no-repeat center/contain;		
	}
	.connect-address-title{
		margin-top:.5rem;
	}
	.connect-address-navigationTitle{
		font:normal .48rem/.5rem FrutigerLT,arial;
		color:#666;
		letter-spacing:-1px;
	}
	.connect-address-navBanner{
		margin:.2rem 0 .74rem;
		width:6.8rem;
		height:2.81rem;
	}
	.connect-address-navBanner img{
		width:100%;
		height:100%;
	}
	.connect-gaotieImg,.connect-aricraftImg{
		width:1.42rem;
		height:.99rem;
	}
	.connect-gaotie{
		margin-left:.27rem;
		margin-right:.5rem;
	}
	.connect-gaotie,.connect-aricraft{
		width:2.65rem;
		text-align:center;
		display:inline-block;
		vertical-align: top;
	}
	.connect-gaotie h2,.connect-aricraft h2{
		font:bold .28rem/.15rem helvetica,arial;
		color:#dbdcdc;
		margin-top:.4rem;
	}
	.connect-gaotie-list,.connect-aricraft-list{
		margin-top:.6rem;
	}
	.connect-gaotie-list li,.connect-aricraft-list li{
		font:.22rem/.24rem Frutiger LT Std,arial;
		color:#6a6b6b;
		text-align: left;
		margin-bottom:.2rem;
	}
	/*地图*/
	.connect-map{
		position:fixed;
		left:0;
		top:0;
		width:100%;
		height: 100%;
		background:rgba(0,0,0,.5);
		z-index: 100;
	}
	.connect-amap-page{
		height:300px;
		position: relative;
		left:0px;
		top:50%;
		margin-top:-150px;
	}
	.connectWindow{	
		font:bold .2rem/.4rem arial;
		color:#567fd0;
	}
	.connectWindow-address{		
		font:.2rem/.4rem arial;
		color:#393939
	}
	/*来杭导图*/
	.connect-address-navMap{
		width:100%;
		height:100%;
		background:rgba(0,0,0,.5);
		position:fixed;
		left:0;
		top:0;
		z-index: 2;
		margin:auto;
	}
	.connect-address-navMap ul{
		width:95%;
		padding-bottom:20px;
		margin:86px 10px;
		background:#fff;
	}
	.coonectNavMapStart{
		margin-top:10px;
	}
	.connect-address-navMap ul li{
		padding-top:30px;
		padding-left:40px;
		font-size:0px;
		position: relative;
	}
	.connect-address-navMap .connect-addressListTitleTRAIN{
		background: url(/static/img/connectNavMap-D.png)no-repeat right 20px/48px 50px;
	}
	.connect-addressListTitle{
		position:absolute;
		right:0;
		top:20px;
		height:100px;
		margin-right:20px;
		font:.43rem/.2rem Helvetica Neue LT Std,arial;
		color:#DCDDDD;
		background: url(/static/img/connectNavMap-F.png)no-repeat 4px 20px/86px 45px;
	}
	.connect-address-navMap ul li h1{
		font:bold .32rem/.4rem Helvetica Neue LT Std,arial;
		color:#595757;
		margin-left:6px;
		display:inline-block;
		vertical-align: middle;
	}
	.connectNavMapH1{
		padding-left:30px;
	}
	.connect-address-navMap ul li i{
		font-style: normal;
		border-bottom: 2px #EA5A59 solid;
	}
	.coonectNavMap-start{
		width:30px;
		height:30px;
		display:inline-block;
		background:url(/static/img/connect-map.png)no-repeat center /contain;
		vertical-align: -webkit-baseline-middle;
		vertical-align: middle;
	}
	.connectNavMapStop{
		width:30px;
		height:30px;
		display:inline-block;
		background:url(/static/img/connectNavMap.png)no-repeat center /contain;
		vertical-align: -webkit-baseline-middle;
		vertical-align: middle;
	}
	.connectNavMap-stop{
		display:inline-block;
		vertical-align: -webkit-baseline-middle;
		vertical-align: middle;
	}
	.connectNavMap-tool{
		margin-bottom:4px;
	}
	.connectNavMap-tool .arrow{
		width:.18rem;
		height:.7rem;
		background: #00387A;
		display: inline-block;
		margin:14px 10px;
		position: relative;
		vertical-align: -webkit-baseline-middle;		
		vertical-align: middle;
	}
	.connectNavMap-tool .arrow:after{
		content:"";
		position:absolute;
		left:-4px;
		bottom:-16px;
		width:0px;
		height:0px;
		border-width: 8px;
		border-style:solid;
		border-color:#00387A #fff #fff #fff;
	}
	.connect-address-navMap .connectNavMap-tool p{
		display:inline-block;
		font:normal .32rem/.3rem Helvetica Neue LT Std,arial;
		color:#6EBA35;
		vertical-align: -webkit-baseline-middle;
		vertical-align: middle;
	}
	.connect-address-navMap p{
		font:bold .32rem/.32rem Helvetica Neue LT Std,arial;
		color:#595757;
		margin-left:6px;
	}
</style>
