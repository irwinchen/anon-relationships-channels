// DATA

// Put the data inline to simplify usage in Chrome
var data = [{"id":0,"name":"Asset Manager 0","type":"Asset Manager"},
{"id":1,"name":"Asset Manager 1","type":"Asset Manager"},
{"id":2,"name":"Bank 2","type":"Bank"},
{"id":3,"name":"Bank 3","type":"Bank"},
{"id":4,"name":"Fund Director 4","type":"Fund Director"},
{"id":5,"name":"Bank Executive 5","type":"Bank Executive"},
{"id":6,"name":"Fund 6","type":"Fund"},
{"id":7,"name":"Fund 7","type":"Fund"},
{"id":8,"name":"Asset Manager 8","type":"Asset Manager"},
{"id":9,"name":"Bank 9","type":"Bank"},
{"id":10,"name":"Bank 10","type":"Bank"},
{"id":11,"name":"Bank 11","type":"Bank"},
{"id":12,"name":"Bank 12","type":"Bank"},
{"id":13,"name":"Bank 13","type":"Bank"},
{"id":14,"name":"Bank 14","type":"Bank"},
{"id":15,"name":"Bank 15","type":"Bank"},
{"id":16,"name":"Bank 16","type":"Bank"},
{"id":17,"name":"Bank 17","type":"Bank"},
{"id":18,"name":"Bank 18","type":"Bank"},
{"id":19,"name":"Bank 19","type":"Bank"},
{"id":20,"name":"Fund Director 20","type":"Fund Director"},
{"id":21,"name":"Asset Manager 21","type":"Asset Manager"},
{"id":22,"name":"Bank 22","type":"Bank"},
{"id":23,"name":"Asset Manager 23","type":"Asset Manager"},
{"id":24,"name":"Fund Director 24","type":"Fund Director"},
{"id":25,"name":"Asset Manager 25","type":"Asset Manager"},
{"id":26,"name":"Asset Manager 26","type":"Asset Manager"},
{"id":27,"name":"Asset Manager 27","type":"Asset Manager"},
{"id":28,"name":"Bank 28","type":"Bank"},
{"id":29,"name":"Fund 29","type":"Fund"},
{"id":30,"name":"Bank 30","type":"Bank"},
{"id":31,"name":"Asset Manager 31","type":"Asset Manager"},
{"id":32,"name":"Asset Manager 32","type":"Asset Manager"},
{"id":33,"name":"Fund Director 33","type":"Fund Director"},
{"id":34,"name":"Asset Manager 34","type":"Asset Manager"},
{"id":35,"name":"Asset Manager 35","type":"Asset Manager"},
{"id":36,"name":"Fund 36","type":"Fund"},
{"id":37,"name":"Fund Director 37","type":"Fund Director"},
{"id":38,"name":"Asset Manager 38","type":"Asset Manager"},
{"id":39,"name":"Fund Director 39","type":"Fund Director"},
{"id":40,"name":"Asset Manager 40","type":"Asset Manager"},
{"id":41,"name":"Bank 41","type":"Bank"},
{"id":42,"name":"Bank 42","type":"Bank"},
{"id":43,"name":"Bank 43","type":"Bank"},
{"id":44,"name":"Bank 44","type":"Bank"},
{"id":45,"name":"Fund Director 45","type":"Fund Director"},
{"id":46,"name":"Bank Executive 46","type":"Bank Executive"},
{"id":47,"name":"Bank Executive 47","type":"Bank Executive"},
{"id":48,"name":"Bank 48","type":"Bank"},
{"id":49,"name":"Bank Executive 49","type":"Bank Executive"},
{"id":50,"name":"Fund 50","type":"Fund"},
{"id":51,"name":"Fund 51","type":"Fund"},
{"id":52,"name":"Asset Manager 52","type":"Asset Manager"},
{"id":53,"name":"Fund 53","type":"Fund"},
{"id":54,"name":"Fund 54","type":"Fund"},
{"id":55,"name":"Fund Director 55","type":"Fund Director"},
{"id":56,"name":"Bank 56","type":"Bank"},
{"id":57,"name":"Fund 57","type":"Fund"},
{"id":58,"name":"Fund 58","type":"Fund"},
{"id":59,"name":"Asset Manager 59","type":"Asset Manager"},
{"id":60,"name":"Fund Director 60","type":"Fund Director"},
{"id":61,"name":"Bank Executive 61","type":"Bank Executive"},
{"id":62,"name":"Bank 62","type":"Bank"},
{"id":63,"name":"Fund Director 63","type":"Fund Director"},
{"id":64,"name":"Fund Director 64","type":"Fund Director"},
{"id":65,"name":"Fund Director 65","type":"Fund Director"},
{"id":66,"name":"Bank 66","type":"Bank"},
{"id":67,"name":"Bank Executive 67","type":"Bank Executive"},
{"id":68,"name":"Asset Manager 68","type":"Asset Manager"},
{"id":69,"name":"Asset Manager 69","type":"Asset Manager"},
{"id":70,"name":"Asset Manager 70","type":"Asset Manager"},
{"id":71,"name":"Fund Director 71","type":"Fund Director"},
{"id":72,"name":"Asset Manager 72","type":"Asset Manager"},
{"id":73,"name":"Bank 73","type":"Bank"},
{"id":74,"name":"Fund Director 74","type":"Fund Director"},
{"id":75,"name":"Asset Manager 75","type":"Asset Manager"},
{"id":76,"name":"Fund Director 76","type":"Fund Director"},
{"id":77,"name":"Bank 77","type":"Bank"},
{"id":78,"name":"Asset Manager 78","type":"Asset Manager"},
{"id":79,"name":"Fund Director 79","type":"Fund Director"},
{"id":80,"name":"Asset Manager 80","type":"Asset Manager"},
{"id":81,"name":"Asset Manager 81","type":"Asset Manager"},
{"id":82,"name":"Fund 82","type":"Fund"},
{"id":83,"name":"Fund 83","type":"Fund"},
{"id":84,"name":"Fund Director 84","type":"Fund Director"},
{"id":85,"name":"Fund 85","type":"Fund"},
{"id":86,"name":"Fund 86","type":"Fund"},
{"id":87,"name":"Bank 87","type":"Bank"},
{"id":88,"name":"Fund 88","type":"Fund"},
{"id":89,"name":"Asset Manager 89","type":"Asset Manager"},
{"id":90,"name":"Fund Director 90","type":"Fund Director"},
{"id":91,"name":"Asset Manager 91","type":"Asset Manager"}];

