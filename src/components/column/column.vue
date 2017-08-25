<template>
	<div id="column">
		<div class="colunmBg">
			<img :src="columnArray.columnImgUrl" />
		</div>
		<ul class="colunm-list">
			<li :class="{ colunmlistBgAfter: columnlistBg===index }" @click="columnList(index)" v-for="(list, index) in columnArray.columnList">
				<div class="column-list-columnIcon">
					<img v-if="columnlistBg==index" :src="list.listBerterIocn" />
					<img v-if="columnlistBg!=index" :src="list.listAfterIcon" />
				</div>
				<div class="column-list-columnList">
					<h1 :class="{columnListAfter: columnlistBg==index}">{{list.listTitle}}</h1>
					<ul :class="{columnlistTwocolumn:columnlistBg==index, TwocolumnAfter:columnlistBg!=index }" >
						<li v-for="(listColumn, listIndex) in list.listColumn" @click="listColumnRouter(listColumn)">{{listColumn}}</li>
					</ul>
				</div>
			</li>			
		</ul>
	</div>
</template>

<script>
// 引入 axios 插件
import Axios from 'axios'

export default {
  data () {
    return {
      columnArray: {},
      columnlistBg: null
    }
  },
  created: function () {
    let _this = this
    Axios.get('/static/kbt/column.json')
      .then(function (response) {
        _this.columnArray = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    columnList: function (index) {
      this.columnlistBg = index
    },
    listColumnRouter: function (listColumn) {
      let listColumnName = listColumn.replace(/\s+|-/g, '')
      this.$router.push({path: '/columnProducts', query: {columnName: listColumnName}})
    }
  }
}
</script>

<style>
.colunmBg{
	width:100%;
	height:2.3rem;
}
.colunmBg img{
	display:block;
	width:100%;
	height:100%;
}
.colunm-list{
	padding:0 .36rem;
	margin-top:.1rem;
}
.colunm-list>li{
	width:6.5rem;
	height:2.54rem;	
	background-size: contain;
	border:1px #eaf0fb solid;
	border-top:none;
	background: #fff;
}
.colunm-list .colunmlistBgAfter{
	background:url('/beta/static/img/column-FineIcon01.png')no-repeat center;
}
.column-list-columnIcon{
	float:left;
	width:1rem;
	height:.78rem;
	margin-left:.4rem;
	margin-top:.4rem;
}
.column-list-columnIcon img{
	display:block;
	width:100%;
	height:100%;
}
.column-list-columnList{
	float:left;
	width:4.6rem;
	margin-top:.3rem;
	margin-left:.44rem;
}
.column-list-columnList h1{
	font: 600 .28rem/.36rem arial;
	color:#083664;
}
.column-list-columnList h1.columnListAfter{
	color:white;
}
.column-list-Twocolumn{
	margin-top:.05rem;
	
}
.columnlistTwocolumn li{
	font: normal .2rem/.36rem arial;
	color:white;
}
.TwocolumnAfter li{
	font: normal .2rem/.36rem arial;
	color:#666;
}
</style>
