!function t(e,o,r){function i(p,s){if(!o[p]){if(!e[p]){var l="function"==typeof require&&require;if(!s&&l)return l(p,!0);if(n)return n(p,!0);var a=new Error("Cannot find module '"+p+"'");throw a.code="MODULE_NOT_FOUND",a}var c=o[p]={exports:{}};e[p][0].call(c.exports,function(t){var o=e[p][1][t];return i(o?o:t)},c,c.exports,t,e,o,r)}return o[p].exports}for(var n="function"==typeof require&&require,p=0;p<r.length;p++)i(r[p]);return i}({1:[function(t,e){function o(t){this.lotID=t}var r=t("./Helpers");o.prototype.price="125,000+",o.prototype.squareFeet=1e3,o.prototype.totalBedrooms=1,o.prototype.totalBathrooms=1.5,o.prototype.totalFloors=1,o.prototype.basement=o.prototype.livingRoom=o.prototype.kitchen=o.prototype.diningRoom="yes",o.prototype.setHomeOptions=function(t){return t=t||{},this.price=t.price||this.price,this.squareFeet=t.squareFeet||this.squareFeet,this.totalBedrooms=t.totalBedrooms||this.totalBedrooms,this.totalBathrooms=t.totalBathrooms||this.totalBathrooms,this.totalFloors=t.totalFloors||this.totalFloors,this.pool=void 0===t.pool?"no":t.pool,this.floorType=void 0===t.floorType?"no":t.floorType,this.kitchenCounters=void 0===t.kitchenCounters?"no":t.kitchenCounters,this},o.prototype.displayHomeOptions=function(){if(this.lotID&&"undefined"!=typeof this.lotID){var t=document.getElementById("allHomes"),e=document.createDocumentFragment(),o=document.createElement("article"),i=document.createElement("div"),n=document.createElement("ul");o.setAttribute("class","col-md-4");for(homeOption in this)if("function"!=typeof this[homeOption]){if("lotID"===homeOption){var p=document.createElement("h2");p.setAttribute("class","center-text"),p.innerHTML="House#: "+this[homeOption],$(p).prependTo(i)}else if("price"===homeOption){var s=document.createElement("div");s.setAttribute("class","center-text price"),s.innerHTML="Price: $"+this[homeOption],i.appendChild(s)}else{var l=r.propercaseOptionName(homeOption);li=document.createElement("li"),li.innerHTML=l+": "+this[homeOption],n.appendChild(li)}o.appendChild(i),o.appendChild(n),e.appendChild(o),t.appendChild(e)}return console.log(this),this}throw new Error("lotID is not defined")},e.exports=o},{"./Helpers":2}],2:[function(t,e){e.exports={propercaseOptionName:function(t){var e=/[A-Z]/,o=t.match(e),r=t.replace(o," "+o),i=r.charAt(0).toUpperCase()+r.slice(1);return i}}},{}],3:[function(t){function e(t){i.call(this,t),this.houseType="Bungalow"}function o(t,e){i.call(this,t,e),this.windowType=e||"Double pane",this.houseType="Colonial",this.totalFloors=2}function r(t,e){o.call(this,t,e),this.windowType=e||"Floor-to-ceiling",this.jacuzzi="yes",this.houseType="Mansion",this.totalFloors=5}var i=t("./Blueprint");e.prototype=Object.create(i.prototype),e.prototype.constructor=e;var n=new e(987);n.setHomeOptions(),n.displayHomeOptions(),o.prototype=Object.create(i.prototype),o.prototype.constructor=o;var p=new o(423);p.setHomeOptions().displayHomeOptions(),r.prototype=Object.create(o.prototype),r.prototype.constructor=r;var s=new r(657);s.setHomeOptions().displayHomeOptions()},{"./Blueprint":1}]},{},[1,2,3]);