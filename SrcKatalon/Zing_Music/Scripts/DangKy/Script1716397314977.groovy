import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://nxc-hcmus.me/')

WebUI.click(findTestObject('Object Repository/DangKyZing/img_To playlist mi_rounded-full'))

WebUI.click(findTestObject('Object Repository/DangKyZing/button_ng nhp'))

WebUI.click(findTestObject('Object Repository/DangKyZing/button_ng k'))

WebUI.setText(findTestObject('Object Repository/DangKyZing/input_Hy nhp tt c thng tin  c th ng k_name'), Name)

WebUI.setText(findTestObject('Object Repository/DangKyZing/input_Hy nhp tt c thng tin  c th ng k_email'), TK)

WebUI.setText(findTestObject('Object Repository/DangKyZing/input_Hy nhp tt c thng tin  c th ng k_password'), MK)

WebUI.setText(findTestObject('Object Repository/DangKyZing/input_Hy nhp tt c thng tin  c th ng k_confirm'), Re_MK)

WebUI.click(findTestObject('Object Repository/DangKyZing/button_ng k_1'))

WebUI.waitForPageLoad(2)

WebUI.verifyTextPresent(Thongbaoloi, false)