var relationships = [{"source":41,"target":50,"description":"Description","source document":"Document 0"},
{"source":87,"target":34,"description":"Description","source document":"Document 1"},
{"source":40,"target":40,"description":"Description","source document":"Document 2"},
{"source":40,"target":52,"description":"Description","source document":"Document 3"},
{"source":8,"target":40,"description":"Description","source document":"Document 4"},
{"source":42,"target":0,"description":"Description","source document":"Document 5"},
{"source":2,"target":32,"description":"Description","source document":"Document 6"},
{"source":59,"target":53,"description":"Description","source document":"Document 7"},
{"source":60,"target":75,"description":"Description","source document":"Document 8"},
{"source":55,"target":21,"description":"Description","source document":"Document 9"},
{"source":55,"target":88,"description":"Description","source document":"Document 9"},
{"source":9,"target":21,"description":"Description","source document":"Document 10"},
{"source":79,"target":20,"description":"Description","source document":"Document 11"},
{"source":79,"target":81,"description":"Description","source document":"Document 12"},
{"source":20,"target":34,"description":"Description","source document":"Document 13"},
{"source":79,"target":34,"description":"Description","source document":"Document 14"},
{"source":79,"target":21,"description":"Description","source document":"Document 15"},
{"source":18,"target":50,"description":"Description","source document":"Document 16"},
{"source":18,"target":21,"description":"Description","source document":"Document 17"},
{"source":18,"target":85,"description":"Description","source document":"Document 18"},
{"source":18,"target":32,"description":"Description","source document":"Document 19"},
{"source":71,"target":32,"description":"Description","source document":"Document 20"},
{"source":71,"target":32,"description":"Description","source document":"Document 20"},
{"source":22,"target":32,"description":"Description","source document":"Document 21"},
{"source":22,"target":51,"description":"Description","source document":"Document 22"},
{"source":69,"target":4,"description":"Description","source document":"Document 23"},
{"source":78,"target":88,"description":"Description","source document":"Document 24"},
{"source":78,"target":7,"description":"Description","source document":"Document 24"},
{"source":91,"target":88,"description":"Description","source document":"Document 24"},
{"source":16,"target":88,"description":"Description","source document":"Document 25"},
{"source":16,"target":91,"description":"Description","source document":"Document 25"},
{"source":28,"target":32,"description":"Description","source document":"Document 26"},
{"source":28,"target":50,"description":"Description","source document":"Document 26"},
{"source":30,"target":32,"description":"Description","source document":"Document 27"},
{"source":30,"target":32,"description":"Description","source document":"Document 28"},
{"source":67,"target":18,"description":"Description","source document":"Document 29"},
{"source":67,"target":41,"description":"Description","source document":"Document 29"},
{"source":87,"target":80,"description":"Description","source document":"Document 30"},
{"source":87,"target":81,"description":"Description","source document":"Document 31"},
{"source":41,"target":81,"description":"Description","source document":"Document 32"},
{"source":41,"target":52,"description":"Description","source document":"Document 33"},
{"source":41,"target":8,"description":"Description","source document":"Document 33"},
{"source":41,"target":32,"description":"Description","source document":"Document 34"},
{"source":41,"target":50,"description":"Description","source document":"Document 35"},
{"source":34,"target":52,"description":"Description","source document":"Document 36"},
{"source":41,"target":34,"description":"Description","source document":"Document 37"},
{"source":41,"target":40,"description":"Description","source document":"Document 37"},
{"source":34,"target":8,"description":"Description","source document":"Document 38"},
{"source":34,"target":36,"description":"Description","source document":"Document 39"},
{"source":34,"target":82,"description":"Description","source document":"Document 40"},
{"source":40,"target":52,"description":"Description","source document":"Document 40"},
{"source":41,"target":32,"description":"Description","source document":"Document 41"},
{"source":41,"target":51,"description":"Description","source document":"Document 42"},
{"source":34,"target":87,"description":"Description","source document":"Document 43"},
{"source":34,"target":40,"description":"Description","source document":"Document 44"},
{"source":34,"target":31,"description":"Description","source document":"Document 45"},
{"source":8,"target":21,"description":"Description","source document":"Document 46"},
{"source":80,"target":81,"description":"Description","source document":"Document 47"},
{"source":3,"target":0,"description":"Description","source document":"Document 48"},
{"source":72,"target":79,"description":"Description","source document":"Document 49"},
{"source":56,"target":51,"description":"Description","source document":"Document 50"},
{"source":56,"target":32,"description":"Description","source document":"Document 51"},
{"source":56,"target":32,"description":"Description","source document":"Document 51"},
{"source":35,"target":37,"description":"Description","source document":"Document 52"},
{"source":48,"target":60,"description":"Description","source document":"Document 52"},
{"source":91,"target":37,"description":"Description","source document":"Document 53"},
{"source":14,"target":85,"description":"Description","source document":"Document 54"},
{"source":14,"target":7,"description":"Description","source document":"Document 55"},
{"source":14,"target":88,"description":"Description","source document":"Document 56"},
{"source":14,"target":32,"description":"Description","source document":"Document 57"},
{"source":14,"target":32,"description":"Description","source document":"Document 58"},
{"source":14,"target":50,"description":"Description","source document":"Document 59"},
{"source":68,"target":61,"description":"Description","source document":"Document 60"},
{"source":68,"target":60,"description":"Description","source document":"Document 60"},
{"source":68,"target":72,"description":"Description","source document":"Document 60"},
{"source":72,"target":21,"description":"Description","source document":"Document 60"},
{"source":60,"target":33,"description":"Description","source document":"Document 60"},
{"source":60,"target":39,"description":"Description","source document":"Document 60"},
{"source":32,"target":21,"description":"Description","source document":"Document 60"},
{"source":3,"target":32,"description":"Description","source document":"Document 61"},
{"source":5,"target":32,"description":"Description","source document":"Document 61"},
{"source":10,"target":32,"description":"Description","source document":"Document 61"},
{"source":10,"target":32,"description":"Description","source document":"Document 61"},
{"source":13,"target":32,"description":"Description","source document":"Document 61"},
{"source":13,"target":32,"description":"Description","source document":"Document 61"},
{"source":15,"target":32,"description":"Description","source document":"Document 61"},
{"source":16,"target":32,"description":"Description","source document":"Document 61"},
{"source":17,"target":32,"description":"Description","source document":"Document 61"},
{"source":66,"target":32,"description":"Description","source document":"Document 61"},
{"source":87,"target":20,"description":"Description","source document":"Document 61"},
{"source":87,"target":32,"description":"Description","source document":"Document 61"},
{"source":87,"target":32,"description":"Description","source document":"Document 61"},
{"source":87,"target":32,"description":"Description","source document":"Document 61"},
{"source":32,"target":46,"description":"Description","source document":"Document 61"},
{"source":77,"target":5,"description":"Description","source document":"Document 61"},
{"source":30,"target":46,"description":"Description","source document":"Document 61"},
{"source":77,"target":32,"description":"Description","source document":"Document 62"},
{"source":70,"target":49,"description":"Description","source document":"Document 63"},
{"source":71,"target":20,"description":"Description","source document":"Document 64"},
{"source":20,"target":49,"description":"Description","source document":"Document 65"},
{"source":34,"target":81,"description":"Description","source document":"Document 66"},
{"source":20,"target":21,"description":"Description","source document":"Document 67"},
{"source":20,"target":82,"description":"Description","source document":"Document 68"},
{"source":9,"target":59,"description":"Description","source document":"Document 69"},
{"source":59,"target":33,"description":"Description","source document":"Document 69"},
{"source":59,"target":39,"description":"Description","source document":"Document 69"},
{"source":9,"target":60,"description":"Description","source document":"Document 70"},
{"source":9,"target":69,"description":"Description","source document":"Document 70"},
{"source":75,"target":51,"description":"Description","source document":"Document 71"},
{"source":75,"target":69,"description":"Description","source document":"Document 71"},
{"source":84,"target":75,"description":"Description","source document":"Document 71"},
{"source":75,"target":57,"description":"Description","source document":"Document 72"},
{"source":75,"target":29,"description":"Description","source document":"Document 73"},
{"source":60,"target":21,"description":"Description","source document":"Document 74"},
{"source":60,"target":69,"description":"Description","source document":"Document 74"},
{"source":60,"target":75,"description":"Description","source document":"Document 75"},
{"source":16,"target":21,"description":"Description","source document":"Document 76"},
{"source":37,"target":78,"description":"Description","source document":"Document 77"},
{"source":37,"target":88,"description":"Description","source document":"Document 77"},
{"source":19,"target":50,"description":"Description","source document":"Document 78"},
{"source":19,"target":32,"description":"Description","source document":"Document 79"}];

