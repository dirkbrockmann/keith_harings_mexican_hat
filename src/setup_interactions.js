import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update,cartoon_update} from "./simulation.js"


var timer = {}

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(()=>startstop(display,config))
	ct.setup.update(()=>initialize(display,config))
	//param.inner_radius.widget.update_end(update)
	param.outer_radius.widget.update_end(update)

	param.inner_radius.widget.update(cartoon_update)
	param.outer_radius.widget.update(cartoon_update)
	
}

