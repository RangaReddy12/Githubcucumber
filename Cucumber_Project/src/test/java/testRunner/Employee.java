package testRunner;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false,  features = {"FeatureFiles/EmployeeReg.feature"},
monochrome = true,tags = ("@tag1"),glue = {"stepDefinations"},
plugin = {"pretty","html:target/report/cucumber"})
@Test
public class Employee extends AbstractTestNGCucumberTests {

}