// filtering
relationships = _.reject(relationships,function(r){
	return (_.isUndefined(_.where(data,{id:r.source}))||_.isUndefined(_.where(data,{id:r.target})));
});
relationships = _.sortBy(_.sortBy(_.uniq(relationships,function(r){if (r.source>r.target) { return r.source+'-'+r.target; } else { return r.target+'-'+r.source; }}),function(t){return -t.target;}),function(s){return -s.source;});

var mainData = _.reject(data,function(d){ return _.isEqual(d.type,'Fund'); });

//
//


//This is a function to wrap text, if it messes with editing in Illustrator, just drop it
//cargo culted from here:
//bl.ocks.org/mbostock/7555321
var wrap = function(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr('y'),
            tspan = text.text(null).append('tspan').attr('x', 0).attr('y', y);
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(' '));
                line = [word];
                tspan = text.append('tspan').attr('x', 0).attr('y', ++lineNumber * lineHeight + 'em').text(word);
            }
        }
    });
};
//
var symbolScale = function(type) {
	//_.isEqual(type,'Asset Manager')
	if (_.isEqual(type,'Fund Director')||_.isEqual(type,'Bank Executive')) {
		return 'circle';
	} else if (_.isEqual(type,'Fund')) {
		return 'triangle-up';
	} else {
		return 'square';
	}
};

// var width = 1914,//1920,
var minWidth = 1280;
var width = $(window).width(),
	height = 974,//1080,
	padding = 8;
if (width < minWidth) {
	width = minWidth;
}
//
// function updateWindow(){
// 	var w = window,
// 	    d = document,
// 	    e = d.documentElement,
// 	    g = d.getElementsByTagName('body')[0];
//     // x = w.innerWidth || e.clientWidth || g.clientWidth;
//     tempWidth = w.innerWidth || e.clientWidth || g.clientWidth;
//     if (tempWidth > minWidth) {
//     	width = tempWidth;
//     } else {
//     	width = minWidth;
//     }
//     // y = w.innerHeight|| e.clientHeight|| g.clientHeight;

//     height = 974;

//     // svg.attr("width", width).attr("height", height);

// }
// window.onresize = updateWindow;
//
var duration = 350;
var color = d3.scale.category20();

var svg = d3.select('#chart')
			.append('svg')
			.attr('width',width)
			.attr('height',height);

// title

svg.append('text')
	.attr('x',padding)
	.attr('y',padding*4)
	.attr('font-size',24)
	.text('Financial Connections');

// draft box
var dBox = svg.append('g')
			.attr('class','dBox');

dBox.append('rect')
	.attr('class','red-outline')
	.attr('x',width - padding*35 - padding)
	.attr('y',padding)
	.attr('width',padding*35)
	.attr('height',padding*5)
	.attr('fill','none')
	.attr('stroke','red');

var today = new Date();
today = today.toLocaleDateString();

dBox.append('text')
	.attr('class','draft')
	.attr('x',width - padding*35)
	.attr('y',padding*5)
	.attr('font-size',12)
	.attr('fill','red')
	.text('Draft as of '+today);

dBox.append('text')
	.attr('class','draft')
	.attr('x',width - padding*35)
	.attr('y',padding*3)
	.attr('font-size',12)
	.attr('fill','red')
	.text('Privileged and Confidential Attorney Work Product');

// key
var kBox = svg.append('g')
			.attr('class','kBox');

kBox.append('rect')
	.attr('class','grey-outline')
	.attr('x',width - padding*35 - padding)
	.attr('y',padding*7)
	.attr('width',padding*35)
	.attr('height',padding*6)
	.attr('fill','none')
	.attr('stroke','#999');

// kBox.append('text')
var kData = [
		{
			name : 'Person',
			color : '#333',
			type : 'Bank Executive',
			row : 1,
			col : 1
		},
		{
			name : 'Entity',
			color : '#333',
			type : 'Bank',
			row : 1,
			col : 2
		},
		{
			name : 'Fund',
			color : '#333',
			type : 'Fund',
			row : 1,
			col : 3
		},
		// {
		// 	name : 'Selectable',
		// 	color : '#333',
		// 	type : 'Bank',
		// 	row : 2,
		// 	col : 1
		// },
		{
			name : 'Selected',
			color : '#CDE',
			type : 'Bank',
			row : 2,
			col : 1
		}
	];

kBox.append('text')
	.attr('x',width - padding*35)
	.attr('y',padding*9)
	.attr('fill','#333')
	.attr('font-size',12)
	.text('Key');

kBox.selectAll('text.key')
	.data(kData)
	.enter()
	.append('text')
	.attr('class','key')
	.attr('x',function(d){
		return (width - padding*28) + ((padding * 10) * (d.col-1));
	})
	.attr('y',function(d){
		return padding*6 + (padding*3)*d.row;
	})
	.attr('fill','#333')
	.attr('font-size',12)
	.text(function(d){
		return d.name;
	});

kBox.selectAll('path')
	.data(kData)
	.enter()
	.append('path')
	.attr('transform',function(d){
		return 'translate('+((width - padding*29.5) + ((padding * 10) * (d.col-1)))+','+(padding*5.5 + (padding*3)*d.row)+')';
	})
	.attr('d',
		d3.svg.symbol()
		.size(function(d){
			if (_.isEqual(d.type,'Fund')) {
				return 150;
			} else {
				return 200;
			}
		})
		.type(function(d){return symbolScale(d.type);})
		)
	.attr('fill',function(d){
		return d.color;
	})
	.attr('stroke','#333');

//
//
//

var sortRowItems = function(thisRow) {

	//in-row connections
	var thisRowIds = _.pluck(thisRow,'id');
	var inRowRelationships = _.map(_.reject(relationships,function(r){
		return (_.isEqual(_.indexOf(thisRowIds,r.source),-1)||_.isEqual(_.indexOf(thisRowIds,r.target),-1));
	}),function(d){
		return [d.source,d.target];
	});
	// console.log(inRowRelationships);
	//

	//
	// _.forEach(inRowRelationships,function(ir){
	// 	_.forEach(inRowRelationships,function(jr){
	// 		if (!_.isEqual(ir,jr)) {
	// 			if (_.intersection(ir,jr)) {
	// 				_.pull(inRowRelationships,ir);
	// 				_.pull(inRowRelationships,jr);
	// 				inRowRelationships.push(_.union(ir,jr));
	// 			}
	// 		}
	// 	});
	// });

	// last best order
	inRowRelationships = _.uniq(_.flatten(inRowRelationships),function(d){return JSON.stringify(d);});
	thisRow = _.map(thisRow,function(t){
		t.order = _.indexOf(inRowRelationships,t.id);
		return t;
	});
	var maxOrder = _.max(_.pluck(thisRow,'order'));
	thisRow = _.map(thisRow,function(t){
		if (_.isEqual(t.order,-1)) {
			maxOrder++;
			t.order = maxOrder;
		}
		return t;
	});

	//
	// Sorts high number of links to edge (not good)
	//
	// thisRow = _.map(thisRow,function(r){
	// 	r.linkCount = _.uniq(_.union(_.where(relationships,{source:r.id}),_.where(relationships,{target:r.id}))).length;
	// 	return r;
	// });
	// thisRow = _.forEach(_.sortBy(thisRow,'linkCount'),function(r,i){
	// 	r.order = i;
	// 	return r;
	// });
	//
	return thisRow;
};

