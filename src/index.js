
var mouse,sprite,spriteBehindObject;
var objects = [];
var tween1,tween2;
var mesh,model,model2,model3,model4,model5,model6,model7,model8,model9, sanwei, qiangti, showALL,floor2, floor3, floor4, floor5,ALL,intersect,raycaster,showtag,loucengUI,startbutton,panoBack;
var secoundFloor,thirdFloor,fourthFloor,fifthFloor,allFloor;
var Tag, Tag2, Tag3, Tag4, Tag5, Tag6, Tag7, Tag8, Tag9, Tag10, Tag11, Tag12, Tag13, Tag14, Tag15, Tag16, Tag17, Tag18, Tag19, Tag20 ;
var big, big2, big3, big4, big5, big6, big7, big8, big9, big10, big11, big12, big13, big14, big15, big16, big17, big18, big19, big20 ;
var re, re2, re3, re4, re5, re6, re7, re8, re9, re10, re11, re12, re13, re14, re15, re16, re17, re18, re19, re20 ;
var stopRotation, qiangtiswitch= true;
var Rotation,UIswitch ,allNot, loadFinish = false;
var p1 = {x:0, y:400, z:1300};
var p2 = {x:0, y:0, z:0};



var annotation = document.querySelector(".annotation");
var annotation2 = document.querySelector(".annotation2");
var annotation3 = document.querySelector(".annotation3");
var annotation4 = document.querySelector(".annotation4");
var annotation5 = document.querySelector(".annotation5");
var annotation6 = document.querySelector(".annotation6");
var annotation7 = document.querySelector(".annotation7");
var annotation8 = document.querySelector(".annotation8");
var annotation9 = document.querySelector(".annotation9");
var annotation10 = document.querySelector(".annotation10");
var annotation11 = document.querySelector(".annotation11");

var tag = document.querySelector(".tag");
var tag2= document.querySelector(".tag2");
var tag3= document.querySelector(".tag3");
var tag4= document.querySelector(".tag4");
var tag5= document.querySelector(".tag5");
var tag6= document.querySelector(".tag6");
var tag7= document.querySelector(".tag7");
var tag8= document.querySelector(".tag8");
var tag9= document.querySelector(".tag9");
var tag10= document.querySelector(".tag10");
var tag11= document.querySelector(".tag11");
var tag12= document.querySelector(".tag12");
var tag13= document.querySelector(".tag13");
var tag14= document.querySelector(".tag14");
var tag15= document.querySelector(".tag15");
var tag16= document.querySelector(".tag16");
var tag17= document.querySelector(".tag17");
var tag18= document.querySelector(".tag18");
var tag19= document.querySelector(".tag19");
var tag20= document.querySelector(".tag20");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
var renderer = new THREE.WebGLRenderer({antialias: true});
var orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

