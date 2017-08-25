<template>
	<div id="kbt-cnas">
		<div class="kbtCnas-text">
			<p class="kbtCnas-title">
				Over 1200+ technical analysis reports for customers in the pharmaceutical industry <br>and 1300+ technical analysis reports for customers in electronics, chemical, and life science industries annually. 
			</p>
			<div class="kbtCnas-cnasLogo">
				<img src="/static/img/kbt-cnas01.png" />
			</div>
		</div>
		<div class="kbtCnas-banner">
			<img src="/static/img/kbt-cnas02.png" />
		</div>
		<p class="kbtCnas-Profile">
			Founded in 2007 with a 50 million Rmb investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians. We provide over 1,200 technical validation reports annually to customers in the pharmaceutical industry and 1,300 technical validation reports anually to customer in the eletronics, chemical ,and life sciences (excluding pharmaceutical ) industry.
		</p>
		<div class="kbtCnas-LifeSciences">
			<div class="kbtCnas-LifeSciences-tilte">
				<p>Life Sciences</p>
			</div>
			<div class="kbtCnas-LifeSciences-text">
				<p>
					With our technical experience and deep usderstanding of the sterilization process, our Validation Center can provide validation services to global customers in Life Sciences Industres so that they comply with GMP standards tegarding Data Integrity.
				</p>
				<p>
					Validation Services include Bacterial Challenge Test (BCT), Extractable Test, Chemical Compatibility, Integriy Test, and Adsorption Test.
				</p>
				<p>
					By following both PDF TR26 and ASTM F838 standards, Cobertter Validation Center providers her customers with customized filtration solutions and technical support. 
				</p>
			</div><div class="kbtCnas-LifeSciences-list">
				<h1>
					Validtion Services
				</h1>
				<ul>
					<li>Bacteria Challenge Test</li>
					<li>Extractable Test</li>
					<li>Chemical Compatibility</li>
					<li>Integrity Test</li>
					<li>Customized Filtartion Solutions</li>
					<li>Ultrafiltration Applications and Filter Parameter Optimization</li>
					<li>Partical Distribution and Efficiency Test</li>
					<li>Contaminant Analysis</li>
					<li>Filtration Proces Opimization</li>
				</ul>
			</div>
			<table class="kbtCnas-LifeSciences-table">
				<tr>
					<td style="font-weight: bold;">Process Validation</td>
					<td style="font-weight: bold;">Sterilized Pre-filters</td>
					<td style="font-weight: bold;">Sterilized Final Filters</td>
				</tr>
				<tr>
					<td>Bacteria Challenge Test</td>
					<td>Required</td>
					<td>Optional</td>
				</tr>
				<tr>
					<td>Extratable Test</td>
					<td>Required</td>
					<td>Required</td>
				</tr>
				<tr>
					<td>Chemical Compatibility</td>
					<td>Required</td>
					<td>Optional</td>
				</tr>
				<tr>
					<td>Integrity Test</td>
					<td>Optional</td>
					<td>Optional</td>
				</tr>
				<tr>
					<td>Absorption Test</td>
					<td>Evaluate and Perform<br>if Necessary</td>
					<td>Evaluate and Perform<br>if Necessary</td>
				</tr>
			</table>			
		</div>
		<div class="kbtCnas-FineChemical">
			<div class="kbtCnas-FineChemical-tilte">
				<p>Fine Chemical</p>
			</div>
			<div class="kbtCnas-LifeSciences-text">
				<p>
					With our technical experience in Industrial Applications including Gas, Oil, Fine Chemicals and Water Treatment, Cobetter Validation Center can provide validation services and filtration solutions to goble customers for their wide range of application needs
				</p>
				<p>
					Validation Services include Particle Efficiency Test, Partical Number and Size Detection in feeder Liquid, Particle and Pollution Detection Level in Gas, Contaminats Analysis, Fiter Performance Analysis.
				</p>
				<p>
					Cobetter Validation Center can help customers by providing solutions to complicated filtration problems and filter verification,In addition, we provide customized filtration solutions based on customer requirements and filer analysis.
				</p>
			</div><div class="kbtCnas-LifeSciences-list">
				<h1>
					Validtion Services
				</h1>
				<ul>
					<li>Partical Efficiency Test</li>
					<li>Particle Number and Size Detection in Feeder Liquid</li>
					<li>Particle and Pollution Detection Level in Gas</li>
					<li>Contaminant Analysis</li>
					<li>Filtration Performance Analysis</li>
				</ul>
			</div>		
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	#kbt-cnas{
		padding:0 .28rem;
	}
	.kbtCnas-title{
		font: .36rem/.48rem Neo Sans Std, arial;
		color:#3c5288;
		width:5.14rem;
		word-break: break-word;
		margin-top:.67rem;
		letter-spacing: -.5px;
	}
	.kbtCnas-text{
		position:relative;		
	}
	.kbtCnas-cnasLogo{
		width:1.3rem;
		height:1.3rem;
		position:absolute;
		right:0;top:.1rem;
	}
	.kbtCnas-cnasLogo img{
		display:block;
		width:100%;
		height:100%;
	}
	.kbtCnas-banner{
		width:6.64rem;
		height:2.8rem;
		margin:.22rem 0;
	}
	.kbtCnas-banner img{
		width:100%;
		height:100%;
	}
	.kbtCnas-Profile{
		font: 10px/.34rem Frutiger LT Std, arial;
		color:#4E4E4E;
		margin-bottom:.1rem;
	}
	.kbtCnas-LifeSciences{
		margin-top:.2rem;
	}
	.kbtCnas-FineChemical{
		margin-top:.5rem;
	}
	.kbtCnas-LifeSciences-tilte,.kbtCnas-FineChemical-tilte{
		width:6.68rem;
		height:.48rem;
		background:#d16590;
		border-radius:5px 5px 0 0;
	}
	.kbtCnas-FineChemical-tilte{
		background: #a7d479;
	}
	.kbtCnas-LifeSciences-tilte p,.kbtCnas-FineChemical-tilte p{
		padding-left:.8rem;		
		font:.28rem/.48rem Frutiger LT Std, arial;
		color:#f2a6c4;
		background: url(/static/img/kbt-cnas-LifeSciences.png) no-repeat .18rem center;
		background-size: contain;
	}
	.kbtCnas-FineChemical-tilte p{
		color:#ffe09c;
		background: url(/static/img/kbt-cnas-FineChemical.png) no-repeat .18rem center;
		background-size: contain;
	}
	.kbtCnas-LifeSciences-text{
		width:3.24rem;
		margin-right:.23rem;
		display: inline-block;
		vertical-align: top;
	}
	.kbtCnas-LifeSciences-text p{
		font:10px/.36rem Frutiger LT Std, arial;
		color:#4e4e4e;
		margin:.18rem 0;
	}
	.kbtCnas-LifeSciences-list{
		width:3rem;
		display: inline-block;
		vertical-align: top;
	}
	.kbtCnas-LifeSciences-list h1{		
		font:bold 10px/.4rem Frutiger LT Std,arial;
		color:#a9a9a9;
		margin-top:.2rem;
	}
	.kbtCnas-LifeSciences-list ul li{		
		width:2.9rem;
		font:bold 10px/.22rem Frutiger LT Std,arial;
		color:#564f91;
		background:#f7f7f7;
		margin-bottom:1px;
		border-radius: 5px 5px 0 0;
		position: relative;
		padding:.2rem  0rem .2rem .31rem;
	}
	.kbtCnas-LifeSciences-list ul li:before{
		content:"";
		position:absolute;
		left:.15rem;top:.26rem;
		width:2px;
		height:2px;
		border-radius:50%;
		background:#4b4299;
	}
	.kbtCnas-LifeSciences-table{
		width:100%;
		margin-top:.5rem;
	}
	.kbtCnas-LifeSciences-table dl{
		float:left;
		width:2.31rem;
	}
	.kbtCnas-LifeSciences-table th{
		font:bold .16rem/.36rem Frutiger LT Std, arial;
		color:#818080;
		background:#f7f7f7;
	}
	.kbtCnas-LifeSciences-table td{
		padding-left:.2rem;
		font: normal .16rem/.22rem Frutiger LT Std,arial;
		color:#4e4e4e;
		border-bottom:1px #d9d9d9 solid;
		padding:.1rem;
	}
</style>
