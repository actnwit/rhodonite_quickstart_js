// import Rn from '/node_modules/rhodonite/dist/esm/index.js' // For production
import Rn from '/node_modules/rhodonite/dist/esmdev/index.js' // For development

// Init Rhodonite
await Rn.System.init({
    approach: Rn.ProcessApproach.DataTexture,
    canvas: document.getElementById('world'),
});

// Plane
const cubeEntity = Rn.MeshHelper.createCube({
    material: Rn.MaterialHelper.createPbrUberMaterial(),
});
cubeEntity.localEulerAngles = Rn.Vector3.fromCopy3(Math.PI * 0.5, 0, 0);
cubeEntity.localScale = Rn.Vector3.fromCopy3(0.5, 0.5, 0.5);

// Camera
const cameraEntity = Rn.EntityHelper.createCameraControllerEntity();
cameraEntity.getCameraController().controller.setTarget(cubeEntity);

// Light
const lightEntity = Rn.EntityHelper.createLightEntity();
lightEntity.getLight().type = Rn.LightType.Directional;
lightEntity.localEulerAngles = Rn.Vector3.fromCopy3(-Math.PI * 0.2, Math.PI * 0.2, 0);

Rn.System.startRenderLoop(() => {
    Rn.System.processAuto();
});
