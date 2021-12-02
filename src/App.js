import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import About from "pages/Aboutpage";
import Blogpage from "pages/Blogpage";
import Createpost from "pages/Createpost";
import Editpost from "pages/Editpost";
import Singlepage from "pages/Singlepage";
import Notfoundpage from "pages/Notfoundpage";

import Layout from "components/Layout";
import React from "react";
import RequireAuth from "hoc/RequireAuth";
import { setUser } from "store/slices/userSlice";
import { useDispatch } from "react-redux";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  //что мне с токеном то делать, почему его гугл не принимает
    // const dispatch = useDispatch();
    // React.useEffect(() => {
    //     if (localStorage.getItem("jwt")) {
    //         const auth = getAuth();
    //         let token = localStorage.getItem("jwt");
    //         console.log(token);
         
    //         signInWithCustomToken(auth, token)
    //             .then((userCredential) => {
    //                 // Signed in
    //                 const user = userCredential.user;
                  
    //                 dispatch(
    //                     setUser({
    //                         email: user.email,
    //                         id: user.uid,
    //                         token: user.accessToken,
    //                     })
    //                 );
    //                 // ...
    //             })
    //             .catch((error) => {
    //                 const errorCode = error.code;
    //                 const errorMessage = error.message;
    //                 // ...
    //             })
    //    }
    // }, [] );
    
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<About />}>
                    <Route path="contacts" element={<p>Our contact</p>} />
                    <Route path="team" element={<p>Our team</p>} />
                </Route>
                <Route
                    path="about-us"
                    element={<Navigate to="/about" replace />}
                />
                <Route path="posts" element={<Blogpage />} />
                <Route path="posts/:id" element={<Singlepage />} />
                <Route path="posts/:id/edit" element={<Editpost />} />
                <Route
                    path="posts/new"
                    element={
                        <RequireAuth>
                            <Createpost />
                        </RequireAuth>
                    }
                />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="*" element={<Notfoundpage />} />
            </Route>
        </Routes>
    );
}

export default App;
