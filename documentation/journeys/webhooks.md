## **Webhooks array will have the following types of objects**

**onComplete SUCCESSFUL JOURNEY EVENT**

``` javascript
{
    "event": "onComplete",
    "type": "http",
    "uri": "https://ix.kennectweb.com/node/api/v1.3/tenant/channel/send-custom-email",
    "secret": "",
    "headers": {
        "Content-Type": "application/json",
        "auth_certificate": "fb5cb04f8d5643ca45fec35efac6642324412641278875c0ae5acfe369bb96f6285942b2d66b1ab66cb4fa9f002fbc149be14eddbe95e69b05e67ee49fd7881baa4cdc4ca41c5769c50d1faba8969a5da32776ba49ddbf734d"
    },
    "body": {
        "receiver": "sweta.sharma@kennect.in",
        "email_title": "Medley Sinkhai sales Data Successful",
        "email_body": "Journey 'Uploading sinkhai sales data' has been successful"
    }
}
```

**onError SUCCESSFUL JOURNEY EVENT**

``` javascript
{
    "event": "onError",
    "type": "http",
    "uri": "https://ix.kennectweb.com/node/api/v1.3/tenant/channel/send-custom-email",
    "secret": "",
    "headers": {
        "Content-Type": "application/json",
        "auth_certificate": "fb5cb04f8d5643ca45fec35efac6642324412641278875c0ae5acfe369bb96f6285942b2d66b1ab66cb4fa9f002fbc149be14eddbe95e69b05e67ee49fd7881baa4cdc4ca41c5769c50d1faba8969a5da32776ba49ddbf734d"
    },
    "body": {
        "receiver": "sweta.sharma@kennect.in",
        "email_title": "Medley Sinkhai sales Data Upload has Failed Sucessfully [Code:101]",
        "email_body": "Journey 'Uploading sinkhai sales data' has Failed Sucessfully"
    }
}
```

**onFTPError SUCCESSFUL JOURNEY EVENT**

``` javascript
{
    "event": "onFTPError",
    "type": "http",
    "uri": "https://ix.kennectweb.com/node/api/v1.3/tenant/channel/send-custom-email",
    "secret": "",
    "headers": {
        "Content-Type": "application/json",
        "auth_certificate": "fb5cb04f8d5643ca45fec35efac6642324412641278875c0ae5acfe369bb96f6285942b2d66b1ab66cb4fa9f002fbc149be14eddbe95e69b05e67ee49fd7881baa4cdc4ca41c5769c50d1faba8969a5da32776ba49ddbf734d"
    },
    "body": {
        "receiver": "sweta.sharma@kennect.in",
        "email_title": "FTP file Error [Date Modified Error]",
        "email_body": "FTP file error journey has been ran using old file. Please check in dw.kennectweb.com, Thanks."
    }
}
```

**onAutoKill UN-SUCCESSFUL JOURNEY EVENT**

``` javascript
{
    "event": "onAutoKill",
    "type": "http",
    "uri": "https://ix.kennectweb.com/node/api/v1.3/tenant/channel/send-custom-email",
    "secret": "",
    "headers": {
        "Content-Type": "application/json",
        "auth_certificate": "fb5cb04f8d5643ca45fec35efac6642324412641278875c0ae5acfe369bb96f6285942b2d66b1ab66cb4fa9f002fbc149be14eddbe95e69b05e67ee49fd7881baa4cdc4ca41c5769c50d1faba8969a5da32776ba49ddbf734d"
    },
    "body": {
        "receiver": "sweta.sharma@kennect.in",
        "email_title": "FTP file Error [Date Modified Error]",
        "email_body": "FTP file error journey has been ran using old file. Please check in dw.kennectweb.com, Thanks."
    }
}
```
