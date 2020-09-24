import React from "react"

import styles from "./about-css-modules.module.css"

import Container from "../components/container"

const User = ({ username, avatar, excerpt }) => {
  const {
    user: userClass,
    username: usernameClass,
    excerpt: excerptClass,
    description: descriptionClass,
    avatar: avatarClass,
  } = styles

  return (
    <div className={userClass}>
      <img src={avatar} className={avatarClass} alt="My avatar" />
      <div className={descriptionClass}>
        <div className={usernameClass}>{username}</div>
        <div className={excerptClass}>{excerpt}</div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  )
}
