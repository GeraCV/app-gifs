import { useEffect, useState, useRef } from 'react'

const useNearScreen = () => {

  const [show, setShow] = useState(false)
  const refObserve = useRef()

  useEffect(() => {
    const showChange = (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting == true) {
        setShow(true)
      }
    }
    const observer = new IntersectionObserver(showChange, {
      rootMargin: '200px'
    })
    console.log(refObserve.current)

    observer.observe(refObserve.current)

  }, [])

  return { show, refObserve }
}

export default useNearScreen