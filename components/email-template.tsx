import * as React from "react";

interface EmailTemplateProps {
  name: string;
  location: string;
  img: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  img,
  location,
}) => (
  <div>
    <h1>
      hello , {name}, {img}, {location}
    </h1>
  </div>
);

export default EmailTemplate;
