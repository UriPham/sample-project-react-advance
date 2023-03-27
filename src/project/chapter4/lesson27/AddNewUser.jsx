import { useState } from "react";

function AddNewUser(props) {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleOnChangeFileImage = async (e) => {
    // console.log(e)
    if (e.target && e.target.files && e.target.files[0]) {
      let strToReplace = await toBase64(e.target.files[0]);
      let strImage = strToReplace.replace(/^data:(.*,)?/, "");
      // console.log(strImage)
      setImage(strImage)
    }
  };

  const handleCreateNewUser = () => {
    if (!id || !username || !image) {
      alert("invalid input");
      return;
    }
    props.addNew({
      id: id,
      username: username,
      image: image,
    });
  };
  return (
    <div>
      <fieldset>
        <legend>Add new user</legend>
        <div className="new-user-id">
          <label>ID: </label>
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </div>
        <br />
        <div className="new-user-username">
          <label>Username: </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <br />
        <div className="new-user-image">
          <label>Image: </label>
          <input
            type="file"
            id="files"
            className="hidden"
            onChange={(e) => handleOnChangeFileImage(e)}
          />
        </div>
        <button onClick={() => handleCreateNewUser()}>Add new</button>
      </fieldset>
    </div>
  );
}

export default AddNewUser;
