## Channels
are used to configure web-hook like communication outbound to kennect.
options tells us what arguments will go into the http request and how will they be placed. 
constants define default arguments. passed arguments always over-write defaults.
```
{
    "name":"",
    "stream":"true/false",
    "url":"https://url:443/{pathParam1}/{pathParam2}",
    "method":"post/get/put",
    "options":{
        "pathParams":["pathParam2"],
        "query":[],
        "body":[],
        "headers":[],
    },
    "constants":{
        "pathParams":{
            "pathParam1":"yolo"
        },
        "query":{},
        "body":{},
        "headers":{},
    },
    "pageCrawl": {
        "scope": "all",
        "pageNumberFieldName": "pageNo",
        "pageNumberFieldPlace": "headers"
    },
}
```

constants: are default values,
they will be ovrridden if specified in options while calling the channel.

how to call the channel?
``ws.channels.fetch({ ...options }).then(response=>{ useHere })``