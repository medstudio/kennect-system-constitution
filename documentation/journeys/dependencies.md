## **Dependencies array has 2 types of objects**

### NOTE:

### Core data journeys result in output collections with prefix "core_".<br/>Master data journeys result in output collections with prefix "master_".<br/>Accordingly type field below should be taken care of while creating the manifest.json.

`` _injectableParams: `` it is the processParams from survey or generateParams.js. 

       If only generateParams.js exist in journey then the output from this function treat as processParams.
       If survey config present then selected params would be processParams 

**CORE AND MASTER DEPENDENCY**

``` javascript
{
    "type": "core-storage",
    "id": "emp_No_Consolidation",
    "name": "emp_No_Consolidation",
    "aggregation": [{
        "$match": {
            "FY": "_injectableParams.FY"
        }
    }]
}, {
    "type": "master-storage",
    "id": "incentive_product_data",
    "name": "incentive_product_data"
}, {
    "type": "op-storage",
    "id": "nhd_order_approval_data",
    "name": "nhd_order_approval_data"
}
```

"type": Specifies if it is either a core collection or a master collection or operational data

"id": Name of the collection name taken from the warehouse.

"name": This is displayed in the front-end specifiying the dependencies.
