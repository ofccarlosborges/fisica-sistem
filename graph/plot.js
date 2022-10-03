function graf(){

    var dados; //valores do textarea
var valores = []; //valores sem quebra de linha
dados = document.querySelector("#dados").value.split("\n");
var dados2; //valores do textarea
var valores2 = []; //valores sem quebra de linha
dados2 = document.querySelector("#dados2").value.split("\n");

plots = document.getElementById("plots");

    for (var i = 0; i < dados.length; i++){
        if (dados[i].length > 0) {
    
         valores[i] = parseInt(dados[i]);
         
        }
    }

    for (var j = 0; j < dados2.length; j++){
        if (dados[j].length > 0) {
    
         valores2[j] = parseInt(dados2[j]);
         
        }
    }


var ctx = document.getElementById("myChart");

var data = {
	labels: valores,
    datasets: [
    {
        label: "f(x) = x²",
        function: function(x) { 
            return x*x 
        },
        borderColor: "rgba(153, 102, 255, 1)",
        data: valores2,
        fill: false
    }]
};

/*
Chart.pluginService.register({
    beforeInit: function(chart) {
        var data = chart.config.data;
        for (var i = 0; i < data.datasets.length; i++) {
            for (var j = 0; j < data.labels.length; j++) {
            	var fct = data.datasets[i].function,
                	x = data.labels[j],
                	y = fct(x);
                data.datasets[i].data.push(y);
            }
        }
    }
});*/

/*
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});*/


// Create an instance of Chart object:
new Chart(plots, {
    type: 'line', //Declare the chart type 
    data: {
    labels: valores2, //X-axis data 
    datasets: [{
    data: valores, //Y-axis data
        
backgroundColor: '#e9e9e9',
borderColor: 'black',
fill: false, //Fills the curve under the line with the babckground color. It's true by default 
 }]
 },
});
}

await Excel.run(async (context) => {
    let sheet = context.workbook.worksheets.getItem("Sample");
    let dataRange = sheet.getRange("A1:B13");
    let chart = sheet.charts.add(
      Excel.ChartType.line, 
      dataRange, 
      Excel.ChartSeriesBy.auto);

    chart.title.text = "Sales Data";
    chart.legend.position = Excel.ChartLegendPosition.right;
    chart.legend.format.fill.setSolidColor("white");
    chart.dataLabels.format.font.size = 15;
    chart.dataLabels.format.font.color = "black";

    await context.sync();
});


    function graph_excel(){
        


    }