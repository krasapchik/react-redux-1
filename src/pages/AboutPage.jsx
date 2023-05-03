import React from "react";
import classes from "./AboutPage.module.css";
const AboutPage = () => {
  return (
    <div>
      <img className={classes.aaa} src="/images/logo3.png" alt="horse" />

      <div className={classes.lorem}>
        <p>About post</p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, fugiat
        ipsum tenetur repellendus aspernatur delectus reprehenderit itaque
        quibusdam repudiandae corporis molestiae a, aliquid maxime ducimus
        pariatur voluptatum voluptate, quas tempore! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sequi, officiis debitis rem enim eos,
        deleniti vero maxime unde, nam consectetur quaerat maiores eum beatae
        ipsum corrupti consequatur necessitatibus velit fugiat.
      </div>
    </div>
  );
};

export default AboutPage;
