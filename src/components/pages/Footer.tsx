const Footer = () => {
  return (
    <footer className='px-3 pt-4 lg:px-9 border-t-2'>
      <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <a href='#' className='inline-flex items-center'>
            <img
              src='https://mcqmate.com/public/images/logos/60x60.png'
              alt='logo'
              className='h-8 w-8'
            />
            <span className='ml-2 text-xl font-bold tracking-wide'>
              Bike Shop
            </span>
          </a>
          <div className='mt-6 lg:max-w-xl'>
            <p className='text-sm'>
              Welcome to Bike Shop, your one-stop destination for all things
              cycling! Whether you're a seasoned rider or just starting your
              biking journey, we’ve got everything you need to make every ride
              enjoyable.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 text-sm'>
          <p className='text-base font-bold tracking-wide'>Popular Courses</p>
          <a href='#'>Latest Bike</a>
          <a href='#'>Old Bike</a>
          <a href='#'>Premium Bike</a>
          <p className='text-base font-bold tracking-wide'>Popular Topics</p>
          <a href='#'>Spots Bike</a>
        </div>

        <div>
          <p className='text-base font-bold tracking-wide'>
            BIKE SHOP IS ALSO AVAILABLE ON
          </p>
          <div className='flex items-center gap-1 px-2'>
            <a href='#' className='w-full min-w-xl'>
              <img
                src='https://mcqmate.com/public/images/icons/playstore.svg'
                alt='Playstore Button'
                className='h-10'
              />
            </a>
            <a href='#' className='w-full min-w-xl'>
              <img
                src='https://mcqmate.com/public/images/icons/youtube.svg'
                alt='Youtube Button'
                className='h-28'
              />
            </a>
          </div>
          <p className='text-base font-bold tracking-wide'>Contacts</p>
          <div className='flex'>
            <p className='mr-1'>Email:</p>
            <a href='mailto:bikeshop@gamil.com' title='send email'>
              bikeshop@gamil.com
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
        <p className='text-sm'>
          © Copyright 2025 Bike Shop. All rights reserved.
        </p>
        <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
          <li>
            <a
              href='#'
              className='text-sm transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-sm transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
