        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Composite = Matter.Composite,
            Body = Matter.Body,
            Bodies = Matter.Bodies;
    
        // create engine
        var engine = Engine.create(),
            world = engine.world;
    
        // create renderer
        var render = Render.create({
            element: document.getElementById('plano'),
            engine: engine,
            options: {
                showVelocity: true,
                background: '#B0C4DE',
                wireframes: false,
                width: 1000,
                height: 450
            }
        });

        

       // Composite.canvas.aspect-ratio: auto 950 / 450;

    
        Render.run(render);
    
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);
    
        // Bordas
        Composite.add(world, [
            // Borda Superior
            //Bodies.rectangle(400, 0, 900, 20, { isStatic: true, render: { fillStyle: '#000000' } }),

            // Borda Inferior
            Bodies.rectangle(400, 600, 1500, 10, { isStatic: true, render: { fillStyle: '#000000' } }),

            // Borda Direita
            //Bodies.rectangle(800, 300, 20, 600, { isStatic: true, render: { fillStyle: '#000000' } }),

            // Borda Esquerda
            Bodies.rectangle(-262, 300, 10, 600, { isStatic: true, render: { fillStyle: '#000000' } })
        ]);
        //Fim das bordas


            const caixa = Bodies.rectangle(-210, 379, 60, 60, {isStatic: true, friction: 0, angle: -6, render: { fillStyle: '#800000' }})

        Composite.add(world, [
            Bodies.rectangle(150, 520, 900, 10, { isStatic: true, angle: Math.PI * 0.09, render: { fillStyle: '#000000'}}), caixa]);
        //engine.gravity.scale = 0.0001;

       /* Triangulo
        Composite.add(world, [
            Bodies.polygon(100, 460, 3, 120, {isStatic: true, angle: 45 })
        ]);*/
    
        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
    
        Composite.add(world, mouseConstraint);
    
        // keep the mouse in sync with rendering
        render.mouse = mouse;
    
        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });

        function Iniciar(){
            Body.setStatic(caixa, false);

        }

        function Pausar(){
            Body.setStatic(caixa, true);

        }

        function addAtrito(){
            
            Body.setfriction(caixa, 0.001);
        }

        function reset(){
            Body.setPosition(caixa, { x: -210, y: 379 });
            Body.setAngle(caixa, -6);
            Body.setStatic(caixa, true);
        }