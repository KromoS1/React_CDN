const formatDataForm = (form) => {
	let s = {};
	if (form.constructor == HTMLFormElement) {
		for (var i = 0; i < form.length; i++) {
			const { name, value } = form[i];
			if (name != "") s[name] = value;
		}
	}
	return s;
}