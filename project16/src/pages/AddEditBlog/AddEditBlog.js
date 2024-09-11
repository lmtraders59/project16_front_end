// // import React from "react";

const AddEditBlog = () => {
  return (
    <div>
      <h2>Add Edit Blog</h2>
    </div>
  );
};

export default AddEditBlog;

// import { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { useContext } from "react";

// const  AddEditBlog = ({
//   isOpen,
//   onClose,
//   handleEditProfile,
//   isLoading,
// }) => {
//   const { currentUser } = useContext(CurrentUserContext);
//   const [name, setName] = useState(currentUser.name ?? "");
//   const [avatar, setAvatar] = useState(currentUser.avatar ?? "");

//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleAvatar = (e) => {
//     setAvatar(e.target.value);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     handleEditProfile(name, avatar);
//   }

//   return (
//     <ModalWithForm
//       isOpen={isOpen}
//       title="Change profile data"
//       buttonText={isLoading ? "Saving..." : "Save"}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <label className="form__heading">
//         Name*
//         <input
//           className="form__input form__input_type_name"
//           name="name"
//           type="text"
//           placeholder="Name"
//           id="name"
//           required
//           onChange={handleName}
//           value={name}
//           minLength={2}
//           maxLength={30}
//         />
//       </label>
//       <label className="form__heading">
//         Avatar URL*
//         <input
//           className="form__input form__input_type_image"
//           name="Avatar URL"
//           type="text"
//           placeholder="Avatar URL"
//           id="avatar-URL"
//           required
//           onChange={handleAvatar}
//           value={avatar}
//         />
//       </label>
//     </ModalWithForm>
//   );
// };

// export default  AddEditBlog;
