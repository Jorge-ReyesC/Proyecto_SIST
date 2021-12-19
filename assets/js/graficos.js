src="http//cdn.zingchart.com/zingchart.min.js"
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
//Reporte 1  (2000-2010-2020)//  

//grafico recuento siniestros meses 2000//
let rep1chart1Config = {
  type: "bar",
  title: {
  text: 'Meses con mas ocurrencias del año 2000'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/1 Meses_ocurrencias_anuales/meses_mas_ocurrencias_2000.csv',   
    }
  };
zingchart.render({
  id: 'rep-1-2000',
  data: rep1chart1Config,
  height: 400,
  width: "100%"
  });
//grafico recuento siniestros meses 2010//
let rep1chart2Config = {
  type: "bar",
  title: {
  text: 'Meses con mas ocurrencias del año 2010'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/1 Meses_ocurrencias_anuales/meses_mas_ocurrencias_2010.csv',   
    }
  };
zingchart.render({
  id: 'rep-1-2010',
  data: rep1chart2Config,
  height: 400,
  width: "100%"
  });
//grafico recuento siniestros meses 2020//
let rep1chart3Config = {
  type: "bar",
  title: {
  text: 'Meses con mas ocurrencias del año 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/1 Meses_ocurrencias_anuales/meses_mas_ocurrencias_2020.csv',   
    }
  };
zingchart.render({
  id: 'rep-1-2020',
  data: rep1chart3Config,
  height: 400,
  width: "100%"
  });
//grafico recuento siniestros 2 decadas totales//
let rep1chart4Config = {
  type: "bar",
  title: {
  text: 'Suma De siniestros (2000-2020) separados por dia de semana'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/Totales/Total_Ocurrencias_Dias_2000_2020.csv',   
    }
  };
zingchart.render({
  id: 'rep-1-total',
  data: rep1chart4Config,
  height: 400,
  width: "100%"
  }); 
//Fin de Reporte 1//
//Reporte 2  (2000-2010-2020)// 
let rep2chart1Config = {
  type: "bar",
  title: {
  text: 'Las horas con mas siniestros del año 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/2 Horas_ocurrencias_anuales/Horas_mas_ocurrencia_anual_2020.csv',  
    },
};  

zingchart.render({
  id: 'rep-2-2000',
  data: rep2chart1Config,
  height: 400,
  width: "100%"
  });
//Fin de Reporte 2//
//Reporte 3  (2000-2010-2020)// 
//Grafico dias ocurrencias marzo 2019  (2000-2010-2020)// 
let rep3chart1Config = {
  type: "pie",
  title: {
  text: 'Los dias de Marzo con mas ocurrencias del año 2019'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/3 Dias_ocurrencias_mensuales/2019/Dias_mas_ocurrencia_mensual_marzo_2019.csv',  
    },
};  

zingchart.render({
  id: 'rep-3-03-2019',
  data: rep3chart1Config,
  height: 400,
  width: "100%"
  });
//Grafico dias ocurrencias diciembre 2019  (2000-2010-2020)// 
let rep3chart2Config = {
  type: "pie",
  title: {
  text: 'Los dias de diciembre con mas ocurrencias del año 2019'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/3 Dias_ocurrencias_mensuales/2019/Dias_mas_ocurrencia_mensual_diciembre_2019.csv',  
    },
};  

zingchart.render({
  id: 'rep-3-12-2019',
  data: rep3chart2Config,
  height: 400,
  width: "100%"
  });  
//Fin de Reporte 3//

//Reporte 4  (2000-2010-2020)// 
//Dias con más ocurrencias anuales  (2000)// 
let rep4chart1Config = {
  type: "pareto",
  title: {
  text: 'Los dias con mas ocurrencias en el año de 2000'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/4 Dias_ocurrencias_anuales/Dias_ocurrencias_anual_2000.csv',  
    },
};  

zingchart.render({
  id: 'rep-4-2000',
  data: rep4chart1Config,
  height: 400,
  width: "100%"
  });
