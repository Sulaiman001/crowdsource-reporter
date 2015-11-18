{
    "values": {
        "group": "758a315597a6461fbe2430a9e1828c6f",
        "theme": "#137DB9",
        "signInSubtitle": "",
        "signInBackgroundImage": "/images/signinbg.png",
        "enableFacebook": false,
        "facebookAppId": "",
        "enableTwitter": false,
        "enablePortalLogin": true,
        "enableGoogleplus": false,
        "googleplusClientId": "",
        "applicationName": "",
        "applicationIcon": "",
        "applicationFavicon": "/images/favicon.ico",
        "webMapInfoDescription": true,
        "webMapInfoSnippet": false,
        "webMapInfoOwner": true,
        "webMapInfoCreated": false,
        "webMapInfoModified": false,
        "webMapInfoLicenseInfo": false,
        "webMapInfoAccessInformation": false,
        "webMapInfoTags": false,
        "webMapInfoNumViews": false,
        "webMapInfoAvgRating": false,
        "bufferRadius": 3,
        "bufferUnit": "miles",
        "submitMessage": "Thank you! Your report has been submitted.",
        "likeField": "NUMVOTES",
        "commentField": "COMMENTS",
        "usePopupConfigurationForComment":false,
        "reportedByField": "USERID",
        "zoomLevel": 12,
        "enableUSNGSearch": false,
        "enableMGRSSearch": false,
        "enableLatLongSearch": false,
        "enableHelp":true,
        "helpLinkText": "Help",
        "helpDialogTitle":"Help Page",
        "helpDialogContent": "<p>Crowdsource Reporter is a configurable gallery application template that allows users to submit problems or observations. The application has been optimized for smartphones but is responsively designed to be used on smartphones, tablets, and desktop computers.</p><p>The Crowdsource Reporter application presents one or more maps that can be used to report a problem or observation. Users can anonymously submit new reports, review existing reports, and comment and vote on reports or observations submitted by other users. They also can authenticate with their social media or ArcGIS Online credentials and track the status of problems or observations they have reported.</p>"
    },
    "configurationSettings": [
        {
            "category": "<b>Splash Page Settings</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "applicationName",
                    "label": "Title",
                    "tooltip": "Application title (max 34 chars)"
                },
                {
                    "type": "string",
                    "stringFieldOption": "textarea",
                    "fieldName": "signInSubtitle",
                    "label": "Subtitle",
                    "tooltip": "Text displayed below title on splash page (max 36 chars)"
                },
                {
                    "type": "string",
                    "fieldName": "signInBackgroundImage",
                    "tooltip": "Background image for login screen. Recommended 640x960.",
                    "label": "Splash Screen Image"
                },
                {
                    "type": "boolean",
                    "fieldName": "enableTwitter",
                    "label": "Allow users to sign in using Twitter",
                    "tooltip": "Enable to allow users to sign in using their Twitter credentials"
                },
                {
                    "type": "boolean",
                    "fieldName": "enablePortalLogin",
                    "label": "Allow users to sign in using ArcGIS Online",
                    "tooltip": "Enable to allow users to sign in using their ArcGIS Online credentials"
                },
                {
                    "type": "boolean",
                    "fieldName": "enableFacebook",
                    "label": "Allow users to sign in using Facebook",
                    "tooltip": "Enable to allow users to sign in using their Facebook credentials"
                },
                {
                    "type": "string",
                    "fieldName": "facebookAppId",
                    "label": "Facebook AppId",
                    "tooltip": "Facebook AppId"
                },
                {
                    "type": "boolean",
                    "fieldName": "enableGoogleplus",
                    "label": "Allow users to sign in using Google+",
                    "tooltip": "Enable to allow users to sign in using their Google+ credentials"
                },
                {
                    "type": "string",
                    "fieldName": "googleplusClientId",
                    "label": "Google+ Client ID",
                    "tooltip": "Google+ ClientId"
                }
            ]
        },
        {
            "category": "<b>Application Settings</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "applicationIcon",
                    "label": "Icon URL",
                    "tooltip": "URL to a 48px high graphic to display in the top left corner of application."
                },
                {
                    "type": "color",
                    "fieldName": "theme",
                    "tooltip": "Color theme to use",
                    "label": "Color Scheme"
                },
                {
                    "type": "string",
                    "stringFieldOption": "textarea",
                    "fieldName": "submitMessage",
                    "label": "Submit Message",
                    "tooltip": "Message displayed when a report is submitted successfully"
                }
            ]
        },
        {
            "category": "<b>Content Settings</b>",
            "fields": [
                {
                    "type": "group",
                    "label": "Select Group",
                    "tooltip": "Group displayed in the application"
                },
                {
                    "type": "string",
                    "fieldName": "reportedByField",
                    "label": "Reporter ID Field (optional)",
                    "tooltip": "Text field that stores the ID of the person who created the feature. Field name must be the same across all layers and maps."
                },
                {
                    "type": "string",
                    "fieldName": "likeField",
                    "label": "Vote Field (optional)",
                    "tooltip": "Integer field that stores the vote count. Field name must be the same across all layers and maps."
                },
                {
                    "type": "string",
                    "fieldName": "commentField",
                    "label": "Comment Field (optional)",
                    "tooltip": "Text field in the comments tables that stores feedback. Field name must be the same across all layers and maps."
                },
                {
                    "type": "boolean",
                    "fieldName": "usePopupConfigurationForComment",
                    "label": "Use comment table popup configuration",
                    "tooltip": "Enable to display a comment submission form based on the popup configuration for the comments layer instead of a single field for comment entry"
                },
                {
                    "type": "string",
                    "fieldName": "zoomLevel",
                    "label": "Zoom Level",
                    "tooltip": "Configure zoom level"
                },
                {
                    "type": "paragraph",
                    "value": "Choose the map information to display:"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoDescription",
                    "label": "Description",
                    "tooltip": "Enable to show webmap description"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoSnippet",
                    "label": "Short Summary",
                    "tooltip": "Enable to show webmap summary"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoOwner",
                    "label": "Owner Name",
                    "tooltip": "Enable to show webmap owner"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoCreated",
                    "label": "Creation Date",
                    "tooltip": "Enable to show webmap created date"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoModified",
                    "label": "Modification Date",
                    "tooltip": "Enable to show webmap modified date"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoLicenseInfo",
                    "label": "Access and Use Constraints",
                    "tooltip": "Enable to show webmap licensing information"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoAccessInformation",
                    "label": "Credits",
                    "tooltip": "Enable to show webmap credits"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoTags",
                    "label": "Tags",
                    "tooltip": "Enable to show webmap tags"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoNumViews",
                    "label": "Number of Views",
                    "tooltip": "Enable to show webmap number of views"
                },
                {
                    "type": "boolean",
                    "fieldName": "webMapInfoAvgRating",
                    "label": "Average Rating",
                    "tooltip": "Enable to show webmap average rating"
                },
                {
                    "type": "number",
                    "fieldName": "bufferRadius",
                    "label": "Initial Search Radius",
                    "tooltip": "Application will initially load all reports within this search radius"
                },
                {
                    "type": "options",
                    "fieldName": "bufferUnit",
                    "tooltip": "Unit of distance for the search radius",
                    "label": "Search Radius Unit:",
                    "options": [
                        {
                            "label": "Miles",
                            "value": "miles"
                        },
                        {
                            "label": "Kilometers",
                            "value": "kilometers"
                        },
                        {
                            "label": "Meters",
                            "value": "meters"
                        },
                        {
                            "label": "Feet",
                            "value": "feet"
                        }
                    ]
                }
            ]
        },
        {
            "category": "<b>Search Settings</b>",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "By default the application search will use the locators configured in your organization settings. Additionally, the following search types can be enabled:"
                },
                {
                    "type": "boolean",
                    "fieldName": "enableUSNGSearch",
                    "label": "USNG",
                    "tooltip": "Enable USNG Search"
                },
                {
                    "type": "boolean",
                    "fieldName": "enableMGRSSearch",
                    "label": "MGRS",
                    "tooltip": "Enable MGRS Search"
                },
                {
                    "type": "boolean",
                    "fieldName": "enableLatLongSearch",
                    "label": "Latitude/Longitude",
                    "tooltip": "Enable Latitude Longitude Search"
                }
            ]
        },
        {
            "category": "<b>Help Settings</b>",
            "fields": [
                {
                    "type": "paragraph",
                    "value": "A help window can be accessed from a link on the spash page and from an icon within the app. Configure this dialog to display instructions for using the app, or any other information that may be useful to your users."
                },
                {
                    "type": "boolean",
                    "fieldName": "enableHelp",
                    "label": "Enable the help window",
                    "tooltip": "When disabled, the help window will not be accessible."
                },
                {
                    "type": "string",
                    "fieldName": "helpLinkText",
                    "label": "Splash page link text",
                    "tooltip": "Clicking this text will open the help dialog."
                },
                {
                    "type": "string",
                    "fieldName": "helpDialogTitle",
                    "label": "Help window title",
                    "tooltip": "Text displayed at the top of the help window"
                },
                {
                    "type": "string",
                    "fieldName": "helpDialogContent",
                    "label": "Dialog content",
                    "stringFieldOption": "richtext",
                    "tooltip": "Text and graphics that will display in the help window."
                }
            ]
        }
    ]
}