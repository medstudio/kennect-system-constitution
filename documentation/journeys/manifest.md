# Manifest.json

is a declaration of how a journey should behave

## **manifest.json file should have the following properties**

```javascript
{
    "name": "test-journey"
    "displayName": "test-journey",
    "masterData": false,
    "activated": true,
    "cron": { "schedule": "00 12 * * tue" },
    "inputConfig": [],
    "dependencies": [],
    "validators": [],
    "processors": "dir", ---deprecated
    "outputCollectionNames": [],
    "storage": [],
    "webhooks":[]
}
```

"name" : The name of the manifest should be unique across a tenant journeys folder. The journey folder name should be same as this name. NOTE: this is a required field

"displayName" : The display name which will be shown on the front-end. NOTE: this is a required field

"masterData" : If the journey is a master data journey then it should have a boolean value determining the same. true specifies master data journey,
false specifies core data journey

"activated": If activated value is false then it will stop showing on the front-end. And then it cannot be run using the front-end by any type of user.

"cron": Cron object will have key value pair of schedule and cron string.
The cron string will specify on when it will run using the CRON Manager.
The server time is synced as IST.

"inputConfig": Input config will be an array refer [inputConfig.md](inputConfig.md) for more details on input config.

"dependencies": Dependencies will be an array refer [dependencies.md](dependencies.md) for more details on input config.

"validators": Validators will be an array refer [validators.md](validators.md) for more details on validators.

"processors": This property is deprecated and should no longer be written in the manifest.

"outputCollectionNames": This specifies the collections names which are to be dumped in the warehouse of the given tenant for which the journey is running. For more details on this refer [outputCollectionsNames.md](outputCollectionsNames.md).

"storage": storage will be an array refer [storage.md](storage.md) for more details on storage.

"webhooks": webhooks will be an array refer [webhooks.md](webhooks.md) for more details on webhooks.

## inputConfig array sample object

```
{
    "id": "credit_note_data",
    "name": "credit_note_data",
    "type": "file",
    "fields": [
        "division_code",
        "invoice_number",
        "date_of_invoice",
        "area_code",
        "cust_code",
        "product_id",
        "invoice_type",
        "units",
        "free_units",
        "value",
        "free_value",
        "locncd"
    ],
    "fieldsAsProject": true,
    "enforceTypesOn":{
        "EMP_CODE":"string" // this will ensure that even 101 or 10E64 will be treated as string from given column
    }
    "upload": true
}

```

## manifest.json file optional thing

```javascript
    /**User Synchronization: it first check for allowUserSynchronization is true
    then find employee_list collection in outputSysCollectionNames, if available
    then allow for sync also tenant should have access to user sync through journey
    **/


    "allowUserSynchronization": true, // use for user Synchronization
    // create collection  as sys_employee_list
    "outputSysCollectionNames": [
        "employee_list"
    ]

    /**
     * Context Injection: it's result is available in process.js
      in argument  utils = {
                     context: {
                         some_identifier_name: [{emp_id: 9292, position: LK ..}, ..]
                     }
                   }
    */
    "injectContext": [
        {
            "type": "by_ec",
            "ecv2name": "get_emp_info",
            "name": "some_identifier_name",   // context id name
            "userEgidFieldName": "emp_id", // userId params used in ec
            "limit": 1, // it by default 1, if provided then it take 1 n data in object
            "fixedParams": { // params send to Ec
                "month": "Jan"
            }
        ]
```
