## **Input config is an array with 5 types of input config objects which are possible**

**FILE INPUT***

``` javascript
{
    "id": "divisionData",
    "name": "divisionData",
    "type": "file",
    "fields": [
        "Division",
        "Sales_Division"
    ],
    "fieldsAsProject": true,
    "upload": true
}
```

"id" : This field is the actual name in which the input collection data is present after uploading the file from front-end. Collection will be accessible using this name in process.js

"name" : This name will be displayed on the front-end while prompting file upload.

"type" : This specifies that the above object is of file type.

"fields" : The column names which have to be selected from the uploaded file.

"fieldsAsProject": This flag when true will delete all other fields which are not specified in the field array. This is an optional field not specifiying it will retain all the fields.

"upload" : This property should be (Boolean: true) as shown above so that the front-end prompts the file upload.

****



`` _injectableParams: `` it is the processParams from survey or generateParams.js. 

       If only generateParams.js exist in journey then the output from this function treat as processParams.
       If survey config present then selected params would be processParams 



**FTP INPUT**

``` javascript
{
    "id": "inputSalesData",
    "name": "inputSalesData",
    "type": "file",
    "fileType": "csv_zip",// like emailconf    
    "fields": {
        "NEW_NAME_TRN_MFRCD": "TRN_MFRCD",
        "NEW_NAME_TRN_PARTY1": "TRN_PARTY1",
        "NEW_NAME_TRN_ICODE1": "TRN_ICODE1",
    },
    "fieldsAsProject": false,
    "filename": "Kennect_Sales_data/INV{{m}}-{{year}}2019.CSV",
    "variables": {
        "m": {
            "type": "date",
            "format": "MM",
            "substractHours": 24
        },
        "year": "_injectableParams.year"
    },
    "upload": false,
    "ftpConf": {
        "host": "ftp.dlptest.com",
        "user": "dlpuser@dlptest.com",
        "password": "e73jzTRTNqCN9PYAAjjn",
        "timeDiffInHours": 24
    },
    "delimiter": "," // ","  "|"  "\t"  "auto" or array of these link: https://www.npmjs.com/package/csvtojson
}
```

"id" : This field is the actual name in which the input collection data is present after pull the file from ftp. Collection will be accessible using this name in process.js

"name" : This name will be displayed on the front-end while prompting file upload.

"type" : This specifies that the above object is of file type.

"fields" : The column names which have to be specified to avoid all string related errors and to keep the journey headers names consistent

"fieldsAsProject": This flag when true will delete all other fields which are not specified in the field OBJECT. This is an optional field not specifiying it will retain all the fields and rename those specified in fields OBJECT.

"filename": This property specifies the folder and filename relative to the FTP folder and as to which file is to be selected. The file name is dynamically supported with brace formattting using moment.js date strings can be formatted in the filename. Refer property "variables".

"variables": This is an object with key values pairs referring to moment.js.

"variables.type" : This tells the type of the variable used in the brace interpolated string.

"variables.format" : This is a moment.js date format string refer https://momentjs.com/docs/#/parsing/string-format/ for more formatting strings.

"variables.substractHours" : Optional field to substract the number of hours before building string for date. THis should always be an integer.

"upload" : This property should be (Boolean: false) as shown above so that the server can pull the file from the ftp server.

"ftpConf": This object has all the ftp config for the given file.

"ftpConf.host": This is the host url or IP of the ftp server.

"ftpConf.user": This is the username of the ftp credentials.

"ftpConf.password": This is the password of the ftp credentials.

"ftpConf.timeDiffInHours": Optional field. Integer value in hours here, If file has not been modified for the given duration. It triggers "onFTPError" webhook refer [webhooks.md](webhooks.md)

****

**GOOGLESHEET INPUT**

``` javascript
{
    "id": "commission",
    "name": "spreadsheet",
    "type": "googleSpreadSheet",
    "range": "Commission",
    "fields": {
        "NEW_NAME_TRN_MFRCD": "TRN_MFRCD",
        "NEW_NAME_TRN_NUM": "TRN_NUM"
    },
    "fieldsAsProject": true,
    "version": "v4",
    "spreadsheetId": "1q8sAhsNTasdadsdsaadsp5vA6AGUIz7PdIkZ7nsjasdasdasd",
    "credentials": {},
    "token": {}
}
```