var arrangeNextRow = function(innerNodes,innerRelationships,rowIndex,isAll) {
	var usedIds = _.pluck(innerNodes,'id');
	var nextRow = [];
	if (!isAll) {
		usedIds = _.reject(usedIds,function(u){
			return _.isEqual(_.first(_.where(data,{id:u})).type,'Fund');
		});
	}
	_.forEach(usedIds,function(u){
		var theseConnections = _.uniq(_.union(_.pluck(_.where(innerRelationships,{target:u}),'source'),_.pluck(_.where(innerRelationships,{source:u}),'target')));
		theseConnections = _.reject(theseConnections,function(t){
			return !_.isEqual(_.indexOf(usedIds,t),-1);
		});
		// if (!isAll) {
		// 	theseConnections = _.reject(theseConnections,function(t){
		// 		var thisC = _.first(_.where(data,{id:t}));
		// 		return _.isEqual(thisC.type,'Fund');
		// 	});
		// }
		nextRow = _.uniq(_.union(nextRow,theseConnections));
	});
	nextRow = _.map(nextRow,function(id){
		if (isAll) {
			return _.first(_.where(data,{'id':id}));
		} else {
			return _.first(_.where(mainData,{'id':id}));
		}
		// return _.first(_.where(innerNodes,{'id':id}));
	});
	nextRow = _.reject(nextRow,function(n){ return _.isUndefined(n); });
	// nextRow = sortRowItems(nextRow);
	// console.log(nextRow);
	_.forEach(nextRow,function(n,i){
		// var thisNode = _.first(_.where(data,{'id':n}));
		// thisNode.pos = {
			if (_.isUndefined(n.order)) {
				// console.log('order undefined');
				n.order = i;
			}
		n.pos = {
			x : n.order,
			// x : i,
			y : rowIndex
		};
		innerNodes.push(n);
		// innerNodes.push(thisNode);
	});
	//
	usedIds = _.pluck(innerNodes,'id');
	// var unusedIds = _.reject(_.pluck(data,'id'),function(d){
	if (isAll) {
		var unusedIds = _.reject(_.pluck(data,'id'),function(d){
			return !_.isEqual(_.indexOf(usedIds,d),-1);
		});
	} else {
		var unusedIds = _.reject(_.pluck(mainData,'id'),function(d){
			return !_.isEqual(_.indexOf(usedIds,d),-1);
		});
	}
	// if (unusedIds.length > 7) { // check this val with new data
	// if (unusedIds.length > 24) { // check this val with new data
	if (rowIndex < 5) {
		rowIndex++;
		return arrangeNextRow(innerNodes,innerRelationships,rowIndex,isAll);
	} else {
		// rowIndex++;
		// nextRow = _.map(unusedIds,function(id){
		// 	return _.first(_.where(data,{'id':id}));
		// });
		// nextRow = sortRowItems(nextRow);
		// //
		// _.forEach(nextRow,function(n,i){
		// 	// var thisNode = _.first(_.where(data,{'id':c}));
		// 	if (_.isUndefined(n.order)) {
		// 		// console.log('order undefined');
		// 		n.order = i;
		// 	}
		// 	n.pos = {
		// 		x : n.order,
		// 		y : rowIndex
		// 	};
		// 	innerNodes.push(n);
		// });
	}
	return innerNodes;
};

var arrangeNodes = function(innerData,innerRelationships,isAll) {
	// filter out funds
	//
	var innerNodes = [];
	var rowIndex = 0;
	var initElem = _.first(_.where(innerData,{name:'Asset Manager 21'}));
	initElem.pos = {
		x : 0,
		y : rowIndex
	};
	innerNodes.push(initElem);
	rowIndex++;
	innerNodes = arrangeNextRow(innerNodes,innerRelationships,rowIndex,isAll);
	return innerNodes;
};

var arrangeLinks = function(nodes,relationships) {
	var nids = _.pluck(nodes,'id');
	relationships = _.reject(relationships,function(r){
		return (_.isEqual(_.indexOf(nids,r.source),-1)||_.isEqual(_.indexOf(nids,r.target),-1));
	});
	var links = _.map(relationships,function(l){
		l.spos = _.first(_.where(nodes,{id:l.source})).pos;
		l.tpos = _.first(_.where(nodes,{id:l.target})).pos;
		return l;
	});
	return links;
};

var sortNodes = function(nodes,relationships) {
	var usedIds = [];
	var currentRow = null;
	var currentRowIndex = [];
	// loop through the nodes
	_.forEach(_.sortBy(nodes,function(d){ return d.pos.x; }),function(n){
		// get the elements (in the next row) linked to that element
		if (!_.isEqual(currentRow,n.pos.y)) {
			currentRow = n.pos.y;
		}
		if (_.isUndefined(currentRowIndex[currentRow])) {
			currentRowIndex[currentRow] = 0;
		}
		var nextRow = _.where(nodes,{pos:{y:(currentRow+1)}});
		var linkedElements = _.reject(_.map(_.uniq(_.union(_.pluck(_.where(relationships,{source:n.id}),'target'),_.pluck(_.where(relationships,{target:n.id}),'source'))),function(l){
			return _.first(_.where(nextRow,{id:l}));
		}),function(r){
			if (_.isUndefined(r)) {
				return true;
			} else {
				if (_.isEqual(_.indexOf(usedIds,r.id),-1)) {
					usedIds.push(r.id);
					return false;
				} else {
					return true;
				}
			}
		});
		// console.log(linkedElements);
		// sort the linked elements (pos.x) 
		_.forEach(linkedElements,function(l){
			var xCount = _.max(_.pluck(_.where(_.pluck(nodes,'pos'),{'y':l.pos.y}),'x'));
			// invert order
			l.pos.x = xCount - currentRowIndex[currentRow];
			// l.pos.x = currentRowIndex[currentRow];
			currentRowIndex[currentRow]++;
		});

	});

	// var nodes = _.map(nodes,function(n){
	// 	var xCount = _.max(_.pluck(_.where(_.pluck(nodes,'pos'),{'y':n.pos.y}),'x'));
	// 	n.pos.x = xCount - n.pos.x;
	// 	return n;
	// });
	// console.log(currentRowIndex);
	return nodes;
};

//

