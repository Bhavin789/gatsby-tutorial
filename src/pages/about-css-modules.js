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
      <User
        username="ElNino"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm ElNino. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Scooby Doo"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Scooby Doo, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}
