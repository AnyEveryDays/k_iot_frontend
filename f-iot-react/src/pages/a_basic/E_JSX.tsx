import React from 'react'

// https://cdn.pixabay.com/photo/2017/01/21/18/15/cat-1997911_1280.jpg
const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  description: '2017/01/21/18/15/',
  imageId: 'cat-1997911_1280.jpg',
  name: '터키쉬앙고라',
  imageTheme: {
    width: '200px',
    height: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}

function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img src={cat.catUrl + cat.description + cat.imageId} alt={cat.name} 
        width={cat.imageTheme.width}
        height={cat.imageTheme.height}
        />

      </div>
    </>
    

  )
}

export default E_JSX