var groupDrag = d3.behavior.drag()
				.on('drag',function(d){
					var x = d3.event.x;
					var y = d3.event.y;

					d.dpos = {
						x : x,
						y : y
					}
					d3.select(this).attr('transform',function(){
						return 'translate('+x+','+y+')';
					});
					// // select source connections
					// d3.selectAll('.s-'+d.id)
					// 	.select('line')
					// 	.attr('x1',function(){
					// 		return x;
					// 	})
					// 	.attr('y1',function(){
					// 		return y;
					// 	});
					// // select target connections
					// d3.selectAll('.t-'+d.id)
					// 	.select('line')
					// 	.attr('x2',function(){
					// 		return x;
					// 	})
					// 	.attr('y2',function(){
					// 		return y;
					// 	});

					// select source connections
					d3.selectAll('.s-'+d.id)
						.attr('d',function(s){

							// var l1 = nodeScale(d.spos);
							var lx1 = x; //changed these
							var ly1 = y; //changed these

							// get connection's current pos
							// console.log(d3.select('#n-'+s.target));
							var targetNodePos = _.first(_.where(nodes,{id:s.target})).dpos;
							// var l2 = nodeScale(s.tpos);
							// var lx2 = l2.x;
							// var ly2 = l2.y;
							var lx2 = targetNodePos.x;
							var ly2 = targetNodePos.y;

							var dx = lx2 - lx1;
							var dy = ly2 - ly1;
							// var dx = 0;
							// if (lx2 > lx1) {
							// 	dx = lx2 - lx1;
							// } else {
							// 	dx = lx1 - lx2;
							// }
							// var dy = 0;
							// if (ly2 > ly1) {
							// 	dy = ly2 - ly1;
							// } else {
							// 	dy = ly1 - ly2;
							// }
							var dr = Math.sqrt(dx * dx + dy * dy);

							return 'M' + lx1 + ',' + ly1 + 'A' + dr + ',' + dr + ' 0 0,1 ' + lx2 + ',' + ly2;

						});

					// select target connections
					d3.selectAll('.t-'+d.id)
						.attr('d',function(t){

							// var l1 = nodeScale(t.spos);
							// var lx1 = l1.x;
							// var ly1 = l1.y;
							var sourceNodePos = _.first(_.where(nodes,{id:t.source})).dpos;
							var lx1 = sourceNodePos.x;
							var ly1 = sourceNodePos.y;

							// var l2 = nodeScale(d.tpos);
							var lx2 = x; //changed these
							var ly2 = y; //changed these

							// var dx = 0;
							// if (lx2 > lx1) {
							// 	dx = lx2 - lx1;
							// } else {
							// 	dx = lx1 - lx2;
							// }
							// var dy = 0;
							// if (ly2 > ly1) {
							// 	dy = ly2 - ly1;
							// } else {
							// 	dy = ly1 - ly2;
							// }
							// var dr = Math.sqrt(dx * dx + dy * dy);

							var dx = lx2 - lx1;
							var dy = ly2 - ly1;
							var dr = Math.sqrt(dx * dx + dy * dy);

							return 'M' + lx1 + ',' + ly1 + 'A' + dr + ',' + dr + ' 0 0,1 ' + lx2 + ',' + ly2;

						});

				});





var mainRelationships = _.reject(relationships,function(r){
	return (_.isUndefined(_.first(_.where(mainData,{id:r.source})))||_.isUndefined(_.first(_.where(mainData,{id:r.target}))));
});

var nodes = arrangeNodes(_.cloneDeep(mainData),_.cloneDeep(mainRelationships),false);
nodes = sortNodes(_.cloneDeep(nodes),_.cloneDeep(mainRelationships));
// console.log(nodes.length);

var allNodes = arrangeNodes(_.cloneDeep(data),_.cloneDeep(relationships),true);


// allNodes = sortNodes(allNodes,relationships);
// console.log(allNodes.length);

//
var getNextRow = function(featured,directConnections,pos,isUp) {
	if (isUp) {
		pos--;
	} else {
		pos++;
	}
	// var nextPos = pos;
	// if (isUp) {
	// 	nextPos--;
	// } else {
	// 	nextPos++;
	// }
	var prevRowNodes = _.pluck(_.filter(nodes,function(n){
		if (!_.isEqual(_.indexOf(directConnections,n.id),-1)&&_.isEqual(n.pos.y,pos)) {
		// if (!_.isEqual(_.indexOf(connectedNodes,n.id),-1)) {
			return true;
		} else {
			return false;
		}
	}),'id');
	//
	featured = _.union(featured,prevRowNodes);
	// console.log(featured);
	// var prevRowConnections = 
	var nextConnection = [];
	_.forEach(prevRowNodes,function(f){
		nextConnection = _.union(nextConnection,_.union(_.pluck(_.where(relationships,{source:f}),'target'),_.pluck(_.where(relationships,{target:f}),'source')));
	});
	//
	var maxyPos = _.max(_.pluck(_.pluck(nodes,'pos'),'y'));
	// var nextRowNodes = [];
	if ((isUp && pos > 0)||(!isUp && pos < maxyPos)) {
		// climbUpNodes(prevRowConnections,pos,isUp);
		// nextRowNodes = 
		// featured = _.union(featured,
		var nextRow = getNextRow(featured,nextConnection,pos,isUp);
		featured = _.union(featured,nextRow);
		// return featured;
	}
	return featured;
	// console.log(prevRowNodes);
	// return _.union(prevRowNodes,nextRowNodes);
};
//
var getFeatured = function() {
	var featured = [];
	_.forEach(featuredNames,function(n){
		var f = _.first(_.where(nodes,{name:n}));
		featured.push(f.id);
		var directConnections = _.union(_.pluck(_.where(relationships,{source:f.id}),'target'),_.pluck(_.where(relationships,{target:f.id}),'source'));
		featured = _.union(featured,directConnections);
		// _.forEach(directConnections,function(c){
			// var thisConnection = _.first(_.where(nodes,{id:c.id}));
		// 	featured.push(thisConnection);
		// });
		var prev = getNextRow(featured,directConnections,f.pos.y,true);
		var next = getNextRow(featured,directConnections,f.pos.y,false);
		var connected = _.union(prev,next);
		featured = _.union(featured,connected);
		// getConnections(f,featured,true);
		// getConnections(f,featured,false);
	});
	featured = _.reject(featured,function (f){
		var fNode = _.first(_.where(nodes,{id:f}));
		if (_.isUndefined(fNode)) {
			return true;
		} else if (_.isEqual(fNode.type,'Fund')) {
			return true;
		} else {
			return false;
		}
	});
	return _.uniq(featured);
};

// var featured = getFeatured();
var featured = _.pluck(allNodes,'id');

// console.log(featured);
//


var links = arrangeLinks(_.cloneDeep(nodes),_.cloneDeep(mainRelationships));
var allLinks = arrangeLinks(_.cloneDeep(allNodes),_.cloneDeep(relationships));

var yInterval = (height-padding*5)/(_.max(_.pluck(_.pluck(nodes,'pos'),'y'))+1);

var nodeScale = function(pos) {
	var xInterval = (width-padding*12)/(_.max(_.pluck(_.where(_.pluck(nodes,'pos'),{'y':pos.y}),'x'))+2);
	tpos = {
		x : (pos.x+1) * xInterval,
		y : (pos.y+0.5) * yInterval
	};
	return tpos;
};

// var gLinks = svg.selectAll('g.link')
// 			.data(links)
// 			.enter()
// 			.append('g')
// 			// .attr('class','link');
// 			.attr('class',function(d){
// 				var classString = 'link s-'+d.source+' t-'+d.target;
// 				return classString;
// 			});

