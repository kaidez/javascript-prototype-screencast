!function t(o,e,r){function i(p,s){if(!e[p]){if(!o[p]){var l="function"==typeof require&&require;if(!s&&l)return l(p,!0);if(n)return n(p,!0);var a=new Error("Cannot find module '"+p+"'");throw a.code="MODULE_NOT_FOUND",a}var c=e[p]={exports:{}};o[p][0].call(c.exports,function(t){var e=o[p][1][t];return i(e?e:t)},c,c.exports,t,o,e,r)}return e[p].exports}for(var n="function"==typeof require&&require,p=0;p<r.length;p++)i(r[p]);return i}({1:[function(t,o){function e(t){this.lotID=t}var r=t("./Helpers");e.prototype.price="125,000+",e.prototype.squareFeet=1e3,e.prototype.totalBedrooms=1,e.prototype.totalBathrooms=1.5,e.prototype.totalFloors=1,e.prototype.basement=e.prototype.livingRoom=e.prototype.kitchen=e.prototype.diningRoom="yes",e.prototype.setHomeOptions=function(t){t=t||{},this.price=t.price||this.price,this.squareFeet=t.squareFeet||this.squareFeet,this.totalBedrooms=t.totalBedrooms||this.totalBedrooms,this.totalBathrooms=t.totalBathrooms||this.totalBathrooms,this.totalFloors=t.totalFloors||this.totalFloors,this.pool=void 0===t.pool?"no":t.pool,this.floorType=void 0===t.floorType?"Plastic Tile":t.floorType,this.kitchenCounters=void 0===t.kitchenCounters?"Formica":t.kitchenCounters},e.prototype.displayHomeOptions=function(){if(!this.lotID||"undefined"==typeof this.lotID)throw new Error("lotID is not defined");var t=document.getElementById("allHomes"),o=document.createDocumentFragment(),e=document.createElement("article"),i=document.createElement("div"),n=document.createElement("ul");e.setAttribute("class","col-md-4");for(homeOption in this)if("function"!=typeof this[homeOption]){if("lotID"===homeOption){var p="House#: "+this[homeOption],s=$("<h2 class='center-text'>"+p+"</h2>");$(s).prependTo(i)}else if("price"===homeOption){var l="Price: $"+this[homeOption],a=$("<div class='center-text price'>"+l+"</div>");$(a).appendTo(i)}else{var c=r.propercaseOptionName(homeOption);li=$("<li>"+c+": "+this[homeOption]+"</li>"),$(li).appendTo(n)}e.appendChild(i),e.appendChild(n),o.appendChild(e),t.appendChild(o)}},o.exports=e},{"./Helpers":2}],2:[function(t,o){o.exports={propercaseOptionName:function(t){var o=/[A-Z]/g,e=t.match(o),r=t.replace(e," "+e),i=r.charAt(0).toUpperCase()+r.slice(1);return i}}},{}],3:[function(t){function o(t){i.call(this,t),this.houseType="Bungalow"}function e(t){i.call(this,t),this.windowType="Floor To Ceiling",this.houseType="Colonial",this.totalFloors=2}function r(t,o){e.call(this,t,o),this.jacuzzi="yes",this.houseType="Mansion",this.windowType="French Doors",this.totalFloors=5}var i=t("./Blueprint");o.prototype=Object.create(i.prototype),o.prototype.constructor=o;var n=new o(987);n.setHomeOptions(),n.displayHomeOptions(),e.prototype=Object.create(i.prototype),e.prototype.constructor=e,r.prototype=Object.create(e.prototype),r.prototype.constructor=r},{"./Blueprint":1}]},{},[1,2,3]);