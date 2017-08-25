<template>
	<div id="productsCloumnList">
		<ul class="productsCloumnTitle">
			<li v-for="(list, item) in productsList" :key="list">
				<h1>{{list}}</h1>
			</li>
		</ul>
		<ul class="productsBaseData">
			<li v-for="(test, index) in testProductData" :key="test">
				<img :src="test.cloumnImg"/>
				<div class="productsBaseData-right">
					<h1>{{test.cloumnTitle}}</h1>
					<p><b>Grade:　</b>{{test.pepartment}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        productsList: [
          'Products'
        ],
        testProductData: [
          {
            cloumnImg: '/static/img/Products-listTest.jpg',
            cloumnTitle: 'High Retention Rate Filter Cartridges',
            pepartment: 'Electronic'
          },
          {
            cloumnImg: '/static/img/Products-listTest.jpg',
            cloumnTitle: 'High Retention Rate Filter Cartridges',
            pepartment: 'Electronic'
          },
          {
            cloumnImg: '/static/img/Products-listTest.jpg',
            cloumnTitle: 'High Retention Rate Filter Cartridges',
            pepartment: 'Electronic'
          },
          {
            cloumnImg: '/static/img/Products-listTest.jpg',
            cloumnTitle: 'High Retention Rate Filter Cartridges',
            pepartment: 'Electronic'
          },
          {
            cloumnImg: '/static/img/Products-listTest.jpg',
            cloumnTitle: 'High Retention Rate Filter Cartridges',
            pepartment: 'Electronic'
          }
        ]
      }
    },
    mounted () {
      this.getLocalhost()
    },
    methods: {
      getLocalhost: function () {
        var str = /-/g
        var cnashu = this.$route.query.cloumn
        var newList = cnashu.replace(str, ' ')
        this.$data.productsList.push(newList)
      }
    }
  }
</script>

<style>
	#productsCloumnList{
		padding:.29rem .36rem;
	}
	.productsCloumnTitle{
		font-size:0px;
	}
	.productsCloumnTitle li{		
		display:inline-block;
		vertical-align:-webkit-baseline-middle;
		vertical-align:middle;
		margin-right:.2rem;
	}
	.productsCloumnTitle li h1{
		font:.24rem/.38rem Frutiger LT Std, arial;
		color:#bfbfbf;
	}
	.productsBaseData{
		margin-top:.23rem;
	}
	.productsBaseData li{
		font-size:0px;
		margin-bottom:22px;
	}
	.productsBaseData li img{
		width:1.77rem;
		height:1.77rem;
		border:1px #e9e8ed solid;
		display:inline-block;
		vertical-align:top;
		margin-right:.24rem;
		border:1px #ccc solid;
	}
	.productsBaseData-right{
		display: inline-block;
		vertical-align: top;
		width:3.4rem;
	}
	.productsBaseData li h1{
		font:.32rem/.48rem FrutigerLT, arial;
		color:#254185;
	}
	.productsBaseData li p{
		font:.26rem/.48rem FrutigerLT, arial;
		color:#7c7c7c;
	}
</style>
