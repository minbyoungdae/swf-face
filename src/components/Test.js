import React from "react";
import * as tmImage from "@teachablemachine/image";

const TeachableMachine = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/VPZroW-uF/";
  let model, labelContainer;
  let maxPredictions = 0;

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }
  }

  async function predict() {
    const image = document.getElementById("face-image");
    const prediction = await model.predict(image, false);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      labelContainer.childNodes[i].innerHTML = classPrediction;
    }
  }

  init().then(() => {
    predict();
  });

  return (
    <>
      <div id="label-container"></div>
    </>
  );
};

export default TeachableMachine;
