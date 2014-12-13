/**
 * Created by kenkozheng on 2014/8/21.
 */

var Hero = cc.Sprite.extend({

    _animation:null,
    state:0,
    _fast:false,

    ctor:function () {

    	this._super("#santa.png"); // declare the santa object  	
  
        this._animation = new cc.Animation();
    
        this._animation.setDelayPerUnit(1/20);
        var action = cc.animate(this._animation).repeatForever();
        this.runAction(action);
        this._fast = false;
        this._animation.retain();

        return true;
    },

    toggleSpeed:function(fast) {
        if(fast == this._fast)
            return;
        this._fast = fast;

        this.stopAllActions();
        if(!fast)
            this._animation.setDelayPerUnit(1/20);
        else
            this._animation.setDelayPerUnit(1/60);
        var action = cc.animate(this._animation).repeatForever();
        this.runAction(action);
    },

    onExit: function () {
        this._super();
        this._animation.release();
    }

});