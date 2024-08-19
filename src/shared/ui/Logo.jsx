const { Link } = require("react-scroll");


export const Logo = () => {
  return ( 
    <Link className='p-0 text-2xl font-bold text-blue-base cursor-pointer max-sm:text-xl m565:text-base mini:text-xs' to='Header' offset={-50} smooth={true} duration={1000} >
      &lt;&gt;Frontend Developer&lt;&frasl;&gt;
    </Link>
   );
};