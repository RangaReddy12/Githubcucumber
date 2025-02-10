$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/AdminLogin.feature");
formatter.feature({
  "name": "Admin Login",
  "description": "  I want to use this template to check Admin Login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Check Admin Login with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "i open browser with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRM.i_open_browser_with_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter username as \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter password as \"Qedge123!@#\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see admin module",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_admin_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click logout",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i close browser",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check Admin Login with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "i open browser with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.step({
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.step({
  "name": "i enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "i click login",
  "keyword": "And "
});
formatter.step({
  "name": "i should see error message",
  "keyword": "Then "
});
formatter.step({
  "name": "i close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "xyz"
      ]
    },
    {
      "cells": [
        "abc",
        "QEdge123"
      ]
    },
    {
      "cells": [
        "abc",
        "xyz"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check Admin Login with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "i open browser with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRM.i_open_browser_with_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter username as \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter password as \"xyz\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i close browser",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Admin Login with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "i open browser with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRM.i_open_browser_with_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter username as \"abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter password as \"QEdge123\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i close browser",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check Admin Login with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "i open browser with url \"http://orangehrm.qedgetech.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRM.i_open_browser_with_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter username as \"abc\"",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter password as \"xyz\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRM.i_click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRM.i_should_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i close browser",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRM.i_close_browser()"
});
formatter.result({
  "status": "passed"
});
});