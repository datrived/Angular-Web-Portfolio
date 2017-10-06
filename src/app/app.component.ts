import { Component, OnInit, SimpleChanges, OnChanges,  Input } from '@angular/core';
import {Router } from '@angular/router';


//var d3 = require('d3');
//window.d3 = d3;
//require('nvd3');
//import 'd3';
import * as d3 from 'd3';
import 'nvd3';
import * as angular from 'angular';
declare let $scope:any;
import "jquery";
//declare let varN: number;
//import { NvD3Module } from './ng2-nvd3.module';
//import {selection, select} from "d3-selection";
//import * as d3Multi from "d3-selection-multi";
//import $ = require("jquery");


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs: ['showComp']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
  options;
  data;
  public radius: number = 7;
  public alpha: number =1 ;
  public theta: number = 1;
  public gravity: number =0.06 ;
  public linkDistance: number =30 ;
  public linkStrength: number =0 ;
  public friction: number =0.9 ;
  public fontSize: number = 10;
  public height: number = 600;
  public fontStr: string= '10px';
  public showTooltip: boolean = true;
  
  changeDistance(val: string){
    this.linkDistance = Number(val);
    this.draw();
  }

  changeTooltip(val: string){
    if(this.showTooltip == true){
      this.showTooltip = false;
    }else{
      this.showTooltip = true;
    }
    this.draw();
  }
  changeHeight(val: string){
    this.height = Number(val);
    this.draw();
  }

  changeFont(val: string){
    this.fontSize= Number(val);
    this.fontStr = val + 'px';
    this.draw();
  }

  changeFriction(val: string){
    this.friction = Number(val);
    this.draw();
  }

  changeStrength(val: string){
    this.linkStrength = Number(val);
    this.draw();
  }


  changeAlpha(val: string){
    this.alpha = Number(val);
    this.draw();
  }
  changeTheta(val: string){
    this.theta = Number(val);
    this.draw();
  }
  
  
  changeRadius(val:string){
        this.radius = Number(val);
        //console.log(this.radius);
        this.draw();
  }
  changeGravity(val:string){
        this.gravity = Number(val);
        //console.log(this.radius);
        this.draw();
  }

 ngOnInit(){
    this.draw(); 
  }
  ngOnChanges(changes: SimpleChanges) {
    this.draw();
    
  }
  

  public draw(){
    var color = d3.scale.category20();
    this.options = {
            chart: {
                type: 'forceDirectedGraph',
                height: this.height, //1
                width: (function(){ 
                  if(nv.utils.windowSize().width < 500){

                    return nv.utils.windowSize().width *1.62;
                  }
                  else if(nv.utils.windowSize().width < 600){
                    return nv.utils.windowSize().width *1.42;
                  }
                  else if(nv.utils.windowSize().width < 700){
                    return nv.utils.windowSize().width + 50;
                  }
                  else if(nv.utils.windowSize().width < 800){
                    return nv.utils.windowSize().width  + 30;
                  }
                  else if(nv.utils.windowSize().width < 900){
                    return nv.utils.windowSize().width  + 20;
                  }
                  else if(nv.utils.windowSize().width < 1000){
                    return nv.utils.windowSize().width  + 10;
                  }
                  else if(nv.utils.windowSize().width < 1100){
                    return nv.utils.windowSize().width  -400;
                  }
                  else if(nv.utils.windowSize().width < 1200){
                    return nv.utils.windowSize().width  -500;
                  }
                  else{
                  return nv.utils.windowSize().width * 0.5}})(),
                margin:{top: 20, right: 120, bottom: 20, left: 0},
                color: function(d){
                    return color(d.group)
                },
                nodeExtras: function(node) {
                    node && node
                      .append("text")
                      .attr("dx", 8)
                      .attr("dy", ".35em")
                      .text(function(d) { return d.name })
                      .style('font-size', '15px'); //2 Text Size
                },
                tooltip: {
                      duration: 100,
                      gravity: "w",
                      distance: 25,
                      snapDistance: 0,
                      classes: null,
                      chartContainer: null,
                      enabled: this.showTooltip,
                      hideDelay: 200,
                      headerEnabled: true,
                      fixedTop: null,
                      hidden: true,
                      data: null,
                      id: "nvtooltip-28695"
                },
                linkStrength: this.linkStrength, //3
                friction: this.friction, // 4  -2 to 1
                linkDist: this.linkDistance, //5   0 to 100
                charge: -120,
                gravity: this.gravity, //6  0 to 1
                theta: this.theta, //7  -5 to 5
                alpha: this.alpha, //8
                radius: this.radius, //9  0 to 10
                noData: null,
                
            }
        },

        this.data = {
            "nodes":[
                {"name":"Java","group":1},
                {"name":"Python","group":1},
                {"name":"C++","group":1},
                {"name":"C","group":1},
                {"name":"SQL","group":1},
                {"name":"Android","group":2},
                {"name":"MySQL","group":2},
                {"name":"MongoDB","group":3},
                {"name":"Oracle","group":2},
                {"name":"HTML5","group":3},
                {"name":"CSS3","group":3},
                {"name":"Bootstrap","group":3},
                {"name":"JavaScript","group":3},
                {"name":"jquery","group":3},
                {"name":"AJAX","group":3},
                {"name":"Rest-API","group":3},
                {"name":"Django","group":3},
                {"name":"PHP","group":3},
                {"name":"D3.js","group":3},
                {"name":"Angular.js","group":3},
                {"name":"Node.js","group":3},
                {"name":"Hadoop","group":4},
                {"name":"Eclipse","group":4},
                {"name":"Cloud-Computing","group":4},
                {"name":"Apache-Tomcat","group":4},
                {"name":"Linux","group":4},
                {"name":"SDLC","group":5},
                {"name":"OOD","group":5},
                {"name":"OOA","group":5},
                {"name":"Agile","group":5},
                {"name":"Scrum","group":5},
                {"name":"Requirement","group":5},
                {"name":"Management","group":5},
                {"name":"Reverse","group":5},
                
            ],
            "links":[
                {"source":1,"target":0,"value":1},
                {"source":2,"target":0,"value":8},
                {"source":3,"target":0,"value":10},
                {"source":3,"target":2,"value":6},
                {"source":4,"target":0,"value":1},
                {"source":5,"target":0,"value":1},
                {"source":6,"target":0,"value":1},
                {"source":7,"target":0,"value":1},
                {"source":8,"target":0,"value":2},
                {"source":9,"target":0,"value":1},
                {"source":10,"target":10,"value":1},
                {"source":11,"target":3,"value":3},
                {"source":11,"target":2,"value":3},
                {"source":11,"target":0,"value":5},
                {"source":12,"target":0,"value":5},
                {"source":12,"target":1,"value":1},
                {"source":13,"target":11,"value":1},
                {"source":13,"target":0,"value":5},
                {"source":14,"target":5,"value":1},
                {"source":15,"target":11,"value":1},
                {"source":16,"target":11,"value":1},
                {"source":17,"target":16,"value":4},
                {"source":18,"target":16,"value":4},
                {"source":18,"target":7,"value":4},
                {"source":19,"target":16,"value":4},
                {"source":19,"target":17,"value":4},
                {"source":19,"target":18,"value":4},
                {"source":20,"target":16,"value":3},
                {"source":20,"target":17,"value":3},
                {"source":20,"target":18,"value":3},
                {"source":20,"target":9,"value":4},
                {"source":21,"target":12,"value":3},
                {"source":21,"target":17,"value":3},
                {"source":21,"target":18,"value":3},
                {"source":21,"target":13,"value":3},
                {"source":21,"target":20,"value":5},
                {"source":22,"target":16,"value":3},
                {"source":22,"target":17,"value":3},
                {"source":22,"target":8,"value":3},
                {"source":22,"target":19,"value":3},
                {"source":22,"target":20,"value":4},
                {"source":22,"target":21,"value":4},
                {"source":23,"target":15,"value":3},
                {"source":23,"target":17,"value":3},
                {"source":23,"target":18,"value":3},
                {"source":23,"target":19,"value":3},
                {"source":23,"target":20,"value":4},
                {"source":23,"target":21,"value":4},
                {"source":23,"target":6,"value":4},
                {"source":23,"target":22,"value":2},
                {"source":24,"target":23,"value":2},
                {"source":25,"target":23,"value":1},
                {"source":26,"target":24,"value":4},
                {"source":26,"target":14,"value":1},
                {"source":26,"target":25,"value":1},
                {"source":27,"target":23,"value":5},
                {"source":27,"target":25,"value":5},
                {"source":27,"target":24,"value":1},
                {"source":27,"target":26,"value":1},
                {"source":28,"target":27,"value":1},
                {"source":29,"target":23,"value":1},
                {"source":29,"target":27,"value":1},
                {"source":29,"target":24,"value":2},
                {"source":30,"target":23,"value":1},
                {"source":31,"target":30,"value":2},
                {"source":31,"target":11,"value":3},
                {"source":31,"target":23,"value":2},
                {"source":31,"target":27,"value":1},
                {"source":32,"target":31,"value":1},
                {"source":33,"target":11,"value":2},
                {"source":33,"target":32,"value":1},
                {"source":33,"target":33,"value":1},
                
            ]
        }
    }


  
}

