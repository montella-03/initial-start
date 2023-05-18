import Link from 'next/link';

const Info = () => {
  return (
    <div className="flex justify-center items-center sm:flex-col-reverse">
      <div className="know">
        <h1>Get to Know Us</h1>
        <Link href={'/'} className="link">About Us</Link>
        <Link href={'/'} className="link">Careers</Link>
        <Link href={'/'} className="link">Blog</Link>
        <Link href={'/'} className="link">LinkedIn</Link>
        <Link href={'/'} className="link">Glassdoor</Link>
        <Link href={'/'} className="link">Accessibility</Link>
      </div>
      <div className="know">
        <h1>Let us Help You</h1>
        <Link href={'/'} className="link">Account Details</Link>
        <Link href={'/'} className="link">Order History</Link>
        <Link href={'/'} className="link">Help</Link>
      </div>
      <div className="know">
        <h1>Doing Business</h1>
        <Link href={'/'} className="link">Become a Dasher</Link>
        <Link href={'/'} className="link">Be a Partner Restaurant</Link>
        <Link href={'/'} className="link">Get Dashers for Deliveries</Link>
      </div>
    </div>
  );
};

export default Info;
