import {useEffect} from 'react'

export function useCustomEvent({typeArg, listener = () => {}}) {
  useEffect(() => {
    window.addEventListener(typeArg, listener)
    return () => {
      window.removeEventListener(typeArg, listener)
    }
  }, [])

  return {
    dispatchEvent: (detail) => {
      const event = new CustomEvent(typeArg, {
        detail,
      })
      window.dispatchEvent(event)
    },
  }
}
