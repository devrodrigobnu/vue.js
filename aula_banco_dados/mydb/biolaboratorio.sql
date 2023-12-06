SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `biolaboratorio` DEFAULT CHARACTER SET utf8 ;
USE `biolaboratorio` ;

CREATE TABLE IF NOT EXISTS `biolaboratorio`.`REINO` (
  `idREINO` INT NOT NULL AUTO_INCREMENT,
  `Nome_Reino` VARCHAR(55) NOT NULL,
  `Descricao_Reino` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idREINO`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`FILO` (
  `idFILO` INT NOT NULL AUTO_INCREMENT,
  `REINO_idREINO` INT NOT NULL,
  `Nome_Filo` VARCHAR(45) NOT NULL,
  `Descricao_Filo` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idFILO`),
  INDEX `fk_FILO_REINO_idx` (`REINO_idREINO` ASC) VISIBLE,
  CONSTRAINT `fk_FILO_REINO`
    FOREIGN KEY (`REINO_idREINO`)
    REFERENCES `biolaboratorio`.`REINO` (`idREINO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`CLASSE` (
  `idCLASSE` INT NOT NULL AUTO_INCREMENT,
  `FILO_idFILO` INT NOT NULL,
  `Nome_Classe` VARCHAR(255) NOT NULL,
  `Descricao_Classe` TEXT NOT NULL,
  PRIMARY KEY (`idCLASSE`),
  INDEX `fk_CLASSE_FILO1_idx` (`FILO_idFILO` ASC) VISIBLE,
  CONSTRAINT `fk_CLASSE_FILO1`
    FOREIGN KEY (`FILO_idFILO`)
    REFERENCES `biolaboratorio`.`FILO` (`idFILO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`ORDEM` (
  `idORDEM` INT NOT NULL AUTO_INCREMENT,
  `CLASSE_idCLASSE` INT NOT NULL,
  `Nome_Ordem` VARCHAR(255) NOT NULL,
  `Descricao_Ordem` TEXT NOT NULL,
  PRIMARY KEY (`idORDEM`),
  INDEX `fk_ORDEM_CLASSE1_idx` (`CLASSE_idCLASSE` ASC) VISIBLE,
  CONSTRAINT `fk_ORDEM_CLASSE1`
    FOREIGN KEY (`CLASSE_idCLASSE`)
    REFERENCES `biolaboratorio`.`CLASSE` (`idCLASSE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`FAMILIA` (
  `idFAMILIA` INT NOT NULL AUTO_INCREMENT,
  `ORDEM_idORDEM` INT NOT NULL,
  `Nome_Familia` VARCHAR(255) NOT NULL,
  `Descricao_Familia` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idFAMILIA`),
  INDEX `fk_FAMILIA_ORDEM1_idx` (`ORDEM_idORDEM` ASC) VISIBLE,
  CONSTRAINT `fk_FAMILIA_ORDEM1`
    FOREIGN KEY (`ORDEM_idORDEM`)
    REFERENCES `biolaboratorio`.`ORDEM` (`idORDEM`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`GENERO` (
  `idGENERO` INT NOT NULL AUTO_INCREMENT,
  `FAMILIA_idFAMILIA` INT NOT NULL,
  `Nome_Genero` VARCHAR(155) NOT NULL,
  `Descricao_Genero` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idGENERO`),
  INDEX `fk_GENERO_FAMILIA1_idx` (`FAMILIA_idFAMILIA` ASC) VISIBLE,
  CONSTRAINT `fk_GENERO_FAMILIA1`
    FOREIGN KEY (`FAMILIA_idFAMILIA`)
    REFERENCES `biolaboratorio`.`FAMILIA` (`idFAMILIA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`REPRODUCAO` (
  `idREPRODUCAO` INT NOT NULL AUTO_INCREMENT,
  `Tipo_Reproducao` VARCHAR(155) NOT NULL,
  `Descricao_Reproducao` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idREPRODUCAO`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`Alimentacao` (
  `idAlimentacao` INT NOT NULL AUTO_INCREMENT,
  `Tipo_Alimentacao` VARCHAR(155) NOT NULL,
  `Descricao_Alimentacao` TEXT NULL,
  PRIMARY KEY (`idAlimentacao`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`ESPECIE` (
  `idESPECIE` INT NOT NULL AUTO_INCREMENT,
  `GENERO_idGENERO` INT NOT NULL,
  `Nome_Especie` VARCHAR(155) NOT NULL,
  `Descricao_Especie` TEXT NOT NULL,
  `Caracteristicas_Morfologicas` VARCHAR(155) NOT NULL,
  `Distribuicao_Geografica` VARCHAR(155) NOT NULL,
  `Ecologia_Especie` VARCHAR(155) NOT NULL,
  `Status_Conversavacao` VARCHAR(155) NOT NULL,
  `Usos_Potenciais` VARCHAR(155) NOT NULL,
  `REPRODUCAO_idREPRODUCAO` INT NOT NULL,
  `Alimentacao_idAlimentacao` INT NOT NULL,
  PRIMARY KEY (`idESPECIE`, `REPRODUCAO_idREPRODUCAO`, `Alimentacao_idAlimentacao`),
  INDEX `fk_ESPECIE_GENERO1_idx` (`GENERO_idGENERO` ASC) VISIBLE,
  INDEX `fk_ESPECIE_REPRODUCAO1_idx` (`REPRODUCAO_idREPRODUCAO` ASC) VISIBLE,
  INDEX `fk_ESPECIE_Alimentacao1_idx` (`Alimentacao_idAlimentacao` ASC) VISIBLE,
  CONSTRAINT `fk_ESPECIE_GENERO1`
    FOREIGN KEY (`GENERO_idGENERO`)
    REFERENCES `biolaboratorio`.`GENERO` (`idGENERO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ESPECIE_REPRODUCAO1`
    FOREIGN KEY (`REPRODUCAO_idREPRODUCAO`)
    REFERENCES `biolaboratorio`.`REPRODUCAO` (`idREPRODUCAO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ESPECIE_Alimentacao1`
    FOREIGN KEY (`Alimentacao_idAlimentacao`)
    REFERENCES `biolaboratorio`.`Alimentacao` (`idAlimentacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`HABITAT` (
  `idHABITAT` INT NOT NULL AUTO_INCREMENT,
  `Nome_Habitat` VARCHAR(155) NOT NULL,
  `Descricao_Habitat` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idHABITAT`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`DoencasTransmissiveis` (
  `idDoencasTransmissiveis` INT NOT NULL AUTO_INCREMENT,
  `Nome_Doenca` VARCHAR(155) NOT NULL,
  `Descricao_Doenca` VARCHAR(155) NOT NULL,
  `Sintomas` TEXT NOT NULL,
  `Tratamento` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`idDoencasTransmissiveis`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`ESPECIE_has_DoencasTransmissiveis` (
  `ESPECIE_idESPECIE` INT NOT NULL,
  `DoencasTransmissiveis_idDoencasTransmissiveis` INT NOT NULL,
  PRIMARY KEY (`ESPECIE_idESPECIE`, `DoencasTransmissiveis_idDoencasTransmissiveis`),
  INDEX `fk_ESPECIE_has_DoencasTransmissiveis_DoencasTransmissiveis1_idx` (`DoencasTransmissiveis_idDoencasTransmissiveis` ASC) VISIBLE,
  INDEX `fk_ESPECIE_has_DoencasTransmissiveis_ESPECIE1_idx` (`ESPECIE_idESPECIE` ASC) VISIBLE,
  CONSTRAINT `fk_ESPECIE_has_DoencasTransmissiveis_ESPECIE1`
    FOREIGN KEY (`ESPECIE_idESPECIE`)
    REFERENCES `biolaboratorio`.`ESPECIE` (`idESPECIE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ESPECIE_has_DoencasTransmissiveis_DoencasTransmissiveis1`
    FOREIGN KEY (`DoencasTransmissiveis_idDoencasTransmissiveis`)
    REFERENCES `biolaboratorio`.`DoencasTransmissiveis` (`idDoencasTransmissiveis`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `biolaboratorio`.`ESPECIE_has_HABITAT` (
  `ESPECIE_idESPECIE` INT NOT NULL,
  `HABITAT_idHABITAT` INT NOT NULL,
  PRIMARY KEY (`ESPECIE_idESPECIE`, `HABITAT_idHABITAT`),
  INDEX `fk_ESPECIE_has_HABITAT_HABITAT1_idx` (`HABITAT_idHABITAT` ASC) VISIBLE,
  INDEX `fk_ESPECIE_has_HABITAT_ESPECIE1_idx` (`ESPECIE_idESPECIE` ASC) VISIBLE,
  CONSTRAINT `fk_ESPECIE_has_HABITAT_ESPECIE1`
    FOREIGN KEY (`ESPECIE_idESPECIE`)
    REFERENCES `biolaboratorio`.`ESPECIE` (`idESPECIE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ESPECIE_has_HABITAT_HABITAT1`
    FOREIGN KEY (`HABITAT_idHABITAT`)
    REFERENCES `biolaboratorio`.`HABITAT` (`idHABITAT`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- Inserções para a tabela "REINO"
INSERT INTO REINO (Nome_Reino, Descricao_Reino) VALUES
('Animalia', 'Reino que inclui organismos multicelulares heterotróficos.'),
('Plantae', 'Reino que inclui organismos multicelulares autotróficos, como plantas.'),
('Fungi', 'Reino que inclui organismos multicelulares e unicelulares que obtêm nutrientes por absorção.'),
('Protista', 'Reino que inclui uma variedade de organismos unicelulares e alguns multicelulares simples.'),
('Monera', 'Reino que inclui organismos unicelulares procariontes, como bactérias e arqueias.');
