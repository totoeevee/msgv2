function handleExecption(e){
	console.error(e);
	//more tba
};
(async function(){
	try{
		var k = await fetch("/msgv2/data/template.json");
		k=await k.json();
		var h = document.createElement("header");
		h.innerHTML = k["header"];
		document.body.prepend(h);
		var f = document.createElement("footer");
		f.innerHTML = k["footer"];
		document.body.appendChild(f);
	}catch(e){
		handleExecption(e);
	}
})();