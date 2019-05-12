## Creating LBI Dashboards

LBI is a tool we offer that you can create dashboards with.

## Drill Down Feature in LBI template
How to
in drill object, define maximum drill depth by maxLevel and extra layouts if used

```
"drill": {
    "maxLevel": 2,
    "layout2": [], // this can be any name for layout unique in this app
    "layout3": [],
}
```

### on click of a row in table chart
add a onChartRowSelect parameter to your chart element
chart must be a table as of now

```
{
    "type:"chart",
    "name:"chartName",
    "onChartRowSelect": {
        "layoutName": "layout2",
        "extractParams": {
            "product": "PRODUCT"
        }
    }
}
```

### templateData must look like
``` 
{
    "appTitle": "Sales Report",
    // level 1
    "showDateModifiedFrom": "collection from which the doc.lastUpdatedOn will come , doc.pref shuld be this one",
    "initialDefaultParams": {
        "type": "direct",
        "putUserIdAs": "empCode",
        "fixedParams": {
            "emp_kida": "kilogram",
            "emp_type": "manager"
        }
    },
    "initialDefaultParams2": {
        "type": "by_ec",
        "putUserIdAs": "empCode",
        "fixedParams": {
            "emp_type": "manager-just an extra parameter to demonstrate"
        },
        "modelName": "current_emp_code_to_no",
        "ecName": "get_emp_data",
        "sendUserIdInEcParamsAs": "",
        "fixedEcParams": {},
        "extractParams": {
            "EMP_NO": "EMP_NO"
        }
    },
    // level 1
    "filters": {
        ... explained in filters.md
    },
    // level 1
    "layout": [
        {
            "type": "card",
            "elements": [
                {
                    "type": "chart",
                    "onChartRowSelect": {
                        "layoutName": "layout2",
                        "extractParams": {
                            "product": "PRODUCT"
                        }
                    },
                    "name": "product_ws1_table"
                }
            ]
        },
        {
            "type": "card",
            "elements": [
                {
                    "type": "chart",
                    "onChartRowSelect": {
                        "layoutName": "layout2",
                        "extractParams": {
                            "product": "PRODUCT"
                        }
                    },
                    "name": "product_ws2_table"
                }
            ]
        },
        {
            "type": "chart",
            "name": "bn1"
        },
        {
            "type": "two-big-numbers",
            "elements": [
                {
                    "type": "chart",
                    "name": "bn1"
                },
                {
                    "type": "chart",
                    "name": "bn1"
                }
            ]
        },
        {
            "type": "accordian",
            "elements": [
                {
                    "type": "chart",
                    "name": "ppsc1"
                },
                {
                    "type": "chart",
                    "name": "sales_trend"
                },
                {
                    "type": "chart",
                    "name": "product_ws1_table"
                }
            ]
        },
        {
            "type": "card",
            "elements": [
                {
                    "type": "chart",
                    "name": "sales_trend"
                },
                {
                    "type": "chart",
                    "name": "product_ws1_table"
                }
            ]
        }
    ],
    // level 1
    "drill": {
        "maxLevel": 2,
        "layout2": [
            {
                "type": "chart",
                "name": "bn1"
            },
            {
                "type": "chart",
                "name": "bn1"
            },
            {
                "type": "card",
                "elements": [
                    {
                        "type": "chart",
                        "onChartRowSelect": {
                            "layoutName": "layout2",
                            "extractParams": {
                                "product": "PRODUCT"
                            }
                        },
                        "name": "product_ws1_table"
                    }
                ]
            }
        ]
    }
    // level 1
}
```

### miniSurvey inside an lbi dashboard

```
//layout.push(
{
    "type": "mini_survey",
    "title": "Details",
    "name": "mini_survey_name",
    "surveyJSON": {},

    // pre render decision maker
    "renderDecisionBy": "SERVICE",
    "preRenderEC": "rx_planner",
    "preRenderECModelName": "modelname",
    // optional , either use preRenderEC or preRenderService one of them  
    "preRenderService": "managerServiceName",

    // other params
    "sendEmployerGIDAs": "vs_id",
    "sendTenantGIDAs": "tgid",
    "extraECParams": {},

    // on complete stuff
    "onSubmitService": "",
    "extraServiceParams": {},
    "masterDataMap": {}
}
//)
```

#### Response of a miniSurvey Pre-conditioner should look like
```
// serviceResponse
// miniSurveyPreRenderResponse should be 
{
    mode: hidden / display / edit
    data: { key: 'previously filled data' }
    choicesMap: {
        questionName: [{
            text, value
        }]
    }
}
```

