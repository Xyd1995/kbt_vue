<template>
	<div id="products">
		<div class="productsBanner">
			<img src="static/productsList/img/MetalFiltersBanner.png" />
		</div>
		<p class="productsText">
			Cobetter consistently provides advanced and reliable filtration products for SVP & LVP solutions which results in being the biggest market player in China.
		</p>
		<p class="productsText">
			Through our Advanced Validation Center, Cobetter provides the following analytical services including: Bacterial Challenge Test, Contaminant Analysis, Filter Performance Test, Particle Efficiency Analysis and Process Validation.
		</p>
		<div class="productsMain">
			<img src="static/productsList/img/MetalFiltersMain.png"/>
		</div>
		<div>
			<table style="table-collapse:collapse; width:6.7rem;margin: auto;margin-top:.3rem;">
				<tr>
					<td ></td>
					<td style="padding-left:.1rem;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;">
						Low<br>Concentration
					</td>
					<td style="font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;">
						High<br>Concentration
					</td>
				</tr>
				<tr>
					<td style="padding-left:.1rem;border-top:1px #fff solid ;font:.18rem/.4rem arial;line-height:20px;color:#6b6b6b;" bgcolor="#ececec">Decarbonization<br>Filtration</td>
					<td style="padding-left:.1rem;border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">TIC Series</a>
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">CSSC Series</a>
					</td>
					<td style="border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">TIC Series</a>
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">CSSC Series</a>
					</td>
				</tr>
				<tr>
					<td style="padding-left:.1rem;border-top:1px #fff solid ;font:.18rem/.4rem arial;line-height:20px;color:#6b6b6b" bgcolor="#ececec">Prefiltration</td>
					<td style="padding-left:.1rem;border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">HPP Series</a>
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">SPSH Series</a>
					</td>
					<td style="border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">PFSA2 Series</a>
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">APS Series</a>
					</td>
				</tr>
				<tr>
					<td style="padding-left:.1rem;border-top:1px #fff solid ;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b" bgcolor="#ececec">Final Sterile<br>Filtration</td>
					<td style="padding-left:.1rem;border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">SPSH Series</a>
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">APS Series</a>
					</td>
					<td style="border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">SPSH Series</a>
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">DPS Series</a>
					</td>
				</tr>
				<tr>
					<td style="padding-left:.1rem;border-top:1px #fff solid ;border-bottom:1px #fff solid ;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b" bgcolor="#ececec">Vent Filtration</td>
					<td style="padding-left:.1rem;border-bottom:1px #ccc solid ;border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">GPFL Series</a>
					</td>
					<td style="border-bottom:1px #ccc solid ;border-top:1px #ccc solid;height:1.10rem;">
						<a style="display:block;font:.18rem/.4rem arial;line-height:.3rem;color:#6b6b6b;" href="">GPFL Series</a>
					</td>
				</tr>
			</table>
		</div>
		<ul class="productsList">
			<li>
				<div class="productsList-img">
					<img src="static/productsList/img/MetalFiltersProducts01.png" />
				</div>
				<div class="productsList-text">
					<h1>PolyFlow Filter Cartridges</h1>
					<h6>Nominal-rated Polypropylene Media · Particle Removal</h6>
					<p>Cobetter PolyFlow ,High-flow Filter Cartridges are made of all polypropylene pleated microfiber, providing great filtration performance with lower cost. Higher flow rates, dirt holding capacity and filltration efficiency make it the optimal solution for the pre-filtration of liquids.</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
  data () {
    return {
      tt: '123'
    }
  }
}
</script>

<style>
#products{
}
.productsBanner{
	width:96%;
	height:2.88rem;
	background:#3c5288;	
	padding:1.31rem 2% 0;
	
}
.productsBanner img{
	display:block;
	width: 100%;
	height:100%;
	margin:0 auto;
}
.productsText{
	font: .2rem/.3rem arial;
	color:#393939;
	padding:0 .3rem;
	margin-top:.2rem;
}
.productsMain{
	width:4.85rem;
	height:2.89rem;	
	margin:0 auto;
	margin-top:.2rem;
}
.productsMain img{
	display:block;
	width:100%;
	height:100%;
}
.productsList{
	padding:0 .3rem;
	margin-top:.3rem;
}
.productsList li .productsList-img{
	display: inline-block;
	width:1.95rem;
	height:1.95rem;
}
.productsList-img img{
	display:block;
	width:100%;
	height:100%;	
}
.productsList-text{
	display: inline-block;
	width:4rem;
	vertical-align:top;
}
.productsList-text h1{
	font: 700 .24rem/.3rem arial;
	color:#626262;
	margin-bottom:.1rem;
}
.productsList-text h6, .productsList-text p{
	font: normal .2rem/.28rem arial;
	color:#787878;
}
.productsList-text h6{
	margin-bottom:.1rem;
}
.productsList-text p{
	height:.88rem;
	overflow:hidden;
}
</style>
