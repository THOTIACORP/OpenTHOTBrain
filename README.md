# I2A2-Challanges-Python
Desafios do curso de I.A.


Dependências:
Faça download dos coomponentes abaixo 

Controle de versionamento:
- https://git-scm.com/downloads

Ambiente virtual 
- https://docs.docker.com/desktop/install/windows-install/


Para subir um contêiner Docker que execute um aplicativo Python 3, você precisa seguir alguns passos básicos:


1. **Construa a imagem Docker**: No mesmo diretório do Dockerfile, execute o comando:

```bash
docker build -t versao_um .
```

Isso criará uma imagem Docker com o nome especificado.

3. **Execute o contêiner**: Depois de construir a imagem, você pode executar o contêiner com o comando:

```bash
docker run -d versao_um
```

Isso iniciará o contêiner em segundo plano.

Lembre-se de substituir "versao_um" pelo nome que você deseja dar à sua imagem Docker.

Certifique-se de ajustar o Dockerfile de acordo com a estrutura do seu aplicativo Python (por exemplo, nome do arquivo principal, dependências etc.).
