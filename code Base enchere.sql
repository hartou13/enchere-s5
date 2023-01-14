create sequence admin_seq;
CREATE TABLE administrateur (
  id SERIAL ,
  refAdmin VARCHAR(5) default 'AD'||TO_CHAR(nextval('admin_seq'),'FM000'),
  email VARCHAR(60),
  mdp VARCHAR(255),
  nom VARCHAR(50),
  PRIMARY KEY (id)
);
create sequence categorie_seq;
CREATE TABLE categorie (
  id SERIAL ,
  refCategorie VARCHAR(10) default 'CT'||TO_CHAR(nextval('categorie_seq'),'FM000'),
  nomCategorie VARCHAR(10),
  PRIMARY KEY (id)
);

CREATE TABLE Categorie_Lot (
  Categorieid int4 ,
  Lotid int4 ,
  PRIMARY KEY (Categorieid, Lotid)
);
create sequence demande_seq;
CREATE TABLE demandeRecharge (
  id SERIAL ,
  refDemande VARCHAR(5) default 'DM'||TO_CHAR(nextval('demande_seq'),'FM000'),
  somme float8,
  utilisateurid int4 ,
  PRIMARY KEY (id)
);
create sequence encheres_seq;
CREATE TABLE enchere (
  id SERIAL ,
  refEnchere VARCHAR(5) default 'EN'||TO_CHAR(nextval('encheres_seq'),'FM000'),
  debut TIMESTAMP,
  duree INTERVAL,
  prixDeMisEnEnchere float8,
  vita bool,
  Lotid int4 ,
  commission float8,
  PRIMARY KEY (id)
);

CREATE TABLE historique_commission (id int4, daty date, valeur float8);

create sequence lot_seq;
CREATE TABLE lot (
  id SERIAL ,
  refLot VARCHAR(5) default 'LO'||TO_CHAR(nextval('lot_seq'),'FM000'),
  nomLot VARCHAR(60),
  descriptionLot VARCHAR(100),
  Valeur float8,
  nombre float8,
  Utilisateurid int4 ,
  PRIMARY KEY (id)
);
create sequence mise_seq;
CREATE TABLE mise (
  id SERIAL ,
  refMise VARCHAR(10)default 'MI'||TO_CHAR(nextval('mise_seq'),'FM000'),
  somme float8,
  daty TIMESTAMP,
  utilisateurid int4 ,
  enchereid int4 ,
  PRIMARY KEY (id)
);

CREATE TABLE miseGagnante (
  id SERIAL ,
  daty date,
  miseid int4 ,
  PRIMARY KEY (id)
);
create sequence mouvement_seq;
CREATE TABLE mouvementArgent (
  id SERIAL ,
  refMouvement VARCHAR(5) default 'MV'||TO_CHAR(nextval('mouvement_seq'),'FM000'),
  sommeEntrant float8,
  sommeSortant float8,
  motif VARCHAR(255),
  demandeRechargeid int4,
  utilisateurid int4,
  miseGagnanteid int4 ,
  PRIMARY KEY (id)
);
create sequence user_seq;
CREATE TABLE utilisateur (
  id SERIAL ,
  refUtilisateur VARCHAR(5) default 'UT'||TO_CHAR(nextval('user_seq'),'FM000'),
  email VARCHAR(60),
  mdp VARCHAR(255),
  nom VARCHAR(50),
  prenom VARCHAR(50),
  dateDeNaissance date,
  PRIMARY KEY (id)
);

ALTER TABLE
  Categorie_Lot
ADD
  CONSTRAINT FKCategorie_712021 FOREIGN KEY (Categorieid) REFERENCES categorie (id);

ALTER TABLE
  Categorie_Lot
ADD
  CONSTRAINT FKCategorie_373239 FOREIGN KEY (Lotid) REFERENCES lot (id);

ALTER TABLE
  lot
ADD
  CONSTRAINT FKlot381508 FOREIGN KEY (Utilisateurid) REFERENCES utilisateur (id);

