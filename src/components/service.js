import axios from "axios";

const service = axios.create({
  baseURL: `http://localhost:5000`,
});

const errorHandler = (err) => {
  // console.error(err);
  throw err;
};

export function handleUpload(theFile) {
  return service
    .post("/upload", theFile)
    .then((res) => res.data)
    .catch(errorHandler);
}

export function saveNewThing(newThing) {
  return service
    .post("/photos", newThing)
    .then((res) => res.data)
    .catch(errorHandler);
}