var help =  document.getElementById("help1");

    function CloseHelp(){
        document.getElementById("help123").style.display = 'none';
    }
    function OpenHelp(){
        document.getElementById("help123").style.display = 'block';
    }

    function start(){
         Rotation = !Rotation;
         if (Rotation) {
             orbitControls.autoRotate = true;
             document.getElementById("旋转").src = "assets/texture/xuanzhuan.gif";
             document.getElementById("1").style.background ='#fff35d';
             document.getElementById("旋转文字").innerText = "停止旋转";
             document.getElementById("旋转文字").style.color = "#3c3c3c";
             help.style.display = 'none';

         }else {
             orbitControls.autoRotate = false;
             document.getElementById("旋转").src = "assets/texture/xuanzhuan_off.png";
             document.getElementById("1").style.background ='#444444';
             document.getElementById("旋转文字").innerText = "自动旋转";
             document.getElementById("旋转文字").style.color = "#cccccc";

         }
    }

    function init() {
        var stats = initStats();
        //摄像机设置
        camera.position.set(0,0,1230);
        renderer.sortObjects = true;
        //选中
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();
        renderer.setClearColor(0x000000, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.gammaOutput = true;
        renderer.gammaFactor = 2.2;
        renderer.setPixelRatio( window.devicePixelRatio );
        var axis = new THREE.AxesHelper(20);
        scene.add(axis);
        var ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        document.getElementById("WebGL-output").appendChild(renderer.domElement);
        //sprite
        sprite = new THREE.Sprite();
        sprite.position.set(20, 0,20);

        //关闭自动旋转
        orbitControls.autoRotate = false;
        //阻尼系数
        orbitControls.enableDamping = true;
        orbitControls.dampingFactor = 1;
        orbitControls.userPanSpeed = 10;
        orbitControls.minDistance = 80;
        orbitControls.maxDistance = 1800;
        orbitControls.center= new THREE.Vector3(0,-60, -200);
        //全景球点击检测
        //document.addEventListener('mousedown', onDocumentMouseDown1, false);
        //全景标记点选中检测
        // document.addEventListener('mousemove', onDocumentMouseMove1, false);
        //camera.position.set(0,190,630);
        //camera.lookAt(-265,515,200);
        //camera.lookAt(0,0,0);
        //环境光


        //控制器



        //渲染函数
        render();
        console.log(scene.children);



        var manager = new THREE.LoadingManager();
        manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

            console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

        };

        manager.onLoad = function ( ) {

            console.log( 'Loading complete!');




            var loadingBar = document.getElementById('loading');
            var loadingText = document.getElementById('loadingText');

            setTimeout(function () {
                loadingText.style.left = '20px';
                loadingText.innerText = 'START';
            },1500);


            loadFinish = true;


        };


        manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

            console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            var loadingBar = document.getElementById('loading');
            var loadingText = document.getElementById('loadingText');
            loadingBar.style.width = ( itemsLoaded / itemsTotal * 100) + '%';
            loadingText.innerText = parseInt( itemsLoaded / itemsTotal * 100) + '%';

        };

        manager.onError = function ( url ) {

            console.log( 'There was an error loading ' + url );

        };
        
        //模型加载
        var gltfLoader = new THREE.GLTFLoader(manager);

      gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('2F_main.gltf', function (gltf) {
                gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    child.material.alphaTest = 0.1;
                    /*child.geometry.computeFaceNormals();
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();*/
                }
            });
            model = gltf.scene;
            model.scale.set(200, 200, 200);
            //model2.renderOrder =2;
            scene.add(model);
        });


        gltfLoader.load('2F_wall.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    //child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model2 = gltf.scene;
            model2.scale.set(200, 200, 200);
            scene.add(model2);
        });

        gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('3F_main.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model3 = gltf.scene;
            model3.scale.set(200, 200, 200);
            model3.position.y = 60;
            //model3.renderOrder = 1;
            scene.add(model3);
        });

       gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('3F_wall.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    //child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model4 = gltf.scene;
            model4.scale.set(200, 200, 200);
            model4.position.y = 60;
            //model3.renderOrder = 1;
            scene.add(model4);
        });

        gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('4F_main.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model5 = gltf.scene;
            model5.scale.set(200, 200, 200);
            model5.position.y = 120;
            //model3.renderOrder = 1;
            scene.add(model5);
        });

        gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('4F_wall.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    //child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model6 = gltf.scene;
            model6.scale.set(200, 200, 200);
            model6.position.y = 120;
            //model3.renderOrder = 1;
            scene.add(model6);
        });

        gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('5F_main.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model7 = gltf.scene;
            model7.scale.set(200, 200, 200);
            model7.position.y = 180;
            //model3.renderOrder = 1;
            scene.add(model7);
        });

        gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('5F_wall.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    // child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model8 = gltf.scene;
            model8.scale.set(200, 200, 200);
            model8.position.y = 180;
            //model3.renderOrder = 1;
            scene.add(model8);
        });
        gltfLoader.setPath('assets/models/gltf/');
        gltfLoader.load('library.gltf', function (gltf) {
            gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                    child.material.transparent = true;
                    child.material.depthWrite = false;
                    child.material.depthTest = true;
                    child.material.opacity = 0.3;
                    //改变不同的alpha测试值，以适合场景,初步解决了透明贴图显示问题
                    //child.material.alphaTest = 0.1;
                    //computeFaceNormals方法重新计算三角面对象的法线向量,计算法线向量，影响的是face数组中每个元素的normal属性，一个face只有1个
                    child.geometry.computeFaceNormals();
                    //computeVertexNormals方法重新计算三角面对象顶点的法线向量,face数组中每个元素的vertexNormal属性，一个face3型对象有3个，一个face4型对象有4个，
                    // 但是需要注意的是，被多个表面共享的顶点，其法线向量只有一个，同时受到多个表面的影响。比如中心在原点，三组表面都垂直于轴的立方体，
                    // 其第一象限中的顶点，法线向量是(1,1,1)的归一化。虽然看上去不可思议，平面的顶点的法线居然不是垂直于平面的，但这种指定法线的方法
                    // 在利用平面模拟曲面的时候有很好的效果。
                    child.geometry.computeVertexNormals();
                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    //emissive物体反射的颜色,默认为黑色
                    //child.material.emissive =  new THREE.Color(0xff0000);
                    //child.material.emissiveMap = child.material.map;
                }
            });
            model9 = gltf.scene;
            model9.scale.set(5, 5, 5);
            model9.position.y = -70;
            scene.add(model9);
        });



        function switchsanwei() {
            if(camera instanceof THREE.OrthographicCamera) {
                document.getElementById("2").style.background ='#444444';
                document.getElementById("3d").src = "assets/texture/pingmian.png";
                document.getElementById("三维文字").innerText = "平面图";
                document.getElementById("三维文字").style.color = "#cccccc";
                camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
                tween1 = new TWEEN.Tween(camera.position).to({x:0, y:500, z:1300}, 800).easing(TWEEN.Easing.Sinusoidal.InOut);
                tween1.start();

                if(secoundFloor && !Rotation){
                    document.getElementById("2ftag").style.display = '';
                    document.getElementById("p1").style.display = '';
                    document.getElementById("p2").style.display = '';
                    document.getElementById("p3").style.display = '';

                }
                if (thirdFloor && !Rotation) {
                    document.getElementById("3ftag").style.display = '';
                    document.getElementById("p4").style.display = '';
                    document.getElementById("p5").style.display = '';

                }
                if (fourthFloor && !Rotation) {
                    document.getElementById("4ftag").style.display = '';
                    document.getElementById("p6").style.display = '';
                    document.getElementById("p7").style.display = '';
                    document.getElementById("p8").style.display = '';


                }
                if (fifthFloor && !Rotation){
                    document.getElementById("5ftag").style.display = '';
                    document.getElementById("p9").style.display = '';
                    document.getElementById("p10").style.display = '';
                    document.getElementById("p11").style.display = '';
                }

                stopRotation = true;
                allNot = false;
                orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
                 orbitControls.autoRotate = true;
                //关闭自动旋转
                 orbitControls.autoRotate = false;
                //阻尼系数
                orbitControls.enableDamping = true;
                orbitControls.dampingFactor = 1;
                orbitControls.maxPolarAngle = Math.PI / 2;
                 orbitControls.minDistance = 80;
                 orbitControls.maxDistance = 1800;

          }else if (camera instanceof THREE.PerspectiveCamera) {
                document.getElementById("2").style.background ='#fff35d';
                document.getElementById("3d").src = "assets/texture/3d.png";
                document.getElementById("三维文字").innerText = "3D鸟瞰";
                document.getElementById("三维文字").style.color = "#3c3c3c";
               // camera = new THREE.OrthographicCamera(window.innerWidth / -1.5, window.innerWidth / 1.5, window.innerHeight / 1.5, window.innerHeight / -1.5, -200, 10000);
                tween1 = new TWEEN.Tween(camera.position).to({x:0, y:400, z:1000}, 500).easing(TWEEN.Easing.Sinusoidal.InOut);
                tween2 =  new TWEEN.Tween(camera.position).to({x:0, y:1800, z:0}, 600).easing(TWEEN.Easing.Sinusoidal.InOut);
                tween1.chain(tween2);

                tween1.start();

                setTimeout(function () {
                    camera = new THREE.OrthographicCamera(window.innerWidth / -1, window.innerWidth , window.innerHeight , window.innerHeight / -1, -200, 10000);
                    camera.position.x = 0;
                    camera.position.y = 1800;
                    camera.position.z = 0;
                    camera.lookAt(0,0,0);
                },1100);

                stopRotation = false;
                allNot = true;

                if (model && model2 && model3 && model4 && model5 && model6 && model7) {
                    model.rotation.y = 0;
                    model2.rotation.y = 0;
                    model3.rotation.y = 0;
                    model4.rotation.y = 0;
                    model5.rotation.y = 0;
                    model6.rotation.y = 0;
                    model7.rotation.y = 0;
                    model8.rotation.y = 0;
                    model9.rotation.y = 0;
                }

                if(secoundFloor){
                    document.getElementById("2ftag").style.display = 'none';

                }
                if (thirdFloor) {
                    document.getElementById("3ftag").style.display = 'none';

                }
                if (fourthFloor) {
                    document.getElementById("4ftag").style.display = 'none';

                }
                if (fifthFloor){
                    document.getElementById("5ftag").style.display = 'none';
                }

            }



        }
        sanwei = switchsanwei;

        //楼层选择
        function Floor2() {
            secoundFloor = true;
            thirdFloor = false;
            fourthFloor = false;
            fifthFloor = false;


            //按钮图片改变

            document.getElementById("floorChoice").src = "assets/texture/2f.png";

            //按钮颜色改变
             document.getElementById("2f").style.background ='#fff35d';
             document.getElementById("3f").style.background ='#c0c0c0';
             document.getElementById("4f").style.background ='#c0c0c0';
             document.getElementById("5f").style.background ='#c0c0c0';
             document.getElementById("all").style.background ='#c0c0c0';

             //标签显示
            //全景标记

                document.getElementById("p1").style.display = '';
                document.getElementById("p2").style.display = '';
                document.getElementById("p3").style.display = '';


             //标签隐藏
             document.getElementById("p4").style.display = 'none';
             document.getElementById("p5").style.display = 'none';
             document.getElementById("p6").style.display = 'none';
             document.getElementById("p7").style.display = 'none';
             document.getElementById("p8").style.display = 'none';
             document.getElementById("p9").style.display = 'none';
             document.getElementById("p10").style.display = 'none';
             document.getElementById("p11").style.display = 'none';

             //全景标记
            if (!allNot ) {
                document.getElementById("2ftag").style.display = '';
                document.getElementById("3ftag").style.display = 'none';
                document.getElementById("4ftag").style.display = 'none';
                document.getElementById("5ftag").style.display = 'none';
            }
            tween1 = new TWEEN.Tween(camera.position).to({x:camera.position.x, y:600, z:camera.position.z}, 500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

                    model.traverse(function (child) {
                        if (child.isMesh) {
                            child.material.transparent = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.opacity = 1;
                        }
                    });
                    model2.traverse(function (child) {
                        if (child.isMesh) {
                            child.material.transparent = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.opacity = 1;
                        }
                    });
                        model3.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = false;
                                child.material.opacity = 0;
                            }
                        });
                        model4.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = false;
                                child.material.opacity = 0;
                            }
                        });

                        model5.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = false;
                                child.material.opacity =0;
                            }
                        });

                        model6.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = false;
                                child.material.opacity = 0;
                            }
                        });

                        model7.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = false;
                                child.material.opacity =0;
                            }
                        });
                        model8.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = false;
                                child.material.opacity = 0;
                            }
                        });

                    model9.visible = false;
            qiangtiswitch = false;
            document.getElementById("隐藏墙体").src = "assets/texture/wall_off.png";
            document.getElementById("3").style.background ='#fff35d';
            document.getElementById("墙体文字").innerText = "显示墙体";
            document.getElementById("墙体文字").style.color = "#444444";

        }
        floor2 = Floor2;

        function Floor3() {
            secoundFloor = false;
            thirdFloor = true;
            fourthFloor = false;
            fifthFloor = false;


            document.getElementById("floorChoice").src = "assets/texture/3f.png";

                document.getElementById("2f").style.background ='#c0c0c0';
            document.getElementById("4f").style.background ='#c0c0c0';
            document.getElementById("5f").style.background ='#c0c0c0';
                document.getElementById("3f").style.background = '#fff35d';
            document.getElementById("all").style.background ='#c0c0c0';
                //其他楼层标签隐藏
                document.getElementById("p1").style.display = 'none';
                document.getElementById("p2").style.display = 'none';
                document.getElementById("p3").style.display = 'none';
                document.getElementById("p6").style.display = 'none';
                document.getElementById("p7").style.display = 'none';
                document.getElementById("p8").style.display = 'none';
                document.getElementById("p9").style.display = 'none';
                document.getElementById("p10").style.display = 'none';
                document.getElementById("p11").style.display = 'none';
                //3f标签显示
            //全景标记

                document.getElementById("p4").style.display = '';
                document.getElementById("p5").style.display = '';

            if (!allNot) {
                document.getElementById("2ftag").style.display = 'none';
                document.getElementById("3ftag").style.display = '';
                document.getElementById("4ftag").style.display = 'none';
                document.getElementById("5ftag").style.display = 'none';
            }


            tween1 = new TWEEN.Tween(camera.position).to({x:camera.position.x, y:800, z:camera.position.z}, 500).easing(TWEEN.Easing.Sinusoidal.InOut).start();


                model3.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.depthWrite = true;
                        child.material.depthTest = true;
                        child.material.opacity = 1;
                    }
                });
                model4.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.depthWrite = true;
                        child.material.depthTest = true;
                        child.material.opacity = 1;
                    }
                });

                model.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.depthWrite = false;
                        child.material.depthTest = true;
                        child.material.opacity = 0.1;
                    }
                });

                model2.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.depthWrite = false;
                        child.material.depthTest = true;
                        child.material.opacity = 0.1;
                    }
                });

                model5.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;

                        child.material.opacity = 0;
                    }
                });

                model6.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;

                        child.material.opacity = 0;
                    }
                });

                model7.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;

                        child.material.opacity = 0;
                    }
                });
                model8.traverse(function (child) {
                    if (child.isMesh) {
                        child.material.transparent = true;

                        child.material.opacity =0;
                    }
                });
            model9.visible = false;
            qiangtiswitch = false;
            document.getElementById("隐藏墙体").src = "assets/texture/wall_off.png";
            document.getElementById("3").style.background ='#fff35d';
            document.getElementById("墙体文字").innerText = "显示墙体";
            document.getElementById("墙体文字").style.color = "#444444";

        }
        floor3 = Floor3;

        function Floor4() {
            secoundFloor = false;
            thirdFloor = false;
            fourthFloor = true;
            fifthFloor = false;


            document.getElementById("floorChoice").src = "assets/texture/4f.png";

                    document.getElementById("4f").style.background ='#fff35d';
                    document.getElementById("2f").style.background ='#c0c0c0';
                    document.getElementById("3f").style.background = '#c0c0c0';
                    document.getElementById("5f").style.background = '#c0c0c0';
            document.getElementById("all").style.background ='#c0c0c0';
                    //其他楼层标签隐藏
                    document.getElementById("p1").style.display = 'none';
                    document.getElementById("p2").style.display = 'none';
                    document.getElementById("p3").style.display = 'none';
                    document.getElementById("p4").style.display = 'none';
                    document.getElementById("p5").style.display = 'none';
            document.getElementById("p9").style.display = 'none';
            document.getElementById("p10").style.display = 'none';
            document.getElementById("p11").style.display = 'none';
                    //4f标签显示
            //全景标记

                document.getElementById("p6").style.display = '';
                document.getElementById("p7").style.display = '';
                document.getElementById("p8").style.display = '';

            if (!allNot) {
                document.getElementById("2ftag").style.display = 'none';
                document.getElementById("3ftag").style.display = 'none';
                document.getElementById("4ftag").style.display = '';
                document.getElementById("5ftag").style.display = 'none';
            }

            tween1 = new TWEEN.Tween(camera.position).to({x:camera.position.x, y:1000, z:camera.position.z}, 500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

                    model5.traverse(function (child) {
                        if (child.isMesh) {
                            child.material.transparent = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.opacity = 1;
                        }
                    });
                    model6.traverse(function (child) {
                        if (child.isMesh) {
                            child.material.transparent = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.opacity = 1;
                        }
                    });

                        model.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });

                        model2.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });


                        model3.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });

                        model4.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });



                        model7.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.opacity = 0;
                            }
                        });
                        model8.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.opacity =0;
                            }
                        });

                    model9.visible = false;
            qiangtiswitch = false;
            document.getElementById("隐藏墙体").src = "assets/texture/wall_off.png";
            document.getElementById("3").style.background ='#fff35d';
            document.getElementById("墙体文字").innerText = "显示墙体";
            document.getElementById("墙体文字").style.color = "#444444";
        }
        floor4 = Floor4;

        function  Floor5() {
            secoundFloor = false;
            thirdFloor = false;
            fourthFloor = false;
            fifthFloor =true;

            document.getElementById("floorChoice").src = "assets/texture/5f.png";
            document.getElementById("5f").style.background ='#fff35d';
            document.getElementById("2f").style.background ='#c0c0c0';
            document.getElementById("3f").style.background = '#c0c0c0';
            document.getElementById("4f").style.background = '#c0c0c0';
            document.getElementById("all").style.background ='#c0c0c0';
                    //其他楼层标签隐藏
                    document.getElementById("p1").style.display = 'none';
                    document.getElementById("p2").style.display = 'none';
                    document.getElementById("p3").style.display = 'none';
                    document.getElementById("p4").style.display = 'none';
                    document.getElementById("p5").style.display = 'none';
                    document.getElementById("p6").style.display = 'none';
                    document.getElementById("p7").style.display = 'none';
                    document.getElementById("p8").style.display = 'none';
                    //5f标签显示
            //全景标记

                document.getElementById("p9").style.display = '';
                document.getElementById("p10").style.display = '';
                document.getElementById("p11").style.display = '';

            if (!allNot){
                document.getElementById("2ftag").style.display = 'none';
                document.getElementById("3ftag").style.display = 'none';
                document.getElementById("4ftag").style.display = 'none';
                document.getElementById("5ftag").style.display = '';
            }

            tween1 = new TWEEN.Tween(camera.position).to({x:camera.position.x, y:1200, z:camera.position.z}, 500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

                    model7.traverse(function (child) {
                        if (child.isMesh) {
                            child.material.transparent = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.opacity = 1;
                        }
                    });
                    model8.traverse(function (child) {
                        if (child.isMesh) {
                            child.material.transparent = true;
                            child.material.depthWrite = true;
                            child.material.depthTest = true;
                            child.material.opacity = 1;
                        }
                    });

                        model.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });

                        model2.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });


                        model3.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });

                        model4.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });


                        model5.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });

                        model6.traverse(function (child) {
                            if (child.isMesh) {
                                child.material.transparent = true;
                                child.material.depthWrite = false;
                                child.material.depthTest = true;
                                child.material.opacity = 0.1;
                            }
                        });

                    model9.visible = false;

            qiangtiswitch = false;
            document.getElementById("隐藏墙体").src = "assets/texture/wall_off.png";
            document.getElementById("3").style.background ='#fff35d';
            document.getElementById("墙体文字").innerText = "显示墙体";
            document.getElementById("墙体文字").style.color = "#444444";
        }
        floor5 = Floor5;

        function all() {
            secoundFloor = false;
            thirdFloor = false;
            fourthFloor = false;
            fifthFloor = false;
            allFloor = true;


            document.getElementById("floorChoice").src = "assets/texture/ALL.png";

            document.getElementById("all").style.background ='#fff35d';
            document.getElementById("4f").style.background ='#c0c0c0';
            document.getElementById("2f").style.background ='#c0c0c0';
            document.getElementById("3f").style.background = '#c0c0c0';
            document.getElementById("5f").style.background = '#c0c0c0';
            //其他楼层标签隐藏
            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';
            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';
            document.getElementById("p9").style.display = 'none';
            document.getElementById("p10").style.display = 'none';
            document.getElementById("p11").style.display = 'none';


            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            if(!allNot){
                tween1 = new TWEEN.Tween(camera.position).to({x:0, y:400, z:1300}, 500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            }


            model5.traverse(function (child) {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });
            model6.traverse(function (child) {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });

            model.traverse(function (child) {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });

            model2.traverse(function (child) {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });


            model3.traverse(function (child) {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });

            model4.traverse(function (child) {
                if (child.isMesh) {
                    child.material.transparent = true;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });



            model7.traverse(function (child) {
                if (child.isMesh) {
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });
            model8.traverse(function (child) {
                if (child.isMesh) {
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                    child.material.opacity = 1;
                }
            });

            model9.visible = true;
            qiangtiswitch = !qiangtiswitch;
            document.getElementById("隐藏墙体").src = "assets/texture/wall_off.png";
            document.getElementById("3").style.background ='#444444';
            document.getElementById("墙体文字").innerText = "隐藏墙体";
            document.getElementById("墙体文字").style.color = "#cccccc";
        }
       ALL = all;

        function Qiangti() {
            qiangtiswitch = !qiangtiswitch;
            if ( qiangtiswitch) {
                document.getElementById("隐藏墙体").src = "assets/texture/wall_on.png";
                document.getElementById("3").style.background ='#444444';
                document.getElementById("墙体文字").innerText = "隐藏墙体";
                document.getElementById("墙体文字").style.color = "#cccccc";
            }else {
                document.getElementById("隐藏墙体").src = "assets/texture/wall_off.png";
                document.getElementById("3").style.background ='#fff35d';
                document.getElementById("墙体文字").innerText = "显示墙体";
                document.getElementById("墙体文字").style.color = "#444444";

            }
            model9.visible = qiangtiswitch;
        }
        qiangti = Qiangti;

        function Showmodel(){
            //全景点可见
            model.visible = true;
            model2.visible = true;
            model3.visible = true;
            model4.visible = true;
            model5.visible = true;
            model6.visible = true;
            model7.visible = true;
            model8.visible = true;
        }
        showALL = Showmodel;

        function showTag(){
            setTimeout(function () {

                if(secoundFloor){
                    document.getElementById("2ftag").style.display = '';

                }
                if (thirdFloor) {
                    document.getElementById("3ftag").style.display = '';

                }
                if (fourthFloor) {
                    document.getElementById("4ftag").style.display = '';

                }
                if (fifthFloor){
                    document.getElementById("5ftag").style.display = '';
                }


                if(secoundFloor){
                    document.getElementById("p1").style.display = '';
                    document.getElementById("p2").style.display = '';
                    document.getElementById("p3").style.display = '';
                }
                if (thirdFloor) {
                    document.getElementById("p4").style.display = '';
                    document.getElementById("p5").style.display = '';
                }
                if (fourthFloor) {
                    document.getElementById("p6").style.display = '';
                    document.getElementById("p7").style.display = '';
                    document.getElementById("p8").style.display = '';
                }
                if (fifthFloor){
                    document.getElementById("p9").style.display = '';
                    document.getElementById("p10").style.display = '';
                    document.getElementById("p11").style.display = '';
                }

            },1500);
        }
        showtag = showTag;

         //楼层UI控制
        function UI(){
            UIswitch = !UIswitch;
            if (UIswitch) {
                document.getElementById('A').className = "floorChoice3 loucengUI";
                document.getElementById("A").style.background ='#525252';
                document.getElementById("2f").style.display = "block";
                document.getElementById("3f").style.display = "block";
                document.getElementById("4f").style.display = "block";
                document.getElementById("5f").style.display = "block";
                document.getElementById("all").style.display = "block";
                document.getElementById("楼层文字").style.color = "#ffffff";

            }else {
                document.getElementById('A').className = "floorChoice1 loucengUI";
                document.getElementById("A").style.background ='#444444';
                document.getElementById("2f").style.display = "none";
                document.getElementById("3f").style.display = "none";
                document.getElementById("4f").style.display = "none";
                document.getElementById("5f").style.display = "none";
                document.getElementById("all").style.display = "none";
                document.getElementById("楼层文字").style.color = "#cccccc";
            }
        }
        loucengUI = UI;



        //加载界面
        setTimeout(function () {
            //document.getElementById("2f").style.display = "";
            //document.getElementById("3f").style.display = "";
           // document.getElementById("4f").style.display = "";
            //document.getElementById("5f").style.display = "";


        },1);
        //19000
       /* setTimeout(function() {
            document.getElementById("load3").innerHTML= "";
            document.getElementById("load").innerHTML= "";
            document.getElementById("load").style.display= "none";
            document.getElementById("load3").style.display= "none";
            document.getElementById("load2").innerHTML= "";
            document.getElementById("load2").style.display= "none";

        },1);
        //19000
        setTimeout(function() {

            document.getElementById("load4").innerHTML= "";
            document.getElementById("load4").style.display= "none";
        },1);
        //23000
        setTimeout(function () {
            //document.getElementById('load2').className = "test";
            document.getElementById('load4').className = "test";
        },1);
        //19000*/


        var clock = new THREE.Clock();


        //渲染函数
        function render() {
            stats.update();
            TWEEN.update();



            clock = new THREE.Clock();
            var delta = clock.getDelta();
            orbitControls.update(delta);
            //console.log(camera.position);
            renderer.clear();

            updateScreenPosition();
            updateScreenPosition2();
            updateScreenPosition3();
            updateScreenPosition4();
            updateScreenPosition5();
            updateScreenPosition6();
            updateScreenPosition7();
            updateScreenPosition8();
            updateScreenPosition9();
            updateScreenPosition10();
            updateScreenPosition11();

            updatetagPosition1();

                /*if (Rotation ) {
                    model.rotation.y += 0.005;
                    model2.rotation.y += 0.005;
                    model3.rotation.y += 0.005;
                    model4.rotation.y += 0.005;
                    model5.rotation.y += 0.005;
                    model6.rotation.y += 0.005;
                    model7.rotation.y +=0.005;
                    model8.rotation.y += 0.005;
                    model9.rotation.y += 0.005;
                }*/


            renderer.render(scene, camera);
            requestAnimationFrame(render);

        }

        //全景球标记点击触发事件
       /* function onDocumentMouseDown1(event) {
            event.preventDefault();
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( mouse, camera );
            var intersects = raycaster.intersectObjects([mark1],true );
            if (intersects.length > 0) {
                if (intersect)
                    intersect = intersects[0].object;


                //隐藏模型和标记球，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").hidden = true;
                document.getElementById("A").style.display = "none";
                document.getElementById("B").style.display = "none";
                document.getElementById("1").style.display = "none";
                document.getElementById("2").style.display = "none";
                document.getElementById("3").style.display = "none";

                document.getElementById("p1").style.display = 'none';
                document.getElementById("p2").style.display = 'none';
                document.getElementById("p3").style.display = 'none';
                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            } else {
                if (intersect)
                    intersect = null;
            }
        }*/

        //全景球选中出发事件
       /* function onDocumentMouseMove1(event) {
            event.preventDefault();
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( mouse, camera );
            var intersects = raycaster.intersectObjects([mark1],true );
            if (intersects.length > 0) {
                //if (intersect){mark1.scale.set(1,1,1);}
                intersect = intersects[0].object;
                intersect.scale.set(2,2,2);
            } else {
                mark1.scale.set(1,1,1);
                intersect = null;
            }
        }*/



        //标签
        function updateScreenPosition() {
            var vector = new THREE.Vector3(500, 30, -200);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation.style.top = vector.y + "px";
            annotation.style.left =  vector.x + "px";
            annotation.style.opacity = spriteBehindObject ? 0.25 : 1;
        }

        function updateScreenPosition2() {
            var vector = new THREE.Vector3(600,60, 300);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation2.style.top = vector.y + "px";
            annotation2.style.left =  vector.x + "px";
            annotation2.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition3() {
            var vector = new THREE.Vector3(-600, 30, 300);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation3.style.top = vector.y + "px";
            annotation3.style.left =  vector.x + "px";
            annotation3.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition4() {
            var vector = new THREE.Vector3(-550, 90, 0);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation4.style.top = vector.y + "px";
            annotation4.style.left =  vector.x + "px";
            annotation4.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition5() {
            var vector = new THREE.Vector3(550, 90, 0);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation5.style.top = vector.y + "px";
            annotation5.style.left =  vector.x + "px";
            annotation5.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition6() {
            var vector = new THREE.Vector3(550, 150, 0);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation6.style.top = vector.y + "px";
            annotation6.style.left =  vector.x + "px";
            annotation6.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition7() {
            var vector = new THREE.Vector3(0, 200, 0);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation7.style.top = vector.y + "px";
            annotation7.style.left =  vector.x + "px";
            annotation7.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition8() {
            var vector = new THREE.Vector3(-550, 150, 0);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation8.style.top = vector.y + "px";
            annotation8.style.left =  vector.x + "px";
            annotation8.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition9() {
            var vector = new THREE.Vector3(-550, 210, 100);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation9.style.top = vector.y + "px";
            annotation9.style.left =  vector.x + "px";
            annotation9.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition10() {
            var vector = new THREE.Vector3(600, 210, -300);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation10.style.top = vector.y + "px";
            annotation10.style.left =  vector.x + "px";
            annotation10.style.opacity = spriteBehindObject ? 0.25 : 1;
        }
        function updateScreenPosition11() {
            var vector = new THREE.Vector3(600, 210, 300);
            vector.project(camera);

            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);

            annotation11.style.top = vector.y + "px";
            annotation11.style.left =  vector.x + "px";
            annotation11.style.opacity = spriteBehindObject ? 0.25 : 1;
        }

        function updatetagPosition1() {
            var vector = new THREE.Vector3(0,0,220);
            var vector2= new THREE.Vector3(150,0,220);
            var vector3= new THREE.Vector3(-150,0,220);
            var vector4= new THREE.Vector3(90,0,-70);
            var vector5= new THREE.Vector3(-550,0,180);
            var vector6= new THREE.Vector3(450,0,200);
            var vector7= new THREE.Vector3(300,0,80);
            var vector8= new THREE.Vector3(0,0,400);
            var vector9= new THREE.Vector3(-20,50,215);
            var vector10= new THREE.Vector3(-450,50,215);
            var vector11= new THREE.Vector3(500,50,215);
            var vector12= new THREE.Vector3(230,50,-185);
            var vector13= new THREE.Vector3(200,110,15);
            var vector14= new THREE.Vector3(450,110,215);
            var vector15= new THREE.Vector3(-450,110,215);
            var vector16= new THREE.Vector3(-200,110,-185);
            var vector17= new THREE.Vector3(200,160,215);
            var vector18= new THREE.Vector3(-650,160,15);
            var vector19= new THREE.Vector3(200,160,-185);
            var vector20= new THREE.Vector3(-530,160,215);

            vector.project(camera);
            vector2.project(camera);
            vector3.project(camera);
            vector4.project(camera);
            vector5.project(camera);
            vector6.project(camera);
            vector7.project(camera);
            vector8.project(camera);
            vector9.project(camera);
            vector10.project(camera);
            vector11.project(camera);
            vector12.project(camera);
            vector13.project(camera);
            vector14.project(camera);
            vector15.project(camera);
            vector16.project(camera);
            vector17.project(camera);
            vector18.project(camera);
            vector19.project(camera);
            vector20.project(camera);

            vector.x =  Math.round((0.5 + vector.x / 2) * window.innerWidth) ;
            vector.y =  Math.round((0.5 - vector.y / 2) * window.innerHeight);
            vector2.x = Math.round((0.5 + vector2.x / 2) * window.innerWidth);
            vector2.y = Math.round((0.5 - vector2.y / 2) * window.innerHeight);
            vector3.x = Math.round((0.5 + vector3.x / 2) * window.innerWidth);
            vector3.y = Math.round((0.5 - vector3.y / 2) * window.innerHeight);
            vector4.x = Math.round((0.5 + vector4.x / 2) * window.innerWidth);
            vector4.y = Math.round((0.5 - vector4.y / 2) * window.innerHeight);
            vector5.x = Math.round((0.5 + vector5.x / 2) * window.innerWidth);
            vector5.y = Math.round((0.5 - vector5.y / 2) * window.innerHeight);
            vector6.x = Math.round((0.5 + vector6.x / 2) * window.innerWidth);
            vector6.y = Math.round((0.5 - vector6.y / 2) * window.innerHeight);
            vector7.x = Math.round((0.5 + vector7.x / 2) * window.innerWidth);
            vector7.y = Math.round((0.5 - vector7.y / 2) * window.innerHeight);
            vector8.x = Math.round((0.5 + vector8.x / 2) * window.innerWidth);
            vector8.y = Math.round((0.5 - vector8.y / 2) * window.innerHeight);
            vector9.x = Math.round((0.5 + vector9.x / 2) * window.innerWidth);
            vector9.y = Math.round((0.5 - vector9.y / 2) * window.innerHeight);
            vector10.x = Math.round((0.5 + vector10.x / 2) * window.innerWidth);
            vector10.y = Math.round((0.5 - vector10.y / 2) * window.innerHeight);
            vector11.x = Math.round((0.5 + vector11.x / 2) * window.innerWidth);
            vector11.y = Math.round((0.5 - vector11.y / 2) * window.innerHeight);
            vector12.x = Math.round((0.5 + vector12.x / 2) * window.innerWidth);
            vector12.y = Math.round((0.5 - vector12.y / 2) * window.innerHeight);
            vector13.x = Math.round((0.5 + vector13.x / 2) * window.innerWidth);
            vector13.y = Math.round((0.5 - vector13.y / 2) * window.innerHeight);
            vector14.x = Math.round((0.5 + vector14.x / 2) * window.innerWidth);
            vector14.y = Math.round((0.5 - vector14.y / 2) * window.innerHeight);
            vector15.x = Math.round((0.5 + vector15.x / 2) * window.innerWidth);
            vector15.y = Math.round((0.5 - vector15.y / 2) * window.innerHeight);
            vector16.x = Math.round((0.5 + vector16.x / 2) * window.innerWidth);
            vector16.y = Math.round((0.5 - vector16.y / 2) * window.innerHeight);
            vector17.x = Math.round((0.5 + vector17.x / 2) * window.innerWidth);
            vector17.y = Math.round((0.5 - vector17.y / 2) * window.innerHeight);
            vector18.x = Math.round((0.5 + vector18.x / 2) * window.innerWidth);
            vector18.y = Math.round((0.5 - vector18.y / 2) * window.innerHeight);
            vector19.x = Math.round((0.5 + vector19.x / 2) * window.innerWidth);
            vector19.y = Math.round((0.5 - vector19.y / 2) * window.innerHeight);
            vector20.x = Math.round((0.5 + vector20.x / 2) * window.innerWidth);
            vector20.y = Math.round((0.5 - vector20.y / 2) * window.innerHeight);


            tag.style.top = vector.y + "px";
            tag.style.left = vector.x + "px";
            tag2.style.top = vector2.y + "px";
            tag2.style.left = vector2.x + "px";
            tag3.style.top = vector3.y + "px";
            tag3.style.left = vector3.x + "px";
            tag4.style.top = vector4.y + "px";
            tag4.style.left = vector4.x + "px";
            tag5.style.top = vector5.y + "px";
            tag5.style.left = vector5.x + "px";
            tag6.style.top = vector6.y + "px";
            tag6.style.left = vector6.x + "px";
            tag7.style.top = vector7.y + "px";
            tag7.style.left = vector7.x + "px";
            tag8.style.top = vector8.y + "px";
            tag8.style.left = vector8.x + "px";
            tag9.style.top = vector9.y + "px";
            tag9.style.left = vector9.x + "px";
            tag10.style.top = vector10.y + "px";
            tag10.style.left = vector10.x + "px";
            tag11.style.top = vector11.y + "px";
            tag11.style.left = vector11.x + "px";
            tag12.style.top = vector12.y + "px";
            tag12.style.left = vector12.x + "px";
            tag13.style.top = vector13.y + "px";
            tag13.style.left = vector13.x + "px";
            tag14.style.top = vector14.y + "px";
            tag14.style.left = vector14.x + "px";
            tag15.style.top = vector15.y + "px";
            tag15.style.left = vector15.x + "px";
            tag16.style.top = vector16.y + "px";
            tag16.style.left = vector16.x + "px";
            tag17.style.top = vector17.y + "px";
            tag17.style.left = vector17.x + "px";
            tag18.style.top = vector18.y + "px";
            tag18.style.left = vector18.x + "px";
            tag19.style.top = vector19.y + "px";
            tag19.style.left = vector19.x + "px";
            tag20.style.top = vector20.y + "px";
            tag20.style.left = vector20.x + "px";

        }

        function onclickTag() {

            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween( camera.position).to({x:0, y:30, z:220},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-50, y:30, z:170},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1400);


            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";


        }
        Tag = onclickTag;

        function onclickTag2() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:150, y:30, z:220},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:0, y:30, z:220},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour2.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

        }
        Tag2 = onclickTag2;

        function onclickTag3() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-150, y:30, z:220},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:0, y:30, z:220},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour3.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';



            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag3 = onclickTag3;

        function onclickTag4() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:90, y:30, z:-70},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-150, y:30, z:-100},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour4.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag4 = onclickTag4;

        function onclickTag5() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-550, y:30, z:120},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-550, y:30, z:300},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour5.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag5 = onclickTag5;

        function onclickTag6() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:450, y:30, z:200},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:100, y:30, z:300},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour6.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);


            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag6= onclickTag6;
        function onclickTag7() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:300, y:30, z:80},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:380, y:30, z:0},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour7.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag7 = onclickTag7;
        function onclickTag8() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:0, y:30, z:400},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-50, y:30, z:300},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour8.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
        }
        Tag8 = onclickTag8;

        function onclickTag9() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-20, y:90, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:50, y:90, z:170},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour9.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';


            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag9 = onclickTag9;

        function onclickTag10() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-390, y:90, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-600, y:90, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour10.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);


            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag10= onclickTag10;
        function onclickTag11() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:450, y:90, z:165},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:600, y:90, z:315},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour11.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
        }
        Tag11 = onclickTag11;

        function onclickTag12() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:180, y:90, z:-235},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:260, y:90, z:-200},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour12.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag12 = onclickTag12;

        function onclickTag13() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:180, y:150, z:15},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:400, y:150, z:15},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour13.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';


            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag13 = onclickTag13;

        function onclickTag14() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:450, y:150, z:180},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:400, y:150, z:400},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour14.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';


            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag14 = onclickTag14;

        function onclickTag15() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-430, y:150, z:230},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-700, y:150, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour15.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';


            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag15 = onclickTag15;

        function onclickTag16() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-150, y:150, z:-200},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-400, y:150, z:-300},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour16.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';


            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag16 = onclickTag16;

        function onclickTag17() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:200, y:210, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-400, y:210, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour17.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';
            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';
            document.getElementById("p9").style.display = 'none';
            document.getElementById("p10").style.display = 'none';
            document.getElementById("p11").style.display = 'none';


            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag17 = onclickTag17;

        function onclickTag18() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-670, y:210, z:15},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-500, y:210, z:-50},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour18.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';
            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';
            document.getElementById("p9").style.display = 'none';
            document.getElementById("p10").style.display = 'none';
            document.getElementById("p11").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag18= onclickTag18;

        function onclickTag19() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:180, y:210, z:-220},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:300, y:210, z:-85},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour19.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);
            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';
            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';
            document.getElementById("p9").style.display = 'none';
            document.getElementById("p10").style.display = 'none';
            document.getElementById("p11").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag19= onclickTag19;

        function onclickTag20() {
            p2.x = camera.position.x;
            p2.y = camera.position.y;
            p2.z = camera.position.z;

            tween1 = new TWEEN.Tween(camera.position).to({x:-530, y:210, z:215},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            tween2 = new TWEEN.Tween(orbitControls.center).to({x:-700, y:210, z:180},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();

            setTimeout(function () {
                //隐藏模型，提升帧率
                model.visible = false;
                model2.visible = false;
                model3.visible = false;
                model4.visible = false;
                model5.visible = false;
                model6.visible = false;
                model7.visible = false;
                model8.visible = false;
                model9.visible = false;

                document.getElementById("pano").style.display = "";
                document.getElementById("pano").style.animation = 'pano 1s';
                document.getElementById("全景退出").style.display = "";
                document.getElementById("WebGL-output").style.display = "none";

                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour20.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },1500);

            //隐藏所有全景标记
            document.getElementById("2ftag").style.display = 'none';
            document.getElementById("3ftag").style.display = 'none';
            document.getElementById("4ftag").style.display = 'none';
            document.getElementById("5ftag").style.display = 'none';

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';
            document.getElementById("p4").style.display = 'none';
            document.getElementById("p5").style.display = 'none';
            document.getElementById("p6").style.display = 'none';
            document.getElementById("p7").style.display = 'none';
            document.getElementById("p8").style.display = 'none';
            document.getElementById("p9").style.display = 'none';
            document.getElementById("p10").style.display = 'none';
            document.getElementById("p11").style.display = 'none';

            document.getElementById("A").style.display = "none";
            document.getElementById("B").style.display = "none";
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";

            document.getElementById("p1").style.display = 'none';
            document.getElementById("p2").style.display = 'none';
            document.getElementById("p3").style.display = 'none';

        }
        Tag20 = onclickTag20;

        function tagChange() {
            document.getElementById("t1").style.opacity = '0.5';
        }
        big = tagChange;
        function tagRe() {
            document.getElementById("t1").style.opacity = '1';
        }
        re = tagRe ;
        function tagChange2() {
            document.getElementById("t2").style.opacity = '0.5';
        }
        big2 = tagChange2;
        function tagRe2() {
            document.getElementById("t2").style.opacity = '1';
        }
        re2 = tagRe2 ;
        function tagChange3() {
            document.getElementById("t3").style.opacity = '0.5';
        }
        big3 = tagChange3;
        function tagRe3() {
            document.getElementById("t3").style.opacity = '1';
        }
        re3= tagRe3 ;
        function tagChange4() {
            document.getElementById("t4").style.opacity = '0.5';
        }
        big4 = tagChange4;
        function tagRe4() {
            document.getElementById("t4").style.opacity = '1';
        }
        re4 = tagRe4 ;
        function tagChange5() {
            document.getElementById("t5").style.opacity = '0.5';
        }
        big5 = tagChange5;
        function tagRe5() {
            document.getElementById("t5").style.opacity = '1';
        }
        re5 = tagRe5 ;
        function tagChange6() {
            document.getElementById("t6").style.opacity = '0.5';
        }
        big6 = tagChange6;
        function tagRe6() {
            document.getElementById("t6").style.opacity = '1';
        }
        re6 = tagRe6 ;
        function tagChange7() {
            document.getElementById("t7").style.opacity = '0.5';
        }
        big7 = tagChange7;
        function tagRe7() {
            document.getElementById("t7").style.opacity = '1';
        }
        re7 = tagRe7 ;
        function tagChange8() {
            document.getElementById("t8").style.opacity = '0.5';
        }
        big8 = tagChange8;
        function tagRe8() {
            document.getElementById("t8").style.opacity = '1';
        }
        re8 = tagRe8 ;
        function tagChange9() {
            document.getElementById("t9").style.opacity = '0.5';
        }
        big9 = tagChange9;
        function tagRe9() {
            document.getElementById("t9").style.opacity = '1';
        }
        re9 = tagRe9 ;
        function tagChange10() {
            document.getElementById("t10").style.opacity = '0.5';
        }
        big10 = tagChange10;
        function tagRe10() {
            document.getElementById("t10").style.opacity = '1';
        }
        re10 = tagRe10 ;
        function tagChange11() {
            document.getElementById("t11").style.opacity = '0.5';
        }
        big11 = tagChange11;
        function tagRe11() {
            document.getElementById("t11").style.opacity = '1';
        }
        re11 = tagRe11 ;
        function tagChange12() {
            document.getElementById("t12").style.opacity = '0.5';
        }
        big12 = tagChange12;
        function tagRe12() {
            document.getElementById("t12").style.opacity = '1';
        }
        re12 = tagRe12 ;
        function tagChange13() {
            document.getElementById("t13").style.opacity = '0.5';
        }
        big13 = tagChange13;
        function tagRe13() {
            document.getElementById("t13").style.opacity = '1';
        }
        re13 = tagRe13 ;
        function tagChange14() {
            document.getElementById("t14").style.opacity = '0.5';
        }
        big14 = tagChange14;
        function tagRe14() {
            document.getElementById("t14").style.opacity = '1';
        }
        re14 = tagRe14 ;
        function tagChange15() {
            document.getElementById("t15").style.opacity = '0.5';
        }
        big15= tagChange15;
        function tagRe15() {
            document.getElementById("t15").style.opacity = '1';
        }
        re15 = tagRe15 ;
        function tagChange16() {
            document.getElementById("t16").style.opacity = '0.5';
        }
        big16 = tagChange16;
        function tagRe16() {
            document.getElementById("t16").style.opacity = '1';
        }
        re16 = tagRe16 ;

        function tagChange17() {
            document.getElementById("t17").style.opacity = '0.5';
        }
        big17 = tagChange17;
        function tagRe17() {
            document.getElementById("t17").style.opacity = '1';
        }
        re17 = tagRe17 ;

        function tagChange18() {
            document.getElementById("t18").style.opacity = '0.5';
        }
        big18 = tagChange18;
        function tagRe18() {
            document.getElementById("t18").style.opacity = '1';
        }
        re18 = tagRe18 ;

        function tagChange19() {
            document.getElementById("t19").style.opacity = '0.5';
        }
        big19 = tagChange19;
        function tagRe19() {
            document.getElementById("t19").style.opacity = '1';
        }
        re19 = tagRe19 ;

        function tagChange20() {
            document.getElementById("t20").style.opacity = '0.5';
        }
        big20 = tagChange20;
        function tagRe20() {
            document.getElementById("t20").style.opacity = '1';
        }
        re20 = tagRe20 ;

        function StarButton() {
            if (loadFinish) {
                    document.getElementById('load4').setAttribute("style","-webkit-animation:move 1s;");
                    document.getElementById('load2').style.animation = 'move2 1s ';
                    document.getElementById('load2').style.animationIterationCount = '1';
                    document.getElementById('load5').style.animation = 'move3 1s ';
                    document.getElementById('load5').style.animationIterationCount = '1';

                setTimeout(function () {
                    document.getElementById('loadUI').style.display = 'none';
                    document.getElementById('loadUI').innerHTML = '';
                },900);
                setTimeout(function () {
                document.getElementById('load4').innerHTML = '';
                },900);
                tween2 = new TWEEN.Tween(camera.position).to({x:500, y:600, z:1000}, 1000).easing(TWEEN.Easing.Sinusoidal.InOut);
                tween1 = new TWEEN.Tween( orbitControls.center).to({x:0, y:0, z:-200}, 1000).easing(TWEEN.Easing.Sinusoidal.InOut);
                setTimeout(function () {
                    tween2.start();
                    tween1.start();
                    orbitControls.center= new THREE.Vector3(0, 0, -100);
                },1000);
                setTimeout(function () {
                    orbitControls.maxPolarAngle = Math.PI / 2;
                    // console.log(document.getElementById("B").style.display);
                    document.getElementById("B").style.display = 'block';
                },2000);
                setTimeout(function () {
                    document.getElementById("help123").style.display = "block";
                },3000);

                document.getElementById('loadingBackground' ).style.display = 'none';
                document.getElementById('loading').style.display = 'none';
                document.getElementById('loadingText').style.display = 'none';
               // document.getElementById('load5').style.transform = 'translateY(100%)';
                //document.getElementById('load6').style.transform = 'translateY(-100%)';
                document.getElementById("1").style.display = "block";
                document.getElementById("2").style.display = "block";
                document.getElementById("3").style.display = "block";
                document.getElementById("A").style.display = "block";


            }
        }
        startbutton = StarButton;

        function panoback() {
            document.getElementById("pano").style.animation = 'panoback 1s';
            setTimeout(function () {
                document.getElementById('pano').style.display='none';
                document.getElementById('pano').innerHTML='';
                document.getElementById('A').style.display = 'block';
                document.getElementById('B').style.display = 'block';
                document.getElementById('1').style.display = 'block';
                document.getElementById('2').style.display = 'block';
                document.getElementById('3').style.display = 'block';
                tween1 = new TWEEN.Tween( camera.position).to(p2, 1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
                tween2 = new TWEEN.Tween(orbitControls.center).to({x:0, y:0, z:-200},1500).easing(TWEEN.Easing.Sinusoidal.InOut).start();
            },900);



        }
        panoBack = panoback;

        function initStats() {

            var stats = new Stats();

            stats.setMode(0); // 0: fps, 1: ms

            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            // document.getElementById("Stats-output").appendChild(stats.domElement);

            return stats;
        }

    }
    function onResize() {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth, window.innerHeight);
    }

window.onload = init;
window.addEventListener('resize', onResize, false);
