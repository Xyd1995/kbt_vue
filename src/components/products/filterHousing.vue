<template>
	<div id="FilterHousing">
		<ul class="FH-nav">
			<li>Home</li>
			<li>Products</li>
			<li>Filter Housing</li>
		</ul>
		<ul class="FH-List">
			<li v-for="(FHData, index) in FilterHousingData" :key="FHData">
				<h1>{{FHData.FHtitle}}</h1>
				<ul class="FH-cloumnList">
					<li v-for="(FHlist,index) in FHData.FHList" :key="FHlist">{{FHlist.title}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        FilterHousingData: [
          {
            FHtitle: 'Sanitary Filter Housings',
            FHList: [
              {title: 'Single-Round Sanitary'},
              {title: 'Multi-Round Sanitary'},
              {title: 'Inline Filter Housing'}
            ]
          },
          {
            FHtitle: 'Gas / Vas Filter Housings',
            FHList: [
              {title: 'Gas Filter Housing '},
              {title: 'Vent Filter Housing'}
            ]
          },
          {
            FHtitle: 'Anti-Corrosive Filter Housings',
            FHList: [
              {title: 'PTFE Coated Filter Housings'},
              {title: '100% Natural PP Housing'}
            ]
          },
          {
            FHtitle: 'Industrial Filter Housings',
            FHList: [
              {title: 'Single-Round Industrial'},
              {title: 'Multi-Round Industrial '}
            ]
          },
          {
            FHtitle: 'Stainless Steel Membrane Holder',
            FHList: [
              {title: 'H-DMF Series'},
              {title: 'H-DMT-T Series'},
              {title: 'H-TMF Series'}
            ]
          },
          {
            FHtitle: 'High Flow Filter Housings',
            FHList: [
              {title: 'High Flow Filter Housings'}
            ]
          },
          {
            FHtitle: 'Filter Bag Housings',
            FHList: [
              {title: 'Multi-Bag Housings'},
              {title: 'Top Inlet Bag Housings'},
              {title: 'Side Inlet Bag Housings'}
            ]
          },
          {
            FHtitle: 'Lenticular Filter Housings',
            FHList: [
              {title: 'Lenticular Filter Housings'}
            ]
          },
          {
            FHtitle: 'Filtration System',
            FHList: [
              {title: 'Multi-Bag Housings'},
              {title: 'Top Inlet Bag Housings'},
              {title: 'Side Inlet Bag Housings'}
            ]
          }
        ]
      }
    }
  }
</script>

<style>
	#FilterHousing{
		padding:.29rem .36rem;
	}
	.FH-nav{
		font-size:0px;
	}
	.FH-nav li{
		display:inline-block;
		vertical-align:top;
		margin-right:.42rem;
		font:.24rem/.38rem Frutiger LT Std, arial; 
		color:#6d6d6d;
		position:relative;
	}
	.FH-nav li:after{
		content: "|";
		position:absolute;
		right:-12px;
		top:0;
	}
	.FH-List{
		margin-top:.23rem;
	}
	.FH-List>li{
		width:3rem;
		height:4.4rem;
		border:1px #eef3fc solid;
		border-top:none;
		display:inline-block;
		vertical-align: top;
		padding:0 0 0 .17rem;
	}
	.FH-List>li:nth-child(1){
		background: url(/static/img/Filter-Housing-industrial.jpg)no-repeat center/contain;
		border-top:1px #eef3fc solid;
	}
	.FH-List>li:nth-child(2){
		background: url(/static/img/Filter-Housing-Gas.jpg)no-repeat center/contain;
		border-top:1px #eef3fc solid;
	}
	.FH-List>li:nth-child(3){
		background: url(/static/img/Filter-Housing-Anti.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(4){
		background: url(/static/img/Filter-Housing-Industrial.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(5){
		background: url(/static/img/Filter-Housing-Stainless.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(6){
		background: url(/static/img/Filter-Housing-High.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(7){
		background: url(/static/img/Filter-Housing-Bag.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(8){
		background: url(/static/img/Filter-Housing-Lenticular.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(9){
		background: url(/static/img/Filter-Housing-Filtration.jpg)no-repeat center/contain;
	}
	.FH-List>li:nth-child(2n+0){
		border-left:none;
	}
	.FH-List li h1{
		font:.24rem/.36rem Frutiger LT Std, arial;
		color:#6f9c99;
		margin-top:.2rem;
	}
	.FH-List li .FH-cloumnList li{
		font:normal .22rem/.36rem Frutiger LT Std, arial;
		color:#617360;
	}
</style>
