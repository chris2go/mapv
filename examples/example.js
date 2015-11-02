// 创建Map实例
var bmap = new BMap.Map('map', {
    enableMapClick: false,
    minZoom: 4
    //vectorMapLevel: 3
});

//图层控制

function PointCheck(){
if(document.getElementById('isPointChecked').checked == false){
layerpoint.setMapv(null);
}
else{
layerpoint.setMapv(mapv);
}
}

function PolylineCheck(){
if(document.getElementById('isPolylineChecked').checked == false){
layerpolyline.setMapv(null);
}
else{
layerpolyline.setMapv(mapv);
}
}

function PolygonCheck(){
console.log(document.getElementById('isPolygonChecked').checked);
if(document.getElementById('isPolygonChecked').checked == false){
layerpolygon.setMapv(null);
}
else{
layerpolygon.setMapv(mapv);
}
}


function CellCheck(){
if(document.getElementById('isCellChecked').checked == false){
layercell.setMapv(null);
}
else{
layercell.setMapv(mapv);
}
}

function DtCheck(){
if(document.getElementById('isDtChecked').checked == false){
layerdt.setMapv(null);
}
else{
layerdt.setMapv(mapv);
}
}


function VoronoiCheck(){
if(document.getElementById('isVoronoiChecked').checked == false){
$('.SvgOverlay svg').css('opacity',0);
}
else{
$('.SvgOverlay svg').css('opacity',1);
}
}

//
function changeMapStyle(style){ 
bmap.setMapStyle({style:style});
if (style.indexOf('1')>0){
if (style == 'mydefault11'){
bmap.setMapStyle({styleJson:mydefault11}); }
if (style == 'mydefault1'){
bmap.setMapStyle({styleJson:mydefault1}); }
if (style == 'normal1'){
bmap.setMapStyle({styleJson:normal1}); }
if (style == 'dark1'){
bmap.setMapStyle({styleJson:dark1}); }
if (style == 'bluish1'){
bmap.setMapStyle({styleJson:bluish1}); }
if (style == 'grayscale1'){
bmap.setMapStyle({styleJson:grayscale1}); }
if (style == 'hardedge1'){
bmap.setMapStyle({styleJson:hardedge1}); }
obj = document.getElementById('stylelist');
for(i=0;i<obj.length;i++){
if(obj[i].value==style)
 obj[i].selected = true;
}
}} 
bmap.enableScrollWheelZoom(); // 启用滚轮放大缩小

var normal1 = [
          {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]

var dark1 = [
          {
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#212121"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#2b2b2b"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -42,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -77,
                              "saturation": -94
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -52
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#313131"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#8b8787"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -75,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -65
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -40
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#8b8787",
                              "weight": "1",
                              "lightness": -29
                    }
          },
          {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]

var bluish1 = [
          {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": {
                              "hue": "#007fff",
                              "saturation": 89
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#ffffff"
                    }
          },
          {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]


var grayscale1 = [
          {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": {
                              "lightness": 10,
                              "saturation": -100
                    }
          },
          {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]

var hardedge1 = [
          {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                              "lightness": 100,
                              "saturation": -100
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "lightness": 47
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": 28
                    }
          },
          {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "lightness": 82
                    }
          },
          {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "lightness": -76
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                              "lightness": 63,
                              "saturation": -100
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "lightness": 80,
                              "saturation": 1
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "lightness": -75,
                              "saturation": -100
                    }
          },
          {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]


var mydefault1 = [{
        featureType: 'water',
        elementType: 'all',
        stylers: {
            color: '#044161'
        }
    }, {
        featureType: 'land',
        elementType: 'all',
        stylers: {
            color: '#091934'
        }
    }, {
        featureType: 'boundary',
        elementType: 'geometry',
        stylers: {
            color: '#064f85'
        }
    }, {
        featureType: 'railway',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            color: '#004981'
        }
    }, {
        featureType: 'highway',
        elementType: 'geometry.fill',
        stylers: {
            color: '#005b96',
            lightness: 1
        }
    }, {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    }, {
        featureType: 'arterial',
        elementType: 'geometry',
        stylers: {
            color: '#004981',
            lightness: -39
        }
    }, {
        featureType: 'arterial',
        elementType: 'geometry.fill',
        stylers: {
            color: '#00508b'
        }
    }, {
        featureType: 'poi',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'green',
        elementType: 'all',
        stylers: {
            color: '#056197',
            visibility: 'off'
        }
    }, {
        featureType: 'subway',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'manmade',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'local',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'arterial',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'boundary',
        elementType: 'geometry.fill',
        stylers: {
            color: '#029fd4'
        }
    }, {
        featureType: 'building',
        elementType: 'all',
        stylers: {
            color: '#1a5787'
        }
    }, {
        featureType: 'label',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#ffffff'
        }
    }, {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#1e1c1c'
        }
    },{
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "color": "#000000",
                              "visibility": "off"
                    }
          }]
          
          
          
