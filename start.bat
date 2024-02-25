@echo off
docker build -t versao_um .

REM 5. Executar o contêiner a partir da imagem (substitua "nome_da_imagem" pelo nome da imagem)
docker run -p 5000:5000 versao_um