"id" : This field is the actual name in which the input collection data is present after pull the file from GOOGLE SHEET. Collection will be accessible using this name in process.js

"name" : This is just for namesake to maintain similarity between objects and is optional.

"type": This specifies the googleSpreadSheet input type.

"range" : Range specifies the range of the google sheet specified as string.

"fields" : The column names which have to be specified to avoid all string related errors and to keep the journey headers names consistent

"fieldsAsProject": This flag when true will delete all other fields which are not specified in the field OBJECT. This is an optional field not specifiying it will retain all the fields and rename those specified in fields OBJECT.

"version": Specifies the version of google sheet API.

"spreadsheetId" : Specifies the spreadsheet id of the google sheet.

"credentials": Is the credential.json object generated after manual generation using a script.

"token": Is the token.json object generated after manual generation using a script.
****

**EMAIL INPUT**

``` javascript
{
    "id": "master_cities",
    "name": "master_cities",
    "type": "email",
    "subjectHeader": "",
    "sender": "Bsmart@sanofi.com", // optional, partialmatch allowed    
    "filename": "master_cities.csv",
    "fileType": "csv_zip",
    // fileType: default  =csv
    // ENUM: "csv/csv_zip/xls/xls_zip",
    // fileType==csv_zip , only files in root of zip will be taken , multiple files will be assumed to be one colleciton only.
    "since": {
        "value": 3,
        "unit": "days"
    },
    "unseen":true, // optional , true/false , consider unseen mails, 
    "variables": {},
    "fields": {
        "NEW_NAME_CUST_NAME": "CUST_NAME",
        "NEW_NAME_MAT_DESC": "MAT_DESC"
    },
    "fieldsAsProject": true,
    "emailConfig": {
        "user": "test@kennect.in",
        "password": "asdasd",
        "host": "secureserver.net",
        "port": 993,
        "tls": true
    }
}
```

"id" : This field is the actual name in which the input collection data is present after pull the file from GOOGLE SHEET. Collection will be accessible using this name in process.js

"name" : This is just for namesake to maintain similarity between objects and is optional.

"type": This specifies the EMAIL input type.

"fields" : The column names which have to be specified to avoid all string related errors and to keep the journey headers names consistent

"fieldsAsProject": This flag when true will delete all other fields which are not specified in the field OBJECT. This is an optional field not specifiying it will retain all the fields and rename those specified in fields OBJECT.

"subjectHeader": To specify the subject of the email header.

"filename": This property specifies the folder and filename relative to the FTP folder and as to which file is to be selected. The file name is dynamically supported with brace formattting using moment.js date strings can be formatted in the filename. Refer property "variables".

"variables": This is an object with key values pairs referring to moment.js.

"variables.type" : This tells the type of the variable used in the brace interpolated string.

"variables.format" : This is a moment.js date format string refer https://momentjs.com/docs/#/parsing/string-format/ for more formatting strings.

"emailConfig": Object is self explanatory shows all the required fields for email configuration.

****

**PROCESS PARAMETERS**

``` javascript
{
    "id": "survey_form",
    "name": "survey_form",
    "type": "paramsConfig",
    "fillGeneratedParams": true, // fill the form with params generated from generateParams.js file if
    "useGeneratedParamsAsDefaults": true,
    "config": {
        "srvQuestions": [{
                "type": "boolean",
                "name": "ignoreParams",
                "title": "ignoreParams"
            },
            {
                "type": "boolean",
                "name": "isTrial",
                "title": "Trial Run"
            },
            {
                "type": "checkbox",
                "name": "financialYear",
                "isRequired": true,
                "title": "Financial Year to calculate incentive for",
                "choices": [
                    "2017-2018",
                    "2018-2019",
                    "2019-2020"
                ],
                "defaultValue": "2018-2019"
            },
        ],
        "masterDataMap": [{
            "type": "choices_by_mortal_id_from_scheme",
            "target": "schemeSetId",
            "ecName": "export_from_scheme"
        }]
    }
}
```

