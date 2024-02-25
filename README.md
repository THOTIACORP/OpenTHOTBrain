# Software de Análises de Dados Diversas em Python
Software elaborado para os desafios do curso de matemática e I.A. da - I2A2
- https://www.i2a2.academy/
<br><br><br><br>

## Sumário  

- [Software de Análises de Dados Diversas em Python](#software-de-análises-de-dados-diversas-em-python)
  - [Sumário](#sumário)
  - [Sistema webdev com funções recursivas dinâmicas](#sistema-webdev-com-funções-recursivas-dinâmicas)
  - [Imagens do sistema](#imagens-do-sistema)
    - [Recursos do sistema](#recursos-do-sistema)
    - [Dependências](#dependências)
    - [Dowload do sistema](#dowload-do-sistema)
    - [Rodar o sistema](#rodar-o-sistema)

## Sistema webdev com funções recursivas dinâmicas
- Ferramentas de ultima geração
- Sistema dispensa conhecimento em programação para uso
- Sistema com UI/UX interface de usuário intuitiva
- Sistema preparado pra interpretar as tarefas do curso e qualquer outra com similaridade
- Sistema com instruções AAA de ponta a ponta
- Sistema desenvolvido pela comunidade pensando em auxiliar os anaslistas de dados
<br><br><br><br>

## Imagens do sistema
<div align="center">

![Logo](./public/assets/img/0001.jpg)
![Logo](./public/assets/img/0002.jpg)
</div>
<br><br><br><br>

### Recursos do sistema
- ✅ Correlações de Pearson
- ✅ Correlações de Spearman

<br><br><br><br>

### Dependências

Requerimentos externo do software 
- Faça download dos coomponentes abaixo 
- Instale o sistemas
- Crie conta e conecte-se as contas respectivas
 <br><br>

IDE - Ambiente de Desenvolvimento Integrado - programa para abrir a pasta do software e te auxiliar a codar
- VSCode não é necessário conta
- https://code.visualstudio.com/download

Controle de versionamento:
- https://git-scm.com/downloads
- https://desktop.github.com/    [ Abrir conta ]

Ambiente virtual 
- https://docs.docker.com/desktop/install/windows-install/           [ Abrir conta ]

<br><br>

### Dowload do sistema
Agora que você fez todos dowloads instalou, criou as conta e logou 
- Abra o githubdesktop e clone o esse projeto através da url maiores instruções no link abaixo
- https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop 

Url para clone
- https://github.com/THOTIACORP/I2A2-Challanges-Python.git

<br><br>

### Rodar o sistema
Agora que vc têm o projeto clonado peça o github desktop abrir o projeto com VSCode
No VSCode peça para abrir um novo terminal e digite os seguintes comandos abaixo:
Para subir um contêiner Docker execute no terminal do projeto:

1. **Construa a imagem Docker**: No mesmo diretório do Dockerfile, execute o comando:

```bash
docker build -t versao_um .
```

Isso criará uma imagem Docker com o nome especificado

3. **Execute o contêiner**: Depois de construir a imagem, você pode executar o contêiner com o comando:

```bash
docker run -p 5000:5000 versao_um
```

Isso iniciará o contêiner em segundo plano.

Lembre-se de substituir "versao_um" pelo nome que você deseja dar à sua imagem Docker.

Certifique-se de ajustar o Dockerfile de acordo com a estrutura do seu aplicativo Python (por exemplo, nome do arquivo principal, dependências etc.).
