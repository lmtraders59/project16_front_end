// import React from "react";
// import ModalWithForm from "../../components/ModalWithForm/ModalWithForm.js";
// import { useState } from "react";

// export const LogIn = () => {
//   return <h2>LogIn</h2>;
// };

// const LoginModal = ({
//   isOpen,
//   onClose,
//   onLogin,
//   switchToRegister,
//   isLoading,
// }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     onLogin({ email, password });
//   }

//   return (
//     <ModalWithForm
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//       title="Log In"
//       buttonText={isLoading ? "Logging in..." : "Log in"}
//     >
//       <label className="form__label">
//         Email
//         <input
//           className="form__input form__input_type_email"
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           placeholder="Email"
//           required
//           minLength={1}
//           maxLength={30}
//         />
//       </label>
//       <label className="form__label">
//         Password
//         <input
//           className="form__input form__input_type_password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           placeholder="Password"
//           required
//           minLength={4}
//           maxLength={35}
//         />
//       </label>
//       <p className="form__switch" onClick={switchToRegister}>
//         or Sign up
//       </p>
//     </ModalWithForm>
//   );
// };
// export default LoginModal;

import React, { useState } from "react";
// import ModalWithForm from "../../components/ModalWithForm/ModalWithForm.js";

import LoginModal from "../../components/LoginModal/LoginModal.js";

export const LogIn = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleLogin = (credentials) => {
    setIsLoading(true);
    // Perform the login operation
    // E.g., calling an API
    console.log("Logging in with:", credentials);
    // After login operation
    setIsLoading(false);
    handleCloseModal();
  };

  const switchToRegister = () => {
    console.log("Switch to registration form");
    // Implement switching logic based on your requirement
  };

  return (
    <div>
      <h2>LogIn</h2>
      <button onClick={handleOpenModal}>Log In</button>
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogin={handleLogin}
        switchToRegister={switchToRegister}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LogIn;
