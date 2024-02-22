# Solução 1

import pandas as pd
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# Carregando os dados do arquivo Excel
def load_data(file_path):
    # Carregar os dados e usar a primeira coluna como índice
    return pd.read_excel(file_path, index_col=0)

# Pré-processamento dos dados
def preprocess_data(data):
    # Preencha os valores ausentes com a média de cada coluna
    data.fillna(data.mean(), inplace=True)
    return data

# Aplicação do PCA
def apply_pca(data, n_components=2):
    # Normalizar os dados (é importante para o PCA)
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(data)

    # Aplicar PCA
    pca = PCA(n_components=n_components)
    X_pca = pca.fit_transform(X_scaled)
    
    # Nomear os componentes principais
    pc_names = [f"PC{i+1}" for i in range(n_components)]
    X_pca_df = pd.DataFrame(X_pca, columns=pc_names)
    
    return X_pca_df

# Visualização dos resultados
def visualize_pca(X_pca, data, most_distorted_variable):
    plt.figure(figsize=(8, 6))

    for i, col in enumerate(data.columns[1:]):  # Começar da segunda coluna (versões de sensores)
        plt.scatter(X_pca['PC1'], X_pca['PC2'], label=col)

    # Imprimir a variável mais distorcida no gráfico
    plt.text(X_pca['PC1'][0], X_pca['PC2'][0], f"Variável mais distorcida: {most_distorted_variable}", fontsize=10)

    plt.xlabel('Componente Principal 1')
    plt.ylabel('Componente Principal 2')
    plt.title('PCA dos Dados')
    plt.legend(loc='upper left', bbox_to_anchor=(1,1))
    plt.show()

# Selecionar as variáveis mais distorcidas
def top_distorted_variable(data):
    # Selecionar apenas as colunas que representam as versões dos sensores (V1, V2, ..., V8)
    sensor_versions = data.iloc[:, 1:]
    
    # Calcular a variância de cada coluna
    variances = sensor_versions.var()
    
    # Selecionar a coluna com a maior variância
    most_distorted_variable = variances.idxmax()
    
    return most_distorted_variable

# Caminho do arquivo Excel
file_path = "Equipamentos.xlsx"

# Carregar os dados
data = load_data(file_path)

# Pré-processamento dos dados
data = preprocess_data(data)

# Identificar a variável mais distorcida
most_distorted_variable = top_distorted_variable(data)
print("Variável mais distorcida:", most_distorted_variable)

# Aplicar PCA
X_pca = apply_pca(data.iloc[:, 1:])  # Excluir a primeira coluna (índices de sensor)

# Visualização dos resultados
visualize_pca(X_pca, data, most_distorted_variable)  # Não é necessário excluir a primeira coluna (índices de sensor) na visualização





#Solução dois
import numpy as np

data = {
    'V1': [375, 57, 245, 1472, 105, 54, 193, 147, 1102, 720, 253, 685, 488, 198, 360, 1374, 156],
    'V2': [475, 73, 227, 1582, 103, 64, 235, 160, 1137, 874, 265, 803, 570, 203, 365, 1256, 175],
    'V3': [135, 47, 267, 1494, 66, 41, 209, 93, 674, 1033, 143, 586, 355, 187, 334, 1506, 139],
    'V4': [458, 53, 242, 1462, 103, 62, 184, 122, 957, 566, 171, 750, 418, 220, 337, 1572, 147],
    'V5': [509, 63, 271, 1613, 118, 55, 207, 139, 1058, 628, 193, 830, 465, 247, 376, 1734, 167],
    'V6': [469, 63, 268, 1490, 101, 63, 223, 152, 1098, 706, 247, 699, 467, 209, 363, 1597, 164],
    'V7': [336, 62, 219, 1323, 98, 59, 172, 130, 990, 646, 226, 615, 437, 176, 322, 1235, 138],
    'V8': [492, 58, 286, 1493, 118, 59, 156, 101, 878, 320, 99, 777, 313, 204, 348, 1684, 170]
}

# Calcular desvios padrão para cada conjunto de dados
std_devs = {key: np.std(values) for key, values in data.items()}

# Ordenar os desvios padrão em ordem decrescente
sorted_std_devs = sorted(std_devs.items(), key=lambda x: x[1], reverse=True)

# Mostrar as sequências das mais distorcidas para as menos distorcidas
for item in sorted_std_devs:
    print(f"Sequência: {item[0]}, Desvio padrão: {item[1]}")