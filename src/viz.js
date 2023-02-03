import * as d3 from "d3"
import colors from "./colormaps.js"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"
import {cartoon} from "./controls.js"

const paint = colors[cfg.simulation.colormap];

const N = param.N;
const ds = 1.0/(2*N+1);

const X = d3.scaleLinear().domain([-N,N]);
const Y = d3.scaleLinear().domain([-N,N]);
const S = d3.scaleLinear().domain([-1,1]).range([0,1]);

var ctx,dL,W,H;


const update = (display) => {
	
	display.selectAll(".node")
		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}

const cartoon_update = () => {
	cartoon.selectAll("#outercircle")
		.attr("r",d=> cfg.widgets.cartoon_scale*d.widget.value())
	
	cartoon.selectAll("#innercircle")
		.attr("r",d=> cfg.widgets.cartoon_scale*d.widget.value())
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');
	
	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		

	agents.forEach(d=>{
		const c = d.cell();
		ctx.fillStyle=paint(S(d.state));
		ctx.fillRect(X(c[2].x), Y(c[2].y), (X(c[0].x)-X(c[2].x)), (Y(c[0].y)-Y(c[2].y)));
	})
	
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);
	
};

const go = (display,config) => {
	
	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		

	agents.forEach(d=>{
		const c = d.cell();
		ctx.fillStyle=paint(S(d.state));
		ctx.fillRect(X(c[2].x), Y(c[2].y), (X(c[0].x)-X(c[2].x)), (Y(c[0].y)-Y(c[2].y)));
	})
	
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);
	
}


export {initialize,go,update,cartoon_update}
