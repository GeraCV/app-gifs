import { useEffect, useState, useRef } from 'react'

const useNearScreen = ({ externalRef, once = true } = {}) => {

  const [show, setShow] = useState(false)
  const refObserve = useRef()


  const actualRef = externalRef ? externalRef.current : refObserve.current

  useEffect(() => {
    const showChange = (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting == true) {
        setShow(true)
      } else {
        !once && setShow(false)
      }
    }
    const observer = new IntersectionObserver(showChange, {
      rootMargin: '200px'
    })

    if (actualRef) { observer.observe(actualRef) }

  })

  return { show, refObserve }
}

export default useNearScreen