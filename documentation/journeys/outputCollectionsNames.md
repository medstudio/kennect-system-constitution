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
    "indexes": ["Position_No", "Emp_Code"],
    "sourceCollection": "fresh_data_4", // optional -> collection in crunch from which we will PICK-UP the data
    "sourceDb": "process_data", // optional - default process_data , ENUM -  process_data / input_data

    "movebackAppend": { // optional
        //  purpose: append moveback
        //  workin: EmployeeData collection will be appended with fresh_data_4 on below specified keys, fresh_data_4 will Win the conflicts.
        "enable": true, // toggle
        "keys": [ // kkeys to append on
            "Month",
            "FY"
        ]
    }
}]
// it will collection with ``sys_`` as prefix 
"outputSysCollectionNames": [
    "employee_list" // it will create a collection as sys_employee_list
    
]
```
