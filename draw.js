let draw = (function drawModule() {
    function drawZollnerEffect() {
        let canvas = document.getElementById("zollner");
        let context = canvas.getContext("2d");
        let iterationControl = 1;

        context.beginPath();
        context.lineWidth = 3;

        const initialX = 0;
        const initialY = 50;
        const height = 600;
        const width = 350;

        for (let i = -300; i < 300; i += 50) {
            context.moveTo(initialX, initialY + i);
            context.lineTo(height, width + i);

            let isModuloOfTwo = iterationControl % 2 === 0;
            let iterations = isModuloOfTwo ? 0 : -150;

            for (let j = i, k = iterations; j < 300; j += 10, k += 20) {
                let x = isModuloOfTwo ? 10 + k : 40 + k;
                let y = isModuloOfTwo ? 40 + j : 10 + j;
                let lineHeight = isModuloOfTwo ? 10 + k : 100 + k;
                let lineWidth = isModuloOfTwo ? 70 + j : 10 + j;

                context.moveTo(x, y);
                context.lineTo(lineHeight, lineWidth);
            }

            iterationControl++;
        }

        context.stroke();
        context.closePath();
    }

    function drawCafeWallEffect() {
        let canvas = document.getElementById("cafeWall");
        let context = canvas.getContext("2d");
        let iterationControl = 1;

        const rectWidth = 20;
        const rectHeight = 20;
        const x = 0;
        const lineHeight = 300;

        context.beginPath();

        for (let j = 0; j < 300; j += 40) {
            for (let k = 0; k < 300; k += 20) {
                let y = 20 + k;
                let lineWidth = 20 + k;
                let rectX = 5 + j;
                let rectY = 0 + k;
                let isModuloOfThree = iterationControl % 3 === 0;
                let isModuloOfTwo = iterationControl % 2 === 0;

                context.moveTo(x, y);
                context.lineTo(lineHeight, lineWidth);

                if (isModuloOfThree) {
                    rectX += 10;
                    iterationControl = 1;
                } else if (isModuloOfTwo) {
                    rectX += 5;
                }

                context.fillRect(rectX, rectY, rectWidth, rectHeight);

                iterationControl++;
            }

            iterationControl = 1;
        }

        context.stroke();
        context.closePath();
    }

    const API = {
        zollnerEffect : drawZollnerEffect,
        cafeWallEffect : drawCafeWallEffect
    };
    return API;
})();