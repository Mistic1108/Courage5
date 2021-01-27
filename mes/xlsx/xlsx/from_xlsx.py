import os
from os import listdir
from os.path import isfile, join
import pandas as pd

path_data = "./"
f_list = [join(path_data,f) for f in listdir(path_data) if isfile(join(path_data,f))]
f_list.remove('./from_xlsx.py')
if not os.path.exists("json/"):
    os.makedirs("json/")

for f in f_list:
    df = pd.read_excel(f)
    df['me']=df['me'].fillna("")
    df.to_json('./json/'+f.replace('.xlsx','.json'),orient='records')