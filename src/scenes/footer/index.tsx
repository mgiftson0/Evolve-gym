import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={Logo} /> */}
          <h2 className="text-3xl font-bold">EVOLVE GYM</h2>
          <p className="my-5">
            Experience the ultimate fitness journey with our state-of-the-art facilities, expert trainers, and diverse range of classes. We're committed to helping you achieve your health and wellness goals in a supportive and motivating environment.
          </p>
          <p>© Evovle Gym All Rights Reserved.</p>
          <div className="mt-5 flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="text-gray-400 hover:text-gray-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="text-gray-400 hover:text-gray-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-gray-400 hover:text-gray-600" />
            </a>
            <a href="https://sabali-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
              <p>
                manuel
                <LanguageIcon className="text-gray-400 hover:text-gray-600" />
              </p>
            </a>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">Our Classes</p>
          <p className="my-5">Membership Plans</p>
          <p>Personal Training</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">We're here to answer your questions and help you get started on your fitness journey.</p>
          <p>(555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
