export default {
		dt:0.1,
		N:35,
		epsilon:0.005, // initial noise
   	 	inner_radius: {
			range:[0.6,3],
			default:1.5
		},
		outer_radius: {
			range:[3.5,7],
			default:4.0
		},
		interaction_steepness:{
			range : [2,15],
			default : 8
		}
}