"id" : This field is the actual name in which the input process param object is stored. Collection will be accessible using variable "params" in process.js

"name" : This name will be displayed on the front-end while prompting survay form.

"type": This specifies the params input type.

"config": This has survey questions property to render survey.js form refer https://surveyjs.io/Survey/Builder for more. The master data map property is complementary to the survey for to fill in data for dropdowns and checkboxes check masterDataMap documentation in kdw-managers repository.


"masterDataMap": Validators will be an array refer [masterDataMap.md](masterDataMap.md) for more details on validators.

****

**SQL**

``` javascript
{
    "id": "inputCreditData",
    "name": "inputCreditData",
    "type": "sql",
    "sqlConf": {
        "server": "11.22.174.225",
        "database": "DATABASE_NAME",
        "user": "USER",
        "passwordKey": "PASSWORD_KEY_NAME",
        "parser": "chembur",
        "unused_port": 1433
    },
    "fields": {
        "to be designed": "yet"
    },
    "variables": {
        "monthYear": {
            "type": "date",
            "format": "YYYY-MM-01 00:00:00"
        },
        "currentDate": "_injectableParams.curr_year",
    },
    "query": "select SRNDET_CUSTCODE as customer_code, SRNDET_LSGID as div_code, SRNDET_DOCNO as invoice_number, SRNDET_LOCID as location_code,CONVERT(varchar, SRNDET_DOCDATE, 112) as invoice_date from SIM_DET_SRN where SRNDET_DOCDATE >= '{{monthYear}}'  AND SRNDET_DOCDATE <= '{{currentDate}}'"
}
```

****
**SOQL**

``` javascript
{
    "id": "inputCreditData",
    "name": "inputCreditData",
    "type": "sql",
    "sqlConf": {
        "server": "11.111.111.111",
        "database": "database_name",
        "user": "user",
        "passwordKey": "password_key",
        "parser": "chembur",
        "unused_port": 1122
    },
    "fields": {
        "to be designed": "yet"
    },
    "variables": {
        "monthYear": {
            "type": "date",
            "format": "YYYY-MM-01 00:00:00"
        },
        "currentDate": "_injectableParams.curr_year",
        "currentDateStart": {
            "type": "date",
            "format": "YYYY-MM-DD 00:00:01"
        }
    },
    "query": "select SRNDET_CUSTCODE as customer_code, SRNDET_LSGID as div_code, SRNDET_DOCNO as invoice_number, SRNDET_LOCID as location_code,CONVERT(varchar, SRNDET_DOCDATE, 112) as invoice_date, SRNDET_PRDCD as sku_code,SRNDET_ACTRECQTY as units, SRNDET_ACTBONRECQTY as free_units, SRNDET_AMT as value, SRNDET_RETTYPE as return_type from SIM_DET_SRN where SRNDET_DOCDATE >= '{{currentDateStart}}'  AND SRNDET_DOCDATE <= '{{currentDate}}'"
```

****

****
**CHANNEL**

``` javascript
{
    "id": "inputSalesData",
    "name": "inputSalesData",
    "type": "channel",
    "fields": {
        "div_code": "divisionId",
        "sku_code": "code",
        "sku_name": "skuName",
        "sku_brand_name": "brandName",
        "active": "active",
        "year": "year",
        "month": "month"
    },
    "fieldsAsProject": true,
    "channelConf": {
        "name": "CHANNEL_NAME",
        "injectParams": {
            "headers": {
                "month": "_injectableParams.month",
                "year": "_injectableParams.curr_year"
            }
        },
        "extra": {
            "body": {
                "nothing": "something"
            }
        }
    }
}
```

****

**MONGO**

``` javascript
 {
     "id": "master_prod_mapping",
     "name": "master_prod_mapping",
     "type": "mongo",
     "collection_names": ["master_prod_mapping"],
     "uri": {
         "primary": true,
         "dbms": "mongodb",
         "host": "111.211.3111.119:27017",
         "dbName": "database_name",
         "un": "username",
         "pw": "password"
     }
 }
```
