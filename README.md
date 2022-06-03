# URL-Shortener-Woker

A program to create a URL shortner in cloudflar worker.

## Instruction

   1. Create a worker 
   2. Create a new subdomain in the DNS pointing to a dummy value. Example sudomain -> 1.1.1.1
   3. Add routes that would point to to the worker. Example subdomain.example.com/* -> worker

## Create list to be pass to redirect

```
python3 csv_list.py filename.csv

```
