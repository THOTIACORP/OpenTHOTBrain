# Use a imagem oficial do Python como base
FROM python:3

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o diretório de trabalho no contêiner
COPY . /app

# Instale as dependências do seu aplicativo Python
RUN pip install -r requirements.txt

# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["python", "app.py"]
