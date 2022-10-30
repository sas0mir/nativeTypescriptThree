import React, { useRef, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Text, Button } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import { TweenMax } from 'gsap';
import {
  AmbientLight,
  SphereGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  BoxGeometry,
  MeshPhongMaterial,
} from "three";

class SphereMesh extends Mesh {
  constructor() {
    super(
      new SphereGeometry(0, 50, 20, 0, Math.PI * 2, 0, Math.PI * 2),
      new MeshStandardMaterial({
        color: 0xff0000,
      })
    );
  }
}

export default function CanvasPage() {

  const sphere = new SphereMesh();
  const camera = new PerspectiveCamera(100, 0.4, 0.01, 1000);

  let cameraInitialPositionX = 0;
  let cameraInitialPositionY = 3;
  let cameraInitialPositionZ = 6;

  function move(distance: number) {
    TweenMax.to(sphere.position, 0.2, {
      z: sphere.position.z + distance,
    });

    TweenMax.to(camera.position, 0.2, {
      z: camera.position.z + distance,
    });
  }

    return (
      <View style={{ flex: 1 }}>
        <GLView style={{ width: '100%', height: '70%' }} onContextCreate={async (gl) => {
          // GL Parameter disruption
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // Renderer declaration and set properties
    const renderer = new Renderer({gl}); //new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor("#fff");

    // Scene declaration, add a fog, and a grid helper to see axes dimensions
    const scene = new Scene();
    scene.fog = new Fog("#3A96C4", 1, 10000);
    scene.add(new GridHelper(10, 10));

    // Add all necessary lights
    const ambientLight = new AmbientLight(0x101010);
    scene.add(ambientLight);

    const pointLight = new PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    const spotLight = new SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);


    //cube
    const cubegeom = new BoxGeometry();
    const cubemat = new MeshPhongMaterial({color: 'red'});
    const cube1 = new Mesh(cubegeom, cubemat);
    cube1.position.x = 0;
    cube1.position.y = 1;
    cube1.position.z = -1;
    scene.add(cube1);
    // Add sphere object instance to our scene
    scene.add(sphere);

    // Set camera position and look to sphere
    camera.position.set(
      cameraInitialPositionX,
      cameraInitialPositionY,
      cameraInitialPositionZ
    );

    camera.lookAt(sphere.position);

    // Render function
    const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    render();
        }}>
          <View style={{width: '100%', height: '30%', backgroundColor: 'red'}}>
            <Button onPress={() => move(0.1)} title='MOVE' />
          <TouchableWithoutFeedback
            onPressIn={() => move(-0.2)}
          >
            <Text style={{ 
              fontSize: 36,
            }}>
              UP
            </Text>    
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPressIn={() => move(0.2)}
          >
            <Text style={{ 
              fontSize: 36,
            }}>
              DOWN
            </Text>
          </TouchableWithoutFeedback>
        </View>
        </GLView>
        <View style={{width: '100%', height: '30%', backgroundColor: 'red'}}>
            <Button onPress={() => move(0.1)} title='MOVE' />
          <TouchableWithoutFeedback
            onPressIn={() => move(-0.2)}
          >
            <Text style={{ 
              fontSize: 36,
            }}>
              UP
            </Text>    
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPressIn={() => move(0.2)}
          >
            <Text style={{ 
              fontSize: 36,
            }}>
              DOWN
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
};
