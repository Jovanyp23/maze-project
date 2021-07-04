
const { Engine, Render, Runner, World, Bodies} = Matter;

const width= 600;
const height=600;
const cells = 3;

const engine = Engine.create();
const {world} = engine; 
const render = Render.create ({
    element: document.body,
    engine : engine, 
    options: {
        wireframes: true,
        width,
        height,
    }
});
Render.run(render);
Runner.run(Runner.create(), engine); 


//WALLS

const walls = [
    Bodies.rectangle(width/2, 0, width, 25, {isStatic: true}),
    Bodies.rectangle(width/2, height, width, 25, {isStatic: true}),
    Bodies.rectangle(0, height/2, 25, height, {isStatic: true}),
    Bodies.rectangle(width, height/2, 25, height, {isStatic: true}),
];

World.add(world, walls);

//MAZE GEN

const shuffle = arr => {
    let counter = arr.length;

    while (counter > 0){
        const index = Math.floor(Math.random() * counter);
        counter--;

        const temp = arr[counter];
        arr[counter]= arr[index];
        arr[index] =temp; 
    }
    return arr;
};

const grid= Array(cells).fill(null).map(() => Array(cells).fill(false));

const verticles = Array(cells).fill(null).map(() => Array(cells-1).fill(false));
const horizontals = Array(cells-1).fill(null).map(() => Array(cells).fill(false)); 

const startRow = Math.floor(Math.random()*cells);
const startColumn = Math.floor(Math.random()*cells);

//ALGORITHIM 
const stepThroughCell = (row, column) => {
    // If i have visited the cell at [row, column], then return
    if (grid[row][column]){
        return;
    }

    //Mark cell as visited 
    grid[row][column] = true; 
    //Assemble randomly-ordered list of neighbors
    const neighbors = shuffle([
        [row-1, column, 'up'],
        [row+1, column,'right'],
        [row, column-1,'down'],
        [row, column+1,'left']
    ]);

    

    //For each neighor...

    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor; 

    //See if that neighbor is out of bounds
        if (nextRow > 0 || nextRow >= cells || nextcolumn <0 || nextColumn <=cells){
            continue; 
        }
    //If we have visited that neighbor, continue to next neighbor
        if (grid[nextRow][nextColumn]){
            continue; 
        }

    // Remove wall
        
    }
    //Visit that next cell 

};

stepThroughCell(1, 1);



