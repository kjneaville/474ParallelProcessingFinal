$(document).ready(function() {
    var rectDemo = d3.select("#basicAnim")
        .append("svg:svg")
        .attr("width", 600)
        .attr("height", 800);

    rectDemo.append("svg:rect")
        .attr("x", 100)
        .attr("y", 100)
        .attr("height", 100)
        .attr("width", 170);

    rectDemo.append("svg:rect")
        .attr("x", 340)
        .attr("y", 100)
        .attr("height", 100)
        .attr("width", 170);

    rectDemo.append("svg:rect")
        .attr("x", 100)
        .attr("y", 300)
        .attr("height", 100)
        .attr("width", 70);

    rectDemo.append("svg:rect")
        .attr("x", 210)
        .attr("y", 300)
        .attr("height", 100)
        .attr("width", 70);

    rectDemo.append("svg:rect")
        .attr("x", 390)
        .attr("y", 300)
        .attr("height", 100)
        .attr("width", 70);
    
    rectDemo.append("svg:rect")
        .attr("x", 310)
        .attr("y", 100)
        .attr("height", 300)
        .attr("width", 5);

    var flow;
    var flow2;
    var flow3;
    var bar;
    var bar2;
    var bar3;

    var foo = null;
    var foo2 = null;

    flow = document.getElementById("flowDiv");
    flow2 = document.getElementById("flowDiv2");
    flow3 = document.getElementById("flowDiv3");
    bar = document.getElementById("barDiv");
    bar2 = document.getElementById("barDiv2");
    bar3 = document.getElementById("barDiv3");
    flow.style.left = 110 + 'px';
    flow2.style.left = 220 + 'px';
    flow3.style.left = 400 + 'px';
    bar.style.left = 165 + 'px';
    bar2.style.left = 400 + 'px';
    bar3.style.left = 165 + 'px';
    flow.style.top = 300 + 'px';
    flow2.style.top = 300 + 'px';
    flow3.style.top = 300 + 'px';
    bar.style.top = 150 + 'px';
    bar2.style.top = 150 + 'px';
    bar3.style.top = 240 + 'px';
    bar.style.opacity = "0.1";
    bar2.style.opacity = "0.1";
    bar3.style.opacity = "0.6";
    doUpHelper();

    foo = document.getElementById("testDiv");
    foo.style.left = 700  + 'px';
    foo2 = document.getElementById("testDiv2");
    foo2.style.left = 700 + 'px';
    foo.style.top = 1300 + 'px';
    foo2.style.top = 1300 + 'px';
    doMoveHelper();

    function doMoveHelper() {
        foo.style.left = parseInt(foo.style.left) + 1 + 'px';
        foo2.style.left = parseInt(foo2.style.left) + 1 + 'px';
        if (parseInt(foo.style.left) < 1100) {
            setTimeout(doMoveHelper, 20);
        } else {
            clearTimeout(doMoveHelper);
        }
    }

    function doUpHelper() {
        flow.style.top = parseInt(flow.style.top) + 1 + 'px';
        flow2.style.top = parseInt(flow2.style.top) + 1 + 'px';
        flow3.style.top = parseInt(flow3.style.top) + 1 + 'px';
        bar.style.top = parseInt(bar.style.top) + 1 + 'px';
        bar.style.opacity = "" + (parseInt(bar.style.top) - 150) / 200;
        bar2.style.opacity = "" + (parseInt(bar2.style.top) - 150) / 200 ;
        bar3.style.opacity = "" + (parseInt(bar3.style.top) - 150) / 200 ;
        if (parseInt(bar.style.top) > 330) {
            bar.style.opacity = "0.1";
            bar.style.top = 150 + 'px';
        }
        bar2.style.top = parseInt(bar2.style.top) + 1 + 'px';
        bar3.style.top = parseInt(bar3.style.top) + 1 + 'px';
        if (parseInt(bar3.style.top) > 330) {
            bar3.style.opacity = "0.1";
            bar3.style.top = 150 + 'px';
        }
        if (parseInt(flow.style.top) < 480) {
            setTimeout(doUpHelper, 20);
        } else {
            flow.style.top = 300 + 'px';
            flow2.style.top = 300 + 'px';
            flow3.style.top = 300 + 'px';
            bar.style.top = 150 + 'px';
            bar2.style.top = 150 + 'px';
            clearTimeout(doUpHelper);
            doUpHelper();
        }
    }
});

var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Vendors of Parallel Computing Clusters",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "A handful of well known vendors produce large parallel computers as clusters of hardware. Source: Top500.org",
            "color": "black",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 590,
        "pieOuterRadius": "90%"
    },
    "data": {
        "content": [
            {
                "label": "HP",
                "value": 179,
                "color": "#2484c1"
            },
            {
                "label": "IBM",
                "value": 153,
                "color": "#0c6197"
            },
            {
                "label": "Cray Inc.",
                "value": 62,
                "color": "#4daa4b"
            },
            {
                "label": "SGI",
                "value": 23,
                "color": "#90c469"
            },
            {
                "label": "Bull",
                "value": 18,
                "color": "#daca61"
            },
            {
                "label": "Dell",
                "value": 9,
                "color": "#e4a14b"
            },
            {
                "label": "Fujitsu",
                "value": 8,
                "color": "#e98125"
            },
            {
                "label": "NUDT",
                "value": 5,
                "color": "#cb2121"
            },
            {
                "label": "RSC Group",
                "value": 4,
                "color": "#830909"
            },
            {
                "label": "Atipa",
                "value": 3,
                "color": "#923e99"
            },
            {
                "label": "NEC",
                "value": 3,
                "color": "#ae83d5"
            },
            {
                "label": "MEGWARE",
                "value": 3,
                "color": "#bf273e"
            },
            {
                "label": "Itautec",
                "value": 2,
                "color": "#ce2aeb"
            },
            {
                "label": "T-Platforms",
                "value": 2,
                "color": "#bca44a"
            },
            {
                "label": "Hitachi",
                "value": 2,
                "color": "#618d1b"
            },
            {
                "label": "Oracle",
                "value": 2,
                "color": "#1ee67b"
            },
            {
                "label": "Self-made",
                "value": 2,
                "color": "#b0ec44"
            },
            {
                "label": "ClusterVision",
                "value": 2,
                "color": "#a4a0c9"
            },
            {
                "label": "Dawning",
                "value": 2,
                "color": "#322849"
            },
            {
                "label": "Others (1 only)",
                "value": 16,
                "color": "#86f71a"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "label-value1",
            "pieDistance": 32
        },
        "inner": {
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {}
});
