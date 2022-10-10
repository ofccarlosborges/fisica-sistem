var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Constraint = Matter.Constraint,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
    world = engine.world;

const W = 800;
const H = 600;

// create renderer
var render = Render.create({
    element: document.getElementById("scheme"),
    engine: engine,
    options: {
        width: W,
        height: H,
        showVelocity: true
    }
});
Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

const pendulum = Bodies.circle(100, 400, 50, { frictionAir: 0.001 });
World.add(world, [pendulum]);

World.add(
    world,
    Constraint.create({
        pointA: { x: W / 2, y: 0 },
        bodyB: pendulum,
        stiffness: 0.9,
        render: {
            strokeStyle: "#4a485b"
        }
    })
);

// add mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.5,
        render: {
            visible: false
        }
    }
});

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: W, y: H }
});

var ctx = document.getElementById("chart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Speed",
                data: [],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1
            },
            {
                label: "Angle",
                data: [],
                borderColor: ["rgba(132, 99, 255, 1)"],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
});

function pushPendulum() {
    Body.applyForce(pendulum, pendulum.position, { x: -0.5, y: 0 });
}

function updateChart() {
    const now = new Date();
    const t = now - start;

    // x = r * cos(angle)
    // Move x so that the center is the center of the screen
    // Probably should be done with the constraint point and length
    const r = W / 2;
    const x = pendulum.position.x - W / 2;
    const angle = Math.acos(x / r);

    myChart.data.labels.push(t);
    myChart.data.datasets[0].data.push(pendulum.speed);
    myChart.data.datasets[1].data.push(angle);

    if (myChart.data.labels.length > 500) {
        myChart.data.labels.shift();
        myChart.data.datasets[0].data.shift();
        myChart.data.datasets[1].data.shift();
    }

    myChart.update();
}

const start = new Date();
setInterval(updateChart, 100);
