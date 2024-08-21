import { useRef } from 'react';

export default function Scroll() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function renderLotsOfBr() {
    let br = []
    for(let i=0; i < 50; i++) {
        br.push(<br />)
    }
    return br
  }

  return (
    <>
      <nav style={{position: 'sticky', top: 0, margin:'auto', width: 'fit-content'}}>
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://loremflickr.com/320/240/cat?lock=1"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          {renderLotsOfBr()}
          <li>
            <img
              src="https://loremflickr.com/320/240/cat?lock=2"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          {renderLotsOfBr()}
          <li>
            <img
              src="https://loremflickr.com/320/240/cat?lock=3"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
