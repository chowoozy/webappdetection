const tf = require('@tensorflow/tfjs-node');
 
async function predictClassification(model, image) {
 try {
  const tensor = tf.node
    .decodeJpeg(image)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat()
 
  const prediction = model.predict(tensor);

  const classes = [Cancer, Non-Cancer];
 
  const classResult = tf.argMax(prediction, 1).dataSync()[0];
  const label = classes[classResult];


  let suggestion;
 
  if (label === 'Cancer') {
    suggestion = "Segera periksa ke dokter!"
  }
  else if (label === 'Non-Cancer') {
    suggestion = "Anda sehat!"
  }

  return { label, suggestion };
 } catch (error) {
        throw new InputError(`Terjadi kesalahan dalam melakukan Input!: ${error.message}`)
    }
}

module.exports = predictClassification;