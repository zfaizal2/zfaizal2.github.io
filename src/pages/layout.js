import React from "react"
import "./layout.css"
import {socialIcon, list} from "./index.modules.css"

export default function Layout({ children }) {
  return <div class="container-fluid">{children}</div>
}