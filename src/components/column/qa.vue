<template>
	<div id="qa">
		<div class="qa-nav">
			<h1>Quality at Cobetter</h1>
			<ul>
				<li><a href="#kbtQA-list1">Quality Manergement |</a></li>
				<li><a href="#kbtQA-list2">　Third Party Centificates</a></li>
				<li><a href="#kbtQA-list3">Precess Contronl & Decetion  |</a></li>
				<li><a href="#kbtQA-list4">Raw Material & Decection</a></li>
				<li><a href="#kbtQA-list5">Filtration and Food Contact Compliance</a></li>
			</ul>
		</div>
		<ul class="kbtQa">
			<li id="#kbtQA-list1" class="kbtQa-list1" :class="{kbtHeight:kbtQAHeight === 'list1'}">
				<h1>Manufacturing Process Focus – Monitoring of Regulations for the Entire Manufacturing Process</h1>
				<ul>
					<li>Inspection Prior to Manufacturing Procedure – Verification of materials, tools,  and methods. The entire process is monitored and controlled to ensure product quality.</li>
					<li>Verification and Inspection of Initial Product – Inspection of materials, product,  equipment, and parameters by monitoring each procedure and recording results to ensure that the operation adquality control are effective.</li>
					<li>Inspection of Semi-Completed and Completed Goods – Monitor and inspect the entire procedure to ensure product meets the necessary standards and  requirements.</li>
					<li>Feedback – Provide feedback on products and follow-up with any issues.</li>
				</ul>
				<div class="kbtQa-list1-Img">
					<img src="/static/img/QA-list01.png"/>
				</div>
				<div class="kbtqa-shadow"></div>
				<div class="kbtqa-down" @click="kbtQA('list1')" :class="{kbtSlate:kbtQAHeight === 'list1'}"></div>
			</li>
			<li id="kbtQA-list2" class="kbtQa-list1" :class="{kbtHeight:kbtQAHeight !== 'list2'}">
				<h1>Third Party Centificates</h1>
				<ul>
					<li>ISO QMS Certificatio</li>
					<li>97/23/EC Pressure Equipment(CE-Mark for Cobetter Filter Housings)</li>
					<li>The document administered by State Ministry of Health involved in drinking water safety products permission of the manufacturers</li>
					<li>Report on filter’s sanitary Inspection (Inspection in advance)</li>
					<li>ROSH testing certificate by SGS</li>
					<li>Overall migration in Water by SGS approve to FDA status</li>
					<li>No. 370 Test Report by the Ministry of Health, Labor and Welfare of Japan</li>
					<li>MSDS material safety test report</li>
				</ul></li>
			<li id="kbtQA-list3" class="kbtQa-list1 kbtQa-list3" :class="{kbtHeight:kbtQAHeight === 'list3'}">
				<h1>Precess Contronl & Decetion</h1>
				<div class="kbtQa-list1-Img3">
					<img src="/static/img/QA-list03.png"/>
				</div>
				<h2>Manufacturing Process Focus –Monitoring of Regulations for the Entire Manufacturing Process.</h2>
				<ul>
					<li>Inspection Prior to Manufacturing Procedure – Verification of materials, tools, and methods. The entire process is monitored and controlled to ensure product quality.</li>
					<li>Verification and Inspection of Initial Product – Inspection of materials , product , equipment , and parameters by monitoring each procedure and recording results to ensure that the operation and quality control are effective.</li>
					<li>Inspection of Semi-Completed and Completed Goods – Monitor and inspect the entire procedure to ensure product meets the necessary standards and requirements.</li>
					<li>Feedback – Provide feedback on products and follow-up with any issues.</li>
					<li>ROSH testing certificate by SGS</li>
					<li>Overall migration in Water by SGS approve to FDA status</li>
					<li>No. 370 Test Report by the Ministry of Health, Labor and Welfare of Japan</li>
					<li>MSDS material safety test report</li>
				</ul>
				<div class="kbtqa-shadow"></div>
				<div class="kbtqa-down" @click="kbtQA('list3')" :class="{kbtSlate:kbtQAHeight === 'list3'}"></div>
			</li>
			<li id="kbtQA-list4" class="kbtQa-list1 kbtQa-list4" :class="{kbtHeight:kbtQAHeight !== 'list4'}">
				<h1>Raw Material & Decection</h1>
				<h2>Option for raw material orgin and suppliers</h2>
				<ul>
					<li>We Choose raw material suppliers who are FDA approval or use FDA approval raw material products.</li>
					<li>We Choose large scale and stable international well-known raw material suppliers.</li>
					<li>Evaluate suppliers annually .</li>
				</ul>
				<h2>Raw material detection</h2>
			</li>
			<li id="kbtQA-list5" class="kbtQa-list1 kbtQa-list5" :class="{kbtHeight:kbtQAHeight !== 'list5'}">
				<h1>Filtration and Food contact Compliance</h1>
				<p>
					Higher quality standards and focus on improved customer protection lead to a series of compliance requirements in the Food and Beverage industry, consolidating and extending existing regulations on food safety. This includes requirements for products intended to come in contact with food leading to specific standards relevant for food manufacturers and their suppliers.
				</p>
			</li>
		</ul>		
	</div>
