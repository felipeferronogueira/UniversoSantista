drop database if exists universosantista;

create database universosantista;

use universosantista;

create table jogadorFavorito(
idJogador int primary key auto_increment,
nome varchar(20)
);

insert into jogadorFavorito (nome) values 
('Pelé'),
('Neymar'),
('Pepe'),
('Coutinho'),
('Zito');

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
fkJogador int,
foreign key (fkJogador) references jogadorFavorito(idJogador)
);

create table miniGame (
  idMinigame int primary key auto_increment,
  nome varchar(50)
);

insert into miniGame(nome) values
('Escalação Santos 2004'),
('Escalação Santos 2011'),
('Termo do Santos FC');


create table pontuacao (
  idPontuacao int primary key auto_increment,
  pontuacao int,
  erros int,
  fkUsuario int,
  fkMinigame int,
  foreign key (fkUsuario) references usuario(idUsuario),
  foreign key (fkMinigame) references miniGame(idMinigame)
);

insert into usuario (nome, email, senha, fkJogador) values
('Felipe Ferro', 'felipe@gmail.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Bruno Costa', 'bruno@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Carla Mendes', 'carla@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Daniel Rocha', 'daniel@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Eduarda Lima', 'eduarda@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Felipe Souza', 'felipe@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Gabriela Dias', 'gabriela@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Henrique Oliveira', 'henrique@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Isabela Martins', 'isabela@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('João Pedro', 'joao@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Karen Ramos', 'karen@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Lucas Almeida', 'lucas@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Marina Barbosa', 'marina@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Nicolas Faria', 'nicolas@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Nicolas Não Faria', 'nicolass@email.com', 'senha123', FLOOR(1 + RAND() * 5)),
('Otávio Nunes', 'otavio@email.com', 'senha123', FLOOR(1 + RAND() * 5));

insert into pontuacao (pontuacao, erros, fkUsuario, fkMinigame) values
-- Escalação (pontuação até 11, erros até 10)
(10, 2, 1, 1),
(8, 5, 2, 2),
(11, 1, 3, 1),
(9, 4, 4, 2),
(6, 6, 5, 1),
(7, 3, 6, 2),
(11, 0, 7, 1),
-- Termo (pontuação até 10, erros até 6)
(9, 1, 8, 3),
(10, 2, 9, 3),
(7, 5, 10, 3),
(6, 4, 11, 3),
(8, 3, 12, 3),
(10, 0, 13, 3),
(5, 6, 14, 3),
(9, 2, 15, 3);

insert into pontuacao (pontuacao, erros, fkUsuario, fkMinigame) values
-- Escalação (pontuação até 11, erros até 10)
(10, 2, 1, 1),
(8, 5, 1, 2),
(11, 1, 1, 1),
(9, 4, 1, 2),
(6, 6, 1, 1),
(7, 3, 1, 2),
(11, 0, 1, 1),
-- Termo (pontuação até 10, erros até 6)
(9, 1, 1, 3),
(10, 2, 1, 3),
(7, 5, 1, 3),
(6, 4, 1, 3),
(8, 3, 1, 3),
(10, 0, 1, 3),
(5, 6, 1, 3),
(9, 2, 1, 3);

select * from usuario;







