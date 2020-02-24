#formulas that can be used in the journey

## **Formulas Docs**


## **NOTE**
### All collections from the dependency array specified in [dependencies.md](dependencies.md) should be preceded by "core_" or "master_" while using in the process.js file.

#### appendData
```javascript
//definition
function appendData(targetCollection, refCollection, outputCollection, targetKeys, refKeys){}

//usage
formulas.appendData('bigFilterData', "core_bigSalesData", "bigSalesData",['Month', 'FY'], ['Month', 'FY'])
```

This formula appends the data from targetCollection into the refCollection on the target and ref keys making refCollection the outputCollection unless the outputCollection is specified.

****

#### aggregateByEcPipeline

```javascript
//definition
function aggregateByEcPipeline (targetCollection, outputCollection, targetIndexes, aggregationPipeline){}

//usage
formulas.aggregateByEcPipeline("working_coll", "", [
    { // this is indexing 
        ["PRODUCT_SKU_MASTER.PRODUCT"]: 1,
        ["PRODUCT_SKU_MASTER.DIVISION"]: 1,
        ["EMP_CODE"]: 1
    }
], [ // this is the pipeline
{
    $unwind: {
        path: '$BENEFITS',
        preserveNullAndEmptyArrays: true,
        includeArrayIndex: "serial_no"
    }
}])
```
This formula can run a aggregate pipeline on the targetCollection making targetCollection the outputCollection unless the outputCollection is specified. TargetIndexes can index fields on targetCollection

****

#### createIndexes

```javascript
//definition
function createIndexes(targetCollection, targetIndexes){}

//usage
formulas.createIndexes("master_hierarchy", [{ ["MASTER_HRCY"]: 1 }])
```
This formula can index fields on targetCollection with specified keys in targetIndexes.

****
#### dropIndexes

```javascript
//definition
function dropIndexes(targetCollection){}

//usage
formulas.dropIndexes("master_hierarchy")
```
This formulas can drop all indexes on the target collection.

****
#### filter

```javascript
//definition
function filter(targetCollection, outputCollection, fn){}

//usage
formulas.filter("master_hierarchy","",e => (e['FYY'] === "3020"))
```
This formula can run and filter records from the targetCollection and will put the output in targetCollection unless the outputCollection is specified.

****
#### lookup

```javascript
//definition
function lookup(targetCollection, lookupCollection, outputCollection,targetArrayKeys, lookupArrayKeys,valuesToAddArray, lookupMultipleValues, newKeyHeaders){}

//usage
formulas.lookup("stockist_Data_With_Division", "sapSkuData", "", ['Division', 'FY'], ['Division', 'FY'],['Product_Code', 'sku_name', 'Sap_Product_Code'],1,{})
```
This formula can lookup from targetCollection to lookupCollection on the specific keys and also "valuesToAddArray" to bring keys from the "lookupCollection". Can also look multiple values using "lookupMultipleValues" flag by passing 1 or 0.
"newKeyHeaders" to rename a few keys of the output collection.
By default targetCollection will be the output collection unless "outputCollection" is specified.

****
#### merge

```javascript
//definition
function merge(leftCollection, keys1, rightCollection, keys2, fields1, fields2, commonfields1, commonfields2, action, outputCollection){}

//usage
formulas.merge("hqSalesWithType", ['HQ SAP CODE', 'sku_code', 'Month', 'Year'], "filteredTarget", ['sap_code', 'sku', 'Month', 'Year'],['units', 'sr_units', 'er_units', 'br_units', 'value', 'sr_value', 'er_value', 'br_value', 'Division', 'sku_name', 'FY'],['target_units', 'target_value', 'FY', 'sku_name', 'Division','Rate'], [], [], 'fullOuterJoin', "hqSalesWithTar")
```
This formula can merge leftCollection into rightCOllection on the specified keys retaining the keys specified in fields1 and fields2 for left and right collection respectively and action specifies on which type of JOIN(innerJoin,leftJoin,fullOuterJoin,rightJoin) is to be done
By default leftCollection will be the output collection unless "outputCollection" is specified.

****
#### calculator

```javascript
//definition
function calculator(targetCollection, outputCollection, keys, keysToOperate, operator, metricsToOperate, asIsValues, newKeyHeaders){}

//usage
formulas.calculator("master_past_sales_core", "YTD", ['EMP_CODE', 'month', 'sku'], { month: { YTD: ['Jun', 'Apr', 'May', 'Jul', 'Aug', 'Sep'] } }, 'sum', ['units', 'value', 'target_units', 'target_value'], ['sku_name'], {})
```
This formula group values based on "keys" array and perform "sum" operation on the metricsToOperate Array 
and keeping a few values as is and also grouping a few values using a diffrent style by using keysToOperate array of keys
By default targetCollection will be the output collection unless "outputCollection" is specified.

