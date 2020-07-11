import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer(props) {
  return (
    <footer>
      <Typography variant='body1'>Joel Watson 2020 &copy;</Typography>
      <Link
        color='secondary'
        href='https://www.linkedin.com/in/joel3rbear'
        target='_blank'
        rel='noopener'
      >
        <LinkedInIcon />
      </Link>
      <Link
        color='secondary'
        href='https://github.com/joelmwatson'
        target='_blank'
        rel='noopener'
      >
        <GitHubIcon />
      </Link>
      <Link
        color='secondary'
        href='https://twitter.com/joel3rbear'
        target='_blank'
        rel='noopener'
      >
        <TwitterIcon />
      </Link>
    </footer>
  );
}

export default Footer;
