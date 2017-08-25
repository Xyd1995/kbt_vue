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
			<li v-for="(list,index) in newsList" :key="list.id">
				{{list.commonName}}
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
          this.newsList = response.data
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
	.newList-nav{
		font-size:0;
		padding:.4rem .36rem;
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
</style>
