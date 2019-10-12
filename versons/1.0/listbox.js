var listbox = {
	create: function(id, elem) {
		$(elem).append('<div class="listbox" id="' + id + '"></div>');
	},
	init: function() {
		$("head").append("<style>.listbox {border: 1px solid #000;width: 100%;height: 150px; overflow: scroll;}.listbox-item {width: 100%;text-align: left;border: none;background-color: #fff;}.listbox-item:hover {background-color: #8080ff;}.listbox-item:active {background-color: #00f;}</style>");
	},
	add: function(text, id, box) {
		$("#" + box).append('<button class="listbox-item" id="' + id + '" >' + text + '</button>');
	},
	addHandler: function(code, object) {
var script = document.createElement("script");
script.innerHTML = "$('#" + object + "').click(function() {" + code + "});";
document.head.appendChild(script);
	}
};
