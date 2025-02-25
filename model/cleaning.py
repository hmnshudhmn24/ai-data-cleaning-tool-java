import pandas as pd
from sklearn.impute import SimpleImputer

def clean_data(df):
    df = df.drop_duplicates()  # Remove duplicates
    df.fillna(df.mean(numeric_only=True), inplace=True)  # Fill missing values
    return df
