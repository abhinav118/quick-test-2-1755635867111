export const siteData = {
  "testResults": [
    {
      "id": 1,
      "testName": "Component Render",
      "status": "Passed",
      "duration": "0.15s"
    },
    {
      "id": 2,
      "testName": "State Management",
      "status": "Passed",
      "duration": "0.23s"
    },
    {
      "id": 3,
      "testName": "API Integration",
      "status": "Passed",
      "duration": "1.42s"
    }
  ],
  "settings": {
    "autoRun": true,
    "showDebug": false,
    "timeout": 5000
  }
};

export const navigation = {
  "main": [
    {
      "label": "Home",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Results",
      "route": "/results",
      "icon": "chart"
    }
  ],
  "footer": [
    {
      "label": "Reset",
      "action": "reset"
    },
    {
      "label": "Export",
      "action": "export"
    }
  ]
};