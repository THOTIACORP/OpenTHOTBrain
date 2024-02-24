# Use a imagem oficial do Python como base
FROM python:3

# Define o diretório de trabalho dentro do contêiner
WORKDIR /src

# Copie os arquivos necessários para o diretório de trabalho no contêiner
COPY . /src

# # Instale as dependências do seu aplicativo Python
RUN pip install -r requirements.txt
# Expõe a porta 5000 para permitir conexões externas
EXPOSE 5000
# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["python", "src/services/challenge_1/app.py"]