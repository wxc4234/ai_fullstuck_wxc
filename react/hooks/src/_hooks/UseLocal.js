import { useEffect, useState } from "react"

export function useLocal(key, value) {
  const [msg, setMsg] = useState(value)
  useEffect(() => {
    console.log(msg);
    window.localStorage.setItem(key, msg)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg])
  return [msg, setMsg]
}