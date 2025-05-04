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

select * from jogadorFavorito;

select * from usuario;

