import {initialize as model_init, update as model_update, go as model_go} from "./model.js"
import {initialize as visual_init, update as visual_update, go as visual_go, cartoon_update} from "./viz.js"

function iterate (display,config) {
	model_go();
	visual_go(display,config);
};

function initialize (display,config) {	
	model_init();
	visual_init(display,config); 
};

function update () {
	model_update();
//	visual_update(display);
}

export {iterate,initialize,update,cartoon_update}