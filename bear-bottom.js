
  (function () {
    var lib = lib || {};
    var cjs = createjs || {};
    var ss = ss || {};
    var images = images || {};
    var AdobeAn = AdobeAn || {};

    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
      {name:"footer_bear_Canvas_atlas_", frames: [[499,27,11,18],[379,691,66,78],[233,676,71,80],[479,27,18,18],[0,676,84,75],[336,0,141,126],[225,190,233,204],[110,415,97,85],[68,753,67,69],[225,396,233,204],[336,128,106,54],[0,753,66,78],[306,691,71,80],[86,676,84,75],[447,691,56,47],[460,173,37,54],[444,128,66,43],[172,676,59,104],[0,190,223,223],[370,602,118,87],[110,502,97,85],[447,740,51,41],[0,602,368,72],[0,0,334,188],[0,415,108,144],[479,0,29,25],[460,229,44,31]]}
    ];



    lib.updateListCache = function (cacheList) {
      for(var i = 0; i < cacheList.length; i++) {
        if(cacheList[i].cacheCanvas)
          cacheList[i].updateCache();
      }
    };

    lib.addElementsToCache = function (textInst, cacheList) {
      var cur = textInst;
      while(cur != exportRoot) {
        if(cacheList.indexOf(cur) != -1)
          break;
        cur = cur.parent;
      }
      if(cur != exportRoot) {
        var cur2 = textInst;
        var index = cacheList.indexOf(cur);
        while(cur2 != cur) {
          cacheList.splice(index, 0, cur2);
          cur2 = cur2.parent;
          index++;
        }
      }
      else {
        cur = textInst;
        while(cur != exportRoot) {
          cacheList.push(cur);
          cur = cur.parent;
        }
      }
    };

    lib.gfontAvailable = function(family, totalGoogleCount) {
      lib.properties.webfonts[family] = true;
      var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
      for(var f = 0; f < txtInst.length; ++f)
        lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

      loadedGoogleCount++;
      if(loadedGoogleCount == totalGoogleCount) {
        lib.updateListCache(gFontsUpdateCacheList);
      }
    };

    lib.tfontAvailable = function(family, totalTypekitCount) {
      lib.properties.webfonts[family] = true;
      var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
      for(var f = 0; f < txtInst.length; ++f)
        lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

      loadedTypekitCount++;
      if(loadedTypekitCount == totalTypekitCount) {
        lib.updateListCache(tFontsUpdateCacheList);
      }
    };
    // symbols:



    (lib.eyesecond = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.legleftandlight = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.lightrightleg = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.oneeye = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.sleeveandlightcopy = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.lightface4 = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.lightbelly = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.lightmouth = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.antena = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.body = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();



    (lib.chair = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();



    (lib.foot_left = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();



    (lib.foot_right = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();



    (lib.heand_left = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();



    (lib.heand_right = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();



    (lib.hvost = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();



    (lib.joystick = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();



    (lib.kabel = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(17);
    }).prototype = p = new cjs.Sprite();



    (lib.light = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(18);
    }).prototype = p = new cjs.Sprite();



    (lib.nos = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(19);
    }).prototype = p = new cjs.Sprite();



    (lib.rot = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(20);
    }).prototype = p = new cjs.Sprite();



    (lib.sega = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(21);
    }).prototype = p = new cjs.Sprite();



    (lib.stone2 = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(22);
    }).prototype = p = new cjs.Sprite();



    (lib.stone1 = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(23);
    }).prototype = p = new cjs.Sprite();



    (lib.tv = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(24);
    }).prototype = p = new cjs.Sprite();



    (lib.ushi = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(25);
    }).prototype = p = new cjs.Sprite();



    (lib.yazik = function() {
      this.spriteSheet = ss["footer_bear_Canvas_atlas_"];
      this.gotoAndStop(26);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
      var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
      clone.gotoAndStop(this.currentFrame);
      clone.paused = this.paused;
      clone.framerate = this.framerate;
      return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
      var prototype = cjs.extend(symbol, cjs.MovieClip);
      prototype.clone = mc_symbol_clone;
      prototype.nominalBounds = nominalBounds;
      prototype.frameBounds = frameBounds;
      return prototype;
    }


    (lib.dsd = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.light();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.dsd, new cjs.Rectangle(0,0,223,223), null);


    (lib.yazik_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.yazik();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.yazik_1, new cjs.Rectangle(0,0,44,31), null);


    (lib.ushi_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.ushi();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.ushi_1, new cjs.Rectangle(0,0,29,25), null);


    (lib.tv_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.tv();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.tv_1, new cjs.Rectangle(0,0,108,144), null);


    (lib.stone1_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.stone1();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.stone1_1, new cjs.Rectangle(0,0,334,188), null);


    (lib.stone2_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.stone2();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.stone2_1, new cjs.Rectangle(0,0,368,72), null);


    (lib.sega_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.sega();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.sega_1, new cjs.Rectangle(0,0,51,41), null);


    (lib.rot_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 2
      this.instance = new lib.lightmouth();
      this.instance.parent = this;
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

      // Слой 1
      this.instance_1 = new lib.rot();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,97,85);


    (lib.nos_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 3
      this.instance = new lib.lightface4();
      this.instance.parent = this;
      this.instance.setTransform(-11,-23);
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

      // Слой 1
      this.instance_1 = new lib.nos();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,118,87);


    (lib.kabel_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 2
      this.instance = new lib.kabel();
      this.instance.parent = this;

      this.shape = new cjs.Shape();
      this.shape.graphics.f("rgba(164,194,152,0.949)").s().p("AgnCyIgCgNIAAgDIgDgjQgCgNAAglIgBgHIAAgGIAAgMIAAgFQgCgSAAgbIAAgfIACgRQADgOAJgTIAKgRIAIgWQAMgcANgUQASgXAXgMIABAEQgKALgPAVQgbArgRA0QgDAMgEATIgFAfQgDAMAAAXIAAAZQAAAjAKBjIgBANIgFADQgGgJgDgPg");
      this.shape.setTransform(17.1,28.7);

      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("rgba(63,62,73,0.933)").s().p("AkFHoIgBgOQABgFAOgJIAggWQA0gnARg9QAThDADgQQADgOAAgwQAAg/gZhsQgLgugGgqQADAOAGAJIAFgCIABgNQgKhjAAgkIAAgZQAAgXADgNIAFgeQAEgUADgLQARg1AcgqQAPgVAKgLIgBgEQgXALgSAYQAfgwA9gTQA5gSBGALQBBALAuAgQAvAiAAAoQAAANgCgGIgBAFQgCACgHAAQgMAAgGgQQgMgagGgJQgngziIAAQh6AAgsCHQgTA+AABXQAABGAZBrQAZBsgBBMIAABLQgDAcgTA4QgKAfgrA0QgwA7gaAAQgNAAgCgCgAisirQgEhJADgeIAAAgQAAAbACASIAAAFIAAALIAAAGIABAIQAAAlACANIADAjQgHgvAAgqgAiNlsIgIAWIgKASQAHgSALgWg");
      this.shape_1.setTransform(29.5,53.2);

      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("rgba(164,194,152,0.949)").s().p("AhEDGQgGgOgBgoIAAgqIAAgVIAAgsIAAgcQACgfAQgxQARg0AegWQAOgLAagYQAYgUAVgFIAAABIABAEQAAAHggAXQgoAdgFAHQgfAfgNApQgQAwgCAdQgBATABAxIABA5QACAhAHAaIgBAEIgBACIgFABQgFgBgDgHg");
      this.shape_2.setTransform(18.5,26.1);

      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("rgba(63,62,73,0.933)").s().p("Aj8HwIgDgCQgBgBAAgIQAAgFAng7QApg8AEgWQAQhPABgHQgCgTABgoQgBg5gPiIIgGg8QADAHAEAAIAGAAIABgCIABgEQgIgagCghIAAg5QgCgxACgUQACgdAQgwQAMgpAgggQAGgGAogdQAggXAAgIIgBgEQBqg/BdAzQApAWAbAoQAZAjAAAZIAAAJIgCAEIgCADQgBACgIAAQgEAAgKgUQgMgcgMgQQguhAhiAAQh8AAg/CFQgfBEgHBJQABAsAPCIQAPCIAABEQAAA9gCARQgDAtgNAiQgNAhghA3QgkA7gLAAQgMAAACgDgAi7i9IACggIAAAtIAAAVIgCgig");
      this.shape_3.setTransform(29.5,51.9);

      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,59,104);


    (lib.hvost_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.hvost();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.hvost_1, new cjs.Rectangle(0,0,37,54), null);


    (lib.heand_right_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.heand_right();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.heand_right_1, new cjs.Rectangle(0,0,56,47), null);


    (lib.heand_left_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 2
      this.instance = new lib.sleeveandlightcopy();
      this.instance.parent = this;
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

      // Слой 1
      this.instance_1 = new lib.heand_left();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,84,75);


    (lib.foot_right_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 2
      this.instance = new lib.lightrightleg();
      this.instance.parent = this;
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

      // Слой 1
      this.instance_1 = new lib.foot_right();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,71,80);


    (lib.foot_left_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 2
      this.instance = new lib.legleftandlight();
      this.instance.parent = this;
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

      // Слой 1
      this.instance_1 = new lib.foot_left();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,66,78);


    (lib.eyes = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 3
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#A8AE91").s().p("AAqATQgYgKgZgHQgLgCgNAAIgIABIgJAAIgDADIgKAAQgJgBgCgEIgBgHQAAgLAXABQABgJATgCQAZgEAjAMQAKAGALAKQALAKACAGQAKAGAAAGIgBAGQAAACgHAAIgYgMg");
      this.shape.setTransform(25.2,6.2);

      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#A8AE91").s().p("AhTAYIAAgHQAAgGABgBQADgDANABIAEACIgBgDQAAgHASgKQAKgGAIgCIAHgDQAPgHASgBQAtgCAQAeQAKAGAAAHQAAAHgFABIgBAEIgHABIgJgFQgFgCgGgBIhQAAIgdAFQgCAIgKAAQgLAAgCgGg");
      this.shape_1.setTransform(24,9.6);

      this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(11));

      // Слой 2
      this.instance = new lib.oneeye();
      this.instance.parent = this;
      this.instance.setTransform(13,0);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleY:0.67,y:4.5},0).wait(1).to({scaleY:0.19,y:10.8},0).to({_off:true},1).wait(1).to({_off:false,scaleY:0.5,y:6.8},0).wait(1).to({scaleY:1,y:0},0).wait(9));

      // Слой 1
      this.instance_1 = new lib.eyesecond();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({scaleY:0.67,y:3},0).wait(1).to({scaleY:0.22,y:8},0).to({_off:true},1).wait(1).to({_off:false,scaleY:0.53,y:4.8},0).wait(1).to({scaleY:1,y:0},0).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,31,18);


    (lib.chair_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.chair();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.chair_1, new cjs.Rectangle(0,0,106,54), null);


    (lib.body_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 2
      this.instance = new lib.lightbelly();
      this.instance.parent = this;
      this.instance._off = true;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

      // Слой 1
      this.instance_1 = new lib.body();
      this.instance_1.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,233,204);


    (lib.antena_1 = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Слой 1
      this.instance = new lib.antena();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.antena_1, new cjs.Rectangle(0,0,67,69), null);


    (lib.testtest = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // foot_left - копия
      this.instance = new lib.foot_left_1();
      this.instance.parent = this;
      this.instance.setTransform(115,27,1,1,0,0,0,57,47);

      this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:56.9,rotation:2.8},9).to({regX:57,rotation:2.5,x:115.1,y:27.1},9).to({rotation:-4.2,x:115,y:26.9},9).to({rotation:0,y:27},9).wait(1));

      // heand_left
      this.instance_1 = new lib.heand_left_1();
      this.instance_1.parent = this;
      this.instance_1.setTransform(148,-69.5,1,1,6,0,0,77.1,17.7);

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:77.2,regY:17.8,rotation:2.1,x:143,y:-68.4},3).to({rotation:5.3,x:144.1,y:-69.3},5).to({regX:77.1,regY:17.7,rotation:6,x:148,y:-69.5},1).to({regX:77.2,regY:17.8,rotation:2.1,x:143,y:-68.4},3).to({rotation:5.3,x:144.1,y:-69.3},5).to({regX:77.1,regY:17.7,rotation:6,x:148,y:-69.5},1).to({regX:77.2,regY:17.8,rotation:2.1,x:143,y:-68.4},3).to({rotation:5.3,x:144.1,y:-69.3},5).to({regX:77.1,regY:17.7,rotation:6,x:148,y:-69.5},1).to({regX:77.2,regY:17.8,rotation:2.1,x:143,y:-68.4},3).to({rotation:5.3,x:144.1,y:-69.3},5).to({regX:77.1,regY:17.7,rotation:6,x:148,y:-69.5},1).wait(1));

      // foot_left
      this.instance_2 = new lib.foot_left_1();
      this.instance_2.parent = this;
      this.instance_2.setTransform(115,27,1,1,0,0,0,57,47);

      this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:56.9,rotation:2.8},9).to({regX:57,rotation:2.5,x:115.1,y:27.1},9).to({rotation:-4.2,x:115,y:26.9},9).to({rotation:0,y:27},9).wait(1));

      // джойстик 1
      this.instance_3 = new lib.joystick();
      this.instance_3.parent = this;
      this.instance_3.setTransform(16,-50);

      this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({rotation:7.5,x:19.2,y:-54.1},0).wait(2).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:-5.2,x:14.2,y:-46.9},0).wait(1).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:6.3,x:18.6,y:-53.5},0).wait(2).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:-5.2,x:14.2,y:-46.9},0).wait(1).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:7.5,x:19.2,y:-54.1},0).wait(2).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:-5.2,x:14.2,y:-46.9},0).wait(1).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:6.3,x:18.6,y:-53.5},0).wait(2).to({rotation:0,x:16,y:-50},0).wait(3).to({rotation:-5.2,x:14.2,y:-46.9},0).wait(2));

      // kabel
      this.instance_4 = new lib.kabel_1();
      this.instance_4.parent = this;
      this.instance_4.setTransform(19.5,-6,1,1,0,0,0,29.5,52);

      this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37));

      // eyes
      this.instance_5 = new lib.eyes();
      this.instance_5.parent = this;
      this.instance_5.setTransform(66.5,-125,1,1,0,0,0,15.5,9);

      this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:8.9,rotation:6.2,x:72,y:-132.6},18).to({regY:9,rotation:0,x:66.5,y:-125},18).wait(1));

      // ushi
      this.instance_6 = new lib.ushi_1();
      this.instance_6.parent = this;
      this.instance_6.setTransform(108,-123,1,1,0,0,0,10,19);

      this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:110.3,y:-127.7},18).to({x:108,y:-123},18).wait(1));

      // nos
      this.instance_7 = new lib.nos_1();
      this.instance_7.parent = this;
      this.instance_7.setTransform(99.5,-113,1,1,0,0,0,95.5,33);

      this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:5.8,x:103.4,y:-116.8},17).to({rotation:6.2,x:103.5,y:-117},1).to({rotation:0,x:99.5,y:-113},18).wait(1));

      // yazik
      this.instance_8 = new lib.yazik_1();
      this.instance_8.parent = this;
      this.instance_8.setTransform(94,-86.5,1,1,0,0,0,22,15.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1.27,rotation:30.5,x:99.5,y:-88.5},18).to({scaleY:1,rotation:0,x:94,y:-86.5},18).wait(1));

      // rot
      this.instance_9 = new lib.rot_1();
      this.instance_9.parent = this;
      this.instance_9.setTransform(112,-102.5,1,1,0,0,0,86,25.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:115,y:-106.5},18).to({x:112,y:-102.5},18).wait(1));

      // heand_right
      this.instance_10 = new lib.heand_right_1();
      this.instance_10.parent = this;
      this.instance_10.setTransform(34,-33.5,1,1,0,0,0,28,23.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:28.1,regY:23.4,scaleX:1,scaleY:1,rotation:-10.1,x:34.9,y:-39.9},3).to({rotation:8.2,x:34.6,y:-37.7},5).to({regX:28,regY:23.5,scaleX:1,scaleY:1,rotation:0,x:34,y:-33.5},1).to({regX:28.1,regY:23.4,scaleX:1,scaleY:1,rotation:-10.1,x:34.9,y:-39.9},3).to({rotation:8.2,x:34.6,y:-37.7},5).to({regX:28,regY:23.5,scaleX:1,scaleY:1,rotation:0,x:34,y:-33.5},1).to({regX:28.1,regY:23.4,scaleX:1,scaleY:1,rotation:-10.1,x:34.9,y:-39.9},3).to({rotation:8.2,x:34.6,y:-37.7},5).to({regX:28,regY:23.5,scaleX:1,scaleY:1,rotation:0,x:34,y:-33.5},1).to({regX:28.1,regY:23.4,scaleX:1,scaleY:1,rotation:-10.1,x:34.9,y:-39.9},3).to({rotation:8.2,x:34.6,y:-37.7},5).to({regX:28,regY:23.5,scaleX:1,scaleY:1,rotation:0,x:34,y:-33.5},1).wait(1));

      // body
      this.instance_11 = new lib.body_1();
      this.instance_11.parent = this;
      this.instance_11.setTransform(60.5,-36,1,1,0,0,0,116.5,102);

      this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.02,scaleY:1.02,x:58,y:-37},9).to({scaleX:1.03,scaleY:1.04,x:55.5,y:-40},9).to({scaleX:1,scaleY:1,x:60.5,y:-36},18).wait(1));

      // hvost
      this.instance_12 = new lib.hvost_1();
      this.instance_12.parent = this;
      this.instance_12.setTransform(161.5,17.5,1,1,0,0,0,9.5,21.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:-11,x:160.6,y:13.5},18).to({rotation:0,x:161.5,y:17.5},18).wait(1));

      // foot_right
      this.instance_13 = new lib.foot_right_1();
      this.instance_13.parent = this;
      this.instance_13.setTransform(41,15,1,1,0,0,0,54,41);

      this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:53.9,rotation:-3.5},9).to({regX:54,rotation:2.5},9).to({regX:54.1,regY:41.1,rotation:2.7,x:41.1,y:15.1},9).to({regX:54,regY:41,rotation:0,x:41,y:15},9).wait(1));

      // antena
      this.instance_14 = new lib.antena_1();
      this.instance_14.parent = this;
      this.instance_14.setTransform(-110.5,-85.5,1,1,0,0,0,33.5,34.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({regY:34.6,rotation:-4.2,x:-117.5,y:-91.9},2).to({regY:34.5,rotation:12.5,x:-100,y:-92.9},3).to({regY:34.6,rotation:4,x:-109,y:-85},2).to({regY:34.5,rotation:0,x:-110.5,y:-85.5},3).wait(11));

      // tv
      this.instance_15 = new lib.tv_1();
      this.instance_15.parent = this;
      this.instance_15.setTransform(-97,-61,1,1,0,0,0,54,72);

      this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(16).to({regX:54.1,rotation:-8,x:-101.9,y:-71},2).to({regX:54,rotation:12.3,x:-85.4,y:-68},3).to({rotation:-0.3,x:-97,y:-61},2).to({rotation:0},13).wait(1));

      // sega
      this.instance_16 = new lib.sega_1();
      this.instance_16.parent = this;
      this.instance_16.setTransform(-28.5,38.5,1,1,0,0,0,25.5,20.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(37));

      // chair
      this.instance_17 = new lib.chair_1();
      this.instance_17.parent = this;
      this.instance_17.setTransform(-88,27,1,1,0,0,0,53,27);

      this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(37));

      // stone1
      this.instance_18 = new lib.stone1_1();
      this.instance_18.parent = this;
      this.instance_18.setTransform(53,264.5,1,1,0,0,0,205,246.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(37));

      // Слой 25
      this.instance_19 = new lib.dsd();
      this.instance_19.parent = this;
      this.instance_19.setTransform(-130.4,-94,1.144,1.144,0,0,0,36.4,36.4);

      this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15).to({regY:36.3,y:-111.9},3).to({regY:36.4,y:-94},5).wait(14));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-172,-146,361.1,352);


    (lib.bear_tv = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // water
      this.instance = new lib.stone2_1();
      this.instance.parent = this;
      this.instance.setTransform(24.7,178.5,1,1,0,0,0,184.1,62);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

      // bear
      this.instance_1 = new lib.testtest();
      this.instance_1.parent = this;
      this.instance_1.setTransform(26.6,160.2,1,1,-0.2,0,0,20.7,174.9);

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:20.6,regY:175,rotation:1,x:26.5,y:170.3},39).to({regX:20.7,regY:174.9,rotation:-0.2,x:26.6,y:160.2},40).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-208.5,-202.5,417.1,409);


    // stage content:
    (lib.footer_bear_Canvas = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});

      // Layer 1
      this.instance = new lib.bear_tv();
      this.instance.parent = this;
      this.instance.setTransform(171.5,196.1,1,1,0,0,0,0,23.9);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(199.3,201.2,375.8,352.9);
    // library properties:
    lib.properties = {
      width: 390,
      height: 380,
      fps: 24,
      color: "#333333",
      opacity: 1.00,
      webfonts: {},
      manifest: [
        {src:"https://uploads-ssl.webflow.com/63bc0aeda84f8c7e8d3862b5/63db43660318297dd2772ccb_bear-bottom.png", id:"footer_bear_Canvas_atlas_"}
      ],
      preloads: []
    };



    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

    function init() {
      canvas = document.getElementById("bear_bottom_canvas");
      anim_container = document.getElementById("bear_bottom_container");
      dom_overlay_container = document.getElementById("bear_bottom_overlay_container");
      images = images || {};
      ss = ss || {};
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", handleFileLoad);
      loader.addEventListener("complete", handleComplete);
      loader.loadManifest(lib.properties.manifest);
    }

    function handleFileLoad(evt) {
      if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
      }
    }

    function handleComplete(evt) {
      //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
          "images": [queue.getResult(ssMetadata[i].name)],
          "frames": ssMetadata[i].frames
        })
      }
      exportRoot = new lib.footer_bear_Canvas();
      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      //Registers the "tick" event listener.
      fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
      }

      //Code to support hidpi screens and responsive scaling.
      function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
          var w = lib.properties.width, h = lib.properties.height;
          var iw = window.innerWidth, ih = window.innerHeight;
          var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
          if (isResp) {
            if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
              sRatio = lastS;
            } else if (!isScale) {
              if (iw < w || ih < h)
                sRatio = Math.min(xRatio, yRatio);
            } else if (scaleType == 1) {
              sRatio = Math.min(xRatio, yRatio);
            } else if (scaleType == 2) {
              sRatio = Math.max(xRatio, yRatio);
            }
          }
          canvas.width = w * pRatio * sRatio;
          canvas.height = h * pRatio * sRatio;
          canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
          canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
          stage.scaleX = pRatio * sRatio;
          stage.scaleY = pRatio * sRatio;
          lastW = iw;
          lastH = ih;
          lastS = sRatio;
        }
      }

      makeResponsive(false, 'both', false, 1);
      fnStartAnimation();
    }

    init();
  })();