ALTER TABLE
  enchere
ADD
  CONSTRAINT FKenchere856187 FOREIGN KEY (Lotid) REFERENCES lot (id);

ALTER TABLE
  mouvementArgent
ADD
  CONSTRAINT FKmouvementA87923 FOREIGN KEY (demandeRechargeid) REFERENCES demandeRecharge (id);

ALTER TABLE
  miseGagnante
ADD
  CONSTRAINT FKmiseGagnan864832 FOREIGN KEY (miseid) REFERENCES mise (id);

ALTER TABLE
  mouvementArgent
ADD
  CONSTRAINT FKmouvementA753133 FOREIGN KEY (utilisateurid) REFERENCES utilisateur (id);

ALTER TABLE
  mise
ADD
  CONSTRAINT FKmise99491 FOREIGN KEY (utilisateurid) REFERENCES utilisateur (id);

ALTER TABLE
  mouvementArgent
ADD
  CONSTRAINT FKmouvementA118260 FOREIGN KEY (miseGagnanteid) REFERENCES miseGagnante (id);

ALTER TABLE
  mise
ADD
  CONSTRAINT FKmise163119 FOREIGN KEY (enchereid) REFERENCES enchere (id);

ALTER TABLE
  demandeRecharge
ADD
  CONSTRAINT FKdemandeRec505342 FOREIGN KEY (utilisateurid) REFERENCES utilisateur (id);

create view v_derniere_mise as 
WITH last_month AS (
    SELECT date_trunc('month', current_date) - INTERVAL '1' MONTH AS start_date, date_trunc('month', current_date) AS end_date
)
SELECT *
FROM mise
JOIN last_month
ON daty BETWEEN start_date AND end_date;


create or replace view v_commission_preleve as 
select enchere.id, enchere.commission*v_derniere_mise.somme as commission from miseGagnante join v_derniere_mise on v_derniere_mise.id=miseGagnante.miseid join enchere on enchere.id=v_derniere_mise.enchereid;

create or replace  view v_moy_commission as 
select avg(v_commission_preleve.commission) as moyenne_commission from v_commission_preleve;

create or replace  view v_depense_moy as 
select mise.utilisateurid, avg(somme) as somme from miseGagnante join mise on miseGagnante.miseid=mise.id group by mise.utilisateurid;

create or replace  view v_part_moy as 
select count(id) as nbParticipation,utilisateurid from v_derniere_mise group by utilisateurid;

create or replace  view v_enchere_moy as 
select count(enchere.id) as isa, lot.utilisateurid from enchere join lot on lot.id=enchere.LotId group by lot.utilisateurid;

create or replace  view v_mise_par_enchere as
select enchereid,count(utilisateurid) from v_derniere_mise group by enchereid;

create or replace view v_trends_categorie as
select categorieid, sum(v_mise_par_enchere.count) as nbMise from categorie_lot join enchere on enchere.lotid=categorie_lot.lotid join v_mise_par_enchere on v_mise_par_enchere.enchereid=enchere.id group by categorieid;

create view v_month_enchere_nb as
WITH current_month AS (
    SELECT date_trunc('month', current_date) AS start_date, date_trunc('month', current_date) + INTERVAL '1 month' - INTERVAL '1 day' AS end_date
)
SELECT COUNT(*)
FROM enchere
JOIN current_month
ON debut BETWEEN start_date AND end_date;

create view v_today_enchere_nb as
SELECT COUNT(*)
FROM enchere
WHERE date(debut) = current_date;

create view v_enchere_en_cours as 
SELECT * 
FROM enchere
WHERE debut + (duree)::interval > current_timestamp;

create or replace view v_vola_miditra as 
select id, refMouvement, sommeEntrant, motif, utilisateurid,demandeRechargeId from mouvementArgent where sommeEntrant is not null;

create or replace view v_vola_mivoaka as 
select id, refMouvement, sommeSortant, motif, utilisateurid,miseGagnanteid from mouvementArgent where sommeEntrant is not null;
