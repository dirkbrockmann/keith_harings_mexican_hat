import * as d3 from "d3"
import {map, replace, capitalize, each, has, isBoolean, pickBy, toPairs } from "lodash-es"

const add_id_label = (x) => map(toPairs(x), d => {d[1]["id"]=d[0]; d[1]["label"]=replace(capitalize(d[0]),/_/g," "); return d[1]} );

const add_widget = (p,w) => each(p,(v,i) => v["widget"]=w[i]);	

const variables = (p) => pickBy(p, v =>  has(v, "range"))  
const booleans = (p) => pickBy(p, v =>  isBoolean(v.default))  
const choices = (p) => pickBy(p, v =>  has(v, "choices"))  

const deg2rad = d3.scaleLinear().domain([0,360]).range([0,2*Math.PI]);
const rad2deg = d3.scaleLinear().range([0,360]).domain([0,2*Math.PI]);

const torusdist = (a,b,L) => {
	var dx = Math.abs(a.x-b.x);
	var dy = Math.abs(a.y-b.y);
	if (dx > L / 2) {dx = L - dx}
	if (dy > L / 2) {dy = L - dy}
	return Math.sqrt(dx**2+dy**2)
}

const sigmoid = (x,beta) => {
	var z = Math.exp(-beta*x);
	return (1-z)/(1+z);
} 

export {add_id_label,add_widget,variables,booleans,choices,deg2rad,rad2deg,torusdist,sigmoid}