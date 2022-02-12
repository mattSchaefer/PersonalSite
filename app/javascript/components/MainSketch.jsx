import React from 'react';
import P5 from 'p5';

export default class MainSketch extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }
    Sketch = (sketch) => {
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //~~~~~~~~When I was but a youngling, I was always so amazed by the window's "Pipe" screensaver- surely you know the one.  Anyway, I've made my own version using P5.js
        //~~~~~~~~An enhanced version of https://editor.p5js.org/knectar/sketches/jQAwzJdr which randomly draws lines on a 2D plane. 
        //~~~~~~~~I used the linked sketch to build an understanding for drawing/animating lines using p5 and I altered the algorithm to work for a 3D plane, to only generate 
        //~~~~~~~~pseudo-randomly perpendicular lines, and to "shift" away the oldest lines after a threshhold. 
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        var canvas;
        var point_array = [];
        var tempX;
        var tempY;
        var tempZ;
        var speed = 75; 
        var ready = false; 
        var pipe_color = "";
        sketch.setup = () => {
            sketch.createCanvas(750, 750, sketch.WEBGL);
            sketch.background(256);
            sketch.camera(-350,-550,-350)
            sketch.noFill(0);
            sketch.stroke(250, 50, 100, 205);
            sketch.strokeWeight(5);
            point_array.push(new Point3D(sketch.random(750), sketch.random(750), sketch.random(750)));
        }
        sketch.draw = () => {
            sketch.background(256);
            for(var i=0; i<point_array.length; i++){
                point_array[i].showPoints();
            }
            point_array[point_array.length - 1].animateVector();
            for(var i = 0; i < point_array.length; i++){
                point_array[i].showVector();
            }
            if(ready){
                ready = false; 
                let prev = point_array[point_array.length-1];
                if(point_array.length > 30)
                    point_array.shift();
                point_array.push(new Point3D(prev.end.x, prev.end.y, prev.end.z));
            }
        }
        class Point3D{
            constructor(x,y,z){
                this.start = sketch.createVector(x,y,z);
                var ran = Math.ceil(sketch.random(3));
                if(ran == 1){
                    this.end = sketch.createVector(x, y, sketch.random(750));
                }
                else if(ran == 2){
                    this.end = sketch.createVector(sketch.random(750), y, z);
                }
                else if(ran == 3){
                    this.end = sketch.createVector(x, sketch.random(750), z);
                }
                this.current = this.end;
                this.angle = 0.0;
            }
            showPoints(){
                sketch.push();
                sketch.stroke(20, 130, this.end.z-30);
                sketch.strokeWeight(10)
                sketch.point(this.start.x, this.start.y,this.start.z);
                sketch.point(this.end.x, this.end.y, this.end.z);
                sketch.pop();
            }
            animateVector(){
                sketch.stroke(20, 130, this.end.z-30);
                sketch.strokeWeight(20);
                tempX = sketch.map(this.angle, 20, 750, this.start.x, this.end.x, 1);
                tempY = sketch.map(this.angle, 20, 750, this.start.y, this.end.y, 1);
                tempZ = sketch.map(this.angle, 20, 100, this.start.z, this.end.z, 1);
                this.current = sketch.createVector(tempX, tempY, tempZ);
                if(tempX == this.end.x && tempY == this.end.y && tempZ == this.end.z){
                    ready = true; 
                }
                sketch.strokeWeight(20)
                this.angle += speed;
            }
            showVector(){
                sketch.stroke(20, 130, this.end.z-30);
                sketch.strokeWeight(20);
                sketch.line(this.start.x, this.start.y, this.start.z, this.end.x, this.end.y, this.end.z);
            }
        }
    }
    componentDidMount() {
        this.myP5 = new P5(this.Sketch, this.myRef.current)
    }
    render(){
        return(
            <div>
                <div ref={this.myRef}>
                </div>
            </div>
        )
    }
}