import csv
import json

csvFilePath = "/Users/lizziestenhaug/Desktop/Project-2-Group-8/merged_data.csv"
jsonFilePath = "Zillow_Census2.json"
 
data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for csvRow in csvReader:
        date = csvRow["Name"]
        data[date] = csvRow
print(data)

with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent = 4))