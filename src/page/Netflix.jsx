import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";

import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";

import Navbar from "../components/NavBar";



export default function Netflix() {

  const [isScrolled, setIsScrolled] = useState(false);
  //Scroll event...
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset===0 ? false : true);

    return () => (window.onscroll = null);
  }

  return (
    <div>
        <Navbar isScrolled={isScrolled}/>
    </div>
  );
}