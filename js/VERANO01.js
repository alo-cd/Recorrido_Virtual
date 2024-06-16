import * as THREE from "./three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";
import { TextGeometry } from "./TextGeometry.js";
import { FontLoader } from "./FontLoader.js";

export default function VER01({x,y,z}){

    //playa
    var geometry20 = new THREE.BoxGeometry(250, 2, 200, 1, 1, 1);
    var material20 = new THREE.MeshLambertMaterial({ color: 0xC6A664 });
    var mesh20 = new THREE.Mesh(geometry20, material20);
    mesh20.position.set(125, -0.3, 0);
    mesh20.rotation.set(0,0,0);
    //scene.add(mesh20); 

    //puesto de helados
    var geometry1 = new RoundedBoxGeometry(15, 20, 10, 10, 0.5);
    var material1 = new THREE.MeshLambertMaterial({ color: 0xFAFA89 });
    var mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.position.set(85, 10, 70);
    mesh1.rotation.set(0, 0, 0);
    //scene.add(mesh1);


    var geometry2 = new RoundedBoxGeometry(13, 12, 10, 10, 0.5);
    var material2 = new THREE.MeshLambertMaterial({ color: 0x828383 });
    var mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(85, 11, 72);
    mesh2.rotation.set(0, 0, 0);
    //scene.add(mesh2);

    var geometry3 = new RoundedBoxGeometry(13, 2, 10, 10, 0.5);
    var material3 = new THREE.MeshLambertMaterial({ color: 0xFAFA89 });
    var mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.position.set(85, 5, 75);
    mesh3.rotation.set(0, 0, 0);
    //scene.add(mesh3);

    //helado
    var geometry4 = new THREE.ConeGeometry(4, 8, 15);
    var material4 = new THREE.MeshLambertMaterial({ color: 0xA78B83 });
    var mesh4 = new THREE.Mesh(geometry4, material4);
    mesh4.position.set(85, 25, 70);
    mesh4.rotation.set(3.14, 0, 0);
    //scene.add(mesh4);

    var geometry5 = new THREE.SphereGeometry(4.5, 50, 50);
    var material5 = new THREE.MeshLambertMaterial({ color: 0xFFBAED });
    var mesh5 = new THREE.Mesh(geometry5, material5);
    mesh5.position.set(85, 30, 70);
    mesh5.rotation.set(0, 0, 45);
    //scene.add(mesh5);

    var geometry6 = new THREE.SphereGeometry(2, 50, 50);
    var material6 = new THREE.MeshLambertMaterial({ color: 0xFFBAED });
    var mesh6 = new THREE.Mesh(geometry6, material6);
    mesh6.position.set(81, 27, 70);
    mesh6.rotation.set(0, 0, 45);
    //scene.add(mesh6);

    var geometry7 = new THREE.SphereGeometry(2, 50, 50);
    var material7 = new THREE.MeshLambertMaterial({ color: 0xFFBAED });
    var mesh7 = new THREE.Mesh(geometry7, material7);
    mesh7.position.set(89, 27, 70);
    mesh7.rotation.set(0, 0, 45);
    //scene.add(mesh7);

    var geometry8 = new THREE.SphereGeometry(2, 50, 50);
    var material8 = new THREE.MeshLambertMaterial({ color: 0xFFBAED });
    var mesh8 = new THREE.Mesh(geometry8, material8);
    mesh8.position.set(85, 27, 72);
    mesh8.rotation.set(0, 0, 45);
    //scene.add(mesh8);

    var geometry9 = new THREE.SphereGeometry(2, 50, 50);
    var material9 = new THREE.MeshLambertMaterial({ color: 0xFFBAED });
    var mesh9 = new THREE.Mesh(geometry9, material9);
    mesh9.position.set(85, 27, 68);
    mesh9.rotation.set(0, 0, 45);
    //scene.add(mesh9);

    //puesto helados agrupado
    var helado1 = new THREE.Group();
    helado1.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9);
    //scene.add(helado1);


    //alberca1
    var geometry21 = new THREE.CylinderGeometry(40, 35, 5, 20, 35);
    var material21 = new THREE.MeshLambertMaterial({ color: 0x03a7bb, side: THREE.DoubleSide });
    var mesh21 = new THREE.Mesh(geometry21, material21);
    mesh21.position.set(45, 3, -30);
    mesh21.rotation.set(0, 0, 0);
    //scene.add(mesh21); 

    var geometry22 = new THREE.TorusGeometry(40, 3, 20, 20);
    var material22 = new THREE.MeshNormalMaterial({ color: 0XFFFFFF, side: THREE.DoubleSide });
    var mesh22 = new THREE.Mesh(geometry22, material22);
    mesh22.position.set(45, 5, -30);
    mesh22.rotation.set(1.57, 0, 0);
    //scene.add(mesh22); 

    //alberca 2 con tobogan
    var geometry30 = new THREE.CylinderGeometry(55, 45, 5, 20, 35);
    var material30 = new THREE.MeshLambertMaterial({ color: 0x03a7bb, side: THREE.DoubleSide });
    var mesh30 = new THREE.Mesh(geometry30, material30);
    mesh30.position.set(190, 2, -35);
    mesh30.rotation.set(0, 0, 0);
    //scene.add(mesh30); 

    var geometry35 = new THREE.TorusGeometry(55, 3, 20, 20);
    var material35 = new THREE.MeshLambertMaterial({ color: 0XFFFFFF, side: THREE.DoubleSide });
    var mesh35 = new THREE.Mesh(geometry35, material35);
    mesh35.position.set(190, 2, -35);
    mesh35.rotation.set(1.57, 0, 0);
    //scene.add(mesh35); 

    //tobogan
    var geometry31 = new THREE.TorusGeometry(30, 6, 20, 20, 2);
    var material31 = new THREE.MeshLambertMaterial({ color: 0x1221FD, side: THREE.DoubleSide });
    var mesh31 = new THREE.Mesh(geometry31, material31);
    mesh31.position.set(150, 40, -5);
    mesh31.rotation.set(0, 3.93, 3.14);
    //scene.add(mesh31);

    var geometry32 = new RoundedBoxGeometry(15, 1, 10, 10, 0.5);
    var material32 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh32 = new THREE.Mesh(geometry32, material32);
    mesh32.position.set(180, 40, -37);
    mesh32.rotation.set(0, 0.78, 0);
    //scene.add(mesh32);

    //POSTES TOBOGAN
    var geometry33 = new THREE.CylinderGeometry(0.5, 0.5, 40, 20, 35);
    var material33 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var mesh33 = new THREE.Mesh(geometry33, material33);
    mesh33.position.set(180, 20, -42);
    mesh33.rotation.set(0, 0, 0);
    //scene.add(mesh33);

    var geometry34 = new THREE.CylinderGeometry(0.5, 0.5, 40, 20, 35);
    var material34 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var mesh34 = new THREE.Mesh(geometry34, material34);
    mesh34.position.set(185, 20, -37);
    mesh34.rotation.set(0, 0, 0);
    //scene.add(mesh34);

    //sombrilla y camastro
    //camastro
    var geometry23 = new RoundedBoxGeometry(15, 1, 10, 10, 0.5);
    var material23 = new THREE.MeshLambertMaterial({ color: 0xFA7777 });
    var mesh23 = new THREE.Mesh(geometry23, material23);
    mesh23.position.set(92, 2, -60);
    mesh23.rotation.set(0, 0.78, 0);
    //scene.add(mesh23);

    var geometry28 = new RoundedBoxGeometry(16, 0.5, 11, 10, 0.5);
    var material28 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh28 = new THREE.Mesh(geometry28, material28);
    mesh28.position.set(92, 1.9, -60);
    mesh28.rotation.set(0, 0.78, 0);
    //scene.add(mesh28);

    var geometry29 = new RoundedBoxGeometry(10, 1, 10, 10, 0.5);
    var material29 = new THREE.MeshLambertMaterial({ color: 0xFA7777 });
    var mesh29 = new THREE.Mesh(geometry29, material29);
    mesh29.position.set(95, 5, -63);
    mesh29.rotation.set(0, 0.80, 0.80);
    //scene.add(mesh29);


    //sombrilla
    var geometry24 = new THREE.CylinderGeometry(0.5, 0.5, 20, 20, 35);
    var material24 = new THREE.MeshLambertMaterial({ color: 0xD2A455, side: THREE.DoubleSide });
    var mesh24 = new THREE.Mesh(geometry24, material24);
    mesh24.position.set(91, 10, -72);
    mesh24.rotation.set(0, 0, 0);
    //scene.add(mesh24);

    var geometry25 = new THREE.ConeGeometry(8, 4.5, 30);
    var material25 = new THREE.MeshLambertMaterial({ color: 0xD93131 });
    var mesh25 = new THREE.Mesh(geometry25, material25);
    mesh25.position.set(91, 20, -72);
    mesh25.rotation.set(0, 0, 0);
    //scene.add(mesh25); 

    var geometry26 = new THREE.ConeGeometry(6, 4.5, 30);
    var material26 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh26 = new THREE.Mesh(geometry26, material26);
    mesh26.position.set(91, 21, -72);
    mesh26.rotation.set(0, 0, 0);
    //scene.add(mesh26); 

    var geometry27 = new THREE.ConeGeometry(4, 4.5, 30);
    var material27 = new THREE.MeshLambertMaterial({ color: 0xD93131 });
    var mesh27 = new THREE.Mesh(geometry27, material27);
    mesh27.position.set(91, 22, -72);
    mesh27.rotation.set(0, 0, 0);
    //scene.add(mesh27); 

    //sombrilla y camastro agrupado
    var som1 = new THREE.Group();
    som1.add(mesh23, mesh24, mesh25, mesh26, mesh27, mesh28, mesh29);
    //scene.add(som1);
  

    //sombrilla y camastro clonados
    var som2 = som1.clone();
    //scene.add(som2);
    som2.position.set(7, 0, 25);

    var som3 = som1.clone();
    //scene.add(som3);
    som3.position.set(4, 0, 50);


    //pelotas e inflables
    var geometry36 = new THREE.TorusGeometry(4, 3, 20, 20);
    var material36 = new THREE.MeshLambertMaterial({ color: 0xFD76DA });
    var mesh36 = new THREE.Mesh(geometry36, material36);
    mesh36.position.set(32, 6, -39);
    mesh36.rotation.set(1.57, 0, 0);
    //scene.add(mesh36); 

    var geometry53 = new THREE.TorusGeometry(4, 3, 20, 20);
    var material53 = new THREE.MeshLambertMaterial({ color: 0xAA2BFE });
    var mesh53 = new THREE.Mesh(geometry53, material53);
    mesh53.position.set(200, 6, 0);
    mesh53.rotation.set(1.57, 0, 0);
    //scene.add(mesh53); 

    //puesto de salvavidas
    var geometry37 = new RoundedBoxGeometry(10, 15, 10, 10, 0.5);
    var material37 = new THREE.MeshLambertMaterial({ color: 0xFCEBC0 });
    var mesh37 = new THREE.Mesh(geometry37, material37);
    mesh37.position.set(230, 18, 60);
    mesh37.rotation.set(0, 0, 0);
    //scene.add(mesh37);

    var geometry40 = new RoundedBoxGeometry(15, 2, 10, 10, 0.5);
    var material40 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh40 = new THREE.Mesh(geometry40, material40);
    mesh40.position.set(220, 5, 60);
    mesh40.rotation.set(0, 0, 0.78);
    //scene.add(mesh40);

    //postes salvavidas
    var geometry38 = new THREE.CylinderGeometry(0.5, 0.5, 15, 20, 35);
    var material38 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var mesh38 = new THREE.Mesh(geometry38, material38);
    mesh38.position.set(233, 3, 56);
    mesh38.rotation.set(0, 0, 0);
    //scene.add(mesh38);

    var geometry39 = new THREE.CylinderGeometry(0.5, 0.5, 15, 20, 35);
    var material39 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var mesh39 = new THREE.Mesh(geometry39, material39);
    mesh39.position.set(233, 3, 64);
    mesh39.rotation.set(0, 0, 0);
    //scene.add(mesh39);

    //salvavidas agrupado
    var salva1 = new THREE.Group();
    salva1.add(mesh37, mesh38, mesh39,mesh40);
    //scene.add(salva1);

    var salva2 = salva1.clone();
    //scene.add(salva2);
    salva2.position.set(0, 0, 20);

    //sombrillas de salvavidas
    var geometry24 = new THREE.CylinderGeometry(0.5, 0.5, 20, 20, 35);
    var material24 = new THREE.MeshLambertMaterial({ color: 0xD2A455, side: THREE.DoubleSide });
    var mesh24 = new THREE.Mesh(geometry24, material24);
    mesh24.position.set(210, 10, 65);
    mesh24.rotation.set(0, 0, 0);
    //scene.add(mesh24);

    var geometry25 = new THREE.ConeGeometry(8, 4.5, 30);
    var material25 = new THREE.MeshLambertMaterial({ color: 0x142BF8 });
    var mesh25 = new THREE.Mesh(geometry25, material25);
    mesh25.position.set(210, 20, 65);
    mesh25.rotation.set(0, 0, 0);
    //scene.add(mesh25); 

    var geometry26 = new THREE.ConeGeometry(6, 4.5, 30);
    var material26 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh26 = new THREE.Mesh(geometry26, material26);
    mesh26.position.set(210, 21, 65);
    mesh26.rotation.set(0, 0, 0);
    //scene.add(mesh26); 

    var geometry27 = new THREE.ConeGeometry(4, 4.5, 30);
    var material27 = new THREE.MeshLambertMaterial({ color: 0x142BF8 });
    var mesh27 = new THREE.Mesh(geometry27, material27);
    mesh27.position.set(210, 22, 65);
    mesh27.rotation.set(0, 0, 0);
    //scene.add(mesh27); 

    //arena
    var geometry41 = new THREE.SphereGeometry(25, 50, 50);
    var material41 = new THREE.MeshLambertMaterial({ color: 0xC6A664, side: THREE.DoubleSide });
    var mesh41 = new THREE.Mesh(geometry41, material41);
    mesh41.position.set(220, -8, -70);
    mesh41.rotation.set(0, 0, 0);
    //scene.add(mesh41); 

    //faro

    var geometry42 = new THREE.CylinderGeometry(5, 7, 35, 20, 35);
    var material42 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var mesh42 = new THREE.Mesh(geometry42, material42);
    mesh42.position.set(220, 33, -70);
    mesh42.rotation.set(0, 0, 0);
    //scene.add(mesh42);

    //franjas faro
    var geometry43 = new THREE.TorusGeometry(6, 2, 20, 20);
    var material43 = new THREE.MeshLambertMaterial({ color: 0xC93030 });
    var mesh43 = new THREE.Mesh(geometry43, material43);
    mesh43.position.set(220, 33, -70);
    mesh43.rotation.set(1.57, 0, 0);
    //scene.add(mesh43); 

    var geometry44 = new THREE.TorusGeometry(6, 2, 20, 20);
    var material44 = new THREE.MeshLambertMaterial({ color: 0xC93030 });
    var mesh44 = new THREE.Mesh(geometry44, material44);
    mesh44.position.set(220, 23, -70);
    mesh44.rotation.set(1.57, 0, 0);
    //scene.add(mesh44); 

    var geometry45 = new THREE.TorusGeometry(5, 2, 20, 20);
    var material45 = new THREE.MeshLambertMaterial({ color: 0xC93030 });
    var mesh45 = new THREE.Mesh(geometry45, material45);
    mesh45.position.set(220, 43, -70);
    mesh45.rotation.set(1.57, 0, 0);
    //scene.add(mesh45); 

    //faro parte de arriba
    var geometry46 = new THREE.ConeGeometry(6, 15, 20);
    var material46 = new THREE.MeshLambertMaterial({ color: 0xC93030 });
    var mesh46 = new THREE.Mesh(geometry46, material46);
    mesh46.position.set(220, 47, -70);
    mesh46.rotation.set(3.14, 0, 0);
    //scene.add(mesh46); 

    var geometry47 = new THREE.CylinderGeometry(4, 4, 10, 20, 35);
    var material47 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
    var mesh47 = new THREE.Mesh(geometry47, material47);
    mesh47.position.set(220, 55, -70);
    mesh47.rotation.set(0, 0, 0);
    //scene.add(mesh47);

    var geometry48 = new THREE.ConeGeometry(6, 10, 20);
    var material48 = new THREE.MeshLambertMaterial({ color: 0xC93030 });
    var mesh48 = new THREE.Mesh(geometry48, material48);
    mesh48.position.set(220, 65, -70);
    mesh48.rotation.set(0, 0, 0);
    //scene.add(mesh48); 

    var geometry49 = new RoundedBoxGeometry(5, 2, 8, 10, 0.5);
    var material49 = new THREE.MeshLambertMaterial({ color: 0x94F4EE });
    var mesh49 = new THREE.Mesh(geometry49, material49);
    mesh49.position.set(220, 20, -63);
    mesh49.rotation.set(1.57, 0, 0);
    //scene.add(mesh49);

    var geometry50 = new RoundedBoxGeometry(5, 2, 7, 10, 0.5);
    var material50 = new THREE.MeshLambertMaterial({ color: 0x94F4EE });
    var mesh50 = new THREE.Mesh(geometry50, material50);
    mesh50.position.set(220, 57, -65);
    mesh50.rotation.set(1.57, 0, 0);
    //scene.add(mesh50);

    //faro agrupado
    var faro1 = new THREE.Group();
    faro1.add( mesh43, mesh44, mesh45, mesh46, mesh47, mesh48, mesh49, mesh50);
    //scene.add(faro1);

    //arbol icosahedron
    var geometry51 = new THREE.IcosahedronGeometry(10, 0);
    var material51 = new THREE.MeshLambertMaterial({ color: 0x84C93B });
    var mesh51 = new THREE.Mesh(geometry51, material51);
    mesh51.position.set(56, 28, 90);
    mesh51.rotation.set(0, 0, 0);
    //scene.add(mesh51);

    var geometry52 = new THREE.CylinderGeometry(3, 3, 30, 50);
    var material52 = new THREE.MeshLambertMaterial({ color: 0xA87848 });
    var mesh52 = new THREE.Mesh(geometry52, material52);
    mesh52.position.set(56, 12, 90);
    mesh52.rotation.set(0, 0, 0);
    //scene.add(mesh52); 

    //arbol icosaedron agrupado
    var arbol1 = new THREE.Group();
    arbol1.add(mesh51, mesh52);
    //scene.add(arbol1);

    var arbol2 = arbol1.clone();
    //scene.add(arbol2);
    arbol2.position.set(-40, 0, 0);

    var arbol3 = arbol1.clone();
    //scene.add(arbol3);
    arbol3.position.set(-40, 0, -25);

    var arbol4 = arbol1.clone();
    //scene.add(arbol4);
    arbol4.position.set(-40, 0, -50);

    var arbol5 = arbol1.clone();
    //scene.add(arbol5);
    arbol5.position.set(-40, 0, -75);

    //cartel
    var geometry60 = new THREE.BoxGeometry(40, 2, 15, 1, 1, 1);
    var material60 = new THREE.MeshLambertMaterial({ color: 0xF8BC32 });
    var mesh60 = new THREE.Mesh(geometry60, material60);
    mesh60.position.set(35, 45, 90);
    mesh60.rotation.set(1.57, 0, 0);
    //scene.add(mesh60); 
    mesh60.receiveShadow = true;

    //💙texto
    var loader = new FontLoader();
    var font = loader.parse(fontJSON);
    var texto1 = new TextGeometry('Summer', {
        font: font,
        size: 6,
        height: 2,
    });

    texto1.center();
    var materialtexto1 = new THREE.MeshLambertMaterial(
        {
            color: 0xFBFF03,
            emissive: 0xF8D24F,
            shading: THREE.FlatShading
        }
    );

    var meshtexto1 = new THREE.Mesh(texto1, materialtexto1);
    meshtexto1.position.set(35, 45, 92);
    //scene.add(meshtexto1);
    meshtexto1.castShadow = true;

    //puesto de flotadores
    var geometry54 = new RoundedBoxGeometry(15, 20, 10, 10, 0.5);
    var material54 = new THREE.MeshLambertMaterial({ color: 0x77E16B });
    var mesh54 = new THREE.Mesh(geometry54, material54);
    mesh54.position.set(125, 10, 70);
    mesh54.rotation.set(0, 0, 0);
    //scene.add(mesh54);


    var geometry55 = new RoundedBoxGeometry(13, 12, 10, 10, 0.5);
    var material55 = new THREE.MeshLambertMaterial({ color: 0x828383 });
    var mesh55 = new THREE.Mesh(geometry55, material55);
    mesh55.position.set(125, 11, 72);
    mesh55.rotation.set(0, 0, 0);
    //scene.add(mesh55);

    var geometry56 = new RoundedBoxGeometry(13, 2, 10, 10, 0.5);
    var material56 = new THREE.MeshLambertMaterial({ color: 0x77E16B });
    var mesh56 = new THREE.Mesh(geometry56, material56);
    mesh56.position.set(125, 5, 75);
    mesh56.rotation.set(0, 0, 0);
    //scene.add(mesh56);

    //flotador
    var geometry57 = new THREE.TorusGeometry(4, 2, 25, 25);
    var material57 = new THREE.MeshLambertMaterial({ color: 0x706BE1 });
    var mesh57 = new THREE.Mesh(geometry57, material57);
    mesh57.position.set(125, 25, 75);
    mesh57.rotation.set(0, 0, 0);
    //scene.add(mesh57);

    //puesto de bebidas
    var geometry70 = new RoundedBoxGeometry(15, 20, 10, 10, 0.5);
    var material70 = new THREE.MeshLambertMaterial({ color: 0xE194FC });
    var mesh70 = new THREE.Mesh(geometry70, material70);
    mesh70.position.set(160, 10, 70);
    mesh70.rotation.set(0, 0, 0);
    //scene.add(mesh70);


    var geometry71 = new RoundedBoxGeometry(13, 12, 10, 10, 0.5);
    var material71 = new THREE.MeshLambertMaterial({ color: 0x828383 });
    var mesh71 = new THREE.Mesh(geometry71, material71);
    mesh71.position.set(160, 11, 72);
    mesh71.rotation.set(0, 0, 0);
    //scene.add(mesh71);

    var geometry72 = new RoundedBoxGeometry(13, 2, 10, 10, 0.5);
    var material72 = new THREE.MeshLambertMaterial({ color: 0xE194FC });
    var mesh72 = new THREE.Mesh(geometry72, material72);
    mesh72.position.set(160, 5, 75);
    mesh72.rotation.set(0, 0, 0);
    //scene.add(mesh72);

    //bebida

    var geometry90 = new THREE.CylinderGeometry(2, 2, 7, 50);
    var material90 = new THREE.MeshLambertMaterial({ color: 0xF9F9F9 });
    var mesh90 = new THREE.Mesh(geometry90, material90);
    mesh90.position.set(160, 25, 75);
    mesh90.rotation.set(0, 0.78, 0);
    //scene.add(mesh90); 

    var geometry73 = new THREE.TorusGeometry(2, 1, 15, 15);
    var material73 = new THREE.MeshLambertMaterial({ color: 0xFE3939 });
    var mesh73 = new THREE.Mesh(geometry73, material73);
    mesh73.position.set(160, 25, 75);
    mesh73.rotation.set(1.57, 0, 0);
    //scene.add(mesh73); 

    var geometry73 = new THREE.CylinderGeometry(0.5,0.5, 7, 50);
    var material73 = new THREE.MeshLambertMaterial({ color: 0xFE3939 });
    var mesh73 = new THREE.Mesh(geometry73, material73);
    mesh73.position.set(161, 27, 75);
    mesh73.rotation.set(0, 0.78, 0);
    //scene.add(mesh73); 

    //arbol octahedron
    var geometry74 = new THREE.DodecahedronGeometry(10, 0);
    var material74 = new THREE.MeshLambertMaterial({ color: 0x84C93B });
    var mesh74 = new THREE.Mesh(geometry74, material74);
    mesh74.position.set(6, 28, -90);
    mesh74.rotation.set(0, 0, 0);
    //scene.add(mesh74);

    var geometry75 = new THREE.CylinderGeometry(3, 3, 30, 50);
    var material75 = new THREE.MeshLambertMaterial({ color: 0xA87848 });
    var mesh75 = new THREE.Mesh(geometry75, material75);
    mesh75.position.set(6, 12, -90);
    mesh75.rotation.set(0, 0, 0);
    //scene.add(mesh75); 

    //arbol icosaedron agrupado
    var arbol6 = new THREE.Group();
    arbol6.add(mesh74, mesh75);
    //scene.add(arbol6);

    var arbol7 = arbol6.clone();
    //scene.add(arbol7);
    arbol7.position.set(50, 0, 0);

    var arbol8 = arbol6.clone();
    //scene.add(arbol8);
    arbol8.position.set(100, 0, 0);

    var arbol9 = arbol6.clone();
    //scene.add(arbol9);
    arbol9.position.set(150, 0, 0);



    //sol

    var geometry80 = new THREE.SphereGeometry(20, 50, 50);
    var material80 = new THREE.MeshLambertMaterial({ color: 0xFEC039 });
    var mesh80 = new THREE.Mesh(geometry80, material80);
    mesh80.position.set(120, 100, 0);
    mesh80.rotation.set(0, 0, 0);
    //scene.add(mesh80); 

    var geometry81 = new RoundedBoxGeometry(10, 10, 10, 10, 2);
    var material81 = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var mesh81 = new THREE.Mesh(geometry81, material81);
    mesh81.position.set(110, 100, 15);
    mesh81.rotation.set(0, 0, 0);
    //scene.add(mesh81);

    var geometry81 = new RoundedBoxGeometry(10, 10, 10, 10, 2);
    var material81 = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var mesh81 = new THREE.Mesh(geometry81, material81);
    mesh81.position.set(130, 100, 15);
    mesh81.rotation.set(0, 0, 0);
    //scene.add(mesh81);

    var geometry81 = new RoundedBoxGeometry(20, 5, 10, 10, 2);
    var material81 = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var mesh81 = new THREE.Mesh(geometry81, material81);
    mesh81.position.set(120, 100, 16);
    mesh81.rotation.set(0, 0, 0);
    //scene.add(mesh81);





    const V01 = new THREE.Group();
    V01.add(mesh20,
        helado1,
        mesh21,
        mesh30,
        mesh22,
        mesh35,
        mesh31,
        mesh32,
        mesh33,
        mesh34,
        som1,
        som2, 
        som3, 
        mesh36, 
        mesh53, 
        salva1, 
        salva2, 
        mesh24, 
        mesh25, 
        mesh26, 
        mesh27, 
        mesh41, 
        mesh42, 
        faro1,
        arbol1, 
        arbol2, 
        arbol3, 
        arbol4, 
        arbol5, 
        mesh60, 
        meshtexto1, 
        mesh54, 
        mesh55, 
        mesh56,
        mesh57, 
        mesh60,
        mesh71, 
        mesh72, 
        mesh90,
        mesh73, 
        arbol6, 
        arbol7, 
        arbol8, 
        arbol9, 
        mesh80, 
        mesh81);
    V01.position.set(x,y,z);
    return V01;
}