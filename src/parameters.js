export default {
		dt:0.1,
		N:50,
		epsilon:0.01, // initial noise
   	 	inner_radius: {
			range:[1,5],
			default:3.5
		},
		outer_radius: {
			range:[5.5,10],
			default:7.0
		},
		interaction_steepness:{
			range : [5,20],
			default : 15
		}
}