// gLinks.append('line')
// 	.attr('stroke','#DDD')
// 	.attr('x1',function(d){
// 		var spos = nodeScale(d.spos);
// 		return spos.x;
// 	})
// 	.attr('y1',function(d){
// 		var spos = nodeScale(d.spos);
// 		return spos.y;
// 	})
// 	.attr('x2',function(d){
// 		var tpos = nodeScale(d.tpos);
// 		return tpos.x;
// 	})
// 	.attr('y2',function(d){
// 		var tpos = nodeScale(d.tpos);
// 		return tpos.y;
// 	});

var pLinks = svg.selectAll('path.link')
				.data(links)
				.enter()
				.append('path')
				.attr('class',function(d){
					var classString = 'link s-'+d.source+' t-'+d.target;
					return classString;
				})
				.attr('fill','none')
				.attr('stroke','#CCC')
				.attr('stroke-width',2)
				.attr('stroke-opacity',0.5);

pLinks.attr('d',function(d){

	var l1 = nodeScale(d.spos);
	var lx1 = l1.x;
	var ly1 = l1.y;

	var l2 = nodeScale(d.tpos);
	var lx2 = l2.x;
	var ly2 = l2.y;

	var dx = lx2 - lx1;
	var dy = ly2 - ly1;
	var dr = Math.sqrt(dx * dx + dy * dy);

	return 'M' + lx1 + ',' + ly1 + 'A' + dr + ',' + dr + ' 0 0,1 ' + lx2 + ',' + ly2;

});

var rotation = 30;//45;
var radius = 12;

var gNodes = svg.selectAll('g.node')
			.data(nodes)
			.enter()
			.append('g')
			.attr('class','node')
			.attr('id',function(d){
				return 'n-'+d.id;
			})
			// .attr('cursor','pointer')
			.attr('cursor',function(d){
				if (_.isEqual(_.indexOf(featured,d.id),-1)) {
					return null;
				} else {
					return 'pointer';
				}
			})
			.attr('opacity',1)
			.attr('transform',function(d){
				var pos = nodeScale(d.pos);
				d.dpos = pos;
				return 'translate('+pos.x+','+pos.y+')';
			});



// Assign types
// var type = d3.scale.ordinal()
// 		.domain(["Person", "Unknown", "Bank", "Company","Fund"])
// 		.range(d3.svg.symbolTypes);
// var types = _.uniq(_.pluck(nodes,'type'));
// console.log(types);
// var symboles = ['circle','square']
// console.log(d3.svg.symbolTypes);

gNodes.append('path')
	.attr('d',
		d3.svg.symbol()
		.size(350)
		.type(function(d){return symbolScale(d.type);})
		)
	.attr('fill',function(d){
		if (_.isEqual(_.indexOf(featured,d.id),-1)) {
			return '#999';
		} else {
			return '#333';
		}
	});
	// .attr('fill','#333');
// gNodes.append('circle')
// 	.attr('r',radius)
// 	.attr('fill','#333');

// gNodes.call(groupDrag);
gNodes.on('mouseover',function(d) {
	highlightLinks(d);
});
gNodes.on('mouseout',function(d){
	resetLinks(d);
});
//
gNodes.on('click',function(d){
	if (_.isEqual(_.indexOf(featured,d.id),-1)) {
		null;
	} else {
		showDetail(d);
	}
});
//

gNodes.append('text')
	.attr('fill','#333')
	.attr('font-size',radius)
	.text(function(d){
		return d.name;
	});

gNodes.selectAll('text').attr('transform',function(d){
	return 'translate('+(radius*0.5)+','+(radius*1.5)+') rotate('+rotation+')';
});

//
// Draw Y Axis Labels
// var yAxisData = [
// 	{yval:}
// 	];
var yAxisData = _.sortBy(_.uniq(_.pluck(_.pluck(nodes,'pos'),'y')));
// console.log(yAxisData);

var yAxis = svg.selectAll('g.yAxis')
				.data(yAxisData)
				.enter()
				.append('g')
				.attr('class','yAxis')
				.attr('transform',function(d){
					var yPos = (d+0.5) * yInterval;
					return 'translate('+(padding)+','+yPos+')';
				});

yAxis.append('line')
	.attr('x1',0)
	.attr('y1',padding)
	.attr('x2',padding)
	.attr('y2',padding)
	.attr('stroke',function(d){
		if (_.isEqual(d,0)) {
			return '#FFF';
		} else {
			return '#333';
		}
	});

yAxis.append('text')
	.text(function(d){
		if (_.isEqual(d,0)) {
			return 'Degree of Separation';
		} else {
			return d;
		}
	})
	// .attr('y',-padding)
	.attr('y',function(d){
		if (_.isEqual(d,0)) {
			// .attr('y',padding*7)
			// return yInterval/2;
			return padding*3.5;
		} else {
			return 0;
		}
	})
	.attr('fill','#999');
//

var duration = 500;

// var detailYScale = function()

// var descriptionLengths = 
// var longestDescription = _.max(_.map(relationships,function(r){
// 	// return r.length;
// 	return {
// 		// sid : r.source,
// 		sname : r.s_name,
// 		// tid : r.target,
// 		tname : r.t_name,
// 		description : r.description,
// 		dlength : r.description.length
// 	};
// }),function(d){
// 	return d.dlength;
// });
// console.log(longestDescription);

