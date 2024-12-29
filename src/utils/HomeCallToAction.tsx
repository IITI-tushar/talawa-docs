import React from "react";
import  ActionButton  from "./ActionButton";

interface HomeCallToActionProps {}

 const HomeCallToAction: React.FC<HomeCallToActionProps> = () => {
  return (
    <>
      <ActionButton
        type="secondary"
        href="https://github.com/PalisadoesFoundation"
        buttonClassName="custom-button"
      >
        Learn More
      </ActionButton>
      <ActionButton
        type="primary"
        href="/docs"
        target="_self"
        buttonClassName="custom-button"
      >
        Introduction
      </ActionButton>
      {/* <ActionButton type="secondary" href="/docs-mobile-user/" target="_self">
        Mobile
      </ActionButton>
      <ActionButton type="secondary" href="/docs-web-user/" target="_self">
        Web
      </ActionButton>
      <ActionButton type="secondary" href="/docs-admin/" target="_self">
        Admins
      </ActionButton>
      <ActionButton type="secondary" href="/docs/" target="_self">
        Devs
      </ActionButton> */}
    </>
  );
};


export default HomeCallToAction