var mydefault11 = [{
        featureType: 'water',
        elementType: 'all',
        stylers: {
            color: '#044161'
        }
    }, {
        featureType: 'land',
        elementType: 'all',
        stylers: {
            color: '#091934'
        }
    }, {
        featureType: 'boundary',
        elementType: 'geometry',
        stylers: {
            color: '#064f85'
        }
    }, {
        featureType: 'railway',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'highway',
        elementType: 'geometry',
        stylers: {
            color: '#004981'
        }
    }, {
        featureType: 'highway',
        elementType: 'geometry.fill',
        stylers: {
            color: '#005b96',
            lightness: 1
        }
    }, {
        featureType: 'highway',
        elementType: 'labels',
        stylers: {
            visibility: 'on'
        }
    }, {
        featureType: 'arterial',
        elementType: 'geometry',
        stylers: {
            color: '#004981',
            lightness: -39
        }
    }, {
        featureType: 'arterial',
        elementType: 'geometry.fill',
        stylers: {
            color: '#00508b'
        }
    }, {
        featureType: 'poi',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'green',
        elementType: 'all',
        stylers: {
            color: '#056197',
            visibility: 'off'
        }
    }, {
        featureType: 'subway',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'manmade',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'local',
        elementType: 'all',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'arterial',
        elementType: 'labels',
        stylers: {
            visibility: 'off'
        }
    }, {
        featureType: 'boundary',
        elementType: 'geometry.fill',
        stylers: {
            color: '#029fd4'
        }
    }, {
        featureType: 'building',
        elementType: 'all',
        stylers: {
            color: '#1a5787'
        }
    }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: {
            color: '#ffffff'
        }
    }, {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: {
            color: '#1e1c1c'
        }
    },{
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": {
                              "color": "#000000",
                              "visibility": "off"
                    }
          }]
bmap.getContainer().style.background = '#081734';


