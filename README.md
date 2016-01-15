#Angular JSON Schema - Example

Back-end required JSON:

```JSON
{
    "id": "1",
    "type": "entity",
    "properties": {
        "banner" : {
            "type": "banner",
            "title" : "Example banner!",
            "propertyOrder" : 1,
            "properties" : [
                {
                    "type" : "link-button",
                    "title" : "Google!",
                    "link": [
                        {
                            "rel" : "click",
                            "href" : "http://google.com/"
                        }
                    ]
                },
                {
                    "type" : "link-button",
                    "title" : "Github",
                    "link": [
                        {
                            "rel" : "click",
                            "href" : "http://github.com/"
                        }
                    ]
                }
            ],
            "links" : [
                {
                    "rel": "self",
                    "href": "/"
                }
            ]
        },
        "card1" : {
            "type": "card",
            "title" : "Card Component",
            "propertyOrder" : 2,
            "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum finibus orci, sit amet lacinia tellus rutrum vel. Etiam eros ligula, semper et cursus vel, fermentum in mauris. Fusce elementum purus eget commodo maximus. Duis pulvinar pretium rhoncus. Nulla at ligula et velit fringilla pharetra in non neque. Vestibulum cursus turpis quis rhoncus fringilla. Praesent vitae scelerisque leo.",
            "properties" : {
                "form" : {
                    "type" : "example-form",
                    "title" : "My Dummy Form 2",
                    "links" : [
                        {
                            "rel" : "save",
                            "href" : "http://google.com/",
                            "schema" : {
                                "required": [ "firstName" ]
                            }
                        }
                    ]
                }
            }
        },
        "card2" : {
            "type" : "card",
            "text" : "Bla bla bla!",
            "title" : "Card Component 2"
        }
    }
}

```

UI Result:



![alt tag](https://raw.githubusercontent.com/picheli20/example-json-schema/master/simpleScreen.png)