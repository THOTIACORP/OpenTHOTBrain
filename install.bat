@echo off

REM 2. Baixar e instalar o Git (caso já não esteja instalado)
REM Este comando baixa o instalador do Git e o executa em modo silencioso
REM Certifique-se de substituir "https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.1/Git-2.33.0-64-bit.exe" pela URL correta do instalador do Git para Windows
curl -o GitInstaller.exe https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.1/Git-2.33.0-64-bit.exe
GitInstaller.exe /SILENT

REM Aguardar um tempo para o Git ser instalado completamente
timeout /t 60

REM 1. Baixar e instalar o Docker (caso já não esteja instalado)
REM Este comando baixa o instalador do Docker e o executa em modo silencioso
REM Certifique-se de substituir "https://download.docker.com/win/stable/Docker%20Desktop%20Installer.exe" pela URL correta do instalador do Docker para Windows
curl -o DockerInstaller.exe https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*mu8u56*_ga*NzMwMDg3OTY2LjE3MDg1NjAxNzg.*_ga_XJWPQMJYHQ*MTcwODkwMjI4OC41LjEuMTcwODkwMjI5Ni41Mi4wLjA.
DockerInstaller.exe /S

REM Aguardar um tempo para o Docker ser instalado completamente
timeout /t 60

REM 4. Executar o Dockerfile para construir a imagem (substitua "Dockerfile" pelo nome do seu arquivo Dockerfile)
docker build -t versao_um .

REM 5. Executar o contêiner a partir da imagem (substitua "nome_da_imagem" pelo nome da imagem)
docker run -p 5000:5000 versao_um

REM Opcional: Exibir mensagem indicando que o processo foi concluído
echo Script concluído. O Docker foi instalado, o software foi baixado e a imagem foi construída e executada.
