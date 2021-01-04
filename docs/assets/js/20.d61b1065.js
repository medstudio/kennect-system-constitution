(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{188:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[s._v("#")]),s._v(" Channels")]),s._v(" "),a("p",[s._v("are used to configure web-hook like communication outbound to kennect.\noptions tells us what arguments will go into the http request and how will they be placed.\nconstants define default arguments. passed arguments always over-write defaults.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "name":"",\n    "stream":"true/false",\n    "url":"https://url:443/{pathParam1}/{pathParam2}",\n    "method":"post/get/put",\n    "options":{\n        "pathParams":["pathParam2"],\n        "query":[],\n        "body":[],\n        "headers":[],\n    },\n    "constants":{\n        "pathParams":{\n            "pathParam1":"yolo"\n        },\n        "query":{},\n        "body":{},\n        "headers":{},\n    },\n    "pageCrawl": {\n        "scope": "all",\n        "pageNumberFieldName": "pageNo",\n        "pageNumberFieldPlace": "headers"\n    },\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("constants: are default values,\nthey will be ovrridden if specified in options while calling the channel.")]),s._v(" "),a("p",[s._v("how to call the channel?\n"),a("code",[s._v("ws.channels.fetch({ ...options }).then(response=>{ useHere })")])])])}],!1,null,null,null);n.default=t.exports}}]);