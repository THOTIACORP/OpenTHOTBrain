@echo off

REM Defina os URLs corretos para os instaladores do Git, Docker e GitHub Desktop
set GIT_URL=https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.1/Git-2.33.0-64-bit.exe
set DOCKER_URL=https://drive.usercontent.google.com/download?id=1Qy9Kj8ldQhvXXmPJQ6l2o9xD5B_6O5N1
set GITHUB_DESKTOP_URL=https://central.github.com/deployments/desktop/desktop/latest/win32

REM Defina o diretório onde você deseja baixar os instaladores
set DOWNLOAD_DIR=C:\Downloads

REM Certifique-se de que o diretório de download exista, caso contrário, crie-o
if not exist "%DOWNLOAD_DIR%" mkdir "%DOWNLOAD_DIR%"
REM Verificar se o GitInstaller.exe já existe antes de baixar
if not exist "%DOWNLOAD_DIR%\GitInstaller.exe" (
    echo Baixando o Git...
    bitsadmin /transfer DownloadGit %GIT_URL% "%DOWNLOAD_DIR%\GitInstaller.exe"
)
REM Renomear o arquivo Docker Desktop Installer
ren "%DOWNLOAD_DIR%\Docker%20Desktop%20Installer.exe" "%DOWNLOAD_DIR%\DockerInstaller.exe"
REM Verificar se o DockerInstaller.exe já existe antes de baixar
if not exist "%DOWNLOAD_DIR%\DockerInstaller.exe" (
    echo Baixando o Docker...
    bitsadmin /transfer DownloadDocker %DOCKER_URL% "%DOWNLOAD_DIR%\DockerInstaller.exe"
)

REM Verificar se o GitHubDesktopSetup.exe já existe antes de baixar
if not exist "%DOWNLOAD_DIR%\GitHubDesktopSetup.exe" (
    echo Baixando o GitHub Desktop...
    bitsadmin /transfer DownloadGitHubDesktop %GITHUB_DESKTOP_URL% "%DOWNLOAD_DIR%\GitHubDesktopSetup.exe"
)

REM Aguardar o download ser concluído antes de prosseguir
timeout /t 10 /nobreak

REM Instalar o Git
echo Instalando o Git...
"%DOWNLOAD_DIR%\GitInstaller.exe" /SILENT

REM Instalar o Docker
echo Instalando o Docker...
"%DOWNLOAD_DIR%\DockerInstaller.exe" /SILENT

REM Instalar o GitHub Desktop
echo Instalando o GitHub Desktop...
"%DOWNLOAD_DIR%\GitHubDesktopSetup.exe"

REM Aguardar um tempo para as instalações serem concluídas
timeout /t 10 /nobreak

docker build -t versao_um .

REM 5. Executar o contêiner a partir da imagem (substitua "nome_da_imagem" pelo nome da imagem)
docker run -p 5000:5000 versao_um

REM Após as instalações, você pode prosseguir com o restante do seu script
