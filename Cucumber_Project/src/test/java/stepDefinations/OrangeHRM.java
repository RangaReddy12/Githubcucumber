package stepDefinations;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeHRM {
	WebDriver driver;
	String Expected="";
	String Actual="";

@Given("i open browser with url {string}")
public void i_open_browser_with_url(String url) {
	driver = new ChromeDriver();
	driver.manage().deleteAllCookies();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    driver.get(url);
}

@Then("i should see login page")
public void i_should_see_login_page() {
	 if(driver.findElement(By.id("btnLogin")).isDisplayed())
	    {
	    	System.out.println("System displayed Login Page");
	    }
}

@When("i enter username as {string}")
public void i_enter_username_as(String uid) {
	driver.findElement(By.id("txtUsername")).sendKeys(uid);
}

@When("i enter password as {string}")
public void i_enter_password_as(String pwd) {
	driver.findElement(By.id("txtPassword")).sendKeys(pwd);	
}

@When("i click login")
public void i_click_login() {
	driver.findElement(By.id("btnLogin")).click();
}

@Then("i should see admin module")
public void i_should_see_admin_module() {
	if(driver.findElement(By.linkText("Admin")).isDisplayed())
	{
		System.out.println("System displayed Admin Module");
	}
}

@When("i click logout")
public void i_click_logout() {
	driver.findElement(By.partialLinkText("Welcome")).click();
	driver.findElement(By.linkText("Logout")).click();  
}

@When("i close browser")
public void i_close_browser() {
	driver.quit();
}
@Then("i should see error message")
public void i_should_see_error_message() {
    String Errormess= driver.findElement(By.id("spanMessage")).getText();
    if(Errormess.toLowerCase().contains("invalid"))
    {
    	System.out.println(Errormess+"    "+"System displaying expected error message for invalid inputs");
    }
    
}
@When("i navigate to add employee")
public void i_navigate_to_add_employee() {
    driver.findElement(By.xpath("//b[normalize-space()='PIM']")).click();
    driver.findElement(By.xpath("//input[@id='btnAdd']")).click();
}

@When("i Enter first name as {string}")
public void i_Enter_first_name_as(String fname) {
    driver.findElement(By.name("firstName")).sendKeys(fname);
}

@When("i enter middle name as {string}")
public void i_enter_middle_name_as(String mname) {
	 driver.findElement(By.name("middleName")).sendKeys(mname);
}

@When("i enter Last name as {string}")
public void i_enter_Last_name_as(String lname) {
	 driver.findElement(By.name("lastName")).sendKeys(lname);
}

@When("i capture Emp id")
public void i_capture_Emp_id() {
   Expected=driver.findElement(By.name("employeeId")).getAttribute("value"); 
}

@When("i click save button")
public void i_click_save_button() {
    driver.findElement(By.xpath("//input[@id='btnSave']")).click();
}

@When("i capture emi id after adding")
public void i_capture_emi_id_after_adding() {
    Actual=driver.findElement(By.name("personal[txtEmployeeId]")).getAttribute("value"); 
}

@Then("i verify emp id")
public void i_verify_emp_id() {
    if(Expected.equals(Actual)) {
    	
    		System.out.println("Add Employee Success:::"+Expected+"   "+Actual );
    	}
    	else
    	{
    		System.out.println("Add Employee Fail:::"+Expected+"   "+Actual );
    	}
    	
    }

}

