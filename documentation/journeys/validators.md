## **Inbuilt validators are of 4 types**

The common fields in them are 

"type": This field specifies the type of validator in this case "inbuilt"

"name": This specifies the validator to be run eg. key-value-exists, key-exists, etc.

"sources": This is an array of [inputConfig](inputConfig.md) "id" names on which the validators are to be run.

"ignore": this is a boolean-cum-string identifier. 
1. true value specifies that if any error occurs it will be ignore for all. (users and cron)
2. false value specifies that if any error occurs it will stop the journey then and there for all. (users and cron)
3. "user" value specifies that if any error occurs it will let it run for "users" but will stop if the journey is triggered by cron.
4. "system" value specifies that if any error occurs it will let it run for "cron users" but will stop if the journey is triggered by any user.

****
**KEY EXISTS VALIDATOR**
```javascript
{
    "type": "inbuilt",
    "name": "key-exists",
    "sources": [
        "inputSalesData"
    ],
    "params": {
        "fields": [
            "TRN_MFRCD",
            "TRN_NUM",
            "TRN_DATE",
            "TRN_PARTY1",
            "TRN_ICODE1",
            "TRN_QTY",
            "TRN_TAXBLE",
            "TRN_BATCH",
            "TRN_FQTY"
        ]
    },
    "ignore":true
}
```

"params.fields": This array has the columns names which are to check if they exist on the inputConfig id on which are specified.

****
**KEY-VALUE EXISTS VALIDATOR**
```javascript
{
    "type": "inbuilt",
    "name": "key-value-exists",
    "sources": [
        "inputHqData"
    ],
    "params": {
        "fields": [
            "HQ CODE",
            "HQ NAME",
            "Count",
            "Division",
            "FY"
        ]
    },
    "ignore":false
}
```

"params.fields": This array has the columns names which are to check if they have any not empty strings on the columns on the inputConfig id on which are specified.
****
**FIELD TYPE VALIDATOR**
```javascript
{
    "type": "inbuilt",
    "name": "field-types",
    "sources": ["inputHqData"],
    "params": {
        "types": {
            "Count":"number",
            "FY":"string"
        } 
    },
    "ignore":"user"
}
```

"params.types": This is a object with key value pairs specifying column names and what data type should they be in.
****
**referential-integrity VALIDATOR**
```javascript
{
    "type": "inbuilt",
    "name": "referential-integrity",
    "sources": [
        "inputSalesData"
    ],
    "params": {
        "localFields": [
            "TRN_ICODE1"
        ],
        "remoteFields": [
            "Sap_Product_Code"
        ],
        "dataModelName": "sapProdData",
        "type": "master-storage",
        "errorText": "product not found"
    },
    "caseInsensitive": true, 
    "ignore":"system"
}
```

"params.localFields": This array of column names whose combination have been chosen from the "sources" array.

"params.dataModelName": This is the data model from which the "remoteFields" columns will be selected.

"params.remoteFields": This array of column names of the "dataModelName" from which the combination of columns are to be checked.

"params.type": This specifies the type of the "dataModelName".

"caseInsensitive": This specifies the type of checking that will be used during referential integrity default is false. THIS IS AN OPTIONAL FIELD.

"params.errorText": THis is the string which will be put during the generation of error file for each column where this error occurs.