define(["entity"],function(e){var t=e.extend({init:function(e,t,n){this._super(e,t),this.itemKind=Types.getKindAsString(t),this.type=n,this.wasDropped=!1},hasShadow:function(){return!0},onLoot:function(e){this.type==="weapon"?e.switchWeapon(this.itemKind):this.type==="armor"&&e.armorloot_callback(this.itemKind)},getSpriteName:function(){return"item-"+this.itemKind},getLootMessage:function(){return this.lootMessage}});return t});