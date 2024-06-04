"use client";
import React from "react";
import PreloadWrapper from "../components/preloading/wrapper";

const Contact = () => {
  const words = ["Contact"];

  return (
    <div>
      <PreloadWrapper words={words}>
        <div className="body">
          <p>
            Fusce tristique nisi eu sodales suscipit. Praesent ante ipsum,
            suscipit eu dapibus in, tincidunt et massa. Sed pulvinar consequat
            elit at placerat. Maecenas bibendum in purus sed hendrerit. Integer
            efficitur mattis consectetur. Sed sagittis tortor non mauris laoreet
            ultrices. Nunc sit amet sem suscipit, accumsan justo sed, laoreet
            odio. Phasellus pharetra arcu nibh, non scelerisque ipsum rutrum
            quis. Fusce quis commodo leo. Mauris ut congue mauris.
          </p>
          <p>
            Duis tempus risus ut est malesuada, sit amet auctor tortor tempus.
            Sed luctus, odio a vulputate elementum, nulla enim bibendum ipsum,
            in ornare elit nisi quis tortor. Nullam quis condimentum tellus.
            Nullam non eros sem. Cras molestie convallis dolor, quis egestas
            turpis congue in. Maecenas ut tellus at nunc consectetur facilisis.
            Vivamus ornare ex a nibh egestas, id euismod mi euismod.
          </p>
        </div>
      </PreloadWrapper>
    </div>
  );
};

export default Contact;
