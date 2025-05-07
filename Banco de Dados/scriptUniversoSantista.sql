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
('Escalação Santos 2011');

create table pontuacao (
  idPontuacao int primary key auto_increment,
  pontuacao int,
  erros int,
  fkUsuario int,
  fkMinigame int,
  foreign key (fkUsuario) references usuario(idUsuario),
  foreign key (fkMinigame) references miniGame(idMinigame)
);

select * from jogadorFavorito;

select * from usuario;

select * from miniGame;

select * from pontuacao;