****
#### addKeysWithFormula

```javascript
//definition
function addKeysWithFormula(targetCollection, outputCollection, newKeys){}

//usage
formulas.addKeysWithFormula("inputSalesData", "", [
{ newKey: 'Month', formula: 'Number(a.split(". ")[1])', keys: { a: 'Invoice Date' } },
{ newKey: 'Year', formula: 'Number(a.split(".")[2])', keys: { a: "Invoice Date" } }
])
```
This formula can add keys to a collection with a specified newKey and formula which will be run on each row of the targetCollection
By default targetCollection will be the output collection unless "outputCollection" is specified.

****
#### flatten

```javascript
//definition
function(targetCollection,outputCollection,columns_to_convert_into_rows,new_column_name_value,preserve_columns,group_by_columns,new_column_name_keys)

//usage
() => formulas.flatten("emp_kpi_calc", "result", ['doctor_coverage',"field_working_days","frequency_coverage","team_frequency_coverage","team_doctor_coverage"],'value', ["emp_code","Role","FY"], [],'parameter')
```
This formula is used to convert multiple columns of a row into multiple rows with a common column name. All "columns_to_convert_into_rows" inputs will become rows with their respective column name as value of these rows. Current values of these columns with become another column as provided in "new_column_name_value" . Columns to maintain as it is will be "preserve_columns". And "group_by_columns" for final groupBy. "new_column_name_keys" will be the column name of converted columns.

eg :

input_collecttion =>
----------------------------------------
emp_name | emp_id | age | height | job |
	John |  123   | 23  |  160   |  IT |
	Ron  |  124   | 26  |  172   |  FN |
-----------------------------------------

Run => 

() => formulas.flatten("input_collecttion", "output_collection", ['age',"height","job"],'value', ["emp_id","emp_name"], [],'parameter')

output_collection =>

-----------------------------------
emp_name | emp_id | parameter | value
   John  |  123   |  age	  |  23
   John  |  123   |  height	  |  160
   John  |  123   |  job	  |  IT
   Ron   |  124   |  age	  |  26
   Ron   |  124   |  height	  |  172
   Ron   |  124   |  job	  |  FN






****
#### windArray

```javascript
//definition
function windArray(targetCollection, outputCollection, aggregationKeys, windKeyDetails, asIsValues){}

//usage

```
This formula can reverse the changes done by flatten
By default targetCollection will be the output collection unless "outputCollection" is specified.

****
#### buildHierarchy

```javascript
//definition
function buildHierarchy(targetCollection, outputCollection, key, hierarchyKey, keysToKeep, depth){}

//usage
formulas.buildHierarchy("hierarchyWiseData", "", 'Position_No', 'Boss_No',['Role', 'HQ CODE', 'Year', 'Count'], 6)
```
This formula can create parent child hierarchy keeping few values as is and can also specify depth.
By default targetCollection will be the output collection unless "outputCollection" is specified.

****
#### deleteFields

```javascript
//definition
function deleteFields(collectionName, fieldNames){}

//usage
formulas.deleteFields("hierarchyWiseData", ["USER_ID","EMP_ID"])
```
This formula can delete fields from a row in targetCollection

****
#### renameFields

```javascript
//definition
function renameFields(collectionName, updateObject){}

//usage
formulas.renameFields("hierarchyWiseData", { "USER_NO": "user_id" })
```
This formula can renames fields in targetCollection.
rename object format "old_name": "new_name"

****
#### clearCollection

```javascript
//definition
function clearCollection(collectionName){}

//usage
formulas.clearCollection("hierarchyWiseData")
```
This formula deletes all records from a collection.

****
#### schemeQuery

```javascript
//definition
function schemeQuery(aggregateArray){}

//usage
formulas.schemeQuery([{
    $unwind:{
        path:"$USER_ID"
    }
}])
```
This formula can run a aggregate pipeline on the schemes collection.

****
#### renameCollection

```javascript
//definition
function renameCollection(targetCollection, renamedName, dropTarget = false, processMode = false){}

//usage
formulas.renameCollection("WORKING_COLLECTION", "TRIAL_INC_SUMMARY", true, true)
```
This formula can rename a target collection to a new name deleting the collection of the same name as "renamedName" 