<!-- begin code -->
<script>
  (function () {
    var lib = lib || {};
    var cjs = createjs || {};
    var ss = ss || {};
    var images = images || {};
    var AdobeAn = AdobeAn || {};

    const bearImage = "h_bear_02_Canvas_atlas_";
    var p; // shortcut to reference prototypes
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [
      {
        name: bearImage,
        frames: [[0, 0, 118, 126], [238, 51, 18, 50], [120, 0, 70, 61], [120, 63, 66, 49], [73, 128, 36, 27], [230, 131, 16, 16], [172, 114, 13, 12], [120, 114, 50, 36], [188, 104, 40, 50], [192, 51, 44, 51], [192, 0, 53, 49], [172, 128, 13, 11], [247, 0, 7, 6], [0, 128, 36, 42], [38, 128, 33, 44], [238, 103, 18, 26], [111, 152, 33, 23]]
      }
    ];


    lib.updateListCache = function (cacheList) {
      for (var i = 0; i < cacheList.length; i++) {
        if (cacheList[i].cacheCanvas)
          cacheList[i].updateCache();
      }
    };

    lib.addElementsToCache = function (textInst, cacheList) {
      var cur = textInst;
      while (cur != exportRoot) {
        if (cacheList.indexOf(cur) != -1)
          break;
        cur = cur.parent;
      }
      if (cur != exportRoot) {
        var cur2 = textInst;
        var index = cacheList.indexOf(cur);
        while (cur2 != cur) {
          cacheList.splice(index, 0, cur2);
          cur2 = cur2.parent;
          index++;
        }
      } else {
        cur = textInst;
        while (cur != exportRoot) {
          cacheList.push(cur);
          cur = cur.parent;
        }
      }
    };

    lib.gfontAvailable = function (family, totalGoogleCount) {
      lib.properties.webfonts[family] = true;
      var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
      for (var f = 0; f < txtInst.length; ++f)
        lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

      loadedGoogleCount++;
      if (loadedGoogleCount == totalGoogleCount) {
        lib.updateListCache(gFontsUpdateCacheList);
      }
    };

    lib.tfontAvailable = function (family, totalTypekitCount) {
      lib.properties.webfonts[family] = true;
      var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
      for (var f = 0; f < txtInst.length; ++f)
        lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

      loadedTypekitCount++;
      if (loadedTypekitCount == totalTypekitCount) {
        lib.updateListCache(tFontsUpdateCacheList);
      }
    };
    // symbols:


    (lib.body = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();


    (lib.body_light = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();


    (lib.face = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();


    (lib.jaw = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();


    (lib.joystick = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();


    (lib.l_ear = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();


    (lib.l_eye = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();


    (lib.l_hend = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();


    (lib.l_leg = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();


    (lib.l_leg_top = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();


    (lib.l_shoulder = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();


    (lib.r_ear = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();


    (lib.r_eye = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();


    (lib.r_hend = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();


    (lib.r_leg = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();


    (lib.tail = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();


    (lib.tongue = function () {
      this.spriteSheet = ss[bearImage];
      this.gotoAndStop(16);
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


    (lib.shoulder_calm_mask_mc = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#DFEADE").s().p("AhfB7QgPgNAAgOIAAgBIAPgRIAUgSIADAAQAJgHAIgIIANgPIAIgKQAbglAAgvQAAgWgDgPQgCgNgIgaIAIAJIAGACIAHALQAHAHAHALIACADIANASQAOAPALAUIATAkQANAXAOAtIABABIADANIAAAAIAAACIABABIADALIACANQgRgWgVgGQgMgIgKAAQgWAAgPATQgFAHgGAOQgDALgFAIQgMAQgWAAQgkAAgUgRgAAjAdIACAAIgBAAIgBAAg");
      this.shape.setTransform(11.1, 14.1);

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.shoulder_calm_mask_mc, new cjs.Rectangle(0, 0, 22.2, 28.1), null);


    (lib.calm_bear_leg_mask_mc = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.body_light();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.calm_bear_leg_mask_mc, new cjs.Rectangle(0, 0, 18, 50), null);


    (lib.tongue_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.tongue();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.tongue_1, new cjs.Rectangle(0, 0, 33, 23), null);


    (lib.tail_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.tail();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.tail_1, new cjs.Rectangle(0, 0, 18, 26), null);


    (lib.r_leg_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.r_leg();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.r_leg_1, new cjs.Rectangle(0, 0, 33, 44), null);


    (lib.r_hend_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.r_hend();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.r_hend_1, new cjs.Rectangle(0, 0, 36, 42), null);


    (lib.r_eye_mc = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.r_eye();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.r_eye_mc, new cjs.Rectangle(0, 0, 7, 6), null);


    (lib.r_ear_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.r_ear();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.r_ear_1, new cjs.Rectangle(0, 0, 13, 11), null);


    (lib.l_shoulder_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_shoulder();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.l_shoulder_1, new cjs.Rectangle(0, 0, 53, 49), null);


    (lib.l_leg_top_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_leg_top();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.l_leg_top_1, new cjs.Rectangle(0, 0, 44, 51), null);


    (lib.l_leg_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_leg();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.l_leg_1, new cjs.Rectangle(0, 0, 40, 50), null);


    (lib.l_hend_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_hend();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.l_hend_1, new cjs.Rectangle(0, 0, 50, 36), null);


    (lib.l_eye_mc = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_eye();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.l_eye_mc, new cjs.Rectangle(0, 0, 13, 12), null);


    (lib.l_ear_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_ear();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.l_ear_1, new cjs.Rectangle(0, 0, 16, 16), null);


    (lib.joystick_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.joystick();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.joystick_1, new cjs.Rectangle(0, 0, 36, 27), null);


    (lib.jaw_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.jaw();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.jaw_1, new cjs.Rectangle(0, 0, 66, 49), null);


    (lib.face_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.face();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.face_1, new cjs.Rectangle(0, 0, 70, 61), null);


    (lib.body_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.body();
      this.instance.parent = this;

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(0, 0, 118, 126), null);


    (lib.r_eye_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.r_eye_mc();
      this.instance.parent = this;
      this.instance.setTransform(3.5, 3, 1, 1, 0, 0, 0, 3.5, 3);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({ scaleY: 0.57, y: 3.7 }, 3).to({
        scaleY: 1,
        y: 3
      }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 7, 6);


    (lib.l_eye_1 = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 1
      this.instance = new lib.l_eye_mc();
      this.instance.parent = this;
      this.instance.setTransform(6.5, 6, 1, 1, 0, 0, 0, 6.5, 6);

      this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({ scaleY: 0.48, y: 8 }, 3).to({
        scaleY: 1,
        y: 6
      }, 2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 13, 12);


    // stage content:
    (lib.h_bear_02_Canvas = function (mode, startPosition, loop) {
      this.initialize(mode, startPosition, loop, {});

      // Layer 2
      this.instance = new lib.shoulder_calm_mask_mc();
      this.instance.parent = this;
      this.instance.setTransform(104.1, 39, 1, 1, 0, 0, 0, 11.1, 14.1);
      this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
      this.instance.cache(-2, -2, 26, 32);

      this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 105.6 }, 36).to({ x: 104.1 }, 27).wait(1));

      // l_ear
      this.instance_1 = new lib.l_ear_1();
      this.instance_1.parent = this;
      this.instance_1.setTransform(82.3, 14.3, 1, 1, 0, 0, 0, 5.3, 12.3);

      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ x: 84.8, y: 12.3 }, 36).to({
        x: 83.8,
        y: 13.1
      }, 11).to({ rotation: -30.7, x: 83.7, y: 13.2 }, 1).to({ rotation: 0, x: 83.4, y: 13.4 }, 3).to({
        x: 82.3,
        y: 14.3
      }, 12).wait(1));

      // l_eye
      this.instance_2 = new lib.l_eye_1();
      this.instance_2.parent = this;
      this.instance_2.setTransform(58.5, 11, 1, 1, 0, 0, 0, 6.5, 6);

      this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ x: 61, y: 9 }, 36).to({ x: 58.5, y: 11 }, 27).wait(1));

      // r_eye
      this.instance_3 = new lib.r_eye_1();
      this.instance_3.parent = this;
      this.instance_3.setTransform(45.5, 14, 1, 1, 0, 0, 0, 3.5, 3);

      this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ x: 48, y: 12 }, 36).to({
        x: 45.5,
        y: 14
      }, 27).wait(1));

      // face
      this.instance_4 = new lib.face_1();
      this.instance_4.parent = this;
      this.instance_4.setTransform(76.5, 18.5, 1, 1, 0, 0, 0, 54.5, 18.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_4).to({ x: 79, y: 16.5 }, 36).to({
        x: 76.5,
        y: 18.5
      }, 27).wait(1));

      // tongue
      this.instance_5 = new lib.tongue_1();
      this.instance_5.parent = this;
      this.instance_5.setTransform(65.5, 31.6, 1, 1, 0, 0, 0, 5.5, 5.8);

      this.timeline.addTween(cjs.Tween.get(this.instance_5).to({
        regY: 5.7,
        rotation: 13.5,
        x: 66.5,
        y: 30.3
      }, 36).to({ regY: 5.8, rotation: 0, x: 65.5, y: 31.6 }, 27).wait(1));

      // jaw
      this.instance_6 = new lib.jaw_1();
      this.instance_6.parent = this;
      this.instance_6.setTransform(73.8, 34.5, 1, 1, 0, 0, 0, 44.8, 16.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_6).to({ rotation: -2.7, x: 76.3, y: 32.5 }, 36).to({
        rotation: 0,
        x: 73.8,
        y: 34.5
      }, 27).wait(1));

      // l_leg
      this.instance_7 = new lib.l_leg_1();
      this.instance_7.parent = this;
      this.instance_7.setTransform(68, 122.3, 1, 1, 0, 0, 0, 14, 39.3);

      this.timeline.addTween(cjs.Tween.get(this.instance_7).to({
        rotation: -1,
        x: 67.9,
        y: 122.4
      }, 14).to({ rotation: -0.1, x: 68 }, 3).to({
        regY: 39.2,
        rotation: -1.5,
        x: 68.1,
        y: 122.2
      }, 3).to({ rotation: -1.8, x: 68 }, 3).to({ regX: 14.1, regY: 39.3, rotation: -1.3, y: 122.3 }, 3).to({
        regX: 14,
        regY: 39.2,
        rotation: -2.6,
        x: 68.1
      }, 4).to({ regY: 39.3, rotation: -3.2, x: 68 }, 6).to({
        regX: 14.1,
        rotation: -2.5,
        x: 68.1,
        y: 122.4
      }, 5).to({ regY: 39.2, rotation: -6.5, x: 68, y: 122.3 }, 2).to({
        regY: 39.3,
        rotation: -1.8,
        x: 68.1,
        y: 122.2
      }, 4).to({ rotation: -1.1, x: 68, y: 122.3 }, 5).to({ regX: 14, rotation: -3.7, x: 67.9 }, 3).to({
        regX: 14.1,
        rotation: -0.3,
        x: 68,
        y: 122.4
      }, 4).to({ regX: 14, rotation: 0, y: 122.3 }, 4).wait(1));

      // l_hend
      this.instance_8 = new lib.l_hend_1();
      this.instance_8.parent = this;
      this.instance_8.setTransform(95.3, 73.3, 1, 1, 0, 0, 0, 41.3, 16.3);

      this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({ rotation: -2.7, x: 95.2 }, 2).to({
        rotation: 0,
        x: 95.3
      }, 3).wait(4).to({ regY: 16.2, rotation: -3.2, y: 73.2 }, 2).to({
        regY: 16.3,
        rotation: 0,
        y: 73.3
      }, 4).wait(11).to({ regX: 41.1, rotation: -0.3, x: 95.2, y: 72.3 }, 2).to({
        regX: 41.3,
        rotation: 0,
        x: 95.3,
        y: 73.3
      }, 4).wait(6).to({ regY: 16.4, rotation: 0.8, y: 72.8 }, 2).to({ regY: 16.3, rotation: 0, y: 73.3 }, 4).wait(5));

      // r_leg
      this.instance_9 = new lib.r_leg_1();
      this.instance_9.parent = this;
      this.instance_9.setTransform(14, 116.8, 1, 1, 0, 0, 0, 14, 37.8);

      this.timeline.addTween(cjs.Tween.get(this.instance_9).to({
        regY: 37.7,
        rotation: -0.5,
        y: 116.7
      }, 14).to({ regY: 37.8, rotation: -2.8, x: 14.1, y: 116.8 }, 3).to({ regX: 14.1, rotation: -1 }, 3).to({
        regX: 14,
        rotation: -1.3,
        x: 14
      }, 3).to({ rotation: -3.5 }, 3).to({ rotation: -1.8 }, 4).to({ rotation: -2.2, y: 116.7 }, 6).to({
        rotation: -1.8,
        y: 116.8
      }, 5).to({ rotation: 0.7 }, 2).to({ rotation: -1.1 }, 4).to({
        regX: 14.1,
        rotation: -0.6,
        x: 14.1
      }, 5).to({ regX: 14, regY: 37.7, rotation: 0.9, x: 14, y: 116.7 }, 3).to({
        regX: 14.1,
        rotation: 0,
        x: 14.1
      }, 4).to({ regX: 14, regY: 37.8, x: 14, y: 116.8 }, 4).wait(1));

      // Layer 3
      this.instance_10 = new lib.calm_bear_leg_mask_mc();
      this.instance_10.parent = this;
      this.instance_10.setTransform(112.5, 82.4, 1, 1, 0, 0, 0, 8.8, 24.9);
      this.instance_10.filters = [new cjs.BlurFilter(5, 5, 1)];
      this.instance_10.cache(-2, -2, 22, 54);

      this.timeline.addTween(cjs.Tween.get(this.instance_10).to({ rotation: 3.2, x: 113 }, 36).to({
        rotation: 0,
        x: 112.5
      }, 27).wait(1));

      // l_shoulder
      this.instance_11 = new lib.l_shoulder_1();
      this.instance_11.parent = this;
      this.instance_11.setTransform(107.5, 50, 1, 1, 0, 0, 0, 44.5, 10);

      this.timeline.addTween(cjs.Tween.get(this.instance_11).to({ x: 109, y: 49.5 }, 36).to({
        x: 107.5,
        y: 50
      }, 27).wait(1));

      // joystick
      this.instance_12 = new lib.joystick_1();
      this.instance_12.parent = this;
      this.instance_12.setTransform(38.3, 76.8, 1, 1, 0, 0, 0, 14.3, 9.8);

      this.timeline.addTween(cjs.Tween.get(this.instance_12).to({
        regX: 14.2,
        scaleX: 1,
        scaleY: 1.01,
        skewX: 5,
        skewY: 1,
        x: 38.7,
        y: 76
      }, 15).to({ regX: 14.3, scaleY: 1.01, skewX: 12.3, skewY: 8, x: 38.8 }, 2).to({
        regX: 14.2,
        scaleX: 1,
        skewX: 5.8,
        skewY: 1.1,
        y: 75.8
      }, 3).to({ scaleX: 1, scaleY: 1.01, skewX: 7.5, skewY: 1.5, x: 38.9, y: 75.5 }, 4).to({
        regX: 14,
        regY: 9.7,
        skewX: 15,
        skewY: 8.7,
        x: 38.8,
        y: 75.3
      }, 2).to({ regX: 14.2, scaleX: 0.99, scaleY: 1.01, skewX: 8.8, skewY: 1.8, x: 39.2, y: 75.2 }, 4).to({
        regX: 14.4,
        regY: 9.8,
        scaleX: 0.99,
        scaleY: 1.02,
        skewX: 11.6,
        skewY: 2.7,
        x: 39.4,
        y: 74.8
      }, 6).to({ scaleX: 0.99, scaleY: 1.01, skewX: 9.3, skewY: 2, x: 39.2, y: 75.2 }, 5).to({
        scaleX: 1,
        scaleY: 1.01,
        skewX: 4.7,
        skewY: -2.2,
        y: 75.8
      }, 2).to({ regX: 14.3, scaleY: 1.01, skewX: 7.3, skewY: 1.5, x: 39.1, y: 75.5 }, 4).to({
        regX: 14.4,
        scaleX: 1,
        scaleY: 1.01,
        skewX: 4,
        skewY: 0.8,
        x: 38.8,
        y: 76.1
      }, 6).to({ scaleX: 1, scaleY: 1, skewX: 0.5, skewY: -2.4, y: 76.6 }, 2).to({
        regY: 9.7,
        scaleY: 1,
        skewX: 2,
        skewY: 0.3,
        x: 38.6,
        y: 76.3
      }, 4).to({ regX: 14.3, regY: 9.8, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, x: 38.3, y: 76.8 }, 4).wait(1));

      // l_leg_top
      this.instance_13 = new lib.l_leg_top_1();
      this.instance_13.parent = this;
      this.instance_13.setTransform(112.1, 88, 1, 1, -5.2, 0, 0, 38.1, 13);

      this.timeline.addTween(cjs.Tween.get(this.instance_13).to({
        regX: 38,
        rotation: 0,
        x: 112,
        y: 89.5
      }, 36).to({ regX: 38.1, rotation: -5.2, x: 112.1, y: 88 }, 27).wait(1));

      // r_hend
      this.instance_14 = new lib.r_hend_1();
      this.instance_14.parent = this;
      this.instance_14.setTransform(23, 67.8, 1, 1, 0, 0, 0, 16, 14.8);

      this.timeline.addTween(cjs.Tween.get(this.instance_14).to({ x: 24.1, y: 67 }, 15).to({
        x: 24.2,
        y: 65.9
      }, 2).to({ x: 24.4, y: 66.8 }, 3).to({ x: 24.7, y: 66.5 }, 4).to({ x: 24.8, y: 65.4 }, 2).to({
        x: 25.1,
        y: 66.2
      }, 4).to({ x: 25.5, y: 65.8 }, 6).to({ x: 25, y: 66.2 }, 5).to({ x: 24.9, y: 66.8 }, 2).to({
        x: 24.6,
        y: 66.6
      }, 4).to({ x: 23.9, y: 67.1 }, 6).to({ x: 23.8, y: 68.2 }, 2).to({ x: 23.5, y: 67.5 }, 4).to({
        x: 23,
        y: 67.8
      }, 4).wait(1));

      // body
      this.instance_15 = new lib.body_1();
      this.instance_15.parent = this;
      this.instance_15.setTransform(92.5, 103.5, 1, 1, 0, 0, 0, 85.5, 102.5);

      this.timeline.addTween(cjs.Tween.get(this.instance_15).to({
        regY: 102.6,
        scaleX: 1.01,
        scaleY: 1.01,
        rotation: 0.9,
        y: 103.6
      }, 36).to({ regY: 102.5, scaleX: 1, scaleY: 1, rotation: 0, y: 103.5 }, 27).wait(1));

      // tail
      this.instance_16 = new lib.tail_1();
      this.instance_16.parent = this;
      this.instance_16.setTransform(114.5, 96, 1, 1, 0, 0, 0, 5.5, 11);

      this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(64));

      // r_ear
      this.instance_17 = new lib.r_ear_1();
      this.instance_17.parent = this;

      this.instance_17.setTransform(48, 7.8, 1, 1, 0, 0, 0, 8, 7.8);

      this.timeline.addTween(cjs.Tween.get(this.instance_17).to({ x: 50.5, y: 5.8 }, 36).to({
        x: 49.2,
        y: 6.9
      }, 14).to({ rotation: -33, x: 49, y: 8 }, 1).to({ rotation: 0, x: 48.7, y: 7.3 }, 5).to({
        x: 48,
        y: 7.8
      }, 7).wait(1));

      // Layer 4
      this.shape = new cjs.Shape();
      this.shape.graphics.f("rgba(255,255,255,0)").s().p("AqYKrIAA1VIUxAAIAAVVg");
      this.shape.setTransform(66.5, 66.8);

      this.timeline.addTween(cjs.Tween.get(this.shape).wait(64));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(69, 68.5, 135.7, 136.5);
    // library properties:
    lib.properties = {
      width: 138,
      height: 140,
      fps: 24,
      color: "#333333",
      opacity: 1.00,
      webfonts: {},
      manifest: [
        { src: "https://uploads-ssl.webflow.com/63bc0aeda84f8c7e8d3862b5/63da08e95695c39a76f36f5f_bear.png", id: bearImage }
      ],
      preloads: []
    };

    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

    function init() {
      canvas = document.getElementById("bear_canvas");
      anim_container = document.getElementById("bear_container");
      dom_overlay_container = document.getElementById("bear_overlay_container");
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
      exportRoot = new lib.h_bear_02_Canvas();
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
</script>
<!-- end code -->