package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"FeatureFiles/AdminLogin.feature"},monochrome = true,dryRun = false,
glue = {"stepDefinations"},tags = ("@tag1,@tag2"),plugin = {"pretty","html:target/report/cucumber",
		"junit:target/report/cucumber.xml",
		"json:target/report/cucumber.json"}
)

public class AdminLogin extends AbstractTestNGCucumberTests {



	
	
}