var showDetail = function(d) {

	hideDetail();
	
	var keyNode = d;

	var dWidth = 960,
		dHeight = height;

	d3.select('.close')
		.on('click',function(){
			return hideDetail();
		});

	var detail = d3.select('#detail')
					.style('display','block')
					.on('click',function(){
						return hideDetail();
					})
				.append('svg')
					.on('click',function(){
						return d3.event.stopPropagation();
					})
				.attr('class','detail')
				.attr('width',dWidth)
				.attr('height',height);

				// .append('<div class="close">Close</div>');

	//get the node-related data
	var detailNodes = [d];
	var directLinks = _.union(_.where(relationships,{'source':d.id}),_.where(relationships,{'target':d.id}));
	//
	var directConnections = _.map(_.uniq(_.union(_.pluck(_.where(relationships,{'source':d.id}),'target'),_.pluck(_.where(relationships,{'target':d.id}),'source'))),function(id){
		// return _.first(_.where(nodes,{id:id}));
		return _.first(_.where(allNodes,{id:id}));
		
	});
	detailNodes = _.union(detailNodes,directConnections);
	// parent connections
	var parentNodes = [];
	if (d.pos.y > 1) {
		parentNodes = getParentNodes(parentNodes,directConnections,directLinks,d.pos.y);
	}
	//
	detailNodes = _.union(detailNodes,parentNodes);
	detailNodes = _.reject(detailNodes,function(d){
		return _.isUndefined(d);
	});
	detailNodes = _.sortBy(_.sortBy(_.uniq(detailNodes,function(d){return JSON.stringify(d);}),function(d){return -d.order;}),function(n){return n.pos.y});
	//
	detailNodes = _.map(detailNodes,function(n,i){
		var relObj = _.first(_.union(_.where(relationships,{'source':n.id,'target':d.id}),_.where(relationships,{'source':d.id,'target':n.id})));
		// var description = '';
		if (!_.isUndefined(relObj)) {
			n.description = relObj.description+' | Source: '+relObj['source document'];
		} else {
			n.description = '';
			// n.description = 'Source: '+relObj['source document'];
		}
		n.detailOrder = i;
		// console.log(description);
		return n;
	});
	//
	directLinks = _.uniq(directLinks,function(r){ if (r.source>r.target) { return r.source+'-'+r.target; } else { return r.target+'-'+r.source; }});
	directLinks = _.reject(directLinks,function(d){
		return (_.isUndefined(_.first(_.where(detailNodes,{id:d.source})))||_.isUndefined(_.first(_.where(detailNodes,{id:d.target}))));
	});
	//
	var dLinks = detail.selectAll('path.dLink')
					.data(directLinks)
					.enter()
					.append('path')
					.attr('class',function(d){
						return 'dLink ds-'+d.source+' dt-'+d.target;
					})
					.attr('fill','none')
					.attr('stroke','#CCC')
					.attr('stroke-width',2)
					.attr('stroke-opacity',0.5);

	dLinks.attr('d',function(d){

		// var l1 = nodeScale(d.spos);
		var sDetailOrder = _.first(_.where(detailNodes,{id:d.source})).detailOrder;
		var lx1 = padding*15;//l1.x;
		var ly1 = (height/(detailNodes.length+0.5)) * (sDetailOrder+0.5);//l1.y;

		// var l2 = nodeScale(d.tpos);
		var tDetailOrder = _.first(_.where(detailNodes,{id:d.target})).detailOrder;
		var lx2 = padding*15;//l2.x;
		var ly2 = (height/(detailNodes.length+0.5)) * (tDetailOrder+0.5);//l2.y;

		var dx = lx2 - lx1;
		var dy = ly2 - ly1;
		var dr = Math.sqrt(dx * dx + dy * dy);
		// console.log(dr);
		// var dr = 120;

		return 'M' + lx1 + ',' + ly1 + 'A' + dr + ',' + dr + ' 0 0,1 ' + lx2 + ',' + ly2;

	});


	//
	var dNodes = detail.selectAll('g.detailNode')
					.data(detailNodes)
					.enter()
					.append('g')
					.attr('class','detailNode')
					// .attr('cursor','pointer')
					.attr('cursor',function(d){
						if (_.isEqual(_.indexOf(featured,d.id),-1)) {
							return null;
						} else {
							return 'pointer';
						}
					})
					.attr('opacity',function(d){
						var linkDistance = Math.abs(d.pos.y - keyNode.pos.y);
						return 1-(linkDistance*0.15);
					});

	dNodes.append('path')
		.attr('d',
			d3.svg.symbol()
			.size(function(d){
				if (_.isEqual(d.type,'Fund')) {
					return 250;
				} else {
					return 350;
				}
			})
			.type(function(d){return symbolScale(d.type);})
		).attr('fill',function(d){
			if (_.isEqual(d.id,keyNode.id)) {
				return '#CDE';
			} else if (_.isEqual(_.indexOf(featured,d.id),-1)) {
				return '#999';
			} else {
				return '#333';
			}
		})
		.attr('stroke','#333');

	var lastRank = null;
	dNodes.append('text')
		.attr('class','rank')
		.attr('x',padding*-9.5)
		.attr('y',function(d){
			if (_.isEqual(d.pos.y,0)) {
				return padding*-1.5;
			} else {
				return 0;
			}
		})
		// .attr('y',padding*0.5)
		.attr('fill','#333')
		.attr('font-size',10)
		.text(function(d){
			if (!_.isEqual(lastRank,d.pos.y)) {
				lastRank = d.pos.y;
				if (_.isEqual(lastRank,0)) {
					return 'Degree of Separation';
				} else {
					return lastRank;
				}
			} else {
				return '';
			}
		});
		// .call(wrap,25);

	var lastLineRank = null;
	dNodes.append('line')
		.attr('class','rank')
		.attr('x1',padding*-9.5)
		.attr('y1',padding*-1.5)
		.attr('x2',function(d){
			if (!_.isEqual(lastLineRank,d.pos.y)) {
				lastLineRank = d.pos.y;
				if (_.isEqual(lastLineRank,0)) {
					return padding*-9.5;
				} else {
					return dWidth-padding*20.5;
				}
			} else {
				return padding*-9.5;
			}
		})
		.attr('y2',padding*-1.5)
		.attr('stroke','#999')
		.attr('stroke-opacity',0.5);

	dNodes.append('text')
		.attr('class','name')
		.attr('x',padding*2)
		.attr('y',padding*0.25)
		.attr('fill','#333')
		.attr('font-size',14)
		.text(function(d){
			return d.name;
		});

	dNodes.append('text')
		.attr('class','description')
		// .attr('x',padding*2)
		// .attr('y',padding*3)
		.attr('font-size',11)
		.attr('transform',function(d){
			return 'translate('+(padding*2)+','+(padding*1.75)+')';
		})
		.text(function(d){
			return d.description;
		})
		.call(wrap,640);



	dNodes.attr('transform',function(d){
		var dyPos = (height/(detailNodes.length+0.5)) * (d.detailOrder+0.5);
		return 'translate('+(padding*15)+','+dyPos+')';
	});

	dNodes.on('mouseover',function(d) {
		detailHover(d,keyNode);
	});
	dNodes.on('mouseout',function(){
		detailHoverReset(keyNode);
	});
	dNodes.on('click',function(d){
		if (_.isEqual(_.indexOf(featured,d.id),-1)) {
			null;
		} else {
			showDetail(d);
		}
	});

};

//62
//Marcuard (now Hyposwiss)
//42
//Hyposwiss Private Bank Ltd.

var detailHover = function(d,keyNode) {
	var highlightNode = d;
	//
	d3.selectAll('.ds-'+highlightNode.id+', .dt-'+highlightNode.id)
		// .select('path')
		.transition()
		.duration(duration)
		.attr('stroke','#333');
		// .opacity(); //ds-'+d.source+' dt-'+d.target
	//
	d3.selectAll('g.detailNode')
		.transition()
		.duration(duration)
		.attr('opacity',function(d){
			var linkDistance = Math.abs(d.pos.y - highlightNode.pos.y);
			return 1-(linkDistance*0.15);
		});
	d3.selectAll('g.detailNode')
		.select('path')
		.transition()
		.duration(duration)
		.attr('fill',function(n){
			if (_.isEqual(_.indexOf(featured,n.id),-1)) {
				return '#999';
			} else if (_.isEqual(n.id,d.id)||_.isEqual(n.id,keyNode.id)) {
				return '#CDE';
			} else {
				return '#333';
			}
		});
};

var detailHoverReset = function(keyNode) {
	d3.selectAll('path.dLink')
		// .select('path')
		.transition()
		.duration(duration)
		.attr('stroke','#CCC');
	//
	d3.selectAll('g.detailNode')
		.transition()
		.duration(duration)
		.attr('opacity',function(d){
			var linkDistance = Math.abs(d.pos.y - keyNode.pos.y);
			return 1-(linkDistance*0.15);
		});
	d3.selectAll('g.detailNode')
		.select('path')
		.transition()
		.duration(duration)
		.attr('fill',function(d){
			if (_.isEqual(_.indexOf(featured,d.id),-1)) {
				return '#999';
			} else if (_.isEqual(d.id,keyNode.id)) {
				return '#CDE';
			} else {
				return '#333';
			}
		});
};

