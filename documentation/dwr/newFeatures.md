We will explain how basic configs in dw-reports work.

# pivot table 
```
{
  "appTitle": "SnT Report by Omkar",
  "layout": [
    {
      "layoutName": "snt_for_pivot",
      "displayName": "SnT Details",
      "ecName": "snt_for_pivot",
      "downloadOptions": [],
      "visualElements": [
        {
          "type": "pivot",
          "initial": {
            "aggregatorName": "Average",
            "pField": "AvgSales",
            "rows": [
              "ZONE",
              "TER CODE"
            ],
            "cols": [
              "Product Name"
            ]
          }
        },
        {
          "type": "table"
        }
      ]
    }
  ],
  "filters": false
}
```


```
// root.layout[0].visualElements[0].
{
  "type": "pivot",
  "initial": {
    "aggregatorName":"Average", // any from aggregatorMap given below	
    "pField":"AvgSales", // can be any column with numbers
    "rows":["ZONE"],  // can be any field on which we can group
    "cols":["Product Name"] // can be any field on which we can group

    rowOrder:"value_a_to_z" "key_a_to_z"
    disabledFromDragDrop: [], // ['Payer Gender'],
    hiddenFromDragDrop: [],
    hiddenAttributes: [],
    hiddenFromAggregators: [],
    sortonlyFromDragDrop: [], // ['Party Size'],
    pivotColumns: ["ZONE", "REGION", "TER CODE"],	
  }
}

// options 
aggregatorMap: {
    Count: "Count",
    "Count Unique Values": "Count Unique Values",
    "List Unique Values": "List Unique Values",
    Sum: "Sum",
    "Integer Sum": "Integer Sum",
    Average: "Average",
    Median: "Median",
    "Sample Variance": "Sample Variance",
    "Sample Standard Deviation": "Sample Standard Deviation",
    Minimum: "Minimum",
    Maximum: "Maximum",
    First: "First",
    Last: "Last",
    "Sum over Sum": "Sum over Sum",
    "Sum as Fraction of Total": "Sum as Fraction of Total",
    "Sum as Fraction of Rows": "Sum as Fraction of Rows",
    "Sum as Fraction of Columns": "Sum as Fraction of Columns",
    "Count as Fraction of Total": "Count as Fraction of Total",
    "Count as Fraction of Rows": "Count as Fraction of Rows",
    "Count as Fraction of Columns": "Count as Fraction of Columns",
},
	  
// options	  
rendererNames: {
    Table: "Table",
    "Table Heatmap": "Table Heatmap",
    "Table Col Heatmap": "Table Col Heatmap",
    "Table Row Heatmap": "Table Row Heatmap",
    "Export Table TSV": "Export Table TSV",
    "Grouped Column Chart": "Grouped Column Chart",
    "Stacked Column Chart": "Stacked Column Chart",
    "Grouped Bar Chart": "Grouped Bar Chart",
    "Stacked Bar Chart": "Stacked Bar Chart",
    "Line Chart": "Line Chart",
    "Dot Chart": "Dot Chart",
    "Area Chart": "Area Chart",
    "Scatter Chart": "Scatter Chart",
    "Multiple Pie Chart": "Multiple Pie Chart",
}
		  
```