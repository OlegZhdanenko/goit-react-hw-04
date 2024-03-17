
import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { SearchImage } from './imageApi';
import ImageGallary from './components/ImageGallery/ImageGallery';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


function App() {
  
  const [image, setImage] = useState([]);
  const[loader,setLoader] =useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [modalImg, setModalImg] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query==="") {
      return
    }
    async function getData () {
    try {
      setError(false)
      setLoader(true)
      const data = await SearchImage(query,page)
      setImage((prevData) => {
        return[ ...prevData,...data]
      })
      setLoader(false)
    } catch (e) {
      setError(true)
    } finally {
      setLoader(false)
    }
    }
    getData()
},[query,page])

  const searchImage =  (newImage) => {
    setQuery(newImage)
    setImage([])
    setPage(1)
  };
  
  const handlLoadMore = () => {
    setPage(page + 1)
  };
  function openModal(src, alt) {
    setModalImg({ src, alt });
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setModalImg(null);
  }
  
  return (
    <div >
      <main>
      <SearchBar onInput={searchImage} />
      {/* {loader && <Loader />} */}
      {error && <ErrorMessage/>}
      {image.length > 0 && <ImageGallary items={image} imageClick={openModal } />}
      {image.length > 0 && !loader&&<LoadMoreBtn onClick={handlLoadMore} />}
      {loader && <Loader />}
      {modalIsOpen&&<ImageModal  imgM={modalImg}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          contentLabel="Example Modal" />}
        </main>
    </div>
  )
}

export default App
