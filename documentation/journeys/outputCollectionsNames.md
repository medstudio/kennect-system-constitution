## **Output collections is an array with the following type of object or string**

### NOTE: 

### Core data journeys result in output collections with prefix "core_"<br/>Master data journeys result in output collections with prefix "master_"

``` javascript
"outputCollectionNames": [
    "brands_sku_secondary"
]

// or if you want to index the output collections use the below

"outputCollectionNames": [{
    "id": "EmployeeData",
    "indexes": ["Position_No", "Emp_Code"]
}]
// it will collection with ``sys_`` as prefix 
"outputSysCollectionNames": [
    "employee_list" // it will create a collection as sys_employee_list
]
```