(function(a){a.tools=a.tools||{version:'v1.2.7'};var b;b=a.tools.rangeinput={conf:{min:0,max:100,step:'any',steps:0,value:0,precision:undefined,vertical:0,keyboard:!0,progress:!1,speed:100,css:{input:'range',slider:'slider',progress:'progress',handle:'handle'}}};var c,d;a.fn.drag=function(b){document.ondragstart=function(){return!1},b=a.extend({x:!0,y:!0,drag:!0},b),c=c||a(document).on('mousedown mouseup',function(e){var f=a(e.target);if(e.type=='mousedown'&&f.data('drag')){var g=f.position(),h=e.pageX-g.left,i=e.pageY-g.top,j=!0;
c.on('mousemove.drag',function(a){var c=a.pageX-h,e=a.pageY-i,g={};b.x&&(g.left=c),b.y&&(g.top=e),j&&(f.trigger('dragStart'),j=!1),b.drag&&f.css(g),f.trigger('drag',[e,c]),d=f}),e.preventDefault()}else try{d&&d.trigger('dragEnd')}finally{c.off('mousemove.drag'),d=null}});return this.data('drag',!0)};function e(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}function f(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function g(a){var b=a.data('events');return b&&b.onSlide}function h(b,c){var d=this,h=c.css,i=a("<div><div/><a href='#'/></div>").data('rangeinput',d),j,k,l,m,n;b.before(i);
var o=i.addClass(h.slider).find('a').addClass(h.handle),p=i.find('div').addClass(h.progress);a.each('min,max,step,value'.split(','),function(a,d){var e=b.attr(d);parseFloat(e)&&(c[d]=parseFloat(e,10))});var q=c.max-c.min,r=c.step=='any'?0:c.step,s=c.precision;s===undefined&&(s=r.toString().split('.'),s=s.length===2?s[1].length:0);if(b.attr('type')=='range'){var t=b.clone().wrap('<div/>').parent().html(),u=a(t.replace(/type/i,'type=text data-orig-type'));u.val(c.value),b.replaceWith(u),b=u}b.addClass(h.input);var v=a(d).add(b),w=!0;function x(a,f,g,h){g===undefined?g=f/m*q:h&&(g-=c.min),r&&(g=Math.round(g/r)*r);if(f===undefined||r)f=g*m/q;if(isNaN(g))return d;f=Math.max(0,Math.min(f,m)),g=f/m*q;if(h||!j)g+=c.min;j&&(h?f=m-f:g=c.max-g),g=e(g,s);
var i=a.type=='click';if(w&&k!==undefined&&!i){a.type='onSlide',v.trigger(a,[g,f]);if(a.isDefaultPrevented())return d}var l=i?c.speed:0,t=i?function(){a.type='change',v.trigger(a,[g])}:null;j?(o.animate({top:f},l,t),c.progress&&p.animate({height:m-f+o.height()/2},l)):(o.animate({left:f},l,t),c.progress&&p.animate({width:f+o.width()/2},l)),k=g,n=f,b.val(g);return d}a.extend(d,{getValue:function(){return k},setValue:function(b,c){y();return x(c||a.Event('api'),undefined,b,!0)},getConf:function(){return c},getProgress:function(){return p},getHandle:function(){return o},getInput:function(){return b},step:function(b,e){e=e||a.Event();var f=c.step=='any'?1:c.step;d.setValue(k+f*(b||1),e)},stepUp:function(a){return d.step(a||1)},stepDown:function(a){return d.step(-a||-1)}}),a.each('onSlide,change'.split(','),function(b,e){a.isFunction(c[e])&&a(d).on(e,c[e]),d[e]=function(b){b&&a(d).on(e,b);
return d}}),o.drag({drag:!1}).on('dragStart',function(){y(),w=g(a(d))||g(b)}).on('drag',function(a,c,d){if(b.is(':disabled'))return!1;x(a,j?c:d)}).on('dragEnd',function(a){a.isDefaultPrevented()||(a.type='change',v.trigger(a,[k]))}).click(function(a){return a.preventDefault()}),i.click(function(a){if(b.is(':disabled')||a.target==o[0])return a.preventDefault();y();var c=j?o.height()/2:o.width()/2;x(a,j?m-l-c+a.pageY:a.pageX-l-c)}),c.keyboard&&b.keydown(function(c){if(!b.attr('readonly')){var e=c.keyCode,f=a([75,76,38,33,39]).index(e)!=-1,g=a([74,72,40,34,37]).index(e)!=-1;if((f||g)&&!(c.shiftKey||c.altKey||c.ctrlKey)){f?d.step(e==33?10:1,c):g&&d.step(e==34?-10:-1,c);return c.preventDefault()}}}),b.blur(function(b){var c=a(this).val();c!==k&&d.setValue(c,b)}),a.extend(b[0],{stepUp:d.stepUp,stepDown:d.stepDown});
function y(){j=c.vertical||f(i,'height')>f(i,'width'),j?(m=f(i,'height')-f(o,'height'),l=i.offset().top+m):(m=f(i,'width')-f(o,'width'),l=i.offset().left)}function z(){y(),d.setValue(c.value!==undefined?c.value:c.min)}z(),m||a(window).load(z)}a.expr[':'].range=function(b){var c=b.getAttribute('type');return c&&c=='range'||a(b).filter('input').data('rangeinput')},a.fn.rangeinput=function(c){if(this.data('rangeinput'))return this;c=a.extend(!0,{},b.conf,c);var d;this.each(function(){var b=new h(a(this),a.extend(!0,{},c)),e=b.getInput().data('rangeinput',b);d=d?d.add(e):e});return d?d:this}})(jQuery);
$(document).ready(function(){$(':range').rangeinput({progress: true});$('ul.expmenu li > div.header').click(function(){var arrow = $(this).find('span.arrow');
if(arrow.hasClass('up')){arrow.removeClass('up');arrow.addClass('down');}else 
if(arrow.hasClass('down')){arrow.removeClass('down');arrow.addClass('up');}$(this).parent().find('ul.menu').slideToggle();});});
