!function t(o,e,r){function n(p,s){if(!e[p]){if(!o[p]){var l="function"==typeof require&&require;if(!s&&l)return l(p,!0);if(i)return i(p,!0);var a=new Error("Cannot find module '"+p+"'");throw a.code="MODULE_NOT_FOUND",a}var h=e[p]={exports:{}};o[p][0].call(h.exports,function(t){var e=o[p][1][t];return n(e?e:t)},h,h.exports,t,o,e,r)}return e[p].exports}for(var i="function"==typeof require&&require,p=0;p<r.length;p++)n(r[p]);return n}({1:[function(t,o){function e(){}e.prototype.squareFeet=1e3,e.prototype.totalBedrooms=1,e.prototype.totalBathrooms=1.5,e.prototype.totalFloors=1,e.prototype.basement=e.prototype.livingRoom=e.prototype.kitchen=e.prototype.diningRoom=!0,e.prototype.setHomeOptions=function(t){t=t||{},this.pool=void 0===t.pool?!1:t.pool,this.floorType=void 0===t.floorType?"tile":t.floorType,this.kitchenCounters=void 0===t.kitchenCounters?"formica":t.kitchenCounters,this.squareFeet=t.squareFeet||this.squareFeet,this.totalBedrooms=t.totalBedrooms||this.totalBedrooms,this.totalBathrooms=t.totalBathrooms||this.totalBathrooms,this.totalFloors=t.totalFloors||this.totalFloors},e.prototype.displayHomeOptions=function(){var t=document.getElementById("allHomes"),o=document.createDocumentFragment(),e=document.createElement("article"),r=document.createElement("ul");$(e).attr({"class":"col-md-4",style:"min-height: 300px;"});for(homeOption in this){if("function"!=typeof this[homeOption]&&"boolean"!=typeof this[homeOption])if("lotID"===homeOption){var n=document.createElement("h2");n.innerHTML="House#: "+this[homeOption],e.appendChild(n)}else li=document.createElement("li"),r.appendChild(li),li.innerHTML=homeOption+": "+this[homeOption];e.appendChild(r),o.appendChild(e),t.appendChild(o)}return this},o.exports=e},{}],2:[function(t){function o(t){e.call(this,t),this.houseType="Bungalow",this.price="$125,000+"}var e=t("./Blueprint"),r=new e(4564);r.setHomeOptions({pool:!0,kitchenCounters:"granite",squareFeet:2500,totalBathrooms:3}),r.displayHomeOptions(),o.prototype=new e,o.prototype.constructor=o;var n=new o(987);n.displayHomeOptions()},{"./Blueprint":1}]},{},[1,2]);