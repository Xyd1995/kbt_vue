<template>
	<div id="kbt-header">
		<div class="cobetterLogo">
			<img src="../../assets/img/cobetterLogo.png" />
		</div>
		<div class="cobetterNav">
			<el-button type="white" icon="search" @click="getKbt"></el-button>
			<el-button type="white" icon="menu" @click="kbt1=!kbt1"></el-button>
		</div>
		<transition	enter-active-class="kbtslide_in" leave-active-class="kbtslide_out">
			<div class="kbt_menu" v-show="kbt1">
				<el-row class="tac">
					<el-col>
					    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
						        <el-submenu index="1">
							        <template slot="title">Pharmaceutical</template>
							        <el-submenu index="1-2">
							        	<template slot="title">Preparations</template>
							        	<div class="kbtIndustries_column">
							        		<ul>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        		</ul>
							        		<ul>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        		</ul>
							        		<ul>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        		</ul>
							        		<ul>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        			<li><a href="#">Preparations</a></li>
							        		</ul>
							        	</div>
							        </el-submenu>
							    </el-submenu>
							    <el-submenu index="2">
							    	<template slot="title">Food & Beverage</template>
							    </el-submenu>
							    <el-submenu index="3">
							    	<template slot="title">Microelectronics</template>
							    </el-submenu>
							    <el-submenu index="4">
							    	<template slot="title">Fine Chemiacl</template>
							    </el-submenu>
							    <el-submenu index="5">
							    	<template slot="title">Medical</template>
							    </el-submenu>
							    <el-submenu index="6">
							    	<template slot="title">Laboratory</template>
							    </el-submenu>
						        <el-menu-item index="9">Last News</el-menu-item>
						        <el-menu-item index="10">About Us</el-menu-item>
						        <el-menu-item index="11">Validation Services</el-menu-item>
						        <el-menu-item index="12">Quality Assurance</el-menu-item>
						        <el-menu-item index="13">Contact Us</el-menu-item>
						</el-menu>
					</el-col>
				</el-row>
			</div>
		</transition>
	</div>
</template>

<script>
export default{
  data ()	{
    return {
      kbt1: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {},
    getKbt: function () {
      this.$http.get('./static/kbtjson.json').then((response) => {
        console.log(response)
      }, (reponse) => {
        console.log('错误')
      })
    }
  }
}
</script>

<style>
#kbt-header{
	width: 100%;height:1.2rem;background:#f1f1f1;
	}
.cobetterLogo{
	width:2.8rem;height:1.2rem;float:left;
	}
.cobetterLogo img{
	display: block;width:100%;height:100%;
	}
.cobetterNav{
	line-height: .8rem;
	float:right;margin-right:.42rem;
}
.cobetterNav button{
	color:#475e95;padding:7px 7px;font-size:24px;margin:0;
}
.kbtnav_products{
	display: inline-block;
	border-radius:4px;
	border:1px solid #bfcbd9;
	background:#fff;
	width:.78rem;
	height:.63rem;
	text-align: center;
	font-size:20px;
	color:#475e95;
}
.kbt_menu{
	width:100%;
	position: absolute;
	right:0;top:1.2rem;
}
.kbt_menu .el-menu--dark, .el-submenu{
	background: #435e9a;
}
.kbt_menu .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu .el-submenu__title:hover{
	color:#435e9a;background:#fff;
}
.kbt_menu .el-menu--dark .el-menu-item:hover, .kbt_menu .el-submenu--dark .el-submenu-item:hover{
	background:#fff;color:#435e9a;
}
.kbtIndustries_column{
	overflow-y: hidden;
	overflow-x: scroll;	
	background:#435e9a;
	color:#fff;
	padding:.2rem .25rem;
	white-space: nowrap;	
	vertical-align: top;
}
.kbtIndustries_column ul{
	display: inline-block;
	position: relative;
	white-space: nowrap;
	font-family: arial "微软雅黑";
	width:3rem;	
}
.kbtIndustries_column ul li{
	height:.4rem;
}
.kbtIndustries_column ul li a{
	display:block;
	font-size:12px;
	color:#fff;
	line-height:.4rem;
	vertical-align: top;
}
</style>
