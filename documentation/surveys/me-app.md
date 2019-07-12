## Creating Multi-Entry-Survey Apps

## How Apps Work 
    # pref
    # name: display name
    # remoteDataStorageName
## Whats listHeaders and how to configure 
## How Master-Data-Map Works 
## How Unique Entry Mode Works 
## How PeriodAutoFills Mode Works 
## How triggerMap Works 

### JSON structure of the create-request

```
api: {{url}}/tenant/v0.1/app 

name: "Survey May"
pref: "test_m1"
record: {createdOn: 1562909800804, updatedOn: 1562910030264, active: true}
tref: "survey_advance_multi_entry"
// wsName: "omkar_dusane-org_mongodb_as_tenant"
// _id: "5d281c6815a95b4f93d587c2"
// templateDataFormat
"templateData" = stringify when making the call {
    "surveyTitle": "title",
    
    "periodAutoFills": {
        "target": "month",
        "periodType": "next_2_months",
        "defaultSelection": "current",
        "periodDataTypeNumber": false,
        "periodFormat": "MM-Y",
        "periodDisplayFormat": "MM-Y"
    },
    
    "directEntryMode": true,
    "dontLimitEntries": true,
    "maxAttempts": 4,
    
    "remoteDataStorageName": "remoteDataStorageName",
    "allowDeleting": true,
    "allowEditing": true,
    "listHeaders": [
        {
            "key": "",
            "numeric": false,
            "name": "",
            "tooltip": ""
        }
    ],
    "uniqueEntryMode": {
        "keys": [
            "qstn1"
        ],
        "neverClear": [
            "territory"
        ],
        "neverReset": [
            "anyFieldThatComesFrom MDMAP and you dont want to reset"
        ]
    },
    "masterDataMap": [
        {
            "type": "choices_by_mortal_id",
            "dataModelName": "master_states",
            "target": "state",
            "targetKey": "STATE",
            "targetDisplayKey": "NAME//in the master states, this is the key of the state's full displayname value in each row",
            "source": "employerGID",
            "sourceKey": "EMP_ID"
        },
        {
            "type": "choices_by_choice",
            "dataModelName": "master_cities",
            "target": "city",
            "targetKey": "CITY",
            "targetDisplayKey": "CITY_NAME",
            "source": "state",
            "sourceKey": "STATE"
        },
        {
            "type": "choices_by_choice",
            "dataModelName": "master_citywise_areas",
            "target": "area",
            "targetKey": "AREA",
            "source": "city",
            "sourceKey": "CITY"
        },
        {
            "type": "choices_by_choice_from_ec",
            "dataModelName": "master_citywise_areas",
            "ecName": "CITY",
            "target": "area",
            "source": "city",
            "sourceKey": "CITY"
        }
    ],
    "surveyJSON": {},
    "surveyValidations": [ 
        // doubtful that its implemented
        {
            "type": "current-month",
            "fieldType": "yyyy-mm-dd",
            "field": "month"
        }
    ],
    "channelDataMap": [
        {
            "type": "values_by_mortal_id",
            "mortalIdSource": "tenantGID",
            "channelName": "userDetails",
            "pathInRequest": "body",
            "pathInResponse": "details",
            "data": [
                {
                    "target": "reporter_name",
                    "valueIsInKey": "NAME"
                },
                {
                    "target": "reporter_div",
                    "valueIsInKey": "DIVISION"
                },
                {
                    "target": "reporter_desg",
                    "valueIsInKey": "DESIGNATION"
                }
            ]
        }
    ],
    "triggerMap": {
        "onNewEntry": {
            "type": "service",
            "uri": "newJoineeEntryTrigger"
        }
    }
}
```

