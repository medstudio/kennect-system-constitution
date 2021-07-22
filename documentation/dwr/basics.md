We will explain how basic configs in dw-reports work.

This is how a report looks:

```
{
  "appTitle": "SnT Report by Omkar",
  "layout": [
    {
      "layoutName": "snt_for_pivot",
      "displayName": "SnT Details",
      "ecName": "snt_for_pivot",
      "downloadOptions": [
        {
          "type": "csv",
          "btnName": "CSV Download"
        },
        {
          "type": "xls",
          "btnName": "XLS Download"
        }
      ],
      "visualElements": [
        {
          "type": "table"
        }
      ],
      "extraVisualAid": {
        "superHeaderConf": {
          "seperator": "::"
        },
        "groupField": "_group",
        "depthAid": {
          "field": "Pdt",
          "colors": [
            "ff7043",
            "C4DDDF",
            "ff7043",
            "dadfae82",
            "bde6f1"
          ]
        }
      },
    }
  ],
  "filters": false
}
```

you can enable filters as given below
```
{
// root
 "filters": {
     
 }
}
```