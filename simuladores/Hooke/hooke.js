var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

    var engine = Engine.create(),
    world = engine.world;

    // create a renderer
    var render = Render.create({
        element: document.getElementById("plano"),
        engine: engine

    });

// run the renderer
    Render.run(render);

// create runner
    var runner = Runner.create();

// run the engine
    Runner.run(runner, engine);

    // create two boxes and a ground
const boxA = Bodies.rectangle(100, 200, 80, 80,{frictionAir: 0}, {inertia: Infinity});

var ground = Bodies.rectangle(400, 600, 810, 60, { isStatic: true }, {frictionAir: 0});

var mola = Constraint.create({
    pointA: { x: -100, y: 530 },
    bodyB: boxA,
    pointB: { x: 0, y: 0 },
    stiffness: 0.007,
    render: {
        strokeStyle: "#4a485b"
    },
    frictionAir: 0,
    inertia: Infinity
})


// add all of the bodies to the world
Composite.add(engine.world, [boxA, ground, mola]);

var mouse = Mouse.create(render.canvas),
    mouseConstraint = Matter.MouseConstraint.create(engine,{
        mouse: mouse,
        constraint:{
            stiffness: 1,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

render.mouse = mouse;

/*
Render.lookAt(render, {
    min: {x: 0, y: 50},
    max: {x: 800, y: 600}
});*/