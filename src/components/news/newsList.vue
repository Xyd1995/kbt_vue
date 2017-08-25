<template>
	<div id="newList">
		<ul class="newList-nav">
			<li>Home</li>
			<li>News</li>
		</ul>
		<div class="newList-main">
			<!--内容-->
		</div>
		<ul>
			<li class="newList-main" >
				<h1>{{newsList.commonName}}</h1>
				<h2>{{newsList.zhaiYao}}</h2>
				<div>
					<h6 class="kbtNews-list-author">{{newsList.zuoZhe}}</h6>
	        		<span class="kbtNews-list-timer">{{newsList.xinWenShiJian}}</span>
	        		<p v-html="newsList.neiRong"></p>
				</div>
			</li>
		</ul>
		<div class="newList-share">
			
		</div>
		<div class="newslist-pages">
			<ul>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default{
    data () {
      return {
        newsList: []
      }
    },
    created () {
      var url = this.HOST
      this.axios.get('http://www.test.com:8181/news').then((response) => {
        if (response.data) {
          this.newsList = response.data[0]
          console.log(this.newsList)
        }
      })
    },
    methods: {
      getKbt: function () {
        this.$http.get('./static/kbtjson.json').then((response) => {
          console.log(response)
        }, (reponse) => {
          console.log('数据请求失败')
        })
      }
    }
  }
</script>

<style>
	#newList{
		padding:.46rem .32rem;
	}
	.newList-nav{
		font-size:0;
	}
	.newList-nav li{
		display:inline-block;
		margin-right:.24rem;
		font:normal .24rem/.38rem FrutigerLTStd,arial;
		color:#6d6d6d;
		position:relative;
	}
	.newList-nav li:after{
		content: "|";
		position: absolute;
		right: -.12rem;
		top:0;
	}
	.newList-main h1{
		font:.35rem/.48rem Frutiger LT Std,arial;		
		color:#4661bd;
		margin:.4rem 0 .1rem;
	}
	.newList-main h2{
		font:.26rem/.36rem Frutiger LT Std,arial;
		color:#6a6b6b;
		
	}
	.kbtNews-list-author,.kbtNews-list-timer{
		font:.18rem/.26rem Frutiger LT Std, arial;
		color:#7e7e7e;
		padding-left:.5rem;
		margin-top:.11rem;
		letter-spacing:.5px;
		display:inline-block;
	}
	/*图标*/
	.kbtNews-list-author{
		background:url(/static/img/News-author.png)no-repeat 4px center ;		
		background-size:contain;
	}
	.kbtNews-list-timer{
		background:url(/static/img/News-timer.png)no-repeat left center ;		
		background-size:contain;
		margin-left:.5rem;
	}
</style>
