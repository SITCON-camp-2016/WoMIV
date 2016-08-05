function colorFunc(var pop){
	
	if(pop <= 50000) {
		return "#A20055";
	} 
	else if(pop <= 10000000) {
		return "#CC0000";
	} 
	else if(pop <= 50000000) {
		return "#FF5511";
	} 
	else if(pop <= 100000000) {
		return "#FFAA33";
	} 
	else if(pop <= 2000000000) {
		return "#FFDD55";
	} 
	else{
		return "#FFFFBB"
	}
	
}

/*China 1376048943
Australia 23968973
Taiwan 23381038
Turkey 7866583
Japan 126573481