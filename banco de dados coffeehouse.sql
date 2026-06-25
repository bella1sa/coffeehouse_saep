CREATE TABLE usuarios (
ID serial PRIMARY KEY,
nome varchar (100) NOT NULL,
email varchar (100) UNIQUE NOT NULL,
senha varchar (255) NOT NULL,
imagem varchar (255)
);

CREATE TABLE produtos (
ID serial PRIMARY KEY,
categoria varchar (50) NOT NULL,
icone varchar (255),
quantidade integer NOT NULL DEFAULT 1,
tempo_minutos integer NOT NULL,
preco decimal (10, 2) NOT NULL
);

CREATE TABLE pedidos (
ID serial PRIMARY KEY,
usuario_id integer NOT NULL,
produto_id integer NOT NULL,
quantidade integer NOT NULL,
data_pedido timestamp DEFAULT CURRENT_TIMESTAMP,


CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (ID) ON DELETE CASCADE,
CONSTRAINT fk_produto FOREIGN KEY (produto_id) REFERENCES produtos (ID) ON DELETE CASCADE
);

CREATE TABLE curtidas (
ID serial PRIMARY KEY,
usuario_id integer NOT NULL,
pedido_id integer NOT NULL,

CONSTRAINT fk_curtida_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (ID) ON DELETE CASCADE,
CONSTRAINT fk_curtida_pedido FOREIGN KEY (pedido_id) REFERENCES pedidos (ID) ON DELETE CASCADE
);

CREATE TABLE comentarios (
ID serial PRIMARY KEY,
usuario_id integer NOT NULL,
pedido_id integer NOT NULL,
mensagem text NOT NULL,
data_comentario timestamp DEFAULT CURRENT_TIMESTAMP,

CONSTRAINT fk_comentario_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (ID) ON DELETE CASCADE,
CONSTRAINT fk_comentario_pedido FOREIGN KEY (pedido_id) REFERENCES pedidos (ID) ON DELETE CASCADE
);
