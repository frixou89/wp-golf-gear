var $ = jQuery.noConflict();

$(document).ready(function() {
	var form = $('.wp-golfcp');
	var inHeight = form.find('.golfcp-height-input');
	var inWristToFloor = form.find('.golfcp-wristtofloor-input');
	var inGloveSize = form.find('.golfcp-glove-size-input');

	//clubLength[<wrist-to-floor>][<height>]
	var clubLength = {
	  "40": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "39.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "39": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "38.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "38": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "37.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "37": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "36.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "36": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "35.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "35": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "34.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "34": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "33.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "33": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "32.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "32": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "31.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "31": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "30.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "30": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "29.5": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1},
	  "29": { "4.10":"-1", "4.11":"-1", "5":"-1", "5.1":"-3/4", "5.2":"-3/4", "5.3":"-1/2", "5.4":"-1/2", "5.5":"-1/4", "5.6":"-1/4", "5.7":"-1/4", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"+1/4", "6.2":"+1/4", "6.3":"+1/2", "6.4":"+1/2", "6.5":"+3/4", "6.6":"+3/4", "6.7":+1, "6.8":+1, "6.9":+1}
	};

	//lieAngle[<wrist-to-floor>][<height>]
	var lieAngle = {
	  "40": { "4.10":"+3 Degrees", "4.11":"+3 Degrees", "5":"+3 Degrees", "5.1":"+3 Degrees", "5.2":"+3 Degrees", "5.3":"+3 Degrees", "5.4":"+3 Degrees", "5.5":"+3 Degrees", "5.6":"+3 Degrees", "5.7":"+3 Degrees", "5.8":"+3 Degrees", "5.9":"+3 Degrees", "5.10":"+3 Degrees", "5.11":"+3 Degrees", "6":"+3 Degrees", "6.1":"+3 Degrees", "6.2":"+3 Degrees", "6.3":"+3 Degrees", "6.4":"+3 Degrees", "6.5":"+3 Degrees", "6.6":"+3 Degrees", "6.7":"+3 Degrees", "6.8":"+3 Degrees", "6.9":"+3 Degrees"},
	  "39.5": { "4.10":"+3 Degrees", "4.11":"+3 Degrees", "5":"+3 Degrees", "5.1":"+3 Degrees", "5.2":"+3 Degrees", "5.3":"+3 Degrees", "5.4":"+3 Degrees", "5.5":"+3 Degrees", "5.6":"+3 Degrees", "5.7":"+3 Degrees", "5.8":"+3 Degrees", "5.9":"+3 Degrees", "5.10":"+3 Degrees", "5.11":"+3 Degrees", "6":"+3 Degrees", "6.1":"+3 Degrees", "6.2":"+3 Degrees", "6.3":"+3 Degrees", "6.4":"+3 Degrees", "6.5":"+3 Degrees", "6.6":"+3 Degrees", "6.7":"+3 Degrees", "6.8":"+3 Degrees", "6.9":"+3 Degrees"},
	  "39": { "4.10":"+3 Degrees", "4.11":"+3 Degrees", "5":"+3 Degrees", "5.1":"+3 Degrees", "5.2":"+3 Degrees", "5.3":"+3 Degrees", "5.4":"+3 Degrees", "5.5":"+3 Degrees", "5.6":"+3 Degrees", "5.7":"+3 Degrees", "5.8":"+3 Degrees", "5.9":"+3 Degrees", "5.10":"+3 Degrees", "5.11":"+3 Degrees", "6":"+3 Degrees", "6.1":"+3 Degrees", "6.2":"+3 Degrees", "6.3":"+3 Degrees", "6.4":"+3 Degrees", "6.5":"+3 Degrees", "6.6":"+3 Degrees", "6.7":"+3 Degrees", "6.8":"+3 Degrees", "6.9":"+3 Degrees"},
	  "38.5": { "4.10":"+3 Degrees", "4.11":"+3 Degrees", "5":"+3 Degrees", "5.1":"+3 Degrees", "5.2":"+3 Degrees", "5.3":"+3 Degrees", "5.4":"+3 Degrees", "5.5":"+3 Degrees", "5.6":"+3 Degrees", "5.7":"+3 Degrees", "5.8":"+3 Degrees", "5.9":"+3 Degrees", "5.10":"+3 Degrees", "5.11":"+3 Degrees", "6":"+3 Degrees", "6.1":"+3 Degrees", "6.2":"+3 Degrees", "6.3":"+2 Degrees", "6.4":"+2 Degrees", "6.5":"+2 Degrees", "6.6":"+2 Degrees", "6.7":"+2 Degrees", "6.8":"+2 Degrees", "6.9":"+2 Degrees"},
	  "38": { "4.10":"+3 Degrees", "4.11":"+3 Degrees", "5":"+3 Degrees", "5.1":"+3 Degrees", "5.2":"+3 Degrees", "5.3":"+3 Degrees", "5.4":"+3 Degrees", "5.5":"+3 Degrees", "5.6":"+3 Degrees", "5.7":"+3 Degrees", "5.8":"+2 Degrees", "5.9":"+2 Degrees", "5.10":"+2 Degrees", "5.11":"+2 Degrees", "6":"+2 Degrees", "6.1":"+2 Degrees", "6.2":"+2 Degrees", "6.3":"+2 Degrees", "6.4":"+2 Degrees", "6.5":"+2 Degrees", "6.6":"+2 Degrees", "6.7":"+2 Degrees", "6.8":"+2 Degrees", "6.9":"+2 Degrees"},
	  "37.5": { "4.10":"+3 Degrees", "4.11":"+3 Degrees", "5":"+3 Degrees", "5.1":"+2 Degrees", "5.2":"+2 Degrees", "5.3":"+2 Degrees", "5.4":"+2 Degrees", "5.5":"+2 Degrees", "5.6":"+2 Degrees", "5.7":"+2 Degrees", "5.8":"+2 Degrees", "5.9":"+2 Degrees", "5.10":"+2 Degrees", "5.11":"+2 Degrees", "6":"+2 Degrees", "6.1":"+2 Degrees", "6.2":"+2 Degrees", "6.3":"+2 Degrees", "6.4":"+2 Degrees", "6.5":"+2 Degrees", "6.6":"+2 Degrees", "6.7":"+2 Degrees", "6.8":"+2 Degrees", "6.9":"+2 Degrees"},
	  "37": { "4.10":"+2 Degrees", "4.11":"+2 Degrees", "5":"+2 Degrees", "5.1":"+2 Degrees", "5.2":"+2 Degrees", "5.3":"+2 Degrees", "5.4":"+2 Degrees", "5.5":"+2 Degrees", "5.6":"+2 Degrees", "5.7":"+2 Degrees", "5.8":"+2 Degrees", "5.9":"+2 Degrees", "5.10":"+2 Degrees", "5.11":"+2 Degrees", "6":"+2 Degrees", "6.1":"+2 Degrees", "6.2":"+2 Degrees", "6.3":"+2 Degrees", "6.4":"+2 Degrees", "6.5":"+2 Degrees", "6.6":"+2 Degrees", "6.7":"+2 Degrees", "6.8":"+2 Degrees", "6.9":"+2 Degrees"},
	  "36.5": { "4.10":"+2 Degrees", "4.11":"+2 Degrees", "5":"+2 Degrees", "5.1":"+2 Degrees", "5.2":"+2 Degrees", "5.3":"+2 Degrees", "5.4":"+2 Degrees", "5.5":"+2 Degrees", "5.6":"+2 Degrees", "5.7":"+2 Degrees", "5.8":"+2 Degrees", "5.9":"+2 Degrees", "5.10":"+2 Degrees", "5.11":"+2 Degrees", "6":"+2 Degrees", "6.1":"+2 Degrees", "6.2":"+2 Degrees", "6.3":"+1 Degree", "6.4":"+1 Degree", "6.5":"+1 Degree", "6.6":"+1 Degree", "6.7":"+1 Degree", "6.8":"+1 Degree", "6.9":"+1 Degree"},
	  "36": { "4.10":"+2 Degrees", "4.11":"+2 Degrees", "5":"+2 Degrees", "5.1":"+2 Degrees", "5.2":"+2 Degrees", "5.3":"+2 Degrees", "5.4":"+2 Degrees", "5.5":"+2 Degrees", "5.6":"+2 Degrees", "5.7":"+2 Degrees", "5.8":"+1 Degree", "5.9":"+1 Degree", "5.10":"+1 Degree", "5.11":"+1 Degree", "6":"+1 Degree", "6.1":"+1 Degree", "6.2":"+1 Degree", "6.3":"+1 Degree", "6.4":"+1 Degree", "6.5":"+1 Degree", "6.6":"+1 Degree", "6.7":"+1 Degree", "6.8":"+1 Degree", "6.9":"+1 Degree"},
	  "35.5": { "4.10":"+2 Degrees", "4.11":"+2 Degrees", "5":"+2 Degrees", "5.1":"+1 Degree", "5.2":"+2 Degrees", "5.3":"+1 Degree", "5.4":"+1 Degree", "5.5":"+1 Degree", "5.6":"+1 Degree", "5.7":"+1 Degree", "5.8":"+1 Degree", "5.9":"+1 Degree", "5.10":"+1 Degree", "5.11":"+1 Degree", "6":"+1 Degree", "6.1":"+1 Degree", "6.2":"+1 Degree", "6.3":"+1 Degree", "6.4":"+1 Degree", "6.5":"+1 Degree", "6.6":"+1 Degree", "6.7":"+1 Degree", "6.8":"+1 Degree", "6.9":"+1 Degree"},
	  "35": { "4.10":"+1 Degree", "4.11":"+1 Degree", "5":"+1 Degree", "5.1":"+1 Degree", "5.2":"+1 Degree", "5.3":"+1 Degree", "5.4":"+1 Degree", "5.5":"+1 Degree", "5.6":"+1 Degree", "5.7":"+1 Degree", "5.8":"+1 Degree", "5.9":"+1 Degree", "5.10":"+1 Degree", "5.11":"+1 Degree", "6":"+1 Degree", "6.1":"+1 Degree", "6.2":"+1 Degree", "6.3":"+1 Degree", "6.4":"+1 Degree", "6.5":"+1 Degree", "6.6":"+1 Degree", "6.7":"+1 Degree", "6.8":"+1 Degree", "6.9":"+1 Degree"},
	  "34.5": { "4.10":"+1 Degree", "4.11":"+1 Degree", "5":"+1 Degree", "5.1":"+1 Degree", "5.2":"+1 Degree", "5.3":"+1 Degree", "5.4":"+1 Degree", "5.5":"+1 Degree", "5.6":"+1 Degree", "5.7":"+1 Degree", "5.8":"+1 Degree", "5.9":"+1 Degree", "5.10":"+1 Degree", "5.11":"+1 Degree", "6":"+1 Degree", "6.1":"+1 Degree", "6.2":"+1 Degree", "6.3":"Standard", "6.4":"Standard", "6.5":"Standard", "6.6":"Standard", "6.7":"Standard", "6.8":"Standard", "6.9":"Standard"},
	  "34": { "4.10":"+1 Degree", "4.11":"+1 Degree", "5":"+1 Degree", "5.1":"+1 Degree", "5.2":"+1 Degree", "5.3":"+1 Degree", "5.4":"+1 Degree", "5.5":"+1 Degree", "5.6":"+1 Degree", "5.7":"+1 Degree", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"Standard", "6.2":"Standard", "6.3":"Standard", "6.4":"Standard", "6.5":"Standard", "6.6":"Standard", "6.7":"Standard", "6.8":"Standard", "6.9":"Standard"},
	  "33.5": { "4.10":"+1 Degree", "4.11":"+1 Degree", "5":"+1 Degree", "5.1":"Standard", "5.2":"Standard", "5.3":"Standard", "5.4":"Standard", "5.5":"Standard", "5.6":"Standard", "5.7":"Standard", "5.8":"Standard", "5.9":"Standard", "5.10":"Standard", "5.11":"Standard", "6":"Standard", "6.1":"Standard", "6.2":"Standard", "6.3":"-1 Degree", "6.4":"-1 Degree", "6.5":"-1 Degree", "6.6":"-1 Degree", "6.7":"-1 Degree", "6.8":"-1 Degree", "6.9":"-1 Degree"},
	  "33": { "4.10":"Standard", "4.11":"Standard", "5":"Standard", "5.1":"Standard", "5.2":"Standard", "5.3":"Standard", "5.4":"Standard", "5.5":"Standard", "5.6":"Standard", "5.7":"Standard", "5.8":"-1 Degree", "5.9":"-1 Degree", "5.10":"-1 Degree", "5.11":"-1 Degree", "6":"-1 Degree", "6.1":"-1 Degree", "6.2":"-1 Degree", "6.3":"-1 Degree", "6.4":"-1 Degree", "6.5":"-1 Degree", "6.6":"-1 Degree", "6.7":"-1 Degree", "6.8":"-1 Degree", "6.9":"-1 Degree"},
	  "32.5": { "4.10":"Standard", "4.11":"Standard", "5":"Standard", "5.1":"-1 Degree", "5.2":"-1 Degree", "5.3":"-1 Degree", "5.4":"-1 Degree", "5.5":"-1 Degree", "5.6":"-1 Degree", "5.7":"-1 Degree", "5.8":"-1 Degree", "5.9":"-1 Degree", "5.10":"-1 Degree", "5.11":"-1 Degree", "6":"-1 Degree", "6.1":"-1 Degree", "6.2":"-1 Degree", "6.3":"-1 Degree", "6.4":"-1 Degree", "6.5":"-1 Degree", "6.6":"-1 Degree", "6.7":"-1 Degree", "6.8":"-1 Degree", "6.9":"-1 Degree"},
	  "32": { "4.10":"-1 Degree", "4.11":"-1 Degree", "5":"-1 Degree", "5.1":"-1 Degree", "5.2":"-1 Degree", "5.3":"-1 Degree", "5.4":"-1 Degree", "5.5":"-1 Degree", "5.6":"-1 Degree", "5.7":"-1 Degree", "5.8":"-1 Degree", "5.9":"-1 Degree", "5.10":"-1 Degree", "5.11":"-1 Degree", "6":"-1 Degree", "6.1":"-1 Degree", "6.2":"-1 Degree", "6.3":"-1 Degree", "6.4":"-1 Degree", "6.5":"-1 Degree", "6.6":"-1 Degree", "6.7":"-1 Degree", "6.8":"-1 Degree", "6.9":"-1 Degree"},
	  "31.5": { "4.10":"-1 Degree", "4.11":"-1 Degree", "5":"-1 Degree", "5.1":"-1 Degree", "5.2":"-1 Degree", "5.3":"-1 Degree", "5.4":"-1 Degree", "5.5":"-1 Degree", "5.6":"-1 Degree", "5.7":"-1 Degree", "5.8":"-1 Degree", "5.9":"-1 Degree", "5.10":"-1 Degree", "5.11":"-1 Degree", "6":"-1 Degree", "6.1":"-1 Degree", "6.2":"-1 Degree", "6.3":"-2 Degrees", "6.4":"-2 Degrees", "6.5":"-2 Degrees", "6.6":"-1 Degree", "6.7":"-2 Degrees", "6.8":"-2 Degrees", "6.9":"-2 Degrees"},
	  "31": { "4.10":"-1 Degree", "4.11":"-1 Degree", "5":"-1 Degree", "5.1":"-1 Degree", "5.2":"-1 Degree", "5.3":"-1 Degree", "5.4":"-1 Degree", "5.5":"-1 Degree", "5.6":"-1 Degree", "5.7":"-1 Degree", "5.8":"-2 Degrees", "5.9":"-2 Degrees", "5.10":"-2 Degrees", "5.11":"-2 Degrees", "6":"-2 Degrees", "6.1":"-2 Degrees", "6.2":"-2 Degrees", "6.3":"-2 Degrees", "6.4":"-2 Degrees", "6.5":"-2 Degrees", "6.6":"-1 Degree", "6.7":"-2 Degrees", "6.8":"-2 Degrees", "6.9":"-2 Degrees"},
	  "30.5": { "4.10":"-1 Degree", "4.11":"-1 Degree", "5":"-1 Degree", "5.1":"-2 Degrees", "5.2":"-1 Degree", "5.3":"-1 Degree", "5.4":"-2 Degrees", "5.5":"-2 Degrees", "5.6":"-2 Degrees", "5.7":"-2 Degrees", "5.8":"-2 Degrees", "5.9":"-2 Degrees", "5.10":"-2 Degrees", "5.11":"-2 Degrees", "6":"-2 Degrees", "6.1":"-2 Degrees", "6.2":"-2 Degrees", "6.3":"-2 Degrees", "6.4":"-2 Degrees", "6.5":"-2 Degrees", "6.6":"-1 Degree", "6.7":"-2 Degrees", "6.8":"-2 Degrees", "6.9":"-2 Degrees"},
	  "30": { "4.10":"-2 Degrees", "4.11":"-2 Degrees", "5":"-2 Degrees", "5.1":"-2 Degrees", "5.2":"-1 Degree", "5.3":"-1 Degree", "5.4":"-2 Degrees", "5.5":"-2 Degrees", "5.6":"-2 Degrees", "5.7":"-2 Degrees", "5.8":"-2 Degrees", "5.9":"-2 Degrees", "5.10":"-2 Degrees", "5.11":"-2 Degrees", "6":"-2 Degrees", "6.1":"-2 Degrees", "6.2":"-2 Degrees", "6.3":"-2 Degrees", "6.4":"-2 Degrees", "6.5":"-2 Degrees", "6.6":"-1 Degree", "6.7":"-2 Degrees", "6.8":"-2 Degrees", "6.9":"-2 Degrees"},
	  "29.5": { "4.10":"-2 Degrees", "4.11":"-2 Degrees", "5":"-2 Degrees", "5.1":"-2 Degrees", "5.2":"-2 Degrees", "5.3":"-2 Degrees", "5.4":"-2 Degrees", "5.5":"-2 Degrees", "5.6":"-2 Degrees", "5.7":"-2 Degrees", "5.8":"-2 Degrees", "5.9":"-2 Degrees", "5.10":"-2 Degrees", "5.11":"-2 Degrees", "6":"-2 Degrees", "6.1":"-2 Degrees", "6.2":"-2 Degrees", "6.3":"-2 Degrees", "6.4":"-2 Degrees", "6.5":"-3 Degrees", "6.6":"-3 Degrees", "6.7":"-3 Degrees", "6.8":"-3 Degrees", "6.9":"-3 Degrees"},
	  "29": { "4.10":"-2 Degrees", "4.11":"-2 Degrees", "5":"-2 Degrees", "5.1":"-2 Degrees", "5.2":"-2 Degrees", "5.3":"-2 Degrees", "5.4":"-2 Degrees", "5.5":"-2 Degrees", "5.6":"-2 Degrees", "5.7":"-2 Degrees", "5.8":"-3 Degrees", "5.9":"-3 Degrees", "5.10":"-3 Degrees", "5.11":"-3 Degrees", "6":"-3 Degrees", "6.1":"-3 Degrees", "6.2":"-3 Degrees", "6.3":"-3 Degrees", "6.4":"-3 Degrees", "6.5":"-3 Degrees", "6.6":"-3 Degrees", "6.7":"-3 Degrees", "6.8":"-3 Degrees", "6.9":"-3 Degrees"}
	};

	//gripSize[<glove-size>]
	var gripSize = {
	  "Cadet Extra Large": "Oversize",
	  "Large": "Midsize",
	  "Cadet Large": "Midsize",
	  "Medium Large": "Standard",
	  "Cadet Medium Large": "Standard",
	  "Medium": "Standard",
	  "Cadet Medium": "Standard",
	  "Small": "Ladies",
	  "Cadet Small": "Ladies"
	};

	inHeight.change(function() {
		inHeight.val($(this).val()); //To work with widget on the same page
		calculateClubLengthAndLieAngle();
	})

	inWristToFloor.change(function() {
		inWristToFloor.val($(this).val()); //To work with widget on the same page
		calculateClubLengthAndLieAngle();
	})

	inGloveSize.change(function() {
		inGloveSize.val($(this).val()); //To work with widget on the same page
		calculateGripSize();
	})

	//Calculate Club Length
	function calculateClubLengthAndLieAngle() {
		var height = inHeight.val();
		var wristtofloor = inWristToFloor.val();
		var result_clubLength = $('.golfcp-club-length-result');
		var result_lieAngle = $('.golfcp-lie-angle-result');

		if(height && wristtofloor) {
			result_clubLength.val(clubLength[wristtofloor][height]);
			result_lieAngle.val(lieAngle[wristtofloor][height]);
		}
	}

	//Calculate Grip Size
	function calculateGripSize() {
		var gloveSize = inGloveSize.val();
		var result_GripSize = $('.golfcp-grip-size-result');

		if(gloveSize) {
			result_GripSize.val(gripSize[gloveSize]);
		}
	}
})