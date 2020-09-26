(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{180:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("filters are configured in filters object as")]),s._v(" "),s._m(1),s._m(2),s._v(" "),a("p",[a("router-link",{attrs:{to:"./hierarchy.html"}},[s._v("here")])],1),s._v(" "),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6)])}),[function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"configuring-filters-in-lbi-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-filters-in-lbi-apps"}},[this._v("#")]),this._v(" Configuring Filters in LBI Apps")])},function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("filters:{\n    ...\n}\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br"),n("span",{staticClass:"line-number"},[this._v("3")]),n("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"hrcy-in-filters-hrcy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hrcy-in-filters-hrcy"}},[this._v("#")]),this._v(" hrcy in filters.hrcy")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"periodic-filters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#periodic-filters"}},[this._v("#")]),this._v(" periodic filters")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('filters.periodic = \n    {\n        "type": "periodic",\n        "panelDisplayName": "Select Period",\n        "filterKey": "month",\n        "yearFilterKey": "Year",\n        "yearStartFrom": 4,\n        "defaultMonthValue": "YTD",\n        "defaultYearValue": "2016-2017",\n        "defaultMonthCurrent": true,\n        "defaultYearCurrent": true,\n        "months": {\n            "format": {"text":"MMM", "value":"M"}, // momtntjs\n        },\n        "extra": [\n            {\n                "text": "Year Till Date",\n                "value": "YTD"\n            }\n        ],\n        "years": {\n            "isNumber":true,\n            "format": "YYYY",//,/"YY-YY"/"YYYY-YY"/"YYYY-YYYY", \n            "range": [ 0,-1,-2]\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"filters-as-custom-survey"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filters-as-custom-survey"}},[this._v("#")]),this._v(" Filters as custom survey")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    "filters.other_survey"=\n        {\n        "type": "other_survey",\n        "filterKeys": [\n            "product-x",\n            "sku"\n        ],\n        "form": {\n            "name": "others",\n            "elements": [\n                {\n                    "type": "dropdown",\n                    "name": "product-x",\n                    "title": "Brand",\n                    "choices": [\n                        "Brand 1",\n                        "Brand 2",\n                        "Brand 3",\n                        "Brand 4",\n                        "Brand 5"\n                    ]\n                },\n                {\n                    "type": "dropdown",\n                    "name": "sku",\n                    "title": "SKU",\n                    "choices": [\n                        "PRODUCT 1",\n                        "PRODUCT 2"\n                    ]\n                }\n            ]\n        },\n        "masterDataMap": []\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])])}],!1,null,null,null);n.default=t.exports}}]);