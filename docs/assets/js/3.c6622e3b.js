(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(e,n,t){e.exports=t.p+"assets/img/j1.90db1afe.png"},179:function(e,n,t){"use strict";t.r(n);var s=[function(){var e=this.$createElement,n=this._self._c||e;return n("h1",{attrs:{id:"creating-new-journey-walkthrough"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-journey-walkthrough","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating new journey (walkthrough)")])},function(){var e=this.$createElement,n=this._self._c||e;return n("ol",[n("li",[n("p",[this._v("Add your public access key to your account")])]),this._v(" "),n("li",[n("p",[this._v("Clone repository:\ngit clone git@github.com:medstudio/dw-journey-spaces.git")])]),this._v(" "),n("li",[n("p",[this._v("Create some csv files in ur pc and put below data into them. (Please create more data by from your own imagination by changing month and brand and putting imaginary sale numbers, ame imaginary employees)")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("code",[this._v("sales.csv")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("    emp_id,brand,month,units,value,target\n    e1,Brand_1,Jan-2020,1000,50000,60000\n    e1,Brand_2,Jan-2020,1000,50000,60000\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br"),n("span",{staticClass:"line-number"},[this._v("3")]),n("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("code",[this._v("emp_list.csv")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("    emp_id,position_code,name\n    e1,mumbai1,Sameer Mango\n    e2,pune1,Jack Panda\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br"),n("span",{staticClass:"line-number"},[this._v("3")]),n("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[this._v("#")]),this._v(" STEPS")])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"_1-manifest-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-manifest-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. "),n("strong",[this._v("MANIFEST.JSON")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",[this._v('For hints, look at /pralok/journeys/ninja_hattori_sales_data_909\n\n\na. In the dw-journey-spaces repository, create a Journey test-client-folder\n\n    i. Find the domain of your test client (example: pralok)\n    ii. Go into dw-journey-spaces clone in your computer and create a new folder in \n        /pralok/journeys \n        and name the folder with a unique codename, \n        example: sales_automation_155\n\n    iii. Now Create a manifest.json file into this folder and **declare** following stuff \n        name (must match the foldername)\n        displayname\n        (and many fields as stated in manifest.json of ninja_hattori_sales_data_909 )\n    \n\nb. In the journey manifest declare the input files and their expected fields as following\n```\n    "inputConfig": [\n        {\n            "id": "in_file_emp_list",\n            "name": "in_file_emp_list",\n            "type": "file",\n            "fields": [\n                "emp_id",\n                "position_code",\n                "name"\n            ],\n            "upload": true,\n            "columnParser": {\n                "emp_id": "string"\n            }\n        },\n         {\n            "id": "in_sales",\n            "name": "in_sales",\n            "type": "file",\n            "fields": [\n               "emp_id",\n               "brand",\n               "month",\n               "units",\n               "value",\n               "target"\n            ],\n            "upload": true,\n            "columnParser": {\n                "emp_id": "string",\n                "value": "number",\n                "units": "number",\n                "target": "number"\n            }\n        }\n    ],\n```\nc. Also declare a field in manifest as  ``"outputCollectionNames"`` this tells how/where the result will be stored in the system. (you can have many)\n\n```\n    "outputCollectionNames": [\n        "raw_emp_list",\n        "emp_sales_by_month"\n    ]\n``` \n')])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"_2-process-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-process-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. "),n("strong",[this._v("PROCESS.JS")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n\nmodule.exports = async function (formulas, inputParams) {\n    return [ \n        // array of all parts of the journey\n\n        async()=>{\n            // part 1 of the journey\n        },\n\n        async()=>{\n            // part 2 of journey \n        }\n\n        // you can have many parts of the journey\n        // in each part you can use formulas\n\n    ]\n}\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("formulas.addKeysWithFormula(\"in_sales\", \"raw_emp_list\", [\n    { \n        newKeySet: ['created_on','joined_on'], \n        keys: 'row',\n        formula: (row)=>{\n            return {\n                created_on: new Date().toString(),\n                joined_on: (row.joined_on? row.joined_on : new Date().toString())\n            }\n        },  \n    },\n])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("formulas.addKeysWithFormula(\"in_file_emp_list\", \"emp_sales_by_month\", [\n    { \n        newKeySet: ['created_on','joined_on'], \n        keys: 'row',\n        formula: (row)=>{\n            return {\n                created_on: new Date().toString(),\n                joined_on: (row.joined_on? row.joined_on : new Date().toString())\n            }\n        },  \n    },\n])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"_3-pushing-the-journey"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-pushing-the-journey","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. "),n("strong",[this._v("PUSHING THE JOURNEY")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('git add . \ngit commit -m "created my first journey"\ngit push origin master\n')])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br"),n("span",{staticClass:"line-number"},[this._v("3")]),n("br")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",[this._v("https://dw.prd.kennectweb.com \n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("code",[this._v("outputCollectionsNames")]),this._v("\nis where we declare the names of target collections which are outputs to yhe journeys")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("then click on "),n("code",[this._v("'Core Data Management'")]),this._v(" in a sidebar which opens from "),n("code",[this._v("top left arrow")]),this._v(".")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("You will be able to view your journey and invoke it by clicking on "),n("code",[this._v("view process")]),this._v(".")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("img",{attrs:{src:t(167),alt:"all core journeys"}})])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("After the journey is complete, you may connect to the client-database and see the output colelctions and alternatively, by clicking on teh tab named  "),n("code",[this._v("MANAGE CORE DATA")]),this._v(".")])},function(){var e=this.$createElement,n=this._self._c||e;return n("h2",{attrs:{id:"_3-generate-params-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-generate-params-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. "),n("strong",[this._v("GENERATE-PARAMS.JS")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("create "),n("code",[this._v("generateParams.js")]),this._v(" file in journey folder.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("module.exports = async (params = {}, utils) => {\n    // utils object, available in this scope, will contain the functions needed to you. such as moment\n    return params\n}\n\n")])]),this._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[this._v("1")]),n("br"),n("span",{staticClass:"line-number"},[this._v("2")]),n("br"),n("span",{staticClass:"line-number"},[this._v("3")]),n("br"),n("span",{staticClass:"line-number"},[this._v("4")]),n("br"),n("span",{staticClass:"line-number"},[this._v("5")]),n("br")])])}],a=t(0),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("You can create a journey by creating a folder named xyz in the tenant_name/journies inside the dw-journey-spaces repo. Look for other journies in there to learn.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("Your goal is to Create an automation journey which puts the following data into our system as a collection.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),t("p",[e._v("Create a process.js file into this folder and copy following boilerplate")]),e._v(" "),e._m(10),t("p",[e._v("now let's use some formulas and transform the data before storing it.\nadd below lines to first part")]),e._v(" "),e._m(11),t("p",[e._v("now let's use some formulas and transform the data before storing it.\nadd below lines to second part")]),e._v(" "),e._m(12),t("p",[e._v("Try using some more formulas from "),t("router-link",{attrs:{to:"/journeys/formulas.html#formulas-docs"}},[e._v("Formulas docs")])],1),e._v(" "),e._m(13),e._v(" "),t("p",[e._v("use git to commit your changes in dw-journey-spaces,\nstage the changes, commit them and push")]),e._v(" "),e._m(14),t("p",[e._v("This will allow you to see the journey in")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),t("p",[e._v("login with credentials provided to you for test client")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),t("p",[e._v("Upload the files you created into this and run the journey.")]),e._v(" "),e._m(20),e._v(" "),t("p",[e._v("Verify that you see the latest data uploaded. Try running the journey with a new set of data and check if you see new data in output collections.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),t("p",[e._v("it can be use as a pre-processor params if survey config available else as a processParams.")]),e._v(" "),e._m(23)])}),s,!1,null,null,null);n.default=r.exports}}]);