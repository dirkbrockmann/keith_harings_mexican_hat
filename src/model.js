
import param from "./parameters.js"
import {each,range,map,mean,sumBy} from "lodash-es"
import {torusdist} from "./utils"
import  {square as sqlat} from "lattices"
import {sigmoid} from "./utils.js"

const N = param.N;
const dt = param.dt;
const s = sqlat(N).boundary("periodic").scale(2*N);
const others_inradius = (a,others,R) => others.filter(b=> (torusdist(a,b,2*N) < R) )

var agents = [];
agents = s.nodes;
each(agents,a=>{
	a.nn_max_outer=others_inradius(a,agents,param.outer_radius.widget.range()[1])
})

	

const set_neighborhoods = (agents) => {
	each(agents,a=>{ 
		a.nn_outer = others_inradius(a,a.nn_max_outer,param.outer_radius.widget.value()) 
		a.nn_inner = others_inradius(a,a.nn_outer,param.inner_radius.widget.value()) 		
	})	
}

const initialize = () => {

	param.timer={}; param.tick=0;

	

	
	agents.forEach(a=>{a.state= 2 * param.epsilon * (Math.random()-0.5)});
	
	
	
	set_neighborhoods(agents);
	
};

const go  = () => {
	
	param.tick++;
	
	const beta = param.interaction_steepness.widget.value();
	
	each(agents,a=>{		
		var h = 2*sumBy(a.nn_inner,x=>x.state) - sumBy(a.nn_outer,x=>x.state);
		h=h / a.nn_outer.length;
		a.sigma = sigmoid(h,beta);			
	})
	
	each(agents,a=>{
		a.state  += param.dt*(a.sigma-a.state)
	})
	
}

const update = () => {
	set_neighborhoods(agents);
}

export {agents,initialize,go,update}
