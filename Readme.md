# Full Cycle 2.0

## Enunciado do desafio

### Nginx com Node.js

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

    <h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

---

## Resultado Publicado

### Github

[Repositório wsanada/fullcycle2.0-devops-docker-nginx-node](https://github.com/wsanada/fullcycle2.0-devops-docker-nginx-node)

---

## Exercícios Executados

##### Geração das Imagens e Containers Individualmente

    # Criar Imagem
    docker build -t wsanada/node:prod . -f Dockerfile.prod
    docker build -t wsanada/nginx:prod . -f Dockerfile.prod

    # Criar Container
    docker run --rm -d --network nodenet --name node wsanada/node:prod
    docker run --rm -d --network nodenet --name nginx -p 80:80 wsanada/nginx:prod

    # Remover Container
    docker rm node -f
    docker rm nginx -f

    # Remover Imagem
    docker rmi -f wsanada/node:prod
    docker rmi -f wsanada/nginx:prod

##### Docker Compose

    # para subir os containers
    docker-compose up

    # para subir os containers sem travar o terminal
    docker-compose up -d

    # para subir os container sem travar o terminal e recriar as imagens
    docker-compose up -d --build

    # para desligar os containers
    docker-compose down

    # para listar os containers ativos
    docker-compose ps