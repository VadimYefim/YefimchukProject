import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHighLights } from '../store/mainPage.selectors';

const Highlights = () => {
  const [listOfTheHighlights, setListOfTheHighlights] = useState<any>(
    JSON.parse(localStorage.getItem('listOfTheHighlights') || '[]') || []
  );

  const showHighlights = () => {
    setListOfTheHighlights(
      JSON.parse(localStorage?.getItem('listOfTheHighlights') || '[]')
    );
  };

  return (
    <div className="highlights-wrapper">
      <div>
        Select text - Right mouse button - Push on show highlights button
      </div>

      <button onClick={showHighlights}>showHighlights</button>
      {listOfTheHighlights?.map((item: any, index: any) => {
        return (
          <div className="highlights-item">
            <div>{item?.pageURL}</div>
            <div>{item?.selectionText}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
