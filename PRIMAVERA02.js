import * as THREE from "./three.module.js";
export default function PRIM02({x,y,z}){

    //personaje y 
        //pasto
        var geometry1 = new THREE.BoxGeometry(250, 2, 200, 1, 1, 1);
        var material1 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh1 = new THREE.Mesh(geometry1, material1);
        mesh1.position.set(-125, -0.3, 0);
        mesh1.rotation.set(0, 0, 0);
        //scene.add(mesh1);
        
        //cerritos
        var geometry2 = new THREE.ConeGeometry(25,30,20,30);
        var material2 = new THREE.MeshLambertMaterial({ color: 0x4D8543, side:THREE.DoubleSide});
        var mesh2 = new THREE.Mesh(geometry2, material2);
        mesh2.position.set(-60, 15, -70);
        mesh2.rotation.set(0, 0, 0);
        //scene.add(mesh2);

        var material3 = new THREE.MeshLambertMaterial({ color: 0x4D8543, side:THREE.DoubleSide});
        var geometry3 = new THREE.ConeGeometry(25,30,20,30);
        var mesh3 = new THREE.Mesh(geometry3, material3);
        mesh3.position.set(-85, 15, -70);
        mesh3.rotation.set(0, 0, 0);
        //scene.add(mesh3);

        var material3 = new THREE.MeshLambertMaterial({ color: 0x4D8543, side:THREE.DoubleSide});
        var geometry3 = new THREE.ConeGeometry(25,30,20,30);
        var mesh3 = new THREE.Mesh(geometry3, material3);
        mesh3.position.set(-110, 15, -70);
        mesh3.rotation.set(0, 0, 0);
        //scene.add(mesh3);

        //pino
        var geometry4= new THREE.CylinderGeometry(5,5,20,10,10,false,3.5);
        var material4 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh4 = new THREE.Mesh(geometry4, material4);
        mesh4.position.set(-8, 9.8, 30);
        mesh4.rotation.set(0, 0, 0);
        //scene.add(mesh4);

        var geometry5= new THREE.ConeGeometry(10,15,20,10);
        var material5 = new THREE.MeshLambertMaterial({ color: 0x086F29, side:THREE.DoubleSide});
        var mesh5 = new THREE.Mesh(geometry5, material5);
        mesh5.position.set(-8, 22, 30);
        mesh5.rotation.set(0, 0, 0);
        //scene.add(mesh5);

        var geometry6= new THREE.ConeGeometry(10,15,20,10);
        var material6 = new THREE.MeshLambertMaterial({ color: 0x086F29, side:THREE.DoubleSide});
        var mesh6 = new THREE.Mesh(geometry6, material6);
        mesh6.position.set(-8, 27, 30);
        mesh6.rotation.set(0, 0, 0);
        //scene.add(mesh6);

        var geometry7= new THREE.ConeGeometry(10,15,20,10);
        var material7 = new THREE.MeshLambertMaterial({ color: 0x086F29, side:THREE.DoubleSide});
        var mesh7 = new THREE.Mesh(geometry6, material6);
        mesh7.position.set(-8, 32, 30);
        mesh7.rotation.set(0, 0, 0);
        //scene.add(mesh7);

        var pino1 = new THREE.Group();
      pino1.add(mesh4, mesh5, mesh6, mesh7);
      //scene.add(pino1);

      var pino2 = pino1.clone();
      //scene.add(pino2);
      pino2.position.set(-130,1,-100);

      var pino3 = pino1.clone();
      //scene.add(pino3);
      pino3.position.set(-220,1,-100);

      var pino4 = pino1.clone();
      //scene.add(pino4);
      pino4.position.set(-5,1,-100);

      var pino4 = pino1.clone();
      //scene.add(pino4);
      pino4.position.set(-20,1,-95);

      var pino5 = pino1.clone();
      //scene.add(pino5);
      pino5.position.set(-180,1,20);


      //flores
        var geometry8 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material8 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh8 = new THREE.Mesh(geometry8, material8);
        mesh8.position.set(-70, 10, 95);
        mesh8.rotation.set(0, 0, 0);
        //scene.add(mesh8);

        var geometry9 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material9 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh9 = new THREE.Mesh(geometry9, material9);
        mesh9.position.set(-70, 10, 95);
        mesh9.rotation.set(0,0, 0.785);
        //scene.add(mesh9);

        var geometry10 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material10 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh10 = new THREE.Mesh(geometry10, material10);
        mesh10.position.set(-70, 10, 95);
        mesh10.rotation.set(0,0, 1.57);
        //scene.add(mesh10);

        var geometry11 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material11 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh11 = new THREE.Mesh(geometry11, material11);
        mesh11.position.set(-70, 10, 95);
        mesh11.rotation.set(0,0, 2.355);
        //scene.add(mesh11);

        var geometry12 = new THREE.SphereGeometry(4,50,50);
        var material12 = new THREE.MeshLambertMaterial({ color: 0xF9ED34, side:THREE.DoubleSide});
        var mesh12 = new THREE.Mesh(geometry12, material12);
        mesh12.position.set(-70,10,95);
        mesh12.rotation.set(0, 0, 0);
        //scene.add(mesh12);

        var flor1 = new THREE.Group();
      flor1.add(mesh8, mesh9, mesh10, mesh11, mesh12);
      //scene.add(flor1);

      var flor2 = flor1.clone();
      //scene.add(flor2);
      flor2.position.set(-25,1,28);
      flor2.scale.set(0.75,0.75,0.75);

      var flor3 = flor1.clone();
      //scene.add(flor3);
      flor3.position.set(-60,1,20);
      flor3.scale.set(0.50,0.50,0.50);

      var flor4 = flor1.clone();
      //scene.add(flor4);
      flor4.position.set(-7,1,20);
      flor4.scale.set(0.50,0.50,0.50);

      var flor5 = flor1.clone();
      //scene.add(flor5);
      flor5.position.set(-150,0,-10);

      var flor6 = flor1.clone();
      //scene.add(flor6);
      flor6.position.set(-155,0,12);
      flor6.scale.set(0.75,0.75,0.75);
    


      //arbolitos
      var geometry13 = new THREE.SphereGeometry(6, 50, 50);
        var material13 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh13 = new THREE.Mesh(geometry13, material13);
        mesh13.position.set(-70, 6, 90);
        //scene.add(mesh13);

        var geometry14 = new THREE.SphereGeometry(7, 50, 50);
        var material14 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh14 = new THREE.Mesh(geometry14, material14);
        mesh14.position.set(-65, 6, 90);
        //scene.add(mesh14);

        var geometry15 = new THREE.SphereGeometry(6.5, 50, 50);
        var material15 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh15 = new THREE.Mesh(geometry15, material15);
        mesh15.position.set(-55, 6, 90);
        //scene.add(mesh15);

        
        var arb = new THREE.Group();
      arb.add(mesh13, mesh14, mesh15);
      //scene.add(arb);

      var arb1 = arb.clone();
      //scene.add(arb1);
      arb1.position.set(-160,1,10);
      arb1.scale.set(0.75,0.75,0.75);



        //sol
        var geometry16 = new THREE.SphereGeometry(30, 50, 50);
        var material16 = new THREE.MeshLambertMaterial({ color: 0xE4C818, side:THREE.DoubleSide});
        var mesh16 = new THREE.Mesh(geometry16, material16);
        mesh16.position.set(-250, 90, -100);
        //scene.add(mesh16);

        //montañas
        var geometry17 = new THREE.ConeGeometry(29,35,10,30);
        var material17 = new THREE.MeshLambertMaterial({ color: 0x502E09, side:THREE.DoubleSide});
        var mesh17 = new THREE.Mesh(geometry17, material17);
        mesh17.position.set(-170, 15, -65);
        mesh17.rotation.set(0, 0, 0);
        //scene.add(mesh17);

        var geometry27 = new THREE.ConeGeometry(29,35,10,30);
        var material27 = new THREE.MeshLambertMaterial({ color: 0x502E09, side:THREE.DoubleSide});
        var mesh27 = new THREE.Mesh(geometry27, material27);
        mesh27.position.set(-195, 15, -65);
        mesh27.rotation.set(0, 0, 0);
        //scene.add(mesh27);

        //nubes
        var geometry16 = new THREE.SphereGeometry(7.5, 50, 50);
        var material16 = new THREE.MeshLambertMaterial({ color: 0x52A0DC, side:THREE.DoubleSide});
        var mesh16 = new THREE.Mesh(geometry16, material16);
        mesh16.position.set(-40, 60, -100);
        //scene.add(mesh16);

        var geometry17 = new THREE.SphereGeometry(9, 50, 50);
        var material17 = new THREE.MeshLambertMaterial({ color: 0x52A0DC, side:THREE.DoubleSide});
        var mesh17 = new THREE.Mesh(geometry17, material17);
        mesh17.position.set(-30, 60, -100);
        //scene.add(mesh17);

        var geometry18 = new THREE.SphereGeometry(8.5, 50, 50);
        var material18 = new THREE.MeshLambertMaterial({ color: 0x52A0DC, side:THREE.DoubleSide});
        var mesh18 = new THREE.Mesh(geometry18, material18);
        mesh18.position.set(-20, 60, -100);
        //scene.add(mesh18);

        var nube = new THREE.Group();
      nube.add(mesh16, mesh17, mesh18);
      //scene.add(nube);

      var nube1 = nube.clone();
      //scene.add(nube1);
      nube1.position.set(-80,20,-20);

      var nube2 = nube.clone();
      //scene.add(nube2);
      nube2.position.set(-160,10,-10);
      

        //cabaña 
        var geometry19 = new THREE.BoxGeometry(15, 25, 18, 10, 10,10);
        var material19 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh19 = new THREE.Mesh(geometry19, material19);
        mesh19.position.set(-50, 1, -15);
        //scene.add(mesh19);

        var geometry20= new THREE.ConeGeometry(12,5,20,10);
        var material20 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh20 = new THREE.Mesh(geometry20, material20);
        mesh20.position.set(-50, 16, -15);
        mesh20.rotation.set(0, 0, 0);
        //scene.add(mesh20);

        var geometry21 = new THREE.BoxGeometry(4, 5, 5, 10, 10,10);
        var material21 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh21 = new THREE.Mesh(geometry21, material21);
        mesh21.position.set(-55, 16, -15);
        //scene.add(mesh21);

        var cab= new THREE.Group();
      cab.add(mesh19, mesh20, mesh21);
      //scene.add(cab);

      var cab1 = cab.clone();
      //scene.add(cab1);
      cab1.position.set(-1,1,23);
      cab1.scale.set(0.75,0.75,0.75);

      var cab2 = cab.clone();
      //scene.add(cab2);
      cab2.position.set(-180,1,23);

      var cab3 = cab.clone();
      //scene.add(cab3);
      cab3.position.set(-170,1,23);
      cab3.scale.set(0.75,0.75,0.75);

      
      


        //flores2.0
        var geometry22 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material22 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh22 = new THREE.Mesh(geometry22, material22);
        mesh22.position.set(-30, 5, 80);
        mesh22.rotation.set(0, 0, 0);
        //scene.add(mesh22);

        var geometry23 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material23 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh23 = new THREE.Mesh(geometry23, material23);
        mesh23.position.set(-30, 5, 80);
        mesh23.rotation.set(0, 0, 0.785);
        //scene.add(mesh23);

        var geometry24 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material24 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh24 = new THREE.Mesh(geometry24, material24);
        mesh24.position.set(-30, 5, 80);
        mesh24.rotation.set(0, 0, 1.57);
        //scene.add(mesh24);

        var geometry25 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material25 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh25 = new THREE.Mesh(geometry25, material25);
        mesh25.position.set(-30, 5, 80);
        mesh25.rotation.set(0, 0, 2.355);
        //scene.add(mesh25);

        var geometry26 = new THREE.SphereGeometry(2.5, 8, 8);
        var material26 = new THREE.MeshLambertMaterial({ color: 0xE4C818, side:THREE.DoubleSide});
        var mesh26 = new THREE.Mesh(geometry26, material26);
        mesh26.position.set(-30, 5, 80);
        //scene.add(mesh26);
        
        var florm = new THREE.Group();
      florm.add(mesh22, mesh23, mesh24, mesh25, mesh26);
      //scene.add(florm);

      var florm1 = florm.clone();
      //scene.add(florm1);
      florm1.position.set(-1,1,23);
      florm1.scale.set(0.75,0.75,0.75);

      var florm2 = florm.clone();
      //scene.add(florm2);
      florm2.position.set(-30,1,30);
      florm2.scale.set(0.50,0.50,0.50);

      
      var florm3 = florm.clone();
      //scene.add(florm3);
      florm3.position.set(-75,1,30);
      florm3.scale.set(0.50,0.50,0.50);

      var florm4 = florm.clone();
      //scene.add(florm4);
      florm4.position.set(-125,1,-5);
      
      var florm5 = florm.clone();
      //scene.add(florm5);
      florm5.position.set(-150,1,40);
      florm5.scale.set(0.50,0.50,0.50);

      var florm6 = florm.clone();
      //scene.add(florm6);
      florm6.position.set(-220,1,30);
      florm6.scale.set(0.50,0.50,0.50);

      var florm7 = florm.clone();
      //scene.add(florm7);
      florm7.position.set(-200,1,-10);
    

      //mesa
      var geometry30 = new THREE.BoxGeometry(30, 4, 25, 10, 10,10);
        var material30 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh30 = new THREE.Mesh(geometry30, material30);
        mesh30.position.set(-120, 10, -1);
        //scene.add(mesh30);

        var geometry31 = new THREE.BoxGeometry(5, 10, 5, 10, 10,10);
        var material31 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh31 = new THREE.Mesh(geometry31, material31);
        mesh31.position.set(-120, 5, -1);
        //scene.add(mesh31);

        //banca
        var geometry32 = new THREE.BoxGeometry(10, 4, 25, 10, 10,10);
        var material32 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh32 = new THREE.Mesh(geometry32, material32);
        mesh32.position.set(-142, 6, -1);
        //scene.add(mesh32);

        var geometry33 = new THREE.BoxGeometry(5, 8, 5, 10, 10,10);
        var material33 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh33 = new THREE.Mesh(geometry33, material33);
        mesh33.position.set(-142, 1, -1);
        //scene.add(mesh33);

        var banca = new THREE.Group();
      banca.add(mesh32, mesh33);
      //scene.add(banca);

      var banca1 = banca.clone();
      scene.add(banca1);
      //banca1.position.set(45,0,1);

       //cartel
       var geometry60 = new THREE.BoxGeometry(40, 2, 15, 1, 1, 1);
        var material60 = new THREE.MeshLambertMaterial({ color: 0x21AD92 });
        var mesh60 = new THREE.Mesh(geometry60, material60);
        mesh60.position.set(-220, 25, 85);
        mesh60.rotation.set(1.57, 0, 0);
        //scene.add(mesh60); 
        mesh60.receiveShadow = true;

        //💙texto
        var loader = new FontLoader();
        var font = loader.parse(fontJSON);
        var texto1 = new TextGeometry('Spring', {
            font: font,
            size: 6,
            height: 2,
        });

texto1.center();
var materialtexto1 = new THREE.MeshLambertMaterial(
    {
        color: 0x2CCFE2,
        emissive: 0x2CCFE2,
        shading: THREE.FlatShading
    }
);

var meshtexto1 = new THREE.Mesh(texto1, materialtexto1);
meshtexto1.position.set(-220, 25, 88);
//scene.add(meshtexto1);
meshtexto1.castShadow = true;


const PRIMAVERA02 = new THREE.Group();
PRIMAVERA02.add(
    mesh1,
mesh2,
mesh3,
pino1,
pino2,
pino3,
pino4,
pino5,
flor1,
flor2,
flor3,
flor4,
flor5,
flor6,
arb,
arb1,
mesh16,
mesh17,
mesh27,
nube,
nube1,
nube2,
cab,
cab1,
cab2,
cab3,
florm,
florm1,
florm2,
florm3,
florm4,
florm5,
florm6,
florm7,
mesh30,
mesh31,
banca,
banca1,
mesh60,
meshtexto01);
PRIMAVERA02.position.set(x,y,x);
return PRIMAVERA02;
}