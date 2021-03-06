# Angular JSON Schema - Example

**This is a experimental (alpha) package, do not use it for production, api is expected to change**

[![Join the chat at https://gitter.im/TrueRest/example-json-schema](https://badges.gitter.im/TrueRest/example-json-schema.svg)](https://gitter.im/TrueRest/example-json-schema?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A example usigin [angular-json-schema](https://github.com/TrueRest/angular-json-schema)!!

## Dependencies

To run this project you need:

* NodeJS ([link](https://nodejs.org/))
* Bower ([link](http://bower.io/))
* Gulp ([link](http://gulpjs.com/))

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

![alt tag](https://raw.githubusercontent.com/TrueRest/example-json-schema/master/simpleScreen.png)


## Setup the project

1.Install the depedencies above.

2.Clone the project.

```
git clone https://github.com/TrueRest/example-json-schema.git
```

3.Go into the project folder

```
cd example-json-schema
```

4.Install the gulp dependencies

```
npm install
```
5.Install the bower dependencies

```
bower install
```

## Server

To start a local server go to project folder and run the command:


```
gulp serve
```

Access [localhost:3000](localhost:3000)