//Dias con más ocurrencias anuales   (2010)// 
let rep4chart2Config = {
  type: "pareto",
  title: {
  text: 'Los dias con mas ocurrencias en el año de 2010'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/4 Dias_ocurrencias_anuales/Dias_ocurrencias_anual_2010.csv',  
    },
};  

zingchart.render({
  id: 'rep-4-2010',
  data: rep4chart2Config,
  height: 400,
  width: "100%"
  });

//Dias con más ocurrencias anuales  (2020)// 
let rep4chart3Config = {
  type: "pareto",
  title: {
  text: 'Los dias con mas ocurrencias en el año de 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/4 Dias_ocurrencias_anuales/Dias_ocurrencias_anual_2020.csv',  
    },
};  

zingchart.render({
  id: 'rep-4-2020',
  data: rep4chart3Config,
  height: 400,
  width: "100%"
  });    
//Fin de Reporte 4//

//Reporte 5 (2000-2010-2020)// 
//Regiones con más ocurrencias anuales  (2000)// 
let rep5chart1Config = {
  type: "area",
  title: {
  text: 'recuento de ocurrencias en todas las regiones del pais durante el año 2000'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/5 regiones_ocurrencias_anuales/regiones_ocurrencias_anuales_2000.csv',  
    },
};  

zingchart.render({
  id: 'rep-5-2000',
  data: rep5chart1Config,
  height: 400,
  width: "100%"
  });
//Regiones con más ocurrencias anuales  (2010)// 
let rep5chart2Config = {
  type: "area",
  title: {
  text: 'recuento de ocurrencias en todas las regiones del pais durante el año 2010'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/5 regiones_ocurrencias_anuales/regiones_ocurrencias_anuales_2010.csv',  
    },
};  

zingchart.render({
  id: 'rep-5-2010',
  data: rep5chart2Config,
  height: 400,
  width: "100%"
  });

//Regiones con más ocurrencias anuales  (2020)// 
let rep5chart3Config = {
  type: "area",
  title: {
  text: 'recuento de ocurrencias en todas las regiones del pais durante el año 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/5 regiones_ocurrencias_anuales/regiones_ocurrencias_anuales_2020.csv',  
    },
};  

zingchart.render({
  id: 'rep-5-2020',
  data: rep5chart3Config,
  height: 400,
  width: "100%"
  });    
//Fin de Reporte 5//

//Reporte 6 (2000-2010-2020)// 
//  (2000)// 
let rep6chart1Config = {
  type: "area",
  title: {
  text: 'Los tipos de siniestros con mas ocurrencias del año 2000'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/6 Tipo_Siniestro_anuales/tipo_siniestro_anual_2000.csv',  
    },
};  

zingchart.render({
  id: 'rep-6-2000',
  data: rep6chart1Config,
  height: 400,
  width: "100%"
  });
//  (2010)// 
let rep6chart2Config = {
  type: "area",
  title: {
  text: 'Los tipos de siniestros con mas ocurrencias del año 2010'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/6 Tipo_Siniestro_anuales/tipo_siniestro_anual_2010.csv',  
    },
};  

zingchart.render({
  id: 'rep-6-2010',
  data: rep6chart2Config,
  height: 400,
  width: "100%"
  });

//  (2020)// 
let rep6chart3Config = {
  type: "area",
  title: {
  text: 'Los tipos de siniestros con mas ocurrencias del año 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/6 Tipo_Siniestro_anuales/tipo_siniestro_anual_2020.csv',  
    },
};  

zingchart.render({
  id: 'rep-6-2020',
  data: rep6chart3Config,
  height: 400,
  width: "100%"
  });    
//Fin de Reporte 6//

//Reporte 7 (2000-2010-2020)// 
//Calidad de los participantes anuales (2000)// 
let rep7chart1Config = {
  type: "bar",
  title: {
  text: 'El recuento de la calidad de los participantes de las ocurrencias del año 2000'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/7 Calidad_participantes_anuales/calidad_participantes_anual_2000.csv',  
    },
};  

