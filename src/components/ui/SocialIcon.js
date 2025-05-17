import React from 'react';

const SocialIcon = ({ platform }) => {
  switch (platform) {
    case 'github':
      return <img src="https://simpleicons.org/icons/github.svg" alt="Github logo" width="28" className='invert' />;
    case 'linkedin':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin Logo" width="24" />;
    case 'instagram':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="instagram logo" width="24" />;
    case 'whatsapp':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="28" />;
    case 'gmail':
      return <img src="https://img.icons8.com/color/48/gmail-new.png" alt="Gmail" width="24" />;
    case 'hackerrank':
      return <img src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank Logo" width="30" />;
    default:
      return null;
  }
};

export default SocialIcon;
