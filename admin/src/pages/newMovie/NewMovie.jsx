import { useContext, useState } from "react";
import "./newMovie.css";
import  storage  from "../../firebase";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgThumbnail, setImgThumbnail] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      if(item.file !== null) {
      console.log(item);
      const fileName = new Date().getTime() + item.label + item.file.name;

      console.log(fileName)
      const imageRef = ref(storage, `/items/${fileName}`);

      const uploadTask = uploadBytesResumable(imageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
            console.log(uploaded)
          });
        }
      );

      
    }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    
    if (img && imgThumbnail && imgSm && video && movie.trailer) {
      upload([
        { file: img, label: "img" },
        { file: imgThumbnail, label: "imgThumbnail" },
        { file: imgSm, label: "imgSm" },
        { file: video, label: "video" },
      ]);
    } else {
      alert("Please select all five files before uploading.");
    };

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(movie.title){
    createMovie(movie, dispatch);
    alert("Movie creation successful");

    // Reload the page
    window.location.reload();
    } else{
      console.log("Give title and other details");
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image (Portrait)</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image (Landscape)</label>
          <input
            type="file"
            id="imgThumbnail"
            name="imgThumbnail"
            onChange={(e) => setImgThumbnail(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Small image (Landscape)</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer (Youtube Link Id)</label>
          <input
            type="text"
            name="trailer"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>

        {uploadProgress > 0 && uploadProgress < 100 && (
         <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
        </div>
          )}

        {uploaded === 4 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}