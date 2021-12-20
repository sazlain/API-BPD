module.exports = QUERY_STRING = {
    GET_REGIONS: 'select * from PMT_REGIONES',
    GET_CAR_BRAND_LIST: "SELECT  DISTINCT (SPLIT_STR(paa.APLICACION,' ', 2)) brand from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO " +
        "where pm.MARKETPLACE = '004' ORDER by brand ASC",
    GET_CAR_MODELS_LIST: "SELECT  DISTINCT (SPLIT_STR(paa.APLICACION,' ', 3)) model from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO " +
        "where pm.MARKETPLACE = '004' and SPLIT_STR(paa.APLICACION,' ', 2) = '@@0' ORDER by model ASC",
    GET_APPLICATION_PART_LIST: "SELECT DISTINCT (paa.APLICACION), paa.YEAR_INI, paa.YEAR_FIN from PMT_APLICACIONES_ACT paa " +
        "inner join PMT_MARKETPLACES pm on paa.CODIGO = pm.CODIGO " +
        "where pm.MARKETPLACE = '004' ORDER by APLICACION ASC",
}