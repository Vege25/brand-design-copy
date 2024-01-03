import React, { useEffect, useRef } from 'react';

interface carouselProps {}

const Carousel: React.FC<carouselProps> = () => {
  const [carousel, setCarousel] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [countdown, setCountdown] = React.useState(5);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleCarousel = () => {
    setCarousel((prevCarousel) => (prevCarousel + 1) % 3);
  };
  const handleCarouselBack = () => {
    setCarousel((prevCarousel) => (prevCarousel - 1) % 3);
  };
  const handleCarouselBtn = (number: number) => {
    setCarousel(number);
    setIsPaused(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
    }
  };
  const handleCarouselPauseBtn = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  useEffect(() => {
    let intervalId: number;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          console.log(countdown);
          if (prevCountdown === 1) {
            handleCarousel();
            return 5;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [isPaused]);

  return (
    <section className='relative w-full' style={{ height: '43.5vw' }}>
      <div className='absolute z-10 w-16 h-full'>
        <div className='relative w-full h-full'>
          <div
            className='absolute w-full h-16 -translate-y-1/2 rounded-full cursor-pointer left top-1/2'
            style={{ scale: '.6', backgroundColor: 'rgba(0,0,0,0.4)' }}
            onClick={handleCarouselBack}
          >
            <i className='absolute text-4xl text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 fa-solid fa-angle-left'></i>
          </div>
        </div>
      </div>
      <div className='absolute right-0 z-10 w-16 h-full'>
        <div className='relative w-full h-full'>
          <div
            className='absolute w-full h-16 -translate-y-1/2 rounded-full cursor-pointer left top-1/2'
            onClick={handleCarousel}
            style={{ scale: '.6', backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <i className='absolute text-4xl text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 fa-solid fa-angle-right'></i>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 z-10 w-full h-16'>
        <div className='relative w-full h-full'>
          <div className='absolute w-full h-full -translate-y-1/2 top-1/2'>
            <div className='absolute flex items-center justify-center gap-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3'>
              <div
                onClick={() => handleCarouselBtn(0)}
                className='relative flex items-center justify-center h-16 cursor-pointer group w-36'
              >
                <span
                  className={`absolute left-0 w-full text-sm text-center  transition-opacity ease-in-out opacity-0 group-hover:opacity-100 top-2 ${
                    carousel == 0 ? 'text-black' : 'text-white'
                  }`}
                >
                  Galaxy Z Flip5
                </span>
                <div
                  className={`w-full h-0.5 rounded-md ${
                    carousel == 0 ? 'bg-black' : 'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div
                onClick={() => handleCarouselBtn(1)}
                className='relative flex items-center justify-center h-16 cursor-pointer group w-36'
              >
                <span
                  className={`absolute left-0 w-full text-sm text-center  transition-opacity ease-in-out opacity-0 group-hover:opacity-100 top-2 ${
                    carousel == 0 ? 'text-black' : 'text-white'
                  }`}
                >
                  TV & Soundbars
                </span>
                <div
                  className={`w-full h-0.5 rounded-md ${
                    carousel == 1 ? 'bg-white' : 'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div
                onClick={() => handleCarouselBtn(2)}
                className='relative flex items-center justify-center h-16 cursor-pointer group w-36'
              >
                <span
                  className={`absolute left-0 w-full text-sm text-center  transition-opacity ease-in-out opacity-0 group-hover:opacity-100 top-2 ${
                    carousel == 0 ? 'text-black' : 'text-white'
                  }`}
                >
                  Kodinkoneet
                </span>
                <div
                  className={`w-full h-0.5 rounded-md ${
                    carousel == 2 ? 'bg-white' : 'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div>
                <button onClick={handleCarouselPauseBtn}>
                  {isPaused && (
                    <i
                      className={`${
                        carousel == 0 ? 'text-black' : 'text-white'
                      } fa-solid fa-play`}
                    ></i>
                  )}
                  {!isPaused && (
                    <i
                      className={`${
                        carousel == 0 ? 'text-black' : 'text-white'
                      } fa-solid fa-pause`}
                    ></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full duration-500 absolute h-full bg-center bg-cover opacity-0 transition-opacity ease-in-out ${
          carousel === 0 ? 'opacity-100 block' : ''
        }`}
      >
        <video
          ref={videoRef}
          className='absolute object-cover w-full h-full'
          autoPlay
          muted
          playsInline
        >
          <source
            src='https://images.samsung.com/is/content/samsung/assets/fi/home/HOME_B5_Main-KV_1440x640_pc_default1.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        <div className='relative flex flex-col items-start justify-center w-1/2 h-full gap-6 ml-24'>
          <h2 className='text-5xl font-bold text-black z-100'>
            Galaxy Z Flip5
          </h2>
          <p className='text-lg text-black'>
            Saat 150 euron lisäalennuksen vaihtoarvon lisäksi
          </p>
          <button className='px-5 py-2 text-sm font-bold text-white bg-black rounded-full hover:bg-gray-500'>
            Osta nyt
          </button>
        </div>
      </div>
      <div
        className={`w-full duration-500 absolute h-full bg-center bg-cover opacity-0 transition-opacity ease-in-out ${
          carousel === 1 ? 'opacity-100 block' : ''
        }`}
        style={{
          backgroundImage:
            'url("https://images.samsung.com/is/image/samsung/assets/fi/home/S.com_WinterOffers_HomepageKV_TV_PC_1440x640.jpg?imwidth=768")',
        }}
      >
        <div className='flex flex-col items-start justify-center w-1/2 h-full gap-6 ml-24'>
          <h2 className='text-5xl font-bold text-white'>56 % alennus</h2>
          <p className='text-lg text-white'>Talvitarjouksia televisioista</p>
          <button className='px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-300'>
            Osta nyt
          </button>
        </div>
      </div>
      <div
        className={`absolute duration-500 transition-opacity ease-in-out w-full h-full bg-center opacity-0 bg-cover ${
          carousel === 2 ? 'opacity-100 block' : ''
        }`}
        style={{
          backgroundImage:
            'url("https://images.samsung.com/is/image/samsung/assets/fi/home/UX_KV_PC_1440x600_FI-1.png?imwidth=768")',
        }}
      >
        <div className='flex flex-col items-start justify-center w-1/2 h-full gap-6 ml-24'>
          <h2
            className='text-5xl font-bold text-white'
            dangerouslySetInnerHTML={{
              __html:
                'Ainutlaatuinen tuote,<br>joka sisältyy Bespoke<br>Jet Plus* oston mukana',
            }}
          />
          <p className='text-lg text-white'>Valitse Tab S9 FE tai Jet Bot</p>
          <button className='px-5 py-2 mt-4 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-300'>
            Osta nyt
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
