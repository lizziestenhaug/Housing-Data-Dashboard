#!/usr/bin/env python
# coding: utf-8

# In[1]:

import pandas as pd 
import plotly.express as px


# In[2]:


df = pd.read_csv('/Users/lizziestenhaug/Desktop/Project-2-Group-8/Lizzie-Branch/Resources/merged_data.csv')
df.head()


# In[10]:


fig = px.line(df, x = 'Name', y = ['9/30/2016', '9/30/2020'])

fig.update_layout(
    font_family="Arial",
    font_color="black",
    title_font_family="Arial",
    title_font_color="Navy",
    legend_title_font_color="red",
    title="Housing Price Comparison Over Five Years",
    xaxis_title="State",
    yaxis_title="Price ($)",
    legend_title="Date"
)
fig.update_xaxes(title_font_family="Arial")
fig.show()


# In[ ]:




