// Disclaimer: This code is ugly and was just written so it works :)

/******************
 * KOCH ANIMATION *
 ******************/
function koch_slide() {
    const canvas = document.getElementById("koch");
    const ctr = document.getElementById("iterationCtr");
    const flaecheErg = document.getElementById("flaecheErg");
    const ctx = canvas.getContext("2d");

    // Constants...
    const backgroundColor = "#191919";
    const previousLineColor = backgroundColor;
    // const previousLineColor = "white"; // Also looks okay
    const previousLineWidth = 3;
    const lineColor = "white";
    const lineWidth = 2;

    let triangleCount;
    let dispatcherCount = 0;
    let additionString = "";
    let showAddition = false;
    let areaInterval;

    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    ctx.translate(cx, cy);

    ctx.fillStyle = backgroundColor;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    koch([-cx, 100], [cx, 100], -1);

    window.onkeyup = (event) => {
        switch (event.key) {
            case "0":
                additionString = "\\[ 0  ";
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                triangleCount = 0;
                dispatcherCount = parseInt(event.key);
                ctx.fillRect(-cx, -cy, 2 * cx, 2 * cy);
                koch([-cx, 100], [cx, 100], Number(event.key) - 1);
                if (showAddition && event.key != "0") {
                    additionString = additionString.slice(0, -2);
                    if (event.key == "1") additionString += " + (1) \\]";
                    else additionString += `+ 4^{${event.key}} \\cdot \\frac{1}{9^${event.key}} \\]`;
                    ctr.innerText = additionString;
                    console.log(additionString);
                    MathJax.typeset();
                    flaecheErg.innerText = area(parseInt(event.key));
                } else if (event.key != "0") {
                    ctr.innerText = "Generation: " + event.key + " - Dreiecke: " + triangleCount;
                }

                break;
            case "a":
                ctr.innerText = "";
                additionString = "";
                showAddition = !showAddition;
                break;
            case "z":
                let i = 0;
                areaInterval = setInterval(() => {
                    flaecheErg.innerText = area(i);
                    i++;
                }, 500);
                break;
            case "q":
                clearInterval(areaInterval);
                break;
            case "[":
                if (dispatcherCount >= 1) dispatcherCount--;
                window.dispatchEvent(new KeyboardEvent("keyup", { key: dispatcherCount + "" }));
                break;
            case "]":
                if (dispatcherCount <= 9) dispatcherCount++;
                window.dispatchEvent(new KeyboardEvent("keyup", { key: dispatcherCount + "" }));
                break;
        }
    };

    function perimeter(generation) {
        // Or just 4^n, but I like recursion :D
        if (generation == 0) return 1;
        return perimeter(generation - 1) * 4;
    }

    function area(generation) {
        let res = 0;
        for (let i = 0; i < generation; i++) {
            res += Math.pow(4 / 9, i);
        }
        return res;
    }

    // Recursion!
    function koch(start, end, iteration) {
        if (iteration == -1) {
            ctx.beginPath();
            ctx.moveTo(start[0], start[1]);
            ctx.lineTo(end[0], end[1]);
            ctx.closePath();
            ctx.stroke();
            return;
        }
        triangleCount++;

        const x1 = (end[0] - start[0]) / 3 + start[0];
        const y1 = (end[1] - start[1]) / 3 + start[1];
        const x2 = ((end[0] - start[0]) * 2) / 3 + start[0];
        const y2 = ((end[1] - start[1]) * 2) / 3 + start[1];
        const x3 = (x1 + x2 + Math.sqrt(3) * (-y1 + y2)) / 2;
        const y3 = (y1 + y2 + Math.sqrt(3) * (x1 - x2)) / 2;

        ctx.beginPath();

        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(x1, y1);
        ctx.moveTo(x2, y2);
        ctx.lineTo(end[0], end[1]);

        ctx.moveTo(x1, y1);
        ctx.lineTo(x3, y3);
        ctx.moveTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();

        // Clear previous lines
        ctx.strokeStyle = previousLineColor;
        ctx.lineWidth = previousLineWidth;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;

        if (iteration > 0) {
            koch([start[0], start[1]], [x1, y1], iteration - 1);
            koch([x1, y1], [x3, y3], iteration - 1);
            koch([x3, y3], [x2, y2], iteration - 1);
            koch([x2, y2], [end[0], end[1]], iteration - 1);
        }
    }
}

/***********
 * DREIECK *
 ***********/
function triangle_slide() {
    const HEIGHT = window.innerHeight / 3;

    const backgroundColor = "#191919";
    const lineColor = "white";
    const canvas = document.getElementById("dreieck");
    const ctx = canvas.getContext("2d");
    const h = HEIGHT * (Math.sqrt(3) / 2);

    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.8;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2 - HEIGHT;
    //ctx.translate(cx, cy);
    ctx.fillStyle = lineColor;
    ctx.lineWidth = 5;
    ctx.strokeStyle = lineColor;

    window.onkeyup = (event) => {
        switch (event.key) {
            case "0": {
                const path = new Path2D();
                path.moveTo(cx, cy);
                path.lineTo(cx + HEIGHT / 2, cy + h);
                path.lineTo(cx - HEIGHT / 2, cy + h);
                path.lineTo(cx, cy);
                ctx.stroke(path);

                break;
            }
            case "1": {
                const path = new Path2D();
                path.lineTo(cx + HEIGHT / 6, cy + h / 3);
                path.lineTo(cx - HEIGHT / 6, cy + h / 3);
                path.lineTo(cx, cy);
                ctx.stroke(path);

                break;
            }
            case "2": {
                ctx.font = "100px sans-serif";
                ctx.fillText("9", cx - 25, cy + h / 2 + h / 4);
            }
        }
    };
}

// Some revealjs thingies
// This some real hacky shit yo
Reveal.addEventListener("fragmentshown", (event) => {
    switch (event.fragment.getAttribute("data-action")) {
        case "nebenrechnung":
            Reveal.slide(5, 1, 0);
            break;
        case "umfang-back":
            Reveal.slide(5, 0, 2);
            break;
        case "gooo":
            Reveal.slide(6, 0, 0);
            break;
        default:
    }
});

Reveal.addEventListener("slidechanged", (event) => {
    if ((event.indexh = 3 && event.indexv == 2)) koch_slide();
    else if ((event.indexh = 1 && event.indexv == 0)) triangle_slide();
});

Reveal.initialize({
    controls: false,
    hash: true,
    dependencies: [
        { src: "plugin/markdown/marked.js" },
        { src: "plugin/markdown/markdown.js" },
        { src: "plugin/highlight/highlight.js" },
        { src: "plugin/math/math.js", async: true },
        { src: "plugin/notes/notes.js", async: true },
        { src: "plugin/mouse-pointer/mouse-pointer.js", async: true },
    ],
    math: {
        mathjax: "./node_modules/mathjax/es5/tex-svg-full.js",
        // pass other options into `MathJax.Hub.Config()`
    },
});
