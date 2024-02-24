from flask import Flask, render_template, request, jsonify
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

def calculate_correlations(file):
    # Carregue o arquivo xlsx em um DataFrame
    df = pd.read_excel(file)

    # Exclua valores não numéricos dos dados
    numeric_df = df.select_dtypes(include=[float, int])

    # Calcula a correlação de Pearson
    correlation_matrix = numeric_df.corr()

    # Converte o gráfico para imagem
    img = BytesIO()
    plt.close('all')  # Adicionando o fechamento explícito de todas as figuras
    plt.figure()
    sns.heatmap(correlation_matrix, annot=True)
    plt.title('Correalação de Pearson')
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url1 = base64.b64encode(img.getvalue()).decode()

    # Calcula a Correlação de Spearman
    correlation_matrix1 = numeric_df.corr('spearman')

    # Converte o gráfico para imagem
    img = BytesIO()
    plt.close('all')  # Adicionando o fechamento explícito de todas as figuras
    plt.figure()
    sns.heatmap(correlation_matrix1, annot=True)
    plt.title('Correlação de Spearman')
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url2 = base64.b64encode(img.getvalue()).decode()

    return plot_url1, plot_url2

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = request.files['file']
        plot_url1, plot_url2 = calculate_correlations(file)
        return jsonify({'plot_url1': plot_url1, 'plot_url2': plot_url2})
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)