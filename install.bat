@echo off

REM Definir URLs para Git, Docker e GitHub Desktop
set GIT_URL=https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.1/Git-2.33.0-64-bit.exe
set DOCKER_URL=https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*mu8u56*_ga*NzMwMDg3OTY2LjE3MDg1NjAxNzg.*_ga_XJWPQMJYHQ*MTcwODkwMjI4OC41LjEuMTcwODkwMjI5Ni41Mi4wLjA.
set GITHUB_DESKTOP_URL=https://github.com/desktop/desktop/releases/download/release-2.8.0-windows2/GitHubDesktopSetup.exe

REM Definir a localização padrão da pasta de repositórios do GitHub Desktop
set GITHUB_DESKTOP_REPO_LOCATION=%USERPROFILE%\Documents\GitHub

REM 2. Baixar e instalar o Git (caso já não esteja instalado)
curl -o GitInstaller.exe %GIT_URL%
GitInstaller.exe /SILENT
timeout /t 60

REM 1. Baixar e instalar o Docker (caso já não esteja instalado)
curl -o DockerInstaller.exe %DOCKER_URL%
DockerInstaller.exe /S
timeout /t 60

REM 3. Baixar e instalar o GitHub Desktop
curl -o GitHubDesktopSetup.exe %GITHUB_DESKTOP_URL%
GitHubDesktopSetup.exe /SILENT
timeout /t 60

REM Navegar até a pasta de repositórios do GitHub Desktop
cd %GITHUB_DESKTOP_REPO_LOCATION%

REM 4. Baixar o software do GitHub
git clone https://github.com/THOTIACORP/I2A2-Challanges-Python.git

REM Navegar até o diretório do software
cd I2A2-Challanges-Python

REM Aguardar um tempo para o Docker ser instalado completamente
timeout /t 60

REM 5. Executar o Dockerfile para construir a imagem
docker build -t versao_um .

REM 6. Executar o contêiner a partir da imagem
docker run -p 5000:5000 versao_um

REM Opcional: Exibir mensagem indicando que o processo foi concluído
echo Script concluído. O Git, o Docker, o GitHub Desktop, o software do GitHub foram instalados e a imagem Docker foi construída e executada.