zingchart.render({
  id: 'rep-7-2000',
  data: rep7chart1Config,
  height: 400,
  width: "100%"
  });
//Calidad de los participantes anuales (2010)// 
let rep7chart2Config = {
  type: "bar",
  title: {
  text: 'El recuento de la calidad de los participantes de las ocurrencias del año 2010'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/7 Calidad_participantes_anuales/calidad_participantes_anual_2010.csv',  
    },
};  

zingchart.render({
  id: 'rep-7-2010',
  data: rep7chart2Config,
  height: 400,
  width: "100%"
  });

//Calidad de los participantes anuales (2020)// 
let rep7chart3Config = {
  type: "bar",
  title: {
  text: 'El recuento de la calidad de los participantes de las ocurrencias del año 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/7 Calidad_participantes_anuales/calidad_participantes_anual_2020.csv',  
    },
};  

zingchart.render({
  id: 'rep-7-2020',
  data: rep7chart3Config,
  height: 400,
  width: "100%"
  });    
//Fin de Reporte 7//

//Reporte 8 (2000-2010-2020)// 
//Edades de participantes anuales (2000)// 
let rep8chart1Config = {
  type: "area",
  title: {
  text: 'El recuento de la edad de los participantes de las ocurrencias del año 2000'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/8 Edad_participantes_anuales/edad_participantes_anual_2000.csv',  
    },
};  
zingchart.render({
  id: 'rep-8-2000',
  data: rep8chart1Config,
  height: 400,
  width: "100%"
  });

//Edades de participantes anuales (2010)// 
let rep8chart2Config = {
  type: "area",
  title: {
  text: 'El recuento de la edad de los participantes de las ocurrencias del año 2010'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/8 Edad_participantes_anuales/edad_participantes_anual_2010.csv',  
    },
};  
zingchart.render({
  id: 'rep-8-2010',
  data: rep8chart2Config,
  height: 400,
  width: "100%"
  });

//Edades de participantes anuales (2020)// 
let rep8chart3Config = {
  type: "area",
  title: {
  text: 'El recuento de la edad de los participantes de las ocurrencias del año 2020'
  },
  csv: {
  url: 'assets/HOMOLOGADOS/8 Edad_participantes_anuales/edad_participantes_anual_2020.csv',  
    },
};  
zingchart.render({
  id: 'rep-8-2020',
  data: rep8chart3Config,
  height: 400,
  width: "100%"
  });    
//Fin de Reporte 8//


//grafico 4 !HORAS!!!//

let chart4Config = {
    type: "ring",
    title: {
    text: ''
    },
    csv: {
    url: 'assets/HOMOLOGADOS/tipo_siniestro_anual_2020.csv',   
      },
      plot: {
        borderColor: "#2B313B",
        borderWidth: 5,
        // slice: 90,
        valueBox: {
          placement: 'out',
          text: '%t\n%npv%',
          fontFamily: "Open Sans"
        },
        tooltip: {
          fontSize: '18',
          fontFamily: "Open Sans",
          padding: "5 10",
          text: "%npv%"
        },
        animation: {
          effect: 2,
          method: 5,
          speed: 900,
          sequence: 1,
          delay: 3000
        }
      },
      source: {
        text: 'Jorge Reyes',
        fontColor: "#8e99a9",
        fontFamily: "Open Sans"
      },
      title: {
        fontColor: "#8e99a9",
        
        align: "left",
        offsetX: 10,
        fontFamily: "Open Sans",
        fontSize: 25
      },
      subtitle: {
        offsetX: 10,
        offsetY: 10,
        fontColor: "#8e99a9",
        fontFamily: "Open Sans",
        fontSize: "16",
        text: 'Noviembre 2021',
        align: "left"
      },
      plotarea: {
        margin: "20 0 0 0"
      },
    
    
      
    };

zingchart.render({
    id: 'myChart4',
    data: chart4Config,
    height: 400,
    width: "100%"
    });