from flask import Flask, request, jsonify
import pandas as pd
from model.cleaning import clean_data

app = Flask(__name__)

@app.route('/clean', methods=['POST'])
def clean():
    file = request.files['file']
    df = pd.read_csv(file)
    cleaned_df = clean_data(df)
    return cleaned_df.to_json(orient='records')

if __name__ == '__main__':
    app.run(debug=True)
