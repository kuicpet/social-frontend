import React from "react";
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import './App.css';

import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoutes";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Post from "./pages/Post";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
           <Navbar/>
             <Route exact path="/" component={Home} />
             <AuthRoute exact path="/login" component={Login} />
             <AuthRoute exact path="/register" component={Register} />
             <Route exact path="/posts/:postId" component={Post} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
