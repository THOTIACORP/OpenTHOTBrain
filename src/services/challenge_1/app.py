from flask import Flask, render_template
import os
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

@app.route('/')
def index():
    # Leitura de DataBase
    caminho_absluto = os.path.abspath('assets/Equipamentos.xlsx')
    df = pd.read_excel(caminho_absluto)

    # Exclue valores não númericos dos dados
    numeric_df = df.select_dtypes(include=[np.number])

    # Cálcula a correlação de Pearson
    correlation_matrix = numeric_df.corr()

    # Converte o gráfico para imagem
    img = BytesIO()
    plt.figure()
    sns.heatmap(correlation_matrix, annot=True)
    plt.title('Correalação de Pearson')
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url1 = base64.b64encode(img.getvalue()).decode()

    # Calcula a Correlação de Spearman
    numeric_df1 = df.select_dtypes(include=[np.number])
    correlation_matrix1 = numeric_df1.corr('spearman')

    # Converte o gráfico para imagem
    img = BytesIO()
    plt.figure()
    sns.heatmap(correlation_matrix1, annot=True)
    plt.title('Correlação de Spearman')
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url2 = base64.b64encode(img.getvalue()).decode()

    return render_template('index.html', plot_url1=plot_url1, plot_url2=plot_url2)

if __name__ == '__main__':
    app.run(debug=True)
