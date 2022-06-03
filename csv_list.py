import csv
import sys

with open(sys.argv[1], 'r') as file:
    reader = csv.reader(file)
    data = list(reader)

print (data)