</template>

<script>
  export default{
    data () {
      return {
        kbtQAHeight: '',
        kbtQaIcon: false
      }
    },
    methods: {
      kbtQA: function (elm) {
        if (this.kbtQAHeight === elm) {
          this.kbtQAHeight = ''
        } else if (this.kbtQAHeight !== elm) {
          this.kbtQAHeight = elm
        }
      }
    }
  }
</script>

<style>
	#qa{
		padding:.31rem .3rem 0;
	}
	.qa-nav h1{
		font:bold .28rem/.38rem Frutiger LT Std, arial;
		color:#3c5288;
	}
	.qa-nav ul{
		font-size:0px;
	}
	.qa-nav ul li{
		display:inline-block;
	}
	.qa-nav ul li a{
		font:normal .24rem/.38rem Frutiger LT Std, arial;
		color:#6d6d6d;
	}
	.kbtQa{
		margin-top:.47rem;
		padding-bottom:.2rem;
		position:relative;
	}
	.kbtQa-list1{
		height:5rem;
		overflow: hidden;
		position:relative;
		padding-bottom:24px;
		margin-top:.4rem;
	}
	.kbtQa-list1 h1{
		font:.36rem/.48rem Neo Sans Std,arial;
		color:#3c5288;
	}
	.kbtQa-list1 ul{
		padding-left:.35rem;
	}
	.kbtQa-list1 ul li{
		list-style-type:disc;
		font:normal .2rem/.36rem Frutiger LT Std,arial;
		color:#000;
	}
	.kbtQa-list1-Img{
		width:100%;
		height:100%;
		margin-top:.26rem;
	}
	.kbtQa-list1-Img img{
		width:100%;
		height:100%;
	}
	.kbtqa-shadow{
		width:100%;
		box-shadow: 0px 1px 4px 20px #fff;
		-webkit-box-shadow: 0px 1px 4px 45px #fff;
		position:absolute;
		left:0;
		bottom:0;
		z-index: 1;
	}
	.kbtqa-down{
		width:.8rem;
		height:.5rem;
		position:absolute;
		left:50%;
		bottom:0;
		margin-left:-.2rem;
		z-index: 1;
		background:url(/static/img/down.png)no-repeat center;
	}
	.kbtQa-list1-Img3{
		height:2.14rem;
	}
	.kbtQa-list1-Img3 img{
		width:100%;
		height:100%;
	}
	.kbtQa-list1 h2{
		font:.2rem/.34rem Frutiger LT Std,arial;
		color:#495e90;
		margin-top:.3rem;
	}
	.kbtQa-list3 h1{
		margin-bottom:.2rem;
	}
	.kbtQa-list4 h2{
		margin: .1rem 0;
	}
	.kbtQa-list4 ul{
		width:5rem;
	}
	.kbtQa-list4-img{
		width:1rem;
		height:1rem;
		background:url(/static/img/QA-list4.png)no-repeat center;
		position: absolute;
		right:0;
		top:1rem;
		background-size:contain;
	}
	.kbtQa-list4{
		height:3rem;
		padding-bottom:.4rem;
	}
	.kbtQa-list5{
		height:3rem;
	}
	.kbtQa-list5 p{
		font:.16rem/.34rem Frutiger LT Std,arial;
		color:#393939;
		margin-top:.2rem;
	}
	/*点击效果*/
	.kbtHeight{
		height: inherit;
	}
	.kbtSlate{
	    transform: rotate(180deg);
	}
</style>
