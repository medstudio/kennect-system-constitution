## Configuring Filters in LBI Apps

filters are configured in filters object as 
```
filters:{
    ...
}
```

### hrcy in filters.hrcy 
[here](./hierarchy.md) 

### periodic filters
```
filters.periodic = 
    {
        "type": "periodic",
        "panelDisplayName": "Select Period",
        "filterKey": "month",
        "yearFilterKey": "Year",
        "yearStartFrom": 4,
        "defaultMonthValue": "YTD",
        "defaultYearValue": "2016-2017",
        "defaultMonthCurrent": true,
        "defaultYearCurrent": true,
        "months": {
            "format": {"text":"MMM", "value":"M"}, // momtntjs
        },
        "extra": [
            {
                "text": "Year Till Date",
                "value": "YTD"
            }
        ],
        "years": {
            "isNumber":true,
            "format": "YYYY",//,/"YY-YY"/"YYYY-YY"/"YYYY-YYYY", 
            "range": [ 0,-1,-2]
        }
    }
```

### Filters as custom survey
```
    "filters.other_survey"=
        {
        "type": "other_survey",
        "filterKeys": [
            "product-x",
            "sku"
        ],
        "form": {
            "name": "others",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "product-x",
                    "title": "Brand",
                    "choices": [
                        "Brand 1",
                        "Brand 2",
                        "Brand 3",
                        "Brand 4",
                        "Brand 5"
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "sku",
                    "title": "SKU",
                    "choices": [
                        "PRODUCT 1",
                        "PRODUCT 2"
                    ]
                }
            ]
        },
        "masterDataMap": []
    }
```
