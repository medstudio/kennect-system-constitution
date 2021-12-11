## Storage in 3rd party **Storage array will contain objects as specified below**


**MONGO STORAGE CONFIG**
```javascript
{
    "type": "mongo",
    "uri": {
        "primary": true,
        "dbms": "mongodb",
        "host": "localhost:27017",
        "dbName": "warehouse_data",
        "pw": false
    },
    "collection_names": [
        "commission"
    ]
}
```

> above shows mongo storage config for the journey to store the data from the journey in a 3rd party mongo instance apart from the WAREHOUSE data

> for more details on collection_names refer outputCollectionNames

**FTP STORAGE CONFIG**
```javascript
{
    "type": "ftp",
    "ftpConf": {
        "primary": true,
        "host": "some_ftp.kennectweb.com",
        "user": "alkem_ss",
        "password": "77889", 
        "port" : 21         
    },
    "out": [ 
        // output mapping
        {
            "collection":"commission",
            "fileType":"csv",
            "timestampFormat":"DD-MM-YYYY",
            "path":"/someFiles",
            "prefix":"sanofi_",
            "postfix":"_file",
        }
    ]
}
```

> above shows ftp storage config for the journey to store the data from the journey in a 3rd party ftp instance apart from the WAREHOUSE data

