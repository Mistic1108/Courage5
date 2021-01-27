import os
from os import listdir
from os.path import isfile, join
import pandas as pd

path_data = "./"
f_list = [join(path_data,f) for f in listdir(path_data) if isfile(join(path_data,f))]
f_list.remove('./to_xlsx.py')
f_list.remove('./from_xlsx.py')
if not os.path.exists("xlsx/"):
    os.makedirs("xlsx/")

# print(f_list)
for f in f_list:
    f_open = open(f,encoding='utf-8')
    line_list=''
    while True:
        line = f_open.readline()
        if not line:
            break
        line_list+=line
    # print(type(
    #     eval(line_list.replace('\ufeff','').replace('\n',''))
    # ))
    eval_lines=eval(line_list.replace('\ufeff','').replace(',\n',','))
    df = pd.DataFrame(eval_lines)
    df.to_excel('./xlsx/'+f.replace('.json','.xlsx'),index=False)