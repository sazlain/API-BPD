module.exports = QUERY_STRING = {
    GET_GENERAL_CONFIG: 'select * from PMT_CONFIG_GENERAL',
    GET_REGIONS: 'select * from PMT_REGIONES',
    GET_CAR_BRAND_LIST_BY_YEAR: "SELECT  DISTINCT (SPLIT_STR(paa.APLICACION,' ', 2)) brand from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO " +
        "where pm.QTY > 0 " +
        "and pm.MARKETPLACE = '004' " +
        "and pm.REGION = '@@region' " +
        "and pm.STATUS = 1 " +
        "and @@year between CONVERT(YEAR_INI,UNSIGNED INTEGER) and CONVERT(YEAR_FIN,UNSIGNED INTEGER);",
    GET_CAR_MODELS_LIST: "SELECT  DISTINCT (TRIM(CONCAT(SPLIT_STR(paa.APLICACION,' ', 3),' ', SPLIT_STR(paa.APLICACION,' ', 4),' ', " +
        "SPLIT_STR(paa.APLICACION,' ', 5),' ', SPLIT_STR(paa.APLICACION,' ', 6)))) model " +
        "from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO " +
        "where SPLIT_STR(paa.APLICACION,' ', 2) = '@@brand' " +
        "and pm.QTY > 0 " +
        "and pm.MARKETPLACE = '004' " +
        "and pm.REGION = '@@region' " +
        "and pm.STATUS = 1 " +
        "and @@year between CONVERT(YEAR_INI,UNSIGNED INTEGER) and CONVERT(YEAR_FIN,UNSIGNED INTEGER) " +
        "ORDER by model ASC",
    GET_APPLICATION_PART_LIST: "SELECT DISTINCT (paa.APLICACION), paa.YEAR_INI, paa.YEAR_FIN from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO " +
        "where pm.MARKETPLACE = '004' ORDER by APLICACION ASC",
    GET_APPLICATION_PART_LIST_NEW: "select pr.EXISTENCIA, pm.PRICE as PRECIO1, paa.* from PMT_APLICACIONES_ACT paa " +
        "INNER JOIN PMT_MARKETPLACES pm on pm.CODIGO = paa.CODIGO " +
        "INNER JOIN PRE_RESERVA pr on pr.CODIGO = paa.CODIGO " +
        "where SPLIT_STR(paa.APLICACION,' ', 2) = '@@brand' " +
        "AND (TRIM(CONCAT(SPLIT_STR(paa.APLICACION,' ', 3),' ', SPLIT_STR(paa.APLICACION,' ', 4),' ', SPLIT_STR(paa.APLICACION,' ', 5),' ', " +
        "SPLIT_STR(paa.APLICACION,' ', 6)))) = '@@model' " +
        "and pr.EXISTENCIA > 0 " +
        "and pm.MARKETPLACE = '004' " +
        "and pm.REGION = '@@region' " +
        "and pm.STATUS = 1 " +
        "and @@year between CONVERT(YEAR_INI,UNSIGNED INTEGER) and CONVERT(YEAR_FIN,UNSIGNED INTEGER)"
}