var getParentNodes = function(parentNodes,directConnections,directLinks,yPos) {
	yPos--;
	//
	directConnections = _.reject(directConnections,function(p){
		return _.isUndefined(p);
	});
	prevRowNodes = _.uniq(_.pluck(_.filter(directConnections,function(n){
		return _.isEqual(n.pos.y,yPos);
	}),'id'));
	//
	var prevRowConnections = [];
	_.forEach(prevRowNodes,function(p){
		var prevTargets = _.pluck(_.where(relationships,{'source':p}),'target');
		_.forEach(prevTargets,function(pt){
			// var ptNode = _.first(_.where(nodes,{id:pt}));
			var ptNode = _.first(_.where(allNodes,{id:pt}));
			if (!_.isUndefined(ptNode)) {
				if (_.isEqual(ptNode.pos.y,yPos-1)) {
					directLinks.push(_.first(_.where(relationships,{'source':p,'target':pt})));
					prevRowConnections.push(ptNode);
				}
			}
		});
		var prevSources = _.pluck(_.where(relationships,{'target':p}),'source');
		_.forEach(prevSources,function(ps){
			// var psNode = _.first(_.where(nodes,{id:ps}));
			var psNode = _.first(_.where(allNodes,{id:ps}));
			if (!_.isUndefined(psNode)) {
				if (_.isEqual(psNode.pos.y,yPos-1)) {
					directLinks.push(_.first(_.where(relationships,{'target':p,'source':ps})));
					prevRowConnections.push(psNode);
				}
			}
		});
	});
	//
	parentNodes = _.uniq(_.union(parentNodes,prevRowConnections),function(d){return JSON.stringify(d)});
	if (yPos > 0) {
		parentNodes = getParentNodes(parentNodes,prevRowConnections,directLinks,yPos);
	}
	//
	return parentNodes;
};

var hideDetail = function() {
	d3.select('#detail')
		.style('display','none');
	d3.select('svg.detail').remove();
};

var highlightLinks = function(d) {
	//
	d3.selectAll('g.node')
		.transition()
		.duration(duration)
		.attr('opacity',0.1);
	d3.selectAll('path.link')
		.transition()
		.duration(duration)
		.attr('stroke-opacity',0.1);
		//
		//
	d3.selectAll('#n-'+d.id)
		.select('path')
		// .select('circle')
		.transition()
		.duration(duration)
		.attr('stroke','#333')
		.attr('fill',function(d){
			if (_.isEqual(_.indexOf(featured,d.id),-1)) {
				// return '#333';
				return '#999';
			} else {
				return '#CDE';
			}
		});
		// .attr('fill','#CDE');
		//
	d3.selectAll('#n-'+d.id)
		.transition()
		.duration(duration)
		.attr('opacity',1);
	//
	//get connections
	var connectionString = '';
	var connectedNodes = _.uniq(_.union(_.pluck(_.where(relationships,{'source':d.id}),'target'),_.pluck(_.where(relationships,{'target':d.id}),'source')));
	_.forEach(connectedNodes,function(c,i){
		connectionString += '#n-'+c;
		if (i < connectedNodes.length-1) {
			connectionString += ', ';
		}
	});
	//
	d3.selectAll(connectionString)
		.transition()
		.duration(duration)
		.attr('opacity',0.75);
	//
	d3.selectAll('.s-'+d.id+', .t-'+d.id)
		.transition()
		.duration(duration)
		.attr('stroke-opacity',0.75);
	//
	// getting indirect links to BLMIS
	// if (d.pos.y > 1) {
		climbUpNodes(connectedNodes,d.pos.y,true);
		climbUpNodes(connectedNodes,d.pos.y,false);
	// }
	//
};

var climbUpNodes = function(connectedNodes,yPos,isUp) {
	if (isUp) {
		yPos--;
	} else {
		yPos++;
	}
	var nextPos = yPos;
	if (isUp) {
		nextPos--;
	} else {
		nextPos++;
	}
	var prevRowNodes = _.pluck(_.filter(nodes,function(n){
		if (!_.isEqual(_.indexOf(connectedNodes,n.id),-1)&&_.isEqual(n.pos.y,yPos)) {
		// if (!_.isEqual(_.indexOf(connectedNodes,n.id),-1)) {
			return true;
		} else {
			return false;
		}
	}),'id');
	// var prevRowNodes = _.pluck(_.reject(nodes,function(n){ return _.isEqual(_.indexOf(connectedNodes,n.id),-1); }),'id');
	//
	// highlight prev row nodes
	var nodeConnectionString = '';
	_.forEach(prevRowNodes,function(p,i){
		nodeConnectionString += '#n-'+p;
		if (i < prevRowNodes.length-1) {
			nodeConnectionString += ', ';
		}
	});
	if (!_.isEmpty(nodeConnectionString)) {
		d3.selectAll(nodeConnectionString)
			.transition()
			.duration(duration)
			.attr('opacity',0.75);
	}
	//
	var prevLinks = [];
	var prevRowConnections = _.map(prevRowNodes,function(p){
		var prevTargets = _.pluck(_.where(relationships,{'source':p}),'target');
		var pSid = '.s-'+p;
		_.forEach(prevTargets,function(pt){
			var ptNode = _.first(_.where(nodes,{id:pt}));
			// if (_.isEqual(yPos-1,ptNode.pos.y)) {
			if (!_.isUndefined(ptNode)) {
				if (_.isEqual(nextPos,ptNode.pos.y)) {
					prevLinks.push({s:pSid,t:'.t-'+pt});
				}
			}
		});
		var prevSources = _.pluck(_.where(relationships,{'target':p}),'source');
		var pTid = '.t-'+p;
		_.forEach(prevSources,function(ps){
			var psNode = _.first(_.where(nodes,{id:ps}));
			// if (_.isEqual(yPos-1,psNode.pos.y)) {
			if (!_.isUndefined(psNode)) {
				if (_.isEqual(nextPos,psNode.pos.y)) {
					prevLinks.push({s:'.s-'+ps,t:pTid});
				}
			}
		});
		return _.uniq(_.union(prevTargets,prevSources));
	});
	prevRowConnections = _.uniq(_.flatten(prevRowConnections));
	//
	// highlight prev row connections, up only
	var linkConnectionString = '';
	_.forEach(prevLinks,function(p,i){
		linkConnectionString += 'path'+p.s+p.t;
		if (i < prevLinks.length-1) {
			linkConnectionString += ', ';
		}
	});
	//
	if (!_.isEmpty(linkConnectionString)) {
		d3.selectAll(linkConnectionString)
			.transition()
			.duration(duration)
			.attr('stroke-opacity',0.75);
	}
	//
	var maxyPos = _.max(_.pluck(_.pluck(nodes,'pos'),'y'));
	if ((isUp && yPos > 0)||(!isUp && yPos < maxyPos)) {
		climbUpNodes(prevRowConnections,yPos,isUp);
	}
};

var resetLinks = function(d) {
	//
	d3.selectAll('#n-'+d.id)
		.select('path')
		// .select('circle')
		.transition()
		.duration(duration)
		// .attr('fill','#333')
		.attr('fill',function(d){
			if (_.isEqual(_.indexOf(featured,d.id),-1)) {
				return '#999';
			} else {
				return '#333';
			}
		})
		.attr('stroke','none');
	//
	d3.selectAll('g.node')
		.transition()
		.duration(duration)
		.attr('opacity',1);
	d3.selectAll('path.link')
		.transition()
		.duration(duration)
		.attr('stroke-opacity',0.5);
};
