import React, { useState } from 'react'
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p style={{
        display: 'inline',
        width: '100%',
      }}>
        {isReadMore ? text.slice(0, 500) : text}
        <span onClick={toggleReadMore} style={{
            color: 'var(--raw-seinna)',
            cursor: 'pointer'
        }}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
function ReadMoreTextComponent({text}) {
    const textStyle = {
        textAlign:'justify'
      }
  return (
    <div>

      { text.length <= 500 ? <p style={textStyle}>{text}</p> :  <p style={textStyle}> <ReadMore>{text}</ReadMore>
      </p>}
    </div>
  )
}

export default ReadMoreTextComponent