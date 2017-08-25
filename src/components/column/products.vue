<template>
	<div id="products">
		<h1 class="productsTitle">Products</h1>
		<ul class="productsColumn" >
			<li v-for="column of productsCloumn" :key="column.title" @click="productsColumn(column.title)">
				<h2>{{column.title}}</h2>
				<img :src="column.cloumnImg" />
			</li>			
		</ul>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        productsCloumn: [
          {
            title: 'Microprous Membranes',
            cloumnImg: '/static/img/Products-cloumnMM.jpg'
          },
          {
            title: 'Pleated Filter Cartridges',
            cloumnImg: '/static/img/Products-cloumnPC.jpg'
          },
          {
            title: 'Lenticular Filters',
            cloumnImg: '/static/img/Products-cloumnLF.jpg'
          },
          {
            title: 'Disposable Filter Capsule',
            cloumnImg: '/static/img/Products-cloumnDFC.jpg'
          },
          {
            title: 'UF Modules',
            cloumnImg: '/static/img/Products-cloumnUF.jpg'
          },
          {
            title: 'Filter Housings',
            cloumnImg: '/static/img/Products-cloumnFH.jpg'
          },
          {
            title: 'Metal Filter Cartridge',
            cloumnImg: '/static/img/Products-cloumnFC.jpg'
          },
          {
            title: 'Coalescence Separator',
            cloumnImg: ''
          },
          {
            title: 'Filtration System',
            cloumnImg: '/static/img/Products-cloumnFS.jpg'
          }
        ]
      }
    },
    methods: {
      productsColumn: function (cloumnTitle) {
        if (cloumnTitle === 'Filter Housings') {
          this.$router.push('FilterHousing')
        } else if (cloumnTitle !== 'Filter Housings') {
          var str = /(\s)/g
          var newColumn = cloumnTitle.replace(str, '-')
          this.$router.push({path: 'productsList', query: {cloumn: newColumn}})
        }
      }
    }
  }
</script>

<style>
	#products{
		padding: .29rem .29rem ;
	}
	.productsTitle{
		font:.24rem/.38rem Frutiger LT Std, arial;
		color:#bfbfbf;
		margin-bottom:.23rem;
		letter-spacing: .1px;	
	}
	.productsColumn li{
		width:5.8rem;
		height:1.8rem;
		border:1px #eef3fc solid;
		border-bottom:none;
		padding:0 .4rem;
	}
	.productsColumn>li:last-child{
		border-bottom:1px #eef3fc solid;
	}
	.productsColumn li h2{
		display: inline-block;
		vertical-align: -webkit-baseline-middle;
		vertical-align:middle;		
		font:.28rem/.3rem Frutiger LT Std,arial;
		color:#5e75a8;
		width:3.2rem;
	}
	.productsColumn li img{
		width:2.2rem;
		height:1.8rem;
		vertical-align: -webkit-baseline-middle;
		vertical-align:middle;
		display:inline-block;
	}
</style>
