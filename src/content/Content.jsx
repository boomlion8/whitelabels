import "./content.css";
import building from "./building.jpg";
import real_first from "./real_first.jpg";
import real_second from "./real_second.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Content() {
  const images = [building, real_first, real_second];

  const PF = "http://localhost:5050/images/";
  const [file, setFile] = useState(null);
  const [postId, setPostId] = useState();
  const [post, setPost] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {};
    setFile(null);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        const res = await axios.post("http://localhost:5050/upload/", data);
        console.log(res.data);
      } catch (error) {}
    }

    try {
      const res = await axios.post("http://localhost:5050/post/", newPost);
      setPostId(res.data._id);
    } catch (error) {}
  };

  console.log(postId);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5050/post/");
      setPost(res.data);
    };
    getPost();
  }, [postId]);

  return (
    <>
      <div className="container-content">
        <div className="content-item">
          <div className="write">
            {file && (
              <img
                className="contentImage"
                src={URL.createObjectURL(file)}
                alt=""
              />
            )}

            <form className="writeForm" onSubmit={handleSubmit}>
              <div className="writeFormGroup">
                <label htmlFor="fileInput">
                  <i className="writeIcon fas fa-plus">upload Image</i>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button className="writeSubmit" type="submit">
                Publish
              </button>
            </form>
          </div>
          <div>
            {postId &&
              post.map((p) => 
                <img src={PF + p.photo} alt="" className="contentImage" />
              )}
          </div>
          <div>
            <img src={images[0]} alt="" className="contentImage" />
          </div>

          <div>
            <img src={images[1]} alt="" className="contentImage" />
          </div>

          <div>
            <img src={images[2]} alt="" className="contentImage" />
          </div>

          <div className="content-text">
            <div className="content-title">
              <div className="content-title-item1">About us</div>
              <div className="content-title-item2">Edit content</div>
            </div>
            <div className="content-detail">
              <div className="content-detail-item1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </div>
              <div className="content-detail-item2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
