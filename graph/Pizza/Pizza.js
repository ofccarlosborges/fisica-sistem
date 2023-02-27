
const linearBtn = document.getElementById('linearBtn');
const polyBtn = document.getElementById('polyBtn');


linearBtn.addEventListener('click', AjusteLinear);
polyBtn.addEventListener('click', AjustePolynomial);


function getData() {
const xValues = document.getElementById('xValues').value.split('\n').map(x => parseFloat(x));
const yValues = document.getElementById('yValues').value.split('\n').map(y => parseFloat(y));
  return [xValues, yValues];
}

function generatePlot() {


const [xValues, yValues] = getData();
  const trace = {
    x: xValues,
    y: yValues,
    mode: 'markers',
    type: 'scatter'
  };


  var config = {
    responsive: true,
    displayModeBar: true,
    displaylogo: false,
    modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d','toggleSpikelines','hoverClosestCartesian', 'hoverCompareCartesian'],
    editable: true,
    modeBarButtonsToAdd: [
      {
        name: 'button1',
        icon: null,
        title: "Meu Botão de Texto",
        click: function(gd) {alert('button1')
      }
    }
    ]
  };

  var layout = {
    title: 'Clique aqui<br>para editar o tiltulo do gráfico',
    xaxis: {title: 'Clique para editar o texto do eixo X'},
    yaxis: {title: 'Clique para editar o texto do eixo Y'},
    plot_bgcolor: 'white'
  };

  Plotly.newPlot('plot',[trace],layout,config);
}

function AjusteLinear() {
const [xValues, yValues] = getData();

const result = regression.linear(xValues.map((x, i) => [x, yValues[i]]));

const xFit = [Math.min(...xValues), Math.max(...xValues)];
const yFit = xFit.map(x => result.predict(x)[1]);

const trace = {
x: xFit,
y: yFit,
name: 'Ajuste Linear',
mode: 'lines',
type: 'scatter',
line: {color: 'red'}
};

const layout = {
xaxis: {title: 'X'},
yaxis: {title: 'Y'}
};

Plotly.addTraces('plot', trace);
document.getElementById('coefficients').innerHTML = `Coeficiente Linear: ${result.equation[0].toFixed(2)}<br>Coeficiente Angular: ${result.equation[1].toFixed(2)}`;

}

function AjustePolynomial() {
const [xValues, yValues] = getData();

const result = regression.polynomial(xValues.map((x, i) => [x, yValues[i]]), {order: 2});

const xFit = [...xValues];
xFit.sort((a, b) => a - b);
const yFit = xFit.map(x => result.predict(x)[1]);

const trace = {
x: xFit,
y: yFit,
name: 'Ajuste Polinomial',
mode: 'lines',
type: 'scatter',
line: {color: 'green'}
};

const layout = {
xaxis: {title: 'X'},
yaxis: {title: 'Y'}
};

Plotly.addTraces('plot', trace);
document.getElementById('coefficients').innerHTML = `Coeficiente Angular: ${result.equation[0].toFixed(2)}<br>Coeficiente Linear: ${result.equation[1].toFixed(2)}<br>Coeficiente Constante: result.equation[2].toFixed(2)`;;
}