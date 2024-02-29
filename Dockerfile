# Use uma imagem que suporta Node.js, além do Python, para construir o frontend
FROM node:14 AS frontend

# Define o diretório de trabalho para o frontend
WORKDIR /src/front-end

# Copie os arquivos necessários para o diretório de trabalho no contêiner
COPY ./front-end .

# Instale as dependências do frontend
RUN npm install

# Construa o frontend
RUN npm run build

# Use a imagem oficial do Python como base
FROM python:3

# Define o diretório de trabalho dentro do contêiner
WORKDIR /src/back-end

# Copie os arquivos necessários para o diretório de trabalho no contêiner
COPY ./src/back-end .

# Instale as dependências do seu aplicativo Python
RUN pip install -r requirements.txt

# Expõe a porta 5010 para permitir conexões externas
EXPOSE 5010

# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["python", "services/challenge_1/app.py"]
