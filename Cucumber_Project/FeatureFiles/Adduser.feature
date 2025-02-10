@tag
Feature:
As admin user i want to verify Add Employee
@tag1
Scenario Outline:
I want to validate add Employee with multiple data
Given i open browser with url "http://orangehrm.qedgetech.com"
  Then i should see login page
  When i enter username as "Admin"
  And i enter password as "Qedge123!@#"
  And i click login 
  Then i should see admin module
  When i navigate to add employee
  When i Enter first name as "<FirstName>"
  And i enter middle name as "<MiddleName>"
  And i enter Last name as "<LastName>"
  And i capture Emp id
  And i click save button
  And  i capture emi id after adding
  Then i verify emp id
  When i click logout  
  Then i should see login page
  When i close browser
  
  Examples:
|FirstName|MiddleName|LastName|
|Akhi14|Testing1|Selenium1|
|Akhi32|Testing614|Selenium187|
|Akhi152|Testing561|Selenium691|
|Akhi514543|Testing1564|Selenium412|


  