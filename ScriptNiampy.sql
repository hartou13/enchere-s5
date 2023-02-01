create table TokenAdmin(
    idToken serial PRIMARY KEY,
    token varchar(100),
    id integer,
    dateExpiration Timestamp without time zone,
    FOREIGN KEY(id) REFERENCES administrateur(id) 
);
create table TokenUser(
    idToken serial PRIMARY KEY,
    token varchar(100),
    id integer,
    dateExpiration Timestamp without time zone,
    FOREIGN KEY(id) REFERENCES utilisateur(id) 
);

Update administrateur set mdp='098f6bcd4621d373cade4e832627b4f6' where email='test@example.com';
Update utilisateur set mdp='098f6bcd4621d373cade4e832627b4f6' where email='test@example.com';
Update utilisateur set mdp='ad0234829205b9033196ba818f7a872b' where email='test2@example.com';
Update utilisateur set mdp='8ad8757baa8564dc136c1e07507f4a98' where email='test3@example.com';
Update utilisateur set mdp='86985e105f79b95d6bc918fb45ec7727' where email='test4@example.com';

create view enchereLot as select lot.refLot,lot.nomLot,lot.descriptionLot,lot.Valeur,lot.nombre,lot.Utilisateurid,enchere.id,enchere.lotid,enchere.refEnchere,enchere.debut,enchere.duree,enchere.prixDeMisEnEnchere,enchere.commission from enchere join lot on lot.id=enchere.lotid;

