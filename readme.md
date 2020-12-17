# Webdriver IO Automation Project for SKY's Technical Test

## Intro or highlights

- Webdriver IO has been used to Test several features outlined to test sky.com
- Cucumber has been used as a framework to implement BDD
- Reporting style is a json format report which is then converted in html.
- Page Object Model has been implemented to provide a layer of abstraction

# About folder structure and contents
- Project mainly has 4 folders - 
  - features - 2 features namely search tests feature and shop page tests feature
  - PageObjects - dealsPage, signInPage, homePage
  - step-definitions - one steps file which contain all the steps

# Running of tests
If you would like to run all features and view an html report then run the command-
npm run features-reports

- There are other scripts that are in place in package.json file
 - npm run features - to run all features without running reports
 - npm run features-shopPageTests - to run shopPage Tests feature
 - npm run features-searchTests - to run search Tests feature
