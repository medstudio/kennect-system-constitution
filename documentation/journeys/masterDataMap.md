## **MASTER DATA MAP**

****
**choices_by_mortal_id_from_ec**

``` javascript
{
    "type": "choices_by_mortal_id_from_ec",
    "ecName": "sys_master_export",
    "target": "MONTH",
    "ecParams": {
        "Type": "month"
    },
    "sourceKey": ""
}
```

****
**choices_by_choice_from_ec**

``` javascript
{
    "type": "choices_by_choice_from_ec",
    "dataModelName": "master_cities",
    "target": "city",
    "targetKey": "CITY",
    "targetDisplayKey": "CITY_NAME",
    "source": "state",
    "sourceKey": "STATE"
},
```

****
**choices_by_mortal_id_from_scheme**

``` javascript
 {
     "type": "choices_by_mortal_id_from_scheme",
     "target": "schemeSetId",
     "ecName": "export_from_scheme"
 }
```

****
**choices_by_choice_from_scheme**

``` javascript
{
    "type": "choices_by_choice_from_scheme",
    "from": "ec",
    "ecName": "get_divs_for_inc",
    "target": "divisionsList",
    "sourceKeysMap": {
        "fy": "financialYear",
        "qtr": "generatorQ",
        "schemeSetId": "schemeSetId"
    }
}
```

****
**choices_by_sys**

``` javascript
{
    "type": "choices_by_sys",
    "target": "Financial_Year",
    "command": {
        "name": "financialYears",
        "params": {
            "format": "YYYY",
            "displayFormat": "YYYY",
            "base": "current",
            "isNumber": true,
            "default": "current",
            "from": -2,
            "to": 1
        }
    }
}, {
    "type": "choices_by_sys",
    "target": "month",
    "command": {
        "name": "months",
        "params": {
            "format": "MM",
            "displayFormat": "MMM",
            "base": "all",
            "default": "current"
        }
    }
}
```
****
