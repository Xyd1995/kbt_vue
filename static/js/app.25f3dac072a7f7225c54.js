webpackJsonp([1],[,,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"../static/img/banner_01.9a77d33.jpg"},function(t,e,s){s(76);var a=s(5)(s(55),s(83),null,null);t.exports=a.exports},,,,,,,,,function(t,e,s){"use strict";var a=s(2),r=s(88);a.default.use(r.a);var i=new r.a({routes:[{path:"/home",component:s(16),alias:"/",children:[{path:"kbt-show",component:s(82),alias:"/"}]}]});e.a=i},,function(t,e){},function(t,e,s){s(79);var a=s(5)(s(54),s(86),null,null);t.exports=a.exports},function(t,e,s){s(77);var a=s(5)(s(57),s(84),null,null);t.exports=a.exports},function(t,e,s){s(78);var a=s(5)(s(58),s(85),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(30),r=(s.n(a),s(16)),i=(s.n(r),s(29));s.n(i);throw new Error('Cannot find module "../static/css/shared.css"')},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{kbt:!0,kbt1:!1}},mounted:function(){new Swiper(".swiper-container",{direction:"horizontal",loop:!0,width:window.innerWidth})},methods:{kbtTab:function(){this.kbt=!this.kbt,this.kbt1=!this.kbt1}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mode:[{title:"Cobetter Sterilizing Grade Filter Cartridges DMF Acknowledged by the FDA",time:new Date,description:"Cobetter Sterilizing Grade Filter Cartridges are now listed in DMF (Class II DMF Number 031365) which means that they comply with U.S. FDA requirements with the potential to help pharmaceutical customers with New Drug Applications.",urlimg:"./static/img/kbtshow-02.png",kbtshowBg:"123"},{title:"Cobetter 2nm HAPES Filter Improves Semiconductor Fabrication Yield",time:new Date,description:"14nm nodes required the complete removal of external contaminants during the cleaning process to preserve chip quality.  As the first filtration company in China to manufacture this type of filter, our customers improve their Clean Process efficiencies which results in increased fabrication yields and reduced chemical usage.",urlimg:"./static/img/kbtshow-01.png"}],kbtshow_products:{sell:{title:"Activated Carbon CSD-C Lenticular Filter Series",description:"Cobetter CSD-C® Lenticular Filter Series adds activated carbon to the wood fiber.  It is suitable for industries that need",URLImg:"../static/img/productsListBan.png"},ProductsList:[{name:"High Flow Filter Cartridge",productsImg:"../static/img/productsList01.png"},{name:"High Flow Filter Cartridge",productsImg:"../static/img/productsList02.png"},{name:"H-FRP Housing",productsImg:"../static/img/productsList03.png",sellStyel:!0},{name:"H-FRP Housing",productsImg:"../static/img/productsList04.png",sellStyel:!0},{name:"High Flow Filter Cartridge",productsImg:"../static/img/productsList05.png"},{name:"High Flow Filter Cartridge",productsImg:"../static/img/productsList06.png"}]},swiperBaclk1:!0,swiperBaclk2:!1}},mounted:function(){var t=new Swiper(".swiper-container",{notNextTick:!0,direction:"horizontal",loop:!0,width:window.innerWidth,autoHeight:!0,pagination:".swiper-pagination",paginationClickable:!0,runCallbacks:!0,onTouchEnd:function(){1===t[1].activeIndex?(e._data.swiperBaclk1=!1,e._data.swiperBaclk2=!0):2===t[1].activeIndex&&(e._data.swiperBaclk1=!0,e._data.swiperBaclk2=!1)}}),e=this}}},function(t,e){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{kbt1:!1}},methods:{handleOpen:function(t,e){},handleClose:function(t,e){},getKbt:function(){this.$http.get("./static/kbtjson.json").then(function(t){console.log(t)},function(t){alert("数据请求失败")})}}}},,,,,,,,,,,,,,,,,,function(t,e){throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../../static/img/bg.jpg' in 'E:\\vuekbt\\src\\components\\home'\n    at factoryCallback (E:\\vuekbt\\node_modules\\_webpack@2.6.0@webpack\\lib\\Compilation.js:264:39)\n    at factory (E:\\vuekbt\\node_modules\\_webpack@2.6.0@webpack\\lib\\NormalModuleFactory.js:247:20)\n    at resolver (E:\\vuekbt\\node_modules\\_webpack@2.6.0@webpack\\lib\\NormalModuleFactory.js:65:21)\n    at asyncLib.parallel.e (E:\\vuekbt\\node_modules\\_webpack@2.6.0@webpack\\lib\\NormalModuleFactory.js:138:21)\n    at E:\\vuekbt\\node_modules\\_async@2.4.1@async\\dist\\async.js:3838:9\n    at E:\\vuekbt\\node_modules\\_async@2.4.1@async\\dist\\async.js:421:16\n    at iteratorCallback (E:\\vuekbt\\node_modules\\_async@2.4.1@async\\dist\\async.js:996:13)\n    at E:\\vuekbt\\node_modules\\_async@2.4.1@async\\dist\\async.js:906:16\n    at E:\\vuekbt\\node_modules\\_async@2.4.1@async\\dist\\async.js:3835:13\n    at resolvers.normal.resolve (E:\\vuekbt\\node_modules\\_webpack@2.6.0@webpack\\lib\\NormalModuleFactory.js:130:23)\n    at onResolved (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\Resolver.js:70:11)\n    at loggingCallbackWrapper (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (E:\\vuekbt\\node_modules\\_tapable@0.2.6@tapable\\lib\\Tapable.js:181:46)\n    at innerCallback (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\Resolver.js:125:19)\n    at loggingCallbackWrapper (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at E:\\vuekbt\\node_modules\\_tapable@0.2.6@tapable\\lib\\Tapable.js:283:15\n    at E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\UnsafeCachePlugin.js:38:4\n    at loggingCallbackWrapper (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (E:\\vuekbt\\node_modules\\_enhanced-resolve@3.1.0@enhanced-resolve\\lib\\createInnerCallback.js:31:19)")},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,s){s(80);var a=s(5)(s(56),s(87),null,null);t.exports=a.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kbtHome"}},[t._m(0),t._v(" "),s("el-row",{staticClass:"kbtCentet",attrs:{gutter:4}},[s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_01"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])]),t._v(" "),s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_02"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])]),t._v(" "),s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_03"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])]),t._v(" "),s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_04"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])]),t._v(" "),s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_05"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])]),t._v(" "),s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_06"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])]),t._v(" "),s("el-col",{attrs:{sm:4,span:12}},[s("div",{staticClass:"grid-content bg-purple kbtshow_07"},[s("div",{staticClass:"kbtIndustry"},[s("h1",[t._v("Microelectronics")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("- CMP Filtration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- FPD Wet Process")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Electronics Chemicals")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- Hard Disk")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("- HBLED")])])]),t._v(" "),s("a",{staticClass:"kbtIndustryUrl",attrs:{href:"#"}},[t._v("+ More")])])])])],1),t._v(" "),s("router-view"),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container",staticStyle:{height:"4.5rem"}},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:s(15)}}),t._v(" "),a("div",{staticClass:"kbt_bannerText"},[a("p",[t._v("Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.")])])]),t._v(" "),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:s(15)}}),t._v(" "),a("div",{staticClass:"kbt_bannerText"},[a("p",[t._v("Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.")])])]),t._v(" "),a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:s(15)}}),t._v(" "),a("div",{staticClass:"kbt_bannerText"},[a("p",[t._v("Founded in 2007 with a 50 million RMB investment, Cobetter Filtration Validation Center has been accredited by China National Accreditation Service for Conformity Assessment (CNAS). Our Validation Center Team includes 10 international experts and 30 lab technicians.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"kbtHome-advertising"},[a("div",{staticClass:"kbtHome-advertising-images"},[a("img",{attrs:{src:s(!function(){var t=new Error('Cannot find module "../../../static/img/advertising.png"');throw t.code="MODULE_NOT_FOUND",t}())}})]),t._v(" "),a("p",{staticClass:"kbtHome-advertising-txt"},[t._v("\n\t\t\tOver 1200 technical analysis reports for customers in the pharmaceutical industry and 1300 technical analysis reports for customers in electronics, chemical, and life science industries annually. \n\t\t")])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"kbt-footer"}},[a("div",{staticClass:"kbt-footer"},[a("img",{attrs:{src:s(!function(){var t=new Error('Cannot find module "../../../static/img/kbtFooter-logo.jpg"');throw t.code="MODULE_NOT_FOUND",t}())}}),t._v(" "),a("div",{staticClass:"kbt-footer-address"},[a("h1",[t._v("Hangzhou Cobetter Filtration Equipment Co.,Ltd")]),t._v(" "),a("p",[t._v("Hangzhou Cobetter Filtration Equipment Co.,Ltd")]),t._v(" "),a("p",[t._v("Email   sales@cobetterfilter.com")])]),t._v(" "),a("div",{staticClass:"kbt-footer-address"},[a("h1",[t._v("Sales")]),t._v(" "),a("p",[t._v("16/F, Longhe International Building, No.1961,"),a("br"),t._v("\n\t\t\t   Jianghui Road, Binjiang District,"),a("br"),t._v("\n\t\t\t   Hangzhou 310052, China")])]),t._v(" "),a("div",{staticClass:"kbt-footer-address"},[a("h1",[t._v("Factory")]),t._v(" "),a("p",[t._v("Heshang Industry Section, Xiaoshan, Hangzhou"),a("br"),t._v("310053, China")])]),t._v(" "),a("div",{staticClass:"clear"})]),t._v(" "),a("div",{staticClass:"kbt-footer-link"},[a("ul",[a("li",[a("a",{attrs:{href:""}},[a("img",{attrs:{src:s(!function(){var t=new Error('Cannot find module "../../../static/img/kbt-footer-link1.jpg"');throw t.code="MODULE_NOT_FOUND",t}())}})])]),a("li",[a("a",{attrs:{href:""}},[a("img",{attrs:{src:s(!function(){var t=new Error('Cannot find module "../../../static/img/kbt-footer-link2.jpg"');throw t.code="MODULE_NOT_FOUND",t}())}})])]),a("li",[a("a",{attrs:{href:""}},[a("img",{attrs:{src:s(!function(){var t=new Error('Cannot find module "../../../static/img/kbt-footer-link3.jpg"');throw t.code="MODULE_NOT_FOUND",t}())}})])])])]),t._v(" "),a("div",{staticClass:"clear"})])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kbt-header"}},[t._m(0),t._v(" "),s("div",{staticClass:"cobetterNav"},[s("el-button",{attrs:{type:"white",icon:"search"},on:{click:t.getKbt}}),t._v(" "),s("el-button",{attrs:{type:"white",icon:"menu"},on:{click:function(e){t.kbt1=!t.kbt1}}})],1),t._v(" "),s("transition",{attrs:{"enter-active-class":"kbtslide_in","leave-active-class":"kbtslide_out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.kbt1,expression:"kbt1"}],staticClass:"kbt_menu"},[s("el-row",{staticClass:"tac"},[s("el-col",[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",theme:"dark"},on:{open:t.handleOpen,close:t.handleClose}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[t._v("Pharmaceutical")]),t._v(" "),s("el-submenu",{attrs:{index:"1-2"}},[s("template",{slot:"title"},[t._v("Preparations")]),t._v(" "),s("div",{staticClass:"kbtIndustries_column"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Preparations")])])])])],2)],2),t._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[t._v("Food & Beverage")])],2),t._v(" "),s("el-submenu",{attrs:{index:"3"}},[s("template",{slot:"title"},[t._v("Microelectronics")])],2),t._v(" "),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[t._v("Fine Chemiacl")])],2),t._v(" "),s("el-submenu",{attrs:{index:"5"}},[s("template",{slot:"title"},[t._v("Medical")])],2),t._v(" "),s("el-submenu",{attrs:{index:"6"}},[s("template",{slot:"title"},[t._v("Laboratory")])],2),t._v(" "),s("el-menu-item",{attrs:{index:"9"}},[t._v("Last News")]),t._v(" "),s("el-menu-item",{attrs:{index:"10"}},[t._v("About Us")]),t._v(" "),s("el-menu-item",{attrs:{index:"11"}},[t._v("Validation Services")]),t._v(" "),s("el-menu-item",{attrs:{index:"12"}},[t._v("Quality Assurance")]),t._v(" "),s("el-menu-item",{attrs:{index:"13"}},[t._v("Contact Us")])],1)],1)],1)],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cobetterLogo"},[a("img",{attrs:{src:s(81)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("kbtheader"),t._v(" "),s("router-view"),t._v(" "),s("kbtFooter")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kbtShow"}},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"kbtshow-Page"},[s("div",{class:{kbtshow_page_color:t.swiperBaclk1},attrs:{id:"News"}},[t._v("News & Events")]),s("span",[t._v("/")]),s("div",{class:{kbtshow_page_color:t.swiperBaclk2},attrs:{id:"Feadture"}},[t._v("Feature Products")])]),t._v(" "),s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"kbtshow-homeNews"},[t._l(t.mode,function(e,a){return s("div",{key:e,class:{kbtshowBg:e.kbtshowBg}},[s("div",{staticClass:"kbtshow-news"},[s("div",{staticClass:"kbtshow-text"},[s("h1",[t._v(t._s(e.title))]),t._v(" "),s("h6",[t._v(t._s(e.time))]),t._v(" "),s("p",[t._v(t._s(e.description))])]),t._v(" "),s("div",{staticClass:"kbtshow-img"},[s("img",{attrs:{src:e.urlimg}})]),t._v(" "),s("div",{staticStyle:{clear:"both"}})])])}),t._v(" "),s("a",{staticClass:"kbtshowUrl"},[t._v("Load more News")])],2)]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"kbtshow-products"},[s("div",{staticClass:"kbtshow-products-Featured"},[s("img",{attrs:{src:t.kbtshow_products.sell.URLImg}}),t._v(" "),s("div",{staticClass:"Featured-description"},[s("h1",[t._v(t._s(t.kbtshow_products.sell.title))]),t._v(" "),s("p",[t._v("\n        \t\t\t\t\t\t"+t._s(t.kbtshow_products.sell.description)+"\n        \t\t\t\t\t")]),t._v(" "),s("a",{staticClass:"sellLoaction"},[t._v("more")]),t._v(" "),s("div",{staticClass:"clear"})])]),t._v(" "),s("ul",{staticClass:"kbtshow-products-sell"},t._l(t.kbtshow_products.ProductsList,function(e,a){return s("li",{key:e.name,class:{kbtshow_sellStyle:e.sellStyel}},[s("h1",[t._v(t._s(e.name))]),t._v(" "),s("img",{attrs:{src:e.productsImg}})])})),t._v(" "),s("a",{staticClass:"kbtshowUrl"},[t._v("Load more products")])])])]),t._v(" "),s("div",{staticClass:"swiper-pagination"})])])},staticRenderFns:[]}}],[53]);
//# sourceMappingURL=app.25f3dac072a7f7225c54.js.map