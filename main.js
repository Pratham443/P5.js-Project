function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position = (110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = " ";
}

function draw() {
    image(video, 200, 200, 320, 240);
    tint(tint_color);

    fill(255, 0, 0)
    stroke(0, 255, 0);
    circle(200, 210, 50);
    circle(200, 430, 50);
    circle(530, 210, 50);
    circle(530, 430, 50);

    fill(0, 255, 0);
    stroke(255, 0, 0);
    rect(190, 200, 340, 20);
    rect(190, 420, 340, 20);
    rect(190, 200, 20, 240);
    rect(520, 200, 20, 240);
}

function apply() {
    tint_color = document.getElementById("tint").value;
}

function reset() {
    tint_color = " ";
    document.getElementById("tint").value = "";
}

function save() {
    save("student_name.png");
}