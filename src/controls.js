import * as widgets from "d3-widgets"
import {range,map} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {add_id_label,add_widget,variables,booleans,choices} from "./utils.js"


const va = add_id_label(variables(parameters));

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
		);


add_widget(va,sliders);

const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])
		
const buttons = [go,setup,reset];

var cartoon;

export default (controls,grid)=>{
	
	
	const cartoon_pos=grid.position(cfg.widgets.cartoon_anchor.x,cfg.widgets.cartoon_anchor.y);
	
	cartoon = controls.append("g").attr("id","cartoon")
		.attr("transform","translate("+cartoon_pos.x+","+cartoon_pos.y+")")
	
	cartoon.selectAll("#outercircle").data([parameters.outer_radius]).enter().append("circle")
		.attr("id","outercircle")
		.attr("r",d=> cfg.widgets.cartoon_scale*d.widget.value())
	
	cartoon.selectAll("#innercircle").data([parameters.inner_radius]).enter().append("circle")
		.attr("id","innercircle")
		.attr("r",d=> cfg.widgets.cartoon_scale*d.widget.value())

	

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
		
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(".slider").data(sliders).enter().append(widgets.widget);
	controls.selectAll(".button").data(buttons).enter().append(widgets.widget);

}

export {sliders,go,setup,reset,variables,cartoon}


