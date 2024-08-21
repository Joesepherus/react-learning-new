import React, {forwardRef} from 'react'

const SearchInput = forwardRef((props,ref) => {
  return <input placeholder="Looking for something?" ref={ref}/>;
});

export default SearchInput;
