import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Home";
import ContentPage from "./pages/Content";
import {
  DistributorAlbum,
  DistributorOverview,
  DistributorProfile,
  DistributorSong,
  SongAddingForm,
} from "./pages/Distributor";
import UserPage from "./pages/User";
import ContactPage from "./pages/Contact";
import ReportPage from "./pages/Report";
import { SongDetailPage, SongListPage } from "./pages/Song";
import { AlbumDetailPage, AlbumListPage } from "./pages/Album";
import { PlaylistDetailPage, PlaylistListPage } from "./pages/Playlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import DistributorRegisterPage from "./pages/Distributor/DistributorRegisterPage";
import {
  ArtistAlbum,
  ArtistListPage,
  ArtistProfilePage,
  ArtistRegisterPage,
  ArtistSong,
} from "./pages/Artist";
import { SignInPage } from "./pages/Auth";
import { authRequest } from "./services/axios";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CLIENT_ID, CLIENT_SECRET } from "./utils/constant";

function App() {
  const lockRef = useRef(null);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (lockRef.current) return;
  //   lockRef.current = true;

  //   if (token == null) {
  //     navigate("/sign-in");
  //   }

  //   authRequest
  //     .post("/auth/token/introspect", {
  //       client_id: CLIENT_ID,
  //       client_secret: CLIENT_SECRET,
  //       token: token,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 401) {
  //         navigate("/sign-in");
  //       } else {
  //         alert("Something went wrong, please try again later!");
  //       }
  //     });
  // }, [token]);

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/content" element={<ContentPage />}></Route>
          <Route path="/distributor">
            <Route element={<DistributorProfile />}>
              <Route index element={<DistributorOverview />}></Route>
              <Route path="song" element={<DistributorSong />}></Route>
              <Route path="album" element={<DistributorAlbum />}></Route>
            </Route>
            <Route path="register" element={<DistributorRegisterPage />} />
            <Route path="publishing" element={<SongAddingForm />}></Route>
          </Route>
          <Route path="/music-catalog">
            <Route path="song">
              <Route index element={<SongListPage />} />
              <Route path=":id" element={<SongDetailPage />} />
            </Route>
            <Route path="album">
              <Route index element={<AlbumListPage />} />
              <Route path=":id" element={<AlbumDetailPage />} />
            </Route>
            <Route path="playlist">
              <Route index element={<PlaylistListPage />} />
              <Route path=":id" element={<PlaylistDetailPage />} />
            </Route>
            <Route path="album"></Route>
            <Route path="playlist"></Route>
            <Route path="hub"></Route>
          </Route>
          <Route path="/artist">
            <Route index element={<ArtistListPage />}></Route>
            <Route path=":id" element={<ArtistProfilePage />}>
              <Route index element={<ArtistSong />} />
              <Route path="song" element={<ArtistSong />} />
              <Route path="album" element={<ArtistAlbum />} />
            </Route>
            <Route path="register" element={<ArtistRegisterPage />} />
          </Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/report" element={<ReportPage />}></Route>
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
      <ToastContainer
        autoClose={3500}
        hideProgressBar
        theme="colored"
        position="bottom-left"
        style={{ zIndex: 999999999 }}
      />
    </>
  );
}

export default App;
