import React from "react";
import "../../styles/style-project.css";
import { motion } from "framer-motion";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";

const Project = () => {
  return (
    <div className="project">
      <div className="responsive-title">
        <h1>PROJECT</h1>
      </div>
      <div className="w-left">
        <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3.5, type: "spring" }} className="w-mainCircle">
          <div className="w-secCircle">
            <IoLogoHtml5 className="icons" />
          </div>
          <div className="w-secCircle">
            <IoLogoCss3 className="icons" />
          </div>
          <div className="w-secCircle">
            <h1>PROJECT</h1>
          </div>
          <div className="w-secCircle">
            <IoLogoJavascript className="icons" />
          </div>
          <div className="w-secCircle">
            <RiReactjsFill className="icons" />
          </div>
        </motion.div>
      </div>
      <div className="project-detail">
        <div className="project-detail__body">
          <h2>Payu App</h2>
          <p>Website pencatatan patungan yang dapat mempermudah Anda dalam mengumpulkan uang bersama dengan teman, keluarga, dan orang lain.</p>
          <a href="https://patungan-yuk-dicoding.web.app/welcome">
            <button className="button-project">SHOW</button>
          </a>
        </div>
        <div className="project-detail__body">
          <h2>Meta Web</h2>
          <p>Website yang berisi informasi tentang metaverse yang dapat meningkatkan pengetahuan pengguna. Web ini dikembangkan dengan desain yang unik dan menarik.</p>
          <a href="https://aldowijaya27.github.io/MetaWeb/">
            <button className="button-project">SHOW</button>
          </a>
        </div>
        <div className="project-detail__body">
          <h2>Kisah Inspiratif</h2>
          <p>Website yang berisi berbagai kisah inspiratif dari berbagai tokoh pahlawan di dunia. Kistif merupakan website pertama yang dikembangkan oleh owner.</p>
          <a href="https://aldowijaya27.github.io/KisahInspiratif/">
            <button className="button-project">SHOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
